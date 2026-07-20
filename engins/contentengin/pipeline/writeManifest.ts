import type { ContentAsset, ContentAssetObject } from '../assetTypes';

export interface ContentAssetManifest {
  readonly id: string;
  readonly type: 'contentengin.asset.manifest';
  readonly contentenginVersion: string;
  readonly profile: ContentAsset['exportProfile'];
  readonly category: ContentAsset['category'];
  readonly subcategory: string;
  readonly gameReady: boolean;
  readonly gameReadyCertificate: ContentAsset['intrinsicScan']['certificate'];
  readonly similaritySignature: string;
  readonly runtimeProfile: ContentAsset['runtimeProfile'];
  readonly performancePlan: ContentAsset['performancePlan'];
  readonly files: {
    readonly model: 'model.glb';
    readonly recipe: 'recipe.json';
    readonly validation: 'validation.json';
    readonly scan: 'scan.json';
    readonly thumbnail: 'thumbnail.webp';
    readonly sourceAnalysis?: 'source_analysis.json';
  };
  readonly privacy: {
    readonly persistInDatabase: false;
    readonly sourceImagesRetained: false;
  };
}

export function makeManifest(asset: ContentAsset): ContentAssetManifest {
  return {
    id: asset.id,
    type: 'contentengin.asset.manifest',
    contentenginVersion: asset.contentenginVersion,
    profile: asset.exportProfile,
    category: asset.category,
    subcategory: asset.subcategory,
    gameReady: asset.validation.gameReady && asset.intrinsicScan.certificate.gameReady,
    gameReadyCertificate: asset.intrinsicScan.certificate,
    similaritySignature: asset.intrinsicScan.similaritySignature,
    runtimeProfile: asset.runtimeProfile,
    performancePlan: asset.performancePlan,
    files: {
      model: 'model.glb',
      recipe: 'recipe.json',
      validation: 'validation.json',
      scan: 'scan.json',
      thumbnail: 'thumbnail.webp',
      sourceAnalysis: asset.recipe.sourceImage ? 'source_analysis.json' : undefined,
    },
    privacy: {
      persistInDatabase: false,
      sourceImagesRetained: false,
    },
  };
}

export function wrapAsset(
  asset: ContentAsset,
  ownerId = 'local-user',
  runtimeId = 'contentengin-local',
): ContentAssetObject {
  const now = new Date().toISOString();
  return {
    id: asset.id,
    type: 'contentengin.asset',
    ownerId,
    runtimeId,
    visibility: 'local',
    createdAt: now,
    updatedAt: now,
    version: 1,
    data: asset,
  };
}
