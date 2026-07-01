




interface EnginWasmExports {
  
  processAudioBufferSIMD: (bufPtr: number, count: number, gain: number) => void;
  
  tickPhysicsSIMD: (posPtr: number, velPtr: number, count: number, dt: number) => void;
  
  memory: WebAssembly.Memory;
}

export interface WasmAudioBridge {
  
  readonly isWasmActive: boolean;

  
  applyGain: (buffer: Float32Array, gain: number) => void;

  
  applyMultiChannelGain: (channels: Float32Array[], gains: number[]) => void;

  
  mixDown: (sources: Float32Array[], gains: number[], output: Float32Array) => void;

  
  dispose: () => void;
}



let cachedExports: EnginWasmExports | null = null;
let loadAttempted = false;


async function loadWasmModule(): Promise<EnginWasmExports | null> {
  if (loadAttempted) return cachedExports;
  loadAttempted = true;

  if (typeof WebAssembly === 'undefined') return null;

  try {
    const response = await fetch('/workers/engin-shader.wasm');
    if (!response.ok) return null;

    const arrayBuffer = await response.arrayBuffer();

    
    
    const memory = new WebAssembly.Memory({ initial: 16, maximum: 64 });

    const { instance } = await WebAssembly.instantiate(arrayBuffer, {
      env: {
        memory,
        abort: () => {  },
      },
    });

    cachedExports = instance.exports as any as EnginWasmExports;
    return cachedExports;
  } catch {
    return null;
  }
}



function jsApplyGain(buffer: Float32Array, gain: number): void {
  
  let i = 0;
  const len = buffer.length;
  for (; i + 4 <= len; i += 4) {
    buffer[i]     *= gain;
    buffer[i + 1] *= gain;
    buffer[i + 2] *= gain;
    buffer[i + 3] *= gain;
  }
  for (; i < len; i++) {
    buffer[i] *= gain;
  }
}

function jsMixDown(
  sources: Float32Array[],
  gains: number[],
  output: Float32Array,
): void {
  output.fill(0);
  for (let s = 0; s < sources.length; s++) {
    const src = sources[s];
    const g = gains[s] ?? 1.0;
    for (let i = 0; i < output.length; i++) {
      output[i] += src[i] * g;
    }
  }
}



function wasmApplyGain(
  exports: EnginWasmExports,
  buffer: Float32Array,
  gain: number,
): void {
  const memory = exports.memory;
  const wasmView = new Float32Array(memory.buffer, 0, buffer.length);

  
  wasmView.set(buffer);

  
  exports.processAudioBufferSIMD(0, buffer.length, gain);

  
  buffer.set(wasmView.subarray(0, buffer.length));
}




export async function createWasmAudioBridge(): Promise<WasmAudioBridge> {
  const exports = await loadWasmModule();

  const isWasmActive = exports !== null;

  const applyGain = (buffer: Float32Array, gain: number): void => {
    if (exports) {
      wasmApplyGain(exports, buffer, gain);
    } else {
      jsApplyGain(buffer, gain);
    }
  };

  const applyMultiChannelGain = (
    channels: Float32Array[],
    gains: number[],
  ): void => {
    for (let ch = 0; ch < channels.length; ch++) {
      applyGain(channels[ch], gains[ch] ?? 1.0);
    }
  };

  const mixDown = (
    sources: Float32Array[],
    gains: number[],
    output: Float32Array,
  ): void => {
    
    if (exports) {
      
      const processed = sources.map((src, i: number) => {
        const copy = new Float32Array(src);
        wasmApplyGain(exports, copy, gains[i] ?? 1.0);
        return copy;
      });
      output.fill(0);
      for (const buf of processed) {
        for (let i = 0; i < output.length; i++) {
          output[i] += buf[i];
        }
      }
    } else {
      jsMixDown(sources, gains, output);
    }
  };

  return {
    get isWasmActive() { return isWasmActive; },
    applyGain,
    applyMultiChannelGain,
    mixDown,
    dispose: () => {
      cachedExports = null;
      loadAttempted = false;
    },
  };
}
