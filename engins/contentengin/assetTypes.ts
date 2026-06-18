export type ExportProfile = 'ps3' | 'ps4' | 'ps5';
export type Visibility = 'local' | 'shared' | 'global';
export type DomainObject<TType extends string, TData> = { id:string; type:TType; ownerId:string; runtimeId:string; visibility:Visibility; createdAt:string; updatedAt:string; version:number; data:TData };
export type ContentAssetCategory = 'humanoid'|'animal'|'creature'|'vehicle'|'architecture'|'civil'|'environment'|'prop'|'material';
export interface Vec2 { x:number; y:number } export interface Vec3 { x:number; y:number; z:number }
export interface Transform { position:Vec3; rotation:Vec3; scale:Vec3 }
export type PrimitiveKind = 'box'|'beveled-box'|'sphere'|'ellipsoid'|'capsule'|'cylinder'|'cone'|'tube'|'plane'|'ribbon'|'lathe'|'extrude'|'sweep'|'custom-contour'|'terrain-grid'|'water-plane';
export interface PrimitiveSpec { kind:PrimitiveKind; segments?:number; rings?:number; bevel?:number; radius?:number; contour?:Vec2[]; path?:Vec3[]; depth?:number; smoothing?:number }
export type CollisionShapeKind = 'box'|'sphere'|'capsule'|'convex-hull'|'mesh'|'heightfield';
export interface CollisionShape { kind:CollisionShapeKind; transform:Transform; dimensions:Vec3 }
export interface RigWeights { boneNames:string[]; maxInfluences:number; mode:'rigid'|'smooth'|'auto' }
export interface PartNode { id:string; label:string; parentId?:string; category:string; dimensions:Vec3; transform:Transform; primitive:PrimitiveSpec; materialId:string; shaderId:string; rig?:RigWeights; collision?:CollisionShape; metadata:Record<string,unknown>; children:PartNode[] }
export interface TextureSlots { baseColor?:string; normal?:string; roughnessMetallic?:string; ao?:string; height?:string; emission?:string; opacity?:string }
export interface MaterialDef { id:string; name:string; shaderId:string; baseColor:string; shadowColor?:string; highlightColor?:string; roughness:number; metallic:number; opacity:number; normalStrength?:number; textureSlots:TextureSlots }
export interface ShaderDef { id:string; kind:'CE_PBR_MOBILE'|'CE_TOON'|'CE_SKIN'|'CE_HAIR'|'CE_FUR'|'CE_FOLIAGE'|'CE_WATER'|'CE_GLASS'|'CE_METAL'|'CE_TERRAIN'; parameters:Record<string,number|string|boolean> }
export interface BoneDef { name:string; parent?:string; head:Vec3; tail:Vec3; roll:number }
export interface SkeletonDef { id:string; standard:'humanoid'|'quadruped'|'bird'|'fish'|'vehicle-mechanical'|'custom'; bones:BoneDef[]; maxInfluencesPerVertex:number }
export interface AnimationClipDef { name:string; durationSeconds:number; fps:number; targetSkeleton:string; source:'procedural'|'imported'|'manual' }
export interface CollisionBlock { shapes:CollisionShape[]; strategy:'simple'|'compound'|'convex-decomposition'|'heightfield' }
export interface PhysicsDef { massKg:number; centerOfMass:Vec3; friction:number; restitution:number; drag?:number }
export interface LodDef { level:number; triangleBudget:number; path?:string }
export interface ValidationReport { gameReady:boolean; profile:ExportProfile; errors:string[]; warnings:string[]; metrics:{ triangles:number; vertices:number; materials:number; textures:number; textureMaxResolution:number; bones:number; maxWeightsPerVertex:number; glbSizeBytes:number; drawCalls:number; estimatedRuntimeMemoryBytes:number; mobileDesktopParityScore:number } }
export interface SourceImageAnalysis { width:number; height:number; dominantColors:string[]; shadowColors:string[]; highlightColors:string[]; edgeMapPath?:string; maskPath?:string; symmetryAxisX?:number; regions:ShapeRegion[] }
export interface ShapeRegion { id:string; label:'head'|'torso'|'waist'|'arm-left'|'arm-right'|'leg-left'|'leg-right'|'wheel'|'window'|'door'|'roof'|'trunk'|'branch'|'leaf'|'road'|'water'|'unknown'; bounds:{minX:number;minY:number;maxX:number;maxY:number}; centroid:Vec2; contour:Vec2[]; averageColor:string; dominantColors:string[]; confidence:number }
export interface ContentRecipe { assetType:string; seed:number; profile:ExportProfile; parameters:Record<string,unknown>; materialParameters:Record<string,unknown>; partOverrides?:Record<string,Partial<PartNode>>; sourceImage?:SourceImageAnalysis }
export interface ContentAsset { id:string; category:ContentAssetCategory; subcategory:string; seed:number; contentenginVersion:string; recipe:ContentRecipe; parts:PartNode[]; materials:MaterialDef[]; shaders:ShaderDef[]; skeleton?:SkeletonDef; animations:AnimationClipDef[]; collision:CollisionBlock; physics?:PhysicsDef; lods:LodDef[]; runtimeProfile?: import('./runtimeProfile').ContentEnginRuntimeProfile; performancePlan?: import('./performancePlan').ContentEnginPerformancePlan; exportProfile:ExportProfile; validation:ValidationReport }
export type ContentAssetObject = DomainObject<'contentengin.asset', ContentAsset>;
export const CONTENTENGIN_VERSION = '2026.06.18-mobile-desktop';
export const vec3 = (x=0,y=0,z=0):Vec3 => ({x,y,z});
export const identityTransform = ():Transform => ({position:vec3(), rotation:vec3(), scale:vec3(1,1,1)});
