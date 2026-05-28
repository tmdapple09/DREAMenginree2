// SURFACE: dreamsurface.EnginesCode  (framework-mandated basename: page.tsx)
import CodeEnginApp from '@/components/engines/code/dream.CodeEnginApp';
import { isDevBypassActive } from '@/lib/dev-bypass';
import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
export default async function CodeEnginAppPage( ){
  await connection();
  const supabase = await createServerClient();
  let user = null;
  try {
    const user = await safeGetUser(supabase);
    user = user;
  } catch { /* Supabase not configured — treat as unauthenticated */ }
  if (!user && !isDevBypassActive()) redirect('/login');
  return <CodeEnginApp />;
}