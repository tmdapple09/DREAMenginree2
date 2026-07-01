import { GestureFrameComputer } from './GestureFrameComputer';
import { GestureIntent, GestureIntentResolver } from './GestureIntentResolver';
import { LAYER_HOME, NavStateBuffer } from './NavStateBuffer';
import { PointerEventCapture } from './PointerEventCapture';
import type { PointerState } from './PointerEventCapture';
import { ReturnStack } from './ReturnStack';
import { TransformSolver, type ViewportMetrics } from './TransformSolver';
import { WidgetInstanceMemory } from './WidgetInstanceMemory';




export interface EngineConfig {
  element?: HTMLElement | Document;
  enablePersistence?: boolean;
}

export type EngineEventType = 'navchange' | 'gesture' | 'error';
export type EngineEventCallback = (data: unknown) => void;


export class SpatialNavigationEngine {
  
  private navState: NavStateBuffer;
  private returnStack: ReturnStack;
  private pointerCapture: PointerEventCapture;
  private frameComputer: GestureFrameComputer;
  private intentResolver: GestureIntentResolver;
  private transformSolver: TransformSolver;
  private widgetMemory: WidgetInstanceMemory;

  
  private secondaryHomeSnapshot: Int32Array | null;

  
  private rafId: number | null;
  private isRunning: boolean;

  
  private listeners: Map<EngineEventType, Set<EngineEventCallback>>;

  
  private config: EngineConfig;

  constructor(config: EngineConfig = {}) {
    this.config = config;
    this.secondaryHomeSnapshot = null;

    
    this.navState = new NavStateBuffer();
    this.returnStack = new ReturnStack();
    this.pointerCapture = new PointerEventCapture(config.element);
    this.frameComputer = new GestureFrameComputer();
    this.intentResolver = new GestureIntentResolver();
    this.transformSolver = new TransformSolver();
    this.widgetMemory = new WidgetInstanceMemory();

    this.rafId = null;
    this.isRunning = false;
    this.listeners = new Map();

    
    this.tick = this.tick.bind(this);
    this.handlePointerMove = this.handlePointerMove.bind(this);
    this.handlePointerEnd = this.handlePointerEnd.bind(this);
  }

  
  start(): void {
    if (this.isRunning) return;

    this.isRunning = true;
    this.pointerCapture.start(this.handlePointerMove, this.handlePointerEnd);
    this.rafId = requestAnimationFrame(this.tick);
  }

  
  stop(): void {
    if (!this.isRunning) return;

    this.isRunning = false;
    this.pointerCapture.stop();

    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  
  private tick(now: number): void {
    if (!this.isRunning) return;

    
    this.rafId = requestAnimationFrame(this.tick);

    
    const currentQuat = this.intentResolver.getOrientation();
    this.transformSolver.setOrientation(currentQuat);

    
    if (!this.navState.isValid()) {
      this.forceReturn();
      this.emit('error', { type: 'invariant_violation', state: this.navState.toString() });
    }

    
    if (this.config.enablePersistence) {
      this.schedulePersistence();
    }
  }

  
  private handlePointerMove(state: unknown): void {
    const now = performance.now();

    
    if (!this.intentResolver.isActive()) {
      this.intentResolver.startGesture(now);
    }

    
    const frame = this.frameComputer.compute(state as PointerState, now);

    
    const resolved = this.intentResolver.resolve(frame, now);

    
    this.executeIntent(resolved.intent, resolved.magnitude);

    
    this.emit('gesture', { intent: resolved.intent, magnitude: resolved.magnitude });
  }

  
  private handlePointerEnd(): void {
    this.intentResolver.endGesture();
    this.frameComputer.reset();
  }

  
  private executeIntent(intent: GestureIntent, magnitude: number): void {
    const prevSnapshot = this.navState.snapshot();
    let mutated = false;

    switch (intent) {
      case GestureIntent.ZOOM_IN:
        this.returnStack.push(prevSnapshot);
        this.navState.incrementDepth();
        mutated = true;
        break;

      case GestureIntent.ZOOM_OUT:
        if (!this.navState.decrementDepth()) {
          
          const snapshot = this.returnStack.pop();
          if (snapshot) {
            this.navState.restore(snapshot);
            mutated = true;
          }
        } else {
          mutated = true;
        }
        break;

      case GestureIntent.ROTATE_X:
        this.returnStack.push(prevSnapshot);
        this.navState.rotateFace(magnitude > 0 ? 1 : -1);
        mutated = true;
        break;

      case GestureIntent.ROTATE_Y:
        this.returnStack.push(prevSnapshot);
        this.navState.rotateFace(magnitude > 0 ? 1 : -1);
        mutated = true;
        break;
    }

    if (mutated) {
      this.emit('navchange', { state: this.navState.snapshot() });
    }
  }

  
  private forceReturn(): void {
    const snapshot = this.returnStack.pop();
    if (snapshot) {
      this.navState.restore(snapshot);
    } else {
      this.navState.reset();
    }
  }

  
  homeAnchorInterrupt(): void {
    this.intentResolver.cancel();

    const homeSnapshot = this.returnStack.popUntilLayer(LAYER_HOME);
    if (homeSnapshot) {
      this.navState.restore(homeSnapshot);
    }

    this.navState.depth = 0;
    this.emit('navchange', { state: this.navState.snapshot() });
  }

  
  homeAnchorSecondary(): void {
    this.intentResolver.cancel();

    if (this.secondaryHomeSnapshot) {
      this.navState.restore(this.secondaryHomeSnapshot);
      this.secondaryHomeSnapshot = null;
      this.emit("navchange", { state: this.navState.snapshot() });
      return;
    }

    this.secondaryHomeSnapshot = this.navState.snapshot();
    const homeSnapshot = this.returnStack.popUntilLayer(LAYER_HOME);
    if (homeSnapshot) {
      this.navState.restore(homeSnapshot);
    }

    this.navState.depth = 0;
    this.emit("navchange", { state: this.navState.snapshot() });
  }

  
  private schedulePersistence(): void {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        this.persist();
      });
    }
  }

  
  private persist(): void {
    try {
      const stateData = {
        navState: Array.from(this.navState.snapshot()),
        returnStackTop: this.returnStack.peek() ? Array.from(this.returnStack.peek()!) : null,
      };
      localStorage.setItem('nav_state', JSON.stringify(stateData));
    } catch (e: unknown) {
      
    }
  }

  
  restore(): void {
    try {
      const data = localStorage.getItem('nav_state');
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.navState) {
          this.navState.restore(new Int32Array(parsed.navState));
        }
      }
    } catch (e: unknown) {
      
    }
  }

  
  getNavState(): NavStateBuffer {
    return this.navState;
  }

  
  getWidgetMemory(): WidgetInstanceMemory {
    return this.widgetMemory;
  }

  
  computeTransform(viewport: ViewportMetrics) {
    return this.transformSolver.solve(this.navState, viewport);
  }

  
  applyTransform(element: HTMLElement, viewport: ViewportMetrics): void {
    const transform = this.computeTransform(viewport);
    this.transformSolver.apply(element, transform);
  }

  
  on(event: EngineEventType, callback: EngineEventCallback): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(callback);
  }

  off(event: EngineEventType, callback: EngineEventCallback): void {
    this.listeners.get(event)?.delete(callback);
  }

  private emit(event: EngineEventType, data: unknown): void {
    this.listeners.get(event)?.forEach((callback) => callback(data));
  }
}
