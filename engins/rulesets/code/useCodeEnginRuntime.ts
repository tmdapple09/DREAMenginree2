'use client';

import { MemoryAdapter } from '@/engine/engin-runtime/EnginIOAdapter';
import type { EnginHardwareAccelerationState, EnginRuntimeOptions } from '@/engine/engin-runtime/EnginRuntime';
import { EnginRuntime } from '@/engine/engin-runtime/EnginRuntime';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { CodeEnginAction, CodeEnginDerivedState } from './codeEnginRuleSet';
import { CODE_ENGIN_RULE_SET } from './codeEnginRuleSet';

















export interface UseCodeEnginRuntimeOptions
  extends Omit<EnginRuntimeOptions, 'ioAdapter'> {
  useMemoryAdapter?: boolean;
}

export interface UseCodeEnginRuntimeResult {
  state: CodeEnginDerivedState;
  dispatch: (action: CodeEnginAction) => boolean;
  ready: boolean;
  hardwareAcceleration: EnginHardwareAccelerationState | null;
}



export function useCodeEnginRuntime(
  options: UseCodeEnginRuntimeOptions = {},
): UseCodeEnginRuntimeResult {
  const { useMemoryAdapter, ...runtimeOptions } = options;

  const runtimeRef = useRef<EnginRuntime<CodeEnginAction> | null>(null);

  if (!runtimeRef.current) {
    const resolvedOptions: EnginRuntimeOptions = {
      ...runtimeOptions,
      ...(useMemoryAdapter ? { ioAdapter: new MemoryAdapter() } : {}),
    };
    runtimeRef.current = new EnginRuntime(CODE_ENGIN_RULE_SET, resolvedOptions);
  }

  const runtime = runtimeRef.current;

  const [derivedState, setDerivedState] = useState<CodeEnginDerivedState>(
    () => runtime.getDerivedState() as unknown as CodeEnginDerivedState,
  );
  const [ready, setReady] = useState(false);
  const [hardwareAcceleration, setHardwareAcceleration] = useState<EnginHardwareAccelerationState | null>(null);

  useEffect(() => {
    const rt = runtimeRef.current!;

    const handleState = () => {
      setDerivedState(rt.getDerivedState() as unknown as CodeEnginDerivedState);
    };

    rt.bus.on('engin:state', handleState);
    rt.start();
    void rt.initializeHardwareAcceleration().then(setHardwareAcceleration).catch(() => setHardwareAcceleration(null));

    rt.restore().finally(() => {
      setDerivedState(rt.getDerivedState() as unknown as CodeEnginDerivedState);
      setReady(true);
    });

    return () => {
      rt.bus.off('engin:state', handleState);
      if (!rt.bus.destroyed) rt.stop();
    };

  }, []);

  const dispatch = useCallback((action: CodeEnginAction): boolean => {
    const rt = runtimeRef.current;
    if (!rt) return false;
    return rt.dispatch(action);
  }, []);

  return { state: derivedState, dispatch, ready, hardwareAcceleration };
}






