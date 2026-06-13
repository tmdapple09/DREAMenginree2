import { describe, expect, it } from 'vitest';
import { buildAsset } from '../../lib/contentengin/pipeline/build';
import { createGlbBuffer, expectedMaterialIdsForAsset, inspectGlb } from '../../lib/contentengin/pipeline/exportGlb';
import { safeSegment } from '../../lib/contentengin/pipeline/paths';
import { validateAsset } from '../../lib/contentengin/pipeline/validate';

describe('ContentEngin real GLB export', () => {
  it('exports a GLB with real mesh primitives, vertices, and indices', () => {
    const asset = buildAsset({ assetType: 'car', seed: 9, profile: 'ps3', parameters: {}, materialParameters: {} });
    const glb = createGlbBuffer(asset);
    const info = inspectGlb(glb);
    expect(info.valid).toBe(true);
    expect(info.vertexCount).toBeGreaterThan(0);
    expect(info.indexCount).toBeGreaterThan(0);
    expect(validateAsset(asset, glb).gameReady).toBe(true);
  });

  it('preserves material assignments as separate GLB primitives', () => {
    const asset = buildAsset({ assetType: 'car', seed: 10, profile: 'ps3', parameters: {}, materialParameters: {} });
    const expectedMaterialIds = expectedMaterialIdsForAsset(asset);
    expect(expectedMaterialIds.length).toBeGreaterThan(1);
    const info = inspectGlb(createGlbBuffer(asset));
    expect(info.meshPrimitiveCount).toBe(expectedMaterialIds.length);
    expect(new Set(info.primitiveMaterialIds)).toEqual(new Set(expectedMaterialIds));
    expect(info.primitiveMaterialIndexes.length).toBe(expectedMaterialIds.length);
  });

  it('rejects unsafe path segments', () => {
    expect(() => safeSegment('../escape', 'assetId')).toThrow();
    expect(() => safeSegment('ok-asset_1', 'assetId')).not.toThrow();
  });
});
