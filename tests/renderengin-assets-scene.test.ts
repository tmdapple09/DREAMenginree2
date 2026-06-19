import { describe, expect, it } from 'vitest';
import {
  addObjectToRenderScene,
  computeRenderObjectWorldMatrix,
  createParsedObjRenderAsset,
  createRenderScene,
  createRenderSceneObject,
  deserializeRenderScene,
  estimateRenderAssetMemory,
  parseGlbHeader,
  parseObjMesh,
  redoRenderScene,
  selectRenderSceneObjects,
  serializeRenderScene,
  undoRenderScene,
  updateRenderSceneObject,
} from '@/engins/renderengin';

const OBJ_SOURCE = `
v 0 0 0
v 1 0 0
v 0 1 0
vt 0 0
vt 1 0
vt 0 1
f 1/1 2/2 3/3
`;

describe('RenderEngin asset pipeline and scene graph', () => {
  it('imports OBJ meshes, validates them, and accounts memory', () => {
    const mesh = parseObjMesh(OBJ_SOURCE);
    expect(mesh.vertices).toHaveLength(3);
    expect(mesh.indices).toEqual([0, 1, 2]);
    const parsed = createParsedObjRenderAsset({ id: 'asset:test', ownerId: 'owner:test', runtimeId: 'runtime:test', name: 'triangle.obj', source: OBJ_SOURCE });
    expect(parsed.validation.valid).toBe(true);
    expect(parsed.asset.type).toBe('asset.render3d');
    expect(estimateRenderAssetMemory(mesh).totalBytes).toBeGreaterThan(0);
  });

  it('validates GLB headers before accepting binary assets', () => {
    const buffer = new ArrayBuffer(20);
    const view = new DataView(buffer);
    view.setUint32(0, 0x46546c67, true);
    view.setUint32(4, 2, true);
    view.setUint32(8, 20, true);
    view.setUint32(12, 0, true);
    view.setUint32(16, 0x4e4f534a, true);
    expect(parseGlbHeader(buffer).version).toBe(2);
  });

  it('creates serializable scene objects with selection, transform, undo, redo, and world matrices', () => {
    let scene = createRenderScene({ id: 'scene:test', ownerId: 'owner:test', runtimeId: 'runtime:test' });
    const parent = createRenderSceneObject({ id: 'object:parent', ownerId: 'owner:test', runtimeId: 'runtime:test', name: 'Parent', kind: 'group', transform: { translation: [1, 0, 0] } });
    const child = createRenderSceneObject({ id: 'object:child', ownerId: 'owner:test', runtimeId: 'runtime:test', name: 'Child', parentId: parent.id, transform: { translation: [0, 2, 0] } });
    scene = addObjectToRenderScene(scene, parent);
    scene = addObjectToRenderScene(scene, child);
    scene = selectRenderSceneObjects(scene, [child.id]);
    expect(scene.data.selectedObjectIds).toEqual([child.id]);
    const matrix = computeRenderObjectWorldMatrix(scene, child.id);
    expect(matrix[3]).toBe(1);
    expect(matrix[7]).toBe(2);
    const serialized = serializeRenderScene(scene);
    expect(deserializeRenderScene(serialized).id).toBe(scene.id);
    const moved = updateRenderSceneObject(scene, child.id, { transform: { translation: [0, 3, 0], rotation: [0, 0, 0, 1], scale: [1, 1, 1] } });
    const undone = undoRenderScene(moved);
    expect(undone.data.objects[child.id].data.transform.translation).toEqual([0, 2, 0]);
    expect(redoRenderScene(undone).data.objects[child.id].data.transform.translation).toEqual([0, 3, 0]);
  });
});
