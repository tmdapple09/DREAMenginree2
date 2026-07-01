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
  | 'simulation-step'
  | 'module-transfer'
  | 'material-interaction'
  | 'viewport-frame'
  | 'gpu-dispatch'
  | 'audio-shape';

export type HotRuntimeLane =
  | 'input'
  | 'module-transfer'
  | 'material-interaction'
  | 'gpu-compute'
  | 'audio-shape'
  | 'simulation'
  | 'viewport'
  | 'sync'
  | 'persistence';

export type HotRuntimePriority = 'frame-critical' | 'realtime' | 'deferred';

export type MoldableModuleOperation =
  | 'move'
  | 'stretch'
  | 'snap'
  | 'compress'
  | 'ripple'
  | 'bend'
  | 'split'
  | 'merge'
  | 'preview'
  | 'transform'
  | 'settle';

export interface HotActionMetadata {
  readonly lane?: HotRuntimeLane;
  readonly priority?: HotRuntimePriority;
  readonly coalesceKey?: string;
  readonly moduleId?: string;
  readonly sourceRuntimeId?: string;
  readonly targetRuntimeId?: string;
  readonly operation?: MoldableModuleOperation;
  readonly gpu?: boolean;
  readonly persist?: 'immediate' | 'after-settle' | 'never';
  readonly sync?: 'immediate' | 'delta' | 'after-settle' | 'never';
}

export interface BinaryCommandPacket {
  type: number;
  timestamp: number;
  payload: Uint8Array;
}

export interface HotLaneCommand<T> {
  readonly sequence: number;
  readonly revision: number;
  readonly action: T;
  readonly metadata: Required<Pick<HotActionMetadata, 'lane' | 'priority' | 'persist' | 'sync'>> &
    Omit<HotActionMetadata, 'lane' | 'priority' | 'persist' | 'sync'>;
  readonly receivedAt: number;
}

export interface MoldableModuleFrame {
  readonly moduleId: string;
  readonly sourceRuntimeId: string;
  readonly targetRuntimeId?: string;
  readonly operation: MoldableModuleOperation;
  readonly pointerX: number;
  readonly pointerY: number;
  readonly deltaX?: number;
  readonly deltaY?: number;
  readonly pressure?: number;
  readonly progress?: number;
  readonly bend?: number;
  readonly stretchX?: number;
  readonly stretchY?: number;
  readonly compression?: number;
  readonly ripple?: number;
  readonly split?: number;
  readonly merge?: number;
  readonly preview?: number;
  readonly transform?: number;
  readonly revision: number;
  readonly timestamp?: number;
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

export interface ShaderKernelDefinition {
  readonly id: string;
  readonly code: string;
  readonly entryPoint?: string;
}

export type GpuBufferKind =
  | 'particles'
  | 'transforms'
  | 'meshes'
  | 'materials'
  | 'tiles'
  | 'compute'
  | 'module-transfer'
  | 'module-shape'
  | 'touch-input'
  | 'runtime-surface';



export class HotActionClassifier {
  private readonly byPrefix: ReadonlyArray<[string, HotActionKind]> = [
    ['code:cell-update', 'keystroke'],
    ['music:midi', 'midi'],
    ['music:waveform', 'audio-shape'],
    ['music:sample', 'audio-shape'],
    ['music:', 'midi'],
    ['game:input', 'controller-input'],
    ['game:physics', 'physics-tick'],
    ['game:module-transfer', 'module-transfer'],
    ['collab:', 'collaboration-delta'],
    ['drag:module-transfer', 'module-transfer'],
    ['drag:material', 'material-interaction'],
    ['drag:', 'drag-update'],
    ['content:module-transfer', 'module-transfer'],
    ['content:mold', 'material-interaction'],
    ['content:render-preview', 'preview-render'],
    ['content:ray', 'preview-render'],
    ['lab:module-transfer', 'module-transfer'],
    ['lab:sim', 'simulation-step'],
    ['lab:physics', 'physics-tick'],
    ['viewport:', 'viewport-frame'],
    ['gpu:', 'gpu-dispatch'],
  ];

  constructor(private readonly plan: EnginExecutionPlan) {}

  classify(actionType: string): HotActionKind | null {
    const prefixMatch = this.byPrefix.find(([prefix]) => actionType.startsWith(prefix))?.[1] ?? null;
    if (prefixMatch && this.plan.realtimeActionTypes.includes(actionType)) return prefixMatch;
    if (prefixMatch && this.isRuntimeCriticalPrefix(actionType)) return prefixMatch;
    return null;
  }

  isHot(actionType: string): boolean {
    return this.classify(actionType) !== null;
  }

  metadataFor(actionType: string, metadata: HotActionMetadata = {}): Required<Pick<HotActionMetadata, 'lane' | 'priority' | 'persist' | 'sync'>> &
    Omit<HotActionMetadata, 'lane' | 'priority' | 'persist' | 'sync'> {
    const kind = this.classify(actionType);
    const lane = metadata.lane ?? laneForKind(kind);
    return {
      ...metadata,
      lane,
      priority: metadata.priority ?? priorityForLane(lane),
      persist: metadata.persist ?? persistPolicyForLane(lane),
      sync: metadata.sync ?? syncPolicyForLane(lane),
    };
  }

  private isRuntimeCriticalPrefix(actionType: string): boolean {
    return (
      actionType.startsWith('drag:') ||
      actionType.startsWith('viewport:') ||
      actionType.startsWith('gpu:') ||
      actionType.includes('module-transfer') ||
      actionType.includes(':mold')
    );
  }
}

function laneForKind(kind: HotActionKind | null): HotRuntimeLane {
  switch (kind) {
    case 'keystroke':
    case 'controller-input':
    case 'drag-update':
      return 'input';
    case 'module-transfer':
      return 'module-transfer';
    case 'material-interaction':
      return 'material-interaction';
    case 'gpu-dispatch':
    case 'preview-render':
      return 'gpu-compute';
    case 'audio-shape':
    case 'midi':
      return 'audio-shape';
    case 'physics-tick':
    case 'simulation-step':
      return 'simulation';
    case 'viewport-frame':
      return 'viewport';
    case 'collaboration-delta':
      return 'sync';
    default:
      return 'input';
  }
}

function priorityForLane(lane: HotRuntimeLane): HotRuntimePriority {
  switch (lane) {
    case 'input':
    case 'module-transfer':
    case 'material-interaction':
    case 'viewport':
      return 'frame-critical';
    case 'gpu-compute':
    case 'audio-shape':
    case 'simulation':
    case 'sync':
      return 'realtime';
    case 'persistence':
      return 'deferred';
    default:
      return 'realtime';
  }
}

function persistPolicyForLane(lane: HotRuntimeLane): 'immediate' | 'after-settle' | 'never' {
  switch (lane) {
    case 'module-transfer':
    case 'material-interaction':
    case 'input':
    case 'viewport':
      return 'after-settle';
    case 'gpu-compute':
    case 'audio-shape':
    case 'simulation':
      return 'never';
    case 'sync':
      return 'after-settle';
    case 'persistence':
      return 'immediate';
    default:
      return 'after-settle';
  }
}

function syncPolicyForLane(lane: HotRuntimeLane): 'immediate' | 'delta' | 'after-settle' | 'never' {
  switch (lane) {
    case 'module-transfer':
    case 'material-interaction':
      return 'delta';
    case 'input':
    case 'viewport':
      return 'never';
    case 'gpu-compute':
    case 'audio-shape':
    case 'simulation':
      return 'delta';
    case 'sync':
      return 'immediate';
    case 'persistence':
      return 'after-settle';
    default:
      return 'delta';
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

  get latest(): number {
    return this.latestRevision;
  }

  get hasQueuedRevision(): boolean {
    return this.queued;
  }
}

export class CommandRingBuffer<T> {
  private readonly values: Array<T | undefined>;
  private cursor = 0;
  private filled = 0;
  private overwritten = 0;

  constructor(capacity = 4096) {
    this.values = new Array<T | undefined>(Math.max(1, Math.floor(capacity)));
  }

  push(value: T): void {
    if (this.filled === this.values.length) this.overwritten += 1;
    this.values[this.cursor] = value;
    this.cursor = (this.cursor + 1) % this.values.length;
    this.filled = Math.min(this.filled + 1, this.values.length);
  }

  drain(): T[] {
    const out: T[] = [];
    const start = (this.cursor - this.filled + this.values.length) % this.values.length;
    for (let i = 0; i < this.filled; i += 1) {
      const slot = (start + i) % this.values.length;
      const value = this.values[slot];
      this.values[slot] = undefined;
      if (value !== undefined) out.push(value);
    }
    this.filled = 0;
    return out;
  }

  clear(): void {
    this.values.fill(undefined);
    this.cursor = 0;
    this.filled = 0;
  }

  get size(): number {
    return this.filled;
  }

  get overwrittenCount(): number {
    return this.overwritten;
  }
}

export class CoalescedCommandQueue<T> {
  private readonly order: string[] = [];
  private readonly latestByKey = new Map<string, T>();

  constructor(private readonly capacity = 2048) {}

  push(key: string, value: T): void {
    if (!this.latestByKey.has(key)) {
      this.order.push(key);
      while (this.order.length > this.capacity) {
        const oldest = this.order.shift();
        if (oldest) this.latestByKey.delete(oldest);
      }
    }
    this.latestByKey.set(key, value);
  }

  drain(): T[] {
    const out: T[] = [];
    for (const key of this.order) {
      const value = this.latestByKey.get(key);
      if (value !== undefined) out.push(value);
    }
    this.order.length = 0;
    this.latestByKey.clear();
    return out;
  }

  get size(): number {
    return this.latestByKey.size;
  }
}

export class HotLaneScheduler<T> {
  private sequence = 0;
  private readonly queues = new Map<HotRuntimeLane, CommandRingBuffer<HotLaneCommand<T>>>();
  private readonly coalesced = new Map<HotRuntimeLane, CoalescedCommandQueue<HotLaneCommand<T>>>();

  constructor(capacity = 4096) {
    for (const lane of HOT_RUNTIME_LANES) {
      this.queues.set(lane, new CommandRingBuffer<HotLaneCommand<T>>(capacity));
      this.coalesced.set(lane, new CoalescedCommandQueue<HotLaneCommand<T>>(capacity));
    }
  }

  submit(
    action: T,
    revision: number,
    metadata: ReturnType<HotActionClassifier['metadataFor']>,
  ): HotLaneCommand<T> {
    const command: HotLaneCommand<T> = {
      sequence: ++this.sequence,
      revision,
      action,
      metadata,
      receivedAt: performanceNow(),
    };

    const coalesceKey = metadata.coalesceKey ?? metadata.moduleId;
    if (coalesceKey && shouldCoalesceLane(metadata.lane)) {
      this.coalesced.get(metadata.lane)?.push(coalesceKey, command);
    } else {
      this.queues.get(metadata.lane)?.push(command);
    }

    return command;
  }

  drain(lane: HotRuntimeLane): HotLaneCommand<T>[] {
    const queued = this.queues.get(lane)?.drain() ?? [];
    const coalesced = this.coalesced.get(lane)?.drain() ?? [];
    return [...queued, ...coalesced].sort((a, b) => a.sequence - b.sequence);
  }

  drainFrameCritical(): HotLaneCommand<T>[] {
    return [
      ...this.drain('input'),
      ...this.drain('module-transfer'),
      ...this.drain('material-interaction'),
      ...this.drain('viewport'),
    ].sort((a, b) => a.sequence - b.sequence);
  }

  size(lane: HotRuntimeLane): number {
    return (this.queues.get(lane)?.size ?? 0) + (this.coalesced.get(lane)?.size ?? 0);
  }
}

const HOT_RUNTIME_LANES: readonly HotRuntimeLane[] = Object.freeze([
  'input',
  'module-transfer',
  'material-interaction',
  'gpu-compute',
  'audio-shape',
  'simulation',
  'viewport',
  'sync',
  'persistence',
]);

function shouldCoalesceLane(lane: HotRuntimeLane): boolean {
  return lane === 'input' || lane === 'module-transfer' || lane === 'material-interaction' || lane === 'viewport';
}

export class TypedMemoryArena {
  readonly bytes: ArrayBuffer;
  private offset = 0;

  constructor(byteLength = 1024 * 1024) {
    this.bytes = new ArrayBuffer(Math.max(1, Math.floor(byteLength)));
  }

  allocFloat32(length: number): Float32Array {
    const safeLength = Math.max(0, Math.floor(length));
    const byteLength = safeLength * Float32Array.BYTES_PER_ELEMENT;
    const aligned = (this.offset + 3) & ~3;
    if (aligned + byteLength > this.bytes.byteLength) throw new Error('TypedMemoryArena exhausted.');
    this.offset = aligned + byteLength;
    return new Float32Array(this.bytes, aligned, safeLength);
  }

  reset(): void {
    this.offset = 0;
  }
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
  private readonly checkpoints: T[] = [];

  constructor(private readonly maxCheckpoints = 32) {}

  remember(snapshot: T): void {
    this.checkpoints.push(snapshot);
    while (this.checkpoints.length > this.maxCheckpoints) this.checkpoints.shift();
  }

  latest(): T | null {
    return this.checkpoints.at(-1) ?? null;
  }

  get count(): number {
    return this.checkpoints.length;
  }
}

export class WorkerPoolRuntime {
  private readonly workers: Worker[] = [];

  constructor(
    private readonly factory?: () => Worker,
    private readonly maxWorkers = 2,
  ) {}

  acquire(): Worker | null {
    if (typeof Worker === 'undefined' || !this.factory) return null;
    return this.workers.pop() ?? this.factory();
  }

  release(worker: Worker): void {
    if (this.workers.length < this.maxWorkers) this.workers.push(worker);
    else worker.terminate();
  }
}

export class ShaderKernelRegistry {
  private readonly kernels = new Map<string, ShaderKernelDefinition>();

  register(kernel: ShaderKernelDefinition): void {
    this.kernels.set(kernel.id, Object.freeze({ ...kernel }));
  }

  get(id: string): ShaderKernelDefinition | undefined {
    return this.kernels.get(id);
  }

  has(id: string): boolean {
    return this.kernels.has(id);
  }

  get size(): number {
    return this.kernels.size;
  }
}

function readGpuFromNavigator(): GPU | null {
  if (typeof navigator === 'undefined') return null;
  const candidate = navigator as Navigator & { gpu?: GPU };
  return candidate.gpu ?? null;
}

function gpuAdapterInfo(adapter: GPUAdapter): JsonSafeGpuAdapterInfo | undefined {
  const info = (adapter as GPUAdapter & {
    info?: {
      vendor?: string;
      architecture?: string;
      device?: string;
      description?: string;
    };
  }).info;

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

  readonly kernels = new ShaderKernelRegistry();

  private initPromise: Promise<WebGPUInitializationResult> | null = null;
  private readonly shaderModules = new Map<string, GPUShaderModule>();
  private readonly computePipelines = new Map<string, GPUComputePipeline>();

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
    this.shaderModules.clear();
    this.computePipelines.clear();
  }

  registerKernel(kernel: ShaderKernelDefinition): void {
    this.kernels.register(kernel);
    this.shaderModules.delete(kernel.id);
    for (const key of this.computePipelines.keys()) {
      if (key.startsWith(`${kernel.id}:`)) this.computePipelines.delete(key);
    }
  }

  createShaderModule(kernelId: string): GPUShaderModule | null {
    if (!this.device) return null;

    const cached = this.shaderModules.get(kernelId);
    if (cached) return cached;

    const kernel = this.kernels.get(kernelId);
    if (!kernel) return null;

    const shaderModule = this.device.createShaderModule({ code: kernel.code });
    this.shaderModules.set(kernelId, shaderModule);
    return shaderModule;
  }

  async createComputePipeline(kernelId: string, entryPoint?: string): Promise<GPUComputePipeline | null> {
    if (!this.device) return null;

    const kernel = this.kernels.get(kernelId);
    if (!kernel) return null;

    const resolvedEntry = entryPoint ?? kernel.entryPoint ?? 'main';
    const cacheKey = `${kernelId}:${resolvedEntry}`;
    const cached = this.computePipelines.get(cacheKey);
    if (cached) return cached;

    const shaderModule = this.createShaderModule(kernelId);
    if (!shaderModule) return null;

    this.device.pushErrorScope('validation');
    const pipeline = await this.device.createComputePipelineAsync({
      label: `hot-runtime:${cacheKey}`,
      layout: 'auto',
      compute: { module: shaderModule, entryPoint: resolvedEntry },
    });
    const validation = await this.device.popErrorScope();
    if (validation) {
      throw new Error(`HotRuntime compute pipeline warmup failed for ${cacheKey}: ${validation.message}`);
    }

    this.computePipelines.set(cacheKey, pipeline);
    return pipeline;
  }

  private async initialize(options: WebGPUInitializeOptions): Promise<WebGPUInitializationResult> {
    const gpu = readGpuFromNavigator();

    if (!gpu) return this.fail('unavailable', 'navigator.gpu is unavailable in this runtime.');

    if (typeof globalThis !== 'undefined' && globalThis.isSecureContext === false) {
      return this.fail('unavailable', 'WebGPU requires a secure context. Use HTTPS or localhost.');
    }

    const preferred = options.powerPreference ?? 'high-performance';
    const preferences: ReadonlyArray<GPUPowerPreference | undefined> =
      preferred === 'high-performance'
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
            this.shaderModules.clear();
            this.computePipelines.clear();
          }
        });

        this.registerDefaultKernels();

        return this.result(powerPreference);
      } catch (error) {
        lastReason = error instanceof Error ? error.message : String(error);
      }
    }

    return this.fail('failed', lastReason);
  }

  private registerDefaultKernels(): void {
    if (!this.kernels.has('module-transfer.deform')) {
      this.registerKernel({
        id: 'module-transfer.deform',
        entryPoint: 'main',
        code: `
          struct ModuleTransferFrame {
            pointerX: f32,
            pointerY: f32,
            deltaX: f32,
            deltaY: f32,
            pressure: f32,
            progress: f32,
            bend: f32,
            stretchX: f32,
            stretchY: f32,
            compression: f32,
            ripple: f32,
            split: f32,
            merge: f32,
            preview: f32,
            transform: f32,
            revision: f32,
          };

          @group(0) @binding(0)
          var<storage, read_write> frame: array<f32>;

          @compute @workgroup_size(16)
          fn main(@builtin(global_invocation_id) id: vec3<u32>) {
            let i = id.x;
            if (i >= arrayLength(&frame)) {
              return;
            }

            let progress = frame[5];
            let bend = frame[6];
            let stretchX = frame[7];
            let stretchY = frame[8];
            let compression = frame[9];
            let ripple = frame[10];
            let split = frame[11];
            let merge = frame[12];
            let preview = frame[13];
            let transform = frame[14];

            let shaped =
              frame[i] +
              progress * 0.03125 +
              bend * 0.015625 +
              stretchX * 0.0078125 +
              stretchY * 0.0078125 -
              compression * 0.015625 +
              ripple * 0.00390625 +
              split * 0.01171875 +
              merge * 0.01171875 +
              preview * 0.005859375 +
              transform * 0.009765625;

            frame[i] = shaped;
          }
        `,
      });
    }
  }

  private fail(
    state: Exclude<WebGPUInitState, 'idle' | 'ready'>,
    reason: string,
  ): WebGPUInitializationResult {
    this.initState = state;
    this.initReason = reason;
    this.initializedAt = new Date().toISOString();
    this.device = null;
    this.shaderModules.clear();
    this.computePipelines.clear();
    return this.result(undefined, reason);
  }

  private result(
    powerPreference?: GPUPowerPreference,
    reason = this.initReason ?? undefined,
  ): WebGPUInitializationResult {
    const maxTextureDimension2D =
      this.device?.limits.maxTextureDimension2D ?? this.adapter?.limits.maxTextureDimension2D;

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
    const maxTextureDimension =
      this.device?.limits.maxTextureDimension2D ?? this.adapter?.limits.maxTextureDimension2D ?? null;

    if (!maxTextureDimension || !Number.isFinite(maxTextureDimension)) return null;

    return maxTextureDimension >= 3840 ? 4 : Math.max(1, maxTextureDimension / 960);
  }

  async warmupCompute(options: WebGPUDispatchOptions = {}): Promise<WebGPUComputeMeasurement | null> {
    return this.measureComputeDispatch({
      invocations: 65_536,
      samples: 1,
      operationsPerInvocation: 8,
      ...options,
    });
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

    this.registerKernel({
      id: 'benchmark.compute-dispatch',
      entryPoint: 'main',
      code: `
        @group(0) @binding(0)
        var<storage, read_write> data: array<f32>;

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

    const pipeline = await this.createComputePipeline('benchmark.compute-dispatch');
    if (!pipeline) {
      buffer.destroy();
      return null;
    }

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
    const estimatedTflops =
      Number.isFinite(median) && median > 0
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

export class GpuBufferRegistry {
  private readonly buffers = new Map<string, GPUBuffer>();

  register(kind: GpuBufferKind, id: string, buffer: GPUBuffer): void {
    this.buffers.set(`${kind}:${id}`, buffer);
  }

  get(kind: GpuBufferKind, id: string): GPUBuffer | undefined {
    return this.buffers.get(`${kind}:${id}`);
  }

  delete(kind: GpuBufferKind, id: string): void {
    const key = `${kind}:${id}`;
    const buffer = this.buffers.get(key);
    buffer?.destroy?.();
    this.buffers.delete(key);
  }

  clear(): void {
    for (const buffer of this.buffers.values()) buffer.destroy?.();
    this.buffers.clear();
  }

  get size(): number {
    return this.buffers.size;
  }
}

export class MoldableModuleGpuBridge {
  private readonly latestFrames = new Map<string, MoldableModuleFrame>();

  constructor(
    private readonly webgpu: WebGPUDeviceRuntime,
    private readonly buffers: GpuBufferRegistry,
  ) {}

  stageFrame(frame: MoldableModuleFrame): boolean {
    this.latestFrames.set(frame.moduleId, Object.freeze({ ...frame }));

    const device = this.webgpu.device;
    if (!this.webgpu.ready || !device) return false;

    const packed = packMoldableModuleFrame(frame);
    const bufferId = frame.moduleId;
    let buffer = this.buffers.get('module-transfer', bufferId);

    if (!buffer || buffer.size < packed.byteLength) {
      if (buffer) this.buffers.delete('module-transfer', bufferId);
      buffer = device.createBuffer({
        size: packed.byteLength,
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
      });
      this.buffers.register('module-transfer', bufferId, buffer);
    }

    device.queue.writeBuffer(buffer, 0, packed);
    return true;
  }

  latest(moduleId: string): MoldableModuleFrame | null {
    return this.latestFrames.get(moduleId) ?? null;
  }

  settle(moduleId: string): MoldableModuleFrame | null {
    const frame = this.latestFrames.get(moduleId) ?? null;
    this.latestFrames.delete(moduleId);
    return frame;
  }

  get activeCount(): number {
    return this.latestFrames.size;
  }
}

function packMoldableModuleFrame(frame: MoldableModuleFrame): Float32Array {
  return new Float32Array([
    frame.pointerX,
    frame.pointerY,
    frame.deltaX ?? 0,
    frame.deltaY ?? 0,
    frame.pressure ?? 0,
    frame.progress ?? 0,
    frame.bend ?? 0,
    frame.stretchX ?? 1,
    frame.stretchY ?? 1,
    frame.compression ?? 0,
    frame.ripple ?? 0,
    frame.split ?? 0,
    frame.merge ?? 0,
    frame.preview ?? 0,
    frame.transform ?? 0,
    frame.revision,
  ]);
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
  readonly lanes = new HotLaneScheduler<A>();
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
  readonly moldableModules: MoldableModuleGpuBridge;

  constructor(plan: EnginExecutionPlan) {
    this.classifier = new HotActionClassifier(plan);
    this.moldableModules = new MoldableModuleGpuBridge(this.webgpu, this.gpuBuffers);
  }

  submit(action: A, revision: number, metadata: HotActionMetadata = {}): boolean {
    if (!this.classifier.isHot(action.type) && !metadata.lane) return false;

    const resolved = this.classifier.metadataFor(action.type, metadata);

    this.commands.push(action);
    this.lanes.submit(action, revision, resolved);
    this.revisions.mark(revision);

    return true;
  }

  submitMoldableModuleFrame(frame: MoldableModuleFrame): boolean {
    const gpuStaged = this.moldableModules.stageFrame(frame);
    this.revisions.mark(frame.revision);
    return gpuStaged;
  }

  drainFrameCritical(): HotLaneCommand<A>[] {
    return this.lanes.drainFrameCritical();
  }

  drainLane(lane: HotRuntimeLane): HotLaneCommand<A>[] {
    return this.lanes.drain(lane);
  }
}

function performanceNow(): number {
  return typeof performance !== 'undefined' && typeof performance.now === 'function'
    ? performance.now()
    : Date.now();
}






