import { sortByVisibilityScore } from '@/dreamr/activity/visibility-score';
import { getPrimaryPostMediaUrl } from '@/engins/contentengin/media/postMedia';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';


























export interface UnifiedFeedEntry {
  id: string;
  source: 'connector' | 'post' | 'system';
  provider?: string;          
  author_handle?: string;
  author_name?: string;
  author_avatar?: string | null;
  content_text?: string;
  content_html?: string;
  media?: Array<{ url: string; type: 'image' | 'video' | 'audio' }>;
  permalink?: string;
  published_at: string;
  created_at: string;
  likes_count?: number;
  comments_count?: number;
  views_count?: number;        
  visibility_score?: number;   
  
  raw?: Record<string, unknown>;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();

  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const limit    = Math.min(parseInt(searchParams.get('limit') ?? '30', 10), 100);
  const before   = searchParams.get('before');   
  const provider = searchParams.get('provider'); 
  const sort     = searchParams.get('sort') ?? 'activity';

  const entries: UnifiedFeedEntry[] = [];

  {
    const db = supabase as SupabaseClient;
    let q = db
      .from('connector_feed_items')
      .select('id, provider, payload, published_at, created_at')
      .eq('user_id', user.id)
      .order('published_at', { ascending: false })
      .limit(limit);

    if (before) q = q.lt('published_at', before);
    if (provider) q = q.eq('provider', provider);

    const { data: items } = await q;

    if (items) {
      for (const item of items as Array<{
        id: string;
        provider: string;
        payload: Record<string, unknown> | null;
        published_at: string;
        created_at: string;
      }>) {
        const p = item.payload ?? {};
        const itemProvider = item.provider || (p.provider as string | undefined) || 'connector';
        const firstMedia = Array.isArray(p.media) ? p.media[0] as { url?: string; type?: 'image' | 'video' | 'audio' } | undefined : undefined;
        entries.push({
          id:            item.id,
          source:        'connector',
          provider:      itemProvider,
          author_handle: p.author_handle as string | undefined,
          author_name:   p.author_name   as string | undefined,
          author_avatar: p.author_avatar as string | null | undefined,
          content_text:  (p.content_text ?? p.text ?? p.title) as string | undefined,
          content_html:  p.content_html  as string | undefined,
          media:         (p.media as UnifiedFeedEntry['media']) ?? (firstMedia?.url ? [{ url: firstMedia.url, type: firstMedia.type ?? 'image' }] : []),
          permalink:     p.permalink     as string | undefined,
          published_at:  item.published_at,
          created_at:    item.created_at,
          raw:           p,
        });
      }
    }
  }

  {
    

    const db = supabase as SupabaseClient;
    const { data: follows, error: followsError } = await supabase
      .from('follows')
      .select('following_id')
      .eq('follower_id', user.id);

    const followedIds = followsError
      ? []
      : (follows ?? []).map((f: { following_id: string }) => f.following_id);
    const authorIds = [user.id, ...followedIds];

    const { data: closeFriendRows } = await db
      .from('close_friends')
      .select('user_id')
      .eq('friend_id', user.id);
    const closeFriendAuthorIds = new Set(
      (closeFriendRows ?? []).map((row: { user_id: string }) => row.user_id),
    );

    let q = db
        .from('app_posts')
        .select(
          'id, user_id, content, visibility, post_visibility, media_url, media_urls, media_json, created_at, view_count, likes_count, comments_count, ' +
          'profiles!inner(handle, display_name, avatar_url)'
        )
      .in('user_id', authorIds)
      .or(`visibility.in.(public,followers),user_id.eq.${user.id}`)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (before) q = q.lt('created_at', before);
    if (sort === 'trending') q = q.order('likes_count', { ascending: false });

    const { data: posts } = await q;

    interface AppPostRow {
      id: string;
      user_id: string;
      content?: string;
      post_visibility?: string | null;
      created_at: string;
      likes_count?: number;
      view_count?: number;
      comments_count?: number;
      profiles?: {
        handle?: string;
        display_name?: string | null;
        avatar_url?: string | null;
      } | null;
    }
    if (posts) {
      for (const post of posts) {

        const p = (post as unknown) as AppPostRow;
        if (
          p.post_visibility === 'close_friends' &&
          p.user_id !== user.id &&
          !closeFriendAuthorIds.has(p.user_id)
        ) {
          continue;
        }

        const profile = p.profiles ?? {};

        entries.push({
          id:            p.id,
          source:        'post',
          provider:      'dreamengin',
          author_handle: profile.handle,
          author_name:   profile.display_name ?? profile.handle,
          author_avatar: profile.avatar_url ?? null,
          content_text:  p.content,
          media:         getPrimaryPostMediaUrl((p as unknown) as Record<string, unknown>) ? [{ url: getPrimaryPostMediaUrl((p as unknown) as Record<string, unknown>)!, type: 'image' as const }] : [],
          published_at:  p.created_at,
          created_at:    p.created_at,
          likes_count:   p.likes_count ?? 0,
          comments_count: p.comments_count ?? 0,
          views_count:   p.view_count ?? 0,  
        });
      }
    }
  }

  
  if (sort === 'activity') {
    
    const rankedEntries = await sortByVisibilityScore(entries);
    const page = rankedEntries.slice(0, limit);

    return NextResponse.json(
      { feed: page, count: page.length },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  }

  
  entries.sort((a, b) => {
    if (sort === 'trending') {
      
      const aLikes = a.likes_count ?? 0;
      const bLikes = b.likes_count ?? 0;
      if (bLikes !== aLikes) return bLikes - aLikes;
    }
    return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
  });

  const page = entries.slice(0, limit);

  return NextResponse.json(
    { feed: page, count: page.length },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
