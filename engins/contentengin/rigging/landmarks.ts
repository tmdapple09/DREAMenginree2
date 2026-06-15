import { PartNode, Vec3, vec3 } from '../assetTypes';
export function estimateLandmarks(parts:PartNode[]):Record<string,Vec3>{ return {root:vec3(), head:parts.find(p=>p.label.toLowerCase().includes('head'))?.transform.position??vec3(0,0,1)}; }
