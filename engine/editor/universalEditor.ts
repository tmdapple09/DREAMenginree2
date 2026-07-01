import { createEventBus, type EventBus } from '@/engine/events/eventBus';
import type { ModuleManifest, RuntimeId } from '@/types/module-manifest';



export type AssemblyEvents = Record<string, unknown>;


export function createLocalEventBus(): EventBus<AssemblyEvents> {
  return createEventBus<AssemblyEvents>();
}


export function canTransfer(manifest: ModuleManifest, targetRuntime: RuntimeId): boolean {
  return manifest.compatibleRuntimes.includes(targetRuntime);
}


export function transferModule(
  manifest: ModuleManifest,
  targetRuntime: RuntimeId
): ModuleManifest {
  if (!canTransfer(manifest, targetRuntime)) {
    throw new Error(
      `Module "${manifest.id}" (type: ${manifest.type}) is not compatible with runtime "${targetRuntime}".`
    );
  }
  return { ...manifest, sourceRuntime: targetRuntime };
}

export type { ModuleManifest, RuntimeId } from '@/types/module-manifest';
