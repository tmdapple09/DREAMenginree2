import type { AbstractEngine, Scene } from '@babylonjs/core';
import {
    AdvancedPhysicsWorld,
    AnimationStateMachine,
    AssetStreamManager,
    BehaviorTreeEngine,
    ClientSidePrediction,
    ComputeShaderPipeline,
    GlobalIllumProbes,
    GPUProfiler,
    LODSystem,
    OctreeBVH,
    PhysicsMaterialSystem,
    ProceduralWorldGen,
    ReplayBuffer,
    ResourcePool,
    RollbackNetcode,
    SpatialAudioDSP,
    TerrainEngine,
    TypedEventBus,
    WGSLShaderManager,
    WorkerJobSystem,
} from './power-systems';



export type EntityId = number;

export interface Component {
  readonly type: string;
}

export interface System {
  readonly name: string;
  
  update(world: ECSWorld, dt: number): void;
}

export class ECSWorld {
  private _nextId = 1;
  private _entities = new Set<EntityId>();
  private _components = new Map<EntityId, Map<string, Component>>();
  private _systems: System[] = [];

  createEntity(): EntityId {
    const id = this._nextId++;
    this._entities.add(id);
    this._components.set(id, new Map());
    return id;
  }

  destroyEntity(id: EntityId) {
    this._entities.delete(id);
    this._components.delete(id);
  }

  addComponent<C extends Component>(entity: EntityId, component: C): void {
    this._components.get(entity)?.set(component.type, component);
  }

  getComponent<C extends Component>(entity: EntityId, type: string): C | undefined {
    return this._components.get(entity)?.get(type) as C | undefined;
  }

  removeComponent(entity: EntityId, type: string): void {
    this._components.get(entity)?.delete(type);
  }

  hasComponent(entity: EntityId, type: string): boolean {
    return this._components.get(entity)?.has(type) ?? false;
  }

  
  query(...types: string[]): EntityId[] {
    const result: EntityId[] = [];
    for (const id of this._entities) {
      if (types.every((t) => this.hasComponent(id, t))) result.push(id);
    }
    return result;
  }

  addSystem(system: System): void {
    this._systems.push(system);
  }

  tick(dt: number): void {
    for (const sys of this._systems) {
      sys.update(this, dt);
    }
  }

  clear(): void {
    this._entities.clear();
    this._components.clear();
    this._systems = [];
    this._nextId = 1;
  }
}

export type QualityTier = 'ultra' | 'high' | 'medium' | 'low';

export interface PerformanceBudget {
  tier: QualityTier;
  targetFps: number;
  resolutionScale: number;
  shadowsEnabled: boolean;
  postFxEnabled: boolean;
  maxParticles: number;
  lodBias: number;
  
  shadowMapSize?: number;
  
  msaaSamples?: number;
  
  ssaoEnabled?: boolean;
  
  ssaoRadius?: number;
  
  dofEnabled?: boolean;
  
  ssrEnabled?: boolean;
  
  sharpenEnabled?: boolean;
  
  environmentIntensity?: number;
  
  pbrEnabled?: boolean;
}

const QUALITY_PRESETS: Record<QualityTier, PerformanceBudget> = {
  ultra: {
    tier: 'ultra',
    targetFps: 60,
    resolutionScale: 1.0,
    shadowsEnabled: true,
    postFxEnabled: true,
    maxParticles: 5000,
    lodBias: 1.0,
    shadowMapSize: 4096,
    msaaSamples: 4,
    ssaoEnabled: true,
    ssaoRadius: 2.0,
    dofEnabled: true,
    ssrEnabled: true,
    sharpenEnabled: true,
    environmentIntensity: 1.2,
    pbrEnabled: true,
  },
  high: {
    tier: 'high',
    targetFps: 60,
    resolutionScale: 1.0,
    shadowsEnabled: true,
    postFxEnabled: true,
    maxParticles: 2000,
    lodBias: 0.85,
    shadowMapSize: 2048,
    msaaSamples: 4,
    ssaoEnabled: true,
    ssaoRadius: 1.5,
    dofEnabled: false,
    ssrEnabled: false,
    sharpenEnabled: true,
    environmentIntensity: 1.0,
    pbrEnabled: true,
  },
  medium: {
    tier: 'medium',
    targetFps: 60,
    resolutionScale: 0.85,
    shadowsEnabled: false,
    postFxEnabled: true,
    maxParticles: 800,
    lodBias: 0.7,
    shadowMapSize: 1024,
    msaaSamples: 2,
    ssaoEnabled: false,
    dofEnabled: false,
    ssrEnabled: false,
    sharpenEnabled: false,
    environmentIntensity: 0.6,
    pbrEnabled: false,
  },
  low: {
    tier: 'low',
    targetFps: 30,
    resolutionScale: 0.7,
    shadowsEnabled: false,
    postFxEnabled: false,
    maxParticles: 200,
    lodBias: 0.5,
    shadowMapSize: 512,
    msaaSamples: 1,
    ssaoEnabled: false,
    dofEnabled: false,
    ssrEnabled: false,
    sharpenEnabled: false,
    environmentIntensity: 0.3,
    pbrEnabled: false,
  },
};

export interface FrameTelemetry {
  fps: number;
  avgFps: number;
  frameMs: number;
  avgFrameMs: number;
  droppedFrames: number;
  isWebGPU: boolean;
  qualityTier: QualityTier;
  entityCount: number;
  particleCount: number;
}

export type FrameCallback = (dt: number, telemetry: FrameTelemetry) => void;
export type QualityChangeCallback = (budget: PerformanceBudget) => void;

export class EliteGameEngine {
  readonly world = new ECSWorld();

  
  readonly netcode = new RollbackNetcode({ maxRollbackFrames: 8, tickRateHz: 60 });
  
  readonly gpuCompute = new ComputeShaderPipeline();
  
  readonly physics = new AdvancedPhysicsWorld();
  
  readonly spatialIndex = new OctreeBVH({ min: [-2048, -512, -2048], max: [2048, 512, 2048] });
  
  readonly jobs = new WorkerJobSystem(4);
  
  readonly worldGen = new ProceduralWorldGen({ seed: 0xDEADB33F, width: 64, depth: 64 });
  
  readonly audioDSP = new SpatialAudioDSP();
  
  readonly replay = new ReplayBuffer();
  
  readonly behaviorTrees = new BehaviorTreeEngine();
  
  readonly profiler = new GPUProfiler(120);
  
  readonly events = new TypedEventBus(512);
  
  readonly animSM = new AnimationStateMachine();
  
  readonly lod = new LODSystem();
  
  readonly prediction = new ClientSidePrediction(64);
  
  readonly pools: Map<string, ResourcePool<object>> = new Map();
  
  readonly shaders = new WGSLShaderManager();
  
  readonly terrain = new TerrainEngine(9, 6);
  
  readonly giProbes = new GlobalIllumProbes();
  
  readonly assets = new AssetStreamManager(4, 256);
  
  readonly materials = new PhysicsMaterialSystem();

  private canvas: HTMLCanvasElement;
  private engine: AbstractEngine | null = null;
  private scene: Scene | null = null;
  private isWebGPU = false;
  private disposed = false;
  private frameCallbacks: FrameCallback[] = [];
  private qualityCallbacks: QualityChangeCallback[] = [];
  private currentBudget: PerformanceBudget = { ...QUALITY_PRESETS.high };

  
  private frameCount = 0;
  private droppedFrames = 0;
  private lastFrameTime = 0;
  private fpsHistory: number[] = [];
  private frameMsHistory: number[] = [];
  private qualityCheckTick = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  
  async init(): Promise<void> {
    const { createBabylonEngine } = await import('@/engine/rendering/babylon/createEngine');
    const result = await createBabylonEngine(this.canvas, {
      antialias: true,
      preserveDrawingBuffer: true,
    });
    this.engine = result.engine;
    this.isWebGPU = result.isWebGPU;

    const { Scene } = await import('@babylonjs/core');
    this.scene = new Scene(this.engine);

    
    this.engine.setHardwareScalingLevel(1 / this.currentBudget.resolutionScale);

    this.setupRenderLoop();
  }

  get babylonEngine(): AbstractEngine | null { return this.engine; }
  get babylonScene(): Scene | null { return this.scene; }
  get babylonCanvas(): HTMLCanvasElement { return this.canvas; }
  get isUsingWebGPU(): boolean { return this.isWebGPU; }
  get budget(): PerformanceBudget { return this.currentBudget; }

  onFrame(cb: FrameCallback): () => void {
    this.frameCallbacks.push(cb);
    return () => { this.frameCallbacks = this.frameCallbacks.filter((f) => f !== cb); };
  }

  onQualityChange(cb: QualityChangeCallback): () => void {
    this.qualityCallbacks.push(cb);
    return () => { this.qualityCallbacks = this.qualityCallbacks.filter((f) => f !== cb); };
  }

  
  setQuality(tier: QualityTier): void {
    this.applyQuality(QUALITY_PRESETS[tier]);
  }

  private applyQuality(budget: PerformanceBudget): void {
    const prev = this.currentBudget.tier;
    this.currentBudget = { ...budget };
    if (this.engine) {
      this.engine.setHardwareScalingLevel(1 / budget.resolutionScale);
    }
    if (prev !== budget.tier) {
      for (const cb of this.qualityCallbacks) cb(this.currentBudget);
    }
  }

  private setupRenderLoop(): void {
    if (!this.engine || !this.scene) return;

    this.scene.onBeforeRenderObservable.add(() => {
      if (this.disposed) return;

      const now = performance.now();
      const dt = this.lastFrameTime > 0 ? now - this.lastFrameTime : 16.67;
      this.lastFrameTime = now;

      
      const fps = dt > 0 ? 1000 / dt : 60;
      this.fpsHistory.push(fps);
      if (this.fpsHistory.length > 90) this.fpsHistory.shift();
      this.frameMsHistory.push(dt);
      if (this.frameMsHistory.length > 90) this.frameMsHistory.shift();

      if (fps < (this.currentBudget.targetFps * 0.75)) {
        this.droppedFrames++;
      }

      
      this.qualityCheckTick++;
      if (this.qualityCheckTick >= 120) {
        this.qualityCheckTick = 0;
        this.adaptQuality();
      }

      
      this.world.tick(dt);

      
      const telemetry = this.buildTelemetry(fps, dt);
      for (const cb of this.frameCallbacks) cb(dt, telemetry);

      this.frameCount++;
    });

    this.engine.runRenderLoop(() => {
      if (!this.disposed && this.scene) {
        this.scene.render();
      }
    });
  }

  private adaptQuality(): void {
    const avg = this.avgFps();
    const tier = this.currentBudget.tier;

    if (avg < 25 && tier !== 'low') {
      const downgrade: Record<string, QualityTier> = {
        ultra: 'high', high: 'medium', medium: 'low',
      };
      this.applyQuality(QUALITY_PRESETS[downgrade[tier] ?? 'low']);
    } else if (avg >= 58 && tier !== 'ultra') {
      const upgrade: Record<string, QualityTier> = {
        low: 'medium', medium: 'high', high: 'ultra',
      };
      this.applyQuality(QUALITY_PRESETS[upgrade[tier] ?? 'ultra']);
    }
  }

  private avgFps(): number {
    if (this.fpsHistory.length === 0) return 60;
    return this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;
  }

  private avgFrameMs(): number {
    if (this.frameMsHistory.length === 0) return 16.67;
    return this.frameMsHistory.reduce((a, b) => a + b, 0) / this.frameMsHistory.length;
  }

  private buildTelemetry(fps: number, frameMs: number): FrameTelemetry {
    return {
      fps: Math.round(fps),
      avgFps: Math.round(this.avgFps()),
      frameMs: Math.round(frameMs * 10) / 10,
      avgFrameMs: Math.round(this.avgFrameMs() * 10) / 10,
      droppedFrames: this.droppedFrames,
      isWebGPU: this.isWebGPU,
      qualityTier: this.currentBudget.tier,
      entityCount: this.world.query('transform').length,
      particleCount: 0,
    };
  }

  start(): void {
    
    
    
    this.gpuCompute.init().catch(() => {  });
    this.terrain.attachGenerator(this.worldGen);
  }

  
  get powerSystemStats() {
    return {
      netcode:    this.netcode.stats,
      gpuCompute: this.gpuCompute.stats,
      physics:    this.physics.stats,
      jobs:       this.jobs.stats,
      profiler:   this.profiler.stats,
      events:     this.events.stats,
      lod:        this.lod.stats,
      prediction: this.prediction.stats,
      shaders:    this.shaders.stats,
      terrain:    this.terrain.stats,
      giProbes:   this.giProbes.stats,
      assets:     this.assets.stats,
      materials:  this.materials.stats,
      audioDSP:   this.audioDSP.stats,
      animSM:     this.animSM.stats,
      replay:     { frameCount: this.replay.frameCount, isRecording: this.replay.isRecording },
      behaviorTrees: { trees: this.behaviorTrees.registeredTrees.length },
    };
  }

  dispose(): void {
    this.disposed = true;
    this.frameCallbacks = [];
    this.qualityCallbacks = [];
    this.world.clear();
    
    this.gpuCompute.dispose();
    this.physics.dispose();
    this.audioDSP.dispose();
    this.events.dispose();
    this.shaders.dispose();
    this.terrain.dispose();
    this.scene?.dispose();
    this.engine?.dispose();
    this.engine = null;
    this.scene = null;
  }
}
