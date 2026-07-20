import type { ExportProfile, LodDef } from '../assetTypes';

const budgets: Record<ExportProfile, number> = {
  ps3: 50_000,
  ps4: 100_000,
  ps5: 200_000,
};

const levels = [
  { level: 0, ratio: 1, path: 'model.glb' },
  { level: 1, ratio: 0.55, path: 'model.lod1.glb' },
  { level: 2, ratio: 0.25, path: 'model.lod2.glb' },
] as const;

export function generateLods(profile: ExportProfile): LodDef[] {
  return levels.map(({ level, ratio, path }) => ({
    level,
    triangleBudget: Math.max(1, Math.floor(budgets[profile] * ratio)),
    path,
  }));
}
