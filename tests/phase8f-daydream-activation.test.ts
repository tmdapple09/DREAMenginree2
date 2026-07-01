

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

const root = process.cwd();

function readComp(name: string) {
  
  const canonical: Record<string, string> = {
    'StarMakerEngin.tsx': 'engins/engin.StarMakerEngin.tsx',
    'CodeEngin.tsx':      'engins/engin.CodeEngin.tsx',
    'BrandingEngin.tsx':  'engins/engin.BrandingEngin.tsx',
    'ContentEngin.tsx':   'engins/engin.ContentEngin.tsx',
    'GameEngin.tsx':      'engins/engin.GameEngin.tsx',
    'LabEngin.tsx':       'engins/engin.LabEngin.tsx',
  };
  const resolved = canonical[name] ?? `components/daydream/${name}`;
  return readFileSync(join(root, resolved), 'utf-8');
}

describe('Phase 8 §F — StarMakerEngin (Point 51)', () => {
  it('imports useDaydreamState', () => {
    expect(readComp('StarMakerEngin.tsx')).toContain("useDaydreamState");
  });

  it('calls persistState with creative workspace data', () => {
    const src = readComp('StarMakerEngin.tsx');
    expect(src).toContain('persistState');
    expect(src).toContain('bpm');
  });

  it('uses daydreamType music', () => {
    const src = readComp('StarMakerEngin.tsx');
    expect(src).toContain("'music'");
  });
});

describe('Phase 8 §F — CodeEngin (Point 54)', () => {
  it('imports useDaydreamState', () => {
    expect(readComp('CodeEngin.tsx')).toContain('useDaydreamState');
  });

  it('persists editor cells state', () => {
    const src = readComp('CodeEngin.tsx');
    expect(src).toContain('persistState');
    expect(src).toContain('cells');
  });
});

describe('Phase 8 §F — BrandingEngin (Point 55)', () => {
  it('imports useDaydreamState', () => {
    expect(readComp('BrandingEngin.tsx')).toContain('useDaydreamState');
  });

  it('persists brand kit assets', () => {
    const src = readComp('BrandingEngin.tsx');
    expect(src).toContain('persistState');
    expect(src).toContain('assets');
  });
});

describe('Phase 8 §F — ContentEngin (Point 56 + 57)', () => {
  it('saves drafts via /api/drafts (Point 56)', () => {
    const src = readComp('ContentEngin.tsx');
    expect(src).toContain('/api/drafts');
  });

  it('subscribes to music:stem-ready for multi-connection (Point 57)', () => {
    const src = readComp('ContentEngin.tsx');
    
    
    
    const hookSrc = readFileSync(join(root, 'lib/runtime/useEnginBridge.ts'), 'utf-8');
    const hasDirectStemReady = src.includes("'music:stem-ready'");
    const hasBridgeSubscribe = src.includes('bridge.subscribe');
    const hookHasMusicStemReady = hookSrc.includes("'music:stem-ready'");
    const hookHasBridgeSubscribe = hookSrc.includes("bridge.subscribe('music'");
    
    expect(
      (hasDirectStemReady && hasBridgeSubscribe) ||
      (src.includes('useContentEnginBridge') && hookHasMusicStemReady && hookHasBridgeSubscribe)
    ).toBe(true);
  });

  it('surfaces stemPrompt notification when stem received', () => {
    const src = readComp('ContentEngin.tsx');
    expect(src).toContain('stemPrompt');
  });
});

describe('Phase 8 §F — DaydreamShell (Points 47-50)', () => {
  it('wires useDaydreamState for visit tracking', () => {
    const src = readFileSync(join(root, 'components/daydream/dream.shell.DaydreamShell.tsx'), 'utf-8');
    expect(src).toContain('useDaydreamState');
  });
});

describe('Phase 8 §F — Daydream routes exist (Point 58)', () => {
  const routes = ['music', 'games', 'lab', 'code', 'brand', 'create'];

  for (const route of routes) {
    it(`/daydream/${route} page exists`, () => {
      expect(() =>
        readFileSync(join(root, `app/daydream/${route}/page.tsx`), 'utf-8')
      ).not.toThrow();
    });
  }
});
