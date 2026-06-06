import type { EnginAction } from './EnginRuleSetContract';
import type { EnginExecutionPlan } from './EnginCapabilityExecution';


export type HotActionKind =
  | 'keystroke'
  | 'midi'
  | 'controller-input'
  | 'physics-tick'
  | 'collaboration-delta'
  | 'drag-update'
  | 'preview-render'
  | 'simulation-step';

export interface BinaryCommandPacket {
  type: number;
  timestamp: number;
  payload: Uint8Array;
}

export class HotActionClassifier {
  private readonly byPrefix: ReadonlyArray<[string, HotActionKind]> = [
    ['code:cell-update', 'keystroke'],
    ['music:midi', 'midi'],
    ['music:', 'midi'],
    ['game:input', 'controller-input'],
    ['game:physics', 'physics-tick'],
    ['collab:', 'collaboration-delta'],
    ['drag:', 'drag-update'],
    ['content:render-preview', 'preview-render'],
    ['content:ray', 'preview-render'],
    ['lab:sim', 'simulation-step'],
    ['lab:physics', 'physics-tick'],
  ];

  constructor(private readonly plan: EnginExecutionPlan) {}

  classify(actionType: string): HotActionKind | null {
    if (!this.plan.realtimeActionTypes.includes(actionType)) return null;
    return this.byPrefix.find(([prefix]) => actionType.startsWith(prefix))?.[1] ?? 'simulation-step';
  }

  isHot(actionType: string): boolean {
    return this.classify(actionType) !== null;
  }
}

export class RevisionCoalescer {
  private queued = false;
  private latestRevision = 0;

  mark(revision: number): boolean {
    this.latestRevision = Math.max(this.latestRevision, revision);
    if (this.queued) return false;
    this.queued = true;
    return this.queued;
  }

  flush(): number {
    this.queued = false;
    return this.latestRevision;
  }
}

export class CommandRingBuffer<T> {
  private readonly values: Array<T | undefined>;
  private cursor = 0;
  private filled = 0;

  constructor(capacity = 4096) {
    this.values = new Array<T | undefined>(Math.max(1, Math.floor(capacity)));
  }

  push(value: T): void {
    this.values[this.cursor] = value;
    this.cursor = (this.cursor + 1) % this.values.length;
    this.filled = Math.min(this.filled + 1, this.values.length);
  }

  drain(): T[] {
    const out: T[] = [];
    const start = (this.cursor - this.filled + this.values.length) % this.values.length;
    for (let i = 0; i < this.filled; i += 1) {
      const value = this.values[(start + i) % this.values.length];
      if (value !== undefined) out.push(value);
    }
    this.filled = 0;
    return out;
  }

  get size(): number { return this.filled; }
}

export class TypedMemoryArena {
  readonly bytes: ArrayBuffer;
  private offset = 0;

  constructor(byteLength = 1024 * 1024) {
    this.bytes = new ArrayBuffer(Math.max(1, Math.floor(byteLength)));
  }

  allocFloat32(length: number): Float32Array {
    const byteLength = Math.max(0, Math.floor(length)) * Float32Array.BYTES_PER_ELEMENT;
    const aligned = (this.offset + 3) & ~3;
    if (aligned + byteLength > this.bytes.byteLength) throw new Error('TypedMemoryArena exhausted.');
    this.offset = aligned + byteLength;
    return new Float32Array(this.bytes, aligned, length);
  }

  reset(): void { this.offset = 0; }
}

export class BinaryCommandBus {
  encode(type: number, payload: Uint8Array, timestamp = performanceNow()): BinaryCommandPacket {
    return { type, timestamp, payload };
  }

  pack(packet: BinaryCommandPacket): Uint8Array {
    const out = new Uint8Array(12 + packet.payload.length);
    const view = new DataView(out.buffer);
    view.setUint32(0, packet.type, true);
    view.setFloat64(4, packet.timestamp, true);
    out.set(packet.payload, 12);
    return out;
  }
}

export class DeferredPersistenceQueue<T> extends CommandRingBuffer<T> {}
export class DeferredSyncQueue<T> extends CommandRingBuffer<T> {}

export class SnapshotCompactor<T> {
  private checkpoints: T[] = [];
  constructor(private readonly maxCheckpoints = 32) {}
  remember(snapshot: T): void {
    this.checkpoints.push(snapshot);
    while (this.checkpoints.length > this.maxCheckpoints) this.checkpoints.shift();
  }
  latest(): T | null { return this.checkpoints.at(-1) ?? null; }
  get count(): number { return this.checkpoints.length; }
}

export class WorkerPoolRuntime {
  private readonly workers: Worker[] = [];
  constructor(private readonly factory?: () => Worker, private readonly maxWorkers = 2) {}
  acquire(): Worker | null {
    if (typeof Worker === 'undefined' || !this.factory) return null;
    const worker = this.workers.pop() ?? this.factory();
    return worker;
  }
  release(worker: Worker): void {
    if (this.workers.length < this.maxWorkers) this.workers.push(worker);
    else worker.terminate();
  }
}

export type WebGPUInitState = 'idle' | 'ready' | 'unavailable' | 'failed' | 'lost';

export interface WebGPUInitializationResult {
  readonly ready: boolean;
  readonly state: WebGPUInitState;
  readonly reason?: string;
  readonly adapterInfo?: JsonSafeGpuAdapterInfo;
  readonly maxTextureDimension2D?: number;
  readonly powerPreference?: GPUPowerPreference;
  readonly initializedAt?: string;
}

export interface JsonSafeGpuAdapterInfo {
  readonly vendor?: string;
  readonly architecture?: string;
  readonly device?: string;
  readonly description?: string;
}

export interface WebGPUComputeMeasurement {
  readonly dispatchLatencyMs: number;
  readonly estimatedTflops: number;
  readonly invocations: number;
  readonly workgroups: number;
  readonly operationsPerInvocation: number;
  readonly samples: number[];
}

export interface WebGPUDispatchOptions {
  readonly invocations?: number;
  readonly samples?: number;
  readonly operationsPerInvocation?: number;
}

export interface WebGPUInitializeOptions {
  readonly powerPreference?: GPUPowerPreference;
  readonly force?: boolean;
}

function readGpuFromNavigator(): GPU | null {
  if (typeof navigator === 'undefined') return null;
  const candidate = navigator as Navigator & { gpu?: GPU };
  return candidate.gpu ?? null;
}

function gpuAdapterInfo(adapter: GPUAdapter): JsonSafeGpuAdapterInfo | undefined {
  const info = (adapter as GPUAdapter & { info?: { vendor?: string; architecture?: string; device?: string; description?: string } }).info;
  if (!info) return undefined;
  return {
    vendor: info.vendor,
    architecture: info.architecture,
    device: info.device,
    description: info.description,
  };
}

export class WebGPUDeviceRuntime {
  adapter: GPUAdapter | null = null;
  device: GPUDevice | null = null;
  initState: WebGPUInitState = 'idle';
  initReason: string | null = null;
  initializedAt: string | null = null;
  adapterInfo: JsonSafeGpuAdapterInfo | undefined;
  private initPromise: Promise<WebGPUInitializationResult> | null = null;

  get ready(): boolean {
    return this.initState === 'ready' && this.device !== null;
  }

  async init(options: WebGPUInitializeOptions = {}): Promise<boolean> {
    const result = await this.ensureInitialized(options);
    return result.ready;
  }

  async ensureInitialized(options: WebGPUInitializeOptions = {}): Promise<WebGPUInitializationResult> {
    if (!options.force && this.ready) return this.result();
    if (!options.force && this.initPromise) return this.initPromise;

    this.initPromise = this.initialize(options).finally(() => {
      this.initPromise = null;
    });
    return this.initPromise;
  }

  reset(): void {
    this.device?.destroy?.();
    this.adapter = null;
    this.device = null;
    this.initState = 'idle';
    this.initReason = null;
    this.initializedAt = null;
    this.adapterInfo = undefined;
    this.initPromise = null;
  }

  private async initialize(options: WebGPUInitializeOptions): Promise<WebGPUInitializationResult> {
    const gpu = readGpuFromNavigator();
    if (!gpu) return this.fail('unavailable', 'navigator.gpu is unavailable in this runtime.');
    if (typeof globalThis !== 'undefined' && globalThis.isSecureContext === false) {
      return this.fail('unavailable', 'WebGPU requires a secure context. Use HTTPS or localhost.');
    }

    const preferred = options.powerPreference ?? 'high-performance';
    const preferences: ReadonlyArray<GPUPowerPreference | undefined> = preferred === 'high-performance'
      ? ['high-performance', undefined, 'low-power']
      : [preferred, undefined, 'high-performance'];

    let lastReason = 'No WebGPU adapter was returned.';
    for (const powerPreference of preferences) {
      try {
        const adapter = await gpu.requestAdapter(powerPreference ? { powerPreference } : undefined);
        if (!adapter) {
          lastReason = `No WebGPU adapter for ${powerPreference ?? 'default'} preference.`;
          continue;
        }
        const device = await adapter.requestDevice();
        this.adapter = adapter;
        this.device = device;
        this.initState = 'ready';
        this.initReason = null;
        this.initializedAt = new Date().toISOString();
        this.adapterInfo = gpuAdapterInfo(adapter);
        void device.lost.then((info) => {
          if (this.device === device) {
            this.initState = 'lost';
            this.initReason = info.message || `WebGPU device lost: ${info.reason}`;
            this.device = null;
          }
        });
        return this.result(powerPreference);
      } catch (error) {
        lastReason = error instanceof Error ? error.message : String(error);
      }
    }
    return this.fail('failed', lastReason);
  }

  private fail(state: Exclude<WebGPUInitState, 'idle' | 'ready'>, reason: string): WebGPUInitializationResult {
    this.initState = state;
    this.initReason = reason;
    this.initializedAt = new Date().toISOString();
    this.device = null;
    return this.result(undefined, reason);
  }

  private result(powerPreference?: GPUPowerPreference, reason = this.initReason ?? undefined): WebGPUInitializationResult {
    const maxTextureDimension2D = this.device?.limits.maxTextureDimension2D ?? this.adapter?.limits.maxTextureDimension2D;
    return {
      ready: this.ready,
      state: this.initState,
      reason,
      adapterInfo: this.adapterInfo,
      maxTextureDimension2D,
      powerPreference,
      initializedAt: this.initializedAt ?? undefined,
    };
  }

  get maxViewportResolutionK(): number | null {
    const maxTextureDimension = this.device?.limits.maxTextureDimension2D ?? this.adapter?.limits.maxTextureDimension2D ?? null;
    if (!maxTextureDimension || !Number.isFinite(maxTextureDimension)) return null;
    return maxTextureDimension >= 3840 ? 4 : Math.max(1, maxTextureDimension / 960);
  }

  async warmupCompute(options: WebGPUDispatchOptions = {}): Promise<WebGPUComputeMeasurement | null> {
    return this.measureComputeDispatch({ invocations: 65_536, samples: 1, operationsPerInvocation: 8, ...options });
  }

  async measureComputeDispatch(options: WebGPUDispatchOptions = {}): Promise<WebGPUComputeMeasurement | null> {
    if (!this.ready) {
      const init = await this.ensureInitialized();
      if (!init.ready) return null;
    }
    const device = this.device;
    if (!device) return null;

    const invocations = Math.max(64, Math.floor(options.invocations ?? 262_144));
    const samplesRequested = Math.max(1, Math.floor(options.samples ?? 5));
    const operationsPerInvocation = Math.max(1, Math.floor(options.operationsPerInvocation ?? 8));
    const workgroupSize = 64;
    const workgroups = Math.ceil(invocations / workgroupSize);
    const byteLength = invocations * Float32Array.BYTES_PER_ELEMENT;

    const buffer = device.createBuffer({
      size: byteLength,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });
    device.queue.writeBuffer(buffer, 0, new Float32Array(invocations).fill(1));

    const shader = device.createShaderModule({
      code: `
        @group(0) @binding(0) var<storage, read_write> data: array<f32>;

        @compute @workgroup_size(${workgroupSize})
        fn main(@builtin(global_invocation_id) id: vec3<u32>) {
          let i = id.x;
          if (i >= arrayLength(&data)) {
            return;
          }
          var v = data[i];
          v = v * 1.000001 + 0.000001;
          v = v * 1.000001 + 0.000001;
          v = v * 1.000001 + 0.000001;
          v = v * 1.000001 + 0.000001;
          data[i] = v;
        }
      `,
    });

    const pipeline = device.createComputePipeline({
      layout: 'auto',
      compute: { module: shader, entryPoint: 'main' },
    });
    const bindGroup = device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer } }],
    });

    const submitOnce = async (): Promise<number> => {
      const encoder = device.createCommandEncoder();
      const pass = encoder.beginComputePass();
      pass.setPipeline(pipeline);
      pass.setBindGroup(0, bindGroup);
      pass.dispatchWorkgroups(workgroups);
      pass.end();
      const started = performanceNow();
      device.queue.submit([encoder.finish()]);
      await device.queue.onSubmittedWorkDone();
      return performanceNow() - started;
    };

    await submitOnce();
    const samples: number[] = [];
    for (let i = 0; i < samplesRequested; i += 1) {
      samples.push(await submitOnce());
    }
    buffer.destroy();

    const median = [...samples].sort((a, b) => a - b)[Math.floor(samples.length / 2)] ?? Number.NaN;
    const operations = invocations * operationsPerInvocation;
    const estimatedTflops = Number.isFinite(median) && median > 0
      ? operations / (median / 1000) / 1_000_000_000_000
      : 0;

    return {
      dispatchLatencyMs: median,
      estimatedTflops,
      invocations,
      workgroups,
      operationsPerInvocation,
      samples,
    };
  }
}

export type GpuBufferKind = 'particles' | 'transforms' | 'meshes' | 'materials' | 'tiles' | 'compute';
export class GpuBufferRegistry {
  private readonly buffers = new Map<string, GPUBuffer>();
  register(kind: GpuBufferKind, id: string, buffer: GPUBuffer): void { this.buffers.set(`${kind}:${id}`, buffer); }
  get(kind: GpuBufferKind, id: string): GPUBuffer | undefined { return this.buffers.get(`${kind}:${id}`); }
  get size(): number { return this.buffers.size; }
}

export class AudioWorkletRuntime {
  context: AudioContext | null = null;
  async init(moduleUrl?: string): Promise<boolean> {
    if (typeof AudioContext === 'undefined' || !('audioWorklet' in AudioContext.prototype)) return false;
    this.context = new AudioContext();
    if (moduleUrl) await this.context.audioWorklet.addModule(moduleUrl);
    return this.context !== null;
  }
}

export class WasmKernelRuntime {
  instance: WebAssembly.Instance | null = null;
  async instantiate(bytes: BufferSource, imports: WebAssembly.Imports = {}): Promise<boolean> {
    if (typeof WebAssembly === 'undefined') return false;
    const { instance } = await WebAssembly.instantiate(bytes, imports);
    this.instance = instance;
    return this.instance !== null;
  }
}

export class HotRuntime<A extends EnginAction = EnginAction> {
  readonly classifier: HotActionClassifier;
  readonly revisions = new RevisionCoalescer();
  readonly commands = new CommandRingBuffer<A>();
  readonly memory = new TypedMemoryArena();
  readonly binaryBus = new BinaryCommandBus();
  readonly persistence = new DeferredPersistenceQueue<unknown>();
  readonly sync = new DeferredSyncQueue<unknown>();
  readonly snapshots = new SnapshotCompactor<unknown>();
  readonly workers = new WorkerPoolRuntime();
  readonly webgpu = new WebGPUDeviceRuntime();
  readonly gpuBuffers = new GpuBufferRegistry();
  readonly audioWorklet = new AudioWorkletRuntime();
  readonly wasm = new WasmKernelRuntime();

  constructor(plan: EnginExecutionPlan) {
    this.classifier = new HotActionClassifier(plan);
  }

  submit(action: A, revision: number): boolean {
    if (!this.classifier.isHot(action.type)) return false;
    this.commands.push(action);
    this.revisions.mark(revision);
    return true;
  }
}

function performanceNow(): number {
  return typeof performance !== 'undefined' && typeof performance.now === 'function'
    ? performance.now()
    : Date.now();
}
