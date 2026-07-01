import { safeGetUser } from '@/supabase/client/safeGetUser';
import { createServerClient } from '@/supabase/server/serverClient';
import { toErrorMessage } from '@/utils/index';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ provider: string }> },
) {
  const { provider } = await params;
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ ok: false, items: [], error: 'Unauthorised' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const rawLimit = Number(searchParams.get('limit') ?? '6');
  const limit = Number.isFinite(rawLimit)
    ? Math.max(1, Math.min(24, Math.floor(rawLimit)))
    : 6;

  const { data, error } = await (supabase as SupabaseClient)
    .from('connector_feed_items')
    .select('payload, published_at')
    .eq('user_id', user.id)
    .eq('provider', provider)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) {
    return NextResponse.json(
      { ok: false, items: [], error: toErrorMessage(error) },
      { status: 500 },
    );
  }

  const items = (data ?? [])
    .map((row: { payload?: unknown }) => row.payload)
    .filter(Boolean);

  return NextResponse.json({ ok: true, items });
}
