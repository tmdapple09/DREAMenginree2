import { describe, expect, it } from 'vitest';
import { GAMEENGIN_FRAME_BUDGETS, GameEnginFrameClock, decideRuntimeQuality } from '@/engins/gameengin/runtime';

describe('GameEngin runtime upgrade contracts', () => {
  it('keeps mobile frame budgets machine readable', () => {
    expect(GAMEENGIN_FRAME_BUDGETS.low.targetFps).toBe(30);
    expect(GAMEENGIN_FRAME_BUDGETS.balanced.targetFps).toBe(60);
    expect(GAMEENGIN_FRAME_BUDGETS.high.maxDpr).toBeGreaterThan(1);
  });

  it('caps fixed-step catchup instead of spiraling', () => {
    const clock = new GameEnginFrameClock('balanced');
    const tick = clock.advance(1000);
    expect(tick.steps).toBeLessThanOrEqual(GAMEENGIN_FRAME_BUDGETS.balanced.maxStepsPerFrame);
    expect(tick.droppedSteps).toBeGreaterThanOrEqual(0);
  });

  it('downgrades quality when WebGPU is unavailable', () => {
    expect(decideRuntimeQuality(16.67, false).quality).toBe('low');
    expect(decideRuntimeQuality(30, true).quality).toBe('balanced');
    expect(decideRuntimeQuality(16.67, true).quality).toBe('high');
  });
});
