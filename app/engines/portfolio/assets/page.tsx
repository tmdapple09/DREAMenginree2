import AssetsPanel from '@/components/engines/portfolio/panels/dream.panel.AssetsPanel';
import { EnginAppShell, EnginNavBar } from '@/components/engines/shared';
import { isDevBypassActive } from '@/engine/dev-bypass';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

// SURFACE: dreamsurface.EnginesPortfolioAssets  (framework-mandated basename: page.tsx)

export const metadata = { title: 'Assets – PortfolioEngin', description: 'Select asset universe for optimization.' };

const ACCENT    = '#2a8ab8';
const NAV_ITEMS = [
  { href: '/engines/portfolio',          label: 'Hub',      emoji: '📈' },
  { href: '/engines/portfolio/optimize', label: 'Optimize', emoji: '⚡' },
  { href: '/engines/portfolio/assets',   label: 'Assets',   emoji: '🏦' },
  { href: '/engines/portfolio/quantum',  label: 'Quantum',  emoji: '⚛️' },
];

export default async function PortfolioAssetsPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user && !isDevBypassActive()) redirect('/login');
  return (
    <EnginAppShell engineName="PortfolioEngin" engineEmoji="📈" accentColor={ACCENT} backHref="/engines" backLabel="Engines" nav={<EnginNavBar items={NAV_ITEMS} accentColor={ACCENT} />}>
      <AssetsPanel />
    </EnginAppShell>
  );
}
