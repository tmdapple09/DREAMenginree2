// SURFACE: dreamsurface.EnginesBrand  (framework-mandated basename: page.tsx)
import BrandEnginApp from '@/components/engines/brand/dream.BrandEnginApp';
import { isDevBypassActive } from '@/lib/dev-bypass';
import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
export default async function BrandEnginAppPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user && !isDevBypassActive()) redirect('/login');
  return <BrandEnginApp />;
}