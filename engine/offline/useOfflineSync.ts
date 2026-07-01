'use client';

import { useCallback, useEffect, useState } from 'react';
import {
    isOnline,
    onConnectivityChange,
    processSyncQueue,
    type SyncQueueEntry,
} from './offlineCache';



export interface UseOfflineSyncReturn {
  
  online: boolean;
  
  syncing: boolean;
  
  lastSyncResult: { synced: number; failed: number } | null;
  
  triggerSync: () => Promise<void>;
}


export function useOfflineSync(
  uploadFn?: (entry: SyncQueueEntry) => Promise<void>,
): UseOfflineSyncReturn {
  const [online, setOnline] = useState(() => isOnline());
  const [syncing, setSyncing] = useState(false);
  const [lastSyncResult, setLastSyncResult] = useState<{
    synced: number;
    failed: number;
  } | null>(null);

  const doSync = useCallback(async () => {
    if (!uploadFn) return;
    setSyncing(true);
    try {
      const result = await processSyncQueue(uploadFn);
      setLastSyncResult(result);
    } catch {
      
    } finally {
      setSyncing(false);
    }
  }, [uploadFn]);

  
  useEffect(() => {
    const unsub = onConnectivityChange((nowOnline) => {
      setOnline(nowOnline);
      if (nowOnline) {
        void doSync();
      }
    });
    return unsub;
  }, [doSync]);

  return {
    online,
    syncing,
    lastSyncResult,
    triggerSync: doSync,
  };
}
