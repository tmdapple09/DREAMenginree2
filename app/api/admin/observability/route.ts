import { isOwnerEmail } from '@/dr-eams/ai/triad';
import { jsonApiError } from '@/engine/api/route';
import { getBufferStats, getSnapshot } from '@/engine/observability/collector';
import { correlate } from '@/engine/observability/correlator';
import { buildImmediateRemediationAction } from '@/engine/observability/immediateAction';
import { inferRootCause } from '@/engine/observability/rootCauseAnalyzer';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';














export async function GET(req: NextRequest): Promise<NextResponse> {
  
  if (!process.env.IDARI_PASSWORD) {
    return jsonApiError(
      503,
      'SERVICE_UNAVAILABLE',
      'IDARi observability is not configured. IDARI_PASSWORD must be set.',
    );
  }

  
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return jsonApiError(401, 'NOT_AUTHENTICATED', 'You must be signed in to access observability data.');
  }

  

  const { data: roleData } = await (supabase as SupabaseClient)
    .from('user_roles')
    .select('role')
    .eq('user_id', user.id)
    .single();

  const isOwner = isOwnerEmail(user.email);
  const dbRole = (roleData as { role?: string } | null)?.role;
  const isAdmin = isOwner || dbRole === 'admin';

  if (!isAdmin) {
    return jsonApiError(403, 'FORBIDDEN', 'Observability data is admin-only.');
  }

  
  const url = new URL(req.url);
  const rawWindow = url.searchParams.get('window_ms');
  const windowMs = rawWindow
    ? Math.min(Math.max(parseInt(rawWindow, 10), 60_000), 60 * 60 * 1000)
    : 5 * 60 * 1000;

  const snapshot = getSnapshot(windowMs);
  const correlation = correlate(snapshot);
  const root_cause = inferRootCause(correlation.anomalies, snapshot);
  const immediate_action = buildImmediateRemediationAction(root_cause);
  const buffer_stats = getBufferStats();

  return NextResponse.json(
    {
      snapshot,
      correlation,
      root_cause,
      immediate_action,
      buffer_stats,
      window_ms: windowMs,
    },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
