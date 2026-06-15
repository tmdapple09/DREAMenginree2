export type ModifierKind = 'mirror'|'bevel'|'solidify'|'subdivide'|'decimate'|'bend'|'twist'|'taper'|'noise-displace'|'boolean-union'|'boolean-subtract'|'lathe-revolve'|'edge-wear'|'surface-scratch'|'damage-dent'|'cloth-thickness'|'foliage-wind-weight';
export interface ModifierSpec { kind:ModifierKind; amount?:number; axis?:'x'|'y'|'z' }
export function applyModifierMetadata<T extends {metadata:Record<string,unknown>}>(part:T, modifier:ModifierSpec):T { return {...part, metadata:{...part.metadata, modifiers:[...((part.metadata.modifiers as ModifierSpec[]|undefined)??[]), modifier]}}; }
