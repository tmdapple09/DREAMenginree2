import { blueskyVerify } from '@/engine/connectors/providers/bluesky';
import { githubVerify } from '@/engine/connectors/providers/github';
import { mastodonVerify } from '@/engine/connectors/providers/mastodon';
import { nostrVerify } from '@/engine/connectors/providers/nostr';
import { redditVerify } from '@/engine/connectors/providers/reddit';
import { youtubeVerify } from '@/engine/connectors/providers/youtube';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { ConnectorVerifyResponse } from '@/types/connector';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';



const VERIFY_CACHE_MS = 5 * 60 * 1000; 

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ provider: string }> },
): Promise<NextResponse<ConnectorVerifyResponse>> {
  const { provider } = await params;
  const supabase = await createServerClient();

  const db = supabase as SupabaseClient;

  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json(
      { ok: false, status: 'error', last_verified_at: null, error: 'Unauthorised' },
      { status: 401 },
    );
  }

  
  
  const { data: account, error: fetchError } = await db
    .from('connector_accounts')
    .select('status, token_blob, last_verified_at, last_error')
    .eq('user_id', user.id)
    .eq('provider', provider)
    .maybeSingle();

  if (fetchError || !account) {
    return NextResponse.json({
      ok: false,
      status: 'not_connected' as const,
      last_verified_at: null,
      error: 'No account found for this provider.',
    });
  }

  
  if (account.last_verified_at) {
    const age = Date.now() - new Date(account.last_verified_at as string).getTime();
    if (age < VERIFY_CACHE_MS && account.status === 'connected') {
      return NextResponse.json({
        ok: true,
        status: 'connected' as const,
        last_verified_at: account.last_verified_at as string,
      });
    }
  }

  const creds = account.token_blob as Record<string, unknown>;
  let newStatus: ConnectorVerifyResponse['status'] = 'error';
  let lastError: string | null = null;
  let verifiedAt: string | null = null;

  try {
    switch (provider) {
      case 'mastodon':
        await mastodonVerify({
          instance_url: String(creds.instance_url ?? ''),
          access_token: String(creds.access_token ?? ''),
        });
        break;
      case 'bluesky':
        await blueskyVerify({
          handle: String(creds.handle ?? ''),
          app_password: String(creds.app_password ?? ''),
        });
        break;
      case 'github':
        await githubVerify({ access_token: String(creds.access_token ?? '') });
        break;
      case 'reddit':
        await redditVerify({ access_token: String(creds.access_token ?? '') });
        break;
      case 'nostr': {
        const relayRaw = creds.relays;
        const relays = Array.isArray(relayRaw)
          ? relayRaw.map(String)
          : String(relayRaw ?? '').split(',').map((r: string) => r.trim()).filter(Boolean);
        await nostrVerify({ pubkey: String(creds.pubkey ?? ''), relays });
        break;
      }
      case 'youtube':
        await youtubeVerify({ access_token: String(creds.access_token ?? '') });
        break;
      default:
        newStatus = 'unsupported';
    }
    if (newStatus !== 'unsupported') {
      newStatus = 'connected';
      verifiedAt = new Date().toISOString();
    }
  } catch (err: unknown) {
    lastError = err instanceof Error ? toErrorMessage(err) : String(err);
    newStatus = 'needs_reauth';
  }

  
  await db
    .from('connector_accounts')
    .update({
      status: newStatus,
      last_verified_at: verifiedAt,
      last_error: lastError,
      updated_at: new Date().toISOString(),
    })
    .eq('user_id', user.id)
    .eq('provider', provider);

  return NextResponse.json({
    ok: newStatus === 'connected',
    status: newStatus,
    last_verified_at: verifiedAt,
    error: lastError ?? undefined,
  });
}
