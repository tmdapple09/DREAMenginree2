import {
    parseTelemetryEvent,
    type TelemetryEvent,
} from './events';

/**
 * lib/enginpipe/telemetry/client.ts
 *
 * Thin, artifact-agnostic wrapper that writes generic Engin Pipe
 * telemetry events into the existing Supabase `gameengin_telemetry`
 * table. The table schema (cartridge_id, event_type, payload, ...)
 * already matches the generic event shape, so no migration is needed
 * to start sharing it across Engins.
 *
 * Failure mode: the client never throws. Errors are returned in the
 * result object so callers can decide whether to log or retry.
 */

/** Minimal Supabase client shape we depend on. */
export interface TelemetrySupabaseClient {
  from(table: string): {
    insert(rows: unknown): Promise<{ error: unknown | null }>;
  };
}

export interface TelemetryClientOptions {
  /** Supabase client (browser or service role). */
  supabase: TelemetrySupabaseClient;
  /**
   * Override the destination table. Defaults to `gameengin_telemetry`,
   * which is the existing hypertable created by the GameEngin migration
   * and is the shared substrate for all Engins.
   */
  table?: string;
  /** Max records held before an immediate batch flush. */
  maxBatchSize?: number;
  /** Best-effort flush cadence for low-volume telemetry. */
  flushIntervalMs?: number;
  /** Register page/process lifecycle hooks that force a final best-effort flush. */
  autoFlushOnLifecycle?: boolean;
}

export interface TelemetryRecordResult {
  ok: boolean;
  error?: unknown;
}

const DEFAULT_TABLE = 'gameengin_telemetry';
const DEFAULT_MAX_BATCH_SIZE = 25;
const DEFAULT_FLUSH_INTERVAL_MS = 2_000;
const MAX_RETAINED_BATCH_MULTIPLIER = 4;

type LifecycleTarget = {
  addEventListener?: (event: string, cb: () => void) => void;
  removeEventListener?: (event: string, cb: () => void) => void;
};

type ProcessLifecycleTarget = {
  once?: (event: string, cb: () => void) => void;
  off?: (event: string, cb: () => void) => void;
};

function getBrowserLifecycleTargets(): LifecycleTarget[] {
  const targets: LifecycleTarget[] = [];
  if (typeof window !== 'undefined') targets.push(window);
  if (typeof document !== 'undefined') targets.push(document);
  return targets;
}

function getProcessLifecycleTarget(): ProcessLifecycleTarget | null {
  if (typeof process === 'undefined') return null;
  return process;
}

/**
 * Create a telemetry client bound to a Supabase instance.
 */
export function createTelemetryClient(opts: TelemetryClientOptions ){
  const table = opts.table ?? DEFAULT_TABLE;
  const maxBatchSize = Math.max(1, opts.maxBatchSize ?? DEFAULT_MAX_BATCH_SIZE);
  const flushIntervalMs = Math.max(100, opts.flushIntervalMs ?? DEFAULT_FLUSH_INTERVAL_MS);
  const retainedLimit = maxBatchSize * MAX_RETAINED_BATCH_MULTIPLIER;
  let queue: Record<string, unknown>[] = [];
  let flushTimer: ReturnType<typeof setTimeout> | null = null;
  let inflight: Promise<TelemetryRecordResult> | null = null;
  const lifecycleDisposers: Array<() => void> = [];

  const scheduleFlush = () => {
    if (flushTimer !== null || queue.length === 0) return;
    flushTimer = setTimeout(() => {
      flushTimer = null;
      void flush();
    }, flushIntervalMs);
  };

  const retainFailedBatch = (batch: Record<string, unknown>[]) => {
    queue = batch.concat(queue);
    if (queue.length > retainedLimit) queue = queue.slice(queue.length - retainedLimit);
  };

  const flush = async (): Promise<TelemetryRecordResult> => {
    if (inflight) return inflight;
    if (flushTimer !== null) {
      clearTimeout(flushTimer);
      flushTimer = null;
    }
    if (queue.length === 0) return { ok: true };

    const batch = queue;
    queue = [];
    inflight = opts.supabase
      .from(table)
      .insert(batch)
      .then(({ error }) => {
        if (error) {
          retainFailedBatch(batch);
          return { ok: false, error };
        }
        return { ok: true };
      })
      .catch((error: unknown) => {
        retainFailedBatch(batch);
        return { ok: false, error };
      })
      .finally(() => {
        inflight = null;
        scheduleFlush();
      });

    return inflight;
  };

  const flushNow = (): void => {
    void flush();
  };

  const installLifecycleFlush = () => {
    for (const target of getBrowserLifecycleTargets()) {
      for (const event of ['pagehide', 'visibilitychange', 'beforeunload']) {
        target.addEventListener?.(event, flushNow);
        lifecycleDisposers.push(() => target.removeEventListener?.(event, flushNow));
      }
    }

    const processTarget = getProcessLifecycleTarget();
    if (processTarget?.once) {
      for (const event of ['beforeExit', 'SIGINT', 'SIGTERM']) {
        processTarget.once(event, flushNow);
        lifecycleDisposers.push(() => processTarget.off?.(event, flushNow));
      }
    }
  };

  if (opts.autoFlushOnLifecycle ?? true) installLifecycleFlush();

  return {
    /**
     * Record a single Engin telemetry event. The engine batches rows behind
     * this intent seam so Engins do not own persistence transport behavior.
     */
    async record(event: TelemetryEvent): Promise<TelemetryRecordResult> {
      let validated: TelemetryEvent;
      try {
        validated = parseTelemetryEvent(event);
      } catch (error: unknown) {
        return { ok: false, error };
      }

      const row: Record<string, unknown> = {
        cartridge_id: validated.artifact_id,
        event_type: validated.event_type,
        payload: validated.payload,
      };
      if (validated.user_id !== undefined) row.player_id = validated.user_id;
      if (validated.client_timestamp !== undefined) {
        row.client_timestamp = validated.client_timestamp;
      }

      queue.push(row);
      if (queue.length >= maxBatchSize) return flush();
      scheduleFlush();
      return { ok: true };
    },
    flush,
    dispose(): void {
      if (flushTimer !== null) {
        clearTimeout(flushTimer);
        flushTimer = null;
      }
      for (const dispose of lifecycleDisposers.splice(0)) dispose();
      void flush();
    },
    get pendingCount(): number { return queue.length; },
  };
}

export type TelemetryClient = ReturnType<typeof createTelemetryClient>;
