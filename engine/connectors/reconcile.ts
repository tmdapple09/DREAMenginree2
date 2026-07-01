import 'server-only';
import type { SupabaseClient } from '@/engine/io';
import type { Database } from '@/types/supabase';
import { deduplicateFeedItems } from './normalise';
import { dispatchSync } from './syncDispatch';
import { toErrorMessage } from '@/utils/index';



export interface ReconcileResult {
  ok: boolean;
  provider: string;
  
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
