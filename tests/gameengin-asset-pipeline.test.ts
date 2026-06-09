import { describe, expect, it } from 'vitest';
import { assertValidBundleManifest, bundleWeightBytes, type GameEnginBundleManifest } from '@/lib/gameengin/assets/BundleManifest';
import { planBundleCache } from '@/lib/gameengin/assets/BundleCache';
import { GameEnginShaderRegistry } from '@/lib/gameengin/render/ShaderRegistry';

const manifest: GameEnginBundleManifest = {
  id: 'wildfall-opening',
  version: '1.0.0',
  cartridgeId: 'mad-maxi',
  backendPreference: ['babylon-webgpu', 'babylon-webgl2'],
  fallbackBackend: 'babylon-webgl2',
  prefetch: ['scene'],
  required: ['bootstrap'],
  assets: [
    { id: 'bootstrap', kind: 'json', url: '/games/mad-maxi/bootstrap.json', bytes: 1024 },
    { id: 'scene', kind: 'gltf', url: '/games/mad-maxi/scene.glb', bytes: 4096, priority: 10 },
  ],
};

describe('GameEngin asset pipeline contracts', () => {
  it('validates versioned bundle manifests', () => {
    expect(() => assertValidBundleManifest(manifest)).not.toThrow();
    expect(bundleWeightBytes(manifest)).toBe(5120);
  });

  it('plans cache namespaces and prefetch order', () => {
    const plan = planBundleCache(manifest, { existingBundleIds: ['old-zone'] });
    expect(plan.cacheName).toContain('gameengin:mad-maxi');
    expect(plan.shouldPrefetch).toEqual(['/games/mad-maxi/scene.glb']);
    expect(plan.shouldEvict).toEqual(['old-zone']);
  });

  it('tracks shader compile keys by backend and variant', () => {
    const registry = new GameEnginShaderRegistry();
    registry.register({ id: 'foliage.wind', label: 'Foliage Wind', backend: 'babylon-webgpu', stage: 'compute', code: '@compute @workgroup_size(1) fn main() {}' });
    expect(registry.compileKey({ id: 'foliage.wind', backend: 'babylon-webgpu', variant: 'mobile' })).toBe('babylon-webgpu:foliage.wind:mobile');
  });
});
