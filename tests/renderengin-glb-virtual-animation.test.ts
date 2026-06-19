import { describe, expect, it } from 'vitest';
import {
  addObjectToRenderScene,
  buildInstanceBatches,
  computeMeshBounds,
  createParsedGlbRenderAsset,
  createRenderScene,
  createRenderSceneObject,
  createTerrainChunks,
  cullRenderScene,
  evaluateAnimationClip,
  parseGlbMesh,
  selectScreenSpaceLod,
} from '@/engins/renderengin';

function align4(value: number): number { return (value + 3) & ~3; }
function makeMinimalTriangleGlb(): ArrayBuffer {
  const positions = new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]);
  const normals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]);
  const uvs = new Float32Array([0, 0, 1, 0, 0, 1]);
  const indices = new Uint16Array([0, 1, 2]);
  const positionBytes = positions.byteLength;
  const normalOffset = positionBytes;
  const uvOffset = normalOffset + normals.byteLength;
  const indexOffset = uvOffset + uvs.byteLength;
  const binLength = align4(indexOffset + indices.byteLength);
  const json = JSON.stringify({
    asset: { version: '2.0' },
    buffers: [{ byteLength: binLength }],
    bufferViews: [
      { buffer: 0, byteOffset: 0, byteLength: positions.byteLength },
      { buffer: 0, byteOffset: normalOffset, byteLength: normals.byteLength },
      { buffer: 0, byteOffset: uvOffset, byteLength: uvs.byteLength },
      { buffer: 0, byteOffset: indexOffset, byteLength: indices.byteLength },
    ],
    accessors: [
      { bufferView: 0, componentType: 5126, count: 3, type: 'VEC3' },
      { bufferView: 1, componentType: 5126, count: 3, type: 'VEC3' },
      { bufferView: 2, componentType: 5126, count: 3, type: 'VEC2' },
      { bufferView: 3, componentType: 5123, count: 3, type: 'SCALAR' },
    ],
    meshes: [{ primitives: [{ attributes: { POSITION: 0, NORMAL: 1, TEXCOORD_0: 2 }, indices: 3 }] }],
  });
  const jsonLength = align4(new TextEncoder().encode(json).byteLength);
  const length = 12 + 8 + jsonLength + 8 + binLength;
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setUint32(0, 0x46546c67, true);
  view.setUint32(4, 2, true);
  view.setUint32(8, length, true);
  view.setUint32(12, jsonLength, true);
  view.setUint32(16, 0x4e4f534a, true);
  new Uint8Array(buffer, 20, json.length).set(new TextEncoder().encode(json));
  const binHeader = 20 + jsonLength;
  view.setUint32(binHeader, binLength, true);
  view.setUint32(binHeader + 4, 0x004e4942, true);
  const bin = new Uint8Array(buffer, binHeader + 8, binLength);
  bin.set(new Uint8Array(positions.buffer), 0);
  bin.set(new Uint8Array(normals.buffer), normalOffset);
  bin.set(new Uint8Array(uvs.buffer), uvOffset);
  bin.set(new Uint8Array(indices.buffer), indexOffset);
  return buffer;
}

describe('RenderEngin GLB extraction, virtualization, and animation', () => {
  it('extracts a renderable mesh and asset from GLB binary data', () => {
    const glb = makeMinimalTriangleGlb();
    const mesh = parseGlbMesh(glb);
    expect(mesh.vertices).toHaveLength(3);
    expect(mesh.indices).toEqual([0, 1, 2]);
    const parsed = createParsedGlbRenderAsset({ id: 'asset:glb', ownerId: 'owner:test', runtimeId: 'runtime:test', name: 'triangle.glb', buffer: glb });
    expect(parsed.asset.type).toBe('asset.render3d');
    expect(parsed.validation.valid).toBe(true);
  });

  it('culls scene objects, batches instances, selects LOD, and plans terrain chunks', () => {
    const mesh = parseGlbMesh(makeMinimalTriangleGlb());
    const bounds = computeMeshBounds(mesh);
    let scene = createRenderScene({ id: 'scene:test', ownerId: 'owner:test', runtimeId: 'runtime:test' });
    scene = addObjectToRenderScene(scene, createRenderSceneObject({ id: 'object:a', ownerId: 'owner:test', runtimeId: 'runtime:test', name: 'A', assetId: 'asset:glb' }));
    scene = addObjectToRenderScene(scene, createRenderSceneObject({ id: 'object:b', ownerId: 'owner:test', runtimeId: 'runtime:test', name: 'B', assetId: 'asset:glb', transform: { translation: [100, 0, 0] } }));
    const culling = cullRenderScene(scene, { 'object:a': bounds, 'object:b': { center: [100, 0, 0], radius: 1 } }, [{ normal: [-1, 0, 0], constant: 10 }]);
    expect(culling.visibleObjectIds).toContain('object:a');
    expect(culling.hiddenObjectIds).toContain('object:b');
    expect(buildInstanceBatches(scene)).toEqual([{ assetId: 'asset:glb', objectIds: ['object:a', 'object:b'], instanceCount: 2 }]);
    expect(selectScreenSpaceLod(5, 2, 1080)).toBe('LOD0');
    expect(createTerrainChunks({ idPrefix: 'terrain', width: 64, depth: 64, chunkSize: 32, camera: [0, 8, 0] })).toHaveLength(4);
  });

  it('samples animation clips into object pose matrices', () => {
    const poses = evaluateAnimationClip({
      id: 'clip:test',
      name: 'Move',
      duration: 1,
      channels: [
        { objectId: 'object:a', path: 'translation', interpolation: 'linear', keyframes: [{ time: 0, value: [0, 0, 0] }, { time: 1, value: [10, 0, 0] }] },
        { objectId: 'object:a', path: 'scale', interpolation: 'step', keyframes: [{ time: 0, value: [1, 1, 1] }, { time: 1, value: [2, 2, 2] }] },
      ],
    }, 0.5);
    expect(poses[0].translation).toEqual([5, 0, 0]);
    expect(poses[0].scale).toEqual([1, 1, 1]);
    expect(poses[0].matrix[3]).toBe(5);
  });
});
