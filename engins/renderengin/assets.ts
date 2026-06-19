import { authorizeDomainCapability, type DomainAuthorizationContext, type DomainCapability } from '@/engine/engin-runtime/EnginCapabilities';
import type { DomainVisibility, JsonObject, JsonValue } from '@/engine/engin-runtime/EnginBaseState';
import { createMeshBuffers, createRenderAsset, validateMeshForRenderUpload, v3cross, v3normalize, v3sub, type MeshBuffers, type Vec2, type Vec3 } from './core';

export interface RenderAssetManifest extends JsonObject {
  id: string;
  ownerId: string;
  runtimeId: string;
  visibility: DomainVisibility;
  source: 'obj' | 'glb' | 'contentengin' | 'gameengin' | 'procedural-terrain' | 'user-upload';
  name: string;
  mimeType: string;
  byteLength: number;
  checksum?: string;
}

export interface ParsedRenderAsset {
  manifest: RenderAssetManifest;
  mesh: MeshBuffers;
  asset: ReturnType<typeof createRenderAsset>;
  validation: ReturnType<typeof validateMeshForRenderUpload>;
}

function parseObjVertexRef(ref: string, vertexCount: number, uvCount: number, normalCount: number): { position: number; uv: number | null; normal: number | null } {
  const [p, u, n] = ref.split('/');
  const toIndex = (raw: string | undefined, count: number): number | null => {
    if (!raw) return null;
    const parsed = Number.parseInt(raw, 10);
    if (!Number.isInteger(parsed)) return null;
    return parsed < 0 ? count + parsed : parsed - 1;
  };
  const position = toIndex(p, vertexCount);
  if (position === null || position < 0 || position >= vertexCount) throw new Error(`OBJ face references invalid vertex '${ref}'.`);
  const uv = toIndex(u, uvCount);
  const normal = toIndex(n, normalCount);
  return { position, uv: uv !== null && uv >= 0 && uv < uvCount ? uv : null, normal: normal !== null && normal >= 0 && normal < normalCount ? normal : null };
}

export function parseObjMesh(source: string): MeshBuffers {
  const positions: Vec3[] = [];
  const uvs: Vec2[] = [];
  const normals: Vec3[] = [];
  const vertices: Array<{ position: Vec3; normal: Vec3; uv: Vec2 }> = [];
  const indices: number[] = [];
  const vertexMap = new Map<string, number>();

  const addVertex = (ref: string): number => {
    const parsed = parseObjVertexRef(ref, positions.length, uvs.length, normals.length);
    const key = `${parsed.position}/${parsed.uv ?? ''}/${parsed.normal ?? ''}`;
    const existing = vertexMap.get(key);
    if (existing !== undefined) return existing;
    const vertex = {
      position: positions[parsed.position],
      uv: parsed.uv !== null ? uvs[parsed.uv] : [0, 0] as Vec2,
      normal: parsed.normal !== null ? normals[parsed.normal] : [0, 0, 0] as Vec3,
    };
    vertices.push(vertex);
    const index = vertices.length - 1;
    vertexMap.set(key, index);
    return index;
  };

  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const [kind, ...parts] = line.split(/\s+/);
    if (kind === 'v') positions.push([Number(parts[0]), Number(parts[1]), Number(parts[2])]);
    if (kind === 'vt') uvs.push([Number(parts[0]), Number(parts[1] ?? 0)]);
    if (kind === 'vn') normals.push(v3normalize([Number(parts[0]), Number(parts[1]), Number(parts[2])]));
    if (kind === 'f') {
      if (parts.length < 3) throw new Error('OBJ face must have at least three vertices.');
      const face = parts.map(addVertex);
      for (let i = 1; i < face.length - 1; i += 1) indices.push(face[0], face[i], face[i + 1]);
    }
  }

  for (let i = 0; i < indices.length; i += 3) {
    const a = vertices[indices[i]], b = vertices[indices[i + 1]], c = vertices[indices[i + 2]];
    const normal = v3normalize(v3cross(v3sub(b.position, a.position), v3sub(c.position, a.position)));
    [a, b, c].forEach((vertex) => { if (vertex.normal[0] === 0 && vertex.normal[1] === 0 && vertex.normal[2] === 0) vertex.normal = normal; });
  }

  return createMeshBuffers(vertices, indices);
}

export function parseGlbHeader(buffer: ArrayBuffer): JsonObject {
  const view = new DataView(buffer);
  if (view.byteLength < 20) throw new Error('GLB file is too small.');
  const magic = view.getUint32(0, true);
  const version = view.getUint32(4, true);
  const length = view.getUint32(8, true);
  if (magic !== 0x46546c67) throw new Error('GLB magic header is invalid.');
  if (version !== 2) throw new Error(`Unsupported GLB version ${version}.`);
  if (length !== view.byteLength) throw new Error('GLB declared length does not match file length.');
  const jsonChunkLength = view.getUint32(12, true);
  const jsonChunkType = view.getUint32(16, true);
  if (jsonChunkType !== 0x4e4f534a) throw new Error('GLB first chunk must be JSON.');
  return { version, length, jsonChunkLength, binaryByteLength: Math.max(0, length - 20 - jsonChunkLength) };
}

export function createParsedObjRenderAsset(input: { id: string; ownerId: string; runtimeId: string; visibility?: DomainVisibility; name: string; source: string }): ParsedRenderAsset {
  const mesh = parseObjMesh(input.source);
  const validation = validateMeshForRenderUpload(mesh);
  if (!validation.valid) throw new Error(validation.reason ?? 'OBJ mesh failed RenderEngin validation.');
  const manifest: RenderAssetManifest = {
    id: input.id,
    ownerId: input.ownerId,
    runtimeId: input.runtimeId,
    visibility: input.visibility ?? 'local',
    source: 'obj',
    name: input.name,
    mimeType: 'model/obj',
    byteLength: input.source.length,
  };
  const asset = createRenderAsset({ id: input.id, ownerId: input.ownerId, runtimeId: input.runtimeId, visibility: manifest.visibility, mesh, material: { albedo: [0.58, 0.72, 0.95], orm: [1, 0.55, 0] } });
  return { manifest, mesh, asset, validation };
}

export function renderAssetManifestToJson(manifest: RenderAssetManifest): JsonObject {
  return manifest as unknown as JsonObject;
}

export function estimateRenderAssetMemory(mesh: MeshBuffers): JsonObject {
  return {
    vertexBytes: mesh.vertices.length * mesh.packedVertexStrideBytes,
    indexBytes: mesh.indices.length * (mesh.indexFormat === 'uint16' ? 2 : 4),
    totalBytes: mesh.vertices.length * mesh.packedVertexStrideBytes + mesh.indices.length * (mesh.indexFormat === 'uint16' ? 2 : 4),
  } as JsonObject;
}


export function authorizeRenderAssetOperation(action: DomainCapability, asset: ReturnType<typeof createRenderAsset>, context: DomainAuthorizationContext): JsonObject {
  const gate = authorizeDomainCapability(action, asset, context);
  return { granted: gate.granted, reason: gate.reason };
}

export function createContentEnginRenderHandoff(input: { assetId: string; ownerId: string; runtimeId: string; exportUrl?: string }): JsonObject {
  return {
    type: 'content.export.glb.preview',
    assetId: input.assetId,
    ownerId: input.ownerId,
    runtimeId: input.runtimeId,
    exportUrl: input.exportUrl ?? null,
    targetIntent: 'render.asset.preview',
  };
}

export function createGameEnginRenderHandoff(input: { assetId: string; ownerId: string; runtimeId: string; cartridgeId: string }): JsonObject {
  return {
    type: 'game.cartridge.mesh.preview',
    assetId: input.assetId,
    ownerId: input.ownerId,
    runtimeId: input.runtimeId,
    cartridgeId: input.cartridgeId,
    targetIntent: 'render.asset.preview',
  };
}

type GltfAccessorType = 'SCALAR' | 'VEC2' | 'VEC3' | 'VEC4';
interface GltfAccessor { bufferView: number; componentType: number; count: number; type: GltfAccessorType; byteOffset?: number; }
interface GltfBufferView { buffer: number; byteOffset?: number; byteLength: number; byteStride?: number; }
interface MinimalGltf { accessors: GltfAccessor[]; bufferViews: GltfBufferView[]; meshes: Array<{ primitives: Array<{ attributes: Record<string, number>; indices?: number }> }>; }

function parseGlbChunks(buffer: ArrayBuffer): { json: MinimalGltf; binary: ArrayBuffer } {
  const header = parseGlbHeader(buffer);
  const view = new DataView(buffer);
  const jsonLength = Number(header.jsonChunkLength ?? 0);
  const jsonStart = 20;
  const jsonBytes = new Uint8Array(buffer, jsonStart, jsonLength);
  const json = JSON.parse(new TextDecoder().decode(jsonBytes)) as MinimalGltf;
  const binHeader = jsonStart + jsonLength;
  if (binHeader + 8 > buffer.byteLength) return { json, binary: new ArrayBuffer(0) };
  const binLength = view.getUint32(binHeader, true);
  const binType = view.getUint32(binHeader + 4, true);
  if (binType !== 0x004e4942) throw new Error('GLB second chunk must be BIN.');
  return { json, binary: buffer.slice(binHeader + 8, binHeader + 8 + binLength) };
}

function readAccessorNumber(binary: ArrayBuffer, accessor: GltfAccessor, view: GltfBufferView, index: number, componentOffset: number): number {
  const componentSize = accessor.componentType === 5126 || accessor.componentType === 5125 ? 4 : 2;
  const componentCount = accessor.type === 'SCALAR' ? 1 : accessor.type === 'VEC2' ? 2 : accessor.type === 'VEC3' ? 3 : 4;
  const stride = view.byteStride ?? componentSize * componentCount;
  const byteOffset = (view.byteOffset ?? 0) + (accessor.byteOffset ?? 0) + index * stride + componentOffset * componentSize;
  const data = new DataView(binary);
  if (accessor.componentType === 5126) return data.getFloat32(byteOffset, true);
  if (accessor.componentType === 5125) return data.getUint32(byteOffset, true);
  if (accessor.componentType === 5123) return data.getUint16(byteOffset, true);
  throw new Error(`Unsupported GLB accessor component type ${accessor.componentType}.`);
}

function readVec3Accessor(json: MinimalGltf, binary: ArrayBuffer, accessorIndex: number): Vec3[] {
  const accessor = json.accessors[accessorIndex];
  const view = json.bufferViews[accessor.bufferView];
  if (accessor.componentType !== 5126 || accessor.type !== 'VEC3') throw new Error('GLB VEC3 accessor must use FLOAT data.');
  return Array.from({ length: accessor.count }, (_, index): Vec3 => [readAccessorNumber(binary, accessor, view, index, 0), readAccessorNumber(binary, accessor, view, index, 1), readAccessorNumber(binary, accessor, view, index, 2)]);
}

function readVec2Accessor(json: MinimalGltf, binary: ArrayBuffer, accessorIndex: number): Vec2[] {
  const accessor = json.accessors[accessorIndex];
  const view = json.bufferViews[accessor.bufferView];
  if (accessor.componentType !== 5126 || accessor.type !== 'VEC2') throw new Error('GLB VEC2 accessor must use FLOAT data.');
  return Array.from({ length: accessor.count }, (_, index): Vec2 => [readAccessorNumber(binary, accessor, view, index, 0), readAccessorNumber(binary, accessor, view, index, 1)]);
}

function readIndexAccessor(json: MinimalGltf, binary: ArrayBuffer, accessorIndex: number): number[] {
  const accessor = json.accessors[accessorIndex];
  const view = json.bufferViews[accessor.bufferView];
  if (accessor.type !== 'SCALAR') throw new Error('GLB index accessor must be SCALAR.');
  return Array.from({ length: accessor.count }, (_, index) => readAccessorNumber(binary, accessor, view, index, 0));
}

export function parseGlbMesh(buffer: ArrayBuffer): MeshBuffers {
  const { json, binary } = parseGlbChunks(buffer);
  const primitive = json.meshes?.[0]?.primitives?.[0];
  if (!primitive) throw new Error('GLB does not contain a mesh primitive.');
  const positions = readVec3Accessor(json, binary, primitive.attributes.POSITION);
  const normals = primitive.attributes.NORMAL !== undefined ? readVec3Accessor(json, binary, primitive.attributes.NORMAL) : positions.map((): Vec3 => [0, 0, 1]);
  const uvs = primitive.attributes.TEXCOORD_0 !== undefined ? readVec2Accessor(json, binary, primitive.attributes.TEXCOORD_0) : positions.map((): Vec2 => [0, 0]);
  const indices = primitive.indices !== undefined ? readIndexAccessor(json, binary, primitive.indices) : positions.map((_, index) => index);
  return createMeshBuffers(positions.map((position, index) => ({ position, normal: normals[index] ?? [0, 0, 1], uv: uvs[index] ?? [0, 0] })), indices);
}

export function createParsedGlbRenderAsset(input: { id: string; ownerId: string; runtimeId: string; visibility?: DomainVisibility; name: string; buffer: ArrayBuffer }): ParsedRenderAsset {
  const mesh = parseGlbMesh(input.buffer);
  const validation = validateMeshForRenderUpload(mesh);
  if (!validation.valid) throw new Error(validation.reason ?? 'GLB mesh failed RenderEngin validation.');
  const manifest: RenderAssetManifest = { id: input.id, ownerId: input.ownerId, runtimeId: input.runtimeId, visibility: input.visibility ?? 'local', source: 'glb', name: input.name, mimeType: 'model/gltf-binary', byteLength: input.buffer.byteLength };
  const asset = createRenderAsset({ id: input.id, ownerId: input.ownerId, runtimeId: input.runtimeId, visibility: manifest.visibility, mesh, material: { albedo: [0.58, 0.72, 0.95], orm: [1, 0.55, 0] } });
  return { manifest, mesh, asset, validation };
}
