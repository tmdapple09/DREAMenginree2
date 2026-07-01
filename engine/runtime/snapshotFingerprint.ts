import type { TelemetrySnapshot } from '@/engine/observability/collector';

















export interface FingerprintCacheEntry<T> {
  fingerprint: string;
  value: T;
  createdAt: number;
}

export interface FingerprintCache<T> {
  
  set(fingerprint: string, value: T): void;
  
  get(fingerprint: string): T | undefined;
  
  has(fingerprint: string): boolean;
  
  clear(): void;
  
  readonly size: number;
}




export function fingerprintSnapshot(snapshot: TelemetrySnapshot): string {
  const errorMessages = snapshot.logs
    .filter((l) => l.level === 'error')
    .slice(0, 5)
    .map((l) => l.message)
    .join('|');

  
  let hash = 5381;
  for (let i = 0; i < errorMessages.length; i++) {
    hash = ((hash << 5) + hash) ^ errorMessages.charCodeAt(i);
    hash = hash >>> 0; 
  }

  return `${snapshot.logs.length}:${snapshot.metrics.length}:${snapshot.traces.length}:${
    snapshot.logs.filter((l) => l.level === 'error').length
  }:${hash.toString(16)}`;
}


export function snapshotsAreEquivalent(a: string, b: string): boolean {
  return a === b;
}


export function createFingerprintCache<T>(maxSize = 20): FingerprintCache<T> {
  const store = new Map<string, FingerprintCacheEntry<T>>();

  return {
    set(fingerprint: string, value: T): void {
      if (store.has(fingerprint)) {
        
        store.set(fingerprint, { fingerprint, value, createdAt: Date.now() });
        return;
      }
      if (store.size >= maxSize) {
        
        let oldestKey: string | null = null;
        let oldestTime = Infinity;
        for (const [key, entry] of store) {
          if (entry.createdAt < oldestTime) {
            oldestTime = entry.createdAt;
            oldestKey = key;
          }
        }
        if (oldestKey) store.delete(oldestKey);
      }
      store.set(fingerprint, { fingerprint, value, createdAt: Date.now() });
    },

    get(fingerprint: string): T | undefined {
      return store.get(fingerprint)?.value;
    },

    has(fingerprint: string): boolean {
      return store.has(fingerprint);
    },

    clear(): void {
      store.clear();
    },

    get size(): number {
      return store.size;
    },
  };
}






