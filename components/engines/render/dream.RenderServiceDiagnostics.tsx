'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { makeEnginApp } from '@/components/engines/shared';
import { EnginRuntime } from '@/engine/engin-runtime/EnginRuntime';
import {
  RenderEnginRuleSet,
  RenderEnginViewport,
  acknowledgeRenderServiceIntent,
  readRenderServiceQueue,
  subscribeRenderServiceIntents,
  type RenderIntent,
  type RenderServiceIntentEnvelope,
} from '@/engins/renderengin';
import '@/engins/renderengin/runtimeRegistration';

function RenderDiagnosticsSurface({ onBack }: { onBack: () => void }): React.JSX.Element {
  const runtime = useMemo(() => new EnginRuntime<RenderIntent>(RenderEnginRuleSet, {
    runtimeId: 'render:shared-service',
    persistenceKey: 'render-domain-state',
  }), []);
  const processedIntentIdsRef = useRef(new Set<string>());
  const [derived, setDerived] = useState(() => runtime.getDerivedState());
  const [runtimeStatus, setRuntimeStatus] = useState('booting');
  const [queue, setQueue] = useState<RenderServiceIntentEnvelope[]>(() => readRenderServiceQueue());
  const [lastIntent, setLastIntent] = useState<RenderServiceIntentEnvelope | null>(null);
  const [incomingIntent, setIncomingIntent] = useState<RenderServiceIntentEnvelope | null>(null);

  const applyRenderIntent = useCallback((intent: RenderServiceIntentEnvelope) => {
    if (processedIntentIdsRef.current.has(intent.id)) return;
    processedIntentIdsRef.current.add(intent.id);
    const accepted = runtime.dispatch({
      type: intent.intentType,
      payload: {
        ...intent.payload,
        source: intent.source,
        intentId: intent.id,
      },
    });
    if (accepted) acknowledgeRenderServiceIntent(intent.id);
    setIncomingIntent(intent);
    setLastIntent(intent);
    setQueue(readRenderServiceQueue());
    setDerived(runtime.getDerivedState());
    setRuntimeStatus(accepted ? `applied ${intent.intentType}` : `rejected ${intent.intentType}`);
  }, [runtime]);

  useEffect(() => {
    let cancelled = false;
    const offLifecycle = runtime.onLifecycle((lifecycle) => {
      if (cancelled) return;
      setDerived(runtime.getDerivedState());
      if (lifecycle === 'running') setRuntimeStatus('running');
      if (lifecycle === 'paused') setRuntimeStatus('paused');
      if (lifecycle === 'stopped') setRuntimeStatus('stopped');
    });

    void runtime.restore().then((restored) => {
      if (cancelled) return;
      setRuntimeStatus(restored ? 'restored' : 'ready');
      runtime.start();
      readRenderServiceQueue().forEach(applyRenderIntent);
      setQueue(readRenderServiceQueue());
      setDerived(runtime.getDerivedState());
    });

    const unsubscribe = subscribeRenderServiceIntents(applyRenderIntent);

    return () => {
      cancelled = true;
      unsubscribe();
      offLifecycle();
      runtime.stop();
    };
  }, [applyRenderIntent, runtime]);

  const pipeline = Array.isArray(derived.pipeline) ? derived.pipeline.map(String) : [];
  const supports = Array.isArray(derived.supports) ? derived.supports.length : 0;
  const assetCount = typeof derived.assetCount === 'number' ? derived.assetCount : 0;

  return (
    <main className="min-h-full bg-gradient-to-br from-sky-50 via-white to-amber-50 p-4 text-slate-950 md:p-8">
      <div className="mx-auto grid max-w-6xl gap-5">
        <header className="rounded-3xl border border-sky-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
          <button type="button" onClick={onBack} className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-black text-sky-900 shadow-sm hover:bg-sky-50">
            ← Return to Engines
          </button>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-amber-600">Shared RenderEngin service</p>
          <h1 className="mt-2 text-3xl font-black text-sky-950">Render capability surface</h1>
          <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-slate-600">
            RenderEngin is wired as a shared service: ContentEngin, GameEngin, CodeEngin, LabEngin, Daydreams, and shell surfaces submit render intents into one canonical render queue. This page is the viewport and diagnostics surface for that service, not the only place RenderEngin exists.
          </p>
          <dl className="mt-4 grid gap-2 text-xs font-black text-slate-700 sm:grid-cols-4">
            <div className="rounded-2xl border border-sky-100 bg-sky-50/80 px-3 py-2"><dt className="text-sky-700">Runtime</dt><dd>{runtimeStatus}</dd></div>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/80 px-3 py-2"><dt className="text-sky-700">Assets</dt><dd>{assetCount}</dd></div>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/80 px-3 py-2"><dt className="text-sky-700">Queued</dt><dd>{queue.length}</dd></div>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/80 px-3 py-2"><dt className="text-sky-700">Supports</dt><dd>{supports}</dd></div>
          </dl>
          {lastIntent ? (
            <p className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-900">
              Last handoff: {lastIntent.source} → {lastIntent.intentType} · {String(lastIntent.payload.assetKind ?? lastIntent.payload.fileName ?? lastIntent.payload.assetId ?? 'runtime payload')}
            </p>
          ) : null}
          <ol className="mt-4 grid gap-2 text-xs font-bold text-slate-600 md:grid-cols-4">
            {pipeline.map((step) => <li key={step} className="rounded-2xl border border-sky-100 bg-sky-50/70 px-3 py-2">{step}</li>)}
          </ol>
        </header>
        <RenderEnginViewport runtime={runtime} incomingIntent={incomingIntent} />
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
  nav: [],
  EnginComponent: RenderDiagnosticsSurface,
});
