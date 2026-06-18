import type { ExportProfile } from './assetTypes';
import { enabledUpgradeIds, type ContentEnginUpgradeId } from './upgradeMatrix';

export type ContentEnginRuntimeTier = 'mobile-2026' | 'desktop-2026' | 'console-2026';

export interface ContentEnginRuntimeProfile {
  tier: ContentEnginRuntimeTier;
  renderBackendPriority: readonly ['webgpu', 'webgl2', 'canvas'];
  mobileFirst: true;
  desktopClassOutput: true;
  maxTextureResolution: number;
  maxDrawCalls: number;
  meshCompression: 'meshopt-draco-ready';
  materialModel: 'pbr-mobile-plus';
  lodStrategy: 'continuous-mobile-first-desktop-quality';
  shaderFeatureLevel: 'webgpu-2026';
  intentOnlyIO: true;
  snapshotCadenceMs: number;
  syncTransport: 'abstract-intent-bus';
  enabledUpgrades: ContentEnginUpgradeId[];
  userFacingAuditMode: 'readiness-guidance-only';
}

const textureMaxByProfile: Record<ExportProfile, number> = {
  ps3: 1024,
  ps4: 2048,
  ps5: 4096,
};

const drawCallsByProfile: Record<ExportProfile, number> = {
  ps3: 24,
  ps4: 48,
  ps5: 96,
};

export function createContentEnginRuntimeProfile(profile: ExportProfile): ContentEnginRuntimeProfile {
  return {
    tier: 'mobile-2026',
    renderBackendPriority: ['webgpu', 'webgl2', 'canvas'],
    mobileFirst: true,
    desktopClassOutput: true,
    maxTextureResolution: textureMaxByProfile[profile],
    maxDrawCalls: drawCallsByProfile[profile],
    meshCompression: 'meshopt-draco-ready',
    materialModel: 'pbr-mobile-plus',
    lodStrategy: 'continuous-mobile-first-desktop-quality',
    shaderFeatureLevel: 'webgpu-2026',
    intentOnlyIO: true,
    snapshotCadenceMs: 250,
    syncTransport: 'abstract-intent-bus',
    enabledUpgrades: enabledUpgradeIds(profile),
    userFacingAuditMode: 'readiness-guidance-only',
  };
}
