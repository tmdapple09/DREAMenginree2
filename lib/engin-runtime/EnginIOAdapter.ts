/**
 * lib/engin-runtime/EnginIOAdapter.ts
 *
 * I/O persistence layer for Engin state.
 *
 * Provides two concrete adapters:
 *   - LocalStorageAdapter — client-side, zero-latency default
 *   - MemoryAdapter — test / SSR fallback
 *
 * All adapters share the EnginIOAdapter interface so the runtime stays
 * storage-agnostic. Rule-sets never call I/O directly.
 */

import type { EnginBaseState, JsonValue } from './EnginBaseState';
import type { PremiumRuntimeQuality } from './PremiumRuntimeQuality';

// ─── Adapter contract ─────────────────────────────────────────────────────────

export interface EnginIOAdapter {
  /**
   * Persist a serialisable value under a namespaced key.
   * Returns true on success, false on failure (never throws).
   */
  save<TValue extends JsonValue>(key: string, value: TValue): Promise<boolean>;

  /**
   * Retrieve a previously persisted value.
   * Returns null if the key is not found or if deserialization fails.
   */
  load<TValue extends JsonValue>(key: string): Promise<TValue | null>;

  /**
   * Remove a persisted value.
   * Returns true on success, false if the key did not exist.
   */
  remove(key: string): Promise<boolean>;
}

// ─── Key namespacing helper ───────────────────────────────────────────────────

/** Produce the localStorage / storage key for an engin + domain key. */
export function enginStorageKey(enginId: string, key: string): string {
  return `de:engin:${enginId}:${key}`;
}

// ─── LocalStorageAdapter ─────────────────────────────────────────────────────

/**
 * LocalStorageAdapter
 *
 * Client-only, synchronous storage surfaced as an async adapter.
 * Silently no-ops in SSR environments.
 */
export class LocalStorageAdapter implements EnginIOAdapter {
  private readonly prefix: string;

  constructor(enginId: string) {
    this.prefix = `de:engin:${enginId}:`;
  }

  private fullKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  async save<TValue extends JsonValue>(
    key: string,
    value: TValue,
  ): Promise<boolean> {
    try {
      if (typeof window === 'undefined') return false;
      window.localStorage.setItem(this.fullKey(key), JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  async load<TValue extends JsonValue>(key: string): Promise<TValue | null> {
    try {
      if (typeof window === 'undefined') return null;
      const raw = window.localStorage.getItem(this.fullKey(key));
      if (raw === null) return null;
      return JSON.parse(raw) as TValue;
    } catch {
      return null;
    }
  }

  async remove(key: string): Promise<boolean> {
    try {
      if (typeof window === 'undefined') return false;
      const fk = this.fullKey(key);
      const existed = window.localStorage.getItem(fk) !== null;
      window.localStorage.removeItem(fk);
      return existed;
    } catch {
      return false;
    }
  }
}

// ─── MemoryAdapter (test / SSR fallback) ─────────────────────────────────────

/**
 * MemoryAdapter
 *
 * In-process Map-backed adapter. Useful for tests and for server-side rendering
 * where localStorage is unavailable.
 */
export class MemoryAdapter implements EnginIOAdapter {
  private readonly store = new Map<string, string>();

  async save<TValue extends JsonValue>(
    key: string,
    value: TValue,
  ): Promise<boolean> {
    try {
      this.store.set(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  async load<TValue extends JsonValue>(key: string): Promise<TValue | null> {
    const raw = this.store.get(key);
    if (raw === undefined) return null;
    try {
      return JSON.parse(raw) as TValue;
    } catch {
      return null;
    }
  }

  async remove(key: string): Promise<boolean> {
    const existed = this.store.has(key);
    this.store.delete(key);
    return existed;
  }
}

// ─── Sync transport abstraction ──────────────────────────────────────────────

export type EnginSyncDirection = 'publish' | 'receive';

export interface EnginSyncFrame<TSnapshot extends EnginBaseState = EnginBaseState> {
  id: string;
  enginId: string;
  runtimeId: string;
  direction: EnginSyncDirection;
  schemaVersion: number;
  fingerprint: string;
  quality: PremiumRuntimeQuality;
  snapshot: TSnapshot;
  createdAt: string;
}

export interface EnginSyncTransport<TSnapshot extends EnginBaseState = EnginBaseState> {
  publish(frame: EnginSyncFrame<TSnapshot>): Promise<boolean>;
  subscribe(
    enginId: string,
    handler: (frame: EnginSyncFrame<TSnapshot>) => void,
  ): () => void;
}

export class MemorySyncTransport<TSnapshot extends EnginBaseState = EnginBaseState>
  implements EnginSyncTransport<TSnapshot>
{
  private readonly listeners = new Map<
    string,
    Set<(frame: EnginSyncFrame<TSnapshot>) => void>
  >();

  async publish(frame: EnginSyncFrame<TSnapshot>): Promise<boolean> {
    const listeners = this.listeners.get(frame.enginId);
    if (!listeners) return true;
    const receivedFrame: EnginSyncFrame<TSnapshot> = {
      ...frame,
      direction: 'receive',
    };
    for (const listener of Array.from(listeners)) {
      listener(receivedFrame);
    }
    return true;
  }

  subscribe(
    enginId: string,
    handler: (frame: EnginSyncFrame<TSnapshot>) => void,
  ): () => void {
    const listeners = this.listeners.get(enginId) ?? new Set();
    listeners.add(handler);
    this.listeners.set(enginId, listeners);
    return () => {
      const current = this.listeners.get(enginId);
      if (!current) return;
      current.delete(handler);
      if (current.size === 0) this.listeners.delete(enginId);
    };
  }
}
