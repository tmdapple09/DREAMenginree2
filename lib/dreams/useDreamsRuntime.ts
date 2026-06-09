import { useCallback, useState } from 'react';

// Framework directives stay physically first when required.

// Runtime file: lib/dreams/useDreamsRuntime.ts.

/**
 * lib/dreams/useDreamsRuntime.ts
 *
 * Dreams Space runtime — independent per-instance state for the DreamsSpacePanel.
 *
 * Each DreamsSpacePanel instance (Surface Space or DreamSpace region) gets its
 * own independent runtime state. Opening content in one region does not affect
 * the other, enabling two simultaneous Daydream or Engin sessions.
 * Runtime persists while the component is mounted; resets on unmount.
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

const DEFAULT_STATE: DreamsRuntimeState = {
  view: 'feed',
  activeService: null,
  detailUrl: null,
  detailTitle: null,
};

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export type DreamsView = 'feed' | 'detail';

export interface DreamsRuntimeState {
  /** Which view is currently shown in the dreams space */
  view: DreamsView;
  /** The active service/provider (null = no service selected) */
  activeService: string | null;
  /** URL of the item currently open in detail view */
  detailUrl: string | null;
  /** Title of the item currently open in detail view */
  detailTitle: string | null;
}

export interface DreamsRuntime {
  state: DreamsRuntimeState;
  /** Open a feed item in the dreams space detail view */
  openDetail: (url: string, title: string) => void;
  /** Return to the dreams feed view */
  goToFeed: () => void;
  /** Set the active service for the dreams space */
  setService: (service: string | null) => void;
}

// Runtime functions, classes, handlers, and state transitions.

export function useDreamsRuntime(): DreamsRuntime {
  const [state, setState] = useState<DreamsRuntimeState>(DEFAULT_STATE);

  const openDetail = useCallback((url: string, title: string) => {
    setState((prev) => ({
      ...prev,
      view: 'detail',
      detailUrl: url,
      detailTitle: title,
    }));
  }, []);

  const goToFeed = useCallback(() => {
    setState((prev) => ({
      ...prev,
      view: 'feed',
      detailUrl: null,
      detailTitle: null,
    }));
  }, []);

  const setService = useCallback((service: string | null) => {
    setState((prev) => ({
      ...prev,
      activeService: service,
      view: 'feed',
      detailUrl: null,
      detailTitle: null,
    }));
  }, []);

  return { state, openDetail, goToFeed, setService };
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
