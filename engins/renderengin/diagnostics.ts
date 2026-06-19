import type { JsonObject } from '@/engine/engin-runtime/EnginBaseState';
import type { MeshBuffers } from './core';
import type { RenderEnginFrameStats } from './webgpu';

export interface RenderPerformanceSample extends JsonObject {
  frameIndex: number;
  cpuFrameMs: number;
  gpuFrameMs?: number;
  drawCalls: number;
  indexCount: number;
  measuredAt: string;
}

export interface RenderPerformanceReport extends JsonObject {
  sampleCount: number;
  averageCpuFrameMs: number;
  averageGpuFrameMs: number;
  estimatedFps: number;
  droppedFrameCount: number;
  averageDrawCalls: number;
  averageIndexCount: number;
  measuredAt: string;
}

export interface RenderBenchmarkScene extends JsonObject {
  id: string;
  name: string;
  objectCount: number;
  triangleCount: number;
  targetFps: number;
  targetFrameMs: number;
  mobileTargetFps: number;
}

export function createRenderPerformanceReport(samples: readonly RenderPerformanceSample[]): RenderPerformanceReport {
  const sampleCount = samples.length;
  if (!sampleCount) return { sampleCount: 0, averageCpuFrameMs: 0, averageGpuFrameMs: 0, estimatedFps: 0, droppedFrameCount: 0, averageDrawCalls: 0, averageIndexCount: 0, measuredAt: new Date().toISOString() };
  const averageCpuFrameMs = samples.reduce((sum, sample) => sum + sample.cpuFrameMs, 0) / sampleCount;
  return {
    sampleCount,
    averageCpuFrameMs,
    averageGpuFrameMs: samples.reduce((sum, sample) => sum + (sample.gpuFrameMs ?? sample.cpuFrameMs), 0) / sampleCount,
    estimatedFps: averageCpuFrameMs > 0 ? 1000 / averageCpuFrameMs : 0,
    droppedFrameCount: samples.filter((sample) => sample.cpuFrameMs > 16.7).length,
    averageDrawCalls: samples.reduce((sum, sample) => sum + sample.drawCalls, 0) / sampleCount,
    averageIndexCount: samples.reduce((sum, sample) => sum + sample.indexCount, 0) / sampleCount,
    measuredAt: new Date().toISOString(),
  };
}

export function frameStatsToPerformanceSample(stats: RenderEnginFrameStats): RenderPerformanceSample {
  return { frameIndex: stats.frameIndex, cpuFrameMs: stats.cpuFrameMs, drawCalls: stats.drawCalls, indexCount: stats.indexCount, measuredAt: stats.measuredAt };
}

export function createBenchmarkScene(mesh: MeshBuffers, objectCount: number): RenderBenchmarkScene {
  return {
    id: `render-benchmark:${mesh.vertices.length}:${objectCount}`,
    name: 'RenderEngin benchmark scene',
    objectCount,
    triangleCount: Math.floor(mesh.indices.length / 3) * objectCount,
    targetFps: 60,
    targetFrameMs: 16.7,
    mobileTargetFps: 30,
  };
}

export function evaluateRenderPerformanceGate(report: RenderPerformanceReport, scene: RenderBenchmarkScene): JsonObject {
  const fpsPass = report.estimatedFps >= scene.mobileTargetFps;
  const framePass = report.averageCpuFrameMs <= scene.targetFrameMs;
  return {
    passed: fpsPass && framePass,
    fpsPass,
    framePass,
    estimatedFps: report.estimatedFps,
    averageCpuFrameMs: report.averageCpuFrameMs,
    targetFps: scene.targetFps,
    mobileTargetFps: scene.mobileTargetFps,
    targetFrameMs: scene.targetFrameMs,
  };
}
