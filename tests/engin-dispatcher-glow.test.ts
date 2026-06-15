import { describe, expect, it } from 'vitest';
import { EnginDispatcher } from '@/engine/runtime/EnginDispatcher';

describe('EnginDispatcher glow field shaping owner path', () => {
  it('shapes glow intensity buffers through the existing dispatcher owner with JS fallback', () => {
    const dispatcher = EnginDispatcher.getInstance();
    const intensity = new Float32Array([0.2, 0.92, 0.0, 0.5]);
    const velocity = new Float32Array([1.0, 1.0, 0.25, 0.0]);
    const usedWasm = dispatcher.shapeGlowField(intensity, velocity, 1 / 60, 2.0);

    expect(usedWasm).toBe(false);
    expect(Array.from(intensity)).toEqual(expect.arrayContaining([expect.any(Number)]));
    expect(intensity[0]).toBeGreaterThan(0.2);
    expect(intensity[1]).toBeLessThanOrEqual(1.0);
    expect(intensity[2]).toBeGreaterThan(0.0);
  });
});
