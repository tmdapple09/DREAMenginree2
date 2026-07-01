import type { ReconcileResult } from '@/engine/connectors/reconcile';
import { reconcileConnector } from '@/engine/connectors/reconcile';
import { DISPATCH_SUPPORTED_PROVIDERS } from '@/engine/connectors/syncDispatch';
import { isCronAuthorised } from '@/engine/connectors/webhookVerification';
import { createServiceClient } from '@/supabase/server/serverClient';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';



const DEFAULT_BATCH_SIZE = 50;
const MAX_BATCH_SIZE = 100;

interface CronSummary {
  ok: boolean;
  batchSize: number;
  processed: number;
  succeeded: number;
  failed: number;
  results: Array<{
    provider: string;
    ok: boolean;
    fetched: number;
    stored: number;
    error?: string;
  }>;
}

function getCronBatchSize(): number {
  const parsed = Number.parseInt(process.env.CONNECTOR_CRON_BATCH_SIZE ?? String(DEFAULT_BATCH_SIZE), 10);
  if (!Number.isFinite(parsed)) return DEFAULT_BATCH_SIZE;
  return Math.min(Math.max(parsed, 1), MAX_BATCH_SIZE);
}

export async function GET(req: NextRequest): Promise<NextResponse<CronSummary | { error: string }>> {
  
  if (
    !isCronAuthorised(
      req.headers.get('authorization'),
      process.env.CRON_SECRET,
      process.env.NODE_ENV,
    )
  ) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  let db;
  try {
    db = await createServiceClient();
  } catch (err: unknown) {
    const msg = err instanceof Error ? toErrorMessage(err) : String(err);
    return NextResponse.json({ error: `Service client unavailable: ${msg}` }, { status: 503 });
  }

  const anyDb = db as SupabaseClient;

  const batchSize = getCronBatchSize();
  const { data: accounts, error: fetchError } = await anyDb
    .from('connector_accounts')
    .select('user_id, provider, token_blob')
    .eq('status', 'connected')
    .in('provider', [...DISPATCH_SUPPORTED_PROVIDERS])
    .order('last_synced_at', { ascending: true, nullsFirst: true })
    .limit(batchSize);

  if (fetchError) {
    return NextResponse.json(
      { error: `Failed to fetch connector accounts: ${fetchError.message}` },
      { status: 500 },
    );
  }

  if (!accounts || accounts.length === 0) {
    return NextResponse.json({
      ok: true,
      batchSize,
      processed: 0,
      succeeded: 0,
      failed: 0,
      results: [],
    });
  }

  
  const results: ReconcileResult[] = [];
  for (const account of accounts) {
    const result = await reconcileConnector(
      db,
      account.user_id as string,
      account.provider as string,
      (account.token_blob ?? {}) as Record<string, unknown>,
    );
    results.push(result);
  }

  const succeeded = results.filter((r) => r.ok).length;

  return NextResponse.json({
    ok: true,
    batchSize,
    processed: results.length,
    succeeded,
    failed: results.length - succeeded,
    
    results: results.map((r) => ({
      provider: r.provider,
      ok: r.ok,
      fetched: r.fetched,
      stored: r.stored,
      ...(r.error ? { error: r.error } : {}),
    })),
  });
}
