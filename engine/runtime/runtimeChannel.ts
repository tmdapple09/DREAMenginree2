import { isJsonSerializable } from '@/engine/engin-runtime/EnginBaseState';

















export type RuntimeChannelEvent = Record<string, unknown>;

export interface RuntimeChannel<
  T extends RuntimeChannelEvent = RuntimeChannelEvent,
> {
  
  readonly id: string;
  
  readonly kind: 'local' | 'realtime';
  
  publish: (event: T) => Promise<void>;
  
  subscribe: (listener: (event: T) => void) => () => void;
  
  replay: () => Promise<ReadonlyArray<T>>;
  
  close: () => Promise<void>;
}

export interface RuntimeChannelOptions {
  
  replayLimit?: number;
}


export interface RealtimeChannel<T extends RuntimeChannelEvent> {
  on: (
    type: 'broadcast',
    opts: { event: string },
    callback: (payload: { payload: T }) => void,
  ) => RealtimeChannel<T>;
  send: (message: {
    type: 'broadcast';
    event: string;
    payload: T;
  }) => Promise<unknown>;
  subscribe: (callback?: (status: string) => void) => unknown;
  unsubscribe: () => Promise<unknown>;
}

export interface RealtimeClient<T extends RuntimeChannelEvent> {
  channel: (name: string) => RealtimeChannel<T>;
}

export interface RealtimeChannelOptions<
  T extends RuntimeChannelEvent = RuntimeChannelEvent,
> extends RuntimeChannelOptions {
  
  client?: RealtimeClient<T>;
  
  eventName?: string;
}



function getReplayLimit(options: RuntimeChannelOptions): number {
  const replayLimit = options.replayLimit ?? 100;
  if (!Number.isInteger(replayLimit) || replayLimit < 0)
    throw new Error(
      'Runtime channel replayLimit must be a non-negative integer.',
    );
  return replayLimit;
}

function cloneEvent<T extends RuntimeChannelEvent>(event: T): T {
  if (!isJsonSerializable(event)) throw new Error('Runtime channel events must be JSON-serializable.');
  try {
    return JSON.parse(JSON.stringify(event)) as T;
  } catch {
    throw new Error('Runtime channel events must be JSON-serializable.');
  }
}

function appendReplayEvent<T extends RuntimeChannelEvent>(
  log: T[],
  event: T,
  replayLimit: number,
): T {
  const clone = cloneEvent(event);
  if (replayLimit === 0) return clone;
  log.push(cloneEvent(clone));
  if (log.length > replayLimit) log.splice(0, log.length - replayLimit);
  return clone;
}


export function createLocalChannel<
  T extends RuntimeChannelEvent = RuntimeChannelEvent,
>(id: string, options: RuntimeChannelOptions = {}): RuntimeChannel<T> {
  const replayLimit = getReplayLimit(options);
  const listeners = new Set<(event: T) => void>();
  const replayLog: T[] = [];
  let closed = false;

  return {
    id,
    kind: 'local',
    async publish(event) {
      if (closed) return;
      const transportEvent = appendReplayEvent(replayLog, event, replayLimit);
      
      for (const fn of Array.from(listeners)) {
        try {
          fn(cloneEvent(transportEvent));
        } catch (err: unknown) {
          
          if (typeof console !== 'undefined') {
            console.error('[runtimeChannel] listener threw', err);
          }
        }
      }
    },
    subscribe(listener) {
      if (closed) return () => undefined;
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    async replay() {
      return replayLog.map(cloneEvent);
    },
    async close() {
      closed = true;
      listeners.clear();
    },
  };
}


export async function createRealtimeChannel<
  T extends RuntimeChannelEvent = RuntimeChannelEvent,
>(
  id: string,
  options: RealtimeChannelOptions<T> = {},
): Promise<RuntimeChannel<T>> {
  const eventName = options.eventName ?? 'message';
  const replayLimit = getReplayLimit(options);
  const supabase = options.client;

  if (!supabase) return createLocalChannel<T>(id, options);

  const listeners = new Set<(event: T) => void>();
  const replayLog: T[] = [];
  let closed = false;
  const ch = supabase.channel(id);
  ch.on('broadcast', { event: eventName }, ({ payload }) => {
    if (closed) return;
    const transportEvent = appendReplayEvent(replayLog, payload, replayLimit);
    for (const fn of Array.from(listeners)) {
      try {
        fn(transportEvent);
      } catch (err: unknown) {
        if (typeof console !== 'undefined') {
          console.error('[runtimeChannel] realtime listener threw', err);
        }
      }
    }
  });
  ch.subscribe();

  return {
    id,
    kind: 'realtime',
    async publish(event) {
      if (closed) return;
      const transportEvent = appendReplayEvent(replayLog, event, replayLimit);
      
      
      for (const fn of Array.from(listeners)) {
        try {
          fn(cloneEvent(transportEvent));
        } catch {
          
        }
      }
      await ch.send({
        type: 'broadcast',
        event: eventName,
        payload: transportEvent,
      });
    },
    subscribe(listener) {
      if (closed) return () => undefined;
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    async replay() {
      return replayLog.map(cloneEvent);
    },
    async close() {
      closed = true;
      listeners.clear();
      await ch.unsubscribe();
    },
  };
}


export async function createRuntimeChannel<
  T extends RuntimeChannelEvent = RuntimeChannelEvent,
>(
  id: string,
  mode: 'solo' | 'shared',
  options: RealtimeChannelOptions<T> = {},
): Promise<RuntimeChannel<T>> {
  if (mode === 'solo') return createLocalChannel<T>(id);
  return createRealtimeChannel<T>(id, options);
}






