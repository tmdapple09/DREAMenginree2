import {
    SHELLHUB_DEFAULT_SERVER,
    shellhubListDevices,
    type ShellHubDevice,
} from '@/engine/connectors/providers/shellhub';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';



export interface ShellHubDevicesResponse {
  ok: boolean;
  
  server_url?: string;
  devices?: ShellHubDevice[];
  error?: string;
}

export async function GET(): Promise<NextResponse<ShellHubDevicesResponse>> {
  const supabase = await createServerClient();

  const db = supabase as SupabaseClient;

  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json({ ok: false, error: 'Unauthorised' }, { status: 401 });
  }

  
  const { data: account, error: fetchError } = await db
    .from('connector_accounts')
    .select('status, token_blob')
    .eq('user_id', user.id)
    .eq('provider', 'shellhub')
    .maybeSingle();

  if (fetchError || !account) {
    return NextResponse.json(
      { ok: false, error: 'ShellHub connector not configured. Connect first.' },
      { status: 404 },
    );
  }

  if (account.status !== 'connected') {
    return NextResponse.json(
      { ok: false, error: `ShellHub connector status is "${account.status}". Please reconnect.` },
      { status: 409 },
    );
  }

  const creds = account.token_blob as Record<string, string>;
  
  
  const serverUrl = (creds.server_url as string | undefined) || SHELLHUB_DEFAULT_SERVER;

  try {
    const devices = await shellhubListDevices({
      server_url: serverUrl,
      api_key: creds.api_key ?? '',
    });
    return NextResponse.json({ ok: true, server_url: serverUrl, devices });
  } catch (err: unknown) {
    const message = err instanceof Error ? toErrorMessage(err) : 'Unknown error fetching devices';
    return NextResponse.json({ ok: false, error: message }, { status: 502 });
  }
}
