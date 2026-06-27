'use client';

import type { RealtimePostgresInsertPayload } from '@/engine/io';
import { createClient } from '@/supabase/client/client';
import { getOfflineRecord, putOfflineRecord } from '@/engine/offline/offlineCache';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * useDreamDMMessages — fetch and subscribe to messages for a DreamDM conversation.
 *
 * Establishes a Supabase Realtime channel for the given conversationId so new
 * messages appear instantly without polling. The channel is torn down when the
 * conversationId changes or the component unmounts.
 *
 * Deduplication: incoming realtime events are merged by `id` so optimistic
 * messages are replaced cleanly without duplication.
 *
 * Architecture note: lives in lib/ (Logic layer) per GENERATION_LAW §3.1.
 * Privacy: RLS on messages enforces participant-only access at the DB layer.
 *
 * docs/dreamdm_bar_pass2.md §2.1 — Realtime Messaging
 */


export interface DMMessage {
  id: string;
  sender_id: string;
  content: string;
  created_at: string;
  media_url?: string | null;
  media_type?: 'image' | 'video' | 'audio' | 'file' | null;
  pending?: boolean;
  failed?: boolean;
  sender?: {
    id: string;
    display_name: string | null;
    handle: string | null;
    avatar_url: string | null;
  } | null;
}

interface UseMessagesReturn {
  messages: DMMessage[];
  isLoading: boolean;
  /** Append an optimistic message before the server confirms it */
  addOptimistic: (msg: DMMessage) => void;
  /** Replace an optimistic message once the real one arrives */
  replaceOptimistic: (tempId: string, real: DMMessage) => void;
  /** Remove an optimistic message (on send failure) */
  removeOptimistic: (tempId: string) => void;
}

export function useDreamDMMessages(
  conversationId: string | null,
  isDemoConversation: boolean,
  demoMessages: DMMessage[],
): UseMessagesReturn {
  const [messages, setMessages] = useState<DMMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const channelRef = useRef<ReturnType<ReturnType<typeof createClient>['channel']> | null>(null);

  const addOptimistic = useCallback((msg: DMMessage) => {
    setMessages((prev) => {
      const next = [...prev, { ...msg, pending: msg.pending ?? true }];
      if (conversationId) void putOfflineRecord({ namespace: 'dreamdm-messages', id: conversationId, value: next });
      return next;
    });
  }, [conversationId]);

  const replaceOptimistic = useCallback((tempId: string, real: DMMessage) => {
    setMessages((prev) => {
      const next = prev.map((m) => (m.id === tempId ? { ...real, pending: false } : m));
      if (conversationId) void putOfflineRecord({ namespace: 'dreamdm-messages', id: conversationId, value: next });
      return next;
    });
  }, [conversationId]);

  const removeOptimistic = useCallback((tempId: string) => {
    setMessages((prev) => {
      const next = prev.filter((m) => m.id !== tempId);
      if (conversationId) void putOfflineRecord({ namespace: 'dreamdm-messages', id: conversationId, value: next });
      return next;
    });
  }, [conversationId]);

  useEffect(() => {
    if (!conversationId) {
      setMessages([]);
      return;
    }

    // Demo conversations are handled separately — no realtime subscription
    if (isDemoConversation) return;

    const supabase = createClient();

    const fetchMessages = async () => {
      setIsLoading(true);
      const cached = await getOfflineRecord<DMMessage[]>('dreamdm-messages', conversationId);
      if (cached?.value) {
        setMessages(cached.value);
        setIsLoading(false);
      }

      try {
        const res = await fetch(`/api/messages?conversation_id=${conversationId}`);
        const data = await res.json();
        if (data.messages) {
          const next = data.messages as DMMessage[];
          setMessages(next);
          await putOfflineRecord({ namespace: 'dreamdm-messages', id: conversationId, value: next });
        }
      } catch (err: unknown) {
        if (!cached?.value) console.error('Failed to load messages:', err);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchMessages();

    // Subscribe to new messages on this conversation
    const channel = supabase
      .channel(`messages:${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload: RealtimePostgresInsertPayload<DMMessage>) => {
          const newMsg = payload.new as DMMessage;
          setMessages((prev) => {
            // Avoid duplicate if already present (e.g., from optimistic insert)
            const exists = prev.some((m) => m.id === newMsg.id);
            if (exists) return prev;
            const next = [...prev, { ...newMsg, pending: false }];
            void putOfflineRecord({ namespace: 'dreamdm-messages', id: conversationId, value: next });
            return next;
          });
        },
      )
      .subscribe();

    channelRef.current = channel;

    return () => {
      supabase.removeChannel(channel);
      channelRef.current = null;
    };
  }, [conversationId, isDemoConversation]);

  // Populate demo messages when a demo conversation is selected
  useEffect(() => {
    if (isDemoConversation && conversationId) {
      setMessages(demoMessages);
    }
  // demoMessages is defined outside the component (stable reference)

  }, [conversationId, isDemoConversation]);

  return { messages, isLoading, addOptimistic, replaceOptimistic, removeOptimistic };
}
