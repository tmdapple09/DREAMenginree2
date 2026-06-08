// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: lib/engin-runtime/PremiumRuntimeQuality.ts.

// ── Source Grammar: Rules ─────────────────────────────────────────────────

// Runtime law comments and invariants stay attached to the code they govern.

// ── Source Grammar: Memory ─────────────────────────────────────────────────

// Module-owned constants, caches, refs, and mutable runtime memory.

const VERSION_RE = /^\d+\.\d+\.\d+$/;

const FINGERPRINT_RE = /^[0-9a-f]{8}$/i;

const QUALITY_TIERS: readonly PremiumLayerTier[] = ['standard', 'premium', 'cinematic'];

const MATERIALS: readonly PremiumRuntimeMaterial[] = [
  'standard-glass',
  'glass-chrome-glow',
  'cinematic-glass-chrome-glow',
];

// ── Source Grammar: Dependencies ─────────────────────────────────────────────────

// Imports and external modules this runtime file depends on.

import { type EnginBaseState, type JsonObject } from './EnginBaseState';

import type { EnginRuntimeFeature } from './EnginRuleSetContract';

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

// Types, interfaces, and schemas accepted or provided by this file.

export type PremiumLayerTier = 'standard' | 'premium' | 'cinematic';

export type PremiumRuntimeMaterial = 'standard-glass' | 'glass-chrome-glow' | 'cinematic-glass-chrome-glow';

export interface PremiumRuntimeQuality extends JsonObject {
  engineTier: PremiumLayerTier;
  runtimeTier: PremiumLayerTier;
  surfaceTier: PremiumLayerTier;
  frameBudgetMs: number;
  revision: number;
  snapshotCount: number;
  manifestVersion: string;
  fingerprint: string;
  featureCount: number;
  material: PremiumRuntimeMaterial;
}

export interface PremiumRuntimeQualityInput {
  state: EnginBaseState;
  snapshotCount: number;
  manifestVersion: string;
  fingerprint: string;
  features: readonly EnginRuntimeFeature[];
}

export interface PremiumRuntimeQualityValidation {
  valid: boolean;
  reason?: string;
}

// ── Source Grammar: Actions ─────────────────────────────────────────────────

// Runtime functions, classes, handlers, and state transitions.

function tierForSnapshotCount(snapshotCount: number): PremiumLayerTier {
  if (snapshotCount >= 12) return 'cinematic';
  if (snapshotCount >= 1) return 'premium';
  return 'standard';
}

function materialForSurfaceTier(surfaceTier: PremiumLayerTier): PremiumRuntimeMaterial {
  if (surfaceTier === 'cinematic') return 'cinematic-glass-chrome-glow';
  if (surfaceTier === 'premium') return 'glass-chrome-glow';
  return 'standard-glass';
}

function isTier(value: unknown): value is PremiumLayerTier {
  return typeof value === 'string' && QUALITY_TIERS.includes(value as PremiumLayerTier);
}

function isMaterial(value: unknown): value is PremiumRuntimeMaterial {
  return typeof value === 'string' && MATERIALS.includes(value as PremiumRuntimeMaterial);
}

export function createPremiumRuntimeQuality(
  input: PremiumRuntimeQualityInput,
): PremiumRuntimeQuality {
  const engineTier: PremiumLayerTier = input.features.includes('state-snapshotting')
    ? 'premium'
    : 'standard';
  const runtimeTier: PremiumLayerTier = input.features.includes('sync-transport')
    ? 'premium'
    : 'standard';
  const surfaceTier = tierForSnapshotCount(input.snapshotCount);
  return {
    engineTier,
    runtimeTier,
    surfaceTier,
    frameBudgetMs: runtimeTier === 'premium' ? 16 : 33,
    revision: input.state.revision,
    snapshotCount: input.snapshotCount,
    manifestVersion: input.manifestVersion,
    fingerprint: input.fingerprint,
    featureCount: input.features.length,
    material: materialForSurfaceTier(surfaceTier),
  };
}

/**
 * Runtime policy check for sync-frame quality data.
 *
 * Quality metadata is not decoration: incoming sync frames are accepted only
 * when this policy matches the fingerprint/manifest/revision already proven by
 * the engine. This prevents a frame from claiming premium/cinematic runtime
 * status while carrying stale, corrupted, or incompatible state.
 */
export function validatePremiumRuntimeQuality(
  quality: unknown,
  expected: {
    fingerprint: string;
    manifestVersion: string;
    revision: number;
    minimumFeatureCount: number;
    maxFrameBudgetMs?: number;
  },
): PremiumRuntimeQualityValidation {
  if (!quality || typeof quality !== 'object' || Array.isArray(quality)) {
    return { valid: false, reason: 'Runtime quality metadata is required.' };
  }
  const q = quality as Partial<PremiumRuntimeQuality>;
  if (!isTier(q.engineTier) || !isTier(q.runtimeTier) || !isTier(q.surfaceTier)) {
    return { valid: false, reason: 'Runtime quality tiers are invalid.' };
  }
  if (!isMaterial(q.material)) {
    return { valid: false, reason: 'Runtime quality material is invalid.' };
  }
  if (!Number.isFinite(q.frameBudgetMs) || q.frameBudgetMs! <= 0) {
    return { valid: false, reason: 'Runtime frame budget must be positive.' };
  }
  if (expected.maxFrameBudgetMs && q.frameBudgetMs! > expected.maxFrameBudgetMs) {
    return { valid: false, reason: 'Runtime frame budget exceeds the active policy.' };
  }
  if (!Number.isInteger(q.revision) || q.revision !== expected.revision) {
    return { valid: false, reason: 'Runtime quality revision does not match the snapshot.' };
  }
  if (!Number.isInteger(q.snapshotCount) || q.snapshotCount! < 0) {
    return { valid: false, reason: 'Runtime quality snapshot count is invalid.' };
  }
  if (!VERSION_RE.test(q.manifestVersion ?? '') || q.manifestVersion !== expected.manifestVersion) {
    return { valid: false, reason: 'Runtime quality manifest version does not match the active rule-set.' };
  }
  if (!FINGERPRINT_RE.test(q.fingerprint ?? '') || q.fingerprint !== expected.fingerprint) {
    return { valid: false, reason: 'Runtime quality fingerprint does not match the sync frame.' };
  }
  if (!Number.isInteger(q.featureCount) || q.featureCount! < expected.minimumFeatureCount) {
    return { valid: false, reason: 'Runtime quality feature count is incompatible with this runtime.' };
  }
  if (q.surfaceTier === 'cinematic' && q.snapshotCount! < 12) {
    return { valid: false, reason: 'Cinematic quality requires a cinematic snapshot history.' };
  }
  if (q.surfaceTier === 'premium' && q.snapshotCount! < 1) {
    return { valid: false, reason: 'Premium quality requires at least one runtime snapshot.' };
  }
  const expectedMaterial = materialForSurfaceTier(q.surfaceTier);
  if (q.material !== expectedMaterial) {
    return { valid: false, reason: 'Runtime material does not match the negotiated surface tier.' };
  }
  return { valid: true };
}

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.
