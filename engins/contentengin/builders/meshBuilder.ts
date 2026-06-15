import { PartNode } from '../assetTypes'; import { flattenParts, primitiveStats } from './primitiveBuilder';
export function computeMeshMetrics(parts:PartNode[]){ return flattenParts(parts).reduce((m,p)=>{ const s=primitiveStats(p.primitive.kind,p.primitive.segments??12); return {vertices:m.vertices+s.vertices, triangles:m.triangles+s.triangles}; },{vertices:0,triangles:0}); }
