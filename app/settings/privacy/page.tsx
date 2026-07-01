import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import PrivacyClient from './dream.PrivacyClient';



export const metadata = { title: 'Privacy – Dreamengin Settings' };

export default async function PrivacySettingsPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) redirect('/login');

  return <PrivacyClient />;
}
