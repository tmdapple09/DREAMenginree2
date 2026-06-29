import { ShapeRegion, type Vec2 } from '../assetTypes';

export type AlgebraicFitKind = 'ellipse' | 'box' | 'capsule' | 'torus' | 'branch-curve';
export type SemanticPartLabel = ShapeRegion['label'];

export interface AlgebraicRegionFit {
  kind: AlgebraicFitKind;
  center: Vec2;
  radii: Vec2;
  angle: number;
  aspectRatio: number;
  symmetryScore: number;
  contourScore: number;
  repeatedPairScore: number;
  skeleton: Vec2[];
  sdfHint: 'sphere' | 'torus' | 'capsule-blend' | 'image-region-fit';
  inferredLabel: SemanticPartLabel;
  confidence: number;
}

export type SemanticShapeRegion = ShapeRegion & { algebraicFit: AlgebraicRegionFit; userConfirmed?: boolean };

const LABELS: SemanticPartLabel[] = ['head','torso','waist','arm-left','arm-right','leg-left','leg-right','wheel','window','door','roof','trunk','branch','leaf','road','water','unknown'];
const clamp01 = (n: number) => Math.max(0, Math.min(1, Number.isFinite(n) ? n : 0));

function boundsSize(region: ShapeRegion): Vec2 {
  return { x: Math.max(1, region.bounds.maxX - region.bounds.minX), y: Math.max(1, region.bounds.maxY - region.bounds.minY) };
}

function scoreSymmetry(region: ShapeRegion): number {
  if (region.contour.length < 3) return 0.35;
  const width = boundsSize(region).x;
  const cx = region.centroid.x;
  const left = region.contour.filter((p) => p.x < cx).length;
  const right = region.contour.length - left;
  return clamp01(1 - Math.abs(left - right) / Math.max(1, region.contour.length) - Math.abs(cx - (region.bounds.minX + width / 2)) / width);
}

function inferFitKind(region: ShapeRegion, aspectRatio: number, symmetryScore: number): AlgebraicFitKind {
  if (region.label === 'wheel') return 'torus';
  if (['arm-left','arm-right','leg-left','leg-right','trunk','branch'].includes(region.label)) return 'capsule';
  if (['door','window','roof'].includes(region.label)) return 'box';
  if (aspectRatio > 2.8) return 'capsule';
  if (symmetryScore > 0.72) return 'ellipse';
  return 'box';
}

function inferLabel(region: ShapeRegion, aspectRatio: number, symmetryScore: number): SemanticPartLabel {
  if (region.label !== 'unknown') return region.label;
  const cy = region.centroid.y;
  if (symmetryScore > 0.78 && aspectRatio < 1.25) return 'head';
  if (aspectRatio > 3) return cy < region.bounds.minY + boundsSize(region).y * 0.45 ? 'branch' : 'trunk';
  if (aspectRatio > 1.6) return 'torso';
  return 'unknown';
}

export function fitAlgebraicRegion(region: ShapeRegion): AlgebraicRegionFit {
  const size = boundsSize(region);
  const aspectRatio = Math.max(size.x, size.y) / Math.max(1, Math.min(size.x, size.y));
  const symmetryScore = scoreSymmetry(region);
  const kind = inferFitKind(region, aspectRatio, symmetryScore);
  const inferredLabel = inferLabel(region, aspectRatio, symmetryScore);
  const contourScore = clamp01(region.contour.length / Math.max(8, (size.x + size.y) * 0.5));
  const repeatedPairScore = ['wheel','arm-left','arm-right','leg-left','leg-right','branch'].includes(inferredLabel) ? 0.68 : 0.25;
  const confidence = clamp01(region.confidence * 0.45 + symmetryScore * 0.25 + contourScore * 0.2 + (LABELS.includes(inferredLabel) && inferredLabel !== 'unknown' ? 0.1 : 0));
  const vertical = size.y >= size.x;
  const skeleton = kind === 'capsule' || kind === 'branch-curve'
    ? vertical
      ? [{ x: region.centroid.x, y: region.bounds.minY }, { x: region.centroid.x, y: region.bounds.maxY }]
      : [{ x: region.bounds.minX, y: region.centroid.y }, { x: region.bounds.maxX, y: region.centroid.y }]
    : [];
  return {
    kind,
    center: region.centroid,
    radii: { x: size.x / 2, y: size.y / 2 },
    angle: 0,
    aspectRatio,
    symmetryScore,
    contourScore,
    repeatedPairScore,
    skeleton,
    sdfHint: kind === 'torus' ? 'torus' : kind === 'capsule' || kind === 'branch-curve' ? 'capsule-blend' : 'image-region-fit',
    inferredLabel,
    confidence,
  };
}

export function detectSemanticAlgebraicRegions(regions: ShapeRegion[]): SemanticShapeRegion[] {
  return regions.map((region) => {
    const algebraicFit = fitAlgebraicRegion(region);
    return { ...region, label: algebraicFit.inferredLabel, algebraicFit, confidence: Math.max(region.confidence, algebraicFit.confidence) };
  });
}

export function relabelRegion(region: ShapeRegion, label: ShapeRegion['label']): SemanticShapeRegion {
  const updated = { ...region, label };
  return { ...updated, algebraicFit: fitAlgebraicRegion(updated), userConfirmed: true };
}
