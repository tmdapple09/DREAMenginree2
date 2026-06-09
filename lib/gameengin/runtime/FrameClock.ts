import { resolveFrameBudget, type GameEnginQualityTier } from './FrameBudget';

export interface GameEnginFrameTick {
  readonly dt: number;
  readonly elapsed: number;
  readonly steps: number;
  readonly droppedSteps: number;
}

export class GameEnginFrameClock {
  private readonly budget = resolveFrameBudget(this.tier);
  private accumulatorMs = 0;
  private elapsedMs = 0;

  constructor(private readonly tier: GameEnginQualityTier = 'balanced') {}

  advance(rawDeltaMs: number): GameEnginFrameTick {
    const safeDelta = Math.max(0, Math.min(rawDeltaMs, this.budget.fixedStepMs * this.budget.maxStepsPerFrame));
    this.accumulatorMs += safeDelta;

    let steps = 0;
    while (this.accumulatorMs >= this.budget.fixedStepMs && steps < this.budget.maxStepsPerFrame) {
      this.accumulatorMs -= this.budget.fixedStepMs;
      this.elapsedMs += this.budget.fixedStepMs;
      steps += 1;
    }

    const droppedSteps = this.accumulatorMs >= this.budget.fixedStepMs ? Math.floor(this.accumulatorMs / this.budget.fixedStepMs) : 0;
    if (droppedSteps > 0) this.accumulatorMs = 0;

    return {
      dt: this.budget.fixedStepMs / 1000,
      elapsed: this.elapsedMs / 1000,
      steps,
      droppedSteps,
    };
  }

  reset(): void {
    this.accumulatorMs = 0;
    this.elapsedMs = 0;
  }
}
