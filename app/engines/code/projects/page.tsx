import ProjectsPanel from '@/components/engines/code/panels/dream.panel.ProjectsPanel';
import { EnginAppShell, EnginNavBar } from '@/components/engines/shared';
import { isDevBypassActive } from '@/engine/dev-bypass';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';



export const metadata = { title: 'Projects – CodeEngin', description: 'Your code projects.' };

const ACCENT = '#22d3ee';
const NAV_ITEMS = [
  { href: '/engines/code',          label: 'IDE',      emoji: '💻' },
  { href: '/engines/code/notebook', label: 'Notebook', emoji: '📓' },
  { href: '/engines/code/projects', label: 'Projects', emoji: '📁' },
  { href: '/engines/code/ai',       label: 'AI',       emoji: '🤖' },
];

export default async function CodeProjectsPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user && !isDevBypassActive()) redirect('/login');
  return (
    <EnginAppShell engineName="CodeEngin" engineEmoji="💻" accentColor={ACCENT} backHref="/daydream/code" backLabel="Code Daydream" nav={<EnginNavBar items={NAV_ITEMS} accentColor={ACCENT} />}>
      <ProjectsPanel />
    </EnginAppShell>
  );
}
