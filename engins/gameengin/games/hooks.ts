'use client';

import {
    createPerformanceBaselineSampler,
    DE_GAME_PERFORMANCE_BASELINE,
    resolveRendererBackend,
    type GamePerformanceBaseline,
    type GameRenderMode,
} from '@/engins/gameengin/games/performance-baseline';
import { isWebGPUAvailable } from '@/engine/rendering/webgpu';
import { useCallback, useEffect, useRef, useState } from 'react';




export function useGameAutoStart(startFn: (() => void) | null) {
  const startFnRef = useRef(startFn);
  startFnRef.current = startFn;

  useEffect(() => {
    const handler = () => {
      if (startFnRef.current) startFnRef.current();
    };
    window.addEventListener('de-game-start', handler as EventListener);
    return () => window.removeEventListener('de-game-start', handler as EventListener);
  }, []);
}


export function useGamePhase<P extends string>(
  initial: P,
): [P, React.MutableRefObject<P>, (p: P) => void] {
  const [phase, setPhaseState] = useState<P>(initial);
  const phaseRef = useRef<P>(initial);
  const setPhase = useCallback((p: P) => {
    phaseRef.current = p;
    setPhaseState(p);
  }, []);
  return [phase, phaseRef, setPhase];
}


export function useKeySet(
  active: boolean,
  preventDefault = false,
): React.MutableRefObject<Set<string>> {
  const keysRef = useRef<Set<string>>(new Set());
  useEffect(() => {
    if (!active) return;
    const down = (e: KeyboardEvent) => {
      keysRef.current.add(e.key);
      if (preventDefault) e.preventDefault();
    };
    const up = (e: KeyboardEvent) => {
      keysRef.current.delete(e.key);
      if (preventDefault) e.preventDefault();
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
      keysRef.current.clear();
    };
  }, [active, preventDefault]);
  return keysRef;
}


export function useSubmitScore(game: string ){
  return useCallback(
    (score: number, level?: number) => {
      fetch('/api/game-scores', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ game, score, ...(level !== undefined ? { level } : {}) }),
      }).catch(() => {}); 
    },
    [game],
  );
}

interface UseGamePerformanceBaselineOptions {
  active: boolean;
  gameId: string;
  renderMode: GameRenderMode;
}

const RUNTIME_BASELINE_GRACE_MS = 1500;

function createPendingBaseline(
  gameId: string,
  renderMode: GameRenderMode,
  webgpuSupported: boolean,
  previous?: GamePerformanceBaseline | null,
): GamePerformanceBaseline {
  return {
    fps: previous?.fps ?? 0,
    avgFps: previous?.avgFps ?? 0,
    frameMs: previous?.frameMs ?? 0,
    avgFrameMs: previous?.avgFrameMs ?? 0,
    sampleCount: previous?.sampleCount ?? 0,
    source: previous?.source ?? 'shell',
    gameId,
    renderMode,
    webgpuSupported,
    rendererBackend: previous?.rendererBackend ?? resolveRendererBackend(renderMode, webgpuSupported),
  };
}

export function useGamePerformanceBaseline({
  active,
  gameId,
  renderMode,
}: UseGamePerformanceBaselineOptions): GamePerformanceBaseline | null {
  const [baseline, setBaseline] = useState<GamePerformanceBaseline | null>(null);
  const runtimeSeenAtRef = useRef(0);

  useEffect(() => {
    if (!active) {
      setBaseline(null);
      runtimeSeenAtRef.current = 0;
      return;
    }

    setBaseline(null);
    runtimeSeenAtRef.current = 0;

    let cancelled = false;
    isWebGPUAvailable().then((webgpuSupported) => {
      if (cancelled) return;
      setBaseline((prev) => createPendingBaseline(gameId, renderMode, webgpuSupported, prev));
    }).catch(() => {
      if (cancelled) return;
      setBaseline((prev) => createPendingBaseline(gameId, renderMode, false, prev));
    });

    return () => {
      cancelled = true;
    };
  }, [active, gameId, renderMode]);

  useEffect(() => {
    if (!active || typeof window === 'undefined') return;

    const sampler = createPerformanceBaselineSampler();
    let rafId = 0;

    const tick = (timestamp: number) => {
      const sample = sampler.pushFrame(timestamp);
      if (sample) {
        setBaseline((prev) => {
          
          
          if (prev?.source === 'runtime' && performance.now() - runtimeSeenAtRef.current < RUNTIME_BASELINE_GRACE_MS) {
            return prev;
          }

          return {
            gameId,
            renderMode,
            rendererBackend: prev?.rendererBackend ?? resolveRendererBackend(renderMode, prev?.webgpuSupported ?? false),
            webgpuSupported: prev?.webgpuSupported ?? false,
            source: 'shell',
            ...sample,
          };
        });
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [active, gameId, renderMode]);

  useEffect(() => {
    if (!active || typeof window === 'undefined') return;

    const handleBaseline = (event: Event) => {
      const detail = (event as CustomEvent<GamePerformanceBaseline>).detail;
      if (!detail || detail.gameId !== gameId) return;
      runtimeSeenAtRef.current = performance.now();
      setBaseline(detail);
    };

    window.addEventListener(DE_GAME_PERFORMANCE_BASELINE, handleBaseline as EventListener);
    return () => {
      window.removeEventListener(DE_GAME_PERFORMANCE_BASELINE, handleBaseline as EventListener);
    };
  }, [active, gameId]);

  return baseline;
}
