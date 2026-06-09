'use client';

import { useCallback, useEffect, useState } from 'react';
import {
    DEFAULT_DUAL_RUNTIME,
    makeHomeActiveTop,
    setRuntimeWorld,
    swapDominantRuntime,
    type DualRuntimeState,
    type RuntimeWorld,
} from './dualRuntime';

// Framework directives stay physically first when required.

// Runtime file: lib/runtime/useDualRuntimePersistence.ts.

/**
 * useDualRuntimePersistence — persists DualRuntimeState to OPFS with localStorage fallback.
 *
 * Phase 8 §G Point 63: Dual runtime state (top/bottom, dominant runtime)
 * persists and restores on reload — user returns to the same runtime
 * configuration they left.
 *
 * Stream 5.3 — OPFS (Origin Private File System) upgrade.
 * OPFS is available in Chrome 86+, Firefox 111+, Safari 15.2+.
 * Falls back to localStorage on older browsers.
 *
 * Architecture justification: ARCHITECTURE.md §1 (Dual Runtime regions).
 * Performance: OPFS is async and off-main-thread; no network cost.
 * Privacy: runtime layout is not user-generated content; local storage only.
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

const STORAGE_KEY = 'de-dual-runtime-state';

const OPFS_FILENAME = 'de-dual-runtime-state.json';

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export interface UseDualRuntimePersistenceReturn {
  state: DualRuntimeState;
  setTopWorld: (world: RuntimeWorld) => void;
  setBottomWorld: (world: RuntimeWorld) => void;
  swapDominant: () => void;
  goHome: () => void;
}

// Runtime functions, classes, handlers, and state transitions.

/** Serialize RuntimeWorld to/from a JSON-safe form */
function serializeWorld(world: RuntimeWorld): string {
  if (typeof world === 'string') return JSON.stringify({ kind: 'string', value: world });
  return JSON.stringify({ kind: 'object', value: world });
}

function deserializeWorld(raw: string): RuntimeWorld {
  try {
    const parsed = JSON.parse(raw) as { kind: 'string' | 'object'; value: RuntimeWorld };
    return parsed.value;
  } catch {
    return DEFAULT_DUAL_RUNTIME.surfaceSpaceWorld;
  }
}

/** Safe JSON serializer for DualRuntimeState */
function serializeState(state: DualRuntimeState): string {
  return JSON.stringify({
    surfaceSpaceWorld: serializeWorld(state.surfaceSpaceWorld),
    dreamSpaceWorld:   serializeWorld(state.dreamSpaceWorld),
    dominantRegion:    state.dominantRegion,
  });
}

function deserializeState(raw: string): DualRuntimeState {
  try {
    const obj = JSON.parse(raw) as {
      surfaceSpaceWorld: string;
      dreamSpaceWorld: string;
      dominantRegion: 'Surface Space' | 'DreamSpace';
    };
    return {
      surfaceSpaceWorld: deserializeWorld(obj.surfaceSpaceWorld),
      dreamSpaceWorld:   deserializeWorld(obj.dreamSpaceWorld),
      dominantRegion:    obj.dominantRegion ?? DEFAULT_DUAL_RUNTIME.dominantRegion,
    };
  } catch {
    return DEFAULT_DUAL_RUNTIME;
  }
}

// OPFS-based persistence with localStorage fallback
// OPFS is available in browsers that support it (Chrome 86+, Firefox 111+, Safari 15.2+)
// Falls back to localStorage on older browsers or workers without OPFS

async function writeStateOpfs(serialized: string): Promise<void> {
  try {
    const root = await navigator.storage.getDirectory();
    const fileHandle = await root.getFileHandle(OPFS_FILENAME, { create: true });
    const writable = await fileHandle.createWritable();
    await writable.write(serialized);
    await writable.close();
  } catch {
    // OPFS not available — fall back to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, serialized);
    } catch { /* ignore */ }
  }
}

async function readStateOpfs(): Promise<string | null> {
  try {
    const root = await navigator.storage.getDirectory();
    const fileHandle = await root.getFileHandle(OPFS_FILENAME);
    const file = await fileHandle.getFile();
    return await file.text();
  } catch {
    // OPFS not available or file not found — try localStorage
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }
}

/**
 * useDualRuntimePersistence
 *
 * Manages DualRuntimeState with OPFS persistence (localStorage fallback).
 * State starts as DEFAULT_DUAL_RUNTIME synchronously; OPFS/localStorage is
 * loaded asynchronously on mount (two-phase init to avoid blocking hydration).
 * Any state change triggers a fire-and-forget OPFS write.
 *
 * @example
 * const { state, setTopWorld, swapDominant, goHome } = useDualRuntimePersistence();
 */
export function useDualRuntimePersistence(): UseDualRuntimePersistenceReturn {
  // Phase 1 — synchronous default (avoids SSR mismatch)
  const [state, setState] = useState<DualRuntimeState>(DEFAULT_DUAL_RUNTIME);

  // Phase 2 — async load from OPFS / localStorage after mount
  useEffect(() => {
    readStateOpfs().then((raw) => {
      if (raw) {
        setState(deserializeState(raw));
      }
    });

  }, []); // intentionally runs once on mount only

  // Persist any state change to OPFS (fire-and-forget, non-blocking)
  useEffect(() => {
    writeStateOpfs(serializeState(state));
  }, [state]);

  const setTopWorld = useCallback((world: RuntimeWorld) => {
    setState((prev) => setRuntimeWorld(prev, 'top', world));
  }, []);

  const setBottomWorld = useCallback((world: RuntimeWorld) => {
    setState((prev) => setRuntimeWorld(prev, 'bottom', world));
  }, []);

  const swapDominant = useCallback(() => {
    setState((prev) => swapDominantRuntime(prev));
  }, []);

  const goHome = useCallback(() => {
    setState((prev) => makeHomeActiveTop(prev));
  }, []);

  return { state, setTopWorld, setBottomWorld, swapDominant, goHome };
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
