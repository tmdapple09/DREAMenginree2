import type { EnginBaseState, JsonValue } from './EnginBaseState';
import type { PremiumRuntimeQuality } from './PremiumRuntimeQuality';

















export interface EnginIOAdapter {
  
  save<TValue extends JsonValue>(key: string, value: TValue): Promise<boolean>;

  
  load<TValue extends JsonValue>(key: string): Promise<TValue | null>;

  
  remove(key: string): Promise<boolean>;
}

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




export function enginStorageKey(enginId: string, key: string): string {
  return `de:engin:${enginId}:${key}`;
}


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






