import { readFileSync } from 'fs';
import { describe, expect, it } from 'vitest';

describe('AssetViewport rig pick mode source contract', () => {
  const source = readFileSync('engins/contentengin/AssetViewport.tsx', 'utf8');

  it('exposes pickMode separately from sculpt editMode', () => {
    expect(source).toContain('pickMode?: boolean');
    expect(source).toContain('gesture.current = { mode: \'blocked\', lastCenter: p }');
    expect(source).toContain("gesture.current.mode === 'sculpt' && !pickMode");
  });

  it('draws visual rig bend markers', () => {
    expect(source).toContain('rigBendPoints?: RigBendPoint[]');
    expect(source).toContain('drawRigBendMarkers');
    expect(source).toContain('point.label');
  });
});
