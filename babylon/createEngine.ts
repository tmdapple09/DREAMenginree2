import type { AbstractEngine } from '@babylonjs/core';

/**
 * lib/babylon/createEngine.ts
 *
 * WebGPU-first Babylon.js engine factory.
 *
 * Strategy:
 *   1. Detect WebGPU support via WebGPUEngine.IsSupportedAsync (async GPU adapter probe).
 *   2. If supported, create a WebGPUEngine via WebGPUEngine.CreateAsync — this is the
 *      preferred path for high-fidelity rendering on modern devices.
 *   3. Fall back to Engine (WebGL2 / WebGL1) if WebGPU is unavailable or the async
 *      init fails, so every device stays functional.
 *
 * Architecture justification: docs/ARCHITECTURE.md §10 — render-on-demand, hardware
 * scaling, performance-first. WebGPU eliminates the WebGL draw-call overhead and
 * enables compute shaders for future WarpEngine integration.
 *
 * Quality pipeline:
 *   After creating the engine, consult the DREAM_ENGINE_WEBGPU_DIRECTOR for all
 *   rendering decisions (passes, LOD, shadows, TAA, resolution scale).
 *
 *   import { webGPUDirector, defaultCameraSignals, defaultDirectorMetrics }
 *     from '@/lib/webgpu/director';
 *
 *   // inside the render loop:
 *   const frame = webGPUDirector.update({ metrics, camera, objects });
 *   applyDirectorFrame(engine, scene, frame, window.devicePixelRatio);
 *
 * Usage:
 *   const engine = await createBabylonEngine(canvas, { antialias: true });
 */

export interface BabylonEngineOptions {
  antialias?: boolean;
  preserveDrawingBuffer?: boolean;
  stencil?: boolean;
  /**
   * WebGPU is the default rendering standard. Set to false only when a
   * cartridge has negotiated a known Babylon/WebGPU incompatibility and must
   * launch through the stable WebGL backend instead of crashing.
   */
  preferWebGPU?: boolean;
}

export interface BabylonEngineResult {
  engine: AbstractEngine;
  /** true when WebGPUEngine is active; false when WebGL Engine is active */
  isWebGPU: boolean;
  /** true only when the WebGPU engine actually initialized, not just when support was advertised */
  webgpuInitialized: boolean;
  /** diagnostic reason when DREAMengin fell back to WebGL */
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

/**
 * Creates the best available Babylon.js engine for the given canvas.
 * Prefers WebGPU; falls back to WebGL2/WebGL1 automatically.
 *
 * MUST be called from browser context (not SSR).
 */
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

  // 1. Attempt WebGPU. Probe navigator.gpu first in real browsers so
  // iPhone/Safari-style support initializes through an actual adapter path,
  // then let Babylon create the rendering engine.
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
        // Render at physical pixel density on HiDPI/retina screens — same
        // policy as the WebGL path so both paths produce crisp output.
        adaptToDeviceRatio: true,
      });
      return { engine, isWebGPU: true, webgpuInitialized: true };
    } catch (error) {
      webgpuReason = error instanceof Error ? error.message : String(error);
      // WebGPU init failed — fall through to WebGL without pretending it initialized.
    }
  }

  // 2. WebGL2 / WebGL1 fallback
  const engine = new Engine(canvas, antialias, {
    preserveDrawingBuffer,
    stencil,
    antialias,
    // Render at physical pixel density on HiDPI/retina screens so the canvas
    // drawing buffer matches the device's native resolution.
    adaptToDeviceRatio: true,
  });
  return { engine, isWebGPU: false, webgpuInitialized: false, webgpuReason };
}
