import { describe, expect, it } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

const root = process.cwd();

const upgradedSurfaces = [
  'app/daydream/music/page.tsx',
  'app/daydream/games/page.tsx',
  'app/daydream/code/page.tsx',
  'app/daydream/lab/page.tsx',
  'app/daydream/brand/page.tsx',
  'app/daydream/create/page.tsx',
  'app/marketplace/page.tsx',
  'app/settings/help/page.tsx',
  'app/settings/security/page.tsx',
  'app/settings/algorithm/page.tsx',
  'app/settings/widgets/page.tsx',
  'app/settings/safety/page.tsx',
  'app/settings/notifications/page.tsx',
] as const;

describe('authenticated UI shell upgrade rollout', () => {
  it('adds the shared authenticated page header component', () => {
    const src = readFileSync(join(root, 'components/ui/dream.AuthenticatedPageHeader.tsx'), 'utf-8');
    expect(src).toContain('BrandLogo');
    expect(src).toContain('de-auth-header');
    expect(src).toContain('de-auth-badge');
  });

  it('defines the authenticated shell CSS primitives in globals.css', () => {
    const src = readFileSync(join(root, 'styles/globals.css'), 'utf-8');
    expect(src).toContain('.de-auth-header');
    expect(src).toContain('.de-auth-content');
    expect(src).toContain('.de-auth-hero');
  });

  it('rolls the shared authenticated header across upgraded post-login surfaces', () => {
    for (const rel of upgradedSurfaces) {
      const src = readFileSync(join(root, rel), 'utf-8');
      expect(src, rel).toContain("import AuthenticatedPageHeader from '@/components/ui/dream.AuthenticatedPageHeader'");
      expect(src, rel).toContain('<AuthenticatedPageHeader');
    }
  });

  it('routes DreamMenu logout through the server endpoint that clears auth cookies and returns to landing', () => {
    const logoutRoute = readFileSync(join(root, 'app/api/auth/logout/route.ts'), 'utf-8');
    const dualMenu = readFileSync(join(root, 'components/menus/dream.menu.DualBottomMenu.tsx'), 'utf-8');
    const globalBar = readFileSync(join(root, 'components/home/dream.bar.GlobalDreamBar.tsx'), 'utf-8');
    const settingsPanel = readFileSync(join(root, 'components/panels/dream.panel.SettingsPanel.tsx'), 'utf-8');

    expect(logoutRoute).toContain('await supabase.auth.signOut()');
    expect(logoutRoute).toContain('response.cookies.delete(cookie.name)');
    expect(logoutRoute).toContain("NextResponse.redirect(new URL('/', request.url))");
    expect(dualMenu).toContain("{ id: 'logout',");
    expect(globalBar).toContain("window.location.assign('/api/auth/logout')");
    expect(settingsPanel).toContain("location.href = '/api/auth/logout'");
  });

  it('upgrades shared post-login shells with premium framing', () => {
    const daydreamShell = readFileSync(join(root, 'components/daydream/dream.shell.DaydreamShell.tsx'), 'utf-8');
    const dashboard = readFileSync(join(root, 'app/dreamdmbar/_components/HomeDreamRegion.tsx'), 'utf-8');
    const pulseStrip = readFileSync(join(root, 'components/home/dream.DaydreamPulseStrip.tsx'), 'utf-8');
    const dreamsPanel = readFileSync(join(root, 'components/dreams/dreamsurface.dreamspace.tsx'), 'utf-8');

    expect(daydreamShell).toContain('BrandLogo');
    expect(daydreamShell).toContain('accentColor');
    // EnginSurface now uses a dark premium hero block (no longer de-auth-hero)
    expect(dashboard).toContain('de-auth-hero');
    expect(dashboard).toContain('BrandLogo');
    expect(dashboard).toContain('DaydreamPulseStrip');
    expect(dashboard).toContain('onOpenDaydream');
    expect(pulseStrip).toContain('6 daydreams + forge');
    expect(pulseStrip).toContain('onOpenDaydream');
    expect(dreamsPanel).toContain('Pinned apps + feeds across the dual runtime');
  });
});
