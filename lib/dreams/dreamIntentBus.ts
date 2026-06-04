/**
 * lib/dreams/dreamIntentBus.ts
 *
 * Typed Dream intents routed through the existing dreamOSBus. This file is a
 * typed seam, not a second bus: dispatch and handler registration both delegate
 * to dreamOSBus.dispatchIntent/registerIntent.
 */

import {
  createDomainObject,
  type JsonObject,
  type JsonValue,
} from '@/lib/engin-runtime/EnginBaseState';
import type { DomainAuthorizationContext, DomainCapability } from '@/lib/engin-runtime/EnginCapabilities';
import type { InformationDomain, IntentEnvelope } from '@/lib/runtime/dreamOSBus';
import { dreamOSBus } from '@/lib/runtime/dreamOSBus';
import type { DrEamsIntentType } from './types';

// ─── Intent → capability mapping ──────────────────────────────────────────────

const INTENT_CAPABILITY_MAP: Record<DrEamsIntentType['type'], DomainCapability> = {
  'dream:open':        'read',
  'dream:close':       'read',
  'dream:move':        'write',
  'dream:resize':      'write',
  'dream:minimize':    'write',
  'dream:maximize':    'write',
  'dream:pin':         'write',
  'dream:unpin':       'write',
  'dream:share':       'share',
  'dream:clone':       'duplicate',
  'dream:delete':      'destroy',
  'dream:post':        'publish',
  'dream:attach':      'write',
  'dream:transfer':    'move',
  'dream:state-patch': 'write',
};

// ─── Intent domain mapping ────────────────────────────────────────────────────

const INTENT_DOMAINS: Record<DrEamsIntentType['type'], InformationDomain[]> = {
  'dream:open':        ['visual', 'logic'],
  'dream:close':       ['visual', 'logic'],
  'dream:move':        ['visual', 'physics'],
  'dream:resize':      ['visual', 'physics'],
  'dream:minimize':    ['visual', 'logic'],
  'dream:maximize':    ['visual', 'logic'],
  'dream:pin':         ['visual', 'memory'],
  'dream:unpin':       ['visual', 'memory'],
  'dream:share':       ['communication', 'identity'],
  'dream:clone':       ['memory', 'visual'],
  'dream:delete':      ['memory', 'logic'],
  'dream:post':        ['communication', 'identity'],
  'dream:attach':      ['communication', 'visual'],
  'dream:transfer':    ['visual', 'memory'],
  'dream:state-patch': ['memory', 'logic'],
};

const DOMAIN_OBJECT_VISIBILITY = 'local' as const;

function stableJson(value: JsonValue): string {
  if (value === null) return 'null';
  if (typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'number') return Number.isFinite(value) ? String(value) : 'null';
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;

  const objectValue = value as JsonObject;

  return `{${Object.keys(objectValue)
    .sort()
    .map((key) => `${JSON.stringify(key)}:${stableJson(objectValue[key] ?? null)}`)
    .join(',')}}`;
}

function payloadToJson(payload: DrEamsIntentType['payload']): JsonObject {
  return payload as JsonObject;
}

function createDreamIntentId(
  intent: DrEamsIntentType,
  context: DreamIntentContext,
  targetRuntimeId?: string,
): string {
  return [
    'dream-intent',
    context.runtimeId,
    targetRuntimeId ?? 'self',
    context.actorId,
    intent.type,
    stableJson(payloadToJson(intent.payload)),
  ].join(':');
}

// ─── dispatchDreamIntent ──────────────────────────────────────────────────────

export interface DreamIntentContext {
  /** The authenticated user performing the action. */
  actorId: string;
  /** The runtime region where the action originates. */
  runtimeId: string;
  /** All runtime regions currently active (for cross-surface transfer). */
  surfaceRuntimeIds: string[];
  /** Whether the actor has admin capability. */
  admin?: boolean;
}

export interface DreamIntentResult {
  handled: boolean;
  replayed: boolean;
}

/** Route a typed Dream intent through the existing dreamOSBus dispatch path. */
export async function dispatchDreamIntent(
  intent: DrEamsIntentType,
  context: DreamIntentContext,
  targetRuntimeId?: string,
): Promise<DreamIntentResult> {
  const capability = INTENT_CAPABILITY_MAP[intent.type];
  const domains = INTENT_DOMAINS[intent.type];
  const payload = payloadToJson(intent.payload);

  const envelope = createDomainObject<
    DrEamsIntentType['type'],
    IntentEnvelope<DrEamsIntentType['type'], JsonObject>['data']
  >({
    id: createDreamIntentId(intent, context, targetRuntimeId),
    type: intent.type,
    ownerId: context.actorId,
    runtimeId: context.runtimeId,
    visibility: DOMAIN_OBJECT_VISIBILITY,
    data: {
      sourceRuntimeId: context.runtimeId,
      ...(targetRuntimeId ? { targetRuntimeId } : {}),
      actorId: context.actorId,
      capability,
      domains,
      priority: 'normal',
      payload,
    },
  }) as IntentEnvelope<DrEamsIntentType['type'], JsonObject>;

  const authContext: DomainAuthorizationContext = {
    actorId: context.actorId,
    runtimeId: context.runtimeId,
    surfaceRuntimeIds: context.surfaceRuntimeIds,
    collaboration: {
      active: false,
      participantIds: [],
      editorIds: [],
    },
    admin: context.admin,
  };

  return dreamOSBus.dispatchIntent(envelope, authContext);
}

// ─── Handler registration helpers ────────────────────────────────────────────

type DreamIntentHandler<T extends DrEamsIntentType['type']> = (
  payload: Extract<DrEamsIntentType, { type: T }>['payload'],
  envelope: IntentEnvelope<T, JsonObject>,
) => void | Promise<void>;

/** Register a typed handler on the existing dreamOSBus. */
export function registerDreamIntentHandler<T extends DrEamsIntentType['type']>(
  intentType: T,
  handler: DreamIntentHandler<T>,
  domains?: InformationDomain[],
): () => void {
  const resolvedDomains = domains ?? INTENT_DOMAINS[intentType];

  return dreamOSBus.registerIntent(
    intentType,
    (envelope: IntentEnvelope) => envelope.type === intentType,
    (envelope: IntentEnvelope) => {
      type MatchedIntent = Extract<DrEamsIntentType, { type: T }>;
      type MatchedPayload = MatchedIntent['payload'];

      const payload = envelope.data.payload as MatchedPayload;
      const typedEnvelope = envelope as IntentEnvelope<T, JsonObject>;
      const typedHandler = handler as (
        payload: MatchedPayload,
        envelope: IntentEnvelope<T, JsonObject>,
      ) => void | Promise<void>;

      return typedHandler(payload, typedEnvelope);
    },
    resolvedDomains,
  );
}
