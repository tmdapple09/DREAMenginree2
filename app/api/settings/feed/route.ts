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

  const { data, error } = await supabase
    .from('profiles')
    .select('feed_preferences')
    .eq('id', user.id)
    .returns<{ feed_preferences: Record<string, unknown> | null }[]>()
    .single();

  if (error) {
    return NextResponse.json({ ok: false, error: toErrorMessage(error) }, { status: 500 });
  }

  const prefs = ((data as Record<string, unknown>)?.feed_preferences as Record<string, unknown>) ?? {};
  return NextResponse.json({ ok: true, preferences: prefs });
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

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: 'Preferences must be a JSON object' }, { status: 400 });
  }

  
  const allowed = new Set([
    'showDreamenginUpdates',
    'autoRefresh',
    'showEmptyStateGuides',
    'enabledProviders',
    'sortOrder',
  ]);
  const safe: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(body as Record<string, unknown>)) {
    if (allowed.has(k)) safe[k] = v;
  }

  const { error: updateError } = await (supabase as SupabaseClient)
    .from('profiles')
    .update({ feed_preferences: safe })
    .eq('id', user.id);

  if (updateError) {
    return NextResponse.json({ ok: false, error: updateError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, preferences: safe });
}
