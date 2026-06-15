'use client';

import React, { createContext, useContext, useMemo } from 'react';
import type { EventBus } from '@/engine/events/eventBus';
import { createEventBus } from '@/engine/events/eventBus';
import type { Ledger } from '@/engine/ledger/ledger';
import { createLedger } from '@/engine/ledger/ledger';
import { upgradeEngine } from './index';

/**
 * OSContext — DREAMenginOS React Context
 *
 * Provides a single, app-wide OS instance (bus, ledger, upgradeEngine)
 * to all surfaces via React Context.
 *
 * Usage:
 *   // Root layout:
 *   <OSProvider>{children}</OSProvider>
 *
 *   // Any surface or Engin:
 *   const os = useOS();
 *   os.ledger  // shared asset ledger
 *   os.bus     // cross-surface event bus
 */

export interface OSInstance {
  /** Shared asset + metadata ledger. */
  ledger: Ledger;
  /** Global event bus for cross-surface messaging. */
  bus: EventBus;
  /**
   * upgradeEngine — promotes any engine descriptor with OS capabilities.
   * Re-exported here so callers don't need a second import.
   */
  upgradeEngine: typeof upgradeEngine;
}

const OSContext = createContext<OSInstance | null>(null);

/**
 * OSProvider
 *
 * Mount once at the application root (app/layout.tsx).
 * Creates stable ledger + bus instances for the lifetime of the app.
 */
export function OSProvider({ children }: {children: React.ReactNode}) {
  const os = useMemo<OSInstance>(
    () => ({
      ledger: createLedger(),
      bus: createEventBus(),
      upgradeEngine,
    }),
    []
  );

  return <OSContext.Provider value={os}>{children}</OSContext.Provider>;
}

/**
 * useOS()
 *
 * Returns the DREAMenginOS singleton for the current application.
 * Must be called inside a component wrapped by <OSProvider>.
 */
export function useOS(): OSInstance {
  const ctx = useContext(OSContext);
  if (!ctx) {
    throw new Error(
      '[DREAMenginOS] useOS() called outside of <OSProvider>. ' +
      'Wrap your root layout with <OSProvider>.'
    );
  }
  return ctx;
}
