'use client';

import { useMemo } from 'react';
import { makeEnginApp } from '@/components/engines/shared';
import { EnginRuntime } from '@/engine/engin-runtime/EnginRuntime';
import { RenderEnginRuleSet, RenderEnginViewport, type RenderIntent } from '@/engins/renderengin';
import '@/engins/renderengin/runtimeRegistration';

function RenderDiagnosticsSurface({ onBack }: { onBack: () => void }): React.JSX.Element {
  const runtime = useMemo(() => new EnginRuntime<RenderIntent>(RenderEnginRuleSet, {
    runtimeId: 'render:surface',
    persistenceKey: 'render-domain-state',
  }), []);
  const derived = runtime.getDerivedState();
  return (
    <main className="min-h-full bg-gradient-to-br from-sky-50 via-white to-amber-50 p-4 text-slate-950 md:p-8">
      <div className="mx-auto grid max-w-6xl gap-5">
        <header className="rounded-3xl border border-sky-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
          <button type="button" onClick={onBack} className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-black text-sky-900 shadow-sm hover:bg-sky-50">
            ← Return to Engines
          </button>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-amber-600">Render service runtime surface</p>
          <h1 className="mt-2 text-3xl font-black text-sky-950">WebGPU scene surface</h1>
          <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-slate-600">
            Render now uses the canonical <strong>render</strong> id across route, runtime, capability, rule-set, registry, and surface handoff. User actions dispatch render intents through the fixed EnginRuntime before the viewport updates.
          </p>
          <ol className="mt-4 grid gap-2 text-xs font-bold text-slate-600 md:grid-cols-4">
            {(derived.pipeline as string[]).map((step) => <li key={step} className="rounded-2xl border border-sky-100 bg-sky-50/70 px-3 py-2">{step}</li>)}
          </ol>
        </header>
        <RenderEnginViewport runtime={runtime} />
      </div>
    </main>
  );
}

export default makeEnginApp({
  id: 'render',
  name: 'Render',
  emoji: '🧊',
  accentColor: '#38bdf8',
  backHref: '/engines',
  backLabel: 'Engines',
  nav: [],
  EnginComponent: RenderDiagnosticsSurface,
});
