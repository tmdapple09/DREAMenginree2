import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import ControlsClient from './dream.ControlsClient';



export const metadata = { title: 'Controls – Dreamengin Settings' };

export default async function ControlsSettingsPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) redirect('/login');

  return <ControlsClient />;
}
