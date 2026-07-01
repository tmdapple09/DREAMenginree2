import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';



export async function GET( ): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const db = supabase as SupabaseClient;

  const { data, error } = await db
    .from('settings')
    .select('data')
    .eq('user_id', user.id)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ ok: false, error: toErrorMessage(error) }, { status: 500 });
  }

  const privacy = (data?.data as Record<string, unknown>)?.privacy ?? null;
  return NextResponse.json({ ok: true, privacy });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ ok: false, error: 'Invalid settings object' }, { status: 400 });
  }

  const db2 = supabase as SupabaseClient;

  
  const { data: existing } = await db2
    .from('settings')
    .select('data')
    .eq('user_id', user.id)
    .maybeSingle();

  const currentData = (existing?.data as Record<string, unknown>) ?? {};
  const merged = { ...currentData, privacy: body };

  const { error: upsertError } = await db2
    .from('settings')
    .upsert({ user_id: user.id, data: merged }, { onConflict: 'user_id' });

  if (upsertError) {
    return NextResponse.json({ ok: false, error: upsertError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
