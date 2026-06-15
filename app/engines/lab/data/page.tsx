import DataVizPanel from '@/components/engines/lab/panels/dream.panel.DataVizPanel';
import { EnginAppShell, EnginNavBar } from '@/components/engines/shared';
import { isDevBypassActive } from '@/engine/dev-bypass';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

// SURFACE: dreamsurface.EnginesLabData  (framework-mandated basename: page.tsx)

export const metadata = { title: 'Data Viz – LabEngin', description: 'Visualize experiment data.' };

const ACCENT = '#10b981';
const NAV_ITEMS = [
  { href: '/engines/lab',             label: 'Hub',         emoji: '🔬' },
  { href: '/engines/lab/experiments', label: 'Experiments', emoji: '⚗️' },
  { href: '/engines/lab/data',        label: 'Data Viz',    emoji: '📊' },
  { href: '/engines/lab/quantum',     label: 'Quantum',     emoji: '⚛️' },
];

export default async function LabDataPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user && !isDevBypassActive()) redirect('/login');
  return (
    <EnginAppShell engineName="LabEngin" engineEmoji="🔬" accentColor={ACCENT} backHref="/daydream/lab" backLabel="Lab Daydream" nav={<EnginNavBar items={NAV_ITEMS} accentColor={ACCENT} />}>
      <DataVizPanel />
    </EnginAppShell>
  );
}
