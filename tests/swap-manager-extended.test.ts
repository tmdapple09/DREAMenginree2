

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  getSwap,
  setSwap,
  toggleSwap,
  clearSwap,
  getAllSwapStates,
  resetAllSwaps,
} from '../lib/runtime/swapManager';


const store: Record<string, string> = {};
vi.stubGlobal('localStorage', {
  getItem: (key: string) => store[key] ?? null,
  setItem: (key: string, val: string) => { store[key] = val; },
  removeItem: (key: string) => { delete store[key]; },
  clear: () => { Object.keys(store).forEach((k) => delete store[k]); },
  get length() { return Object.keys(store).length; },
  key: (idx: number) => Object.keys(store)[idx] ?? null,
});

beforeEach(() => {
  Object.keys(store).forEach((k) => delete store[k]);
});


describe('clearSwap (improvement 40)', () => {
  it('resets a domain to false', () => {
    setSwap('code', true);
    expect(getSwap('code')).toBe(true);
    clearSwap('code');
    expect(getSwap('code')).toBe(false);
  });

  it('is a no-op when not set', () => {
    expect(() => clearSwap('lab')).not.toThrow();
    expect(getSwap('lab')).toBe(false);
  });
});


describe('getAllSwapStates (improvement 41)', () => {
  it('returns false for all domains by default', () => {
    const states = getAllSwapStates();
    expect(states.code).toBe(false);
    expect(states.lab).toBe(false);
  });

  it('reflects set values', () => {
    setSwap('code', true);
    const states = getAllSwapStates();
    expect(states.code).toBe(true);
    expect(states.lab).toBe(false);
  });
});


describe('resetAllSwaps (improvement 42)', () => {
  it('clears all domains', () => {
    setSwap('code', true);
    setSwap('lab', true);
    resetAllSwaps();
    expect(getSwap('code')).toBe(false);
    expect(getSwap('lab')).toBe(false);
  });
});


describe('toggleSwap + getAllSwapStates', () => {
  it('getAllSwapStates reflects toggleSwap', () => {
    expect(getAllSwapStates().code).toBe(false);
    toggleSwap('code');
    expect(getAllSwapStates().code).toBe(true);
    toggleSwap('code');
    expect(getAllSwapStates().code).toBe(false);
  });
});


describe('swapManager storage resilience (improvement 43)', () => {
  it('returns false when localStorage is unavailable', () => {
    
    expect(getSwap('code')).toBe(false);
    expect(getSwap('lab')).toBe(false);
  });

  it('setSwap is idempotent', () => {
    setSwap('code', true);
    setSwap('code', true);
    expect(getSwap('code')).toBe(true);
    setSwap('code', false);
    expect(getSwap('code')).toBe(false);
  });
});