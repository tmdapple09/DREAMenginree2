import { writeAuditLog } from '@/dr-eams/ai/audit';
import { BOOGIE_POLICY_VERSION } from '@/dr-eams/ai/boogieman';
import { jsonApiError } from '@/engine/api/route';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';






















const PrivacyEventSchema = z.object({
  event_type: z.enum([
    'VISIBILITY_CHANGE',    
    'PROFILE_PUBLISH',      
    'EXPLICIT_SHARE',       
    'VISIBILITY_REVOKE',    
  ]),
  content_id: z.string().min(1).max(255),
  content_type: z.enum(['dream_window', 'profile_info', 'post', 'daydream_state', 'other']),
  from_visibility: z.enum(['private', 'followers', 'public']).optional(),
  to_visibility: z.enum(['private', 'followers', 'public']),
  
  update_mapping: z.boolean().optional().default(false),
});

type PrivacyEvent = z.infer<typeof PrivacyEventSchema>;

export async function POST(req: NextRequest): Promise<NextResponse> {
  const requestStart = Date.now();
  const request_id = uuidv4();

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonApiError(400, 'BAD_JSON', 'Body must be valid JSON.');
  }

  const parseResult = PrivacyEventSchema.safeParse(body);
  if (!parseResult.success) {
    return jsonApiError(400, 'VALIDATION_ERROR', 'Invalid privacy event body.', parseResult.error.flatten());
  }

  const event: PrivacyEvent = parseResult.data;

  
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) {
    return jsonApiError(401, 'NOT_AUTHENTICATED', 'You must be signed in to log a privacy event.');
  }

  
  
  const isExposingContent =
    event.to_visibility === 'public' || event.to_visibility === 'followers';
  const isExplicitAction =
    event.event_type === 'EXPLICIT_SHARE' ||
    event.event_type === 'VISIBILITY_CHANGE' ||
    event.event_type === 'PROFILE_PUBLISH';

  if (isExposingContent && !isExplicitAction) {
    await writeAuditLog({
      request_id,
      user_id: user.id,
      agent: 'boogieman',
      ok: false,
      error_code: 'POLICY_VIOLATION',
      latency_ms: Date.now() - requestStart,
      policy_version: BOOGIE_POLICY_VERSION,
      payload: {
        reason: 'Attempt to expose content without an explicit user action.',
        event_type: event.event_type,
        to_visibility: event.to_visibility,
      },
    });
    return jsonApiError(
      403,
      'POLICY_VIOLATION',
      'Content cannot be made public without an explicit user action. ' +
      'Use EXPLICIT_SHARE, VISIBILITY_CHANGE, or PROFILE_PUBLISH event types.'
    );
  }

  
  let mappingUpdated = false;
  if (event.update_mapping) {

    const { error: upsertError } = await (supabase as SupabaseClient)
      .from('visibility_mappings')
      .upsert(
        {
          user_id: user.id,
          content_id: event.content_id,
          content_type: event.content_type,
          visibility: event.to_visibility,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,content_id' }
      );

    if (upsertError) {
      
      console.error('[boogieman/privacy-event] visibility_mappings upsert failed:', upsertError.message);
    } else {
      mappingUpdated = true;
    }
  }

  
  await writeAuditLog({
    request_id,
    user_id: user.id,
    agent: 'boogieman',
    ok: true,
    latency_ms: Date.now() - requestStart,
    policy_version: BOOGIE_POLICY_VERSION,
    payload: {
      event_type: event.event_type,
      content_id: event.content_id,
      content_type: event.content_type,
      from_visibility: event.from_visibility ?? null,
      to_visibility: event.to_visibility,
      mapping_updated: mappingUpdated,
    },
  });

  return NextResponse.json(
    {
      ok: true,
      request_id,
      event_type: event.event_type,
      content_id: event.content_id,
      to_visibility: event.to_visibility,
      mapping_updated: mappingUpdated,
    },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
