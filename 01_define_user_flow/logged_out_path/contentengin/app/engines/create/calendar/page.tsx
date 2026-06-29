import CreateEnginApp from '@/components/engines/create/dream.CreateEnginApp';
import { isDevBypassActive } from '@/engine/dev-bypass';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { createServerClient } from '@/supabase/server/serverClient';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
export const metadata = { title: 'ContentEngin Asset Studio – DREAMengin', description: 'Procedural asset creation, validation, and GLB export.' };
export default async function CreateAssetStudioAliasPage(){ await connection(); const supabase=await createServerClient(); const user=await safeGetUser(supabase); if(!user && !isDevBypassActive()) redirect('/login'); return <CreateEnginApp/>; }
