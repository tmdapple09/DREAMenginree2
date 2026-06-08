'use client';

// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: lib/engins/code/useCodeEnginRuntime.ts.

/**
 * lib/engins/code/useCodeEnginRuntime.ts
 *
 * React hook — wires the universal EnginRuntime + CodeEngin rule-set into
 * React's lifecycle so the component can dispatch actions and read derived state.
 *
 * Usage:
 *   const { state, dispatch } = useCodeEnginRuntime();
 *   dispatch({ type: 'code:ci-start', payload: {} });
 */

// ── Source Grammar: Rules ─────────────────────────────────────────────────

// Runtime law comments and invariants stay attached to the code they govern.

// ── Source Grammar: Memory ─────────────────────────────────────────────────

// Module-owned constants, caches, refs, and mutable runtime memory.

// ── Source Grammar: Dependencies ─────────────────────────────────────────────────

// Imports and external modules this runtime file depends on.

import { MemoryAdapter } from '@/lib/engin-runtime/EnginIOAdapter';

import type { EnginHardwareAccelerationState, EnginRuntimeOptions } from '@/lib/engin-runtime/EnginRuntime';

import { EnginRuntime } from '@/lib/engin-runtime/EnginRuntime';

import { useCallback, useEffect, useRef, useState } from 'react';

import type { CodeEnginAction, CodeEnginDerivedState } from './codeEnginRuleSet';

import { CODE_ENGIN_RULE_SET } from './codeEnginRuleSet';

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

// Types, interfaces, and schemas accepted or provided by this file.

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

// ── Source Grammar: Actions ─────────────────────────────────────────────────

// Runtime functions, classes, handlers, and state transitions.

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

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.
