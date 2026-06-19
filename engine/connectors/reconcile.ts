import 'server-only';
import type { SupabaseClient } from '@/engine/io';
import type { Database } from '@/types/supabase';
import { deduplicateFeedItems } from './normalise';
import { dispatchSync } from './syncDispatch';
import { toErrorMessage } from '@/utils/index';

/**
 * lib/connectors/reconcile.ts
 *
 * Shared connector reconciliation — the full sync pipeline in one function:
 *   1. dispatchSync  → fetch provider items via token_blob credentials
 *   2. deduplicateFeedItems → in-memory dedup by (provider, external_id)
 *   3. Upsert connector_feed_items in DB
 *   4. Update connector_accounts.last_synced_at / last_sync_count / last_error
 *
 * Caller provides an already-constructed Supabase client, allowing both:
 *   - Cookie-session client (user-triggered sync route)
 *   - Service-role client (cron fallback route)
 *
 * AXIOM 4 — Security by Default:
 *   - token_blob is never present in ReconcileResult
 *   - This module is server-only; never import from client code
 *
 * ARCHITECTURE.md §3 — Logic layer (lib/connectors)
 */

export interface ReconcileResult {
  ok: boolean;
  provider: string;
  /** Internal-only owner id used for DB metadata updates. Do not expose in public API responses. */
  userId: string;
  fetched: number;
  stored: number;
  last_synced_at: string;
  error?: string;
}

function isConnectorAuthError(message: string): boolean {
  const lower = message.toLowerCase();
  return (
    lower.includes('401') ||
    lower.includes('403') ||
    lower.includes('unauthorized') ||
    lower.includes('unauthorised') ||
    lower.includes('invalid token') ||
    lower.includes('expired token') ||
    lower.includes('access token') ||
    lower.includes('oauth') ||
    lower.includes('reauth')
  );
}

/**
 * Reconcile a single connector account through the full sync pipeline.
 *
 * On provider auth error (401 / "unauthori" / "token" in message):
 *   Sets connector_accounts.status = 'needs_reauth' so the user is prompted
 *   to reconnect. Does NOT throw — returns ok:false with the error.
 *
 * On upsert error:
 *   Returns ok:false with the DB error message. Does NOT throw.
 *
 * Never exposes token_blob in the return value.
 *
 * @param db        - Supabase client (cookie-session or service-role)
 * @param userId    - The owner's user UUID
 * @param provider  - Provider id (e.g. 'mastodon', 'youtube')
 * @param tokenBlob - Parsed token_blob from connector_accounts (server-only)
 */
export async function reconcileConnector(
  db: SupabaseClient<Database>,
  userId: string,
  provider: string,
  tokenBlob: Record<string, unknown>,
): Promise<ReconcileResult> {
  const now = new Date().toISOString();

  const anyDb = db as SupabaseClient;

  let items;
  try {
    items = await dispatchSync(provider, tokenBlob);
  } catch (err: unknown) {
    const msg = err instanceof Error ? toErrorMessage(err) : String(err);
    const isAuthError = isConnectorAuthError(msg);

    if (isAuthError) {
      await anyDb
        .from('connector_accounts')
        .update({ status: 'needs_reauth', last_error: msg, updated_at: now })
        .eq('user_id', userId)
        .eq('provider', provider);
    }

    return { ok: false, provider, userId, fetched: 0, stored: 0, last_synced_at: now, error: msg };
  }

  const deduped = deduplicateFeedItems(items);

  let stored = 0;
  if (deduped.length > 0) {
    const rows = deduped.map((item) => ({
      user_id: userId,
      provider: item.provider,
      external_id: item.external_id,
      payload: item,
      published_at: item.published_at || now,
    }));

    const { error: upsertError, count } = await anyDb
      .from('connector_feed_items')
      .upsert(rows, { onConflict: 'user_id,provider,external_id', ignoreDuplicates: true, count: 'exact' });

    if (upsertError) {
      return {
        ok: false,
        provider,
        userId,
        fetched: deduped.length,
        stored: 0,
        last_synced_at: now,
        error: upsertError.message,
      };
    }
    stored = count ?? deduped.length;
  }

  await anyDb
    .from('connector_accounts')
    .update({
      last_synced_at: now,
      last_sync_count: deduped.length,
      last_error: null,
      updated_at: now,
    })
    .eq('user_id', userId)
    .eq('provider', provider);

  return { ok: true, provider, userId, fetched: deduped.length, stored, last_synced_at: now };
}
