'use client';

import { makeEnginApp } from '@/components/engines/shared';
import { RenderEnginViewport } from '@/engins/renderengin';

function RenderEnginSurface({ onBack: _onBack }: { onBack: () => void }): React.JSX.Element {
  return (
    <main className="min-h-full bg-gradient-to-br from-sky-50 via-white to-amber-50 p-4 text-slate-950 md:p-8">
      <div className="mx-auto grid max-w-6xl gap-5">
        <header className="rounded-3xl border border-sky-200/80 bg-white/80 p-5 shadow-sm backdrop-blur">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-600">RenderEngin viewport foundation</p>
          <h1 className="mt-2 text-3xl font-black text-sky-950">WebGPU scene surface</h1>
          <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-slate-600">
            This surface is wired into DREAMengin as the first RenderEngin product entry point. It renders the current smoke scene through the WebGPU runtime and reports measured frame-loop stats; it does not claim GPU PBR or virtualized geometry until those systems are actually implemented.
          </p>
        </header>
        <RenderEnginViewport />
      </div>
    </main>
  );
}

export default makeEnginApp({
  id: 'render',
  name: 'RenderEngin',
  emoji: '🧊',
  accentColor: '#38bdf8',
  backHref: '/engines',
  backLabel: 'Engines',
  nav: [
    { href: '/engines/render', label: 'Viewport' },
  ],
  EnginComponent: RenderEnginSurface,
});
