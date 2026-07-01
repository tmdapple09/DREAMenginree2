

export type CameraState =
  | "hero"
  | "browse"
  | "detail"
  | "transition"
  | "utility";


export type Pressure = 0 | 1 | 2 | 3;


export type QualityClass =
  | "hero"
  | "primary"
  | "secondary"
  | "background"
  | "culled";


export type PassName =
  | "depth_prepass"
  | "shadow_pass"
  | "gbuffer"
  | "forward_transparency"
  | "lighting"
  | "ssao"
  | "bloom"
  | "dof"
  | "taa"
  | "tonemap"
  | "ui";

export type RuntimeMetrics = {
  frameMs: number;
  avgFrameMs: number;
  gpuMs: number;
  cpuMs: number;
  droppedFrameRatio: number;
  uploadMs: number;
};

export type CameraSignals = {
  state: CameraState;
  velocity: number;
  cutActive: boolean;
  focusTargetId?: string;
};

export type SceneObject = {
  id: string;
  visible: boolean;
  occluded: boolean;
  transparent: boolean;
  skinned: boolean;
  screenCoverage: number;    
  distance: number;
  heroWeight: number;        
  semanticWeight: number;    
  motionWeight: number;      
  interactionWeight: number; 
  materialCost: number;      
  shadowCost: number;        
  geometryCost: number;      
  textureCost: number;       
  lastFrameVisible: boolean;
};

export type ObjectDecision = {
  id: string;
  importance: number;
  qualityClass: QualityClass;
  lodLevel: 0 | 1 | 2 | 3;
  updateHz: 15 | 30 | 60;
  castShadow: boolean;
  receiveShadow: boolean;
  highQualityMaterial: boolean;
  highQualityTransparency: boolean;
  textureMipBias: 0 | 1 | 2;
  freeze: boolean;
};

export type PassConfig = {
  enabled: boolean;
  resolutionScale: number;
};

export type PassPlan = Record<PassName, PassConfig>;

export type FrameBudget = {
  
  gpuBudgetMs: number;
  
  cpuBudgetMs: number;
  
  uploadBudgetMs: number;
  
  withinBudget: boolean;
};

export type TemporalState = {
  
  taaEnabled: boolean;
  
  taaFrameCount: 2 | 4 | 8;
  
  jitterScale: number;
  
  historyInvalidated: boolean;
};

export type DirectorFrame = {
  pressure: Pressure;
  passPlan: PassPlan;
  objectDecisions: ObjectDecision[];
  frameBudget: FrameBudget;
  temporal: TemporalState;
  resolutionScale: number;
};


export function classifyPressure(metrics: RuntimeMetrics): Pressure {
  const { avgFrameMs, droppedFrameRatio, gpuMs } = metrics;

  if (avgFrameMs > 24 || droppedFrameRatio > 0.18 || gpuMs > 22) return 3;
  if (avgFrameMs > 20 || droppedFrameRatio > 0.10 || gpuMs > 18) return 2;
  if (avgFrameMs > 17 || droppedFrameRatio > 0.05 || gpuMs > 14) return 1;
  return 0;
}

const FULL_RES  = 1.0;
const HALF_RES  = 0.5;
const QUART_RES = 0.25;


export function buildPassPlan(
  pressure: Pressure,
  camera: CameraSignals,
): PassPlan {
  const cam = camera.state;
  const isHero       = cam === "hero";
  const isDetail     = cam === "detail";
  const isTransition = cam === "transition";
  const isUtility    = cam === "utility";

  const p0 = pressure === 0;
  const p1 = pressure <= 1;
  const p2 = pressure <= 2;

  return {
    depth_prepass: {
      enabled: true,
      resolutionScale: FULL_RES,
    },
    shadow_pass: {
      enabled: !isUtility && p2,
      resolutionScale: isHero && p0 ? FULL_RES : HALF_RES,
    },
    gbuffer: {
      enabled: true,
      resolutionScale: isUtility ? HALF_RES : FULL_RES,
    },
    forward_transparency: {
      enabled: !isUtility,
      resolutionScale: isHero && p1 ? FULL_RES : HALF_RES,
    },
    lighting: {
      enabled: true,
      resolutionScale: FULL_RES,
    },
    ssao: {
      
      
      enabled: (isHero || isDetail) && p1 && !isTransition && !isUtility,
      resolutionScale: HALF_RES,
    },
    bloom: {
      enabled: p2 && !isUtility,
      resolutionScale: isHero && p0 ? HALF_RES : QUART_RES,
    },
    dof: {
      enabled: isHero && p0 && !isTransition,
      resolutionScale: HALF_RES,
    },
    taa: {
      enabled: p1 && !camera.cutActive,
      resolutionScale: FULL_RES,
    },
    tonemap: {
      enabled: true,
      resolutionScale: FULL_RES,
    },
    ui: {
      enabled: true,
      resolutionScale: FULL_RES,
    },
  };
}


export function scoreObject(obj: SceneObject, camera: CameraSignals): number {
  if (!obj.visible || obj.occluded) return 0;

  let score = 0;

  
  score += obj.screenCoverage * 30;

  
  
  const distNorm = 1 - Math.min(obj.distance / 20, 1);
  score += distNorm * distNorm * 20;

  
  score += obj.heroWeight        * 20;
  score += obj.semanticWeight    * 12;
  score += obj.motionWeight      * 8;
  score += obj.interactionWeight * 6;

  
  if (camera.focusTargetId === obj.id)                    score += 18;
  if (camera.state === "hero"   && obj.heroWeight    > 0.7) score += 10;
  if (camera.state === "detail" && obj.semanticWeight > 0.5) score += 6;

  
  
  
  const totalCost =
    obj.materialCost + obj.shadowCost + obj.geometryCost + obj.textureCost;
  const basePre = score;
  score -= totalCost * 4;
  
  score = Math.max(score, basePre * 0.7);

  
  if (obj.lastFrameVisible) score += 4;

  return Math.max(0, Math.min(100, score));
}

export function classifyObject(importance: number, pressure: Pressure): QualityClass {
  if (importance === 0)                           return "culled";
  if (importance >= 72)                           return "hero";
  if (importance >= 48 && pressure <= 2)          return "primary";
  if (importance >= 28 && pressure <= 3)          return "secondary";
  if (importance >= 8)                            return "background";
  return "culled";
}

function snapUpdateHz(
  importance:   number,
  pressure:     Pressure,
  motionWeight: number,
): 15 | 30 | 60 {
  
  
  const minHz: 15 | 30 = motionWeight >= 0.5 ? 30 : 15;

  if (pressure === 3)  return importance >= 72 ? 30 : minHz;
  if (pressure === 2)  return importance >= 60 ? 60 : importance >= 30 ? 30 : minHz;
  if (pressure === 1)  return importance >= 40 ? 60 : 30;
  return 60;
}

function snapLod(importance: number, pressure: Pressure): 0 | 1 | 2 | 3 {
  if (pressure === 3)  return importance >= 72 ? 1 : importance >= 40 ? 2 : 3;
  if (pressure === 2)  return importance >= 72 ? 0 : importance >= 50 ? 1 : 2;
  if (pressure === 1)  return importance >= 60 ? 0 : 1;
  return 0;
}

function snapMipBias(importance: number, pressure: Pressure): 0 | 1 | 2 {
  if (pressure >= 3 && importance < 60) return 2;
  if (pressure >= 2 && importance < 40) return 1;
  return 0;
}


export function decideObject(
  obj: SceneObject,
  camera: CameraSignals,
  pressure: Pressure,
): ObjectDecision {
  const importance  = scoreObject(obj, camera);
  const qualityClass = classifyObject(importance, pressure);
  const culled      = qualityClass === "culled";

  const freeze =
    culled ||
    (!obj.visible && !obj.lastFrameVisible && obj.motionWeight < 0.05);

  return {
    id:                    obj.id,
    importance,
    qualityClass,
    lodLevel:              snapLod(importance, pressure),
    updateHz:              freeze ? 15 : snapUpdateHz(importance, pressure, obj.motionWeight),
    castShadow:            !culled && importance >= 50 && obj.shadowCost < 0.8,
    receiveShadow:         !culled && importance >= 30,
    highQualityMaterial:   importance >= 60 && pressure <= 1,
    highQualityTransparency: obj.transparent && importance >= 60 && pressure <= 1,
    textureMipBias:        snapMipBias(importance, pressure),
    freeze,
  };
}


export function resolveFrameBudget(
  metrics: RuntimeMetrics,
  pressure: Pressure,
): FrameBudget {
  
  const targetMs    = pressure === 3 ? 20 : pressure === 2 ? 18 : 16.6;
  const gpuBudgetMs    = targetMs * 0.60;
  const cpuBudgetMs    = targetMs * 0.25;
  const uploadBudgetMs = targetMs * 0.15;
  const withinBudget   =
    metrics.gpuMs    <= gpuBudgetMs    &&
    metrics.cpuMs    <= cpuBudgetMs    &&
    metrics.uploadMs <= uploadBudgetMs;

  return { gpuBudgetMs, cpuBudgetMs, uploadBudgetMs, withinBudget };
}


export function resolveTemporalState(
  camera: CameraSignals,
  pressure: Pressure,
): TemporalState {
  const taaEnabled = pressure <= 2 && !camera.cutActive;

  let taaFrameCount: 2 | 4 | 8 = 8;
  if (pressure >= 2)             taaFrameCount = 2;
  else if (camera.velocity > 0.4) taaFrameCount = 2;
  else if (camera.velocity > 0.1) taaFrameCount = 4;

  const jitterScale       = taaEnabled ? (camera.velocity > 0.3 ? 0.4 : 1.0) : 0;
  const historyInvalidated = camera.cutActive;

  return { taaEnabled, taaFrameCount, jitterScale, historyInvalidated };
}


export function resolveResolutionScale(
  pressure:  Pressure,
  camera:    CameraSignals,
  metrics?:  RuntimeMetrics,
): number {
  if (camera.state === "utility") return 0.75;

  const base =
    pressure === 3 ? 0.75 :
    pressure === 2 ? 0.85 :
    pressure === 1 ? 0.93 :
    1.0;

  
  let scale = camera.state === "transition"
    ? Math.max(0.67, base - 0.05)
    : base;

  
  
  if (metrics) {
    const targetMs = pressure === 3 ? 20 : pressure === 2 ? 18 : 16.6;
    const gpuBudget = targetMs * 0.60;
    if (metrics.gpuMs > gpuBudget * 0.90) {
      scale = Math.max(0.67, scale - 0.05);
    }
  }

  return scale;
}


export class WebGPUDirector {
  private _lastPressure: Pressure = 0;
  
  private _lastPressureDowngradeMs: number = -Infinity;
  
  private readonly HYSTERESIS_MS = 200;

  update(input: {
    metrics: RuntimeMetrics;
    camera:  CameraSignals;
    objects: SceneObject[];
  }): DirectorFrame {
    const { metrics, camera, objects } = input;

    
    
    
    const rawPressure = classifyPressure(metrics);
    const nowMs = typeof performance !== 'undefined' ? performance.now() : Date.now();
    let pressure: Pressure;

    if (rawPressure > this._lastPressure) {
      
      
      pressure                       = rawPressure;
      this._lastPressureDowngradeMs  = nowMs;
    } else if (rawPressure < this._lastPressure) {
      
      
      
      
      if (nowMs - this._lastPressureDowngradeMs >= this.HYSTERESIS_MS) {
        pressure = rawPressure;
      } else {
        pressure = this._lastPressure;
      }
    } else {
      pressure = rawPressure;
    }
    this._lastPressure = pressure;

    const passPlan        = buildPassPlan(pressure, camera);
    const objectDecisions = objects.map((o) => decideObject(o, camera, pressure));
    const frameBudget     = resolveFrameBudget(metrics, pressure);
    const temporal        = resolveTemporalState(camera, pressure);
    const resolutionScale = resolveResolutionScale(pressure, camera, metrics);

    return {
      pressure,
      passPlan,
      objectDecisions,
      frameBudget,
      temporal,
      resolutionScale,
    };
  }
}

export type DirectorBabylonEngine = {
  setHardwareScalingLevel: (level: number) => void;
};

export type DirectorBabylonMesh = {
  id: string;
  isWorldMatrixFrozen: boolean;
  isVisible: boolean;
  alwaysSelectAsActiveMesh?: boolean;
  receiveShadows?: boolean;
  freezeWorldMatrix:   () => void;
  unfreezeWorldMatrix: () => void;
};

export type DirectorBabylonScene = {
  meshes: DirectorBabylonMesh[];
  imageProcessingConfiguration?: {
    contrast?:            number;
    exposure?:            number;
    toneMappingEnabled?:  boolean;
    vignetteEnabled?:     boolean;
  };
};


export function applyDirectorFrame(
  engine: DirectorBabylonEngine,
  scene:  DirectorBabylonScene,
  frame:  DirectorFrame,
  devicePixelRatio = 1,
): void {
  
  
  
  
  const hwScale = Math.min(1.0, devicePixelRatio / frame.resolutionScale);
  engine.setHardwareScalingLevel(hwScale);

  
  const decisionMap = new Map(frame.objectDecisions.map((d) => [d.id, d]));
  for (const mesh of scene.meshes) {
    const d = decisionMap.get(mesh.id);
    if (!d) continue;

    if (d.freeze) {
      if (!mesh.isWorldMatrixFrozen) mesh.freezeWorldMatrix();
    } else {
      if (mesh.isWorldMatrixFrozen) mesh.unfreezeWorldMatrix();
      if (d.qualityClass === "hero") mesh.alwaysSelectAsActiveMesh = true;
      if (d.receiveShadow)           mesh.receiveShadows            = true;
    }
  }

  
  if (scene.imageProcessingConfiguration) {
    const ipc = scene.imageProcessingConfiguration;
    ipc.contrast           = 1.1;
    ipc.exposure           = 1.0;
    ipc.toneMappingEnabled = frame.passPlan.tonemap.enabled;
    ipc.vignetteEnabled    = false;
  }
}

export const webGPUDirector = new WebGPUDirector();


export function defaultDirectorMetrics(): RuntimeMetrics {
  return {
    frameMs:           16.6,
    avgFrameMs:        16.6,
    gpuMs:             8.0,
    cpuMs:             4.0,
    droppedFrameRatio: 0,
    uploadMs:          1.0,
  };
}


export function defaultCameraSignals(state: CameraState = "browse"): CameraSignals {
  return { state, velocity: 0, cutActive: false };
}


export type MeshHints = {
  
  screenCoverage?:    number;
  
  distance?:          number;
  
  heroWeight?:        number;
  
  semanticWeight?:    number;
  
  motionWeight?:      number;
  
  interactionWeight?: number;
  
  materialCost?:      number;
  
  shadowCost?:        number;
  
  geometryCost?:      number;
  
  textureCost?:       number;
};


export function babylonMeshToSceneObject(
  mesh:         DirectorBabylonMesh,
  hints:        MeshHints = {},
  lastVisible?: boolean,
): SceneObject {
  return {
    id:               mesh.id,
    visible:          mesh.isVisible,
    occluded:         false,
    transparent:      false,
    skinned:          false,
    screenCoverage:   hints.screenCoverage    ?? 0.05,
    distance:         hints.distance          ?? 10,
    heroWeight:       hints.heroWeight        ?? 0,
    semanticWeight:   hints.semanticWeight    ?? 0.3,
    motionWeight:     hints.motionWeight      ?? 0,
    interactionWeight: hints.interactionWeight ?? 0,
    materialCost:     hints.materialCost      ?? 0.3,
    shadowCost:       hints.shadowCost        ?? 0.2,
    geometryCost:     hints.geometryCost      ?? 0.2,
    textureCost:      hints.textureCost       ?? 0.2,
    lastFrameVisible: lastVisible             ?? mesh.isVisible,
  };
}


export function buildSceneObjects(
  meshes:        DirectorBabylonMesh[],
  hintsResolver: (mesh: DirectorBabylonMesh) => MeshHints = () => ({}),
  lastVisibleSet?: Set<string>,
): SceneObject[] {
  return meshes.map((m) =>
    babylonMeshToSceneObject(
      m,
      hintsResolver(m),
      lastVisibleSet ? lastVisibleSet.has(m.id) : m.isVisible,
    )
  );
}
