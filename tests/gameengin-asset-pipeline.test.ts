import { describe, expect, it } from 'vitest';
import {
  assertValidBundleManifest,
  bundleWeightBytes,
  fetchVerifiedAssetBytes,
  type GameEnginBundleManifest,
} from '@/engins/gameengin/assets/BundleManifest';
import { planBundleCache } from '@/engins/gameengin/assets/BundleCache';
import { GameEnginShaderRegistry } from '@/engins/gameengin/render/ShaderRegistry';
import { digestObject, sha256Hex } from '@/lib/gameReadyIntegrity';
import type { GameReadyAssetCertificate } from '@/types/gameReadyAsset';

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

function makeCertificate(label: string, gameReady = true): GameReadyAssetCertificate {
  const canonicalSignature = digestObject(`${label}:canonical`);
  const payload = {
    version: 2 as const,
    scannerVersion: 'test-scanner-v2',
    gameReady,
    score: gameReady ? 92 : 45,
    signature: canonicalSignature,
    canonicalSignature,
    orientedSignature: digestObject(`${label}:oriented`),
    geometryDigest: digestObject(`${label}:geometry`),
    scanDigest: digestObject(`${label}:scan`),
    topologyClosed: true,
    triangleBudget: 50_000,
    estimatedBytes: 4096,
    criticalIssueCount: gameReady ? 0 : 1,
    warningCount: 0,
    requiredRepairIds: gameReady ? [] : ['repair-winding' as const],
  };
  return { ...payload, certificateDigest: digestObject(payload) };
}

const integrity = (label: string): string => `sha256-${sha256Hex(label)}`;

describe('GameEngin asset pipeline contracts', () => {
  it('validates versioned bundle manifests', () => {
    expect(() => assertValidBundleManifest(manifest)).not.toThrow();
    expect(bundleWeightBytes(manifest)).toBe(5120);
  });

  it('accepts certified ContentEngin assets and rejects failed certificates', () => {
    const certificate = makeCertificate('model');
    const lod1 = makeCertificate('lod1');
    const lod2 = makeCertificate('lod2');
    const certified: GameEnginBundleManifest = {
      ...manifest,
      assets: [{
        id: 'contentengin-model',
        kind: 'gltf',
        url: '/content/model.glb',
        vertices: 1000,
        triangles: 500,
        integrity: integrity('model-bytes'),
        contentenginCertificate: certificate,
        similaritySignature: certificate.canonicalSignature,
        orientedSimilaritySignature: certificate.orientedSignature,
        geometryDigest: certificate.geometryDigest,
        scanDigest: certificate.scanDigest,
        scanIntegrity: integrity('scan-bytes'),
        scanUrl: '/content/scan.json',
        lods: [
          {
            level: 1,
            url: '/content/model.lod1.glb',
            vertices: 700,
            triangles: 300,
            integrity: integrity('lod1-bytes'),
            contentenginCertificate: lod1,
            similaritySignature: lod1.canonicalSignature,
            orientedSimilaritySignature: lod1.orientedSignature,
            geometryDigest: lod1.geometryDigest,
            scanDigest: lod1.scanDigest,
          },
          {
            level: 2,
            url: '/content/model.lod2.glb',
            vertices: 400,
            triangles: 150,
            integrity: integrity('lod2-bytes'),
            contentenginCertificate: lod2,
            similaritySignature: lod2.canonicalSignature,
            orientedSimilaritySignature: lod2.orientedSignature,
            geometryDigest: lod2.geometryDigest,
            scanDigest: lod2.scanDigest,
          },
        ],
        collisionUrl: '/content/collision.json',
        collisionIntegrity: integrity('collision-bytes'),
      }],
    };
    expect(() => assertValidBundleManifest(certified)).not.toThrow();
    const failed = makeCertificate('model', false);
    expect(() => assertValidBundleManifest({
      ...certified,
      assets: [{
        ...certified.assets[0]!,
        contentenginCertificate: failed,
        similaritySignature: failed.canonicalSignature,
        orientedSimilaritySignature: failed.orientedSignature,
        geometryDigest: failed.geometryDigest,
        scanDigest: failed.scanDigest,
      }],
    })).toThrow('not certified game-ready');
  });

  it('verifies fetched asset bytes instead of trusting manifest text', async () => {
    const bytes = new TextEncoder().encode('verified GameEngin asset');
    const expected = `sha256-${sha256Hex(bytes)}`;
    const fetcher = async () => new Response(bytes, { status: 200 });
    await expect(fetchVerifiedAssetBytes('/verified.bin', expected, { fetcher: fetcher as typeof fetch })).resolves.toBeInstanceOf(ArrayBuffer);
    await expect(fetchVerifiedAssetBytes('/tampered.bin', expected, {
      fetcher: (async () => new Response('tampered', { status: 200 })) as typeof fetch,
    })).rejects.toThrow('failed SHA-256 verification');
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
