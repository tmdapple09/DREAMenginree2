import { deflateSync } from 'zlib';
import { verifyGameReadyCertificate } from '@/lib/gameReadyIntegrity';
import type { Mesh } from '@/engins/isosurfaceDualContouring';
import type { ContentAsset, MaterialDef } from '../assetTypes';
import { buildGeometry, type MeshGeometry } from '../builders/geometryBuilder';
import {
  computeMeshGeometryDigest,
  createIntrinsicAssetScanMetadata,
  scanMeshForGameReadiness,
  type IntrinsicAssetScanReport,
} from '../scan/intrinsicAssetScanner';

export interface GlbExportOptions {
  readonly triangleRatio?: number;
  readonly lodLevel?: 0 | 1 | 2;
}

export interface GlbArtifact {
  readonly buffer: Buffer;
  readonly scan: IntrinsicAssetScanReport;
  readonly lodLevel: 0 | 1 | 2;
}


function toGltfVector(x: number, y: number, z: number): [number, number, number] {
  return [x, z, -y];
}

function toGltfGeometry(source: MeshGeometry): MeshGeometry {
  const positions: number[] = [];
  const normals: number[] = [];
  const tangents: number[] = [];
  for (let index = 0; index < source.positions.length; index += 3) {
    positions.push(...toGltfVector(
      source.positions[index]!,
      source.positions[index + 1]!,
      source.positions[index + 2]!,
    ));
  }
  for (let index = 0; index < source.normals.length; index += 3) {
    normals.push(...toGltfVector(
      source.normals[index]!,
      source.normals[index + 1]!,
      source.normals[index + 2]!,
    ));
  }
  for (let index = 0; index < source.tangents.length; index += 4) {
    tangents.push(
      ...toGltfVector(
        source.tangents[index]!,
        source.tangents[index + 1]!,
        source.tangents[index + 2]!,
      ),
      source.tangents[index + 3]!,
    );
  }
  return {
    positions,
    normals,
    texcoords: [...source.texcoords],
    tangents,
    indices: [...source.indices],
    materialIds: [...source.materialIds],
  };
}

function gltfSkeletonMetadata(asset: ContentAsset): ContentAsset['skeleton'] | undefined {
  if (!asset.skeleton) return undefined;
  return {
    ...asset.skeleton,
    bones: asset.skeleton.bones.map((bone) => {
      const head = toGltfVector(bone.head.x, bone.head.y, bone.head.z);
      const tail = toGltfVector(bone.tail.x, bone.tail.y, bone.tail.z);
      return {
        ...bone,
        head: { x: head[0], y: head[1], z: head[2] },
        tail: { x: tail[0], y: tail[1], z: tail[2] },
      };
    }),
  };
}

function pad4Buffer(buffer: Buffer, padByte = 0): Buffer {
  const pad = (4 - (buffer.length % 4)) % 4;
  return pad ? Buffer.concat([buffer, Buffer.alloc(pad, padByte)]) : buffer;
}

function hexToRgba(hex: string): [number, number, number, number] {
  const clean = hex.replace('#', '');
  const value = Number.parseInt(clean.length === 3 ? clean.split('').map((character) => character + character).join('') : clean, 16);
  return [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255, 1];
}


function crc32Png(data: Buffer): number {
  let crc = 0xffffffff;
  for (const byte of data) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type: string, data: Buffer): Buffer {
  const typeBuffer = Buffer.from(type, 'ascii');
  const chunk = Buffer.alloc(12 + data.length);
  chunk.writeUInt32BE(data.length, 0);
  typeBuffer.copy(chunk, 4);
  data.copy(chunk, 8);
  chunk.writeUInt32BE(crc32Png(Buffer.concat([typeBuffer, data])), 8 + data.length);
  return chunk;
}

function onePixelPng(rgba: readonly [number, number, number, number]): Buffer {
  const header = Buffer.alloc(13);
  header.writeUInt32BE(1, 0);
  header.writeUInt32BE(1, 4);
  header[8] = 8;
  header[9] = 6;
  const pixel = Buffer.from([0, ...rgba.map((value) => Math.max(0, Math.min(255, Math.round(value * 255))))]);
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    pngChunk('IHDR', header),
    pngChunk('IDAT', deflateSync(pixel)),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

function minMax(values: readonly number[], stride: number): { min: number[]; max: number[] } {
  const min = Array.from({ length: stride }, () => Number.POSITIVE_INFINITY);
  const max = Array.from({ length: stride }, () => Number.NEGATIVE_INFINITY);
  for (let index = 0; index < values.length; index += stride) {
    for (let component = 0; component < stride; component += 1) {
      min[component] = Math.min(min[component]!, values[index + component]!);
      max[component] = Math.max(max[component]!, values[index + component]!);
    }
  }
  return { min, max };
}

function usedMaterialIds(asset: Pick<ContentAsset, 'materials' | 'parts'>): string[] {
  const declared = new Set(asset.materials.map((material) => material.id));
  const used: string[] = [];
  const walk = (parts: typeof asset.parts): void => {
    for (const part of parts) {
      if (part.category !== 'root' && declared.has(part.materialId) && !used.includes(part.materialId)) used.push(part.materialId);
      walk(part.children);
    }
  };
  walk(asset.parts);
  return used;
}

function meshFromGeometry(geometry: MeshGeometry, indices: readonly number[]): Mesh {
  return {
    vertices: Array.from({ length: geometry.positions.length / 3 }, (_, index) => ({
      x: Math.fround(geometry.positions[index * 3]!),
      y: Math.fround(geometry.positions[index * 3 + 1]!),
      z: Math.fround(geometry.positions[index * 3 + 2]!),
    })),
    indices: [...indices],
  };
}

function scanExportedGeometry(asset: ContentAsset, geometry: MeshGeometry, indices: readonly number[]): IntrinsicAssetScanReport {
  return scanMeshForGameReadiness(meshFromGeometry(geometry, indices), {
    allowOpenSurface: !asset.intrinsicScan.certificate.topologyClosed,
    allowDisconnectedComponents: asset.intrinsicScan.topology.connectedComponents > 1,
    allowDuplicateVertices: true,
    triangleBudget: asset.intrinsicScan.certificate.triangleBudget,
    memoryBudgetBytes: 96 * 1024 * 1024,
    checkSelfIntersections: false,
  });
}

export function createGlbArtifact(asset: ContentAsset, options: GlbExportOptions = {}): GlbArtifact {
  const lodLevel = options.lodLevel ?? 0;
  const triangleRatio = Math.max(0.02, Math.min(1, options.triangleRatio ?? 1));
  const sourceGeometry = buildGeometry(asset.parts, { detailScale: Math.sqrt(triangleRatio) });
  const geometry = toGltfGeometry(sourceGeometry);
  if (!geometry.positions.length || !geometry.indices.length) {
    throw new Error(`ContentEngin cannot export ${asset.id}: no mesh geometry was generated.`);
  }

  const materialIndexById = new Map(asset.materials.map((material, index) => [material.id, index]));
  const groupedIndices = new Map<number, number[]>();
  for (let offset = 0; offset < geometry.indices.length; offset += 3) {
    const first = geometry.indices[offset]!;
    const materialId = geometry.materialIds[first] ?? asset.materials[0]?.id;
    const materialIndex = materialIndexById.get(materialId ?? '') ?? 0;
    const group = groupedIndices.get(materialIndex) ?? [];
    group.push(geometry.indices[offset]!, geometry.indices[offset + 1]!, geometry.indices[offset + 2]!);
    groupedIndices.set(materialIndex, group);
  }
  const orderedGroups = [...groupedIndices.entries()];
  const exportedIndices = orderedGroups.flatMap(([, indices]) => indices);
  const exportScan = scanExportedGeometry(asset, geometry, exportedIndices);
  const scanMetadata = createIntrinsicAssetScanMetadata(exportScan);

  const positionBuffer = pad4Buffer(Buffer.from(new Float32Array(geometry.positions).buffer));
  const normalBuffer = pad4Buffer(Buffer.from(new Float32Array(geometry.normals).buffer));
  const texcoordBuffer = pad4Buffer(Buffer.from(new Float32Array(geometry.texcoords).buffer));
  const tangentBuffer = pad4Buffer(Buffer.from(new Float32Array(geometry.tangents).buffer));
  const useUint32 = geometry.positions.length / 3 > 65_535;
  const indexComponentType = useUint32 ? 5125 : 5123;
  const indexBuffers = orderedGroups.map(([materialIndex, indices]) => ({
    materialIndex,
    indices,
    count: indices.length,
    buffer: pad4Buffer(Buffer.from((useUint32 ? new Uint32Array(indices) : new Uint16Array(indices)).buffer)),
  }));

  const materialImages = asset.materials.map((material) => pad4Buffer(onePixelPng(hexToRgba(material.baseColor))));
  const buffers = [
    positionBuffer, normalBuffer, texcoordBuffer, tangentBuffer,
    ...indexBuffers.map((group) => group.buffer),
    ...materialImages,
  ];
  const indexViewEnd = 4 + indexBuffers.length;
  let offset = 0;
  const bufferViews = buffers.map((buffer, index) => {
    const target = index < 4 ? 34962 : index < indexViewEnd ? 34963 : undefined;
    const view = { buffer: 0, byteOffset: offset, byteLength: buffer.length, ...(target ? { target } : {}) };
    offset += buffer.length;
    return view;
  });
  const binary = Buffer.concat(buffers);
  const bounds = minMax(geometry.positions, 3);
  const imageViewStart = indexViewEnd;

  const materials = asset.materials.map((material: MaterialDef, index) => ({
    name: material.name,
    pbrMetallicRoughness: {
      baseColorFactor: [1, 1, 1, material.opacity],
      baseColorTexture: { index },
      metallicFactor: material.metallic,
      roughnessFactor: material.roughness,
    },
    alphaMode: material.opacity < 1 ? 'BLEND' : 'OPAQUE',
    extras: { contentenginMaterialId: material.id, shaderId: material.shaderId, proceduralTextureSource: 'embedded-1x1-png' },
  }));

  const accessors = [
    { bufferView: 0, byteOffset: 0, componentType: 5126, count: geometry.positions.length / 3, type: 'VEC3', min: bounds.min, max: bounds.max },
    { bufferView: 1, byteOffset: 0, componentType: 5126, count: geometry.normals.length / 3, type: 'VEC3' },
    { bufferView: 2, byteOffset: 0, componentType: 5126, count: geometry.texcoords.length / 2, type: 'VEC2' },
    { bufferView: 3, byteOffset: 0, componentType: 5126, count: geometry.tangents.length / 4, type: 'VEC4' },
    ...indexBuffers.map((group, index) => ({ bufferView: index + 4, byteOffset: 0, componentType: indexComponentType, count: group.count, type: 'SCALAR' })),
  ];

  const primitives = indexBuffers.map((group, index) => ({
    attributes: { POSITION: 0, NORMAL: 1, TEXCOORD_0: 2, TANGENT: 3 },
    indices: index + 4,
    material: group.materialIndex,
    mode: 4,
    extras: { contentenginMaterialId: asset.materials[group.materialIndex]?.id ?? 'unknown' },
  }));
  const exportedSkeleton = gltfSkeletonMetadata(asset);

  const gltf = {
    asset: { version: '2.0', generator: `ContentEngin ${asset.contentenginVersion}` },
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{
      name: `${asset.id}_LOD${lodLevel}`,
      mesh: 0,
      extras: {
        contentenginAssetId: asset.id,
        lodLevel,
        similaritySignature: scanMetadata.similaritySignature,
        gameReadyCertificate: scanMetadata.certificate,
        coordinateSystem: { units: 'meters', upAxis: 'Y', forwardAxis: '-Z', handedness: 'right' },
        pivot: [0, 0, 0],
      },
    }],
    meshes: [{
      name: `${asset.id}_mesh_LOD${lodLevel}`,
      primitives,
      extras: {
        contentengin: {
          recipe: asset.recipe,
          parts: asset.parts,
          collision: asset.collision,
          lods: asset.lods,
          validation: asset.validation,
          intrinsicScan: scanMetadata,
          materialGroups: usedMaterialIds(asset),
        },
      },
    }],
    materials,
    samplers: [{ magFilter: 9729, minFilter: 9987, wrapS: 10497, wrapT: 10497 }],
    images: materialImages.map((_, index) => ({ bufferView: imageViewStart + index, mimeType: 'image/png', name: `${asset.materials[index]?.id ?? `material-${index}`}-base-color` })),
    textures: materialImages.map((_, index) => ({ sampler: 0, source: index })),
    buffers: [{ byteLength: binary.length }],
    bufferViews,
    accessors,
    extras: {
      contentenginVersion: asset.contentenginVersion,
      gameReady: asset.validation.gameReady && scanMetadata.gameReady,
      similaritySignature: scanMetadata.similaritySignature,
      gameReadyCertificate: scanMetadata.certificate,
      intrinsicFamilyEnergy: scanMetadata.familyEnergy,
      canonicalIntrinsicFamilyEnergy: scanMetadata.canonicalFamilyEnergy,
      canonicalSimilaritySignature: scanMetadata.canonicalSimilaritySignature,
      orientedSimilaritySignature: scanMetadata.orientedSimilaritySignature,
      geometryDigest: scanMetadata.geometryDigest,
      scanDigest: scanMetadata.scanDigest,
      lodLevel,
      sourceImagesRetained: false,
      persistedInDatabase: false,
      coordinateSystem: { units: 'meters', upAxis: 'Y', forwardAxis: '-Z', handedness: 'right' },
      pivot: [0, 0, 0],
      rigging: asset.skeleton
        ? { status: 'metadata-only', skeleton: exportedSkeleton, animations: asset.animations }
        : { status: 'none' },
    },
  };

  const json = pad4Buffer(Buffer.from(JSON.stringify(gltf)), 0x20);
  const bin = pad4Buffer(binary);
  const total = 12 + 8 + json.length + 8 + bin.length;
  const output = Buffer.alloc(total);
  output.writeUInt32LE(0x46546c67, 0);
  output.writeUInt32LE(2, 4);
  output.writeUInt32LE(total, 8);
  output.writeUInt32LE(json.length, 12);
  output.write('JSON', 16);
  json.copy(output, 20);
  const binHeader = 20 + json.length;
  output.writeUInt32LE(bin.length, binHeader);
  output.write('BIN\0', binHeader + 4);
  bin.copy(output, binHeader + 8);
  return { buffer: output, scan: exportScan, lodLevel };
}

export function createGlbBuffer(asset: ContentAsset, options: GlbExportOptions = {}): Buffer {
  return createGlbArtifact(asset, options).buffer;
}

export interface GlbInspection {
  valid: boolean;
  meshPrimitiveCount: number;
  vertexCount: number;
  texcoordCount: number;
  tangentCount: number;
  indexCount: number;
  texcoordFinite: boolean;
  tangentFinite: boolean;
  tangentUnitRatio: number;
  degenerateUvTriangles: number;
  embeddedTextureCount: number;
  textureMaxDimension: number;
  textureMimeTypes: string[];
  coordinateConventionValid: boolean;
  riggingStatus: 'none' | 'metadata-only' | 'skinned';
  primitiveMaterialIndexes: number[];
  primitiveMaterialIds: string[];
  similaritySignature?: string;
  canonicalSimilaritySignature?: string;
  orientedSimilaritySignature?: string;
  geometryDigest?: string;
  computedGeometryDigest?: string;
  geometryDigestVerified: boolean;
  scanDigest?: string;
  lodLevel?: number;
  gameReadyCertificate?: ContentAsset['intrinsicScan']['certificate'];
  errors: string[];
}

interface GltfAccessor {
  bufferView?: number;
  byteOffset?: number;
  componentType?: number;
  count?: number;
  type?: string;
}

function accessorComponents(type: string | undefined): number {
  if (type === 'VEC2') return 2;
  if (type === 'VEC3') return 3;
  if (type === 'VEC4') return 4;
  return 1;
}

function readFloatAccessor(gltf: any, binary: Buffer, accessorIndex: number | undefined): number[] {
  if (accessorIndex === undefined) return [];
  const accessor = gltf.accessors?.[accessorIndex] as GltfAccessor | undefined;
  const view = gltf.bufferViews?.[accessor?.bufferView ?? -1];
  if (!accessor || !view || accessor.componentType !== 5126) return [];
  const components = accessorComponents(accessor.type);
  const count = accessor.count ?? 0;
  const start = (view.byteOffset ?? 0) + (accessor.byteOffset ?? 0);
  const stride = view.byteStride ?? components * 4;
  const values: number[] = [];
  for (let index = 0; index < count; index += 1) {
    const base = start + index * stride;
    for (let component = 0; component < components; component += 1) values.push(binary.readFloatLE(base + component * 4));
  }
  return values;
}

function readIndexAccessor(gltf: any, binary: Buffer, accessorIndex: number | undefined): number[] {
  if (accessorIndex === undefined) return [];
  const accessor = gltf.accessors?.[accessorIndex] as GltfAccessor | undefined;
  const view = gltf.bufferViews?.[accessor?.bufferView ?? -1];
  if (!accessor || !view) return [];
  const count = accessor.count ?? 0;
  const start = (view.byteOffset ?? 0) + (accessor.byteOffset ?? 0);
  const bytes = accessor.componentType === 5125 ? 4 : accessor.componentType === 5123 ? 2 : 0;
  if (!bytes) return [];
  const stride = view.byteStride ?? bytes;
  const values: number[] = [];
  for (let index = 0; index < count; index += 1) {
    const position = start + index * stride;
    values.push(bytes === 4 ? binary.readUInt32LE(position) : binary.readUInt16LE(position));
  }
  return values;
}

export function inspectGlb(buffer: Buffer): GlbInspection {
  const errors: string[] = [];
  if (buffer.length < 28) throw new Error('GLB is too small to contain required chunks.');
  if (buffer.readUInt32LE(0) !== 0x46546c67) errors.push('Missing GLB magic.');
  if (buffer.readUInt32LE(4) !== 2) errors.push('Unsupported GLB version.');
  const jsonLength = buffer.readUInt32LE(12);
  const jsonType = buffer.toString('utf8', 16, 20);
  if (jsonType !== 'JSON') errors.push('Missing JSON chunk.');
  const gltf = JSON.parse(buffer.toString('utf8', 20, 20 + jsonLength).trim());
  const binaryHeader = 20 + jsonLength;
  const binaryLength = buffer.readUInt32LE(binaryHeader);
  const binaryType = buffer.toString('utf8', binaryHeader + 4, binaryHeader + 8);
  if (binaryType !== 'BIN\0') errors.push('Missing binary chunk.');
  const binary = buffer.subarray(binaryHeader + 8, binaryHeader + 8 + binaryLength);

  const primitives = gltf.meshes?.[0]?.primitives ?? [];
  const positionAccessorIndex = primitives[0]?.attributes?.POSITION as number | undefined;
  const normalAccessorIndex = primitives[0]?.attributes?.NORMAL as number | undefined;
  const texcoordAccessorIndex = primitives[0]?.attributes?.TEXCOORD_0 as number | undefined;
  const tangentAccessorIndex = primitives[0]?.attributes?.TANGENT as number | undefined;
  const positionAccessor = gltf.accessors?.[positionAccessorIndex ?? -1];
  const normalAccessor = gltf.accessors?.[normalAccessorIndex ?? -1];
  const texcoordAccessor = gltf.accessors?.[texcoordAccessorIndex ?? -1];
  const tangentAccessor = gltf.accessors?.[tangentAccessorIndex ?? -1];
  const primitiveMaterialIndexes = primitives.map((primitive: { material?: number }) => primitive.material).filter((material: unknown): material is number => typeof material === 'number');
  const primitiveMaterialIds = primitiveMaterialIndexes.map((index: number) => gltf.materials?.[index]?.extras?.contentenginMaterialId ?? gltf.materials?.[index]?.name ?? String(index));
  const indices = primitives.flatMap((primitive: { indices?: number }) => readIndexAccessor(gltf, binary, primitive.indices));
  const positions = readFloatAccessor(gltf, binary, positionAccessorIndex);
  const texcoords = readFloatAccessor(gltf, binary, texcoordAccessorIndex);
  const tangents = readFloatAccessor(gltf, binary, tangentAccessorIndex);
  const texcoordFinite = texcoords.every(Number.isFinite);
  const tangentFinite = tangents.every(Number.isFinite);
  const tangentCount = tangents.length / 4;
  const tangentUnitCount = Array.from({ length: tangentCount }, (_, index) => {
    const x = tangents[index * 4] ?? 0;
    const y = tangents[index * 4 + 1] ?? 0;
    const z = tangents[index * 4 + 2] ?? 0;
    const w = tangents[index * 4 + 3] ?? 0;
    const magnitude = Math.hypot(x, y, z);
    return magnitude >= 0.98 && magnitude <= 1.02 && Math.abs(Math.abs(w) - 1) <= 0.001;
  }).filter(Boolean).length;
  const tangentUnitRatio = tangentCount ? tangentUnitCount / tangentCount : 0;
  let degenerateUvTriangles = 0;
  for (let offset = 0; offset + 2 < indices.length; offset += 3) {
    const a = indices[offset]! * 2;
    const b = indices[offset + 1]! * 2;
    const c = indices[offset + 2]! * 2;
    const area2 = (texcoords[b]! - texcoords[a]!) * (texcoords[c + 1]! - texcoords[a + 1]!)
      - (texcoords[b + 1]! - texcoords[a + 1]!) * (texcoords[c]! - texcoords[a]!);
    if (!Number.isFinite(area2) || Math.abs(area2) <= 1e-10) degenerateUvTriangles += 1;
  }
  const textureMimeTypes = (gltf.images ?? []).map((image: { mimeType?: string }) => image.mimeType ?? '');
  let embeddedTextureCount = 0;
  let textureMaxDimension = 0;
  for (const image of gltf.images ?? []) {
    const view = gltf.bufferViews?.[image.bufferView ?? -1];
    if (!view || image.mimeType !== 'image/png') continue;
    const start = view.byteOffset ?? 0;
    if (binary.length < start + 24) continue;
    const signature = binary.subarray(start, start + 8).toString('hex');
    if (signature !== '89504e470d0a1a0a') continue;
    embeddedTextureCount += 1;
    textureMaxDimension = Math.max(
      textureMaxDimension,
      binary.readUInt32BE(start + 16),
      binary.readUInt32BE(start + 20),
    );
  }
  const coordinateSystem = gltf.extras?.coordinateSystem;
  const coordinateConventionValid = coordinateSystem?.units === 'meters'
    && coordinateSystem?.upAxis === 'Y'
    && coordinateSystem?.forwardAxis === '-Z'
    && coordinateSystem?.handedness === 'right';
  const riggingStatus = gltf.extras?.rigging?.status === 'skinned'
    ? 'skinned'
    : gltf.extras?.rigging?.status === 'metadata-only'
      ? 'metadata-only'
      : 'none';
  const vertices = Array.from({ length: positions.length / 3 }, (_, index) => ({
    x: positions[index * 3]!,
    y: positions[index * 3 + 1]!,
    z: positions[index * 3 + 2]!,
  }));
  const certificate = gltf.extras?.gameReadyCertificate as ContentAsset['intrinsicScan']['certificate'] | undefined;
  const computedGeometryDigest = positions.length && indices.length
    ? computeMeshGeometryDigest({ vertices, indices })
    : undefined;
  const geometryDigestVerified = Boolean(certificate && computedGeometryDigest === certificate.geometryDigest);

  if (!primitives.length) errors.push('No mesh primitive found.');
  if (!positionAccessor?.count) errors.push('No POSITION accessor vertices found.');
  if (!normalAccessor?.count || normalAccessor.count !== positionAccessor?.count) errors.push('NORMAL accessor is missing or does not match POSITION count.');
  if (!texcoordAccessor?.count || texcoordAccessor.count !== positionAccessor?.count) errors.push('TEXCOORD_0 accessor is missing or does not match POSITION count.');
  if (!tangentAccessor?.count || tangentAccessor.count !== positionAccessor?.count) errors.push('TANGENT accessor is missing or does not match POSITION count.');
  if (!texcoordFinite) errors.push('TEXCOORD_0 contains non-finite values.');
  if (!tangentFinite) errors.push('TANGENT contains non-finite values.');
  if (tangentUnitRatio < 0.999) errors.push('TANGENT vectors are not consistently normalized with a valid handedness sign.');
  if (degenerateUvTriangles > 0) errors.push(`TEXCOORD_0 contains ${degenerateUvTriangles} triangles with zero UV area.`);
  if (embeddedTextureCount !== (gltf.materials?.length ?? 0)) errors.push('Every exported material must have one embedded PNG texture.');
  if (!coordinateConventionValid) errors.push('GLB coordinate convention metadata is missing or invalid.');
  if (!indices.length) errors.push('No index accessors found.');
  if (primitiveMaterialIndexes.length !== primitives.length) errors.push('Every mesh primitive must have a material index.');
  if (!certificate || !verifyGameReadyCertificate(certificate)) errors.push('Embedded ContentEngin game-ready certificate is missing or invalid.');
  if (certificate && gltf.extras?.canonicalSimilaritySignature !== certificate.canonicalSignature) errors.push('Embedded canonical signature does not match the certificate.');
  if (certificate && gltf.extras?.orientedSimilaritySignature !== certificate.orientedSignature) errors.push('Embedded oriented signature does not match the certificate.');
  if (certificate && gltf.extras?.geometryDigest !== certificate.geometryDigest) errors.push('Embedded geometry digest does not match the certificate.');
  if (certificate && gltf.extras?.scanDigest !== certificate.scanDigest) errors.push('Embedded scan digest does not match the certificate.');
  if (certificate && !geometryDigestVerified) errors.push('Embedded geometry bytes do not match the certificate geometry digest.');

  return {
    valid: errors.length === 0,
    meshPrimitiveCount: primitives.length,
    vertexCount: positionAccessor?.count ?? 0,
    texcoordCount: texcoordAccessor?.count ?? 0,
    tangentCount: tangentAccessor?.count ?? 0,
    indexCount: indices.length,
    texcoordFinite,
    tangentFinite,
    tangentUnitRatio,
    degenerateUvTriangles,
    embeddedTextureCount,
    textureMaxDimension,
    textureMimeTypes,
    coordinateConventionValid,
    riggingStatus,
    primitiveMaterialIndexes,
    primitiveMaterialIds,
    similaritySignature: gltf.extras?.similaritySignature,
    canonicalSimilaritySignature: gltf.extras?.canonicalSimilaritySignature,
    orientedSimilaritySignature: gltf.extras?.orientedSimilaritySignature,
    geometryDigest: gltf.extras?.geometryDigest,
    computedGeometryDigest,
    geometryDigestVerified,
    scanDigest: gltf.extras?.scanDigest,
    lodLevel: gltf.extras?.lodLevel,
    gameReadyCertificate: certificate,
    errors,
  };
}

export function expectedMaterialIdsForAsset(asset: Pick<ContentAsset, 'materials' | 'parts'>): string[] {
  return usedMaterialIds(asset);
}
