import type { Mesh, Vec3 } from '@/engins/isosurfaceDualContouring';
import type { GameReadyAssetCertificate, GameReadyRepairId } from '@/types/gameReadyAsset';
export type { GameReadyAssetCertificate, GameReadyRepairId } from '@/types/gameReadyAsset';

export const CONTENTENGIN_SCAN_VERSION = '2026.07.19-intrinsic-similarity-v1';

export type IntrinsicScanFamily =
  | 'spatial-shape'
  | 'normal-curvature'
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
}

export interface IntrinsicAssetScanReport {
  readonly scannerVersion: string;
  readonly topology: AssetTopologyMetrics;
  readonly families: Readonly<Record<IntrinsicScanFamily, TesseractSignature>>;
  readonly similarityVector: readonly number[];
  readonly similaritySignature: string;
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
  readonly score: number;
  readonly gameReady: boolean;
  readonly topology: AssetTopologyMetrics;
  readonly familyEnergy: Readonly<Record<IntrinsicScanFamily, number>>;
  readonly familyWalsh: Readonly<Record<IntrinsicScanFamily, readonly number[]>>;
  readonly requiredRepairs: readonly AssetRepairStep['id'][];
}

interface TriangleRecord {
  readonly a: number;
  readonly b: number;
  readonly c: number;
  readonly area: number;
  readonly normal: Vec3;
}

interface EdgeRecord {
  useCount: number;
  readonly vertices: readonly [number, number];
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

function finiteVec(value: Vec3): boolean {
  return Number.isFinite(value.x) && Number.isFinite(value.y) && Number.isFinite(value.z);
}

function add(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

function sub(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

function mul(value: Vec3, scalar: number): Vec3 {
  return { x: value.x * scalar, y: value.y * scalar, z: value.z * scalar };
}

function dot(a: Vec3, b: Vec3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

function cross(a: Vec3, b: Vec3): Vec3 {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };
}

function length(value: Vec3): number {
  return Math.hypot(value.x, value.y, value.z);
}

function normalize(value: Vec3): Vec3 {
  const magnitude = length(value);
  return magnitude <= 1e-12 ? { x: 0, y: 1, z: 0 } : mul(value, 1 / magnitude);
}

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

function edgeKey(a: number, b: number): string {
  return a < b ? `${a}:${b}` : `${b}:${a}`;
}

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
  const faceContrasts = TESSERACT_FACES.map(([c00, c10, c01, c11]) => (
    cells[c00]! - cells[c10]! - cells[c01]! + cells[c11]!
  ));
  const sliceCounts: number[] = [];
  const sliceContrasts: number[] = [];
  for (let axis = 0; axis < 4; axis += 1) {
    const bit = 1 << axis;
    let zero = 0;
    let one = 0;
    for (let cell = 0; cell < 16; cell += 1) {
      if (cell & bit) one += cells[cell]!;
      else zero += cells[cell]!;
    }
    sliceCounts.push(zero, one);
    sliceContrasts.push(zero - one);
  }
  const walsh = walsh16(cells);
  const dc = Math.max(1, Math.abs(walsh[0] ?? 0));
  const normalizedWalsh = walsh.map((value) => value / dc);
  const energy = [
    ...edgeContrasts,
    ...faceContrasts,
    ...sliceContrasts,
    ...walsh.slice(1),
  ].reduce((sum, value) => sum + value * value, 0) / (dc * dc);
  return { cells, edgeContrasts, faceContrasts, sliceCounts, sliceContrasts, walsh, normalizedWalsh, energy };
}

function hashSimilarityVector(values: readonly number[]): string {
  let hash = 0x811c9dc5;
  for (const value of values) {
    const encoded = Math.round((Number.isFinite(value) ? value : 0) * 1_000_000);
    for (let shift = 0; shift < 32; shift += 8) {
      hash ^= (encoded >>> shift) & 0xff;
      hash = Math.imul(hash, 0x01000193) >>> 0;
    }
  }
  return `sf-${hash.toString(16).padStart(8, '0')}`;
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

function boundaryPathCounts(edgeRecords: ReadonlyMap<string, EdgeRecord>): {
  loops: number;
  openChains: number;
  boundaryVertices: Set<number>;
} {
  const adjacency = new Map<number, Set<number>>();
  for (const edge of edgeRecords.values()) {
    if (edge.useCount !== 1) continue;
    const [a, b] = edge.vertices;
    const aSet = adjacency.get(a) ?? new Set<number>();
    const bSet = adjacency.get(b) ?? new Set<number>();
    aSet.add(b);
    bSet.add(a);
    adjacency.set(a, aSet);
    adjacency.set(b, bSet);
  }
  const unseen = new Set(adjacency.keys());
  let loops = 0;
  let openChains = 0;
  while (unseen.size) {
    const first = unseen.values().next().value as number;
    const stack = [first];
    unseen.delete(first);
    let closed = true;
    while (stack.length) {
      const vertex = stack.pop()!;
      const neighbors = adjacency.get(vertex) ?? new Set<number>();
      if (neighbors.size !== 2) closed = false;
      for (const neighbor of neighbors) {
        if (!unseen.has(neighbor)) continue;
        unseen.delete(neighbor);
        stack.push(neighbor);
      }
    }
    if (closed) loops += 1;
    else openChains += 1;
  }
  return { loops, openChains, boundaryVertices: new Set(adjacency.keys()) };
}

function scanRepairPlan(
  metrics: AssetTopologyMetrics,
  triangleBudget: number,
  allowOpenSurface: boolean,
  allowDisconnectedComponents: boolean,
  allowDuplicateVertices: boolean,
): AssetRepairStep[] {
  const plan: AssetRepairStep[] = [];
  const push = (id: AssetRepairStep['id'], priority: AssetRepairStep['priority'], reason: string) => {
    plan.push({ id, priority, reason, deterministic: true });
  };
  if (metrics.invalidTriangles) push('remove-invalid-triangles', 'critical', `${metrics.invalidTriangles} triangles reference invalid or non-finite vertices.`);
  if (metrics.degenerateTriangles) push('remove-degenerate-triangles', 'critical', `${metrics.degenerateTriangles} zero-area or repeated-index triangles were found.`);
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
  const vertices = mesh.vertices;
  const vertexCount = vertices.length;
  const adjacency = Array.from({ length: vertexCount }, () => new Set<number>());
  const incidence = Array.from({ length: vertexCount }, () => 0);
  const normalSums = Array.from({ length: vertexCount }, (): Vec3 => ({ x: 0, y: 0, z: 0 }));
  const triangleRecords: TriangleRecord[] = [];
  const edgeRecords = new Map<string, EdgeRecord>();
  const nonFiniteVertices = new Set<number>();
  let invalidTriangles = 0;
  let degenerateTriangles = 0;
  let skinnyTriangles = 0;

  for (let index = 0; index < vertexCount; index += 1) {
    if (!finiteVec(vertices[index]!)) nonFiniteVertices.add(index);
  }

  const addEdge = (a: number, b: number) => {
    const key = edgeKey(a, b);
    const existing = edgeRecords.get(key);
    if (existing) existing.useCount += 1;
    else edgeRecords.set(key, { useCount: 1, vertices: a < b ? [a, b] : [b, a] });
    adjacency[a]!.add(b);
    adjacency[b]!.add(a);
  };

  for (let offset = 0; offset + 2 < mesh.indices.length; offset += 3) {
    const a = mesh.indices[offset]!;
    const b = mesh.indices[offset + 1]!;
    const c = mesh.indices[offset + 2]!;
    if (![a, b, c].every((value) => Number.isInteger(value) && value >= 0 && value < vertexCount) || nonFiniteVertices.has(a) || nonFiniteVertices.has(b) || nonFiniteVertices.has(c)) {
      invalidTriangles += 1;
      continue;
    }
    if (a === b || b === c || c === a) {
      degenerateTriangles += 1;
      continue;
    }
    const va = vertices[a]!;
    const vb = vertices[b]!;
    const vc = vertices[c]!;
    const crossValue = cross(sub(vb, va), sub(vc, va));
    const twiceArea = length(crossValue);
    const area = twiceArea * 0.5;
    if (!Number.isFinite(area) || area <= 1e-12) {
      degenerateTriangles += 1;
      continue;
    }
    const ab = length(sub(vb, va));
    const bc = length(sub(vc, vb));
    const ca = length(sub(va, vc));
    const longest = Math.max(ab, bc, ca);
    const altitude = twiceArea / Math.max(longest, 1e-12);
    if (longest / Math.max(altitude, 1e-12) > 18) skinnyTriangles += 1;
    const normal = normalize(crossValue);
    triangleRecords.push({ a, b, c, area, normal });
    incidence[a] += 1;
    incidence[b] += 1;
    incidence[c] += 1;
    normalSums[a] = add(normalSums[a]!, mul(normal, area));
    normalSums[b] = add(normalSums[b]!, mul(normal, area));
    normalSums[c] = add(normalSums[c]!, mul(normal, area));
    addEdge(a, b);
    addEdge(b, c);
    addEdge(c, a);
  }

  const normals = normalSums.map(normalize);
  const degrees = adjacency.map((neighbors) => neighbors.size);
  const secondRing = adjacency.map((neighbors) => {
    let mass = 0;
    for (const neighbor of neighbors) mass += adjacency[neighbor]!.size;
    return mass;
  });
  const curvature = adjacency.map((neighbors, vertex) => {
    if (!neighbors.size) return 0;
    let sum = 0;
    for (const neighbor of neighbors) sum += 1 - Math.max(-1, Math.min(1, dot(normals[vertex]!, normals[neighbor]!)));
    return sum / neighbors.size;
  });
  const { labels: componentId, sizes: componentSizes } = componentLabels(adjacency);
  const boundary = boundaryPathCounts(edgeRecords);
  const nonManifoldVertices = new Set<number>();
  let nonManifoldEdges = 0;
  let boundaryEdges = 0;
  for (const edge of edgeRecords.values()) {
    if (edge.useCount === 1) boundaryEdges += 1;
    if (edge.useCount > 2) {
      nonManifoldEdges += 1;
      nonManifoldVertices.add(edge.vertices[0]);
      nonManifoldVertices.add(edge.vertices[1]);
    }
  }

  const finiteVertices = vertices.filter(finiteVec);
  const centroid = finiteVertices.length
    ? mul(finiteVertices.reduce(add, { x: 0, y: 0, z: 0 }), 1 / finiteVertices.length)
    : { x: 0, y: 0, z: 0 };
  const radial = vertices.map((vertex) => finiteVec(vertex) ? length(sub(vertex, centroid)) : 0);
  const radialMedian = median(radial);
  const degreeMedian = median(degrees);
  const secondRingMedian = median(secondRing);
  const curvatureMedian = median(curvature);
  const incidenceThresholds = quantileThresholds(incidence);

  let min: Vec3 = { x: Infinity, y: Infinity, z: Infinity };
  let max: Vec3 = { x: -Infinity, y: -Infinity, z: -Infinity };
  for (const vertex of finiteVertices) {
    min = { x: Math.min(min.x, vertex.x), y: Math.min(min.y, vertex.y), z: Math.min(min.z, vertex.z) };
    max = { x: Math.max(max.x, vertex.x), y: Math.max(max.y, vertex.y), z: Math.max(max.z, vertex.z) };
  }
  const diagonal = finiteVertices.length ? length(sub(max, min)) : 0;
  const tolerance = Math.max(1e-9, options.duplicateTolerance ?? diagonal * 1e-5);
  const quantized = new Map<string, number>();
  const duplicateVertices = new Set<number>();
  for (let index = 0; index < vertices.length; index += 1) {
    const vertex = vertices[index]!;
    if (!finiteVec(vertex)) continue;
    const key = `${Math.round(vertex.x / tolerance)}:${Math.round(vertex.y / tolerance)}:${Math.round(vertex.z / tolerance)}`;
    const previous = quantized.get(key);
    if (previous === undefined) quantized.set(key, index);
    else duplicateVertices.add(index);
  }

  const isolatedVertices = incidence.filter((value) => value === 0).length;
  const largestComponentVertices = componentSizes.reduce((largest, size) => Math.max(largest, size), 0);
  const estimatedBytes = vertexCount * 48 + mesh.indices.length * (vertexCount > 65535 ? 4 : 2);

  const familyCells: Record<IntrinsicScanFamily, number[]> = {
    'spatial-shape': Array.from({ length: 16 }, () => 0),
    'normal-curvature': Array.from({ length: 16 }, () => 0),
    'topology-neighborhood': Array.from({ length: 16 }, () => 0),
    'triangle-incidence': Array.from({ length: 16 }, () => 0),
  };
  const vertexHeat = Array.from({ length: vertexCount }, () => 0);

  for (let index = 0; index < vertexCount; index += 1) {
    const vertex = vertices[index]!;
    const normal = normals[index]!;
    const spatialCell = (
      (vertex.x >= centroid.x ? 1 : 0)
      | (vertex.y >= centroid.y ? 2 : 0)
      | (vertex.z >= centroid.z ? 4 : 0)
      | (radial[index]! >= radialMedian ? 8 : 0)
    );
    const normalCell = (
      (normal.x >= 0 ? 1 : 0)
      | (normal.y >= 0 ? 2 : 0)
      | (normal.z >= 0 ? 4 : 0)
      | (curvature[index]! >= curvatureMedian ? 8 : 0)
    );
    const topologyCell = (
      (boundary.boundaryVertices.has(index) ? 1 : 0)
      | (nonManifoldVertices.has(index) ? 2 : 0)
      | (degrees[index]! >= degreeMedian ? 4 : 0)
      | (secondRing[index]! >= secondRingMedian ? 8 : 0)
    );
    const bucket = quantileBucket(incidence[index]!, incidenceThresholds);
    const component = componentId[index] ?? -1;
    const incidenceCell = (
      bucket
      | ((component & 1) ? 4 : 0)
      | (component > 0 ? 8 : 0)
    );
    familyCells['spatial-shape'][spatialCell] += 1;
    familyCells['normal-curvature'][normalCell] += 1;
    familyCells['topology-neighborhood'][topologyCell] += 1;
    familyCells['triangle-incidence'][incidenceCell] += 1;

    let heat = 0;
    if (nonFiniteVertices.has(index) || incidence[index] === 0) heat = 1;
    if (boundary.boundaryVertices.has(index)) heat = Math.max(heat, 0.4);
    if (nonManifoldVertices.has(index)) heat = 1;
    if (duplicateVertices.has(index)) heat = Math.max(heat, 0.65);
    if (curvature[index]! > Math.max(0.5, curvatureMedian * 3)) heat = Math.max(heat, 0.3);
    vertexHeat[index] = heat;
  }

  const families = {
    'spatial-shape': createTesseractSignature(familyCells['spatial-shape']),
    'normal-curvature': createTesseractSignature(familyCells['normal-curvature']),
    'topology-neighborhood': createTesseractSignature(familyCells['topology-neighborhood']),
    'triangle-incidence': createTesseractSignature(familyCells['triangle-incidence']),
  } satisfies Record<IntrinsicScanFamily, TesseractSignature>;

  const similarityVector = (Object.keys(families) as IntrinsicScanFamily[]).flatMap((family) => [
    ...families[family].cells.map((value) => value / Math.max(1, vertexCount)),
    ...families[family].normalizedWalsh.slice(1),
  ]);
  const similaritySignature = hashSimilarityVector(similarityVector);

  const topology: AssetTopologyMetrics = {
    vertices: vertexCount,
    triangles: Math.floor(mesh.indices.length / 3),
    validTriangles: triangleRecords.length,
    invalidTriangles,
    degenerateTriangles,
    skinnyTriangles,
    duplicateVertices: duplicateVertices.size,
    isolatedVertices,
    boundaryEdges,
    boundaryLoops: boundary.loops,
    openBoundaryChains: boundary.openChains,
    nonManifoldEdges,
    connectedComponents: componentSizes.length,
    largestComponentVertices,
    estimatedBytes,
    averageVertexDegree: degrees.length ? degrees.reduce((sum, value) => sum + value, 0) / degrees.length : 0,
    maxVertexDegree: degrees.reduce((largest, degree) => Math.max(largest, degree), 0),
  };

  const criticalIssues: string[] = [];
  const warnings: string[] = [];
  if (!vertexCount || !triangleRecords.length) criticalIssues.push('Mesh contains no valid renderable triangles.');
  if (invalidTriangles) criticalIssues.push(`${invalidTriangles} triangles contain invalid indices or non-finite vertices.`);
  if (degenerateTriangles) criticalIssues.push(`${degenerateTriangles} degenerate triangles must be removed.`);
  if (nonManifoldEdges) criticalIssues.push(`${nonManifoldEdges} non-manifold edges prevent reliable collision, normals, and LOD generation.`);
  if (componentSizes.length > 1) warnings.push(`${componentSizes.length} disconnected components ${allowDisconnectedComponents ? 'are retained as an intentional assembly.' : 'should be intentionally separated or merged.'}`);
  if (!allowOpenSurface && (boundaryEdges || boundary.openChains)) criticalIssues.push('Closed game assets cannot contain boundary edges or open boundary chains.');
  else if (boundaryEdges) warnings.push(`${boundaryEdges} boundary edges are allowed for this open-surface asset but remain visible to collision and lighting checks.`);
  if (skinnyTriangles) warnings.push(`${skinnyTriangles} skinny triangles may shimmer or collapse in lower LODs.`);
  if (duplicateVertices.size) warnings.push(`${duplicateVertices.size} duplicate-position vertices ${allowDuplicateVertices ? 'are retained as intentional part or material seams.' : 'can increase memory and produce seams.'}`);
  if (isolatedVertices) warnings.push(`${isolatedVertices} isolated vertices waste memory.`);
  if (topology.triangles > triangleBudget) criticalIssues.push(`Triangle count ${topology.triangles} exceeds the ${triangleBudget} budget.`);
  if (estimatedBytes > memoryBudgetBytes) criticalIssues.push(`Estimated mesh memory ${estimatedBytes} exceeds the ${memoryBudgetBytes} byte budget.`);

  const repairPlan = scanRepairPlan(
    topology,
    triangleBudget,
    allowOpenSurface,
    allowDisconnectedComponents,
    allowDuplicateVertices,
  );
  let score = 100;
  score -= Math.min(45, invalidTriangles * 8 + degenerateTriangles * 5);
  score -= Math.min(30, nonManifoldEdges * 4);
  if (!allowDisconnectedComponents) score -= Math.min(18, Math.max(0, componentSizes.length - 1) * 5);
  score -= Math.min(15, (skinnyTriangles / Math.max(1, triangleRecords.length)) * 100);
  if (!allowDuplicateVertices) score -= Math.min(12, (duplicateVertices.size / Math.max(1, vertexCount)) * 100);
  score -= topology.triangles > triangleBudget ? Math.min(25, ((topology.triangles / triangleBudget) - 1) * 20) : 0;
  score -= estimatedBytes > memoryBudgetBytes ? Math.min(20, ((estimatedBytes / memoryBudgetBytes) - 1) * 15) : 0;
  if (!allowOpenSurface && boundaryEdges) score -= Math.min(20, boundaryEdges / Math.max(1, triangleRecords.length) * 100);
  score = Math.max(0, Math.min(100, Math.round(score)));
  const gameReady = criticalIssues.length === 0 && score >= 70;
  const certificate: GameReadyAssetCertificate = {
    version: 1,
    scannerVersion: CONTENTENGIN_SCAN_VERSION,
    gameReady,
    score,
    signature: similaritySignature,
    topologyClosed: boundaryEdges === 0 && nonManifoldEdges === 0,
    triangleBudget,
    estimatedBytes,
    criticalIssueCount: criticalIssues.length,
    warningCount: warnings.length,
    requiredRepairIds: repairPlan.map((step) => step.id),
  };

  return {
    scannerVersion: CONTENTENGIN_SCAN_VERSION,
    topology,
    families,
    similarityVector,
    similaritySignature,
    score,
    gameReady,
    criticalIssues,
    warnings,
    repairPlan,
    vertexHeat,
    certificate,
  };
}

export function compareAssetSimilarity(
  left: Pick<IntrinsicAssetScanReport, 'similarityVector'>,
  right: Pick<IntrinsicAssetScanReport, 'similarityVector'>,
): number {
  const length = Math.min(left.similarityVector.length, right.similarityVector.length);
  if (!length) return 0;
  let dotProduct = 0;
  let leftNorm = 0;
  let rightNorm = 0;
  for (let index = 0; index < length; index += 1) {
    const a = left.similarityVector[index] ?? 0;
    const b = right.similarityVector[index] ?? 0;
    dotProduct += a * b;
    leftNorm += a * a;
    rightNorm += b * b;
  }
  if (!leftNorm || !rightNorm) return 0;
  return Math.max(0, Math.min(1, dotProduct / Math.sqrt(leftNorm * rightNorm)));
}

export function createIntrinsicAssetScanMetadata(report: IntrinsicAssetScanReport): IntrinsicAssetScanMetadata {
  const families = Object.keys(report.families) as IntrinsicScanFamily[];
  return {
    scannerVersion: report.scannerVersion,
    certificate: report.certificate,
    similaritySignature: report.similaritySignature,
    score: report.score,
    gameReady: report.gameReady,
    topology: report.topology,
    familyEnergy: Object.fromEntries(
      families.map((family) => [family, report.families[family].energy]),
    ) as Record<IntrinsicScanFamily, number>,
    familyWalsh: Object.fromEntries(
      families.map((family) => [family, report.families[family].normalizedWalsh]),
    ) as Record<IntrinsicScanFamily, readonly number[]>,
    requiredRepairs: report.repairPlan.map((step) => step.id),
  };
}
