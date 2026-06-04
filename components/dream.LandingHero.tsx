'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { calibrateDevice, type CalibrationSample } from '@/lib/dreamr/swipeCalibration';

// ── Gesture calibration state ────────────────────────────────────────────────

interface CalibrationState {
  samples: CalibrationSample[];
  calibrated: boolean;
  activePointer: {
    id: number;
    startX: number;
    startY: number;
    startTime: number;
    lastX: number;
    lastY: number;
    maxDeviation: number;
    travelPx: number;
  } | null;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function LandingHero() {
  const calibrationRef = useRef<CalibrationState>({
    samples: [],
    calibrated: false,
    activePointer: null,
  });

  useEffect(() => {
    const state = calibrationRef.current;

    function onPointerDown(e: PointerEvent) {
      if (state.calibrated) return;

      state.activePointer = {
        id: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        startTime: performance.now(),
        lastX: e.clientX,
        lastY: e.clientY,
        maxDeviation: 0,
        travelPx: 0,
      };
    }

    function onPointerMove(e: PointerEvent) {
      if (state.calibrated || !state.activePointer) return;
      if (e.pointerId !== state.activePointer.id) return;

      const dx = e.clientX - state.activePointer.lastX;
      const dy = e.clientY - state.activePointer.lastY;

      state.activePointer.travelPx += Math.sqrt(dx * dx + dy * dy);

      const devX = e.clientX - state.activePointer.startX;
      const devY = e.clientY - state.activePointer.startY;
      const deviation = Math.sqrt(devX * devX + devY * devY);

      state.activePointer.maxDeviation = Math.max(
        state.activePointer.maxDeviation,
        deviation,
      );

      state.activePointer.lastX = e.clientX;
      state.activePointer.lastY = e.clientY;
    }

    function onPointerUp(e: PointerEvent) {
      if (state.calibrated || !state.activePointer) return;
      if (e.pointerId !== state.activePointer.id) return;

      const durationMs = performance.now() - state.activePointer.startTime;
      const observedDeviationPx = state.activePointer.maxDeviation;
      const travelPx = state.activePointer.travelPx;

      state.samples.push({ observedDeviationPx, travelPx, durationMs });
      state.activePointer = null;

      if (state.samples.length >= 3) {
        calibrateDevice(state.samples);
        state.calibrated = true;
      }
    }

    addEventListener('pointerdown', onPointerDown);
    addEventListener('pointermove', onPointerMove);
    addEventListener('pointerup', onPointerUp);
    addEventListener('pointercancel', onPointerUp);

    return () => {
      removeEventListener('pointerdown', onPointerDown);
      removeEventListener('pointermove', onPointerMove);
      removeEventListener('pointerup', onPointerUp);
      removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  return (
    <section
      className="relative flex w-full min-h-[100svh] items-center justify-center px-6 py-20"
      aria-labelledby="hero-heading"
    >
      <div className="flex w-full max-w-6xl flex-col items-center lg:items-start">
        <div className="flex w-full min-w-0 max-w-[36rem] flex-col items-center text-center lg:items-start lg:text-left lg:max-w-[52%] lg:py-16">
          {/* Brand kicker */}
          <div
            className="de-kicker mb-6"
            style={{ color: '#d4a832' }}
            aria-label="DREAMengin — Creative OS + DreamR"
          >
            Creative Operating Surface
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="font-bold tracking-tight leading-[1.04] mb-5"
            style={{
              fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
              color: 'rgba(220,235,255,0.97)',
            }}
          >
            Space to{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 40%, #c8981a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              dream
            </span>
            .
          </h1>

          {/* Product statement */}
          <p className="de-landing-copy">
            DREAMengin is an AI-powered creative OS where apps, games, chats, tools, and media become movable building blocks inside your own digital world.
          </p>

          <div className="de-premium-stack" aria-label="DREAMengin premium stack">
            <article className="de-premium-layer-card">
              <span className="de-premium-layer-label">Engine underneath</span>
              <strong>WASM motion + glow math</strong>
              <p>Low-level browser muscle shapes simulation, particles, and sync fingerprints without dragging React into hot loops.</p>
            </article>
            <article className="de-premium-layer-card">
              <span className="de-premium-layer-label">Runtime in the middle</span>
              <strong>Fingerprint-synced Dreams</strong>
              <p>HomeDream and DreamSpace share validated runtime frames so objects move surfaces without duplicate state.</p>
            </article>
            <article className="de-premium-layer-card">
              <span className="de-premium-layer-label">Product on top</span>
              <strong>DreamR creative world</strong>
              <p>A glass-and-gold social OS where profiles, feeds, games, media, and tools become movable Dreams.</p>
            </article>
          </div>

          {/* DreamR statement */}
          <Link href="/mission" className="de-landing-mission-link">
            DreamR — A social platform where your individuality is the algorithm.{' '}
            <span>Where creativity—not likes—gets you seen. →</span>
          </Link>

          {/* CTAs */}
          <div className="flex w-full max-w-xs flex-col items-center gap-3 sm:max-w-none sm:flex-row lg:justify-start">
            <Link
              href="/join"
              className="de-landing-primary-cta"
            >
              Sign Up Here
            </Link>

            <Link
              href="/login"
              className="de-landing-secondary-cta"
            >
              Welcome Back!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
