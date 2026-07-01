import LibraryPanel from '@/components/engines/games/panels/dream.panel.LibraryPanel';
import { EnginAppShell, EnginNavBar } from '@/components/engines/shared';
import { buildLoginRedirectPath } from '@/supabase/auth/nextRedirect';
import { isDevBypassActive } from '@/engine/dev-bypass';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';



export const metadata = { title: 'Game Library – GameEngin', description: 'Browse all available games.' };

const ACCENT = '#c8981a';
const NAV_ITEMS = [
  { href: '/engines/games',         label: 'Hub',     emoji: '🎮' },
  { href: '/engines/games/library', label: 'Library', emoji: '📚' },
  { href: '/gameengin/cartridges',  label: 'Cartridges', emoji: '💾' },
  { href: '/engines/games/scores',  label: 'Scores',  emoji: '🏆' },
  { href: '/engines/games/builder', label: 'Builder', emoji: '🗺️' },
];

interface GamesLibraryPageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function GamesLibraryPage(props?: GamesLibraryPageProps ){
  await connection();
  const searchParams = props?.searchParams;
  const currentSearchParams = searchParams ? await searchParams : undefined;
  const supabase = await createServerClient();
  let user = null;
  try {
    user = await safeGetUser(supabase);
  } catch {  }
  if (!user && !isDevBypassActive()) redirect(buildLoginRedirectPath('/engines/games/library', currentSearchParams));

  return (
    <EnginAppShell
      engineName="GameEngin"
      engineEmoji="🎮"
      accentColor={ACCENT}
      backHref="/daydream/games"
      backLabel="Games Daydream"
      nav={<EnginNavBar items={NAV_ITEMS} accentColor={ACCENT} />}
    >
      <LibraryPanel />
    </EnginAppShell>
  );
}
