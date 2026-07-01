


export type BufferHandle = number;


export type PipelineHandle = number;


export type BindGroupHandle = number;


export type LayoutHandle = number;

export enum GPUBufferUsageFlags {
  STORAGE = 1 << 0,
  UNIFORM = 1 << 1,
  COPY_SRC = 1 << 2,
  COPY_DST = 1 << 3,
  MAP_READ = 1 << 4,
  MAP_WRITE = 1 << 5,
  INDIRECT = 1 << 6,
  VERTEX = 1 << 7,
  INDEX = 1 << 8,
}

export enum VMErrorCode {
  SUCCESS = 0,
  OUT_OF_MEMORY = 1,
  INVALID_HANDLE = 2,
  INVALID_ARGUMENT = 3,
  GPU_ERROR = 4,
  RESOURCE_LIMIT_EXCEEDED = 5,
}
export const ErrorCode = VMErrorCode;

export interface WasmLinearMemory {
  
  id: number;
  
  memory: WebAssembly.Memory;
  
  shared: boolean;
  
  pages: number;
  
  maxPages: number;
}

export interface GPUBufferDescriptor {
  handle: BufferHandle;
  size: bigint;
  usage: number; 
  buffer: GPUBuffer;
  mappedRange: ArrayBuffer | null;
}

export interface ComputePipelineDescriptor {
  handle: PipelineHandle;
  wgslSource: string;
  sourceHash: string; 
  pipeline: GPUComputePipeline;
  layout: GPUPipelineLayout | 'auto';
  createdAt: number;
}

export interface BindGroupDescriptor {
  handle: BindGroupHandle;
  bindGroup: GPUBindGroup;
  layout: GPUBindGroupLayout;
  bindings: readonly GPUBindGroupEntry[];
}

export interface CommandBufferState {
  encoder: GPUCommandEncoder | null;
  computePass: GPUComputePassEncoder | null;
  activeCommands: number;
  activePipeline: PipelineHandle;
  activeBindGroups: Map<number, BindGroupHandle>;
}

export interface VMResourceQuotas {
  maxWasmMemoryPages: number;
  maxGPUBufferCount: number;
  maxGPUBufferSize: bigint;
  maxTotalGPUMemory: bigint;
  maxPipelineCount: number;
  maxBindGroupCount: number;
  maxDispatchSize: number;
  maxComputeTimeMs: number;
  maxCommandBufferLength: number;
}

export const DEFAULT_VM_QUOTAS: VMResourceQuotas = {
  maxWasmMemoryPages: 1024, 
  maxGPUBufferCount: 2048,
  maxGPUBufferSize: 256n * 1024n * 1024n, 
  maxTotalGPUMemory: 1024n * 1024n * 1024n, 
  maxPipelineCount: 256,
  maxBindGroupCount: 4096,
  maxDispatchSize: 65535,
  maxComputeTimeMs: 100,
  maxCommandBufferLength: 65535,
};

export interface VMSnapshot {
  version: number;
  timestamp: number;
  wasmMemories: readonly WasmMemorySnapshot[];
  gpuBuffers: readonly GPUBufferSnapshot[];
  pipelines: readonly PipelineSnapshot[];
  handleState: HandleTableSnapshot;
  quotas: VMResourceQuotas;
}

export interface WasmMemorySnapshot {
  id: number;
  size: bigint;
  data: Uint8Array;
  shared: boolean;
}

export interface GPUBufferSnapshot {
  handle: BufferHandle;
  size: bigint;
  usage: number;
  data: Uint8Array;
}

export interface PipelineSnapshot {
  sourceHash: Uint8Array; 
  wgslSource: string;
  pipelineBlob: Uint8Array | null; 
}

export interface HandleTableSnapshot {
  nextFreeBuffer: BufferHandle;
  nextFreePipeline: PipelineHandle;
  nextFreeBindGroup: BindGroupHandle;
  allocatedBuffers: readonly BufferHandle[];
  allocatedPipelines: readonly PipelineHandle[];
  allocatedBindGroups: readonly BindGroupHandle[];
}

export interface VMPerformanceCounters {
  
  totalDispatches: bigint;
  
  totalBufferWrites: bigint;
  
  totalBufferReads: bigint;
  
  totalBytesWritten: bigint;
  
  totalBytesRead: bigint;
  
  totalGPUTimeNs: bigint;
  
  totalWasmInstructions: bigint;
  
  pipelineCacheHits: number;
  
  pipelineCacheMisses: number;
}

export interface VMSyscalls {
  
  vm_buffer_create: (usage: number, size: bigint) => number;
  vm_buffer_destroy: (handle: BufferHandle) => number;
  vm_buffer_write: (
    handle: BufferHandle,
    wasmPtr: number,
    offset: bigint,
    size: bigint
  ) => number;
  vm_buffer_read: (
    handle: BufferHandle,
    wasmPtr: number,
    offset: bigint,
    size: bigint
  ) => number;
  vm_buffer_map: (
    handle: BufferHandle,
    wasmPtr: number,
    offset: bigint,
    size: bigint,
    writable: number
  ) => number;
  vm_buffer_unmap: (handle: BufferHandle) => number;

  
  vm_compute_pipeline_create: (wgslPtr: number, wgslLen: number) => number;
  vm_compute_pipeline_destroy: (handle: PipelineHandle) => number;

  
  vm_bind_group_create: (
    layoutHandle: LayoutHandle,
    bindingsPtr: number,
    bindingsCount: number
  ) => number;
  vm_bind_group_destroy: (handle: BindGroupHandle) => number;

  
  vm_command_begin: () => number;
  vm_command_set_pipeline: (pipelineHandle: PipelineHandle) => number;
  vm_command_set_bind_group: (
    groupIndex: number,
    bindGroupHandle: BindGroupHandle,
    dynamicOffsetsPtr: number,
    offsetCount: number
  ) => number;
  vm_command_dispatch: (x: number, y: number, z: number) => number;
  vm_command_dispatch_indirect: (bufferHandle: BufferHandle, offset: bigint) => number;
  vm_submit: () => number;
  vm_wait_fence: () => number;

  
  vm_get_time: () => bigint;
  vm_yield: () => number;
  vm_get_instruction_count: () => bigint;
}

export interface VMConfig {
  
  id: string;
  
  quotas: VMResourceQuotas;
  
  enableSharedMemory: boolean;
  
  enableTimestamps: boolean;
  
  enablePipelineCache: boolean;
  
  allowedSyscalls: readonly (keyof VMSyscalls)[] | null;
  
  initialMemoryPages: number;
  
  maxMemoryPages: number;
}

export const DEFAULT_VM_CONFIG: VMConfig = {
  id: 'vm-default',
  quotas: DEFAULT_VM_QUOTAS,
  enableSharedMemory: true,
  enableTimestamps: true,
  enablePipelineCache: true,
  allowedSyscalls: null, 
  initialMemoryPages: 256, 
  maxMemoryPages: 1024, 
};

export interface VMMessageQueueDescriptor {
  
  buffer: SharedArrayBuffer;
  
  producerIndex: Int32Array;
  
  consumerIndex: Int32Array;
  
  capacity: number;
  
  messageSize: number;
}

export interface VMEventChannel {
  
  flagAddress: number;
  
  buffer: SharedArrayBuffer;
  
  view: Int32Array;
}

export interface VMState {
  config: VMConfig;
  device: GPUDevice;
  queue: GPUQueue;
  wasmInstance: WebAssembly.Instance | null;
  wasmMemories: Map<number, WasmLinearMemory>;
  buffers: Map<BufferHandle, GPUBufferDescriptor>;
  pipelines: Map<PipelineHandle, ComputePipelineDescriptor>;
  bindGroups: Map<BindGroupHandle, BindGroupDescriptor>;
  commandState: CommandBufferState;
  counters: VMPerformanceCounters;
  totalGPUMemoryUsed: bigint;
  nextBufferHandle: BufferHandle;
  nextPipelineHandle: PipelineHandle;
  nextBindGroupHandle: BindGroupHandle;
}
