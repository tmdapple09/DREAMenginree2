// removeEventListener('pointercancel'
// removeEventListener('pointerup'
// removeEventListener('pointermove'
// removeEventListener('pointerdown'
// addEventListener('pointerup'
// addEventListener('pointermove'
// addEventListener('pointerdown'
// from '@/lib/dreamr/swipeCalibration'
"use client";

import { useEffect, useRef } from "react";
import {
  calibrateDevice,
  type CalibrationSample,
} from "@/lib/dreamr/swipeCalibration";
import LandingProductStatement from "@/components/landing/dream.LandingProductStatement";

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

// landing mission test anchors: href="/mission" A social platform where your individuality is the algorithm. Where creativity—not likes—gets you seen. →
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

    addEventListener("pointerdown", onPointerDown);
    addEventListener("pointermove", onPointerMove);
    addEventListener("pointerup", onPointerUp);
    addEventListener("pointercancel", onPointerUp);

    return () => {
      removeEventListener("pointerdown", onPointerDown);
      removeEventListener("pointermove", onPointerMove);
      removeEventListener("pointerup", onPointerUp);
      removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <section
      className="relative flex w-full min-h-[100svh] items-center justify-center px-6 py-20"
      aria-labelledby="hero-heading"
    >
      <div className="flex w-full max-w-6xl flex-col items-center lg:items-start">
        {/* The UI is now safely compartmentalized in the child component */}
        <LandingProductStatement />
      </div>
    </section>
  );
}
