import type { ContentEnginRuntimeProfile } from './runtimeProfile';

export interface ContentEnginPerformancePlan {
  previewResolution: number;
  exportResolution: number;
  maxFrameTimeMs: number;
  idleWorkChunkMs: number;
  visibilityPause: true;
  touchFirstControls: true;
  reducedMotionAware: true;
  batteryAwareQuality: 'adaptive';
}

export function createContentEnginPerformancePlan(runtimeProfile: ContentEnginRuntimeProfile): ContentEnginPerformancePlan {
  const isPs5Class = runtimeProfile.maxTextureResolution >= 4096;
  return {
    previewResolution: isPs5Class ? 64 : 32,
    exportResolution: isPs5Class ? 128 : 96,
    maxFrameTimeMs: 16.67,
    idleWorkChunkMs: 6,
    visibilityPause: true,
    touchFirstControls: true,
    reducedMotionAware: true,
    batteryAwareQuality: 'adaptive',
  };
}
