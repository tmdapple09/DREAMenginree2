'use client';

import { createClient } from '@/supabase/client/client';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { useCallback, useEffect, useRef, useState } from 'react';



export interface UseDaydreamPersistenceOptions {
  
  daydreamType: string;
}

export interface UseDaydreamPersistenceReturn<T = Record<string, unknown>> {
  
  savedState: T | null;
  
  isRestoring: boolean;
  
  persistState: (payload: T) => void;
}


export function useDaydreamPersistence<T = Record<string, unknown>>(
  { daydreamType }: UseDaydreamPersistenceOptions,
): UseDaydreamPersistenceReturn<T> {
  const [savedState, setSavedState] = useState<T | null>(null);
  const [isRestoring, setIsRestoring] = useState(true);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load( ){
      const supabase = createClient();
      const user = await safeGetUser(supabase);

      if (!user || cancelled) {
        setIsRestoring(false);
        return;
      }

      const { data } = await supabase
        .from('daydream_states')
        .select('state')
        .eq('user_id', user.id)
        .eq('daydream_type', daydreamType)
        .maybeSingle();

      if (!cancelled) {
        setSavedState((data?.state as T) ?? null);
        setIsRestoring(false);
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, [daydreamType]);

  const persistState = useCallback(
    (payload: T) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);

      debounceRef.current = setTimeout(async () => {
        const supabase = createClient();
        const user = await safeGetUser(supabase);
        if (!user) return;

        await supabase
          .from('daydream_states')
          .upsert(
            {
              user_id: user.id,
              daydream_type: daydreamType,
              side: 'B',
              state: payload as any,
              last_visited: new Date().toISOString(),
            },
            { onConflict: 'user_id,daydream_type', ignoreDuplicates: false },
          );
      }, 800);
    },
    [daydreamType],
  );

  
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  return { savedState, isRestoring, persistState };
}
