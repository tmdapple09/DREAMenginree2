import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';



export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse> {
  const { id } = await params;

  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  

  const db = supabase as SupabaseClient;
  const { data: post, error: fetchError } = await db
    .from('app_posts')
    .select('id, user_id')
    .eq('id', id)
    .single();

  if (fetchError || !post) {
    
    
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  if (post.user_id !== user.id) {
    
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  const { error: deleteError } = await db
    .from('app_posts')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id); 

  if (deleteError) {
    return NextResponse.json({ error: deleteError.message }, { status: 500 });
  }

  
  return new NextResponse(null, { status: 204 });
}
