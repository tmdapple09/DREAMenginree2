import LabEnginApp from '@/components/engines/lab/dream.LabEnginApp';
import { isDevBypassActive } from '@/engine/dev-bypass';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';


export default async function LabEnginAppPage( ){
  await connection();
  const supabase = await createServerClient();
  let user = null;
  try {
    user = await safeGetUser(supabase);
  } catch {  }
  if (!user && !isDevBypassActive()) redirect('/login');
  return <LabEnginApp />;
}
