import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import DataClient from './dream.DataClient';

// SURFACE: dreamsurface.SettingsData  (framework-mandated basename: page.tsx)

export const metadata = { title: 'Data – Dreamengin Settings' };

export default async function DataSettingsPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) redirect('/login');

  return <DataClient />;
}
