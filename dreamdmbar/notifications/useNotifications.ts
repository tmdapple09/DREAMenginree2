'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
    applyOptimisticDelete,
    applyOptimisticMarkAll,
    applyOptimisticRead,
    getUnreadCount,
    normalizeDbRow,
    sortByRecent,
    type DbNotificationRow,
    type UiNotification,
} from './notificationHelpers';
import { toErrorMessage } from '@/utils/index';
import { getOfflineRecord, putOfflineRecord } from '@/engine/offline/offlineCache';
import { enqueueFetchMutation } from '@/engine/runtime/offlineQueue';




const POLL_INTERVAL_MS = 30_000;
const NOTIFICATIONS_CACHE_ID = 'latest';

export interface UseNotificationsReturn {
  
  notifications: UiNotification[];
  
  unreadCount: number;
  
  isLoading: boolean;
  
  error: string | null;
  
  markAsRead: (id: string) => Promise<void>;
  
  markAllAsRead: () => Promise<void>;
  
  deleteNotification: (id: string) => Promise<void>;
  
  reload: () => void;
}

export function useNotifications(): UseNotificationsReturn {
  const [notifications, setNotifications] = useState<UiNotification[]>([]);
  const [isLoading,     setIsLoading]     = useState(true);
  const [error,         setError]         = useState<string | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchNotifications = useCallback(async () => {
    const cached = await getOfflineRecord<UiNotification[]>('notifications', NOTIFICATIONS_CACHE_ID);
    if (cached?.value) {
      setNotifications(sortByRecent(cached.value));
      setIsLoading(false);
    }

    try {
      const res = await fetch('/api/notifications?limit=30', {
        credentials: 'include',
        cache: 'no-store',
      });

      if (!res.ok) {
        if (res.status === 401) {
          setIsLoading(false);
          return;
        }
        const data = await res.json().catch(() => ({}));
        throw new Error((data as any).error as string || `HTTP ${res.status}`);
      }

      const data = await res.json() as {
        notifications?: DbNotificationRow[];
        unread_count?: number;
      };

      const rows: DbNotificationRow[] = data.notifications ?? [];
      const normalised = sortByRecent(rows.map(normalizeDbRow));
      setNotifications(normalised);
      await putOfflineRecord({ namespace: 'notifications', id: NOTIFICATIONS_CACHE_ID, value: normalised });
      setError(null);
    } catch (err: unknown) {
      setError(cached?.value ? null : err instanceof Error ? toErrorMessage(err) : 'Failed to load notifications.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchNotifications();

    timerRef.current = setInterval(() => {
      void fetchNotifications();
    }, POLL_INTERVAL_MS);

    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, [fetchNotifications]);

  const markAsRead = useCallback(async (id: string) => {
    
    setNotifications((prev) => applyOptimisticRead(prev, id));

    try {
      const body = { notification_ids: [id] };
      const response = await fetch('/api/notifications', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
    } catch {
      enqueueFetchMutation('notification:read', {
        url: '/api/notifications',
        method: 'PUT',
        body: { notification_ids: [id] },
      }, { id });
    }
  }, [fetchNotifications]);

  const markAllAsRead = useCallback(async () => {
    setNotifications((prev) => applyOptimisticMarkAll(prev));

    try {
      const body = { mark_all: true };
      const response = await fetch('/api/notifications', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
    } catch {
      enqueueFetchMutation('notification:mark-all', {
        url: '/api/notifications',
        method: 'PUT',
        body: { mark_all: true },
      }, { markAll: true });
    }
  }, [fetchNotifications]);

  const deleteNotification = useCallback(async (id: string) => {
    setNotifications((prev) => applyOptimisticDelete(prev, id));

    try {
      const url = `/api/notifications?id=${encodeURIComponent(id)}`;
      const response = await fetch(url, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
    } catch {
      enqueueFetchMutation('notification:delete', {
        url: `/api/notifications?id=${encodeURIComponent(id)}`,
        method: 'DELETE',
      }, { id });
    }
  }, [fetchNotifications]);

  return {
    notifications,
    unreadCount: getUnreadCount(notifications),
    isLoading,
    error,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    reload: fetchNotifications,
  };
}
