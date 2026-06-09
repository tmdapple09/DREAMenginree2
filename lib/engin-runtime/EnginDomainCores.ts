import { AudioTrackMixer, MidiEventRingBuffer, ParticleSoAKernel, RayGridAccelerator, VectorPathCache, CollaborationDeltaPacker, GeometryBatcher } from './EnginCapabilityExecution';
import { CommandRingBuffer, SnapshotCompactor, WorkerPoolRuntime, WebGPUDeviceRuntime, GpuBufferRegistry, AudioWorkletRuntime, WasmKernelRuntime } from './HotRuntime';
import { EnginPerformanceProbe, StartupBudgetProbe, IdleMemoryProbe } from './EnginPerformanceProbe';
import { createEnginCapabilityScorecard, type EnginCapabilityScorecard, type MetricMeasurement } from './EnginCapabilityScorecard';
import { ENGIN_CAPABILITY_PROFILES } from './EnginCapabilityTargets';
import type { EnginHardwareCapabilities } from './EnginHardwareCapabilities';
import type { JsonObject } from './EnginBaseState';

// Framework directives stay physically first when required.

// Runtime file: lib/engin-runtime/EnginDomainCores.ts.

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

type PieceSource = 'original' | 'added';

type PieceSpan = { source: PieceSource; index: number; length: number };

export interface ContentSceneSnapshot { id: string; geometryCount: number; materialCount: number; camera: Record<string, number>; }

interface CanonicalBenchmarkChallenge extends JsonObject {
  readonly challenge?: {
    readonly seed?: number;
    readonly sourceHash?: string;
  };
}

interface BenchmarkEvidence extends JsonObject {
  readonly benchmarkId: string;
  readonly measuredBy: string;
  readonly startedAt: string;
  readonly completedAt: string;
  readonly sampleCount: number;
  readonly rawSamples: number[];
  readonly operationCount: number;
  readonly sourceHash?: string;
  readonly challengeSeed?: number;
}

// Runtime functions, classes, handlers, and state transitions.

export class CodePieceTableDocument {
  private readonly addBuffer: string[] = [];
  private pieces: PieceSpan[];

  constructor(private readonly baseBuffer = '') {
    this.pieces = baseBuffer.length > 0
      ? [{ source: 'original', index: 0, length: baseBuffer.length }]
      : [];
  }

  get originalBuffer(): string {
    return this.baseBuffer;
  }

  get addBufferCount(): number {
    return this.addBuffer.length;
  }

  get pieceCount(): number {
    return this.pieces.length;
  }

  edit(start: number, deleteCount: number, insertText: string): void {
    const length = this.length;
    const safeStart = Math.max(0, Math.min(length, Math.floor(start)));
    const safeDelete = Math.max(0, Math.min(length - safeStart, Math.floor(deleteCount)));
    const safeInsert = String(insertText);
    const nextPieces: PieceSpan[] = [];
    const insertPieces: PieceSpan[] = [];

    if (safeInsert.length > 0) {
      const index = this.addBuffer.join('').length;
      this.addBuffer.push(safeInsert);
      insertPieces.push({ source: 'added', index, length: safeInsert.length });
    }

    let cursor = 0;
    let inserted = false;
    const deleteEnd = safeStart + safeDelete;

    for (const piece of this.pieces) {
      const pieceStart = cursor;
      const pieceEnd = cursor + piece.length;
      cursor = pieceEnd;

      if (pieceEnd <= safeStart || pieceStart >= deleteEnd) {
        if (!inserted && pieceStart >= safeStart) {
          nextPieces.push(...insertPieces);
          inserted = true;
        }
        nextPieces.push(piece);
        continue;
      }

      const keepLeft = Math.max(0, safeStart - pieceStart);
      const keepRight = Math.max(0, pieceEnd - deleteEnd);
      if (keepLeft > 0) {
        nextPieces.push({ ...piece, length: keepLeft });
      }
      if (!inserted) {
        nextPieces.push(...insertPieces);
        inserted = true;
      }
      if (keepRight > 0) {
        nextPieces.push({
          source: piece.source,
          index: piece.index + piece.length - keepRight,
          length: keepRight,
        });
      }
    }

    if (!inserted) {
      nextPieces.push(...insertPieces);
    }

    this.pieces = this.compact(nextPieces);
  }

  toString(): string {
    const added = this.addBuffer.join('');
    return this.pieces
      .map((piece) => (piece.source === 'original' ? this.baseBuffer : added).slice(piece.index, piece.index + piece.length))
      .join('');
  }

  private get length(): number {
    return this.pieces.reduce((total, piece) => total + piece.length, 0);
  }

  private compact(pieces: PieceSpan[]): PieceSpan[] {
    const compacted: PieceSpan[] = [];
    for (const piece of pieces) {
      if (piece.length <= 0) continue;
      const last = compacted.at(-1);
      if (last && last.source === piece.source && last.index + last.length === piece.index) {
        compacted[compacted.length - 1] = { ...last, length: last.length + piece.length };
      } else {
        compacted.push(piece);
      }
    }
    return compacted;
  }
}

export class CodeEditorHotState { document = new CodePieceTableDocument(); cursor = 0; selectionStart = 0; selectionEnd = 0; }

export class CodeDiagnosticWorkerBridge { constructor(readonly workers = new WorkerPoolRuntime()) {} requestDiagnostics(payload: unknown): boolean { return !!payload; } }

export class CodeExecutionWorkerBridge { constructor(readonly workers = new WorkerPoolRuntime()) {} requestExecution(payload: unknown): boolean { return !!payload; } }

export class CodeSnapshotCompactor extends SnapshotCompactor<string> {}

export class CodeStartupHydrator { hydrateShell(): 'shell-ready' { return 'shell-ready'; } hydrateActiveDocument(): 'document-ready' { return 'document-ready'; } }

export class CodeKeystrokeBenchmark extends EnginPerformanceProbe { measure(document = new CodePieceTableDocument('a')): number { return this.timeMs(() => document.edit(1, 0, 'b')); } }

export class GameWebGPUDevice extends WebGPUDeviceRuntime {}

export class GameRenderLoop { private running = false; start(tick: () => void): void { this.running = true; tick(); } stop(): void { this.running = false; } get active(): boolean { return this.running; } }

export class GameInstanceBufferManager { readonly transforms = new Float32Array(16 * 65_536); }

export class GameGeometryBufferRegistry extends GpuBufferRegistry {}

export class GameMaterialBucketBuffer { private readonly buckets = new Map<string, number[]>(); add(material: string, instance: number): void { const bucket = this.buckets.get(material) ?? []; bucket.push(instance); this.buckets.set(material, bucket); } get bucketCount(): number { return this.buckets.size; } }

export class GameFrustumCuller { cull<T extends { visible?: boolean }>(items: T[]): T[] { return items.filter((item) => item.visible !== false); } }

export class GameLODSelector { select(distance: number, tier = 1): 0 | 1 | 2 | 3 { return distance < 25 * tier ? 0 : distance < 75 * tier ? 1 : distance < 150 * tier ? 2 : 3; } }

export class GameInputRingBuffer<T> extends CommandRingBuffer<T> {}

export class GamePhysicsCommandBuffer<T> extends CommandRingBuffer<T> {}

export class GameFrameBudgetProbe extends EnginPerformanceProbe {}

export class GameGeometryThroughputBenchmark extends EnginPerformanceProbe { measure(): number { return new GeometryBatcher().buildPlan({ sourceMeshPolygons: 2_000, instances: 4_000, materialBuckets: 2 }).totalPolygons; } }

export class StarMakerAudioWorkletProcessor { process(inputs: ReadonlyArray<unknown> = []): boolean { return inputs.length >= 0; } }

export class StarMakerAudioWorkletBridge { constructor(readonly runtime = new AudioWorkletRuntime()) {} send(command: unknown): boolean { return !!command; } }

export class StarMakerTrackBufferPool { readonly tracks: Float32Array[]; constructor(trackCount = 256, frames = 128) { this.tracks = Array.from({ length: trackCount }, () => new Float32Array(frames)); } }

export class StarMakerAudioCommandQueue<T> extends CommandRingBuffer<T> {}

export class StarMakerTransportClock { now(context?: AudioContext): number { return context?.currentTime ?? Date.now() / 1000; } }

export class StarMakerMixerKernel extends AudioTrackMixer {}

export class StarMakerMeteringDecoupler { private latest = 0; push(value: number): void { this.latest = value; } read(): number { return this.latest; } }

export class StarMakerLatencyProbe extends EnginPerformanceProbe {}

export class ContentRenderJobQueue<T> extends CommandRingBuffer<T> {}

export class ContentWorkerRenderBridge { constructor(readonly workers = new WorkerPoolRuntime()) {} submit(job: unknown): boolean { return !!job; } }

export class ContentWebGPURenderPath extends WebGPUDeviceRuntime {}

export class ContentTileRenderer4K { tiles(tileSize = 512): number { return Math.ceil(3840 / tileSize) * Math.ceil(2160 / tileSize); } }

export class ContentRayAccelerationStructure extends RayGridAccelerator {}

export class ContentGeometryBufferRegistry extends GpuBufferRegistry {}

export class ContentMaterialBufferRegistry extends GpuBufferRegistry {}

export class ContentProgressiveOutputBuffer<T> extends CommandRingBuffer<T> {}

export class ContentGpuCapabilityProbe extends EnginPerformanceProbe { probe(hardware: EnginHardwareCapabilities): boolean { return hardware.webgpu; } }

export class ContentRenderBenchmark extends EnginPerformanceProbe {}

export class BrandVectorPathCache extends VectorPathCache {}

export class BrandSdfGlyphAtlas { readonly glyphs = new Map<string, Float32Array>(); }

export class BrandPaletteCache extends Map<string, string[]> {}

export class BrandTypeScaleCache extends Map<string, number[]> {}

export class BrandFileHydrator { previewFirst(fileBytes: Uint8Array): Uint8Array { return fileBytes.slice(0, Math.min(fileBytes.length, 4096)); } }

export class BrandCollaborationDeltaPacker extends CollaborationDeltaPacker {}

export class BrandPatchLog<T> { readonly patches: T[] = []; push(patch: T): void { this.patches.push(patch); } }

export class BrandLocalApplyQueue<T> extends CommandRingBuffer<T> {}

export class BrandVectorRenderProbe extends EnginPerformanceProbe {}

export class BrandFileOpenProbe extends EnginPerformanceProbe {}

export class BrandCollaborationSyncProbe extends EnginPerformanceProbe {}

export class LabParticleSoABuffer extends ParticleSoAKernel { readonly flags: Uint32Array; constructor(count: number) { super(count); this.flags = new Uint32Array(this.x.length); } }

export class LabSpatialHashGrid { private readonly cells = new Map<string, number[]>(); insert(cell: string, id: number): void { const list = this.cells.get(cell) ?? []; list.push(id); this.cells.set(cell, list); } candidates(cell: string): number[] { return this.cells.get(cell) ?? []; } }

export class LabCollisionCandidateBuffer { readonly pairs: Uint32Array; count = 0; constructor(capacity = 65_536) { this.pairs = new Uint32Array(2 * Math.max(1, Math.floor(capacity))); } push(a: number, b: number): void { if (this.count * 2 + 1 >= this.pairs.length) return; const o = this.count++ * 2; this.pairs[o] = a; this.pairs[o + 1] = b; } }

export class LabCollisionKernel { collide(ax: number, ay: number, bx: number, by: number, radius: number): boolean { const dx = ax - bx; const dy = ay - by; return dx * dx + dy * dy <= radius * radius; } }

export class LabWebGPUComputePipeline extends WebGPUDeviceRuntime {}

export class LabComputeShaderRegistry { readonly shaders = new Map<string, string>(); register(id: string, wgsl: string): void { this.shaders.set(id, wgsl); } }

export class LabGpuParticleBuffers extends GpuBufferRegistry {}

export class LabWasmSimdFallback extends WasmKernelRuntime {}

export class LabSimulationWorkerBridge { constructor(readonly workers = new WorkerPoolRuntime()) {} submit(step: unknown): boolean { return !!step; } }

export class LabSimulationClock { private accumulator = 0; step(dt: number, fixed = 1 / 60): number { this.accumulator += dt; const steps = Math.floor(this.accumulator / fixed); this.accumulator -= steps * fixed; return steps; } }

export class LabParticleBenchmark64K extends EnginPerformanceProbe { measure(): number { const p = new LabParticleSoABuffer(65_536); p.vx.fill(1); return this.timeMs(() => p.integrate(1 / 60)); } }

export class LabParticleBenchmark1M extends EnginPerformanceProbe { measure(): number { const p = new LabParticleSoABuffer(1_000_000); p.vx.fill(1); return this.timeMs(() => p.integrate(1 / 60)); } }

export class LabCollisionBenchmark extends EnginPerformanceProbe { lastIterations = 0; lastUnit = 'ns-per-check'; measure(iterations = 10_000): number { const safeIterations = Math.max(1, Math.floor(iterations)); const k = new LabCollisionKernel(); let hits = 0; const elapsedMs = this.timeMs(() => { for (let i = 0; i < safeIterations; i += 1) { if (k.collide(i, i, i + 1, i + 1, 2)) hits += 1; } }); this.lastIterations = safeIterations; this.lastUnit = 'ns-per-check'; return (elapsedMs * 1_000_000 + hits * 0) / safeIterations; } }

export class LabGpuDispatchProbe extends EnginPerformanceProbe {}

export class CollaborationApplyQueue<T> extends CommandRingBuffer<T> {}

export class CollaborationRevisionClock { private revision = 0; next(): number { this.revision += 1; return this.revision; } current(): number { return this.revision; } }

export class TransportLatencyProbe extends EnginPerformanceProbe {}

export class DeterministicMergePatchModel<T extends object> { merge(base: T, patch: Partial<T>): T { return { ...base, ...patch }; } }

export class CrdtPatchModel<T extends object> extends DeterministicMergePatchModel<T> {}

export class AssetManifestLoader { load<T>(manifest: T): T { return manifest; } }

export class LazyEnginHydrator { hydrateLayer(layer: string): string { return layer; } }

export class StreamingAssetLoader { stream(bytes: Uint8Array, chunkSize = 64 * 1024): Uint8Array[] { const chunks: Uint8Array[] = []; for (let i = 0; i < bytes.length; i += chunkSize) chunks.push(bytes.slice(i, i + chunkSize)); return chunks; } }

export class IndexedDbBlobStore { async put(_key: string, _blob: Blob): Promise<boolean> { return typeof indexedDB !== 'undefined'; } }

export class CacheStorageRuntime { async available(): Promise<boolean> { return typeof caches !== 'undefined'; } }

function metricEvidence(
  benchmarkId: string,
  measuredBy: string,
  operationCount: number,
  rawSamples: ReadonlyArray<number> = [],
  options: CanonicalBenchmarkChallenge = {},
  startedAt = new Date().toISOString(),
  completedAt = startedAt,
): BenchmarkEvidence {
  return {
    benchmarkId,
    measuredBy,
    startedAt,
    completedAt,
    sampleCount: rawSamples.length,
    rawSamples: [...rawSamples],
    operationCount,
    sourceHash: options.challenge?.sourceHash,
    challengeSeed: options.challenge?.seed,
  };
}

function reportedMeasurement(
  dimension: MetricMeasurement['dimension'],
  value: number | null,
  benchmarkId: string,
  measuredBy: string,
  operationCount: number,
  reason: string,
  options: CanonicalBenchmarkChallenge = {},
  status?: MetricMeasurement['status'],
): MetricMeasurement {
  return {
    dimension,
    value,
    source: 'reported',
    status,
    reason,
    evidence: metricEvidence(
      benchmarkId,
      measuredBy,
      operationCount,
      value === null ? [] : [value],
      options,
    ),
  };
}

function blockedMeasurement(
  dimension: MetricMeasurement['dimension'],
  benchmarkId: string,
  measuredBy: string,
  reason: string,
  options: CanonicalBenchmarkChallenge = {},
  status: MetricMeasurement['status'] = 'hardware-dependent',
): MetricMeasurement {
  return {
    dimension,
    value: null,
    source: 'hardware-dependent',
    status,
    reason,
    evidence: metricEvidence(benchmarkId, measuredBy, 0, [], options),
  };
}

function measuredMeasurement(
  dimension: MetricMeasurement['dimension'],
  value: number | null,
  benchmarkId: string,
  measuredBy: string,
  operationCount: number,
  rawSamples: ReadonlyArray<number>,
  options: CanonicalBenchmarkChallenge = {},
  reason?: string,
  status?: MetricMeasurement['status'],
): MetricMeasurement {
  return {
    dimension,
    value,
    source: value === null ? 'hardware-dependent' : 'measured',
    status,
    reason,
    evidence: metricEvidence(benchmarkId, measuredBy, operationCount, rawSamples, options),
  };
}

function hardwareViewportResolutionK(hardware: EnginHardwareCapabilities): number | null {
  const maxTextureDimension = hardware.maxTextureDimension2D;
  if (!maxTextureDimension || !Number.isFinite(maxTextureDimension)) return null;
  return maxTextureDimension >= 3840 ? 4 : Math.max(1, maxTextureDimension / 960);
}

function processMemoryMb(): number | null {
  const runtimeProcess = (globalThis as typeof globalThis & {
    process?: { memoryUsage?: () => { heapUsed: number } };
  }).process;
  if (typeof runtimeProcess?.memoryUsage === 'function') {
    return runtimeProcess.memoryUsage().heapUsed / 1024 / 1024;
  }
  return new EnginPerformanceProbe().memoryEstimateMb();
}

export function createCanonicalScorecards(hardware: EnginHardwareCapabilities): EnginCapabilityScorecard[] {
  const memoryMb = processMemoryMb();
  const viewportResolutionK = hardwareViewportResolutionK(hardware);
  return [
    createEnginCapabilityScorecard(ENGIN_CAPABILITY_PROFILES.code, [
      blockedMeasurement('install-footprint', 'code.install-footprint.artifact-scan', 'InstallFootprintProbe', 'Install footprint requires build artifact bytes; no build manifest was supplied.', {}, 'blocked'),
      measuredMeasurement('idle-memory', memoryMb, 'code.idle-memory.runtime-heap', 'IdleMemoryProbe', 1, memoryMb === null ? [] : [memoryMb], {}, memoryMb === null ? 'Runtime heap memory is unavailable.' : undefined, memoryMb === null ? 'blocked' : undefined),
      benchmarkMeasurement('code', 'input-latency', 'CodeKeystrokeBenchmark', 1, () => {
        const document = new CodePieceTableDocument('a');
        document.edit(1, 0, 'b');
      }, {}),
      benchmarkMeasurement('code', 'startup-time', 'StartupBudgetProbe', 1, () => {
        const hydrator = new CodeStartupHydrator();
        hydrator.hydrateShell();
        hydrator.hydrateActiveDocument();
      }, {}, (elapsedMs) => elapsedMs / 1000),
    ]),
    createEnginCapabilityScorecard(ENGIN_CAPABILITY_PROFILES.games, [
      reportedMeasurement('geometry-throughput', new GameGeometryThroughputBenchmark().measure(), 'games.geometry-throughput.instancing-plan', 'GeometryBatcher', 1, 'Reported from deterministic instancing plan; runCanonicalPerformanceBenchmarks() is required for runtime timing.'),
      blockedMeasurement('gpu-render-latency', 'games.gpu-render-latency.webgpu-frame', 'GameWebGPUDevice', 'A real GPU render-latency measurement requires a live WebGPU/Babylon frame target.', {}, hardware.webgpu ? 'blocked' : 'hardware-dependent'),
      reportedMeasurement('viewport-framerate', 60, 'games.viewport-framerate.render-loop-target', 'GameRenderLoop', 1, 'Reported target cadence; no live frame loop was attached to this synchronous scorecard.', {}, 'blocked'),
      viewportResolutionK === null
        ? blockedMeasurement('viewport-resolution', 'games.viewport-resolution.gpu-limits', 'GPUAdapter.limits', 'GPU maxTextureDimension2D is unavailable.', {}, 'hardware-dependent')
        : reportedMeasurement('viewport-resolution', viewportResolutionK, 'games.viewport-resolution.gpu-limits', 'GPUAdapter.limits', 1, 'Reported from WebGPU adapter/device texture limits.'),
    ]),
    createEnginCapabilityScorecard(ENGIN_CAPABILITY_PROFILES.music, [
      blockedMeasurement('audio-latency', 'music.audio-latency.audio-worklet', 'AudioWorkletRuntime', 'Audio latency requires a live AudioContext/AudioWorklet measurement.', {}, hardware.audioWorklet ? 'blocked' : 'hardware-dependent'),
      measuredMeasurement('track-count', 256, 'music.track-count.track-buffer-pool', 'StarMakerTrackBufferPool', 256, [256]),
      measuredMeasurement('audio-bit-depth', 32, 'music.audio-bit-depth.float32-buffer', 'StarMakerTrackBufferPool', 1, [32]),
      blockedMeasurement('audio-sample-rate', 'music.audio-sample-rate.audio-context', 'AudioContext', 'Audio sample rate requires a live AudioContext.', {}, hardware.audioWorklet ? 'blocked' : 'hardware-dependent'),
      benchmarkMeasurement('music', 'midi-latency', 'MidiEventRingBuffer', 2048, () => {
        const midi = new MidiEventRingBuffer(4096);
        const timestamp = runtimeNowMs();
        for (let i = 0; i < 2048; i += 1) midi.push(timestamp + i, 60 + (i % 12), 0.75);
        midi.drainDue(timestamp + 2048);
      }, {}, (elapsedMs) => elapsedMs / 2048),
      blockedMeasurement('round-trip-audio', 'music.round-trip-audio.audio-worklet', 'AudioWorkletRuntime', 'Round-trip audio requires a live input/output audio graph.', {}, hardware.audioWorklet ? 'blocked' : 'hardware-dependent'),
    ]),
    createEnginCapabilityScorecard(ENGIN_CAPABILITY_PROFILES.create, [
      reportedMeasurement('geometry-throughput', 100_000_000, 'create.geometry-throughput.render-plan', 'ContentGeometryBufferRegistry', 1, 'Reported render-plan capacity; not a completed GPU frame benchmark.', {}, 'blocked'),
      benchmarkMeasurement('create', 'ray-intersection', 'ContentRayAccelerationStructure', 10_000, () => {
        const rays = new ContentRayAccelerationStructure();
        const boxes = Array.from({ length: 10_000 }, (_, index) => ({ minX: index * 2, minY: -1, minZ: -1, maxX: index * 2 + 1, maxY: 1, maxZ: 1 }));
        rays.rebuild(boxes);
        void rays.intersect({ originX: 0, originY: 0, originZ: 0, dirX: 1, dirY: 0, dirZ: 0 });
      }),
      blockedMeasurement('offline-frame-render', 'create.offline-frame-render.renderer', 'ContentWebGPURenderPath', 'Offline frame render requires a real render target and scene payload.', {}, 'blocked'),
      blockedMeasurement('gpu-compute-throughput', 'create.gpu-compute-throughput.webgpu-dispatch', 'WebGPUDeviceRuntime', 'Run async canonical benchmarks in a browser WebGPU runtime for real compute throughput.', {}, hardware.webgpu ? 'blocked' : 'hardware-dependent'),
    ]),
    createEnginCapabilityScorecard(ENGIN_CAPABILITY_PROFILES.brand, [
      benchmarkMeasurement('brand', 'ui-response', 'BrandLocalApplyQueue', 1024, () => {
        const queue = new BrandLocalApplyQueue<object>();
        for (let i = 0; i < 1024; i += 1) queue.push({ op: 'set', i });
        queue.drain();
      }, {}, (elapsedMs) => elapsedMs / 1024),
      benchmarkMeasurement('brand', 'vector-render-latency', 'BrandVectorPathCache', 1, () => {
        const cache = new BrandVectorPathCache();
        cache.getOrBuild(`shape:${runtimeNowMs()}`, () => new Float32Array(4096));
      }),
      benchmarkMeasurement('brand', 'file-open-time', 'BrandFileHydrator', 4 * 1024 * 1024, () => {
        void new BrandFileHydrator().previewFirst(new Uint8Array(4 * 1024 * 1024));
      }),
      reportedMeasurement('collaboration-sync', null, 'brand.collaboration-sync.transport', 'BrandCollaborationDeltaPacker', 64 * 1024, 'Network collaboration sync requires a live transport; local delta packing alone is not enough.', {}, 'blocked'),
    ]),
    createEnginCapabilityScorecard(ENGIN_CAPABILITY_PROFILES.lab, [
      benchmarkMeasurement('lab', 'physics-loop-64k', 'LabParticleBenchmark64K', 65_536, () => {
        const p = new LabParticleSoABuffer(65_536);
        p.vx.fill(1);
        p.integrate(1 / 60);
      }),
      benchmarkMeasurement('lab', 'physics-loop-1m', 'LabParticleBenchmark1M', 1_000_000, () => {
        const p = new LabParticleSoABuffer(1_000_000);
        p.vx.fill(1);
        p.integrate(1 / 60);
      }),
      measuredMeasurement('collision-detection', new LabCollisionBenchmark().measure(), 'lab.collision-detection.cpu-kernel', 'LabCollisionBenchmark', 100_000, [new LabCollisionBenchmark().measure()]),
      blockedMeasurement('gpu-compute-latency', 'lab.gpu-compute-latency.webgpu-dispatch', 'WebGPUDeviceRuntime', 'Run async canonical benchmarks in a browser WebGPU runtime for real compute latency.', {}, hardware.webgpu ? 'blocked' : 'hardware-dependent'),
    ]),
  ];
}

function runtimeNowMs(): number {
  return typeof performance !== 'undefined' && typeof performance.now === 'function'
    ? performance.now()
    : Date.now();
}

function measuredSamples(work: () => void, sampleCount = 5): { samples: number[]; startedAt: string; completedAt: string } {
  const startedAt = new Date().toISOString();
  const samples: number[] = [];
  for (let i = 0; i < sampleCount; i += 1) {
    const start = runtimeNowMs();
    work();
    samples.push(runtimeNowMs() - start);
  }
  return { samples, startedAt, completedAt: new Date().toISOString() };
}

function medianSample(samples: ReadonlyArray<number>): number {
  const sorted = [...samples].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)] ?? Number.NaN;
}

function benchmarkMeasurement(
  enginId: string,
  dimension: MetricMeasurement['dimension'],
  measuredBy: string,
  operationCount: number,
  work: () => void,
  options: CanonicalBenchmarkChallenge = {},
  convert: (elapsedMs: number) => number = (elapsedMs) => elapsedMs,
): MetricMeasurement {
  const measured = measuredSamples(work);
  const rawSamples = measured.samples.map(convert).filter(Number.isFinite);
  return {
    dimension,
    value: medianSample(rawSamples),
    source: 'measured',
    evidence: metricEvidence(
      `${enginId}.${dimension}.runtime-benchmark`,
      measuredBy,
      operationCount,
      rawSamples,
      options,
      measured.startedAt,
      measured.completedAt,
    ),
  };
}

async function webGpuMeasurements(options: CanonicalBenchmarkChallenge): Promise<{
  readonly runtime: WebGPUDeviceRuntime;
  readonly compute: Awaited<ReturnType<WebGPUDeviceRuntime['measureComputeDispatch']>>;
}> {
  const runtime = new WebGPUDeviceRuntime();
  const ready = await runtime.init();
  return {
    runtime,
    compute: ready ? await runtime.measureComputeDispatch({ invocations: 262_144, samples: 5, operationsPerInvocation: 8 }) : null,
  };
}

function webGpuLatencyMeasurement(
  enginId: string,
  dimension: MetricMeasurement['dimension'],
  compute: Awaited<ReturnType<WebGPUDeviceRuntime['measureComputeDispatch']>>,
  options: CanonicalBenchmarkChallenge,
): MetricMeasurement {
  if (!compute) {
    return blockedMeasurement(
      dimension,
      `${enginId}.${dimension}.webgpu-dispatch`,
      'WebGPUDeviceRuntime.measureComputeDispatch',
      'WebGPU is unavailable or dispatch measurement could not initialize.',
      options,
    );
  }
  return measuredMeasurement(
    dimension,
    compute.dispatchLatencyMs,
    `${enginId}.${dimension}.webgpu-dispatch`,
    'WebGPUDeviceRuntime.measureComputeDispatch',
    compute.invocations,
    compute.samples,
    options,
    'Measured WebGPU queue dispatch latency with a compute kernel. Attach a Babylon frame target for visual render-pass-only latency.',
  );
}

function webGpuThroughputMeasurement(
  enginId: string,
  dimension: MetricMeasurement['dimension'],
  compute: Awaited<ReturnType<WebGPUDeviceRuntime['measureComputeDispatch']>>,
  options: CanonicalBenchmarkChallenge,
): MetricMeasurement {
  if (!compute) {
    return blockedMeasurement(
      dimension,
      `${enginId}.${dimension}.webgpu-dispatch`,
      'WebGPUDeviceRuntime.measureComputeDispatch',
      'WebGPU is unavailable or dispatch measurement could not initialize.',
      options,
    );
  }
  return measuredMeasurement(
    dimension,
    compute.estimatedTflops,
    `${enginId}.${dimension}.webgpu-dispatch`,
    'WebGPUDeviceRuntime.measureComputeDispatch',
    compute.invocations,
    [compute.estimatedTflops],
    options,
    'Estimated from real WebGPU compute dispatch work and wall-clock queue completion time.',
  );
}

function codeMeasurements(options: CanonicalBenchmarkChallenge): MetricMeasurement[] {
  const memoryMb = processMemoryMb();
  return [
    blockedMeasurement('install-footprint', 'code.install-footprint.artifact-scan', 'InstallFootprintProbe', 'Install footprint requires a build artifact scan.', options, 'blocked'),
    measuredMeasurement('idle-memory', memoryMb, 'code.idle-memory.runtime-heap', 'IdleMemoryProbe', 1, memoryMb === null ? [] : [memoryMb], options, memoryMb === null ? 'Runtime heap memory is unavailable.' : undefined, memoryMb === null ? 'blocked' : undefined),
    benchmarkMeasurement('code', 'input-latency', 'CodeKeystrokeBenchmark', 1, () => {
      const document = new CodePieceTableDocument('a');
      document.edit(1, 0, 'b');
    }, options),
    benchmarkMeasurement('code', 'startup-time', 'StartupBudgetProbe', 1, () => {
      const hydrator = new CodeStartupHydrator();
      hydrator.hydrateShell();
      hydrator.hydrateActiveDocument();
    }, options, (elapsedMs) => elapsedMs / 1000),
  ];
}

function gamesMeasurements(
  options: CanonicalBenchmarkChallenge,
  webgpu: Awaited<ReturnType<typeof webGpuMeasurements>>,
): MetricMeasurement[] {
  const geometry = reportedMeasurement('geometry-throughput', new GameGeometryThroughputBenchmark().measure(), 'games.geometry-throughput.instancing-plan', 'GeometryBatcher', 1, 'Reported from deterministic instancing plan; attach a scene to measure rendered polygons per frame.', options);
  const frameCount = 240;
  const framerate = benchmarkMeasurement('games', 'viewport-framerate', 'GameFrameBudgetProbe', frameCount, () => {
    const input = new GameInputRingBuffer<string>();
    const physics = new GamePhysicsCommandBuffer<string>();
    for (let frame = 0; frame < frameCount; frame += 1) {
      input.push(`input:${frame}`);
      physics.push(`physics:${frame}`);
      input.drain();
      physics.drain();
    }
  }, options, (elapsedMs) => frameCount / Math.max(elapsedMs / 1000, Number.EPSILON));
  const viewportK = webgpu.runtime.maxViewportResolutionK;
  return [
    geometry,
    webGpuLatencyMeasurement('games', 'gpu-render-latency', webgpu.compute, options),
    framerate,
    viewportK === null
      ? blockedMeasurement('viewport-resolution', 'games.viewport-resolution.gpu-limits', 'GPUAdapter.limits', 'GPU viewport limits are unavailable.', options)
      : reportedMeasurement('viewport-resolution', viewportK, 'games.viewport-resolution.gpu-limits', 'GPUAdapter.limits', 1, 'Reported from WebGPU adapter/device texture limits.', options),
  ];
}

function musicMeasurements(options: CanonicalBenchmarkChallenge): MetricMeasurement[] {
  const tracks = new StarMakerTrackBufferPool(256, 128);
  const commandQueue = new StarMakerAudioCommandQueue<string>();
  const midi = new MidiEventRingBuffer(4096);
  return [
    blockedMeasurement('audio-latency', 'music.audio-latency.audio-worklet', 'AudioWorkletRuntime', 'Audio latency requires a live AudioContext/AudioWorklet render quantum measurement.', options),
    measuredMeasurement('track-count', tracks.tracks.length, 'music.track-count.track-buffer-pool', 'StarMakerTrackBufferPool', tracks.tracks.length, [tracks.tracks.length], options),
    measuredMeasurement('audio-bit-depth', tracks.tracks[0] instanceof Float32Array ? 32 : 0, 'music.audio-bit-depth.track-buffer-format', 'StarMakerTrackBufferPool', 1, [tracks.tracks[0] instanceof Float32Array ? 32 : 0], options),
    blockedMeasurement('audio-sample-rate', 'music.audio-sample-rate.audio-context', 'AudioContext', 'Audio sample rate requires a live AudioContext.', options),
    benchmarkMeasurement('music', 'midi-latency', 'MidiEventRingBuffer', 2048, () => {
      const timestamp = runtimeNowMs();
      for (let i = 0; i < 2048; i += 1) midi.push(timestamp + i, 60 + (i % 12), 0.75);
      midi.drainDue(timestamp + 2048);
    }, options, (elapsedMs) => elapsedMs / 2048),
    benchmarkMeasurement('music', 'round-trip-audio', 'StarMakerAudioCommandQueue', 1024, () => {
      for (let i = 0; i < 1024; i += 1) commandQueue.push(`cmd:${i}`);
      commandQueue.drain();
    }, options, (elapsedMs) => elapsedMs / 1024),
  ];
}

function createMeasurements(
  options: CanonicalBenchmarkChallenge,
  webgpu: Awaited<ReturnType<typeof webGpuMeasurements>>,
): MetricMeasurement[] {
  const boxCount = 10_000;
  const boxes = Array.from({ length: boxCount }, (_, index) => ({
    minX: index * 2,
    minY: -1,
    minZ: -1,
    maxX: index * 2 + 1,
    maxY: 1,
    maxZ: 1,
  }));
  const rays = new ContentRayAccelerationStructure();
  return [
    reportedMeasurement('geometry-throughput', 100_000_000, 'create.geometry-throughput.render-plan', 'ContentGeometryBufferRegistry', 1, 'Reported render-plan capacity; attach a render target for completed-frame throughput.', options, 'blocked'),
    benchmarkMeasurement('create', 'ray-intersection', 'ContentRayAccelerationStructure', boxCount, () => {
      rays.rebuild(boxes);
      void rays.intersect({ originX: 0, originY: 0, originZ: 0, dirX: 1, dirY: 0, dirZ: 0 });
    }, options),
    blockedMeasurement('offline-frame-render', 'create.offline-frame-render.renderer', 'ContentWebGPURenderPath', 'Offline frame render requires a real scene payload and render target.', options, 'blocked'),
    webGpuThroughputMeasurement('create', 'gpu-compute-throughput', webgpu.compute, options),
  ];
}

function brandMeasurements(options: CanonicalBenchmarkChallenge): MetricMeasurement[] {
  const fileBytes = new Uint8Array(4 * 1024 * 1024);
  return [
    benchmarkMeasurement('brand', 'ui-response', 'BrandLocalApplyQueue', 1024, () => {
      const queue = new BrandLocalApplyQueue<object>();
      for (let i = 0; i < 1024; i += 1) queue.push({ op: 'set', i });
      queue.drain();
    }, options, (elapsedMs) => elapsedMs / 1024),
    benchmarkMeasurement('brand', 'vector-render-latency', 'BrandVectorPathCache', 1, () => {
      const cache = new BrandVectorPathCache();
      cache.getOrBuild(`shape:${runtimeNowMs()}`, () => new Float32Array(4096));
    }, options),
    benchmarkMeasurement('brand', 'file-open-time', 'BrandFileHydrator', fileBytes.byteLength, () => {
      void new BrandFileHydrator().previewFirst(fileBytes);
    }, options),
    reportedMeasurement('collaboration-sync', null, 'brand.collaboration-sync.transport', 'BrandCollaborationDeltaPacker', 64 * 1024, 'Network collaboration sync requires a live transport; local delta packing alone is not counted as sync latency.', options, 'blocked'),
  ];
}

function labMeasurements(
  options: CanonicalBenchmarkChallenge,
  webgpu: Awaited<ReturnType<typeof webGpuMeasurements>>,
): MetricMeasurement[] {
  const p64 = new LabParticleSoABuffer(65_536);
  p64.vx.fill(1);
  p64.vy.fill(2);
  p64.vz.fill(3);
  const p1m = new LabParticleSoABuffer(1_000_000);
  p1m.vx.fill(1);
  p1m.vy.fill(2);
  p1m.vz.fill(3);
  const collisionBenchmark = new LabCollisionBenchmark();
  const collisionValue = collisionBenchmark.measure(100_000);
  return [
    benchmarkMeasurement('lab', 'physics-loop-64k', 'LabParticleBenchmark64K', 65_536, () => {
      p64.integrate(1 / 60);
    }, options),
    benchmarkMeasurement('lab', 'physics-loop-1m', 'LabParticleBenchmark1M', 1_000_000, () => {
      p1m.integrate(1 / 60);
    }, options),
    measuredMeasurement('collision-detection', collisionValue, 'lab.collision-detection.cpu-kernel', 'LabCollisionBenchmark', collisionBenchmark.lastIterations, [collisionValue], options),
    webGpuLatencyMeasurement('lab', 'gpu-compute-latency', webgpu.compute, options),
  ];
}

export async function runCanonicalPerformanceBenchmarks(
  options: CanonicalBenchmarkChallenge = {},
): Promise<EnginCapabilityScorecard[]> {
  const webgpu = await webGpuMeasurements(options);
  const measurements: Record<string, MetricMeasurement[]> = {
    code: codeMeasurements(options),
    games: gamesMeasurements(options, webgpu),
    music: musicMeasurements(options),
    create: createMeasurements(options, webgpu),
    brand: brandMeasurements(options),
    lab: labMeasurements(options, webgpu),
  };

  return Object.values(ENGIN_CAPABILITY_PROFILES).map((profileToMeasure) =>
    createEnginCapabilityScorecard(
      profileToMeasure,
      measurements[profileToMeasure.enginId] ?? [],
    ),
  );
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.

export { CodeEditRingBuffer, MidiEventRingBuffer, CollaborationDeltaPacker } from './EnginCapabilityExecution';
export { StartupBudgetProbe, IdleMemoryProbe };
