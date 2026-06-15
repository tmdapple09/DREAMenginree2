import { AI_AGENTS, type RuntimeRegion } from '@/engine/identity/canonical-names';
import type { RuntimeWorld } from '@/engine/runtime/dualRuntime';
import {
  bridge,
  type AnyBridgeEmission,
  type DualRuntimeChannel,
} from '@/engine/runtime/dualRuntimeBridge';
import { RuntimeContainer } from '@/engine/runtime/runtimeContainer';
import {
  ENGIN_REGISTRY,
  INFORMATION_DOMAINS,
  type InformationDomain,
} from '@/engins/forgeengin/forge/forgeRegistry';
import type { DreamArtifactBusEventMap } from '@/types/dreamArtifact';
import {
  createCoherenceCapacity,
  createCoherenceReport,
  createRuntimeLoad,
  isDomainObject,
  type DomainObject,
  type JsonObject,
  type JsonValue,
  type RuntimeCoherenceReport,
  type RuntimeLoad,
} from '@/engine/engin-runtime/EnginBaseState';
import {
  authorizeDomainCapability,
  type DomainAuthorizationContext,
  type DomainCapability,
} from '@/engine/engin-runtime/EnginCapabilities';

// Framework directives stay physically first when required.

// Runtime file: lib/runtime/dreamOSBus.ts.

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

const MAX_ARTIFACTS = 48;

const INTENT_BUS_COHERENCE_CAPACITY = createCoherenceCapacity({
  maxEventPressure: 36,
  maxConflictCount: 4,
  maxLatencyPressure: 320,
  maxInvalidMutations: 3,
  maxUnresolvedIntents: 6,
});

/**
 * DreamDMBar is the permanent exchange capability, not merely its divider seam.
 * These descriptors expose the behavior that already lives in the existing bar
 * surface so the orchestrator can discover it by meaning without importing UI
 * files or creating a second DreamDMBar registry.
 */
const DREAMDM_BAR_CAPABILITIES: readonly CapabilityDescriptor[] = [
  { id: 'DreamDMBar', domains: ['communication', 'identity', 'logic', 'memory'], kind: 'orchestrator' },
  { id: 'DreamDMBar.messaging', domains: ['communication', 'identity'], kind: 'service', parentId: 'DreamDMBar' },
  { id: 'DreamDMBar.search', domains: ['communication', 'identity', 'logic'], kind: 'service', parentId: 'DreamDMBar' },
  { id: 'DreamDMBar.notifications', domains: ['communication', 'identity'], kind: 'service', parentId: 'DreamDMBar' },
  { id: 'DreamDMBar.navigation', domains: ['logic', 'memory'], kind: 'service', parentId: 'DreamDMBar' },
  { id: 'DreamDMBar.context-actions', domains: ['logic', 'communication'], kind: 'service', parentId: 'DreamDMBar' },
  { id: 'DreamDMBar.surface-exchange', domains: ['memory', 'logic'], kind: 'service', parentId: 'DreamDMBar' },
  { id: 'DreamDMBar.dr-eams', domains: ['ai', 'communication'], kind: 'service', parentId: 'DreamDMBar' },
] as const;

const informationDomainSet = new Set<string>(INFORMATION_DOMAINS);

/** Existing capabilities classified by the information they already work with. */
export const CAPABILITY_DESCRIPTORS: readonly CapabilityDescriptor[] = [
  ...ENGIN_REGISTRY.map(({ name: id, domains }) => ({ id, domains, kind: 'engin' as const })),
  ...DREAMDM_BAR_CAPABILITIES,
  { id: 'ComputeRuntime', domains: ['logic', 'physics', 'ai'], kind: 'runtime' },
  { id: 'SharedDreamRuntime', domains: ['memory', 'communication'], kind: 'runtime' },
  { id: 'DreamSystemContext', domains: ['memory'], kind: 'service' },
  { id: 'HomeDream', domains: ['visual', 'memory', 'communication'], kind: 'surface' },
  { id: 'DreamSpace', domains: ['visual', 'memory'], kind: 'surface' },
  { id: 'DreamR', domains: ['communication', 'identity', 'logic'], kind: 'surface' },
  { id: 'DualRuntime', domains: ['memory', 'logic'], kind: 'runtime' },
  { id: 'GameRemote', domains: ['physics', 'logic'], kind: 'service' },
  { id: 'WebGPUDirector', domains: ['visual', 'physics', 'logic'], kind: 'service' },
  { id: 'WasmGpuVM', domains: ['logic', 'physics', 'memory'], kind: 'runtime' },
  { id: 'NeuralSeamCanvas', domains: ['visual', 'ai'], kind: 'surface' },
  { id: 'EnginDispatcher', domains: ['logic'], kind: 'service' },
  { id: 'safeGetUser', domains: ['identity'], kind: 'service' },
  { id: 'Idari', domains: ['ai', 'logic'], kind: 'agent' },
  { id: AI_AGENTS.DR_EAMS, domains: ['ai', 'logic'], kind: 'agent' },
] as const;

const capabilityById = new Map(
  CAPABILITY_DESCRIPTORS.map((capability) => [capability.id, capability]),
);

const channelCapabilityIds: Record<DualRuntimeChannel, string> = {
  music: 'StarMakerEngin',
  game: 'GameEngin',
  games: 'GameEngin',
  lab: 'LabEngin',
  code: 'CodeEngin',
  brand: 'BrandingEngin',
  content: 'ContentEngin',
  create: 'ContentEngin',
  compute: 'ComputeRuntime',
  shared_dream: 'SharedDreamRuntime',
};

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export type IntentPriority = 'low' | 'normal' | 'high' | 'system';

/** Intents use the same explicit ownership envelope as every domain object. */
export type IntentEnvelope<
  TType extends string = string,
  TPayload extends JsonValue = JsonObject,
> = DomainObject<
  TType,
  {
    sourceRuntimeId: string;
    targetRuntimeId?: string;
    actorId: string;
    capability: DomainCapability;
    /** Semantic concerns route intent handling by meaning, never by file path. */
    domains: readonly InformationDomain[];
    priority: IntentPriority;
    payload: TPayload;
  }
>;

type IntentHandler = (intent: IntentEnvelope) => void | Promise<void>;

type IntentValidator = (intent: IntentEnvelope) => boolean;

type IntentDispatchResult = { handled: boolean; replayed: boolean };

export type DreamOSArtifactKind =
  | 'event'
  | 'code-run'
  | 'code-output'
  | 'lab-run'
  | 'lab-result'
  | 'build'
  | 'asset'
  | 'prompt'
  | 'draft';

export interface DreamOSSharedArtifact {
  id: string;
  kind: DreamOSArtifactKind;
  title: string;
  sourceSubsystem: string;
  sourceRegion?: RuntimeRegion;
  relatedSubsystems: readonly string[];
  /** Meaning carried by this artifact; Centers are descriptions, not runtimes. */
  domains?: readonly InformationDomain[];
  payload: Record<string, unknown>;
  updatedAt: number;
}

/**
 * RuntimeContext — generic term for the fixed engine/runtime infrastructure
 * currently active in a region.
 */
export interface RuntimeContext {
  region: RuntimeRegion;
  world: RuntimeWorld;
  splitRatio: number;
  dominant: boolean;
  aiContext:
    | 'general'
    | 'code'
    | 'lab'
    | 'game'
    | 'content'
    | 'brand'
    | 'music';
  subsystemId: string;
  updatedAt: number;
}

export type DreamOSRuntimeContext = RuntimeContext;

export interface DreamOSSnapshot {
  artifacts: readonly DreamOSSharedArtifact[];
  runtimeContexts: readonly RuntimeContext[];
}

type PublishRuntimeContextInput = Omit<
  RuntimeContext,
  'updatedAt' | 'aiContext' | 'subsystemId'
>;

type RuntimeContextStore = ReadonlyMap<RuntimeRegion, RuntimeContext>;

type SnapshotListener = (snapshot: DreamOSSnapshot) => void;

type DreamOSCustomEventName = keyof DreamArtifactBusEventMap;

type DreamOSCustomEventHandler<K extends DreamOSCustomEventName> = (
  payload: DreamArtifactBusEventMap[K],
) => void;

export type CapabilityKind =
  | 'engin'
  | 'runtime'
  | 'surface'
  | 'orchestrator'
  | 'service'
  | 'agent';

export interface CapabilityDescriptor {
  /** Stable semantic identifier used by the orchestrator, never a file path. */
  id: string;
  /** Information concerns handled by this already-existing capability. */
  domains: readonly InformationDomain[];
  /** What kind of existing product capability this descriptor documents. */
  kind: CapabilityKind;
  /** Parent capability when this is one discoverable facet of a larger capability. */
  parentId?: string;
}

// Runtime functions, classes, handlers, and state transitions.

function decayIntentLoad(load: RuntimeLoad): RuntimeLoad {
  return createRuntimeLoad({
    eventPressure: load.eventPressure * 0.62,
    stateDrift: load.stateDrift * 0.5,
    conflictCount: load.conflictCount * 0.78,
    latencyPressure: load.latencyPressure * 0.55,
    invalidMutationCount: load.invalidMutationCount * 0.82,
    unresolvedIntentCount: load.unresolvedIntentCount * 0.82,
  });
}

function mergeIntentLoad(current: RuntimeLoad, patch: Partial<RuntimeLoad>): RuntimeLoad {
  const decayed = decayIntentLoad(current);
  return createRuntimeLoad({
    eventPressure: Math.max(decayed.eventPressure, patch.eventPressure ?? 0),
    stateDrift: Math.max(decayed.stateDrift, patch.stateDrift ?? 0),
    conflictCount: Math.max(decayed.conflictCount, patch.conflictCount ?? 0),
    latencyPressure: Math.max(decayed.latencyPressure, patch.latencyPressure ?? 0),
    invalidMutationCount: Math.max(decayed.invalidMutationCount, patch.invalidMutationCount ?? 0),
    unresolvedIntentCount: Math.max(decayed.unresolvedIntentCount, patch.unresolvedIntentCount ?? 0),
  });
}


export function isIntentEnvelope(value: unknown): value is IntentEnvelope {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  if (!isDomainObject(value)) return false;
  const data = value.data;
  if (!data || typeof data !== 'object' || Array.isArray(data)) return false;
  const intent = data as IntentEnvelope['data'];
  return (
    typeof intent.sourceRuntimeId === 'string' &&
    intent.sourceRuntimeId.trim().length > 0 &&
    intent.sourceRuntimeId === value.runtimeId &&
    (intent.targetRuntimeId === undefined ||
      (typeof intent.targetRuntimeId === 'string' &&
        intent.targetRuntimeId.trim().length > 0)) &&
    typeof intent.actorId === 'string' &&
    intent.actorId.trim().length > 0 &&
    intent.actorId === value.ownerId &&
    (intent.capability === 'read' ||
      intent.capability === 'write' ||
      intent.capability === 'share' ||
      intent.capability === 'move' ||
      intent.capability === 'duplicate' ||
      intent.capability === 'publish' ||
      intent.capability === 'destroy' ||
      intent.capability === 'admin') &&
    Array.isArray(intent.domains) &&
    intent.domains.length > 0 &&
    intent.domains.every(isInformationDomain) &&
    (intent.priority === 'low' ||
      intent.priority === 'normal' ||
      intent.priority === 'high' ||
      intent.priority === 'system') &&
    'payload' in intent
  );
}

export function isInformationDomain(value: unknown): value is InformationDomain {
  return typeof value === 'string' && informationDomainSet.has(value);
}

export function getCapabilityDescriptor(id: string): CapabilityDescriptor | null {
  return capabilityById.get(id) ?? null;
}

export function getCapabilityChildren(
  parentId: string,
): readonly CapabilityDescriptor[] {
  return CAPABILITY_DESCRIPTORS.filter(
    (capability) => capability.parentId === parentId,
  );
}

export function getCapabilitiesForDomains(
  domains: readonly InformationDomain[],
): readonly CapabilityDescriptor[] {
  const requested = new Set(domains);
  return CAPABILITY_DESCRIPTORS.filter((capability) =>
    capability.domains.some((domain) => requested.has(domain)),
  );
}

function channelToSubsystem(channel: DualRuntimeChannel): string {
  return channelCapabilityIds[channel] ?? channel;
}

function domainsForChannel(channel: DualRuntimeChannel): readonly InformationDomain[] {
  return getCapabilityDescriptor(channelToSubsystem(channel))?.domains ?? [];
}

function relatedSubsystemsForChannel(channel: DualRuntimeChannel): readonly string[] {
  const sourceSubsystem = channelToSubsystem(channel);
  return getCapabilitiesForDomains(domainsForChannel(channel))
    .map((capability) => capability.id)
    .filter((capabilityId) => capabilityId !== sourceSubsystem);
}

function formatEventTitle(event: string): string {
  return event
    .split(':')
    .map((segment) => segment.replace(/-/g, ' '))
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' · ');
}

function worldToSubsystemId(world: RuntimeWorld): string {
  if (typeof world === 'string') {
    if (world === 'DreamSpace') return 'dreamspace';
    if (world === 'HomeDream Surface') return 'home';
    if (world === 'View Profile Surface') return 'profile';
    return String(world).toLowerCase().replace(/\s+/g, '-');
  }
  if (world.type === 'engin') return world.name;
  if (world.type === 'dream') return `dream:${world.id}`;
  if (world.type === 'panel') return `panel:${world.name}`;
  if (world.type === 'custom') return `custom:${world.path}`;
  return 'unknown';
}

export function deriveAIRuntimeContext(
  world: RuntimeWorld,
): RuntimeContext['aiContext'] {
  const subsystemId = worldToSubsystemId(world).toLowerCase();
  if (subsystemId.includes('code')) return 'code';
  if (subsystemId.includes('lab')) return 'lab';
  if (subsystemId.includes('game')) return 'game';
  if (subsystemId.includes('content') || subsystemId.includes('create'))
    return 'content';
  if (subsystemId.includes('brand')) return 'brand';
  if (subsystemId.includes('music') || subsystemId.includes('starmaker'))
    return 'music';
  return 'general';
}

function buildRuntimeContext(
  input: PublishRuntimeContextInput,
): RuntimeContext {
  return {
    ...input,
    aiContext: deriveAIRuntimeContext(input.world),
    subsystemId: worldToSubsystemId(input.world),
    updatedAt: Date.now(),
  };
}

function publishRuntimeContextStrategy(
  state: RuntimeContextStore,
  input: PublishRuntimeContextInput,
): RuntimeContextStore {
  const next = new Map(state);
  next.set(input.region, buildRuntimeContext(input));
  return next;
}

function createRuntimeContextContainer(): RuntimeContainer<
  RuntimeContextStore,
  PublishRuntimeContextInput
> {
  return new RuntimeContainer<RuntimeContextStore, PublishRuntimeContextInput>(
    new Map<RuntimeRegion, RuntimeContext>(),
    publishRuntimeContextStrategy,
  );
}

class DreamOSBusImpl {
  private readonly artifacts = new Map<string, DreamOSSharedArtifact>();
  private runtimeContexts = createRuntimeContextContainer();
  private readonly listeners = new Set<SnapshotListener>();
  private readonly intentHandlers = new Map<
    string,
    { validate: IntentValidator; handle: IntentHandler; domains?: readonly InformationDomain[] }
  >();
  private readonly handledIntentIds = new Set<string>();
  private readonly pendingIntents = new Map<
    string,
    Promise<IntentDispatchResult>
  >();
  private intentLoad = createRuntimeLoad();
  private lastIntentAt = 0;
  private intentCoherence: RuntimeCoherenceReport = createCoherenceReport(
    createRuntimeLoad(),
    INTENT_BUS_COHERENCE_CAPACITY,
    0,
    ['intent-bus:init'],
  );
  private readonly customEventListeners = new Map<
    DreamOSCustomEventName,
    Set<(payload: DreamArtifactBusEventMap[DreamOSCustomEventName]) => void>
  >();

  constructor() {
    bridge.subscribeEventActivity((emission) => {
      this.recordBridgeEmission(emission);
    });
  }

  /** Register the single deterministic handler for an intent type. */
  registerIntent(
    type: string,
    validate: IntentValidator,
    handle: IntentHandler,
    domains?: readonly InformationDomain[],
  ): () => void {
    if (this.intentHandlers.has(type))
      throw new Error(`Intent handler already registered for '${type}'.`);
    if (!type.trim()) throw new Error('Intent type is required.');
    if (domains && (domains.length === 0 || !domains.every(isInformationDomain)))
      throw new Error('Intent handler domains must contain known semantic domains.');
    const registration = { validate, handle, domains };
    this.intentHandlers.set(type, registration);
    return () => {
      if (this.intentHandlers.get(type) === registration)
        this.intentHandlers.delete(type);
    };
  }

  /** Route behavior requests through the OS intent seam; repeated IDs replay idempotently. */
  async dispatchIntent(
    intent: IntentEnvelope,
    context: DomainAuthorizationContext,
  ): Promise<IntentDispatchResult> {
    if (!isIntentEnvelope(intent)) throw new Error('Invalid intent envelope.');
    const authorization = authorizeDomainCapability(intent.data.capability, intent, context);
    if (!authorization.granted)
      throw new Error(authorization.reason ?? 'Intent capability is not authorized.');
    if (
      intent.data.targetRuntimeId &&
      !context.surfaceRuntimeIds.includes(intent.data.targetRuntimeId)
    ) {
      this.recordIntentPressure('target-outside-surface', {
        conflictCount: this.intentLoad.conflictCount + 1,
        unresolvedIntentCount: this.intentLoad.unresolvedIntentCount + 1,
      });
      throw new Error('Intent target runtime is outside the active surface scope.');
    }
    this.recordIntentArrival(intent);
    if (this.handledIntentIds.has(intent.id))
      return { handled: true, replayed: true };
    const pending = this.pendingIntents.get(intent.id);
    if (pending) {
      await pending;
      return { handled: true, replayed: true };
    }
    const registration = this.intentHandlers.get(intent.type);
    if (!registration) {
      this.recordIntentPressure('unresolved-intent', {
        unresolvedIntentCount: this.intentLoad.unresolvedIntentCount + 1,
      });
      throw new Error(
        `No deterministic handler registered for intent '${intent.type}'.`,
      );
    }
    if (
      registration.domains &&
      !registration.domains.some((domain) => intent.data.domains.includes(domain))
    ) {
      this.recordIntentPressure('domain-conflict', {
        conflictCount: this.intentLoad.conflictCount + 1,
        unresolvedIntentCount: this.intentLoad.unresolvedIntentCount + 1,
      });
      throw new Error(`Intent '${intent.type}' has no domain handled by its registered capability.`);
    }
    if (!registration.validate(intent)) {
      this.recordIntentPressure('intent-schema-invalid', {
        invalidMutationCount: this.intentLoad.invalidMutationCount + 1,
        unresolvedIntentCount: this.intentLoad.unresolvedIntentCount + 1,
      });
      throw new Error(`Intent '${intent.type}' failed schema validation.`);
    }

    const execution = (async (): Promise<IntentDispatchResult> => {
      await registration.handle(intent);
      this.recordIntentPressure('intent-handled', {
        unresolvedIntentCount: Math.max(0, this.pendingIntents.size - 1),
      });
      this.handledIntentIds.add(intent.id);
      this.upsertArtifact({
        id: `intent:${intent.id}`,
        kind: 'event',
        title: formatEventTitle(intent.type),
        sourceSubsystem: intent.data.sourceRuntimeId,
        relatedSubsystems: intent.data.targetRuntimeId
          ? [intent.data.targetRuntimeId]
          : [],
        domains: intent.data.domains,
        payload: { intent },
      });
      return { handled: true, replayed: false };
    })();
    this.pendingIntents.set(intent.id, execution);
    try {
      return await execution;
    } finally {
      this.pendingIntents.delete(intent.id);
    }
  }

  upsertArtifact(
    input: Omit<DreamOSSharedArtifact, 'updatedAt'> & { updatedAt?: number },
  ): void {
    this.artifacts.set(input.id, {
      ...input,
      updatedAt: input.updatedAt ?? Date.now(),
    });
    this.notify();
  }

  publishRuntimeContext(input: PublishRuntimeContextInput): void {
    this.runtimeContexts.run(input);
    this.notify();
  }

  /**
   * O(1) lookup of an artifact by its ID.
   * Returns null when the artifact is not in the bus.
   */
  getArtifact(id: string): DreamOSSharedArtifact | null {
    return this.artifacts.get(id) ?? null;
  }

  /**
   * Remove a specific artifact from the bus and notify subscribers.
   * No-op when the ID is not present.
   */
  removeArtifact(id: string): void {
    if (!this.artifacts.has(id)) return;
    this.artifacts.delete(id);
    this.notify();
  }

  /**
   * Remove all artifacts without touching runtime contexts.
   * Useful for resetting content between test cases or user sessions.
   */
  clearArtifacts(): void {
    this.artifacts.clear();
    this.notify();
  }

  /**
   * Return all artifacts with the given kind, sorted newest-first.
   * Avoids subscribing to the full snapshot when only one kind is needed.
   */
  getArtifactsByKind(kind: DreamOSArtifactKind): DreamOSSharedArtifact[] {
    return Array.from(this.artifacts.values())
      .filter((a) => a.kind === kind)
      .sort((a, b) => b.updatedAt - a.updatedAt);
  }

  /**
   * Return the number of artifacts currently in the bus.
   * Cheaper than getSnapshot().artifacts.length — no array allocation.
   */
  getArtifactCount(): number {
    return this.artifacts.size;
  }

  /**
   * Subscribe to changes on a single artifact by ID.
   * The callback fires whenever upsertArtifact() is called with this ID.
   * Returns an unsubscribe function.
   *
   * Unlike the full snapshot listener, this avoids re-rendering when
   * unrelated artifacts change.
   */
  watchArtifact(
    id: string,
    callback: (artifact: DreamOSSharedArtifact | null) => void,
  ): () => void {
    const listener = (_snapshot: DreamOSSnapshot) => {
      callback(this.artifacts.get(id) ?? null);
    };
    this.listeners.add(listener);
    // Immediately deliver the current value.
    callback(this.artifacts.get(id) ?? null);
    return () => {
      this.listeners.delete(listener);
    };
  }

  subscribe(listener: SnapshotListener): () => void {
    this.listeners.add(listener);
    listener(this.getSnapshot());
    return () => {
      this.listeners.delete(listener);
    };
  }

  emit<K extends DreamOSCustomEventName>(
    event: K,
    payload: DreamArtifactBusEventMap[K],
  ): void {
    const listeners = this.customEventListeners.get(event);
    if (!listeners || listeners.size === 0) return;
    for (const listener of Array.from(listeners)) {
      try {
        listener(payload);
      } catch (error: unknown) {
        console.error(
          `[DreamOSBus] custom event listener error for ${event}`,
          error,
        );
      }
    }
  }

  on<K extends DreamOSCustomEventName>(
    event: K,
    handler: DreamOSCustomEventHandler<K>,
  ): () => void {
    const listeners = this.customEventListeners.get(event) ?? new Set();
    listeners.add(
      handler as (
        payload: DreamArtifactBusEventMap[DreamOSCustomEventName],
      ) => void,
    );
    this.customEventListeners.set(event, listeners);
    return () => {
      const existing = this.customEventListeners.get(event);
      if (!existing) return;
      existing.delete(
        handler as (
          payload: DreamArtifactBusEventMap[DreamOSCustomEventName],
        ) => void,
      );
      if (existing.size === 0) {
        this.customEventListeners.delete(event);
      }
    };
  }

  getSnapshot(): DreamOSSnapshot {
    return {
      artifacts: Array.from(this.artifacts.values()).sort(
        (a, b) => b.updatedAt - a.updatedAt,
      ),
      runtimeContexts: Array.from(
        this.runtimeContexts.getState().values(),
      ).sort((a, b) => a.region.localeCompare(b.region)),
    };
  }

  clearAll(): void {
    this.artifacts.clear();
    this.runtimeContexts = createRuntimeContextContainer();
    this.handledIntentIds.clear();
    this.pendingIntents.clear();
    this.intentLoad = createRuntimeLoad();
    this.intentCoherence = createCoherenceReport(
      this.intentLoad,
      INTENT_BUS_COHERENCE_CAPACITY,
      0,
      ['intent-bus:clear'],
    );
    this.intentHandlers.clear();
    this.notify();
  }

  recordBridgeEmission(emission: AnyBridgeEmission): void {
    this.upsertArtifact({
      id: `bridge:${emission.channel}:${String(emission.event)}:${emission.emittedAt}`,
      kind: 'event',
      title: formatEventTitle(String(emission.event)),
      sourceSubsystem: channelToSubsystem(
        emission.channel as DualRuntimeChannel,
      ),
      relatedSubsystems: relatedSubsystemsForChannel(
        emission.channel as DualRuntimeChannel,
      ),
      domains: domainsForChannel(emission.channel as DualRuntimeChannel),
      payload: {
        channel: emission.channel,
        event: emission.event,
        emittedAt: emission.emittedAt,
        ...(emission.payload as Record<string, unknown>),
      },
      updatedAt: emission.emittedAt,
    });
  }

  getIntentCoherence(): RuntimeCoherenceReport {
    return {
      ...this.intentCoherence,
      load: { ...this.intentCoherence.load },
      capacity: { ...this.intentCoherence.capacity },
      reasons: [...this.intentCoherence.reasons],
    };
  }

  private recordIntentArrival(intent: IntentEnvelope): RuntimeCoherenceReport {
    const now = Date.now();
    const elapsed = this.lastIntentAt > 0 ? now - this.lastIntentAt : 0;
    this.lastIntentAt = now;
    return this.recordIntentPressure(`intent:${intent.type}`, {
      eventPressure: elapsed > 0 ? 1000 / Math.max(1, elapsed) : 0,
      latencyPressure: elapsed,
      unresolvedIntentCount: this.pendingIntents.size,
    });
  }

  private recordIntentPressure(
    reason: string,
    load: Partial<RuntimeLoad>,
  ): RuntimeCoherenceReport {
    this.intentLoad = mergeIntentLoad(this.intentLoad, load);
    this.intentCoherence = createCoherenceReport(
      this.intentLoad,
      INTENT_BUS_COHERENCE_CAPACITY,
      this.handledIntentIds.size + this.pendingIntents.size,
      Array.from(new Set([reason])),
    );

    if (this.intentCoherence.state === 'coherent') return this.intentCoherence;

    this.upsertArtifact({
      id: 'coherence:dreamOS:intent-bus',
      kind: 'event',
      title: 'Runtime Coherence · Intent Bus',
      sourceSubsystem: 'DreamOSBus',
      relatedSubsystems: getCapabilitiesForDomains(['logic']).map((capability) => capability.id),
      domains: ['logic', 'memory'],
      payload: { coherence: this.intentCoherence },
    });

    return this.intentCoherence;
  }

  private notify(): void {
    while (this.artifacts.size > MAX_ARTIFACTS) {
      let oldest: string | null = null;
      let oldestTimestamp = Number.POSITIVE_INFINITY;
      for (const [artifactId, artifact] of this.artifacts.entries()) {
        if (artifact.updatedAt < oldestTimestamp) {
          oldest = artifactId;
          oldestTimestamp = artifact.updatedAt;
        }
      }
      if (!oldest) break;
      this.artifacts.delete(oldest);
    }
    const snapshot = this.getSnapshot();
    for (const listener of Array.from(this.listeners)) {
      try {
        listener(snapshot);
      } catch (error: unknown) {
        console.error('[DreamOSBus] listener error', error);
      }
    }
  }
}

export const dreamOSBus = new DreamOSBusImpl();

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.

/** Centers are semantic descriptions of existing capabilities, never new systems. */

export { INFORMATION_DOMAINS };
export type { InformationDomain };
