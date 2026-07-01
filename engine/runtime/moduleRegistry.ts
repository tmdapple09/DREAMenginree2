'use client';

import { bridge } from '@/engine/runtime/dualRuntimeBridge';
import { isModuleManifest, negotiateModuleCompatibility, type ModuleManifest, type RuntimeCompatibility, type RuntimeId } from '@/types/module-manifest';
import { create } from 'zustand';
import type { WidgetInstance } from '@/types/widgets';
import { getWidgetType } from '@/types/widgets';











export const useModuleRegistry = create<ModuleRegistryState>((set, get) => ({
  modules: {},

  registerModule(manifest) {
    if (!isModuleManifest(manifest)) return;
    set((state) => ({
      modules: { ...state.modules, [manifest.id]: manifest },
    }));
  },

  unregisterModule(id) {
    set((state) => {
      const next = { ...state.modules };
      delete next[id];
      return { modules: next };
    });
  },

  transferModule(id, targetRuntime) {
    const { modules } = get();
    const manifest = modules[id];
    if (!manifest) return false;
    if (!manifest.compatibleRuntimes.includes(targetRuntime)) return false;

    const updated: ModuleManifest = { ...manifest, sourceRuntime: targetRuntime };

    set((state) => ({
      modules: { ...state.modules, [id]: updated },
    }));

    
    bridge.emit('module', 'transfer', {
      module: updated as unknown as Record<string, unknown>,
      targetRuntime,
      sourceRuntime: manifest.sourceRuntime,
    });

    return true;
  },

  getModulesForRuntime(runtime) {
    return Object.values(get().modules).filter((m) => m.sourceRuntime === runtime);
  },
}));

export const moduleRegistry = {
  register(manifest: ModuleManifest) {
    useModuleRegistry.getState().registerModule(manifest);
  },
  unregister(id: string) {
    useModuleRegistry.getState().unregisterModule(id);
  },
  transfer(id: string, targetRuntime: RuntimeId) {
    return useModuleRegistry.getState().transferModule(id, targetRuntime);
  },
  list(): ModuleManifest[] {
    return Object.values(useModuleRegistry.getState().modules);
  },
  canActivate(manifest: ModuleManifest, runtime: RuntimeCompatibility) {
    if (!isModuleManifest(manifest)) return false;
    return negotiateModuleCompatibility(manifest.compatibility, runtime).compatible;
  },
};







interface ModuleRegistryState {
  
  modules: Record<string, ModuleManifest>;
  
  registerModule: (manifest: ModuleManifest) => void;
  
  unregisterModule: (id: string) => void;
  
  transferModule: (id: string, targetRuntime: RuntimeId) => boolean;
  
  getModulesForRuntime: (runtime: RuntimeId) => ModuleManifest[];
}




export function subscribeRegistryToTransferEvents(): () => void {
  return bridge.subscribe('module', 'transfer', payload => {
    const raw = payload as { module?: unknown; targetRuntime?: unknown };
    if (!raw.module || typeof raw.module !== 'object') return;
    const manifest = raw.module as ModuleManifest;
    if (!manifest.id) return;
    useModuleRegistry.getState().registerModule(manifest);
  });
}


export function manifestFromWidget(
  widget: WidgetInstance,
  sourceRuntime: RuntimeId = 'homedream',
): ModuleManifest {
  const type = getWidgetType(widget) ?? 'custom';
  
  const compatibleRuntimes: RuntimeId[] = ['homedream', 'dreamspace'];

  return {
    id: widget.id,
    type: type as ModuleManifest['type'],
    sourceRuntime,
    compatibleRuntimes,
    content: widget.config ?? widget.config_json ?? {},
    ui: {
      defaultSize: { width: 320, height: 200 },
      resizable: true,
      movable: widget.is_enabled !== false,
    },
  };
}






