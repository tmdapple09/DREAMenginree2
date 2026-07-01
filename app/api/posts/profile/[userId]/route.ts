import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { type NextRequest, NextResponse } from 'next/server';



export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
) {
  const { userId } = await params;
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const isOwner = user.id === userId;
  let isCloseFriend = false;

  if (!isOwner) {
    const { data: cfRow } = await (supabase as SupabaseClient)
      .from('close_friends')
      .select('user_id')
      .eq('user_id', userId)
      .eq('friend_id', user.id)
      .maybeSingle();
    isCloseFriend = !!cfRow;
  }

  const { data: savedRows } = await (supabase as SupabaseClient)
    .from('saved_posts')
    .select('post_id, saved_at, app_posts!inner(*, profiles!inner(id, handle, display_name, avatar_url))')
    .eq('user_id', userId)
    .order('saved_at', { ascending: false })
    .limit(25);

  const savedSet = new Set<string>();
  const savedPosts: unknown[] = [];

  for (const row of savedRows ?? []) {
    interface PostJoin { id: string; content?: string; created_at?: string; post_visibility?: string; [key: string]: unknown; }
    const postRaw = row.app_posts;
    const post = (Array.isArray(postRaw) ? postRaw[0] : postRaw) as PostJoin | null;
    if (!post) continue;
    
    if (post.post_visibility === 'close_friends' && !isOwner && !isCloseFriend) continue;
    savedSet.add(String(post.id));
    savedPosts.push({ ...post, is_saved: true });
  }

  const ephemeralSlots = Math.max(0, 50 - savedPosts.length);
  const ephemeralPosts: unknown[] = [];

  if (ephemeralSlots > 0) {
    const { data: ephemeralRows } = await (supabase as SupabaseClient)
      .from('app_posts')
      .select('*, profiles!inner(id, handle, display_name, avatar_url)')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(ephemeralSlots + savedSet.size); 

    for (const post of ephemeralRows ?? []) {
      if (savedSet.has(post.id)) continue;
      if (post.post_visibility === 'close_friends' && !isOwner && !isCloseFriend) continue;
      ephemeralPosts.push({ ...post, is_saved: false });
      if (ephemeralPosts.length >= ephemeralSlots) break;
    }
  }

  const posts = [...savedPosts, ...ephemeralPosts];

  return NextResponse.json({ posts, saved_count: savedPosts.length });
}
