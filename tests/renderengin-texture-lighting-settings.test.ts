import { describe, expect, it } from 'vitest';

import {
  calculateMipLevelCount,
  createRenderEnvironment,
  createRenderLight,
  createRenderQualitySettings,
  createRenderTexture,
  createTextureMemoryReport,
  summarizeRenderLights,
  switchRenderPreviewMode,
  validateRenderTexture,
} from '@/engins/renderengin';

describe('RenderEngin texture, lighting, and render settings', () => {
  it('creates validated texture domain objects with sampler and memory metadata', () => {
    const texture = createRenderTexture({
      id: 'tex-1',
      ownerId: 'user-1',
      runtimeId: 'runtime-1',
      name: 'Albedo atlas',
      role: 'albedo',
      width: 512,
      height: 256,
      sourceAssetId: 'asset-1',
      now: '2026-06-18T00:00:00.000Z',
    });

    expect(texture.type).toBe('render.texture');
    expect(texture.visibility).toBe('local');
    expect(texture.data.mipLevelCount).toBe(calculateMipLevelCount(512, 256));
    expect(texture.data.sampler.mipmapFilter).toBe('linear');
    expect(texture.data.byteLength).toBeGreaterThan(512 * 256 * 4);

    const report = createTextureMemoryReport([texture]);
    expect(report.textureCount).toBe(1);
    expect(report.byRole).toMatchObject({ albedo: texture.data.byteLength });
  });

  it('rejects malformed texture dimensions before GPU upload', () => {
    expect(validateRenderTexture({ width: 0, height: 64, format: 'rgba8unorm' })).toMatchObject({ valid: false });
    expect(() => createRenderTexture({ id: 'bad', ownerId: 'u', runtimeId: 'r', name: 'bad', role: 'normal', width: 9000, height: 1 })).toThrow(/exceed/i);
  });

  it('models directional, point, spot, and environment lighting as domain objects', () => {
    const directional = createRenderLight({ id: 'sun', ownerId: 'user-1', runtimeId: 'runtime-1', name: 'Sun', kind: 'directional', castsShadow: true });
    const point = createRenderLight({ id: 'lamp', ownerId: 'user-1', runtimeId: 'runtime-1', name: 'Lamp', kind: 'point', intensity: 3 });
    const spot = createRenderLight({ id: 'spot', ownerId: 'user-1', runtimeId: 'runtime-1', name: 'Spot', kind: 'spot' });
    const summary = summarizeRenderLights([directional, point, spot]);
    const environment = createRenderEnvironment({ id: 'env', ownerId: 'user-1', runtimeId: 'runtime-1', name: 'Studio' });

    expect(directional.type).toBe('render.light');
    expect(directional.data.shadowMapSize).toBe(2048);
    expect(summary).toMatchObject({ count: 3, directional: 1, point: 1, spot: 1, shadowCasters: 1, totalIntensity: 5 });
    expect(environment.type).toBe('render.environment');
    expect(environment.data.toneMapping).toBe('aces');
    expect(environment.data.gammaCorrection).toBe(true);
    expect(environment.data.bloom.enabled).toBe(false);
  });

  it('creates render quality and debug preview settings', () => {
    const battery = createRenderQualitySettings('battery');
    const quality = createRenderQualitySettings('quality');
    const wireframe = switchRenderPreviewMode(quality, 'wireframe');
    const depthDebug = switchRenderPreviewMode(quality, 'depth-debug');

    expect(battery.resolutionScale).toBe(0.75);
    expect(quality.msaaSampleCount).toBe(4);
    expect(wireframe.previewMode).toBe('wireframe');
    expect(wireframe.wireframeOverlay).toBe(true);
    expect(depthDebug.previewMode).toBe('depth-debug');
  });
});
