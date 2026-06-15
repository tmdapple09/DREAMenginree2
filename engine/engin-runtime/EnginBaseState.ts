// Framework directives stay physically first when required.

// Runtime file: lib/engin-runtime/EnginBaseState.ts.

/**
 * lib/engin-runtime/EnginBaseState.ts
 *
 * Base state model shared by every Engin.
 *
 * The engine holds a BaseState and a RuleSet. The RuleSet's transform
 * function maps (BaseState, EnginAction) → BaseState; the engine then
 * derives the UI-facing DerivedState by running registered selectors.
 *
 * Architecture: docs/AGENT_PLAYBOOK.md §1 — Foundation.Kernel owns state.
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

const DOMAIN_OBJECT_KEYS = new Set([
  'id',
  'type',
  'ownerId',
  'runtimeId',
  'visibility',
  'createdAt',
  'updatedAt',
  'version',
  'data',
]);

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export type EnginLifecycle =
  | 'idle'
  | 'starting'
  | 'running'
  | 'paused'
  | 'stopping'
  | 'stopped';

export type CoherenceState = 'coherent' | 'strained' | 'saturated' | 'collapsed';

export type CoherenceTransform =
  | 'continue'
  | 'stabilize'
  | 'split'
  | 'merge'
  | 'collapse'
  | 'snapshot'
  | 'degrade'
  | 'reroute'
  | 'redistribute'
  | 'mutate';

export type JsonPrimitive = string | number | boolean | null;

export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

export interface JsonObject {
  readonly [key: string]: JsonValue | undefined;
}

export type JsonArray = readonly JsonValue[];

export interface RuntimeLoad {
  readonly eventPressure: number;
  readonly stateDrift: number;
  readonly conflictCount: number;
  readonly latencyPressure: number;
  readonly invalidMutationCount: number;
  readonly unresolvedIntentCount: number;
}

export interface CoherenceCapacity {
  readonly maxEventPressure: number;
  readonly maxStateDrift: number;
  readonly maxConflictCount: number;
  readonly maxLatencyPressure: number;
  readonly maxInvalidMutations: number;
  readonly maxUnresolvedIntents: number;
}

export interface RuntimeCoherenceReport {
  readonly state: CoherenceState;
  readonly transform: CoherenceTransform;
  readonly load: RuntimeLoad;
  readonly capacity: CoherenceCapacity;
  readonly reasons: readonly string[];
  readonly updatedAt: string;
  readonly revision: number;
}

type RuntimeInspectableValue = unknown;

/** Explicit visibility for every runtime-owned domain object. */
export type DomainVisibility = 'local' | 'shared' | 'global';

/**
 * Canonical envelope shared by Dreams, DreamSpaces, Engins, Rulesets, Intents,
 * Memories, Agents, Windows, and Assets. UI placement never implies ownership.
 */
export type DomainObject<TType extends string, TData extends JsonValue> = {
  id: string;
  type: TType;
  ownerId: string;
  runtimeId: string;
  visibility: DomainVisibility;
  createdAt: string;
  updatedAt: string;
  version: number;
  data: TData;
};

export interface CreateDomainObjectInput<
  TType extends string,
  TData extends JsonValue,
> {
  id: string;
  type: TType;
  ownerId: string;
  runtimeId: string;
  visibility: DomainVisibility;
  data: TData;
  now?: string;
}

/**
 * EnginBaseState — the immutable core state owned by every engine instance.
 *
 * The engine never exposes this directly; the active rule-set transforms it
 * into a domain-specific DerivedState.
 */
export interface EnginBaseState<TDomain extends JsonObject = JsonObject> {
  /** Canonical engine identifier (e.g. 'games', 'music', 'code'). */
  readonly enginId: string;
  /** Current lifecycle stage. */
  readonly lifecycle: EnginLifecycle;
  /** ISO-8601 timestamp of the last state mutation. */
  readonly updatedAt: string;
  /** Monotonically increasing action counter (for optimistic-UI purposes). */
  readonly revision: number;
  /** Runtime coherence under load; rule-sets read it but never manufacture it. */
  readonly coherence?: RuntimeCoherenceReport;
  /** Arbitrary key-value bag owned by the active rule-set. */
  readonly domain: Readonly<TDomain>;
}

// Runtime functions, classes, handlers, and state transitions.

function isNonEmptyString(value: RuntimeInspectableValue): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function hasExactDomainObjectKeys(value: object): boolean {
  const keys = Object.keys(value);
  return (
    keys.length === DOMAIN_OBJECT_KEYS.size &&
    keys.every((key) => DOMAIN_OBJECT_KEYS.has(key))
  );
}

function isCanonicalIsoTimestamp(value: RuntimeInspectableValue): value is string {
  if (typeof value !== 'string') return false;
  const timestamp = Date.parse(value);
  return (
    Number.isFinite(timestamp) && new Date(timestamp).toISOString() === value
  );
}


function isCoherenceState(value: RuntimeInspectableValue): value is CoherenceState {
  return (
    value === 'coherent' ||
    value === 'strained' ||
    value === 'saturated' ||
    value === 'collapsed'
  );
}

function isCoherenceTransform(value: RuntimeInspectableValue): value is CoherenceTransform {
  return (
    value === 'continue' ||
    value === 'stabilize' ||
    value === 'split' ||
    value === 'merge' ||
    value === 'collapse' ||
    value === 'snapshot' ||
    value === 'degrade' ||
    value === 'reroute' ||
    value === 'redistribute' ||
    value === 'mutate'
  );
}

function isFiniteNonNegative(value: RuntimeInspectableValue): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0;
}

function isRuntimeLoad(value: RuntimeInspectableValue): value is RuntimeLoad {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const load = value as Partial<RuntimeLoad>;
  return (
    isFiniteNonNegative(load.eventPressure) &&
    isFiniteNonNegative(load.stateDrift) &&
    isFiniteNonNegative(load.conflictCount) &&
    isFiniteNonNegative(load.latencyPressure) &&
    isFiniteNonNegative(load.invalidMutationCount) &&
    isFiniteNonNegative(load.unresolvedIntentCount)
  );
}

function isCoherenceCapacity(value: RuntimeInspectableValue): value is CoherenceCapacity {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const capacity = value as Partial<CoherenceCapacity>;
  return (
    isFiniteNonNegative(capacity.maxEventPressure) &&
    isFiniteNonNegative(capacity.maxStateDrift) &&
    isFiniteNonNegative(capacity.maxConflictCount) &&
    isFiniteNonNegative(capacity.maxLatencyPressure) &&
    isFiniteNonNegative(capacity.maxInvalidMutations) &&
    isFiniteNonNegative(capacity.maxUnresolvedIntents)
  );
}

export function isRuntimeCoherenceReport(
  value: RuntimeInspectableValue,
): value is RuntimeCoherenceReport {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const report = value as Partial<RuntimeCoherenceReport>;
  return (
    isCoherenceState(report.state) &&
    isCoherenceTransform(report.transform) &&
    isRuntimeLoad(report.load) &&
    isCoherenceCapacity(report.capacity) &&
    Array.isArray(report.reasons) &&
    report.reasons.every((reason) => typeof reason === 'string') &&
    isCanonicalIsoTimestamp(report.updatedAt) &&
    typeof report.revision === 'number' &&
    Number.isInteger(report.revision) &&
    report.revision >= 0
  );
}

/** Return whether a value can cross persistence and transport boundaries without loss. */
export function isJsonSerializable(
  value: RuntimeInspectableValue,
  seen = new Set<object>(),
): value is JsonValue {
  if (value === null) return true;
  if (typeof value === 'string' || typeof value === 'boolean') return true;
  if (typeof value === 'number') return Number.isFinite(value);
  if (typeof value !== 'object' || seen.has(value)) return false;

  seen.add(value);
  const prototype = Object.getPrototypeOf(value);
  const serializable = Array.isArray(value)
    ? value.every((item) => isJsonSerializable(item, seen))
    : (prototype === Object.prototype || prototype === null) &&
      Object.values(value).every((item) =>
        isJsonSerializable(item as RuntimeInspectableValue, seen),
      );
  seen.delete(value);
  return serializable;
}

export function isJsonObject(value: RuntimeInspectableValue): value is JsonObject {
  return (
    !!value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    isJsonSerializable(value)
  );
}

export function isDomainObject(
  value: RuntimeInspectableValue,
): value is DomainObject<string, JsonValue> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  if (!hasExactDomainObjectKeys(value)) return false;
  const object = value as Partial<DomainObject<string, JsonValue>>;
  return (
    isNonEmptyString(object.id) &&
    isNonEmptyString(object.type) &&
    isNonEmptyString(object.ownerId) &&
    isNonEmptyString(object.runtimeId) &&
    (object.visibility === 'local' ||
      object.visibility === 'shared' ||
      object.visibility === 'global') &&
    isCanonicalIsoTimestamp(object.createdAt) &&
    isCanonicalIsoTimestamp(object.updatedAt) &&
    Date.parse(object.updatedAt) >= Date.parse(object.createdAt) &&
    typeof object.version === 'number' &&
    Number.isInteger(object.version) &&
    object.version >= 1 &&
    'data' in object &&
    isJsonSerializable(object.data)
  );
}

export function createDomainObject<TType extends string, TData extends JsonValue>(
  input: CreateDomainObjectInput<TType, TData>,
): DomainObject<TType, TData> {
  const now = input.now ?? new Date().toISOString();
  const object: DomainObject<TType, TData> = {
    id: input.id,
    type: input.type,
    ownerId: input.ownerId,
    runtimeId: input.runtimeId,
    visibility: input.visibility,
    createdAt: now,
    updatedAt: now,
    version: 1,
    data: input.data,
  };
  if (!isDomainObject(object))
    throw new Error('Cannot create an invalid domain object envelope.');
  return object;
}

export function isEnginBaseState(
  value: RuntimeInspectableValue,
): value is EnginBaseState {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const state = value as Partial<EnginBaseState>;
  return (
    isNonEmptyString(state.enginId) &&
    (state.lifecycle === 'idle' ||
      state.lifecycle === 'starting' ||
      state.lifecycle === 'running' ||
      state.lifecycle === 'paused' ||
      state.lifecycle === 'stopping' ||
      state.lifecycle === 'stopped') &&
    isCanonicalIsoTimestamp(state.updatedAt) &&
    typeof state.revision === 'number' &&
    Number.isInteger(state.revision) &&
    state.revision >= 0 &&
    (state.coherence === undefined || isRuntimeCoherenceReport(state.coherence)) &&
    isJsonObject(state.domain)
  );
}


export const DEFAULT_COHERENCE_CAPACITY: CoherenceCapacity = {
  maxEventPressure: 30,
  maxStateDrift: 2,
  maxConflictCount: 4,
  maxLatencyPressure: 250,
  maxInvalidMutations: 3,
  maxUnresolvedIntents: 5,
};

export function createRuntimeLoad(input: Partial<RuntimeLoad> = {}): RuntimeLoad {
  return {
    eventPressure: Math.max(0, input.eventPressure ?? 0),
    stateDrift: Math.max(0, input.stateDrift ?? 0),
    conflictCount: Math.max(0, input.conflictCount ?? 0),
    latencyPressure: Math.max(0, input.latencyPressure ?? 0),
    invalidMutationCount: Math.max(0, input.invalidMutationCount ?? 0),
    unresolvedIntentCount: Math.max(0, input.unresolvedIntentCount ?? 0),
  };
}

export function createCoherenceCapacity(
  input: Partial<CoherenceCapacity> = {},
): CoherenceCapacity {
  return {
    maxEventPressure: Math.max(1, input.maxEventPressure ?? DEFAULT_COHERENCE_CAPACITY.maxEventPressure),
    maxStateDrift: Math.max(0, input.maxStateDrift ?? DEFAULT_COHERENCE_CAPACITY.maxStateDrift),
    maxConflictCount: Math.max(1, input.maxConflictCount ?? DEFAULT_COHERENCE_CAPACITY.maxConflictCount),
    maxLatencyPressure: Math.max(1, input.maxLatencyPressure ?? DEFAULT_COHERENCE_CAPACITY.maxLatencyPressure),
    maxInvalidMutations: Math.max(1, input.maxInvalidMutations ?? DEFAULT_COHERENCE_CAPACITY.maxInvalidMutations),
    maxUnresolvedIntents: Math.max(1, input.maxUnresolvedIntents ?? DEFAULT_COHERENCE_CAPACITY.maxUnresolvedIntents),
  };
}

export function evaluateCoherence(
  load: RuntimeLoad,
  capacity: CoherenceCapacity,
): CoherenceState {
  const saturated =
    load.eventPressure > capacity.maxEventPressure ||
    load.stateDrift > capacity.maxStateDrift ||
    load.conflictCount > capacity.maxConflictCount ||
    load.latencyPressure > capacity.maxLatencyPressure ||
    load.invalidMutationCount > capacity.maxInvalidMutations ||
    load.unresolvedIntentCount > capacity.maxUnresolvedIntents;

  if (saturated) return 'saturated';

  const strained =
    load.eventPressure > capacity.maxEventPressure * 0.75 ||
    load.stateDrift > capacity.maxStateDrift * 0.75 ||
    load.conflictCount > capacity.maxConflictCount * 0.75 ||
    load.latencyPressure > capacity.maxLatencyPressure * 0.75 ||
    load.invalidMutationCount > capacity.maxInvalidMutations * 0.75 ||
    load.unresolvedIntentCount > capacity.maxUnresolvedIntents * 0.75;

  return strained ? 'strained' : 'coherent';
}

export function explainCoherencePressure(
  load: RuntimeLoad,
  capacity: CoherenceCapacity,
): readonly string[] {
  const reasons: string[] = [];
  if (load.eventPressure > capacity.maxEventPressure * 0.75) reasons.push('event-pressure');
  if (load.stateDrift > capacity.maxStateDrift * 0.75) reasons.push('state-drift');
  if (load.conflictCount > capacity.maxConflictCount * 0.75) reasons.push('conflict-count');
  if (load.latencyPressure > capacity.maxLatencyPressure * 0.75) reasons.push('latency-pressure');
  if (load.invalidMutationCount > capacity.maxInvalidMutations * 0.75) reasons.push('invalid-mutation-count');
  if (load.unresolvedIntentCount > capacity.maxUnresolvedIntents * 0.75) reasons.push('unresolved-intent-count');
  return reasons;
}

export function resolveCoherenceTransform(
  state: CoherenceState,
  load: RuntimeLoad,
  capacity: CoherenceCapacity,
): CoherenceTransform {
  if (state === 'coherent') return 'continue';
  if (state === 'strained') return 'stabilize';
  if (state === 'collapsed') return 'redistribute';
  if (load.invalidMutationCount > capacity.maxInvalidMutations) return 'snapshot';
  if (load.unresolvedIntentCount > capacity.maxUnresolvedIntents) return 'reroute';
  if (load.conflictCount > capacity.maxConflictCount) return 'split';
  if (load.stateDrift > capacity.maxStateDrift) return 'snapshot';
  if (load.latencyPressure > capacity.maxLatencyPressure) return 'degrade';
  if (load.eventPressure > capacity.maxEventPressure) return 'redistribute';
  return 'mutate';
}

export function createCoherenceReport(
  load: RuntimeLoad,
  capacity: CoherenceCapacity,
  revision: number,
  reasons: readonly string[] = explainCoherencePressure(load, capacity),
): RuntimeCoherenceReport {
  const state = evaluateCoherence(load, capacity);
  return {
    state,
    transform: resolveCoherenceTransform(state, load, capacity),
    load,
    capacity,
    reasons,
    updatedAt: new Date().toISOString(),
    revision,
  };
}

export function attachCoherenceReport<TDomain extends JsonObject = JsonObject>(
  state: EnginBaseState<TDomain>,
  coherence: RuntimeCoherenceReport,
): EnginBaseState<TDomain> {
  return { ...state, coherence };
}

/** Create the initial base state for an engine. */
export function createBaseState(enginId: string): EnginBaseState {
  return {
    enginId,
    lifecycle: 'idle',
    updatedAt: new Date().toISOString(),
    revision: 0,
    domain: {},
  };
}

/**
 * Produce a new EnginBaseState by merging a partial domain update.
 * The engine calls this internally — rule-sets must not mutate state directly.
 */
export function patchBaseState<TDomain extends JsonObject = JsonObject>(
  prev: EnginBaseState,
  patch: Partial<Omit<EnginBaseState<TDomain>, 'enginId' | 'revision' | 'updatedAt'>>,
): EnginBaseState<TDomain> {
  return {
    ...prev,
    ...patch,
    domain: { ...prev.domain, ...(patch.domain ?? {}) } as TDomain,
    revision: prev.revision + 1,
    updatedAt: new Date().toISOString(),
  };
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
