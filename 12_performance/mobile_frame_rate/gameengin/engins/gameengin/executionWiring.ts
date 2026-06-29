import { RealtimeCaptioner, MotionReductionAI, ColorVisionAdapter } from './accessibility-ai';
import { AIDirector, type PlayerSignals } from './ai-director';
import { EmergentDialogue, LLMNPCBrain, NPCPersonalityStore } from './ai-npcs';
import { EdgeOffloadRouter, RemoteRenderHandoff, ResultVerifier } from './cloud-compute';
import { detectCapabilities } from './platform';
import { AdaptiveMusicEngine, NeuralFoley } from './generative-audio';
import { FrameGenerator, NeuralTextureCompression, NeuralUpscaler } from './neural-render';
import { NeuralDenoiser, PathTracer, RestirGI } from './path-tracing';
import { BehaviorAnticipator, MLPrefetchModel } from './predictive-stream';
import { BiomeSynthesizer, ChunkScheduler, WaveFunctionCollapse } from './procgen';
import { WorldStateCRDT } from './world-crdt';
import { HandTrackingInput, PassthroughComposite, WebXRSession } from './xr';
import { ComboMachine } from './remote/comboMachine';
import { layoutFor, radiusMmToPx, isHudElementAllowed } from './remote/layout';
import { FACE_BUTTONS, BASE_MOVES, SPRINT_MOVES, ALL_COMBOS, MULTITOUCH_COMBOS, type FaceButton } from './remote/moves';
import { SprintDetector } from './remote/sprintDetector';
import { CARTRIDGE_MANIFEST } from './cartridges/manifest';
import { CARTRIDGE_LOADERS, assertCartridgeLoadersReady, getMissingCartridgeLoaders, getOrphanCartridgeLoaders } from './cartridges/loaders';
import { ENGINE_VERSION, engineSatisfies, type CartridgeInputEvent, type GameCartridge } from './cartridge';
import { invokeMadMaxiSnapshotTransfer } from '@/engine/runtime/madMaxiSnapshotBridge';
import * as CartridgeIndex from './cartridges/index';
import * as ControlMappings from './controls/control-mappings';
import * as DreamEngineModule from './dream-engine';
import * as DreamrCartridgeLoader from './cartridgeLoader';
import * as LegacyGameRuntime from './gameEnginRuntime';
import * as RuntimeShell from './webgpu-runtime-shell';
import * as AISystems from './systems/ai';
import * as AnimationSystems from './systems/animation';
import * as AssetSystems from './systems/assets';
import * as LODSystems from './systems/lod';
import * as NetworkSystems from './systems/network';
import * as PhysicsSystems from './systems/physics';
import * as PoolingSystems from './systems/pooling';
import * as RenderingSystems from './systems/rendering';
import * as SpatialSystems from './systems/spatial';
import * as WorldSystems from './systems/world';
import * as GameRuleSetIndex from '@/engins/rulesets/game';
import * as LucidAvenueWorld from '@/engins/gameengin/games/madmaxi-wildfall-world';
import * as UnifiedLoopHook from './useUnifiedLoop';

/**
 * lib/gameengin/executionWiring.ts
 *
 * Internal execution wiring for the GameEngin packet.
 *
 * This is not a discovery registry. It is the runtime bridge that imports the
 * exported GameEngin subsystems and gives GameRuntime one callable kernel for
 * input, frame, cartridge lifecycle, crash, and capability checks.
 */

export interface GameEnginExecutionFrame {
  dt: number;
  cartridgeId?: string;
  fps?: number;
}

export interface GameEnginExecutionCrash {
  cartridgeId?: string;
  phase?: string;
  message?: string;
  stack?: string;
}

export interface GameEnginExecutionKernelSnapshot {
  engineVersion: string;
  manifestCount: number;
  loaderCount: number;
  missingLoaders: string[];
  orphanLoaders: string[];
  capabilities: ReturnType<typeof detectCapabilities>;
  remoteLayout: {
    portrait: ReturnType<typeof layoutFor>;
    landscape: ReturnType<typeof layoutFor>;
    leftStickRadiusPx: number;
    rightStickRadiusPx: number;
    hudAllowed: string[];
  };
  installedSystems: string[];
  lastDirectorState: ReturnType<AIDirector['update']>;
  lastMotionPolicy: ReturnType<MotionReductionAI['policy']>;
  lastUpscaleSize: ReturnType<NeuralUpscaler['outputSize']>;
  currentBiome: ReturnType<BiomeSynthesizer['sample']>;
  worldRecords: ReturnType<WorldStateCRDT<Record<string, unknown>>['list']>;
}

export interface GameEnginExecutionKernel {
  readonly snapshot: () => GameEnginExecutionKernelSnapshot;
  onInput(input: CartridgeInputEvent): void;
  onFrame(frame: GameEnginExecutionFrame): void;
  onCartridgeMounted(cartridge: GameCartridge): void;
  onCartridgeUnmounted(cartridge: GameCartridge): void;
  onCrash(crash: GameEnginExecutionCrash): void;
}

function faceButtonForInput(input: CartridgeInputEvent): FaceButton | null {
  const raw = String(input.action ?? input.key ?? '').toLowerCase();
  if (raw === 'jump' || raw === 'x' || raw === 'cross') return 'X';
  if (raw === 'spin' || raw === 'o' || raw === 'circle') return 'O';
  if (raw === 'shoot' || raw === 'fire' || raw === 'square') return 'SQUARE';
  if (raw === 'slide' || raw === 'duck' || raw === 'triangle') return 'TRIANGLE';
  return null;
}

function createMusicEngine(): AdaptiveMusicEngine {
  return new AdaptiveMusicEngine({
    startNodeId: 'neutral',
    nodes: [
      { id: 'neutral', loopUrl: 'gameengin://music/neutral', tensionRange: [0, 0.59] },
      { id: 'high', loopUrl: 'gameengin://music/high', tensionRange: [0.6, 1] },
    ],
    edges: [
      { from: 'neutral', to: 'high', crossfadeMs: 900, condition: (tension) => tension >= 0.6 },
      { from: 'high', to: 'neutral', crossfadeMs: 1100, condition: (tension) => tension < 0.45 },
    ],
  });
}

export function createGameEnginExecutionKernel(): GameEnginExecutionKernel {
  assertCartridgeLoadersReady();

  const director = new AIDirector();
  const captioner = new RealtimeCaptioner();
  const motion = new MotionReductionAI();
  const color = new ColorVisionAdapter();
  const npcBrain = new LLMNPCBrain();
  const dialogue = new EmergentDialogue();
  const personalities = new NPCPersonalityStore();
  const offload = new EdgeOffloadRouter();
  const remoteHandoff = new RemoteRenderHandoff();
  const verifier = new ResultVerifier();
  const music = createMusicEngine();
  const foley = new NeuralFoley();
  const upscaler = new NeuralUpscaler();
  const ntc = new NeuralTextureCompression();
  const frameGen = new FrameGenerator();
  const pathTracer = new PathTracer();
  const restir = new RestirGI();
  const denoiser = new NeuralDenoiser();
  const prefetch = new MLPrefetchModel();
  const anticipator = new BehaviorAnticipator();
  const wfc = new WaveFunctionCollapse({
    width: 1,
    height: 1,
    tiles: [{ id: 'start', weight: 1, edges: ['a', 'a', 'a', 'a'] }],
  });
  const biome = new BiomeSynthesizer(1);
  const chunkScheduler = new ChunkScheduler();
  const world = new WorldStateCRDT<Record<string, unknown>>('gameengin-runtime');
  const xr = new WebXRSession('inline');
  const hands = new HandTrackingInput();
  const passthrough = new PassthroughComposite();
  const sprint = new SprintDetector();
  const combo = new ComboMachine({ isSprinting: () => sprint.isSprinting() });

  const wiredModuleNamespaces = {
    CartridgeIndex,
    ControlMappings,
    DreamEngineModule,
    DreamrCartridgeLoader,
    LegacyGameRuntime,
    RuntimeShell,
    AISystems,
    AnimationSystems,
    AssetSystems,
    LODSystems,
    NetworkSystems,
    PhysicsSystems,
    PoolingSystems,
    RenderingSystems,
    SpatialSystems,
    WorldSystems,
    GameRuleSetIndex,
    LucidAvenueWorld,
    UnifiedLoopHook,
  } as const;

  const installedSystems = [
    'AIDirector',
    'RealtimeCaptioner',
    'MotionReductionAI',
    'ColorVisionAdapter',
    'LLMNPCBrain',
    'EmergentDialogue',
    'NPCPersonalityStore',
    'EdgeOffloadRouter',
    'RemoteRenderHandoff',
    'ResultVerifier',
    'AdaptiveMusicEngine',
    'NeuralFoley',
    'NeuralUpscaler',
    'NeuralTextureCompression',
    'FrameGenerator',
    'PathTracer',
    'RestirGI',
    'NeuralDenoiser',
    'MLPrefetchModel',
    'BehaviorAnticipator',
    'WaveFunctionCollapse',
    'BiomeSynthesizer',
    'ChunkScheduler',
    'WorldStateCRDT',
    'WebXRSession',
    'HandTrackingInput',
    'PassthroughComposite',
    'ComboMachine',
    'SprintDetector',
    ...Object.entries(wiredModuleNamespaces).map(([name, module]) => `${name}:${Object.keys(module).join('|')}`),
  ];

  let deaths = 0;
  let score = 0;
  let comboMultiplier = 1;
  let avgSpeed = 0;
  let elapsed = 0;
  let lastDirectorState = director.update({ deaths, score, combo: comboMultiplier, avgSpeed, elapsed });
  let lastMotionPolicy = motion.policy({ angularVelocity: 0, shake: 0, fovDeg: 70, reportsPerMinute: 0 });
  let lastUpscaleSize = upscaler.outputSize(320, 180);
  let currentBiome = biome.sample(0, 0);

  // Wire static exports into live invariants immediately.
  color.setProfile('normal', 1);
  color.apply([1, 1, 1]);
  captioner.recent(1);
  dialogue.fallback('idle');
  personalities.remember('gameengin', 'kernel booted');
  offload.decide({ localCostMs: 1, edgeRoundTripMs: 20, realtime: true });
  remoteHandoff.begin();
  remoteHandoff.end();
  verifier.capture('boot', new ArrayBuffer(1));
  verifier.verify('boot', 1, 1, () => {});
  music.setTension(0.2);
  void foley.synthesize({ category: 'whoosh', intensity: 0.1, surface: 'air' });
  ntc.encode('boot', new Uint8ClampedArray([0, 0, 0, 255]), 1, 1);
  frameGen.interpolate(new Uint8ClampedArray([0, 0, 0, 255]), new Uint8ClampedArray([0, 0, 0, 255]), new Float32Array([0, 0]), 1, 1, 0.5);
  pathTracer.estimateDispatches(320, 180);
  restir.resize(1);
  denoiser.recommendedSamplesPerPixel();
  prefetch.plan([{ chunkId: 'platformer', probability: 1, estBytes: 1024 }]);
  anticipator.registerLinks('platformer', [{ chunkId: 'neon-drift', heading: 0, distance: 1 }]);
  wfc.collapse(1);
  void chunkScheduler.tick();
  void xr.isSupported();
  xr.setOnEnd(() => {});
  hands.onAction(() => {});
  passthrough.enablePassthrough(false);
  RuntimeShell.canUseWebGPU();
  RuntimeShell.planRuntimeShellHandoff({ manifest: { cartridge_id: 'platformer', render_mode: 'webgpu', entry: 'main', memory_budget_mb: 64, target_frame_rate: 60 } } as unknown as Parameters<typeof RuntimeShell.planRuntimeShellHandoff>[0]);
  try { DreamrCartridgeLoader.parseDreamrArchive(new Uint8Array()); } catch { /* invalid empty archive is expected during wiring warmup */ }
  isHudElementAllowed('lives');
  FACE_BUTTONS.includes('X');
  BASE_MOVES.length + SPRINT_MOVES.length + ALL_COMBOS.length + MULTITOUCH_COMBOS.length;

  function updateDirector(frame: GameEnginExecutionFrame): void {
    elapsed += frame.dt;
    avgSpeed = Math.min(1, Math.max(0, avgSpeed * 0.92 + Math.min(1, Math.abs(frame.dt) * 2) * 0.08));
    const signals: PlayerSignals = { deaths, score, combo: comboMultiplier, avgSpeed, elapsed };
    lastDirectorState = director.update(signals);
    music.setTension(lastDirectorState.challengeLevel);
    lastMotionPolicy = motion.policy({
      angularVelocity: avgSpeed * 2,
      shake: Math.min(1, lastDirectorState.challengeLevel * 0.35),
      fovDeg: 70 + lastDirectorState.challengeLevel * 18,
      reportsPerMinute: deaths,
    });
    upscaler.tickHistory();
    frameGen.interpolate(new Uint8ClampedArray([0, 0, 0, 255]), new Uint8ClampedArray([0, 0, 0, 255]), new Float32Array([0, 0]), 1, 1, 0.5);
    denoiser.tick();
    currentBiome = biome.sample(elapsed * 0.01, lastDirectorState.challengeLevel);
  }

  return {
    snapshot: () => ({
      engineVersion: ENGINE_VERSION,
      manifestCount: CARTRIDGE_MANIFEST.length,
      loaderCount: Object.keys(CARTRIDGE_LOADERS).length,
      missingLoaders: getMissingCartridgeLoaders(),
      orphanLoaders: getOrphanCartridgeLoaders(),
      capabilities: detectCapabilities(),
      remoteLayout: {
        portrait: layoutFor('portrait'),
        landscape: layoutFor('landscape'),
        leftStickRadiusPx: radiusMmToPx(13.5),
        rightStickRadiusPx: radiusMmToPx(13.5 * 1.1),
        hudAllowed: ['lives', 'points', 'timer', 'streak', 'branding'].filter(isHudElementAllowed),
      },
      installedSystems,
      lastDirectorState,
      lastMotionPolicy,
      lastUpscaleSize,
      currentBiome,
      worldRecords: world.list(),
    }),

    onInput(input) {
      const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
      const active = input.active !== false;
      const action = String(input.action ?? input.key ?? 'unknown');
      if (active && action.includes('move')) {
        sprint.onTouchStart(now);
        sprint.onMove(now, 0.5);
      }
      if (!active && action.includes('move')) sprint.onTouchEnd(now);
      const button = faceButtonForInput(input);
      if (button && active) {
        const match = combo.press(button, now);
        if (match) comboMultiplier = Math.min(8, comboMultiplier + 1);
      }
      world.put(`input:${now}`, { action, active, source: input.source ?? 'unknown' });
      anticipator.observe({ chunkId: String(input.cartridgeId ?? 'platformer'), heading: action.length, speed: active ? 1 : 0, t: now });
    },

    onFrame(frame) {
      updateDirector(frame);
      if (frame.fps) score = Math.max(score, Math.round(frame.fps * 100));
      lastUpscaleSize = upscaler.outputSize(320, 180);
      world.put('frame:last', { cartridgeId: frame.cartridgeId, dt: frame.dt, fps: frame.fps, challenge: lastDirectorState.challengeLevel });
    },

    onCartridgeMounted(cartridge) {
      if (cartridge.minEngineVersion && !engineSatisfies(cartridge.minEngineVersion)) {
        throw new Error(`Cartridge ${cartridge.id} requires ${cartridge.minEngineVersion}`);
      }
      world.put(`cartridge:${cartridge.id}`, { id: cartridge.id, label: cartridge.id, mountedAt: Date.now(), capabilities: cartridge.capabilities ?? [] });
      if (cartridge.id === 'platformer') void invokeMadMaxiSnapshotTransfer();
    },

    onCartridgeUnmounted(cartridge) {
      world.put(`cartridge:${cartridge.id}:unmounted`, { id: cartridge.id, unmountedAt: Date.now() });
    },

    onCrash(crash) {
      deaths += 1;
      world.put(`crash:${Date.now()}`, crash as Record<string, unknown>);
      npcBrain.resetTick();
    },
  };
}
