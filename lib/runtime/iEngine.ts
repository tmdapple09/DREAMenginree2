import {
  createDomainObject,
  isDomainObject,
  type DomainObject,
  type DomainVisibility,
  type JsonObject,
  type JsonValue,
} from '@/lib/engin-runtime/EnginBaseState';
import {
  authorizeDomainCapability,
  type DomainAuthorizationContext,
  type DomainCapability,
} from '@/lib/engin-runtime/EnginCapabilities';
import type { RuntimeWorld } from '@/lib/runtime/dualRuntime';

export type { DomainObject, DomainVisibility, JsonObject, JsonValue };

export type CapabilityAction = DomainCapability;

export interface ActorContext {
  actorId: string;
  runtimeId: string;
  surfaceRuntimeIds: readonly string[];
  collaboration: DomainAuthorizationContext['collaboration'];
  isAdmin?: boolean;
}

export interface AuthorizationDecision {
  allowed: boolean;
  reasons: string[];
}

export type IntentPacket<TPayload extends JsonValue = JsonObject> = DomainObject<string, {
  actor: JsonObject;
  target?: JsonObject;
  payload: TPayload;
  issuedAt: string;
  trace: readonly string[];
}>;

export interface EngineManifest {
  id: string;
  name: string;
  version: string;
  runtimeHooks: readonly ('install' | 'activate' | 'suspend' | 'resume' | 'destroy')[];
  acceptedIntentTypes: readonly string[];
  schemaVersion: number;
  minimumCoreVersion: string;
}

export interface RuntimeRuleSet<TState, TIntent extends IntentPacket = IntentPacket> {
  id: string;
  version: string;
  constraints: readonly string[];
  parameters: Record<string, JsonValue>;
  transform: (state: TState, intent: TIntent) => TState;
}

export interface RuntimeSnapshot<TState> extends DomainObject<'runtime.snapshot', {
  schemaVersion: number;
  state: JsonValue;
  activeRuleSetId: string;
  checksum: string;
  capturedAt: string;
}> {
  readonly runtimeState: TState;
}

export interface SyncTransport {
  publish: (channel: string, intent: IntentPacket) => Promise<void>;
  subscribe: (channel: string, onIntent: (intent: IntentPacket) => void) => () => void;
}

export function validateDomainObject<TType extends string, TData extends JsonValue>(object: DomainObject<TType, TData>): AuthorizationDecision {
  return isDomainObject(object)
    ? { allowed: true, reasons: [] }
    : { allowed: false, reasons: ['Domain object envelope is invalid.'] };
}

export function authorizeCapability<TType extends string, TData extends JsonValue>(
  action: CapabilityAction,
  actor: ActorContext,
  object: DomainObject<TType, TData>,
): AuthorizationDecision {
  const result = authorizeDomainCapability(action, object, {
    actorId: actor.actorId,
    runtimeId: actor.runtimeId,
    surfaceRuntimeIds: actor.surfaceRuntimeIds,
    collaboration: actor.collaboration,
    admin: actor.isAdmin,
  });
  return result.granted ? { allowed: true, reasons: [] } : { allowed: false, reasons: [result.reason ?? 'Capability denied.'] };
}

export function validateManifest(manifest: EngineManifest): AuthorizationDecision {
  const reasons: string[] = [];
  if (!manifest.id) reasons.push('missing manifest id');
  if (!manifest.name) reasons.push('missing manifest name');
  if (!/^\d+\.\d+\.\d+$/.test(manifest.version)) reasons.push('manifest version must be semver');
  if (!manifest.runtimeHooks.length) reasons.push('manifest must declare lifecycle hooks');
  if (!manifest.acceptedIntentTypes.length) reasons.push('manifest must declare accepted intents');
  if (!Number.isInteger(manifest.schemaVersion) || manifest.schemaVersion < 1) reasons.push('invalid schema version');
  if (!manifest.minimumCoreVersion) reasons.push('missing compatibility floor');
  return { allowed: reasons.length === 0, reasons };
}

export function negotiateCompatibility(coreVersion: string, manifest: EngineManifest): AuthorizationDecision {
  const manifestDecision = validateManifest(manifest);
  const reasons = [...manifestDecision.reasons];
  if (compareSemver(coreVersion, manifest.minimumCoreVersion) < 0) {
    reasons.push(`core ${coreVersion} is below required ${manifest.minimumCoreVersion}`);
  }
  return { allowed: reasons.length === 0, reasons };
}

export class IntentBus<TState> {
  private handlers = new Map<string, Set<(intent: IntentPacket) => void>>();

  constructor(private readonly ruleSet: RuntimeRuleSet<TState>) {}

  route(currentState: TState, intent: IntentPacket): TState {
    const tracedIntent = withTrace(intent, this.ruleSet.id);
    const next = this.ruleSet.transform(currentState, tracedIntent);
    this.handlers.get(intent.type)?.forEach((handler) => handler(tracedIntent));
    return next;
  }

  on(type: string, handler: (intent: IntentPacket) => void): () => void {
    const handlers = this.handlers.get(type) ?? new Set<(intent: IntentPacket) => void>();
    handlers.add(handler);
    this.handlers.set(type, handlers);
    return () => handlers.delete(handler);
  }

  snapshot(runtimeId: string, ownerId: string, state: TState, schemaVersion = 1): RuntimeSnapshot<TState> {
    const capturedAt = new Date().toISOString();
    const stateValue = toJsonValue(state);
    const checksum = stableChecksum({ runtimeId, schemaVersion, state: stateValue, activeRuleSetId: this.ruleSet.id });
    const envelope = createDomainObject({
      id: `snapshot:${runtimeId}:${checksum}`,
      type: 'runtime.snapshot',
      ownerId,
      runtimeId,
      visibility: 'local',
      data: { schemaVersion, state: stateValue, activeRuleSetId: this.ruleSet.id, checksum, capturedAt },
      now: capturedAt,
    });
    return Object.freeze({ ...envelope, runtimeState: state });
  }
}

export function createRuntimeObject<TType extends string, TData extends JsonValue>(args: {
  id: string; type: TType; ownerId: string; runtimeId: string; visibility: DomainVisibility; data: TData;
}): DomainObject<TType, TData> {
  return createDomainObject(args);
}

export function createIntentPacket<TPayload extends JsonValue>(args: {
  id: string;
  type: string;
  ownerId: string;
  runtimeId: string;
  visibility?: DomainVisibility;
  actor: ActorContext;
  payload: TPayload;
  target?: { objectId?: string; runtimeId?: string; surfaceRuntimeIds?: readonly string[] };
  trace?: readonly string[];
  issuedAt?: string;
}): IntentPacket<TPayload> {
  const issuedAt = args.issuedAt ?? new Date().toISOString();
  return createDomainObject({
    id: args.id,
    type: args.type,
    ownerId: args.ownerId,
    runtimeId: args.runtimeId,
    visibility: args.visibility ?? 'local',
    data: {
      actor: toJsonValue(args.actor) as JsonObject,
      ...(args.target ? { target: toJsonValue(args.target) as JsonObject } : {}),
      payload: args.payload,
      issuedAt,
      trace: [...(args.trace ?? [])],
    },
    now: issuedAt,
  }) as IntentPacket<TPayload>;
}

export const dualRuntimeManifest: EngineManifest = {
  id: 'i-engine.dual-runtime',
  name: 'ι-Engine Dual Runtime Core',
  version: '1.0.0',
  runtimeHooks: ['install', 'activate', 'suspend', 'resume', 'destroy'],
  acceptedIntentTypes: ['runtime.world.set', 'runtime.dominance.swap', 'runtime.dominance.set', 'runtime.snapshot.create', 'object.capability.request'],
  schemaVersion: 1,
  minimumCoreVersion: '1.0.0',
};

export const dualRuntimeRuleSet: RuntimeRuleSet<{ surfaceSpaceWorld: RuntimeWorld; dreamSpaceWorld: RuntimeWorld; dominantRegion: 'Surface Space' | 'DreamSpace' }> = {
  id: 'ruleset.dual-runtime.spatial-intent',
  version: '1.0.0',
  constraints: ['one active ruleset', 'intent bus only', 'explicit HomeDream/DreamSpace visibility'],
  parameters: { recursiveSurfaces: true, transportSeam: 'DreamDMBar' },
  transform: (state, intent) => {
    if (intent.type === 'runtime.dominance.swap') {
      return { ...state, dominantRegion: state.dominantRegion === 'Surface Space' ? 'DreamSpace' : 'Surface Space' };
    }
    if (intent.type === 'runtime.dominance.set') {
      const payload = intent.data.payload as JsonObject;
      return payload.region === 'DreamSpace' || payload.region === 'Surface Space' ? { ...state, dominantRegion: payload.region } : state;
    }
    if (intent.type === 'runtime.world.set') {
      const payload = intent.data.payload as { viewport?: 'top' | 'bottom'; world?: RuntimeWorld };
      if (!payload.world) return state;
      return payload.viewport === 'bottom' ? { ...state, dreamSpaceWorld: payload.world } : { ...state, surfaceSpaceWorld: payload.world };
    }
    return state;
  },
};

function withTrace(intent: IntentPacket, ruleSetId: string): IntentPacket {
  return {
    ...intent,
    data: { ...intent.data, trace: [...intent.data.trace, ruleSetId] },
  };
}

function compareSemver(a: string, b: string): number {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < 3; i += 1) {
    const delta = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (delta !== 0) return delta;
  }
  return 0;
}

function toJsonValue(value: unknown): JsonValue {
  if (value === null || typeof value === 'string' || typeof value === 'boolean') return value;
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;
  if (Array.isArray(value)) return value.map(toJsonValue);
  if (typeof value === 'object') {
    return Object.fromEntries(Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, toJsonValue(item)])) as JsonObject;
  }
  return null;
}

function stableSerialize(value: JsonValue): string {
  if (value === null) return 'null';
  if (typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'number') return Number.isFinite(value) ? String(value) : 'null';
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (Array.isArray(value)) return `[${value.map(stableSerialize).join(',')}]`;
  const objectValue = value as JsonObject;
  return `{${Object.keys(objectValue).sort().map((key) => `${JSON.stringify(key)}:${stableSerialize(objectValue[key] ?? null)}`).join(',')}}`;
}

function stableChecksum(value: JsonValue): string {
  const text = stableSerialize(value);
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}
