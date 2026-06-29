import { MaterialDef } from '../assetTypes';
export function assignProceduralTextureNames(materials:MaterialDef[], assetId:string):MaterialDef[]{ return materials.map(m=>({...m, textureSlots:{...m.textureSlots, baseColor:m.textureSlots.baseColor??`${assetId}/${m.id}_base.webp`}})); }
