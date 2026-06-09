import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { createServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import dynamic from 'next/dynamic';

const LandingHero = dynamic(() => import('@/components/dream.LandingHero'));
const LandingNav = dynamic(() => import('@/components/landing/dream.LandingNav'));
const UniverseField = dynamic(() => import('@/components/landing/dream.scene.UniverseField'));

export default async function Page() {
  await connection();

  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (user) redirect('/dreamdmbar');

  return (
    <div
      data-route="landing"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
      style={{ background: 'linear-gradient(155deg, #070e1c 0%, #0c1829 45%, #0f2244 75%, #0a1628 100%)' }}
    >
      <UniverseField />
      <LandingNav />
      <LandingHero />
    </div>
  );
}

