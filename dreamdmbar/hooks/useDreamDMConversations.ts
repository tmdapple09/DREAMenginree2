'use client';

import type { RealtimePostgresInsertPayload } from '@/engine/io';
import { createClient } from '@/supabase/client/client';
import { getOfflineRecord, putOfflineRecord } from '@/engine/offline/offlineCache';
import { useCallback, useEffect, useState } from 'react';




export interface DMConversation {
  id: string;
  otherUser: {
    id: string;
    display_name: string | null;
    handle: string | null;
    avatar_url: string | null;
  };
  lastMessage?: string;
  updatedAt: string;
}

interface UseConversationsReturn {
  conversations: DMConversation[];
  isLoading: boolean;
  reload: () => void;
}

export function useDreamDMConversations(userId: string, initial: DMConversation[] = []): UseConversationsReturn {
  const [conversations, setConversations] = useState<DMConversation[]>(initial);
  const [isLoading, setIsLoading] = useState(false);

  const load = useCallback(async () => {
    if (!userId) return;
    setIsLoading(true);
    const cached = await getOfflineRecord<DMConversation[]>('dreamdm-conversations', userId);
    if (cached?.value) {
      setConversations(cached.value);
      setIsLoading(false);
    }

    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('conversations')
        .select(`
          id,
          updated_at,
          participant1_id,
          participant2_id,
          participant1:profiles!participant1_id(id, handle, display_name, avatar_url),
          participant2:profiles!participant2_id(id, handle, display_name, avatar_url)
        `)
        .or(`participant1_id.eq.${userId},participant2_id.eq.${userId}`)
        .order('updated_at', { ascending: false });

      if (error || !data) return;

      interface ConvRow {
        id: string;
        updated_at: string;
        participant1_id: string;
        participant2_id: string;
        participant1: DMConversation['otherUser'];
        participant2: DMConversation['otherUser'];
      }
      const formatted: DMConversation[] = (data as ConvRow[]).map((conv) => {
        const other = conv.participant1_id === userId ? conv.participant2 : conv.participant1;
        return {
          id: conv.id,
          otherUser: other,
          updatedAt: conv.updated_at,
        };
      });

      setConversations(formatted);
      await putOfflineRecord({ namespace: 'dreamdm-conversations', id: userId, value: formatted });
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (!userId) return;

    
    load();

    
    const supabase = createClient();
    const channel = supabase
      .channel(`conversations:${userId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'conversations',
          filter: `participant1_id=eq.${userId}`,
        },
        (_payload: RealtimePostgresInsertPayload<Record<string, unknown>>) => { load(); },
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'conversations',
          filter: `participant2_id=eq.${userId}`,
        },
        (_payload: RealtimePostgresInsertPayload<Record<string, unknown>>) => { load(); },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId, load]);

  return { conversations, isLoading, reload: load };
}
