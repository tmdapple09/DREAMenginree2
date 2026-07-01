'use client';

import type { GameCartridge, GameEngineAPI } from '@/engins/gameengin/cartridge';
import { getCartridgeManifest, type CartridgeManifestEntry } from './manifest';
import { createContext, createElement, useContext, type ComponentType } from 'react';
import { createRoot, type Root } from 'react-dom/client';




export const GameEngineAPIContext = createContext<GameEngineAPI | null>(null);


export function useGameEngineAPI(): GameEngineAPI | null {
  return useContext(GameEngineAPIContext);
}


export function createReactCartridgeHost(
  gameId: string,
  Component: ComponentType,
  manifest: CartridgeManifestEntry = getCartridgeManifest(gameId) as CartridgeManifestEntry,
): GameCartridge {
  return {
    id: gameId,
    version: manifest?.launch.bundleManifestId,
    minEngineVersion: '3.0.0',
    capabilities: [
      'save-state',
      'replay',
      ...(manifest?.renderMode === 'webgpu' ? ['webgpu' as const, 'shader-custom' as const] : []),
      ...(manifest?.renderMode === 'babylon' ? ['webgpu' as const, 'webgl2' as const, 'asset-streaming' as const] : []),
      ...(manifest?.launch.workerEntries.length ? ['workers' as const] : []),
    ],
    backendRequirements: manifest ? {
      preferred: manifest.launch.backendPreference,
      optionalFeatures: manifest.launch.assetPolicy.formats.slice(),
    } : undefined,
    fallbackBackend: manifest?.launch.fallbackBackend,
    bundleManifestId: manifest?.launch.bundleManifestId,
    saveSchemaVersion: manifest?.launch.saveSchemaVersion,
    inputProfile: manifest?.launch.inputProfile,
    orientationPreference: manifest?.launch.orientationPreference,
    qualityDefaults: manifest?.launch.qualityDefaults,
    workerEntries: manifest?.launch.workerEntries,
    warmupPlan: manifest?.launch.warmupPlan,

    mount(container: HTMLDivElement, api: GameEngineAPI): () => void {
      const wrapper = document.createElement('div');
      wrapper.style.width = '100%';
      wrapper.style.height = '100%';
      container.appendChild(wrapper);

      let root: Root | null = null;
      try {
        root = createRoot(wrapper);
        root.render(
          createElement(
            GameEngineAPIContext.Provider,
            { value: api },
            createElement(Component),
          ),
        );
      } catch {
        
        
      }

      return () => {
        try {
          root?.unmount();
        } catch {
          
        }
        root = null;
        wrapper.remove();
      };
    },
  };
}


export const createReactGameCartridge = createReactCartridgeHost;

export function defineReactCartridgeLoader(
  id: string,
  importer: () => Promise<{ default: ComponentType }>,
) {
  return async (): Promise<GameCartridge> => {
    const mod = await importer();
    return createReactCartridgeHost(id, mod.default);
  };
}
