import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';

// Note: This API supports liking various content types: posts, music, projects
// The likes are stored in a generic likes table with content_type and content_id

// GET - Check if user has liked content or get like count
export async function GET(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  const { searchParams } = new URL(req.url);
  const contentType = searchParams.get('content_type'); // 'post', 'music', 'project'
  const contentId = searchParams.get('content_id');

  if (!contentType || !contentId) {
    return NextResponse.json({ error: 'content_type and content_id required' }, { status: 400 });
  }

  // Get like count (works without auth)
  const { count: likeCount } = await supabase
    .from('likes')
    .select('*', { count: 'exact', head: true })
    .eq('content_type', contentType)
    .eq('content_id', contentId);

  // Check if current user has liked (only if authenticated)
  let hasLiked = false;
  if (user) {
    const { data: like } = await supabase
      .from('likes')
      .select('user_id, content_type, content_id')
      .eq('user_id', user.id)
      .eq('content_type', contentType)
      .eq('content_id', contentId)
      .maybeSingle();

    hasLiked = !!like;
  }

  return NextResponse.json({
    like_count: likeCount || 0,
    has_liked: hasLiked,
  });
}

// POST - Like content
export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => ({})) as {
    content_type?: string;
    content_id?: string;
  };
  const { content_type, content_id } = body;

  if (!content_type || !content_id) {
    return NextResponse.json({ error: 'content_type and content_id required' }, { status: 400 });
  }

  // Check if already liked
  const { data: existing } = await supabase
    .from('likes')
    .select('user_id, content_type, content_id')
    .eq('user_id', user.id)
    .eq('content_type', content_type)
    .eq('content_id', content_id)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({ error: 'Already liked' }, { status: 400 });
  }

  // Create like
  const { error } = await supabase
    .from('likes')
    .insert({
      user_id: user.id,
      content_type,
      content_id,
      ...(content_type === 'post' ? { post_id: content_id } : {}),
    });

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  // Get new count
  const { count: newCount } = await supabase
    .from('likes')
    .select('*', { count: 'exact', head: true })
    .eq('content_type', content_type)
    .eq('content_id', content_id);

  if (content_type === 'post') {
    await supabase
      .from('app_posts')
      .update({ likes_count: newCount || 0 })
      .eq('id', content_id);
  }

  return NextResponse.json({
    success: true,
    like_count: newCount || 1,
    has_liked: true
  }, { status: 201 });
}

// DELETE - Unlike content
export async function DELETE(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const contentType = searchParams.get('content_type');
  const contentId = searchParams.get('content_id');

  if (!contentType || !contentId) {
    return NextResponse.json({ error: 'content_type and content_id required' }, { status: 400 });
  }

  const { error } = await supabase
    .from('likes')
    .delete()
    .eq('user_id', user.id)
    .eq('content_type', contentType)
    .eq('content_id', contentId);

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  // Get new count
  const { count: newCount } = await supabase
    .from('likes')
    .select('*', { count: 'exact', head: true })
    .eq('content_type', contentType)
    .eq('content_id', contentId);

  if (contentType === 'post') {
    await supabase
      .from('app_posts')
      .update({ likes_count: newCount || 0 })
      .eq('id', contentId);
  }

  return NextResponse.json({
    success: true,
    like_count: newCount || 0,
    has_liked: false
  });
}
