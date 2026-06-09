import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import FeedSettingsClient from './dream.FeedSettingsClient';

// SURFACE: dreamsurface.FeedSettings  (framework-mandated basename: page.tsx)

export const metadata = { title: 'Feed Settings – Dreamengin' };

export default async function FeedSettingsPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) redirect('/login');

  return <FeedSettingsClient />;
}
