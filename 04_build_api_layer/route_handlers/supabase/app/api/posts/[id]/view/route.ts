import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/posts/[id]/view
 *
 * Canonical view tracking for the current app schema.
 *
 * The generated Supabase types expose app_posts.view_count, but do not expose
 * the older post_views table. This endpoint therefore updates the root post's
 * view_count directly instead of writing to a missing ledger table.
 */
export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: postId } = await params;
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = supabase as SupabaseClient;

  const { data: viewedPost, error: postErr } = await db
    .from('app_posts')
    .select('id, user_id, original_post_id, view_count')
    .eq('id', postId)
    .single();

  if (postErr || !viewedPost) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  let rootPostId: string = viewedPost.original_post_id ?? viewedPost.id;

  if (viewedPost.original_post_id) {
    let current = viewedPost;
    let depth = 0;

    while (current.original_post_id && depth < 10) {
      const { data: parent } = await db
        .from('app_posts')
        .select('id, user_id, original_post_id, view_count')
        .eq('id', current.original_post_id)
        .single();

      if (!parent) break;
      current = parent;
      depth += 1;
    }

    rootPostId = current.id;
  }

  const { data: rootPost } = await db
    .from('app_posts')
    .select('id, user_id, view_count')
    .eq('id', rootPostId)
    .single();

  if (!rootPost) {
    return NextResponse.json({ error: 'Root post not found' }, { status: 404 });
  }

  const originalAuthorId: string = rootPost.user_id;
  const sharerId: string = viewedPost.user_id;

  if (user.id === originalAuthorId || user.id === sharerId) {
    return NextResponse.json({ ok: true, counted: false, reason: 'excluded_viewer' });
  }

  const nextViewCount = (rootPost.view_count ?? 0) + 1;

  const { error: updateError } = await db
    .from('app_posts')
    .update({ view_count: nextViewCount })
    .eq('id', rootPostId);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    counted: true,
    root_post_id: rootPostId,
    view_count: nextViewCount,
  });
}
