import { toErrorMessage } from '@/utils/index';

const STORAGE_KEY = 'de-offline-queue';
const MAX_QUEUE_SIZE = 500;
const MAX_RETRY_ATTEMPTS = 8;
const QUEUE_EVENT = 'dreamengin:offline-queue-changed';

export type OfflineActionType =
  | 'message:send'
  | 'message:read'
  | 'message:delete'
  | 'message:react'
  | 'conversation:update'
  | 'notification:read'
  | 'notification:delete'
  | 'notification:mark-all'
  | 'dream-window:reconfigure'
  | 'dream-layout:update'
  | 'dream-system:snapshot'
  | 'post:create'
  | 'post:edit'
  | 'post:delete'
  | 'content:publish'
  | 'profile:update'
  | 'settings:update'
  | 'marketplace:publish'
  | 'recording:upload'
  | 'connector:install'
  | 'ad:slot-create'
  | 'shop:publish'
  | 'marketplace:request'
  | 'ad:view'
  | 'http:mutation'
  | string;

export type OfflineActionStatus = 'pending' | 'replaying' | 'failed';

export interface OfflineReplayRequest {
  url: string;
  method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Record<string, string>;
  body?: unknown;
}

export interface OfflineAction {
  id: string;
  type: OfflineActionType;
  payload: Record<string, unknown>;
  enqueuedAt: number;
  updatedAt: number;
  attempts: number;
  status: OfflineActionStatus;
  lastError?: string;
  idempotencyKey: string;
  route?: string;
  nextAttemptAt?: number;
}

export interface QueueStatus {
  pending: number;
  replaying: number;
  failed: number;
  total: number;
  oldestEnqueuedAt: number | null;
  nextAttemptAt: number | null;
}

export interface EnqueueOptions {
  id?: string;
  idempotencyKey?: string;
  route?: string;
  dedupe?: boolean;
}

function storageAvailable(): boolean {
  return typeof localStorage !== 'undefined';
}

function emitQueueChanged(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(QUEUE_EVENT, { detail: getQueueStatus() }));
}

function generateId(prefix = 'offl'): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function defaultIdempotencyKey(type: OfflineActionType, payload: Record<string, unknown>): string {
  const explicit = payload.idempotencyKey;
  if (typeof explicit === 'string' && explicit.trim()) return explicit;
  return `${type}:${generateId('idem')}`;
}

function loadQueue(): OfflineAction[] {
  if (!storageAvailable()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as OfflineAction[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((action) => action && typeof action.id === 'string');
  } catch {
    return [];
  }
}

function saveQueue(queue: OfflineAction[]): void {
  if (!storageAvailable()) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(queue));
    emitQueueChanged();
  } catch (err: unknown) {
    console.warn('[offlineQueue] Failed to persist queue', err);
  }
}

function nextBackoffMs(attempts: number): number {
  const base = 1000 * 2 ** Math.min(8, attempts);
  const jitter = Math.floor(Math.random() * 400);
  return Math.min(5 * 60_000, base + jitter);
}

export function enqueue(
  type: OfflineActionType,
  payload: Record<string, unknown>,
  options: EnqueueOptions = {},
): string | null {
  const queue = loadQueue();
  const idempotencyKey = options.idempotencyKey ?? defaultIdempotencyKey(type, payload);
  const now = Date.now();

  if (options.dedupe !== false) {
    const existing = queue.find((action) => action.idempotencyKey === idempotencyKey && action.status !== 'failed');
    if (existing) {
      existing.payload = { ...existing.payload, ...payload };
      existing.updatedAt = now;
      existing.route = options.route ?? existing.route;
      saveQueue(queue);
      return existing.id;
    }
  }

  while (queue.length >= MAX_QUEUE_SIZE) {
    const evictIndex = queue.findIndex((action) => action.status === 'failed');
    if (evictIndex >= 0) {
      queue.splice(evictIndex, 1);
      continue;
    }
    console.warn('[offlineQueue] Queue full, action dropped', { type });
    return null;
  }

  const action: OfflineAction = {
    id: options.id ?? generateId(),
    type,
    payload,
    enqueuedAt: now,
    updatedAt: now,
    attempts: 0,
    status: 'pending',
    idempotencyKey,
    route: options.route,
  };

  queue.push(action);
  saveQueue(queue);
  return action.id;
}

export function enqueueFetchMutation(type: OfflineActionType, request: OfflineReplayRequest, payload: Record<string, unknown> = {}, options: EnqueueOptions = {}): string | null {
  return enqueue(type, { ...payload, request }, {
    ...options,
    idempotencyKey: options.idempotencyKey ?? `${type}:${request.method ?? 'POST'}:${request.url}:${JSON.stringify(request.body ?? {})}`,
    route: options.route ?? request.url,
  });
}

export function dequeue(id: string): void {
  saveQueue(loadQueue().filter((action) => action.id !== id));
}

export function listQueue(): OfflineAction[] {
  return loadQueue();
}

export function clearQueue(): void {
  saveQueue([]);
}

export function getQueueStatus(): QueueStatus {
  const queue = loadQueue();
  const oldest = queue.reduce<number | null>((min, action) => {
    if (min === null) return action.enqueuedAt;
    return Math.min(min, action.enqueuedAt);
  }, null);
  const next = queue.reduce<number | null>((min, action) => {
    if (!action.nextAttemptAt || action.status === 'failed') return min;
    if (min === null) return action.nextAttemptAt;
    return Math.min(min, action.nextAttemptAt);
  }, null);

  return {
    pending: queue.filter((action) => action.status === 'pending').length,
    replaying: queue.filter((action) => action.status === 'replaying').length,
    failed: queue.filter((action) => action.status === 'failed').length,
    total: queue.length,
    oldestEnqueuedAt: oldest,
    nextAttemptAt: next,
  };
}

export function subscribeQueueStatus(callback: (status: QueueStatus) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const handler = () => callback(getQueueStatus());
  window.addEventListener(QUEUE_EVENT, handler);
  callback(getQueueStatus());
  return () => window.removeEventListener(QUEUE_EVENT, handler);
}

export async function replayFetchMutation(action: OfflineAction): Promise<void> {
  const request = action.payload.request as Partial<OfflineReplayRequest> | undefined;
  if (!request || typeof request.url !== 'string') {
    throw new Error(`Offline action ${action.type} does not contain a replayable request.`);
  }

  const response = await fetch(request.url, {
    method: request.method ?? 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Idempotency-Key': action.idempotencyKey,
      ...(request.headers ?? {}),
    },
    body: request.body === undefined ? undefined : JSON.stringify(request.body),
  });

  if (!response.ok) {
    throw new Error(`Replay failed for ${action.type}: ${response.status}`);
  }
}

export async function flushQueue(
  executor: (action: OfflineAction) => Promise<void>,
): Promise<{ succeeded: number; failed: number; skipped: number }> {
  if (!isOnline()) {
    return { succeeded: 0, failed: 0, skipped: loadQueue().length };
  }

  const queue = loadQueue();
  const now = Date.now();
  const snapshot = [...queue];
  let succeeded = 0;
  let failed = 0;
  let skipped = 0;

  for (const action of snapshot) {
    const liveIndex = queue.findIndex((entry) => entry.id === action.id);
    if (liveIndex < 0) {
      skipped += 1;
      continue;
    }

    const live = queue[liveIndex];
    if (live.status === 'failed' || (live.nextAttemptAt && live.nextAttemptAt > now)) {
      skipped += 1;
      continue;
    }

    live.status = 'replaying';
    live.updatedAt = Date.now();
    saveQueue(queue);

    try {
      await executor(live);
      queue.splice(liveIndex, 1);
      succeeded += 1;
      saveQueue(queue);
    } catch (err: unknown) {
      const nextAttempts = live.attempts + 1;
      live.attempts = nextAttempts;
      live.updatedAt = Date.now();
      live.lastError = toErrorMessage(err);
      if (nextAttempts >= MAX_RETRY_ATTEMPTS) {
        live.status = 'failed';
        live.nextAttemptAt = undefined;
      } else {
        live.status = 'pending';
        live.nextAttemptAt = Date.now() + nextBackoffMs(nextAttempts);
      }
      failed += 1;
      saveQueue(queue);
    }
  }

  return { succeeded, failed, skipped };
}

export function isOnline(): boolean {
  if (typeof navigator === 'undefined') return true;
  return navigator.onLine !== false;
}

export function listenOnline(executor: (action: OfflineAction) => Promise<void>): () => void {
  if (typeof window === 'undefined') return () => {};

  const replay = () => {
    void flushQueue(executor);
  };

  window.addEventListener('online', replay);
  if (isOnline()) replay();

  return () => window.removeEventListener('online', replay);
}
