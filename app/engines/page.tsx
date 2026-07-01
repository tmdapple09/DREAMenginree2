import { isDevBypassActive } from '@/engine/dev-bypass';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import { USER_FACING_ENGINES } from '@/engins/forgeengin/forge/forgeRegistry';



export const metadata = {
  title: 'Engines – DREAMengin',
  description: 'Creative Engins plus shared services.',
};

const ENGINES = USER_FACING_ENGINES.map((engin) => ({
  id: engin.id,
  name: engin.name,
  emoji: engin.emoji,
  description: engin.desc,
  href: engin.enginHref || engin.daydreamHref,
  accent: engin.accent,
  subroutes: engin.capabilities.slice(0, 3),
}));

export default async function EnginesHubPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user && !isDevBypassActive()) redirect('/login');

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 text-slate-950 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Link href="/homedream" className="text-xs text-sky-700 hover:text-sky-950 transition-colors">
              ← Daydream
            </Link>
          </div>
          <h1 className="text-4xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#F5B700] to-[#8EDCFF] bg-clip-text text-transparent">
              DREAM
            </span>
            <span className="text-sky-950">engines</span>
          </h1>
          <p className="text-slate-600 mt-2 text-lg">
            Creative Engins connected through shared services — Render is a service, not a separate creative Engin.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ENGINES.map((engine) => (
            <Link
              key={engine.id}
              href={engine.href}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-white/85 border border-sky-100 hover:border-opacity-60 transition-all hover:bg-sky-50/80 shadow-sm overflow-hidden"
              style={{ '--accent': engine.accent } as React.CSSProperties}
            >
              
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${engine.accent}18, transparent 70%)` }}
              />

              
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${engine.accent}, transparent)` }}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{engine.emoji}</span>
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ background: `${engine.accent}22`, color: engine.accent }}
                  >
                    App
                  </span>
                </div>
                <h2
                  className="text-lg font-bold mb-1 transition-colors"
                  style={{ color: engine.accent }}
                >
                  {engine.name}
                </h2>
                <p className="text-sm text-slate-600">{engine.description}</p>
              </div>

              
              <div className="relative flex flex-wrap gap-1.5">
                {engine.subroutes.map((route) => (
                  <span
                    key={route}
                    className="text-[11px] px-2 py-0.5 rounded-full"
                    style={{ background: `${engine.accent}12`, color: `${engine.accent}cc` }}
                  >
                    {route}
                  </span>
                ))}
              </div>

              
              <div
                className="relative flex items-center justify-between pt-2 border-t border-white/[0.06]"
              >
                <span className="text-xs text-slate-400">Open engine →</span>
                <span
                  className="text-xs font-medium"
                  style={{ color: engine.accent }}
                >
                  {engine.subroutes.length + 1} screens
                </span>
              </div>
            </Link>
          ))}
        </div>

        
        <p className="text-center text-slate-400 text-xs mt-10">
          Creative Engins are production tools; Render is the shared service layer behind visual previews and snapshots.
        </p>
      </div>
    </div>
  );
}
