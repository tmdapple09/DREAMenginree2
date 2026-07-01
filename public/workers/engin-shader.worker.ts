



const ENTITY_COUNT      = 10_000;
const F32_BYTES         = 4;
const F32_CHANNEL_BYTES = ENTITY_COUNT * F32_BYTES; 

const OFFSET_POS_X        = 0;
const OFFSET_POS_Y        = OFFSET_POS_X + F32_CHANNEL_BYTES;
const OFFSET_POS_Z        = OFFSET_POS_Y + F32_CHANNEL_BYTES;
const OFFSET_VEL_X        = OFFSET_POS_Z + F32_CHANNEL_BYTES;
const OFFSET_VEL_Y        = OFFSET_VEL_X + F32_CHANNEL_BYTES;
const OFFSET_VEL_Z        = OFFSET_VEL_Y + F32_CHANNEL_BYTES;
const OFFSET_DREAMDM_BAR_Y = 250_000;  
const OFFSET_DREAMDM_BAR_X = 250_004;  
const OFFSET_TELEMETRY    = 250_008;  
const OFFSET_LOCKED_STATE = 250_520;  
const OFFSET_AXIS_STATE   = 250_524;  


const BAR_Y_SCALE = 100;

interface Workgroup {
  workerIndex: number;
  startIndex:  number;
  endIndex:    number;
}

let sab:             SharedArrayBuffer | null = null;
let workgroup:       Workgroup | null         = null;
let workerWasmMemory: WebAssembly.Memory | null = null; 
let running    = false;
let rafHandle  = 0;


let posX: Float32Array;
let posY: Float32Array;
let posZ: Float32Array;
let velX: Float32Array;
let velY: Float32Array;
let velZ: Float32Array;
let barY: Int32Array;      
let barX: Int32Array;      
let lockedState: Int32Array; 
let axisState: Int32Array;   
let telemetry: Float64Array;


function wasmSIMDAddF32x4(
  pArr: Float32Array,
  vArr: Float32Array,
  start: number,
  end: number,
): void {
  
  let i = start;
  for (; i + 4 <= end; i += 4) {
    pArr[i]     += vArr[i];
    pArr[i + 1] += vArr[i + 1];
    pArr[i + 2] += vArr[i + 2];
    pArr[i + 3] += vArr[i + 3];
  }
  
  for (; i < end; i++) {
    pArr[i] += vArr[i];
  }
}

interface WasmExports {
  tickPhysicsSIMD: (posPtr: number, velPtr: number, count: number, deltaTime: number) => void;
  processAudioBufferSIMD: (bufPtr: number, count: number, gain: number) => void;
  hashBytesFNV1A?: (ptr: number, count: number) => number;
  shapeGlowFieldSIMD?: (intensityPtr: number, velocityPtr: number, count: number, deltaTime: number, resonance: number) => void;
}

let wasmExports: WasmExports | null = null;


async function tryLoadWasm(wasmUrl: string, memory: WebAssembly.Memory | null): Promise<void> {
  if (typeof WebAssembly === 'undefined' || !memory) return;

  try {
    const response = await fetch(wasmUrl);
    if (!response.ok) return;

    const arrayBuffer = await response.arrayBuffer();

    
    
    const { instance } = await WebAssembly.instantiate(arrayBuffer, {
      env: {
        memory,
        abort: (msg: number, file: number, line: number, col: number) => {
          console.error(`[EnginShaderWorker][Wasm] abort: msg=${msg} file=${file} line=${line} col=${col}`);
        },
      },
    });

    wasmExports     = instance.exports as any as WasmExports;
    console.info('[EnginShaderWorker] Wasm SIMD engine loaded — near-native physics active.');
  } catch {
    
  }
}


function assertInBounds(index: number): boolean {
  if (!workgroup) return false;
  if (index >= workgroup.startIndex && index < workgroup.endIndex) return true;

  self.postMessage({
    type: 'bounds_violation',
    workerIndex:    workgroup.workerIndex,
    attemptedIndex: index,
    workgroup,
  });
  return false;
}

function tick(): void {
  if (!workgroup || !sab) return;

  const t0 = performance.now();

  const { startIndex, endIndex, workerIndex } = workgroup;

  
  
  
  
  const isLandscape = Atomics.load(axisState, 0) === 1;
  const activeBar = isLandscape ? barX : barY;
  const dreamDMBarOffset = Atomics.load(activeBar, 0) / BAR_Y_SCALE;

  
  
  const isLocked = Atomics.load(lockedState, 0) === 1;
  void dreamDMBarOffset; 
  void isLocked;         

  
  
  if (!assertInBounds(startIndex) || !assertInBounds(endIndex - 1)) {
    return;
  }

  const count = endIndex - startIndex;

  if (wasmExports) {
    
    
    
    wasmExports.tickPhysicsSIMD(
      OFFSET_POS_X + startIndex * 4,
      OFFSET_VEL_X + startIndex * 4,
      count,
      1 / 60, 
    );
    wasmExports.tickPhysicsSIMD(
      OFFSET_POS_Y + startIndex * 4,
      OFFSET_VEL_Y + startIndex * 4,
      count,
      1 / 60,
    );
    wasmExports.tickPhysicsSIMD(
      OFFSET_POS_Z + startIndex * 4,
      OFFSET_VEL_Z + startIndex * 4,
      count,
      1 / 60,
    );
  } else {
    
    wasmSIMDAddF32x4(posX, velX, startIndex, endIndex);
    wasmSIMDAddF32x4(posY, velY, startIndex, endIndex);
    wasmSIMDAddF32x4(posZ, velZ, startIndex, endIndex);
  }

  
  
  
  if (dreamDMBarOffset !== 0) {
    for (let i = startIndex; i < endIndex; i++) {
      if (posY[i] < dreamDMBarOffset) {
        posY[i] = dreamDMBarOffset;
        
        if (velY[i] < 0) velY[i] = 0;
      }
    }
  }

  
  const microsecondsPerTick = (performance.now() - t0) * 1_000;
  telemetry[workerIndex] = microsecondsPerTick;

  
  if (microsecondsPerTick > 1_000) {
    self.postMessage({
      type: 'wasm_budget_exceeded',
      workerIndex,
      microsecondsPerTick,
      usingWasm: wasmExports !== null,
    });
  }

  
  self.postMessage({
    type: 'tick',
    workerIndex,
    microsecondsPerTick,
  });
}

function rafLoop(): void {
  if (!running) return;
  tick();
  rafHandle = requestAnimationFrame(rafLoop);
}

self.onmessage = (evt: MessageEvent) => {
  const msg = evt.data as {
    type: string;
    sab?: SharedArrayBuffer;
    workgroup?: Workgroup;
    wasmUrl?: string;
    wasmMemory?: WebAssembly.Memory;
  };

  switch (msg.type) {
    case 'init': {
      if (!msg.sab || !msg.workgroup) {
        console.error('[EnginShaderWorker] init message missing sab or workgroup');
        return;
      }

      sab              = msg.sab;
      workgroup        = msg.workgroup;
      
      workerWasmMemory = msg.wasmMemory ?? null;

      
      posX        = new Float32Array(sab, OFFSET_POS_X,          ENTITY_COUNT);
      posY        = new Float32Array(sab, OFFSET_POS_Y,          ENTITY_COUNT);
      posZ        = new Float32Array(sab, OFFSET_POS_Z,          ENTITY_COUNT);
      velX        = new Float32Array(sab, OFFSET_VEL_X,          ENTITY_COUNT);
      velY        = new Float32Array(sab, OFFSET_VEL_Y,          ENTITY_COUNT);
      velZ        = new Float32Array(sab, OFFSET_VEL_Z,          ENTITY_COUNT);
      barY        = new Int32Array(sab, OFFSET_DREAMDM_BAR_Y,   1);
      barX        = new Int32Array(sab, OFFSET_DREAMDM_BAR_X,   1);
      lockedState = new Int32Array(sab, OFFSET_LOCKED_STATE,    1);
      axisState   = new Int32Array(sab, OFFSET_AXIS_STATE,      1);
      telemetry   = new Float64Array(sab, OFFSET_TELEMETRY,      64);

      running   = true;

      
      
      if (typeof requestAnimationFrame === 'function') {
        rafHandle = requestAnimationFrame(rafLoop);
      } else {
        
        const fallbackLoop = () => {
          if (!running) return;
          tick();
          setTimeout(fallbackLoop, 16);
        };
        fallbackLoop();
      }
      break;
    }

    case 'wasm_init': {
      
      
      
      const url    = msg.wasmUrl ?? '/workers/engin-shader.wasm';
      const memory = msg.wasmMemory ?? workerWasmMemory;
      tryLoadWasm(url, memory).catch(() => {
        
      });
      break;
    }

    case 'stop': {
      running = false;
      if (typeof cancelAnimationFrame === 'function' && rafHandle) {
        cancelAnimationFrame(rafHandle);
      }
      break;
    }

    default:
      break;
  }
};
