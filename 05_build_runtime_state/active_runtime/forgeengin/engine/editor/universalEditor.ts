import { createEventBus, type EventBus } from '@/engine/events/eventBus';
import type { ModuleManifest, RuntimeId } from '@/types/module-manifest';

/**
 * Universal Editor — Module Manifest + Transfer Protocol
 *
 * Defines the cross-runtime module manifest type and the local event
 * bus factory used by engine assemblies.
 */

export type AssemblyEvents = Record<string, unknown>;

/**
 * createLocalEventBus()
 *
 * Returns a new scoped event bus for a single engine assembly.
 * Must NOT be shared across assemblies.
 */
export function createLocalEventBus(): EventBus<AssemblyEvents> {
  return createEventBus<AssemblyEvents>();
}

/**
 * canTransfer(manifest, targetRuntime)
 *
 * Returns whether a module manifest is compatible with a target runtime.
 */
export function canTransfer(manifest: ModuleManifest, targetRuntime: RuntimeId): boolean {
  return manifest.compatibleRuntimes.includes(targetRuntime);
}

/**
 * transferModule(manifest, targetRuntime)
 *
 * Validates and returns a new manifest stamped with the new source
 * runtime, or throws if incompatible.
 */
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
