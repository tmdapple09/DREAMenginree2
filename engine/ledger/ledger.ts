import type { SupabaseClient } from '@/engine/io';
import type { Fingerprint, PeakMap } from '@/engins/starmakerengin/audioFingerprint';



export interface PeakMapEntry {
  kind: 'peakMap';
  id: string;
  songId: string;
  peakMap: PeakMap;
  createdAt: string;
}

export interface FingerprintEntry {
  kind: 'fingerprint';
  id: string;
  fingerprintId: string;
  fingerprint: Fingerprint;
  createdAt: string;
}

export interface SampleMetadata {
  startTime: number;
  endTime: number;
  gain: number;
  pitchShift: number;
  [key: string]: unknown;
}

export interface SampleMetadataEntry {
  kind: 'sampleMetadata';
  id: string;
  sampleId: string;
  meta: SampleMetadata;
  createdAt: string;
}

export interface TorridityEntry {
  kind: 'torridity';
  id: string;
  contentId: string;
  views: number;
  mass: number;
  rank: number;
  createdAt: string;
}


export type AssetType = 'audio' | 'image' | '3d' | 'code';


export interface AssetManifest {
  title?: string;
  description?: string;
  tags?: string[];
  duration?: number;
  dimensions?: { w: number; h: number };
  language?: string;
  [key: string]: unknown;
}


export interface AssetEntry {
  kind: 'asset';
  id: string;
  type: AssetType;
  url: string;
  manifest: AssetManifest;
  owner: string;
  createdAt: string;
}


export type LedgerEntry =
  | PeakMapEntry
  | FingerprintEntry
  | SampleMetadataEntry
  | TorridityEntry
  | AssetEntry;

export interface Ledger {
  entries: Map<string, LedgerEntry>;
  supabase?: SupabaseClient;
  
  tableName: string;
}


export function createLedger(
  supabase?: SupabaseClient,
  tableName = 'ledger_entries'
): Ledger {
  return { entries: new Map(), supabase, tableName };
}

function now(): string {
  return new Date().toISOString();
}

async function persist(ledger: Ledger, entry: LedgerEntry): Promise<void> {
  if (!ledger.supabase) return;
  try {
    await ledger.supabase.from(ledger.tableName).upsert({
      id:         entry.id,
      kind:       entry.kind,
      payload:    JSON.stringify(entry),
      created_at: entry.createdAt,
    });
  } catch {
    
  }
}

export function getLedgerEntry(ledger: Ledger, id: string): LedgerEntry | undefined {
  return ledger.entries.get(id);
}

export function getAllByKind<K extends LedgerEntry['kind']>(
  ledger: Ledger,
  kind: K
): Extract<LedgerEntry, { kind: K }>[] {
  const results: Extract<LedgerEntry, { kind: K }>[] = [];
  for (const entry of ledger.entries.values()) {
    if (entry.kind === kind) {
      results.push(entry as Extract<LedgerEntry, { kind: K }>);
    }
  }
  return results;
}


export function storePeakMap(
  ledger: Ledger,
  songId: string,
  peakMap: PeakMap
): string {
  const id = `pm_${songId}`;
  const entry: PeakMapEntry = { kind: 'peakMap', id, songId, peakMap, createdAt: now() };
  ledger.entries.set(id, entry);
  void persist(ledger, entry);
  return id;
}


export function storeFingerprint(
  ledger: Ledger,
  fingerprintId: string,
  fingerprint: Fingerprint
): string {
  const id = `fp_${fingerprintId}`;
  const entry: FingerprintEntry = {
    kind: 'fingerprint',
    id,
    fingerprintId,
    fingerprint,
    createdAt: now(),
  };
  ledger.entries.set(id, entry);
  void persist(ledger, entry);
  return id;
}


export function storeSampleMetadata(
  ledger: Ledger,
  sampleId: string,
  meta: SampleMetadata
): string {
  const id = `sm_${sampleId}`;
  const entry: SampleMetadataEntry = {
    kind: 'sampleMetadata',
    id,
    sampleId,
    meta,
    createdAt: now(),
  };
  ledger.entries.set(id, entry);
  void persist(ledger, entry);
  return id;
}


export function storeTorridityRank(
  ledger: Ledger,
  contentId: string,
  views: number,
  mass: number,
  rank: number
): string {
  const id = `tr_${contentId}`;
  const entry: TorridityEntry = {
    kind: 'torridity',
    id,
    contentId,
    views,
    mass,
    rank,
    createdAt: now(),
  };
  ledger.entries.set(id, entry);
  void persist(ledger, entry);
  return id;
}


export function storeAsset(
  ledger: Ledger,
  fields: {
    type: AssetType;
    url: string;
    owner: string;
    manifest?: AssetManifest;
    id?: string;
  }
): string {
  const idSuffix = typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID().replace(/-/g, '').slice(0, 7)
    : Date.now().toString(36);
  const id =
    fields.id ??
    `asset_${fields.type}_${Date.now()}_${idSuffix}`;
  const entry: AssetEntry = {
    kind: 'asset',
    id,
    type: fields.type,
    url: fields.url,
    owner: fields.owner,
    manifest: fields.manifest ?? {},
    createdAt: now(),
  };
  ledger.entries.set(id, entry);
  void persist(ledger, entry);
  return id;
}


export function recordView(ledger: Ledger, contentId: string): void {
  const id = `tr_${contentId}`;
  const existing = ledger.entries.get(id);
  if (existing?.kind === 'torridity') {
    existing.views += 1;
    void persist(ledger, existing);
  } else {
    storeTorridityRank(ledger, contentId, 1, 1, 1);
  }
}
