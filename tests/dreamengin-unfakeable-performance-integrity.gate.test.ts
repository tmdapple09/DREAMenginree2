import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const domainCores = readFileSync('lib/engin-runtime/EnginDomainCores.ts', 'utf8');
const hotRuntime = readFileSync('lib/engin-runtime/HotRuntime.ts', 'utf8');
const enginRuntime = readFileSync('lib/engin-runtime/EnginRuntime.ts', 'utf8');
const babylonEngine = readFileSync('lib/babylon/createEngine.ts', 'utf8');
const webgpuFacade = readFileSync('lib/webgpu.ts', 'utf8');
const codeHook = readFileSync('lib/engins/code/useCodeEnginRuntime.ts', 'utf8');
const gameHook = readFileSync('lib/engins/game/useGameEnginRuntime.ts', 'utf8');
const musicHook = readFileSync('lib/engins/music/useStarMakerEnginRuntime.ts', 'utf8');
const contentHook = readFileSync('lib/engins/content/useContentEnginRuntime.ts', 'utf8');
const brandHook = readFileSync('lib/engins/brand/useBrandEnginRuntime.ts', 'utf8');
const labHook = readFileSync('lib/engins/lab/useLabEnginRuntime.ts', 'utf8');
const scorecard = readFileSync('lib/engin-runtime/EnginCapabilityScorecard.ts', 'utf8');

describe('DREAMengin unfakeable performance integrity gate', () => {
  it('does not fabricate WebGPU or canonical scorecard passes with literal zero placeholders', () => {
    expect(domainCores).not.toMatch(/hardware\.webgpu\s*\?\s*probe\.measurement\(dimension,\s*0\)/);
    expect(domainCores).not.toMatch(/gpu\([^)]*\).*probe\.measurement\([^,]+,\s*0\)/s);
    expect(domainCores).not.toMatch(/probe\.measurement\('gpu-render-latency',\s*0\)/);
    expect(domainCores).not.toMatch(/probe\.measurement\('gpu-compute-throughput',\s*0\)/);
    expect(domainCores).not.toMatch(/probe\.measurement\('gpu-compute-latency',\s*0\)/);
  });

  it('measures or explicitly blocks every Games target, including viewport resolution', () => {
    expect(domainCores).toContain("'viewport-resolution'");
    expect(domainCores).toContain('hardwareViewportResolutionK');
    expect(domainCores).toContain('GPUAdapter.limits');
  });

  it('contains a real WebGPU initialization and dispatch benchmark path instead of a label-only WebGPU claim', () => {
    expect(hotRuntime).toContain('ensureInitialized');
    expect(hotRuntime).toContain('gpu.requestAdapter');
    expect(hotRuntime).toContain('adapter.requestDevice');
    expect(hotRuntime).toContain('measureComputeDispatch');
    expect(hotRuntime).toContain('device.createComputePipeline');
    expect(hotRuntime).toContain('pass.dispatchWorkgroups');
    expect(hotRuntime).toContain('device.queue.onSubmittedWorkDone');
  });

  it('wires WebGPU initialization through runtime and rendering entry points', () => {
    expect(enginRuntime).toContain('initializeHardwareAcceleration');
    expect(enginRuntime).toContain('this._hotRuntime.webgpu.ensureInitialized');
    expect(enginRuntime).toContain('warmupCompute');
    expect(babylonEngine).toContain('probeBrowserWebGPU');
    expect(babylonEngine).toContain('webgpuInitialized');
    expect(webgpuFacade).toContain('initializeWebGPURuntime');
    expect(webgpuFacade).toContain('adapter.requestDevice');
    for (const hook of [codeHook, gameHook, musicHook, contentHook, brandHook, labHook]) {
      expect(hook).toContain('initializeHardwareAcceleration');
      expect(hook).toContain('hardwareAcceleration');
    }
  });

  it('prevents reported or blocked measurements from being counted as measured passes', () => {
    expect(scorecard).toContain('measurement.value === null || measurement.status');
    expect(scorecard).toContain('Metric is reported but not gate-measured.');
  });

  it('does not use target acceptance helpers inside the canonical benchmark runner', () => {
    const match = domainCores.match(/export async function runCanonicalPerformanceBenchmarks[\s\S]+$/);
    expect(match?.[0] ?? '').not.toContain('acceptanceValueForTarget');
  });
});
