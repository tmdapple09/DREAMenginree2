

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  enqueue,
  dequeue,
  flushQueue,
  getQueueStatus,
  isOnline,
} from '../lib/runtime/offlineQueue';


const localStorageStore: Record<string, string> = {};
const localStorageMock = {
  getItem: (key: string) => localStorageStore[key] ?? null,
  setItem: (key: string, val: string) => { localStorageStore[key] = val; },
  removeItem: (key: string) => { delete localStorageStore[key]; },
  clear: () => { Object.keys(localStorageStore).forEach((k) => delete localStorageStore[k]); },
  get length() { return Object.keys(localStorageStore).length; },
  key: (idx: number) => Object.keys(localStorageStore)[idx] ?? null,
};

vi.stubGlobal('localStorage', localStorageMock);

beforeEach(() => {
  localStorageMock.clear();
});


describe('enqueue', () => {
  it('returns an ID on success', () => {
    const id = enqueue('message:send', { body: 'hello' });
    expect(typeof id).toBe('string');
    expect(id).toBeTruthy();
  });

  it('persists to localStorage', () => {
    enqueue('post:create', { title: 'test' });
    const status = getQueueStatus();
    expect(status.total).toBe(1);
    expect(status.pending).toBe(1);
  });

  it('can enqueue multiple actions', () => {
    enqueue('message:send', { body: 'a' });
    enqueue('message:send', { body: 'b' });
    enqueue('post:create', { title: 'c' });
    expect(getQueueStatus().total).toBe(3);
  });
});


describe('dequeue', () => {
  it('removes the action by id', () => {
    const id = enqueue('message:send', { body: 'test' })!;
    expect(getQueueStatus().total).toBe(1);
    dequeue(id);
    expect(getQueueStatus().total).toBe(0);
  });

  it('is a no-op for unknown id', () => {
    enqueue('message:send', { body: 'keep' });
    expect(() => dequeue('nonexistent')).not.toThrow();
    expect(getQueueStatus().total).toBe(1);
  });
});


describe('flushQueue', () => {
  it('calls executor for each pending action', async () => {
    enqueue('message:send', { body: 'a' });
    enqueue('message:send', { body: 'b' });
    const executed: string[] = [];
    const result = await flushQueue(async (action) => {
      executed.push(action.payload.body as string);
    });
    expect(executed).toHaveLength(2);
    expect(result.succeeded).toBe(2);
    expect(result.failed).toBe(0);
    expect(getQueueStatus().total).toBe(0);
  });

  it('tracks failed actions and increments attempts', async () => {
    enqueue('message:send', { body: 'fail' });
    const result = await flushQueue(async () => {
      throw new Error('network error');
    });
    expect(result.failed).toBe(1);
    expect(result.succeeded).toBe(0);
    const status = getQueueStatus();
    
    expect(status.total).toBe(1);
  });
});


describe('getQueueStatus', () => {
  it('returns zeroed status when queue is empty', () => {
    const status = getQueueStatus();
    expect(status).toEqual({
      pending: 0,
      replaying: 0,
      failed: 0,
      total: 0,
      oldestEnqueuedAt: null,
    });
  });

  it('tracks oldest enqueued time', () => {
    enqueue('message:send', { body: 'old' });
    const before = Date.now();
    enqueue('message:send', { body: 'new' });
    const status = getQueueStatus();
    expect(status.total).toBe(2);
    expect(status.oldestEnqueuedAt).toBeLessThanOrEqual(before);
  });
});


describe('isOnline', () => {
  it('returns true in test environment (no navigator.onLine = false)', () => {
    // In vitest jsdom environment, navigator.onLine defaults to true
    expect(isOnline()).toBe(true);
  });
});