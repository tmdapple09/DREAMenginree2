'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { WarpEffect, WarpEngine, WarpEngineOptions } from './warpEngine';





const FRAME_INTERVAL_MS = 1000 / 30;

export interface UseWarpOptions extends WarpEngineOptions {
  
  autoStart?: boolean;
}

export interface UseWarpReturn {
  
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  
  isRunning: boolean;
  
  toggle: () => void;
  
  setEffect: (effect: WarpEffect) => void;
}

export function useWarp(opts: UseWarpOptions = {}): UseWarpReturn {
  const { autoStart = true, ...engineOpts } = opts;

  const canvasRef  = useRef<HTMLCanvasElement | null>(null);
  const engineRef  = useRef<WarpEngine | null>(null);
  const rafRef     = useRef<number | null>(null);
  const lastTsRef  = useRef<number>(0);
  const runningRef = useRef<boolean>(false);

  const [isRunning, setIsRunning] = useState(autoStart);

  
  useEffect(() => {
    engineRef.current = new WarpEngine(engineOpts);

  }, []);

  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new ResizeObserver(() => {
      const dpr = window.devicePixelRatio ?? 1;
      canvas.width  = canvas.clientWidth  * dpr;
      canvas.height = canvas.clientHeight * dpr;
      engineRef.current?.resize(canvas.clientWidth, canvas.clientHeight);
    });
    observer.observe(canvas);

    
    const dpr = window.devicePixelRatio ?? 1;
    canvas.width  = canvas.clientWidth  * dpr;
    canvas.height = canvas.clientHeight * dpr;
    engineRef.current?.resize(canvas.clientWidth, canvas.clientHeight);

    return () => observer.disconnect();
  }, []);

  
  const loop = useCallback((ts: number) => {
    const canvas = canvasRef.current;
    const engine = engineRef.current;
    if (!canvas || !engine) return;

    const elapsed = ts - lastTsRef.current;
    if (elapsed < FRAME_INTERVAL_MS) {
      
      if (runningRef.current) {
        rafRef.current = requestAnimationFrame(loop);
      }
      return;
    }

    const dt = Math.min(elapsed / 1000, 0.05); 
    lastTsRef.current = ts;

    const dpr = window.devicePixelRatio ?? 1;

    
    engine.step(dt);

    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      for (const p of engine.particles) {
        ctx.beginPath();
        ctx.arc(p.pos.x, p.pos.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * 0.7;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(p.pos.x, p.pos.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * 0.08;
        ctx.fill();
      }

      ctx.restore();
    }

    if (runningRef.current) {
      rafRef.current = requestAnimationFrame(loop);
    }
  }, []);

  
  
  
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reducedMotionMQ = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const isReducedMotion = () => !!reducedMotionMQ?.matches;
    const isHidden = () =>
      typeof document !== 'undefined' && document.visibilityState === 'hidden';

    const stopLoop = () => {
      runningRef.current = false;
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const startLoop = () => {
      if (runningRef.current) return;
      runningRef.current = true;
      lastTsRef.current = performance.now();
      rafRef.current = requestAnimationFrame(loop);
    };

    const sync = () => {
      if (isRunning && !isHidden() && !isReducedMotion()) {
        startLoop();
      } else {
        stopLoop();
      }
    };

    sync();

    const onVisibility = () => sync();
    const onMotionChange = () => sync();

    document.addEventListener('visibilitychange', onVisibility);
    reducedMotionMQ?.addEventListener?.('change', onMotionChange);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      reducedMotionMQ?.removeEventListener?.('change', onMotionChange);
      stopLoop();
    };
  }, [isRunning, loop]);

  const toggle = useCallback(() => setIsRunning((prev) => !prev), []);

  const setEffect = useCallback((effect: WarpEffect) => {
    engineRef.current?.setEffect(effect);
    engineRef.current?.reset();
  }, []);

  return { canvasRef, isRunning, toggle, setEffect };
}
