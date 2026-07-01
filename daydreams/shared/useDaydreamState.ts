'use client';

import { createClient } from '@/supabase/client/client';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { useCallback, useEffect, useRef } from 'react';



export type DaydreamSide = 'A' | 'B';

export type DaydreamStatePayload = {
  side: DaydreamSide;
  [key: string]: unknown;
};

export interface UseDaydreamStateOptions {
  
  daydreamType: string;
  
  side: DaydreamSide;
}

export interface UseDaydreamStateReturn {
  
  persistState: (payload: DaydreamStatePayload) => void;
  
  markVisited: () => void;
}

export function useDaydreamState({ daydreamType, side }: UseDaydreamStateOptions): UseDaydreamStateReturn {
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const markVisited = useCallback(async () => {
    const supabase = createClient();
    const user = await safeGetUser(supabase);
    if (!user) return;
    await supabase
      .from('daydream_states')
      .upsert(
        {
          user_id: user.id,
          daydream_type: daydreamType,
          side,
          last_visited: new Date().toISOString(),
        },
        { onConflict: 'user_id,daydream_type', ignoreDuplicates: false },
      );
  }, [daydreamType, side]);

  const persistState = useCallback((payload: DaydreamStatePayload) => {
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
            side,
            state: payload,
            last_visited: new Date().toISOString(),
          },
          { onConflict: 'user_id,daydream_type', ignoreDuplicates: false },
        );
    }, 800);
  }, [daydreamType, side]);

  
  useEffect(() => {
    markVisited();
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [markVisited]);

  return { persistState, markVisited };
}
