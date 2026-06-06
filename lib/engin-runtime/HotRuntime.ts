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
    return true;
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

export class WebGPUDeviceRuntime {
  adapter: GPUAdapter | null = null;
  device: GPUDevice | null = null;
  async init(): Promise<boolean> {
    if (typeof navigator === 'undefined' || !('gpu' in navigator)) return false;
    this.adapter = await (navigator as Navigator & { gpu: GPU }).gpu.requestAdapter();
    if (!this.adapter) return false;
    this.device = await this.adapter.requestDevice();
    return true;
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
    return true;
  }
}

export class WasmKernelRuntime {
  instance: WebAssembly.Instance | null = null;
  async instantiate(bytes: BufferSource, imports: WebAssembly.Imports = {}): Promise<boolean> {
    if (typeof WebAssembly === 'undefined') return false;
    const { instance } = await WebAssembly.instantiate(bytes, imports);
    this.instance = instance;
    return true;
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
