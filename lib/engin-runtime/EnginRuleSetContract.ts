/**
 * lib/engin-runtime/EnginRuleSetContract.ts
 *
 * EnginRuleSetContract — the interface every rule-set must implement.
 *
 * A rule-set is a PURE, STATELESS collection of:
 *   - parameters  : static configuration (layout, accent, names, etc.)
 *   - constraints : validation functions applied to actions before they execute
 *   - transforms  : (state, action) → state — the only way state changes
 *
 * Rule-sets contain ZERO infrastructure (no fetch, no I/O, no hooks).
 * All effects are handled by the EnginRuntime.
 *
 * Architecture: docs/AGENT_PLAYBOOK.md §1 — Foundation.Ruleset.
 */

import {
  isEnginBaseState,
  type EnginBaseState,
  type JsonObject,
  type JsonValue,
} from './EnginBaseState';
import type { EnginCapability } from './EnginCapabilities';
import type { EnginCapabilityProfile } from './EnginCapabilityTargets';

// ─── Actions ─────────────────────────────────────────────────────────────────

/** Discriminated union describing every action a rule-set can handle. */
export interface EnginAction<
  Type extends string = string,
  Payload extends JsonValue = JsonObject,
> {
  type: Type;
  payload?: Payload;
}


// ─── Manifest / schema / compatibility ──────────────────────────────────────

export type EnginRuntimeFeature =
  | 'lifecycle-hooks'
  | 'manifest-schema'
  | 'strict-intent-routing'
  | 'sync-transport'
  | 'state-snapshotting'
  | 'compatibility-negotiation';

export interface EnginCompatibilityRange {
  /** Minimum ι-Engine runtime version this ruleset can run on. */
  minRuntimeVersion: string;
  /** Optional maximum ι-Engine runtime version this ruleset has explicitly accepted. */
  maxRuntimeVersion?: string;
  /** Runtime features the ruleset requires before it may start. */
  requiredFeatures: ReadonlyArray<EnginRuntimeFeature>;
}

export interface EnginRuleSetSchema<A extends EnginAction = EnginAction> {
  /** Exhaustive action type allow-list. Undeclared actions are rejected by the fixed engine. */
  actionTypes: ReadonlyArray<A['type']>;
  /** Domain schema version stored in snapshots and sync frames. */
  domainVersion: number;
  /** Optional domain-state validator owned by the ruleset, not the engine. */
  validateDomain?: (domain: Readonly<JsonObject>) => ConstraintResult;
  /** Optional action payload validator owned by the ruleset, not the engine. */
  validateAction?: (action: A) => ConstraintResult;
}

export interface EnginRuleSetManifest<A extends EnginAction = EnginAction> {
  id: string;
  name: string;
  version: string;
  schema: EnginRuleSetSchema<A>;
  compatibility: EnginCompatibilityRange;
}

const VERSION_RE = /^\d+\.\d+\.\d+$/;

function parseVersion(version: string): [number, number, number] | null {
  if (!VERSION_RE.test(version)) return null;
  return version.split('.').map(Number) as [number, number, number];
}

function compareVersions(a: string, b: string): number {
  const av = parseVersion(a);
  const bv = parseVersion(b);
  if (!av || !bv) throw new Error('Versions must use x.y.z format.');
  for (let i = 0; i < 3; i += 1) {
    if (av[i] !== bv[i]) return av[i] - bv[i];
  }
  return 0;
}

export interface CompatibilityNegotiationResult {
  compatible: boolean;
  runtimeVersion: string;
  missingFeatures: EnginRuntimeFeature[];
  reason?: string;
}

export function validateRuleSetManifest<A extends EnginAction>(
  manifest: EnginRuleSetManifest<A>,
): ConstraintResult {
  if (!manifest || typeof manifest !== 'object')
    return { valid: false, reason: 'Rule-set manifest is required.' };
  if (!manifest.id.trim() || !manifest.name.trim())
    return { valid: false, reason: 'Rule-set manifest requires id and name.' };
  if (!VERSION_RE.test(manifest.version))
    return { valid: false, reason: 'Rule-set manifest version must use x.y.z format.' };
  if (!Number.isInteger(manifest.schema.domainVersion) || manifest.schema.domainVersion < 1)
    return { valid: false, reason: 'Rule-set domain schema version must be a positive integer.' };
  if (manifest.schema.actionTypes.length === 0)
    return { valid: false, reason: 'Rule-set schema must allow at least one action type.' };
  if (new Set(manifest.schema.actionTypes).size !== manifest.schema.actionTypes.length)
    return { valid: false, reason: 'Rule-set schema action types must be unique.' };
  if (!VERSION_RE.test(manifest.compatibility.minRuntimeVersion))
    return { valid: false, reason: 'Rule-set minimum runtime version must use x.y.z format.' };
  if (
    manifest.compatibility.maxRuntimeVersion &&
    !VERSION_RE.test(manifest.compatibility.maxRuntimeVersion)
  ) {
    return { valid: false, reason: 'Rule-set maximum runtime version must use x.y.z format.' };
  }
  return { valid: true };
}

export function negotiateRuleSetCompatibility<A extends EnginAction>(
  manifest: EnginRuleSetManifest<A>,
  runtimeVersion: string,
  runtimeFeatures: ReadonlyArray<EnginRuntimeFeature>,
): CompatibilityNegotiationResult {
  const manifestValidation = validateRuleSetManifest(manifest);
  if (!manifestValidation.valid) {
    return {
      compatible: false,
      runtimeVersion,
      missingFeatures: [],
      reason: manifestValidation.reason,
    };
  }
  const featureSet = new Set(runtimeFeatures);
  const missingFeatures = manifest.compatibility.requiredFeatures.filter(
    (feature) => !featureSet.has(feature),
  );
  if (missingFeatures.length > 0) {
    return {
      compatible: false,
      runtimeVersion,
      missingFeatures,
      reason: `Runtime is missing required features: ${missingFeatures.join(', ')}.`,
    };
  }
  if (compareVersions(runtimeVersion, manifest.compatibility.minRuntimeVersion) < 0) {
    return {
      compatible: false,
      runtimeVersion,
      missingFeatures: [],
      reason: `Runtime ${runtimeVersion} is older than required ${manifest.compatibility.minRuntimeVersion}.`,
    };
  }
  if (
    manifest.compatibility.maxRuntimeVersion &&
    compareVersions(runtimeVersion, manifest.compatibility.maxRuntimeVersion) > 0
  ) {
    return {
      compatible: false,
      runtimeVersion,
      missingFeatures: [],
      reason: `Runtime ${runtimeVersion} is newer than accepted ${manifest.compatibility.maxRuntimeVersion}.`,
    };
  }
  return { compatible: true, runtimeVersion, missingFeatures: [] };
}

export function validateRuleSetState<A extends EnginAction>(
  state: EnginBaseState,
  schema: EnginRuleSetSchema<A>,
): ConstraintResult {
  if (!isEnginBaseState(state))
    return { valid: false, reason: 'Rule-set state is not a valid base state.' };
  return schema.validateDomain?.(state.domain) ?? { valid: true };
}

// ─── Rule-set parameters ──────────────────────────────────────────────────────

export interface EnginRuleSetParams {
  /** Canonical engine identifier. Must match the shell EngineId. */
  enginId: string;
  /** Display name (e.g. "GameEngin"). */
  name: string;
  /** Layout mode — immersive (full canvas) or standard (panelled). */
  layoutMode: 'immersive' | 'standard';
  /** CSS hex accent color. */
  accentColor: string;
  /** Any additional static config the rule-set needs. */
  [key: string]: JsonValue;
}

// ─── Constraint ───────────────────────────────────────────────────────────────

export interface ConstraintResult {
  valid: boolean;
  /** Populated when valid === false. */
  reason?: string;
}

/** A constraint function: returns valid or invalid + reason. */
export type EnginConstraint<A extends EnginAction = EnginAction> = (
  state: EnginBaseState,
  action: A,
) => ConstraintResult;

// ─── Transform ────────────────────────────────────────────────────────────────

/**
 * A transform function: pure mapping from current state + action to next state.
 * MUST NOT cause side-effects.
 */
export type EnginTransform<A extends EnginAction = EnginAction> = (
  state: EnginBaseState,
  action: A,
) => EnginBaseState;

// ─── Rule-set contract ────────────────────────────────────────────────────────

/**
 * EnginRuleSetContract<A>
 *
 * A rule-set is the ONLY thing that knows about domain logic.
 * It never imports infrastructure (Supabase, fetch, localStorage).
 *
 * @template A — the union of all action types this rule-set handles.
 */
export interface EnginRuleSetContract<A extends EnginAction = EnginAction> {
  /** Versioned manifest that lets the fixed engine validate schema and compatibility before start. */
  readonly manifest: EnginRuleSetManifest<A>;

  /** Static parameters for this rule-set. */
  readonly params: EnginRuleSetParams;

  /**
   * Capabilities required for this rule-set to operate correctly.
   * The engine will warn if these capabilities are not granted.
   */
  readonly requiredCapabilities: ReadonlyArray<EnginCapability>;

  /**
   * Internal capability targets that shape architecture decisions for this Engin.
   * These are runtime guardrails, not UI content.
   */
  readonly capabilityTargets: EnginCapabilityProfile;

  /**
   * constraints
   *
   * Called before every transform.  If a constraint returns invalid,
   * the action is rejected and the state is NOT updated.
   */
  readonly constraints: ReadonlyArray<EnginConstraint<A>>;

  /**
   * transform(state, action) → nextState
   *
   * Applies the action to the current state and returns a new state.
   * The default implementation returns state unchanged (identity).
   */
  transform(state: EnginBaseState, action: A): EnginBaseState;

  /**
   * deriveState(state) → domain-specific derived object
   *
   * Projects the base state into whatever shape the UI needs.
   * Called by the engine whenever state changes.
   */
  deriveState(state: EnginBaseState): JsonObject;
}
