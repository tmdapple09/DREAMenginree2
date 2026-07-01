

const DB_NAME = 'dreamengin_originals';
const DB_VERSION = 1;
const STORE_NAME = 'originals';
const SENTINEL_PREFIX = 'de_original_sentinel_';


export interface OriginalRecord {
  assetId: string;
  blob: Blob;
  storedAt: number; 
  mimeType: string;
  fileName: string;
}


export interface SentinelEntry {
  assetId: string;
  storedAt: number;
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      req.result.createObjectStore(STORE_NAME, { keyPath: 'assetId' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}


export async function storeOriginal(
  assetId: string,
  blob: Blob,
  fileName: string,
): Promise<void> {
  const db = await openDB();
  const record: OriginalRecord = {
    assetId,
    blob,
    storedAt: Date.now(),
    mimeType: blob.type,
    fileName,
  };

  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const req = tx.objectStore(STORE_NAME).put(record);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });

  
  const sentinel: SentinelEntry = { assetId, storedAt: record.storedAt };
  localStorage.setItem(`${SENTINEL_PREFIX}${assetId}`, JSON.stringify(sentinel));
}


export async function getOriginal(assetId: string): Promise<OriginalRecord | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const req = tx.objectStore(STORE_NAME).get(assetId);
    req.onsuccess = () => resolve((req.result as OriginalRecord) ?? null);
    req.onerror = () => reject(req.error);
  });
}


export async function deleteOriginal(assetId: string): Promise<void> {
  const db = await openDB();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const req = tx.objectStore(STORE_NAME).delete(assetId);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
  localStorage.removeItem(`${SENTINEL_PREFIX}${assetId}`);
}


export async function checkSentinels(): Promise<string[]> {
  const missing: string[] = [];

  const sentinelKeys: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(SENTINEL_PREFIX)) {
      sentinelKeys.push(key);
    }
  }

  if (sentinelKeys.length === 0) return [];

  const db = await openDB();

  for (const key of sentinelKeys) {
    const assetId = key.slice(SENTINEL_PREFIX.length);
    const record = await new Promise<OriginalRecord | null>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get(assetId);
      req.onsuccess = () => resolve((req.result as OriginalRecord) ?? null);
      req.onerror = () => reject(req.error);
    });

    if (!record) {
      missing.push(assetId);
    }
  }

  return missing;
}


export async function listStoredOriginals(): Promise<OriginalRecord[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const req = tx.objectStore(STORE_NAME).getAll();
    req.onsuccess = () => resolve(req.result as OriginalRecord[]);
    req.onerror = () => reject(req.error);
  });
}


export async function cleanupExpiredOriginals(maxAgeMs: number): Promise<string[]> {
  const all = await listStoredOriginals();
  const cutoff = Date.now() - maxAgeMs;
  const expired = all.filter((r) => r.storedAt < cutoff);
  for (const record of expired) {
    await deleteOriginal(record.assetId);
  }
  return expired.map((r) => r.assetId);
}

export interface StorageStats {
  count: number;
  
  totalBytes: number;
  oldestStoredAt: number | null;
  newestStoredAt: number | null;
}


export async function getStorageStats(): Promise<StorageStats> {
  const all = await listStoredOriginals();
  if (all.length === 0) {
    return { count: 0, totalBytes: 0, oldestStoredAt: null, newestStoredAt: null };
  }
  const totalBytes = all.reduce((sum: number, r: OriginalRecord) => sum + r.blob.size, 0);
  const timestamps = all.map((r) => r.storedAt);
  return {
    count: all.length,
    totalBytes,
    oldestStoredAt: Math.min(...timestamps),
    newestStoredAt: Math.max(...timestamps),
  };
}


export async function hasOriginal(assetId: string): Promise<boolean> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const req = tx.objectStore(STORE_NAME).count(assetId);
    req.onsuccess = () => resolve(req.result > 0);
    req.onerror = () => reject(req.error);
  });
}
