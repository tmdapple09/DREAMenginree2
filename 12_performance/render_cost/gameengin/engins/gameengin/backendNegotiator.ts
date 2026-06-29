'use client';

import type { RuntimeBackendDiagnostics, RendererBackendId } from './cartridge';
import type { CartridgeManifestEntry } from './cartridges/manifest';
import { decideRuntimeQuality } from './runtime/RuntimeQuality';

type NavigatorWithGPU = Navigator & { gpu?: GPU };

function hasWebGL2(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2', { powerPreference: 'high-performance' }));
  } catch {
    return false;
  }
}

function unsupportedReason(backend: RendererBackendId): string {
  if ((backend === 'webgpu' || backend === 'babylon-webgpu') && !window.isSecureContext) return 'WebGPU requires HTTPS or localhost.';
  if (backend === 'webgpu' || backend === 'babylon-webgpu') return 'navigator.gpu unavailable.';
  if (backend === 'webgl2' || backend === 'babylon-webgl2') return 'WebGL2 context unavailable.';
  return 'Backend probe failed.';
}

function supportedBackend(backend: RendererBackendId): boolean {
  if (backend === 'dom' || backend === 'canvas2d') return true;
  if (backend === 'webgl2' || backend === 'babylon-webgl2') return hasWebGL2();
  if (backend === 'webgpu' || backend === 'babylon-webgpu') {
    return typeof navigator !== 'undefined' && Boolean((navigator as NavigatorWithGPU).gpu) && window.isSecureContext;
  }
  return false;
}

export async function negotiateRendererBackend(manifest: CartridgeManifestEntry): Promise<RuntimeBackendDiagnostics> {
  const started = performance.now();
  const preferredBackend = manifest.launch.backendPreference[0];
  const spans: RuntimeBackendDiagnostics['spans'] = manifest.launch.warmupPlan.pipelines.map((pipeline) => ({
    id: pipeline.id,
    label: pipeline.label,
    status: 'pending',
  }));

  let selectedBackend = manifest.launch.fallbackBackend;
  let fallbackReason: string | undefined;
  for (const candidate of manifest.launch.backendPreference) {
    const span = spans.find((item) => item.id.includes(candidate));
    if (span) span.status = 'running';
    const supported = supportedBackend(candidate);
    if (span) {
      span.status = supported ? 'complete' : 'failed';
      span.ms = Math.max(1, Math.round(performance.now() - started));
      if (!supported) span.message = unsupportedReason(candidate);
    }
    if (supported) {
      selectedBackend = candidate;
      break;
    }
  }

  if (selectedBackend !== preferredBackend) fallbackReason = `${preferredBackend} unavailable; negotiated ${selectedBackend}.`;

  let deviceLabel: string | undefined;
  let limits: Record<string, number> | undefined;
  if (selectedBackend.includes('webgpu') && (navigator as NavigatorWithGPU).gpu) {
    const adapter = await (navigator as NavigatorWithGPU).gpu?.requestAdapter({ powerPreference: 'high-performance' });
    if (adapter) {
      deviceLabel = 'WebGPU adapter';
      limits = Object.fromEntries(Object.entries(adapter.limits).filter(([, value]) => typeof value === 'number')) as Record<string, number>;
    }
  }

  const webgpuReady = selectedBackend.includes('webgpu');
  const quality = decideRuntimeQuality(16.67, webgpuReady);
  spans.push({ id: `quality:${quality.quality}`, label: `Runtime quality ${quality.quality}`, status: 'complete', message: quality.reason, ms: Math.max(1, Math.round(performance.now() - started)) });

  return {
    selectedBackend,
    preferredBackend,
    fallbackReason,
    warmupComplete: spans.every((span) => span.status === 'complete' || span.status === 'failed'),
    warmupProgress: spans.length === 0 ? 1 : spans.filter((span) => span.status === 'complete' || span.status === 'failed').length / spans.length,
    secureContext: window.isSecureContext,
    workerSupported: typeof Worker !== 'undefined',
    offscreenCanvasSupported: typeof OffscreenCanvas !== 'undefined',
    deviceLabel,
    limits,
    spans,
  };
}

export function serverBootstrapDiagnostics(manifest: CartridgeManifestEntry): RuntimeBackendDiagnostics {
  return {
    selectedBackend: manifest.launch.fallbackBackend,
    preferredBackend: manifest.launch.backendPreference[0],
    fallbackReason: 'Waiting for client backend negotiation.',
    warmupComplete: false,
    warmupProgress: 0,
    secureContext: false,
    workerSupported: false,
    offscreenCanvasSupported: false,
    spans: manifest.launch.warmupPlan.pipelines.map((pipeline) => ({ id: pipeline.id, label: pipeline.label, status: 'pending' })),
  };
}

