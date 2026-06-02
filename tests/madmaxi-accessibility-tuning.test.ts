import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const REPO_ROOT = process.cwd();

describe('MadMaxi reachable-platform movement tuning', () => {
  it('raises the live Babylon robot jump and traversal speed by twenty percent', () => {
    const src = readFileSync(join(REPO_ROOT, 'components/games/madmaxi/dream.MadmaxiGame.tsx'), 'utf8');

    expect(src).toContain('const JUMP_VY       = 0.936;');
    expect(src).toContain('const WALK_SPD      = 0.2088;');
  });

  it('keeps the WASM cartridge controller and published tuning values coherent', () => {
    const wasmSource = readFileSync(join(REPO_ROOT, 'assembly/mad-maxi-player.ts'), 'utf8');
    const tuning = JSON.parse(readFileSync(join(REPO_ROOT, 'public/cartridges/mad-maxi/tuning.json'), 'utf8'));

    expect(wasmSource).toContain('const MAX_HSPEED:      f32 = 9.0;');
    expect(wasmSource).toContain('const JUMP_FORCE:      f32 = 9.6;');
    expect(wasmSource).toContain('const DJUMP_FORCE:     f32 = 8.4;');
    expect(tuning.physics.max_horizontal_speed).toBe(9);
    expect(tuning.jump.first_jump_force).toBe(9.6);
    expect(tuning.jump.double_jump_force).toBe(8.4);
  });
});
