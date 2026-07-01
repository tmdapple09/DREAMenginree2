

export const DB_NAME = 'dreamengin-offline';
export const DB_VERSION = 2;

export const STORE_ASSETS = 'assets';
export const STORE_SCENES = 'scenes';
export const STORE_SYNC_QUEUE = 'sync-queue';
export const STORE_RECORDS = 'records';
export const STORE_HTTP_CACHE = 'http-cache';

export type OfflineNamespace =
  | 'dream-system'
  | 'dream-layout'
  | 'dream-feed'
  | 'dreamdm-conversations'
  | 'dreamdm-messages'
  | 'dreamdm-drafts'
  | 'notifications'
  | 'artifacts'
  | 'active-modules'
  | 'settings'
  | 'marketplace'
  | 'engin-state'
  | 'bridge-handoffs'
  | string;

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

export interface OfflineRecord<T = unknown> {
  key: string;
  namespace: OfflineNamespace;
  id: string;
  value: T;
  updatedAt: string;
  expiresAt?: string;
  stale?: boolean;
  meta?: Record<string, unknown>;
}

export interface CachedHttpResponse<T = unknown> {
  key: string;
  url: string;
  value: T;
  status: number;
  headers?: Record<string, string>;
  cachedAt: string;
  expiresAt?: string;
}

export interface CachedAsset {
  id: string;
  mimeType: string;
  data: ArrayBuffer;
  cachedAt: string;
  modifiedAt: string;
  synced: boolean;
  meta?: Record<string, unknown>;
}

export interface CachedScene {
  id: string;
  state: SceneSnapshot;
  savedAt: string;
  synced: boolean;
}

export interface SceneSnapshot {
  camera: {
    position: [number, number, number];
    target: [number, number, number];
    fov: number;
  };
  objects: SceneObject[];
  physicsEnabled: boolean;
  environment?: string;
}

export interface SceneObject {
  id: string;
  type: 'mesh' | 'light' | 'audio' | 'particle';
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  assetId?: string;
  properties?: Record<string, unknown>;
}

export interface SyncQueueEntry {
  id?: number;
  entityType: 'asset' | 'scene' | 'record' | 'http' | 'mutation';
  entityId: string;
  action: 'create' | 'update' | 'delete' | 'revalidate' | 'replay';
  queuedAt: string;
  idempotencyKey?: string;
  route?: string;
  payload?: Record<string, unknown>;
  attempts?: number;
  lastError?: string;
  nextAttemptAt?: string;
}

const FALLBACK_PREFIX = 'de:offline-cache:';
let dbPromise: Promise<IDBDatabase> | null = null;

function hasIndexedDB(): boolean {
  return typeof indexedDB !== 'undefined';
}

function hasLocalStorage(): boolean {
  return typeof localStorage !== 'undefined';
}

function nowIso(): string {
  return new Date().toISOString();
}

function recordKey(namespace: OfflineNamespace, id: string): string {
  return `${namespace}:${id}`;
}

function fallbackKey(store: string, key: string): string {
  return `${FALLBACK_PREFIX}${store}:${key}`;
}

function fallbackPut<T>(store: string, key: string, value: T): void {
  if (!hasLocalStorage()) return;
  localStorage.setItem(fallbackKey(store, key), JSON.stringify(value));
}

function fallbackGet<T>(store: string, key: string): T | undefined {
  if (!hasLocalStorage()) return undefined;
  const raw = localStorage.getItem(fallbackKey(store, key));
  if (!raw) return undefined;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return undefined;
  }
}

function fallbackDelete(store: string, key: string): void {
  if (!hasLocalStorage()) return;
  localStorage.removeItem(fallbackKey(store, key));
}

function fallbackList<T>(store: string, predicate?: (value: T) => boolean): T[] {
  if (!hasLocalStorage()) return [];
  const prefix = `${FALLBACK_PREFIX}${store}:`;
  const out: T[] = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith(prefix)) continue;
    const raw = localStorage.getItem(key);
    if (!raw) continue;
    try {
      const parsed = JSON.parse(raw) as T;
      if (!predicate || predicate(parsed)) out.push(parsed);
    } catch {
      
    }
  }
  return out;
}

export function openDB(): Promise<IDBDatabase> {
  if (!hasIndexedDB()) {
    return Promise.reject(new Error('IndexedDB not available'));
  }

  if (dbPromise) return dbPromise;

  dbPromise = new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(STORE_ASSETS)) {
        const assetStore = db.createObjectStore(STORE_ASSETS, { keyPath: 'id' });
        assetStore.createIndex('synced', 'synced', { unique: false });
        assetStore.createIndex('cachedAt', 'cachedAt', { unique: false });
      }

      if (!db.objectStoreNames.contains(STORE_SCENES)) {
        const sceneStore = db.createObjectStore(STORE_SCENES, { keyPath: 'id' });
        sceneStore.createIndex('synced', 'synced', { unique: false });
      }

      if (!db.objectStoreNames.contains(STORE_SYNC_QUEUE)) {
        const queueStore = db.createObjectStore(STORE_SYNC_QUEUE, { keyPath: 'id', autoIncrement: true });
        queueStore.createIndex('entityType', 'entityType', { unique: false });
        queueStore.createIndex('idempotencyKey', 'idempotencyKey', { unique: false });
      }

      if (!db.objectStoreNames.contains(STORE_RECORDS)) {
        const recordStore = db.createObjectStore(STORE_RECORDS, { keyPath: 'key' });
        recordStore.createIndex('namespace', 'namespace', { unique: false });
        recordStore.createIndex('updatedAt', 'updatedAt', { unique: false });
        recordStore.createIndex('expiresAt', 'expiresAt', { unique: false });
      }

      if (!db.objectStoreNames.contains(STORE_HTTP_CACHE)) {
        const httpStore = db.createObjectStore(STORE_HTTP_CACHE, { keyPath: 'key' });
        httpStore.createIndex('url', 'url', { unique: false });
        httpStore.createIndex('cachedAt', 'cachedAt', { unique: false });
        httpStore.createIndex('expiresAt', 'expiresAt', { unique: false });
      }
    };

    request.onsuccess = () => {
      const db = request.result;
      db.onversionchange = () => {
        db.close();
        dbPromise = null;
      };
      resolve(db);
    };
    request.onerror = () => {
      dbPromise = null;
      reject(request.error);
    };
  });

  return dbPromise;
}

async function withStore<T>(storeName: string, mode: IDBTransactionMode, run: (store: IDBObjectStore) => IDBRequest<T> | void): Promise<T> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, mode);
    const store = tx.objectStore(storeName);
    const request = run(store);
    let requestResult: T | undefined;

    if (request) {
      request.onsuccess = () => {
        requestResult = request.result;
      };
      request.onerror = () => reject(request.error);
    }

    tx.oncomplete = () => resolve(requestResult as T);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

async function putStore<T extends { [key: string]: unknown }>(storeName: string, key: string, value: T): Promise<void> {
  try {
    await withStore(storeName, 'readwrite', (store) => {
      store.put(value);
    });
  } catch {
    fallbackPut(storeName, key, value);
  }
}

async function getStore<T>(storeName: string, key: string): Promise<T | undefined> {
  try {
    return await withStore<T | undefined>(storeName, 'readonly', (store) => store.get(key) as IDBRequest<T | undefined>);
  } catch {
    return fallbackGet<T>(storeName, key);
  }
}

async function deleteStore(storeName: string, key: IDBValidKey): Promise<void> {
  try {
    await withStore(storeName, 'readwrite', (store) => {
      store.delete(key);
    });
  } catch {
    fallbackDelete(storeName, String(key));
  }
}

async function listStore<T>(storeName: string): Promise<T[]> {
  try {
    return await withStore<T[]>(storeName, 'readonly', (store) => store.getAll() as IDBRequest<T[]>);
  } catch {
    return fallbackList<T>(storeName);
  }
}

export async function putOfflineRecord<T>(input: {
  namespace: OfflineNamespace;
  id: string;
  value: T;
  expiresAt?: string;
  stale?: boolean;
  meta?: Record<string, unknown>;
}): Promise<OfflineRecord<T>> {
  const record: OfflineRecord<T> = {
    key: recordKey(input.namespace, input.id),
    namespace: input.namespace,
    id: input.id,
    value: input.value,
    updatedAt: nowIso(),
    expiresAt: input.expiresAt,
    stale: input.stale,
    meta: input.meta,
  };
  await putStore(STORE_RECORDS, record.key, record as unknown as Record<string, unknown>);
  return record;
}

export async function getOfflineRecord<T>(namespace: OfflineNamespace, id: string): Promise<OfflineRecord<T> | undefined> {
  const record = await getStore<OfflineRecord<T>>(STORE_RECORDS, recordKey(namespace, id));
  if (!record) return undefined;
  if (record.expiresAt && Date.parse(record.expiresAt) <= Date.now()) {
    await deleteOfflineRecord(namespace, id);
    return undefined;
  }
  return record;
}

export async function getOfflineValue<T>(namespace: OfflineNamespace, id: string, fallback: T): Promise<T> {
  return (await getOfflineRecord<T>(namespace, id))?.value ?? fallback;
}

export async function deleteOfflineRecord(namespace: OfflineNamespace, id: string): Promise<void> {
  await deleteStore(STORE_RECORDS, recordKey(namespace, id));
}

export async function listOfflineRecords<T>(namespace: OfflineNamespace): Promise<OfflineRecord<T>[]> {
  const all = await listStore<OfflineRecord<T>>(STORE_RECORDS);
  const now = Date.now();
  return all.filter((record) => record.namespace === namespace && (!record.expiresAt || Date.parse(record.expiresAt) > now));
}


export async function writeOfflineCache<TPayload extends Record<string, unknown>>(key: string, value: TPayload): Promise<void> {
  await putOfflineRecord({ namespace: 'settings', id: key, value });
}

export async function readOfflineCache<TPayload>(key: string): Promise<TPayload | null> {
  return (await getOfflineRecord<TPayload>('settings', key))?.value ?? null;
}

export async function cacheHttpGet<T>(url: string, value: T, options: { status?: number; headers?: Record<string, string>; ttlMs?: number } = {}): Promise<CachedHttpResponse<T>> {
  const cachedAt = nowIso();
  const record: CachedHttpResponse<T> = {
    key: url,
    url,
    value,
    status: options.status ?? 200,
    headers: options.headers,
    cachedAt,
    expiresAt: options.ttlMs ? new Date(Date.now() + options.ttlMs).toISOString() : undefined,
  };
  await putStore(STORE_HTTP_CACHE, url, record as unknown as Record<string, unknown>);
  return record;
}

export async function getCachedHttpGet<T>(url: string): Promise<CachedHttpResponse<T> | undefined> {
  const record = await getStore<CachedHttpResponse<T>>(STORE_HTTP_CACHE, url);
  if (!record) return undefined;
  if (record.expiresAt && Date.parse(record.expiresAt) <= Date.now()) {
    await deleteStore(STORE_HTTP_CACHE, url);
    return undefined;
  }
  return record;
}

export async function evictExpiredHttpCache(): Promise<number> {
  const all = await listStore<CachedHttpResponse>(STORE_HTTP_CACHE);
  let evicted = 0;
  const now = Date.now();
  for (const record of all) {
    if (record.expiresAt && Date.parse(record.expiresAt) <= now) {
      await deleteStore(STORE_HTTP_CACHE, record.key);
      evicted += 1;
    }
  }
  return evicted;
}

export async function cacheAsset(asset: CachedAsset): Promise<void> {
  await putStore(STORE_ASSETS, asset.id, asset as unknown as Record<string, unknown>);
}

export async function getAsset(id: string): Promise<CachedAsset | undefined> {
  return getStore<CachedAsset>(STORE_ASSETS, id);
}

export async function deleteAsset(id: string): Promise<void> {
  await deleteStore(STORE_ASSETS, id);
}

export async function listAssets(): Promise<CachedAsset[]> {
  return listStore<CachedAsset>(STORE_ASSETS);
}

export async function saveScene(scene: CachedScene): Promise<void> {
  await putStore(STORE_SCENES, scene.id, scene as unknown as Record<string, unknown>);
}

export async function getScene(id: string): Promise<CachedScene | undefined> {
  return getStore<CachedScene>(STORE_SCENES, id);
}

export async function deleteScene(id: string): Promise<void> {
  await deleteStore(STORE_SCENES, id);
}

export async function listScenes(): Promise<CachedScene[]> {
  return listStore<CachedScene>(STORE_SCENES);
}

export async function enqueueSyncAction(entry: Omit<SyncQueueEntry, 'id'>): Promise<void> {
  const key = `${entry.entityType}:${entry.entityId}:${entry.action}:${entry.queuedAt}`;
  const value = { ...entry, attempts: entry.attempts ?? 0 };
  try {
    await withStore(STORE_SYNC_QUEUE, 'readwrite', (store) => {
      store.add(value);
    });
  } catch {
    fallbackPut(STORE_SYNC_QUEUE, key, value);
  }
}

export async function getSyncQueue(): Promise<SyncQueueEntry[]> {
  return listStore<SyncQueueEntry>(STORE_SYNC_QUEUE);
}

export async function clearSyncQueue(): Promise<void> {
  try {
    await withStore(STORE_SYNC_QUEUE, 'readwrite', (store) => {
      store.clear();
    });
  } catch {
    if (!hasLocalStorage()) return;
    const prefix = `${FALLBACK_PREFIX}${STORE_SYNC_QUEUE}:`;
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key?.startsWith(prefix)) keys.push(key);
    }
    keys.forEach((key) => localStorage.removeItem(key));
  }
}

export async function removeSyncEntry(id: number): Promise<void> {
  await deleteStore(STORE_SYNC_QUEUE, id);
}

export function isOnline(): boolean {
  if (typeof navigator === 'undefined') return true;
  return navigator.onLine !== false;
}

export function onConnectivityChange(callback: (online: boolean) => void): () => void {
  if (typeof window === 'undefined') return () => {};

  const handleOnline = () => callback(true);
  const handleOffline = () => callback(false);

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
}

export async function processSyncQueue(uploadFn: (entry: SyncQueueEntry) => Promise<void>): Promise<{ synced: number; failed: number }> {
  const queue = await getSyncQueue();
  let synced = 0;
  let failed = 0;

  for (const entry of queue) {
    try {
      await uploadFn(entry);
      if (entry.id !== undefined) await removeSyncEntry(entry.id);
      synced += 1;
    } catch (error) {
      failed += 1;
      if (entry.id !== undefined) {
        await enqueueSyncAction({
          ...entry,
          attempts: (entry.attempts ?? 0) + 1,
          lastError: error instanceof Error ? error.message : String(error),
          nextAttemptAt: new Date(Date.now() + Math.min(60_000, 2 ** Math.min(8, entry.attempts ?? 0) * 1000)).toISOString(),
        });
        await removeSyncEntry(entry.id);
      }
    }
  }

  return { synced, failed };
}

export function createDefaultSnapshot(): SceneSnapshot {
  return {
    camera: { position: [0, 5, -10], target: [0, 0, 0], fov: 60 },
    objects: [],
    physicsEnabled: true,
    environment: 'studio',
  };
}

export async function persistScene(sceneId: string, snapshot: SceneSnapshot): Promise<void> {
  const savedAt = nowIso();
  await saveScene({ id: sceneId, state: snapshot, savedAt, synced: false });
  await enqueueSyncAction({ entityType: 'scene', entityId: sceneId, action: 'update', queuedAt: savedAt });
}

export async function restoreScene(sceneId: string): Promise<SceneSnapshot | undefined> {
  return (await getScene(sceneId))?.state;
}

export async function removeScene(sceneId: string): Promise<void> {
  await deleteScene(sceneId);
}

export async function listPersistedScenes(): Promise<string[]> {
  return (await listScenes()).map((scene) => scene.id);
}

export function scenesAreDifferent(a: SceneSnapshot, b: SceneSnapshot): boolean {
  if (a.objects.length !== b.objects.length) return true;
  if (a.physicsEnabled !== b.physicsEnabled) return true;
  if (a.environment !== b.environment) return true;

  const EPSILON = 0.001;
  for (let i = 0; i < 3; i += 1) {
    if (Math.abs(a.camera.position[i] - b.camera.position[i]) > EPSILON) return true;
    if (Math.abs(a.camera.target[i] - b.camera.target[i]) > EPSILON) return true;
  }
  if (Math.abs(a.camera.fov - b.camera.fov) > EPSILON) return true;

  for (let i = 0; i < a.objects.length; i += 1) {
    const oa = a.objects[i];
    const ob = b.objects[i];
    if (oa.id !== ob.id || oa.type !== ob.type || oa.assetId !== ob.assetId) return true;
    for (let j = 0; j < 3; j += 1) {
      if (Math.abs(oa.position[j] - ob.position[j]) > EPSILON) return true;
      if (Math.abs(oa.rotation[j] - ob.rotation[j]) > EPSILON) return true;
      if (Math.abs(oa.scale[j] - ob.scale[j]) > EPSILON) return true;
    }
  }

  return false;
}

export function createAutoSave(sceneId: string, intervalMs = 2000) {
  let lastSnapshot: SceneSnapshot | null = null;
  let pending: SceneSnapshot | null = null;
  let timer: ReturnType<typeof setTimeout> | null = null;

  const flush = () => {
    if (pending && (!lastSnapshot || scenesAreDifferent(lastSnapshot, pending))) {
      lastSnapshot = pending;
      void persistScene(sceneId, pending);
    }
    pending = null;
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  };

  const save = (snapshot: SceneSnapshot) => {
    pending = snapshot;
    if (timer === null) {
      timer = setTimeout(flush, intervalMs);
    }
  };

  save.flush = flush;
  return save;
}


export type LocalFirstMutationState = 'stored' | 'queued' | 'synced';

export interface LocalFirstMutation<TPayload> {
  id: string;
  key: string;
  payload: TPayload;
  createdAt: string;
  state: LocalFirstMutationState;
  replay?: {
    url: string;
    method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  };
}

export async function saveLocalFirstMutation<TPayload>(
  mutation: LocalFirstMutation<TPayload>,
): Promise<LocalFirstMutation<TPayload>> {
  await writeOfflineCache(`local:first:${mutation.key}`, mutation as unknown as Record<string, unknown>);
  return mutation;
}

export async function readLocalFirstMutation<TPayload>(key: string): Promise<LocalFirstMutation<TPayload> | null> {
  return await readOfflineCache<LocalFirstMutation<TPayload>>(`local:first:${key}`);
}

export async function queueLocalFirstMutation<TPayload>(
  key: string,
  payload: TPayload,
  replay?: LocalFirstMutation<TPayload>['replay'],
): Promise<LocalFirstMutation<TPayload>> {
  const mutation: LocalFirstMutation<TPayload> = {
    id: `local-first:${key}:${Date.now()}`,
    key,
    payload,
    replay,
    createdAt: new Date().toISOString(),
    state: typeof navigator !== 'undefined' && navigator.onLine ? 'stored' : 'queued',
  };
  return saveLocalFirstMutation(mutation);
}
