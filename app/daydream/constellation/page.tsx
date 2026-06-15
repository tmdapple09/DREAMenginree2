import { isDevBypassActive } from '@/engine/dev-bypass';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import ConstellationClient from './dream.ConstellationClient';

// SURFACE: dreamsurface.DaydreamConstellation  (framework-mandated basename: page.tsx)

export const metadata = {
  title: 'Dream Constellation — DREAMengin',
  description: 'An interactive 3-D node map of all your Dream Surfaces.',
};

export default async function ConstellationPage( ){
  await connection();
  const supabase = await createServerClient();
  let user = null;
  try {
    user = await safeGetUser(supabase);
  } catch { /* Supabase not configured — treat as unauthenticated */ }
  if (!user && !isDevBypassActive()) redirect('/login');

  return <ConstellationClient />;
}
