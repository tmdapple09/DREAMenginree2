import type { QualityTier } from '@/engins/gameengin/core';
import { EliteGameEngine } from '@/engins/gameengin/core';
import { GameEnginRuntime } from '@/engins/gameengin/gameEnginRuntime';



export interface AssetEntry {
  id: string;
  path: string;
  priority: number;
  
  type?: 'mesh' | 'texture' | 'audio' | 'shader' | 'script';
}

export interface GraphicsConfig {
  qualityTier: QualityTier;
  maxLodLevel?: number;
  targetFps?: 60 | 120;
  postFxEnabled?: boolean;
  pbrEnabled?: boolean;
}

export interface SimulationConfig {
  fixedTimestepMs?: number;
  gravity?: [number, number, number];
  maxEntities?: number;
  replayEnabled?: boolean;
}

export interface InputConfig {
  touch?: boolean;
  keyboard?: boolean;
  gamepad?: boolean;
  dualSense?: boolean;
}

export interface AudioConfig {
  spatialAudio?: boolean;
  voiceChannels?: number;
  musicChannels?: number;
  sfxChannels?: number;
}

export interface NetworkingConfig {
  primaryTransport: 'WebSocket' | 'WebRTC' | 'WebTransport';
  fallbackTransport?: 'WebSocket' | 'WebRTC' | 'WebTransport';
  maxLatencyMs?: number;
  maxRollbackFrames?: number;
  tickRateHz?: number;
}

export interface AssetsConfig {
  preload?: AssetEntry[];
  stream?: AssetEntry[];
  memoryBudgetMib?: number;
  streamWorkers?: number;
}

export interface OfflineConfig {
  enableActionQueue?: boolean;
  enableSessionRestore?: boolean;
  maxQueuedActions?: number;
}

export interface SecurityConfig {
  threatModel?: string;
  contentModerationEnabled?: boolean;
  antiCheatEnabled?: boolean;
}

export interface TelemetryConfig {
  enabled?: boolean;
  profilerRingBufferSize?: number;
  minAcceptableFps?: number;
}

export type GameEnginLifecyclePhase =
  | 'before-validate'
  | 'after-validate'
  | 'before-runtime'
  | 'after-runtime'
  | 'running'
  | 'stopped';

export type GameEnginIntentType =
  | 'gameengin.lifecycle.snapshot'
  | 'gameengin.lifecycle.stop'
  | 'gameengin.quality.set';

export interface GameEnginIntent {
  type: GameEnginIntentType;
  actorId: string;
  runtimeId: string;
  payload?: Record<string, unknown>;
}

export interface GameEnginCompatibilityReport {
  engineVersion: string;
  configVersion: string;
  compatible: boolean;
  notes: string[];
}

export interface GameEnginManifest {
  id: string;
  type: 'gameengin.manifest';
  ownerId: string;
  runtimeId: string;
  visibility: 'local' | 'shared' | 'global';
  createdAt: string;
  updatedAt: string;
  version: number;
  data: {
    name: string;
    configVersion: string;
    graphics: GraphicsConfig;
    assetCount: number;
    intentTypes: GameEnginIntentType[];
  };
}

export interface GameEnginSnapshot {
  id: string;
  type: 'gameengin.snapshot';
  ownerId: string;
  runtimeId: string;
  visibility: 'local' | 'shared' | 'global';
  createdAt: string;
  updatedAt: string;
  version: number;
  data: {
    running: boolean;
    configId: string | null;
    qualityTier: QualityTier | null;
    lifecyclePhase: GameEnginLifecyclePhase;
  };
}


export interface GameConfig {
  id: string;
  name: string;
  version: string;
  graphics: GraphicsConfig;
  simulation?: SimulationConfig;
  input?: InputConfig;
  audio?: AudioConfig;
  networking?: NetworkingConfig;
  assets?: AssetsConfig;
  offline?: OfflineConfig;
  security?: SecurityConfig;
  telemetry?: TelemetryConfig;
}

const AUDIO_EXTS   = new Set(['.ogg', '.mp3', '.wav', '.aac', '.opus', '.flac']);
const TEXTURE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.ktx', '.ktx2', '.hdr', '.exr', '.basis']);
const SHADER_EXTS  = new Set(['.wgsl', '.glsl', '.hlsl', '.frag', '.vert']);
const MESH_EXTS    = new Set(['.glb', '.gltf', '.fbx', '.obj', '.drc']);

function inferAssetType(
  path: string,
  explicit?: AssetEntry['type'],
): 'mesh' | 'texture' | 'audio' | 'shader' | 'script' {
  if (explicit) return explicit;
  const ext = path.slice(path.lastIndexOf('.')).toLowerCase();
  if (MESH_EXTS.has(ext))    return 'mesh';
  if (TEXTURE_EXTS.has(ext)) return 'texture';
  if (AUDIO_EXTS.has(ext))   return 'audio';
  if (SHADER_EXTS.has(ext))  return 'shader';
  if (ext === '.js' || ext === '.ts' || ext === '.wasm') return 'script';
  
  return 'mesh';
}

export class GameEnginConfigError extends Error {
  constructor(message: string) {
    super(`[GameEnginCore] Config error: ${message}`);
    this.name = 'GameEnginConfigError';
  }
}

const VALID_QUALITY_TIERS: QualityTier[] = ['ultra', 'high', 'medium', 'low'];
const VALID_TRANSPORTS = ['WebSocket', 'WebRTC', 'WebTransport'] as const;
const GAMEENGIN_CORE_VERSION = '1.1.0';


export function validateConfig(config: GameConfig): void {
  if (!config.id || config.id.trim() === '') {
    throw new GameEnginConfigError('`id` must be a non-empty string.');
  }
  if (!config.name || config.name.trim() === '') {
    throw new GameEnginConfigError('`name` must be a non-empty string.');
  }
  if (!config.version || config.version.trim() === '') {
    throw new GameEnginConfigError('`version` must be a non-empty string.');
  }

  if (!VALID_QUALITY_TIERS.includes(config.graphics.qualityTier)) {
    throw new GameEnginConfigError(
      `graphics.qualityTier must be one of: ${VALID_QUALITY_TIERS.join(', ')}.`
    );
  }
  if (
    config.graphics.targetFps !== undefined &&
    config.graphics.targetFps !== 60 &&
    config.graphics.targetFps !== 120
  ) {
    throw new GameEnginConfigError('graphics.targetFps must be 60 or 120.');
  }

  const sim = config.simulation;
  if (sim?.fixedTimestepMs !== undefined && sim.fixedTimestepMs <= 0) {
    throw new GameEnginConfigError('simulation.fixedTimestepMs must be > 0.');
  }
  if (sim?.maxEntities !== undefined && sim.maxEntities < 1) {
    throw new GameEnginConfigError('simulation.maxEntities must be >= 1.');
  }

  const net = config.networking;
  if (net !== undefined) {
    if (!VALID_TRANSPORTS.includes(net.primaryTransport)) {
      throw new GameEnginConfigError(
        `networking.primaryTransport must be one of: ${VALID_TRANSPORTS.join(', ')}.`
      );
    }
    if (
      net.fallbackTransport !== undefined &&
      !VALID_TRANSPORTS.includes(net.fallbackTransport)
    ) {
      throw new GameEnginConfigError(
        `networking.fallbackTransport must be one of: ${VALID_TRANSPORTS.join(', ')}.`
      );
    }
    if (net.maxLatencyMs !== undefined && net.maxLatencyMs < 0) {
      throw new GameEnginConfigError('networking.maxLatencyMs must be >= 0.');
    }
    if (
      net.maxRollbackFrames !== undefined &&
      (net.maxRollbackFrames < 1 || net.maxRollbackFrames > 16)
    ) {
      throw new GameEnginConfigError(
        'networking.maxRollbackFrames must be between 1 and 16.'
      );
    }
    if (net.tickRateHz !== undefined && net.tickRateHz <= 0) {
      throw new GameEnginConfigError('networking.tickRateHz must be > 0.');
    }
  }

  const memBudget = config.assets?.memoryBudgetMib;
  if (memBudget !== undefined && memBudget < 16) {
    throw new GameEnginConfigError('assets.memoryBudgetMib must be >= 16 MiB.');
  }

  const minFps = config.telemetry?.minAcceptableFps;
  if (minFps !== undefined && (minFps < 1 || minFps > 120)) {
    throw new GameEnginConfigError(
      'telemetry.minAcceptableFps must be between 1 and 120.'
    );
  }
}


export class GameEnginCore {
  private eliteEngine: EliteGameEngine | null = null;
  private runtime: GameEnginRuntime | null = null;
  private config: GameConfig | null = null;
  private running = false;
  private lifecyclePhase: GameEnginLifecyclePhase = 'stopped';
  private readonly lifecycleHooks = new Map<
    GameEnginLifecyclePhase,
    Set<(snapshot: GameEnginSnapshot) => void>
  >();

  onLifecycle(
    phase: GameEnginLifecyclePhase,
    hook: (snapshot: GameEnginSnapshot) => void,
  ): () => void {
    const hooks = this.lifecycleHooks.get(phase) ?? new Set<(snapshot: GameEnginSnapshot) => void>();
    hooks.add(hook);
    this.lifecycleHooks.set(phase, hooks);
    return () => hooks.delete(hook);
  }

  private emitLifecycle(phase: GameEnginLifecyclePhase): void {
    this.lifecyclePhase = phase;
    const snapshot = this.snapshot();
    for (const hook of this.lifecycleHooks.get(phase) ?? []) {
      hook(snapshot);
    }
  }

  createManifest(config: GameConfig): GameEnginManifest {
    validateConfig(config);
    const now = new Date().toISOString();
    return {
      id: `gameengin-manifest:${config.id}`,
      type: 'gameengin.manifest',
      ownerId: 'gameengin',
      runtimeId: config.id,
      visibility: 'local',
      createdAt: now,
      updatedAt: now,
      version: 1,
      data: {
        name: config.name,
        configVersion: config.version,
        graphics: config.graphics,
        assetCount: (config.assets?.preload?.length ?? 0) + (config.assets?.stream?.length ?? 0),
        intentTypes: [
          'gameengin.lifecycle.snapshot',
          'gameengin.lifecycle.stop',
          'gameengin.quality.set',
        ],
      },
    };
  }

  negotiateCompatibility(config: GameConfig): GameEnginCompatibilityReport {
    const notes: string[] = [];
    validateConfig(config);
    if (config.graphics.qualityTier === 'ultra' && config.graphics.targetFps === 120) {
      notes.push('Ultra quality at 120 FPS requires runtime-side capability checks before launch.');
    }
    if (config.networking?.primaryTransport === 'WebTransport') {
      notes.push('WebTransport is accepted, but callers should provide WebSocket fallback for older browsers.');
    }
    return {
      engineVersion: GAMEENGIN_CORE_VERSION,
      configVersion: config.version,
      compatible: true,
      notes,
    };
  }

  snapshot(): GameEnginSnapshot {
    const now = new Date().toISOString();
    return {
      id: `gameengin-snapshot:${this.config?.id ?? 'idle'}`,
      type: 'gameengin.snapshot',
      ownerId: 'gameengin',
      runtimeId: this.config?.id ?? 'idle',
      visibility: 'local',
      createdAt: now,
      updatedAt: now,
      version: 1,
      data: {
        running: this.running,
        configId: this.config?.id ?? null,
        qualityTier: this.config?.graphics.qualityTier ?? null,
        lifecyclePhase: this.lifecyclePhase,
      },
    };
  }

  routeIntent(intent: GameEnginIntent): GameEnginSnapshot | void {
    if (!intent.actorId || intent.actorId.trim() === '') {
      throw new GameEnginConfigError('intent.actorId must be present.');
    }
    if (intent.runtimeId !== (this.config?.id ?? 'idle')) {
      throw new GameEnginConfigError('intent.runtimeId does not match the active GameEngin runtime.');
    }
    if (intent.type === 'gameengin.lifecycle.snapshot') return this.snapshot();
    if (intent.type === 'gameengin.lifecycle.stop') return this.stop();
    if (intent.type === 'gameengin.quality.set') {
      const qualityTier = intent.payload?.qualityTier;
      if (!VALID_QUALITY_TIERS.includes(qualityTier as QualityTier)) {
        throw new GameEnginConfigError('intent.payload.qualityTier is not a valid quality tier.');
      }
      this.eliteEngine?.setQuality(qualityTier as QualityTier);
      if (this.config) {
        this.config = {
          ...this.config,
          graphics: { ...this.config.graphics, qualityTier: qualityTier as QualityTier },
        };
      }
      return this.snapshot();
    }
  }

  
  async start(canvas: HTMLCanvasElement, config: GameConfig): Promise<void> {
    if (this.running) {
      console.warn('[GameEnginCore] start() called while already running — ignoring.');
      return;
    }

    
    this.emitLifecycle('before-validate');
    validateConfig(config);
    this.negotiateCompatibility(config);
    this.createManifest(config);
    this.config = config;
    this.emitLifecycle('after-validate');

    console.debug(
      `[GameEnginCore] Initialising "${config.name}" v${config.version} …`
    );

    
    this.eliteEngine = new EliteGameEngine(canvas);
    await this.eliteEngine.init();

    
    this.eliteEngine.setQuality(config.graphics.qualityTier);

    
    
    
    
    

    
    if (config.simulation) {
      const { gravity, replayEnabled } = config.simulation;
      if (gravity) {
        
        this.eliteEngine.physics.setGravity(gravity);
      }
      if (replayEnabled) {
        this.eliteEngine.replay.startRecording({
          gameId:     config.id,
          playerId:   'player-1',
          startTime:  Date.now(),
          finalScore: 0,
        });
      }
    }

    
    
    
    
    if (config.assets) {
      
      for (const entry of config.assets.preload ?? []) {
        this.eliteEngine.assets.register({
          id:       entry.id,
          url:      entry.path,
          type:     inferAssetType(entry.path, entry.type),
          priority: entry.priority,
          lod:      0,
        });
        this.eliteEngine.assets.request(entry.id);
      }
      
      for (const entry of config.assets.stream ?? []) {
        this.eliteEngine.assets.register({
          id:       entry.id,
          url:      entry.path,
          type:     inferAssetType(entry.path, entry.type),
          priority: entry.priority,
          lod:      1,
        });
        this.eliteEngine.assets.request(entry.id);
      }
    }

    
    if (config.telemetry?.enabled) {
      this.eliteEngine.onFrame((_dt, telemetry) => {
        const minFps = config.telemetry?.minAcceptableFps ?? 25;
        if (telemetry.avgFps < minFps) {
          console.warn(
            `[GameEnginCore] Frame-rate below threshold: ${telemetry.avgFps} fps ` +
            `(min: ${minFps} fps) — consider auto-rollback.`
          );
        }
      });
    }

    
    this.emitLifecycle('before-runtime');
    this.runtime = new GameEnginRuntime();
    await this.runtime.initWebGPU(canvas);

    
    const inputCfg = config.input ?? {};
    if (inputCfg.touch)    this.runtime.registerInputHandler('touch',    () => {});
    if (inputCfg.keyboard) this.runtime.registerInputHandler('keyboard', () => {});
    if (inputCfg.gamepad)  this.runtime.registerInputHandler('gamepad',  () => {});
    if (inputCfg.dualSense) this.runtime.registerInputHandler('dualsense', () => {});

    
    this.runtime.bus.on('error', ({ message }) => {
      console.error(`[GameEnginCore] Runtime error: ${message}`);
    });

    
    this.eliteEngine.start();

    this.running = true;
    this.emitLifecycle('after-runtime');
    this.emitLifecycle('running');
    console.debug(`[GameEnginCore] ✅ "${config.name}" is running.`);
  }

  
  stop(): void {
    if (!this.running) return;

    console.debug(`[GameEnginCore] Stopping "${this.config?.name ?? 'engine'}" …`);

    this.runtime?.stopGame();
    this.runtime?.dispose();
    this.runtime = null;

    this.eliteEngine?.dispose();
    this.eliteEngine = null;

    this.running  = false;
    this.config   = null;
    this.emitLifecycle('stopped');

    console.debug('[GameEnginCore] Engine stopped.');
  }

  
  get isRunning(): boolean {
    return this.running;
  }

  
  get engine(): EliteGameEngine | null {
    return this.eliteEngine;
  }

  
  get gameRuntime(): GameEnginRuntime | null {
    return this.runtime;
  }
}
