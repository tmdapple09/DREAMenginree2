

export type LiveKitConnectionState =
  | 'disconnected'
  | 'connecting'
  | 'connected'
  | 'reconnecting'
  | 'failed';

export interface LiveKitParticipant {
  identity: string;
  displayName: string | null;
  isLocal: boolean;
  isSpeaking: boolean;
  audioEnabled: boolean;
  videoEnabled: boolean;
  joinedAt: number;
}

export interface LiveKitRoomInfo {
  roomName: string;
  participantCount: number;
  participants: LiveKitParticipant[];
  connectionState: LiveKitConnectionState;
}

export interface LiveKitTokenResponse {
  token: string;
  wsUrl: string;
  roomName: string;
  identity: string;
}

export class LiveKitError extends Error {
  constructor(
    message: string,
    public readonly code:
      | 'CREDENTIALS_MISSING'
      | 'TOKEN_FETCH_FAILED'
      | 'ROOM_NOT_FOUND'
      | 'CONNECTION_FAILED'
      | 'UNAUTHORIZED'
  ) {
    super(message);
    this.name = 'LiveKitError';
  }
}


export async function fetchLiveKitToken(
  roomName: string,
  identity: string
): Promise<LiveKitTokenResponse> {
  const res = await fetch('/api/social/livekit/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ roomName, identity }),
  });

  if (res.status === 401) {
    throw new LiveKitError('Not authenticated', 'UNAUTHORIZED');
  }
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new LiveKitError(
      body?.error ?? `Token fetch failed (${res.status})`,
      'TOKEN_FETCH_FAILED'
    );
  }

  return res.json() as Promise<LiveKitTokenResponse>;
}


export async function fetchRoomInfo(
  roomName: string
): Promise<LiveKitRoomInfo> {
  const res = await fetch(
    `/api/social/livekit/room?roomName=${encodeURIComponent(roomName)}`
  );

  if (res.status === 404) {
    return {
      roomName,
      participantCount: 0,
      participants: [],
      connectionState: 'disconnected',
    };
  }
  if (!res.ok) {
    throw new LiveKitError(
      `Room info fetch failed (${res.status})`,
      'ROOM_NOT_FOUND'
    );
  }

  return res.json() as Promise<LiveKitRoomInfo>;
}

type RoomEventType =
  | 'participantJoined'
  | 'participantLeft'
  | 'connectionStateChanged'
  | 'activeSpeakersChanged';

type RoomEventListener<T = unknown> = (payload: T) => void;


export class LiveKitRoomManager {
  private state: LiveKitRoomInfo;
  private listeners = new Map<RoomEventType, Set<RoomEventListener>>();
  private pollTimer: ReturnType<typeof setInterval> | null = null;

  constructor(roomName: string) {
    this.state = {
      roomName,
      participantCount: 0,
      participants: [],
      connectionState: 'disconnected',
    };
  }

  on<T = unknown>(event: RoomEventType, listener: RoomEventListener<T>): this {
    if (!this.listeners.has(event)) this.listeners.set(event, new Set());
    this.listeners.get(event)!.add(listener as RoomEventListener);
    return this;
  }

  off<T = unknown>(event: RoomEventType, listener: RoomEventListener<T>): this {
    this.listeners.get(event)?.delete(listener as RoomEventListener);
    return this;
  }

  private emit<T = unknown>(event: RoomEventType, payload: T): void {
    this.listeners.get(event)?.forEach((cb) => cb(payload));
  }

  async connect(identity: string): Promise<void> {
    this.setConnectionState('connecting');
    try {
      const tokenRes = await fetchLiveKitToken(this.state.roomName, identity);
      
      
      void tokenRes;
      await this.refresh();
      this.setConnectionState('connected');
      this.startPolling();
    } catch (err: unknown) {
      this.setConnectionState('failed');
      throw err;
    }
  }

  disconnect(): void {
    this.stopPolling();
    this.setConnectionState('disconnected');
    this.state = { ...this.state, participants: [], participantCount: 0 };
  }

  getState(): Readonly<LiveKitRoomInfo> {
    return this.state;
  }

  private setConnectionState(next: LiveKitConnectionState): void {
    const prev = this.state.connectionState;
    if (prev === next) return;
    this.state = { ...this.state, connectionState: next };
    this.emit('connectionStateChanged', { prev, next });
  }

  private async refresh(): Promise<void> {
    try {
      const info = await fetchRoomInfo(this.state.roomName);
      const prevParticipants = new Set(
        this.state.participants.map((p) => p.identity)
      );
      const nextParticipants = new Set(
        info.participants.map((p) => p.identity)
      );

      info.participants
        .filter((p) => !prevParticipants.has(p.identity))
        .forEach((p) => this.emit('participantJoined', p));

      this.state.participants
        .filter((p) => !nextParticipants.has(p.identity))
        .forEach((p) => this.emit('participantLeft', p));

      this.state = {
        ...this.state,
        participants: info.participants,
        participantCount: info.participantCount,
      };
    } catch {
      
    }
  }

  private startPolling(intervalMs = 5_000): void {
    this.stopPolling();
    this.pollTimer = setInterval(() => void this.refresh(), intervalMs);
  }

  private stopPolling(): void {
    if (this.pollTimer !== null) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
}


export async function generateServerToken(
  roomName: string,
  participantIdentity: string
): Promise<string> {
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;

  if (!apiKey || !apiSecret) {
    throw new LiveKitError(
      'LIVEKIT_API_KEY and LIVEKIT_API_SECRET must be set',
      'CREDENTIALS_MISSING'
    );
  }

  
  
  
  
  
  
  
  const backendUrl = process.env.BACKEND_URL ?? 'http://localhost:4000';
  const res = await fetch(`${backendUrl}/api/livekit/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ roomName, identity: participantIdentity }),
  });

  if (!res.ok) {
    throw new LiveKitError(
      `Backend token generation failed (${res.status})`,
      'TOKEN_FETCH_FAILED'
    );
  }

  const data = (await res.json()) as { token: string };
  return data.token;
}
