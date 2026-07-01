import {
  requestWebGpuDevice,
  WebGpuRenderEngin,
  type RenderEnginFrameStats,
  type RenderEnginLifecycleHooks,
  type RenderEnginScene,
} from '@/engins/renderengin/webgpu';


export type RenderEnginGraphicsBackend = 'webgpu' | 'webgl2' | 'webgl' | 'canvas2d';

export interface WebGPURuntimeInitialization {
  readonly ready: boolean;
  readonly adapter: GPUAdapter | null;
  readonly device: GPUDevice | null;
  readonly backend: RenderEnginGraphicsBackend;
  readonly owner: 'RenderEngin';
  readonly reason?: string;
  readonly maxTextureDimension2D?: number;
}

function gpuFromNavigator(): GPU | null {
  if (typeof navigator === 'undefined') return null;
  return (navigator as Navigator & { gpu?: GPU }).gpu ?? null;
}

function fallbackBackend(): RenderEnginGraphicsBackend {
  if (typeof document === 'undefined') return 'canvas2d';
  const canvas = document.createElement('canvas');
  if (canvas.getContext('webgl2')) return 'webgl2';
  if (canvas.getContext('webgl')) return 'webgl';
  return 'canvas2d';
}

export async function initializeRenderEnginGraphicsRuntime(_powerPreference: GPUPowerPreference = 'high-performance'): Promise<WebGPURuntimeInitialization> {
  const gpu = gpuFromNavigator();
  if (!gpu) {
    return {
      ready: false,
      adapter: null,
      device: null,
      backend: fallbackBackend(),
      owner: 'RenderEngin',
      reason: 'navigator.gpu is unavailable; RenderEngin will use the best non-WebGPU fallback available.',
    };
  }

  if (typeof globalThis !== 'undefined' && globalThis.isSecureContext === false) {
    return {
      ready: false,
      adapter: null,
      device: null,
      backend: fallbackBackend(),
      owner: 'RenderEngin',
      reason: 'WebGPU requires HTTPS or localhost secure context; RenderEngin will use a fallback backend.',
    };
  }

  try {
    const { adapter, device } = await requestWebGpuDevice();
    return {
      ready: true,
      adapter,
      device,
      backend: 'webgpu',
      owner: 'RenderEngin',
      maxTextureDimension2D: device.limits.maxTextureDimension2D ?? adapter.limits.maxTextureDimension2D,
    };
  } catch (error) {
    return {
      ready: false,
      adapter: null,
      device: null,
      backend: fallbackBackend(),
      owner: 'RenderEngin',
      reason: error instanceof Error ? error.message : String(error),
    };
  }
}

export async function initializeWebGPURuntime(powerPreference: GPUPowerPreference = 'high-performance'): Promise<WebGPURuntimeInitialization> {
  return initializeRenderEnginGraphicsRuntime(powerPreference);
}

export async function isWebGPUAvailable(): Promise<boolean> {
  const runtime = await initializeRenderEnginGraphicsRuntime();
  return runtime.ready && runtime.backend === 'webgpu';
}

export async function getRendererBackend(): Promise<'webgpu' | 'webgl2' | 'webgl'> {
  const runtime = await initializeRenderEnginGraphicsRuntime();
  if (runtime.backend === 'webgpu') return 'webgpu';
  if (runtime.backend === 'webgl2') return 'webgl2';
  return 'webgl';
}

export {
  requestWebGpuDevice,
  WebGpuRenderEngin,
  type RenderEnginFrameStats,
  type RenderEnginLifecycleHooks,
  type RenderEnginScene,
};
