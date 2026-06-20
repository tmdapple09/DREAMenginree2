import { isDevBypassActive } from '@/engine/dev-bypass';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

// SURFACE: dreamsurface.Engines  (framework-mandated basename: page.tsx)

export const metadata = {
  title: 'Engines – DREAMengin',
  description: 'Creative Engins plus shared services.',
};

const ENGINES = [
  {
    id: 'games',
    name: 'GameEngin',
    emoji: '🎮',
    description: 'Play, compete, build worlds',
    href: '/engines/games',
    accent: '#c8981a',
    subroutes: ['Library', 'Scores', 'Builder'],
  },
  {
    id: 'music',
    name: 'StarMakerEngin',
    emoji: '🎵',
    description: 'Full DAW · record · arrange',
    href: '/engines/music',
    accent: '#a855f7',
    subroutes: ['Studio', 'Arrange', 'Library'],
  },
  {
    id: 'code',
    name: 'CodeEngin',
    emoji: '💻',
    description: 'IDE · notebook · AI assistant',
    href: '/engines/code',
    accent: '#22d3ee',
    subroutes: ['Notebook', 'Projects', 'AI'],
  },
  {
    id: 'lab',
    name: 'LabEngin',
    emoji: '🔬',
    description: 'Experiments · data viz · quantum',
    href: '/engines/lab',
    accent: '#10b981',
    subroutes: ['Experiments', 'Data Viz', 'Quantum'],
  },
  {
    id: 'brand',
    name: 'BrandingEngin',
    emoji: '🎨',
    description: 'Identity · campaigns',
    href: '/engines/brand',
    accent: '#f472b6',
    subroutes: ['Identity', 'Campaigns'],
  },
  {
    id: 'create',
    name: 'ContentEngin',
    emoji: '✨',
    description: 'Editor · calendar · publish queue',
    href: '/engines/create',
    accent: '#fb923c',
    subroutes: ['Editor', 'Calendar', 'Queue'],
  },

  {
    id: 'render',
    name: 'Render Service',
    emoji: '🧊',
    description: 'Shared WebGPU renderer used by the Engins',
    href: '/engines/render',
    accent: '#38bdf8',
    subroutes: ['Service', 'Viewport', 'Snapshots'],
  },
  {
    id: 'forge',
    name: 'ForgeEngin',
    emoji: '🔥',
    description: 'Meta-creation · orchestrate all engines',
    href: '/daydream/forge',
    accent: '#ef4444',
    subroutes: ['Status Matrix', 'Cross-Engine', 'Activity'],
  },
  {
    id: 'portfolio',
    name: 'PortfolioEngin',
    emoji: '📈',
    description: 'Quantum portfolio optimization · QAOA / VQE',
    href: '/engines/portfolio',
    accent: '#2a8ab8',
    subroutes: ['Optimize', 'Assets', 'Quantum'],
  },
] as const;

export default async function EnginesHubPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user && !isDevBypassActive()) redirect('/login');

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 text-slate-950 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Link href="/homedream" className="text-xs text-sky-700 hover:text-sky-950 transition-colors">
              ← Daydream
            </Link>
          </div>
          <h1 className="text-4xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-[#c8981a] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">
              DREAM
            </span>
            <span className="text-sky-950">engines</span>
          </h1>
          <p className="text-slate-600 mt-2 text-lg">
            Creative Engins connected through shared services — Render is a service, not a separate creative Engin.
          </p>
        </div>

        {/* Engine cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ENGINES.map((engine) => (
            <Link
              key={engine.id}
              href={engine.href}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-white/85 border border-sky-100 hover:border-opacity-60 transition-all hover:bg-sky-50/80 shadow-sm overflow-hidden"
              style={{ '--accent': engine.accent } as React.CSSProperties}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${engine.accent}18, transparent 70%)` }}
              />

              {/* Top accent line */}
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

              {/* Sub-routes */}
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

              {/* Open indicator */}
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

        {/* Footer note */}
        <p className="text-center text-slate-400 text-xs mt-10">
          Creative Engins are production tools; Render is the shared service layer behind visual previews and snapshots.
        </p>
      </div>
    </div>
  );
}
