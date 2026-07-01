'use client';

import { useCallback, useEffect, useRef } from 'react';
import { recordForgeActivity } from './forgeRegistry';



export interface UseForgeActivityOptions {
  
  enginId: string;
  
  recordOnMount?: boolean;
}

export interface UseForgeActivityReturn {
  
  record: (label: string) => void;
}


export function useForgeActivity({
  enginId,
  recordOnMount = true,
}: UseForgeActivityOptions): UseForgeActivityReturn {
  const mountedRef = useRef(false);

  
  useEffect(() => {
    if (recordOnMount && !mountedRef.current) {
      mountedRef.current = true;
      recordForgeActivity(enginId, `Entered ${enginId}`);
    }
  }, [enginId, recordOnMount]);

  const record = useCallback(
    (label: string) => {
      recordForgeActivity(enginId, label);
    },
    [enginId],
  );

  return { record };
}
