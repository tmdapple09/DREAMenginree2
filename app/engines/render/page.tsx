import RenderEnginApp from '@/components/engines/render/dream.RenderEnginApp';
import { isDevBypassActive } from '@/engine/dev-bypass';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { createServerClient } from '@/supabase/server/serverClient';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

export const metadata = {
  title: 'RenderEngin – DREAMengin',
  description: 'WebGPU viewport foundation for RenderEngin.',
};

export default async function RenderEnginPage() {
  await connection();
  const supabase = await createServerClient();
  let user = null;
  try {
    user = await safeGetUser(supabase);
  } catch { /* Supabase not configured — treat as unauthenticated */ }
  if (!user && !isDevBypassActive()) redirect('/login');
  return <RenderEnginApp />;
}
