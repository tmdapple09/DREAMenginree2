export interface ControlMapping {
  id: string;
  assetId: string;
  inputSource: string;
  commandTarget: string;
  sensitivity: number;
  ownerId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface JoystickInput {
  x: number;
  y: number;
}

export interface AssetControlCommand {
  assetId: string;
  commandTarget: string;
  value: number;
}

export function mapJoystickToAsset(
  input: JoystickInput,
  mappings: readonly ControlMapping[]
): AssetControlCommand[] {
  return mappings.map((mapping) => ({
    assetId: mapping.assetId,
    commandTarget: mapping.commandTarget,
    value: (mapping.inputSource.includes('x') ? input.x : input.y) * mapping.sensitivity,
  }));
}
