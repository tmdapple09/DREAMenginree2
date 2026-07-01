'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
    bridge,
    type BridgeEventHandler,
    type ChannelEventKey,
    type ChannelEventPayload,
    type DualRuntimeChannel,
    type PeerState,
    type UnsubscribeFn,
} from './dualRuntimeBridge';

















export interface UseDualRuntimeReturn {
  
  emit: <C extends DualRuntimeChannel, K extends ChannelEventKey<C>>(
    channel: C,
    event: K,
    payload: ChannelEventPayload<C, K>,
  ) => void;

  
  on: <C extends DualRuntimeChannel, K extends ChannelEventKey<C>>(
    channel: C,
    event: K,
    handler: BridgeEventHandler<ChannelEventPayload<C, K>>,
  ) => UnsubscribeFn;

  
  peers: readonly PeerState[];

  
  channel: DualRuntimeChannel;
}




export function useDualRuntime(channel: DualRuntimeChannel): UseDualRuntimeReturn {
  
  const unsubscribersRef = useRef<UnsubscribeFn[]>([]);

  
  const [peers, setPeers] = useState<readonly PeerState[]>(() => bridge.getPeers());

  
  useEffect(() => {
    return bridge.subscribePeerActivity((nextPeers) => {
      setPeers(nextPeers);
    });
  }, []);

  
  useEffect(() => {
    return () => {
      const unsubs = unsubscribersRef.current;
      for (const unsub of unsubs) {
        unsub();
      }
      unsubscribersRef.current = [];
    };
  }, []);

  
  const emit = useCallback(
    <C extends DualRuntimeChannel, K extends ChannelEventKey<C>>(
      targetChannel: C,
      event: K,
      payload: ChannelEventPayload<C, K>,
    ) => {
      bridge.emit(targetChannel, event, payload);
      
      setPeers(bridge.getPeers());
    },
    [],
  );

  
  const on = useCallback(
    <C extends DualRuntimeChannel, K extends ChannelEventKey<C>>(
      targetChannel: C,
      event: K,
      handler: BridgeEventHandler<ChannelEventPayload<C, K>>,
    ): UnsubscribeFn => {
      const unsub = bridge.subscribe(targetChannel, event, handler);

      
      unsubscribersRef.current.push(unsub);

      
      setPeers(bridge.getPeers());

      
      return () => {
        unsub();
        
        unsubscribersRef.current = unsubscribersRef.current.filter(
          (fn) => fn !== unsub,
        );
        setPeers(bridge.getPeers());
      };
    },
    [],
  );

  return { emit, on, peers, channel };
}







export type {
    BridgeEventHandler, ChannelEventKey,
    ChannelEventPayload, DualRuntimeChannel, PeerState, UnsubscribeFn
} from './dualRuntimeBridge';
