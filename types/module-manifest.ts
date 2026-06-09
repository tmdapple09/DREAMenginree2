import { isJsonSerializable } from '@/lib/engin-runtime/EnginBaseState';

/**
 * types/module-manifest.ts
 *
 * ModuleManifest — the canonical shape for a transferable Dream Window module.
 *
 * Every Dream Window that participates in the Universal Editor (drag, transfer,
 * spatial layout) must carry a ModuleManifest so the DraggableModule wrapper
 * knows how to handle it.
 *
 * Architecture: docs/ARCHITECTURE.md §4 — Universal Dream Window model.
 * Naming: uses canonical 'runtime' vocabulary per docs/LAW.md route law.
 */

/** All runtimes a module may declare as source or target. */
export type RuntimeId =
  | 'homedream'
  | 'dreamspace'
  | 'daydream:music'
  | 'daydream:games'
  | 'daydream:lab'
  | 'daydream:code'
  | 'daydream:brand'
  | 'daydream:create'
  | 'engin:starmaker'
  | 'engin:game'
  | 'engin:lab'
  | 'engin:code'
  | 'engin:brand'
  | 'engin:content'
  | (string & {});

/** Module types matching Dream Window categories. */
export type ModuleType =
  | 'feed'
  | 'music-player'
  | 'game-launcher'
  | 'code-snippet'
  | 'notes'
  | 'custom'
  | (string & {});

/**
 * The manifest that every transferable Dream Window carries.
 *
 * The `content` field must be JSON-serialisable — it is the state snapshot
 * sent via the bridge when a module is transferred to another runtime.
 */
export interface ModuleManifest {
  /** Stable unique ID — matches the widget/Dream Window ID in the database. */
  id: string;
  /** Semantic category for this module. */
  type: ModuleType;
  /** Which runtime this module currently lives in. */
  sourceRuntime: RuntimeId;
  /**
   * Runtimes this module is allowed to be transferred to.
   * An empty array means the module is not transferable.
   */
  compatibleRuntimes: RuntimeId[];
  /** JSON-serialisable state snapshot — persisted across transfers. */
  content: unknown;
  /** Runtime API and feature requirements negotiated before activation. */
  compatibility?: ModuleCompatibility;
  /** UI constraints used by DraggableModule and SpatialSurface. */
  ui: {
    defaultSize: { width: number; height: number };
    resizable: boolean;
    movable: boolean;
  };
}

/** Runtime capabilities used to negotiate safe module activation. */
export interface RuntimeCompatibility {
  apiVersion: string;
  features: ReadonlyArray<string>;
}

/** Optional manifest requirements; absent requirements preserve existing modules. */
export interface ModuleCompatibility {
  apiVersion: string;
  requiredFeatures: ReadonlyArray<string>;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isSerializable(value: unknown): boolean {
  if (value === undefined) return false;
  return isJsonSerializable(value as object);
}

function isModuleCompatibility(value: unknown): value is ModuleCompatibility {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const compatibility = value as Partial<ModuleCompatibility>;
  return (
    isNonEmptyString(compatibility.apiVersion) &&
    Array.isArray(compatibility.requiredFeatures) &&
    compatibility.requiredFeatures.every(isNonEmptyString)
  );
}

export function isModuleManifest(value: unknown): value is ModuleManifest {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const manifest = value as Partial<ModuleManifest>;
  const ui = manifest.ui as Partial<ModuleManifest['ui']> | undefined;
  const defaultSize = ui?.defaultSize as
    | Partial<ModuleManifest['ui']['defaultSize']>
    | undefined;
  return (
    isNonEmptyString(manifest.id) &&
    isNonEmptyString(manifest.type) &&
    isNonEmptyString(manifest.sourceRuntime) &&
    Array.isArray(manifest.compatibleRuntimes) &&
    manifest.compatibleRuntimes.every(isNonEmptyString) &&
    'content' in manifest &&
    isSerializable(manifest.content) &&
    (manifest.compatibility === undefined ||
      isModuleCompatibility(manifest.compatibility)) &&
    !!ui &&
    typeof ui === 'object' &&
    !!defaultSize &&
    typeof defaultSize === 'object' &&
    typeof defaultSize.width === 'number' &&
    Number.isFinite(defaultSize.width) &&
    defaultSize.width > 0 &&
    typeof defaultSize.height === 'number' &&
    Number.isFinite(defaultSize.height) &&
    defaultSize.height > 0 &&
    typeof ui.resizable === 'boolean' &&
    typeof ui.movable === 'boolean'
  );
}

export function negotiateModuleCompatibility(
  requirement: ModuleCompatibility | undefined,
  runtime: RuntimeCompatibility,
): {
  compatible: boolean;
  missingFeatures: ReadonlyArray<string>;
  reason?: string;
} {
  if (
    !isNonEmptyString(runtime.apiVersion) ||
    !Array.isArray(runtime.features) ||
    !runtime.features.every(isNonEmptyString)
  ) {
    return {
      compatible: false,
      missingFeatures: [],
      reason: 'Runtime compatibility declaration is invalid.',
    };
  }
  if (!requirement) return { compatible: true, missingFeatures: [] };
  if (!isModuleCompatibility(requirement)) {
    return {
      compatible: false,
      missingFeatures: [],
      reason: 'Module compatibility declaration is invalid.',
    };
  }
  if (requirement.apiVersion !== runtime.apiVersion) {
    return {
      compatible: false,
      missingFeatures: [],
      reason: 'Runtime API version mismatch.',
    };
  }
  const availableFeatures = new Set(runtime.features);
  const missingFeatures = [...new Set(requirement.requiredFeatures)].filter(
    (feature) => !availableFeatures.has(feature),
  );
  return missingFeatures.length === 0
    ? { compatible: true, missingFeatures }
    : {
        compatible: false,
        missingFeatures,
        reason: 'Runtime is missing required features.',
      };
}
