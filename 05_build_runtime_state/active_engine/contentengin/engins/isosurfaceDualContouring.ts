export interface Vec3 { x: number; y: number; z: number }
export interface Mesh { vertices: Vec3[]; indices: number[] }
export interface MeshDiagnostics { vertices: number; triangles: number; degenerateTriangles: number; boundaryEdges: number; nonManifoldEdges: number }
export type IsoSurfaceSourceEngin = 'content' | 'game' | 'lab';
export type IsoSurfacePurpose = 'asset-generation' | 'terrain-chunk' | 'collision-proxy' | 'simulation-surface' | 'mesh-repair';
export type IsoSurfaceSdfKind = 'sphere' | 'torus' | 'terrain-cave' | 'metaball' | 'capsule-blend' | 'image-region-fit' | 'custom';
export interface IsoSurfaceJob { id: string; sourceEngin: IsoSurfaceSourceEngin; purpose: IsoSurfacePurpose; sdfKind: IsoSurfaceSdfKind; settings: DualContouringSettings; diagnostics?: MeshDiagnostics & { resolution: number; sampleDomain: { origin: Vec3; size: number }; estimatedMemoryBytes: number; mobileSafetyTier: MobileIsoSurfaceTier }; output?: { meshId: string; glbUrl?: string; objUrl?: string; collisionId?: string } }
export type MobileIsoSurfaceTier = 'preview' | 'good-mobile' | 'high-end-mobile' | 'desktop-or-batch';
export type SDF = (p: Vec3) => number;
export interface DualContouringSettings { origin: Vec3; size: number; resolution: number; isoLevel: number; normalEpsFactor: number; qefRegularization: number; areaEpsilon: number }

export const DEFAULT_MOBILE_DUAL_CONTOURING_SETTINGS: DualContouringSettings = {
  origin: { x: -1, y: -1, z: -1 },
  size: 2,
  resolution: 18,
  isoLevel: 0,
  normalEpsFactor: 0.01,
  qefRegularization: 1e-8,
  areaEpsilon: 1e-18,
};

const add = (a: Vec3, b: Vec3): Vec3 => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });
const sub = (a: Vec3, b: Vec3): Vec3 => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
const mul = (a: Vec3, s: number): Vec3 => ({ x: a.x * s, y: a.y * s, z: a.z * s });
const dot = (a: Vec3, b: Vec3): number => a.x * b.x + a.y * b.y + a.z * b.z;
const cross = (a: Vec3, b: Vec3): Vec3 => ({ x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x });
const lenSq = (a: Vec3): number => dot(a, a);
const finite = (v: Vec3): boolean => Number.isFinite(v.x) && Number.isFinite(v.y) && Number.isFinite(v.z);
const norm = (a: Vec3): Vec3 => { const l2 = lenSq(a); return l2 <= 1e-20 ? { x: 0, y: 0, z: 0 } : mul(a, 1 / Math.sqrt(l2)); };
const clamp = (v: Vec3, lo: Vec3, hi: Vec3): Vec3 => ({ x: Math.min(hi.x, Math.max(lo.x, v.x)), y: Math.min(hi.y, Math.max(lo.y, v.y)), z: Math.min(hi.z, Math.max(lo.z, v.z)) });
const key = (x: number, y: number, z: number): string => `${x},${y},${z}`;
const crosses = (a: number, b: number, iso: number): boolean => (a < iso) !== (b < iso);
const areaSq = (a: Vec3, b: Vec3, c: Vec3): number => lenSq(cross(sub(b, a), sub(c, a))) * 0.25;

function estimateNormal(sdf: SDF, p: Vec3, eps: number): Vec3 {
  return norm({
    x: sdf(add(p, { x: eps, y: 0, z: 0 })) - sdf(add(p, { x: -eps, y: 0, z: 0 })),
    y: sdf(add(p, { x: 0, y: eps, z: 0 })) - sdf(add(p, { x: 0, y: -eps, z: 0 })),
    z: sdf(add(p, { x: 0, y: 0, z: eps })) - sdf(add(p, { x: 0, y: 0, z: -eps })),
  });
}

function solve3(A: number[][], b: number[]): Vec3 | null {
  for (let col = 0; col < 3; col++) {
    let pivot = col; let best = Math.abs(A[col][col]);
    for (let row = col + 1; row < 3; row++) if (Math.abs(A[row][col]) > best) { best = Math.abs(A[row][col]); pivot = row; }
    if (best < 1e-14) return null;
    if (pivot !== col) { [A[col], A[pivot]] = [A[pivot], A[col]]; [b[col], b[pivot]] = [b[pivot], b[col]]; }
    const inv = 1 / A[col][col];
    for (let row = col + 1; row < 3; row++) { const f = A[row][col] * inv; A[row][col] = 0; for (let k = col + 1; k < 3; k++) A[row][k] -= f * A[col][k]; b[row] -= f * b[col]; }
  }
  const x = [0, 0, 0];
  for (let row = 2; row >= 0; row--) { let rhs = b[row]; for (let k = row + 1; k < 3; k++) rhs -= A[row][k] * x[k]; if (Math.abs(A[row][row]) < 1e-14) return null; x[row] = rhs / A[row][row]; }
  const out = { x: x[0], y: x[1], z: x[2] }; return finite(out) ? out : null;
}

class QEF {
  private ATA = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  private ATb = [0, 0, 0];
  private mass = { x: 0, y: 0, z: 0 };
  private count = 0;
  add(pos: Vec3, normal: Vec3): void { const n = norm(normal); if (lenSq(n) < 1e-20 || !finite(n)) return; const vals = [n.x, n.y, n.z]; for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) this.ATA[r][c] += vals[r] * vals[c]; const ndp = dot(n, pos); for (let r = 0; r < 3; r++) this.ATb[r] += vals[r] * ndp; this.mass = add(this.mass, pos); this.count++; }
  solve(minB: Vec3, maxB: Vec3, regularization: number): Vec3 { if (this.count === 0) return mul(add(minB, maxB), 0.5); const centroid = clamp(mul(this.mass, 1 / this.count), minB, maxB); const scale = this.ATA.flat().reduce((s, v) => s + Math.abs(v), 0); const lambda = Math.max(1e-12, regularization * Math.max(1, scale)); const A = this.ATA.map((row, r) => row.map((v, c) => v + (r === c ? lambda : 0))); const b = [this.ATb[0] + lambda * centroid.x, this.ATb[1] + lambda * centroid.y, this.ATb[2] + lambda * centroid.z]; const sol = solve3(A, b); if (!sol) return centroid; const diag = Math.sqrt(lenSq(sub(maxB, minB))); const inside = sol.x >= minB.x - diag * 0.25 && sol.x <= maxB.x + diag * 0.25 && sol.y >= minB.y - diag * 0.25 && sol.y <= maxB.y + diag * 0.25 && sol.z >= minB.z - diag * 0.25 && sol.z <= maxB.z + diag * 0.25; return inside ? clamp(sol, minB, maxB) : centroid; }
}

export function normalizeDualContouringSettings(settings: Partial<DualContouringSettings> = {}): DualContouringSettings {
  return { ...DEFAULT_MOBILE_DUAL_CONTOURING_SETTINGS, ...settings };
}

export function classifyMobileIsoSurfaceTier(resolution: number): MobileIsoSurfaceTier {
  if (resolution <= 18) return 'preview';
  if (resolution <= 32) return 'good-mobile';
  if (resolution <= 64) return 'high-end-mobile';
  return 'desktop-or-batch';
}

export function estimateIsoSurfaceMemoryBytes(settings: Partial<DualContouringSettings> = {}): number {
  const cfg = normalizeDualContouringSettings(settings);
  const cells = cfg.resolution ** 3;
  return Math.ceil(cells * (8 * 4 + 3 * 4 + 4));
}

export function runDualContouring(sdf: SDF, settings: Partial<DualContouringSettings> = {}): Mesh {
  const cfg = normalizeDualContouringSettings(settings); if (cfg.resolution <= 0 || cfg.size <= 0) throw new Error('Invalid dual contouring settings.');
  const step = cfg.size / cfg.resolution; const eps = Math.max(step * cfg.normalEpsFactor, 1e-7); const verts: Vec3[] = []; const indices: number[] = []; const cells = new Map<string, number>();
  const corners = [[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]]; const edges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
  for (let z = 0; z < cfg.resolution; z++) for (let y = 0; y < cfg.resolution; y++) for (let x = 0; x < cfg.resolution; x++) {
    const vals: number[] = []; const pos: Vec3[] = []; let below = false; let above = false;
    for (const [ox, oy, oz] of corners) { const p = add(cfg.origin, { x: (x + ox) * step, y: (y + oy) * step, z: (z + oz) * step }); const f = sdf(p); if (!Number.isFinite(f)) throw new Error('SDF returned a non-finite value.'); vals.push(f); pos.push(p); below ||= f < cfg.isoLevel; above ||= f >= cfg.isoLevel; }
    if (!below || !above) continue; const qef = new QEF(); let hermite = 0;
    for (const [a, b] of edges) if (crosses(vals[a], vals[b], cfg.isoLevel)) { const denom = vals[a] - vals[b]; const t = Math.abs(denom) > 1e-30 ? Math.min(1, Math.max(0, (vals[a] - cfg.isoLevel) / denom)) : 0.5; const p = add(pos[a], mul(sub(pos[b], pos[a]), t)); const n = estimateNormal(sdf, p, eps); if (lenSq(n) > 1e-20) { qef.add(p, n); hermite++; } }
    if (hermite === 0) continue; const minB = add(cfg.origin, { x: x * step, y: y * step, z: z * step }); const v = qef.solve(minB, add(minB, { x: step, y: step, z: step }), cfg.qefRegularization); cells.set(key(x, y, z), verts.push(v) - 1);
  }
  const addTri = (a: number, b: number, c: number) => { if (a === b || b === c || c === a || areaSq(verts[a], verts[b], verts[c]) <= cfg.areaEpsilon) return; indices.push(a, b, c); };
  const quad = (ks: string[], posNormal: boolean) => { const q = ks.map((k) => cells.get(k)); if (q.some((v) => v === undefined)) return; const [a,b,c,d] = q as number[]; if (posNormal) { addTri(a,b,c); addTri(a,c,d); } else { addTri(a,c,b); addTri(a,d,c); } };
  for (let z = 0; z <= cfg.resolution; z++) for (let y = 0; y <= cfg.resolution; y++) for (let x = 0; x <= cfg.resolution; x++) { const p = add(cfg.origin, { x: x * step, y: y * step, z: z * step }); const f0 = sdf(p); if (x < cfg.resolution) { const f1 = sdf(add(p, { x: step, y: 0, z: 0 })); if (crosses(f0, f1, cfg.isoLevel)) quad([key(x,y-1,z-1),key(x,y,z-1),key(x,y,z),key(x,y-1,z)], f0 < cfg.isoLevel); } if (y < cfg.resolution) { const f1 = sdf(add(p, { x: 0, y: step, z: 0 })); if (crosses(f0, f1, cfg.isoLevel)) quad([key(x-1,y,z-1),key(x-1,y,z),key(x,y,z),key(x,y,z-1)], f0 < cfg.isoLevel); } if (z < cfg.resolution) { const f1 = sdf(add(p, { x: 0, y: 0, z: step })); if (crosses(f0, f1, cfg.isoLevel)) quad([key(x-1,y-1,z),key(x,y-1,z),key(x,y,z),key(x-1,y,z)], f0 < cfg.isoLevel); } }
  return { vertices: verts, indices };
}

export function validateMesh(mesh: Mesh, areaEpsilon = 1e-18): MeshDiagnostics { const edgeUse = new Map<string, number>(); let degenerateTriangles = 0; for (let i = 0; i + 2 < mesh.indices.length; i += 3) { const [a,b,c] = [mesh.indices[i], mesh.indices[i+1], mesh.indices[i+2]]; if (![a,b,c].every((idx)=>Number.isFinite(idx)&&Number.isInteger(idx)&&idx>=0&&idx<mesh.vertices.length)) throw new Error('Mesh contains an invalid triangle index.'); if (a === b || b === c || c === a || !finite(mesh.vertices[a]) || !finite(mesh.vertices[b]) || !finite(mesh.vertices[c]) || areaSq(mesh.vertices[a], mesh.vertices[b], mesh.vertices[c]) <= areaEpsilon) { degenerateTriangles++; continue; } for (const [u,v] of [[a,b],[b,c],[c,a]]) { const e = u < v ? `${u}:${v}` : `${v}:${u}`; edgeUse.set(e, (edgeUse.get(e) ?? 0) + 1); } } let boundaryEdges = 0; let nonManifoldEdges = 0; for (const use of edgeUse.values()) { if (use === 1) boundaryEdges++; else if (use > 2) nonManifoldEdges++; } return { vertices: mesh.vertices.length, triangles: Math.floor(mesh.indices.length / 3), degenerateTriangles, boundaryEdges, nonManifoldEdges }; }

export function createSphereSDF(radius = 0.72): SDF { return (p) => Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z) - radius; }
export function createTerrainCaveSDF(seed = 1): SDF { return (p) => { const n = Math.sin((p.x + seed) * 5.1) * Math.cos((p.z - seed) * 4.7) * 0.12; const ground = p.y + 0.18 * Math.sin(p.x * 2.3 + seed) + n; const cave = 0.34 - Math.sqrt((p.x * 0.85) ** 2 + (p.y + 0.08) ** 2 + (p.z * 0.85) ** 2); return Math.max(ground, -cave); }; }
export function meshToSnapshot(mesh: Mesh, diagnostics = validateMesh(mesh)): { vertices: number; triangles: number; diagnostics: MeshDiagnostics; positions: number[]; indices: number[] } { return { vertices: mesh.vertices.length, triangles: Math.floor(mesh.indices.length / 3), diagnostics, positions: mesh.vertices.flatMap((v) => [v.x, v.y, v.z]), indices: mesh.indices }; }

export function createIsoSurfaceJob(args: { id: string; sourceEngin: IsoSurfaceSourceEngin; purpose: IsoSurfacePurpose; sdfKind: IsoSurfaceSdfKind; settings?: Partial<DualContouringSettings>; mesh?: Mesh; output?: IsoSurfaceJob['output'] }): IsoSurfaceJob {
  const settings = normalizeDualContouringSettings(args.settings);
  const diagnostics = args.mesh ? {
    ...validateMesh(args.mesh, settings.areaEpsilon),
    resolution: settings.resolution,
    sampleDomain: { origin: settings.origin, size: settings.size },
    estimatedMemoryBytes: estimateIsoSurfaceMemoryBytes(settings),
    mobileSafetyTier: classifyMobileIsoSurfaceTier(settings.resolution),
  } : undefined;
  return { id: args.id, sourceEngin: args.sourceEngin, purpose: args.purpose, sdfKind: args.sdfKind, settings, diagnostics, output: args.output };
}

export function runIsoSurfaceJob(sdf: SDF, job: Omit<IsoSurfaceJob, 'diagnostics' | 'output' | 'settings'> & { settings?: Partial<DualContouringSettings> }): { job: IsoSurfaceJob; mesh: Mesh; snapshot: ReturnType<typeof meshToSnapshot> } {
  const mesh = runDualContouring(sdf, job.settings);
  const completed = createIsoSurfaceJob({ ...job, mesh });
  return { job: completed, mesh, snapshot: meshToSnapshot(mesh, completed.diagnostics) };
}

export function createTorusSDF(majorRadius = 0.52, minorRadius = 0.16): SDF { return (p) => { const qx = Math.sqrt(p.x * p.x + p.z * p.z) - majorRadius; return Math.sqrt(qx * qx + p.y * p.y) - minorRadius; }; }
export function createCapsuleSDF(a: Vec3 = { x: 0, y: -0.55, z: 0 }, b: Vec3 = { x: 0, y: 0.55, z: 0 }, radius = 0.22): SDF { return (p) => { const pa = sub(p, a); const ba = sub(b, a); const h = Math.min(1, Math.max(0, dot(pa, ba) / Math.max(1e-12, dot(ba, ba)))); return Math.sqrt(lenSq(sub(pa, mul(ba, h)))) - radius; }; }
export function createBoxSDF(halfExtents: Vec3 = { x: 0.55, y: 0.55, z: 0.55 }, radius = 0): SDF { return (p) => { const q = { x: Math.abs(p.x) - halfExtents.x, y: Math.abs(p.y) - halfExtents.y, z: Math.abs(p.z) - halfExtents.z }; const outside = Math.sqrt(Math.max(q.x, 0) ** 2 + Math.max(q.y, 0) ** 2 + Math.max(q.z, 0) ** 2); return outside + Math.min(Math.max(q.x, q.y, q.z), 0) - radius; }; }
