import type { Mesh, Vec3 } from '@/engins/isosurfaceDualContouring';
import { repairMeshDetailed, type ColoredMesh, type RepairReport } from '@/engins/isosurfaceAssetPipeline';
import {
  scanMeshForGameReadiness,
  type GameReadyAssetCertificate,
  type IntrinsicAssetScanOptions,
  type IntrinsicAssetScanReport,
} from './intrinsicAssetScanner';

export interface GameReadyCollisionProxy {
  readonly kind: 'box-and-sphere';
  readonly center: Vec3;
  readonly dimensions: Vec3;
  readonly radius: number;
}

export interface GameReadyLodSummary {
  readonly level: 0 | 1 | 2;
  readonly vertices: number;
  readonly triangles: number;
  readonly score: number;
  readonly signature: string;
}

export interface GameReadyBuildSummary {
  readonly repairStrategy: 'preserve-seams' | 'weld-compatible-seams';
  readonly certificate: GameReadyAssetCertificate;
  readonly lods: readonly GameReadyLodSummary[];
  readonly collision: GameReadyCollisionProxy;
  readonly repairReport: RepairReport;
}

export interface PreparedGameReadyMesh {
  readonly mesh: Mesh;
  readonly scan: IntrinsicAssetScanReport;
  readonly lodMeshes: readonly Mesh[];
  readonly summary: GameReadyBuildSummary;
}

export interface PrepareGameReadyMeshOptions extends IntrinsicAssetScanOptions {
  readonly targetTriangleBudget?: number;
}

function bounds(mesh: Mesh): { min: Vec3; max: Vec3; center: Vec3; dimensions: Vec3; radius: number } {
  if (!mesh.vertices.length) {
    const zero = { x: 0, y: 0, z: 0 };
    return { min: zero, max: zero, center: zero, dimensions: zero, radius: 0 };
  }
  let min = { x: Infinity, y: Infinity, z: Infinity };
  let max = { x: -Infinity, y: -Infinity, z: -Infinity };
  for (const vertex of mesh.vertices) {
    min = { x: Math.min(min.x, vertex.x), y: Math.min(min.y, vertex.y), z: Math.min(min.z, vertex.z) };
    max = { x: Math.max(max.x, vertex.x), y: Math.max(max.y, vertex.y), z: Math.max(max.z, vertex.z) };
  }
  const center = { x: (min.x + max.x) / 2, y: (min.y + max.y) / 2, z: (min.z + max.z) / 2 };
  const dimensions = { x: max.x - min.x, y: max.y - min.y, z: max.z - min.z };
  const radius = Math.hypot(dimensions.x, dimensions.y, dimensions.z) / 2;
  return { min, max, center, dimensions, radius };
}

function clusterMesh(mesh: Mesh, targetRatio: number): Mesh {
  const ratio = Math.max(0.05, Math.min(1, targetRatio));
  if (ratio >= 0.999 || mesh.vertices.length < 8) return mesh;
  const meshBounds = bounds(mesh);
  const targetVertices = Math.max(4, Math.floor(mesh.vertices.length * ratio));
  const gridResolution = Math.max(2, Math.round(Math.cbrt(targetVertices)));
  const size = {
    x: Math.max(meshBounds.dimensions.x, 1e-9),
    y: Math.max(meshBounds.dimensions.y, 1e-9),
    z: Math.max(meshBounds.dimensions.z, 1e-9),
  };
  const cells = new Map<string, { sum: Vec3; count: number; colors: { r: number; g: number; b: number }[] }>();
  const source = mesh as ColoredMesh;
  const vertexCellKeys: string[] = [];

  mesh.vertices.forEach((vertex, index) => {
    const x = Math.min(gridResolution - 1, Math.max(0, Math.floor(((vertex.x - meshBounds.min.x) / size.x) * gridResolution)));
    const y = Math.min(gridResolution - 1, Math.max(0, Math.floor(((vertex.y - meshBounds.min.y) / size.y) * gridResolution)));
    const z = Math.min(gridResolution - 1, Math.max(0, Math.floor(((vertex.z - meshBounds.min.z) / size.z) * gridResolution)));
    const key = `${x}:${y}:${z}`;
    vertexCellKeys[index] = key;
    const cell = cells.get(key) ?? { sum: { x: 0, y: 0, z: 0 }, count: 0, colors: [] };
    cell.sum = { x: cell.sum.x + vertex.x, y: cell.sum.y + vertex.y, z: cell.sum.z + vertex.z };
    cell.count += 1;
    if (source.vertexColors?.[index]) cell.colors.push(source.vertexColors[index]!);
    cells.set(key, cell);
  });

  const keyToVertex = new Map<string, number>();
  const vertices: Vec3[] = [];
  const colors: { r: number; g: number; b: number }[] = [];
  for (const [key, cell] of cells) {
    keyToVertex.set(key, vertices.length);
    vertices.push({ x: cell.sum.x / cell.count, y: cell.sum.y / cell.count, z: cell.sum.z / cell.count });
    if (cell.colors.length) {
      const sum = cell.colors.reduce((acc, color) => ({ r: acc.r + color.r, g: acc.g + color.g, b: acc.b + color.b }), { r: 0, g: 0, b: 0 });
      colors.push({ r: sum.r / cell.colors.length, g: sum.g / cell.colors.length, b: sum.b / cell.colors.length });
    }
  }

  const indices: number[] = [];
  const triangles = new Set<string>();
  for (let offset = 0; offset + 2 < mesh.indices.length; offset += 3) {
    const a = keyToVertex.get(vertexCellKeys[mesh.indices[offset]!]!);
    const b = keyToVertex.get(vertexCellKeys[mesh.indices[offset + 1]!]!);
    const c = keyToVertex.get(vertexCellKeys[mesh.indices[offset + 2]!]!);
    if (a === undefined || b === undefined || c === undefined || a === b || b === c || c === a) continue;
    const sorted = [a, b, c].sort((left, right) => left - right);
    const key = sorted.join(':');
    if (triangles.has(key)) continue;
    triangles.add(key);
    indices.push(a, b, c);
  }

  const clustered: ColoredMesh = {
    vertices,
    indices,
    vertexColors: colors.length === vertices.length ? colors : undefined,
    palette: source.palette?.map((color) => ({ ...color })),
  };
  return repairMeshDetailed(clustered).mesh;
}

function fitTriangleBudget(mesh: Mesh, budget: number): Mesh {
  let current = repairMeshDetailed(mesh).mesh;
  for (let pass = 0; pass < 4 && Math.floor(current.indices.length / 3) > budget; pass += 1) {
    const ratio = Math.max(0.08, budget / Math.max(1, current.indices.length / 3) * 0.92);
    const next = clusterMesh(current, ratio);
    if (next.indices.length >= current.indices.length) break;
    current = next;
  }
  return current;
}

export function prepareGameReadyMesh(mesh: Mesh, options: PrepareGameReadyMeshOptions = {}): PreparedGameReadyMesh {
  const targetTriangleBudget = Math.max(16, Math.floor(options.targetTriangleBudget ?? options.triangleBudget ?? 50_000));
  const scanOptions: IntrinsicAssetScanOptions = { ...options, triangleBudget: targetTriangleBudget };
  const preserveSeams = repairMeshDetailed(mesh, { weldVertices: false });
  const weldCompatibleSeams = repairMeshDetailed(mesh, { weldVertices: true });
  const variants = [
    {
      strategy: 'preserve-seams' as const,
      repair: preserveSeams,
      scan: scanMeshForGameReadiness(preserveSeams.mesh, scanOptions),
    },
    {
      strategy: 'weld-compatible-seams' as const,
      repair: weldCompatibleSeams,
      scan: scanMeshForGameReadiness(weldCompatibleSeams.mesh, scanOptions),
    },
  ].sort((left, right) => (
    left.scan.criticalIssues.length - right.scan.criticalIssues.length
    || right.scan.score - left.scan.score
    || left.scan.topology.estimatedBytes - right.scan.topology.estimatedBytes
  ));
  const selected = variants[0]!;
  const repaired = selected.repair;
  const lod0 = fitTriangleBudget(repaired.mesh, targetTriangleBudget);
  const lod1 = clusterMesh(lod0, 0.55);
  const lod2 = clusterMesh(lod0, 0.25);
  const scans = [lod0, lod1, lod2].map((lod) => scanMeshForGameReadiness(lod, scanOptions));
  const meshBounds = bounds(lod0);
  const collision: GameReadyCollisionProxy = {
    kind: 'box-and-sphere',
    center: meshBounds.center,
    dimensions: meshBounds.dimensions,
    radius: meshBounds.radius,
  };
  const lods = scans.map((scan, index): GameReadyLodSummary => ({
    level: index as 0 | 1 | 2,
    vertices: scan.topology.vertices,
    triangles: scan.topology.triangles,
    score: scan.score,
    signature: scan.similaritySignature,
  }));
  return {
    mesh: lod0,
    scan: scans[0]!,
    lodMeshes: [lod0, lod1, lod2],
    summary: {
      repairStrategy: selected.strategy,
      certificate: scans[0]!.certificate,
      lods,
      collision,
      repairReport: repaired.report,
    },
  };
}
