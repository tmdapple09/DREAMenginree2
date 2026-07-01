import { bridge, type VMRegion, type VMWorkload } from '@/engine/runtime/dualRuntimeBridge';



export interface DualVMConfig {
  enableInterVMCommunication?: boolean;
}


const _coordinator = {
  getStats: () => bridge.getVMStats() ?? { left: null, right: null, activeWorkloads: [] },
  submitWorkload: (w: VMWorkload) => bridge.submitVMWorkload(w),
  sendInterVMMessage: (from: VMRegion, to: VMRegion, msg: Uint8Array) =>
    bridge.sendInterVMMessage(from, to, msg),
};

export type DualVMCoordinator = typeof _coordinator;

let _initialized = false;

export function getDualVMCoordinator(): DualVMCoordinator | null {
  return _initialized ? _coordinator : null;
}

export async function initializeDualVMCoordinator(
  config: Partial<DualVMConfig> = {},
): Promise<DualVMCoordinator> {
  if (!_initialized) {
    await bridge.initVMs(config);
    _initialized = true;
  }
  return _coordinator;
}

export function destroyDualVMCoordinator(): void {
  if (_initialized) {
    bridge.destroyVMs();
    _initialized = false;
  }
}

export type { VMRegion, VMWorkload };
