'use client';

import { getOriginal, storeOriginal, type OriginalRecord } from '@/engins/contentengin/assets/indexedDBStore';

const MANIFEST_KEY = 'de:contentengin:local-asset-library:v1';
const MAX_MANIFEST_ITEMS = 24;

export interface LocalContentAssetRecord {
  assetId: string;
  name: string;
  exportedAt: string;
  triangles: number;
  vertices: number;
  quality: string;
  hasRigMetadata: boolean;
}

interface StoredManifest {
  assets: LocalContentAssetRecord[];
}

function canUseStorage(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

function readManifest(): StoredManifest {
  if (!canUseStorage()) return { assets: [] };
  try {
    const raw = localStorage.getItem(MANIFEST_KEY);
    if (!raw) return { assets: [] };
    const parsed = JSON.parse(raw) as StoredManifest;
    return { assets: Array.isArray(parsed.assets) ? parsed.assets : [] };
  } catch {
    return { assets: [] };
  }
}

function writeManifest(manifest: StoredManifest): void {
  if (!canUseStorage()) return;
  localStorage.setItem(MANIFEST_KEY, JSON.stringify(manifest));
}

function objBlobKey(assetId: string): string {
  return `contentengin-asset:${assetId}:obj`;
}

function glbBlobKey(assetId: string): string {
  return `contentengin-asset:${assetId}:glb`;
}

export async function saveLocalContentAsset(
  record: LocalContentAssetRecord,
  glbBlob: Blob,
  objSource: string,
): Promise<void> {
  await storeOriginal(glbBlobKey(record.assetId), glbBlob, `${record.name || record.assetId}.glb`);
  await storeOriginal(objBlobKey(record.assetId), new Blob([objSource], { type: 'text/plain' }), `${record.name || record.assetId}.obj`);

  const manifest = readManifest();
  const filtered = manifest.assets.filter((asset) => asset.assetId !== record.assetId);
  writeManifest({
    assets: [record, ...filtered].slice(0, MAX_MANIFEST_ITEMS),
  });

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('dreamengin:contentasset-library-updated', { detail: { assetId: record.assetId } }));
  }
}

export function listLocalContentAssets(): LocalContentAssetRecord[] {
  return readManifest().assets.slice().sort((a, b) => b.exportedAt.localeCompare(a.exportedAt));
}

export async function getLocalContentAssetObjSource(assetId: string): Promise<string | null> {
  const record = await getOriginal(objBlobKey(assetId));
  if (!record) return null;
  return record.blob.text();
}

export async function getLocalContentAssetGlb(assetId: string): Promise<OriginalRecord | null> {
  return getOriginal(glbBlobKey(assetId));
}
