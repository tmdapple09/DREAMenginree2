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

    function finishPointer(e: PointerEvent) {
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
    addEventListener('pointerup', finishPointer);
    addEventListener('pointercancel', finishPointer);

    return () => {
      removeEventListener('pointerdown', onPointerDown);
      removeEventListener('pointermove', onPointerMove);
      removeEventListener('pointerup', finishPointer);
      removeEventListener('pointercancel', finishPointer);
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
          <p
            className="text-base md:text-lg leading-relaxed mb-6 max-w-md"
            style={{ color: 'rgba(165,195,235,0.78)' }}
          >
            DREAMengin is an AI-powered creative OS where apps, games, chats, tools, and media become movable building blocks inside your own digital world.
          </p>

          {/* DreamR statement */}
          <Link
            href="/mission"
            className="mb-10 text-sm font-medium max-w-md"
            style={{
              color: 'rgba(165,195,235,0.64)',
              textDecoration: 'none',
            }}
          >
            DreamR - 
        Our official DREAMengin social platform where your individuality is the algorithm..{' '}
            <span style={{ color: '#38bdf8' }}>
              Where creativity—not likes—gets you seen. →
            </span>
          </Link>

          {/* CTAs */}
          <div className="flex w-full max-w-xs flex-col items-center gap-3 sm:max-w-none sm:flex-row lg:justify-start">
            <Link
              href="/join"
              className="w-full sm:w-auto font-semibold rounded-full text-white text-center"
              style={{
                padding: '14px 32px',
                fontSize: '0.975rem',
                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                boxShadow: '0 6px 28px rgba(245,158,11,0.40)',
                letterSpacing: '0.01em',
                textDecoration: 'none',
                boxSizing: 'border-box',
              }}
            >
              Sign Up Here
            </Link>

            <Link
              href="/login"
              className="w-full sm:w-auto font-medium rounded-full text-center"
              style={{
                padding: '14px 32px',
                fontSize: '0.975rem',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(200,220,255,0.88)',
                letterSpacing: '0.01em',
                textDecoration: 'none',
                boxSizing: 'border-box',
              }}
            >
              Welcome Back!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
