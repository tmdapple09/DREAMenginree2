import type { ContentAsset, ContentAssetObject } from '../assetTypes';
import type { IntrinsicAssetScanReport } from '../scan/intrinsicAssetScanner';

export interface ContentAssetLodManifestEntry {
  readonly level: 0 | 1 | 2;
  readonly file: 'model.glb' | 'model.lod1.glb' | 'model.lod2.glb';
  readonly vertices: number;
  readonly triangles: number;
  readonly gameReadyCertificate: IntrinsicAssetScanReport['certificate'];
  readonly canonicalSimilaritySignature: string;
  readonly orientedSimilaritySignature: string;
  readonly geometryDigest: string;
  readonly scanDigest: string;
}

export interface ContentAssetManifest {
  readonly id: string;
  readonly type: 'contentengin.asset.manifest';
  readonly contentenginVersion: string;
  readonly profile: ContentAsset['exportProfile'];
  readonly category: ContentAsset['category'];
  readonly subcategory: string;
  readonly gameReady: boolean;
  readonly gameReadyCertificate: IntrinsicAssetScanReport['certificate'];
  readonly similaritySignature: string;
  readonly canonicalSimilaritySignature: string;
  readonly orientedSimilaritySignature: string;
  readonly geometryDigest: string;
  readonly scanDigest: string;
  readonly lods: readonly ContentAssetLodManifestEntry[];
  readonly runtimeProfile: ContentAsset['runtimeProfile'];
  readonly performancePlan: ContentAsset['performancePlan'];
  readonly files: {
    readonly model: 'model.glb';
    readonly lod1: 'model.lod1.glb';
    readonly lod2: 'model.lod2.glb';
    readonly collision: 'collision.json';
    readonly recipe: 'recipe.json';
    readonly validation: 'validation.json';
    readonly scan: 'scan.json';
    readonly thumbnail: 'thumbnail.webp';
    readonly sourceAnalysis?: 'source_analysis.json';
  };
  readonly integrity: Readonly<Record<string, string>>;
  readonly privacy: {
    readonly persistInDatabase: false;
    readonly sourceImagesRetained: false;
  };
}

export interface ManifestBuildEvidence {
  readonly scan?: IntrinsicAssetScanReport;
  readonly lodScans?: readonly [IntrinsicAssetScanReport, IntrinsicAssetScanReport, IntrinsicAssetScanReport];
}

export function makeManifest(
  asset: ContentAsset,
  integrity: Readonly<Record<string, string>> = {},
  evidence: ManifestBuildEvidence = {},
): ContentAssetManifest {
  const scan = evidence.scan ?? asset.intrinsicScan;
  const lodScans = evidence.lodScans ?? [scan, scan, scan];
  const files = ['model.glb', 'model.lod1.glb', 'model.lod2.glb'] as const;
  const lods = lodScans.map((lodScan, level): ContentAssetLodManifestEntry => ({
    level: level as 0 | 1 | 2,
    file: files[level]!,
    vertices: lodScan.topology.vertices,
    triangles: lodScan.topology.triangles,
    gameReadyCertificate: lodScan.certificate,
    canonicalSimilaritySignature: lodScan.canonicalSimilaritySignature,
    orientedSimilaritySignature: lodScan.orientedSimilaritySignature,
    geometryDigest: lodScan.geometryDigest,
    scanDigest: lodScan.scanDigest,
  }));
  return {
    id: asset.id,
    type: 'contentengin.asset.manifest',
    contentenginVersion: asset.contentenginVersion,
    profile: asset.exportProfile,
    category: asset.category,
    subcategory: asset.subcategory,
    gameReady: asset.validation.gameReady && lods.every((lod) => lod.gameReadyCertificate.gameReady),
    gameReadyCertificate: scan.certificate,
    similaritySignature: scan.similaritySignature,
    canonicalSimilaritySignature: scan.canonicalSimilaritySignature,
    orientedSimilaritySignature: scan.orientedSimilaritySignature,
    geometryDigest: scan.geometryDigest,
    scanDigest: scan.scanDigest,
    lods,
    runtimeProfile: asset.runtimeProfile,
    performancePlan: asset.performancePlan,
    files: {
      model: 'model.glb',
      lod1: 'model.lod1.glb',
      lod2: 'model.lod2.glb',
      collision: 'collision.json',
      recipe: 'recipe.json',
      validation: 'validation.json',
      scan: 'scan.json',
      thumbnail: 'thumbnail.webp',
      sourceAnalysis: asset.recipe.sourceImage ? 'source_analysis.json' : undefined,
    },
    integrity,
    privacy: { persistInDatabase: false, sourceImagesRetained: false },
  };
}

export function wrapAsset(asset: ContentAsset, ownerId = 'local-user', runtimeId = 'contentengin-local'): ContentAssetObject {
  const now = new Date().toISOString();
  return { id: asset.id, type: 'contentengin.asset', ownerId, runtimeId, visibility: 'local', createdAt: now, updatedAt: now, version: 1, data: asset };
}
