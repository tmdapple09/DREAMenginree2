'use client';

import { bridge } from '@/engine/runtime/dualRuntimeBridge';
import { useEffect } from 'react';



interface Props {
  sharerId: string;
}

export default function DreamRCore({ sharerId }: Props) {
  useEffect(() => {
    
    const subs = [
      bridge.subscribe('create', 'create:published', (payload) => {
        const contentId = typeof payload['contentId'] === 'string' ? payload['contentId'] : '';
        console.debug('[DreamRCore] Published:', contentId, 'via sharer', sharerId);
        void fetch('/api/dreamr/tally', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contentId, sharerId }),
        }).catch(() => );
      }),

      bridge.subscribe('games', 'games:achievement-unlocked', (payload) => {
        const title = typeof payload['title'] === 'string' ? payload['title'] : 'Achievement';
        console.debug('[DreamRCore] Game achievement:', title);
      }),

      bridge.subscribe('music', 'music:session-end', (payload) => {
        const sessionId = typeof payload['sessionId'] === 'string' ? payload['sessionId'] : '';
        console.debug('[DreamRCore] Music session ended:', sessionId);
      }),
    ];

    return () => subs.forEach((u) => u());
  }, [sharerId]);

  
  return null;
}
