/**
 * lib/gameengin/cartridges/manifest.ts
 *
 * Server-safe catalog of every game in the repository, packaged as a
 * GameEngin cartridge entry. Pure data — no React, no client-only imports.
 *
 * This manifest is the source for the shared game catalog, cartridge browser,
 * loader registry, and GameEngin runtime shelf. The synchronisation is enforced
 * by `tests/gameengin-cartridges.test.ts`.
 */

import type { CartridgeInputProfile, CartridgeOrientationPreference, CartridgeQualityDefaults, CartridgeRendererFamily, CartridgeWarmupPlan, CartridgeWorkerEntry, RendererBackendId } from '../cartridge';

export type CartridgeRenderMode = 'canvas' | 'webgpu' | 'babylon' | 'dom';

export interface CartridgeAssetPolicy {
  formats: readonly ('wgsl' | 'glb' | 'ktx2' | 'webp' | 'avif' | 'wasm' | 'json')[];
  cache: 'immutable' | 'session' | 'network-first';
  maxInitialBytes?: number;
}

export interface CartridgeLaunchMetadata {
  bundleManifestId: string;
  rendererFamily: CartridgeRendererFamily;
  backendPreference: RendererBackendId[];
  fallbackBackend: RendererBackendId;
  assetPolicy: CartridgeAssetPolicy;
  saveSchemaVersion: number;
  inputProfile: CartridgeInputProfile;
  orientationPreference: CartridgeOrientationPreference;
  qualityDefaults: CartridgeQualityDefaults;
  workerEntries: CartridgeWorkerEntry[];
  warmupPlan: CartridgeWarmupPlan;
  prefetch: readonly string[];
  deterministicReplay: boolean;
  offlineReady: boolean;
}

export interface CartridgeManifestEntry {
  id: string;
  label: string;
  emoji: string;
  category: string;
  color: string;
  renderMode: CartridgeRenderMode;
  subtitle?: string;
  description: string;
  tier: 'flagship' | 'advanced' | 'classic' | 'casual';
  launch: CartridgeLaunchMetadata;
}

function launchFor(id: string, renderMode: CartridgeRenderMode, tier: CartridgeManifestEntry['tier']): CartridgeLaunchMetadata {
  const rendererFamily: CartridgeRendererFamily = renderMode === 'babylon' ? 'babylon' : renderMode === 'webgpu' ? 'webgpu' : renderMode === 'canvas' ? 'canvas' : 'dom';
  const backendPreference: RendererBackendId[] = renderMode === 'babylon'
    ? ['babylon-webgpu', 'babylon-webgl2']
    : renderMode === 'webgpu'
      ? ['webgpu', 'webgl2', 'canvas2d']
      : renderMode === 'canvas'
        ? ['canvas2d', 'dom']
        : ['dom'];
  const fallbackBackend = backendPreference[1] ?? backendPreference[0];
  const targetFps = tier === 'flagship' ? 60 : 30;
  return {
    bundleManifestId: `gameengin.${id}.v3`,
    rendererFamily,
    backendPreference,
    fallbackBackend,
    assetPolicy: {
      formats: renderMode === 'babylon' ? ['glb', 'ktx2', 'webp', 'json'] : renderMode === 'webgpu' ? ['wgsl', 'webp', 'json'] : ['webp', 'json'],
      cache: tier === 'flagship' ? 'immutable' : 'session',
      maxInitialBytes: tier === 'flagship' ? 16 * 1024 * 1024 : 4 * 1024 * 1024,
    },
    saveSchemaVersion: 1,
    inputProfile: {
      keyboard: true,
      touch: true,
      gamepad: tier === 'flagship',
      remote: true,
      actions: ['move', 'confirm', 'cancel', 'pause', 'primary', 'secondary'],
    },
    orientationPreference: renderMode === 'dom' ? 'any' : 'landscape',
    qualityDefaults: {
      tier: tier === 'flagship' ? 'high' : tier === 'advanced' ? 'balanced' : 'low',
      targetFps,
      maxDevicePixelRatio: tier === 'flagship' ? 2 : 1.5,
      maxTextureMegabytes: tier === 'flagship' ? 384 : 128,
    },
    workerEntries: renderMode === 'dom' ? [] : [{ id: `${id}:asset-prep`, url: `/gameengin/workers/${id}.asset-prep.js`, type: 'module', stage: 'asset-decode', transferable: true }],
    warmupPlan: {
      pipelines: backendPreference.slice(0, 2).map((backend, index) => ({
        id: `${id}:${backend}:bootstrap`,
        backend,
        label: index === 0 ? 'primary renderer bootstrap' : 'fallback renderer bootstrap',
        kind: renderMode === 'dom' ? 'asset' : 'render',
        blocking: index === 0,
      })),
      shaderRegistryId: renderMode === 'webgpu' ? `gameengin.${id}.wgsl` : undefined,
      assetBundleIds: [`${id}:base`],
      maxBlockingMs: tier === 'flagship' ? 750 : 250,
    },
    prefetch: [`/gameengin/bundles/${id}/manifest.json`],
    deterministicReplay: renderMode !== 'babylon',
    offlineReady: renderMode !== 'babylon',
  };
}

function cartridge(entry: Omit<CartridgeManifestEntry, 'launch'>): CartridgeManifestEntry {
  return { ...entry, launch: launchFor(entry.id, entry.renderMode, entry.tier) };
}

/**
 * Cartridge bay — three flagship browser titles plus the nine fusion
 * cartridges that replaced 25 source games.
 */
export const CARTRIDGE_MANIFEST: readonly CartridgeManifestEntry[] = [
  // ── Flagship — Babylon.js / WebGPU / deep-systems ────────────────────────
  cartridge({ id: 'platformer', label: 'MADMAXI', emoji: '🏎', category: 'Platformer', color: '#c8981a', renderMode: 'babylon', tier: 'flagship',
    subtitle: 'MADMAXI · Landing-grade robot hero',
    description: '150 levels · 15 zones · boss every 10 levels · unique each run — Babylon.js side-scroller rebuilt around the DREAMengin landing robot' }),
  cartridge({ id: 'neon-drift', label: 'Neon Drift', emoji: '🏎️', category: 'Racing', color: '#0ff', renderMode: 'webgpu', tier: 'flagship',
    subtitle: 'WebGPU · DualSense Ready',
    description: 'WebGPU cyberpunk racer — DualSense gyro steering, haptic feedback, high-performance 3D rendering' }),
  cartridge({ id: 'echo-arena', label: 'Echo Arena', emoji: '🎯', category: 'Shooter', color: '#a78bfa', renderMode: 'webgpu', tier: 'flagship',
    subtitle: 'WebGPU · DualSense Ready',
    description: 'WebGPU arena shooter — DualSense gyro aim, top-down combat, high-performance 3D rendering' }),

  // ── Fusion flagships — replace 25 source cartridges ──────────────────────
  cartridge({ id: 'null-cathedral', label: 'NULL CATHEDRAL', emoji: '♟', category: 'Tactics RPG', color: '#d4af37', renderMode: 'canvas', tier: 'flagship',
    subtitle: 'Chess + RPG + Minesweeper · Deductive sacrifice',
    description: 'A grim tactical RPG where every battle is a chess match played over a buried minefield of repressed memories — Iren Vespa descends the Cathedral of Null to find her sister before CASTLE overwrites her' }),
  cartridge({ id: 'voidline-gp', label: 'VOIDLINE GP', emoji: '🛸', category: 'Racing', color: '#ff6a3d', renderMode: 'canvas', tier: 'flagship',
    subtitle: 'Racing + Shoot + Rhythm · On-the-beat overtake',
    description: 'F-Zero by way of rhythm bullet-hell — every shot, drift and boost must land on the soundtrack downbeat or it fizzles. Yuna Orr races to free her mentor on the illegal Voidline circuit' }),
  cartridge({ id: 'serpent-siege', label: 'SERPENT SIEGE', emoji: '🐍', category: 'Strategy', color: '#5fbf4d', renderMode: 'canvas', tier: 'flagship',
    subtitle: 'Snake + TD + RTS · Body-as-build-order',
    description: 'A tower-defense RTS where your army is one sentient serpent — every body segment is a tower whose type is set by the terrain beneath it. Defend the Mother Egg from the Vermillion Choir' }),
  cartridge({ id: 'avenue-of-mirrors', label: 'AVENUE OF MIRRORS', emoji: '🪞', category: 'Adventure', color: '#7fb6b1', renderMode: 'canvas', tier: 'flagship',
    subtitle: 'Lucid Avenue + Maze + Memory · Navigational amnesia',
    description: 'A first-person dream-walk where the maze rebuilds itself the moment you stop looking, and you only navigate by glyph-grids you must memorize. The Compositor wants you forgotten' }),
  cartridge({ id: 'engin-fracture', label: 'ENGIN: FRACTURE', emoji: '⚙️', category: 'Fighting', color: '#8aa9ff', renderMode: 'canvas', tier: 'flagship',
    subtitle: 'ENGIN Battle + DREAMwars + Avatar Maker · Built-is-fought',
    description: '1v1 mech fighter where every avatar-maker silhouette choice is a frame-data decision, wrapped in a season-long Lattice/Choir/Kindling faction war. Pilot Vesh defects mid-season' }),

  // ── Advanced fusion cartridges ───────────────────────────────────────────
  cartridge({ id: 'glassfall', label: 'GLASSFALL', emoji: '🔻', category: 'Puzzle', color: '#ff7da8', renderMode: 'canvas', tier: 'advanced',
    subtitle: 'Breakout + Tetris + Match-3 · Carve the falling tower',
    description: 'A vertical action-puzzler — bounce shards up into falling tetrominos to chip free gems, settle them into 3-matches, push back the rising garbage. Climb the Architect\'s tower' }),
  cartridge({ id: 'nite-flyer-solar-hymn', label: 'NITE FLYER: SOLAR HYMN', emoji: '🌙', category: 'Adventure', color: '#c47bd6', renderMode: 'canvas', tier: 'advanced',
    subtitle: 'Flappy + Pong + DREAMquest · Out-rally a god',
    description: 'Side-scrolling dream-courier adventure — flap through painted chapters, deliver one last letter to The Long Pause, then face moon-king bosses in cosmic Pong duels' }),
  cartridge({ id: 'lexicon-solitaire', label: 'LEXICON SOLITAIRE', emoji: '📜', category: 'Card', color: '#d6b27a', renderMode: 'dom', tier: 'advanced',
    subtitle: 'Solitaire + Word Sprint + Trivia · Spell to fight',
    description: 'Narrative deckbuilder — lay Klondike cascades, spell words across legal chains to cast spells, answer library trivia for relic-cards. Lin Argo chases the Redactor through five dying libraries' }),

  // ── Classic fusion cartridge ─────────────────────────────────────────────
  cartridge({ id: 'defuse-ritual', label: 'DEFUSE RITUAL', emoji: '🕯', category: 'Arcade', color: '#f0c674', renderMode: 'dom', tier: 'classic',
    subtitle: 'Speed-Tap + Minesweeper · Deduction under panic',
    description: 'Nine seconds. A minesweeper grid overlays a candle-lit temple floor. Tap only the safe tiles in the glyph-order shown on the wall — mistakes shorten the timer and brand your hand' }),
];

/** Quick lookup by id. Returns undefined if no cartridge with that id exists. */
export function getCartridgeManifest(id: string): CartridgeManifestEntry | undefined {
  return CARTRIDGE_MANIFEST.find((c) => c.id === id);
}

/** Distinct categories preserved in manifest order. */
export function getCartridgeCategories(): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const c of CARTRIDGE_MANIFEST) {
    if (!seen.has(c.category)) { seen.add(c.category); out.push(c.category); }
  }
  return out;
}
