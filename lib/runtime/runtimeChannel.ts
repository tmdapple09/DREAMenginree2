import { isJsonSerializable } from '@/lib/engin-runtime/EnginBaseState';

// Framework directives stay physically first when required.

// Runtime file: lib/runtime/runtimeChannel.ts.

/**
 * runtimeChannel — solo-parity adapter for shared runtimes.
 *
 * Pass 5 (Shared Runtime) requires that an Engin's UI does not know whether
 * it is running solo or co-op. Both modes use the same component tree, the
 * same event hooks, and the same persistence — only the channel adapter
 * differs.
 *
 *   - LocalChannel    → in-memory pub/sub. The default. No network.
 *   - RealtimeChannel → Injected Supabase Realtime-compatible broadcast wrapper.
 *                       Falls back to local mode when infrastructure does not
 *                       provide a configured client.
 *
 * Contract:
 *   const ch: RuntimeChannel<MyEvent> = createLocalChannel('engin:starmaker:1');
 *   const off = ch.subscribe((evt) => { ... });
 *   await ch.publish({ type: 'note', value: 42 });
 *   off();
 *   await ch.close();
 *
 * Solo == Co-op with one peer. That is the entire point.
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export type RuntimeChannelEvent = Record<string, unknown>;

export interface RuntimeChannel<
  T extends RuntimeChannelEvent = RuntimeChannelEvent,
> {
  /** Stable channel identity (e.g. `engin:starmaker:42`). */
  readonly id: string;
  /** Adapter kind — useful for diagnostics / instrumentation. */
  readonly kind: 'local' | 'realtime';
  /** Publish an event to all subscribers (including this client). */
  publish: (event: T) => Promise<void>;
  /** Subscribe to events. Returns an unsubscribe function. */
  subscribe: (listener: (event: T) => void) => () => void;
  /** Replay locally published events for recovery and offline reconciliation. */
  replay: () => Promise<ReadonlyArray<T>>;
  /** Tear down the channel and release any resources. */
  close: () => Promise<void>;
}

export interface RuntimeChannelOptions {
  /** Bound retained transport history so long-lived channels cannot leak memory. */
  replayLimit?: number;
}

/**
 * Realtime channel options — kept minimal so we can grow the surface
 * incrementally without breaking solo callers.
 */
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
  /** Inject the configured realtime client owned by the runtime infrastructure. */
  client?: RealtimeClient<T>;
  /** Broadcast event name. Defaults to `'message'`. */
  eventName?: string;
}

// Runtime functions, classes, handlers, and state transitions.

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

/**
 * In-memory channel. Synchronous fan-out, suitable for solo Engins and tests.
 */
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
      // Snapshot to be safe against listeners that unsubscribe mid-iteration.
      for (const fn of Array.from(listeners)) {
        try {
          fn(cloneEvent(transportEvent));
        } catch (err: unknown) {
          // A faulty listener must not break sibling listeners.
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

/**
 * Lightweight Supabase Realtime wrapper. Falls back to a LocalChannel when
 * the Supabase client is not configured or fails to load — Engins keep
 * working solo with no network and no surprise crashes.
 *
 * The Supabase client is loaded *dynamically* so this module remains
 * tree-shakeable for solo-only entry points.
 */
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
      // Mirror locally so the publisher receives its own event (parity with
      // LocalChannel and Supabase Realtime presence semantics).
      for (const fn of Array.from(listeners)) {
        try {
          fn(cloneEvent(transportEvent));
        } catch {
          /* swallowed above */
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

/**
 * Convenience factory — picks the right adapter for the given mode.
 * Solo Engins use this with `mode: 'solo'`; co-op Engins flip to `'shared'`.
 */
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

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
