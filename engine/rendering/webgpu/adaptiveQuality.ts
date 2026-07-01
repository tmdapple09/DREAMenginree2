import { classifyPressure, type Pressure, type RuntimeMetrics } from './director';




export type QualityTier = 'ultra' | 'high' | 'medium' | 'low';

export interface QualityProfile {
  tier: QualityTier;
  
  resolutionScale: number;
  
  polygonBudget: number;
  
  textureBudget: number;
  
  physicsHz: number;
  
  shadowMapSize: 512 | 1024 | 2048 | 4096;
  
  postProcessing: boolean;
  
  particles: boolean;
  
  particleBudget: number;
}

const PROFILES: Record<QualityTier, QualityProfile> = {
  ultra: {
    tier: 'ultra',
    resolutionScale: 1.0,
    polygonBudget: 1.0,
    textureBudget: 1.0,
    physicsHz: 60,
    shadowMapSize: 4096,
    postProcessing: true,
    particles: true,
    particleBudget: 1.0,
  },
  high: {
    tier: 'high',
    resolutionScale: 1.0,
    polygonBudget: 0.75,
    textureBudget: 0.75,
    physicsHz: 60,
    shadowMapSize: 2048,
    postProcessing: true,
    particles: true,
    particleBudget: 0.75,
  },
  medium: {
    tier: 'medium',
    resolutionScale: 0.75,
    polygonBudget: 0.5,
    textureBudget: 0.5,
    physicsHz: 30,
    shadowMapSize: 1024,
    postProcessing: true,
    particles: true,
    particleBudget: 0.5,
  },
  low: {
    tier: 'low',
    resolutionScale: 0.5,
    polygonBudget: 0.25,
    textureBudget: 0.25,
    physicsHz: 20,
    shadowMapSize: 512,
    postProcessing: false,
    particles: false,
    particleBudget: 0.0,
  },
};

export function getQualityProfile(tier: QualityTier): QualityProfile {
  return { ...PROFILES[tier] };
}

export interface BatteryState {
  
  level: number;
  
  charging: boolean;
}


export async function getBatteryState(): Promise<BatteryState | null> {
  if (typeof navigator === 'undefined') return null;

  try {
    
    const nav = navigator as Navigator & {
      getBattery?: () => Promise<{
        level: number;
        charging: boolean;
      }>;
    };

    if (!nav.getBattery) return null;

    const battery = await nav.getBattery();
    return {
      level: battery.level,
      charging: battery.charging,
    };
  } catch {
    return null;
  }
}


export function getDeviceMemoryGB(): number | null {
  if (typeof navigator === 'undefined') return null;
  const nav = navigator as Navigator & { deviceMemory?: number };
  return nav.deviceMemory ?? null;
}


export function getCoreCount(): number {
  if (typeof navigator === 'undefined') return 4;
  return navigator.hardwareConcurrency ?? 4;
}

export interface DeviceSignals {
  
  battery: BatteryState | null;
  
  memoryGB: number | null;
  
  cores: number;
  
  pressure: Pressure;
}


export function resolveQualityTier(signals: DeviceSignals): QualityTier {
  const { battery, memoryGB, pressure } = signals;

  
  if (battery && !battery.charging) {
    if (battery.level < 0.15) return 'low';
    if (battery.level < 0.30) return 'medium';
  }

  
  if (pressure === 3) return 'low';
  if (pressure === 2) return 'medium';
  if (pressure === 1) return 'high';

  
  if (memoryGB !== null && memoryGB <= 2) return 'medium';

  return 'ultra';
}


export class AdaptiveQualityController {
  private currentTier: QualityTier = 'ultra';
  private candidateTier: QualityTier | null = null;
  private candidateFrames = 0;
  private readonly upgradeFrames: number;

  constructor(opts?: { upgradeFrames?: number }) {
    this.upgradeFrames = opts?.upgradeFrames ?? 90; 
  }

  private static tierOrder: QualityTier[] = ['low', 'medium', 'high', 'ultra'];

  private static tierIndex(tier: QualityTier): number {
    return AdaptiveQualityController.tierOrder.indexOf(tier);
  }

  
  update(signals: DeviceSignals): QualityProfile {
    const desired = resolveQualityTier(signals);
    const desiredIdx = AdaptiveQualityController.tierIndex(desired);
    const currentIdx = AdaptiveQualityController.tierIndex(this.currentTier);

    if (desiredIdx < currentIdx) {
      
      this.currentTier = desired;
      this.candidateTier = null;
      this.candidateFrames = 0;
    } else if (desiredIdx > currentIdx) {
      
      if (this.candidateTier === desired) {
        this.candidateFrames++;
        if (this.candidateFrames >= this.upgradeFrames) {
          this.currentTier = desired;
          this.candidateTier = null;
          this.candidateFrames = 0;
        }
      } else {
        this.candidateTier = desired;
        this.candidateFrames = 1;
      }
    } else {
      
      this.candidateTier = null;
      this.candidateFrames = 0;
    }

    return getQualityProfile(this.currentTier);
  }

  getTier(): QualityTier { return this.currentTier; }
  getProfile(): QualityProfile { return getQualityProfile(this.currentTier); }
}


export async function gatherDeviceSignals(
  metrics: RuntimeMetrics,
): Promise<DeviceSignals> {
  const [battery] = await Promise.all([getBatteryState()]);
  return {
    battery,
    memoryGB: getDeviceMemoryGB(),
    cores: getCoreCount(),
    pressure: classifyPressure(metrics),
  };
}
