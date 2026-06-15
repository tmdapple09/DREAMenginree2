import { ShaderDef } from '../assetTypes';
export const SHADERS: ShaderDef[] = [
 {id:'CE_PBR_MOBILE',kind:'CE_PBR_MOBILE',parameters:{mobile:true}}, {id:'CE_TOON',kind:'CE_TOON',parameters:{steps:3}}, {id:'CE_SKIN',kind:'CE_SKIN',parameters:{ramp:'warm'}}, {id:'CE_HAIR',kind:'CE_HAIR',parameters:{anisotropic:0.35}}, {id:'CE_FUR',kind:'CE_FUR',parameters:{cards:true}}, {id:'CE_FOLIAGE',kind:'CE_FOLIAGE',parameters:{wind:true}}, {id:'CE_WATER',kind:'CE_WATER',parameters:{reflection:'fake'}}, {id:'CE_GLASS',kind:'CE_GLASS',parameters:{alpha:0.45}}, {id:'CE_METAL',kind:'CE_METAL',parameters:{packedRM:true}}, {id:'CE_TERRAIN',kind:'CE_TERRAIN',parameters:{layers:4}}
];
export const getShader=(id:string)=>SHADERS.find(s=>s.id===id)??SHADERS[0]!;
