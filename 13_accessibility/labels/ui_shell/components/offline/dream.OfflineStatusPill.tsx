'use client';

import { getQueueStatus, subscribeQueueStatus, type QueueStatus } from '@/engine/runtime/offlineQueue';
import { useEffect, useState } from 'react';

interface OfflineRuntimeState {
  online: boolean;
  serviceWorkerReady: boolean;
  queue: QueueStatus;
  lastReplayAt: number | null;
  lastError: string | null;
}

const STATE_EVENT = 'dreamengin:offline-runtime-state';

export default function OfflineStatusPill(): React.JSX.Element | null {
  const [state, setState] = useState<OfflineRuntimeState>(() => ({
    online: typeof navigator === 'undefined' ? true : navigator.onLine !== false,
    serviceWorkerReady: false,
    queue: getQueueStatus(),
    lastReplayAt: null,
    lastError: null,
  }));

  useEffect(() => {
    const queueUnsub = subscribeQueueStatus((queue) => setState((prev) => ({ ...prev, queue })));
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<OfflineRuntimeState>).detail;
      if (detail) setState(detail);
    };
    window.addEventListener(STATE_EVENT, handler);
    return () => {
      queueUnsub();
      window.removeEventListener(STATE_EVENT, handler);
    };
  }, []);

  if (state.online && state.queue.total === 0 && !state.lastError) return null;

  const label = state.online
    ? state.queue.total > 0
      ? `${state.queue.total} queued`
      : 'Online'
    : 'Offline mode';

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        right: 12,
        bottom: 12,
        zIndex: 2147483000,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        maxWidth: 'calc(100vw - 24px)',
        border: '1px solid rgba(14, 165, 233, 0.32)',
        borderRadius: 999,
        background: state.online ? 'rgba(240, 249, 255, 0.92)' : 'rgba(15, 23, 42, 0.92)',
        color: state.online ? '#075985' : '#f8fafc',
        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.18)',
        padding: '8px 12px',
        fontSize: 12,
        fontWeight: 900,
        backdropFilter: 'blur(14px)',
      }}
    >
      <span>{state.online ? '↻' : '•'}</span>
      <span>{label}</span>
      {state.queue.failed > 0 ? <span>{state.queue.failed} failed</span> : null}
    </div>
  );
}
