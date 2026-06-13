import { ShapeRegion } from '../assetTypes';
export function relabelRegion(region:ShapeRegion,label:ShapeRegion['label']):ShapeRegion{ return {...region,label}; }
