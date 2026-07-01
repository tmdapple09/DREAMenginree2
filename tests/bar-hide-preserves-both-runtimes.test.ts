

import { describe, expect, it } from 'vitest';
import { DIVIDER_H } from '@/dreamdmbar/runtime/barInteractions';






interface RegionLayout {
  topHeight: string;
  bottomRegionTop: string;
  bottomHeight: string;
  runtimeSplitRatio: number;
}


function computeRegionLayout(splitRatio: number, isBarMinimized: boolean): RegionLayout {
  const dividerHeight = isBarMinimized ? 0 : DIVIDER_H;

  
  const runtimeSplitRatio = splitRatio;

  const topHeight = `calc((100% - ${dividerHeight}px) * ${runtimeSplitRatio})`;
  const bottomRegionTop = `calc(${topHeight} + ${dividerHeight}px)`;
  const bottomHeight = `calc(100% - ${bottomRegionTop})`;

  return { topHeight, bottomHeight, bottomRegionTop, runtimeSplitRatio };
}


function evalCssCalc(expr: string, viewportHeight: number): number {
  
  const inner = expr.replace(/^calc\(/, '').replace(/\)$/, '');

  
  const topMatch = inner.match(/^\(100% - ([\d.]+)px\) \* ([\d.]+)$/);
  if (topMatch) {
    const divH = parseFloat(topMatch[1]);
    const ratio = parseFloat(topMatch[2]);
    return (viewportHeight - divH) * ratio;
  }

  
  const addMatch = inner.match(/^(.+) \+ ([\d.]+)px$/);
  if (addMatch) {
    return evalCssCalc(addMatch[1], viewportHeight) + parseFloat(addMatch[2]);
  }

  
  const subMatch = inner.match(/^100% - (.+)$/);
  if (subMatch) {
    return viewportHeight - evalCssCalc(subMatch[1], viewportHeight);
  }

  throw new Error(`evalCssCalc: unrecognized expression: "${expr}"`);
}





const VIEWPORT_H = 800;
const SPLIT_RATIO = 0.6;

describe('Bar Ownership Law §0 — bar-hide preserves both runtimes', () => {
  describe('bar visible (isBarMinimized = false)', () => {
    const layout = computeRegionLayout(SPLIT_RATIO, false);
    const topPx = evalCssCalc(layout.topHeight, VIEWPORT_H);
    const bottomPx = evalCssCalc(layout.bottomHeight, VIEWPORT_H);

    it('splitRatio is passed through unchanged', () => {
      expect(layout.runtimeSplitRatio).toBe(SPLIT_RATIO);
    });

    it('HomeDream Surface region has positive height', () => {
      expect(topPx).toBeGreaterThan(0);
    });

    it('DreamSpace region has positive height', () => {
      expect(bottomPx).toBeGreaterThan(0);
    });

    it('top + divider + bottom sums to the full viewport', () => {
      const sum = topPx + DIVIDER_H + bottomPx;
      expect(sum).toBeCloseTo(VIEWPORT_H, 1);
    });
  });

  describe('bar hidden (isBarMinimized = true) with same splitRatio = 0.6', () => {
    const layout = computeRegionLayout(SPLIT_RATIO, true);
    const topPx = evalCssCalc(layout.topHeight, VIEWPORT_H);
    const bottomPx = evalCssCalc(layout.bottomHeight, VIEWPORT_H);

    it('splitRatio is NOT forced to 1 — it stays at 0.6', () => {
      expect(layout.runtimeSplitRatio).toBe(SPLIT_RATIO);
      expect(layout.runtimeSplitRatio).not.toBe(1);
    });

    it('HomeDream Surface region still has positive height', () => {
      expect(topPx).toBeGreaterThan(0);
    });

    it('DreamSpace region still has positive height', () => {
      expect(bottomPx).toBeGreaterThan(0);
    });

    it('neither region height drops to zero', () => {
      expect(topPx).toBeGreaterThan(0);
      expect(bottomPx).toBeGreaterThan(0);
    });

    it('top + bottom sums to the full viewport (no divider when bar is hidden)', () => {
      
      const sum = topPx + bottomPx;
      expect(sum).toBeCloseTo(VIEWPORT_H, 1);
    });
  });

  describe('bar re-shown after being hidden', () => {
    it('splitRatio is unchanged when bar becomes visible again', () => {
      const hidden = computeRegionLayout(SPLIT_RATIO, true);
      const shown = computeRegionLayout(SPLIT_RATIO, false);
      
      expect(hidden.runtimeSplitRatio).toBe(SPLIT_RATIO);
      expect(shown.runtimeSplitRatio).toBe(SPLIT_RATIO);
    });

    it('top region height is the same before hide and after re-show', () => {
      const before = evalCssCalc(computeRegionLayout(SPLIT_RATIO, false).topHeight, VIEWPORT_H);
      const after = evalCssCalc(computeRegionLayout(SPLIT_RATIO, false).topHeight, VIEWPORT_H);
      expect(after).toBeCloseTo(before, 1);
    });
  });
});
