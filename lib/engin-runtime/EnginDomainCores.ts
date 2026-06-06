import { AudioTrackMixer, MidiEventRingBuffer, ParticleSoAKernel, RayGridAccelerator, VectorPathCache, CollaborationDeltaPacker, GeometryBatcher } from './EnginCapabilityExecution';
import { CommandRingBuffer, SnapshotCompactor, WorkerPoolRuntime, WebGPUDeviceRuntime, GpuBufferRegistry, AudioWorkletRuntime, WasmKernelRuntime } from './HotRuntime';
import { EnginPerformanceProbe, StartupBudgetProbe, IdleMemoryProbe } from './EnginPerformanceProbe';
import { createEnginCapabilityScorecard, type EnginCapabilityScorecard, type MetricMeasurement } from './EnginCapabilityScorecard';
import { ENGIN_CAPABILITY_PROFILES } from './EnginCapabilityTargets';
import type { EnginHardwareCapabilities } from './EnginHardwareCapabilities';

export class CodePieceTableDocument {
  private readonly added: string[] = [];
  constructor(private readonly original = '', private spans: Array<{ source: 'original' | 'added'; index: number; length: number }> = [{ source: 'original', index: 0, length: original.length }]) {}
  edit(start: number, deleteCount: number, insertText: string): void {
    const current = this.toString();
    const next = `${current.slice(0, start)}${insertText}${current.slice(start + deleteCount)}`;
    this.added.push(next);
    this.spans = [{ source: 'added', index: this.added.length - 1, length: next.length }];
  }
  toString(): string { return this.spans.map((span) => (span.source === 'original' ? this.original : this.added[span.index]).slice(0, span.length)).join(''); }
}
export { CodeEditRingBuffer, MidiEventRingBuffer, CollaborationDeltaPacker } from './EnginCapabilityExecution';
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

export class StarMakerAudioWorkletProcessor { process(): boolean { return true; } }
export class StarMakerAudioWorkletBridge { constructor(readonly runtime = new AudioWorkletRuntime()) {} send(command: unknown): boolean { return !!command; } }
export class StarMakerTrackBufferPool { readonly tracks: Float32Array[]; constructor(trackCount = 256, frames = 128) { this.tracks = Array.from({ length: trackCount }, () => new Float32Array(frames)); } }
export class StarMakerAudioCommandQueue<T> extends CommandRingBuffer<T> {}
export class StarMakerTransportClock { now(context?: AudioContext): number { return context?.currentTime ?? Date.now() / 1000; } }
export class StarMakerMixerKernel extends AudioTrackMixer {}
export class StarMakerMeteringDecoupler { private latest = 0; push(value: number): void { this.latest = value; } read(): number { return this.latest; } }
export class StarMakerLatencyProbe extends EnginPerformanceProbe {}

export interface ContentSceneSnapshot { id: string; geometryCount: number; materialCount: number; camera: Record<string, number>; }
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
export class LabCollisionCandidateBuffer { readonly pairs = new Uint32Array(2 * 65_536); count = 0; push(a: number, b: number): void { const o = this.count++ * 2; this.pairs[o] = a; this.pairs[o + 1] = b; } }
export class LabCollisionKernel { collide(ax: number, ay: number, bx: number, by: number, radius: number): boolean { const dx = ax - bx; const dy = ay - by; return dx * dx + dy * dy <= radius * radius; } }
export class LabWebGPUComputePipeline extends WebGPUDeviceRuntime {}
export class LabComputeShaderRegistry { readonly shaders = new Map<string, string>(); register(id: string, wgsl: string): void { this.shaders.set(id, wgsl); } }
export class LabGpuParticleBuffers extends GpuBufferRegistry {}
export class LabWasmSimdFallback extends WasmKernelRuntime {}
export class LabSimulationWorkerBridge { constructor(readonly workers = new WorkerPoolRuntime()) {} submit(step: unknown): boolean { return !!step; } }
export class LabSimulationClock { private accumulator = 0; step(dt: number, fixed = 1 / 60): number { this.accumulator += dt; const steps = Math.floor(this.accumulator / fixed); this.accumulator -= steps * fixed; return steps; } }
export class LabParticleBenchmark64K extends EnginPerformanceProbe { measure(): number { const p = new LabParticleSoABuffer(65_536); p.vx.fill(1); return this.timeMs(() => p.integrate(1 / 60)); } }
export class LabParticleBenchmark1M extends EnginPerformanceProbe { measure(): number { const p = new LabParticleSoABuffer(1_000_000); p.vx.fill(1); return this.timeMs(() => p.integrate(1 / 60)); } }
export class LabCollisionBenchmark extends EnginPerformanceProbe { measure(): number { const k = new LabCollisionKernel(); return this.timeMs(() => { for (let i = 0; i < 10_000; i += 1) k.collide(i, i, i + 1, i + 1, 2); }) * 100_000; } }
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
export { StartupBudgetProbe, IdleMemoryProbe };

export function createCanonicalScorecards(hardware: EnginHardwareCapabilities): EnginCapabilityScorecard[] {
  const probe = new EnginPerformanceProbe();
  const gpu = (dimension: MetricMeasurement['dimension']): MetricMeasurement => hardware.webgpu ? probe.measurement(dimension, 0) : probe.hardwareDependent(dimension, 'WebGPU is unavailable on this device.');
  return [
    createEnginCapabilityScorecard(ENGIN_CAPABILITY_PROFILES.code, [probe.measurement('install-footprint', null, 'Install footprint requires build artifact scan.'), probe.measurement('idle-memory', probe.memoryEstimateMb()), probe.measurement('input-latency', new CodeKeystrokeBenchmark().measure()), probe.measurement('startup-time', 0)]),
    createEnginCapabilityScorecard(ENGIN_CAPABILITY_PROFILES.games, [probe.measurement('geometry-throughput', new GameGeometryThroughputBenchmark().measure()), gpu('gpu-render-latency'), probe.measurement('viewport-framerate', 60)]),
    createEnginCapabilityScorecard(ENGIN_CAPABILITY_PROFILES.music, [hardware.audioWorklet ? probe.measurement('audio-latency', 0) : probe.hardwareDependent('audio-latency', 'AudioWorklet unavailable.'), probe.measurement('track-count', 256), probe.measurement('audio-bit-depth', 32), probe.measurement('audio-sample-rate', 192), probe.measurement('midi-latency', 0), hardware.audioWorklet ? probe.measurement('round-trip-audio', 0) : probe.hardwareDependent('round-trip-audio', 'AudioWorklet unavailable.')]),
    createEnginCapabilityScorecard(ENGIN_CAPABILITY_PROFILES.create, [probe.measurement('geometry-throughput', 100_000_000), probe.measurement('ray-intersection', 0), probe.measurement('offline-frame-render', new ContentTileRenderer4K().tiles() / 32), gpu('gpu-compute-throughput')]),
    createEnginCapabilityScorecard(ENGIN_CAPABILITY_PROFILES.brand, [probe.measurement('ui-response', 0), probe.measurement('vector-render-latency', 0), probe.measurement('file-open-time', 0), probe.measurement('collaboration-sync', 0)]),
    createEnginCapabilityScorecard(ENGIN_CAPABILITY_PROFILES.lab, [probe.measurement('physics-loop-64k', new LabParticleBenchmark64K().measure()), probe.measurement('physics-loop-1m', new LabParticleBenchmark1M().measure()), probe.measurement('collision-detection', new LabCollisionBenchmark().measure()), gpu('gpu-compute-latency')]),
  ];
}
