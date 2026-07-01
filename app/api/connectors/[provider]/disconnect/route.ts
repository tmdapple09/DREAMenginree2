import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';



export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ provider: string }> },
): Promise<NextResponse> {
  const { provider } = await params;

  if (!provider || typeof provider !== 'string' || provider.trim().length === 0) {
    return NextResponse.json({ ok: false, error: 'Provider is required' }, { status: 400 });
  }

  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const db = supabase as SupabaseClient;

  
  const { data: existing, error: fetchError } = await db
    .from('connector_accounts')
    .select('id')
    .eq('user_id', user.id)
    .eq('provider', provider)
    .single();

  if (fetchError || !existing) {
    return NextResponse.json({ ok: false, error: 'Connector not found' }, { status: 404 });
  }

  
  
  
  const { error: deleteError } = await db
    .from('connector_accounts')
    .delete()
    .eq('user_id', user.id)
    .eq('provider', provider);

  if (deleteError) {
    return NextResponse.json({ ok: false, error: deleteError.message }, { status: 500 });
  }

  
  return new NextResponse(null, { status: 204 });
}
