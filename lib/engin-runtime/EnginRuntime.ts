import {
  createBaseState,
  isEnginBaseState,
  patchBaseState,
  type EnginBaseState,
  type EnginLifecycle,
  type JsonObject,
} from './EnginBaseState';
import {
  DEFAULT_USER_CAPABILITIES,
  gateCapability,
  type EnginCapabilityMap,
} from './EnginCapabilities';
import {
  createEnginEventBus,
  type EnginEventBus,
  type EnginLifecycleEvents,
} from './EnginEventBus';
import {
  LocalStorageAdapter,
  MemorySyncTransport,
  type EnginIOAdapter,
  type EnginSyncTransport,
} from './EnginIOAdapter';
import {
  capabilityProfileMatchesRuleSet,
  validateEnginCapabilityProfile,
  type CapabilityProfileValidation,
} from './EnginCapabilityTargets';
import {
  createEnginCapabilityExecutionKernel,
  type EnginCapabilityExecutionKernel,
} from './EnginCapabilityExecution';
import {
  HotRuntime,
  type HotActionMetadata,
  type HotLaneCommand,
  type HotRuntimeLane,
  type MoldableModuleFrame,
  type WebGPUComputeMeasurement,
  type WebGPUInitializationResult,
} from './HotRuntime';
import { fingerprintEnginSnapshot } from './EnginSnapshotFingerprint';
import {
  createPremiumRuntimeQuality,
  validatePremiumRuntimeQuality,
  type PremiumRuntimeQuality,
} from './PremiumRuntimeQuality';
import {
  negotiateRuleSetCompatibility,
  validateRuleSetState,
  type CompatibilityNegotiationResult,
  type EnginAction,
  type EnginRuntimeFeature,
  type EnginRuleSetContract,
} from './EnginRuleSetContract';

// Framework directives stay physically first when required.

// Runtime file: lib/engin-runtime/EnginRuntime.ts.

/**
 * lib/engin-runtime/EnginRuntime.ts
 *
 * EnginRuntime — the ONE fixed engine that never changes.
 *
 * Responsibilities:
 *   1. Holds base state and a reference to the active rule-set.
 *   2. Processes actions: checks capabilities → runs constraints → applies transform.
 *   3. Emits lifecycle + state-change events via the scoped event bus.
 *   4. Delegates all persistence to the injected I/O adapter.
 *   5. Exposes getDerivedState() so the UI can read the projected state.
 *
 * The engine itself has NO knowledge of game scores, music stems, world
 * tiles, or another domain concept. All of that lives in rule-sets.
 *
 * Architecture: docs/AGENT_PLAYBOOK.md §1 — Foundation.Kernel.
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

export const ENGIN_RUNTIME_VERSION = '1.0.0';

export const ENGIN_RUNTIME_FEATURES: readonly EnginRuntimeFeature[] = [
  'lifecycle-hooks',
  'manifest-schema',
  'strict-intent-routing',
  'sync-transport',
  'state-snapshotting',
  'compatibility-negotiation',
] as const;

const DEFAULT_MAX_SNAPSHOTS = 48;

const LIFECYCLE_TRANSITIONS: Readonly<
  Record<EnginLifecycle, ReadonlyArray<EnginLifecycle>>
> = {
  idle: ['running', 'stopped'],
  starting: ['running', 'stopped'],
  running: ['paused', 'stopped'],
  paused: ['running', 'stopped'],
  stopping: ['stopped'],
  stopped: [],
};

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export interface EnginRuntimeOptions {
  capabilities?: EnginCapabilityMap;
  ioAdapter?: EnginIOAdapter;
  persistenceKey?: string | false;
  syncTransport?: EnginSyncTransport;
  runtimeId?: string;
  maxSnapshots?: number;
}

export interface EnginHardwareAccelerationState {
  readonly enginId: string;
  readonly runtimeId: string;
  readonly subsystems: ReadonlyArray<string>;
  readonly webgpu: WebGPUInitializationResult;
  readonly computeWarmup: WebGPUComputeMeasurement | null;
}

export interface RuntimeWorkFlushResult {
  readonly flushed: boolean;
  readonly revision: number;
  readonly reason:
    | 'already-flushed'
    | 'immediate'
    | 'cadence'
    | 'microtask'
    | 'settled-module'
    | 'restore'
    | 'manual';
}

// Runtime functions, classes, handlers, and state transitions.

function cloneState(state: EnginBaseState): EnginBaseState {
  if (!isEnginBaseState(state)) {
    throw new Error('Engin state must be a serializable valid base-state snapshot.');
  }

  const clone = JSON.parse(JSON.stringify(state)) as EnginBaseState;

  if (!isEnginBaseState(clone)) {
    throw new Error('Engin state must be a serializable valid base-state snapshot.');
  }

  return clone;
}

export class EnginRuntime<
  A extends EnginAction = EnginAction,
  DomainEvents extends Record<string, object> = Record<string, object>,
> {
  private _state: EnginBaseState;
  private readonly _ruleSet: EnginRuleSetContract<A>;
  private readonly _capabilities: EnginCapabilityMap;
  private readonly _io: EnginIOAdapter;
  private readonly _persistenceKey: string | false;
  private readonly _sync: EnginSyncTransport;
  private readonly _runtimeId: string;
  private readonly _maxSnapshots: number;
  private readonly _compatibility: CompatibilityNegotiationResult;
  private readonly _capabilityTargetValidation: CapabilityProfileValidation;
  private readonly _executionKernel: EnginCapabilityExecutionKernel;
  private readonly _hotRuntime: HotRuntime<A>;

  private _runtimeWorkQueued = false;
  private _hardwareAccelerationPromise: Promise<EnginHardwareAccelerationState> | null = null;
  private _lastHardwareAccelerationState: EnginHardwareAccelerationState | null = null;
  private _lastRuntimeWorkFlushedRevision = 0;
  private _queuedRuntimeWorkRevision: number | null = null;
  private _queuedRuntimeWorkReason: RuntimeWorkFlushResult['reason'] | null = null;

  private readonly _lifecycleHooks = new Set<
    (lifecycle: EnginLifecycle, state: Readonly<EnginBaseState>) => void
  >();

  private readonly _snapshots: EnginBaseState[] = [];
  private _lastPublishedFingerprint: string | null = null;

  readonly bus: EnginEventBus<DomainEvents>;

  constructor(
    ruleSet: EnginRuleSetContract<A>,
    options: EnginRuntimeOptions = {},
  ) {
    this._ruleSet = ruleSet;
    this._capabilities = options.capabilities ?? DEFAULT_USER_CAPABILITIES;

    this._compatibility = negotiateRuleSetCompatibility(
      ruleSet.manifest,
      ENGIN_RUNTIME_VERSION,
      ENGIN_RUNTIME_FEATURES,
    );

    if (!this._compatibility.compatible) {
      throw new Error(
        this._compatibility.reason ?? 'Rule-set is not compatible with this runtime.',
      );
    }

    this._capabilityTargetValidation = validateEnginCapabilityProfile(
      ruleSet.capabilityTargets,
    );

    if (!this._capabilityTargetValidation.valid) {
      throw new Error(
        this._capabilityTargetValidation.reason ??
          'Rule-set capability target profile is invalid.',
      );
    }

    if (!capabilityProfileMatchesRuleSet(ruleSet.params.enginId, ruleSet.capabilityTargets.enginId)) {
      throw new Error(
        'Rule-set capability target profile must match the Engin params id or a canonical alias.',
      );
    }

    this._executionKernel = createEnginCapabilityExecutionKernel(
      ruleSet.capabilityTargets,
    );

    this._hotRuntime = new HotRuntime<A>(this._executionKernel.plan);
    this._io = options.ioAdapter ?? new LocalStorageAdapter(ruleSet.params.enginId);
    this._persistenceKey =
      options.persistenceKey !== undefined ? options.persistenceKey : 'domain-state';
    this._sync = options.syncTransport ?? new MemorySyncTransport();
    this._runtimeId = options.runtimeId ?? ruleSet.params.enginId;
    this._maxSnapshots = Math.max(1, Math.floor(options.maxSnapshots ?? DEFAULT_MAX_SNAPSHOTS));
    this._state = createBaseState(ruleSet.params.enginId);
    this.bus = createEnginEventBus<DomainEvents>();
  }

  get state(): Readonly<EnginBaseState> {
    return this._state;
  }

  getDerivedState(): JsonObject {
    return this._ruleSet.deriveState(this._state);
  }

  get compatibility(): CompatibilityNegotiationResult {
    return {
      ...this._compatibility,
      missingFeatures: [...this._compatibility.missingFeatures],
    };
  }

  get capabilityTargetValidation(): CapabilityProfileValidation {
    return {
      ...this._capabilityTargetValidation,
      evaluations: this._capabilityTargetValidation.evaluations.map((target) => ({
        ...target,
      })),
    };
  }

  get executionKernel(): EnginCapabilityExecutionKernel {
    return this._executionKernel;
  }

  get hotRuntime(): HotRuntime<A> {
    return this._hotRuntime;
  }

  get hardwareAccelerationState(): EnginHardwareAccelerationState | null {
    return this._lastHardwareAccelerationState;
  }

  get qualityPolicy(): PremiumRuntimeQuality {
    const fingerprint = fingerprintEnginSnapshot(this._state);

    return createPremiumRuntimeQuality({
      state: this._state,
      snapshotCount: this._snapshots.length,
      manifestVersion: this._ruleSet.manifest.version,
      fingerprint,
      features: ENGIN_RUNTIME_FEATURES,
    });
  }

  get snapshots(): ReadonlyArray<Readonly<EnginBaseState>> {
    return this._snapshots.map(cloneState);
  }

  onLifecycle(
    hook: (lifecycle: EnginLifecycle, state: Readonly<EnginBaseState>) => void,
  ): () => void {
    this._lifecycleHooks.add(hook);
    return () => this._lifecycleHooks.delete(hook);
  }

  async initializeHardwareAcceleration(): Promise<EnginHardwareAccelerationState> {
    if (this._hardwareAccelerationPromise) return this._hardwareAccelerationPromise;

    this._hardwareAccelerationPromise = (async () => {
      const webgpu = await this._hotRuntime.webgpu.ensureInitialized();

      const computeWarmup =
        webgpu.ready && this._executionKernel.plan.subsystems.includes('gpu-compute-dispatch')
          ? await this._hotRuntime.webgpu.warmupCompute({
              invocations: 65_536,
              samples: 1,
              operationsPerInvocation: 8,
            })
          : null;

      const state: EnginHardwareAccelerationState = {
        enginId: this._state.enginId,
        runtimeId: this._runtimeId,
        subsystems: [...this._executionKernel.plan.subsystems],
        webgpu,
        computeWarmup,
      };

      this._lastHardwareAccelerationState = state;
      return state;
    })().finally(() => {
      this._hardwareAccelerationPromise = null;
    });

    return this._hardwareAccelerationPromise;
  }

  private rememberSnapshot(state: EnginBaseState = this._state): EnginBaseState {
    const snapshot = cloneState(state);
    this._snapshots.push(snapshot);

    while (this._snapshots.length > this._maxSnapshots) {
      this._snapshots.shift();
    }

    return cloneState(snapshot);
  }

  snapshot(): Readonly<EnginBaseState> {
    return this.rememberSnapshot(this._state);
  }

  recoverLatestSnapshot(): boolean {
    const latest = this._snapshots.at(-1);
    if (!latest) return false;
    this.restoreSnapshot(latest);
    return true;
  }

  restoreSnapshot(snapshot: EnginBaseState): void {
    if (!isEnginBaseState(snapshot)) {
      throw new Error('Snapshot is not a valid Engin base state.');
    }

    if (snapshot.enginId !== this._state.enginId) {
      throw new Error('Snapshot belongs to a different Engin runtime.');
    }

    this._state = cloneState(snapshot);

    this._emitLifecycle('engin:state', {
      enginId: this._state.enginId,
      revision: this._state.revision,
    });

    this.flushRuntimeWork('restore');
  }

  dispatch(action: A, metadata: HotActionMetadata = {}): boolean {
    if (this._state.lifecycle === 'stopped') {
      throw new Error('Cannot dispatch an action after the Engin runtime has stopped.');
    }

    const _emit = <K extends keyof EnginLifecycleEvents>(
      event: K,
      payload: EnginLifecycleEvents[K],
    ) =>
      this.bus.emit(
        event as Parameters<typeof this.bus.emit>[0],
        payload as Parameters<typeof this.bus.emit>[1],
      );

    const capabilityKey = (action as A & { __capability?: string }).__capability;

    if (typeof capabilityKey === 'string') {
      const gate = gateCapability(
        this._capabilities,
        capabilityKey as Parameters<typeof gateCapability>[1],
      );

      if (!gate.granted) {
        _emit('engin:error', {
          enginId: this._state.enginId,
          message: gate.reason ?? 'Action denied: capability not granted.',
        });
        return false;
      }
    }

    if (!this._ruleSet.manifest.schema.actionTypes.includes(action.type)) {
      _emit('engin:error', {
        enginId: this._state.enginId,
        message: `Action '${action.type}' is not allowed by the active rule-set schema.`,
      });
      return false;
    }

    const actionSchemaResult =
      this._ruleSet.manifest.schema.validateAction?.(action) ?? { valid: true };

    if (!actionSchemaResult.valid) {
      _emit('engin:error', {
        enginId: this._state.enginId,
        message: actionSchemaResult.reason ?? 'Action failed rule-set schema validation.',
      });
      return false;
    }

    for (const constraint of this._ruleSet.constraints) {
      const result = constraint(this._state, action);

      if (!result.valid) {
        _emit('engin:error', {
          enginId: this._state.enginId,
          message: result.reason ?? 'Action rejected by constraint.',
        });
        return false;
      }
    }

    const next = this._ruleSet.transform(this._state, action);
    const stateSchemaResult = validateRuleSetState(
      next,
      this._ruleSet.manifest.schema,
    );

    if (
      !isEnginBaseState(next) ||
      next.enginId !== this._state.enginId ||
      !stateSchemaResult.valid
    ) {
      throw new Error('Rule-set transform returned an invalid Engin base state.');
    }

    this._state = next;

    _emit('engin:state', {
      enginId: this._state.enginId,
      revision: this._state.revision,
    });

    this.afterActionApplied(action, metadata);

    return this._state.revision === next.revision;
  }

  private afterActionApplied(action: A, metadata: HotActionMetadata): void {
    const shouldDefer = this._executionKernel.shouldDeferRuntimeWork(action.type);
    const hotSubmitted = this._hotRuntime.submit(action, this._state.revision, metadata);

    if (shouldDefer || hotSubmitted) {
      this.queueRealtimeRuntimeWork(this._state.revision, metadata);
      return;
    }

    this.flushRuntimeWork('immediate');
  }

  stageMoldableModuleFrame(frame: MoldableModuleFrame): boolean {
    if (this._state.lifecycle === 'stopped') {
      throw new Error('Cannot stage a moldable module frame after the Engin runtime has stopped.');
    }

    const staged = this._hotRuntime.submitMoldableModuleFrame(frame);

    this._queuedRuntimeWorkRevision = Math.max(
      this._queuedRuntimeWorkRevision ?? 0,
      frame.revision,
    );

    this._queuedRuntimeWorkReason = 'microtask';
    this.scheduleRuntimeWork();

    return staged;
  }

  settleMoldableModule(moduleId: string): MoldableModuleFrame | null {
    const settled = this._hotRuntime.moldableModules.settle(moduleId);

    if (settled) {
      this._queuedRuntimeWorkRevision = Math.max(
        this._queuedRuntimeWorkRevision ?? 0,
        settled.revision,
      );

      this.flushRuntimeWork('settled-module');
    }

    return settled;
  }

  drainFrameCriticalRuntimeWork(): HotLaneCommand<A>[] {
    return this._hotRuntime.drainFrameCritical();
  }

  drainHotLane(lane: HotRuntimeLane): HotLaneCommand<A>[] {
    return this._hotRuntime.drainLane(lane);
  }

  private queueRealtimeRuntimeWork(revision: number, metadata: HotActionMetadata = {}): void {
    this._queuedRuntimeWorkRevision = revision;

    const cadence = Math.max(1, this._executionKernel.plan.syncCadenceRevisions);

    if (metadata.persist === 'after-settle' || metadata.sync === 'after-settle') {
      this._queuedRuntimeWorkReason = 'microtask';
      this.scheduleRuntimeWork();
      return;
    }

    if (revision - this._lastRuntimeWorkFlushedRevision >= cadence) {
      this.flushRuntimeWork('cadence');
      return;
    }

    this._queuedRuntimeWorkReason = 'microtask';
    this.scheduleRuntimeWork();
  }

  private scheduleRuntimeWork(): void {
    if (this._runtimeWorkQueued) return;

    this._runtimeWorkQueued = true;

    const enqueue =
      typeof queueMicrotask === 'function'
        ? queueMicrotask
        : (callback: () => void) => {
            void Promise.resolve().then(callback);
          };

    enqueue(() => {
      this._runtimeWorkQueued = false;

      const queuedRevision = this._queuedRuntimeWorkRevision;
      if (queuedRevision === null) return;

      if (queuedRevision <= this._lastRuntimeWorkFlushedRevision) {
        this._queuedRuntimeWorkRevision = null;
        this._queuedRuntimeWorkReason = null;
        return;
      }

      this.flushRuntimeWork(this._queuedRuntimeWorkReason ?? 'microtask');
    });
  }

  flushRuntimeWork(reason: RuntimeWorkFlushResult['reason'] = 'manual'): RuntimeWorkFlushResult {
    if (this._state.revision <= this._lastRuntimeWorkFlushedRevision) {
      return {
        flushed: false,
        revision: this._state.revision,
        reason: 'already-flushed',
      };
    }

    this.publishSyncFrame();
    this.persistDomainState();

    this._lastRuntimeWorkFlushedRevision = this._state.revision;

    if (
      this._queuedRuntimeWorkRevision !== null &&
      this._queuedRuntimeWorkRevision <= this._lastRuntimeWorkFlushedRevision
    ) {
      this._queuedRuntimeWorkRevision = null;
      this._queuedRuntimeWorkReason = null;
    }

    return {
      flushed: true,
      revision: this._state.revision,
      reason,
    };
  }

  private persistDomainState(): void {
    if (this._persistenceKey === false) return;

    const enginId = this._state.enginId;

    this._io
      .save(this._persistenceKey, this._state.domain)
      .then((ok: boolean) => {
        if (ok) {
          this._emitLifecycle('engin:persisted', {
            enginId,
            key: this._persistenceKey as string,
          });
        }
      })
      .catch((cause: Error) => {
        this._emitLifecycle('engin:error', {
          enginId,
          message: 'Persistence failed — state not saved.',
          cause: cause.message,
        });
      });
  }

  private publishSyncFrame(): void {
    const snapshot = this.rememberSnapshot(this._state);
    const fingerprint = fingerprintEnginSnapshot(snapshot);

    if (fingerprint === this._lastPublishedFingerprint) return;

    this._lastPublishedFingerprint = fingerprint;

    void this._sync
      .publish({
        id: `${this._state.enginId}:${this._state.revision}:${this._state.updatedAt}`,
        enginId: this._state.enginId,
        runtimeId: this._runtimeId,
        direction: 'publish',
        schemaVersion: this._ruleSet.manifest.schema.domainVersion,
        fingerprint,
        quality: createPremiumRuntimeQuality({
          state: snapshot,
          snapshotCount: this._snapshots.length,
          manifestVersion: this._ruleSet.manifest.version,
          fingerprint,
          features: ENGIN_RUNTIME_FEATURES,
        }),
        snapshot,
        createdAt: new Date().toISOString(),
      })
      .catch((cause: Error) => {
        this._emitLifecycle('engin:error', {
          enginId: this._state.enginId,
          message: 'Sync publish failed — state remains local.',
          cause: cause.message,
        });
      });
  }

  subscribeSync(
    handler: (snapshot: Readonly<EnginBaseState>) => void,
  ): () => void {
    return this._sync.subscribe(this._state.enginId, (frame) => {
      if (frame.direction !== 'receive') return;
      if (frame.runtimeId === this._runtimeId) return;
      if (frame.schemaVersion !== this._ruleSet.manifest.schema.domainVersion) return;
      if (!isEnginBaseState(frame.snapshot)) return;

      const expectedFingerprint = fingerprintEnginSnapshot(frame.snapshot);
      if (frame.fingerprint !== expectedFingerprint) return;

      const qualityResult = validatePremiumRuntimeQuality(frame.quality, {
        fingerprint: expectedFingerprint,
        manifestVersion: this._ruleSet.manifest.version,
        revision: frame.snapshot.revision,
        minimumFeatureCount: ENGIN_RUNTIME_FEATURES.length,
        maxFrameBudgetMs: this.qualityPolicy.frameBudgetMs,
      });

      if (!qualityResult.valid) return;

      const next = cloneState(frame.snapshot);
      if (!this.shouldAcceptIncomingSnapshot(next)) return;

      const schemaResult = validateRuleSetState(
        next,
        this._ruleSet.manifest.schema,
      );

      if (!schemaResult.valid) return;

      this._state = next;
      this.rememberSnapshot(next);

      this._emitLifecycle('engin:state', {
        enginId: this._state.enginId,
        revision: this._state.revision,
      });

      handler(cloneState(this._state));
    });
  }

  private shouldAcceptIncomingSnapshot(next: EnginBaseState): boolean {
    if (next.revision < this._state.revision) return false;
    if (next.revision > this._state.revision) return true;

    const currentTime = Date.parse(this._state.updatedAt);
    const nextTime = Date.parse(next.updatedAt);

    if (!Number.isFinite(currentTime) || !Number.isFinite(nextTime)) return false;

    return nextTime > currentTime;
  }

  private _setLifecycle(lifecycle: EnginLifecycle): void {
    const current = this._state.lifecycle;

    if (!LIFECYCLE_TRANSITIONS[current].includes(lifecycle)) {
      throw new Error(`Invalid Engin lifecycle transition: ${current} -> ${lifecycle}.`);
    }

    this._state = patchBaseState(this._state, { lifecycle });

    for (const hook of this._lifecycleHooks) {
      try {
        hook(lifecycle, this._state);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error('[EnginRuntime] lifecycle hook threw', message);
      }
    }
  }

  start(): void {
    this._setLifecycle('running');
    this._emitLifecycle('engin:started', { enginId: this._state.enginId });

    void this.initializeHardwareAcceleration().catch((cause: unknown) => {
      if (this.bus.destroyed) return;

      this._emitLifecycle('engin:error', {
        enginId: this._state.enginId,
        message: 'Hardware acceleration initialization failed.',
        cause: cause instanceof Error ? cause.message : String(cause),
      });
    });
  }

  pause(): void {
    this._setLifecycle('paused');
    this._emitLifecycle('engin:paused', { enginId: this._state.enginId });
  }

  resume(): void {
    this._setLifecycle('running');
    this._emitLifecycle('engin:resumed', { enginId: this._state.enginId });
  }

  stop(): void {
    this.flushRuntimeWork('manual');
    this._hotRuntime.gpuBuffers.clear();
    this._setLifecycle('stopped');
    this._emitLifecycle('engin:stopped', { enginId: this._state.enginId });
    this.bus.destroy();
  }

  private _emitLifecycle<K extends keyof EnginLifecycleEvents>(
    event: K,
    payload: EnginLifecycleEvents[K],
  ): void {
    this.bus.emit(
      event as Parameters<typeof this.bus.emit>[0],
      payload as Parameters<typeof this.bus.emit>[1],
    );
  }

  async restore(): Promise<boolean> {
    if (this._persistenceKey === false) return false;

    const domain = await this._io.load<JsonObject>(this._persistenceKey);
    if (!domain) return false;

    const restoredState = patchBaseState(this._state, { domain });

    const schemaResult = validateRuleSetState(
      restoredState,
      this._ruleSet.manifest.schema,
    );

    if (!schemaResult.valid) return false;

    this._state = restoredState;

    this._emitLifecycle('engin:restored', {
      enginId: this._state.enginId,
      key: this._persistenceKey,
    });

    this.flushRuntimeWork('restore');

    return true;
  }

  async clearPersistedState(): Promise<void> {
    if (this._persistenceKey === false) return;
    await this._io.remove(this._persistenceKey);
  }
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
