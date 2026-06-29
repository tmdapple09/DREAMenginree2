import { ContentRecipe, SourceImageAnalysis } from '../assetTypes';
import { detectSemanticAlgebraicRegions } from './regionDetector';

export function photoToRecipe(sourceImage: SourceImageAnalysis, assetType = 'humanoid'): ContentRecipe {
  const regions = detectSemanticAlgebraicRegions(sourceImage.regions ?? []);
  const proceduralPartHints = regions.map((region) => ({
    regionId: region.id,
    label: region.label,
    fit: region.algebraicFit,
    averageColor: region.averageColor,
    dominantColors: region.dominantColors,
    userConfirmed: region.userConfirmed === true,
  }));

  return {
    assetType,
    seed: sourceImage.width + sourceImage.height,
    profile: 'ps3',
    parameters: {
      sourceDriven: true,
      primaryColor: sourceImage.dominantColors[0],
      proceduralPartHints,
      isosurfaceKernel: 'robust-sparse-dual-contouring',
    },
    materialParameters: {},
    sourceImage: { ...sourceImage, regions },
  };
}
