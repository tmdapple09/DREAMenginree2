import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';



export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();

  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Request body must be a JSON object.' }, { status: 400 });
  }

  const { type, internalId, label } = body as Record<string, unknown>;

  if (!type || typeof type !== 'string') {
    return NextResponse.json({ error: 'type is required.' }, { status: 400 });
  }
  if (!internalId || typeof internalId !== 'string') {
    return NextResponse.json({ error: 'internalId is required.' }, { status: 400 });
  }
  if (!label || typeof label !== 'string') {
    return NextResponse.json({ error: 'label is required.' }, { status: 400 });
  }

  const db = supabase as SupabaseClient;
  const { data, error } = await db
    .from('global_registry')
    .upsert(
      [{
        object_type: type,
        internal_id: internalId,
        label:       label.trim(),
        owner_id:    user.id,
      }],
      { onConflict: 'object_type,internal_id' },
    )
    .select()
    .single();

  if (error) {
    console.error('GAL registry sync failed:', toErrorMessage(error));
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 200 });
}
