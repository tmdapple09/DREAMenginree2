/**
 * lib/gameengin/systems/assets.ts
 *
 * ASSET STREAMING SYSTEM
 *
 * Focused module: priority-queue progressive LOD asset streaming manager.
 * Adds bundle manifest/cache contracts for glTF/KTX2/meshopt/WGSL cartridge delivery.
 */

export { AssetStreamManager } from '../power-systems';
export { assertValidBundleManifest, bundleWeightBytes } from '../assets/BundleManifest';
export { planBundleCache } from '../assets/BundleCache';
export type { AssetHandle, AssetState, AssetType } from '../power-systems';
export type { GameEnginAssetEntry, GameEnginAssetKind, GameEnginBundleManifest } from '../assets/BundleManifest';
export type { GameEnginBundleCacheDecision, GameEnginBundleCacheOptions } from '../assets/BundleCache';
