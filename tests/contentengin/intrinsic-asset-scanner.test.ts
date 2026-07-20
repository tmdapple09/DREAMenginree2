import { describe, expect, it } from 'vitest';
import type { Mesh } from '@/engins/isosurfaceDualContouring';
import {
  compareAssetSimilarity,
  createIntrinsicAssetScanMetadata,
  scanMeshForGameReadiness,
} from '@/engins/contentengin/scan/intrinsicAssetScanner';
import { prepareGameReadyMesh } from '@/engins/contentengin/scan/gameReadyMeshBuilder';

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

describe('ContentEngin intrinsic non-AI mesh scanner', () => {
  it('certifies a closed manifold mesh and produces all four 4D families', () => {
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
    for (const family of Object.values(scan.families)) {
      expect(family.cells).toHaveLength(16);
      expect(family.edgeContrasts).toHaveLength(32);
      expect(family.faceContrasts).toHaveLength(24);
      expect(family.sliceContrasts).toHaveLength(4);
      expect(family.walsh).toHaveLength(16);
    }
    expect(createIntrinsicAssetScanMetadata(scan).certificate.signature).toBe(scan.similaritySignature);
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

  it('uses structural similarity rather than world-space placement', () => {
    const moved: Mesh = {
      vertices: tetrahedron.vertices.map((vertex) => ({
        x: vertex.x + 100,
        y: vertex.y - 20,
        z: vertex.z + 4,
      })),
      indices: [...tetrahedron.indices],
    };
    const left = scanMeshForGameReadiness(tetrahedron);
    const right = scanMeshForGameReadiness(moved);
    expect(left.similaritySignature).toBe(right.similaritySignature);
    expect(compareAssetSimilarity(left, right)).toBeCloseTo(1, 8);
  });

  it('runs existing repair plus deterministic LOD and collision preparation', () => {
    const prepared = prepareGameReadyMesh(tetrahedron, { targetTriangleBudget: 64 });
    expect(prepared.lodMeshes).toHaveLength(3);
    expect(prepared.summary.lods).toHaveLength(3);
    expect(prepared.summary.collision.kind).toBe('box-and-sphere');
    expect(prepared.summary.certificate.signature).toBe(prepared.scan.similaritySignature);
  });
});
