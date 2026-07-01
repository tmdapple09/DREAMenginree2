'use client';

import { recordEmission } from '@/engine/runtime/channelMetrics';
import { dreamOSBus } from '@/engine/runtime/dreamOSBus';
import { createLocalChannel } from '@/engine/runtime/runtimeChannel';
import { acquireSharedResource, releaseSharedResource } from '@/engine/runtime/sharedResourcePool';
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












const FIXED_DT = 1000 / 60;


const MAX_ACCUMULATED_FRAMES = 5;

const MAX_ACCUMULATOR = FIXED_DT * MAX_ACCUMULATED_FRAMES;


const MAX_DISPLAY_FPS = 999;

const FRAME_SAMPLE_CAPACITY = 120;

function appendFrameSample(samples: number[], value: number, cursorRef: { current: number }): void {
  if (samples.length < FRAME_SAMPLE_CAPACITY) {
    samples.push(value);
    return;
  }
  samples[cursorRef.current] = value;
  cursorRef.current = (cursorRef.current + 1) % FRAME_SAMPLE_CAPACITY;
}







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
  
  onCrash?: (crash: GameRuntimeCrash) => void;
  
  bootstrapDiagnostics?: RuntimeBackendDiagnostics;
}



export default function GameRuntime({ cartridge, physicsConfig, onFrame, onCrash, bootstrapDiagnostics }: GameRuntimeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  
  const tickCallbacksRef   = useRef<Set<(dt: number, elapsed: number) => void>>(new Set());
  const renderCallbacksRef = useRef<Set<(dt: number) => void>>(new Set());
  const keysDownRef        = useRef<Set<string>>(new Set());
  const inputListenersRef  = useRef<Map<string, Set<(payload: CartridgeInputEvent) => void>>>(new Map());
  const rafIdRef           = useRef(0);
  const accumulatorRef     = useRef(0);
  const lastTimeRef        = useRef(0);
  const elapsedRef         = useRef(0);
  const frameTimesRef      = useRef<number[]>([]);
  const frameSampleCursorRef = useRef(0);
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

  
  physicsRef.current  = physicsConfig;
  onFrameRef.current  = onFrame;
  onCrashRef.current  = onCrash;
  if (bootstrapDiagnostics) diagnosticsRef.current = bootstrapDiagnostics;

  const buildAPI = useCallback((forCartridge: GameCartridge): GameEngineAPI => {
    const cartridgeId  = forCartridge.id;
    const capabilities = new Set(forCartridge.capabilities ?? []);

    
    const saveAPI = capabilities.has('save-state')
      ? createSaveAPI(cartridgeId)
      : {
          async list()        { return []; },
          async load()        { return null; },
          async write()       {},
          async erase()       {},
          async autoSave()    {},
        };

    
    const achievementsAPI = capabilities.has('achievements')
      ? createAchievementsAPI(cartridgeId, [], (def: AchievementDefinition) => {
          
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
          appendFrameSample(frameTimesRef.current, dtMs, frameSampleCursorRef);
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
      
      const payload = {
        key: e.key,
        type,
        source: 'keyboard' as const,
        preventDefault: () => e.preventDefault(),
      };

      const listeners = inputListeners.get(type);
      if (listeners) {
        
        for (const cb of listeners) cb(payload as CartridgeInputEvent);
      }

      
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
    frameSampleCursorRef.current = 0;

    const loop = (now: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = now;
        rafIdRef.current = requestAnimationFrame(loop);
        return;
      }

      const rawDt       = now - lastTimeRef.current;
      lastTimeRef.current = now;
      const frameStart  = performance.now();

      
      accumulatorRef.current = Math.min(accumulatorRef.current + rawDt, MAX_ACCUMULATOR);

      
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

      
      const renderDt = rawDt / 1000;
      try {
        dreamOSBus.emit('engine:render', { dt: renderDt });
        for (const cb of renderCallbacksRef.current) cb(renderDt);
        executionKernelRef.current?.onFrame({ dt: renderDt, cartridgeId: cartridge.id });
      } catch (error: unknown) {
        reportRuntimeCrash(error, { cartridgeId: cartridge.id, phase: 'render' });
      }

      const frameMs = performance.now() - frameStart;
      appendFrameSample(frameTimesRef.current, frameMs, frameSampleCursorRef);

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    
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

    
    if (cleanupRef.current) {
      if (mountedCartridgeRef.current) persistCartridgeSnapshot(mountedCartridgeRef.current);
      cleanupRef.current();
      cleanupRef.current = null;
      mountedCartridgeRef.current = null;
    }

    
    tickCallbacksRef.current.clear();
    renderCallbacksRef.current.clear();
    inputListenersRef.current.clear();

    
    
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
      
      <div
        ref={containerRef}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      />
    </div>
  );
}






