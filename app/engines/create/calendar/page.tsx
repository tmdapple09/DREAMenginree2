import CreateEnginApp from '@/components/engines/create/dream.CreateEnginApp';
import { isDevBypassActive } from '@/lib/dev-bypass';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { createServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
export const metadata = { title: 'ContentEngin Asset Studio – DREAMengin', description: 'Procedural asset creation, validation, and GLB export.' };
export default async function CreateAssetStudioAliasPage(){ await connection(); const supabase=await createServerClient(); const user=await safeGetUser(supabase); if(!user && !isDevBypassActive()) redirect('/login'); return <CreateEnginApp/>; }
