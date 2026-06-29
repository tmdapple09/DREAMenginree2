'use client';

import { getRendererBackend } from '@/engine/rendering/webgpu';
import RenderStage, { createInlineRenderIntent } from '@/engins/renderengin/RenderStage';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const GOLD = '#e8c040';
const CYAN = '#5de8ff';
const DARK = '#04080f';
const GLASS = 'rgba(255,255,255,0.08)';
const BORDER = 'rgba(255,255,255,0.11)';

export default function WebGPUShowcase() {
  const [backend, setBackend] = useState<'webgpu' | 'webgl2' | 'webgl' | 'checking'>('checking');
  const intent = useMemo(() => createInlineRenderIntent('Daydream', 'render.scene.load', {
    source: 'WebGPUShowcase',
    assetKind: 'renderengin-webgpu-capability',
    backend: 'webgpu',
    purpose: 'RenderEngin-owned GPU capability surface',
  }), []);

  useEffect(() => {
    let cancelled = false;
    void getRendererBackend().then((next) => {
      if (!cancelled) setBackend(next);
    }).catch(() => {
      if (!cancelled) setBackend('webgl');
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main
      style={{
        minHeight: '100dvh',
        background: DARK,
        color: '#fff',
        fontFamily: 'var(--font-space-grotesk, system-ui, sans-serif)',
        overflowX: 'hidden',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 20px',
        background: `${DARK}cc`,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${BORDER}`,
      }}>
        <Link href="/engines/create" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="22" height="11" viewBox="0 0 80 36" aria-hidden>
            <path d="M12 18c8-10 18-10 28 0s20 10 28 0" fill="none" stroke={GOLD} strokeWidth="6" strokeLinecap="round" />
            <path d="M12 18c8 10 18 10 28 0s20-10 28 0" fill="none" stroke={CYAN} strokeWidth="6" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 13, fontWeight: 800, color: 'rgba(255,255,255,0.78)' }}>RenderEngin visual runtime</span>
        </Link>
      </div>

      <section style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px 40px', display: 'grid', gap: 16 }}>
        <header style={{
          background: GLASS,
          border: `1px solid ${BORDER}`,
          borderRadius: 24,
          padding: 20,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}>
          <p style={{ margin: 0, color: CYAN, fontSize: 12, fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            WebGPU is RenderEngin
          </p>
          <h1 style={{ margin: '8px 0 6px', fontSize: 'clamp(28px, 7vw, 48px)', lineHeight: 1.05, fontWeight: 900 }}>
            One visual runtime for ContentEngin, GameEngin, LabEngin, Daydreams, and DreamSpace.
          </h1>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.62)', lineHeight: 1.6, maxWidth: 760 }}>
            DREAMengin does not maintain separate rendering products. WebGPU, shader work, canvas fallback, GLB preview, world-grid preview, and viewport controls route through RenderEngin as the shared graphics substrate.
          </p>
          <div style={{ marginTop: 14, display: 'inline-flex', gap: 8, alignItems: 'center', border: `1px solid ${BORDER}`, borderRadius: 999, padding: '8px 12px', color: backend === 'webgpu' ? CYAN : '#fbbf24', fontWeight: 900 }}>
            <span>{backend === 'checking' ? 'checking' : backend}</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>owned by RenderEngin</span>
          </div>
        </header>

        <div style={{ background: '#fff', color: '#0f172a', borderRadius: 24, padding: 12 }}>
          <RenderStage intent={intent} runtimeId="render:webgpu-capability" persistenceKey="render:webgpu-capability" />
        </div>

        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
          {[
            ['ContentEngin', 'GLB and procedural assets preview through RenderEngin.'],
            ['GameEngin', 'World grids and cartridge scenes hand off to RenderEngin.'],
            ['LabEngin', 'Simulation meshes and fields share the same viewport path.'],
            ['CodeEngin', 'WGSL/material previews use RenderEngin instead of a separate renderer.'],
          ].map(([label, body]) => (
            <div key={label} style={{ background: GLASS, border: `1px solid ${BORDER}`, borderRadius: 18, padding: 16 }}>
              <h2 style={{ margin: 0, fontSize: 15, color: GOLD }}>{label}</h2>
              <p style={{ margin: '6px 0 0', color: 'rgba(255,255,255,0.58)', fontSize: 13, lineHeight: 1.5 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
