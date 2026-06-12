import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: postId } = await params;
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data: post } = await supabase
    .from('app_posts')
    .select('id')
    .eq('id', postId)
    .maybeSingle();

  if (!post) return NextResponse.json({ error: 'Post not found' }, { status: 404 });

  return NextResponse.json({
    ok: true,
    saved: false,
    disabled: true,
    reason: 'saved_posts_table_not_in_current_schema',
  });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: postId } = await params;
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  return NextResponse.json({
    ok: true,
    unsaved: false,
    post_id: postId,
    disabled: true,
    reason: 'saved_posts_table_not_in_current_schema',
  });
}
