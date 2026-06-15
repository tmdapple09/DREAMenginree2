'use client';

import { recordEmission } from '@/lib/runtime/channelMetrics';
import { dreamOSBus } from '@/lib/runtime/dreamOSBus';
import { createLocalChannel } from '@/lib/runtime/runtimeChannel';
import { acquireSharedResource, releaseSharedResource } from '@/lib/runtime/sharedResourcePool';
import { useCallback, useEffect, useRef } from 'react';
import type {
    AchievementDefinition,
    CartridgeInputEvent,
    GameCartridge,
    GameEngineAPI,
    GravityPreset,
    RuntimeBackendDiagnostics,
} from './cartridge';
import { ENGINE_VERSION, GRAVITY_VALUES, engineSatisfies } from './cartridge';
import { createAchievementsAPI } from './cartridges/achievementEngine';
import {
    stubAssetsAPI,
    stubAudioAPI,
    stubHapticsAPI,
    stubNetworkAPI,
} from './cartridges/apiStubs';
import { createSaveAPI } from './cartridges/saveState';
import { createGameEnginExecutionKernel, type GameEnginExecutionKernel } from './executionWiring';

// Framework directives stay physically first when required.

// Runtime file: lib/gameengin/GameRuntime.tsx.

/**
 * lib/gameengin/GameRuntime.tsx
 *
 * The Shared Engine Runtime Host — the console's heartbeat.
 *
 * Responsibilities:
 *   - Owns ONE single requestAnimationFrame loop (fixed 60fps timestep)
 *   - Builds and provides the complete GameEngineAPI to whatever cartridge is loaded
 *   - Wires physicsConfig from GameEngin's existing state
 *   - Handles cartridge hot-swap (unmount old, mount new) without page reload
 *   - Samples frame pacing internally without exposing architecture telemetry in the player UI
 *
 * HUD layer contract:
 *   - ENGINE services (this file): frame sampling stays internal and never renders UI chrome
 *   - GAME chrome: score/lives/level — rendered by the cartridge inside its own container
 *   - SHELL chrome: mobile controls — rendered by ImmersiveGameShell outside this component
 *
 * These three layers never overlap. Do not add score/lives/game info here.
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

/** Fixed timestep target: 60fps = 16.667ms per tick */
const FIXED_DT = 1000 / 60;

/** Maximum frames to accumulate before capping (prevents spiral of death) */
const MAX_ACCUMULATED_FRAMES = 5;

const MAX_ACCUMULATOR = FIXED_DT * MAX_ACCUMULATED_FRAMES;

/** Cap sampled FPS before forwarding optional internal diagnostics. */
const MAX_DISPLAY_FPS = 999;

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export interface GameRuntimeCrash {
  name?: string;
  message?: string;
  stack?: string;
  gameplay?: Record<string, unknown>;
}

export interface GameRuntimeProps {
  cartridge: GameCartridge | null;
  physicsConfig: { gravity: GravityPreset; friction: number } | null;
  onFrame?: (fps: number) => void;
  /** Optional crash bridge used by GameEngin and cartridge routes to open the Brain crash report flow. */
  onCrash?: (crash: GameRuntimeCrash) => void;
  /** Backend/warmup diagnostics negotiated by the launch shell before mount. */
  bootstrapDiagnostics?: RuntimeBackendDiagnostics;
}

// Runtime functions, classes, handlers, and state transitions.

export default function GameRuntime({ cartridge, physicsConfig, onFrame, onCrash, bootstrapDiagnostics }: GameRuntimeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mutable refs for RAF loop state
  const tickCallbacksRef   = useRef<Set<(dt: number, elapsed: number) => void>>(new Set());
  const renderCallbacksRef = useRef<Set<(dt: number) => void>>(new Set());
  const keysDownRef        = useRef<Set<string>>(new Set());
  const inputListenersRef  = useRef<Map<string, Set<(payload: CartridgeInputEvent) => void>>>(new Map());
  const rafIdRef           = useRef(0);
  const accumulatorRef     = useRef(0);
  const lastTimeRef        = useRef(0);
  const elapsedRef         = useRef(0);
  const frameTimesRef      = useRef<number[]>([]);
  const fpsIntervalRef     = useRef(0);
  const cleanupRef         = useRef<(() => void) | null>(null);
  const mountedCartridgeRef = useRef<GameCartridge | null>(null);
  const physicsRef         = useRef(physicsConfig);
  const onFrameRef         = useRef(onFrame);
  const onCrashRef         = useRef(onCrash);
  const scoreChannelRef    = useRef(
    createLocalChannel<{ type: 'game:score-submit'; gameId: string; score: number; level?: number }>('engine:game-scores'),
  );
  const executionKernelRef = useRef<GameEnginExecutionKernel | null>(null);
  const diagnosticsRef = useRef<RuntimeBackendDiagnostics>({
    selectedBackend: 'dom',
    warmupComplete: false,
    warmupProgress: 0,
    secureContext: false,
    workerSupported: false,
    offscreenCanvasSupported: false,
    spans: [],
  });

  if (executionKernelRef.current === null) {
    executionKernelRef.current = createGameEnginExecutionKernel();
  }

  // Keep refs in sync
  physicsRef.current  = physicsConfig;
  onFrameRef.current  = onFrame;
  onCrashRef.current  = onCrash;
  if (bootstrapDiagnostics) diagnosticsRef.current = bootstrapDiagnostics;

  const buildAPI = useCallback((forCartridge: GameCartridge): GameEngineAPI => {
    const cartridgeId  = forCartridge.id;
    const capabilities = new Set(forCartridge.capabilities ?? []);

    // Save state — real implementation when capability is declared
    const saveAPI = capabilities.has('save-state')
      ? createSaveAPI(cartridgeId)
      : {
          async list()        { return []; },
          async load()        { return null; },
          async write()       {},
          async erase()       {},
          async autoSave()    {},
        };

    // Achievements — real implementation when capability is declared
    const achievementsAPI = capabilities.has('achievements')
      ? createAchievementsAPI(cartridgeId, [], (def: AchievementDefinition) => {
          // Emit to dreamOSBus so the shell can show a pop-up
          dreamOSBus.emit('game:achievement-unlocked' as Parameters<typeof dreamOSBus.emit>[0], {
            cartridgeId,
            id: def.id,
            label: def.label,
            description: def.description,
            icon: def.icon,
          } as unknown as Parameters<typeof dreamOSBus.emit>[1]);
        })
      : {
          async unlock()    {},
          async progress()  {},
          async getAll()    { return []; },
        };

    return {
      engineVersion: ENGINE_VERSION,

      loop: {
        onTick(cb) {
          return dreamOSBus.on('engine:tick', ({ dt, elapsed }) => cb(dt, elapsed));
        },
        onRender(cb) {
          return dreamOSBus.on('engine:render', ({ dt }) => cb(dt));
        },
      },

      physics: {
        get gravity() {
          const preset = physicsRef.current?.gravity ?? 'earth';
          return GRAVITY_VALUES[preset];
        },
        get friction() {
          const raw = physicsRef.current?.friction ?? 50;
          return raw / 100;
        },
      },

      input: {
        on(event, cb) {
          return dreamOSBus.on('game:input', payload => {
            if (payload.type === event) cb(payload as CartridgeInputEvent);
          });
        },
        isKeyDown(key) {
          return keysDownRef.current.has(key);
        },
      },

      score: {
        async submit(gameId, value, level) {
          await scoreChannelRef.current.publish({
            type: 'game:score-submit',
            gameId,
            score: value,
            level,
          });
          recordEmission('games');
          try {
            await fetch('/api/game-scores', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                game: gameId,
                score: value,
                ...(level !== undefined ? { level } : {}),
              }),
            });
          } catch {
            // best-effort — 401 for unauthenticated users is expected
          }
        },
      },

      pool: {
        acquire<T>(factory: () => T): T {
          return acquireSharedResource('game:runtime', factory);
        },
        release<T>(obj: T): void {
          releaseSharedResource('game:runtime', obj);
        },
      },

      telemetry: {
        reportFrame(dtMs) {
          recordEmission('games', dtMs);
          frameTimesRef.current.push(dtMs);
          if (frameTimesRef.current.length > 120) {
            frameTimesRef.current.shift();
          }
        },
      },

      save:         saveAPI,
      achievements: achievementsAPI,

      runtime: {
        getBackendDiagnostics() {
          return diagnosticsRef.current;
        },
        markWarmupSpan(id, status, message) {
          const spans = diagnosticsRef.current.spans.map((span) => (span.id === id ? { ...span, status, message, ms: span.ms ?? performance.now() } : span));
          diagnosticsRef.current = {
            ...diagnosticsRef.current,
            spans,
            warmupComplete: spans.every((span) => span.status === 'complete' || span.status === 'failed'),
            warmupProgress: spans.length === 0 ? 1 : spans.filter((span) => span.status === 'complete' || span.status === 'failed').length / spans.length,
          };
        },
      },

      audio:   stubAudioAPI,
      haptics: stubHapticsAPI,
      assets:  stubAssetsAPI,
      network: stubNetworkAPI,
    };
  }, []);

  const reportRuntimeCrash = useCallback((error: unknown, gameplay?: Record<string, unknown>) => {
    const err = error instanceof Error ? error : new Error(String(error));
    const crash = {
      name: err.name,
      message: err.message,
      stack: err.stack,
      gameplay: {
        ...gameplay,
        backend: diagnosticsRef.current.selectedBackend,
        fallbackReason: diagnosticsRef.current.fallbackReason,
        warmupComplete: diagnosticsRef.current.warmupComplete,
        engineSpans: diagnosticsRef.current.spans.slice(-8),
      },
    };
    executionKernelRef.current?.onCrash({
      cartridgeId: typeof gameplay?.cartridgeId === 'string' ? gameplay.cartridgeId : undefined,
      phase: typeof gameplay?.phase === 'string' ? gameplay.phase : undefined,
      message: err.message,
      stack: err.stack,
    });
    onCrashRef.current?.(crash);
  }, []);

  const persistCartridgeSnapshot = useCallback((mountedCartridge: GameCartridge) => {
    if (!mountedCartridge.serialize || !(mountedCartridge.capabilities ?? []).includes('save-state')) return;
    try {
      void createSaveAPI(mountedCartridge.id).autoSave(mountedCartridge.serialize());
    } catch (error: unknown) {
      reportRuntimeCrash(error, { cartridgeId: mountedCartridge.id, phase: 'autosave' });
    }
  }, [reportRuntimeCrash]);

  useEffect(() => {
    const keysDown       = keysDownRef.current;
    const inputListeners = inputListenersRef.current;

    const dispatch = (type: 'keydown' | 'keyup', e: KeyboardEvent) => {
      // Create the payload without explicit type so TS infers exact keydown/keyup shape
      const payload = {
        key: e.key,
        type,
        source: 'keyboard' as const,
        preventDefault: () => e.preventDefault(),
      };

      const listeners = inputListeners.get(type);
      if (listeners) {
        // Cast here since the listeners expect the wider union type
        for (const cb of listeners) cb(payload as CartridgeInputEvent);
      }

      // Successfully emits the narrower keyboard type
      dreamOSBus.emit('game:input', payload);
      executionKernelRef.current?.onInput(payload as CartridgeInputEvent);
    };

    const onKeyDown = (e: KeyboardEvent) => { keysDown.add(e.key);    dispatch('keydown', e); };
    const onKeyUp   = (e: KeyboardEvent) => { keysDown.delete(e.key); dispatch('keyup', e); };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup',   onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup',   onKeyUp);
    };
  }, []);

  // GameRemote already emits `de-game-input`; normalize that event into the
  // GameRuntime API so cartridges can subscribe through `api.input.on()` instead
  // of each game wiring a separate window listener.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ action?: string; active?: boolean; source?: string }>).detail;
      const action = detail?.action;
      const active = detail?.active;
      if (typeof action !== 'string' || typeof active !== 'boolean') return;

      const payload: CartridgeInputEvent = {
        key: action,
        type: 'remote',
        action,
        active,
        source: detail?.source === 'mobile' ? 'mobile' : detail?.source === 'gamepad' ? 'gamepad' : 'remote',
        cartridgeId: cartridge?.id,
        preventDefault: () => {},
      };

      dreamOSBus.emit('game:input', payload);
      executionKernelRef.current?.onInput(payload);
    };

    window.addEventListener('de-game-input', handler as EventListener);
    return () => window.removeEventListener('de-game-input', handler as EventListener);
  }, [cartridge?.id]);

  useEffect(() => {
    if (!cartridge) return;

    lastTimeRef.current  = 0;
    accumulatorRef.current = 0;
    elapsedRef.current   = 0;
    frameTimesRef.current = [];

    const loop = (now: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = now;
        rafIdRef.current = requestAnimationFrame(loop);
        return;
      }

      const rawDt       = now - lastTimeRef.current;
      lastTimeRef.current = now;
      const frameStart  = performance.now();

      // Accumulate delta, cap to prevent spiral of death
      accumulatorRef.current = Math.min(accumulatorRef.current + rawDt, MAX_ACCUMULATOR);

      // Fixed-timestep ticks
      while (accumulatorRef.current >= FIXED_DT) {
        accumulatorRef.current -= FIXED_DT;
        elapsedRef.current     += FIXED_DT;
        const dtSec      = FIXED_DT / 1000;
        const elapsedSec = elapsedRef.current / 1000;
        try {
          dreamOSBus.emit('engine:tick', { dt: dtSec, elapsed: elapsedSec });
          for (const cb of tickCallbacksRef.current) cb(dtSec, elapsedSec);
        } catch (error: unknown) {
          reportRuntimeCrash(error, { cartridgeId: cartridge.id, phase: 'tick' });
        }
      }

      // Render pass (once per frame)
      const renderDt = rawDt / 1000;
      try {
        dreamOSBus.emit('engine:render', { dt: renderDt });
        for (const cb of renderCallbacksRef.current) cb(renderDt);
        executionKernelRef.current?.onFrame({ dt: renderDt, cartridgeId: cartridge.id });
      } catch (error: unknown) {
        reportRuntimeCrash(error, { cartridgeId: cartridge.id, phase: 'render' });
      }

      const frameMs = performance.now() - frameStart;
      frameTimesRef.current.push(frameMs);
      if (frameTimesRef.current.length > 120) frameTimesRef.current.shift();

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    // Internal frame-pacing sample interval
    fpsIntervalRef.current = window.setInterval(() => {
      const times = frameTimesRef.current;
      if (times.length > 0) {
        const avgMs      = times.reduce((a, b) => a + b, 0) / times.length;
        const currentFps = avgMs > 0 ? Math.round(Math.min(1000 / avgMs, MAX_DISPLAY_FPS)) : 0;
        onFrameRef.current?.(currentFps);
      }
    }, 500);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      clearInterval(fpsIntervalRef.current);
    };
  }, [cartridge, reportRuntimeCrash]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !cartridge) return;

    // Unmount previous cartridge
    if (cleanupRef.current) {
      if (mountedCartridgeRef.current) persistCartridgeSnapshot(mountedCartridgeRef.current);
      cleanupRef.current();
      cleanupRef.current = null;
      mountedCartridgeRef.current = null;
    }

    // Clear callbacks from previous cartridge
    tickCallbacksRef.current.clear();
    renderCallbacksRef.current.clear();
    inputListenersRef.current.clear();

    // Build a fresh API scoped to this cartridge and mount. Route mount failures
    // into the same crash flow as async runtime failures.
    try {
      if (cartridge.minEngineVersion && !engineSatisfies(cartridge.minEngineVersion)) {
        throw new Error(`Cartridge ${cartridge.id} requires GameEngin ${cartridge.minEngineVersion}, but runtime is ${ENGINE_VERSION}.`);
      }

      const api     = buildAPI(cartridge);
      const cleanup = cartridge.mount(container, api);
      cleanupRef.current = cleanup;
      mountedCartridgeRef.current = cartridge;
      executionKernelRef.current?.onCartridgeMounted(cartridge);
      dreamOSBus.emit('game:cartridge-mounted' as Parameters<typeof dreamOSBus.emit>[0], {
        cartridgeId: cartridge.id,
        cartridgeLabel: cartridge.id,
      } as unknown as Parameters<typeof dreamOSBus.emit>[1]);
    } catch (error: unknown) {
      reportRuntimeCrash(error, { cartridgeId: cartridge.id, phase: 'mount' });
    }

    return () => {
      if (cleanupRef.current) {
        const mountedCartridge = mountedCartridgeRef.current ?? cartridge;
        persistCartridgeSnapshot(mountedCartridge);
        cleanupRef.current();
        cleanupRef.current = null;
        mountedCartridgeRef.current = null;
        executionKernelRef.current?.onCartridgeUnmounted(mountedCartridge);
        dreamOSBus.emit('game:cartridge-unmounted' as Parameters<typeof dreamOSBus.emit>[0], {
          cartridgeId: mountedCartridge.id,
        } as unknown as Parameters<typeof dreamOSBus.emit>[1]);
      }
      tickCallbacksRef.current.clear();
      renderCallbacksRef.current.clear();
      inputListenersRef.current.clear();
    };
  }, [cartridge, buildAPI, reportRuntimeCrash, persistCartridgeSnapshot]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* ── Game container — cartridges mount into this div ── */}
      <div
        ref={containerRef}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      />
    </div>
  );
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
