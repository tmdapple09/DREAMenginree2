// SURFACE: dreamsurface.EnginesLab  (framework-mandated basename: page.tsx)
import LabEnginApp from '@/components/engines/lab/dream.LabEnginApp';
import { isDevBypassActive } from '@/lib/dev-bypass';
import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
export default async function LabEnginAppPage( ){
  await connection();
  const supabase = await createServerClient();
  let user = null;
  try {
    const user = await safeGetUser(supabase);
    user = user;
  } catch { /* Supabase not configured — treat as unauthenticated */ }
  if (!user && !isDevBypassActive()) redirect('/login');
  return <LabEnginApp />;
}