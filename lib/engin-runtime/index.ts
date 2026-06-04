/**
 * lib/engin-runtime/index.ts
 *
 * Barrel export for the universal Engin Runtime Engine.
 *
 * Usage:
 *   import { EnginRuntime, createEnginRuntime } from '@/lib/engin-runtime';
 */

export {
  createBaseState,
  createDomainObject,
  isDomainObject,
  isEnginBaseState,
  isJsonObject,
  isJsonSerializable,
  patchBaseState,
} from './EnginBaseState';
export type {
  CreateDomainObjectInput,
  DomainObject,
  DomainVisibility,
  EnginBaseState,
  JsonArray,
  JsonObject,
  JsonPrimitive,
  JsonValue,
  EnginLifecycle,
} from './EnginBaseState';

export { createEnginEventBus } from './EnginEventBus';
export type {
  EnginEventBus,
  EnginEventMap,
  EnginLifecycleEvents,
} from './EnginEventBus';

export {
  enginStorageKey,
  LocalStorageAdapter,
  MemoryAdapter,
  MemorySyncTransport,
} from './EnginIOAdapter';
export type {
  EnginIOAdapter,
  EnginSyncDirection,
  EnginSyncFrame,
  EnginSyncTransport,
} from './EnginIOAdapter';

export {
  authorizeDomainCapability,
  DEFAULT_USER_CAPABILITIES,
  DENY_ALL,
  gateCapability,
  mergeCapabilities,
} from './EnginCapabilities';
export type {
  CapabilityGateResult,
  DomainAuthorizationContext,
  DomainCapability,
  EnginCapability,
  EnginCapabilityMap,
} from './EnginCapabilities';

export {
  negotiateRuleSetCompatibility,
  validateRuleSetManifest,
  validateRuleSetState,
} from './EnginRuleSetContract';
export type {
  CompatibilityNegotiationResult,
  ConstraintResult,
  EnginAction,
  EnginCompatibilityRange,
  EnginRuntimeFeature,
  EnginRuleSetManifest,
  EnginRuleSetSchema,
  EnginConstraint,
  EnginRuleSetContract,
  EnginRuleSetParams,
  EnginTransform,
} from './EnginRuleSetContract';

export {
  fingerprintBytesWithWasm,
  fingerprintEnginSnapshot,
  hashBytesFNV1A,
  stableStringifySnapshot,
} from './EnginSnapshotFingerprint';
export type { WasmFingerprintExports } from './EnginSnapshotFingerprint';

export {
  createPremiumRuntimeQuality,
  validatePremiumRuntimeQuality,
} from './PremiumRuntimeQuality';
export type {
  PremiumLayerTier,
  PremiumRuntimeMaterial,
  PremiumRuntimeQuality,
  PremiumRuntimeQualityInput,
  PremiumRuntimeQualityValidation,
} from './PremiumRuntimeQuality';

export {
  ENGIN_RUNTIME_FEATURES,
  ENGIN_RUNTIME_VERSION,
  EnginRuntime,
} from './EnginRuntime';
export type { EnginRuntimeOptions } from './EnginRuntime';

// ─── Factory helper ───────────────────────────────────────────────────────────

import type { EnginAction, EnginRuleSetContract } from './EnginRuleSetContract';
import type { EnginRuntimeOptions } from './EnginRuntime';
import { EnginRuntime } from './EnginRuntime';

/**
 * createEnginRuntime(ruleSet, options?)
 *
 * Convenience factory — identical to `new EnginRuntime(...)` but avoids
 * callers needing to import the class directly.
 */
export function createEnginRuntime<
  A extends EnginAction = EnginAction,
  DomainEvents extends Record<string, object> = Record<string, object>,
>(
  ruleSet: EnginRuleSetContract<A>,
  options?: EnginRuntimeOptions,
): EnginRuntime<A, DomainEvents> {
  return new EnginRuntime<A, DomainEvents>(ruleSet, options);
}
