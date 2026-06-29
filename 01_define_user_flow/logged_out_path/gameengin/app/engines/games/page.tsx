import GameEnginApp from '@/components/engines/games/dream.GameEnginApp';
import { buildLoginRedirectPath } from '@/supabase/auth/nextRedirect';
import { isDevBypassActive } from '@/engine/dev-bypass';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

// SURFACE: dreamsurface.EnginesGames  (framework-mandated basename: page.tsx)

interface GamesEnginAppPageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function GamesEnginAppPage(props?: GamesEnginAppPageProps ){
  await connection();
  const searchParams = props?.searchParams;
  const currentSearchParams = searchParams ? await searchParams : undefined;
  const supabase = await createServerClient();
  let user = null;
  try {
    user = await safeGetUser(supabase);
  } catch { /* Supabase not configured — treat as unauthenticated */ }
  if (!user && !isDevBypassActive()) redirect(buildLoginRedirectPath('/engines/games', currentSearchParams));
  return <GameEnginApp />;
}
