import { writeAuditLog } from '@/dr-eams/ai/audit';
import { BOOGIE_POLICY_VERSION, boogieEvaluate } from '@/dr-eams/ai/boogieman';
import { checkRateLimit } from '@/dr-eams/ai/rateLimit';
import { boogiePolicyCheck, isOwnerEmail } from '@/dr-eams/ai/triad';
import { jsonApiError } from '@/engine/api/route';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';





























const BoogieRequestSchema = z.object({
  message: z.string().min(1).max(4000),
  context: z.record(z.string(), z.unknown()).optional(),
  to_eams: z.boolean().optional(),
  summary: z.string().optional(),
});

export async function POST(req: NextRequest): Promise<NextResponse> {
  const requestStart = Date.now();
  const request_id = uuidv4();

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonApiError(400, 'BAD_JSON', 'Body must be valid JSON.');
  }

  const parseResult = BoogieRequestSchema.safeParse(body);
  if (!parseResult.success) {
    return jsonApiError(400, 'VALIDATION_ERROR', 'Invalid request body', parseResult.error.flatten());
  }

  const request = parseResult.data;

  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) {
    return jsonApiError(401, 'NOT_AUTHENTICATED', 'You must be signed in.');
  }

  const { data: roleData } = await (supabase as SupabaseClient)
    .from('user_roles')
    .select('role')
    .eq('user_id', user.id)
    .single();

  const isOwner = isOwnerEmail(user.email);
  const isAdmin = isOwner || (roleData as { role?: string } | null)?.role === 'admin';

  if (!isAdmin) {
    await writeAuditLog({
      request_id,
      user_id: user.id,
      agent: 'boogieman',
      ok: false,
      error_code: 'FORBIDDEN',
      latency_ms: Date.now() - requestStart,
      policy_version: BOOGIE_POLICY_VERSION,
    });
    return jsonApiError(403, 'FORBIDDEN', 'Admin access required.');
  }

  const actorRole: 'user' | 'admin' | 'owner' = isOwner ? 'owner' : 'admin';

  const rateOk = await checkRateLimit(user.id, '/api/ai/boogieman', 20, 60);
  if (!rateOk.allowed) {
    await writeAuditLog({
      request_id,
      user_id: user.id,
      agent: 'boogieman',
      ok: false,
      error_code: 'RATE_LIMIT',
      latency_ms: Date.now() - requestStart,
      policy_version: BOOGIE_POLICY_VERSION,
    });
    return jsonApiError(429, 'RATE_LIMIT', 'Too many requests. Please slow down.', {
      retry_after_seconds: rateOk.retry_after_seconds,
    });
  }

  
  const policyResult = await boogiePolicyCheck({
    actorRole,
    actorEmail: user.email,
    message: request.message,
  });

  
  const ruleResult = boogieEvaluate({
    actorRole: 'admin',
    rateRpm: 0,
    intents: [],
  });

  const hard_block = policyResult.hard_block || ruleResult.global.hard_block;
  const reason = policyResult.reason ?? (ruleResult.global.hard_block ? 'Rate limit exceeded' : undefined);

  await writeAuditLog({
    request_id,
    user_id: user.id,
    agent: 'boogieman',
    ok: !hard_block,
    error_code: hard_block ? 'HARD_BLOCK' : undefined,
    latency_ms: Date.now() - requestStart,
    policy_version: BOOGIE_POLICY_VERSION,
    payload: {
      message: request.message,
      hard_block,
      to_eams: request.to_eams ?? false,
      summary: request.summary,
    },
  });

  return NextResponse.json(
    {
      ok: !hard_block,
      hard_block,
      reason,
      summary: request.to_eams ? (request.summary ?? null) : undefined,
    },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
