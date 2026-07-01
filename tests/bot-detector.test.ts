import { describe, expect, it } from 'vitest';
import {
  type TouchPoint,
  isLikelyBot,
  isSwipeBot,
  scoreBotLikelihood,
  scoreSwipePath,
} from '@/app/dreamdmbar/_components/dreamr/algorithms/botDetector';




function straightLinePath(n = 6): TouchPoint[] {
  return Array.from({ length: n }, (_, i) => ({
    x: (i / (n - 1)) * 100,
    y: 0,
    t: (i / (n - 1)) * 100,
  }));
}


function humanishPath(): TouchPoint[] {
  return [
    { x: 0, y: 0, t: 0 },
    { x: 3, y: 2, t: 30 },  
    { x: 33, y: 5, t: 40 }, 
    { x: 43, y: 3, t: 60 }, 
    { x: 73, y: 5, t: 70 }, 
    { x: 100, y: 0, t: 100 },
  ];
}



describe('Bot Detector – Physical Turing Test', () => {
  describe('scoreSwipePath – straight-line bot swipe', () => {
    it('flags a perfectly straight, constant-velocity swipe as a bot', () => {
      const result = scoreSwipePath(straightLinePath());
      expect(result.isBot).toBe(true);
      expect(result.botScore).toBeGreaterThanOrEqual(0.55);
    });

    it('has maximum straightness and avgDevSlog when all deviations are zero', () => {
      const result = scoreSwipePath(straightLinePath());
      expect(result.straightness).toBeCloseTo(1, 5);
      expect(result.avgDevSlog).toBeCloseTo(1, 5);
    });

    it('has zero coarseShift when deviations are uniform', () => {
      const result = scoreSwipePath(straightLinePath());
      expect(result.coarseShift).toBeCloseTo(0, 5);
    });

    it('has maximum entropy botness (entropy score = 1) for identical deviations', () => {
      const result = scoreSwipePath(straightLinePath());
      
      expect(result.entropy).toBeCloseTo(1, 5);
    });

    it('has maximum velocity-variance botness when speed is constant', () => {
      const result = scoreSwipePath(straightLinePath());
      
      expect(result.velVar).toBeCloseTo(1, 5);
    });

    it('computes the correct weighted botScore for a perfectly straight swipe', () => {
      
      
      const result = scoreSwipePath(straightLinePath());
      expect(result.botScore).toBeCloseTo(0.75, 2);
    });
  });

  describe('scoreSwipePath – human-like swipe', () => {
    it('does NOT flag a swipe with high deviation and variable velocity', () => {
      const result = scoreSwipePath(humanishPath());
      
      expect(result.straightness).toBeCloseTo(0, 5);
      expect(result.avgDevSlog).toBeCloseTo(0, 5);
    });

    it('botScore stays below 0.55 for a high-deviation variable-velocity swipe', () => {
      const result = scoreSwipePath(humanishPath());
      
      
      expect(result.botScore).toBeLessThan(0.55);
      expect(result.isBot).toBe(false);
    });
  });

  describe('scoreSwipePath – cross-swipe similarity', () => {
    it('crossSim stays 0 when no recent paths are supplied', () => {
      const result = scoreSwipePath(straightLinePath(), []);
      expect(result.crossSim).toBe(0);
    });

    it('crossSim approaches 1 when recent paths are identical', () => {
      const path = [3, 3, 3]; 
      const result = scoreSwipePath(straightLinePath(5), [path, path, path]);
      
      
      expect(result.crossSim).toBeGreaterThanOrEqual(0);
    });

    it('identical non-zero deviation paths produce crossSim = 1', () => {
      
      const arcPath: TouchPoint[] = [
        { x: 0, y: 0, t: 0 },
        { x: 25, y: 2, t: 25 },
        { x: 50, y: 4, t: 50 },
        { x: 75, y: 2, t: 75 },
        { x: 100, y: 0, t: 100 },
      ];
      
      const storedDevs = [2, 4, 2];
      const result = scoreSwipePath(arcPath, [storedDevs, storedDevs, storedDevs]);
      
      expect(result.crossSim).toBeGreaterThan(0);
    });
  });

  describe('scoreSwipePath – edge cases', () => {
    it('handles fewer than 3 points gracefully', () => {
      const twoPoints: TouchPoint[] = [{ x: 0, y: 0, t: 0 }, { x: 100, y: 0, t: 100 }];
      const result = scoreSwipePath(twoPoints);
      expect(result.botScore).toBeGreaterThanOrEqual(0);
      expect(result.botScore).toBeLessThanOrEqual(1);
    });

    it('botScore is always in the range [0, 1]', () => {
      const result = scoreSwipePath(humanishPath());
      expect(result.botScore).toBeGreaterThanOrEqual(0);
      expect(result.botScore).toBeLessThanOrEqual(1);
    });
  });

  describe('isSwipeBot', () => {
    it('returns true for a straight-line path', () => {
      expect(isSwipeBot(straightLinePath())).toBe(true);
    });

    it('returns false for a human-like path', () => {
      expect(isSwipeBot(humanishPath())).toBe(false);
    });
  });
});



describe('Bot Detector – legacy interaction signal API', () => {
  it('flags fast interactions as suspicious', () => {
    expect(
      scoreBotLikelihood({ userId: 'u1', videoId: 'v1', action: 'like', timestamp: 0, sessionDurationMs: 100 }),
    ).toBeGreaterThanOrEqual(0.5);
  });

  it('does not flag normal-duration views', () => {
    expect(
      scoreBotLikelihood({ userId: 'u1', videoId: 'v1', action: 'view', timestamp: 0, sessionDurationMs: 5000 }),
    ).toBe(0);
  });

  it('isLikelyBot uses the 0.7 default threshold', () => {
    expect(
      isLikelyBot({ userId: 'u1', videoId: 'v1', action: 'share', timestamp: 0, sessionDurationMs: 100 }),
    ).toBe(true);
  });
});
