import { writeAuditLog } from '@/dr-eams/ai/audit';
import { BOOGIE_POLICY_VERSION, boogieEnforce } from '@/dr-eams/ai/boogieman';
import { checkRateLimit } from '@/dr-eams/ai/rateLimit';
import { isOwnerEmail } from '@/dr-eams/ai/triad';
import { jsonApiError } from '@/engine/api/route';
import { isZeroTolerance, scanContent } from '@/engine/safety/child-safety/childSafetyDetector';
import { classifyImage } from '@/engine/safety/child-safety/imageClassifier';
import { reportChildSafetyIncident } from '@/engine/safety/child-safety/ncmecReporter';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';






















const ChildSafetyScanBodySchema = z.object({
  
  text: z.string().max(10_000).optional(),
  
  mediaHashes: z.array(z.string().regex(/^[0-9a-f]{64}$/i)).max(20).optional(),
  
  imageBase64: z.string().max(5_100_000).optional(),
  
  imageMime: z.enum(['image/jpeg', 'image/png', 'image/webp', 'image/gif']).optional(),
  
  surface: z.enum(['post', 'message', 'comment', 'profile', 'upload']),
  
  contentRef: z.string().max(128),
  
  reportedUserId: z.string().uuid(),
  
  reporterUserId: z.string().uuid().optional(),
});

type ChildSafetyScanBody = z.infer<typeof ChildSafetyScanBodySchema>;







async function loadKnownBadHashes(supabase: Awaited<ReturnType<typeof createServerClient>>): Promise<Set<string>> {
  try {
    const { data, error } = await (supabase as SupabaseClient)
      .from('child_safety_hash_registry')
      .select('hash_sha256');

    if (error || !data) return new Set();
    return new Set(
      (data as { hash_sha256: string }[]).map((r) => r.hash_sha256.toLowerCase()),
    );
  } catch {
    return new Set();
  }
}





export async function POST(req: NextRequest): Promise<NextResponse> {
  const requestStart = Date.now();
  const request_id = uuidv4();

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonApiError(400, 'BAD_JSON', 'Body must be valid JSON.');
  }

  const parseResult = ChildSafetyScanBodySchema.safeParse(body);
  if (!parseResult.success) {
    return jsonApiError(400, 'VALIDATION_ERROR', 'Invalid request body', parseResult.error.flatten());
  }

  const request: ChildSafetyScanBody = parseResult.data;

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
    return jsonApiError(403, 'FORBIDDEN', 'Admin access required.');
  }

  
  const rateOk = await checkRateLimit(user.id, '/api/ai/boogieman/child-safety', 120, 60);
  if (!rateOk.allowed) {
    return jsonApiError(429, 'RATE_LIMIT', 'Too many requests.', {
      retry_after_seconds: rateOk.retry_after_seconds,
    });
  }

  const knownBadHashes = await loadKnownBadHashes(supabase);

  
  let imageClassification: import('@/engine/safety/child-safety/imageClassifier').ImageClassificationResult | undefined;
  if (request.imageBase64) {
    imageClassification = await classifyImage(
      request.imageBase64,
      request.imageMime ?? 'image/jpeg',
    );
  }

  const detection = scanContent({
    text: request.text,
    mediaHashes: request.mediaHashes,
    knownBadHashes,
    imageClassification,
  });

  if (!detection.flagged) {
    return NextResponse.json(
      {
        ok: true,
        flagged: false,
        category: 'CLEAN',
        enforcement: null,
        incident_id: null,
        policy_version: BOOGIE_POLICY_VERSION,
      },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  }

  const enforcement = boogieEnforce({
    userId: request.reportedUserId,
    ruleCode: detection.rule_code!,
    severity: detection.severity,
    confidence: detection.confidence,
    strikeCount: 0, 
    blastRadius: 1,
  });

  const contentHash = request.text
    ? createHash('sha256').update(request.text).digest('hex')
    : undefined;

  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    ?? req.headers.get('x-real-ip')
    ?? undefined;

  let incidentResult: { incidentId: string; ncmecSubmitted: boolean; ncmecReportId?: string; ncmecError?: string } | null = null;

  
  if (isZeroTolerance(detection)) {
    incidentResult = await reportChildSafetyIncident({
      reportedUserId: request.reportedUserId,
      reporterUserId: request.reporterUserId ?? null,
      ruleCode: detection.rule_code!,
      detectionResult: detection,
      surface: request.surface,
      contentRef: request.contentRef,
      contentHash,
      clientIp,
    });
  } else {
    
    incidentResult = await reportChildSafetyIncident({
      reportedUserId: request.reportedUserId,
      reporterUserId: request.reporterUserId ?? null,
      ruleCode: detection.rule_code!,
      detectionResult: detection,
      surface: request.surface,
      contentRef: request.contentRef,
      contentHash,
      clientIp,
    });
  }

  await writeAuditLog({
    request_id,
    user_id: user.id,
    agent: 'boogieman',
    ok: false,
    error_code: detection.rule_code ?? undefined,
    latency_ms: Date.now() - requestStart,
    policy_version: BOOGIE_POLICY_VERSION,
    payload: {
      child_safety: true,
      rule_code: detection.rule_code,
      category: detection.category,
      severity: detection.severity,
      confidence: detection.confidence,
      signal_count: detection.signal_count,
      surface: request.surface,
      content_ref: request.contentRef,
      reported_user_id: request.reportedUserId,
      enforcement_action: enforcement.action,
      zero_tolerance: isZeroTolerance(detection),
      incident_id: incidentResult?.incidentId,
      image_classification: imageClassification
        ? { risk: imageClassification.risk, confidence: imageClassification.confidence, skipped: imageClassification.skipped }
        : null,
    },
  });

  return NextResponse.json(
    {
      ok: false,
      flagged: true,
      category: detection.category,
      rule_code: detection.rule_code,
      severity: detection.severity,
      confidence: detection.confidence,
      zero_tolerance: isZeroTolerance(detection),
      image_classification: imageClassification
        ? { risk: imageClassification.risk, confidence: imageClassification.confidence, skipped: imageClassification.skipped }
        : null,
      enforcement: {
        action: enforcement.action,
        scopes: enforcement.audit_event.scopes_restricted,
        expires_at: enforcement.audit_event.expiry,
        user_explanation: enforcement.user_explanation,
        should_escalate: enforcement.should_escalate,
      },
      incident_id: incidentResult?.incidentId ?? null,
      ncmec_submitted: incidentResult?.ncmecSubmitted ?? false,
      policy_version: BOOGIE_POLICY_VERSION,
    },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
