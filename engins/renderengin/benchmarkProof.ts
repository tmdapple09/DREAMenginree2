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

export interface RenderTenMillionBenchmarkObject extends JsonObject {
  readonly id: string;
  readonly triangleCount: number;
  readonly instanceCount: number;
  readonly lod: 'LOD0' | 'LOD1' | 'LOD2';
}

export interface RenderTenMillionBenchmarkScene extends JsonObject {
  readonly id: string;
  readonly targetTriangles: number;
  readonly totalTriangles: number;
  readonly drawCalls: number;
  readonly objects: readonly RenderTenMillionBenchmarkObject[];
  readonly passes10M: boolean;
}

export function createTenMillionTriangleBenchmarkScene(input: { id?: string; sourceTrianglesPerMesh: number; maxInstancesPerDraw?: number }): RenderTenMillionBenchmarkScene {
  const maxInstancesPerDraw = Math.max(1, input.maxInstancesPerDraw ?? 512);
  const instancesRequired = Math.ceil(10_000_000 / Math.max(1, input.sourceTrianglesPerMesh));
  const objects: RenderTenMillionBenchmarkObject[] = [];
  let remaining = instancesRequired;
  while (remaining > 0) {
    const instanceCount = Math.min(maxInstancesPerDraw, remaining);
    objects.push({ id: `ten-mil-batch-${objects.length}`, triangleCount: input.sourceTrianglesPerMesh, instanceCount, lod: 'LOD0' });
    remaining -= instanceCount;
  }
  const totalTriangles = objects.reduce((sum, object) => sum + object.triangleCount * object.instanceCount, 0);
  return { id: input.id ?? 'render-benchmark-10m', targetTriangles: 10_000_000, totalTriangles, drawCalls: objects.length, objects, passes10M: totalTriangles >= 10_000_000 };
}

export interface RenderDeviceCapture extends JsonObject {
  readonly deviceClass: 'desktop' | 'mobile' | 'iphone';
  readonly userAgent: string;
  readonly averageGpuFrameMs: number;
  readonly averageCpuFrameMs: number;
  readonly sustainedSeconds: number;
  readonly thermalState: 'nominal' | 'fair' | 'serious' | 'critical' | 'unknown';
  readonly measuredAt: string;
}

export function certifyTenMillionScene(scene: RenderTenMillionBenchmarkScene, capture: RenderDeviceCapture): JsonObject {
  const targetFrameMs = capture.deviceClass === 'desktop' ? 16.7 : 33.4;
  const framePass = capture.averageGpuFrameMs <= targetFrameMs && capture.averageCpuFrameMs <= targetFrameMs;
  const thermalPass = capture.thermalState === 'nominal' || capture.thermalState === 'fair';
  return {
    certified: scene.passes10M && framePass && thermalPass && capture.sustainedSeconds >= 60,
    sceneId: scene.id,
    totalTriangles: scene.totalTriangles,
    targetFrameMs,
    framePass,
    thermalPass,
    sustainedPass: capture.sustainedSeconds >= 60,
    capture: capture as unknown as JsonObject,
  };
}
