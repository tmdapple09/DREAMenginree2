import type { RealtimeChannel, SupabaseClient } from '@supabase/supabase-js';






export interface DreamRPulse {
  
  userId: string;
  
  handle: string;
  
  kind: 'reaction' | 'voice-ping' | 'vibe-check' | 'now-playing' | 'achievement';
  
  payload: Record<string, unknown>;
  
  sentAt: string;
}


export interface DreamRSubscribeOptions {
  
  client: SupabaseClient;
  
  roomId: string;
  
  onPulse: (pulse: DreamRPulse) => void;
  
  onPresence?: (state: PresenceState[]) => void;
}


export function subscribeDreamR({
  client,
  roomId,
  onPulse,
  onPresence,
}: DreamRSubscribeOptions): DreamRHandle {
  const channelName = `de:dreamr:${roomId}`;

  const channel = client.channel(channelName, {
    config: { broadcast: { self: false } },
  });

  
  channel.on('broadcast', { event: 'pulse' }, ({ payload }) => {
    onPulse(payload as DreamRPulse);
  });

  
  if (onPresence) {
    channel.on('presence', { event: 'sync' }, () => {
      const raw = channel.presenceState<PresencePayload>();
      const states: PresenceState[] = Object.entries(raw).map(([key, entries]) => ({
        key,
        userId: entries[0]?.userId ?? key,
        handle: entries[0]?.handle ?? '',
        status: (entries[0]?.status as PresenceStatus) ?? 'online',
        lastSeen: entries[0]?.lastSeen ?? new Date().toISOString(),
      }));
      onPresence(states);
    });
  }

  channel.subscribe();

  return {
    channel,
    sendPulse: (pulse: DreamRPulse) => {
      channel.send({ type: 'broadcast', event: 'pulse', payload: pulse });
    },
    unsubscribe: () => {
      client.removeChannel(channel);
    },
  };
}

export interface DreamRHandle {
  channel: RealtimeChannel;
  sendPulse: (pulse: DreamRPulse) => void;
  unsubscribe: () => void;
}




export interface LiveMessage {
  id: string;
  conversationId: string;
  senderId: string;
  body: string;
  
  attachments?: string[];
  sentAt: string;
}

export interface LiveMessageSubscribeOptions {
  client: SupabaseClient;
  conversationId: string;
  onMessage: (msg: LiveMessage) => void;
  onTyping?: (userId: string, isTyping: boolean) => void;
  onPresence?: (state: PresenceState[]) => void;
}


export function subscribeLiveMessages({
  client,
  conversationId,
  onMessage,
  onTyping,
  onPresence,
}: LiveMessageSubscribeOptions): LiveMessageHandle {
  const channelName = `de:dm:${conversationId}`;

  const channel = client.channel(channelName, {
    config: { broadcast: { self: false }, presence: { key: '' } },
  });

  channel.on('broadcast', { event: 'message' }, ({ payload }) => {
    onMessage(payload as LiveMessage);
  });

  if (onTyping) {
    channel.on('broadcast', { event: 'typing' }, ({ payload }) => {
      const { userId, isTyping } = payload as { userId: string; isTyping: boolean };
      onTyping(userId, isTyping);
    });
  }

  if (onPresence) {
    channel.on('presence', { event: 'sync' }, () => {
      const raw = channel.presenceState<PresencePayload>();
      const states: PresenceState[] = Object.entries(raw).map(([key, entries]) => ({
        key,
        userId: entries[0]?.userId ?? key,
        handle: entries[0]?.handle ?? '',
        status: (entries[0]?.status as PresenceStatus) ?? 'online',
        lastSeen: entries[0]?.lastSeen ?? new Date().toISOString(),
      }));
      onPresence(states);
    });
  }

  channel.subscribe();

  return {
    channel,
    send: (msg: LiveMessage) => {
      channel.send({ type: 'broadcast', event: 'message', payload: msg });
    },
    setTyping: (userId: string, isTyping: boolean) => {
      channel.send({ type: 'broadcast', event: 'typing', payload: { userId, isTyping } });
    },
    unsubscribe: () => {
      client.removeChannel(channel);
    },
  };
}

export interface LiveMessageHandle {
  channel: RealtimeChannel;
  send: (msg: LiveMessage) => void;
  setTyping: (userId: string, isTyping: boolean) => void;
  unsubscribe: () => void;
}



export type PresenceStatus = 'online' | 'away' | 'typing' | 'offline';

export interface PresencePayload {
  userId: string;
  handle: string;
  status: PresenceStatus;
  lastSeen: string;
}

export interface PresenceState {
  key: string;
  userId: string;
  handle: string;
  status: PresenceStatus;
  lastSeen: string;
}




export function trackPresence(
  client: SupabaseClient,
  channelName: string,
  initialPayload: PresencePayload,
): PresenceTracker {
  const channel = client.channel(`de:presence:${channelName}`, {
    config: { presence: { key: initialPayload.userId } },
  });

  channel.subscribe(async (status: string) => {
    if (status === 'SUBSCRIBED') {
      await channel.track(initialPayload);
    }
  });

  return {
    channel,
    updatePresence: async (payload: Partial<PresencePayload>) => {
      await channel.track({ ...initialPayload, ...payload });
    },
    untrack: async () => {
      await channel.untrack();
      client.removeChannel(channel);
    },
  };
}

export interface PresenceTracker {
  channel: RealtimeChannel;
  updatePresence: (payload: Partial<PresencePayload>) => Promise<void>;
  untrack: () => Promise<void>;
}
