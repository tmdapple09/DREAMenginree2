import { reconcileConnector } from '@/engine/connectors/reconcile';
import { DISPATCH_SUPPORTED_PROVIDERS } from '@/engine/connectors/syncDispatch';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { ConnectorSyncResponse } from '@/types/connector';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ provider: string }> },
): Promise<NextResponse<ConnectorSyncResponse>> {
  const { provider } = await params;
  const supabase = await createServerClient();

  const db = supabase as SupabaseClient;

  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json(
      { ok: false, fetched: 0, stored: 0, last_synced_at: '', error: 'Unauthorised' },
      { status: 401 },
    );
  }

  
  if (!(DISPATCH_SUPPORTED_PROVIDERS as readonly string[]).includes(provider)) {
    return NextResponse.json(
      { ok: false, fetched: 0, stored: 0, last_synced_at: '', error: `Provider "${provider}" sync not supported.` },
      { status: 400 },
    );
  }

  
  
  const { data: account, error: fetchError } = await db
    .from('connector_accounts')
    .select('status, token_blob')
    .eq('user_id', user.id)
    .eq('provider', provider)
    .maybeSingle();

  if (fetchError || !account) {
    return NextResponse.json({
      ok: false, fetched: 0, stored: 0, last_synced_at: '',
      error: 'Connector not found. Connect first.',
    }, { status: 404 });
  }

  if (account.status !== 'connected') {
    return NextResponse.json({
      ok: false, fetched: 0, stored: 0, last_synced_at: '',
      error: `Connector status is "${account.status}". Please reconnect.`,
    }, { status: 409 });
  }

  
  const result = await reconcileConnector(
    db,
    user.id,
    provider,
    account.token_blob as Record<string, unknown>,
  );

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, fetched: result.fetched, stored: result.stored, last_synced_at: result.last_synced_at, error: result.error },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    fetched: result.fetched,
    stored: result.stored,
    last_synced_at: result.last_synced_at,
  });
}
