'use client';

import { getOfflineRecord, putOfflineRecord } from '@/engine/offline/offlineCache';
import { enqueueFetchMutation } from '@/engine/runtime/offlineQueue';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface UserDreamLayout {
  home: { dreams: string[] };
  dreamspace: { dreams: string[] };
  hidden?: string[];
}

const DEFAULT_LAYOUT: UserDreamLayout = {
  home: { dreams: [] },
  dreamspace: { dreams: [] },
  hidden: [],
};

const LAYOUT_CACHE_ID = 'user-layout';

function normalizeLayout(value: unknown): UserDreamLayout {
  const obj = value && typeof value === 'object' ? value as Record<string, unknown> : {};
  const home = obj.home && typeof obj.home === 'object' ? obj.home as Record<string, unknown> : {};
  const dreamspace = obj.dreamspace && typeof obj.dreamspace === 'object' ? obj.dreamspace as Record<string, unknown> : {};
  return {
    home: { dreams: Array.isArray(home.dreams) ? home.dreams.filter((id: unknown): id is string => typeof id === 'string') : [] },
    dreamspace: { dreams: Array.isArray(dreamspace.dreams) ? dreamspace.dreams.filter((id: unknown): id is string => typeof id === 'string') : [] },
    hidden: Array.isArray(obj.hidden) ? obj.hidden.filter((id: unknown): id is string => typeof id === 'string') : [],
  };
}

async function cacheLayout(layout: UserDreamLayout): Promise<void> {
  await putOfflineRecord({ namespace: 'dream-layout', id: LAYOUT_CACHE_ID, value: layout });
}

export function useDreamLayout() {
  const [layout, setLayout] = useState<UserDreamLayout>(DEFAULT_LAYOUT);
  const [isStale, setIsStale] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const refresh = useCallback(async () => {
    const cached = await getOfflineRecord<UserDreamLayout>('dream-layout', LAYOUT_CACHE_ID);
    if (cached) {
      setLayout(normalizeLayout(cached.value));
      setIsStale(true);
    }

    try {
      const response = await fetch('/api/user/layout', { cache: 'no-store' });
      if (!response.ok) return;
      const payload = await response.json();
      const next = normalizeLayout(payload.layout);
      setLayout(next);
      setIsStale(false);
      await cacheLayout(next);
    } catch {
      setIsStale(Boolean(cached));
    }
  }, []);

  const updateDreamLayout = useCallback((next: UserDreamLayout, debounceMs = 500) => {
    const normalized = normalizeLayout(next);
    setLayout(normalized);
    setIsStale(false);
    void cacheLayout(normalized);

    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      const body = { layout: normalized };
      if (typeof navigator !== 'undefined' && navigator.onLine === false) {
        enqueueFetchMutation('dream-layout:update', {
          url: '/api/user/layout',
          method: 'POST',
          body,
        }, { layout: normalized });
        return;
      }

      void fetch('/api/user/layout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }).catch(() => {
        enqueueFetchMutation('dream-layout:update', {
          url: '/api/user/layout',
          method: 'POST',
          body,
        }, { layout: normalized });
      });
    }, debounceMs);
  }, []);

  const resetDreamLayout = useCallback(() => updateDreamLayout(DEFAULT_LAYOUT, 0), [updateDreamLayout]);

  useEffect(() => {
    void refresh();
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [refresh]);

  return { layout, isStale, refresh, updateDreamLayout, resetDreamLayout };
}
