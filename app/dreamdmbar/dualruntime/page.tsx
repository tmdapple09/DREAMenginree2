'use client';

import SharedDreamRuntime from '@/components/shared-dream/dream.SharedDreamRuntime';
import { useDreamSystem } from '@/dreamdmbar/runtime/DreamSystemContext';
import { useEffect, useState } from 'react';











const SESSION_STORAGE_KEY = 'dreamengin:dualruntime:session-id';









export default function DreamDMBarDualRuntimePage( ){
  const { setFocus, setSplitRatio, setIsBarMinimized } = useDreamSystem();
  const [sessionId, setSessionId] = useState<string | undefined>(undefined);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    setFocus('dualruntime');
    setIsBarMinimized(false);
    setSplitRatio(0.5);
  }, [setFocus, setIsBarMinimized, setSplitRatio]);

  
  useEffect(() => {
    if (typeof window === 'undefined') { setResolved(true); return; }

    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('session');
    if (fromUrl) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, fromUrl);
      setSessionId(fromUrl);
      setResolved(true);
      return;
    }

    const fromStorage = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (fromStorage) {
      setSessionId(fromStorage);
    }
    setResolved(true);
  }, []);

  
  const handleSessionCreated = (newId: string) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(SESSION_STORAGE_KEY, newId);
    }
  };

  if (!resolved) return null;

  return (
    <div style={{ width: '100%', height: '100%', padding: '0 0 4px' }}>
      <SharedDreamRuntime
        sessionId={sessionId}
        onSessionCreated={handleSessionCreated}
      />
    </div>
  );
}






