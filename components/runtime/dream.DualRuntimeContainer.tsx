'use client';

import {
    type DualRuntimeState,
    type RuntimeWorld,
    DEFAULT_DUAL_RUNTIME,
    isHomeActiveTop,
    makeDreamSpaceActiveSurface,
    makeHomeActiveTop,
    makeHomeDreamSpaceActive,
} from '@/lib/runtime/dualRuntime';
import {
    IntentBus,
    createIntentPacket,
    dualRuntimeManifest,
    dualRuntimeRuleSet,
    negotiateCompatibility,
    type ActorContext,
    type JsonObject,
    type JsonValue,
} from '@/lib/runtime/iEngine';
import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

// Framework directives stay physically first when required.

// Runtime file: components/runtime/dream.DualRuntimeContainer.tsx.

/**
 * DualRuntimeContainer
 *
 * Manages two independent runtime regions (Surface Space and DreamSpace).
 * The DreamDM Bar controls which region is dominant (visible).
 *
 * Each region is an independent view that can display:
 * - HomeDream Surface
 * - DreamSpace
 * - Dream Windows
 * - Engins
 * - Any system world
 *
 * Both regions can display the same world simultaneously.
 *
 * Torus navigation: each region is a stable scroll root. Focus moves are
 * implemented as `scrollIntoView` calls targeting anchor elements within
 * the chosen viewport — this is the "camera panning on one page" model.
 *
 * Naming: uses canonical region names from lib/identity/canonical-names.ts.
 * Architecture: docs/ARCHITECTURE.md §1 (Runtime regions)
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

const DualRuntimeContext = createContext<DualRuntimeContextValue | null>(null);

const CORE_VERSION = '1.0.0';
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


// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

interface DualRuntimeContextValue {
  state: DualRuntimeState;
  /** Set the world shown in the Surface Space region */
  setTopRuntime: (world: RuntimeWorld) => void;
  /** Set the world shown in the DreamSpace region */
  setBottomRuntime: (world: RuntimeWorld) => void;
  /** Set which region is dominant — 'Surface Space' or 'DreamSpace' */
  setDominantRuntime: (region: 'Surface Space' | 'DreamSpace') => void;
  /** Toggle dominant region */
  swapDominance: () => void;
  /** Navigate to HomeDream Surface in Surface Space and make it dominant */
  goToHome: () => void;
  /**
   * Load HomeDream Surface into the DreamSpace region and make it dominant.
   * Used for the dual-home state: two independent HomeDream views open simultaneously.
   */
  goToHomeDreamSpace: () => void;
  /**
   * Load DreamSpace world into the Surface Space region and make it dominant.
   * Allows Surface Space to show the DreamSpace panel, enabling two independent
   * DreamSpace sessions simultaneously (e.g. two Daydreams or Engins at once).
   */
  goToDreamSpace: () => void;
  /** Returns true if HomeDream Surface is active and Surface Space is dominant */
  isHomeActive: () => boolean;

  /**
   * Register the scroll-root ref for a viewport so anchor-based focus works.
   * Called by the viewport's scroll container on mount.
   * viewport: 'top' = Surface Space, 'bottom' = DreamSpace
   */
  registerViewportRef: (viewport: 'top' | 'bottom', ref: React.RefObject<HTMLElement | null>) => void;

  /**
   * Scroll a viewport to an element with the given anchor id.
   * This is the "camera moves to region" primitive for torus navigation.
   * If the element is not found in the viewport's scroll root, falls back
   * to a global document search.
   */
  focusInViewport: (viewport: 'top' | 'bottom', anchorId: string) => void;
}

interface DualRuntimeContainerProps {
  children: React.ReactNode;
}

// Runtime functions, classes, handlers, and state transitions.

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
  const [state, setState] = useState<DualRuntimeState>(DEFAULT_DUAL_RUNTIME);

  // Refs to the scroll-root elements for each viewport.
  // Populated via registerViewportRef from the PersistentDreamBar scroll containers.
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

    // Use CSS.escape for both selector patterns to handle IDs with special characters.
    const escapedId = CSS.escape(anchorId);

    // Try to find the anchor within the registered scroll root first
    const target = root
      ? root.querySelector(`#${escapedId}`)
      : null;

    // Fall back to global document search if not in viewport root
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

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
