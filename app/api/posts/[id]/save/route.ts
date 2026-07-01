import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';



const MAX_SAVED_POSTS = 25;

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

  
  const { data: post } = await db
    .from('app_posts')
    .select('id')
    .eq('id', postId)
    .maybeSingle();

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  
  const { data: existing } = await db
    .from('saved_posts')
    .select('id')
    .eq('user_id', user.id)
    .eq('post_id', postId)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({ ok: true, already_saved: true });
  }

  const { count: savedCount } = await db
    .from('saved_posts')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', user.id);

  if (typeof savedCount === 'number' && savedCount >= MAX_SAVED_POSTS) {
    
    const { data: oldest } = await db
      .from('saved_posts')
      .select('id')
      .eq('user_id', user.id)
      .order('saved_at', { ascending: true })
      .limit(1)
      .single();

    if (oldest) {
      await db.from('saved_posts').delete().eq('id', oldest.id);
    }
  }

  const { error: insertErr } = await db
    .from('saved_posts')
    .insert({ user_id: user.id, post_id: postId, saved_at: new Date().toISOString() });

  if (insertErr) {
    return NextResponse.json({ error: insertErr.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, saved: true }, { status: 201 });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: postId } = await params;
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await (supabase as SupabaseClient)
    .from('saved_posts')
    .delete()
    .eq('user_id', user.id)
    .eq('post_id', postId);

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ ok: true, unsaved: true });
}
