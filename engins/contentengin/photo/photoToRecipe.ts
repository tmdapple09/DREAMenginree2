import { ContentRecipe, SourceImageAnalysis } from '../assetTypes';
export function photoToRecipe(sourceImage:SourceImageAnalysis, assetType='humanoid'):ContentRecipe{ return {assetType,seed:sourceImage.width+sourceImage.height,profile:'ps3',parameters:{sourceDriven:true,primaryColor:sourceImage.dominantColors[0]},materialParameters:{},sourceImage}; }
