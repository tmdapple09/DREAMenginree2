'use client';

import React, { createContext, useContext, useMemo } from 'react';
import type { EventBus } from '@/engine/events/eventBus';
import { createEventBus } from '@/engine/events/eventBus';
import type { Ledger } from '@/engine/ledger/ledger';
import { createLedger } from '@/engine/ledger/ledger';
import { upgradeEngine } from './index';



export interface OSInstance {
  
  ledger: Ledger;
  
  bus: EventBus;
  
  upgradeEngine: typeof upgradeEngine;
}

const OSContext = createContext<OSInstance | null>(null);


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
