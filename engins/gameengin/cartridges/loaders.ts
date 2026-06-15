'use client';

import type { GameCartridge } from '../cartridge';
import type { CartridgeManifestEntry } from './manifest';
import { CARTRIDGE_MANIFEST, getCartridgeManifest } from './manifest';
import { defineReactCartridgeLoader } from './reactCartridge';
import { toErrorMessage } from '@/lib/utils';

/**
 * lib/gameengin/cartridges/loaders.ts
 *
 * Client-side loader registry — one async loader per cartridge in the
 * repository. Keep in sync with `./manifest.ts`.
 */

export interface LoadedCartridgeBundle {
  cartridge: GameCartridge;
  manifest: CartridgeManifestEntry;
  bundleManifestId: string;
  workerGraph: CartridgeManifestEntry['launch']['workerEntries'];
  prefetch: readonly string[];
}

export type CartridgeLoader = () => Promise<GameCartridge>;

const load = defineReactCartridgeLoader;

export const CARTRIDGE_LOADERS: Readonly<Record<string, CartridgeLoader>> = {
  // ── Legacy flagships kept ─────────────────────────────────────────────────
  'platformer':            load('platformer',            () => import('@/components/games/madmaxi')),
  'neon-drift':            load('neon-drift',            () => import('@/components/games/dream.NeonDrift')),
  'echo-arena':            load('echo-arena',            () => import('@/components/games/dream.EchoArena')),

  'null-cathedral':        load('null-cathedral',        () => import('@/components/games/dream.NullCathedral')),
  'voidline-gp':           load('voidline-gp',           () => import('@/components/games/dream.VoidlineGP')),
  'serpent-siege':         load('serpent-siege',         () => import('@/components/games/dream.SerpentSiege')),
  'avenue-of-mirrors':     load('avenue-of-mirrors',     () => import('@/components/games/dream.MadMaxiWildfall')),
  'engin-fracture':        load('engin-fracture',        () => import('@/components/games/dream.EnginFracture')),

  'glassfall':             load('glassfall',             () => import('@/components/games/dream.Glassfall')),
  'nite-flyer-solar-hymn': load('nite-flyer-solar-hymn', () => import('@/components/games/dream.NiteFlyerSolarHymn')),
  'lexicon-solitaire':     load('lexicon-solitaire',     () => import('@/components/games/dream.LexiconSolitaire')),

  'defuse-ritual':         load('defuse-ritual',         () => import('@/components/games/dream.DefuseRitual')),
};

export function getMissingCartridgeLoaders(): string[] {
  return CARTRIDGE_MANIFEST
    .map((entry) => entry.id)
    .filter((id) => !(id in CARTRIDGE_LOADERS));
}

export function getOrphanCartridgeLoaders(): string[] {
  const manifestIds = new Set(CARTRIDGE_MANIFEST.map((entry) => entry.id));
  return Object.keys(CARTRIDGE_LOADERS).filter((id) => !manifestIds.has(id));
}

export function assertCartridgeLoadersReady(): void {
  const missing = getMissingCartridgeLoaders();
  if (missing.length > 0) {
    throw new Error(`GameEngin cartridge manifest has no loaders for: ${missing.join(', ')}`);
  }
}

export async function loadCartridgeBundle(id: string): Promise<LoadedCartridgeBundle> {
  const manifest = getCartridgeManifest(id);
  if (!manifest) {
    throw new Error(`Cartridge failed to load: ${id}. No manifest is registered for this cartridge id.`);
  }
  const loader = CARTRIDGE_LOADERS[id];
  if (!loader) {
    throw new Error(`Cartridge failed to load: ${id}. No loader is registered for this cartridge id.`);
  }
  try {
    const cartridge = await loader();
    return {
      cartridge,
      manifest,
      bundleManifestId: manifest.launch.bundleManifestId,
      workerGraph: manifest.launch.workerEntries,
      prefetch: manifest.launch.prefetch,
    };
  } catch (error: unknown) {
    const details = error instanceof Error ? toErrorMessage(error) : String(error);
    throw new Error(`Cartridge failed to load: ${id}. ${details}`);
  }
}

export async function loadCartridge(id: string): Promise<GameCartridge> {
  const bundle = await loadCartridgeBundle(id);
  return bundle.cartridge;
}

export function getCartridgeIds(): string[] {
  return Object.keys(CARTRIDGE_LOADERS);
}
