import { PartNode } from '../assetTypes';
export function assignProceduralUv(parts:PartNode[]):PartNode[]{ return parts.map(p=>({...p, metadata:{...p.metadata, uv:'box-triplanar-mobile'}, children:assignProceduralUv(p.children)})); }
