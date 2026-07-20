import { CONTENTENGIN_VERSION, type ContentAsset, type ContentAssetCategory } from '../assetTypes';
import { buildAnimalParts } from '../grammars/animalGrammar';
import { buildBicycleParts } from '../grammars/bicycleGrammar';
import { buildBridgeParts } from '../grammars/bridgeGrammar';
import { buildBuildingParts } from '../grammars/buildingGrammar';
import { buildHumanoidParts } from '../grammars/humanoidGrammar';
import { buildPropParts } from '../grammars/propGrammar';
import { buildRoadParts } from '../grammars/roadGrammar';
import { buildTerrainParts } from '../grammars/terrainGrammar';
import { buildTreeParts } from '../grammars/treeGrammar';
import { buildVehicleParts } from '../grammars/vehicleGrammar';
import { buildWaterParts } from '../grammars/waterGrammar';
import { buildGeometry } from '../builders/geometryBuilder';
import { resetPartIds } from '../builders/primitiveBuilder';
import { assignProceduralTextureNames } from '../builders/textureBuilder';
import { assignProceduralUv } from '../builders/uvGenerator';
import { defaultMaterials } from '../materials/proceduralMaterials';
import { createContentEnginPerformancePlan } from '../performancePlan';
import { resolveRecipe } from '../recipes/recipeResolver';
import { createSkeleton } from '../rigging/fitArmature';
import { createContentEnginRuntimeProfile } from '../runtimeProfile';
import { scanMeshForGameReadiness } from '../scan/intrinsicAssetScanner';
import { repairMeshDetailed } from '@/engins/isosurfaceAssetPipeline';
import { SHADERS } from '../shaders/shaderRegistry';
import { generateCollision } from './generateCollision';
import { generateLods } from './generateLods';
import { safeSegment } from './paths';
import { validateAsset } from './validate';

function categoryFor(assetType: string): ContentAssetCategory {
  if (assetType === 'humanoid') return 'humanoid';
  if (['quadruped', 'animal', 'bird', 'fish'].includes(assetType)) return 'animal';
  if (assetType === 'creature') return 'creature';
  if (['car', 'truck', 'vehicle', 'bicycle', 'motorcycle'].includes(assetType)) return 'vehicle';
  if (assetType === 'building') return 'architecture';
  if (['road', 'bridge'].includes(assetType)) return 'civil';
  if (['terrain', 'tree', 'water'].includes(assetType)) return 'environment';
  return 'prop';
}

function partsFor(recipe: ReturnType<typeof resolveRecipe>) {
  switch (recipe.assetType) {
    case 'humanoid': return buildHumanoidParts(recipe);
    case 'quadruped':
    case 'animal':
    case 'bird':
    case 'fish': return buildAnimalParts(recipe);
    case 'creature': return buildAnimalParts({ ...recipe, assetType: 'quadruped' });
    case 'car':
    case 'truck':
    case 'vehicle': return buildVehicleParts(recipe);
    case 'bicycle':
    case 'motorcycle': return buildBicycleParts(recipe);
    case 'building': return buildBuildingParts(recipe);
    case 'road': return buildRoadParts(recipe);
    case 'bridge': return buildBridgeParts(recipe);
    case 'terrain': return buildTerrainParts(recipe);
    case 'tree': return buildTreeParts(recipe);
    case 'water': return buildWaterParts(recipe);
    default: return buildPropParts(recipe);
  }
}

function applyProceduralPartHints(parts: ReturnType<typeof partsFor>, recipe: ReturnType<typeof resolveRecipe>) {
  const hints = Array.isArray(recipe.parameters.proceduralPartHints)
    ? recipe.parameters.proceduralPartHints as Array<{ label?: string; fit?: unknown; regionId?: string }>
    : [];
  if (!hints.length) return parts;
  const byLabel = new Map(hints.map((hint) => [hint.label, hint]));
  const attach = (part: typeof parts[number]): typeof parts[number] => {
    const hint = byLabel.get(part.label) ?? byLabel.get(part.id);
    return {
      ...part,
      metadata: {
        ...part.metadata,
        proceduralPartHint: hint,
        isosurfaceKernel: hint ? 'robust-sparse-dual-contouring' : part.metadata.isosurfaceKernel,
      },
      children: part.children.map(attach),
    };
  };
  return parts.map(attach);
}

function profileTriangleBudget(profile: ContentAsset['exportProfile']): number {
  if (profile === 'ps3') return 50_000;
  if (profile === 'ps4') return 100_000;
  return 200_000;
}

export function buildAsset(input: Parameters<typeof resolveRecipe>[0]): ContentAsset {
  const recipe = resolveRecipe(input);
  resetPartIds();
  const id = safeSegment(String(recipe.parameters.assetId ?? `ce-${recipe.assetType}-${recipe.seed}`), 'assetId');
  const rawParts = applyProceduralPartHints(partsFor(recipe), recipe);
  const parts = assignProceduralUv(rawParts);
  const materials = assignProceduralTextureNames(defaultMaterials(recipe.assetType, recipe.parameters), id);
  const standard = recipe.assetType === 'humanoid'
    ? 'humanoid'
    : ['quadruped', 'animal', 'creature'].includes(recipe.assetType)
      ? 'quadruped'
      : recipe.assetType === 'bird'
        ? 'bird'
        : recipe.assetType === 'fish'
          ? 'fish'
          : ['car', 'truck', 'vehicle', 'bicycle', 'motorcycle'].includes(recipe.assetType)
            ? 'vehicle-mechanical'
            : undefined;
  const skeleton = standard ? createSkeleton(standard, 4) : undefined;
  const animations = skeleton
    ? (standard === 'vehicle-mechanical'
      ? ['wheel-spin', 'door-open', 'door-close', 'suspension-bounce']
      : ['idle', 'walk', 'run', 'jump'])
      .map((name) => ({ name, durationSeconds: 1.2, fps: 30, targetSkeleton: skeleton.id, source: 'procedural' as const }))
    : [];
  const runtimeProfile = createContentEnginRuntimeProfile(recipe.profile);
  const performancePlan = createContentEnginPerformancePlan(runtimeProfile);
  const geometry = buildGeometry(parts);
  const vertices = Array.from({ length: geometry.positions.length / 3 }, (_, index) => ({
    x: geometry.positions[index * 3]!,
    y: geometry.positions[index * 3 + 1]!,
    z: geometry.positions[index * 3 + 2]!,
  }));
  const scanMesh = repairMeshDetailed(
    { vertices, indices: geometry.indices },
    { weldVertices: false },
  ).mesh;
  const intrinsicScan = scanMeshForGameReadiness(
    scanMesh,
    {
      // Procedural assets are assembled from independently authored parts. Open
      // boundaries remain visible in the certificate but do not block a bundle.
      allowOpenSurface: true,
      allowDisconnectedComponents: true,
      allowDuplicateVertices: true,
      triangleBudget: profileTriangleBudget(recipe.profile),
      memoryBudgetBytes: 96 * 1024 * 1024,
    },
  );
  const partial = {
    id,
    category: categoryFor(recipe.assetType),
    subcategory: recipe.assetType,
    seed: recipe.seed,
    contentenginVersion: CONTENTENGIN_VERSION,
    recipe,
    parts,
    materials,
    shaders: SHADERS,
    skeleton,
    animations,
    collision: generateCollision(parts, recipe.assetType === 'terrain' ? 'heightfield' : 'compound'),
    lods: generateLods(recipe.profile),
    intrinsicScan,
    runtimeProfile,
    performancePlan,
    exportProfile: recipe.profile,
  };
  const asset = { ...partial, validation: null as never } as ContentAsset;
  asset.validation = validateAsset(asset);
  return asset;
}
