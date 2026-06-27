'use client';

import { getCachedHttpGet, putOfflineRecord, onConnectivityChange } from '@/engine/offline/offlineCache';
import {
  flushQueue,
  getQueueStatus,
  listenOnline,
  replayFetchMutation,
  subscribeQueueStatus,
  type OfflineAction,
  type QueueStatus,
} from '@/engine/runtime/offlineQueue';
import { useEffect, useState } from 'react';

export interface OfflineRuntimeState {
  online: boolean;
  serviceWorkerReady: boolean;
  queue: QueueStatus;
  lastReplayAt: number | null;
  lastError: string | null;
}

const STATE_EVENT = 'dreamengin:offline-runtime-state';

function emitState(state: OfflineRuntimeState): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<OfflineRuntimeState>(STATE_EVENT, { detail: state }));
}

async function replayAction(action: OfflineAction): Promise<void> {
  await replayFetchMutation(action);
}

export default function OfflineRuntimeBootstrap(): null {
  const [state, setState] = useState<OfflineRuntimeState>(() => ({
    online: typeof navigator === 'undefined' ? true : navigator.onLine !== false,
    serviceWorkerReady: false,
    queue: getQueueStatus(),
    lastReplayAt: null,
    lastError: null,
  }));

  useEffect(() => {
    emitState(state);
  }, [state]);

  useEffect(() => {
    let cancelled = false;

    const update = (patch: Partial<OfflineRuntimeState>) => {
      if (cancelled) return;
      setState((prev) => ({ ...prev, ...patch }));
    };

    const unsubscribeQueue = subscribeQueueStatus((queue) => update({ queue }));
    const unsubscribeOnline = onConnectivityChange((online) => update({ online }));

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/dreamengin-sw.js', { scope: '/' })
        .then((registration) => {
          if (cancelled) return;
          update({ serviceWorkerReady: Boolean(registration.active || registration.waiting || registration.installing), lastError: null });
        })
        .catch((error: unknown) => {
          update({ serviceWorkerReady: false, lastError: error instanceof Error ? error.message : String(error) });
        });
    }

    void getCachedHttpGet('/').then((cached) => {
      if (!cached) return;
      void putOfflineRecord({
        namespace: 'dream-system',
        id: 'shell:last-seen-root',
        value: { cachedAt: cached.cachedAt, status: cached.status },
      });
    });

    const unsubscribeReplay = listenOnline(async (action) => {
      await replayAction(action);
      update({ lastReplayAt: Date.now(), queue: getQueueStatus(), lastError: null });
    });

    if (typeof window !== 'undefined') {
      window.__dreamenginOfflineFlush = async () => {
        const result = await flushQueue(replayAction);
        update({ lastReplayAt: Date.now(), queue: getQueueStatus(), lastError: null });
        return result;
      };
    }

    return () => {
      cancelled = true;
      unsubscribeQueue();
      unsubscribeOnline();
      unsubscribeReplay();
      if (typeof window !== 'undefined') delete window.__dreamenginOfflineFlush;
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    __dreamenginOfflineFlush?: () => Promise<{ succeeded: number; failed: number; skipped: number }>;
  }
}
