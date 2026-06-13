import { ContentAsset, ExportProfile, ValidationReport } from '../assetTypes';
import { computeMeshMetrics } from '../builders/meshBuilder';
import { expectedMaterialIdsForAsset, inspectGlb } from './exportGlb';

const limits: Record<ExportProfile, { triangles: number; texWarn: number; texMax: number; materials: number; bones: number; size: number }> = {
  ps3: { triangles: 50000, texWarn: 1024, texMax: 2048, materials: 8, bones: 75, size: 15_000_000 },
  ps4: { triangles: 100000, texWarn: 2048, texMax: 2048, materials: 12, bones: 128, size: 35_000_000 },
  ps5: { triangles: 200000, texWarn: 4096, texMax: 4096, materials: 20, bones: 256, size: 75_000_000 },
};

export function validateAsset(
  asset: Omit<ContentAsset, 'validation'> & { validation?: ValidationReport },
  glb?: Buffer,
): ValidationReport {
  const lim = limits[asset.exportProfile];
  const metrics0 = computeMeshMetrics(asset.parts);
  const glbInspection = glb ? inspectGlb(glb) : null;
  const metrics = {
    triangles: glbInspection ? Math.floor(glbInspection.indexCount / 3) : metrics0.triangles,
    vertices: glbInspection ? glbInspection.vertexCount : metrics0.vertices,
    materials: asset.materials.length,
    textures: asset.materials.filter((m) => Object.keys(m.textureSlots).length).length,
    textureMaxResolution: Number(asset.recipe.parameters.textureMaxResolution ?? lim.texWarn),
    bones: asset.skeleton?.bones.length ?? 0,
    maxWeightsPerVertex: asset.skeleton?.maxInfluencesPerVertex ?? 0,
    glbSizeBytes: glb?.length ?? 0,
  };
  const errors: string[] = [];
  const warnings: string[] = [];
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
  }
  if (metrics.triangles > lim.triangles) errors.push(`LOD0 triangles ${metrics.triangles} exceed ${lim.triangles}.`);
  if (metrics.materials > lim.materials) warnings.push(`Material count ${metrics.materials} exceeds recommended ${lim.materials}.`);
  if (metrics.textureMaxResolution > lim.texMax) errors.push(`Texture resolution ${metrics.textureMaxResolution} exceeds hard max ${lim.texMax}.`);
  else if (metrics.textureMaxResolution > lim.texWarn) warnings.push(`Texture resolution ${metrics.textureMaxResolution} exceeds recommended ${lim.texWarn}.`);
  if (metrics.bones > lim.bones) errors.push(`Bone count ${metrics.bones} exceeds ${lim.bones}.`);
  if (metrics.maxWeightsPerVertex > 4) errors.push('Weights per vertex exceed 4.');
  if (metrics.glbSizeBytes > lim.size) errors.push(`GLB size ${metrics.glbSizeBytes} exceeds ${lim.size}.`);
  if (!asset.recipe) errors.push('Missing recipe.');
  if (!asset.collision?.shapes?.length) warnings.push('Missing collision.');
  if (!asset.lods?.length) warnings.push('Missing LODs.');
  return { gameReady: errors.length === 0, profile: asset.exportProfile, errors, warnings, metrics };
}
