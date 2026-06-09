/**
 * WebGPU detection and renderer utilities.
 *
 * This file owns the public DREAMengin WebGPU probe. It does not merely check
 * for a flag: initializeWebGPURuntime() requests an adapter and a GPUDevice so
 * supported iPhone/Safari/desktop browsers prove the GPU path can actually run.
 */

export interface WebGPURuntimeInitialization {
  readonly ready: boolean;
  readonly adapter: GPUAdapter | null;
  readonly device: GPUDevice | null;
  readonly reason?: string;
  readonly maxTextureDimension2D?: number;
}

function gpuFromNavigator(): GPU | null {
  if (typeof navigator === 'undefined') return null;
  return (navigator as Navigator & { gpu?: GPU }).gpu ?? null;
}

export async function initializeWebGPURuntime(
  powerPreference: GPUPowerPreference = 'high-performance',
): Promise<WebGPURuntimeInitialization> {
  const gpu = gpuFromNavigator();
  if (!gpu) return { ready: false, adapter: null, device: null, reason: 'navigator.gpu is unavailable.' };
  if (typeof globalThis !== 'undefined' && globalThis.isSecureContext === false) {
    return { ready: false, adapter: null, device: null, reason: 'WebGPU requires HTTPS or localhost secure context.' };
  }

  const preferences: ReadonlyArray<GPUPowerPreference | undefined> = powerPreference === 'high-performance'
    ? ['high-performance', undefined, 'low-power']
    : [powerPreference, undefined, 'high-performance'];

  let lastReason = 'No WebGPU adapter was returned.';
  for (const preference of preferences) {
    try {
      const adapter = await gpu.requestAdapter(preference ? { powerPreference: preference } : undefined);
      if (!adapter) {
        lastReason = `No WebGPU adapter for ${preference ?? 'default'} preference.`;
        continue;
      }
      const device = await adapter.requestDevice();
      return {
        ready: true,
        adapter,
        device,
        maxTextureDimension2D: device.limits.maxTextureDimension2D ?? adapter.limits.maxTextureDimension2D,
      };
    } catch (error) {
      lastReason = error instanceof Error ? error.message : String(error);
    }
  }

  return { ready: false, adapter: null, device: null, reason: lastReason };
}

export async function isWebGPUAvailable(): Promise<boolean> {
  const runtime = await initializeWebGPURuntime();
  runtime.device?.destroy?.();
  return runtime.ready;
}

/**
 * Return a label describing the best available GPU backend so UI can
 * surface it to the user.
 */
export async function getRendererBackend(): Promise<'webgpu' | 'webgl2' | 'webgl'> {
  if (await isWebGPUAvailable()) return 'webgpu';

  if (typeof document === 'undefined') return 'webgl2';

  const canvas = document.createElement('canvas');
  if (canvas.getContext('webgl2')) return 'webgl2';
  return 'webgl';
}

