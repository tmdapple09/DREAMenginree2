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
 * tiles, or another domain concept.  All of that lives in rule-sets.
 *
 * Architecture: docs/AGENT_PLAYBOOK.md §1 — Foundation.Kernel.
 */

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

// ─── Runtime options ──────────────────────────────────────────────────────────

export const ENGIN_RUNTIME_VERSION = '1.0.0';

export const ENGIN_RUNTIME_FEATURES: readonly EnginRuntimeFeature[] = [
  'lifecycle-hooks',
  'manifest-schema',
  'strict-intent-routing',
  'sync-transport',
  'state-snapshotting',
  'compatibility-negotiation',
] as const;

export interface EnginRuntimeOptions {
  /** Override the capability map (e.g. for admin or guest users). */
  capabilities?: EnginCapabilityMap;
  /** Override the I/O adapter (e.g. MemoryAdapter for tests). */
  ioAdapter?: EnginIOAdapter;
  /** Persist domain state under this key on every change. Set to false to disable. */
  persistenceKey?: string | false;
  /** Transport for Shared/Global runtime sync frames. */
  syncTransport?: EnginSyncTransport;
  /** Runtime context used in sync frames and authorization-aware surfaces. */
  runtimeId?: string;
}

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

function cloneState(state: EnginBaseState): EnginBaseState {
  if (!isEnginBaseState(state)) throw new Error('Engin state must be a serializable valid base-state snapshot.');
  const clone = JSON.parse(JSON.stringify(state)) as EnginBaseState;
  if (!isEnginBaseState(clone))
    throw new Error(
      'Engin state must be a serializable valid base-state snapshot.',
    );
  return clone;
}

// ─── Runtime ─────────────────────────────────────────────────────────────────

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
  private readonly _compatibility: CompatibilityNegotiationResult;
  private readonly _lifecycleHooks = new Set<
    (lifecycle: EnginLifecycle, state: Readonly<EnginBaseState>) => void
  >();
  private readonly _snapshots: EnginBaseState[] = [];

  /** Scoped event bus — owned by this runtime instance. */
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
    this._io =
      options.ioAdapter ?? new LocalStorageAdapter(ruleSet.params.enginId);
    this._persistenceKey =
      options.persistenceKey !== undefined
        ? options.persistenceKey
        : 'domain-state';
    this._sync = options.syncTransport ?? new MemorySyncTransport();
    this._runtimeId = options.runtimeId ?? ruleSet.params.enginId;
    this._state = createBaseState(ruleSet.params.enginId);
    this.bus = createEnginEventBus<DomainEvents>();
  }

  // ─── Read ───────────────────────────────────────────────────────────────────

  /** Current raw base state (read-only snapshot). */
  get state(): Readonly<EnginBaseState> {
    return this._state;
  }

  /**
   * getDerivedState()
   *
   * Projects the current base state through the rule-set's deriveState()
   * selector.  Call this to get the shape the UI needs.
   */
  getDerivedState(): JsonObject {
    return this._ruleSet.deriveState(this._state);
  }

  /** Compatibility result negotiated before the ruleset can run. */
  get compatibility(): CompatibilityNegotiationResult {
    return {
      ...this._compatibility,
      missingFeatures: [...this._compatibility.missingFeatures],
    };
  }

  /** Current runtime quality policy used for sync acceptance and surface decisions. */
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

  /** Immutable snapshots captured for recovery, duplication, or replay. */
  get snapshots(): ReadonlyArray<Readonly<EnginBaseState>> {
    return this._snapshots.map(cloneState);
  }

  /** Observe lifecycle transitions without embedding feature behavior in the engine. */
  onLifecycle(
    hook: (lifecycle: EnginLifecycle, state: Readonly<EnginBaseState>) => void,
  ): () => void {
    this._lifecycleHooks.add(hook);
    return () => this._lifecycleHooks.delete(hook);
  }

  /** Capture a serializable state snapshot for restore, duplication, and replay. */
  snapshot(): Readonly<EnginBaseState> {
    const snapshot = cloneState(this._state);
    this._snapshots.push(snapshot);
    return cloneState(snapshot);
  }

  /** Restore a previously captured snapshot into this same Engin runtime. */
  restoreSnapshot(snapshot: EnginBaseState): void {
    if (!isEnginBaseState(snapshot))
      throw new Error('Snapshot is not a valid Engin base state.');
    if (snapshot.enginId !== this._state.enginId)
      throw new Error('Snapshot belongs to a different Engin runtime.');
    this._state = cloneState(snapshot);
    this._emitLifecycle('engin:state', {
      enginId: this._state.enginId,
      revision: this._state.revision,
    });
  }

  // ─── Action dispatch ────────────────────────────────────────────────────────

  /**
   * dispatch(action)
   *
   * Processes an action through the engine pipeline:
   *   1. Gate capability (if action declares one via __capability).
   *   2. Run all rule-set constraints.
   *   3. Apply the rule-set transform.
   *   4. Emit state change event.
   *   5. Persist if persistence is configured.
   *
   * Returns `true` if the action was applied, `false` if it was rejected.
   */
  dispatch(action: A): boolean {
    if (this._state.lifecycle === 'stopped')
      throw new Error(
        'Cannot dispatch an action after the Engin runtime has stopped.',
      );

    // Type-safe helper: cast payload to the bus's expected type
    const _emit = <K extends keyof EnginLifecycleEvents>(
      event: K,
      payload: EnginLifecycleEvents[K],
    ) =>
      this.bus.emit(
        event as Parameters<typeof this.bus.emit>[0],
        payload as Parameters<typeof this.bus.emit>[1],
      );

    // 1. Capability gate
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

    // 2. Manifest schema + ruleset constraints
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

    // 3. Constraints
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

    // 4. Transform
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
      throw new Error(
        'Rule-set transform returned an invalid Engin base state.',
      );
    }
    this._state = next;

    // 5. Emit state change
    _emit('engin:state', {
      enginId: this._state.enginId,
      revision: this._state.revision,
    });

    // 6. Persist and sync (fire-and-forget)
    this.publishSyncFrame();

    if (this._persistenceKey !== false) {
      const enginId = this._state.enginId;
      this._io
        .save(this._persistenceKey, this._state.domain)
        .then((ok: boolean) => {
          if (ok) {
            _emit('engin:persisted', {
              enginId,
              key: this._persistenceKey as string,
            });
          }
        })
        .catch((cause: Error) => {
          _emit('engin:error', {
            enginId,
            message: 'Persistence failed — state not saved.',
            cause: cause.message,
          });
        });
    }

    return true;
  }

  private publishSyncFrame(): void {
    const snapshot = this.snapshot();
    const fingerprint = fingerprintEnginSnapshot(snapshot);
    void this._sync.publish({
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
      const schemaResult = validateRuleSetState(
        next,
        this._ruleSet.manifest.schema,
      );
      if (!schemaResult.valid) return;
      this._state = next;
      this._emitLifecycle('engin:state', {
        enginId: this._state.enginId,
        revision: this._state.revision,
      });
      handler(cloneState(this._state));
    });
  }

  // ─── Lifecycle ──────────────────────────────────────────────────────────────

  /** Transition the engine to a new lifecycle stage. */
  private _setLifecycle(lifecycle: EnginLifecycle): void {
    const current = this._state.lifecycle;
    if (!LIFECYCLE_TRANSITIONS[current].includes(lifecycle)) {
      throw new Error(
        `Invalid Engin lifecycle transition: ${current} -> ${lifecycle}.`,
      );
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

  // ─── Persistence helpers ────────────────────────────────────────────────────

  /**
   * restore()
   *
   * Loads the previously persisted domain state and applies it to the
   * current base state.  Call during component mount to hydrate.
   */
  async restore(): Promise<boolean> {
    if (this._persistenceKey === false) return false;
    const domain = await this._io.load<JsonObject>(
      this._persistenceKey,
    );
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
    return true;
  }

  /**
   * clearPersistedState()
   *
   * Removes the persisted domain state from storage.
   */
  async clearPersistedState(): Promise<void> {
    if (this._persistenceKey === false) return;
    await this._io.remove(this._persistenceKey);
  }
}
