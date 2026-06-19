import type { JsonObject } from '@/engine/engin-runtime/EnginBaseState';

export type RenderPreviewMode = 'material' | 'wireframe' | 'normal-debug' | 'depth-debug' | 'uv-debug' | 'bounds-debug';
export type RenderQualityTier = 'battery' | 'balanced' | 'quality' | 'offline';

export interface RenderQualitySettings extends JsonObject {
  tier: RenderQualityTier;
  previewMode: RenderPreviewMode;
  resolutionScale: number;
  msaaSampleCount: 1 | 2 | 4;
  shadowsEnabled: boolean;
  postProcessingEnabled: boolean;
  wireframeOverlay: boolean;
  showGrid: boolean;
  showAxisHelper: boolean;
  snappingEnabled: boolean;
  snapSize: number;
}

export function createRenderQualitySettings(tier: RenderQualityTier): RenderQualitySettings {
  if (tier === 'battery') return { tier, previewMode: 'material', resolutionScale: 0.75, msaaSampleCount: 1, shadowsEnabled: false, postProcessingEnabled: false, wireframeOverlay: false, showGrid: true, showAxisHelper: true, snappingEnabled: false, snapSize: 1 };
  if (tier === 'quality') return { tier, previewMode: 'material', resolutionScale: 1, msaaSampleCount: 4, shadowsEnabled: true, postProcessingEnabled: true, wireframeOverlay: false, showGrid: true, showAxisHelper: true, snappingEnabled: true, snapSize: 0.5 };
  if (tier === 'offline') return { tier, previewMode: 'material', resolutionScale: 2, msaaSampleCount: 4, shadowsEnabled: true, postProcessingEnabled: true, wireframeOverlay: false, showGrid: false, showAxisHelper: false, snappingEnabled: true, snapSize: 0.25 };
  return { tier, previewMode: 'material', resolutionScale: 1, msaaSampleCount: 2, shadowsEnabled: true, postProcessingEnabled: false, wireframeOverlay: false, showGrid: true, showAxisHelper: true, snappingEnabled: false, snapSize: 1 };
}

export function switchRenderPreviewMode(settings: RenderQualitySettings, previewMode: RenderPreviewMode): RenderQualitySettings {
  return { ...settings, previewMode, wireframeOverlay: previewMode === 'wireframe' || settings.wireframeOverlay };
}
