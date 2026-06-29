import { createEventBus, type EventBus } from '@/engine/events/eventBus';
import { resolveFrameBudget, type GameEnginQualityTier } from './runtime/FrameBudget';
import { decideRuntimeQuality } from './runtime/RuntimeQuality';
import { requestWebGpuDevice } from '@/engins/renderengin/webgpu';

export type DreamGameBackend = 'webgpu' | 'webgl2' | 'canvas2d' | 'dom';

export interface DreamGameManifest {
  id: string;
  name: string;
  version: string;
  wasmUrl: string;
  assetUrls: string[];
  compatibleRuntime: 'GameEngin';
  entryPoint?: string;
  requiredFeatures?: string[];
  preferredBackend?: DreamGameBackend;
  fallbackBackend?: DreamGameBackend;
  qualityTier?: GameEnginQualityTier;
  bundleManifestId?: string;
  saveSchemaVersion?: number;
}

export interface DreamGameInstance {
  manifest: DreamGameManifest;
  wasmInstance: WebAssembly.Instance;
  assets: Map<string, ArrayBuffer>;
  start(): void;
  stop(): void;
}

export type InputType = 'touch' | 'mouse' | 'keyboard' | 'gamepad' | 'dualsense';
export type InputHandler = (event: Record<string, unknown>) => void;

export interface GameEnginBackendState {
  readonly backend: DreamGameBackend;
  readonly ready: boolean;
  readonly reason?: string;
  readonly quality: ReturnType<typeof decideRuntimeQuality>;
}

export interface GameEnginEvents extends Record<string, unknown> {
  gameLoaded: { manifest: DreamGameManifest };
  gameStarted: { id: string };
  gameStopped: { id: string };
  inputReceived: { type: InputType; event: unknown };
  backendReady: GameEnginBackendState;
  error: { message: string; cause?: unknown };
}

async function fetchArrayBuffer(url: string, signal?: AbortSignal): Promise<ArrayBuffer> {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  return response.arrayBuffer();
}

export async function loadDreamGame(manifest: DreamGameManifest, signal?: AbortSignal): Promise<DreamGameInstance> {
  let wasmInstance: WebAssembly.Instance;
  try {
    const wasmBuffer = await fetchArrayBuffer(manifest.wasmUrl, signal);
    const { instance } = await WebAssembly.instantiate(wasmBuffer, {
      env: {
        memory: new WebAssembly.Memory({ initial: 16 }),
        abort: (_msg: number, _file: number, _line: number, _col: number) => {
          throw new Error(`WASM stopped at ${_line}:${_col}`);
        },
      },
    });
    wasmInstance = instance;
  } catch (error: unknown) {
    throw new Error(`Failed to load WASM for ${manifest.id}: ${String(error)}`);
  }

  const assets = new Map<string, ArrayBuffer>();
  await Promise.all(manifest.assetUrls.map(async (url) => assets.set(url, await fetchArrayBuffer(url, signal))));

  let running = false;
  const exports = wasmInstance.exports as Record<string, unknown>;
  const entry = manifest.entryPoint ?? 'start';

  return {
    manifest,
    wasmInstance,
    assets,
    start() {
      if (running) return;
      running = true;
      const start = exports[entry];
      if (typeof start === 'function') (start as () => void)();
    },
    stop() {
      running = false;
      const stop = exports.stop;
      if (typeof stop === 'function') (stop as () => void)();
    },
  };
}

export class GameEnginRuntime {
  private canvas: HTMLCanvasElement | null = null;
  private device: GPUDevice | null = null;
  private activeGame: DreamGameInstance | null = null;
  private readonly inputHandlers = new Map<InputType, Set<InputHandler>>();
  private readonly listenerTeardowns: Array<() => void> = [];
  private loadingController: AbortController | null = null;
  private gamepadPollId: number | null = null;
  readonly bus: EventBus<GameEnginEvents>;

  constructor() {
    this.bus = createEventBus<GameEnginEvents>();
  }

  async initWebGPU(canvas: HTMLCanvasElement, qualityTier: GameEnginQualityTier = 'balanced'): Promise<GameEnginBackendState> {
    this.canvas = canvas;
    const budget = resolveFrameBudget(qualityTier);
    const hasRenderEnginWebGpuPath = typeof navigator !== 'undefined' && Boolean(navigator.gpu);
    const quality = decideRuntimeQuality(budget.frameBudgetMs, hasRenderEnginWebGpuPath);

    if (!hasRenderEnginWebGpuPath) {
      const state = { backend: 'webgl2' as const, ready: false, reason: 'renderengin-webgpu-unavailable', quality };
      this.bus.emit('backendReady', state);
      return state;
    }

    let gpuDevice: GPUDevice;
    try {
      ({ device: gpuDevice } = await requestWebGpuDevice());
    } catch {
      const state = { backend: 'webgl2' as const, ready: false, reason: 'renderengin-webgpu-device-unavailable', quality };
      this.bus.emit('backendReady', state);
      return state;
    }
    this.device = gpuDevice;
    gpuDevice.lost.then((info) => {
      this.bus.emit('error', { message: `WebGPU device lost: ${info.reason}` });
      this.device = null;
    });

    const state = { backend: 'webgpu' as const, ready: true, quality };
    this.bus.emit('backendReady', state);
    return state;
  }

  async loadGame(manifest: DreamGameManifest): Promise<void> {
    this.loadingController?.abort();
    this.loadingController = new AbortController();
    const game = await loadDreamGame(manifest, this.loadingController.signal);
    this.activeGame = game;
    this.bus.emit('gameLoaded', { manifest });
  }

  startGame(): void {
    if (!this.activeGame) return;
    this.activeGame.start();
    this.bus.emit('gameStarted', { id: this.activeGame.manifest.id });
  }

  stopGame(): void {
    if (!this.activeGame) return;
    this.activeGame.stop();
    this.bus.emit('gameStopped', { id: this.activeGame.manifest.id });
    this.activeGame = null;
  }

  registerInputHandler(type: InputType, handler: InputHandler): () => void {
    if (!this.inputHandlers.has(type)) {
      this.inputHandlers.set(type, new Set());
      this.attachDomListener(type);
    }
    this.inputHandlers.get(type)!.add(handler);
    return () => this.inputHandlers.get(type)?.delete(handler);
  }

  private attachDomListener(type: InputType): void {
    if (!this.canvas) return;
    const dispatch = (event: unknown) => {
      this.inputHandlers.get(type)?.forEach((handler) => handler(event as Record<string, unknown>));
      this.bus.emit('inputReceived', { type, event });
    };
    const listener = dispatch as EventListener;

    if (type === 'touch') {
      this.canvas.addEventListener('touchstart', listener, { passive: true });
      this.canvas.addEventListener('touchmove', listener, { passive: true });
      this.canvas.addEventListener('touchend', listener, { passive: true });
      this.listenerTeardowns.push(() => {
        this.canvas?.removeEventListener('touchstart', listener);
        this.canvas?.removeEventListener('touchmove', listener);
        this.canvas?.removeEventListener('touchend', listener);
      });
      return;
    }

    if (type === 'mouse') {
      this.canvas.addEventListener('mousedown', listener);
      this.canvas.addEventListener('mousemove', listener);
      this.canvas.addEventListener('mouseup', listener);
      this.listenerTeardowns.push(() => {
        this.canvas?.removeEventListener('mousedown', listener);
        this.canvas?.removeEventListener('mousemove', listener);
        this.canvas?.removeEventListener('mouseup', listener);
      });
      return;
    }

    if (type === 'keyboard') {
      window.addEventListener('keydown', listener);
      window.addEventListener('keyup', listener);
      this.listenerTeardowns.push(() => {
        window.removeEventListener('keydown', listener);
        window.removeEventListener('keyup', listener);
      });
      return;
    }

    this.startGamepadPolling(type, dispatch);
  }

  private startGamepadPolling(type: InputType, dispatch: InputHandler): void {
    const poll = () => {
      const gamepads = navigator.getGamepads?.() ?? [];
      for (const pad of gamepads) {
        if (!pad) continue;
        const label = pad.id.toLowerCase();
        const dualsense = label.includes('dualsense') || label.includes('ps5');
        if (type === 'dualsense' && !dualsense) continue;
        if (type === 'gamepad' && dualsense) continue;
        dispatch(pad as unknown as Record<string, unknown>);
      }
      this.gamepadPollId = requestAnimationFrame(poll);
    };
    this.gamepadPollId = requestAnimationFrame(poll);
  }

  dispose(): void {
    this.loadingController?.abort();
    this.stopGame();
    for (const teardown of this.listenerTeardowns.splice(0)) teardown();
    this.inputHandlers.clear();
    if (this.gamepadPollId !== null) cancelAnimationFrame(this.gamepadPollId);
    this.device?.destroy?.();
    this.device = null;
    this.bus.destroy();
  }
}

