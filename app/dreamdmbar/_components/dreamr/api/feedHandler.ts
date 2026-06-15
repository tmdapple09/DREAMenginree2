import {
  filterByCloseFriends,
  loadVisibilityCircle,
} from '@/dreamr/runtime/closeFriendsVisibility';
import { deriveNextCursor, parseFeedParams } from '@/dreamr/runtime/feedCursor';
import { getPrimaryPostMediaUrl, type PostMediaShape } from '@/engins/contentengin/media/postMedia';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { createServerClient } from '@/supabase/server/serverClient';
import { toErrorMessage } from '@/utils/index';
import { type NextRequest, NextResponse } from 'next/server';
import { rankFeed, type ScoredPost } from '../algorithms/dreamrAlgorithm';

/**
 * app/dreamdmbar/_components/dreamr/api/feedHandler.ts
 *
 * Shared DreamR feed handler logic.
 */

const FALLBACK_CREATED_AT = '1970-01-01T00:00:00.000Z';

interface DreamRFeedProfile {
  handle: string | null;
  display_name: string | null;
  avatar_url: string | null;
}

interface DreamRFeedRow extends PostMediaShape {
  id: string;
  user_id: string | null;
  content: string | null;
  visibility: string | null;
  post_visibility: string | null;
  created_at: string | null;
  view_count: number | null;
  likes_count: number | null;
  comments_count: number | null;
  profiles: DreamRFeedProfile | null;
}

function normalizeCreatedAt(value: string | null | undefined): string {
  if (!value) return FALLBACK_CREATED_AT;
  return Number.isFinite(Date.parse(value)) ? value : FALLBACK_CREATED_AT;
}

function normalizeCount(value: number | null | undefined): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : 0;
}

function toScoredPost(row: DreamRFeedRow): ScoredPost {
  return {
    id: row.id,
    content: row.content ?? '',
    media_url: getPrimaryPostMediaUrl(row),
    created_at: normalizeCreatedAt(row.created_at),
    views_count: normalizeCount(row.view_count),
    likes_count: normalizeCount(row.likes_count),
    comments_count: normalizeCount(row.comments_count),
    source: 'post',
    provider: 'dreamengin',
    profiles: {
      handle: row.profiles?.handle ?? '',
      display_name: row.profiles?.display_name ?? null,
      avatar_url: row.profiles?.avatar_url ?? null,
    },
  };
}

export async function dreamrFeedHandler(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const params = parseFeedParams(searchParams);

  let query = supabase
    .from('app_posts')
    .select(
      'id, user_id, content, visibility, post_visibility, media_url, media_urls, media_json, created_at, view_count, likes_count, comments_count, profiles!app_posts_user_id_fkey(handle, display_name, avatar_url)',
    )
    .eq('visibility', 'public')
    .order('created_at', { ascending: false });

  if (params.before) {
    query = query.lt('created_at', params.before).limit(params.fetchLimit);
  } else {
    query = query.range(params.offset, params.offset + params.fetchLimit - 1);
  }

  const { data: rows, error } = await query;

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  const fetched = (rows ?? []) as DreamRFeedRow[];
  const circle = await loadVisibilityCircle(user.id);
  const visible = filterByCloseFriends(fetched, user.id, circle);
  const fresh =
    params.seen.size > 0
      ? visible.filter((row) => !params.seen.has(row.id))
      : visible;
  const posts = fresh.map(toScoredPost);
  const ranked = rankFeed(posts).slice(0, params.limit);
  const nextCursor = deriveNextCursor(ranked, fetched.length, params.fetchLimit);

  return NextResponse.json(
    { posts: ranked, count: ranked.length, nextCursor },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
