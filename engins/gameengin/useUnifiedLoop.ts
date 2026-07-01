'use client';

import { useEffect, useRef } from 'react';
import {
    registerGame,
    unregisterGame,
    type LoopPriority,
} from './unifiedLoop';




export function useUnifiedLoop(
  id: string,
  tickFn: (dt: number) => void,
  priority: LoopPriority = 'NORMAL',
  active = true,
): void {
  
  const tickRef = useRef<(dt: number) => void>(tickFn);
  
  tickRef.current = tickFn;

  useEffect(() => {
    if (!active) return;

    
    
    const stableFn = (dt: number): void => {
      tickRef.current(dt);
    };

    registerGame(id, stableFn, priority);

    return (): void => {
      unregisterGame(id);
    };
  }, [id, priority, active]);
  
}
