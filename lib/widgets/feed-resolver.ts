import { createServerClient } from '@/lib/supabase/server';
import {
    FeedScope,
    HostKind,
    HostResolvedStatus,
    type FeedHostConfig,
    type FeedItemSummary,
    type HostResolved,
} from '@/types/widget-system-v2';
import { toErrorMessage } from '@/lib/utils';

interface FeedItemRow {
  id: string;
  feed_widget_id: string;
  source_widget_id: string;
  title?: string | null;
  preview?: Record<string, unknown> | null;
  created_at: string;
}

export async function resolveFeedHost(
  ownerId: string,
  hostConfig: FeedHostConfig
): Promise<HostResolved> {
  const supabase = await createServerClient();

  try {
    const targetUserId =
      hostConfig.scope === FeedScope.SELF ? ownerId : hostConfig.target_user_id;

    if (!targetUserId) {
      return {
        kind: HostKind.HOST_FEED_VIEW,
        status: HostResolvedStatus.ERROR,
        error_message: 'Invalid configuration: target_user_id required for FOLLOW scope',
      };
    }

    const hasPermission = await verifyScopePermissions(supabase, ownerId, hostConfig);
    if (!hasPermission) {
      return {
        kind: HostKind.HOST_FEED_VIEW,
        status: HostResolvedStatus.ERROR,
        error_message: 'Access denied for this feed scope',
      };
    }

    const { data: feedItems, error } = await supabase
      .from('feed_items')
      .select('id, feed_widget_id, source_widget_id, title, preview, created_at')
      .eq('feed_widget_id', `user:${targetUserId}`)
      .order('created_at', { ascending: false })
      .limit(hostConfig.limit)
      .returns<FeedItemRow[]>();

    if (error) {
      console.error('Feed resolver error:', error);
      return {
        kind: HostKind.HOST_FEED_VIEW,
        status: HostResolvedStatus.ERROR,
        error_message: toErrorMessage(error),
      };
    }

    const requestedTags = Array.isArray(hostConfig.filters.tags) ? hostConfig.filters.tags : [];
    const requestedProjectId = hostConfig.filters.project_id;

    const filteredItems = (feedItems ?? []).filter((item) => {
      const preview = item.preview ?? {};
      if (requestedProjectId && preview.project_id !== requestedProjectId) return false;
      if (requestedTags.length > 0) {
        const tags = Array.isArray(preview.tags) ? preview.tags : [];
        return requestedTags.every((tag) => tags.includes(tag));
      }
      return true;
    });

    const items: FeedItemSummary[] = filteredItems.map((item) => {
      const preview = item.preview ?? {};
      return {
        item_id: item.id,
        author_id: String(preview.user_id ?? item.feed_widget_id.replace(/^user:/, '')),
        created_at: item.created_at,
        text_preview: String(preview.content_text ?? preview.text ?? item.title ?? ''),
        media_preview_url: extractMediaPreviewUrl(preview),
        engagement_counts: { likes: 0, comments: 0, shares: 0 },
        visibility: normalizeVisibility(preview.visibility),
      };
    });

    return {
      kind: HostKind.HOST_FEED_VIEW,
      status: HostResolvedStatus.OK,
      items,
      cursor: items.length > 0 ? items[items.length - 1].created_at : null,
      etag: generateETag(items),
      updated_at: new Date().toISOString(),
    };
  } catch (error: unknown) {
    console.error('Feed resolver unexpected error:', error);
    return {
      kind: HostKind.HOST_FEED_VIEW,
      status: HostResolvedStatus.ERROR,
      error_message: error instanceof Error ? toErrorMessage(error) : 'Unknown error',
    };
  }
}

type SupabaseClient = Awaited<ReturnType<typeof createServerClient>>;

async function verifyScopePermissions(
  supabase: SupabaseClient,
  ownerId: string,
  hostConfig: FeedHostConfig
): Promise<boolean> {
  if (hostConfig.scope === FeedScope.SELF) return true;

  if (hostConfig.scope === FeedScope.FOLLOW) {
    const targetUserId = hostConfig.target_user_id;
    if (!targetUserId) return false;
    if (ownerId === targetUserId) return true;

    const { data, error } = await supabase
      .from('follows')
      .select('follower_id')
      .eq('follower_id', ownerId)
      .eq('following_id', targetUserId)
      .maybeSingle();

    return !error && Boolean(data);
  }

  return false;
}

function normalizeVisibility(value: unknown): 'public' | 'followers' | 'private' {
  return value === 'public' || value === 'followers' || value === 'private' ? value : 'public';
}

function extractMediaPreviewUrl(preview: unknown): string | undefined {
  if (!preview || typeof preview !== 'object') return undefined;
  const media = preview as any;

  if (typeof media.media_url === 'string') return media.media_url;
  if (Array.isArray(media.media) && media.media.length > 0 && typeof media.media[0]?.url === 'string') return media.media[0].url;
  if (Array.isArray(media.images) && media.images.length > 0) return media.images[0];
  if (Array.isArray(media.videos) && media.videos.length > 0) return media.videos[0];
  if (typeof media.thumbnail === 'string') return media.thumbnail;

  return undefined;
}

function generateETag(items: FeedItemSummary[]): string {
  if (items.length === 0) return '"empty"';
  const lastUpdated = items[0].created_at;
  return `"${items.length}-${lastUpdated}"`;
}

export async function resolvePublicAppPosts(limit: number = 20): Promise<HostResolved> {
  const supabase = await createServerClient();

  try {
    const { data: posts, error } = await supabase
      .from('app_posts')
      .select('id, user_id, content, media_json, visibility, created_at, likes_count, comments_count, view_count')
      .eq('visibility', 'public')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('resolvePublicAppPosts error:', error);
      return {
        kind: HostKind.HOST_FEED_VIEW,
        status: HostResolvedStatus.ERROR,
        error_message: toErrorMessage(error),
      };
    }

    const items: FeedItemSummary[] = (posts || []).map((post) => ({
      item_id: post.id as string,
      author_id: post.user_id as string,
      created_at: post.created_at as string,
      text_preview: (post.content as string | null) ?? '',
      media_preview_url: extractMediaPreviewUrl(post.media_json),
      engagement_counts: {
        likes: Number(post.likes_count ?? 0),
        comments: Number(post.comments_count ?? 0),
        shares: 0,
      },
      visibility: 'public' as const,
    }));

    return {
      kind: HostKind.HOST_FEED_VIEW,
      status: HostResolvedStatus.OK,
      items,
      cursor: items.length > 0 ? items[items.length - 1].created_at : null,
      etag: generateETag(items),
      updated_at: new Date().toISOString(),
    };
  } catch (err: unknown) {
    console.error('resolvePublicAppPosts unexpected error:', err);
    return {
      kind: HostKind.HOST_FEED_VIEW,
      status: HostResolvedStatus.ERROR,
      error_message: err instanceof Error ? toErrorMessage(err) : 'Unknown error',
    };
  }
}

export async function subscribeAppPostsRealtime(
  onUpdate: (items: FeedItemSummary[]) => void
): Promise<() => void> {
  const supabase = await createServerClient();

  const channel = supabase
    .channel('app_posts:public')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'app_posts',
        filter: 'visibility=eq.public',
      },
      async () => {
        const resolved = await resolvePublicAppPosts();
        if (resolved.status === HostResolvedStatus.OK && resolved.items) {
          if (typeof requestIdleCallback !== 'undefined') requestIdleCallback(() => onUpdate(resolved.items!));
          else setTimeout(() => onUpdate(resolved.items!), 0);
        }
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}

export function getFeedChannelKey(scope: FeedScope, userId: string): string {
  return scope === FeedScope.SELF ? `feed:SELF:${userId}` : `feed:FOLLOW:${userId}`;
}

export async function subscribeFeedRealtime(
  ownerId: string,
  hostConfig: FeedHostConfig,
  onUpdate: (items: FeedItemSummary[]) => void
): Promise<() => void> {
  const supabase = await createServerClient();
  const targetUserId = hostConfig.scope === FeedScope.SELF ? ownerId : hostConfig.target_user_id;
  if (!targetUserId) return () => {};

  const channel = supabase
    .channel(getFeedChannelKey(hostConfig.scope, targetUserId))
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'feed_items',
        filter: `feed_widget_id=eq.user:${targetUserId}`,
      },
      async () => {
        const resolved = await resolveFeedHost(ownerId, hostConfig);
        if (resolved.status === HostResolvedStatus.OK && resolved.items) {
          if (typeof requestIdleCallback !== 'undefined') requestIdleCallback(() => onUpdate(resolved.items!));
          else setTimeout(() => onUpdate(resolved.items!), 0);
        }
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}
