// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: lib/engin-runtime/EnginCapabilities.ts.

/**
 * lib/engin-runtime/EnginCapabilities.ts
 *
 * Security / capabilities layer for Engins.
 *
 * Every action that an Engin can perform is declared as a capability string.
 * The engine consults the active capability map before executing each action.
 * Rule-sets declare which capabilities they require; the engine grants or
 * denies them at runtime.
 *
 * Server-side checks remain authoritative — this layer is defence-in-depth
 * on the client.  RLS on Supabase is the final enforcement boundary.
 *
 * Architecture: docs/AXIOMS.md §4 — security by default.
 */

// ── Source Grammar: Rules ─────────────────────────────────────────────────

// Runtime law comments and invariants stay attached to the code they govern.

// ── Source Grammar: Memory ─────────────────────────────────────────────────

// Module-owned constants, caches, refs, and mutable runtime memory.

/** All capabilities denied — safe starting point. */
export const DENY_ALL: EnginCapabilityMap = new Proxy(
  {} as EnginCapabilityMap,
  {
    get: () => false,
  },
);

/** Predefined set for a standard authenticated user. */
export const DEFAULT_USER_CAPABILITIES: EnginCapabilityMap = Object.freeze({
  'state:read': true,
  'state:write': true,
  'persistence:local': true,
  'persistence:remote': false,
  'session:start': true,
  'session:end': true,
  'session:pause': true,
  'session:resume': true,
  'scores:read': true,
  'scores:publish': true,
  'world:edit': true,
  'world:save': true,
  'assets:load': true,
  'assets:upload': false,
  'bridge:emit': true,
  'bridge:listen': true,
  'scripts:edit': false,
  'scripts:run': false,
  'co-op:enable': false,
} as Record<EnginCapability, boolean> as EnginCapabilityMap);

// ── Source Grammar: Dependencies ─────────────────────────────────────────────────

// Imports and external modules this runtime file depends on.

import {
  isDomainObject,
  type DomainObject,
  type JsonValue,
} from './EnginBaseState';

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

// Types, interfaces, and schemas accepted or provided by this file.

// ─── Capability identifiers ───────────────────────────────────────────────────

export type EnginCapability =
  // Persistence
  | 'state:read'
  | 'state:write'
  | 'persistence:local'
  | 'persistence:remote'
  // Session
  | 'session:start'
  | 'session:end'
  | 'session:pause'
  | 'session:resume'
  // Scores / leaderboard
  | 'scores:read'
  | 'scores:publish'
  // World builder
  | 'world:edit'
  | 'world:save'
  // Assets / media
  | 'assets:load'
  | 'assets:upload'
  // Cross-engin
  | 'bridge:emit'
  | 'bridge:listen'
  // Admin / premium
  | 'scripts:edit'
  | 'scripts:run'
  | 'co-op:enable'
  // Custom capability for rule-set extension
  | `custom:${string}`;

// ─── Capability map ───────────────────────────────────────────────────────────

export type EnginCapabilityMap = Readonly<Record<EnginCapability, boolean>>;

// ─── Runtime gate ─────────────────────────────────────────────────────────────

export interface CapabilityGateResult {
  granted: boolean;
  /** Populated when granted === false. */
  reason?: string;
}

// ─── Domain authorization ────────────────────────────────────────────────────

export type DomainCapability =
  | 'read'
  | 'write'
  | 'share'
  | 'move'
  | 'duplicate'
  | 'publish'
  | 'destroy'
  | 'admin';

export interface DomainAuthorizationContext {
  actorId: string;
  runtimeId: string;
  surfaceRuntimeIds: ReadonlyArray<string>;
  collaboration: {
    active: boolean;
    participantIds: ReadonlyArray<string>;
    editorIds: ReadonlyArray<string>;
  };
  admin?: boolean;
}

// ── Source Grammar: Actions ─────────────────────────────────────────────────

// Runtime functions, classes, handlers, and state transitions.

/**
 * gateCapability(map, capability)
 *
 * Returns whether the given capability is granted in the active map.
 * This is the single enforcement point — engine calls this before each action.
 */
export function gateCapability(
  map: EnginCapabilityMap,
  capability: EnginCapability,
): CapabilityGateResult {
  const granted = (map as Record<string, boolean>)[capability] === true;
  return granted
    ? { granted: true }
    : { granted: false, reason: `Capability '${capability}' is not granted.` };
}

/**
 * mergeCapabilities(base, overrides)
 *
 * Returns a new capability map with override values applied on top of base.
 */
export function mergeCapabilities(
  base: EnginCapabilityMap,
  overrides: Partial<Record<EnginCapability, boolean>>,
): EnginCapabilityMap {
  return Object.freeze({
    ...(base as Record<string, boolean>),
    ...overrides,
  }) as EnginCapabilityMap;
}

/** The single capability check for runtime-owned domain objects. */
export function authorizeDomainCapability(
  action: DomainCapability,
  object: DomainObject<string, JsonValue>,
  context: DomainAuthorizationContext,
): CapabilityGateResult {
  if (!context || typeof context !== 'object')
    return { granted: false, reason: 'Authorization context is required.' };
  if (typeof context.actorId !== 'string' || !context.actorId.trim())
    return { granted: false, reason: 'Actor identity is required.' };
  if (typeof context.runtimeId !== 'string' || !context.runtimeId.trim())
    return { granted: false, reason: 'Runtime context is required.' };
  if (!isDomainObject(object))
    return { granted: false, reason: 'Domain object envelope is invalid.' };
  if (!Array.isArray(context.surfaceRuntimeIds))
    return { granted: false, reason: 'Surface scope is invalid.' };
  if (
    !context.collaboration ||
    typeof context.collaboration.active !== 'boolean' ||
    !Array.isArray(context.collaboration.participantIds) ||
    !Array.isArray(context.collaboration.editorIds)
  ) {
    return { granted: false, reason: 'Collaboration state is invalid.' };
  }
  if (!context.surfaceRuntimeIds.includes(context.runtimeId)) {
    return {
      granted: false,
      reason: 'Runtime context is outside the active surface scope.',
    };
  }
  if (!context.surfaceRuntimeIds.includes(object.runtimeId)) {
    return {
      granted: false,
      reason: 'Object is outside the active surface scope.',
    };
  }
  if (object.visibility === 'local' && object.runtimeId !== context.runtimeId) {
    return {
      granted: false,
      reason: 'Local objects cannot cross runtime contexts.',
    };
  }
  if (action === 'admin') {
    return context.admin
      ? { granted: true }
      : { granted: false, reason: 'Admin capability is required.' };
  }
  if (context.admin || object.ownerId === context.actorId)
    return { granted: true };

  const participant =
    context.collaboration.active &&
    context.collaboration.participantIds.includes(context.actorId);
  const editor =
    participant && context.collaboration.editorIds.includes(context.actorId);
  if (
    action === 'read' &&
    (object.visibility === 'global' ||
      (object.visibility === 'shared' && participant))
  ) {
    return { granted: true };
  }
  if (
    (action === 'write' || action === 'duplicate') &&
    object.visibility === 'shared' &&
    object.runtimeId === context.runtimeId &&
    editor
  ) {
    return { granted: true };
  }
  return {
    granted: false,
    reason: `Capability '${action}' is not granted for this domain object.`,
  };
}

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.
