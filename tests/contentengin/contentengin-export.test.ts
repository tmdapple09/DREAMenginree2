import { describe, expect, it } from 'vitest';
import { buildAsset } from '../../engins/contentengin/pipeline/build';
import { createGlbArtifact, createGlbBuffer, expectedMaterialIdsForAsset, inspectGlb } from '../../engins/contentengin/pipeline/exportGlb';
import { safeSegment } from '../../engins/contentengin/pipeline/paths';
import { validateAsset } from '../../engins/contentengin/pipeline/validate';
import { verifyGameReadyCertificate } from '../../lib/gameReadyIntegrity';

describe('ContentEngin real GLB export', () => {
  it('exports certified GLB geometry with positions, normals, UVs, tangents, indices, and embedded textures', () => {
    const asset = buildAsset({ assetType: 'car', seed: 9, profile: 'ps3', parameters: {}, materialParameters: {} });
    const artifact = createGlbArtifact(asset);
    const info = inspectGlb(artifact.buffer);
    expect(info.valid).toBe(true);
    expect(info.vertexCount).toBeGreaterThan(0);
    expect(info.indexCount).toBeGreaterThan(0);
    expect(info.texcoordCount).toBe(info.vertexCount);
    expect(info.tangentCount).toBe(info.vertexCount);
    expect(info.geometryDigestVerified).toBe(true);
    expect(validateAsset(asset, artifact.buffer).gameReady).toBe(true);
    expect(info.similaritySignature).toBe(artifact.scan.canonicalSimilaritySignature);
    expect(info.gameReadyCertificate?.certificateDigest).toBe(artifact.scan.certificate.certificateDigest);
    expect(verifyGameReadyCertificate(artifact.scan.certificate)).toBe(true);
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

  it('exports LOD files with independent geometry-bound certificates', () => {
    const asset = buildAsset({ assetType: 'humanoid', seed: 11, profile: 'ps3', parameters: {}, materialParameters: {} });
    const lod0 = createGlbArtifact(asset, { triangleRatio: 1, lodLevel: 0 });
    const lod1 = createGlbArtifact(asset, { triangleRatio: 0.55, lodLevel: 1 });
    const lod2 = createGlbArtifact(asset, { triangleRatio: 0.25, lodLevel: 2 });
    for (const artifact of [lod0, lod1, lod2]) {
      const inspection = inspectGlb(artifact.buffer);
      expect(inspection.valid).toBe(true);
      expect(inspection.lodLevel).toBe(artifact.lodLevel);
      expect(inspection.geometryDigest).toBe(artifact.scan.geometryDigest);
      expect(inspection.geometryDigestVerified).toBe(true);
    }
    expect(lod1.scan.topology.triangles).toBeLessThanOrEqual(lod0.scan.topology.triangles);
    expect(lod2.scan.topology.triangles).toBeLessThanOrEqual(lod1.scan.topology.triangles);
  });

  it('rejects unsafe path segments', () => {
    expect(() => safeSegment('../escape', 'assetId')).toThrow();
    expect(() => safeSegment('ok-asset_1', 'assetId')).not.toThrow();
  });
});
