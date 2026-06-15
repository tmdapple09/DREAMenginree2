import type { RendererBackendId } from '../cartridge';

export type GameEnginAssetKind = 'gltf' | 'ktx2' | 'meshopt' | 'audio' | 'json' | 'wasm' | 'wgsl' | 'texture' | 'other';

export interface GameEnginAssetEntry {
  readonly id: string;
  readonly kind: GameEnginAssetKind;
  readonly url: string;
  readonly bytes?: number;
  readonly priority?: number;
  readonly integrity?: string;
  readonly fallbackUrl?: string;
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

export function assertValidBundleManifest(value: GameEnginBundleManifest): void {
  if (!value.id || !value.version || !value.cartridgeId) throw new Error('Invalid GameEngin bundle identity.');
  const ids = new Set<string>();
  for (const asset of value.assets) {
    if (!asset.id || !asset.url) throw new Error(`Invalid bundle asset in ${value.id}.`);
    if (ids.has(asset.id)) throw new Error(`Duplicate bundle asset id ${asset.id}.`);
    ids.add(asset.id);
  }
}

export function bundleWeightBytes(manifest: GameEnginBundleManifest): number {
  return manifest.assets.reduce((sum, asset) => sum + Math.max(0, asset.bytes ?? 0), 0);
}

