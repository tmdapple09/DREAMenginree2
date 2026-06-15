import { SkeletonDef } from '../assetTypes';
export function validateSkeleton(skeleton:SkeletonDef|undefined){ const errors:string[]=[]; if(!skeleton) return {valid:true,errors}; if(skeleton.maxInfluencesPerVertex>4) errors.push('maxInfluencesPerVertex exceeds 4'); if(!skeleton.bones.length) errors.push('skeleton has no bones'); return {valid:errors.length===0,errors}; }
