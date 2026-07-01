import type { ConnectorStatus } from '@/engine/connectors/connectorRegistry';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';



export interface ConnectorStatusEntry {
  status: ConnectorStatus;
  last_synced_at: string | null;
}

export async function GET( ): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ ok: false, statuses: {} }, { status: 401 });
  }

  const db = supabase as SupabaseClient;

  const { data, error } = await db
    .from('connector_accounts')
    .select('provider, status, last_synced_at')   
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ ok: false, statuses: {} }, { status: 500 });
  }

  const statuses: Record<string, ConnectorStatusEntry> = {};
  for (const row of (data ?? []) as Array<{ provider: string; status: ConnectorStatus; last_synced_at: string | null }>) {
    statuses[row.provider] = {
      status: row.status,
      last_synced_at: row.last_synced_at ?? null,
    };
  }

  return NextResponse.json({ ok: true, statuses });
}
