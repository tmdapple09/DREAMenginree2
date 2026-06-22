import type { JsonObject, JsonValue } from '@/engine/engin-runtime/EnginBaseState';
import { EnginDispatcher, type RenderDispatcherIntent } from '@/engine/runtime/EnginDispatcher';
import { RENDER_ENGIN_ID, RENDER_INTENT_TYPES, type RenderIntentType } from './core';

export type RenderWorkflowSurface =
  | 'DreamDMBar'
  | 'HomeDream'
  | 'DreamSpace'
  | 'Daydream'
  | 'ContentEngin'
  | 'GameEngin'
  | 'CodeEngin'
  | 'LabEngin';

export interface RenderServiceIntentEnvelope extends JsonObject {
  id: string;
  type: 'intent.render';
  source: RenderWorkflowSurface;
  intentType: RenderIntentType;
  targetCapability: typeof RENDER_ENGIN_ID;
  payload: JsonObject;
  createdAt: string;
  route: '/engines/render';
  status: 'queued' | 'accepted' | 'applied' | 'rejected';
}

export interface RenderServiceSubmitResult extends JsonObject {
  accepted: boolean;
  intentId: string;
  source: RenderWorkflowSurface;
  intentType: RenderIntentType;
  targetCapability: typeof RENDER_ENGIN_ID;
  dispatcherQueued: boolean;
  serviceQueued: boolean;
  route: '/engines/render';
  reason?: string;
}

export const RENDER_SERVICE_EVENT = 'dreamengin:render-service-intent';
export const RENDER_SERVICE_STORAGE_KEY = 'dreamengin:render-service:intents';
const RENDER_SERVICE_BROADCAST_CHANNEL = 'dreamengin-render-service';
const MAX_STORED_RENDER_INTENTS = 24;

type RenderIntentListener = (intent: RenderServiceIntentEnvelope) => void;

function canUseBrowserStorage(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function isRenderIntentType(value: string): value is RenderIntentType {
  return (RENDER_INTENT_TYPES as readonly string[]).includes(value);
}

function readStoredIntents(): RenderServiceIntentEnvelope[] {
  if (!canUseBrowserStorage()) return [];
  try {
    const raw = window.localStorage.getItem(RENDER_SERVICE_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is RenderServiceIntentEnvelope => {
      if (!item || typeof item !== 'object') return false;
      const candidate = item as Partial<RenderServiceIntentEnvelope>;
      return candidate.type === 'intent.render' && typeof candidate.id === 'string' && typeof candidate.intentType === 'string' && isRenderIntentType(candidate.intentType);
    });
  } catch {
    return [];
  }
}

function writeStoredIntents(intents: readonly RenderServiceIntentEnvelope[]): void {
  if (!canUseBrowserStorage()) return;
  try {
    window.localStorage.setItem(RENDER_SERVICE_STORAGE_KEY, JSON.stringify(intents.slice(-MAX_STORED_RENDER_INTENTS)));
  } catch {
    // Large direct asset payloads can exceed localStorage. Runtime event dispatch still carries the handoff in-memory.
  }
}

function makeIntentId(source: RenderWorkflowSurface, intentType: RenderIntentType, payload: JsonObject): string {
  const stablePart = String(payload.assetId ?? payload.sceneId ?? payload.objectId ?? payload.fileName ?? Date.now());
  return `render:${source}:${intentType}:${stablePart}:${Math.random().toString(36).slice(2, 8)}`;
}

function publishIntent(intent: RenderServiceIntentEnvelope): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<RenderServiceIntentEnvelope>(RENDER_SERVICE_EVENT, { detail: intent }));
  if (typeof BroadcastChannel !== 'undefined') {
    const channel = new BroadcastChannel(RENDER_SERVICE_BROADCAST_CHANNEL);
    channel.postMessage(intent);
    channel.close();
  }
}

export function createRenderServiceIntent(source: RenderWorkflowSurface, intentType: RenderIntentType, payload: JsonObject = {}): RenderServiceIntentEnvelope {
  const createdAt = new Date().toISOString();
  return {
    id: makeIntentId(source, intentType, payload),
    type: 'intent.render',
    source,
    intentType,
    targetCapability: RENDER_ENGIN_ID,
    payload,
    createdAt,
    route: '/engines/render',
    status: 'queued',
  };
}

export function submitRenderServiceIntent(source: RenderWorkflowSurface, intentType: RenderIntentType, payload: JsonObject = {}): RenderServiceSubmitResult {
  if (!isRenderIntentType(intentType)) {
    return { accepted: false, intentId: '', source, intentType, targetCapability: RENDER_ENGIN_ID, dispatcherQueued: false, serviceQueued: false, route: '/engines/render', reason: 'Unknown RenderEngin intent type.' };
  }

  const intent = createRenderServiceIntent(source, intentType, payload);
  const dispatcherIntent: Omit<RenderDispatcherIntent, 'createdAt'> = {
    type: intent.intentType,
    source,
    payload: {
      source: intent.source,
      intentType: intent.intentType,
      targetCapability: intent.targetCapability,
      payload: intent.payload,
      intentId: intent.id,
    },
  };
  const dispatcherQueued = EnginDispatcher.getInstance().dispatchRenderIntent(dispatcherIntent);
  const queue = readStoredIntents().filter((queued) => queued.id !== intent.id);
  writeStoredIntents([...queue, { ...intent, status: dispatcherQueued ? 'accepted' : 'queued' }]);
  publishIntent({ ...intent, status: dispatcherQueued ? 'accepted' : 'queued' });

  return {
    accepted: dispatcherQueued,
    intentId: intent.id,
    source,
    intentType,
    targetCapability: RENDER_ENGIN_ID,
    dispatcherQueued,
    serviceQueued: true,
    route: '/engines/render',
  };
}

export function readRenderServiceQueue(): RenderServiceIntentEnvelope[] {
  return readStoredIntents();
}

export function acknowledgeRenderServiceIntent(intentId: string): void {
  const queue = readStoredIntents().filter((intent) => intent.id !== intentId);
  writeStoredIntents(queue);
}

export function subscribeRenderServiceIntents(listener: RenderIntentListener): () => void {
  if (typeof window === 'undefined') return () => undefined;

  const onEvent = (event: Event) => {
    const detail = (event as CustomEvent<RenderServiceIntentEnvelope>).detail;
    if (detail?.type === 'intent.render') listener(detail);
  };

  const onStorage = (event: StorageEvent) => {
    if (event.key !== RENDER_SERVICE_STORAGE_KEY) return;
    readStoredIntents().forEach(listener);
  };

  let channel: BroadcastChannel | null = null;
  if (typeof BroadcastChannel !== 'undefined') {
    channel = new BroadcastChannel(RENDER_SERVICE_BROADCAST_CHANNEL);
    channel.onmessage = (event: MessageEvent<RenderServiceIntentEnvelope>) => {
      if (event.data?.type === 'intent.render') listener(event.data);
    };
  }

  window.addEventListener(RENDER_SERVICE_EVENT, onEvent);
  window.addEventListener('storage', onStorage);

  return () => {
    window.removeEventListener(RENDER_SERVICE_EVENT, onEvent);
    window.removeEventListener('storage', onStorage);
    channel?.close();
  };
}

export function renderServicePayloadToJson(payload: JsonObject): JsonObject {
  return JSON.parse(JSON.stringify(payload)) as JsonObject;
}

export function normalizeRenderServicePayload(payload: Record<string, unknown>): JsonObject {
  return Object.entries(payload).reduce<JsonObject>((acc, [key, value]) => {
    if (
      value === null ||
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      Array.isArray(value) ||
      (typeof value === 'object' && value !== null)
    ) {
      acc[key] = value as JsonValue;
    }
    return acc;
  }, {});
}
