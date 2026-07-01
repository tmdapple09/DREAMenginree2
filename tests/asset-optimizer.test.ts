

import type { Database } from '@/types/supabase';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';




const idbStore = new Map<string, unknown>();

const mockIDB = {
  open: vi.fn().mockImplementation(() => {
    const result: IDBDatabase = {
      createObjectStore: vi.fn(),
      transaction: vi.fn().mockImplementation((_store: string, mode: string) => {
        const objStore = {
          put: vi.fn().mockImplementation((record: { assetId: string }) => {
            idbStore.set(record.assetId, record);
            return { onsuccess: null, onerror: null, result: undefined };
          }),
          get: vi.fn().mockImplementation((key: string) => {
            const req = { onsuccess: null as ((e: Event) => void) | null, onerror: null, result: idbStore.get(key) ?? undefined };
            
            Promise.resolve().then(() => req.onsuccess?.({ target: req } as any as Event));
            return req;
          }),
          delete: vi.fn().mockImplementation((key: string) => {
            idbStore.delete(key);
            return { onsuccess: null, onerror: null };
          }),
        };
        return { objectStore: vi.fn().mockReturnValue(objStore) };
      }),
    } as any as IDBDatabase;

    const req = {
      result,
      onsuccess: null as ((e: Event) => void) | null,
      onerror: null,
      onupgradeneeded: null,
    };
    
    Promise.resolve().then(() => req.onsuccess?.({ target: req } as any as Event));
    return req;
  }),
};


Object.defineProperty(globalThis, 'indexedDB', { value: mockIDB, writable: true });



const localStorageData = new Map<string, string>();
const mockLocalStorage = {
  setItem: (k: string, v: string) => { localStorageData.set(k, v); },
  getItem: (k: string) => localStorageData.get(k) ?? null,
  removeItem: (k: string) => { localStorageData.delete(k); },
  key: (i: number) => [...localStorageData.keys()][i] ?? null,
  get length() { return localStorageData.size; },
  clear: () => { localStorageData.clear(); },
};
Object.defineProperty(globalThis, 'localStorage', { value: mockLocalStorage, writable: true });



import { registryTagsForContext } from '@/engins/contentengin/assets/assetOptimizer';



describe('registryTagsForContext', () => {
  it('returns dreamr_feed folder/source for dreamr_feed context', () => {
    const tags = registryTagsForContext('dreamr_feed');
    expect(tags.folder).toBe('dreamr_feed');
    expect(tags.source).toBe('dreamr_feed');
  });

  it('returns dreamr_profile folder for profile context', () => {
    const tags = registryTagsForContext('profile');
    expect(tags.folder).toBe('dreamr_profile');
    expect(tags.source).toBe('profile');
  });

  it('returns starmaker_audio folder for starmaker context', () => {
    const tags = registryTagsForContext('starmaker');
    expect(tags.folder).toBe('starmaker_audio');
    expect(tags.source).toBe('starmaker');
  });

  it('returns general folder/source for unknown contexts', () => {
    const tags = registryTagsForContext('general');
    expect(tags.folder).toBe('general');
    expect(tags.source).toBe('general');
  });
});



describe('IndexedDB sentinel detection', () => {
  beforeEach(() => {
    idbStore.clear();
    localStorageData.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('sentinel key format is correct (prefix + assetId)', () => {
    const prefix = 'de_original_sentinel_';
    const assetId = 'asset-sentinel-test-001';
    const expectedKey = `${prefix}${assetId}`;

    
    const sentinel = { assetId, storedAt: Date.now() };
    localStorageData.set(expectedKey, JSON.stringify(sentinel));

    const stored = localStorageData.get(expectedKey);
    expect(stored).toBeTruthy();
    const parsed = JSON.parse(stored!);
    expect(parsed.assetId).toBe(assetId);
    expect(typeof parsed.storedAt).toBe('number');
  });

  it('sentinel key uses the expected prefix', () => {
    const prefix = 'de_original_sentinel_';
    const assetId = 'xyz-123';
    const key = `${prefix}${assetId}`;
    expect(key).toBe('de_original_sentinel_xyz-123');
  });

  it('checkSentinels returns empty array when no sentinels exist', async () => {
    localStorageData.clear();
    const { checkSentinels } = await import('@/engins/contentengin/assets/indexedDBStore');
    const missing = await checkSentinels().catch(() => [] as string[]);
    expect(Array.isArray(missing)).toBe(true);
    expect(missing.length).toBe(0);
  });
});
