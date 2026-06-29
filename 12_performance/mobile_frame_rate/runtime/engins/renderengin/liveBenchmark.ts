import type { JsonObject } from '@/engine/engin-runtime/EnginBaseState';
import type { WebGpuRenderEngin } from './webgpu';

export interface RenderLiveBenchmarkResult extends JsonObject {
  frameCount: number;
  averageCpuFrameMs: number;
  estimatedFps: number;
  droppedFrameCount: number;
  isMobileClassDevice: boolean;
  targetFrameMs: number;
  passed: boolean;
  measuredAt: string;
}

export function isMobileRenderUserAgent(userAgent: string): boolean {
  return /iphone|ipad|android|mobile/i.test(userAgent);
}

export function summarizeLiveBenchmark(samples: readonly number[], isMobileClassDevice: boolean): RenderLiveBenchmarkResult {
  const frameCount = samples.length;
  const averageCpuFrameMs = frameCount ? samples.reduce((sum, sample) => sum + sample, 0) / frameCount : 0;
  const targetFrameMs = isMobileClassDevice ? 33.4 : 16.7;
  return {
    frameCount,
    averageCpuFrameMs,
    estimatedFps: averageCpuFrameMs > 0 ? 1000 / averageCpuFrameMs : 0,
    droppedFrameCount: samples.filter((sample) => sample > targetFrameMs).length,
    isMobileClassDevice,
    targetFrameMs,
    passed: frameCount > 0 && averageCpuFrameMs <= targetFrameMs,
    measuredAt: new Date().toISOString(),
  };
}

export function runRenderLiveBenchmark(renderer: WebGpuRenderEngin, frameCount: number, userAgent = globalThis.navigator?.userAgent ?? ''): RenderLiveBenchmarkResult {
  const samples: number[] = [];
  for (let frame = 0; frame < Math.max(1, frameCount); frame += 1) {
    samples.push(renderer.renderFrame().cpuFrameMs);
  }
  return summarizeLiveBenchmark(samples, isMobileRenderUserAgent(userAgent));
}
