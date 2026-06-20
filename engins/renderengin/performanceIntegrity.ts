import type { JsonObject } from '@/engine/engin-runtime/EnginBaseState';

export interface RenderPerformanceIntegrityThresholds extends JsonObject {
  minFps30FrameMs: number;
  minFps60FrameMs: number;
  maxDroppedFrameRatio: number;
  maxAverageGpuLatencyMs: number;
}

export const DEFAULT_RENDER_PERFORMANCE_THRESHOLDS: RenderPerformanceIntegrityThresholds = Object.freeze({
  minFps30FrameMs: 33.4,
  minFps60FrameMs: 16.7,
  maxDroppedFrameRatio: 0.05,
  maxAverageGpuLatencyMs: 16.7,
});

export function evaluateRenderPerformanceIntegrity(input: { frameTimes: readonly number[]; gpuLatencies?: readonly number[]; thresholds?: RenderPerformanceIntegrityThresholds }): JsonObject {
  const thresholds = input.thresholds ?? DEFAULT_RENDER_PERFORMANCE_THRESHOLDS;
  const averageFrameMs = input.frameTimes.length ? input.frameTimes.reduce((sum, ms) => sum + ms, 0) / input.frameTimes.length : Number.POSITIVE_INFINITY;
  const droppedFrameRatio = input.frameTimes.length ? input.frameTimes.filter((ms) => ms > thresholds.minFps60FrameMs).length / input.frameTimes.length : 1;
  const averageGpuLatencyMs = input.gpuLatencies?.length ? input.gpuLatencies.reduce((sum, ms) => sum + ms, 0) / input.gpuLatencies.length : averageFrameMs;
  return {
    pass30fps: averageFrameMs <= thresholds.minFps30FrameMs,
    pass60fps: averageFrameMs <= thresholds.minFps60FrameMs,
    passDroppedFrames: droppedFrameRatio <= thresholds.maxDroppedFrameRatio,
    passGpuLatency: averageGpuLatencyMs <= thresholds.maxAverageGpuLatencyMs,
    averageFrameMs,
    averageGpuLatencyMs,
    droppedFrameRatio,
    passed: averageFrameMs <= thresholds.minFps30FrameMs && droppedFrameRatio <= thresholds.maxDroppedFrameRatio && averageGpuLatencyMs <= thresholds.maxAverageGpuLatencyMs,
  };
}
