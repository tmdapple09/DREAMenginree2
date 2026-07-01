'use client';

import { createClient } from '@/supabase/client/client';
import { useEffect, useState } from 'react';

export function useAccount(initialAccountId?: string | null ){
  const [accountId, setAccountId] = useState<string | null>(initialAccountId ?? null);

  useEffect(() => {
    if (initialAccountId) {
      setAccountId(initialAccountId);
      return;
    }

    const supabase = createClient();
    let mounted = true;

    void supabase.auth
      .getUser()
      .then(({ data }: { data: { user: { id: string } | null } }) => {
        if (!mounted) return;
        setAccountId(data.user?.id ?? null);
      })
      .catch(() => {
        
      });

    
    
    
    
    let subscription: { unsubscribe: () => void } | null = null;
    try {
      const result = supabase.auth.onAuthStateChange(
        (_event: string, session: { user?: { id?: string } | null } | null) => {
          if (!mounted) return;
          setAccountId(session?.user?.id ?? null);
        },
      );
      subscription = result?.data?.subscription ?? null;
    } catch {
      
    }

    return () => {
      mounted = false;
      subscription?.unsubscribe();
    };
  }, [initialAccountId]);

  return { accountId };
}
