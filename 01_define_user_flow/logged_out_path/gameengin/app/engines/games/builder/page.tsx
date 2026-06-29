import BuilderPanel from '@/components/engines/games/panels/dream.panel.BuilderPanel';
import { EnginAppShell, EnginNavBar } from '@/components/engines/shared';
import { buildLoginRedirectPath } from '@/supabase/auth/nextRedirect';
import { isDevBypassActive } from '@/engine/dev-bypass';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

// SURFACE: dreamsurface.EnginesGamesBuilder  (framework-mandated basename: page.tsx)

export const metadata = { title: 'Character Builder – GameEngin', description: 'Paint original 32×32 game characters.' };

const ACCENT = '#c8981a';
const NAV_ITEMS = [
  { href: '/engines/games',         label: 'Hub',     emoji: '🎮' },
  { href: '/engines/games/library', label: 'Library', emoji: '📚' },
  { href: '/gameengin/cartridges',  label: 'Cartridges', emoji: '💾' },
  { href: '/engines/games/scores',  label: 'Scores',  emoji: '🏆' },
  { href: '/engines/games/builder', label: 'Builder', emoji: '🗺️' },
];

interface GamesBuilderPageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function GamesBuilderPage(props?: GamesBuilderPageProps ){
  await connection();
  const searchParams = props?.searchParams;
  const currentSearchParams = searchParams ? await searchParams : undefined;
  const supabase = await createServerClient();
  let user = null;
  try {
    user = await safeGetUser(supabase);
  } catch { /* Supabase not configured — treat as unauthenticated */ }
  if (!user && !isDevBypassActive()) redirect(buildLoginRedirectPath('/engines/games/builder', currentSearchParams));

  return (
    <EnginAppShell
      engineName="GameEngin"
      engineEmoji="🎮"
      accentColor={ACCENT}
      backHref="/daydream/games"
      backLabel="Games Daydream"
      nav={<EnginNavBar items={NAV_ITEMS} accentColor={ACCENT} />}
    >
      <BuilderPanel />
    </EnginAppShell>
  );
}
