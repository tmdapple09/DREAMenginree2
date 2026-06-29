import { createSphereSDF, createTerrainCaveSDF, meshToSnapshot, runIsoSurfaceJob, type DualContouringSettings, type SDF } from '@/engins/isosurfaceDualContouring';

export type LabImplicitSurfacePreset = 'fluid' | 'particle' | 'neural' | 'quantum' | 'metaball' | 'terrain-cave';

export interface LabImplicitSurfaceRun {
  kind: LabImplicitSurfacePreset;
  seed?: number;
  resolution?: number;
  domainSize?: number;
  isoLevel?: number;
  noise?: number;
  sdf?: SDF;
}

function labPresetSDF(run: LabImplicitSurfaceRun): SDF {
  const seed = run.seed ?? 1;
  const noise = run.noise ?? 0.025;
  if (run.sdf) return run.sdf;
  if (run.kind === 'terrain-cave') return createTerrainCaveSDF(seed);
  if (run.kind === 'metaball' || run.kind === 'particle' || run.kind === 'fluid') {
    return (p) => {
      const centers = [{ x: -0.28, y: 0, z: 0 }, { x: 0.24, y: Math.sin(seed) * 0.08, z: 0.08 }, { x: 0.02, y: 0.28, z: -0.12 }];
      const field = centers.reduce((sum, c) => sum + 0.12 / Math.max(0.015, (p.x - c.x) ** 2 + (p.y - c.y) ** 2 + (p.z - c.z) ** 2), 0);
      return 1 - field + Math.sin((p.x + p.y + p.z + seed) * 6) * noise;
    };
  }
  return (p) => createSphereSDF(0.62 + Math.sin(seed) * 0.04)(p) + Math.sin((p.x + p.y + p.z + seed) * 6) * noise;
}

export function runLabImplicitSurface(run: LabImplicitSurfaceRun) {
  const settings: Partial<DualContouringSettings> = { resolution: run.resolution ?? 18, size: run.domainSize ?? 2, origin: { x: -(run.domainSize ?? 2) / 2, y: -(run.domainSize ?? 2) / 2, z: -(run.domainSize ?? 2) / 2 }, isoLevel: run.isoLevel ?? 0 };
  const result = runIsoSurfaceJob(labPresetSDF(run), { id: `lab-${run.kind}-${run.seed ?? 1}-${settings.resolution}`, sourceEngin: 'lab', purpose: 'simulation-surface', sdfKind: run.kind === 'terrain-cave' ? 'terrain-cave' : run.kind === 'metaball' || run.kind === 'particle' || run.kind === 'fluid' ? 'metaball' : 'custom', settings });
  return { ...meshToSnapshot(result.mesh, result.job.diagnostics), job: result.job };
}
