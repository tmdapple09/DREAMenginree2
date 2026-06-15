import { blueskyVerify } from '@/engine/connectors/providers/bluesky';
import { githubVerify } from '@/engine/connectors/providers/github';
import { mastodonVerify } from '@/engine/connectors/providers/mastodon';
import { nostrVerify } from '@/engine/connectors/providers/nostr';
import { redditVerify } from '@/engine/connectors/providers/reddit';
import { youtubeVerify } from '@/engine/connectors/providers/youtube';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { ConnectorConnectResponse } from '@/types/connector';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';

/**
 * app/api/connectors/[provider]/connect/route.ts
 *
 * Phase 5 — POST /api/connectors/{provider}/connect
 *
 * Stores credentials for a connector and runs an immediate verify call.
 * Only sets status = 'connected' if verify succeeds.
 * Never returns token_blob to the client.
 *
 * AXIOM 4 — Security by Default: secrets stay server-side only.
 * AXIOM 5 — Privacy by Design: owner-only via RLS.
 * ARCHITECTURE.md §5 — Privacy and projection boundaries.
 */

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ provider: string }> },
): Promise<NextResponse<ConnectorConnectResponse>> {
  const { provider } = await params;
  const supabase = await createServerClient();

  const db = supabase as SupabaseClient;

  // Auth check — only authenticated users may connect
  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json({ ok: false, status: 'error', message: 'Unauthorised' }, { status: 401 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json() as Record<string, string>;
  } catch {
    return NextResponse.json({ ok: false, status: 'error', message: 'Invalid JSON body' }, { status: 400 });
  }

  const credentials = (body as { credentials?: Record<string, string> }).credentials ?? (body as Record<string, string>);

  let verifiedAt: string | null = null;
  let lastError: string | null = null;
  let status: ConnectorConnectResponse['status'] = 'error';

  try {
    switch (provider) {
      case 'mastodon':
        await mastodonVerify({
          instance_url: credentials.instance_url ?? '',
          access_token: credentials.access_token ?? '',
        });
        break;
      case 'bluesky':
        await blueskyVerify({
          handle: credentials.handle ?? '',
          app_password: credentials.app_password ?? '',
        });
        break;
      case 'github':
        await githubVerify({ access_token: credentials.access_token ?? '' });
        break;
      case 'reddit':
        await redditVerify({ access_token: credentials.access_token ?? '' });
        break;
      case 'nostr': {
        const relays = (credentials.relays ?? '')
          .split(',')
          .map((r: string) => r.trim())
          .filter(Boolean);
        await nostrVerify({ pubkey: credentials.pubkey ?? '', relays });
        break;
      }
      case 'youtube':
        await youtubeVerify({ access_token: credentials.access_token ?? '' });
        break;
      default:
        return NextResponse.json(
          { ok: false, status: 'unsupported', message: `Provider "${provider}" is not supported for direct connection.` },
          { status: 400 },
        );
    }
    status = 'connected';
    verifiedAt = new Date().toISOString();
  } catch (err: unknown) {
    lastError = err instanceof Error ? toErrorMessage(err) : String(err);
    status = 'error';
  }

  // token_blob stores credentials server-side only.
  // We never return token_blob in the response.
  // db is cast to `any` because connector_accounts is a new table not yet in the generated Supabase types.
  const { error: dbError } = await db
    .from('connector_accounts')
    .upsert(
      {
        user_id: user.id,
        provider,
        status,
        token_blob: status === 'connected' ? credentials : {},
        last_verified_at: verifiedAt,
        last_error: lastError,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,provider' },
    );

  if (dbError) {
    // DB error — return partial success (credentials verified but not saved)
    return NextResponse.json(
      {
        ok: false,
        status: 'error' as const,
        message: `Verified OK but failed to save: ${dbError.message}`,
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: status === 'connected',
    status,
    message: status === 'connected'
      ? `Connected to ${provider} successfully.`
      : lastError ?? 'Connection failed.',
  });
}
