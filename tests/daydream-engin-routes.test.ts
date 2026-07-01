import { describe, expect, it } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

const root = process.cwd();

const ENGIN_ROUTES = [
  ['music', 'StarMakerEngin', 'music'],
  ['games', 'GameEngin',      'games'],
  ['lab',   'LabEngin',       'lab'],
  ['code',  'CodeEngin',      'code'],
  ['brand', 'BrandingEngin',  'brand'],
  ['create','ContentEngin',   'create'],
] as const;

describe('standalone /daydream/*/engin routes', () => {
  it('StandaloneEnginSurface still references all six engine components', () => {
    const wrapperSource = readFileSync(
      join(root, 'components/daydream/dream.StandaloneEnginSurface.tsx'),
      'utf-8'
    );

    expect(wrapperSource).toContain('router.push(backHref)');
    expect(wrapperSource).toContain('GameEngin');
    expect(wrapperSource).toContain('StarMakerEngin');
    expect(wrapperSource).toContain('LabEngin');
    expect(wrapperSource).toContain('CodeEngin');
    expect(wrapperSource).toContain('BrandingEngin');
    expect(wrapperSource).toContain('ContentEngin');
  });

  it('EnginAppShell mounts Shared Dream controls for every standalone Engin', () => {
    const shellSource = readFileSync(
      join(root, 'components/engines/shared/dream.shell.EnginAppShell.tsx'),
      'utf-8'
    );

    expect(shellSource).toContain('SharedDreamProvider');
    expect(shellSource).toContain('InviteFlow');
    expect(shellSource).toContain('expectedPeerCount: 40');
  });

  for (const [route, engin, engineSlug] of ENGIN_ROUTES) {
    it(`/daydream/${route}/engin redirects to the standalone /engines/${engineSlug} app`, () => {
      const source = readFileSync(
        join(root, `app/daydream/${route}/engin/page.tsx`),
        'utf-8'
      );

      
      expect(source).toContain(`redirect('/engines/${engineSlug}')`);
      
      expect(source).not.toContain("redirect('/daydream/");
      expect(source).not.toContain('redirect("/daydream/');
    });

    it(`/engines/${engineSlug} has a standalone page wrapping ${engin}`, () => {
      const source = readFileSync(
        join(root, `app/engines/${engineSlug}/page.tsx`),
        'utf-8'
      );

      
      const appComponentName = engin === 'StarMakerEngin' ? 'MusicEnginApp'
        : engin === 'BrandingEngin' ? 'BrandEnginApp'
        : engin === 'ContentEngin'  ? 'CreateEnginApp'
        : `${engin.replace('Engin', 'Engin')}App`;

      
      const hasEngineRef = source.includes(appComponentName) || source.includes(engin);
      expect(hasEngineRef).toBe(true);
    });
  }
});
