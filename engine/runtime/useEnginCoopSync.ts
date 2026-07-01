'use client';

import type { EnginName } from '@/engine/runtime/instanceManager';
import { useSharedEnginChannel } from '@/engine/runtime/useSharedEnginChannel';
import type { RuntimeId } from '@/types/module-manifest';
import { useEffect } from 'react';

















export type CoopEvent = { type: string; [key: string]: unknown };

export interface UseEnginCoopSyncOptions {
  enginName: EnginName;
  instanceId: string;
  region?: RuntimeId;
  
  active: boolean;
  
  stateSnapshot: () => CoopEvent;
  
  onPeerState?: (event: CoopEvent) => void;
}

export interface UseEnginCoopSyncResult {
  
  publish: (event: CoopEvent) => Promise<void>;
  
  isCoopActive: boolean;
}



export function useEnginCoopSync({
  enginName,
  instanceId,
  region = 'homedream',
  active,
  stateSnapshot,
  onPeerState,
}: UseEnginCoopSyncOptions): UseEnginCoopSyncResult {
  const { publish, subscribe } = useSharedEnginChannel<CoopEvent>({
    enginName,
    instanceId,
    region,
    mode: active ? 'coop' : 'solo',
  });

  useEffect(() => {
    if (!active) return;
    const snapshot = stateSnapshot();
    void publish(snapshot);
  

  }, [active, publish]);

  useEffect(() => {
    if (!active || !onPeerState) return;
    const off = subscribe((evt) => {
      onPeerState(evt);
    });
    return off;
  }, [active, subscribe, onPeerState]);

  return { publish, isCoopActive: active };
}






