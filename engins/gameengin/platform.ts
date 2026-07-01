import type { Camera, Scene } from '@babylonjs/core';
import { AIDirector } from './ai-director';
import type { GameCartridge, GameEngineAPI } from './cartridge';
import { GRAVITY_VALUES } from './cartridge';
import { EliteGameEngine, type FrameTelemetry, type PerformanceBudget, type QualityTier } from './core';
import { PostFXManager } from './post-fx';




export interface PlatformCapabilities {
  
  webgpu: boolean;
  
  webgl2: boolean;
  
  gamepad: boolean;
  
  webhid: boolean;
  
  webBluetooth: boolean;
  
  touch: boolean;
  
  coarsePointer: boolean;
  
  pointerLock: boolean;
  
  foreground: boolean;
  
  deviceTier: 'ultra' | 'high' | 'medium' | 'low';
  
  cpuCores: number;
  
  deviceMemoryGb: number;
}


export function detectCapabilities(): PlatformCapabilities {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return {
      webgpu: false, webgl2: false, gamepad: false, webhid: false,
      webBluetooth: false, touch: false, coarsePointer: false, pointerLock: false,
      foreground: false, deviceTier: 'medium', cpuCores: 4, deviceMemoryGb: 4,
    };
  }

  const nav = navigator as Navigator & {
    gpu?: unknown; hid?: unknown; bluetooth?: unknown; deviceMemory?: number;
  };

  const cpuCores = nav.hardwareConcurrency ?? 4;
  const deviceMemoryGb = nav.deviceMemory ?? 4;
  let deviceTier: PlatformCapabilities['deviceTier'] = 'medium';
  if (cpuCores >= 8 && deviceMemoryGb >= 8) deviceTier = 'ultra';
  else if (cpuCores >= 6 && deviceMemoryGb >= 6) deviceTier = 'high';
  else if (cpuCores <= 2 || deviceMemoryGb <= 2) deviceTier = 'low';

  let webgl2 = false;
  try {
    const probe = document.createElement('canvas');
    webgl2 = !!probe.getContext('webgl2');
  } catch {
    webgl2 = false;
  }

  return {
    webgpu: !!nav.gpu,
    webgl2,
    gamepad: typeof nav.getGamepads === 'function',
    webhid: !!nav.hid,
    webBluetooth: !!nav.bluetooth,
    touch: 'ontouchstart' in window || (nav.maxTouchPoints ?? 0) > 0,
    coarsePointer: window.matchMedia?.('(pointer: coarse)').matches ?? false,
    pointerLock: 'pointerLockElement' in document,
    foreground: document.visibilityState !== 'hidden',
    deviceTier,
    cpuCores,
    deviceMemoryGb,
  };
}

const QUICK_RESUME_PREFIX = 'gameengin:quick-resume:';


export interface QuickResumeEntry<T = unknown> {
  cartridgeId: string;
  savedAt: number;
  data: T;
}

export interface PlatformBootOptions {
  
  enableAIDirector?: boolean;
  
  enablePostFX?: boolean;
  
  gravity?: keyof typeof GRAVITY_VALUES;
  
  friction?: number;
}


export class GameEnginPlatform {
  readonly engine: EliteGameEngine;
  readonly capabilities: PlatformCapabilities;

  director: AIDirector | null = null;
  postFx: PostFXManager | null = null;

  private _gravity: number;
  private _friction: number;
  private _activeCartridge: GameCartridge | null = null;
  private _activeCleanup: (() => void) | null = null;
  private _activeContainer: HTMLDivElement | null = null;
  private _tickSubs = new Set<(dt: number, elapsed: number) => void>();
  private _renderSubs = new Set<(dt: number) => void>();
  private _inputSubs = new Map<string, Set<(payload: Record<string, unknown>) => void>>();
  private _heldKeys = new Set<string>();
  private _telemetry: FrameTelemetry | null = null;
  private _disposed = false;
  private _elapsed = 0;

  private _onKey = (ev: KeyboardEvent, type: 'keydown' | 'keyup') => {
    if (type === 'keydown') this._heldKeys.add(ev.key);
    else this._heldKeys.delete(ev.key);
    const subs = this._inputSubs.get(type);
    if (!subs || subs.size === 0) return;
    const payload = { key: ev.key, type, preventDefault: () => ev.preventDefault() };
    for (const sub of subs) sub(payload);
  };
  private _onKeyDown = (ev: KeyboardEvent) => this._onKey(ev, 'keydown');
  private _onKeyUp = (ev: KeyboardEvent) => this._onKey(ev, 'keyup');

  private constructor(
    private canvas: HTMLCanvasElement,
    options: PlatformBootOptions,
  ) {
    this.engine = new EliteGameEngine(canvas);
    this.capabilities = detectCapabilities();
    this._gravity = GRAVITY_VALUES[options.gravity ?? 'earth'];
    this._friction = options.friction ?? 0.5;
  }

  
  static async boot(
    canvas: HTMLCanvasElement,
    options: PlatformBootOptions = {},
  ): Promise<GameEnginPlatform> {
    const platform = new GameEnginPlatform(canvas, options);
    await platform.engine.init();

    if (options.enableAIDirector !== false) {
      try {
        platform.director = new AIDirector();
        await platform.director.init();
      } catch {
        
        platform.director = null;
      }
    }

    if (options.enablePostFX !== false) {
      
      
      platform.postFx = null;
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', platform._onKeyDown);
      window.addEventListener('keyup', platform._onKeyUp);
    }

    platform.engine.onFrame((dt: number, telemetry) => {
      platform._telemetry = telemetry;
      platform._elapsed += dt;
      for (const cb of platform._tickSubs) cb(dt, platform._elapsed);
      for (const cb of platform._renderSubs) cb(dt);
    });

    return platform;
  }

  
  async attachPostFX(scene: Scene, camera: Camera): Promise<PostFXManager> {
    const fx = new PostFXManager(scene, camera);
    await fx.init();
    fx.applyBudget(this.currentBudget());
    this.postFx = fx;
    return fx;
  }

  
  currentBudget(): PerformanceBudget {
    return this.engine.budget;
  }

  
  qualityTier(): QualityTier {
    return this.engine.budget.tier;
  }

  
  telemetry(): FrameTelemetry | null {
    return this._telemetry;
  }

  
  setGravity(preset: keyof typeof GRAVITY_VALUES): void {
    this._gravity = GRAVITY_VALUES[preset];
  }

  
  setFriction(value01: number): void {
    this._friction = Math.max(0, Math.min(1, value01));
  }

  
  async loadCartridge(cartridge: GameCartridge, container?: HTMLDivElement): Promise<void> {
    this.unloadCartridge();
    let host = container ?? null;
    if (!host && typeof document !== 'undefined') {
      host = document.createElement('div');
      host.dataset.gameenginCartridge = cartridge.id;
      const parent = this.canvas.parentElement;
      if (parent) parent.appendChild(host);
    }
    if (!host) throw new Error('GameEnginPlatform.loadCartridge: no container');
    this._activeCartridge = cartridge;
    this._activeContainer = host;
    this._activeCleanup = cartridge.mount(host, this._buildCartridgeApi());
  }

  
  unloadCartridge(): void {
    if (this._activeCleanup) {
      try { this._activeCleanup(); } catch {  }
    }
    this._activeCleanup = null;
    if (this._activeContainer && this._activeContainer.parentElement) {
      this._activeContainer.parentElement.removeChild(this._activeContainer);
    }
    this._activeContainer = null;
    this._activeCartridge = null;
    this._tickSubs.clear();
    this._renderSubs.clear();
    this._inputSubs.clear();
    this._heldKeys.clear();
  }

  
  activeCartridgeId(): string | null {
    return this._activeCartridge?.id ?? null;
  }

  
  saveQuickResume<T>(data: T, cartridgeId?: string): void {
    if (typeof window === 'undefined') return;
    const id = cartridgeId ?? this.activeCartridgeId();
    if (!id) return;
    const entry: QuickResumeEntry<T> = { cartridgeId: id, savedAt: Date.now(), data };
    try {
      window.localStorage.setItem(QUICK_RESUME_PREFIX + id, JSON.stringify(entry));
    } catch {
      
    }
  }

  
  loadQuickResume<T = unknown>(cartridgeId: string): QuickResumeEntry<T> | null {
    if (typeof window === 'undefined') return null;
    try {
      const raw = window.localStorage.getItem(QUICK_RESUME_PREFIX + cartridgeId);
      if (!raw) return null;
      return JSON.parse(raw) as QuickResumeEntry<T>;
    } catch {
      return null;
    }
  }

  
  clearQuickResume(cartridgeId: string): void {
    if (typeof window === 'undefined') return;
    try { window.localStorage.removeItem(QUICK_RESUME_PREFIX + cartridgeId); } catch {
      
    }
  }

  dispose(): void {
    if (this._disposed) return;
    this._disposed = true;
    this.unloadCartridge();
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', this._onKeyDown);
      window.removeEventListener('keyup', this._onKeyUp);
    }
    try { this.engine.dispose?.(); } catch {  }
    this.director = null;
    this.postFx = null;
  }

  private _buildCartridgeApi(): GameEngineAPI {
    const physics = {} as GameEngineAPI['physics'];
    Object.defineProperties(physics, {
      gravity: { get: () => this._gravity },
      friction: { get: () => this._friction },
    });

    return {
      engineVersion: '1.0.0',

      save: {
        write: async (key: string, data: unknown) => { this.saveQuickResume(data); },
        read: async <T,>(key: string) => {
          const entry = this.loadQuickResume<T>(this.activeCartridgeId() || key);
          return entry ? entry.data : null;
        },
        load: async <T,>(key: string) => {
          const entry = this.loadQuickResume<T>(this.activeCartridgeId() || key);
          return entry ? entry.data : null;
        },
        list: async () => [],
        erase: async () => {},
        autoSave: async () => {},
      },

      achievements: {
        unlock: async (id: string) => { console.debug(`[Platform] Achievement unlocked: ${id}`); },
        progress: async () => {},
        getAll: async () => [],
      },

      audio: {
        play: () => {},
        stop: () => {},
      },

      haptics: {
        vibrate: () => {},
      },

      assets: {
        load: async () => ({}),
      },

      network: {
        send: () => {},
        onMessage: () => () => {},
      },

      loop: {
        onTick: (cb: (dt: number, elapsed: number) => void) => {
          this._tickSubs.add(cb);
          return () => this._tickSubs.delete(cb);
        },
        onRender: (cb: (dt: number) => void) => {
          this._renderSubs.add(cb);
          return () => this._renderSubs.delete(cb);
        },
      },

      physics,

      input: {
        on: (event: string, cb: (payload: Record<string, unknown>) => void) => {
          let bucket = this._inputSubs.get(event);
          if (!bucket) {
            bucket = new Set();
            this._inputSubs.set(event, bucket);
          }
          const wrapper = cb as unknown as (payload: Record<string, unknown>) => void;
          bucket.add(wrapper);
          return () => bucket?.delete(wrapper);
        },
        isKeyDown: (key: string) => this._heldKeys.has(key),
      },

      score: {
        submit: async (gameId: string, value: number, level?: number) => {
          if (typeof window === 'undefined') return;
          try {
            await fetch('/api/game-scores', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ gameId, value, level }),
            });
          } catch {
            
          }
        },
      },

      pool: {
        acquire: <T,>(factory: () => T) => factory(),
        release: () => {  },
      },

      telemetry: {
        reportFrame: () => {  },
      },
    } as unknown as GameEngineAPI;
  }
}
