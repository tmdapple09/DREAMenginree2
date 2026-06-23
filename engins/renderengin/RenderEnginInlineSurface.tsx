'use client';

import { useEffect, useMemo, useState } from 'react';
import { EnginRuntime } from '@/engine/engin-runtime/EnginRuntime';
import { RenderEnginRuleSet, type RenderIntent } from './core';
import type { RenderServiceIntentEnvelope } from './serviceRuntime';
import RenderEnginViewport from './RenderEnginViewport';

export default function RenderEnginInlineSurface({
  incomingIntent,
  onBack,
  title = 'Render',
  subtitle,
}: {
  incomingIntent?: RenderServiceIntentEnvelope | null;
  onBack?: () => void;
  title?: string;
  subtitle?: string;
}) {
  const runtime = useMemo(() => new EnginRuntime<RenderIntent>(RenderEnginRuleSet, {
    runtimeId: 'render:inline-surface',
    persistenceKey: 'render-inline-domain-state',
  }), []);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void runtime.restore().finally(() => {
      if (cancelled) return;
      runtime.start();
      setReady(true);
    });
    return () => {
      cancelled = true;
      runtime.stop();
    };
  }, [runtime]);

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateRows: 'auto 1fr', background: 'linear-gradient(180deg,#eff6ff 0%,#ffffff 32%,#dbeafe 100%)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '10px 12px', borderBottom: '1px solid rgba(56,189,248,.18)', background: 'rgba(255,255,255,.86)', backdropFilter: 'blur(14px)', zIndex: 4 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: '.08em', textTransform: 'uppercase', color: '#0284c7' }}>RenderEngin</div>
          <div style={{ fontSize: 16, fontWeight: 900, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
          {subtitle ? <div style={{ fontSize: 12, fontWeight: 700, color: '#1d4ed8' }}>{subtitle}</div> : null}
        </div>
        {onBack ? <button type="button" onClick={onBack} style={{ minHeight: 44, borderRadius: 999, border: '1px solid rgba(56,189,248,.24)', background: 'white', padding: '10px 14px', fontWeight: 900, color: '#0c4a6e' }}>Back to edit</button> : null}
      </div>
      <div style={{ minHeight: 0, padding: 10 }}>
        {ready ? <RenderEnginViewport runtime={runtime} incomingIntent={incomingIntent ?? null} /> : <div style={{ display: 'grid', placeItems: 'center', height: '100%', color: '#0f172a', fontWeight: 900 }}>Starting RenderEngin…</div>}
      </div>
    </div>
  );
}
