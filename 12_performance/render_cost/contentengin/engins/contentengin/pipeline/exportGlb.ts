import { ContentAsset, MaterialDef } from '../assetTypes';
import { buildGeometry } from '../builders/geometryBuilder';

function pad4Buffer(buf: Buffer, padByte = 0): Buffer {
  const pad = (4 - (buf.length % 4)) % 4;
  return pad ? Buffer.concat([buf, Buffer.alloc(pad, padByte)]) : buf;
}

function hexToRgba(hex: string): [number, number, number, number] {
  const clean = hex.replace('#', '');
  const n = Number.parseInt(clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255, 1];
}

function minMax(values: number[], stride: number): { min: number[]; max: number[] } {
  const min = Array.from({ length: stride }, () => Number.POSITIVE_INFINITY);
  const max = Array.from({ length: stride }, () => Number.NEGATIVE_INFINITY);
  for (let i = 0; i < values.length; i += stride) {
    for (let j = 0; j < stride; j += 1) {
      min[j] = Math.min(min[j]!, values[i + j]!);
      max[j] = Math.max(max[j]!, values[i + j]!);
    }
  }
  return { min, max };
}

function usedMaterialIds(asset: Pick<ContentAsset, 'materials' | 'parts'>): string[] {
  const declared = new Set(asset.materials.map((m) => m.id));
  const used: string[] = [];
  const walk = (parts: typeof asset.parts) => {
    for (const part of parts) {
      if (part.category !== 'root' && declared.has(part.materialId) && !used.includes(part.materialId)) used.push(part.materialId);
      walk(part.children);
    }
  };
  walk(asset.parts);
  return used;
}

export function createGlbBuffer(asset: ContentAsset): Buffer {
  const geometry = buildGeometry(asset.parts);
  if (!geometry.positions.length || !geometry.indices.length) {
    throw new Error(`ContentEngin cannot export ${asset.id}: no mesh geometry was generated.`);
  }

  const materialIndexById = new Map(asset.materials.map((m, index) => [m.id, index]));
  const groupedIndices = new Map<number, number[]>();
  for (let i = 0; i < geometry.indices.length; i += 3) {
    const a = geometry.indices[i]!;
    const materialId = geometry.materialIds[a] ?? asset.materials[0]?.id;
    const materialIndex = materialIndexById.get(materialId ?? '') ?? 0;
    const group = groupedIndices.get(materialIndex) ?? [];
    group.push(geometry.indices[i]!, geometry.indices[i + 1]!, geometry.indices[i + 2]!);
    groupedIndices.set(materialIndex, group);
  }

  const positionBuffer = pad4Buffer(Buffer.from(new Float32Array(geometry.positions).buffer));
  const normalBuffer = pad4Buffer(Buffer.from(new Float32Array(geometry.normals).buffer));
  const useUint32 = geometry.positions.length / 3 > 65535;
  const indexComponentType = useUint32 ? 5125 : 5123;
  const indexBuffers = [...groupedIndices.entries()].map(([materialIndex, indices]) => ({
    materialIndex,
    count: indices.length,
    buffer: pad4Buffer(Buffer.from((useUint32 ? new Uint32Array(indices) : new Uint16Array(indices)).buffer)),
  }));

  const buffers = [positionBuffer, normalBuffer, ...indexBuffers.map((g) => g.buffer)];
  let offset = 0;
  const bufferViews = buffers.map((buffer, index) => {
    const view = { buffer: 0, byteOffset: offset, byteLength: buffer.length, target: index < 2 ? 34962 : 34963 };
    offset += buffer.length;
    return view;
  });
  const binary = Buffer.concat(buffers);
  const bounds = minMax(geometry.positions, 3);

  const materials = asset.materials.map((m: MaterialDef) => ({
    name: m.name,
    pbrMetallicRoughness: {
      baseColorFactor: hexToRgba(m.baseColor),
      metallicFactor: m.metallic,
      roughnessFactor: m.roughness,
    },
    alphaMode: m.opacity < 1 ? 'BLEND' : 'OPAQUE',
    extras: { contentenginMaterialId: m.id, shaderId: m.shaderId },
  }));

  const accessors = [
    { bufferView: 0, byteOffset: 0, componentType: 5126, count: geometry.positions.length / 3, type: 'VEC3', min: bounds.min, max: bounds.max },
    { bufferView: 1, byteOffset: 0, componentType: 5126, count: geometry.normals.length / 3, type: 'VEC3' },
    ...indexBuffers.map((group, i) => ({ bufferView: i + 2, byteOffset: 0, componentType: indexComponentType, count: group.count, type: 'SCALAR' })),
  ];

  const primitives = indexBuffers.map((group, i) => ({
    attributes: { POSITION: 0, NORMAL: 1 },
    indices: i + 2,
    material: group.materialIndex,
    mode: 4,
    extras: { contentenginMaterialId: asset.materials[group.materialIndex]?.id ?? 'unknown' },
  }));

  const gltf = {
    asset: { version: '2.0', generator: `ContentEngin ${asset.contentenginVersion}` },
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{ name: asset.id, mesh: 0, extras: { contentenginAssetId: asset.id } }],
    meshes: [{
      name: `${asset.id}_mesh`,
      primitives,
      extras: {
        contentengin: {
          recipe: asset.recipe,
          parts: asset.parts,
          collision: asset.collision,
          lods: asset.lods,
          validation: asset.validation,
          materialGroups: usedMaterialIds(asset),
        },
      },
    }],
    materials,
    buffers: [{ byteLength: binary.length }],
    bufferViews,
    accessors,
    extras: {
      contentenginVersion: asset.contentenginVersion,
      gameReady: asset.validation.gameReady,
      sourceImagesRetained: false,
      persistedInDatabase: false,
    },
  };

  const json = pad4Buffer(Buffer.from(JSON.stringify(gltf)), 0x20);
  const bin = pad4Buffer(binary);
  const total = 12 + 8 + json.length + 8 + bin.length;
  const out = Buffer.alloc(total);
  out.writeUInt32LE(0x46546c67, 0);
  out.writeUInt32LE(2, 4);
  out.writeUInt32LE(total, 8);
  out.writeUInt32LE(json.length, 12);
  out.write('JSON', 16);
  json.copy(out, 20);
  const binHeader = 20 + json.length;
  out.writeUInt32LE(bin.length, binHeader);
  out.write('BIN\0', binHeader + 4);
  bin.copy(out, binHeader + 8);
  return out;
}

export interface GlbInspection {
  valid: boolean;
  meshPrimitiveCount: number;
  vertexCount: number;
  indexCount: number;
  primitiveMaterialIndexes: number[];
  primitiveMaterialIds: string[];
  errors: string[];
}

export function inspectGlb(buffer: Buffer): GlbInspection {
  const errors: string[] = [];
  if (buffer.readUInt32LE(0) !== 0x46546c67) errors.push('Missing GLB magic.');
  if (buffer.readUInt32LE(4) !== 2) errors.push('Unsupported GLB version.');
  const jsonLength = buffer.readUInt32LE(12);
  const jsonType = buffer.toString('utf8', 16, 20);
  if (jsonType !== 'JSON') errors.push('Missing JSON chunk.');
  const gltf = JSON.parse(buffer.toString('utf8', 20, 20 + jsonLength).trim());
  const primitives = gltf.meshes?.[0]?.primitives ?? [];
  const positionAccessor = gltf.accessors?.[primitives[0]?.attributes?.POSITION];
  const primitiveMaterialIndexes = primitives.map((p: { material?: number }) => p.material).filter((m: unknown): m is number => typeof m === 'number');
  const primitiveMaterialIds = primitiveMaterialIndexes.map((index: number) => gltf.materials?.[index]?.extras?.contentenginMaterialId ?? gltf.materials?.[index]?.name ?? String(index));
  const indexCount = primitives.reduce((sum: number, primitive: { indices?: number }) => sum + (gltf.accessors?.[primitive.indices ?? -1]?.count ?? 0), 0);
  if (!primitives.length) errors.push('No mesh primitive found.');
  if (!positionAccessor?.count) errors.push('No POSITION accessor vertices found.');
  if (!indexCount) errors.push('No index accessors found.');
  if (primitiveMaterialIndexes.length !== primitives.length) errors.push('Every mesh primitive must have a material index.');
  return { valid: errors.length === 0, meshPrimitiveCount: primitives.length, vertexCount: positionAccessor?.count ?? 0, indexCount, primitiveMaterialIndexes, primitiveMaterialIds, errors };
}

export function expectedMaterialIdsForAsset(asset: Pick<ContentAsset, 'materials' | 'parts'>): string[] {
  return usedMaterialIds(asset);
}
