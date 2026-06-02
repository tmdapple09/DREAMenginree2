import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { CARTRIDGE_MANIFEST } from '@/lib/gameengin/cartridges/manifest';
import { registerCartridges } from '@/lib/gameengin/registerCartridges';
import { moduleRegistry, useModuleRegistry } from '@/lib/runtime/moduleRegistry';

function source(path: string): string {
  return readFileSync(resolve(process.cwd(), path), 'utf8');
}

describe('shell + cartridge wiring', () => {
  it('mounts DMBar from app/dreamdmbar/layout.tsx only', () => {
    const layout = source('app/layout.tsx');
    const dmbarLayout = source('app/dreamdmbar/layout.tsx');
    expect(dmbarLayout).toMatch(/<\s*PersistentDreamBar\b/);
    expect(layout).not.toMatch(/<\s*PersistentDreamBar\b/);

    const files = [
      'app/dreamdmbar/layout.tsx',
      'components/providers/dream.AppSurfaceShell.tsx',
      'components/home/dream.bar.PersistentDreamBar.tsx',
      'app/homedream/page.tsx',
      'app/dreamspace/page.tsx',
    ];

    const totalMounts = files
      .map((path) => source(path).match(/<\s*PersistentDreamBar\b/g)?.length ?? 0)
      .reduce((sum, count) => sum + count, 0);

    expect(totalMounts).toBe(1);
    expect(source('components/home/dream.bar.PersistentDreamBar.tsx')).toContain('<DreamDMBar');
  });

  it('registers every cartridge manifest entry in moduleRegistry', () => {
    for (const id of Object.keys(useModuleRegistry.getState().modules)) {
      moduleRegistry.unregister(id);
    }

    registerCartridges();

    const moduleIds = new Set(Object.keys(useModuleRegistry.getState().modules));
    for (const entry of CARTRIDGE_MANIFEST) {
      expect(moduleIds.has(`cartridge:${entry.id}`)).toBe(true);
    }
  });

  it('mounts existing Engin capabilities directly inside recursive runtime regions', () => {
    const runtimeView = source('components/runtime/dream.RuntimeView.tsx');
    const persistentBar = source('components/home/dream.bar.PersistentDreamBar.tsx');

    expect(runtimeView).toContain("dynamic(() => import('@/engins/engin.GameEngin')");
    expect(runtimeView).toContain("dynamic(() => import('@/engins/engin.StarMakerEngin')");
    expect(runtimeView).toContain('<EnginSurface');
    expect(persistentBar).toContain("setTopRuntime({ type: 'engin', name: enginName })");
    expect(persistentBar).toContain("setBottomRuntime({ type: 'engin', name: enginName })");
    expect(runtimeView).toContain('onOpenEngin={onOpenEngin}');
  });

  it('passes authenticated account identity independently from optional profile hydration', () => {
    const runtimeView = source('components/runtime/dream.RuntimeView.tsx');
    const persistentBar = source('components/home/dream.bar.PersistentDreamBar.tsx');
    const homeDream = source('app/dreamdmbar/_components/HomeDreamRegion.tsx');

    expect(persistentBar).toContain('userId={homeData?.userId}');
    expect(runtimeView).toContain('userId={userId}');
    expect(runtimeView).toContain('accountId={userId}');
    expect(homeDream).toContain("userId={userId ?? profile?.id ?? ''}");
  });

  it('HomeDream page does not import PersistentDreamBar', () => {
    const homePage = source('app/homedream/page.tsx');
    expect(homePage).not.toContain('PersistentDreamBar');
  });
});
