import type { JsonObject } from '@/engine/engin-runtime/EnginBaseState';

export interface RenderMillionPolyProof extends JsonObject {
  targetTriangles: number;
  instanceCount: number;
  sourceTrianglesPerInstance: number;
  totalTriangles: number;
  drawCalls: number;
  passes10M: boolean;
  targetFrameMs: number;
  mobileTargetFrameMs: number;
}

export function createTenMillionPolygonProof(input: { sourceTrianglesPerInstance: number; instanceCount: number; drawCalls: number; targetFrameMs?: number; mobileTargetFrameMs?: number }): RenderMillionPolyProof {
  const totalTriangles = input.sourceTrianglesPerInstance * input.instanceCount;
  return {
    targetTriangles: 10_000_000,
    sourceTrianglesPerInstance: input.sourceTrianglesPerInstance,
    instanceCount: input.instanceCount,
    totalTriangles,
    drawCalls: input.drawCalls,
    passes10M: totalTriangles >= 10_000_000,
    targetFrameMs: input.targetFrameMs ?? 16.7,
    mobileTargetFrameMs: input.mobileTargetFrameMs ?? 33.4,
  };
}

export function evaluateGpuBenchmarkProof(proof: RenderMillionPolyProof, measured: { averageGpuFrameMs: number; averageCpuFrameMs: number; droppedFrameCount: number }): JsonObject {
  const desktopPass = proof.passes10M && measured.averageGpuFrameMs <= proof.targetFrameMs;
  const mobilePass = proof.passes10M && measured.averageGpuFrameMs <= proof.mobileTargetFrameMs;
  return { passed: desktopPass || mobilePass, desktopPass, mobilePass, ...proof, ...measured };
}
