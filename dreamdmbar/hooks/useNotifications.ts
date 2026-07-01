'use client';

import { useCallback, useEffect, useRef, useState } from 'react';




const POLL_INTERVAL_MS = 60_000;


const ACTIVE_POLL_INTERVAL_MS = 30_000;

const MAX_BACKOFF_MS = 5 * 60_000;

interface UseNotificationsReturn {
  unreadCount: number;
  
  markAllRead: () => void;
  
  refresh: () => void;
  
  lastRefreshedAt: number | null;
  
  pollErrors: number;
}

export function useNotifications(): UseNotificationsReturn {
  const [unreadCount, setUnreadCount] = useState(0);
  const [lastRefreshedAt, setLastRefreshedAt] = useState<number | null>(null);
  const [pollErrors, setPollErrors] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pollErrorsRef = useRef(0);

  const fetchCount = useCallback(async () => {
    try {
      const res = await fetch('/api/notifications?unread_only=true&limit=1');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (typeof data.unread_count === 'number') {
        setUnreadCount(data.unread_count);
      }
      
      setLastRefreshedAt(Date.now());
      
      pollErrorsRef.current = 0;
      setPollErrors(0);
    } catch {
      
      pollErrorsRef.current++;
      setPollErrors(pollErrorsRef.current);
      
    }
  }, []);

  useEffect(() => {
    fetchCount();

    const schedule = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      
      
      const backoff = pollErrorsRef.current > 0
        ? Math.min(POLL_INTERVAL_MS * Math.pow(2, pollErrorsRef.current - 1), MAX_BACKOFF_MS)
        : 0;
      const interval = backoff > 0
        ? backoff
        : unreadCount > 0
          ? ACTIVE_POLL_INTERVAL_MS
          : POLL_INTERVAL_MS;
      intervalRef.current = setInterval(fetchCount, interval);
    };

    schedule();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [fetchCount, unreadCount]);

  const markAllRead = useCallback(() => {
    setUnreadCount(0);
  }, []);

  return { unreadCount, markAllRead, refresh: fetchCount, lastRefreshedAt, pollErrors };
}
