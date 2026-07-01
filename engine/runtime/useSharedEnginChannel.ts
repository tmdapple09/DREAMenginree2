'use client';

import type { EnginName } from '@/engine/runtime/instanceManager';
import { buildInstanceKey, promoteInstanceToRealtime, useInstanceManager } from '@/engine/runtime/instanceManager';
import { createLocalChannel, type RuntimeChannel, type RuntimeChannelEvent } from '@/engine/runtime/runtimeChannel';
import type { RuntimeId } from '@/types/module-manifest';
import { useCallback, useEffect, useRef, useState } from 'react';

















export interface SharedEnginChannelOptions {
  enginName: EnginName;
  instanceId: string;
  region?: RuntimeId;
  
  mode?: 'solo' | 'coop';
}

export interface SharedEnginChannelResult<T extends RuntimeChannelEvent = RuntimeChannelEvent> {
  
  channel: RuntimeChannel<T>;
  
  publish: (event: T) => Promise<void>;
  
  subscribe: (listener: (event: T) => void) => () => void;
  
  isConnected: boolean;
  
  peerCount: number;
}



export function useSharedEnginChannel<T extends RuntimeChannelEvent = RuntimeChannelEvent>({
  enginName,
  instanceId,
  region = 'homedream',
  mode = 'solo',
}: SharedEnginChannelOptions): SharedEnginChannelResult<T> {
  const { spawn, instances } = useInstanceManager();
  const channelRef = useRef<RuntimeChannel<T> | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [peerCount,   setPeerCount]   = useState(1);

  useEffect(() => {
    const instance = spawn(enginName, instanceId, region, mode);

    
    
    channelRef.current = instance.channel as unknown as RuntimeChannel<T>;
    setIsConnected(true);

    
    const off = (instance.channel as RuntimeChannel<RuntimeChannelEvent>).subscribe(
      (evt) => {
        if (evt['type'] === 'peer_join')  setPeerCount((n) => n + 1);
        if (evt['type'] === 'peer_leave') setPeerCount((n) => Math.max(1, n - 1));
      },
    );

    return () => {
      off();
      
      
    };

  }, [enginName, instanceId, region]);

  useEffect(() => {
    if (mode !== 'coop') return;
    const key = buildInstanceKey(enginName, instanceId);
    const instance = useInstanceManager.getState().instances[key];
    if (instance?.channel.kind === 'realtime') return;
    void promoteInstanceToRealtime(key);
  }, [enginName, instanceId, mode]);

  useEffect(() => {
    const key = `${enginName}:${instanceId}`;
    const instance = instances[key];
    if (instance) {
      channelRef.current = instance.channel as unknown as RuntimeChannel<T>;
    }
  }, [enginName, instanceId, instances]);

  const publish = useCallback(
    async (event: T) => {
      if (channelRef.current) {
        await channelRef.current.publish(event);
      }
    },
    [],
  );

  const subscribe = useCallback(
    (listener: (event: T) => void): (() => void) => {
      if (!channelRef.current) {
        
        return () => {};
      }
      return channelRef.current.subscribe(listener);
    },
    [],
  );

  
  
  const channel =
    channelRef.current ??
    (createLocalChannel<T>(`${enginName}:${instanceId}:fallback`) as RuntimeChannel<T>);

  return { channel, publish, subscribe, isConnected, peerCount };
}






