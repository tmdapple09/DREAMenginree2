import { describe, expect, it } from 'vitest';
import {
  certifyTenMillionScene,
  createRenderCompletionEvidence,
  createTenMillionTriangleBenchmarkScene,
} from '../engins/renderengin';

describe('Render completion evidence does not lie', () => {
  it('does not mark all 267 complete without verified evidence for physical-device targets', () => {
    const implemented = Array.from({ length: 267 }, (_, index) => index + 1);
    const verified = implemented.filter((item) => item < 173 || item > 192);
    const evidence = createRenderCompletionEvidence({ ownerId: 'owner', runtimeId: 'runtime', implementedItems: implemented, verifiedItems: verified, now: '2026-06-19T00:00:00.000Z' });
    expect(evidence.type).toBe('render.completion-evidence');
    expect(evidence.data.totalTargets).toBe(267);
    expect(evidence.data.complete).toBe(false);
    expect(evidence.data.blockedByEnvironmentTargets).toBeGreaterThan(0);
  });

  it('creates an actual 10M triangle benchmark scene and certifies only real passing captures', () => {
    const scene = createTenMillionTriangleBenchmarkScene({ sourceTrianglesPerMesh: 50_000, maxInstancesPerDraw: 50 });
    expect(scene.totalTriangles).toBeGreaterThanOrEqual(10_000_000);
    expect(scene.passes10M).toBe(true);
    const certification = certifyTenMillionScene(scene, {
      deviceClass: 'iphone',
      userAgent: 'Mobile Safari iPhone',
      averageGpuFrameMs: 30,
      averageCpuFrameMs: 28,
      sustainedSeconds: 90,
      thermalState: 'fair',
      measuredAt: '2026-06-19T00:00:00.000Z',
    });
    expect(certification.certified).toBe(true);
  });
});
