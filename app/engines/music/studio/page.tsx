import StudioPanel from '@/components/engines/music/panels/dream.panel.StudioPanel';
import { EnginAppShell, EnginNavBar } from '@/components/engines/shared';
import { isDevBypassActive } from '@/engine/dev-bypass';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

// SURFACE: dreamsurface.EnginesMusicStudio  (framework-mandated basename: page.tsx)

export const metadata = { title: 'Studio – StarMakerEngin', description: 'Recording studio.' };

const ACCENT = '#a855f7';
const NAV_ITEMS = [
  { href: '/engines/music',         label: 'DAW',     emoji: '🎛️' },
  { href: '/engines/music/studio',  label: 'Studio',  emoji: '🎙️' },
  { href: '/engines/music/arrange', label: 'Arrange', emoji: '🎼' },
  { href: '/engines/music/library', label: 'Library', emoji: '📂' },
];

export default async function MusicStudioPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user && !isDevBypassActive()) redirect('/login');

  return (
    <EnginAppShell
      engineName="StarMakerEngin"
      engineEmoji="🎵"
      accentColor={ACCENT}
      backHref="/daydream/music"
      backLabel="Music Daydream"
      nav={<EnginNavBar items={NAV_ITEMS} accentColor={ACCENT} />}
    >
      <StudioPanel />
    </EnginAppShell>
  );
}
