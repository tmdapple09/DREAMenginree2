import { PartNode, vec3 } from '../assetTypes'; import { createPart } from '../builders/primitiveBuilder';
export const p=createPart;
export function root(label:string, children:PartNode[]):PartNode { return p(label,'root','box',vec3(0.01,0.01,0.01),'mat_body','CE_PBR_MOBILE',vec3(),children); }
export function symmetrical(label:string, category:string, z:number, x:number, dims={x:.2,y:.2,z:.4}, mat='mat_body'):PartNode[]{ return [p(`Left${label}`,category,'capsule',dims,mat,'CE_PBR_MOBILE',vec3(-x,0,z)),p(`Right${label}`,category,'capsule',dims,mat,'CE_PBR_MOBILE',vec3(x,0,z))]; }
