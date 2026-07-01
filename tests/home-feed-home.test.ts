import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import { DIVIDER_H } from '@/dreamdmbar/runtime/barInteractions';

describe('HomeDream home surface', () => {
  const dashboard = readFileSync(
    resolve(__dirname, '../app/dreamdmbar/_components/HomeDreamRegion.tsx'),
    'utf8',
  );
  
  const homeSystem = readFileSync(
    resolve(__dirname, '../app/dreamdmbar/_components/DreamBarDataBridge.tsx'),
    'utf8',
  );
  const runtimeShell = readFileSync(
    resolve(__dirname, '../components/runtime/dream.shell.RuntimeShell.tsx'),
    'utf8',
  );
  
  const dreamDmBar = readFileSync(
    resolve(__dirname, '../dreamdmbar/dreamsurface.dreamdmbar.tsx'),
    'utf8',
  );
  
  const persistentBar = readFileSync(
    resolve(__dirname, '../components/home/dream.bar.PersistentDreamBar.tsx'),
    'utf8',
  );

  it('keeps HomeDream feed-first and removes the extra home search surface', () => {
    expect(dashboard).toContain('HomeDream Feed');
    expect(dashboard).toContain('Dreamengin.com is where DreamR lives inside the HomeDream.');
    expect(dashboard).toContain('⚡ DreamR: The Human Media Manifesto');
    expect(dashboard.indexOf('<HomeFeed')).toBeLessThan(dashboard.indexOf('<DaydreamPulseStrip'));
    expect(dashboard).not.toContain('DrEamsSearchBar');
    expect(dashboard).not.toContain('Recent Activity');
    expect(dashboard).not.toContain('Telemetry');
    
    expect(dashboard).not.toContain('ForgeActivityWidget');
    expect(dashboard).not.toContain('localStorage');
    
    expect(dashboard).not.toContain('RUNTIME_SIGNALS');
  });

  it('uses the canonical Daydreams label in the home surface', () => {
    expect(dashboard).toContain('Daydreams');
  });

  it('uses persistent dual-runtime layout with the DreamDM seam as the live divider', () => {
    
    expect(dreamDmBar).toContain('onMinimizedChange?:');
    
    expect(persistentBar).toContain("position: 'fixed'");
    expect(persistentBar).toContain('height: topHeight');
    expect(persistentBar).toContain('height: bottomHeight');
    
    expect(homeSystem).toContain('splitRatio');
    expect(homeSystem).toContain('setSplitRatio');
    expect(homeSystem).toContain('setIsBarMinimized');
    
    expect(persistentBar).toContain('splitRatio={isHomeActive ? splitRatio : undefined}');
    expect(persistentBar).toContain('onSplitChange={isHomeActive ? setSplitRatio : undefined}');
    expect(persistentBar).toContain('onMinimizedChange={isHomeActive ? setIsBarMinimized : undefined}');
  });

  it('removes the unrelated Skip overlay without shrinking DreamDM bar capabilities', () => {
    expect(persistentBar).not.toContain('SkipCreditBalance');
    expect(persistentBar).toContain('<DreamDMBar');
    expect(persistentBar).toContain('onBothMenus={openBothMenus}');
    expect(persistentBar).toContain('Messaging, search, notifications, Dr. Eams, navigation, contextual');
    expect(persistentBar).toContain('actions, and surface exchange stay mounted as one capability.');
  });

  it('uses DreamDMBar contextual typing instead of slash-command routing', () => {
    expect(dreamDmBar).toContain("document.addEventListener('focusin', mirrorContextualInput)");
    expect(dreamDmBar).toContain("document.addEventListener('input', mirrorContextualInput)");
    expect(dreamDmBar).toContain('data-dreamdm-compose');
    expect(dreamDmBar).not.toContain('Slash Command Palette');
    expect(dreamDmBar).not.toContain('filterSlashCommands');
  });

  it('preserves runtimes when bar is minimized (Bar Ownership Law §0)', () => {
    
    
    expect(persistentBar).toContain('const runtimeSplitRatio = splitRatio');
    expect(persistentBar).toContain('splitRatio={runtimeSplitRatio}');
  });

  it('keeps feed scrolling native while limiting divider drag capture to the centered seam handle', () => {
    expect(runtimeShell).toContain('data-runtime-scroll-container');
    expect(runtimeShell).toContain("overflowY: 'auto'");
    expect(runtimeShell).toContain("WebkitOverflowScrolling: 'touch'");
    expect(runtimeShell).toContain("touchAction: 'manipulation'");
    expect(dreamDmBar).toContain("pointerEvents: 'none'");
    expect(dreamDmBar).toContain("width: isDividerMode ? 112 : '100%'");
  });
});

describe('DreamDM divider layout', () => {
  it('reserves only the visible seam height between runtimes', () => {
    expect(DIVIDER_H).toBe(2);
  });
});
