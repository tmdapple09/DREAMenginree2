import type { BufferHandle, GPUBufferDescriptor, VMPerformanceCounters, VMResourceQuotas } from './types';
import { GPUBufferUsageFlags, VMErrorCode } from './types';



export class BufferManager {
  private readonly buffers = new Map<BufferHandle, GPUBufferDescriptor>();
  private nextHandle: BufferHandle = 1;
  private totalMemoryUsed = 0n;

  constructor(
    private readonly device: GPUDevice,
    private readonly quotas: VMResourceQuotas,
    private readonly counters: VMPerformanceCounters,
  ) {}

  
  create(usage: number, size: bigint): BufferHandle | VMErrorCode {
    
    if (this.buffers.size >= this.quotas.maxGPUBufferCount) {
      return VMErrorCode.RESOURCE_LIMIT_EXCEEDED;
    }
    if (size > this.quotas.maxGPUBufferSize) {
      return VMErrorCode.RESOURCE_LIMIT_EXCEEDED;
    }
    if (this.totalMemoryUsed + size > this.quotas.maxTotalGPUMemory) {
      return VMErrorCode.OUT_OF_MEMORY;
    }

    
    if (!this.validateUsage(usage)) {
      return VMErrorCode.INVALID_ARGUMENT;
    }

    try {
      const buffer = this.device.createBuffer({
        size: Number(size),
        usage: this.usageFlagsToGPU(usage),
        mappedAtCreation: false,
      });

      const handle = this.nextHandle++;
      this.buffers.set(handle, {
        handle,
        size,
        usage,
        buffer,
        mappedRange: null,
      });

      this.totalMemoryUsed += size;
      return handle;
    } catch (error: unknown) {
      console.error('[BufferManager] Failed to create buffer:', error);
      return VMErrorCode.GPU_ERROR;
    }
  }

  
  destroy(handle: BufferHandle): VMErrorCode {
    const descriptor = this.buffers.get(handle);
    if (!descriptor) {
      return VMErrorCode.INVALID_HANDLE;
    }

    descriptor.buffer.destroy();
    this.totalMemoryUsed -= descriptor.size;
    this.buffers.delete(handle);
    return VMErrorCode.SUCCESS;
  }

  
  get(handle: BufferHandle): GPUBufferDescriptor | null {
    return this.buffers.get(handle) ?? null;
  }

  
  write(
    handle: BufferHandle,
    wasmMemory: WebAssembly.Memory,
    wasmPtr: number,
    offset: bigint,
    size: bigint,
  ): VMErrorCode {
    const descriptor = this.buffers.get(handle);
    if (!descriptor) {
      return 2; 
    }

    if (offset + size > descriptor.size) {
      return 3; 
    }

    try {
      const wasmView = new Uint8Array(wasmMemory.buffer, wasmPtr, Number(size));
      this.device.queue.writeBuffer(
        descriptor.buffer,
        Number(offset),
        wasmView.buffer,
        wasmView.byteOffset,
        wasmView.byteLength,
      );

      this.counters.totalBufferWrites++;
      this.counters.totalBytesWritten += size;
      return 0; 
    } catch (error: unknown) {
      console.error('[BufferManager] Write failed:', error);
      return 4; 
    }
  }

  
  async read(
    handle: BufferHandle,
    wasmMemory: WebAssembly.Memory,
    wasmPtr: number,
    offset: bigint,
    size: bigint,
  ): Promise<VMErrorCode> {
    const descriptor = this.buffers.get(handle);
    if (!descriptor) {
      return 2; 
    }

    if (offset + size > descriptor.size) {
      return 3; 
    }

    
    const stagingBuffer = this.device.createBuffer({
      size: Number(size),
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
    });

    try {
      
      const encoder = this.device.createCommandEncoder();
      encoder.copyBufferToBuffer(
        descriptor.buffer,
        Number(offset),
        stagingBuffer,
        0,
        Number(size),
      );
      this.device.queue.submit([encoder.finish()]);

      
      await stagingBuffer.mapAsync(GPUMapMode.READ);
      const mappedRange = stagingBuffer.getMappedRange();
      const wasmView = new Uint8Array(wasmMemory.buffer, wasmPtr, Number(size));
      wasmView.set(new Uint8Array(mappedRange));
      stagingBuffer.unmap();
      stagingBuffer.destroy();

      this.counters.totalBufferReads++;
      this.counters.totalBytesRead += size;
      return 0; 
    } catch (error: unknown) {
      console.error('[BufferManager] Read failed:', error);
      stagingBuffer.destroy();
      return 4; 
    }
  }

  
  async map(
    handle: BufferHandle,
    wasmMemory: WebAssembly.Memory,
    wasmPtr: number,
    offset: bigint,
    size: bigint,
    writable: boolean,
  ): Promise<VMErrorCode> {
    const descriptor = this.buffers.get(handle);
    if (!descriptor) {
      return 2; 
    }

    if (offset + size > descriptor.size) {
      return 3; 
    }

    const mode = writable ? GPUMapMode.WRITE : GPUMapMode.READ;
    const requiredUsage = writable ? 1 << 5 : 1 << 4; 

    if ((descriptor.usage & requiredUsage) === 0) {
      return 3; 
    }

    try {
      await descriptor.buffer.mapAsync(mode, Number(offset), Number(size));
      const mappedRange = descriptor.buffer.getMappedRange(Number(offset), Number(size));

      
      descriptor.mappedRange = mappedRange;

      
      const wasmView = new Uint8Array(wasmMemory.buffer, wasmPtr, Number(size));
      wasmView.set(new Uint8Array(mappedRange));

      return 0; 
    } catch (error: unknown) {
      console.error('[BufferManager] Map failed:', error);
      return 4; 
    }
  }

  
  unmap(handle: BufferHandle): VMErrorCode {
    const descriptor = this.buffers.get(handle);
    if (!descriptor) {
      return 2; 
    }

    if (!descriptor.mappedRange) {
      return 3; 
    }

    try {
      descriptor.buffer.unmap();
      descriptor.mappedRange = null;
      return 0; 
    } catch (error: unknown) {
      console.error('[BufferManager] Unmap failed:', error);
      return 4; 
    }
  }

  
  getTotalMemoryUsed(): bigint {
    return this.totalMemoryUsed;
  }

  
  getBufferCount(): number {
    return this.buffers.size;
  }

  
  destroyAll(): void {
    for (const descriptor of this.buffers.values()) {
      descriptor.buffer.destroy();
    }
    this.buffers.clear();
    this.totalMemoryUsed = 0n;
    this.nextHandle = 1;
  }

  
  private usageFlagsToGPU(usage: number): GPUBufferUsageFlags {
    const usageMap = typeof GPUBufferUsage === 'undefined' ? GPUBufferUsageFlags : GPUBufferUsage;
    let gpuUsage = 0;
    if (usage & (1 << 0)) gpuUsage |= usageMap.STORAGE;
    if (usage & (1 << 1)) gpuUsage |= usageMap.UNIFORM;
    if (usage & (1 << 2)) gpuUsage |= usageMap.COPY_SRC;
    if (usage & (1 << 3)) gpuUsage |= usageMap.COPY_DST;
    if (usage & (1 << 4)) gpuUsage |= usageMap.MAP_READ;
    if (usage & (1 << 5)) gpuUsage |= usageMap.MAP_WRITE;
    if (usage & (1 << 6)) gpuUsage |= usageMap.INDIRECT;
    if (usage & (1 << 7)) gpuUsage |= usageMap.VERTEX;
    if (usage & (1 << 8)) gpuUsage |= usageMap.INDEX;
    return gpuUsage;
  }

  
  private validateUsage(usage: number): boolean {
    
    const hasMapRead = (usage & (1 << 4)) !== 0;
    const hasMapWrite = (usage & (1 << 5)) !== 0;
    if (hasMapRead && hasMapWrite) return false;

    
    if (usage === 0) return false;

    
    if (usage > 0b111111111) return false;

    return true;
  }
}
