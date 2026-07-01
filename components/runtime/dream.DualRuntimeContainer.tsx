'use client';

import {
    type DualRuntimeState,
    type RuntimeWorld,
    DEFAULT_DUAL_RUNTIME,
    isHomeActiveTop,
    makeDreamSpaceActiveSurface,
    makeHomeActiveTop,
    makeHomeDreamSpaceActive,
} from '@/engine/runtime/dualRuntime';
import {
    IntentBus,
    createIntentPacket,
    dualRuntimeManifest,
    dualRuntimeRuleSet,
    negotiateCompatibility,
    type ActorContext,
    type JsonObject,
    type JsonValue,
} from '@/engine/runtime/iEngine';
import { getOfflineRecord, putOfflineRecord } from '@/engine/offline/offlineCache';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';











const DualRuntimeContext = createContext<DualRuntimeContextValue | null>(null);

const CORE_VERSION = '1.0.0';
const DUAL_RUNTIME_OFFLINE_ID = 'dual-runtime-state';

const SYSTEM_ACTOR: ActorContext = {
  actorId: 'dreamdmbar-system',
  runtimeId: 'homedream',
  surfaceRuntimeIds: ['homedream', 'dreamspace'],
  collaboration: { active: false, participantIds: [], editorIds: [] },
  isAdmin: true,
};

function makeRuntimeIntent(type: string, payload: JsonObject) {
  return createIntentPacket({
    id: `intent:${type}:${Date.now()}:${Math.random().toString(36).slice(2)}`,
    type,
    ownerId: SYSTEM_ACTOR.actorId,
    runtimeId: SYSTEM_ACTOR.runtimeId,
    actor: SYSTEM_ACTOR,
    payload,
    trace: ['DreamDMBar'],
  });
}








interface DualRuntimeContextValue {
  state: DualRuntimeState;
  
  setTopRuntime: (world: RuntimeWorld) => void;
  
  setBottomRuntime: (world: RuntimeWorld) => void;
  
  setDominantRuntime: (region: 'Surface Space' | 'DreamSpace') => void;
  
  swapDominance: () => void;
  
  goToHome: () => void;
  
  goToHomeDreamSpace: () => void;
  
  goToDreamSpace: () => void;
  
  isHomeActive: () => boolean;

  
  registerViewportRef: (viewport: 'top' | 'bottom', ref: React.RefObject<HTMLElement | null>) => void;

  
  focusInViewport: (viewport: 'top' | 'bottom', anchorId: string) => void;
}

interface DualRuntimeContainerProps {
  children: React.ReactNode;
}



export function useDualRuntime(): DualRuntimeContextValue {
  const ctx = useContext(DualRuntimeContext);
  if (!ctx) throw new Error('useDualRuntime must be used within DualRuntimeContainer');
  return ctx;
}

export default function DualRuntimeContainer({ children }: DualRuntimeContainerProps) {
  const compatibility = useMemo(() => negotiateCompatibility(CORE_VERSION, dualRuntimeManifest), []);
  if (!compatibility.allowed) {
    throw new Error(`ι-Engine compatibility failed: ${compatibility.reasons.join(', ')}`);
  }

  const intentBusRef = useRef(new IntentBus(dualRuntimeRuleSet));
  const offlineRestoredRef = useRef(false);
  const [state, setState] = useState<DualRuntimeState>(DEFAULT_DUAL_RUNTIME);


  useEffect(() => {
    let cancelled = false;
    void getOfflineRecord<DualRuntimeState>('dream-system', DUAL_RUNTIME_OFFLINE_ID)
      .then((record) => {
        if (cancelled || !record?.value) return;
        setState(record.value);
      })
      .finally(() => {
        if (!cancelled) offlineRestoredRef.current = true;
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!offlineRestoredRef.current) return;
    void putOfflineRecord({ namespace: 'dream-system', id: DUAL_RUNTIME_OFFLINE_ID, value: state });
  }, [state]);


  
  
  const topViewportRef    = useRef<React.RefObject<HTMLElement | null> | null>(null);
  const bottomViewportRef = useRef<React.RefObject<HTMLElement | null> | null>(null);

  const setTopRuntime = useCallback((world: RuntimeWorld) => {
    setState((prev) => intentBusRef.current.route(prev, makeRuntimeIntent('runtime.world.set', { viewport: 'top', world: world as unknown as JsonValue })));
  }, []);

  const setBottomRuntime = useCallback((world: RuntimeWorld) => {
    setState((prev) => intentBusRef.current.route(prev, makeRuntimeIntent('runtime.world.set', { viewport: 'bottom', world: world as unknown as JsonValue })));
  }, []);

  const swapDominance = useCallback(() => {
    setState((prev) => intentBusRef.current.route(prev, makeRuntimeIntent('runtime.dominance.swap', {})));
  }, []);

  const setDominantRuntime = useCallback((region: 'Surface Space' | 'DreamSpace') => {
    setState((prev) => intentBusRef.current.route(prev, makeRuntimeIntent('runtime.dominance.set', { region })));
  }, []);

  const goToHome = useCallback(() => {
    setState((prev) => {
      const next = makeHomeActiveTop(prev);
      intentBusRef.current.snapshot('homedream', SYSTEM_ACTOR.actorId, next);
      return next;
    });
  }, []);

  const goToHomeDreamSpace = useCallback(() => {
    setState((prev) => makeHomeDreamSpaceActive(prev));
  }, []);

  const goToDreamSpace = useCallback(() => {
    setState((prev) => makeDreamSpaceActiveSurface(prev));
  }, []);

  const isHomeActive = useCallback(() => {
    return isHomeActiveTop(state);
  }, [state]);

  const registerViewportRef = useCallback((
    viewport: 'top' | 'bottom',
    ref: React.RefObject<HTMLElement | null>,
  ) => {
    if (viewport === 'top') {
      topViewportRef.current = ref;
    } else {
      bottomViewportRef.current = ref;
    }
  }, []);

  const focusInViewport = useCallback((viewport: 'top' | 'bottom', anchorId: string) => {
    const rootRef = viewport === 'top' ? topViewportRef.current : bottomViewportRef.current;
    const root = rootRef?.current ?? null;

    
    const escapedId = CSS.escape(anchorId);

    
    const target = root
      ? root.querySelector(`#${escapedId}`)
      : null;

    
    const el = target ?? document.getElementById(anchorId);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const value: DualRuntimeContextValue = {
    state,
    setTopRuntime,
    setBottomRuntime,
    setDominantRuntime,
    swapDominance,
    goToHome,
    goToHomeDreamSpace,
    goToDreamSpace,
    isHomeActive,
    registerViewportRef,
    focusInViewport,
  };

  return (
    <DualRuntimeContext.Provider value={value}>
      {children}
    </DualRuntimeContext.Provider>
  );
}






