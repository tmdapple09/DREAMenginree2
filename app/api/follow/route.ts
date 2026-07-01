import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';

type Profile = {
  id: string;
  handle: string | null;
  display_name: string | null;
  avatar_url: string | null;
};

type FollowersRow = { follower: Profile | null };
type FollowingRow = { following: Profile | null };


export async function GET(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const targetId = searchParams.get('target_id');
  const type = searchParams.get('type'); 

  if (type === 'check' && targetId) {
    
    const { data: follow } = await supabase
      .from('follows')
      .select('follower_id, following_id')
      .eq('follower_id', user.id)
      .eq('following_id', targetId)
      .maybeSingle();

    return NextResponse.json({ isFollowing: !!follow });
  }

  const userId = targetId || user.id;

  if (type === 'followers') {
    const { data: followers, error } = await supabase
      .from('follows')
      .select(`
        follower:profiles!follower_id(id, handle, display_name, avatar_url)
      `)
      .eq('following_id', userId);
      
      
      
      

    if (error) {
      return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
    }

    return NextResponse.json({
      followers: ((followers as unknown as FollowersRow[]) ?? []).flatMap((r) =>
        r.follower ? [r.follower] : []
      ),
    });
  }

  if (type === 'following') {
    const { data: following, error } = await supabase
      .from('follows')
      .select(`
        following:profiles!following_id(id, handle, display_name, avatar_url)
      `)
      .eq('follower_id', userId);
      

    if (error) {
      return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
    }

    return NextResponse.json({
      following: ((following as unknown as FollowingRow[]) ?? []).flatMap((r) =>
        r.following ? [r.following] : []
      ),
    });
  }

  
  const [{ count: followersCount }, { count: followingCount }] = await Promise.all([
    supabase
      .from('follows')
      .select('*', { count: 'exact', head: true })
      .eq('following_id', userId),
    supabase
      .from('follows')
      .select('*', { count: 'exact', head: true })
      .eq('follower_id', userId),
  ]);

  return NextResponse.json({
    followers_count: followersCount || 0,
    following_count: followingCount || 0,
  });
}


export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => ({})) as { target_id?: string };
  const { target_id } = body;

  if (!target_id) {
    return NextResponse.json({ error: 'Target user ID is required' }, { status: 400 });
  }

  if (target_id === user.id) {
    return NextResponse.json({ error: 'Cannot follow yourself' }, { status: 400 });
  }

  
  const { data: existing } = await supabase
    .from('follows')
    .select('follower_id, following_id')
    .eq('follower_id', user.id)
    .eq('following_id', target_id)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({ error: 'Already following' }, { status: 400 });
  }

  const { error } = await supabase
    .from('follows')
    .insert({
      follower_id: user.id,
      following_id: target_id,
    });

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  
  
  
  const { data: followerProfile } = await supabase
    .from('profiles')
    .select('handle, display_name')
    .eq('id', user.id)
    .single();

  await (supabase as SupabaseClient).from('notifications').insert({
    user_id: target_id,
    type: 'follow',
    message: `${followerProfile?.display_name ?? followerProfile?.handle ?? 'Someone'} started following you.`,
    data: {
      actor_handle:       followerProfile?.handle       ?? user.id,
      actor_display_name: followerProfile?.display_name ?? followerProfile?.handle ?? 'Someone',
      follower_id:        user.id,
    },
  });

  return NextResponse.json({ success: true }, { status: 201 });
}


export async function DELETE(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const targetId = searchParams.get('target_id');

  if (!targetId) {
    return NextResponse.json({ error: 'Target user ID is required' }, { status: 400 });
  }

  const { error } = await supabase
    .from('follows')
    .delete()
    .eq('follower_id', user.id)
    .eq('following_id', targetId);

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
