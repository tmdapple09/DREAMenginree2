import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import ControlsClient from './dream.ControlsClient';

// SURFACE: dreamsurface.SettingsControls  (framework-mandated basename: page.tsx)

export const metadata = { title: 'Controls – Dreamengin Settings' };

export default async function ControlsSettingsPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) redirect('/login');

  return <ControlsClient />;
}
