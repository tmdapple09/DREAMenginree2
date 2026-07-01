'use client';

import { MemoryAdapter } from '@/engine/engin-runtime/EnginIOAdapter';
import type { EnginHardwareAccelerationState, EnginRuntimeOptions } from '@/engine/engin-runtime/EnginRuntime';
import { EnginRuntime } from '@/engine/engin-runtime/EnginRuntime';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { GameEnginAction, GameEnginDerivedState } from './gameEnginRuleSet';
import { GAME_ENGIN_RULE_SET } from './gameEnginRuleSet';

















export interface UseGameEnginRuntimeOptions
  extends Omit<EnginRuntimeOptions, 'ioAdapter'> {
  
  useMemoryAdapter?: boolean;
}

export interface UseGameEnginRuntimeResult {
  
  state: GameEnginDerivedState;
  
  dispatch: (action: GameEnginAction) => boolean;
  
  ready: boolean;
  
  hardwareAcceleration: EnginHardwareAccelerationState | null;
}



export function useGameEnginRuntime(
  options: UseGameEnginRuntimeOptions = {},
): UseGameEnginRuntimeResult {
  const { useMemoryAdapter, ...runtimeOptions } = options;

  
  const runtimeRef = useRef<EnginRuntime<GameEnginAction> | null>(null);

  if (!runtimeRef.current) {
    const resolvedOptions: EnginRuntimeOptions = {
      ...runtimeOptions,
      ...(useMemoryAdapter ? { ioAdapter: new MemoryAdapter() } : {}),
    };
    runtimeRef.current = new EnginRuntime(GAME_ENGIN_RULE_SET, resolvedOptions);
  }

  const runtime = runtimeRef.current;

  
  const [derivedState, setDerivedState] = useState<GameEnginDerivedState>(
    () => runtime.getDerivedState() as unknown as GameEnginDerivedState,
  );
  const [ready, setReady] = useState(false);
  const [hardwareAcceleration, setHardwareAcceleration] = useState<EnginHardwareAccelerationState | null>(null);

  
  useEffect(() => {
    const rt = runtimeRef.current!;

    const handleState = () => {
      setDerivedState(rt.getDerivedState() as unknown as GameEnginDerivedState);
    };

    rt.bus.on('engin:state', handleState);
    rt.start();
    void rt.initializeHardwareAcceleration().then(setHardwareAcceleration).catch(() => setHardwareAcceleration(null));

    
    rt.restore().finally(() => {
      setDerivedState(rt.getDerivedState() as unknown as GameEnginDerivedState);
      setReady(true);
    });

    return () => {
      rt.bus.off('engin:state', handleState);
      if (!rt.bus.destroyed) rt.stop();
    };

  }, []);

  const dispatch = useCallback((action: GameEnginAction): boolean => {
    const rt = runtimeRef.current;
    if (!rt) return false;
    return rt.dispatch(action);
    
  }, []);

  return { state: derivedState, dispatch, ready, hardwareAcceleration };
}






