import { createSphereSDF, meshToSnapshot, runDualContouring, validateMesh, type SDF } from '@/engins/isosurfaceDualContouring';
import { PartNode } from '../assetTypes'; import { flattenParts, primitiveStats } from './primitiveBuilder';
export function computeMeshMetrics(parts:PartNode[]){ return flattenParts(parts).reduce((m,p)=>{ const s=primitiveStats(p.primitive.kind,p.primitive.segments??12); return {vertices:m.vertices+s.vertices, triangles:m.triangles+s.triangles}; },{vertices:0,triangles:0}); }

export function buildImplicitContentMesh(sdf: SDF = createSphereSDF(0.72), resolution = 16) {
  const mesh = runDualContouring(sdf, { resolution, size: 2, origin: { x: -1, y: -1, z: -1 } });
  return meshToSnapshot(mesh, validateMesh(mesh));
}
