import {
  isCanonicalEnginId,
  type CanonicalEnginId,
  type EnginCapabilityProfile,
  type EnginProfileId,
} from "./EnginCapabilityTargets";

// Framework directives stay physically first when required.

// Runtime file: lib/engin-runtime/EnginCapabilityExecution.ts.

/**
 * lib/engin-runtime/EnginCapabilityExecution.ts
 *
 * Concrete execution fast paths for canonical Engins. The profiles say what
 * each Engin must chase; this file owns the hot-path machinery that makes the
 * runtime move toward those targets without putting raw metrics in UI copy.
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

const EXECUTION_PLANS: Readonly<Record<CanonicalEnginId, EnginExecutionPlan>> =
  Object.freeze({
    code: executionPlan({
      enginId: "code",
      realtimeActionTypes: [
        "code:cell-update",
        "code:cell-activate",
        "code:zoom-set",
      ],
      syncCadenceRevisions: 8,
      subsystems: ["coalesced-runtime-work", "typed-array-state"],
      workerPreferred: true,
    }),
    games: executionPlan({
      enginId: "games",
      realtimeActionTypes: [
        "game:control-profile",
        "game:immersive-toggle",
        "game:physics-apply",
      ],
      syncCadenceRevisions: 4,
      subsystems: [
        "coalesced-runtime-work",
        "instanced-geometry",
        "deterministic-aabb-ray-scan",
        "gpu-compute-dispatch",
      ],
      workerPreferred: true,
    }),
    music: executionPlan({
      enginId: "music",
      realtimeActionTypes: [
        "music:bpm-set",
        "music:volume-set",
        "music:transport-start",
        "music:transport-stop",
        "music:track-toggle",
      ],
      syncCadenceRevisions: 16,
      subsystems: [
        "coalesced-runtime-work",
        "audio-worklet-buffer",
        "midi-ring-buffer",
        "typed-array-state",
      ],
      workerPreferred: true,
    }),
    create: executionPlan({
      enginId: "create",
      realtimeActionTypes: [
        "content:item-add",
        "content:asset-stage",
        "content:render-preview",
      ],
      syncCadenceRevisions: 4,
      subsystems: [
        "coalesced-runtime-work",
        "instanced-geometry",
        "deterministic-aabb-ray-scan",
        "gpu-compute-dispatch",
      ],
      workerPreferred: true,
    }),
    brand: executionPlan({
      enginId: "brand",
      realtimeActionTypes: [
        "brand:asset-add",
        "brand:metrics-refresh",
        "brand:check-received",
      ],
      syncCadenceRevisions: 4,
      subsystems: [
        "coalesced-runtime-work",
        "vector-cache",
        "collaboration-delta-pack",
      ],
      workerPreferred: false,
    }),
    lab: executionPlan({
      enginId: "lab",
      realtimeActionTypes: [
        "lab:sim-start",
        "lab:physics-received",
        "lab:chart-type",
      ],
      syncCadenceRevisions: 2,
      subsystems: [
        "coalesced-runtime-work",
        "particle-struct-of-arrays",
        "deterministic-aabb-ray-scan",
        "gpu-compute-dispatch",
      ],
      workerPreferred: true,
    }),
    render: executionPlan({
      enginId: "render",
      realtimeActionTypes: [
        "render.camera.orbit",
        "render.camera.zoom",
        "render.object.transform",
        "render.viewport.resize",
        "render.frame.render",
      ],
      syncCadenceRevisions: 2,
      subsystems: [
        "coalesced-runtime-work",
        "instanced-geometry",
        "deterministic-aabb-ray-scan",
        "gpu-compute-dispatch",
      ],
      workerPreferred: true,
    }),
  });

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export type ExecutionSubsystem =
  | "coalesced-runtime-work"
  | "typed-array-state"
  | "instanced-geometry"
  | "deterministic-aabb-ray-scan"
  | "audio-worklet-buffer"
  | "midi-ring-buffer"
  | "vector-cache"
  | "collaboration-delta-pack"
  | "particle-struct-of-arrays"
  | "gpu-compute-dispatch";

export interface EnginExecutionPlan {
  readonly enginId: string;
  readonly realtimeActionTypes: ReadonlyArray<string>;
  readonly syncCadenceRevisions: number;
  readonly subsystems: ReadonlyArray<ExecutionSubsystem>;
  readonly workerPreferred: boolean;
}

export interface CodeEditPatch {
  readonly cellId: string;
  readonly start: number;
  readonly deleteCount: number;
  readonly insertText: string;
}

export interface GeometryBatchInput {
  readonly sourceMeshPolygons: number;
  readonly instances: number;
  readonly materialBuckets: number;
  readonly maxInstancesPerDraw?: number;
}

export interface GeometryBatchPlan {
  readonly totalPolygons: number;
  readonly drawCalls: number;
  readonly instanceBatches: number;
  readonly polygonsPerDraw: number;
}

export interface RayBox {
  readonly minX: number;
  readonly minY: number;
  readonly minZ: number;
  readonly maxX: number;
  readonly maxY: number;
  readonly maxZ: number;
}

export interface Ray3 {
  readonly originX: number;
  readonly originY: number;
  readonly originZ: number;
  readonly dirX: number;
  readonly dirY: number;
  readonly dirZ: number;
}

export interface RayHit {
  readonly index: number;
  readonly distance: number;
}

// Runtime functions, classes, handlers, and state transitions.

function executionPlan(plan: EnginExecutionPlan): EnginExecutionPlan {
  return Object.freeze({
    ...plan,
    realtimeActionTypes: Object.freeze([...plan.realtimeActionTypes]),
    subsystems: Object.freeze([...plan.subsystems]),
  });
}

function defaultPlan(enginId: EnginProfileId): EnginExecutionPlan {
  return executionPlan({
    enginId,
    realtimeActionTypes: [],
    syncCadenceRevisions: 1,
    subsystems: ["coalesced-runtime-work"],
    workerPreferred: false,
  });
}

function clampPositiveInteger(value: number, fallback: number): number {
  return Number.isFinite(value) && value > 0 ? Math.floor(value) : fallback;
}

export function getEnginExecutionPlan(
  enginId: EnginProfileId,
): EnginExecutionPlan {
  return isCanonicalEnginId(enginId)
    ? EXECUTION_PLANS[enginId]
    : defaultPlan(enginId);
}

export class CodeEditRingBuffer {
  private readonly patches: CodeEditPatch[];
  private cursor = 0;
  private filled = 0;

  constructor(capacity = 2048) {
    this.patches = new Array<CodeEditPatch>(
      clampPositiveInteger(capacity, 2048),
    );
  }

  push(patch: CodeEditPatch): void {
    this.patches[this.cursor] = patch;
    this.cursor = (this.cursor + 1) % this.patches.length;
    this.filled = Math.min(this.filled + 1, this.patches.length);
  }

  drain(): CodeEditPatch[] {
    const start =
      (this.cursor - this.filled + this.patches.length) % this.patches.length;
    const out: CodeEditPatch[] = [];
    for (let offset = 0; offset < this.filled; offset += 1) {
      out.push(this.patches[(start + offset) % this.patches.length]);
    }
    this.filled = 0;
    return out;
  }

  get size(): number {
    return this.filled;
  }
}

export class GeometryBatcher {
  buildPlan(input: GeometryBatchInput): GeometryBatchPlan {
    const sourceMeshPolygons = clampPositiveInteger(
      input.sourceMeshPolygons,
      1,
    );
    const instances = clampPositiveInteger(input.instances, 1);
    const materialBuckets = clampPositiveInteger(input.materialBuckets, 1);
    const maxInstancesPerDraw = clampPositiveInteger(
      input.maxInstancesPerDraw ?? 65_535,
      65_535,
    );
    const instanceBatches = Math.ceil(instances / maxInstancesPerDraw);
    const drawCalls = instanceBatches * materialBuckets;
    const totalPolygons = sourceMeshPolygons * instances;
    return Object.freeze({
      totalPolygons,
      drawCalls,
      instanceBatches,
      polygonsPerDraw: Math.floor(totalPolygons / Math.max(1, drawCalls)),
    });
  }
}

/**
 * Deterministic AABB scanner used by ray tests and CPU fallback paths.
 *
 * This class intentionally does not claim to be a BVH, spatial grid, or
 * WebGPU accelerator: it keeps a flat ordered box list and returns the nearest
 * AABB hit by scanning that list. Keep the historical class name to avoid
 * rippling public imports while making the actual execution model explicit.
 */
export class RayGridAccelerator {
  private boxes: RayBox[] = [];

  rebuild(boxes: ReadonlyArray<RayBox>): void {
    this.boxes = [...boxes];
  }

  intersect(ray: Ray3): RayHit | null {
    let nearest: RayHit | null = null;
    for (let index = 0; index < this.boxes.length; index += 1) {
      const distance = intersectAabb(ray, this.boxes[index]);
      if (distance === null) continue;
      if (!nearest || distance < nearest.distance)
        nearest = { index, distance };
    }
    return nearest;
  }
}

function intersectAabb(ray: Ray3, box: RayBox): number | null {
  let tMin = 0;
  let tMax = Number.POSITIVE_INFINITY;
  const axes = [
    [ray.originX, ray.dirX, box.minX, box.maxX],
    [ray.originY, ray.dirY, box.minY, box.maxY],
    [ray.originZ, ray.dirZ, box.minZ, box.maxZ],
  ] as const;
  for (const [origin, direction, min, max] of axes) {
    if (Math.abs(direction) < Number.EPSILON) {
      if (origin < min || origin > max) return null;
      continue;
    }
    const inv = 1 / direction;
    let t1 = (min - origin) * inv;
    let t2 = (max - origin) * inv;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tMin = Math.max(tMin, t1);
    tMax = Math.min(tMax, t2);
    if (tMin > tMax) return null;
  }
  return tMin;
}

export class AudioTrackMixer {
  readonly samples: Float32Array;
  readonly gains: Float32Array;

  constructor(trackCount = 256, quantumFrames = 128) {
    this.samples = new Float32Array(
      clampPositiveInteger(trackCount, 256) *
        clampPositiveInteger(quantumFrames, 128),
    );
    this.gains = new Float32Array(clampPositiveInteger(trackCount, 256));
    this.gains.fill(1);
  }

  mixInto(output: Float32Array): void {
    output.fill(0);
    const trackCount = this.gains.length;
    const quantumFrames = output.length;
    for (let track = 0; track < trackCount; track += 1) {
      const gain = this.gains[track];
      const offset = track * quantumFrames;
      for (let frame = 0; frame < quantumFrames; frame += 1) {
        output[frame] += this.samples[offset + frame] * gain;
      }
    }
  }
}

export class MidiEventRingBuffer {
  private readonly capacity: number;
  private readonly queue: Array<
    [timestamp: number, note: number, velocity: number]
  > = [];
  constructor(capacity = 4096) {
    this.capacity = clampPositiveInteger(capacity, 4096);
  }

  push(timestamp: number, note: number, velocity: number): void {
    const event: [number, number, number] = [timestamp, note, velocity];
    if (this.queue.length === this.capacity) this.queue.shift();
    let insertAt = this.queue.length;
    for (let index = this.queue.length - 1; index >= 0; index -= 1) {
      if (this.queue[index][0] <= timestamp) break;
      insertAt = index;
    }
    this.queue.splice(insertAt, 0, event);
  }

  drainDue(now: number): Float64Array {
    const due: number[] = [];
    let dueCount = 0;
    while (dueCount < this.queue.length && this.queue[dueCount][0] <= now) {
      const event = this.queue[dueCount];
      due.push(event[0], event[1], event[2]);
      dueCount += 1;
    }
    if (dueCount > 0) this.queue.splice(0, dueCount);
    return Float64Array.from(due);
  }

  get size(): number {
    return this.queue.length;
  }
}

export class VectorPathCache {
  private readonly cache = new Map<string, Float32Array>();

  getOrBuild(key: string, build: () => Float32Array): Float32Array {
    const existing = this.cache.get(key);
    if (existing) return existing;
    const next = build();
    this.cache.set(key, next);
    return next;
  }

  get size(): number {
    return this.cache.size;
  }
}

export class CollaborationDeltaPacker {
  pack(
    sequence: number,
    actorHash: number,
    payloadBytes: Uint8Array,
  ): Uint8Array {
    const out = new Uint8Array(8 + payloadBytes.length);
    const view = new DataView(out.buffer);
    view.setUint32(0, sequence, true);
    view.setUint32(4, actorHash, true);
    out.set(payloadBytes, 8);
    return out;
  }
}

export class ParticleSoAKernel {
  readonly x: Float32Array;
  readonly y: Float32Array;
  readonly z: Float32Array;
  readonly vx: Float32Array;
  readonly vy: Float32Array;
  readonly vz: Float32Array;

  constructor(count: number) {
    const n = clampPositiveInteger(count, 65_536);
    this.x = new Float32Array(n);
    this.y = new Float32Array(n);
    this.z = new Float32Array(n);
    this.vx = new Float32Array(n);
    this.vy = new Float32Array(n);
    this.vz = new Float32Array(n);
  }

  integrate(dtSeconds: number): void {
    const dt = Number.isFinite(dtSeconds) ? dtSeconds : 0;
    for (let i = 0; i < this.x.length; i += 1) {
      this.x[i] += this.vx[i] * dt;
      this.y[i] += this.vy[i] * dt;
      this.z[i] += this.vz[i] * dt;
    }
  }
}

export class EnginCapabilityExecutionKernel {
  readonly plan: EnginExecutionPlan;
  readonly codeEdits: CodeEditRingBuffer;
  readonly geometry: GeometryBatcher;
  readonly rays: RayGridAccelerator;
  readonly audio: AudioTrackMixer;
  readonly midi: MidiEventRingBuffer;
  readonly vectors: VectorPathCache;
  readonly collaboration: CollaborationDeltaPacker;

  constructor(profile: EnginCapabilityProfile) {
    this.plan = getEnginExecutionPlan(profile.enginId);
    this.codeEdits = new CodeEditRingBuffer();
    this.geometry = new GeometryBatcher();
    this.rays = new RayGridAccelerator();
    this.audio = new AudioTrackMixer();
    this.midi = new MidiEventRingBuffer();
    this.vectors = new VectorPathCache();
    this.collaboration = new CollaborationDeltaPacker();
  }

  isRealtimeAction(actionType: string): boolean {
    return this.plan.realtimeActionTypes.includes(actionType);
  }

  shouldDeferRuntimeWork(actionType: string): boolean {
    return (
      this.isRealtimeAction(actionType) &&
      this.plan.subsystems.includes("coalesced-runtime-work")
    );
  }
}

export function createEnginCapabilityExecutionKernel(
  profile: EnginCapabilityProfile,
): EnginCapabilityExecutionKernel {
  return new EnginCapabilityExecutionKernel(profile);
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
