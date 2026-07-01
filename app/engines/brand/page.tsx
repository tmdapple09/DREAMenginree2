import BrandEnginApp from '@/components/engines/brand/dream.BrandEnginApp';
import { isDevBypassActive } from '@/engine/dev-bypass';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';


export default async function BrandEnginAppPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user && !isDevBypassActive()) redirect('/login');
  return <BrandEnginApp />;
}
