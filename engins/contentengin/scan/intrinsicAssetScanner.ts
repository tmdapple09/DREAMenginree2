import type { Mesh, Vec3 } from '@/engins/isosurfaceDualContouring';
import { computeIndexedGeometryDigest, digestObject } from '@/lib/gameReadyIntegrity';
import type { GameReadyAssetCertificate, GameReadyRepairId } from '@/types/gameReadyAsset';
export type { GameReadyAssetCertificate, GameReadyRepairId } from '@/types/gameReadyAsset';

export const CONTENTENGIN_SCAN_VERSION = '2026.07.20-intrinsic-similarity-v2';

export type IntrinsicScanFamily =
  | 'spatial-shape'
  | 'normal-curvature'
  | 'topology-neighborhood'
  | 'triangle-incidence';

export type CanonicalIntrinsicScanFamily =
  | 'radial-edge-shape'
  | 'metric-curvature'
  | 'topology-neighborhood'
  | 'triangle-incidence';

export interface TesseractSignature {
  readonly cells: readonly number[];
  readonly edgeContrasts: readonly number[];
  readonly faceContrasts: readonly number[];
  readonly sliceCounts: readonly number[];
  readonly sliceContrasts: readonly number[];
  readonly walsh: readonly number[];
  readonly normalizedWalsh: readonly number[];
  readonly energy: number;
}

export interface AssetTopologyMetrics {
  readonly vertices: number;
  readonly triangles: number;
  readonly validTriangles: number;
  readonly invalidTriangles: number;
  readonly degenerateTriangles: number;
  readonly skinnyTriangles: number;
  readonly duplicateFaces: number;
  readonly inconsistentWindingEdges: number;
  readonly selfIntersections: number;
  readonly duplicateVertices: number;
  readonly isolatedVertices: number;
  readonly boundaryEdges: number;
  readonly boundaryLoops: number;
  readonly openBoundaryChains: number;
  readonly nonManifoldEdges: number;
  readonly connectedComponents: number;
  readonly largestComponentVertices: number;
  readonly estimatedBytes: number;
  readonly averageVertexDegree: number;
  readonly maxVertexDegree: number;
  readonly pivotOffsetRatio: number;
  readonly largestDimension: number;
}

export interface AssetRepairStep {
  readonly id: GameReadyRepairId;
  readonly priority: 'critical' | 'high' | 'medium' | 'low';
  readonly reason: string;
  readonly deterministic: true;
}

export interface IntrinsicAssetScanOptions {
  readonly triangleBudget?: number;
  readonly memoryBudgetBytes?: number;
  readonly allowOpenSurface?: boolean;
  readonly allowDisconnectedComponents?: boolean;
  readonly allowDuplicateVertices?: boolean;
  readonly duplicateTolerance?: number;
  readonly requireCenteredPivot?: boolean;
  readonly maxPivotOffsetRatio?: number;
  readonly checkSelfIntersections?: boolean;
}

export interface IntrinsicAssetScanReport {
  readonly scannerVersion: string;
  readonly topology: AssetTopologyMetrics;
  /** Orientation-sensitive 4D fields. */
  readonly families: Readonly<Record<IntrinsicScanFamily, TesseractSignature>>;
  /** Translation, rotation, and uniform-scale-invariant 4D fields. */
  readonly canonicalFamilies: Readonly<Record<CanonicalIntrinsicScanFamily, TesseractSignature>>;
  /** Backward-compatible alias for canonicalSimilarityVector. */
  readonly similarityVector: readonly number[];
  readonly canonicalSimilarityVector: readonly number[];
  readonly orientedSimilarityVector: readonly number[];
  /** Backward-compatible alias for canonicalSimilaritySignature. */
  readonly similaritySignature: string;
  readonly canonicalSimilaritySignature: string;
  readonly orientedSimilaritySignature: string;
  readonly geometryDigest: string;
  readonly scanDigest: string;
  readonly score: number;
  readonly gameReady: boolean;
  readonly criticalIssues: readonly string[];
  readonly warnings: readonly string[];
  readonly repairPlan: readonly AssetRepairStep[];
  readonly vertexHeat: readonly number[];
  readonly certificate: GameReadyAssetCertificate;
}

export interface IntrinsicAssetScanMetadata {
  readonly scannerVersion: string;
  readonly certificate: GameReadyAssetCertificate;
  readonly similaritySignature: string;
  readonly canonicalSimilaritySignature: string;
  readonly orientedSimilaritySignature: string;
  readonly geometryDigest: string;
  readonly scanDigest: string;
  readonly score: number;
  readonly gameReady: boolean;
  readonly topology: AssetTopologyMetrics;
  readonly familyEnergy: Readonly<Record<IntrinsicScanFamily, number>>;
  readonly canonicalFamilyEnergy: Readonly<Record<CanonicalIntrinsicScanFamily, number>>;
  readonly familyWalsh: Readonly<Record<IntrinsicScanFamily, readonly number[]>>;
  readonly canonicalFamilyWalsh: Readonly<Record<CanonicalIntrinsicScanFamily, readonly number[]>>;
  readonly requiredRepairs: readonly AssetRepairStep['id'][];
}

interface TriangleRecord {
  readonly index: number;
  readonly a: number;
  readonly b: number;
  readonly c: number;
  readonly area: number;
  readonly normal: Vec3;
  readonly min: Vec3;
  readonly max: Vec3;
}

interface EdgeRecord {
  useCount: number;
  directionBalance: number;
  readonly vertices: readonly [number, number];
  readonly triangles: number[];
}

const TESSERACT_EDGE_PAIRS = (() => {
  const pairs: Array<readonly [number, number]> = [];
  for (let axis = 0; axis < 4; axis += 1) {
    const bit = 1 << axis;
    for (let cell = 0; cell < 16; cell += 1) {
      if (cell & bit) continue;
      pairs.push([cell, cell | bit]);
    }
  }
  return pairs;
})();

const TESSERACT_FACES = (() => {
  const faces: Array<readonly [number, number, number, number]> = [];
  for (let axisA = 0; axisA < 4; axisA += 1) {
    for (let axisB = axisA + 1; axisB < 4; axisB += 1) {
      const bitA = 1 << axisA;
      const bitB = 1 << axisB;
      for (let base = 0; base < 16; base += 1) {
        if (base & (bitA | bitB)) continue;
        faces.push([base, base | bitA, base | bitB, base | bitA | bitB]);
      }
    }
  }
  return faces;
})();

const finiteVec = (value: Vec3): boolean => Number.isFinite(value.x) && Number.isFinite(value.y) && Number.isFinite(value.z);
const add = (a: Vec3, b: Vec3): Vec3 => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });
const sub = (a: Vec3, b: Vec3): Vec3 => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
const mul = (value: Vec3, scalar: number): Vec3 => ({ x: value.x * scalar, y: value.y * scalar, z: value.z * scalar });
const dot = (a: Vec3, b: Vec3): number => a.x * b.x + a.y * b.y + a.z * b.z;
const cross = (a: Vec3, b: Vec3): Vec3 => ({ x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x });
const length = (value: Vec3): number => Math.hypot(value.x, value.y, value.z);
const normalize = (value: Vec3): Vec3 => { const magnitude = length(value); return magnitude <= 1e-12 ? { x: 0, y: 1, z: 0 } : mul(value, 1 / magnitude); };

function median(values: readonly number[]): number {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle]! : (sorted[middle - 1]! + sorted[middle]!) / 2;
}

function quantileThresholds(values: readonly number[]): readonly [number, number, number] {
  if (!values.length) return [0, 0, 0];
  const sorted = [...values].sort((a, b) => a - b);
  return [
    sorted[Math.floor((sorted.length - 1) * 0.25)] ?? 0,
    sorted[Math.floor((sorted.length - 1) * 0.5)] ?? 0,
    sorted[Math.floor((sorted.length - 1) * 0.75)] ?? 0,
  ];
}

function quantileBucket(value: number, thresholds: readonly [number, number, number]): number {
  if (value <= thresholds[0]) return 0;
  if (value <= thresholds[1]) return 1;
  if (value <= thresholds[2]) return 2;
  return 3;
}

const edgeKey = (a: number, b: number): string => a < b ? `${a}:${b}` : `${b}:${a}`;
const faceKey = (a: number, b: number, c: number): string => [a, b, c].sort((left, right) => left - right).join(':');

function walsh16(values: readonly number[]): number[] {
  const output = Array.from({ length: 16 }, (_, index) => values[index] ?? 0);
  for (let stride = 1; stride < 16; stride *= 2) {
    for (let base = 0; base < 16; base += stride * 2) {
      for (let offset = 0; offset < stride; offset += 1) {
        const a = output[base + offset]!;
        const b = output[base + offset + stride]!;
        output[base + offset] = a + b;
        output[base + offset + stride] = a - b;
      }
    }
  }
  return output;
}

function createTesseractSignature(cellsInput: readonly number[]): TesseractSignature {
  const cells = Array.from({ length: 16 }, (_, index) => cellsInput[index] ?? 0);
  const edgeContrasts = TESSERACT_EDGE_PAIRS.map(([a, b]) => cells[a]! - cells[b]!);
  const faceContrasts = TESSERACT_FACES.map(([c00, c10, c01, c11]) => cells[c00]! - cells[c10]! - cells[c01]! + cells[c11]!);
  const sliceCounts: number[] = [];
  const sliceContrasts: number[] = [];
  for (let axis = 0; axis < 4; axis += 1) {
    const bit = 1 << axis;
    let zero = 0; let one = 0;
    for (let cell = 0; cell < 16; cell += 1) (cell & bit ? one += cells[cell]! : zero += cells[cell]!);
    sliceCounts.push(zero, one);
    sliceContrasts.push(zero - one);
  }
  const walsh = walsh16(cells);
  const dc = Math.max(1, Math.abs(walsh[0] ?? 0));
  const normalizedWalsh = walsh.map((value) => value / dc);
  const energy = [...edgeContrasts, ...faceContrasts, ...sliceContrasts, ...walsh.slice(1)]
    .reduce((sum, value) => sum + value * value, 0) / (dc * dc);
  return { cells, edgeContrasts, faceContrasts, sliceCounts, sliceContrasts, walsh, normalizedWalsh, energy };
}

function normalizedVector<T extends string>(families: Readonly<Record<T, TesseractSignature>>, count: number): number[] {
  return (Object.keys(families) as T[]).flatMap((family) => [
    ...families[family].cells.map((value) => value / Math.max(1, count)),
    ...families[family].normalizedWalsh.slice(1),
  ]);
}

function vectorDigest(values: readonly number[]): string {
  return digestObject(values.map((value) => Math.round((Number.isFinite(value) ? value : 0) * 1_000_000) / 1_000_000));
}

export function computeMeshGeometryDigest(mesh: Mesh): string {
  return computeIndexedGeometryDigest(mesh.vertices, mesh.indices);
}

function componentLabels(adjacency: readonly ReadonlySet<number>[]): { labels: number[]; sizes: number[] } {
  const labels = Array.from({ length: adjacency.length }, () => -1);
  const sizes: number[] = [];
  for (let start = 0; start < adjacency.length; start += 1) {
    if (labels[start] !== -1 || adjacency[start]!.size === 0) continue;
    const id = sizes.length;
    const stack = [start];
    labels[start] = id;
    let size = 0;
    while (stack.length) {
      const vertex = stack.pop()!;
      size += 1;
      for (const next of adjacency[vertex]!) {
        if (labels[next] !== -1) continue;
        labels[next] = id;
        stack.push(next);
      }
    }
    sizes.push(size);
  }
  return { labels, sizes };
}

function boundaryPathCounts(edgeRecords: ReadonlyMap<string, EdgeRecord>): { loops: number; openChains: number; boundaryVertices: Set<number> } {
  const adjacency = new Map<number, Set<number>>();
  for (const edge of edgeRecords.values()) {
    if (edge.useCount !== 1) continue;
    const [a, b] = edge.vertices;
    const aSet = adjacency.get(a) ?? new Set<number>();
    const bSet = adjacency.get(b) ?? new Set<number>();
    aSet.add(b); bSet.add(a); adjacency.set(a, aSet); adjacency.set(b, bSet);
  }
  const unseen = new Set(adjacency.keys());
  let loops = 0; let openChains = 0;
  while (unseen.size) {
    const first = unseen.values().next().value as number;
    const stack = [first]; unseen.delete(first); let closed = true;
    while (stack.length) {
      const vertex = stack.pop()!;
      const neighbors = adjacency.get(vertex) ?? new Set<number>();
      if (neighbors.size !== 2) closed = false;
      for (const neighbor of neighbors) if (unseen.delete(neighbor)) stack.push(neighbor);
    }
    if (closed) loops += 1; else openChains += 1;
  }
  return { loops, openChains, boundaryVertices: new Set(adjacency.keys()) };
}

function aabbOverlap(left: TriangleRecord, right: TriangleRecord): boolean {
  return left.min.x <= right.max.x && left.max.x >= right.min.x
    && left.min.y <= right.max.y && left.max.y >= right.min.y
    && left.min.z <= right.max.z && left.max.z >= right.min.z;
}

function segmentTriangleIntersection(p0: Vec3, p1: Vec3, a: Vec3, b: Vec3, c: Vec3): boolean {
  const direction = sub(p1, p0);
  const edge1 = sub(b, a);
  const edge2 = sub(c, a);
  const p = cross(direction, edge2);
  const determinant = dot(edge1, p);
  if (Math.abs(determinant) < 1e-10) return false;
  const inverse = 1 / determinant;
  const t = sub(p0, a);
  const u = dot(t, p) * inverse;
  if (u < -1e-8 || u > 1 + 1e-8) return false;
  const q = cross(t, edge1);
  const v = dot(direction, q) * inverse;
  if (v < -1e-8 || u + v > 1 + 1e-8) return false;
  const distanceAlong = dot(edge2, q) * inverse;
  return distanceAlong > 1e-8 && distanceAlong < 1 - 1e-8;
}

function project2(value: Vec3, axis: 0 | 1 | 2): readonly [number, number] {
  if (axis === 0) return [value.y, value.z];
  if (axis === 1) return [value.x, value.z];
  return [value.x, value.y];
}

function orient2(a: readonly [number, number], b: readonly [number, number], c: readonly [number, number]): number {
  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
}

function segmentOverlap2(a: readonly [number, number], b: readonly [number, number], c: readonly [number, number], d: readonly [number, number]): boolean {
  const o1 = orient2(a, b, c); const o2 = orient2(a, b, d); const o3 = orient2(c, d, a); const o4 = orient2(c, d, b);
  return ((o1 > 1e-10 && o2 < -1e-10) || (o1 < -1e-10 && o2 > 1e-10))
    && ((o3 > 1e-10 && o4 < -1e-10) || (o3 < -1e-10 && o4 > 1e-10));
}

function pointInTriangle2(p: readonly [number, number], a: readonly [number, number], b: readonly [number, number], c: readonly [number, number]): boolean {
  const s1 = orient2(a, b, p); const s2 = orient2(b, c, p); const s3 = orient2(c, a, p);
  const hasNegative = s1 < -1e-10 || s2 < -1e-10 || s3 < -1e-10;
  const hasPositive = s1 > 1e-10 || s2 > 1e-10 || s3 > 1e-10;
  return !(hasNegative && hasPositive);
}

function coplanarOverlap(left: TriangleRecord, right: TriangleRecord, vertices: readonly Vec3[]): boolean {
  const normal = left.normal;
  const axis: 0 | 1 | 2 = Math.abs(normal.x) >= Math.abs(normal.y) && Math.abs(normal.x) >= Math.abs(normal.z) ? 0 : Math.abs(normal.y) >= Math.abs(normal.z) ? 1 : 2;
  const l = [left.a, left.b, left.c].map((index) => project2(vertices[index]!, axis));
  const r = [right.a, right.b, right.c].map((index) => project2(vertices[index]!, axis));
  for (let i = 0; i < 3; i += 1) for (let j = 0; j < 3; j += 1) if (segmentOverlap2(l[i]!, l[(i + 1) % 3]!, r[j]!, r[(j + 1) % 3]!)) return true;
  return pointInTriangle2(l[0]!, r[0]!, r[1]!, r[2]!) || pointInTriangle2(r[0]!, l[0]!, l[1]!, l[2]!);
}

function trianglesIntersect(left: TriangleRecord, right: TriangleRecord, vertices: readonly Vec3[]): boolean {
  if (!aabbOverlap(left, right)) return false;
  const leftVertices = [vertices[left.a]!, vertices[left.b]!, vertices[left.c]!];
  const rightVertices = [vertices[right.a]!, vertices[right.b]!, vertices[right.c]!];
  for (let index = 0; index < 3; index += 1) {
    if (segmentTriangleIntersection(leftVertices[index]!, leftVertices[(index + 1) % 3]!, rightVertices[0]!, rightVertices[1]!, rightVertices[2]!)) return true;
    if (segmentTriangleIntersection(rightVertices[index]!, rightVertices[(index + 1) % 3]!, leftVertices[0]!, leftVertices[1]!, leftVertices[2]!)) return true;
  }
  const normalsParallel = length(cross(left.normal, right.normal)) < 1e-7;
  const coplanar = normalsParallel && Math.abs(dot(left.normal, sub(rightVertices[0]!, leftVertices[0]!))) < 1e-7;
  return coplanar && coplanarOverlap(left, right, vertices);
}

function countSelfIntersections(triangles: readonly TriangleRecord[], vertices: readonly Vec3[]): number {
  const ordered = [...triangles].sort((left, right) => left.min.x - right.min.x || left.index - right.index);
  const active: TriangleRecord[] = [];
  let intersections = 0;
  for (const triangle of ordered) {
    for (let index = active.length - 1; index >= 0; index -= 1) if (active[index]!.max.x < triangle.min.x) active.splice(index, 1);
    const currentVertices = new Set([triangle.a, triangle.b, triangle.c]);
    for (const candidate of active) {
      if (currentVertices.has(candidate.a) || currentVertices.has(candidate.b) || currentVertices.has(candidate.c)) continue;
      if (trianglesIntersect(triangle, candidate, vertices)) intersections += 1;
    }
    active.push(triangle);
  }
  return intersections;
}

function scanRepairPlan(metrics: AssetTopologyMetrics, triangleBudget: number, allowOpenSurface: boolean, allowDisconnectedComponents: boolean, allowDuplicateVertices: boolean): AssetRepairStep[] {
  const plan: AssetRepairStep[] = [];
  const push = (id: AssetRepairStep['id'], priority: AssetRepairStep['priority'], reason: string) => plan.push({ id, priority, reason, deterministic: true });
  if (metrics.invalidTriangles) push('remove-invalid-triangles', 'critical', `${metrics.invalidTriangles} triangles reference invalid or non-finite vertices.`);
  if (metrics.degenerateTriangles) push('remove-degenerate-triangles', 'critical', `${metrics.degenerateTriangles} zero-area or repeated-index triangles were found.`);
  if (metrics.duplicateFaces) push('remove-duplicate-faces', 'high', `${metrics.duplicateFaces} duplicate triangle faces were found.`);
  if (metrics.inconsistentWindingEdges) push('repair-winding', 'high', `${metrics.inconsistentWindingEdges} manifold edges have inconsistent triangle winding.`);
  if (metrics.duplicateVertices && !allowDuplicateVertices) push('weld-duplicate-vertices', 'high', `${metrics.duplicateVertices} vertices occupy the same tolerance cell.`);
  if (metrics.isolatedVertices) push('remove-isolated-vertices', 'high', `${metrics.isolatedVertices} vertices are not used by a valid triangle.`);
  if (metrics.connectedComponents > 1 && !allowDisconnectedComponents) push('keep-largest-component', 'high', `${metrics.connectedComponents} disconnected mesh components were found.`);
  if (!allowOpenSurface && (metrics.boundaryLoops || metrics.openBoundaryChains)) push('close-boundary-loops', 'high', `${metrics.boundaryLoops} closed boundary loops and ${metrics.openBoundaryChains} open boundary chains remain.`);
  if (metrics.nonManifoldEdges) push('split-non-manifold-edges', 'critical', `${metrics.nonManifoldEdges} edges are shared by more than two triangles.`);
  if (metrics.skinnyTriangles) push('reduce-skinny-triangles', 'medium', `${metrics.skinnyTriangles} triangles have unstable aspect ratios.`);
  if (metrics.triangles > triangleBudget) push('reduce-triangle-budget', 'high', `${metrics.triangles} triangles exceed the ${triangleBudget} triangle budget.`);
  return plan;
}

export function scanMeshForGameReadiness(mesh: Mesh, options: IntrinsicAssetScanOptions = {}): IntrinsicAssetScanReport {
  const triangleBudget = Math.max(1, Math.floor(options.triangleBudget ?? 100_000));
  const memoryBudgetBytes = Math.max(1, Math.floor(options.memoryBudgetBytes ?? 96 * 1024 * 1024));
  const allowOpenSurface = options.allowOpenSurface ?? false;
  const allowDisconnectedComponents = options.allowDisconnectedComponents ?? false;
  const allowDuplicateVertices = options.allowDuplicateVertices ?? false;
  const requireCenteredPivot = options.requireCenteredPivot ?? false;
  const maxPivotOffsetRatio = Math.max(0, options.maxPivotOffsetRatio ?? 0.15);
  const vertices = mesh.vertices;
  const vertexCount = vertices.length;
  const adjacency = Array.from({ length: vertexCount }, () => new Set<number>());
  const incidence = Array.from({ length: vertexCount }, () => 0);
  const normalSums = Array.from({ length: vertexCount }, (): Vec3 => ({ x: 0, y: 0, z: 0 }));
  const areaSums = Array.from({ length: vertexCount }, () => 0);
  const triangleRecords: TriangleRecord[] = [];
  const edgeRecords = new Map<string, EdgeRecord>();
  const nonFiniteVertices = new Set<number>();
  const faceKeys = new Set<string>();
  let invalidTriangles = 0; let degenerateTriangles = 0; let skinnyTriangles = 0; let duplicateFaces = 0;

  for (let index = 0; index < vertexCount; index += 1) if (!finiteVec(vertices[index]!)) nonFiniteVertices.add(index);

  const addEdge = (a: number, b: number, triangle: number) => {
    const key = edgeKey(a, b);
    const direction = a < b ? 1 : -1;
    const existing = edgeRecords.get(key);
    if (existing) { existing.useCount += 1; existing.directionBalance += direction; existing.triangles.push(triangle); }
    else edgeRecords.set(key, { useCount: 1, directionBalance: direction, vertices: a < b ? [a, b] : [b, a], triangles: [triangle] });
    adjacency[a]!.add(b); adjacency[b]!.add(a);
  };

  for (let offset = 0; offset + 2 < mesh.indices.length; offset += 3) {
    const a = mesh.indices[offset]!; const b = mesh.indices[offset + 1]!; const c = mesh.indices[offset + 2]!;
    if (![a, b, c].every((value) => Number.isInteger(value) && value >= 0 && value < vertexCount) || nonFiniteVertices.has(a) || nonFiniteVertices.has(b) || nonFiniteVertices.has(c)) { invalidTriangles += 1; continue; }
    if (a === b || b === c || c === a) { degenerateTriangles += 1; continue; }
    const va = vertices[a]!; const vb = vertices[b]!; const vc = vertices[c]!;
    const crossValue = cross(sub(vb, va), sub(vc, va));
    const twiceArea = length(crossValue); const area = twiceArea * 0.5;
    if (!Number.isFinite(area) || area <= 1e-12) { degenerateTriangles += 1; continue; }
    const key = faceKey(a, b, c);
    if (faceKeys.has(key)) duplicateFaces += 1; else faceKeys.add(key);
    const ab = length(sub(vb, va)); const bc = length(sub(vc, vb)); const ca = length(sub(va, vc));
    const longest = Math.max(ab, bc, ca); const altitude = twiceArea / Math.max(longest, 1e-12);
    if (longest / Math.max(altitude, 1e-12) > 18) skinnyTriangles += 1;
    const normal = normalize(crossValue); const triangleIndex = triangleRecords.length;
    triangleRecords.push({ index: triangleIndex, a, b, c, area, normal, min: { x: Math.min(va.x, vb.x, vc.x), y: Math.min(va.y, vb.y, vc.y), z: Math.min(va.z, vb.z, vc.z) }, max: { x: Math.max(va.x, vb.x, vc.x), y: Math.max(va.y, vb.y, vc.y), z: Math.max(va.z, vb.z, vc.z) } });
    for (const vertex of [a, b, c]) { incidence[vertex] += 1; areaSums[vertex] += area; normalSums[vertex] = add(normalSums[vertex]!, mul(normal, area)); }
    addEdge(a, b, triangleIndex); addEdge(b, c, triangleIndex); addEdge(c, a, triangleIndex);
  }

  const normals = normalSums.map(normalize);
  const degrees = adjacency.map((neighbors) => neighbors.size);
  const edgeLengths = adjacency.map((neighbors, vertex) => [...neighbors].map((neighbor) => length(sub(vertices[vertex]!, vertices[neighbor]!))));
  const meanEdgeLength = edgeLengths.map((values) => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0);
  const minEdgeLength = edgeLengths.map((values) => values.length ? Math.min(...values) : 0);
  const maxEdgeLength = edgeLengths.map((values) => values.length ? Math.max(...values) : 0);
  const edgeVariation = edgeLengths.map((values, vertex) => {
    if (!values.length || meanEdgeLength[vertex]! <= 1e-12) return 0;
    const variance = values.reduce((sum, value) => sum + (value - meanEdgeLength[vertex]!) ** 2, 0) / values.length;
    return Math.sqrt(variance) / meanEdgeLength[vertex]!;
  });
  const averageIncidentArea = areaSums.map((value, vertex) => value / Math.max(1, incidence[vertex]!));
  const secondRing = adjacency.map((neighbors) => [...neighbors].reduce((mass, neighbor) => mass + adjacency[neighbor]!.size, 0));
  const curvature = adjacency.map((neighbors, vertex) => neighbors.size ? [...neighbors].reduce((sum, neighbor) => sum + 1 - Math.max(-1, Math.min(1, dot(normals[vertex]!, normals[neighbor]!))), 0) / neighbors.size : 0);
  const { labels: componentId, sizes: componentSizes } = componentLabels(adjacency);
  const boundary = boundaryPathCounts(edgeRecords);
  const nonManifoldVertices = new Set<number>();
  let nonManifoldEdges = 0; let boundaryEdges = 0; let inconsistentWindingEdges = 0;
  for (const edge of edgeRecords.values()) {
    if (edge.useCount === 1) boundaryEdges += 1;
    if (edge.useCount === 2 && Math.abs(edge.directionBalance) === 2) inconsistentWindingEdges += 1;
    if (edge.useCount > 2) { nonManifoldEdges += 1; nonManifoldVertices.add(edge.vertices[0]); nonManifoldVertices.add(edge.vertices[1]); }
  }

  const selfIntersections = options.checkSelfIntersections === false ? 0 : countSelfIntersections(triangleRecords, vertices);
  const finiteVertices = vertices.filter(finiteVec);
  const centroid = finiteVertices.length ? mul(finiteVertices.reduce(add, { x: 0, y: 0, z: 0 }), 1 / finiteVertices.length) : { x: 0, y: 0, z: 0 };
  let min: Vec3 = { x: Infinity, y: Infinity, z: Infinity }; let max: Vec3 = { x: -Infinity, y: -Infinity, z: -Infinity };
  for (const vertex of finiteVertices) { min = { x: Math.min(min.x, vertex.x), y: Math.min(min.y, vertex.y), z: Math.min(min.z, vertex.z) }; max = { x: Math.max(max.x, vertex.x), y: Math.max(max.y, vertex.y), z: Math.max(max.z, vertex.z) }; }
  const diagonal = finiteVertices.length ? length(sub(max, min)) : 0;
  const boundsCenter = finiteVertices.length ? mul(add(min, max), 0.5) : { x: 0, y: 0, z: 0 };
  const largestDimension = finiteVertices.length ? Math.max(max.x - min.x, max.y - min.y, max.z - min.z) : 0;
  const pivotOffsetRatio = length(boundsCenter) / Math.max(diagonal, 1e-12);
  const tolerance = Math.max(1e-9, options.duplicateTolerance ?? diagonal * 1e-5);
  const quantized = new Map<string, number>(); const duplicateVertices = new Set<number>();
  for (let index = 0; index < vertices.length; index += 1) {
    const vertex = vertices[index]!; if (!finiteVec(vertex)) continue;
    const key = `${Math.round(vertex.x / tolerance)}:${Math.round(vertex.y / tolerance)}:${Math.round(vertex.z / tolerance)}`;
    if (quantized.has(key)) duplicateVertices.add(index); else quantized.set(key, index);
  }

  const radial = vertices.map((vertex) => finiteVec(vertex) ? length(sub(vertex, centroid)) / Math.max(diagonal, 1e-12) : 0);
  const radialMedian = median(radial); const degreeMedian = median(degrees); const secondRingMedian = median(secondRing); const curvatureMedian = median(curvature);
  const incidenceThresholds = quantileThresholds(incidence); const radialThresholds = quantileThresholds(radial);
  const componentSizeByVertex = componentId.map((id) => id >= 0 ? componentSizes[id] ?? 0 : 0);
  const componentSizeMedian = median(componentSizeByVertex.filter((value) => value > 0));
  const meanEdgeMedian = median(meanEdgeLength); const edgeVariationMedian = median(edgeVariation); const minEdgeMedian = median(minEdgeLength); const maxEdgeMedian = median(maxEdgeLength); const areaMedian = median(averageIncidentArea);
  const isolatedVertices = incidence.filter((value) => value === 0).length;
  const largestComponentVertices = componentSizes.reduce((largest, size) => Math.max(largest, size), 0);
  const estimatedBytes = vertexCount * 48 + mesh.indices.length * (vertexCount > 65535 ? 4 : 2);

  const orientedCells: Record<IntrinsicScanFamily, number[]> = {
    'spatial-shape': Array.from({ length: 16 }, () => 0),
    'normal-curvature': Array.from({ length: 16 }, () => 0),
    'topology-neighborhood': Array.from({ length: 16 }, () => 0),
    'triangle-incidence': Array.from({ length: 16 }, () => 0),
  };
  const canonicalCells: Record<CanonicalIntrinsicScanFamily, number[]> = {
    'radial-edge-shape': Array.from({ length: 16 }, () => 0),
    'metric-curvature': Array.from({ length: 16 }, () => 0),
    'topology-neighborhood': Array.from({ length: 16 }, () => 0),
    'triangle-incidence': Array.from({ length: 16 }, () => 0),
  };
  const vertexHeat = Array.from({ length: vertexCount }, () => 0);

  for (let index = 0; index < vertexCount; index += 1) {
    const vertex = vertices[index]!; const normal = normals[index]!;
    const topologyCell = (boundary.boundaryVertices.has(index) ? 1 : 0) | (nonManifoldVertices.has(index) ? 2 : 0) | (degrees[index]! >= degreeMedian ? 4 : 0) | (secondRing[index]! >= secondRingMedian ? 8 : 0);
    const bucket = quantileBucket(incidence[index]!, incidenceThresholds);
    const componentSize = componentSizeByVertex[index] ?? 0;
    const incidenceCell = bucket
      | (componentSize >= componentSizeMedian && componentSize > 0 ? 4 : 0)
      | (componentSize < largestComponentVertices && componentSize > 0 ? 8 : 0);
    const spatialCell = (vertex.x >= centroid.x ? 1 : 0) | (vertex.y >= centroid.y ? 2 : 0) | (vertex.z >= centroid.z ? 4 : 0) | (radial[index]! >= radialMedian ? 8 : 0);
    const normalCell = (normal.x >= 0 ? 1 : 0) | (normal.y >= 0 ? 2 : 0) | (normal.z >= 0 ? 4 : 0) | (curvature[index]! >= curvatureMedian ? 8 : 0);
    const radialEdgeCell = quantileBucket(radial[index]!, radialThresholds) | (meanEdgeLength[index]! >= meanEdgeMedian ? 4 : 0) | (edgeVariation[index]! >= edgeVariationMedian ? 8 : 0);
    const metricCell = (minEdgeLength[index]! >= minEdgeMedian ? 1 : 0) | (maxEdgeLength[index]! >= maxEdgeMedian ? 2 : 0) | (averageIncidentArea[index]! >= areaMedian ? 4 : 0) | (curvature[index]! >= curvatureMedian ? 8 : 0);

    orientedCells['spatial-shape'][spatialCell] += 1; orientedCells['normal-curvature'][normalCell] += 1; orientedCells['topology-neighborhood'][topologyCell] += 1; orientedCells['triangle-incidence'][incidenceCell] += 1;
    canonicalCells['radial-edge-shape'][radialEdgeCell] += 1; canonicalCells['metric-curvature'][metricCell] += 1; canonicalCells['topology-neighborhood'][topologyCell] += 1; canonicalCells['triangle-incidence'][incidenceCell] += 1;

    let heat = 0;
    if (nonFiniteVertices.has(index) || incidence[index] === 0) heat = 1;
    if (boundary.boundaryVertices.has(index)) heat = Math.max(heat, 0.4);
    if (nonManifoldVertices.has(index)) heat = 1;
    if (duplicateVertices.has(index)) heat = Math.max(heat, 0.65);
    if (curvature[index]! > Math.max(0.5, curvatureMedian * 3)) heat = Math.max(heat, 0.3);
    vertexHeat[index] = heat;
  }

  const families = Object.fromEntries((Object.keys(orientedCells) as IntrinsicScanFamily[]).map((family) => [family, createTesseractSignature(orientedCells[family])])) as Record<IntrinsicScanFamily, TesseractSignature>;
  const canonicalFamilies = Object.fromEntries((Object.keys(canonicalCells) as CanonicalIntrinsicScanFamily[]).map((family) => [family, createTesseractSignature(canonicalCells[family])])) as Record<CanonicalIntrinsicScanFamily, TesseractSignature>;
  const orientedSimilarityVector = normalizedVector(families, vertexCount);
  const canonicalSimilarityVector = normalizedVector(canonicalFamilies, vertexCount);
  const orientedSimilaritySignature = vectorDigest(orientedSimilarityVector);
  const canonicalSimilaritySignature = vectorDigest(canonicalSimilarityVector);
  const exactGeometryDigest = computeMeshGeometryDigest(mesh);

  const topology: AssetTopologyMetrics = {
    vertices: vertexCount, triangles: Math.floor(mesh.indices.length / 3), validTriangles: triangleRecords.length, invalidTriangles, degenerateTriangles, skinnyTriangles,
    duplicateFaces, inconsistentWindingEdges, selfIntersections, duplicateVertices: duplicateVertices.size, isolatedVertices, boundaryEdges, boundaryLoops: boundary.loops,
    openBoundaryChains: boundary.openChains, nonManifoldEdges, connectedComponents: componentSizes.length, largestComponentVertices, estimatedBytes,
    averageVertexDegree: degrees.length ? degrees.reduce((sum, value) => sum + value, 0) / degrees.length : 0,
    maxVertexDegree: degrees.reduce((largest, degree) => Math.max(largest, degree), 0), pivotOffsetRatio, largestDimension,
  };

  const criticalIssues: string[] = []; const warnings: string[] = [];
  if (!vertexCount || !triangleRecords.length) criticalIssues.push('Mesh contains no valid renderable triangles.');
  if (invalidTriangles) criticalIssues.push(`${invalidTriangles} triangles contain invalid indices or non-finite vertices.`);
  if (degenerateTriangles) criticalIssues.push(`${degenerateTriangles} degenerate triangles must be removed.`);
  if (duplicateFaces) criticalIssues.push(`${duplicateFaces} duplicate faces create z-fighting and invalid collision surfaces.`);
  if (inconsistentWindingEdges) criticalIssues.push(`${inconsistentWindingEdges} manifold edges have inconsistent winding.`);
  if (selfIntersections) criticalIssues.push(`${selfIntersections} non-adjacent triangle intersections were found.`);
  if (nonManifoldEdges) criticalIssues.push(`${nonManifoldEdges} non-manifold edges prevent reliable collision, normals, and LOD generation.`);
  if (componentSizes.length > 1) warnings.push(`${componentSizes.length} disconnected components ${allowDisconnectedComponents ? 'are retained as an intentional assembly.' : 'should be intentionally separated or merged.'}`);
  if (!allowOpenSurface && (boundaryEdges || boundary.openChains)) criticalIssues.push('Closed game assets cannot contain boundary edges or open boundary chains.');
  else if (boundaryEdges) warnings.push(`${boundaryEdges} boundary edges are allowed for this open-surface asset but remain visible to collision and lighting checks.`);
  if (skinnyTriangles) warnings.push(`${skinnyTriangles} skinny triangles may shimmer or collapse in lower LODs.`);
  if (duplicateVertices.size) warnings.push(`${duplicateVertices.size} duplicate-position vertices ${allowDuplicateVertices ? 'are retained as intentional part or material seams.' : 'can increase memory and produce seams.'}`);
  if (isolatedVertices) warnings.push(`${isolatedVertices} isolated vertices waste memory.`);
  if (topology.triangles > triangleBudget) criticalIssues.push(`Triangle count ${topology.triangles} exceeds the ${triangleBudget} budget.`);
  if (estimatedBytes > memoryBudgetBytes) criticalIssues.push(`Estimated mesh memory ${estimatedBytes} exceeds the ${memoryBudgetBytes} byte budget.`);
  if (requireCenteredPivot && pivotOffsetRatio > maxPivotOffsetRatio) criticalIssues.push(`Mesh pivot is ${pivotOffsetRatio.toFixed(3)} bounds-diagonals from the geometric center; maximum is ${maxPivotOffsetRatio}.`);
  else if (pivotOffsetRatio > maxPivotOffsetRatio) warnings.push(`Mesh pivot is offset ${pivotOffsetRatio.toFixed(3)} bounds-diagonals from the geometric center.`);

  const repairPlan = scanRepairPlan(topology, triangleBudget, allowOpenSurface, allowDisconnectedComponents, allowDuplicateVertices);
  let score = 100;
  score -= Math.min(45, invalidTriangles * 8 + degenerateTriangles * 5 + duplicateFaces * 3);
  score -= Math.min(30, nonManifoldEdges * 4 + inconsistentWindingEdges * 2 + selfIntersections * 3);
  if (!allowDisconnectedComponents) score -= Math.min(18, Math.max(0, componentSizes.length - 1) * 5);
  score -= Math.min(15, (skinnyTriangles / Math.max(1, triangleRecords.length)) * 100);
  if (!allowDuplicateVertices) score -= Math.min(12, (duplicateVertices.size / Math.max(1, vertexCount)) * 100);
  score -= topology.triangles > triangleBudget ? Math.min(25, ((topology.triangles / triangleBudget) - 1) * 20) : 0;
  score -= estimatedBytes > memoryBudgetBytes ? Math.min(20, ((estimatedBytes / memoryBudgetBytes) - 1) * 15) : 0;
  if (!allowOpenSurface && boundaryEdges) score -= Math.min(20, boundaryEdges / Math.max(1, triangleRecords.length) * 100);
  if (requireCenteredPivot && pivotOffsetRatio > maxPivotOffsetRatio) score -= Math.min(15, (pivotOffsetRatio - maxPivotOffsetRatio) * 50);
  score = Math.max(0, Math.min(100, Math.round(score)));
  const gameReady = criticalIssues.length === 0 && score >= 70;

  const scanPayload = {
    scannerVersion: CONTENTENGIN_SCAN_VERSION, topology, families, canonicalFamilies,
    canonicalSimilaritySignature, orientedSimilaritySignature, geometryDigest: exactGeometryDigest,
    score, gameReady, criticalIssues, warnings, repairPlan,
  };
  const scanDigest = digestObject(scanPayload);
  const certificatePayload = {
    version: 2 as const, scannerVersion: CONTENTENGIN_SCAN_VERSION, gameReady, score,
    signature: canonicalSimilaritySignature, canonicalSignature: canonicalSimilaritySignature, orientedSignature: orientedSimilaritySignature,
    geometryDigest: exactGeometryDigest, scanDigest, topologyClosed: boundaryEdges === 0 && nonManifoldEdges === 0,
    triangleBudget, estimatedBytes, criticalIssueCount: criticalIssues.length, warningCount: warnings.length,
    requiredRepairIds: repairPlan.map((step) => step.id),
  };
  const certificate: GameReadyAssetCertificate = { ...certificatePayload, certificateDigest: digestObject(certificatePayload) };

  return {
    scannerVersion: CONTENTENGIN_SCAN_VERSION, topology, families, canonicalFamilies,
    similarityVector: canonicalSimilarityVector, canonicalSimilarityVector, orientedSimilarityVector,
    similaritySignature: canonicalSimilaritySignature, canonicalSimilaritySignature, orientedSimilaritySignature,
    geometryDigest: exactGeometryDigest, scanDigest, score, gameReady, criticalIssues, warnings, repairPlan, vertexHeat, certificate,
  };
}

function cosine(left: readonly number[], right: readonly number[]): number {
  const count = Math.min(left.length, right.length); if (!count) return 0;
  let product = 0; let leftNorm = 0; let rightNorm = 0;
  for (let index = 0; index < count; index += 1) { const a = left[index] ?? 0; const b = right[index] ?? 0; product += a * b; leftNorm += a * a; rightNorm += b * b; }
  if (!leftNorm || !rightNorm) return 0;
  return Math.max(0, Math.min(1, product / Math.sqrt(leftNorm * rightNorm)));
}

export function compareAssetSimilarity(left: Pick<IntrinsicAssetScanReport, 'similarityVector'>, right: Pick<IntrinsicAssetScanReport, 'similarityVector'>): number {
  return cosine(left.similarityVector, right.similarityVector);
}

export function compareOrientedAssetSimilarity(left: Pick<IntrinsicAssetScanReport, 'orientedSimilarityVector'>, right: Pick<IntrinsicAssetScanReport, 'orientedSimilarityVector'>): number {
  return cosine(left.orientedSimilarityVector, right.orientedSimilarityVector);
}

export function createIntrinsicAssetScanMetadata(report: IntrinsicAssetScanReport): IntrinsicAssetScanMetadata {
  const families = Object.keys(report.families) as IntrinsicScanFamily[];
  const canonicalFamilies = Object.keys(report.canonicalFamilies) as CanonicalIntrinsicScanFamily[];
  return {
    scannerVersion: report.scannerVersion, certificate: report.certificate, similaritySignature: report.similaritySignature,
    canonicalSimilaritySignature: report.canonicalSimilaritySignature, orientedSimilaritySignature: report.orientedSimilaritySignature,
    geometryDigest: report.geometryDigest, scanDigest: report.scanDigest, score: report.score, gameReady: report.gameReady, topology: report.topology,
    familyEnergy: Object.fromEntries(families.map((family) => [family, report.families[family].energy])) as Record<IntrinsicScanFamily, number>,
    canonicalFamilyEnergy: Object.fromEntries(canonicalFamilies.map((family) => [family, report.canonicalFamilies[family].energy])) as Record<CanonicalIntrinsicScanFamily, number>,
    familyWalsh: Object.fromEntries(families.map((family) => [family, report.families[family].normalizedWalsh])) as Record<IntrinsicScanFamily, readonly number[]>,
    canonicalFamilyWalsh: Object.fromEntries(canonicalFamilies.map((family) => [family, report.canonicalFamilies[family].normalizedWalsh])) as Record<CanonicalIntrinsicScanFamily, readonly number[]>,
    requiredRepairs: report.repairPlan.map((step) => step.id),
  };
}
