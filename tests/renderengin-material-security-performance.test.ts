import { describe, expect, it } from 'vitest';
import {
  authorizeRenderAssetOperation,
  createBenchmarkScene,
  createParsedObjRenderAsset,
  createRenderMaterial,
  createRenderPerformanceReport,
  evaluateRenderPerformanceGate,
  evaluateScannedAssetRenderGate,
  frameStatsToPerformanceSample,
  packRenderMaterial,
  updateRenderMaterial,
  createContentEnginRenderHandoff,
  createGameEnginRenderHandoff,
} from '@/engins/renderengin';

const OBJ_SOURCE = `
v 0 0 0
v 1 0 0
v 0 1 0
f 1 2 3
`;

describe('RenderEngin materials, authorization, handoffs, and performance diagnostics', () => {
  it('packs editable PBR material controls for the GPU uniform path', () => {
    const material = createRenderMaterial({ id: 'material:test', ownerId: 'owner:test', runtimeId: 'runtime:test', name: 'Gold glass', albedo: [1, 0.8, 0.2], metallic: 1, roughness: 0.2, alpha: 0.75, emissive: [0.1, 0.05, 0] });
    const updated = updateRenderMaterial(material, { roughness: 2, metallic: -1 });
    expect(updated.data.roughness).toBe(1);
    expect(updated.data.metallic).toBe(0);
    expect(packRenderMaterial(material.data)).toHaveLength(12);
  });

  it('gates render asset access through the core domain authorization checker', () => {
    const parsed = createParsedObjRenderAsset({ id: 'asset:test', ownerId: 'owner:test', runtimeId: 'runtime:test', name: 'triangle.obj', source: OBJ_SOURCE });
    const granted = authorizeRenderAssetOperation('read', parsed.asset, { actorId: 'owner:test', runtimeId: 'runtime:test', surfaceRuntimeIds: ['runtime:test'], collaboration: { active: false, participantIds: [], editorIds: [] } });
    const denied = authorizeRenderAssetOperation('destroy', parsed.asset, { actorId: 'other:user', runtimeId: 'runtime:test', surfaceRuntimeIds: ['runtime:test'], collaboration: { active: false, participantIds: [], editorIds: [] } });
    expect(granted.granted).toBe(true);
    expect(denied.granted).toBe(false);
  });

  it('creates cross-Engin render handoff envelopes without direct Engin-to-Engin calls', () => {
    expect(createContentEnginRenderHandoff({ assetId: 'asset:1', ownerId: 'owner:test', runtimeId: 'runtime:test' }).targetIntent).toBe('render.asset.preview');
    expect(createGameEnginRenderHandoff({ assetId: 'asset:1', ownerId: 'owner:test', runtimeId: 'runtime:test', cartridgeId: 'cart:test' }).type).toBe('game.cartridge.mesh.preview');
  });


  it('combines ContentEngin scan evidence with observed RenderEngin performance', () => {
    const scan = {
      similaritySignature: 'sf-render',
      certificate: {
        version: 1 as const,
        scannerVersion: 'test',
        gameReady: true,
        score: 90,
        signature: 'sf-render',
        topologyClosed: true,
        triangleBudget: 50000,
        estimatedBytes: 1024,
        criticalIssueCount: 0,
        warningCount: 0,
        requiredRepairIds: [],
      },
      topology: {
        vertices: 3, triangles: 1, validTriangles: 1, invalidTriangles: 0,
        degenerateTriangles: 0, skinnyTriangles: 0, duplicateVertices: 0,
        isolatedVertices: 0, boundaryEdges: 0, boundaryLoops: 0,
        openBoundaryChains: 0, nonManifoldEdges: 0, connectedComponents: 1,
        largestComponentVertices: 3, estimatedBytes: 1024, averageVertexDegree: 2,
        maxVertexDegree: 2,
      },
    };
    const provisional = evaluateScannedAssetRenderGate(scan);
    expect(provisional.passed).toBe(true);
    expect(provisional.provisional).toBe(true);
    const report = createRenderPerformanceReport([
      { frameIndex: 1, cpuFrameMs: 12, drawCalls: 1, indexCount: 3, measuredAt: new Date().toISOString() },
    ]);
    const scene = { id: 'scan-scene', name: 'scan', objectCount: 1, triangleCount: 1, targetFps: 60, targetFrameMs: 16.7, mobileTargetFps: 30 };
    const observed = evaluateScannedAssetRenderGate(scan, report, scene);
    expect(observed.passed).toBe(true);
    expect(observed.performanceObserved).toBe(true);
  });

  it('summarizes frame performance and evaluates benchmark gates', () => {
    const samples = [
      frameStatsToPerformanceSample({ frameIndex: 1, cpuFrameMs: 10, drawCalls: 2, indexCount: 6, estimatedFps: 100, droppedFrame: false, measuredAt: new Date().toISOString(), gpuLatencyMeasured: false }),
      frameStatsToPerformanceSample({ frameIndex: 2, cpuFrameMs: 20, drawCalls: 2, indexCount: 6, estimatedFps: 50, droppedFrame: true, measuredAt: new Date().toISOString(), gpuLatencyMeasured: false }),
    ];
    const report = createRenderPerformanceReport(samples);
    const mesh = createParsedObjRenderAsset({ id: 'asset:test', ownerId: 'owner:test', runtimeId: 'runtime:test', name: 'triangle.obj', source: OBJ_SOURCE }).mesh;
    const scene = createBenchmarkScene(mesh, 2);
    expect(report.droppedFrameCount).toBe(1);
    expect(evaluateRenderPerformanceGate(report, scene).estimatedFps).toBeGreaterThan(0);
  });
});
