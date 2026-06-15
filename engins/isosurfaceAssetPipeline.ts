import { createSphereSDF, meshToSnapshot, runDualContouring, validateMesh, type Mesh, type MeshDiagnostics, type Vec3 } from '@/engins/isosurfaceDualContouring';
export { meshToSnapshot, validateMesh } from '@/engins/isosurfaceDualContouring';
import type { DomainObject } from '@/engins/contentengin/assetTypes';

export type AssetProcessingStatus = 'idle' | 'uploaded' | 'processing' | 'generated' | 'editing' | 'ready-to-download' | 'failed';
export type MeshQualityLabel = 'Clean' | 'Auto-fix applied' | 'Needs Repair' | 'Export Blocked';
export type SculptTool = 'push' | 'pull' | 'smooth' | 'inflate' | 'carve' | 'flatten';
export type ExportFormat = 'obj' | 'glb';

export interface SourceImageAsset { name: string; url: string; width: number; height: number; mask: number[]; }
export interface CameraState { yaw: number; pitch: number; zoom: number; panX: number; panY: number; target: Vec3; }
export interface BrushState { tool: SculptTool; radius: number; strength: number; falloff: number; symmetry: boolean; smoothing: number; }
export interface EditableMeshState { mesh: Mesh; diagnostics: MeshDiagnostics; quality: MeshQualityLabel; repaired: boolean; }
export interface ImplicitAssetWorkspaceData { sourceImage: SourceImageAsset | null; mesh: EditableMeshState | null; previewMesh: ReturnType<typeof meshToSnapshot> | null; editHistory: Mesh[]; redoStack: Mesh[]; exportFormats: ExportFormat[]; activeTool: SculptTool; cameraState: CameraState; brushState: BrushState; processingStatus: AssetProcessingStatus; visibleMessage: string; }
export type ImplicitAssetWorkspaceObject = DomainObject<'contentengin.implicit-asset-workspace', ImplicitAssetWorkspaceData>;

export const DEFAULT_CAMERA_STATE: CameraState = { yaw: -0.65, pitch: 0.55, zoom: 1.25, panX: 0, panY: 0, target: { x: 0, y: 0, z: 0 } };
export const DEFAULT_BRUSH_STATE: BrushState = { tool: 'push', radius: 0.22, strength: 0.08, falloff: 0.6, symmetry: false, smoothing: 0.35 };

export function createImplicitAssetWorkspaceObject(ownerId = 'local-user', runtimeId = 'contentengin-runtime'): ImplicitAssetWorkspaceObject {
  const now = new Date().toISOString();
  return { id: `implicit-workspace-${Date.now()}`, type: 'contentengin.implicit-asset-workspace', ownerId, runtimeId, visibility: 'local', createdAt: now, updatedAt: now, version: 1, data: { sourceImage: null, mesh: null, previewMesh: null, editHistory: [], redoStack: [], exportFormats: ['obj', 'glb'], activeTool: 'push', cameraState: DEFAULT_CAMERA_STATE, brushState: DEFAULT_BRUSH_STATE, processingStatus: 'idle', visibleMessage: 'Upload an image to make it real.' } };
}

export function analyzeImageMask(image: ImageData, name: string, url: string): SourceImageAsset {
  const maxSide = 34;
  const scale = Math.max(image.width, image.height) / maxSide;
  const width = Math.max(8, Math.round(image.width / scale));
  const height = Math.max(8, Math.round(image.height / scale));
  const mask: number[] = [];
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const sx = Math.min(image.width - 1, Math.floor((x / width) * image.width));
    const sy = Math.min(image.height - 1, Math.floor((y / height) * image.height));
    const i = (sy * image.width + sx) * 4;
    const alpha = image.data[i + 3] / 255;
    const luma = (image.data[i] * 0.2126 + image.data[i + 1] * 0.7152 + image.data[i + 2] * 0.0722) / 255;
    mask.push(Math.max(alpha * (1 - luma * 0.35), alpha > 0.05 ? 0.08 : 0));
  }
  return { name, url, width, height, mask };
}

export function processImageToEditableMesh(source: SourceImageAsset): EditableMeshState {
  const mesh = source.mask.some((v) => v > 0.12) ? buildInflatedReliefMesh(source) : runDualContouring(createSphereSDF(0.65), { resolution: 16 });
  const repaired = repairMesh(mesh);
  const diagnostics = validateMesh(repaired);
  return { mesh: repaired, diagnostics, quality: qualityFromDiagnostics(diagnostics), repaired: repaired !== mesh || diagnostics.degenerateTriangles > 0 };
}

export function buildInflatedReliefMesh(source: SourceImageAsset): Mesh {
  const vertices: Vec3[] = [];
  const indices: number[] = [];
  const w = source.width;
  const h = source.height;
  const at = (x: number, y: number) => source.mask[Math.min(h - 1, Math.max(0, y)) * w + Math.min(w - 1, Math.max(0, x))] ?? 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const m = at(x, y);
    const nx = (x / (w - 1) - 0.5) * 1.8;
    const ny = -(y / (h - 1) - 0.5) * 1.8;
    const edge = Math.min(x, y, w - 1 - x, h - 1 - y) / Math.max(1, Math.min(w, h) * 0.25);
    const dome = Math.sin(Math.min(1, edge) * Math.PI * 0.5) * m;
    vertices.push({ x: nx, y: ny, z: dome * 0.55 });
  }
  for (let y = 0; y < h - 1; y++) for (let x = 0; x < w - 1; x++) {
    const m = (at(x, y) + at(x + 1, y) + at(x, y + 1) + at(x + 1, y + 1)) * 0.25;
    if (m < 0.08) continue;
    const a = y * w + x; const b = a + 1; const c = a + w + 1; const d = a + w;
    indices.push(a, b, c, a, c, d);
  }
  return { vertices, indices };
}

export function repairMesh(mesh: Mesh): Mesh {
  const vertices = mesh.vertices.map((v) => ({ x: Number.isFinite(v.x) ? v.x : 0, y: Number.isFinite(v.y) ? v.y : 0, z: Number.isFinite(v.z) ? v.z : 0 }));
  const indices: number[] = [];
  for (let i = 0; i + 2 < mesh.indices.length; i += 3) {
    const a = mesh.indices[i]; const b = mesh.indices[i + 1]; const c = mesh.indices[i + 2];
    if (a === b || b === c || c === a) continue;
    if (a < 0 || b < 0 || c < 0 || a >= vertices.length || b >= vertices.length || c >= vertices.length) continue;
    indices.push(a, b, c);
  }
  return { vertices, indices };
}

export function qualityFromDiagnostics(d: MeshDiagnostics): MeshQualityLabel {
  if (d.triangles === 0 || d.degenerateTriangles > 0 || d.nonManifoldEdges > 0) return 'Export Blocked';
  if (d.boundaryEdges > 0) return 'Auto-fix applied';
  return 'Clean';
}

export function sculptMesh(mesh: Mesh, point: Vec3, brush: BrushState): Mesh {
  const vertices = mesh.vertices.map((v) => ({ ...v }));
  for (const v of vertices) {
    const dx = v.x - point.x; const dy = v.y - point.y; const dz = v.z - point.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (dist > brush.radius) continue;
    const t = Math.pow(1 - dist / brush.radius, Math.max(0.1, brush.falloff));
    const amount = brush.strength * t;
    if (brush.tool === 'push') v.z += amount;
    if (brush.tool === 'pull' || brush.tool === 'carve') v.z -= amount;
    if (brush.tool === 'inflate') { v.x += Math.sign(v.x) * amount * 0.2; v.y += Math.sign(v.y) * amount * 0.2; v.z += amount; }
    if (brush.tool === 'flatten') v.z += (point.z - v.z) * amount * 3;
    if (brush.tool === 'smooth') v.z += (point.z - v.z) * amount;
  }
  return { vertices, indices: [...mesh.indices] };
}

export function exportOBJ(mesh: Mesh): string {
  return `${mesh.vertices.map((v) => `v ${v.x} ${v.y} ${v.z}`).join('\n')}\n${mesh.indices.reduce<string[]>((out, _, i) => { if (i % 3 === 0) out.push(`f ${mesh.indices[i] + 1} ${mesh.indices[i + 1] + 1} ${mesh.indices[i + 2] + 1}`); return out; }, []).join('\n')}\n`;
}

export function exportGLB(mesh: Mesh): Blob {
  const positions = new Float32Array(mesh.vertices.flatMap((v) => [v.x, v.y, v.z]));
  const indices = new Uint32Array(mesh.indices);
  const posBytes = new Uint8Array(positions.buffer);
  const idxBytes = new Uint8Array(indices.buffer);
  const binLength = pad4(posBytes.byteLength + idxBytes.byteLength);
  const bin = new Uint8Array(binLength);
  bin.set(posBytes, 0); bin.set(idxBytes, posBytes.byteLength);
  const json = { asset: { version: '2.0', generator: 'DREAMengin ContentEngin' }, buffers: [{ byteLength: binLength }], bufferViews: [{ buffer: 0, byteOffset: 0, byteLength: posBytes.byteLength, target: 34962 }, { buffer: 0, byteOffset: posBytes.byteLength, byteLength: idxBytes.byteLength, target: 34963 }], accessors: [{ bufferView: 0, componentType: 5126, count: mesh.vertices.length, type: 'VEC3' }, { bufferView: 1, componentType: 5125, count: mesh.indices.length, type: 'SCALAR' }], meshes: [{ primitives: [{ attributes: { POSITION: 0 }, indices: 1 }] }], nodes: [{ mesh: 0 }], scenes: [{ nodes: [0] }], scene: 0 };
  const jsonBytes = new TextEncoder().encode(JSON.stringify(json));
  const jsonChunk = paddedChunk(jsonBytes, 0x20);
  const total = 12 + 8 + jsonChunk.length + 8 + bin.length;
  const out = new ArrayBuffer(total); const view = new DataView(out); let o = 0;
  view.setUint32(o, 0x46546c67, true); o += 4; view.setUint32(o, 2, true); o += 4; view.setUint32(o, total, true); o += 4;
  view.setUint32(o, jsonChunk.length, true); o += 4; view.setUint32(o, 0x4e4f534a, true); o += 4; new Uint8Array(out, o, jsonChunk.length).set(jsonChunk); o += jsonChunk.length;
  view.setUint32(o, bin.length, true); o += 4; view.setUint32(o, 0x004e4942, true); o += 4; new Uint8Array(out, o, bin.length).set(bin);
  return new Blob([out], { type: 'model/gltf-binary' });
}

function pad4(n: number): number { return (n + 3) & ~3; }
function paddedChunk(bytes: Uint8Array, pad: number): Uint8Array { const out = new Uint8Array(pad4(bytes.length)); out.set(bytes); out.fill(pad, bytes.length); return out; }
