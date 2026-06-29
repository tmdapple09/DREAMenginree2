import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';

const MAX_MESSAGE_LENGTH = 2_000;
const MAX_STACK_LENGTH = 8_000;
const MAX_METADATA_BYTES = 12_000;

async function assertAdmin(supabase: Awaited<ReturnType<typeof createServerClient>>): Promise<NextResponse | null> {
  const user = await safeGetUser(supabase);
  if (!user) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });

  const { data: isAdmin, error } = await supabase.rpc('is_admin');
  if (error) return NextResponse.json({ ok: false, error: toErrorMessage(error) }, { status: 500 });
  if (!isAdmin) return NextResponse.json({ ok: false, error: 'Forbidden' }, { status: 403 });

  return null;
}

function boundedObject(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  const json = JSON.stringify(value);
  if (json.length > MAX_METADATA_BYTES) return { truncated: true };
  return value as Record<string, unknown>;
}

export async function GET( ): Promise<NextResponse> {
  const supabase = await createServerClient();
  const denial = await assertAdmin(supabase);
  if (denial) return denial;

  const { data, error } = await (supabase as SupabaseClient)
    .from('platform_errors')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);
  if (error) return NextResponse.json({ ok: false, error: toErrorMessage(error) }, { status: 500 });
  return NextResponse.json({ ok: true, errors: data ?? [] });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  const body = await req.json().catch(() => ({}));
  const message = typeof body.message === 'string' ? body.message.slice(0, MAX_MESSAGE_LENGTH) : 'Unknown platform error';
  const stack = typeof body.stack === 'string' ? body.stack.slice(0, MAX_STACK_LENGTH) : null;
  const metadata = boundedObject(body.metadata);
  const source = typeof body.source === 'string' && body.source.trim() ? body.source.slice(0, 120) : 'client';

  const { error } = await (supabase as SupabaseClient).from('platform_errors').insert({
    user_id: user?.id ?? null,
    source,
    message,
    stack,
    metadata,
  });
  if (error) return NextResponse.json({ ok: false, error: toErrorMessage(error) }, { status: 500 });
  return NextResponse.json({ ok: true });
}
