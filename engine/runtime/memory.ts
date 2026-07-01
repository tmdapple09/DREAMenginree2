











export const MEMORY_SIZE = 16 * 1024 * 1024; 


export const MAX_WORKERS = 64;


export const CACHE_LINE = 64; 


export const ENTITY_COUNT = 10_000;


const FLOAT32_BYTES = 4;


export const BAR_SEAM_ATOMICS_INDEX = 0;


export const BAR_SEAM_SCALE = 1_000;


export const SOA_POSX_OFFSET = CACHE_LINE; 


export const SOA_POSY_OFFSET = SOA_POSX_OFFSET + ENTITY_COUNT * FLOAT32_BYTES; 


export const SOA_POSZ_OFFSET = SOA_POSY_OFFSET + ENTITY_COUNT * FLOAT32_BYTES; 


export const SOA_VELX_OFFSET = SOA_POSZ_OFFSET + ENTITY_COUNT * FLOAT32_BYTES; 


export const SOA_VELY_OFFSET = SOA_VELX_OFFSET + ENTITY_COUNT * FLOAT32_BYTES; 


export const SOA_VELZ_OFFSET = SOA_VELY_OFFSET + ENTITY_COUNT * FLOAT32_BYTES; 


const SOA_END_OFFSET = SOA_VELZ_OFFSET + ENTITY_COUNT * FLOAT32_BYTES; 


export const HOMEDREAM_PRIVATE_OFFSET: number =
  Math.ceil(SOA_END_OFFSET / CACHE_LINE) * CACHE_LINE; 


export const PUBLIC_VIEW_LIMIT = HOMEDREAM_PRIVATE_OFFSET;


let _memoryMap: ConformMemoryMap | null = null;



























const _ENGIN_ENTITY_COUNT  = 10_000;

const _ENGIN_F32_BYTES     = 4;

const _ENGIN_CHANNEL_BYTES = _ENGIN_ENTITY_COUNT * _ENGIN_F32_BYTES; 


export const OFFSET_POS_X: number = 0;


export const OFFSET_POS_Y: number = OFFSET_POS_X + _ENGIN_CHANNEL_BYTES;      


export const OFFSET_POS_Z: number = OFFSET_POS_Y + _ENGIN_CHANNEL_BYTES;      


export const OFFSET_VEL_X: number = OFFSET_POS_Z + _ENGIN_CHANNEL_BYTES;      


export const OFFSET_VEL_Y: number = OFFSET_VEL_X + _ENGIN_CHANNEL_BYTES;      


export const OFFSET_VEL_Z: number = OFFSET_VEL_Y + _ENGIN_CHANNEL_BYTES;      


export const OFFSET_DAYDREAM_TYPE: number = OFFSET_VEL_Z + _ENGIN_CHANNEL_BYTES; 


export const OFFSET_DREAMDM_BAR_Y = 250_000;


export const OFFSET_DREAMDM_BAR_X = 250_004;


export const OFFSET_TELEMETRY = 250_008;


export const OFFSET_LOCKED_STATE = 250_520;


export const OFFSET_AXIS_STATE = 250_524;


export const SAB_BYTES = OFFSET_AXIS_STATE + 4; 









export const SEAM_CTRL_IDX_BAR_Y    = 0;


export const SEAM_CTRL_IDX_BAR_X    = 1;


export const SEAM_CTRL_IDX_LOCKED   = 2;


export const SEAM_CTRL_IDX_AXIS     = 3;


export const SNAP_THRESHOLD_RATIO = 0.05;


export const BAR_Y_SCALE = 100;


 export const ENGIN_OFFSET_POS_X         = OFFSET_POS_X;

 export const ENGIN_OFFSET_POS_Y         = OFFSET_POS_Y;

 export const ENGIN_OFFSET_POS_Z         = OFFSET_POS_Z;

 export const ENGIN_OFFSET_VEL_X         = OFFSET_VEL_X;

 export const ENGIN_OFFSET_VEL_Y         = OFFSET_VEL_Y;

 export const ENGIN_OFFSET_VEL_Z         = OFFSET_VEL_Z;

 export const ENGIN_OFFSET_DREAMDM_BAR_Y = OFFSET_DREAMDM_BAR_Y;

 export const ENGIN_OFFSET_DREAMDM_BAR_X = OFFSET_DREAMDM_BAR_X;

 export const ENGIN_OFFSET_LOCKED_STATE  = OFFSET_LOCKED_STATE;

 export const ENGIN_OFFSET_AXIS_STATE    = OFFSET_AXIS_STATE;

 export const ENGIN_OFFSET_TELEMETRY     = OFFSET_TELEMETRY;

 export const ENGIN_SAB_SIZE             = SAB_BYTES;








export interface ConformMemoryMap {
  
  readonly buffer: SharedArrayBuffer;
  
  readonly control: Int32Array;
  
  readonly posX: Float32Array;
  readonly posY: Float32Array;
  readonly posZ: Float32Array;
  readonly velX: Float32Array;
  readonly velY: Float32Array;
  readonly velZ: Float32Array;
}


export interface MemoryPolicyResult {
  
  allowed: boolean;
  
  ruleCode: 'OK' | 'C29_PRIVACY' | 'MEM_PRIVATE_ACCESS';
  
  reason?: string;
}


export interface Workgroup {
  
  workerIndex: number;
  
  startIndex: number;
  
  endIndex: number;
}


export interface EntityBounds {
  posXStart: number;
  posXEnd: number;
  posYStart: number;
  posYEnd: number;
  posZStart: number;
  posZEnd: number;
  velXStart: number;
  velXEnd: number;
  velYStart: number;
  velYEnd: number;
  velZStart: number;
  velZEnd: number;
}




export function getConformMemoryMap(): ConformMemoryMap {
  if (_memoryMap) return _memoryMap;

  const buffer = new SharedArrayBuffer(MEMORY_SIZE);

  _memoryMap = {
    buffer,
    
    control: new Int32Array(buffer, 0, CACHE_LINE / 4),
    posX: new Float32Array(buffer, SOA_POSX_OFFSET, ENTITY_COUNT),
    posY: new Float32Array(buffer, SOA_POSY_OFFSET, ENTITY_COUNT),
    posZ: new Float32Array(buffer, SOA_POSZ_OFFSET, ENTITY_COUNT),
    velX: new Float32Array(buffer, SOA_VELX_OFFSET, ENTITY_COUNT),
    velY: new Float32Array(buffer, SOA_VELY_OFFSET, ENTITY_COUNT),
    velZ: new Float32Array(buffer, SOA_VELZ_OFFSET, ENTITY_COUNT),
  };

  return _memoryMap;
}


export function _resetConformMemoryMap(): void {
  _memoryMap = null;
}


export function writeBarSeam(splitRatio: number): void {
  if (!Number.isFinite(splitRatio)) return;
  const clamped = Math.max(0, Math.min(1, splitRatio));
  const map = getConformMemoryMap();
  const encoded = Math.round(clamped * BAR_SEAM_SCALE);
  Atomics.store(map.control, BAR_SEAM_ATOMICS_INDEX, encoded);
}


export function readBarSeam(): number {
  const map = getConformMemoryMap();
  const encoded = Atomics.load(map.control, BAR_SEAM_ATOMICS_INDEX);
  return encoded / BAR_SEAM_SCALE;
}


export function boogieMemoryGuard(
  byteOffset: number,
  isOwner: boolean,
): MemoryPolicyResult {
  
  if (byteOffset < 0 || byteOffset >= MEMORY_SIZE) {
    return {
      allowed: false,
      ruleCode: 'MEM_PRIVATE_ACCESS',
      reason: `Byte offset ${byteOffset} is out of the valid range [0, ${MEMORY_SIZE}).`,
    };
  }

  
  if (byteOffset < PUBLIC_VIEW_LIMIT) {
    return { allowed: true, ruleCode: 'OK' };
  }

  
  if (!isOwner) {
    return {
      allowed: false,
      ruleCode: 'C29_PRIVACY',
      reason:
        `Access denied: offset ${byteOffset} falls within the HomeDream private memory region ` +
        `(starts at ${HOMEDREAM_PRIVATE_OFFSET}). ` +
        `The Public View pointer must not reach or exceed ${PUBLIC_VIEW_LIMIT}.`,
    };
  }

  return { allowed: true, ruleCode: 'OK' };
}


export function createEnginSAB(): SharedArrayBuffer {
  return new SharedArrayBuffer(SAB_BYTES);
}


export function buildWorkgroups(workerCount: number): Workgroup[] {
  if (workerCount < 1) {
    throw new RangeError(`workerCount must be ≥ 1, got ${workerCount}`);
  }
  
  const count = Math.min(workerCount, MAX_WORKERS);
  const perWorker = Math.ceil(ENTITY_COUNT / count);
  const groups: Workgroup[] = [];
  for (let i = 0; i < count; i++) {
    const startIndex = i * perWorker;
    const endIndex = Math.min(startIndex + perWorker, ENTITY_COUNT);
    groups.push({ workerIndex: i, startIndex, endIndex });
    if (endIndex >= ENTITY_COUNT) break;
  }
  return groups;
}


export function isIndexInBounds(index: number, wg: Workgroup): boolean {
  return index >= wg.startIndex && index < wg.endIndex;
}


export function f32Channel(sab: SharedArrayBuffer, byteOffset: number): Float32Array {
  return new Float32Array(sab, byteOffset, ENTITY_COUNT);
}


export function u8DaydreamType(sab: SharedArrayBuffer): Uint8Array {
  return new Uint8Array(sab, OFFSET_DAYDREAM_TYPE, ENTITY_COUNT);
}


export function f32DreamDMBarY(sab: SharedArrayBuffer): Float32Array {
  return new Float32Array(sab, OFFSET_DREAMDM_BAR_Y, 1);
}


export function int32DreamDMBarY(sab: SharedArrayBuffer): Int32Array {
  return new Int32Array(sab, OFFSET_DREAMDM_BAR_Y, 1);
}


export function int32DreamDMBarX(sab: SharedArrayBuffer): Int32Array {
  return new Int32Array(sab, OFFSET_DREAMDM_BAR_X, 1);
}


export function int32LockedState(sab: SharedArrayBuffer): Int32Array {
  return new Int32Array(sab, OFFSET_LOCKED_STATE, 1);
}


export function int32AxisState(sab: SharedArrayBuffer): Int32Array {
  return new Int32Array(sab, OFFSET_AXIS_STATE, 1);
}


export function f64Telemetry(sab: SharedArrayBuffer): Float64Array {
  return new Float64Array(sab, OFFSET_TELEMETRY, MAX_WORKERS);
}


export function isSABAvailable(): boolean {
  if (typeof SharedArrayBuffer === 'undefined') return false;
  if (typeof crossOriginIsolated !== 'undefined' && !crossOriginIsolated) return false;
  try {
    
    new SharedArrayBuffer(4);
    return true;
  } catch {
    return false;
  }
}

export function getEntityBounds(wg: Workgroup): EntityBounds {
  const F32 = 4;
  return {
    posXStart: OFFSET_POS_X + wg.startIndex * F32,
    posXEnd:   OFFSET_POS_X + wg.endIndex   * F32,
    posYStart: OFFSET_POS_Y + wg.startIndex * F32,
    posYEnd:   OFFSET_POS_Y + wg.endIndex   * F32,
    posZStart: OFFSET_POS_Z + wg.startIndex * F32,
    posZEnd:   OFFSET_POS_Z + wg.endIndex   * F32,
    velXStart: OFFSET_VEL_X + wg.startIndex * F32,
    velXEnd:   OFFSET_VEL_X + wg.endIndex   * F32,
    velYStart: OFFSET_VEL_Y + wg.startIndex * F32,
    velYEnd:   OFFSET_VEL_Y + wg.endIndex   * F32,
    velZStart: OFFSET_VEL_Z + wg.startIndex * F32,
    velZEnd:   OFFSET_VEL_Z + wg.endIndex   * F32,
  };
}


export function validateWorkgroup(wg: Workgroup): void {
  if (wg.startIndex < 0) {
    throw new RangeError(`Workgroup ${wg.workerIndex}: startIndex ${wg.startIndex} must be ≥ 0`);
  }
  if (wg.endIndex > ENTITY_COUNT) {
    throw new RangeError(
      `Workgroup ${wg.workerIndex}: endIndex ${wg.endIndex} exceeds ENTITY_COUNT (${ENTITY_COUNT})`,
    );
  }
  if (wg.startIndex >= wg.endIndex) {
    throw new RangeError(
      `Workgroup ${wg.workerIndex}: startIndex ${wg.startIndex} must be < endIndex ${wg.endIndex}`,
    );
  }
}


export function getWorkerCount(): number {
  const concurrency =
    typeof navigator !== 'undefined' && navigator.hardwareConcurrency
      ? navigator.hardwareConcurrency
      : 2;
  return Math.min(Math.max(concurrency - 1, 1), MAX_WORKERS);
}






