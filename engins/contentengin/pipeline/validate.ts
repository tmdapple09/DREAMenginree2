import { verifyGameReadyCertificate } from '@/lib/gameReadyIntegrity';
import type {
  AnimationClipDef,
  BoneDef,
  ContentAsset,
  ExportProfile,
  SkeletonDef,
  ValidationReport,
  Vec3,
} from '../assetTypes';
import { computeMeshMetrics } from '../builders/meshBuilder';
import { expectedMaterialIdsForAsset, inspectGlb } from './exportGlb';

const limits: Record<ExportProfile, {
  triangles: number;
  texWarn: number;
  texMax: number;
  materials: number;
  bones: number;
  size: number;
}> = {
  ps3: { triangles: 50_000, texWarn: 1024, texMax: 2048, materials: 8, bones: 75, size: 15_000_000 },
  ps4: { triangles: 100_000, texWarn: 2048, texMax: 2048, materials: 12, bones: 128, size: 35_000_000 },
  ps5: { triangles: 200_000, texWarn: 4096, texMax: 4096, materials: 20, bones: 256, size: 75_000_000 },
};

function finiteVec3(value: Vec3): boolean {
  return Number.isFinite(value.x) && Number.isFinite(value.y) && Number.isFinite(value.z);
}

function boneLength(bone: BoneDef): number {
  return Math.hypot(
    bone.tail.x - bone.head.x,
    bone.tail.y - bone.head.y,
    bone.tail.z - bone.head.z,
  );
}

function validateSkeletonDefinition(skeleton: SkeletonDef | undefined): boolean {
  if (!skeleton) return true;
  if (!skeleton.id || !skeleton.bones.length) return false;
  if (!Number.isInteger(skeleton.maxInfluencesPerVertex)
    || skeleton.maxInfluencesPerVertex < 1
    || skeleton.maxInfluencesPerVertex > 4) return false;

  const byName = new Map<string, BoneDef>();
  for (const bone of skeleton.bones) {
    if (!bone.name || byName.has(bone.name)) return false;
    if (!finiteVec3(bone.head) || !finiteVec3(bone.tail) || !Number.isFinite(bone.roll)) return false;
    if (boneLength(bone) <= 1e-6) return false;
    byName.set(bone.name, bone);
  }
  for (const bone of skeleton.bones) {
    if (bone.parent === bone.name) return false;
    if (bone.parent && !byName.has(bone.parent)) return false;
  }

  const visiting = new Set<string>();
  const visited = new Set<string>();
  const visit = (name: string): boolean => {
    if (visited.has(name)) return true;
    if (visiting.has(name)) return false;
    visiting.add(name);
    const parent = byName.get(name)?.parent;
    if (parent && !visit(parent)) return false;
    visiting.delete(name);
    visited.add(name);
    return true;
  };
  return skeleton.bones.every((bone) => visit(bone.name));
}

function validateAnimations(
  animations: readonly AnimationClipDef[],
  skeleton: SkeletonDef | undefined,
): boolean {
  if (!animations.length) return true;
  if (!skeleton) return false;
  const names = new Set<string>();
  return animations.every((clip) => {
    if (!clip.name || names.has(clip.name)) return false;
    names.add(clip.name);
    return Number.isFinite(clip.durationSeconds)
      && clip.durationSeconds > 0
      && Number.isFinite(clip.fps)
      && clip.fps > 0
      && clip.targetSkeleton === skeleton.id;
  });
}

function collisionValid(asset: Pick<ContentAsset, 'collision'>): boolean {
  if (!asset.collision?.shapes?.length) return false;
  return asset.collision.shapes.every((shape) => finiteVec3(shape.dimensions)
    && shape.dimensions.x > 0
    && shape.dimensions.y > 0
    && shape.dimensions.z > 0
    && finiteVec3(shape.transform.position)
    && finiteVec3(shape.transform.rotation)
    && finiteVec3(shape.transform.scale));
}

function lodDefinitionsValid(asset: Pick<ContentAsset, 'lods'>): boolean {
  const ordered = [...(asset.lods ?? [])].sort((left, right) => left.level - right.level);
  if (ordered.length !== 3 || ordered.some((lod, index) => lod.level !== index)) return false;
  if (ordered.some((lod) => !Number.isInteger(lod.triangleBudget) || lod.triangleBudget < 1 || !lod.path)) return false;
  return ordered[0]!.triangleBudget > ordered[1]!.triangleBudget
    && ordered[1]!.triangleBudget > ordered[2]!.triangleBudget;
}

export function validateAsset(
  asset: Omit<ContentAsset, 'validation'> & { validation?: ValidationReport },
  glb?: Buffer,
): ValidationReport {
  const limit = limits[asset.exportProfile];
  const meshMetrics = computeMeshMetrics(asset.parts);
  const glbInspection = glb ? inspectGlb(glb) : null;
  const sourceCertificateValid = verifyGameReadyCertificate(asset.intrinsicScan.certificate);
  const certificateValid = glbInspection?.gameReadyCertificate
    ? verifyGameReadyCertificate(glbInspection.gameReadyCertificate) && glbInspection.geometryDigestVerified
    : sourceCertificateValid;
  const topology = asset.intrinsicScan.topology;
  const skeletonValid = validateSkeletonDefinition(asset.skeleton);
  const animationsValid = validateAnimations(asset.animations, asset.skeleton);
  const collisionShapeCount = asset.collision?.shapes?.length ?? 0;
  const metrics: ValidationReport['metrics'] = {
    triangles: glbInspection ? Math.floor(glbInspection.indexCount / 3) : meshMetrics.triangles,
    vertices: glbInspection ? glbInspection.vertexCount : meshMetrics.vertices,
    texcoords: glbInspection?.texcoordCount ?? 0,
    tangents: glbInspection?.tangentCount ?? 0,
    texcoordFinite: glbInspection?.texcoordFinite ?? true,
    tangentFinite: glbInspection?.tangentFinite ?? true,
    tangentUnitRatio: glbInspection?.tangentUnitRatio ?? 1,
    degenerateUvTriangles: glbInspection?.degenerateUvTriangles ?? 0,
    materials: asset.materials.length,
    embeddedTextures: glbInspection?.embeddedTextureCount ?? 0,
    textures: glbInspection?.embeddedTextureCount
      ?? asset.materials.filter((material) => Object.keys(material.textureSlots).length > 0).length,
    textureMaxResolution: glbInspection?.textureMaxDimension
      || Number(asset.recipe.parameters.textureMaxResolution ?? limit.texWarn),
    bones: asset.skeleton?.bones.length ?? 0,
    maxWeightsPerVertex: asset.skeleton?.maxInfluencesPerVertex ?? 0,
    skeletonValid,
    animationsValid,
    riggingStatus: glbInspection?.riggingStatus ?? (asset.skeleton ? 'metadata-only' : 'none'),
    glbSizeBytes: glb?.length ?? 0,
    drawCalls: glbInspection ? glbInspection.meshPrimitiveCount : asset.materials.length,
    collisionShapes: collisionShapeCount,
    coordinateConventionValid: glbInspection?.coordinateConventionValid ?? true,
    estimatedRuntimeMemoryBytes: (glb?.length ?? 0)
      + meshMetrics.vertices * 48
      + (glbInspection?.embeddedTextureCount ?? asset.materials.length) * 4_096,
    mobileDesktopParityScore: asset.runtimeProfile?.desktopClassOutput ? 1 : 0.82,
    topologyScore: asset.intrinsicScan.score,
    similaritySignature: glbInspection?.canonicalSimilaritySignature ?? asset.intrinsicScan.canonicalSimilaritySignature,
    orientedSimilaritySignature: glbInspection?.orientedSimilaritySignature ?? asset.intrinsicScan.orientedSimilaritySignature,
    geometryDigest: glbInspection?.geometryDigest ?? asset.intrinsicScan.geometryDigest,
    scanDigest: glbInspection?.scanDigest ?? asset.intrinsicScan.scanDigest,
    certificateValid,
    boundaryLoops: topology.boundaryLoops,
    nonManifoldEdges: topology.nonManifoldEdges,
    degenerateTriangles: topology.degenerateTriangles,
    duplicateFaces: topology.duplicateFaces,
    inconsistentWindingEdges: topology.inconsistentWindingEdges,
    selfIntersections: topology.selfIntersections,
    disconnectedPieces: topology.connectedComponents,
    pivotOffsetRatio: topology.pivotOffsetRatio,
  };

  const errors: string[] = [];
  const warnings: string[] = [];
  if (!sourceCertificateValid) errors.push('ContentEngin intrinsic scan certificate is invalid or modified.');
  if (metrics.triangles <= 0 || metrics.vertices <= 0) errors.push('Exported GLB must contain real mesh vertices and triangles.');
  if (glbInspection && !glbInspection.valid) errors.push(...glbInspection.errors);
  if (glbInspection) {
    const expectedMaterials = expectedMaterialIdsForAsset(asset);
    const exportedMaterials = new Set(glbInspection.primitiveMaterialIds);
    if (expectedMaterials.length > 1 && glbInspection.meshPrimitiveCount < expectedMaterials.length) {
      errors.push(`GLB material grouping incomplete: expected ${expectedMaterials.length} material primitives, found ${glbInspection.meshPrimitiveCount}.`);
    }
    for (const materialId of expectedMaterials) {
      if (!exportedMaterials.has(materialId)) errors.push(`GLB missing primitive for material ${materialId}.`);
    }
    if (metrics.texcoords !== metrics.vertices) errors.push('GLB UV coordinates are missing or do not match the exported vertex count.');
    if (metrics.tangents !== metrics.vertices) errors.push('GLB tangent vectors are missing or do not match the exported vertex count.');
    if (!metrics.texcoordFinite) errors.push('GLB UV coordinates contain non-finite values.');
    if (!metrics.tangentFinite || metrics.tangentUnitRatio < 0.999) errors.push('GLB tangent basis is invalid or not normalized.');
    if (metrics.degenerateUvTriangles > 0) errors.push(`GLB contains ${metrics.degenerateUvTriangles} triangles with zero UV area.`);
    if (metrics.embeddedTextures !== metrics.materials) errors.push('Every exported material must have one embedded texture.');
    if (!metrics.coordinateConventionValid) errors.push('GLB coordinate convention must be right-handed, Y-up, -Z forward, and meters.');
    if (!glbInspection.geometryDigestVerified) errors.push('GLB geometry bytes do not match the embedded ContentEngin certificate.');
  }
  if (metrics.triangles > limit.triangles) errors.push(`LOD0 triangles ${metrics.triangles} exceed ${limit.triangles}.`);
  if (metrics.materials > limit.materials) warnings.push(`Material count ${metrics.materials} exceeds recommended ${limit.materials}.`);
  if (metrics.textureMaxResolution > limit.texMax) errors.push(`Texture resolution ${metrics.textureMaxResolution} exceeds hard max ${limit.texMax}.`);
  else if (metrics.textureMaxResolution > limit.texWarn) warnings.push(`Texture resolution ${metrics.textureMaxResolution} exceeds recommended ${limit.texWarn}.`);
  if (metrics.bones > limit.bones) errors.push(`Bone count ${metrics.bones} exceeds ${limit.bones}.`);
  if (metrics.maxWeightsPerVertex > 4) errors.push('Weights per vertex exceed 4.');
  if (!metrics.skeletonValid) errors.push('Skeleton contains duplicate, cyclic, missing-parent, non-finite, or zero-length bones.');
  if (!metrics.animationsValid) errors.push('Animation metadata has invalid timing, duplicate names, or a missing target skeleton.');
  if (metrics.riggingStatus === 'metadata-only' && asset.skeleton) {
    warnings.push('Skeleton and animation data are metadata-only; this GLB is certified as a static mesh until skin weights are authored.');
  }
  if (metrics.glbSizeBytes > limit.size) errors.push(`GLB size ${metrics.glbSizeBytes} exceeds ${limit.size}.`);
  if (metrics.drawCalls > (asset.runtimeProfile?.maxDrawCalls ?? 48)) warnings.push(`Draw calls ${metrics.drawCalls} exceed mobile-first target ${asset.runtimeProfile?.maxDrawCalls ?? 48}.`);
  if (metrics.estimatedRuntimeMemoryBytes > 96_000_000) warnings.push(`Estimated runtime memory ${metrics.estimatedRuntimeMemoryBytes} exceeds mobile-first soft budget 96000000.`);
  if (metrics.mobileDesktopParityScore < 0.95) warnings.push('Runtime profile must preserve desktop-class output quality on mobile-first targets.');
  if (!asset.recipe) errors.push('Missing recipe.');
  if (!collisionValid(asset)) errors.push('Collision geometry is missing, non-finite, or has non-positive dimensions.');
  if (metrics.collisionShapes > 32 && asset.collision.strategy !== 'heightfield') errors.push(`Collision shape count ${metrics.collisionShapes} exceeds the compound mobile budget of 32.`);
  if (!lodDefinitionsValid(asset)) errors.push('LOD definitions must contain exactly LOD0, LOD1, and LOD2 with decreasing budgets and concrete paths.');
  errors.push(...asset.intrinsicScan.criticalIssues.filter((issue) => !errors.includes(issue)));
  warnings.push(...asset.intrinsicScan.warnings.filter((issue) => !warnings.includes(issue)));
  if (!asset.intrinsicScan.gameReady) warnings.push(`Intrinsic game-ready scan score is ${asset.intrinsicScan.score}/100 (${asset.intrinsicScan.similaritySignature}).`);
  return { gameReady: errors.length === 0, profile: asset.exportProfile, errors, warnings, metrics };
}
