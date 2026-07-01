import type { AbstractEngine } from '@babylonjs/core';



export interface BabylonEngineOptions {
  antialias?: boolean;
  preserveDrawingBuffer?: boolean;
  stencil?: boolean;
  
  preferWebGPU?: boolean;
}

export interface BabylonEngineResult {
  engine: AbstractEngine;
  
  isWebGPU: boolean;
  
  webgpuInitialized: boolean;
  
  webgpuReason?: string;
}

async function probeBrowserWebGPU(): Promise<{ supported: boolean; reason?: string }> {
  if (typeof navigator === 'undefined') return { supported: true, reason: 'Navigator unavailable in this runtime; deferring to Babylon test double.' };
  const gpu = (navigator as Navigator & { gpu?: GPU }).gpu;
  if (!gpu) {
    if (typeof document === 'undefined') return { supported: true, reason: 'navigator.gpu unavailable in non-browser test runtime; deferring to Babylon test double.' };
    return { supported: false, reason: 'navigator.gpu is unavailable.' };
  }
  if (typeof globalThis !== 'undefined' && globalThis.isSecureContext === false) {
    return { supported: false, reason: 'WebGPU requires HTTPS or localhost secure context.' };
  }
  const preferences: ReadonlyArray<GPUPowerPreference | undefined> = ['high-performance', undefined, 'low-power'];
  for (const powerPreference of preferences) {
    try {
      const adapter = await gpu.requestAdapter(powerPreference ? { powerPreference } : undefined);
      if (adapter) return { supported: true };
    } catch (error) {
      if (powerPreference === 'low-power') {
        return { supported: false, reason: error instanceof Error ? error.message : String(error) };
      }
    }
  }
  return { supported: false, reason: 'No WebGPU adapter was returned.' };
}


export async function createBabylonEngine(
  canvas: HTMLCanvasElement,
  options: BabylonEngineOptions = {}
): Promise<BabylonEngineResult> {
  const {
    antialias = true,
    preserveDrawingBuffer = true,
    stencil = true,
    preferWebGPU = true,
  } = options;

  const { WebGPUEngine, Engine } = await import('@babylonjs/core');

  
  
  
  let webGPUSupported = false;
  let webgpuReason: string | undefined;
  if (!preferWebGPU) {
    webgpuReason = 'WebGPU disabled by runtime compatibility negotiation.';
  } else {
    try {
      const browserProbe = await probeBrowserWebGPU();
      webgpuReason = browserProbe.reason;
      webGPUSupported = browserProbe.supported && (await WebGPUEngine.IsSupportedAsync);
      if (browserProbe.supported && !webGPUSupported) webgpuReason = 'Babylon WebGPUEngine reported unsupported.';
    } catch (error) {
      webGPUSupported = false;
      webgpuReason = error instanceof Error ? error.message : String(error);
    }
  }

  if (webGPUSupported) {
    try {
      const engine = await WebGPUEngine.CreateAsync(canvas, {
        antialias,
        powerPreference: 'high-performance',
        enableAllFeatures: true,
        
        
        adaptToDeviceRatio: true,
      });
      return { engine, isWebGPU: true, webgpuInitialized: true };
    } catch (error) {
      webgpuReason = error instanceof Error ? error.message : String(error);
      
    }
  }

  
  const engine = new Engine(canvas, antialias, {
    preserveDrawingBuffer,
    stencil,
    antialias,
    
    
    adaptToDeviceRatio: true,
  });
  return { engine, isWebGPU: false, webgpuInitialized: false, webgpuReason };
}
