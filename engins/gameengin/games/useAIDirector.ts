'use client';

import { AIDirector, type DirectorState, type PlayerSignals } from '@/engins/gameengin/ai-director';
import { useCallback, useEffect, useRef, useState } from 'react';



const DEFAULT_STATE: DirectorState = {
  challengeLevel: 0.35,
  skillTier: 'casual',
  label: '🟡 In the zone',
};

export interface AIDirectorHookResult {
  
  update: (signals: PlayerSignals) => DirectorState;
  
  level: number;
  
  state: DirectorState;
  
  ready: boolean;
}


export function useAIDirector(): AIDirectorHookResult {
  const directorRef = useRef<AIDirector>(new AIDirector());
  const [ready, setReady] = useState(false);
  const [state, setState] = useState<DirectorState>(DEFAULT_STATE);

  
  useEffect(() => {
    directorRef.current.init().then(() => setReady(true));
  }, []);

  const update = useCallback((signals: PlayerSignals): DirectorState => {
    const next = directorRef.current.update(signals);
    
    
    setState((prev) => {
      if (prev.label !== next.label || prev.skillTier !== next.skillTier) {
        return next;
      }
      return prev;
    });
    return next;
  }, []);

  return {
    update,
    level: state.challengeLevel,
    state,
    ready,
  };
}
