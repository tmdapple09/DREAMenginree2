import { assertValidBundleManifest, bundleWeightBytes, type GameEnginBundleManifest } from './BundleManifest';

export interface GameEnginBundleCacheDecision {
  readonly cacheName: string;
  readonly manifestId: string;
  readonly version: string;
  readonly bytes: number;
  readonly shouldPrefetch: readonly string[];
  readonly shouldEvict: readonly string[];
}

export interface GameEnginBundleCacheOptions {
  readonly maxBytes?: number;
  readonly existingBundleIds?: readonly string[];
}

export function planBundleCache(
  manifest: GameEnginBundleManifest,
  options: GameEnginBundleCacheOptions = {},
): GameEnginBundleCacheDecision {
  assertValidBundleManifest(manifest);
  const maxBytes = Math.max(1, options.maxBytes ?? 96 * 1024 * 1024);
  const bytes = bundleWeightBytes(manifest);
  const existing = new Set(options.existingBundleIds ?? []);
  const shouldEvict = bytes > maxBytes ? [...existing] : [...existing].filter((id) => id !== manifest.id && !manifest.required?.includes(id));
  const shouldPrefetch = manifest.assets
    .filter((asset) => (manifest.prefetch?.includes(asset.id) ?? false) || (asset.priority ?? 0) > 0)
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
    .map((asset) => asset.url);

  return {
    cacheName: `gameengin:${manifest.cartridgeId}:${manifest.id}:${manifest.version}`,
    manifestId: manifest.id,
    version: manifest.version,
    bytes,
    shouldPrefetch,
    shouldEvict,
  };
}

