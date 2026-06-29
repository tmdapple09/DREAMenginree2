import { createBoxSDF, createCapsuleSDF, createSphereSDF, createTorusSDF, meshToSnapshot, runIsoSurfaceJob, type DualContouringSettings, type IsoSurfaceJob, type SDF } from '@/engins/isosurfaceDualContouring';
import { PartNode } from '../assetTypes';
import { flattenParts, primitiveStats } from './primitiveBuilder';
import type { AlgebraicRegionFit } from '../photo/regionDetector';

export function computeMeshMetrics(parts: PartNode[]) {
  return flattenParts(parts).reduce((m, p) => {
    const s = primitiveStats(p.primitive.kind, p.primitive.segments ?? 12);
    return { vertices: m.vertices + s.vertices, triangles: m.triangles + s.triangles };
  }, { vertices: 0, triangles: 0 });
}

export function sdfFromAlgebraicFit(fit: AlgebraicRegionFit): SDF {
  const sx = Math.max(0.12, fit.radii.x / Math.max(fit.radii.x, fit.radii.y, 1));
  const sy = Math.max(0.12, fit.radii.y / Math.max(fit.radii.x, fit.radii.y, 1));
  if (fit.kind === 'torus') return createTorusSDF(0.44, 0.14);
  if (fit.kind === 'capsule' || fit.kind === 'branch-curve') return createCapsuleSDF({ x: 0, y: -0.62 * sy, z: 0 }, { x: 0, y: 0.62 * sy, z: 0 }, Math.max(0.12, 0.22 * sx));
  if (fit.kind === 'box') return createBoxSDF({ x: 0.56 * sx, y: 0.56 * sy, z: 0.34 }, 0.04);
  return createSphereSDF(Math.max(0.32, Math.min(0.72, (sx + sy) * 0.36)));
}

export function buildImplicitContentMesh(sdf: SDF = createSphereSDF(0.72), resolution = 16, settings: Partial<DualContouringSettings> = {}) {
  const jobSeed = { id: `content-preview-${resolution}`, sourceEngin: 'content', purpose: 'asset-generation', sdfKind: 'custom', settings: { resolution, size: 2, origin: { x: -1, y: -1, z: -1 }, ...settings } } satisfies Omit<IsoSurfaceJob, 'diagnostics' | 'output' | 'settings'> & { settings?: Partial<DualContouringSettings> };
  const result = runIsoSurfaceJob(sdf, jobSeed);
  return { ...meshToSnapshot(result.mesh, result.job.diagnostics), job: result.job };
}

export function buildRegionFitContentMesh(fit: AlgebraicRegionFit, resolution = 18) {
  const result = runIsoSurfaceJob(sdfFromAlgebraicFit(fit), {
    id: `content-region-${fit.inferredLabel}-${resolution}`,
    sourceEngin: 'content',
    purpose: 'asset-generation',
    sdfKind: fit.sdfHint,
    settings: { resolution, size: 2, origin: { x: -1, y: -1, z: -1 } },
  });
  return { ...result.snapshot, job: result.job };
}
