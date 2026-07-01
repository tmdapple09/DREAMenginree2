import type { SupabaseClient } from '@/engine/io';
import {
    ActorContext,
    Intent,
    IntentType,
    ToolResult,
    UIContext,
} from '@/types/ai-system';
import { writeAuditLog } from './audit';
import { toErrorMessage } from '@/utils/index';








export interface HandlerContext {
  actor: ActorContext;
  ui: UIContext;
  intent: Intent;
  supabase: SupabaseClient;
  now: string; 
  request_id: string;
}





export type ToolHandler = (ctx: HandlerContext) => Promise<ToolResult>;





const handlerRegistry = new Map<IntentType, ToolHandler>();

export function registerHandler(intentType: IntentType, handler: ToolHandler): void {
  handlerRegistry.set(intentType, handler);
}

export function getHandler(intentType: IntentType): ToolHandler | undefined {
  return handlerRegistry.get(intentType);
}





export async function executeIntent(
  intent: Intent,
  actor: ActorContext,
  ui: UIContext,
  supabase: SupabaseClient,
  request_id: string
): Promise<ToolResult> {
  const startTime = Date.now();

  const handler = getHandler(intent.type);

  if (!handler) {
    const result: ToolResult = {
      ok: false,
      error: {
        code: 'NO_HANDLER',
        message: `No handler registered for intent type: ${intent.type}`,
      },
    };

    
    await writeAuditLog({
      request_id,
      intent_id: intent.intent_id,
      user_id: actor.user_id,
      agent: 'dr_eams', 
      intent_type: intent.type,
      payload: intent.payload,
      ok: false,
      error_code: 'NO_HANDLER',
      latency_ms: Date.now() - startTime,
    });

    return result;
  }

  const ctx: HandlerContext = {
    actor,
    ui,
    intent,
    supabase,
    now: new Date().toISOString(),
    request_id,
  };

  let result: ToolResult;

  try {
    result = await handler(ctx);
  } catch (error: unknown) {
    console.error(`Handler error for ${intent.type}:`, error);

    result = {
      ok: false,
      error: {
        code: 'HANDLER_ERROR',
        message: error instanceof Error ? toErrorMessage(error) : 'Unknown error',
        detail: error,
      },
    };
  }

  
  await writeAuditLog({
    request_id,
    intent_id: intent.intent_id,
    user_id: actor.user_id,
    agent: 'dr_eams', 
    intent_type: intent.type,
    payload: intent.payload,
    ok: result.ok,
    error_code: result.error?.code,
    latency_ms: Date.now() - startTime,
  });

  return result;
}





export async function executeIntents(
  intents: Intent[],
  actor: ActorContext,
  ui: UIContext,
  supabase: SupabaseClient,
  request_id: string
): Promise<ToolResult[]> {
  const results: ToolResult[] = [];

  
  for (const intent of intents) {
    const result = await executeIntent(intent, actor, ui, supabase, request_id);
    results.push(result);

    
    if (!result.ok && result.error?.code === 'CRITICAL') {
      break;
    }
  }

  return results;
}
