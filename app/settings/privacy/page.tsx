import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import PrivacyClient from './dream.PrivacyClient';

// SURFACE: dreamsurface.SettingsPrivacy  (framework-mandated basename: page.tsx)

export const metadata = { title: 'Privacy – Dreamengin Settings' };

export default async function PrivacySettingsPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) redirect('/login');

  return <PrivacyClient />;
}
