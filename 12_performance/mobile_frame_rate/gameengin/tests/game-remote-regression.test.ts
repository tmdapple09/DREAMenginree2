import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const REPO_ROOT = process.cwd();

describe('existing PS5 remote usage', () => {
  it('keeps GameEngin wired to the separate shared GameRemote capability', () => {
    const src = readFileSync(join(REPO_ROOT, 'engins/engin.GameEngin.tsx'), 'utf8');

    expect(src).toContain("import GameRemote from '@/components/games/dream.remote.GameRemote'");
    expect(src).toContain('<GameRemote');
    expect(src).not.toContain('<GameHUD');
  });

  it('keeps the embedded shared remote generic instead of a MADMAXI controller deck', () => {
    const src = readFileSync(join(REPO_ROOT, 'components/games/dream.remote.GameRemoteSurface.tsx'), 'utf8');

    expect(src).toContain('Shared Remote');
    expect(src).toContain("Inline game controls");
    expect(src).not.toContain('controller deck');
    expect(src).not.toContain('Default Remote');
  });

  it('keeps the original remote layout with a larger right analog and wrapped action buttons', () => {
    const src = readFileSync(join(REPO_ROOT, 'components/games/dream.remote.GameRemoteSurface.tsx'), 'utf8');

    expect(src).toContain('const RIGHT_PAD_R   = 70');
    expect(src).toContain('const LEFT_PAD_R    = 52');
    expect(src).toContain('RIGHT_STICK_RING_BUTTONS');
    expect(src).toContain("{ sym: 'L1', label: 'J+Spin'");
    expect(src).toContain("{ sym: 'R2', label: 'J+Shot'");
    expect(src).toContain("{ sym: '△', label: 'Duck'");
    expect(src).toContain('REMOTE_ACTION_PILLS');
    expect(src).toContain("{ sym: 'R1', label: 'Dash'");
    expect(src).toContain("clickAction=\"l3\"");
    expect(src).toContain("clickAction=\"r3\"");
    expect(src).not.toContain('clickSym');
    expect(src).not.toContain('Stick Click');
    expect(src).not.toContain('R3 / ×');
    expect(src).not.toContain("{ sym: 'L3'");
    expect(src).not.toContain("{ sym: 'R3'");
  });

  it('does not reintroduce the old duplicate UniversalDPad controller in GamesHub', () => {
    const src = readFileSync(join(REPO_ROOT, 'components/games/dream.GamesHub.tsx'), 'utf8');

    expect(src).not.toContain('function UniversalDPad');
    expect(src).not.toContain('interface DPadState');
  });

  it('keeps immersive sessions on cartridge-owned HUDs with the shared GameRemote beside them', () => {
    const shellSrc = readFileSync(join(REPO_ROOT, 'engins/engin.GameEngin.tsx'), 'utf8');
    const immersiveSrc = readFileSync(join(REPO_ROOT, 'app/daydream/game/dream.shell.ImmersiveGameShell.tsx'), 'utf8');

    expect(shellSrc).toContain('<GameRemote');
    expect(shellSrc).not.toContain('<GameHUD');
    expect(immersiveSrc).toContain('<GameRemote');
    expect(immersiveSrc).not.toContain('<GameHUD');
    expect(immersiveSrc).toContain('The cartridge owns its visual HUD');
  });

  it('keeps compatibility GameHUD imports routed to GameRemote instead of MobileGameHUD', () => {
    const hud = readFileSync(join(REPO_ROOT, 'components/games/dream.hud.GameHUD.tsx'), 'utf8');
    const remoteExport = readFileSync(join(REPO_ROOT, 'components/games/dream.remote.GameRemote.tsx'), 'utf8');

    expect(hud).toContain("import GameRemote from '@/components/games/dream.remote.GameRemote'");
    expect(hud).toContain('<GameRemote embedded');
    expect(hud).not.toContain('MobileGameHUD');
    expect(remoteExport).toContain('shared control surface for GameEngin cartridges');
    expect(remoteExport).not.toContain('GameHUD/MobileGameHUD');
  });

  it('removes per-game on-screen remote pads in favor of the shared GameRemote', () => {
    // Source-game files that previously hosted their own touch pads have been
    // removed in the fusion-cartridge migration. The only remaining source file to
    // assert against is BabylonSideScroller (kept as MADMAXI flagship).
    const babylon = readFileSync(join(REPO_ROOT, 'components/games/dream.BabylonSideScroller.tsx'), 'utf8');

    expect(babylon).not.toContain('Virtual D-Pad');
    expect(babylon).not.toContain("handleVpad('jump', true)");
  });

  it('keeps the new Voidline GP rhythm-fusion playable through shared remote-compatible inputs', () => {
    const src = readFileSync(join(REPO_ROOT, 'components/games/dream.VoidlineGP.tsx'), 'utf8');
    // Voidline GP listens for both keyboard and remote-compatible Arrow keys.
    expect(src).toContain('ArrowLeft');
    expect(src).toContain('ArrowRight');
  });

  it('supports idle, active, and collapsed remote states without blocking native game touches', () => {
    const src = readFileSync(join(REPO_ROOT, 'components/games/dream.remote.GameRemoteSurface.tsx'), 'utf8');

    expect(src).toContain("useState<'idle' | 'active' | 'collapsed'>('idle')");
    expect(src).toContain("opacity: remoteState === 'active' ? 0.3 : 0.01");
    expect(src).toContain('aria-label="Hide game remote"');
    expect(src).toContain('aria-label="Show game remote"');
    expect(src).toContain("pointerEvents: 'none'");
    expect(src).toContain("pointerEvents: 'auto'");
  });

  it('keeps frame pacing internal instead of showing FPS or backend telemetry over gameplay', () => {
    const runtime = readFileSync(join(REPO_ROOT, 'lib/gameengin/GameRuntime.tsx'), 'utf8');
    const shell = readFileSync(join(REPO_ROOT, 'app/daydream/game/dream.shell.ImmersiveGameShell.tsx'), 'utf8');

    expect(runtime).not.toContain('{fps} FPS');
    expect(shell).not.toContain('BASELINE [DONE]');
    expect(shell).not.toContain('avgFps} FPS');
  });

  it('raises MADMAXI jump reach and increases its normal run speed by twenty percent', () => {
    const src = readFileSync(join(REPO_ROOT, 'components/games/madmaxi/dream.MadmaxiGame.tsx'), 'utf8');

    expect(src).toContain('const JUMP_VY       = 0.936;');
    expect(src).toContain('const WALK_SPD      = 0.2088;');
  });

});

describe('immersive Game Remote HUD interaction states', () => {
  it('keeps immersive controls nearly transparent at rest and visible during touch activity', () => {
    const css = readFileSync(join(REPO_ROOT, 'components/games/dream.hud.MobileGameHUD.module.css'), 'utf8');

    expect(css).toContain('.overlayIdle {\n  opacity: 0.01;');
    expect(css).toContain('.overlayActive {\n  opacity: 0.3;');
  });

  it('collapses to a floating restore button while its overlay routes touches to the cartridge', () => {
    const hud = readFileSync(join(REPO_ROOT, 'components/games/dream.hud.MobileGameHUD.tsx'), 'utf8');
    const css = readFileSync(join(REPO_ROOT, 'components/games/dream.hud.MobileGameHUD.module.css'), 'utf8');

    expect(hud).toContain("useState<'idle' | 'active' | 'collapsed'>('idle')");
    expect(hud).toContain('aria-label="Hide game remote"');
    expect(hud).toContain('aria-label="Show game remote"');
    expect(hud).toContain('data-game-remote-state="collapsed"');
    expect(css).toContain('.overlayCollapsed {\n  opacity: 1;\n  pointer-events: none;');
    expect(css).toContain('.restoreRemoteButton {');
    expect(css).toContain('pointer-events: auto;');
  });
});
