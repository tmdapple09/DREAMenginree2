import { patchBaseState, type EnginBaseState, type JsonObject } from '@/engine/engin-runtime/EnginBaseState';
import type { EnginCapability } from '@/engine/engin-runtime/EnginCapabilities';
import { getEnginCapabilityProfile } from '@/engine/engin-runtime/EnginCapabilityTargets';
import type {
  ConstraintResult,
  EnginAction,
  EnginConstraint,
  EnginRuleSetContract,
  EnginRuleSetManifest,
  EnginRuleSetParams,
} from '@/engine/engin-runtime/EnginRuleSetContract';
import type { ContentAsset, ContentRecipe, ExportProfile } from '@/engins/contentengin/assetTypes';

export interface ContentEnginDomain {
  activeRecipe: ContentRecipe | null;
  assets: ContentAsset[];
  selectedAssetId: string | null;
  profile: ExportProfile;
  photoAnalysis: JsonObject | null;
  lastIntent: string | null;
  downloads: JsonObject | null;
  sourceGlb: JsonObject | null;
  rigTarget: string | null;
  rigBendPointCount: number;
  meshDiagnostics: JsonObject | null;
  processingStatus: string;
  gameReadyCertificate: JsonObject | null;
  similaritySignature: string | null;
  gameReadyBuild: JsonObject | null;
}

export interface ContentEnginDerivedState extends ContentEnginDomain {
  lifecycle: EnginBaseState['lifecycle'];
}

export type ContentEnginAction =
  | EnginAction<'contentengin:recipe-set', JsonObject>
  | EnginAction<'contentengin:asset-built', JsonObject>
  | EnginAction<'contentengin:asset-select', JsonObject>
  | EnginAction<'contentengin:profile-set', JsonObject>
  | EnginAction<'contentengin:photo-analyzed', JsonObject>
  | EnginAction<'contentengin:download-ready', JsonObject>
  | EnginAction<'contentengin:image-uploaded', JsonObject>
  | EnginAction<'contentengin:glb-uploaded', JsonObject>
  | EnginAction<'contentengin:asset-rig-metadata-started', JsonObject>
  | EnginAction<'contentengin:asset-rig-target-set', JsonObject>
  | EnginAction<'contentengin:asset-rig-bend-point-set', JsonObject>
  | EnginAction<'contentengin:asset-process-requested', JsonObject>
  | EnginAction<'contentengin:asset-edit-started', JsonObject>
  | EnginAction<'contentengin:asset-export-requested', JsonObject>
  | EnginAction<'contentengin:asset-process-completed', JsonObject>
  | EnginAction<'contentengin:asset-brush-applied', JsonObject>
  | EnginAction<'contentengin:asset-game-ready-requested', JsonObject>
  | EnginAction<'contentengin:asset-game-ready-completed', JsonObject>
  | EnginAction<'contentengin:asset-cleared', JsonObject>;

const DEFAULT_DOMAIN: ContentEnginDomain = {
  activeRecipe: null,
  assets: [],
  selectedAssetId: null,
  profile: 'ps3',
  photoAnalysis: null,
  lastIntent: null,
  downloads: null,
  sourceGlb: null,
  rigTarget: null,
  rigBendPointCount: 0,
  meshDiagnostics: null,
  processingStatus: 'idle',
  gameReadyCertificate: null,
  similaritySignature: null,
  gameReadyBuild: null,
};

const constraint: EnginConstraint<ContentEnginAction> = (_state, action): ConstraintResult => {
  if (!action.type.startsWith('contentengin:')) {
    return { valid: false, reason: 'ContentEngin only accepts procedural asset intents.' };
  }
  if (action.type === 'contentengin:profile-set' && !['ps3', 'ps4', 'ps5'].includes(String(action.payload?.profile ?? ''))) {
    return { valid: false, reason: 'Invalid export profile.' };
  }
  return { valid: true };
};

const asDomain = (domain: unknown): Partial<ContentEnginDomain> => domain as Partial<ContentEnginDomain>;
const json = (value: unknown): JsonObject => value as JsonObject;

function transform(state: EnginBaseState, action: ContentEnginAction): EnginBaseState {
  const domain = asDomain(state.domain);
  switch (action.type) {
    case 'contentengin:recipe-set':
      return patchBaseState(state, { domain: json({ ...domain, activeRecipe: action.payload?.recipe, lastIntent: action.type }) });
    case 'contentengin:asset-built': {
      const asset = action.payload?.asset as unknown as ContentAsset | undefined;
      return patchBaseState(state, {
        domain: json({
          ...domain,
          assets: [...(domain.assets ?? []), asset].filter(Boolean),
          selectedAssetId: asset?.id,
          downloads: (action.payload?.downloads as JsonObject | undefined) ?? domain.downloads,
          gameReadyCertificate: asset?.intrinsicScan.certificate,
          similaritySignature: asset?.intrinsicScan.similaritySignature,
          lastIntent: action.type,
        }),
      });
    }
    case 'contentengin:asset-select':
      return patchBaseState(state, { domain: json({ ...domain, selectedAssetId: action.payload?.assetId, lastIntent: action.type }) });
    case 'contentengin:profile-set':
      return patchBaseState(state, { domain: json({ ...domain, profile: action.payload?.profile, lastIntent: action.type }) });
    case 'contentengin:photo-analyzed':
      return patchBaseState(state, { domain: json({ ...domain, photoAnalysis: action.payload?.analysis, lastIntent: action.type }) });
    case 'contentengin:download-ready':
      return patchBaseState(state, { domain: json({ ...domain, downloads: action.payload?.downloads, lastIntent: action.type }) });
    case 'contentengin:glb-uploaded':
      return patchBaseState(state, { domain: json({ ...domain, sourceGlb: action.payload?.sourceGlb, processingStatus: 'rigging', meshDiagnostics: action.payload?.meshDiagnostics, lastIntent: action.type }) });
    case 'contentengin:asset-rig-metadata-started':
      return patchBaseState(state, { domain: json({ ...domain, processingStatus: 'rigging', rigTarget: action.payload?.target, lastIntent: action.type }) });
    case 'contentengin:asset-rig-target-set':
      return patchBaseState(state, { domain: json({ ...domain, rigTarget: action.payload?.target, lastIntent: action.type }) });
    case 'contentengin:asset-rig-bend-point-set':
      return patchBaseState(state, { domain: json({ ...domain, rigBendPointCount: action.payload?.count, lastIntent: action.type }) });
    case 'contentengin:image-uploaded':
      return patchBaseState(state, { domain: json({ ...domain, sourceImage: action.payload?.sourceImage, processingStatus: 'uploaded', lastIntent: action.type }) });
    case 'contentengin:asset-process-requested':
    case 'contentengin:asset-game-ready-requested':
      return patchBaseState(state, { domain: json({ ...domain, processingStatus: 'processing', lastIntent: action.type }) });
    case 'contentengin:asset-process-completed':
      return patchBaseState(state, { domain: json({ ...domain, processingStatus: action.payload?.processingStatus, meshDiagnostics: action.payload?.meshDiagnostics, lastIntent: action.type }) });
    case 'contentengin:asset-game-ready-completed':
      return patchBaseState(state, {
        domain: json({
          ...domain,
          processingStatus: (action.payload?.certificate as JsonObject | undefined)?.gameReady === true ? 'ready-to-download' : 'generated',
          gameReadyCertificate: action.payload?.certificate,
          similaritySignature: (action.payload?.certificate as JsonObject | undefined)?.signature,
          gameReadyBuild: json({ lods: action.payload?.lods, collision: action.payload?.collision }),
          lastIntent: action.type,
        }),
      });
    case 'contentengin:asset-edit-started':
      return patchBaseState(state, { domain: json({ ...domain, processingStatus: 'editing', lastIntent: action.type }) });
    case 'contentengin:asset-brush-applied':
      return patchBaseState(state, { domain: json({ ...domain, lastBrushTool: action.payload?.tool, lastIntent: action.type }) });
    case 'contentengin:asset-export-requested':
      return patchBaseState(state, { domain: json({ ...domain, lastExportFormat: action.payload?.format, lastIntent: action.type }) });
    case 'contentengin:asset-cleared':
      return patchBaseState(state, {
        domain: json({
          ...domain,
          sourceImage: null,
          processingStatus: 'idle',
          meshDiagnostics: null,
          downloads: null,
          gameReadyCertificate: null,
          similaritySignature: null,
          gameReadyBuild: null,
          lastIntent: action.type,
        }),
      });
    default:
      return state;
  }
}

function deriveStateInternal(state: EnginBaseState): ContentEnginDerivedState {
  const domain = asDomain(state.domain);
  return {
    lifecycle: state.lifecycle,
    activeRecipe: domain.activeRecipe ?? null,
    assets: domain.assets ?? [],
    selectedAssetId: domain.selectedAssetId ?? null,
    profile: domain.profile ?? 'ps3',
    photoAnalysis: domain.photoAnalysis ?? null,
    lastIntent: domain.lastIntent ?? null,
    downloads: domain.downloads ?? null,
    sourceGlb: domain.sourceGlb ?? null,
    rigTarget: domain.rigTarget ?? null,
    rigBendPointCount: domain.rigBendPointCount ?? 0,
    meshDiagnostics: domain.meshDiagnostics ?? null,
    processingStatus: domain.processingStatus ?? 'idle',
    gameReadyCertificate: domain.gameReadyCertificate ?? null,
    similaritySignature: domain.similaritySignature ?? null,
    gameReadyBuild: domain.gameReadyBuild ?? null,
  };
}

const PARAMS: EnginRuleSetParams = {
  enginId: 'create',
  name: 'ContentEngin',
  layoutMode: 'standard',
  accentColor: '#f59e0b',
};

const ACTION_TYPES: ContentEnginAction['type'][] = [
  'contentengin:recipe-set',
  'contentengin:asset-built',
  'contentengin:asset-select',
  'contentengin:profile-set',
  'contentengin:photo-analyzed',
  'contentengin:download-ready',
  'contentengin:image-uploaded',
  'contentengin:glb-uploaded',
  'contentengin:asset-rig-metadata-started',
  'contentengin:asset-rig-target-set',
  'contentengin:asset-rig-bend-point-set',
  'contentengin:asset-process-requested',
  'contentengin:asset-edit-started',
  'contentengin:asset-export-requested',
  'contentengin:asset-process-completed',
  'contentengin:asset-brush-applied',
  'contentengin:asset-game-ready-requested',
  'contentengin:asset-game-ready-completed',
  'contentengin:asset-cleared',
];

const MANIFEST: EnginRuleSetManifest<ContentEnginAction> = {
  id: PARAMS.enginId,
  name: PARAMS.name,
  version: '2.1.0',
  schema: { actionTypes: ACTION_TYPES, domainVersion: 3 },
  compatibility: {
    minRuntimeVersion: '1.0.0',
    requiredFeatures: [
      'lifecycle-hooks',
      'manifest-schema',
      'strict-intent-routing',
      'sync-transport',
      'state-snapshotting',
      'compatibility-negotiation',
    ],
  },
};

export const CONTENT_IMPLICIT_ASSET_POLICY = {
  engine: 'robust-sparse-dual-contouring',
  scanner: 'intrinsic-mesh-graph-tesseract',
  mobileFirstResolution: 32,
  desktopClassOnMobile: true,
  runtimeTier: 'mobile-2026-webgpu',
  qualityLadder: { preview: '24-32', balanced: '48-64', export: '96-128', batch: '160+' },
  sharedKernel: 'engins/isosurfaceDualContouring.ts',
  semanticFlow: [
    'region contour',
    'algebraic fit',
    'SDF',
    'dual contour mesh',
    'intrinsic topology scan',
    'deterministic repair',
    'LOD and collision',
    'RenderEngin proof',
    'GameEngin bundle certificate',
  ],
  output: 'Non-AI game-ready mesh assets with topology, similarity, LOD, collision, render, and bundle evidence',
  flow: ['Upload Image or GLB', 'Process', 'Edit', 'Make Game Ready', 'Render', 'Download'],
  rendererPreference: 'webgpu-first-webgl2-canvas-fallback',
  colorBudget: 512,
  mobileBudgets: { drawCalls: 48, frameMs: 16.67, snapshotCadenceMs: 250, maxTexture: 2048 },
  intents: ACTION_TYPES,
  events: ACTION_TYPES,
} as const;

const REQUIRED_CAPABILITIES: ReadonlyArray<EnginCapability> = [
  'state:read',
  'state:write',
  'assets:load',
  'assets:upload',
  'bridge:emit',
  'bridge:listen',
];

export const CONTENT_ENGIN_RULE_SET: EnginRuleSetContract<ContentEnginAction> = {
  manifest: MANIFEST,
  params: PARAMS,
  requiredCapabilities: REQUIRED_CAPABILITIES,
  capabilityTargets: getEnginCapabilityProfile('create'),
  constraints: [constraint],
  transform,
  deriveState: deriveStateInternal as unknown as (state: EnginBaseState) => JsonObject,
};
