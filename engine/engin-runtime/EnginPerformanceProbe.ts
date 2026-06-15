import type { CapabilityTargetDimension } from './EnginCapabilityTargets';
import type { MetricMeasurement } from './EnginCapabilityScorecard';
import type { EnginHardwareCapabilities } from './EnginHardwareCapabilities';

// Framework directives stay physically first when required.

// Runtime file: lib/engin-runtime/EnginPerformanceProbe.ts.

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

// Runtime functions, classes, handlers, and state transitions.

export class EnginPerformanceProbe {
  timeMs(work: () => void): number {
    const start = now();
    work();
    return now() - start;
  }

  async timeAsyncMs(work: () => Promise<void>): Promise<number> {
    const start = now();
    await work();
    return now() - start;
  }

  throughputPerFrame(polygons: number, frames: number): number {
    return Math.floor(polygons / Math.max(1, frames));
  }

  memoryEstimateMb(): number | null {
    const perf = globalThis.performance as Performance & { memory?: { usedJSHeapSize?: number } };
    return perf.memory?.usedJSHeapSize ? perf.memory.usedJSHeapSize / 1024 / 1024 : null;
  }

  startupBudget(startedAt: number, completedAt = now()): number {
    return Math.max(0, completedAt - startedAt) / 1000;
  }

  measurement(dimension: CapabilityTargetDimension, value: number | null, reason?: string): MetricMeasurement {
    return { dimension, value, reason };
  }

  hardwareDependent(dimension: CapabilityTargetDimension, reason: string): MetricMeasurement {
    return { dimension, value: null, status: 'hardware-dependent', reason };
  }

  unsupported(dimension: CapabilityTargetDimension, reason: string): MetricMeasurement {
    return { dimension, value: null, status: 'unsupported', reason };
  }
}

export class StartupBudgetProbe extends EnginPerformanceProbe {}

export class IdleMemoryProbe extends EnginPerformanceProbe {}

export function gpuMeasurementOrHardwareDependent(
  hardware: EnginHardwareCapabilities,
  dimension: CapabilityTargetDimension,
  value: number | null,
): MetricMeasurement {
  const probe = new EnginPerformanceProbe();
  if (!hardware.webgpu) return probe.hardwareDependent(dimension, 'WebGPU is unavailable on this device.');
  if (value === null) {
    return {
      dimension,
      value: null,
      status: 'blocked',
      source: 'hardware-dependent',
      reason: 'WebGPU is available, but no runtime measurement was supplied.',
    };
  }
  return { dimension, value, source: 'measured' };
}

function now(): number {
  return typeof performance !== 'undefined' && typeof performance.now === 'function'
    ? performance.now()
    : Date.now();
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
