import { v3length, v3sub, type MeshBuffers, type Vec3 } from './core';
import type { RenderScene } from './scene';

export interface RenderBounds {
  center: Vec3;
  radius: number;
}

export interface RenderFrustumPlane {
  normal: Vec3;
  constant: number;
}

export interface RenderCullingResult {
  visibleObjectIds: string[];
  hiddenObjectIds: string[];
  reasonByObjectId: Record<string, 'visible' | 'hidden' | 'locked-layer' | 'frustum-culled' | 'too-small'>;
}

export interface RenderInstanceBatch {
  assetId: string;
  objectIds: string[];
  instanceCount: number;
}

export interface RenderTerrainChunk {
  id: string;
  x: number;
  z: number;
  size: number;
  bounds: RenderBounds;
  lod: 'LOD0' | 'LOD1' | 'LOD2';
}

export function computeMeshBounds(mesh: MeshBuffers): RenderBounds {
  if (!mesh.vertices.length) return { center: [0, 0, 0], radius: 0 };
  const center = mesh.vertices.reduce<Vec3>((sum, vertex) => [sum[0] + vertex.position[0], sum[1] + vertex.position[1], sum[2] + vertex.position[2]], [0, 0, 0]);
  const average: Vec3 = [center[0] / mesh.vertices.length, center[1] / mesh.vertices.length, center[2] / mesh.vertices.length];
  return { center: average, radius: Math.max(...mesh.vertices.map((vertex) => v3length(v3sub(vertex.position, average)))) };
}

export function sphereIntersectsFrustum(bounds: RenderBounds, planes: readonly RenderFrustumPlane[]): boolean {
  return planes.every((plane) => plane.normal[0] * bounds.center[0] + plane.normal[1] * bounds.center[1] + plane.normal[2] * bounds.center[2] + plane.constant >= -bounds.radius);
}

export function selectScreenSpaceLod(distance: number, radius: number, viewportHeight: number): 'LOD0' | 'LOD1' | 'LOD2' {
  const projected = distance <= 0 ? Number.POSITIVE_INFINITY : (radius / distance) * viewportHeight;
  if (projected > 180) return 'LOD0';
  if (projected > 48) return 'LOD1';
  return 'LOD2';
}

export function cullRenderScene(scene: RenderScene, boundsByObjectId: Record<string, RenderBounds>, planes: readonly RenderFrustumPlane[], minimumScreenRadius = 0): RenderCullingResult {
  const visibleObjectIds: string[] = [];
  const hiddenObjectIds: string[] = [];
  const reasonByObjectId: RenderCullingResult['reasonByObjectId'] = {};
  for (const id of scene.data.objectIds) {
    const object = scene.data.objects[id];
    const layer = scene.data.layers[object.data.layerId];
    const bounds = boundsByObjectId[id] ?? { center: object.data.transform.translation, radius: 1 };
    if (!object.data.visible || layer?.visible === false) {
      hiddenObjectIds.push(id);
      reasonByObjectId[id] = 'hidden';
      continue;
    }
    if (bounds.radius < minimumScreenRadius) {
      hiddenObjectIds.push(id);
      reasonByObjectId[id] = 'too-small';
      continue;
    }
    if (!sphereIntersectsFrustum(bounds, planes)) {
      hiddenObjectIds.push(id);
      reasonByObjectId[id] = 'frustum-culled';
      continue;
    }
    visibleObjectIds.push(id);
    reasonByObjectId[id] = 'visible';
  }
  return { visibleObjectIds, hiddenObjectIds, reasonByObjectId };
}

export function buildInstanceBatches(scene: RenderScene, objectIds = scene.data.objectIds): RenderInstanceBatch[] {
  const batches = new Map<string, string[]>();
  for (const id of objectIds) {
    const object = scene.data.objects[id];
    if (!object?.data.assetId) continue;
    batches.set(object.data.assetId, [...(batches.get(object.data.assetId) ?? []), id]);
  }
  return [...batches.entries()].map(([assetId, ids]) => ({ assetId, objectIds: ids, instanceCount: ids.length }));
}

export function createTerrainChunks(input: { idPrefix: string; width: number; depth: number; chunkSize: number; camera: Vec3 }): RenderTerrainChunk[] {
  const chunks: RenderTerrainChunk[] = [];
  for (let x = 0; x < input.width; x += input.chunkSize) {
    for (let z = 0; z < input.depth; z += input.chunkSize) {
      const center: Vec3 = [x + input.chunkSize / 2, 0, z + input.chunkSize / 2];
      const distance = v3length(v3sub(center, input.camera));
      chunks.push({
        id: `${input.idPrefix}:${x}:${z}`,
        x,
        z,
        size: input.chunkSize,
        bounds: { center, radius: Math.SQRT2 * input.chunkSize / 2 },
        lod: selectScreenSpaceLod(distance, input.chunkSize, 1080),
      });
    }
  }
  return chunks;
}
