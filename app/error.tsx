'use client';

import RootStatusScreen from '@/components/overlays/dream.RootStatusScreen';
import { isAuthRelatedError } from '@/engine/runtime/isAuthRelatedError';
import { createClient } from '@/supabase/client/client';
import { useEffect } from 'react';



export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Route error:', error)

    
    
    
    
    
    
    
    
    
    
    if (!isAuthRelatedError(error)) return;

    const sb = createClient();
    sb.auth.signOut().catch(() => {  }).finally(() => {
      (window.top ?? window).location.href = '/login';
    });
  }, [error])

  return (
    <div>
      <RootStatusScreen
        eyebrow="Recovery"
        title="Something cracked in the dream."
        message="The page hit an error. Try again to recover, or reload if the problem persists."
        detail={error?.message ?? null}
        actions={[{ href: '/', label: 'Go Home' }]}
      />
      <div className="fixed inset-x-4 bottom-4 z-20">
        <button
          onClick={() => reset()}
          className="de-btn de-btn-primary mx-auto flex justify-center"
          style={{ minWidth: 220 }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
