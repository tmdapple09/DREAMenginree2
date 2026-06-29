import MusicEnginApp from '@/components/engines/music/dream.MusicEnginApp';
import { isDevBypassActive } from '@/engine/dev-bypass';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

// SURFACE: dreamsurface.EnginesMusic  (framework-mandated basename: page.tsx)

export default async function MusicEnginAppPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user && !isDevBypassActive()) redirect('/login');
  return <MusicEnginApp />;
}
