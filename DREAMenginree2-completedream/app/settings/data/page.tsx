// SURFACE: dreamsurface.SettingsData  (framework-mandated basename: page.tsx)
import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import DataClient from './dream.DataClient';

export const metadata = { title: 'Data – Dreamengin Settings' };

export default async function DataSettingsPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) redirect('/login');

  return <DataClient />;
}