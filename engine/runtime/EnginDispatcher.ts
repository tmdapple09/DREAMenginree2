import type { RenderIntentType } from '@/engins/renderengin/core';
import {
    BAR_Y_SCALE,
    buildWorkgroups,
    createEnginSAB,
    f64Telemetry,
    int32AxisState,
    int32DreamDMBarX,
    int32DreamDMBarY,
    int32LockedState,
    MAX_WORKERS,
    SAB_BYTES,
    SNAP_THRESHOLD_RATIO,
    type Workgroup,
} from './memory';











let _instance: EnginDispatcher | null = null;








export interface WorkerInitMessage {
  type: 'init';
  sab: SharedArrayBuffer;
  workgroup: Workgroup;
  
  wasmMemory?: WebAssembly.Memory;
}


export interface WorkerStopMessage {
  type: 'stop';
}


export interface WorkerTickMessage {
  type: 'tick';
  workerIndex: number;
  microsecondsPerTick: number;
}


export interface WorkerBoundsViolationMessage {
  type: 'bounds_violation';
  workerIndex: number;
  attemptedIndex: number;
  workgroup: Workgroup;
}


export interface WorkerWasmBudgetExceededMessage {
  type: 'wasm_budget_exceeded';
  workerIndex: number;
  microsecondsPerTick: number;
  usingWasm: boolean;
}


export type DispatcherToWorkerMessage = WorkerInitMessage | WorkerStopMessage;


export type WorkerToDispatcherMessage =
  | WorkerTickMessage
  | WorkerBoundsViolationMessage
  | WorkerWasmBudgetExceededMessage;



export type WorkerOutboundMessage = DispatcherToWorkerMessage;


export type WorkerInboundMessage  = WorkerToDispatcherMessage;


export interface WasmEngineExports {
  
  tickPhysicsSIMD: (posPtr: number, velPtr: number, count: number, deltaTime: number) => void;

  
  processAudioBufferSIMD: (bufPtr: number, count: number, gain: number) => void;

  
  hashBytesFNV1A?: (ptr: number, count: number) => number;

  
  shapeGlowFieldSIMD?: (
    intensityPtr: number,
    velocityPtr: number,
    count: number,
    deltaTime: number,
    resonance: number,
  ) => void;
}


export interface RenderDispatcherIntent {
  type: RenderIntentType;
  source: string;
  payload?: Record<string, unknown>;
  createdAt: string;
}

export interface DispatcherStats {
  
  workerCount: number;
  
  microsecondsPerTick: readonly number[];
  
  boundsViolations: number;
}




export async function initWasmEngine(
  wasmMemory: WebAssembly.Memory | null,
  wasmUrl = '/workers/engin-shader.wasm',
): Promise<WasmEngineExports | null> {
  
  if (typeof WebAssembly === 'undefined' || typeof SharedArrayBuffer === 'undefined') {
    return null;
  }
  
  if (!wasmMemory) return null;

  try {
    const response = await fetch(wasmUrl);
    if (!response.ok) {
      console.warn(
        `[EnginDispatcher] Wasm binary not found at ${wasmUrl} ` +
        `(${response.status}). Using JS physics stub.`,
      );
      return null;
    }

    const arrayBuffer = await response.arrayBuffer();

    
    
    const { instance } = await WebAssembly.instantiate(arrayBuffer, {
      env: {
        memory: wasmMemory,
        abort: (msg: number, file: number, line: number, col: number) => {
          console.error(`[WasmEngine] abort: msg=${msg} file=${file} line=${line} col=${col}`);
        },
      },
    });

    return instance.exports as unknown as WasmEngineExports;
  } catch (err: unknown) {
    console.warn('[EnginDispatcher] Wasm init failed; using JS physics stub:', err);
    return null;
  }
}


export class EnginDispatcher {
  private _sab: SharedArrayBuffer | null = null;
  
  private _wasmMemory: WebAssembly.Memory | null = null;
  private _workers: Worker[] = [];
  private _workgroups: Workgroup[] = [];
  private _boundsViolations = 0;
  private _initialized = false;
  private _wasmExports: WasmEngineExports | null = null;
  private _renderIntentQueue: RenderDispatcherIntent[] = [];

  private constructor() {}

  
  static getInstance(): EnginDispatcher {
    if (!_instance) {
      _instance = new EnginDispatcher();
    }
    return _instance;
  }

  
  static _resetForTesting(): void {
    if (_instance) {
      _instance.dispose();
    }
    _instance = null;
  }

  
  init(workerScriptUrl = '/workers/engin-shader.worker.js'): void {
    if (this._initialized) return;

    
    
    if (
      typeof Worker === 'undefined' ||
      typeof SharedArrayBuffer === 'undefined'
    ) {
      return;
    }

    
    
    
    
    
    
    
    if (typeof WebAssembly !== 'undefined') {
      try {
        const WASM_PAGE_BYTES = 65_536;
        const wasmInitPages = Math.ceil(SAB_BYTES / WASM_PAGE_BYTES);
        const wasmMaxPages  = Math.ceil(wasmInitPages * 1.5);
        this._wasmMemory = new WebAssembly.Memory({
          initial: wasmInitPages,
          maximum: wasmMaxPages,
          shared: true,
        } as WebAssembly.MemoryDescriptor & { shared: boolean });
        this._sab = this._wasmMemory.buffer as unknown as SharedArrayBuffer;
      } catch {
        
        
        this._wasmMemory = null;
        this._sab = createEnginSAB();
      }
    } else {
      this._sab = createEnginSAB();
    }

    const concurrency =
      typeof navigator !== 'undefined' && navigator.hardwareConcurrency > 0
        ? navigator.hardwareConcurrency
        : 4;
    const workerCount = Math.max(1, Math.min(concurrency - 1, MAX_WORKERS));

    this._workgroups = buildWorkgroups(workerCount);

    for (const wg of this._workgroups) {
      const worker = new Worker(workerScriptUrl);
      worker.onmessage = (evt: MessageEvent<WorkerToDispatcherMessage>) =>
        this._handleWorkerMessage(evt.data);
      worker.onerror = (err: unknown ) => {
        console.error(`[EnginDispatcher] Worker ${wg.workerIndex} error:`, err);
      };

      const msg: WorkerInitMessage = {
        type: 'init',
        sab: this._sab,
        workgroup: wg,
        
        
        ...(this._wasmMemory ? { wasmMemory: this._wasmMemory } : {}),
      };
      
      worker.postMessage(msg, []);
      this._workers.push(worker);
    }

    this._initialized = true;
  }

  dispatchRenderIntent(intent: Omit<RenderDispatcherIntent, 'createdAt'>): boolean {
    if (!intent.type.startsWith('render.')) return false;
    this._renderIntentQueue.push({ ...intent, createdAt: new Date().toISOString() });
    if (this._renderIntentQueue.length > 128) this._renderIntentQueue.shift();
    return true;
  }

  readRenderIntentQueue(): readonly RenderDispatcherIntent[] {
    return this._renderIntentQueue;
  }

  
  dispose(): void {
    for (const worker of this._workers) {
      if (!worker) continue;
      const msg: WorkerStopMessage = { type: 'stop' };
      worker.postMessage(msg);
      worker.terminate();
    }
    this._workers = [];
    this._workgroups = [];
    this._sab = null;
    this._wasmMemory = null;
    this._boundsViolations = 0;
    this._initialized = false;
    this._wasmExports = null;
    this._renderIntentQueue = [];
  }

  
  async initWasm(wasmUrl = '/workers/engin-shader.wasm'): Promise<boolean> {
    if (!this._sab) {
      console.warn('[EnginDispatcher] initWasm() called before init() — SAB not allocated.');
      return false;
    }

    
    
    
    this._wasmExports = await initWasmEngine(this._wasmMemory, wasmUrl);

    if (this._wasmExports) {
      console.info('[EnginDispatcher] Wasm physics engine loaded — SIMD acceleration active.');
      
      
      for (const worker of this._workers) {
        worker.postMessage({
          type: 'wasm_init',
          wasmUrl,
          ...(this._wasmMemory ? { wasmMemory: this._wasmMemory } : {}),
        });
      }
    }

    return this._wasmExports !== null;
  }

  
  shapeGlowField(
    intensity: Float32Array,
    velocity: Float32Array,
    deltaTime: number,
    resonance: number,
  ): boolean {
    if (intensity.length !== velocity.length) {
      throw new Error('Glow intensity and velocity buffers must have the same length.');
    }
    if (!Number.isFinite(deltaTime) || deltaTime < 0) {
      throw new Error('Glow deltaTime must be a finite non-negative number.');
    }
    if (!Number.isFinite(resonance) || resonance < 0) {
      throw new Error('Glow resonance must be a finite non-negative number.');
    }

    const wasmBuffer = this._wasmMemory?.buffer;
    if (
      this._wasmExports?.shapeGlowFieldSIMD &&
      wasmBuffer &&
      intensity.buffer === wasmBuffer &&
      velocity.buffer === wasmBuffer
    ) {
      this._wasmExports.shapeGlowFieldSIMD(
        intensity.byteOffset,
        velocity.byteOffset,
        intensity.length,
        deltaTime,
        resonance,
      );
      return true;
    }

    const decay = 1.0 - Math.min(0.92, deltaTime * 0.66);
    const gain = deltaTime * resonance;
    for (let i = 0; i < intensity.length; i += 1) {
      intensity[i] = Math.min(1.0, intensity[i] * decay + velocity[i] * gain);
    }
    return false;
  }

  
  setDreamDMBarY(yOffsetPx: number): void {
    if (!this._sab) return;
    if (!Number.isFinite(yOffsetPx)) {
      console.warn(`[EnginDispatcher] Invalid Y offset rejected: ${yOffsetPx}`);
      return;
    }
    const clamped = Math.max(0, Math.min(4_000, yOffsetPx));
    Atomics.store(int32DreamDMBarY(this._sab), 0, Math.round(clamped * BAR_Y_SCALE));
  }

  
  getDreamDMBarY(): number {
    if (!this._sab) return 0;
    return Atomics.load(int32DreamDMBarY(this._sab), 0) / BAR_Y_SCALE;
  }

  
  updateSeamOffset(value: number, axis: 'X' | 'Y'): void {
    if (!this._sab) return;
    if (!Number.isFinite(value)) {
      console.warn(`[EnginDispatcher] updateSeamOffset: invalid value rejected: ${value}`);
      return;
    }
    const encoded = Math.round(Math.max(0, Math.min(1, value)) * BAR_Y_SCALE);
    const view = axis === 'Y' ? int32DreamDMBarY(this._sab) : int32DreamDMBarX(this._sab);
    Atomics.store(view, 0, encoded);
    this._notifyWorkerOfUpdate();
  }

  
  getSeamOffset(axis: 'X' | 'Y'): number {
    if (!this._sab) return 0;
    const view = axis === 'Y' ? int32DreamDMBarY(this._sab) : int32DreamDMBarX(this._sab);
    return Atomics.load(view, 0) / BAR_Y_SCALE;
  }

  
  setLockedState(locked: boolean): void {
    if (!this._sab) return;
    Atomics.store(int32LockedState(this._sab), 0, locked ? 1 : 0);
  }

  
  getLockedState(): boolean {
    if (!this._sab) return false;
    return Atomics.load(int32LockedState(this._sab), 0) === 1;
  }

  
  setAxisState(axis: 'X' | 'Y'): void {
    if (!this._sab) return;
    Atomics.store(int32AxisState(this._sab), 0, axis === 'X' ? 1 : 0);
  }

  
  getAxisState(): 'X' | 'Y' {
    if (!this._sab) return 'Y';
    return Atomics.load(int32AxisState(this._sab), 0) === 1 ? 'X' : 'Y';
  }

  
  static readonly SNAP_THRESHOLD_RATIO = SNAP_THRESHOLD_RATIO;

  
  get stats(): DispatcherStats {
    const mpt: number[] = [];
    if (this._sab) {
      const tel = f64Telemetry(this._sab);
      for (let i = 0; i < this._workers.length; i++) {
        mpt.push(tel[i]);
      }
    }
    return {
      workerCount: this._workers.length,
      microsecondsPerTick: mpt,
      boundsViolations: this._boundsViolations,
    };
  }

  
  get sab(): SharedArrayBuffer | null {
    return this._sab;
  }

  
  get workgroups(): readonly Workgroup[] {
    return this._workgroups;
  }

  get initialized(): boolean {
    return this._initialized;
  }

  
  get wasmExports(): WasmEngineExports | null {
    return this._wasmExports;
  }

  
  private _notifyWorkerOfUpdate(): void {
    
    
    
  }

  private _handleWorkerMessage(msg: WorkerToDispatcherMessage): void {
    switch (msg.type) {
      case 'tick':
        
        
        if (msg.microsecondsPerTick > 16_000) {
          console.warn(
            `[EnginDispatcher] Worker ${msg.workerIndex} tick took ` +
            `${(msg.microsecondsPerTick / 1000).toFixed(2)} ms`,
          );
        }
        break;

      case 'bounds_violation':
        
        this._boundsViolations++;
        console.error(
          `[EnginDispatcher][AUDIT] Worker ${msg.workerIndex} attempted ` +
          `out-of-bounds write at index ${msg.attemptedIndex}. ` +
          `Assigned range: [${msg.workgroup.startIndex}, ${msg.workgroup.endIndex}). ` +
          `Total violations: ${this._boundsViolations}`,
        );
        break;

      case 'wasm_budget_exceeded':
        
        
        console.warn(
          `[EnginDispatcher][IDARi] Worker ${msg.workerIndex} exceeded tick budget: ` +
          `${(msg.microsecondsPerTick / 1000).toFixed(2)} ms ` +
          `(Wasm SIMD: ${msg.usingWasm})`,
        );
        break;

      default:
        break;
    }
  }
}






