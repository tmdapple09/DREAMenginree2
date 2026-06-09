export type GameEnginQualityTier = 'low' | 'balanced' | 'high';

export interface GameEnginFrameBudget {
  readonly tier: GameEnginQualityTier;
  readonly targetFps: 30 | 60;
  readonly frameBudgetMs: number;
  readonly fixedStepMs: number;
  readonly maxStepsPerFrame: number;
  readonly maxDpr: number;
}

export const GAMEENGIN_FRAME_BUDGETS: Record<GameEnginQualityTier, GameEnginFrameBudget> = {
  low: { tier: 'low', targetFps: 30, frameBudgetMs: 33.34, fixedStepMs: 16.67, maxStepsPerFrame: 4, maxDpr: 1.25 },
  balanced: { tier: 'balanced', targetFps: 60, frameBudgetMs: 16.67, fixedStepMs: 16.67, maxStepsPerFrame: 5, maxDpr: 1.75 },
  high: { tier: 'high', targetFps: 60, frameBudgetMs: 16.67, fixedStepMs: 16.67, maxStepsPerFrame: 5, maxDpr: 2 },
};

export function resolveFrameBudget(tier: GameEnginQualityTier | undefined): GameEnginFrameBudget {
  return GAMEENGIN_FRAME_BUDGETS[tier ?? 'balanced'];
}
