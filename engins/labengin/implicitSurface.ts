import { createSphereSDF, meshToSnapshot, runDualContouring, validateMesh, type SDF } from '@/engins/isosurfaceDualContouring';

export interface LabImplicitSurfaceRun {
  kind: 'fluid' | 'particle' | 'neural' | 'quantum';
  seed?: number;
  resolution?: number;
  sdf?: SDF;
}

export function runLabImplicitSurface(run: LabImplicitSurfaceRun) {
  const seed = run.seed ?? 1;
  const sdf = run.sdf ?? ((p) => createSphereSDF(0.62 + Math.sin(seed) * 0.04)(p) + Math.sin((p.x + p.y + p.z + seed) * 6) * 0.025);
  const mesh = runDualContouring(sdf, { resolution: run.resolution ?? 18, size: 2, origin: { x: -1, y: -1, z: -1 } });
  return meshToSnapshot(mesh, validateMesh(mesh));
}
