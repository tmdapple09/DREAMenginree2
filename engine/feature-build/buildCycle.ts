import type { DaydreamEnginManifest, FeatureStatus } from './featureManifest';




export type BuildPhase = 'BUILD' | 'UPGRADE' | 'REFINE';

export interface BuildCycleState {
  domain: string;
  engin: string;
  phase: BuildPhase;
  featuresImplemented: number;
  
  featuresActive: number;
  featurePlanned: number;
  maxFeatures: number;
  
  progressPct: number;
  
  usablePct: number;
}


export function getBuildPhase(
  featuresUsable: number,
  featuresImplemented: number,
  maxFeatures: number,
  refineThreshold: number,
): BuildPhase {
  if (featuresImplemented >= maxFeatures) return 'REFINE';
  if (maxFeatures > 0 && featuresUsable / maxFeatures >= refineThreshold) return 'UPGRADE';
  return 'BUILD';
}


export function calculateProgress(featuresImplemented: number, maxFeatures: number): number {
  if (maxFeatures <= 0) return 0;
  return Math.min(100, Math.round((featuresImplemented / maxFeatures) * 100));
}


export function countFeaturesByStatus(
  manifest: DaydreamEnginManifest,
  status: FeatureStatus,
): number {
  return manifest.features.filter((f) => f.status === status).length;
}


export function countUsableFeatures(manifest: DaydreamEnginManifest): number {
  return manifest.features.filter(
    (f) => f.status === 'implemented' || f.status === 'active',
  ).length;
}


export function computeBuildCycleState(manifest: DaydreamEnginManifest): BuildCycleState {
  const featuresImplemented = countFeaturesByStatus(manifest, 'implemented');
  const featuresActive      = countFeaturesByStatus(manifest, 'active');
  const featurePlanned      = countFeaturesByStatus(manifest, 'planned');
  const featuresUsable      = featuresImplemented + featuresActive;
  const { maxFeatures, domain, engin, refineThreshold } = manifest;

  return {
    domain,
    engin,
    phase:               getBuildPhase(featuresUsable, featuresImplemented, maxFeatures, refineThreshold),
    featuresImplemented,
    featuresActive,
    featurePlanned,
    maxFeatures,
    progressPct:         calculateProgress(featuresImplemented, maxFeatures),
    usablePct:           calculateProgress(featuresUsable, maxFeatures),
  };
}


export function computeAllBuildCycleStates(
  manifests: readonly DaydreamEnginManifest[],
): BuildCycleState[] {
  return manifests.map(computeBuildCycleState);
}


export function allPairsInRefinePhase(states: BuildCycleState[]): boolean {
  return states.length > 0 && states.every((s) => s.phase === 'REFINE');
}


export function allPairsMovingForward(states: BuildCycleState[]): boolean {
  return states.length > 0 && states.every(
    (s) => s.phase === 'UPGRADE' || s.phase === 'REFINE',
  );
}
