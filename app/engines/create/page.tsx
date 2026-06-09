import CreateEnginApp from '@/components/engines/create/dream.CreateEnginApp';
import { isDevBypassActive } from '@/lib/dev-bypass';
import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

// SURFACE: dreamsurface.EnginesCreate  (framework-mandated basename: page.tsx)
export default async function CreateEnginAppPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user && !isDevBypassActive()) redirect('/login');
  return <CreateEnginApp />;
}
