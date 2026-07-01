import { describe, expect, it, beforeEach } from 'vitest';
import { getRandomLogo, resetLogoCache, LOGO_PATHS } from '@/engins/brandingengin/identity/logos';

describe('getRandomLogo', () => {
  beforeEach(() => {
    resetLogoCache();
  });

  it('returns one of the three known logo paths', () => {
    const logo = getRandomLogo();
    expect(LOGO_PATHS).toContain(logo);
  });

  it('returns the same value on repeated calls within a page load (per-load cache)', () => {
    const first = getRandomLogo();
    const second = getRandomLogo();
    const third = getRandomLogo();
    expect(first).toBe(second);
    expect(second).toBe(third);
  });

  it('can return a different value after cache reset', () => {
    
    const seen = new Set<string>();
    for (let i = 0; i < 30; i++) {
      resetLogoCache();
      seen.add(getRandomLogo());
    }
    
    expect(seen.size).toBeGreaterThan(1);
  });

  it('all three logos are reachable over many resets', () => {
    const seen = new Set<string>();
    for (let i = 0; i < 60; i++) {
      resetLogoCache();
      seen.add(getRandomLogo());
    }
    expect(seen.size).toBe(3);
  });

  it('paths begin with / and point to the images directory', () => {
    const logo = getRandomLogo();
    expect(logo).toMatch(/^\/images\/logo[123]\.PNG$/);
  });
});
