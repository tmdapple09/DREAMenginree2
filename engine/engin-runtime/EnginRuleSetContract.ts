import {
  isEnginBaseState,
  type EnginBaseState,
  type JsonObject,
  type JsonValue,
} from './EnginBaseState';
import type { EnginCapability } from './EnginCapabilities';
import type { EnginCapabilityProfile } from './EnginCapabilityTargets';











const VERSION_RE = /^\d+\.\d+\.\d+$/;








export interface EnginAction<
  Type extends string = string,
  Payload extends JsonValue = JsonObject,
> {
  type: Type;
  payload?: Payload;
}

export type EnginRuntimeFeature =
  | 'lifecycle-hooks'
  | 'manifest-schema'
  | 'strict-intent-routing'
  | 'sync-transport'
  | 'state-snapshotting'
  | 'compatibility-negotiation'
  | 'coherence-under-load';

export interface EnginCompatibilityRange {
  
  minRuntimeVersion: string;
  
  maxRuntimeVersion?: string;
  
  requiredFeatures: ReadonlyArray<EnginRuntimeFeature>;
}

export interface EnginRuleSetSchema<A extends EnginAction = EnginAction> {
  
  actionTypes: ReadonlyArray<A['type']>;
  
  domainVersion: number;
  
  validateDomain?: (domain: Readonly<JsonObject>) => ConstraintResult;
  
  validateAction?: (action: A) => ConstraintResult;
}

export interface EnginRuleSetManifest<A extends EnginAction = EnginAction> {
  id: string;
  name: string;
  version: string;
  schema: EnginRuleSetSchema<A>;
  compatibility: EnginCompatibilityRange;
}

export interface CompatibilityNegotiationResult {
  compatible: boolean;
  runtimeVersion: string;
  missingFeatures: EnginRuntimeFeature[];
  reason?: string;
}

export interface EnginRuleSetParams {
  
  enginId: string;
  
  name: string;
  
  layoutMode: 'immersive' | 'standard';
  
  accentColor: string;
  
  [key: string]: JsonValue;
}

export interface ConstraintResult {
  valid: boolean;
  
  reason?: string;
}


export type EnginConstraint<A extends EnginAction = EnginAction> = (
  state: EnginBaseState,
  action: A,
) => ConstraintResult;


export type EnginTransform<A extends EnginAction = EnginAction> = (
  state: EnginBaseState,
  action: A,
) => EnginBaseState;


export interface EnginRuleSetContract<A extends EnginAction = EnginAction> {
  
  readonly manifest: EnginRuleSetManifest<A>;

  
  readonly params: EnginRuleSetParams;

  
  readonly requiredCapabilities: ReadonlyArray<EnginCapability>;

  
  readonly capabilityTargets: EnginCapabilityProfile;

  
  readonly constraints: ReadonlyArray<EnginConstraint<A>>;

  
  transform(state: EnginBaseState, action: A): EnginBaseState;

  
  deriveState(state: EnginBaseState): JsonObject;
}



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






