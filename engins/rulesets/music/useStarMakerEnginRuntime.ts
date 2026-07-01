'use client';

import { MemoryAdapter } from '@/engine/engin-runtime/EnginIOAdapter';
import type { EnginHardwareAccelerationState, EnginRuntimeOptions } from '@/engine/engin-runtime/EnginRuntime';
import { EnginRuntime } from '@/engine/engin-runtime/EnginRuntime';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { StarMakerEnginAction, StarMakerEnginDerivedState } from './starMakerEnginRuleSet';
import { STAR_MAKER_ENGIN_RULE_SET } from './starMakerEnginRuleSet';

















export interface UseStarMakerEnginRuntimeOptions
  extends Omit<EnginRuntimeOptions, 'ioAdapter'> {
  useMemoryAdapter?: boolean;
}

export interface UseStarMakerEnginRuntimeResult {
  state: StarMakerEnginDerivedState;
  dispatch: (action: StarMakerEnginAction) => boolean;
  ready: boolean;
  hardwareAcceleration: EnginHardwareAccelerationState | null;
}



export function useStarMakerEnginRuntime(
  options: UseStarMakerEnginRuntimeOptions = {},
): UseStarMakerEnginRuntimeResult {
  const { useMemoryAdapter, ...runtimeOptions } = options;

  const runtimeRef = useRef<EnginRuntime<StarMakerEnginAction> | null>(null);

  if (!runtimeRef.current) {
    const resolvedOptions: EnginRuntimeOptions = {
      ...runtimeOptions,
      ...(useMemoryAdapter ? { ioAdapter: new MemoryAdapter() } : {}),
    };
    runtimeRef.current = new EnginRuntime(STAR_MAKER_ENGIN_RULE_SET, resolvedOptions);
  }

  const runtime = runtimeRef.current;

  const [derivedState, setDerivedState] = useState<StarMakerEnginDerivedState>(
    () => runtime.getDerivedState() as unknown as StarMakerEnginDerivedState,
  );
  const [ready, setReady] = useState(false);
  const [hardwareAcceleration, setHardwareAcceleration] = useState<EnginHardwareAccelerationState | null>(null);

  useEffect(() => {
    const rt = runtimeRef.current!;

    const handleState = () => {
      setDerivedState(rt.getDerivedState() as unknown as StarMakerEnginDerivedState);
    };

    rt.bus.on('engin:state', handleState);
    rt.start();
    void rt.initializeHardwareAcceleration().then(setHardwareAcceleration).catch(() => setHardwareAcceleration(null));

    rt.restore().finally(() => {
      setDerivedState(rt.getDerivedState() as unknown as StarMakerEnginDerivedState);
      setReady(true);
    });

    return () => {
      rt.bus.off('engin:state', handleState);
      if (!rt.bus.destroyed) rt.stop();
    };

  }, []);

  const dispatch = useCallback((action: StarMakerEnginAction): boolean => {
    const rt = runtimeRef.current;
    if (!rt) return false;
    return rt.dispatch(action);
  }, []);

  return { state: derivedState, dispatch, ready, hardwareAcceleration };
}






