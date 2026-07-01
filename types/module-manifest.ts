import { isJsonSerializable } from '@/engine/engin-runtime/EnginBaseState';




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


export type ModuleType =
  | 'feed'
  | 'music-player'
  | 'game-launcher'
  | 'code-snippet'
  | 'notes'
  | 'custom'
  | (string & {});


export interface ModuleManifest {
  
  id: string;
  
  type: ModuleType;
  
  sourceRuntime: RuntimeId;
  
  compatibleRuntimes: RuntimeId[];
  
  content: unknown;
  
  compatibility?: ModuleCompatibility;
  
  ui: {
    defaultSize: { width: number; height: number };
    resizable: boolean;
    movable: boolean;
  };
}


export interface RuntimeCompatibility {
  apiVersion: string;
  features: ReadonlyArray<string>;
}


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
