import type { DreamrCartridgeArchive } from '@/lib/gameengin/dreamr-loader';

// Framework directives stay physically first when required.

// Runtime file: lib/gameengin/webgpu-runtime-shell.ts.

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export interface WebGPURuntimeShellPlan {
  cartridgeId: string;
  renderMode: 'webgpu' | 'webgl' | 'canvas2d';
  entry: string;
  memoryBudgetMb: number;
  targetFrameRate: 30 | 60 | 120;
  canUseWebGPU: boolean;
  handoff: 'webgpu' | 'webgl-fallback' | 'canvas-fallback';
}

// Runtime functions, classes, handlers, and state transitions.

export function canUseWebGPU(): boolean {
  return typeof navigator !== 'undefined' && 'gpu' in navigator;
}

export function planRuntimeShellHandoff(archive: DreamrCartridgeArchive): WebGPURuntimeShellPlan {
  const wantsWebGPU = archive.manifest.render_mode === 'webgpu';
  const gpuAvailable = canUseWebGPU();
  const handoff = wantsWebGPU
    ? (gpuAvailable ? 'webgpu' : 'webgl-fallback')
    : archive.manifest.render_mode === 'webgl'
      ? 'webgl-fallback'
      : 'canvas-fallback';

  return {
    cartridgeId: archive.manifest.cartridge_id,
    renderMode: archive.manifest.render_mode,
    entry: archive.manifest.entry,
    memoryBudgetMb: archive.manifest.memory_budget_mb,
    targetFrameRate: archive.manifest.target_frame_rate,
    canUseWebGPU: gpuAvailable,
    handoff,
  };
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
