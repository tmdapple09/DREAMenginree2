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

// ─── Lifecycle ────────────────────────────────────────────────────────────────

export type EnginLifecycle =
  | 'idle'
  | 'starting'
  | 'running'
  | 'paused'
  | 'stopping'
  | 'stopped';

// ─── JSON-safe runtime values ────────────────────────────────────────────────

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;
export interface JsonObject {
  readonly [key: string]: JsonValue | undefined;
}
export type JsonArray = readonly JsonValue[];

type RuntimeInspectableValue = unknown;

// ─── Universal domain object envelope ────────────────────────────────────────

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

function isNonEmptyString(value: RuntimeInspectableValue): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

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

// ─── Base state record ────────────────────────────────────────────────────────

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
  /** Arbitrary key-value bag owned by the active rule-set. */
  readonly domain: Readonly<TDomain>;
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
    isJsonObject(state.domain)
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

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
