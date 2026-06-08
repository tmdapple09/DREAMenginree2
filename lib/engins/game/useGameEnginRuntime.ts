'use client';

// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: lib/engins/game/useGameEnginRuntime.ts.

/**
 * lib/engins/game/useGameEnginRuntime.ts
 *
 * React hook — wires the universal EnginRuntime + GameEngin rule-set into
 * React's lifecycle so the component can dispatch actions and read derived state.
 *
 * Usage:
 *   const { state, dispatch } = useGameEnginRuntime();
 *   dispatch({ type: 'game:session-start', payload: { gameId: 'platformer' } });
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

import type { GameEnginAction, GameEnginDerivedState } from './gameEnginRuleSet';

import { GAME_ENGIN_RULE_SET } from './gameEnginRuleSet';

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

// Types, interfaces, and schemas accepted or provided by this file.

export interface UseGameEnginRuntimeOptions
  extends Omit<EnginRuntimeOptions, 'ioAdapter'> {
  /** Use MemoryAdapter instead of LocalStorageAdapter (useful in tests/SSR). */
  useMemoryAdapter?: boolean;
}

export interface UseGameEnginRuntimeResult {
  /** The projected domain state — updates trigger React re-renders. */
  state: GameEnginDerivedState;
  /** Dispatch a GameEnginAction to the runtime. */
  dispatch: (action: GameEnginAction) => boolean;
  /** Whether the runtime has finished the initial restore from storage. */
  ready: boolean;
  /** Runtime-owned WebGPU/device warmup state when hardware acceleration has initialized. */
  hardwareAcceleration: EnginHardwareAccelerationState | null;
}

// ── Source Grammar: Actions ─────────────────────────────────────────────────

// Runtime functions, classes, handlers, and state transitions.

export function useGameEnginRuntime(
  options: UseGameEnginRuntimeOptions = {},
): UseGameEnginRuntimeResult {
  const { useMemoryAdapter, ...runtimeOptions } = options;

  // Build the runtime once per mount.
  const runtimeRef = useRef<EnginRuntime<GameEnginAction> | null>(null);

  if (!runtimeRef.current) {
    const resolvedOptions: EnginRuntimeOptions = {
      ...runtimeOptions,
      ...(useMemoryAdapter ? { ioAdapter: new MemoryAdapter() } : {}),
    };
    runtimeRef.current = new EnginRuntime(GAME_ENGIN_RULE_SET, resolvedOptions);
  }

  const runtime = runtimeRef.current;

  // Initialise derived state from the runtime.
  const [derivedState, setDerivedState] = useState<GameEnginDerivedState>(
    () => runtime.getDerivedState() as unknown as GameEnginDerivedState,
  );
  const [ready, setReady] = useState(false);
  const [hardwareAcceleration, setHardwareAcceleration] = useState<EnginHardwareAccelerationState | null>(null);

  // Subscribe to state-change events and trigger re-render.
  useEffect(() => {
    const rt = runtimeRef.current!;

    const handleState = () => {
      setDerivedState(rt.getDerivedState() as unknown as GameEnginDerivedState);
    };

    rt.bus.on('engin:state', handleState);
    rt.start();
    void rt.initializeHardwareAcceleration().then(setHardwareAcceleration).catch(() => setHardwareAcceleration(null));

    // Restore persisted domain state.
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
    // State update is handled by the engin:state event subscription above.
  }, []);

  return { state: derivedState, dispatch, ready, hardwareAcceleration };
}

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.
