import { sha256Hex, verifyGameReadyCertificate, verifySha256Integrity } from '@/lib/gameReadyIntegrity';
import type { GameReadyAssetCertificate } from '@/types/gameReadyAsset';
import type { RendererBackendId } from '../cartridge';

export type GameEnginAssetKind = 'gltf' | 'ktx2' | 'meshopt' | 'audio' | 'json' | 'wasm' | 'wgsl' | 'texture' | 'other';

export interface GameEnginLodEntry {
  readonly level: 1 | 2;
  readonly url: string;
  readonly bytes?: number;
  readonly vertices: number;
  readonly triangles: number;
  readonly integrity: string;
  readonly contentenginCertificate: GameReadyAssetCertificate;
  readonly similaritySignature: string;
  readonly orientedSimilaritySignature: string;
  readonly geometryDigest: string;
  readonly scanDigest: string;
}

export interface GameEnginAssetEntry {
  readonly id: string;
  readonly kind: GameEnginAssetKind;
  readonly url: string;
  readonly bytes?: number;
  readonly vertices?: number;
  readonly triangles?: number;
  readonly priority?: number;
  readonly integrity?: string;
  readonly fallbackUrl?: string;
  readonly contentenginCertificate?: GameReadyAssetCertificate;
  readonly similaritySignature?: string;
  readonly orientedSimilaritySignature?: string;
  readonly geometryDigest?: string;
  readonly scanDigest?: string;
  readonly scanIntegrity?: string;
  readonly scanUrl?: string;
  readonly lods?: readonly GameEnginLodEntry[];
  readonly collisionUrl?: string;
  readonly collisionIntegrity?: string;
}

export interface GameEnginBundleManifest {
  readonly id: string;
  readonly version: string;
  readonly cartridgeId: string;
  readonly backendPreference: readonly RendererBackendId[];
  readonly fallbackBackend: RendererBackendId;
  readonly assets: readonly GameEnginAssetEntry[];
  readonly prefetch?: readonly string[];
  readonly required?: readonly string[];
}

function assertSha256(value: string | undefined, label: string): asserts value is string {
  if (!value || !/^sha256-[0-9a-f]{64}$/i.test(value)) throw new Error(`${label} must be a SHA-256 integrity value.`);
}

function assertCertificateEvidence(
  assetId: string,
  certificate: GameReadyAssetCertificate,
  evidence: {
    similaritySignature?: string;
    orientedSimilaritySignature?: string;
    geometryDigest?: string;
    scanDigest?: string;
  },
  label = 'asset',
): void {
  if (!verifyGameReadyCertificate(certificate)) throw new Error(`ContentEngin ${label} ${assetId} has an invalid or modified certificate.`);
  if (!certificate.gameReady) throw new Error(`ContentEngin ${label} ${assetId} is not certified game-ready.`);
  if (evidence.similaritySignature !== certificate.canonicalSignature) throw new Error(`ContentEngin ${label} ${assetId} canonical similarity signature does not match its certificate.`);
  if (evidence.orientedSimilaritySignature !== certificate.orientedSignature) throw new Error(`ContentEngin ${label} ${assetId} oriented similarity signature does not match its certificate.`);
  if (evidence.geometryDigest !== certificate.geometryDigest) throw new Error(`ContentEngin ${label} ${assetId} geometry digest does not match its certificate.`);
  if (evidence.scanDigest !== certificate.scanDigest) throw new Error(`ContentEngin ${label} ${assetId} scan digest does not match its certificate.`);
}

export function assertValidBundleManifest(value: GameEnginBundleManifest): void {
  if (!value.id || !value.version || !value.cartridgeId) throw new Error('Invalid GameEngin bundle identity.');
  const ids = new Set<string>();
  for (const asset of value.assets) {
    if (!asset.id || !asset.url) throw new Error(`Invalid bundle asset in ${value.id}.`);
    if (ids.has(asset.id)) throw new Error(`Duplicate bundle asset id ${asset.id}.`);
    ids.add(asset.id);

    const certificate = asset.contentenginCertificate;
    if (!certificate) continue;
    assertCertificateEvidence(asset.id, certificate, asset);
    if (!asset.scanUrl) throw new Error(`ContentEngin asset ${asset.id} is missing its scan artifact URL.`);
    assertSha256(asset.integrity, `ContentEngin asset ${asset.id} model integrity`);
    assertSha256(asset.scanIntegrity, `ContentEngin asset ${asset.id} scan integrity`);
    if (!Number.isInteger(asset.vertices) || (asset.vertices ?? 0) < 1
      || !Number.isInteger(asset.triangles) || (asset.triangles ?? 0) < 1) {
      throw new Error(`ContentEngin asset ${asset.id} must declare positive vertex and triangle counts.`);
    }
    const lods = asset.lods ?? [];
    if (lods.length !== 2 || !lods.some((lod) => lod.level === 1) || !lods.some((lod) => lod.level === 2)) {
      throw new Error(`ContentEngin asset ${asset.id} must provide LOD1 and LOD2 resources.`);
    }
    const orderedLods = [...lods].sort((left, right) => left.level - right.level);
    if (orderedLods.some((lod) => !Number.isInteger(lod.vertices) || lod.vertices < 1 || !Number.isInteger(lod.triangles) || lod.triangles < 1)) {
      throw new Error(`ContentEngin asset ${asset.id} LOD resources must declare positive geometry counts.`);
    }
    if (orderedLods[0]!.triangles > asset.triangles! || orderedLods[1]!.triangles > orderedLods[0]!.triangles) {
      throw new Error(`ContentEngin asset ${asset.id} LOD triangle counts must be non-increasing.`);
    }
    for (const lod of lods) {
      if (!lod.url) throw new Error(`ContentEngin asset ${asset.id} LOD${lod.level} URL is missing.`);
      assertSha256(lod.integrity, `ContentEngin asset ${asset.id} LOD${lod.level} integrity`);
      assertCertificateEvidence(`${asset.id}:LOD${lod.level}`, lod.contentenginCertificate, lod, 'LOD');
    }
    if (!asset.collisionUrl) throw new Error(`ContentEngin asset ${asset.id} is missing its collision resource URL.`);
    assertSha256(asset.collisionIntegrity, `ContentEngin asset ${asset.id} collision integrity`);
  }
}

export function verifyAssetPayloadIntegrity(
  payload: ArrayBuffer | Uint8Array,
  integrity: string,
): boolean {
  const bytes = payload instanceof Uint8Array ? payload : new Uint8Array(payload);
  return verifySha256Integrity(bytes, integrity);
}

export async function fetchVerifiedAssetBytes(
  url: string,
  integrity: string,
  options: { signal?: AbortSignal; fetcher?: typeof fetch } = {},
): Promise<ArrayBuffer> {
  assertSha256(integrity, `Asset ${url} integrity`);
  const response = await (options.fetcher ?? fetch)(url, { signal: options.signal });
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  const bytes = await response.arrayBuffer();
  if (!verifyAssetPayloadIntegrity(bytes, integrity)) {
    const actual = `sha256-${sha256Hex(new Uint8Array(bytes))}`;
    throw new Error(`Asset ${url} failed SHA-256 verification (${actual}).`);
  }
  return bytes;
}

export function bundleWeightBytes(manifest: GameEnginBundleManifest): number {
  return manifest.assets.reduce(
    (sum, asset) => sum + Math.max(0, asset.bytes ?? 0) + (asset.lods ?? []).reduce((lodSum, lod) => lodSum + Math.max(0, lod.bytes ?? 0), 0),
    0,
  );
}
