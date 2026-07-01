import { BufferManager } from './bufferManager';
import { PipelineCache } from './pipelineCache';
import type {
    BindGroupHandle,
    BufferHandle,
    ComputePipelineDescriptor,
    PipelineHandle,
    VMConfig,
    VMPerformanceCounters,
    VMState,
    VMSyscalls,
} from './types';
import { DEFAULT_VM_CONFIG } from './types';



export class WasmGpuVM {
  private readonly state: VMState;
  private readonly bufferManager: BufferManager;
  private readonly pipelineCache: PipelineCache;
  private readonly syscalls: VMSyscalls;

  private constructor(
    device: GPUDevice,
    config: VMConfig,
    bufferManager: BufferManager,
    pipelineCache: PipelineCache,
  ) {
    const counters: VMPerformanceCounters = {
      totalDispatches: 0n,
      totalBufferWrites: 0n,
      totalBufferReads: 0n,
      totalBytesWritten: 0n,
      totalBytesRead: 0n,
      totalGPUTimeNs: 0n,
      totalWasmInstructions: 0n,
      pipelineCacheHits: 0,
      pipelineCacheMisses: 0,
    };

    this.state = {
      config,
      device,
      queue: device.queue,
      wasmInstance: null,
      wasmMemories: new Map(),
      buffers: new Map(),
      pipelines: new Map(),
      bindGroups: new Map(),
      commandState: {
        encoder: null,
        computePass: null,
        activeCommands: 0,
        activePipeline: 0,
        activeBindGroups: new Map(),
      },
      counters,
      totalGPUMemoryUsed: 0n,
      nextBufferHandle: 1,
      nextPipelineHandle: 1,
      nextBindGroupHandle: 1,
    };

    this.bufferManager = bufferManager;
    this.pipelineCache = pipelineCache;
    this.syscalls = this.createSyscalls();
  }

  
  static async create(config: Partial<VMConfig> = {}): Promise<WasmGpuVM> {
    const fullConfig: VMConfig = { ...DEFAULT_VM_CONFIG, ...config };

    
    if (typeof navigator === 'undefined' || !('gpu' in navigator)) {
      throw new Error('WebGPU not available');
    }

    const adapter = await (navigator as Navigator & { gpu: GPU }).gpu.requestAdapter();
    if (!adapter) {
      throw new Error('Failed to get WebGPU adapter');
    }

    const requiredFeatures: GPUFeatureName[] = ['timestamp-query'];
    const device = await adapter.requestDevice({
      requiredFeatures,
    }) as unknown as GPUDevice;

    
    const bufferManager = new BufferManager(
      device as unknown as GPUDevice,
      fullConfig.quotas,
      {} as VMPerformanceCounters, 
    );

    const pipelineCache = new PipelineCache(device as unknown as GPUDevice);
    if (fullConfig.enablePipelineCache) {
      await pipelineCache.init();
    }

    const vm = new WasmGpuVM(device as unknown as GPUDevice, fullConfig, bufferManager, pipelineCache);

    
    (bufferManager as unknown as {counters: VMPerformanceCounters}).counters = vm.state.counters;

    return vm;
  }

  
  async loadWasm(wasmBinary: BufferSource): Promise<void> {
    const memory = new WebAssembly.Memory({
      initial: this.state.config.initialMemoryPages,
      maximum: this.state.config.maxMemoryPages,
      shared: this.state.config.enableSharedMemory,
    });

    const imports = {
      env: {
        memory,
        ...this.syscalls,
      },
    };

    const { instance } = await WebAssembly.instantiate(wasmBinary, imports);
    this.state.wasmInstance = instance;

    
    this.state.wasmMemories.set(0, {
      id: 0,
      memory,
      shared: this.state.config.enableSharedMemory,
      pages: this.state.config.initialMemoryPages,
      maxPages: this.state.config.maxMemoryPages,
    });
  }

  
  getSyscalls(): VMSyscalls {
    return this.syscalls;
  }

  
  getStats() {
    return {
      counters: { ...this.state.counters },
      bufferCount: this.bufferManager.getBufferCount(),
      pipelineCount: this.state.pipelines.size,
      bindGroupCount: this.state.bindGroups.size,
      totalGPUMemory: this.bufferManager.getTotalMemoryUsed(),
    };
  }

  
  destroy(): void {
    this.bufferManager.destroyAll();
    this.pipelineCache.close();
    this.state.device.destroy();
  }

  private createSyscalls(): VMSyscalls {
    return {
      vm_buffer_create: (usage: number, size: bigint): number => {
        return this.bufferManager.create(usage, size);
      },

      vm_buffer_destroy: (handle: BufferHandle): number => {
        return this.bufferManager.destroy(handle);
      },

      vm_buffer_write: (
        handle: BufferHandle,
        wasmPtr: number,
        offset: bigint,
        size: bigint,
      ): number => {
        const memory = this.state.wasmMemories.get(0);
        if (!memory) return 3; 

        return this.bufferManager.write(handle, memory.memory, wasmPtr, offset, size);
      },

      vm_buffer_read: (
        handle: BufferHandle,
        wasmPtr: number,
        offset: bigint,
        size: bigint,
      ): number => {
        const memory = this.state.wasmMemories.get(0);
        if (!memory) return 3; 

        
        
        this.bufferManager.read(handle, memory.memory, wasmPtr, offset, size)
          .catch((error: unknown ) => {
            console.error('[VM] Buffer read failed:', error);
          });
        return 0; 
      },

      vm_buffer_map: (
        handle: BufferHandle,
        wasmPtr: number,
        offset: bigint,
        size: bigint,
        writable: number,
      ): number => {
        const memory = this.state.wasmMemories.get(0);
        if (!memory) return 3; 

        this.bufferManager.map(handle, memory.memory, wasmPtr, offset, size, writable !== 0)
          .catch((error: unknown ) => {
            console.error('[VM] Buffer map failed:', error);
          });
        return 0; 
      },

      vm_buffer_unmap: (handle: BufferHandle): number => {
        return this.bufferManager.unmap(handle);
      },

      vm_compute_pipeline_create: (wgslPtr: number, wgslLen: number): number => {
        const memory = this.state.wasmMemories.get(0);
        if (!memory) return 3; 

        try {
          const wasmView = new Uint8Array(memory.memory.buffer, wgslPtr, wgslLen);
          const wgslSource = new TextDecoder().decode(wasmView);

          
          const handle = this.state.nextPipelineHandle++;

          this.pipelineCache.getOrCreate(wgslSource)
            .then(({ pipeline, sourceHash, cacheHit }) => {
              const descriptor: ComputePipelineDescriptor = {
                handle,
                wgslSource,
                sourceHash,
                pipeline,
                layout: 'auto',
                createdAt: Date.now(),
              };

              this.state.pipelines.set(handle, descriptor);

              if (cacheHit) {
                this.state.counters.pipelineCacheHits++;
              } else {
                this.state.counters.pipelineCacheMisses++;
              }
            })
            .catch((error: unknown ) => {
              console.error('[VM] Pipeline creation failed:', error);
              this.state.pipelines.delete(handle);
            });

          return handle;
        } catch {
          return 4; 
        }
      },

      vm_compute_pipeline_destroy: (handle: PipelineHandle): number => {
        if (!this.state.pipelines.has(handle)) {
          return 2; 
        }
        this.state.pipelines.delete(handle);
        return 0; 
      },

      vm_bind_group_create: (
        layoutHandle: number,
        bindingsPtr: number,
        bindingsCount: number,
      ): number => {
        try {
          const memory = this.state.wasmMemories.get(0);
          if (!memory) return 3; 

          const handle = this.state.nextBindGroupHandle++;

          
          const ENTRY_SIZE = 20;
          const view = new DataView(memory.memory.buffer, bindingsPtr, bindingsCount * ENTRY_SIZE);
          const entries: GPUBindGroupEntry[] = [];

          for (let i = 0; i < bindingsCount; i++) {
            const base = i * ENTRY_SIZE;
            const binding = view.getUint32(base, true);
            const bufHandle = view.getUint32(base + 4, true);
            const offset = Number(view.getBigUint64(base + 8, true));
            const size = Number(view.getBigUint64(base + 16, true));

            const bufDesc = this.state.buffers.get(bufHandle);
            if (!bufDesc) return 2; 

            entries.push({
              binding,
              resource: { buffer: bufDesc.buffer, offset, size: size > 0 ? size : undefined },
            });
          }

          
          const pipelineDesc = this.state.pipelines.get(this.state.commandState.activePipeline);
          const layout = pipelineDesc?.pipeline.getBindGroupLayout(0) ?? null;

          if (!layout) {
            
            this.state.bindGroups.set(handle, {
              handle,
              bindGroup: null as unknown as GPUBindGroup,
              entries,
              layoutHandle,
            } as unknown as import('./types').BindGroupDescriptor);
            return handle;
          }

          const bindGroup = this.state.device.createBindGroup({ layout: layout as unknown as GPUBindGroupLayout, entries });
          this.state.bindGroups.set(handle, {
            handle,
            bindGroup,
            entries,
            layoutHandle,
          } as unknown as import('./types').BindGroupDescriptor);

          return handle;
        } catch {
          return 4; 
        }
      },

      vm_bind_group_destroy: (handle: BindGroupHandle): number => {
        if (!this.state.bindGroups.has(handle)) {
          return 2; 
        }
        this.state.bindGroups.delete(handle);
        return 0; 
      },

      vm_command_begin: (): number => {
        if (this.state.commandState.encoder !== null) {
          return 3; 
        }

        this.state.commandState.encoder = this.state.device.createCommandEncoder();
        this.state.commandState.computePass = this.state.commandState.encoder.beginComputePass();
        this.state.commandState.activeCommands = 0;
        return 0; 
      },

      vm_command_set_pipeline: (pipelineHandle: PipelineHandle): number => {
        const descriptor = this.state.pipelines.get(pipelineHandle);
        if (!descriptor) {
          return 2; 
        }

        if (!this.state.commandState.computePass) {
          return 3; 
        }

        this.state.commandState.computePass.setPipeline(descriptor.pipeline);
        this.state.commandState.activePipeline = pipelineHandle;
        this.state.commandState.activeCommands++;
        return 0; 
      },

      vm_command_set_bind_group: (
        groupIndex: number,
        bindGroupHandle: BindGroupHandle,
        dynamicOffsetsPtr: number,
        offsetCount: number,
      ): number => {
        const descriptor = this.state.bindGroups.get(bindGroupHandle);
        if (!descriptor) {
          return 2; 
        }

        if (!this.state.commandState.computePass) {
          return 3; 
        }

        
        let dynamicOffsets: number[] | undefined;
        if (offsetCount > 0 && dynamicOffsetsPtr !== 0) {
          const memory = this.state.wasmMemories.get(0);
          if (memory) {
            const offsetView = new Uint32Array(memory.memory.buffer, dynamicOffsetsPtr, offsetCount);
            dynamicOffsets = Array.from(offsetView);
          }
        }
        this.state.commandState.computePass.setBindGroup(
          groupIndex,
          descriptor.bindGroup,
          dynamicOffsets,
        );
        this.state.commandState.activeBindGroups.set(groupIndex, bindGroupHandle);
        this.state.commandState.activeCommands++;
        return 0; 
      },

      vm_command_dispatch: (x: number, y: number, z: number): number => {
        if (!this.state.commandState.computePass) {
          return 3; 
        }

        if (x > this.state.config.quotas.maxDispatchSize ||
            y > this.state.config.quotas.maxDispatchSize ||
            z > this.state.config.quotas.maxDispatchSize) {
          return 5; 
        }

        this.state.commandState.computePass.dispatchWorkgroups(x, y, z);
        this.state.commandState.activeCommands++;
        this.state.counters.totalDispatches++;
        return 0; 
      },

      vm_command_dispatch_indirect: (bufferHandle: BufferHandle, offset: bigint): number => {
        const descriptor = this.bufferManager.get(bufferHandle);
        if (!descriptor) {
          return 2; 
        }

        if (!this.state.commandState.computePass) {
          return 3; 
        }

        this.state.commandState.computePass.dispatchWorkgroupsIndirect(
          descriptor.buffer,
          Number(offset),
        );
        this.state.commandState.activeCommands++;
        this.state.counters.totalDispatches++;
        return 0; 
      },

      vm_submit: (): number => {
        if (!this.state.commandState.encoder || !this.state.commandState.computePass) {
          return 3; 
        }

        if (this.state.commandState.activeCommands > this.state.config.quotas.maxCommandBufferLength) {
          return 5; 
        }

        this.state.commandState.computePass.end();
        const commandBuffer = this.state.commandState.encoder.finish();
        this.state.queue.submit([commandBuffer]);

        
        this.state.commandState.encoder = null;
        this.state.commandState.computePass = null;
        this.state.commandState.activeCommands = 0;
        this.state.commandState.activePipeline = 0;
        this.state.commandState.activeBindGroups.clear();

        return 0; 
      },

      vm_wait_fence: (): number => {
        
        
        this.state.queue.onSubmittedWorkDone()
          .catch((error: unknown ) => {
            console.error('[VM] Wait fence failed:', error);
          });
        return 0; 
      },

      vm_get_time: (): bigint => {
        if (typeof performance !== 'undefined') {
          return BigInt(Math.floor(performance.now() * 1_000_000)); 
        }
        return BigInt(Date.now()) * 1_000_000n; 
      },

      vm_yield: (): number => {
        
        
        return 0; 
      },

      vm_get_instruction_count: (): bigint => {
        return this.state.counters.totalWasmInstructions;
      },
    };
  }
}
