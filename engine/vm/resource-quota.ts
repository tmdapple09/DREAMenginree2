

export interface ResourceQuota {
  
  maxGpuBuffers: number;
  
  maxBufferSize: bigint;
  
  maxVram: bigint;
  
  maxComputeMs: number;
}

export interface ResourceUsage {
  
  gpuBufferCount: number;
  
  maxSingleBufferSize: bigint;
  
  totalVram: bigint;
  
  computeMs: number;
}

export interface QuotaViolation {
  field: keyof ResourceQuota;
  limit: number | bigint;
  actual: number | bigint;
  message: string;
}

export class QuotaExceededError extends Error {
  readonly violations: readonly QuotaViolation[];

  constructor(violations: QuotaViolation[]) {
    super(
      `VM resource quota exceeded: ${violations.map((v) => v.message).join('; ')}`,
    );
    this.name = 'QuotaExceededError';
    this.violations = violations;
  }
}

export const DEFAULT_RESOURCE_QUOTA: ResourceQuota = {
  maxGpuBuffers:   2048,
  maxBufferSize:   256n * 1024n * 1024n,  
  maxVram:         1024n * 1024n * 1024n, 
  maxComputeMs:    100,
};


export function enforceQuota(quota: ResourceQuota, usage: ResourceUsage): void {
  const violations: QuotaViolation[] = [];

  if (usage.gpuBufferCount > quota.maxGpuBuffers) {
    violations.push({
      field:   'maxGpuBuffers',
      limit:   quota.maxGpuBuffers,
      actual:  usage.gpuBufferCount,
      message: `GPU buffer count ${usage.gpuBufferCount} exceeds limit ${quota.maxGpuBuffers}`,
    });
  }

  if (usage.maxSingleBufferSize > quota.maxBufferSize) {
    violations.push({
      field:   'maxBufferSize',
      limit:   quota.maxBufferSize,
      actual:  usage.maxSingleBufferSize,
      message: `Buffer size ${usage.maxSingleBufferSize}B exceeds limit ${quota.maxBufferSize}B`,
    });
  }

  if (usage.totalVram > quota.maxVram) {
    violations.push({
      field:   'maxVram',
      limit:   quota.maxVram,
      actual:  usage.totalVram,
      message: `VRAM ${usage.totalVram}B exceeds limit ${quota.maxVram}B`,
    });
  }

  if (usage.computeMs > quota.maxComputeMs) {
    violations.push({
      field:   'maxComputeMs',
      limit:   quota.maxComputeMs,
      actual:  usage.computeMs,
      message: `Compute time ${usage.computeMs}ms exceeds limit ${quota.maxComputeMs}ms`,
    });
  }

  if (violations.length > 0) {
    throw new QuotaExceededError(violations);
  }
}


export function withinQuota(quota: ResourceQuota, usage: ResourceUsage): boolean {
  try {
    enforceQuota(quota, usage);
    return true;
  } catch {
    return false;
  }
}
