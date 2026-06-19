// Framework directives stay physically first when required.

// Runtime file: lib/engin-runtime/EnginCapabilityTargets.ts.

/**
 * lib/engin-runtime/EnginCapabilityTargets.ts
 *
 * Internal capability target planner for every canonical Engin.
 *
 * These targets are not UI copy. They are architectural guardrails used by
 * rule-sets and the fixed runtime to choose budgets, offload boundaries, and
 * degradation levers without exposing raw performance targets to users.
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

const MINIMUM_PROGRESS = 0.8;

export const ENGIN_CAPABILITY_PROFILES: Readonly<
  Record<CanonicalEnginId, EnginCapabilityProfile>
> = Object.freeze({
  code: profile(
    "code",
    [
      atMost("install-footprint", 80, "mb"),
      atMost("idle-memory", 200, "mb", 120),
      atMost("input-latency", 0.3, "ms", 0.1),
      atMost("startup-time", 0.5, "seconds"),
    ],
    [
      "lazy-load execution runtimes and AI panels behind explicit intents",
      "keep editor state in compact immutable snapshots with bounded history",
      "route keystrokes through local transforms before persistence or sync",
      "prefer WASM workers for parsing and diagnostics once payload size justifies offload",
    ],
  ),
  games: profile(
    "games",
    [
      atLeast("geometry-throughput", 10_000_000, "polygons-per-frame"),
      atMost("gpu-render-latency", 2, "ms", 1),
      atLeast("viewport-framerate", 60, "fps"),
      atLeast("viewport-resolution", 4, "k"),
    ],
    [
      "use WebGPU-first Babylon render paths with adaptive material tiers",
      "batch scene graph mutations through intent snapshots between frames",
      "stream cartridge assets by visibility and distance from the active camera",
      "keep controller input on a separate low-latency channel from persistence",
    ],
  ),
  music: profile(
    "music",
    [
      atMost("audio-latency", 0.1, "ms"),
      atLeast("track-count", 256, "tracks"),
      atLeast("audio-bit-depth", 32, "bit"),
      atLeast("audio-sample-rate", 192, "khz"),
      atMost("midi-latency", 0.5, "ms"),
      atMost("round-trip-audio", 8, "ms"),
    ],
    [
      "schedule audio in AudioWorklet/WASM islands instead of React render loops",
      "pool track buffers and apply frozen graph diffs at quantum boundaries",
      "keep MIDI event routing on the intent bus with monotonic timestamps",
      "degrade visual metering before changing transport timing",
    ],
  ),
  create: profile(
    "create",
    [
      atLeast("geometry-throughput", 100_000_000, "polygons-per-frame"),
      atMost("ray-intersection", 2, "ms", 1),
      atMost("offline-frame-render", 5, "seconds", 2),
      atLeast("gpu-compute-throughput", 82, "tflops"),
    ],
    [
      "stage render jobs as declarative scene snapshots for worker/GPU execution",
      "prioritize deterministic AABB ray scanning, instancing, and tile-based progressive output",
      "separate creative timeline edits from heavyweight render dispatch",
      "negotiate local, shared, or remote execution without changing rule-set shape",
    ],
  ),
  brand: profile(
    "brand",
    [
      atMost("ui-response", 0.5, "ms"),
      atMost("vector-render-latency", 2, "ms", 1),
      atMost("file-open-time", 50, "ms"),
      atMost("collaboration-sync", 5, "ms", 3),
    ],
    [
      "store brand assets as envelope-owned vectors and compact manifests",
      "cache resolved palettes, type scales, and vector paths per runtime snapshot",
      "sync collaboration deltas through transport frames instead of component state",
      "load heavy files through staged previews before full fidelity hydration",
    ],
  ),
  lab: profile(
    "lab",
    [
      atMost("physics-loop-64k", 0.5, "ms"),
      atMost("physics-loop-1m", 3, "ms", 2),
      atMost("collision-detection", 50, "ns"),
      atMost("gpu-compute-latency", 0.2, "ms"),
    ],
    [
      "move particle and collision kernels to WebGPU compute or WASM SIMD workers",
      "snapshot simulation state separately from visual inspection panels",
      "use broad-phase spatial grids before narrow-phase collision checks",
      "degrade chart density before reducing simulation-step precision",
    ],
  ),
  render: profile(
    "render",
    [
      atLeast("viewport-framerate", 30, "fps"),
      atMost("gpu-render-latency", 16.7, "ms"),
      atLeast("geometry-throughput", 1_000_000, "polygons-per-frame"),
      atLeast("viewport-resolution", 1, "k"),
    ],
    [
      "route every viewport, asset, camera, material, and frame mutation through RenderEngin intents",
      "keep WebGPU resources behind client-only lifecycle boundaries with explicit disposal",
      "snapshot serializable scene state separately from uploaded GPU buffers",
      "negotiate browser compatibility before loading user assets or issuing GPU work",
    ],
  ),
});

export const CANONICAL_ENGIN_IDS: readonly CanonicalEnginId[] = Object.freeze([
  "code",
  "games",
  "music",
  "create",
  "brand",
  "lab",
  "render",
]);

export const CANONICAL_ENGIN_ALIASES: Readonly<
  Record<CanonicalEnginId, ReadonlyArray<string>>
> = Object.freeze({
  code: Object.freeze(["code", "CodeEngin"]),
  games: Object.freeze(["games", "game", "GameEngin"]),
  music: Object.freeze(["music", "starmaker", "StarMakerEngin"]),
  create: Object.freeze(["create", "content", "ContentEngin"]),
  brand: Object.freeze(["brand", "branding", "BrandingEngin"]),
  lab: Object.freeze(["lab", "LabEngin"]),
  render: Object.freeze(["render", "RenderEngin", "renderengin"]),
});

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export type CanonicalEnginId =
  | "code"
  | "games"
  | "music"
  | "create"
  | "brand"
  | "lab"
  | "render";

export type CustomEnginProfileId = string;

export type EnginProfileId = CanonicalEnginId | CustomEnginProfileId;

export type CapabilityTargetDimension =
  | "install-footprint"
  | "idle-memory"
  | "input-latency"
  | "startup-time"
  | "geometry-throughput"
  | "gpu-render-latency"
  | "viewport-framerate"
  | "viewport-resolution"
  | "audio-latency"
  | "track-count"
  | "audio-bit-depth"
  | "audio-sample-rate"
  | "midi-latency"
  | "round-trip-audio"
  | "ray-intersection"
  | "offline-frame-render"
  | "gpu-compute-throughput"
  | "ui-response"
  | "vector-render-latency"
  | "file-open-time"
  | "collaboration-sync"
  | "physics-loop-64k"
  | "physics-loop-1m"
  | "collision-detection"
  | "gpu-compute-latency";

export type CapabilityTargetUnit =
  | "mb"
  | "ms"
  | "fps"
  | "k"
  | "polygons-per-frame"
  | "tracks"
  | "bit"
  | "khz"
  | "seconds"
  | "tflops"
  | "ns";

export type CapabilityTargetDirection = "at-most" | "at-least";

export interface EnginCapabilityTarget {
  readonly dimension: CapabilityTargetDimension;
  readonly direction: CapabilityTargetDirection;
  readonly target: number;
  readonly unit: CapabilityTargetUnit;
  /** Minimum normalized progress that counts as acceptable. */
  readonly minimumProgress: number;
  readonly preferredTarget?: number;
}

export interface EnginCapabilityProfile {
  readonly enginId: EnginProfileId;
  readonly targets: ReadonlyArray<EnginCapabilityTarget>;
  /** Architecture decisions the Engin must honor to move toward the targets. */
  readonly levers: ReadonlyArray<string>;
}

export interface CapabilityTargetEvaluation extends EnginCapabilityTarget {
  readonly acceptanceValue: number;
  readonly acceptanceDescription: string;
}

export interface CapabilityProfileValidation {
  readonly valid: boolean;
  readonly enginId: EnginProfileId;
  readonly evaluations: ReadonlyArray<CapabilityTargetEvaluation>;
  readonly reason?: string;
}

// Runtime functions, classes, handlers, and state transitions.

function atMost(
  dimension: CapabilityTargetDimension,
  target: number,
  unit: CapabilityTargetUnit,
  preferredTarget?: number,
): EnginCapabilityTarget {
  return Object.freeze({
    dimension,
    direction: "at-most",
    target,
    unit,
    minimumProgress: MINIMUM_PROGRESS,
    ...(preferredTarget === undefined ? {} : { preferredTarget }),
  });
}

function atLeast(
  dimension: CapabilityTargetDimension,
  target: number,
  unit: CapabilityTargetUnit,
): EnginCapabilityTarget {
  return Object.freeze({
    dimension,
    direction: "at-least",
    target,
    unit,
    minimumProgress: MINIMUM_PROGRESS,
  });
}

function profile(
  enginId: EnginProfileId,
  targets: ReadonlyArray<EnginCapabilityTarget>,
  levers: ReadonlyArray<string>,
): EnginCapabilityProfile {
  return Object.freeze({
    enginId,
    targets: Object.freeze([...targets]),
    levers: Object.freeze([...levers]),
  });
}

export function acceptanceValueForTarget(
  target: EnginCapabilityTarget,
): number {
  return target.direction === "at-least"
    ? target.target * target.minimumProgress
    : target.target / target.minimumProgress;
}

export function evaluateCapabilityTarget(
  target: EnginCapabilityTarget,
): CapabilityTargetEvaluation {
  const acceptanceValue = acceptanceValueForTarget(target);
  const comparator = target.direction === "at-least" ? ">=" : "<=";
  return Object.freeze({
    ...target,
    acceptanceValue,
    acceptanceDescription: `${comparator} ${acceptanceValue} ${target.unit}`,
  });
}

export function validateEnginCapabilityProfile(
  profileToValidate: EnginCapabilityProfile,
): CapabilityProfileValidation {
  if (
    typeof profileToValidate.enginId !== "string" ||
    profileToValidate.enginId.trim().length === 0
  ) {
    return {
      valid: false,
      enginId: profileToValidate.enginId,
      evaluations: [],
      reason: "Capability profile must use a non-empty Engin id.",
    };
  }
  if (profileToValidate.targets.length === 0) {
    return {
      valid: false,
      enginId: profileToValidate.enginId,
      evaluations: [],
      reason: "Capability profile must declare at least one target.",
    };
  }
  if (profileToValidate.levers.length === 0) {
    return {
      valid: false,
      enginId: profileToValidate.enginId,
      evaluations: [],
      reason: "Capability profile must declare architecture levers.",
    };
  }
  const seen = new Set<CapabilityTargetDimension>();
  const evaluations = profileToValidate.targets.map(evaluateCapabilityTarget);
  for (const target of evaluations) {
    if (seen.has(target.dimension)) {
      return {
        valid: false,
        enginId: profileToValidate.enginId,
        evaluations,
        reason: `Duplicate capability target dimension '${target.dimension}'.`,
      };
    }
    seen.add(target.dimension);
    if (!Number.isFinite(target.target) || target.target <= 0) {
      return {
        valid: false,
        enginId: profileToValidate.enginId,
        evaluations,
        reason: `Capability target '${target.dimension}' must be positive.`,
      };
    }
    if (
      target.minimumProgress < MINIMUM_PROGRESS ||
      target.minimumProgress > 1
    ) {
      return {
        valid: false,
        enginId: profileToValidate.enginId,
        evaluations,
        reason: `Capability target '${target.dimension}' has an invalid minimum progress.`,
      };
    }
    if (
      target.preferredTarget !== undefined &&
      (!Number.isFinite(target.preferredTarget) || target.preferredTarget <= 0)
    ) {
      return {
        valid: false,
        enginId: profileToValidate.enginId,
        evaluations,
        reason: `Capability target '${target.dimension}' has an invalid preferred target.`,
      };
    }
  }
  return { valid: true, enginId: profileToValidate.enginId, evaluations };
}

export function isCanonicalEnginId(value: string): value is CanonicalEnginId {
  return CANONICAL_ENGIN_IDS.includes(value as CanonicalEnginId);
}

export function isCustomEnginProfileId(
  value: string,
): value is CustomEnginProfileId {
  return value.trim().length > 0 && !isCanonicalEnginId(value);
}

export function isEnginProfileId(value: string): value is EnginProfileId {
  return value.trim().length > 0;
}

export function toCustomEnginProfileId(rawId: string): CustomEnginProfileId {
  const normalized = rawId
    .trim()
    .replace(/[^a-z0-9._-]+/gi, "-")
    .replace(/^-+|-+$/g, "");
  if (!normalized) throw new Error("Custom Engin id is required.");
  return normalized as CustomEnginProfileId;
}

export function createCustomEnginCapabilityProfile(
  enginId: EnginProfileId,
  levers: ReadonlyArray<string> = [
    "use the fixed runtime for state, sync, lifecycle, and persistence",
    "route high-frequency actions through hot runtime queues",
    "defer persistence, snapshots, sync, and diagnostics behind local application",
  ],
): EnginCapabilityProfile {
  return profile(
    enginId,
    [
      atMost("ui-response", 1, "ms"),
      atMost("idle-memory", 160, "mb"),
      atMost("startup-time", 1, "seconds"),
      atMost("collaboration-sync", 8, "ms"),
    ],
    levers,
  );
}

function canonicalProfileAlias(value: string): CanonicalEnginId | null {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/engin$/i, "");
  for (const canonicalId of CANONICAL_ENGIN_IDS) {
    if (
      CANONICAL_ENGIN_ALIASES[canonicalId].some(
        (alias) => alias.toLowerCase().replace(/engin$/i, "") === normalized,
      )
    ) {
      return canonicalId;
    }
  }
  return null;
}

export function capabilityProfileMatchesRuleSet(
  ruleSetEnginId: EnginProfileId,
  profileEnginId: EnginProfileId,
): boolean {
  if (ruleSetEnginId === profileEnginId) return true;
  const ruleSetCanonical = canonicalProfileAlias(ruleSetEnginId);
  const profileCanonical = canonicalProfileAlias(profileEnginId);
  if (ruleSetCanonical === null || profileCanonical === null) return false;
  return ruleSetCanonical === profileCanonical;
}

export function getEnginCapabilityProfile(
  enginId: CanonicalEnginId,
): EnginCapabilityProfile {
  return ENGIN_CAPABILITY_PROFILES[enginId];
}

export function validateCanonicalEnginCapabilityProfiles(): CapabilityProfileValidation[] {
  return CANONICAL_ENGIN_IDS.map((enginId) =>
    validateEnginCapabilityProfile(ENGIN_CAPABILITY_PROFILES[enginId]),
  );
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
