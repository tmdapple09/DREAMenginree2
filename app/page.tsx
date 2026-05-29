// SURFACE: dreamsurface.Landing  (framework-mandated basename: page.tsx)
// Authenticated users go straight to /dreamdmbar.
// Unauthenticated visitors see the public landing page.
import LandingHero from '@/components/dream.LandingHero';
import LandingNav from '@/components/landing/dream.LandingNav';
import LandingProductStatement from '@/components/landing/dream.LandingProductStatement';
import UniverseField from '@/components/landing/dream.scene.UniverseField';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { createServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

export const metadata = {
  title: 'DREAMengin — Creative Operating Surface',
  description:
    'A privacy-first creative OS. Your world — your rules, your dreams, and entirely yours.',
};

export default async function Page() {
  await connection();

  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  // Authenticated — drop straight into the shell
  if (user) redirect('/dreamdmbar');

  // Guest — public landing
  return (
    <div
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
      style={{
        background:
          'linear-gradient(155deg, #070e1c 0%, #0c1829 45%, #0f2244 75%, #0a1628 100%)',
      }}
    >
      {/* Ambient particle canvas */}
      <UniverseField />

      <LandingNav />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-10 lg:flex-row lg:gap-16 lg:px-16">
        <LandingProductStatement />
        <LandingHero />
      </main>
    </div>
  );
}
