import { describe, expect, it } from 'vitest';
import {
  applyMorphTargets,
  buildDualQuaternionPalette,
  buildIndirectDrawCommands,
  buildMeshlets,
  compressGeometryQuantized,
  createMeshBuffers,
  createTimestampQueryPlan,
  markDeviceLost,
  markDeviceRebuilding,
  markDeviceRestored,
  planBoneStorage,
  planComputeCulling,
  planStreamingPages,
  reduceTimestampPairs,
  skinVertexDqs,
  solveTwoBoneIk,
} from '../engins/renderengin';

const mesh = createMeshBuffers([
  { position: [0, 0, 0], normal: [0, 0, 1], uv: [0, 0], boneIds: [0, 0, 0, 0], weights: [1, 0, 0, 0] },
  { position: [1, 0, 0], normal: [0, 0, 1], uv: [1, 0], boneIds: [0, 0, 0, 0], weights: [1, 0, 0, 0] },
  { position: [0, 1, 0], normal: [0, 0, 1], uv: [0, 1], boneIds: [0, 0, 0, 0], weights: [1, 0, 0, 0] },
], [0, 1, 2]);

describe('Render advanced rendering completion layer', () => {
  it('applies morph targets to positions and normals', () => {
    const morphed = applyMorphTargets(mesh, [{ id: 'smile', positionDeltas: [[0, 0, 1], [0, 0, 1], [0, 0, 1]], normalDeltas: [[0, 1, 0], [0, 1, 0], [0, 1, 0]] }], [{ targetId: 'smile', weight: 0.5 }]);
    expect(morphed.vertices[0].position).toEqual([0, 0, 0.5]);
    expect(morphed.vertices[0].normal[1]).toBeGreaterThan(0);
  });

  it('skins vertices with dual quaternions and plans bone texture storage', () => {
    const palette = buildDualQuaternionPalette([[0, 0, 0, 1]], [[2, 0, 0]]);
    expect(skinVertexDqs(mesh.vertices[0], palette)).toEqual([2, 0, 0]);
    expect(planBoneStorage(1024, true).mode).toBe('bone-texture');
  });

  it('plans timestamp queries and reduces query readbacks to milliseconds', () => {
    const plan = createTimestampQueryPlan(['shadow', 'color'], true);
    expect(plan).toMatchObject({ enabled: true, queryCount: 4, resolveBufferBytes: 32 });
    expect(reduceTimestampPairs([0n, 2_000_000n, 2_000_000n, 5_000_000n], plan.labels)).toEqual({ shadow: 2, color: 3 });
  });

  it('tracks device loss, rebuild, and restore lifecycle state', () => {
    const lost = markDeviceLost({ status: 'ready', rebuilds: 0 }, 'destroyed', '2026-06-19T00:00:00.000Z');
    const rebuilding = markDeviceRebuilding(lost);
    const restored = markDeviceRestored(rebuilding, '2026-06-19T00:00:01.000Z');
    expect(restored).toMatchObject({ status: 'restored', rebuilds: 1, reason: 'destroyed' });
  });

  it('builds meshlets, compute culling plans, and indirect draw commands', () => {
    const meshlets = buildMeshlets(mesh, 1);
    const visible = planComputeCulling(meshlets, [{ normal: [0, 0, 1], constant: 10 }]);
    expect(visible.visibleMeshletIds).toHaveLength(1);
    expect(buildIndirectDrawCommands(meshlets, 3)[0]).toMatchObject({ indexCount: 3, instanceCount: 3, firstIndex: 0 });
  });

  it('plans large-scene streaming pages and quantized geometry compression', () => {
    const pages = planStreamingPages(['a', 'b', 'c'], { a: 8, b: 8, c: 40 }, 16);
    expect(pages.map((page) => page.objectIds)).toEqual([['a', 'b'], ['c']]);
    const compressed = compressGeometryQuantized(mesh);
    expect(compressed.bytes.byteLength).toBeGreaterThan(0);
    expect(compressed.codec).toBe('quantized-position-normal-uv16');
  });

  it('solves two-bone inverse kinematics toward the target', () => {
    const solved = solveTwoBoneIk({ root: [0, 0, 0], mid: [1, 0, 0], tip: [2, 0, 0], target: [1.5, 0, 0] });
    expect(solved.tip).toEqual([1.5, 0, 0]);
    expect(solved.reached).toBe(true);
  });
});
