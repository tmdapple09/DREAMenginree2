import {
  mat4Identity,
  mat4Mul,
  mat4Transform,
  makeDualQuaternion,
  quatMul,
  type DualQuaternion,
  type Mat4,
  type MeshBuffers,
  type Quat,
  type Vec3,
  type Vec4,
  type Vertex,
  v3add,
  v3length,
  v3normalize,
  v3scale,
  v3sub,
} from './core';
import type { RenderBounds, RenderFrustumPlane } from './virtualization';

export interface RenderMorphTarget {
  readonly id: string;
  readonly positionDeltas: readonly Vec3[];
  readonly normalDeltas?: readonly Vec3[];
  readonly tangentDeltas?: readonly Vec4[];
}

export interface RenderMorphWeight {
  readonly targetId: string;
  readonly weight: number;
}

export interface RenderBoneStoragePlan {
  readonly mode: 'storage-buffer' | 'bone-texture';
  readonly matrixCount: number;
  readonly byteLength: number;
  readonly textureSize?: readonly [number, number];
}

export interface RenderTimestampQueryPlan {
  readonly enabled: boolean;
  readonly queryCount: number;
  readonly resolveBufferBytes: number;
  readonly readbackBufferBytes: number;
  readonly labels: readonly string[];
}

export interface RenderDeviceRecoveryState {
  readonly status: 'ready' | 'lost' | 'rebuilding' | 'restored';
  readonly reason?: string;
  readonly lostAt?: string;
  readonly restoredAt?: string;
  readonly rebuilds: number;
}

export interface RenderMeshlet {
  readonly id: string;
  readonly triangleStart: number;
  readonly triangleCount: number;
  readonly vertexIds: readonly number[];
  readonly bounds: RenderBounds;
}

export interface RenderIndirectDrawCommand {
  readonly indexCount: number;
  readonly instanceCount: number;
  readonly firstIndex: number;
  readonly baseVertex: number;
  readonly firstInstance: number;
}

export interface RenderStreamingPage {
  readonly id: string;
  readonly byteOffset: number;
  readonly byteLength: number;
  readonly objectIds: readonly string[];
  readonly priority: number;
}

export interface RenderCompressedGeometry {
  readonly codec: 'quantized-position-normal-uv16';
  readonly vertexCount: number;
  readonly indexCount: number;
  readonly positionScale: Vec3;
  readonly positionOffset: Vec3;
  readonly bytes: Uint8Array;
}

function addVec4(a: Vec4, b: Vec4): Vec4 { return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]]; }
function scaleVec4(a: Vec4, s: number): Vec4 { return [a[0] * s, a[1] * s, a[2] * s, a[3] * s]; }
function normalizeQuat(q: Quat): Quat { const len = Math.hypot(q[0], q[1], q[2], q[3]) || 1; return [q[0] / len, q[1] / len, q[2] / len, q[3] / len]; }
function conjugateQuat(q: Quat): Quat { return [-q[0], -q[1], -q[2], q[3]]; }
function transformByDualQuaternion(dq: DualQuaternion, point: Vec3): Vec3 {
  const real = normalizeQuat(dq.real);
  const dual = dq.dual;
  const rotated = quatMul(quatMul(real, [point[0], point[1], point[2], 0]), conjugateQuat(real));
  const translation = quatMul(dual, conjugateQuat(real)).slice(0, 3).map((v) => v * 2) as unknown as Vec3;
  return [rotated[0] + translation[0], rotated[1] + translation[1], rotated[2] + translation[2]];
}

export function applyMorphTargets(mesh: MeshBuffers, targets: readonly RenderMorphTarget[], weights: readonly RenderMorphWeight[]): MeshBuffers {
  const targetById = new Map(targets.map((target) => [target.id, target]));
  const vertices = mesh.vertices.map((vertex, index): Vertex => {
    let position = vertex.position;
    let normal = vertex.normal;
    let tangent = vertex.tangent;
    for (const weight of weights) {
      const target = targetById.get(weight.targetId);
      if (!target || weight.weight === 0) continue;
      if (target.positionDeltas[index]) position = v3add(position, v3scale(target.positionDeltas[index], weight.weight));
      if (target.normalDeltas?.[index]) normal = v3normalize(v3add(normal, v3scale(target.normalDeltas[index], weight.weight)));
      if (target.tangentDeltas?.[index]) tangent = addVec4(tangent, scaleVec4(target.tangentDeltas[index], weight.weight));
    }
    return { ...vertex, position, normal, tangent };
  });
  return { ...mesh, vertices };
}

export function skinVertexDqs(vertex: Vertex, jointDualQuaternions: readonly DualQuaternion[]): Vec3 {
  const ids = vertex.boneIds ?? [0, 0, 0, 0];
  const weights = vertex.weights ?? [1, 0, 0, 0];
  let real: Quat = [0, 0, 0, 0];
  let dual: Quat = [0, 0, 0, 0];
  for (let i = 0; i < 4; i += 1) {
    const weight = weights[i];
    const joint = jointDualQuaternions[ids[i]];
    if (!joint || weight === 0) continue;
    const sign = real[3] !== 0 && (real[0] * joint.real[0] + real[1] * joint.real[1] + real[2] * joint.real[2] + real[3] * joint.real[3]) < 0 ? -1 : 1;
    real = addVec4(real, scaleVec4(joint.real, weight * sign)) as Quat;
    dual = addVec4(dual, scaleVec4(joint.dual, weight * sign)) as Quat;
  }
  const len = Math.hypot(real[0], real[1], real[2], real[3]) || 1;
  return transformByDualQuaternion({ real: [real[0] / len, real[1] / len, real[2] / len, real[3] / len], dual: [dual[0] / len, dual[1] / len, dual[2] / len, dual[3] / len] }, vertex.position);
}

export function buildDualQuaternionPalette(jointRotations: readonly Quat[], jointTranslations: readonly Vec3[]): DualQuaternion[] {
  return jointRotations.map((rotation, index) => makeDualQuaternion(normalizeQuat(rotation), jointTranslations[index] ?? [0, 0, 0]));
}

export function planBoneStorage(matrixCount: number, preferTexture = false): RenderBoneStoragePlan {
  const byteLength = Math.max(0, matrixCount) * 16 * 4;
  if (!preferTexture || matrixCount <= 256) return { mode: 'storage-buffer', matrixCount, byteLength };
  const pixels = matrixCount * 4;
  const width = Math.ceil(Math.sqrt(pixels));
  const height = Math.ceil(pixels / width);
  return { mode: 'bone-texture', matrixCount, byteLength, textureSize: [width, height] };
}

export function createTimestampQueryPlan(labels: readonly string[], supportsTimestampQuery: boolean): RenderTimestampQueryPlan {
  const queryCount = labels.length * 2;
  return { enabled: supportsTimestampQuery && labels.length > 0, labels, queryCount, resolveBufferBytes: queryCount * 8, readbackBufferBytes: queryCount * 8 };
}

export function reduceTimestampPairs(timestamps: readonly bigint[], labels: readonly string[], periodNanoseconds = 1): Record<string, number> {
  const out: Record<string, number> = {};
  labels.forEach((label, index) => {
    const start = timestamps[index * 2] ?? 0n;
    const end = timestamps[index * 2 + 1] ?? start;
    out[label] = Number(end - start) * periodNanoseconds / 1_000_000;
  });
  return out;
}

export function markDeviceLost(state: RenderDeviceRecoveryState, reason: string, now = new Date().toISOString()): RenderDeviceRecoveryState {
  return { status: 'lost', reason, lostAt: now, rebuilds: state.rebuilds };
}

export function markDeviceRebuilding(state: RenderDeviceRecoveryState): RenderDeviceRecoveryState {
  return { ...state, status: 'rebuilding', rebuilds: state.rebuilds + 1 };
}

export function markDeviceRestored(state: RenderDeviceRecoveryState, now = new Date().toISOString()): RenderDeviceRecoveryState {
  return { status: 'restored', reason: state.reason, lostAt: state.lostAt, restoredAt: now, rebuilds: state.rebuilds };
}

export function buildMeshlets(mesh: MeshBuffers, maxTriangles = 64): RenderMeshlet[] {
  const meshlets: RenderMeshlet[] = [];
  const triangleCount = Math.floor(mesh.indices.length / 3);
  for (let start = 0; start < triangleCount; start += maxTriangles) {
    const count = Math.min(maxTriangles, triangleCount - start);
    const ids = new Set<number>();
    for (let i = start * 3; i < (start + count) * 3; i += 1) ids.add(mesh.indices[i]);
    const points = [...ids].map((id) => mesh.vertices[id].position);
    const center = v3scale(points.reduce((sum, point) => v3add(sum, point), [0, 0, 0] as Vec3), 1 / Math.max(1, points.length));
    const radius = Math.max(0, ...points.map((point) => v3length(v3sub(point, center))));
    meshlets.push({ id: `meshlet-${meshlets.length}`, triangleStart: start, triangleCount: count, vertexIds: [...ids], bounds: { center, radius } });
  }
  return meshlets;
}

export function planComputeCulling(meshlets: readonly RenderMeshlet[], planes: readonly RenderFrustumPlane[], occlusionVisibleIds = new Set<string>()): { visibleMeshletIds: string[]; culledMeshletIds: string[]; workgroups: number } {
  const visibleMeshletIds: string[] = [];
  const culledMeshletIds: string[] = [];
  for (const meshlet of meshlets) {
    const inside = planes.every((plane) => plane.normal[0] * meshlet.bounds.center[0] + plane.normal[1] * meshlet.bounds.center[1] + plane.normal[2] * meshlet.bounds.center[2] + plane.constant >= -meshlet.bounds.radius);
    const occlusionPass = occlusionVisibleIds.size === 0 || occlusionVisibleIds.has(meshlet.id);
    (inside && occlusionPass ? visibleMeshletIds : culledMeshletIds).push(meshlet.id);
  }
  return { visibleMeshletIds, culledMeshletIds, workgroups: Math.ceil(meshlets.length / 64) };
}

export function buildIndirectDrawCommands(meshlets: readonly RenderMeshlet[], instanceCount = 1): RenderIndirectDrawCommand[] {
  return meshlets.map((meshlet) => ({ indexCount: meshlet.triangleCount * 3, instanceCount, firstIndex: meshlet.triangleStart * 3, baseVertex: 0, firstInstance: 0 }));
}

export function planStreamingPages(objectIds: readonly string[], bytesPerObject: Record<string, number>, maxPageBytes: number): RenderStreamingPage[] {
  const pages: RenderStreamingPage[] = [];
  let pageIds: string[] = [];
  let pageBytes = 0;
  let offset = 0;
  for (const objectId of objectIds) {
    const bytes = bytesPerObject[objectId] ?? 0;
    if (pageIds.length && pageBytes + bytes > maxPageBytes) {
      pages.push({ id: `stream-page-${pages.length}`, byteOffset: offset, byteLength: pageBytes, objectIds: pageIds, priority: pages.length });
      offset += pageBytes;
      pageIds = [];
      pageBytes = 0;
    }
    pageIds.push(objectId);
    pageBytes += bytes;
  }
  if (pageIds.length) pages.push({ id: `stream-page-${pages.length}`, byteOffset: offset, byteLength: pageBytes, objectIds: pageIds, priority: pages.length });
  return pages;
}

export function compressGeometryQuantized(mesh: MeshBuffers): RenderCompressedGeometry {
  const positions = mesh.vertices.map((vertex) => vertex.position);
  const min: Vec3 = [Math.min(...positions.map((p) => p[0])), Math.min(...positions.map((p) => p[1])), Math.min(...positions.map((p) => p[2]))];
  const max: Vec3 = [Math.max(...positions.map((p) => p[0])), Math.max(...positions.map((p) => p[1])), Math.max(...positions.map((p) => p[2]))];
  const scale: Vec3 = [Math.max(1e-6, max[0] - min[0]), Math.max(1e-6, max[1] - min[1]), Math.max(1e-6, max[2] - min[2])];
  const bytes = new Uint8Array(mesh.vertices.length * 12 + mesh.indices.length * 4);
  const view = new DataView(bytes.buffer);
  mesh.vertices.forEach((vertex, index) => {
    const base = index * 12;
    view.setUint16(base, Math.round(((vertex.position[0] - min[0]) / scale[0]) * 65535), true);
    view.setUint16(base + 2, Math.round(((vertex.position[1] - min[1]) / scale[1]) * 65535), true);
    view.setUint16(base + 4, Math.round(((vertex.position[2] - min[2]) / scale[2]) * 65535), true);
    view.setInt16(base + 6, Math.round(vertex.normal[0] * 32767), true);
    view.setInt16(base + 8, Math.round(vertex.normal[1] * 32767), true);
    view.setInt16(base + 10, Math.round(vertex.normal[2] * 32767), true);
  });
  mesh.indices.forEach((index, i) => view.setUint32(mesh.vertices.length * 12 + i * 4, index, true));
  return { codec: 'quantized-position-normal-uv16', vertexCount: mesh.vertices.length, indexCount: mesh.indices.length, positionScale: scale, positionOffset: min, bytes };
}

export function solveTwoBoneIk(input: { root: Vec3; mid: Vec3; tip: Vec3; target: Vec3 }): { mid: Vec3; tip: Vec3; reached: boolean } {
  const upper = v3length(v3sub(input.mid, input.root));
  const lower = v3length(v3sub(input.tip, input.mid));
  const toTarget = v3sub(input.target, input.root);
  const distance = Math.min(v3length(toTarget), upper + lower);
  const direction = v3normalize(toTarget);
  const midDistance = Math.min(upper, Math.max(0, (distance * distance + upper * upper - lower * lower) / (2 * Math.max(distance, 1e-6))));
  const newMid = v3add(input.root, v3scale(direction, midDistance));
  const newTip = v3add(input.root, v3scale(direction, distance));
  return { mid: newMid, tip: newTip, reached: v3length(v3sub(newTip, input.target)) < 1e-3 };
}

export function applySkinMatrixToVertex(vertex: Vertex, skinMatrices: readonly Mat4[]): Vertex {
  const position4 = mat4Transform(skinMatrices[vertex.boneIds?.[0] ?? 0] ?? mat4Identity(), [vertex.position[0], vertex.position[1], vertex.position[2], 1]);
  return { ...vertex, position: [position4[0], position4[1], position4[2]] };
}

export function combinePoseMatrix(parent: Mat4, child: Mat4): Mat4 {
  return mat4Mul(parent, child);
}
