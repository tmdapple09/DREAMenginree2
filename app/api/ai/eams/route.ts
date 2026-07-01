import { writeAuditLog } from '@/dr-eams/ai/audit';
import { boogieEvaluate } from '@/dr-eams/ai/boogieman';
import { makeConfirmToken } from '@/dr-eams/ai/confirm';
import { checkRateLimit, getCurrentRPM } from '@/dr-eams/ai/rateLimit';
import { DrEamsRunBodySchema, type DrEamsRunResponse } from '@/dr-eams/ai/schemas';
import { boogiePolicyCheck, isOwnerEmail, planWithEams, validateWithIdari } from '@/dr-eams/ai/triad';
import { jsonApiError } from '@/engine/api/route';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';





export async function POST(req: NextRequest): Promise<NextResponse> {
  const requestStart = Date.now();
  const request_id = uuidv4();

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonApiError(400, 'BAD_JSON', 'Body must be valid JSON.');
  }

  const parseResult = DrEamsRunBodySchema.safeParse(body);
  if (!parseResult.success) {
    return jsonApiError(400, 'VALIDATION_ERROR', 'Invalid request body', parseResult.error.flatten());
  }

  const request = parseResult.data;

  
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) {
    return jsonApiError(401, 'NOT_AUTHENTICATED', 'You must be signed in.');
  }

  
  const rateOk = await checkRateLimit(user.id, '/api/ai/eams', 30, 60);
  if (!rateOk.allowed) {
    return jsonApiError(429, 'RATE_LIMIT', 'Too many requests. Please slow down.');
  }
  const rateRpm = await getCurrentRPM(user.id, '/api/ai/eams');

  

  const { data: roleData } = await (supabase as SupabaseClient)
    .from('user_roles')
    .select('role')
    .eq('user_id', user.id)
    .single();
  const actorRole: 'user' | 'admin' | 'owner' = isOwnerEmail(user.email)
    ? 'owner'
    : ((roleData as { role?: string } | null)?.role === 'admin' ? 'admin' : 'user');

  
  const boogiePolicy = await boogiePolicyCheck({
    actorRole,
    actorEmail: user.email,
    message: request.message,
  });
  if (boogiePolicy.hard_block) {
    return jsonApiError(403, 'POLICY_BLOCKED', boogiePolicy.reason ?? 'Request blocked by policy.');
  }

  
  
  
  let contentContext: string | undefined;
  try {
    const lowerMsg = request.message.toLowerCase();
    const isContentQuery =
      lowerMsg.includes('post') ||
      lowerMsg.includes('content') ||
      lowerMsg.includes('feed') ||
      lowerMsg.includes('profile') ||
      lowerMsg.includes('follow');

    if (isContentQuery) {
      
      const { data: recentPosts } = await supabase
        .from('app_posts')
        .select('id, content, visibility, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (recentPosts && recentPosts.length > 0) {
        const postsText = recentPosts

          .map((p) =>
            `- "${String(p.content ?? '').slice(0, 80)}" (${p.visibility ?? 'unknown'}, ${p.created_at ? new Date(p.created_at).toLocaleDateString() : 'unknown'})`
          )
          .join('\n');
        contentContext = `User's recent posts:\n${postsText}`;
      }

      

      const { count: followersCount } = await supabase
        .from('follows')
        .select('*', { count: 'exact', head: true })
        .eq('following_id', user.id);
      const { count: followingCount } = await supabase
        .from('follows')
        .select('*', { count: 'exact', head: true })
        .eq('follower_id', user.id);

      const statsText = `User stats: ${followersCount ?? 0} followers, ${followingCount ?? 0} following.`;
      contentContext = contentContext ? `${contentContext}\n${statsText}` : statsText;
    }
  } catch {
    
  }

  
  let plan: Awaited<ReturnType<typeof planWithEams>>;
  try {
    plan = await planWithEams({
      message: request.message,
      actorEmail: user.email,
      actorRole,
      uiRoute: request.ui?.route,
      contentContext,
      
      
      codeContext: request.code_context
        ? {
            language:     request.code_context.language,
            selected_code: request.code_context.selected_code,
            cursor_line:   request.code_context.cursor_line,
          }
        : undefined,
    });
  } catch {
    plan = { response_text: "I'm here to help! What would you like to do?", intents: [] };
  }

  
  const idariResult = validateWithIdari(plan.intents);
  const validatedIntents = idariResult.intents;

  
  const boogieResult = boogieEvaluate({
    actorRole: actorRole === 'owner' ? 'admin' : actorRole,
    rateRpm,
    intents: validatedIntents,
  });

  
  const allowedIntents = validatedIntents.filter((_, i: number) => {
    const d = boogieResult.per_intent[i];
    return d && (d.decision === 'ALLOW' || d.decision === 'CONFIRM');
  });

  const allowedDecisions = boogieResult.per_intent.filter(
    (d) => d.decision === 'ALLOW' || d.decision === 'CONFIRM'
  );

  
  let confirm_token: string | undefined;
  if (allowedDecisions.some((d) => d.decision === 'CONFIRM')) {
    confirm_token = makeConfirmToken({ requestId: request_id, userId: user.id, ttlSeconds: 300 });
  }

  const response_text = plan.interpreted_intent
    ? `${plan.response_text}\n\n• ${plan.interpreted_intent}`
    : plan.response_text;

  await writeAuditLog({
    request_id,
    user_id: user.id,
    agent: 'dr_eams',
    ok: true,
    latency_ms: Date.now() - requestStart,
    payload: { message: request.message, intent_count: allowedIntents.length },
  });

  const response: DrEamsRunResponse = {
    response_text,
    proposed_intents: allowedIntents,
    boogie_decisions: allowedDecisions,
    confirm_token,
  };

  return NextResponse.json(response, { headers: { 'Cache-Control': 'no-store' } });
}
