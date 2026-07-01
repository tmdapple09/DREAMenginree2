import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { Database } from '@/types/supabase';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';

const PROFILE_SELECT = '*';
const SUPPORTED_PROFILE_UPDATE_FIELDS = new Set([
  'display_name',
  'handle',
  'bio',
  'avatar_url',
  'banner_url',
  'website',
  'location',
  'dream_config',
  'profile_dream_widgets',
  'widget_order',
]);

function normalizeHandle(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 32);
}


export async function GET(req: NextRequest): Promise<NextResponse> {
  const supabase = (await createServerClient()) as SupabaseClient<Database>;
  const user = await safeGetUser(supabase);

  const { searchParams } = new URL(req.url);
  const handle = searchParams.get('handle');
  const userId = searchParams.get('user_id');

  let query = supabase.from('profiles').select(PROFILE_SELECT);

  if (handle) {
    query = query.eq('handle', handle);
  } else if (userId) {
    query = query.eq('id', userId);
  } else if (user) {
    query = query.eq('id', user.id);
  } else {
    return NextResponse.json({ error: 'No profile identifier provided' }, { status: 400 });
  }

  const { data: profile, error } = await query.maybeSingle();

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  if (!profile) {
    return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
  }

  const followCheckQuery =
    user && profile.id !== user.id
      ? supabase
          .from('follows')
          .select('follower_id, following_id')
          .eq('follower_id', user.id)
          .eq('following_id', profile.id)
          .maybeSingle()
      : Promise.resolve({ data: null });

  const [
    { count: followersCount },
    { count: followingCount },
    { data: followRow },
  ] = await Promise.all([
    supabase
      .from('follows')
      .select('*', { count: 'exact', head: true })
      .eq('following_id', profile.id),
    supabase
      .from('follows')
      .select('*', { count: 'exact', head: true })
      .eq('follower_id', profile.id),
    followCheckQuery,
  ]);

  return NextResponse.json({
    profile: {
      ...profile,
      followers_count: followersCount || 0,
      following_count: followingCount || 0,
      is_following: !!followRow,
      is_own_profile: user?.id === profile.id,
    },
  });
}


export async function PUT(req: NextRequest): Promise<NextResponse> {
  const supabase = (await createServerClient()) as SupabaseClient<Database>;
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => ({})) as Record<string, unknown>;
  const now = new Date().toISOString();
  const updateData: Record<string, unknown> = { updated_at: now };
  const optionalData: Record<string, unknown> = { updated_at: now };
  const ignored_fields: string[] = [];

  for (const key of Object.keys(body)) {
    if (!SUPPORTED_PROFILE_UPDATE_FIELDS.has(key)) ignored_fields.push(key);
  }

  if (typeof body.display_name === 'string') updateData.display_name = body.display_name.trim();

  if (typeof body.handle === 'string') {
    const normalized = normalizeHandle(body.handle);
    if (!normalized) {
      return NextResponse.json({ error: 'Handle must include letters, numbers, or underscores.' }, { status: 400 });
    }
    updateData.handle = normalized;
  }

  if (typeof body.bio === 'string') updateData.bio = body.bio.trim();
  if (typeof body.avatar_url === 'string' || body.avatar_url === null) updateData.avatar_url = body.avatar_url;

  if (typeof body.banner_url === 'string' || body.banner_url === null) optionalData.banner_url = body.banner_url;
  if (typeof body.website === 'string' || body.website === null) optionalData.website = typeof body.website === 'string' ? body.website.trim() : null;
  if (typeof body.location === 'string' || body.location === null) optionalData.location = typeof body.location === 'string' ? body.location.trim() : null;
  if (Array.isArray(body.dream_config)) optionalData.dream_config = body.dream_config;
  if (Array.isArray(body.profile_dream_widgets)) optionalData.profile_dream_widgets = body.profile_dream_widgets;
  if (Array.isArray(body.widget_order)) optionalData.profile_dream_widgets = body.widget_order;

  const { error: baseError } = await supabase
    .from('profiles')
    .update(updateData as never)
    .eq('id', user.id);

  if (baseError) {
    return NextResponse.json({ error: toErrorMessage(baseError) }, { status: 500 });
  }

  const optionalKeys = Object.keys(optionalData).filter((key) => key !== 'updated_at');
  if (optionalKeys.length > 0) {
    const { error: optionalError } = await (supabase as unknown as SupabaseClient)
      .from('profiles')
      .update(optionalData)
      .eq('id', user.id);

    if (optionalError) {
      ignored_fields.push(...optionalKeys);
    }
  }

  const { data: profile, error: readError } = await supabase
    .from('profiles')
    .select(PROFILE_SELECT)
    .eq('id', user.id)
    .single();

  if (readError) {
    return NextResponse.json({ error: toErrorMessage(readError) }, { status: 500 });
  }

  return NextResponse.json({ profile, ignored_fields: Array.from(new Set(ignored_fields)) });
}

