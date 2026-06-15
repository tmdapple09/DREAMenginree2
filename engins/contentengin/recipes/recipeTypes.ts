export type { ContentRecipe, ExportProfile } from '../assetTypes';
export const SUPPORTED_ASSET_TYPES = ['humanoid','quadruped','animal','bird','fish','creature','car','truck','vehicle','bicycle','motorcycle','building','road','bridge','terrain','tree','water','weapon','furniture','container','tool'] as const;
export type SupportedAssetType = typeof SUPPORTED_ASSET_TYPES[number];
