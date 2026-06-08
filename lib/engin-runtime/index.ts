// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: lib/engin-runtime/index.ts.

/**
 * lib/engin-runtime/index.ts
 *
 * Barrel export for the universal Engin Runtime Engine.
 *
 * Usage:
 *   import { EnginRuntime, createEnginRuntime } from '@/lib/engin-runtime';
 */

// ── Source Grammar: Rules ─────────────────────────────────────────────────

// Runtime law comments and invariants stay attached to the code they govern.

// ── Source Grammar: Memory ─────────────────────────────────────────────────

// Module-owned constants, caches, refs, and mutable runtime memory.

// ── Source Grammar: Dependencies ─────────────────────────────────────────────────

// Imports and external modules this runtime file depends on.

// ─── Factory helper ───────────────────────────────────────────────────────────

import type { EnginAction, EnginRuleSetContract } from './EnginRuleSetContract';

import type { EnginRuntimeOptions } from './EnginRuntime';

import { EnginRuntime } from './EnginRuntime';

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

// Types, interfaces, and schemas accepted or provided by this file.

// ── Source Grammar: Actions ─────────────────────────────────────────────────

// Runtime functions, classes, handlers, and state transitions.

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

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.

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
  AudioWorkletRuntime,
  BinaryCommandBus,
  CommandRingBuffer,
  DeferredPersistenceQueue,
  DeferredSyncQueue,
  GpuBufferRegistry,
  HotActionClassifier,
  HotRuntime,
  RevisionCoalescer,
  SnapshotCompactor,
  TypedMemoryArena,
  WasmKernelRuntime,
  WebGPUDeviceRuntime,
  WorkerPoolRuntime,
} from './HotRuntime';

export type { BinaryCommandPacket, GpuBufferKind, HotActionKind, JsonSafeGpuAdapterInfo, WebGPUComputeMeasurement, WebGPUDispatchOptions, WebGPUInitializationResult, WebGPUInitializeOptions, WebGPUInitState } from './HotRuntime';

export { detectEnginHardwareCapabilities, detectWasmSimdSupport, fallbackEnginHardwareCapabilities } from './EnginHardwareCapabilities';

export type { EnginHardwareCapabilities } from './EnginHardwareCapabilities';

export { createEnginCapabilityScorecard } from './EnginCapabilityScorecard';

export type { EnginCapabilityScorecard, EnginCapabilityScorecardEntry, MetricMeasurement, MetricStatus } from './EnginCapabilityScorecard';

export { EnginPerformanceProbe, IdleMemoryProbe, StartupBudgetProbe, gpuMeasurementOrHardwareDependent } from './EnginPerformanceProbe';

export { DevOnlyBenchmarkRunner, InternalOnlyMetricStore, UserFacingMetricLeakTest } from './InternalMetrics';

export * from './EnginDomainCores';

export {
  AudioTrackMixer,
  CodeEditRingBuffer,
  CollaborationDeltaPacker,
  EnginCapabilityExecutionKernel,
  GeometryBatcher,
  MidiEventRingBuffer,
  ParticleSoAKernel,
  RayGridAccelerator,
  VectorPathCache,
  createEnginCapabilityExecutionKernel,
  getEnginExecutionPlan,
} from './EnginCapabilityExecution';

export type {
  CodeEditPatch,
  EnginExecutionPlan,
  ExecutionSubsystem,
  GeometryBatchInput,
  GeometryBatchPlan,
  Ray3,
  RayBox,
  RayHit,
} from './EnginCapabilityExecution';

export {
  CANONICAL_ENGIN_IDS,
  ENGIN_CAPABILITY_PROFILES,
  acceptanceValueForTarget,
  evaluateCapabilityTarget,
  capabilityProfileMatchesRuleSet,
  createCustomEnginCapabilityProfile,
  getEnginCapabilityProfile,
  isCanonicalEnginId,
  isCustomEnginProfileId,
  isEnginProfileId,
  toCustomEnginProfileId,
  validateCanonicalEnginCapabilityProfiles,
  validateEnginCapabilityProfile,
} from './EnginCapabilityTargets';

export type {
  CanonicalEnginId,
  CustomEnginProfileId,
  EnginProfileId,
  CapabilityProfileValidation,
  CapabilityTargetDimension,
  CapabilityTargetDirection,
  CapabilityTargetEvaluation,
  CapabilityTargetUnit,
  EnginCapabilityProfile,
  EnginCapabilityTarget,
} from './EnginCapabilityTargets';

export {
  ENGIN_RUNTIME_FEATURES,
  ENGIN_RUNTIME_VERSION,
  EnginRuntime,
} from './EnginRuntime';

export type { EnginRuntimeOptions } from './EnginRuntime';
