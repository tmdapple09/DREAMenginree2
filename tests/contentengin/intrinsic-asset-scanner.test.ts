import { describe, expect, it } from 'vitest';
import type { Mesh } from '@/engins/isosurfaceDualContouring';
import {
  compareAssetSimilarity,
  compareOrientedAssetSimilarity,
  createIntrinsicAssetScanMetadata,
  scanMeshForGameReadiness,
} from '@/engins/contentengin/scan/intrinsicAssetScanner';
import { prepareGameReadyMesh } from '@/engins/contentengin/scan/gameReadyMeshBuilder';
import { verifyGameReadyCertificate } from '@/lib/gameReadyIntegrity';

const tetrahedron: Mesh = {
  vertices: [
    { x: 1, y: 1, z: 1 },
    { x: -1, y: -1, z: 1 },
    { x: -1, y: 1, z: -1 },
    { x: 1, y: -1, z: -1 },
  ],
  indices: [
    0, 2, 1,
    0, 1, 3,
    0, 3, 2,
    1, 2, 3,
  ],
};

const asymmetricPyramid: Mesh = {
  vertices: [
    { x: -2, y: -1, z: 0 },
    { x: 2, y: -1, z: 0 },
    { x: 2, y: 1, z: 0 },
    { x: -2, y: 1, z: 0 },
    { x: 0.35, y: 0.15, z: 3 },
  ],
  indices: [
    0, 2, 1, 0, 3, 2,
    0, 1, 4, 1, 2, 4, 2, 3, 4, 3, 0, 4,
  ],
};

describe('ContentEngin intrinsic non-AI mesh scanner', () => {
  it('certifies a closed manifold mesh and produces oriented and canonical 4D families', () => {
    const scan = scanMeshForGameReadiness(tetrahedron, { triangleBudget: 64 });
    expect(scan.gameReady).toBe(true);
    expect(scan.topology.boundaryEdges).toBe(0);
    expect(scan.topology.nonManifoldEdges).toBe(0);
    expect(Object.keys(scan.families)).toEqual([
      'spatial-shape',
      'normal-curvature',
      'topology-neighborhood',
      'triangle-incidence',
    ]);
    expect(Object.keys(scan.canonicalFamilies)).toEqual([
      'radial-edge-shape',
      'metric-curvature',
      'topology-neighborhood',
      'triangle-incidence',
    ]);
    for (const family of [...Object.values(scan.families), ...Object.values(scan.canonicalFamilies)]) {
      expect(family.cells).toHaveLength(16);
      expect(family.edgeContrasts).toHaveLength(32);
      expect(family.faceContrasts).toHaveLength(24);
      expect(family.sliceContrasts).toHaveLength(4);
      expect(family.walsh).toHaveLength(16);
    }
    expect(createIntrinsicAssetScanMetadata(scan).certificate.signature).toBe(scan.canonicalSimilaritySignature);
    expect(verifyGameReadyCertificate(scan.certificate)).toBe(true);
    expect(verifyGameReadyCertificate({ ...scan.certificate, score: scan.certificate.score - 1 })).toBe(false);
  });

  it('identifies open topology and creates a deterministic repair plan', () => {
    const scan = scanMeshForGameReadiness({
      vertices: tetrahedron.vertices.slice(0, 3),
      indices: [0, 1, 2],
    });
    expect(scan.gameReady).toBe(false);
    expect(scan.topology.boundaryEdges).toBe(3);
    expect(scan.repairPlan.map((step) => step.id)).toContain('close-boundary-loops');
  });

  it('uses canonical similarity independent of translation, rotation, and uniform scale', () => {
    const transformed: Mesh = {
      vertices: asymmetricPyramid.vertices.map((vertex) => ({
        x: -vertex.y * 3 + 100,
        y: vertex.x * 3 - 20,
        z: vertex.z * 3 + 4,
      })),
      indices: [...asymmetricPyramid.indices],
    };
    const left = scanMeshForGameReadiness(asymmetricPyramid);
    const right = scanMeshForGameReadiness(transformed);
    expect(left.canonicalSimilaritySignature).toBe(right.canonicalSimilaritySignature);
    expect(compareAssetSimilarity(left, right)).toBeCloseTo(1, 8);
    expect(left.orientedSimilaritySignature).not.toBe(right.orientedSimilaritySignature);
    expect(compareOrientedAssetSimilarity(left, right)).toBeLessThan(1);
  });

  it('repairs duplicate topology and produces independently certified LOD and collision outputs', () => {
    const damaged: Mesh = {
      vertices: tetrahedron.vertices.map((vertex) => ({ ...vertex })),
      indices: [...tetrahedron.indices, 0, 2, 1],
    };
    const before = scanMeshForGameReadiness(damaged, { triangleBudget: 64 });
    expect(before.topology.duplicateFaces).toBe(1);
    const prepared = prepareGameReadyMesh(damaged, { targetTriangleBudget: 64 });
    expect(prepared.lodMeshes).toHaveLength(3);
    expect(prepared.summary.lods).toHaveLength(3);
    expect(prepared.summary.collision.kind).toBe('box-and-sphere');
    expect(prepared.collisionMeshes).toHaveLength(2);
    expect(prepared.scan.topology.duplicateFaces).toBe(0);
    expect(prepared.summary.topologyRepair.appliedRepairIds).toContain('remove-duplicate-faces');
    expect(prepared.summary.certificate.signature).toBe(prepared.scan.canonicalSimilaritySignature);
    expect(verifyGameReadyCertificate(prepared.summary.certificate)).toBe(true);
  });
});
