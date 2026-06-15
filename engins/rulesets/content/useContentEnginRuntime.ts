'use client';

import { MemoryAdapter } from '@/engine/engin-runtime/EnginIOAdapter';
import type { EnginHardwareAccelerationState, EnginRuntimeOptions } from '@/engine/engin-runtime/EnginRuntime';
import { EnginRuntime } from '@/engine/engin-runtime/EnginRuntime';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ContentEnginAction, ContentEnginDerivedState } from './contentEnginRuleSet';
import { CONTENT_ENGIN_RULE_SET } from './contentEnginRuleSet';

// Framework directives stay physically first when required.

// Runtime file: lib/engins/content/useContentEnginRuntime.ts.

/**
 * lib/engins/content/useContentEnginRuntime.ts
 *
 * React hook — wires the universal EnginRuntime + ContentEngin rule-set into
 * React's lifecycle so the component can dispatch actions and read derived state.
 *
 * Usage:
 *   const { state, dispatch } = useContentEnginRuntime();
 *   dispatch({ type: 'content:creativity-set', payload: { level: 75 } });
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export interface UseContentEnginRuntimeOptions
  extends Omit<EnginRuntimeOptions, 'ioAdapter'> {
  useMemoryAdapter?: boolean;
}

export interface UseContentEnginRuntimeResult {
  state: ContentEnginDerivedState;
  dispatch: (action: ContentEnginAction) => boolean;
  ready: boolean;
  hardwareAcceleration: EnginHardwareAccelerationState | null;
}

// Runtime functions, classes, handlers, and state transitions.

export function useContentEnginRuntime(
  options: UseContentEnginRuntimeOptions = {},
): UseContentEnginRuntimeResult {
  const { useMemoryAdapter, ...runtimeOptions } = options;

  const runtimeRef = useRef<EnginRuntime<ContentEnginAction> | null>(null);

  if (!runtimeRef.current) {
    const resolvedOptions: EnginRuntimeOptions = {
      ...runtimeOptions,
      ...(useMemoryAdapter ? { ioAdapter: new MemoryAdapter() } : {}),
    };
    runtimeRef.current = new EnginRuntime(CONTENT_ENGIN_RULE_SET, resolvedOptions) as EnginRuntime<ContentEnginAction>;
  }

  const runtime = runtimeRef.current!;

  const [derivedState, setDerivedState] = useState<ContentEnginDerivedState>(
    () => runtime.getDerivedState() as unknown as ContentEnginDerivedState,
  );
  const [ready, setReady] = useState(false);
  const [hardwareAcceleration, setHardwareAcceleration] = useState<EnginHardwareAccelerationState | null>(null);

  useEffect(() => {
    const rt = runtimeRef.current!;

    const handleState = () => {
      setDerivedState(rt.getDerivedState() as unknown as ContentEnginDerivedState);
    };

    rt.bus.on('engin:state', handleState);
    rt.start();
    void rt.initializeHardwareAcceleration().then(setHardwareAcceleration).catch(() => setHardwareAcceleration(null));

    rt.restore().finally(() => {
      setDerivedState(rt.getDerivedState() as unknown as ContentEnginDerivedState);
      setReady(true);
    });

    return () => {
      rt.bus.off('engin:state', handleState);
      if (!rt.bus.destroyed) rt.stop();
    };

  }, []);

  const dispatch = useCallback((action: ContentEnginAction): boolean => {
    const rt = runtimeRef.current;
    if (!rt) return false;
    return rt.dispatch(action);
  }, []);

  return { state: derivedState, dispatch, ready, hardwareAcceleration };
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
