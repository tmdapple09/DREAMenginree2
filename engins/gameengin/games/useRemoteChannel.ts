'use client';

import { useEffect } from 'react';



const CHANNEL_NAME = 'de-game-remote';



let _broadcastChannel: BroadcastChannel | null = null;

function getBroadcastChannel(): BroadcastChannel | null {
  if (typeof window === 'undefined' || typeof BroadcastChannel === 'undefined') return null;
  if (!_broadcastChannel) {
    try {
      _broadcastChannel = new BroadcastChannel(CHANNEL_NAME);
      
      window.addEventListener('beforeunload', () => {
        _broadcastChannel?.close();
        _broadcastChannel = null;
      }, { once: true });
    } catch {
      return null;
    }
  }
  return _broadcastChannel;
}


export function broadcastGameInput(action: string, active: boolean): void {
  try {
    getBroadcastChannel()?.postMessage({ action, active, source: 'remote' });
  } catch {
    
  }
}


export function useRemoteChannel( ){
  useEffect(() => {
    if (typeof BroadcastChannel === 'undefined') return;

    let ch: BroadcastChannel;
    try {
      ch = new BroadcastChannel(CHANNEL_NAME);
    } catch {
      return;
    }

    const handler = (e: MessageEvent) => {
      const { action, active } = e.data ?? {};
      if (typeof action === 'string' && typeof active === 'boolean') {
        window.dispatchEvent(
          new CustomEvent('de-game-input', { detail: { action, active, source: 'remote' } }),
        );
      }
    };

    ch.addEventListener('message', handler);
    return () => {
      ch.removeEventListener('message', handler);
      ch.close();
    };
  }, []);
}
