import { scanContent } from '@/engine/safety/child-safety/childSafetyDetector';
import { reportChildSafetyIncident } from '@/engine/safety/child-safety/ncmecReporter';
import { scanMediaUrlsForChildSafety } from '@/engine/safety/child-safety/scanMediaUrls';
import { getPrimaryPostMediaUrl } from '@/engins/contentengin/media/postMedia';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { Database } from '@/types/supabase';
import type { SupabaseClient } from '@supabase/supabase-js';
import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';

type PostRow = Record<string, unknown> & {
  id: string;
  user_id: string;
  post_visibility?: string | null;
};

function normalizePostMedia<T extends Record<string, unknown>>(post: T): T & { media_url: string | null } {
  return {
    ...post,
    media_url: getPrimaryPostMediaUrl(post),
  };
}

function normalizeVisibility(input: unknown): 'public' | 'private' | 'followers' {
  if (input === 'private') return 'private';
  if (input === 'followers') return 'followers';
  return 'public';
}

function normalizePostVisibility(input: unknown, visibility: string): 'public' | 'close_friends' {
  if (input === 'close_friends' || visibility === 'close_friends') return 'close_friends';
  return 'public';
}

async function loadCloseFriendPosterIds(supabase: SupabaseClient, viewerId: string): Promise<Set<string>> {
  const { data } = await supabase
    .from('close_friends')
    .select('user_id')
    .eq('friend_id', viewerId);

  return new Set((data ?? []).map((row: { user_id: string }) => row.user_id));
}

function filterVisiblePosts(posts: PostRow[], viewerId: string, closeFriendPosters: Set<string>): PostRow[] {
  return posts.filter((post) => {
    if (post.user_id === viewerId) return true;
    if (post.post_visibility === 'close_friends') return closeFriendPosters.has(post.user_id);
    return true;
  });
}

// GET - Fetch posts for feed
// Query params:
//   feed   — 'following' to show only posts from users the caller follows
//   sort   — 'trending' to order by likes_count DESC (fallback: created_at DESC)
//   limit  — number of posts to return (default 20, max 500 for following, max 50 otherwise)
//   offset — pagination offset
export async function GET(req: NextRequest): Promise<NextResponse> {
  const supabase = (await createServerClient()) as SupabaseClient<Database>;
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const feed = searchParams.get('feed');
  const sort = searchParams.get('sort');
  const closeFriendPosters = await loadCloseFriendPosterIds(supabase as SupabaseClient, user.id);

  if (feed === 'following') {
    const requestedLimit = parseInt(searchParams.get('limit') ?? '20', 10);
    const limit = Math.min(Number.isFinite(requestedLimit) ? requestedLimit : 20, 500);
    const offset = parseInt(searchParams.get('offset') ?? '0', 10);

    const { data: followRows, error: followsError } = await supabase
      .from('follows')
      .select('following_id')
      .eq('follower_id', user.id);

    const followedIds: string[] = followsError
      ? []
      : (followRows ?? []).map((r: { following_id: string }) => r.following_id);
    followedIds.push(user.id);

    const { data: rawPosts, error } = await (supabase as SupabaseClient)
      .from('app_posts')
      .select('*, profiles!app_posts_user_id_fkey(id, handle, display_name, avatar_url)')
      .in('user_id', followedIds)
      .or(`visibility.in.(public,followers),user_id.eq.${user.id}`)
      .order('created_at', { ascending: false })
      .range(offset, offset + 499);

    if (error) return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });

    const posts = filterVisiblePosts((rawPosts ?? []) as PostRow[], user.id, closeFriendPosters).slice(0, limit);
    return NextResponse.json({ posts: posts.map((post) => normalizePostMedia(post)), total_cap: 500 });
  }

  const limit = Math.min(parseInt(searchParams.get('limit') ?? '20', 10), 50);
  const offset = parseInt(searchParams.get('offset') ?? '0', 10);

  let query = (supabase as SupabaseClient)
    .from('app_posts')
    .select('*, profiles!app_posts_user_id_fkey(id, handle, display_name, avatar_url)')
    .or(`visibility.eq.public,user_id.eq.${user.id}`);

  if (sort === 'trending') {
    query = query.order('likes_count', { ascending: false });
  }

  const { data: rawPosts, error } = await query
    .order('created_at', { ascending: false })
    .range(offset, offset + limit * 3 - 1);

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  const posts = filterVisiblePosts((rawPosts ?? []) as PostRow[], user.id, closeFriendPosters).slice(0, limit);
  return NextResponse.json({ posts: posts.map((post) => normalizePostMedia(post)) });
}

// POST - Create a new post
export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = (await createServerClient()) as SupabaseClient<Database>;
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => ({})) as {
    content?: string;
    visibility?: string;
    media_urls?: string[];
    media_json?: unknown;
    post_visibility?: string;
    original_post_id?: string;
  };

  const content = body.content;
  const visibility = normalizeVisibility(body.visibility);
  const post_visibility = normalizePostVisibility(body.post_visibility, String(body.visibility ?? ''));
  const media_urls = Array.isArray(body.media_urls)
    ? body.media_urls.filter((url): url is string => typeof url === 'string' && url.trim().length > 0)
    : [];
  const original_post_id = body.original_post_id;

  if (!content || content.trim().length === 0) {
    return NextResponse.json({ error: 'Content is required' }, { status: 400 });
  }

  const isCloseFriendsPost = post_visibility === 'close_friends';
  const rateLimit = isCloseFriendsPost ? 50 : 10;
  const windowStart = new Date(Date.now() - 5 * 60 * 1000).toISOString();

  const { count: recentCount, error: rateError } = await (supabase as SupabaseClient)
    .from('app_posts')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', user.id)
    .eq('post_visibility', post_visibility)
    .gte('created_at', windowStart);

  if (!rateError && typeof recentCount === 'number' && recentCount >= rateLimit) {
    return NextResponse.json(
      { error: "You're posting too fast. Wait a moment." },
      { status: 429 },
    );
  }

  const childSafetyResult = scanContent({ text: content });
  if (childSafetyResult.flagged) {
    const contentHash = createHash('sha256').update(content).digest('hex');
    reportChildSafetyIncident({
      reportedUserId: user.id,
      ruleCode: childSafetyResult.rule_code!,
      detectionResult: childSafetyResult,
      surface: 'post',
      contentRef: `draft:${contentHash.slice(0, 16)}`,
      contentHash,
    }).catch((err: unknown) => console.error('[child-safety] post report error:', err));

    return NextResponse.json(
      { error: 'Content violates our child safety policy and has been blocked.' },
      { status: 451 },
    );
  }

  if (media_urls.length > 0) {
    const mediaSafetyResult = await scanMediaUrlsForChildSafety({ urls: media_urls, supabase });
    if (mediaSafetyResult.flagged) {
      reportChildSafetyIncident({
        reportedUserId: user.id,
        ruleCode: mediaSafetyResult.rule_code!,
        detectionResult: mediaSafetyResult,
        surface: 'post',
        contentRef: `media:${String(media_urls.length)}_files`,
      }).catch((err: unknown) => console.error('[child-safety] post media report error:', err));

      return NextResponse.json(
        { error: 'Attached media violates our child safety policy and has been blocked.' },
        { status: 451 },
      );
    }
  }

  const media_json = body.media_json && typeof body.media_json === 'object' ? body.media_json : null;

  const { data: post, error } = await (supabase as SupabaseClient)
    .from('app_posts')
    .insert({
      user_id: user.id,
      content: content.trim(),
      visibility: isCloseFriendsPost ? 'public' : visibility,
      media_urls,
      media_json,
      post_visibility,
      ...(original_post_id ? { original_post_id } : {}),
    })
    .select('*, profiles!app_posts_user_id_fkey(id, handle, display_name, avatar_url)')
    .single();

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ post: normalizePostMedia(post as Record<string, unknown>) }, { status: 201 });
}
