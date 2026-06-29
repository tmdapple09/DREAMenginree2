/**
 * lib/gameengin/systems/rendering.ts
 *
 * RENDERING SYSTEMS
 *
 * Focused module: WebGPU compute shader pipeline (physics / particles / cloth
 * simulation on GPU); WGSL hot-reload shader cache + variant compilation;
 * CPU+GPU profiler with flame-graph ring buffer.
 *
 * Re-exports from power-systems so existing imports continue to work.
 * `GPUComputeSystem` is an alias for `ComputeShaderPipeline`.
 */

/** Alias: GPUComputeSystem → ComputeShaderPipeline. */

export {
    ComputeShaderPipeline, GPUProfiler, WGSLShaderManager
} from '../power-systems';
export { ComputeShaderPipeline as GPUComputeSystem } from '../power-systems';
export type {
    ComputeDispatch, ComputeKernel, ProfileFrame, ProfileSpan, ShaderVariant
} from '../power-systems';


// GameEngin does not own a separate graphics backend. It asks RenderEngin for
// the WebGPU device path so cartridges, shader work, and world previews stay on
// one DREAMengin visual runtime.
export { requestWebGpuDevice as requestRenderEnginWebGPUDevice } from '@/engins/renderengin/webgpu';
export type { RenderEnginFrameStats } from '@/engins/renderengin/webgpu';
