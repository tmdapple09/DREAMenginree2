export type RigStandard = 'humanoid'|'quadruped'|'bird'|'fish'|'vehicle-mechanical'|'custom';
export interface RiggingRequest { inputGlb:string; outputDir:string; standard:RigStandard; maxWeightsPerVertex:number }
