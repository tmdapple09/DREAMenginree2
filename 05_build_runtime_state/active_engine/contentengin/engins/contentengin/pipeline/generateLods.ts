import { ExportProfile, LodDef } from '../assetTypes';
const budgets:Record<ExportProfile,number>={ps3:50000,ps4:100000,ps5:200000};
export function generateLods(profile:ExportProfile):LodDef[]{ return [1,.75,.4,.2].map((ratio,i)=>({level:i, triangleBudget:Math.floor(budgets[profile]*ratio)})); }
