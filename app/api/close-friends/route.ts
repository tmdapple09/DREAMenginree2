import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';



export async function GET(_req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const db = supabase as SupabaseClient;
  const { data: friendRows, error } = await db
    .from('close_friends')
    .select('friend_id, added_at')
    .eq('user_id', user.id)
    .order('added_at', { ascending: false });

  if (error) return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });

  const ids = (friendRows ?? [])
    .map((row: { friend_id?: string | null }) => row.friend_id)
    .filter((id: string | null | undefined): id is string => typeof id === 'string' && id.length > 0);

  if (ids.length === 0) return NextResponse.json({ close_friends: [] });

  const { data: profiles, error: profilesError } = await db
    .from('profiles')
    .select('id, handle, display_name, avatar_url')
    .in('id', ids);

  if (profilesError) return NextResponse.json({ error: toErrorMessage(profilesError) }, { status: 500 });

  const profileById = new Map(
    (profiles ?? []).map((profile: { id: string }) => [profile.id, profile]),
  );

  return NextResponse.json({
    close_friends: (friendRows ?? []).map((row: { friend_id: string; added_at: string }) => ({
      ...row,
      profiles: profileById.get(row.friend_id) ?? null,
    })),
  });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const { friend_id } = body ?? {};

  if (!friend_id || typeof friend_id !== 'string') {
    return NextResponse.json({ error: 'friend_id is required' }, { status: 400 });
  }

  if (friend_id === user.id) {
    return NextResponse.json({ error: 'Cannot add yourself to close friends' }, { status: 400 });
  }

  const db = supabase as SupabaseClient;
  const { data: friendProfile, error: friendError } = await db
    .from('profiles')
    .select('id')
    .eq('id', friend_id)
    .maybeSingle();

  if (friendError || !friendProfile) {
    return NextResponse.json({ error: 'Friend profile not found' }, { status: 404 });
  }

  const { error } = await db
    .from('close_friends')
    .upsert({ user_id: user.id, friend_id, added_at: new Date().toISOString() });

  if (error) return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  return NextResponse.json({ ok: true, added: true }, { status: 201 });
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const friend_id = searchParams.get('friend_id');

  if (!friend_id) {
    return NextResponse.json({ error: 'friend_id query param required' }, { status: 400 });
  }

  const { error } = await (supabase as SupabaseClient)
    .from('close_friends')
    .delete()
    .eq('user_id', user.id)
    .eq('friend_id', friend_id);

  if (error) return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  return NextResponse.json({ ok: true, removed: true });
}
