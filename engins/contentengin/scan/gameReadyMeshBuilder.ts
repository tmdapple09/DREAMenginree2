import type { Mesh, Vec3 } from '@/engins/isosurfaceDualContouring';
import {
  compactMesh,
  repairMeshDetailed,
  type ColoredMesh,
  type ColorRGB,
  type RepairReport,
} from '@/engins/isosurfaceAssetPipeline';
import {
  compareAssetSimilarity,
  scanMeshForGameReadiness,
  type GameReadyAssetCertificate,
  type GameReadyRepairId,
  type IntrinsicAssetScanOptions,
  type IntrinsicAssetScanReport,
} from './intrinsicAssetScanner';

export interface GameReadyCollisionProxy {
  readonly kind: 'box-and-sphere';
  readonly center: Vec3;
  readonly dimensions: Vec3;
  readonly radius: number;
  readonly shapes: readonly [
    { readonly kind: 'box'; readonly center: Vec3; readonly dimensions: Vec3 },
    { readonly kind: 'sphere'; readonly center: Vec3; readonly radius: number },
  ];
}

export interface GameReadyLodSummary {
  readonly level: 0 | 1 | 2;
  readonly vertices: number;
  readonly triangles: number;
  readonly score: number;
  readonly signature: string;
  readonly orientedSignature: string;
  readonly canonicalSimilarityToLod0: number;
}

export interface TopologyRepairReport {
  readonly appliedRepairIds: readonly GameReadyRepairId[];
  readonly residualRepairIds: readonly GameReadyRepairId[];
  readonly passes: number;
  readonly beforeScore: number;
  readonly afterScore: number;
}

export interface GameReadyBuildSummary {
  readonly repairStrategy: 'preserve-seams' | 'weld-compatible-seams';
  readonly certificate: GameReadyAssetCertificate;
  readonly lods: readonly GameReadyLodSummary[];
  readonly collision: GameReadyCollisionProxy;
  readonly repairReport: RepairReport;
  readonly topologyRepair: TopologyRepairReport;
}

export interface PreparedGameReadyMesh {
  readonly mesh: Mesh;
  readonly scan: IntrinsicAssetScanReport;
  readonly lodMeshes: readonly [Mesh, Mesh, Mesh];
  readonly collisionMeshes: readonly [Mesh, Mesh];
  readonly summary: GameReadyBuildSummary;
}

export interface PrepareGameReadyMeshOptions extends IntrinsicAssetScanOptions {
  readonly targetTriangleBudget?: number;
}

interface BoundsResult {
  min: Vec3;
  max: Vec3;
  center: Vec3;
  dimensions: Vec3;
  radius: number;
}

const sub = (a: Vec3, b: Vec3): Vec3 => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
const cross = (a: Vec3, b: Vec3): Vec3 => ({ x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x });
const area2 = (a: Vec3, b: Vec3, c: Vec3): number => Math.hypot(...Object.values(cross(sub(b, a), sub(c, a)))) / 2;
const edgeKey = (a: number, b: number): string => a < b ? `${a}:${b}` : `${b}:${a}`;
const faceKey = (a: number, b: number, c: number): string => [a, b, c].sort((left, right) => left - right).join(':');

function cloneMesh(mesh: Mesh): ColoredMesh {
  const source = mesh as ColoredMesh;
  return {
    vertices: mesh.vertices.map((vertex) => ({ ...vertex })),
    indices: [...mesh.indices],
    vertexColors: source.vertexColors?.map((color) => ({ ...color })),
    palette: source.palette?.map((color) => ({ ...color })),
  };
}

function bounds(mesh: Mesh): BoundsResult {
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
  return { min, max, center, dimensions, radius: Math.hypot(dimensions.x, dimensions.y, dimensions.z) / 2 };
}

function removeDuplicateFaces(mesh: Mesh): Mesh {
  const source = cloneMesh(mesh);
  const seen = new Set<string>();
  const indices: number[] = [];
  for (let offset = 0; offset + 2 < source.indices.length; offset += 3) {
    const a = source.indices[offset]!; const b = source.indices[offset + 1]!; const c = source.indices[offset + 2]!;
    const key = faceKey(a, b, c);
    if (seen.has(key)) continue;
    seen.add(key); indices.push(a, b, c);
  }
  return { ...source, indices };
}

function orientWinding(mesh: Mesh): Mesh {
  const source = cloneMesh(mesh);
  const triangleCount = Math.floor(source.indices.length / 3);
  const edgeTriangles = new Map<string, Array<{ triangle: number; direction: number }>>();
  for (let triangle = 0; triangle < triangleCount; triangle += 1) {
    const offset = triangle * 3;
    const values = [source.indices[offset]!, source.indices[offset + 1]!, source.indices[offset + 2]!];
    for (let edge = 0; edge < 3; edge += 1) {
      const a = values[edge]!; const b = values[(edge + 1) % 3]!;
      const key = edgeKey(a, b);
      const list = edgeTriangles.get(key) ?? [];
      list.push({ triangle, direction: a < b ? 1 : -1 });
      edgeTriangles.set(key, list);
    }
  }
  const adjacency = Array.from({ length: triangleCount }, () => [] as Array<{ triangle: number; sameDirection: boolean }>);
  for (const triangles of edgeTriangles.values()) {
    if (triangles.length !== 2) continue;
    const [left, right] = triangles;
    adjacency[left!.triangle]!.push({ triangle: right!.triangle, sameDirection: left!.direction === right!.direction });
    adjacency[right!.triangle]!.push({ triangle: left!.triangle, sameDirection: left!.direction === right!.direction });
  }
  const orientation = Array.from({ length: triangleCount }, () => 0);
  for (let start = 0; start < triangleCount; start += 1) {
    if (orientation[start]) continue;
    orientation[start] = 1;
    const stack = [start];
    while (stack.length) {
      const triangle = stack.pop()!;
      for (const next of adjacency[triangle]!) {
        const expected = next.sameDirection ? -orientation[triangle]! : orientation[triangle]!;
        if (!orientation[next.triangle]) { orientation[next.triangle] = expected; stack.push(next.triangle); }
      }
    }
  }
  for (let triangle = 0; triangle < triangleCount; triangle += 1) {
    if (orientation[triangle] >= 0) continue;
    const offset = triangle * 3;
    [source.indices[offset + 1], source.indices[offset + 2]] = [source.indices[offset + 2]!, source.indices[offset + 1]!];
  }
  return source;
}

function keepLargestComponent(mesh: Mesh): Mesh {
  const source = cloneMesh(mesh);
  const adjacency = Array.from({ length: source.vertices.length }, () => new Set<number>());
  for (let offset = 0; offset + 2 < source.indices.length; offset += 3) {
    const a = source.indices[offset]!; const b = source.indices[offset + 1]!; const c = source.indices[offset + 2]!;
    adjacency[a]!.add(b).add(c); adjacency[b]!.add(a).add(c); adjacency[c]!.add(a).add(b);
  }
  const labels = Array.from({ length: source.vertices.length }, () => -1);
  const sizes: number[] = [];
  for (let start = 0; start < source.vertices.length; start += 1) {
    if (labels[start] !== -1 || adjacency[start]!.size === 0) continue;
    const label = sizes.length; let size = 0; const stack = [start]; labels[start] = label;
    while (stack.length) { const vertex = stack.pop()!; size += 1; for (const next of adjacency[vertex]!) if (labels[next] === -1) { labels[next] = label; stack.push(next); } }
    sizes.push(size);
  }
  if (sizes.length <= 1) return source;
  const largest = sizes.reduce((best, size, index) => size > sizes[best]! ? index : best, 0);
  const indices: number[] = [];
  for (let offset = 0; offset + 2 < source.indices.length; offset += 3) {
    const a = source.indices[offset]!; const b = source.indices[offset + 1]!; const c = source.indices[offset + 2]!;
    if (labels[a] === largest && labels[b] === largest && labels[c] === largest) indices.push(a, b, c);
  }
  return compactMesh({ ...source, indices }).mesh;
}

function splitNonManifoldEdges(mesh: Mesh): Mesh {
  const source = cloneMesh(mesh);
  const edgeUses = new Map<string, number[]>();
  for (let triangle = 0; triangle * 3 + 2 < source.indices.length; triangle += 1) {
    const offset = triangle * 3;
    const values = [source.indices[offset]!, source.indices[offset + 1]!, source.indices[offset + 2]!];
    for (let edge = 0; edge < 3; edge += 1) {
      const key = edgeKey(values[edge]!, values[(edge + 1) % 3]!);
      const list = edgeUses.get(key) ?? []; list.push(triangle); edgeUses.set(key, list);
    }
  }
  const colors = source.vertexColors ? [...source.vertexColors] : undefined;
  for (const [key, triangles] of edgeUses) {
    if (triangles.length <= 2) continue;
    const [leftRaw, rightRaw] = key.split(':').map(Number) as [number, number];
    for (const triangle of triangles.slice(2)) {
      const left = source.vertices.push({ ...source.vertices[leftRaw]! }) - 1;
      const right = source.vertices.push({ ...source.vertices[rightRaw]! }) - 1;
      if (colors) { colors[left] = { ...(colors[leftRaw] ?? { r: 1, g: 1, b: 1 }) }; colors[right] = { ...(colors[rightRaw] ?? { r: 1, g: 1, b: 1 }) }; }
      const offset = triangle * 3;
      for (let local = 0; local < 3; local += 1) {
        if (source.indices[offset + local] === leftRaw) source.indices[offset + local] = left;
        else if (source.indices[offset + local] === rightRaw) source.indices[offset + local] = right;
      }
    }
  }
  source.vertexColors = colors;
  return source;
}

function closeBoundaryLoops(mesh: Mesh): Mesh {
  const source = orientWinding(mesh) as ColoredMesh;
  const directedBoundary = new Map<number, number[]>();
  const edgeUse = new Map<string, { count: number; directed: readonly [number, number] }>();
  for (let offset = 0; offset + 2 < source.indices.length; offset += 3) {
    const values = [source.indices[offset]!, source.indices[offset + 1]!, source.indices[offset + 2]!];
    for (let edge = 0; edge < 3; edge += 1) {
      const a = values[edge]!; const b = values[(edge + 1) % 3]!; const key = edgeKey(a, b);
      const record = edgeUse.get(key); if (record) edgeUse.set(key, { ...record, count: record.count + 1 }); else edgeUse.set(key, { count: 1, directed: [a, b] });
    }
  }
  for (const record of edgeUse.values()) {
    if (record.count !== 1) continue;
    const [a, b] = record.directed; const list = directedBoundary.get(a) ?? []; list.push(b); directedBoundary.set(a, list);
  }
  const used = new Set<string>();
  const colors = source.vertexColors ? [...source.vertexColors] : undefined;
  for (const [start, targets] of directedBoundary) {
    for (const target of targets) {
      const firstKey = `${start}:${target}`; if (used.has(firstKey)) continue;
      const loop: number[] = [start]; let current = start; let next = target; let closed = false;
      while (loop.length <= directedBoundary.size + 1) {
        used.add(`${current}:${next}`); loop.push(next);
        current = next;
        if (current === start) { closed = loop.length > 3; break; }
        const candidates = (directedBoundary.get(current) ?? []).filter((value) => !used.has(`${current}:${value}`));
        if (candidates.length !== 1) break;
        next = candidates[0]!;
      }
      if (!closed) continue;
      loop.pop();
      const center = loop.reduce((sum, index) => ({ x: sum.x + source.vertices[index]!.x, y: sum.y + source.vertices[index]!.y, z: sum.z + source.vertices[index]!.z }), { x: 0, y: 0, z: 0 });
      center.x /= loop.length; center.y /= loop.length; center.z /= loop.length;
      const centerIndex = source.vertices.push(center) - 1;
      if (colors) {
        const average = loop.reduce((sum, index) => { const color = colors[index] ?? { r: 1, g: 1, b: 1 }; return { r: sum.r + color.r, g: sum.g + color.g, b: sum.b + color.b }; }, { r: 0, g: 0, b: 0 });
        colors[centerIndex] = { r: average.r / loop.length, g: average.g / loop.length, b: average.b / loop.length };
      }
      for (let index = 0; index < loop.length; index += 1) {
        const a = loop[index]!; const b = loop[(index + 1) % loop.length]!;
        // Reverse the boundary direction so the cap shares opposite edge orientation.
        source.indices.push(b, a, centerIndex);
      }
    }
  }
  source.vertexColors = colors;
  return source;
}

function reduceSkinnyTriangles(mesh: Mesh): Mesh {
  const source = cloneMesh(mesh);
  const remap = Array.from({ length: source.vertices.length }, (_, index) => index);
  const occupied = new Set<number>();
  for (let offset = 0; offset + 2 < source.indices.length; offset += 3) {
    const ids = [source.indices[offset]!, source.indices[offset + 1]!, source.indices[offset + 2]!];
    const points = ids.map((index) => source.vertices[index]!);
    const lengths = [
      Math.hypot(points[0]!.x - points[1]!.x, points[0]!.y - points[1]!.y, points[0]!.z - points[1]!.z),
      Math.hypot(points[1]!.x - points[2]!.x, points[1]!.y - points[2]!.y, points[1]!.z - points[2]!.z),
      Math.hypot(points[2]!.x - points[0]!.x, points[2]!.y - points[0]!.y, points[2]!.z - points[0]!.z),
    ];
    const twiceArea = area2(points[0]!, points[1]!, points[2]!) * 2;
    const longest = Math.max(...lengths); const altitude = twiceArea / Math.max(longest, 1e-12);
    if (longest / Math.max(altitude, 1e-12) <= 18) continue;
    const shortestEdge = lengths.indexOf(Math.min(...lengths));
    const pair = shortestEdge === 0 ? [ids[0]!, ids[1]!] : shortestEdge === 1 ? [ids[1]!, ids[2]!] : [ids[2]!, ids[0]!];
    if (occupied.has(pair[0]!) || occupied.has(pair[1]!)) continue;
    const keep = Math.min(pair[0]!, pair[1]!); const drop = Math.max(pair[0]!, pair[1]!);
    const a = source.vertices[keep]!; const b = source.vertices[drop]!;
    source.vertices[keep] = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, z: (a.z + b.z) / 2 };
    remap[drop] = keep; occupied.add(keep); occupied.add(drop);
  }
  source.indices = source.indices.map((index) => remap[index] ?? index);
  return repairMeshDetailed(source, { weldVertices: false }).mesh;
}

function applyTopologyRepairs(mesh: Mesh, scanOptions: IntrinsicAssetScanOptions, preserveSeams: boolean): { mesh: Mesh; scan: IntrinsicAssetScanReport; report: TopologyRepairReport } {
  let current = repairMeshDetailed(mesh, { weldVertices: !preserveSeams }).mesh;
  const before = scanMeshForGameReadiness(current, scanOptions);
  const applied = new Set<GameReadyRepairId>();
  let scan = before;
  let passes = 0;
  for (; passes < 6 && scan.repairPlan.length; passes += 1) {
    const priorDigest = scan.geometryDigest;
    const ids = new Set(scan.repairPlan.map((step) => step.id));
    if (ids.has('remove-duplicate-faces')) { current = removeDuplicateFaces(current); applied.add('remove-duplicate-faces'); }
    if (ids.has('repair-winding')) { current = orientWinding(current); applied.add('repair-winding'); }
    if (ids.has('split-non-manifold-edges')) { current = splitNonManifoldEdges(current); applied.add('split-non-manifold-edges'); }
    if (ids.has('keep-largest-component')) { current = keepLargestComponent(current); applied.add('keep-largest-component'); }
    if (ids.has('close-boundary-loops')) { current = closeBoundaryLoops(current); applied.add('close-boundary-loops'); }
    if (ids.has('reduce-skinny-triangles')) { current = reduceSkinnyTriangles(current); applied.add('reduce-skinny-triangles'); }
    if (ids.has('weld-duplicate-vertices') && !preserveSeams) applied.add('weld-duplicate-vertices');
    if (ids.has('remove-invalid-triangles')) applied.add('remove-invalid-triangles');
    if (ids.has('remove-degenerate-triangles')) applied.add('remove-degenerate-triangles');
    if (ids.has('remove-isolated-vertices')) applied.add('remove-isolated-vertices');
    current = repairMeshDetailed(current, { weldVertices: !preserveSeams }).mesh;
    scan = scanMeshForGameReadiness(current, scanOptions);
    if (scan.geometryDigest === priorDigest) break;
  }
  return {
    mesh: current,
    scan,
    report: {
      appliedRepairIds: [...applied], residualRepairIds: scan.repairPlan.map((step) => step.id), passes,
      beforeScore: before.score, afterScore: scan.score,
    },
  };
}

function clusterMesh(mesh: Mesh, targetRatio: number, preserveSeams: boolean): Mesh {
  const ratio = Math.max(0.05, Math.min(1, targetRatio));
  if (ratio >= 0.999 || mesh.vertices.length < 8) return cloneMesh(mesh);
  const meshBounds = bounds(mesh); const targetVertices = Math.max(4, Math.floor(mesh.vertices.length * ratio));
  const gridResolution = Math.max(2, Math.round(Math.cbrt(targetVertices)));
  const size = { x: Math.max(meshBounds.dimensions.x, 1e-9), y: Math.max(meshBounds.dimensions.y, 1e-9), z: Math.max(meshBounds.dimensions.z, 1e-9) };
  const cells = new Map<string, { sum: Vec3; count: number; colors: ColorRGB[] }>();
  const source = mesh as ColoredMesh; const vertexCellKeys: string[] = [];
  mesh.vertices.forEach((vertex, index) => {
    const x = Math.min(gridResolution - 1, Math.max(0, Math.floor(((vertex.x - meshBounds.min.x) / size.x) * gridResolution)));
    const y = Math.min(gridResolution - 1, Math.max(0, Math.floor(((vertex.y - meshBounds.min.y) / size.y) * gridResolution)));
    const z = Math.min(gridResolution - 1, Math.max(0, Math.floor(((vertex.z - meshBounds.min.z) / size.z) * gridResolution)));
    const color = source.vertexColors?.[index];
    const seam = preserveSeams && color ? `:${Math.round(color.r * 255)}:${Math.round(color.g * 255)}:${Math.round(color.b * 255)}` : '';
    const key = `${x}:${y}:${z}${seam}`; vertexCellKeys[index] = key;
    const cell = cells.get(key) ?? { sum: { x: 0, y: 0, z: 0 }, count: 0, colors: [] };
    cell.sum = { x: cell.sum.x + vertex.x, y: cell.sum.y + vertex.y, z: cell.sum.z + vertex.z }; cell.count += 1;
    if (color) cell.colors.push(color); cells.set(key, cell);
  });
  const keyToVertex = new Map<string, number>(); const vertices: Vec3[] = []; const colors: ColorRGB[] = [];
  for (const [key, cell] of cells) {
    keyToVertex.set(key, vertices.length); vertices.push({ x: cell.sum.x / cell.count, y: cell.sum.y / cell.count, z: cell.sum.z / cell.count });
    if (cell.colors.length) { const sum = cell.colors.reduce((acc, color) => ({ r: acc.r + color.r, g: acc.g + color.g, b: acc.b + color.b }), { r: 0, g: 0, b: 0 }); colors.push({ r: sum.r / cell.colors.length, g: sum.g / cell.colors.length, b: sum.b / cell.colors.length }); }
  }
  const indices: number[] = []; const triangles = new Set<string>();
  for (let offset = 0; offset + 2 < mesh.indices.length; offset += 3) {
    const a = keyToVertex.get(vertexCellKeys[mesh.indices[offset]!]!); const b = keyToVertex.get(vertexCellKeys[mesh.indices[offset + 1]!]!); const c = keyToVertex.get(vertexCellKeys[mesh.indices[offset + 2]!]!);
    if (a === undefined || b === undefined || c === undefined || a === b || b === c || c === a) continue;
    const key = faceKey(a, b, c); if (triangles.has(key)) continue; triangles.add(key); indices.push(a, b, c);
  }
  const clustered: ColoredMesh = { vertices, indices, vertexColors: colors.length === vertices.length ? colors : undefined, palette: source.palette?.map((color) => ({ ...color })) };
  return repairMeshDetailed(clustered, { weldVertices: !preserveSeams }).mesh;
}

function fitTriangleBudget(mesh: Mesh, budget: number, preserveSeams: boolean): Mesh {
  let current = repairMeshDetailed(mesh, { weldVertices: !preserveSeams }).mesh;
  for (let pass = 0; pass < 8 && Math.floor(current.indices.length / 3) > budget; pass += 1) {
    const ratio = Math.max(0.05, budget / Math.max(1, current.indices.length / 3) * 0.9);
    const next = clusterMesh(current, ratio, preserveSeams);
    if (next.indices.length >= current.indices.length) break;
    current = next;
  }
  return current;
}

function createBoxMesh(box: BoundsResult): Mesh {
  const { min, max } = box;
  const vertices = [
    { x: min.x, y: min.y, z: min.z }, { x: max.x, y: min.y, z: min.z }, { x: max.x, y: max.y, z: min.z }, { x: min.x, y: max.y, z: min.z },
    { x: min.x, y: min.y, z: max.z }, { x: max.x, y: min.y, z: max.z }, { x: max.x, y: max.y, z: max.z }, { x: min.x, y: max.y, z: max.z },
  ];
  const indices = [0,2,1,0,3,2,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,1,2,6,1,6,5,3,0,4,3,4,7];
  return { vertices, indices };
}

function createSphereMesh(center: Vec3, radius: number): Mesh {
  const vertices: Vec3[] = [{ x: center.x, y: center.y + radius, z: center.z }, { x: center.x, y: center.y - radius, z: center.z }];
  const rings = 6; const segments = 12;
  for (let ring = 1; ring < rings; ring += 1) {
    const phi = Math.PI * ring / rings;
    for (let segment = 0; segment < segments; segment += 1) {
      const theta = Math.PI * 2 * segment / segments;
      vertices.push({ x: center.x + radius * Math.sin(phi) * Math.cos(theta), y: center.y + radius * Math.cos(phi), z: center.z + radius * Math.sin(phi) * Math.sin(theta) });
    }
  }
  const indices: number[] = [];
  for (let segment = 0; segment < segments; segment += 1) indices.push(0, 2 + segment, 2 + (segment + 1) % segments);
  for (let ring = 0; ring < rings - 2; ring += 1) for (let segment = 0; segment < segments; segment += 1) {
    const a = 2 + ring * segments + segment; const b = 2 + ring * segments + (segment + 1) % segments; const c = a + segments; const d = b + segments;
    indices.push(a, c, b, b, c, d);
  }
  const lastStart = 2 + (rings - 2) * segments;
  for (let segment = 0; segment < segments; segment += 1) indices.push(1, lastStart + (segment + 1) % segments, lastStart + segment);
  return { vertices, indices };
}

export function prepareGameReadyMesh(mesh: Mesh, options: PrepareGameReadyMeshOptions = {}): PreparedGameReadyMesh {
  const targetTriangleBudget = Math.max(16, Math.floor(options.targetTriangleBudget ?? options.triangleBudget ?? 50_000));
  const scanOptions: IntrinsicAssetScanOptions = { ...options, triangleBudget: targetTriangleBudget };
  const preserveBase = repairMeshDetailed(mesh, { weldVertices: false });
  const weldBase = repairMeshDetailed(mesh, { weldVertices: true });
  const variants = [
    { strategy: 'preserve-seams' as const, base: preserveBase, repaired: applyTopologyRepairs(preserveBase.mesh, scanOptions, true) },
    { strategy: 'weld-compatible-seams' as const, base: weldBase, repaired: applyTopologyRepairs(weldBase.mesh, scanOptions, false) },
  ].sort((left, right) => left.repaired.scan.criticalIssues.length - right.repaired.scan.criticalIssues.length || right.repaired.scan.score - left.repaired.scan.score || left.repaired.scan.topology.estimatedBytes - right.repaired.scan.topology.estimatedBytes);
  const selected = variants[0]!; const preserveSeams = selected.strategy === 'preserve-seams';
  const lod0 = fitTriangleBudget(selected.repaired.mesh, targetTriangleBudget, preserveSeams);
  const lod1 = clusterMesh(lod0, 0.55, preserveSeams);
  const lod2 = clusterMesh(lod0, 0.25, preserveSeams);
  const scans = [lod0, lod1, lod2].map((lod) => scanMeshForGameReadiness(lod, scanOptions));
  const meshBounds = bounds(lod0);
  const collision: GameReadyCollisionProxy = {
    kind: 'box-and-sphere', center: meshBounds.center, dimensions: meshBounds.dimensions, radius: meshBounds.radius,
    shapes: [
      { kind: 'box', center: meshBounds.center, dimensions: meshBounds.dimensions },
      { kind: 'sphere', center: meshBounds.center, radius: meshBounds.radius },
    ],
  };
  const lods = scans.map((scan, index): GameReadyLodSummary => ({
    level: index as 0 | 1 | 2, vertices: scan.topology.vertices, triangles: scan.topology.triangles, score: scan.score,
    signature: scan.similaritySignature, orientedSignature: scan.orientedSimilaritySignature,
    canonicalSimilarityToLod0: index === 0 ? 1 : compareAssetSimilarity(scans[0]!, scan),
  }));
  const budgetReduced = lod0.indices.length < selected.repaired.mesh.indices.length;
  const appliedRepairIds = new Set(selected.repaired.report.appliedRepairIds);
  if (budgetReduced) appliedRepairIds.add('reduce-triangle-budget');
  const topologyRepair: TopologyRepairReport = {
    ...selected.repaired.report,
    appliedRepairIds: [...appliedRepairIds],
    residualRepairIds: scans[0]!.repairPlan.map((step) => step.id),
    afterScore: scans[0]!.score,
  };
  return {
    mesh: lod0,
    scan: scans[0]!,
    lodMeshes: [lod0, lod1, lod2],
    collisionMeshes: [createBoxMesh(meshBounds), createSphereMesh(meshBounds.center, meshBounds.radius)],
    summary: {
      repairStrategy: selected.strategy,
      certificate: scans[0]!.certificate,
      lods,
      collision,
      repairReport: selected.base.report,
      topologyRepair,
    },
  };
}
