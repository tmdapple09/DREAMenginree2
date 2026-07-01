'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
    defaultDeviceSignals,
    defaultRuntimeMetrics,
    defaultUXSignals,
    DreamEngineGodTierSystem,
    getGodTierUiTokens,
    type DeviceSignals,
    type GodTierState,
    type MeshSnapshot,
    type RouteSignals,
    type RuntimeMetrics,
    type UIElementSnapshot,
    type UXSignals,
} from './godTierEngine';



export interface UseGodTierOptions {
  
  route?: string;
  
  activeTask?: string;
  
  primaryIntent?: string;
  
  nextLikelyRoutes?: string[];
  
  meshes?: MeshSnapshot[];
  
  ui?: UIElementSnapshot[];
  
  tickMs?: number;
  
  childSafetyMode?: boolean;
}

export interface UseGodTierReturn {
  
  state: GodTierState | null;
  
  uiTokens: ReturnType<typeof getGodTierUiTokens> | null;
  
  recordTap: (kind: 'normal' | 'repeat' | 'rage' | 'dead') => void;
  
  recordHesitation: (ms: number) => void;
  
  recordBacktrack: () => void;
  
  recordCorrection: () => void;
}

export function useGodTier(opts: UseGodTierOptions = {}): UseGodTierReturn {
  const {
    route = '/',
    activeTask = 'browse',
    primaryIntent = 'explore',
    nextLikelyRoutes = [],
    meshes = [],
    ui = [],
    childSafetyMode = false,
  } = opts;

  const systemRef = useRef<DreamEngineGodTierSystem>(new DreamEngineGodTierSystem());

  const deviceRef = useRef<DeviceSignals>(defaultDeviceSignals());

  const runtimeRef = useRef<RuntimeMetrics>(defaultRuntimeMetrics());
  const frameTsRef = useRef<number>(0);
  const frameHistoryRef = useRef<number[]>([]);
  const MAX_FRAME_HISTORY = 24;

  const uxRef = useRef<UXSignals>(defaultUXSignals());

  const [state, setState] = useState<GodTierState | null>(null);
  const [uiTokens, setUiTokens] = useState<ReturnType<typeof getGodTierUiTokens> | null>(null);

  
  
  
  
  const lastOrchTsRef = useRef<number>(0);
  const lastVarsRef = useRef<Record<string, string>>({});
  const UPDATE_INTERVAL_MS = 250;
  const lastReactUpdateRef = useRef<number>(0);

  
  
  
  const inputsRef = useRef({
    route, activeTask, primaryIntent, nextLikelyRoutes, meshes, ui, childSafetyMode,
  });
  inputsRef.current = {
    route, activeTask, primaryIntent, nextLikelyRoutes, meshes, ui, childSafetyMode,
  };

  const rafRef = useRef<number | null>(null);

  const tick = useCallback((ts: number) => {
    
    const frameMs = frameTsRef.current === 0 ? 16.6 : ts - frameTsRef.current;
    frameTsRef.current = ts;

    const hist = frameHistoryRef.current;
    hist.push(frameMs);
    if (hist.length > MAX_FRAME_HISTORY) hist.shift();
    const avgFrameMs = hist.reduce((a, b) => a + b, 0) / hist.length;
    const dropped = hist.filter((f) => f > 20).length / hist.length;

    runtimeRef.current = {
      frameMs,
      avgFrameMs,
      cpuMs: frameMs * 0.4,
      gpuMs: frameMs * 0.5,
      droppedFrameRatio: dropped,
      inputLatencyMs: runtimeRef.current.inputLatencyMs,
      scrollVelocity: runtimeRef.current.scrollVelocity,
      pointerVelocity: runtimeRef.current.pointerVelocity,
      interactionBurst: runtimeRef.current.interactionBurst,
    };

    
    if (ts - lastOrchTsRef.current >= UPDATE_INTERVAL_MS) {
      lastOrchTsRef.current = ts;

      const inputs = inputsRef.current;
      const routeSignals: RouteSignals = {
        route: inputs.route,
        activeTask: inputs.activeTask,
        primaryIntent: inputs.primaryIntent,
        nextLikelyRoutes: inputs.nextLikelyRoutes,
      };

      const next = systemRef.current.update({
        device:  deviceRef.current,
        runtime: runtimeRef.current,
        ux:      uxRef.current,
        route:   routeSignals,
        meshes:  inputs.meshes,
        ui:      inputs.ui,
        childSafetyMode: inputs.childSafetyMode,
      });

      const tokens = getGodTierUiTokens(next);

      
      
      
      
      
      if (typeof document !== 'undefined') {
        const root = document.documentElement;
        const prev = lastVarsRef.current;
        const nextVars: Record<string, string> = {};
        for (const [k, v] of Object.entries(tokens.vars)) {
          nextVars[k] = v;
          if (prev[k] !== v) {
            root.style.setProperty(k, v);
          }
        }
        lastVarsRef.current = nextVars;
      }

      
      if (ts - lastReactUpdateRef.current >= UPDATE_INTERVAL_MS) {
        lastReactUpdateRef.current = ts;
        setState(next);
        setUiTokens(tokens);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastScrollTs = performance.now();

    const onScroll = () => {
      const now = performance.now();
      const dt  = now - lastScrollTs;
      if (dt > 0) {
        const dy = Math.abs(window.scrollY - lastScrollY);
        runtimeRef.current.scrollVelocity = dy / dt;
      }
      lastScrollY  = window.scrollY;
      lastScrollTs = now;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let lastX = 0, lastY = 0, lastTs = 0;

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      const dt  = now - lastTs;
      if (dt > 0 && lastTs > 0) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        runtimeRef.current.pointerVelocity = Math.sqrt(dx * dx + dy * dy) / dt;
      }
      lastX  = e.clientX;
      lastY  = e.clientY;
      lastTs = now;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useEffect(() => {
    
    deviceRef.current = defaultDeviceSignals();

    const start = () => {
      if (rafRef.current === null) {
        
        
        frameTsRef.current = 0;
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    if (typeof document !== 'undefined' && !document.hidden) start();
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', onVisibility);
    }

    return () => {
      stop();
      if (typeof document !== 'undefined') {
        document.removeEventListener('visibilitychange', onVisibility);
      }
    };
  }, [tick]);

  const recordTap = useCallback((kind: 'normal' | 'repeat' | 'rage' | 'dead') => {
    const ux = uxRef.current;
    if (kind === 'repeat') ux.repeatTapCount += 1;
    else if (kind === 'rage') ux.rageTapCount += 1;
    else if (kind === 'dead') ux.deadTapCount += 1;
    
    setTimeout(() => {
      if (kind === 'repeat' && ux.repeatTapCount > 0) ux.repeatTapCount -= 1;
      if (kind === 'rage'   && ux.rageTapCount   > 0) ux.rageTapCount   -= 1;
      if (kind === 'dead'   && ux.deadTapCount   > 0) ux.deadTapCount   -= 1;
    }, 4000);
  }, []);

  const recordHesitation = useCallback((ms: number) => {
    uxRef.current.hesitationMs = ms;
  }, []);

  const recordBacktrack = useCallback(() => {
    uxRef.current.backtrackCount += 1;
  }, []);

  const recordCorrection = useCallback(() => {
    uxRef.current.correctionCount += 1;
  }, []);

  return { state, uiTokens, recordTap, recordHesitation, recordBacktrack, recordCorrection };
}
