import { createServerClient } from '@/supabase/server/serverClient';
import {
    FeedScope,
    HostKind,
    HostResolvedStatus,
    type FeedHostConfig,
    type FeedItemSummary,
    type HostResolved,
} from '@/types/widget-system-v2';
import { toErrorMessage } from '@/utils/index';

interface AppPostFeedRow {
  id: string;
  user_id: string;
  content: string | null;
  media_json?: Record<string, unknown> | null;
  media_urls?: string[] | null;
  media_url?: string | null;
  visibility: string;
  post_visibility?: string | null;
  created_at: string;
}









export async function resolveFeedHost(
  ownerId: string,
  hostConfig: FeedHostConfig
): Promise<HostResolved> {
  const supabase = await createServerClient();

  try {
    
    const scopeValid = await verifyScopePermissions(supabase, ownerId, hostConfig);
    if (!scopeValid) {
      return {
        kind: HostKind.HOST_FEED_VIEW,
        status: HostResolvedStatus.FORBIDDEN,
        error_message: 'Access denied: follow relationship required',
      };
    }

    
    const targetUserId =
      hostConfig.scope === FeedScope.SELF ? ownerId : hostConfig.target_user_id;

    if (!targetUserId) {
      return {
        kind: HostKind.HOST_FEED_VIEW,
        status: HostResolvedStatus.ERROR,
        error_message: 'Invalid configuration: target_user_id required for FOLLOW scope',
      };
    }

    
    
    let query = (supabase as SupabaseClient)
      .from('app_posts')
      .select('id, user_id, content, media_url, media_urls, media_json, visibility, post_visibility, created_at')
      .eq('user_id', targetUserId)
      .order('created_at', { ascending: false })
      .limit(hostConfig.limit);

    if (hostConfig.scope !== FeedScope.SELF || targetUserId !== ownerId) {
      query = query.eq('visibility', 'public');
    }

    const { data: feedItems, error } = await query.returns<AppPostFeedRow[]>();

    if (error) {
      console.error('Feed resolver error:', error);
      return {
        kind: HostKind.HOST_FEED_VIEW,
        status: HostResolvedStatus.ERROR,
        error_message: toErrorMessage(error),
      };
    }

    const { data: closeFriendRows } = await (supabase as SupabaseClient)
      .from('close_friends')
      .select('user_id')
      .eq('friend_id', ownerId);
    const closeFriendAuthorIds = new Set(
      (closeFriendRows ?? []).map((row: { user_id: string }) => row.user_id),
    );

    const visibleItems = (feedItems || []).filter((item) => (
      item.post_visibility !== 'close_friends' ||
      item.user_id === ownerId ||
      closeFriendAuthorIds.has(item.user_id)
    ));

    const items: FeedItemSummary[] = visibleItems.map((item: AppPostFeedRow) => ({
      item_id: item.id,
      author_id: item.user_id,
      created_at: item.created_at,
      text_preview: item.content ?? '',
      media_preview_url: extractMediaPreviewUrl(item.media_json) ?? item.media_url ?? item.media_urls?.[0],
      engagement_counts: { likes: 0, comments: 0, shares: 0 },
      visibility: item.visibility as 'public' | 'followers' | 'private',
    }));

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
  
  if (hostConfig.scope === FeedScope.SELF) {
    return true;
  }

  
  if (hostConfig.scope === FeedScope.FOLLOW) {
    const targetUserId = hostConfig.target_user_id;

    if (!targetUserId) {
      return false;
    }

    
    if (ownerId === targetUserId) {
      return true;
    }

    
    const { data, error } = await supabase
      .from('follows')
      .select('follower_id')
      .eq('follower_id', ownerId)
      .eq('following_id', targetUserId)
      .single();

    if (error || !data) {
      return false;
    }

    return true;
  }

  return false;
}





function extractMediaPreviewUrl(mediaJson: unknown): string | undefined {
  if (!mediaJson || typeof mediaJson !== 'object') {
    return undefined;
  }

  const media = mediaJson as any;

  
  if (Array.isArray(media.images) && media.images.length > 0) {
    return media.images[0];
  }

  if (Array.isArray(media.videos) && media.videos.length > 0) {
    return media.videos[0];
  }

  if (typeof media.thumbnail === 'string') {
    return media.thumbnail;
  }

  return undefined;
}

function generateETag(items: FeedItemSummary[]): string {
  
  if (items.length === 0) {
    return `"empty-${Date.now()}"`;
  }

  const lastUpdated = items[0].created_at;
  return `"${items.length}-${lastUpdated}"`;
}






export async function resolvePublicAppPosts(limit: number = 20): Promise<HostResolved> {
  const supabase = await createServerClient();

  try {
    const { data: posts, error } = await supabase
      .from('app_posts')
      .select('id, user_id, content, media_json, visibility, created_at')
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
      engagement_counts: { likes: 0, comments: 0, shares: 0 },
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
        filter: "visibility=eq.public",
      },
      async () => {
        const resolved = await resolvePublicAppPosts();
        if (resolved.status === HostResolvedStatus.OK && resolved.items) {
          
          
          
          if (typeof requestIdleCallback !== 'undefined') {
            requestIdleCallback(() => onUpdate(resolved.items!));
          } else {
            setTimeout(() => onUpdate(resolved.items!), 0);
          }
        }
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}





export function getFeedChannelKey(scope: FeedScope, userId: string): string {
  return scope === FeedScope.SELF
    ? `feed:SELF:${userId}`
    : `feed:FOLLOW:${userId}`;
}

export async function subscribeFeedRealtime(
  ownerId: string,
  hostConfig: FeedHostConfig,
  onUpdate: (items: FeedItemSummary[]) => void
): Promise<() => void> {
  const supabase = await createServerClient();
  const targetUserId =
    hostConfig.scope === FeedScope.SELF ? ownerId : hostConfig.target_user_id;

  if (!targetUserId) {
    return () => {};
  }

  const channelKey = getFeedChannelKey(hostConfig.scope, targetUserId);

  const channel = supabase
    .channel(channelKey)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'app_posts',
        filter: `user_id=eq.${targetUserId}`, 
      },
      async () => {
        
        
        const resolved = await resolveFeedHost(ownerId, hostConfig);
        if (resolved.status === HostResolvedStatus.OK && resolved.items) {
          
          if (typeof requestIdleCallback !== 'undefined') {
            requestIdleCallback(() => onUpdate(resolved.items!));
          } else {
            setTimeout(() => onUpdate(resolved.items!), 0);
          }
        }
      }
    )
    .subscribe();

  
  return () => {
    supabase.removeChannel(channel);
  };
}
