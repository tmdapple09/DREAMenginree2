

export const ENGINE_VERSION = '3.0.0';


export function engineSatisfies(minVersion: string): boolean {
  const parse = (v: string) => v.split('.').map(Number);
  const [maj, min, pat] = parse(ENGINE_VERSION);
  const [rMaj, rMin, rPat] = parse(minVersion);
  if (maj !== rMaj) return maj > rMaj;
  if (min !== rMin) return min > rMin;
  return pat >= rPat;
}

export type GravityPreset = 'moon' | 'earth' | 'mars' | 'jupiter';

export const GRAVITY_VALUES: Record<GravityPreset, number> = {
  moon: 0.1,
  earth: 9.8,
  mars: 3.7,
  jupiter: 24.8,
};


export type CartridgeCapability =
  | 'save-state'        
  | 'achievements'      
  | 'spatial-audio'     
  | 'haptics'           
  | 'multiplayer'       
  | 'asset-streaming'   
  | 'ai-director'       
  | 'shader-custom'     
  | 'replay'            
  | 'cloud-save'        
  | 'workers'           
  | 'offscreen-canvas'  
  | 'webgpu'            
  | 'webgl2';           

export type RendererBackendId = 'babylon-webgpu' | 'babylon-webgl2' | 'webgpu' | 'webgl2' | 'canvas2d' | 'dom';

export type CartridgeRendererFamily = 'babylon' | 'webgpu' | 'canvas' | 'dom';

export interface CartridgeBackendRequirements {
  
  preferred: RendererBackendId[];
  
  requiredBackends?: RendererBackendId[];
  
  requiredFeatures?: string[];
  
  optionalFeatures?: string[];
  
  fallbackReason?: string;
}

export interface CartridgeQualityDefaults {
  tier: 'low' | 'balanced' | 'high' | 'ultra';
  targetFps: 30 | 60 | 90 | 120;
  maxDevicePixelRatio: number;
  maxTextureMegabytes?: number;
}

export interface CartridgeWorkerEntry {
  id: string;
  url: string;
  type: 'module' | 'classic';
  stage: 'asset-decode' | 'simulation' | 'compute-prep' | 'netcode' | 'audio';
  transferable?: boolean;
}

export interface CartridgeWarmupPipeline {
  id: string;
  backend: RendererBackendId;
  label: string;
  kind: 'render' | 'compute' | 'material' | 'asset';
  blocking: boolean;
}

export interface CartridgeWarmupPlan {
  pipelines: CartridgeWarmupPipeline[];
  shaderRegistryId?: string;
  assetBundleIds?: string[];
  maxBlockingMs?: number;
}

export interface RuntimeBackendDiagnostics {
  selectedBackend: RendererBackendId;
  preferredBackend?: RendererBackendId;
  fallbackReason?: string;
  warmupComplete: boolean;
  warmupProgress: number;
  secureContext: boolean;
  workerSupported: boolean;
  offscreenCanvasSupported: boolean;
  deviceLabel?: string;
  limits?: Record<string, number>;
  spans: Array<{ id: string; label: string; status: 'pending' | 'running' | 'complete' | 'failed'; ms?: number; message?: string }>;
}

export interface CartridgeInputProfile {
  keyboard?: boolean;
  touch?: boolean;
  gamepad?: boolean;
  remote?: boolean;
  actions?: readonly string[];
}

export type CartridgeOrientationPreference = 'any' | 'portrait' | 'landscape';

export interface CartridgeInputEvent {
  key: string;
  type: 'keydown' | 'keyup' | 'touchstart' | 'touchend' | 'gamepad' | 'remote';
  preventDefault: () => void;
  gamepadButton?: number;
  touchX?: number;
  touchY?: number;
  
  action?: string;
  
  active?: boolean;
  
  source?: 'keyboard' | 'touch' | 'gamepad' | 'dualsense' | 'remote' | 'mobile';
  
  cartridgeId?: string;
}

export interface CartridgeSaveSlot {
  slot: number;             
  timestamp: number;        
  label: string;            
  data: Record<string, unknown>;
}

export interface CartridgeSaveAPI {
  
  list(): Promise<CartridgeSaveSlot[]>;
  
  load(slot: number): Promise<CartridgeSaveSlot | null>;
  
  write(slot: number, data: unknown, label?: string): Promise<void>;
  
  erase(slot: number): Promise<void>;
  
  autoSave(data: unknown): Promise<void>;
}

export interface AchievementDefinition {
  id: string;
  label: string;
  description: string;
  icon?: string;
  
  total?: number;
}

export interface AchievementState {
  id: string;
  unlocked: boolean;
  unlockedAt?: number;
  progress?: number;
  total?: number;
}

export interface CartridgeAchievementsAPI {
  
  unlock(id: string): Promise<void>;
  
  progress(id: string, increment: number): Promise<void>;
  
  getAll(): Promise<AchievementState[]>;
}

export interface CartridgeSoundOptions {
  volume?: number;       
  loop?: boolean;
  spatial?: boolean;     
  x?: number;            
  y?: number;
  z?: number;
}

export interface CartridgeAudioAPI {
  
  resume(): Promise<void>;
  
  play(url: string, opts?: CartridgeSoundOptions): Promise<{ stop: () => void; setVolume: (v: number) => void }>;
  
  sfx(key: string, opts?: CartridgeSoundOptions): void;
  
  registerSFX(key: string, url: string): void;
  
  setMusicVolume(v: number): void;
  
  setSFXVolume(v: number): void;
  
  fadeOut(durationMs?: number): void;
}

export interface CartridgeHapticsAPI {
  
  rumble(intensity: number, durationMs: number): void;
  
  tap(): void;
  
  impact(): void;
}

export interface CartridgeAssetsAPI {
  
  prefetch(urls: string[]): void;
  
  get(url: string): ArrayBuffer | null;
  
  resolve(relativePath: string): string;
}

export interface CartridgeSessionPlayer {
  id: string;
  displayName: string;
  isLocal: boolean;
}

export interface CartridgeNetworkAPI {
  
  joinSession(gameId: string, sessionName?: string): Promise<string>;
  
  leaveSession(): Promise<void>;
  
  broadcast(payload: Record<string, unknown>): void;
  
  onMessage(cb: (from: CartridgeSessionPlayer, payload: Record<string, unknown>) => void): () => void;
  
  getPlayers(): CartridgeSessionPlayer[];
}

export interface GameEngineAPI {
  
  readonly engineVersion: string;

  
  loop: {
    onTick: (cb: (dt: number, elapsed: number) => void) => () => void;
    onRender: (cb: (dt: number) => void) => () => void;
  };

  
  physics: {
    gravity: number;
    friction: number;
  };

  
  input: {
    on: (event: string, cb: (payload: CartridgeInputEvent) => void) => () => void;
    isKeyDown: (key: string) => boolean;
  };

  
  score: {
    submit: (gameId: string, value: number, level?: number) => Promise<void>;
  };

  
  pool: {
    acquire: <T>(factory: () => T) => T;
    release: <T>(obj: T) => void;
  };

  
  telemetry: {
    reportFrame: (dtMs: number) => void;
  };

  
  save: CartridgeSaveAPI;

  
  achievements: CartridgeAchievementsAPI;

  
  runtime: {
    getBackendDiagnostics: () => RuntimeBackendDiagnostics;
    markWarmupSpan: (id: string, status: RuntimeBackendDiagnostics['spans'][number]['status'], message?: string) => void;
  };

  
  audio: CartridgeAudioAPI;

  
  haptics: CartridgeHapticsAPI;

  
  assets: CartridgeAssetsAPI;

  
  network: CartridgeNetworkAPI;
}

export interface GameCartridge {
  
  id: string;

  
  version?: string;

  
  minEngineVersion?: string;

  
  capabilities?: CartridgeCapability[];

  
  backendRequirements?: CartridgeBackendRequirements;

  
  fallbackBackend?: RendererBackendId;

  
  bundleManifestId?: string;

  
  saveSchemaVersion?: number;

  
  inputProfile?: CartridgeInputProfile;

  
  orientationPreference?: CartridgeOrientationPreference;

  
  qualityDefaults?: CartridgeQualityDefaults;

  
  workerEntries?: CartridgeWorkerEntry[];

  
  warmupPlan?: CartridgeWarmupPlan;

  
  mount: (container: HTMLDivElement, api: GameEngineAPI) => () => void;

  
  serialize?: () => Record<string, unknown>;

  
  deserialize?: (state: unknown) => void;
}
