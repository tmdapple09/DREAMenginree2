import {
  createCoherenceCapacity,
  createCoherenceReport,
  createRuntimeLoad,
  type CoherenceCapacity,
  type RuntimeCoherenceReport,
  type RuntimeLoad,
} from '@/engine/engin-runtime/EnginBaseState';









const RUNTIME_CONTAINER_COHERENCE_CAPACITY = createCoherenceCapacity({
  maxEventPressure: 42,
  maxConflictCount: 3,
  maxLatencyPressure: 180,
  maxInvalidMutations: 2,
});







export type RuntimeStrategy<State, Input> = (state: State, input: Input) => State;

export interface RuntimeContainerOptions {
  coherenceCapacity?: Partial<CoherenceCapacity>;
}



function decayContainerLoad(load: RuntimeLoad): RuntimeLoad {
  return createRuntimeLoad({
    eventPressure: load.eventPressure * 0.66,
    stateDrift: load.stateDrift * 0.5,
    conflictCount: load.conflictCount * 0.78,
    latencyPressure: load.latencyPressure * 0.55,
    invalidMutationCount: load.invalidMutationCount * 0.82,
    unresolvedIntentCount: load.unresolvedIntentCount * 0.82,
  });
}

function mergeContainerLoad(current: RuntimeLoad, patch: Partial<RuntimeLoad>): RuntimeLoad {
  const decayed = decayContainerLoad(current);
  return createRuntimeLoad({
    eventPressure: Math.max(decayed.eventPressure, patch.eventPressure ?? 0),
    stateDrift: Math.max(decayed.stateDrift, patch.stateDrift ?? 0),
    conflictCount: Math.max(decayed.conflictCount, patch.conflictCount ?? 0),
    latencyPressure: Math.max(decayed.latencyPressure, patch.latencyPressure ?? 0),
    invalidMutationCount: Math.max(decayed.invalidMutationCount, patch.invalidMutationCount ?? 0),
    unresolvedIntentCount: Math.max(decayed.unresolvedIntentCount, patch.unresolvedIntentCount ?? 0),
  });
}


export class RuntimeContainer<State, Input> {
  private state: State;
  private readonly strategy: RuntimeStrategy<State, Input>;
  private readonly coherenceCapacity: CoherenceCapacity;
  private coherenceLoad = createRuntimeLoad();
  private coherenceRevision = 0;
  private lastRunAt = 0;
  private coherenceReport: RuntimeCoherenceReport;

  constructor(
    initialState: State,
    initialStrategy: RuntimeStrategy<State, Input>,
    options: RuntimeContainerOptions = {},
  ) {
    this.state = initialState;
    this.strategy = initialStrategy;
    this.coherenceCapacity = createCoherenceCapacity({
      ...RUNTIME_CONTAINER_COHERENCE_CAPACITY,
      ...(options.coherenceCapacity ?? {}),
    });
    this.coherenceReport = createCoherenceReport(
      this.coherenceLoad,
      this.coherenceCapacity,
      this.coherenceRevision,
      ['runtime-container:init'],
    );
  }

  run(input: Input): State {
    const startedAt = Date.now();
    const elapsedSinceRun = this.lastRunAt > 0 ? startedAt - this.lastRunAt : 0;
    this.lastRunAt = startedAt;

    try {
      const next = this.strategy(this.state, input);
      this.state = next;
      this.recordCoherence('runtime-container:run', {
        eventPressure: elapsedSinceRun > 0 ? 1000 / Math.max(1, elapsedSinceRun) : 0,
        latencyPressure: Date.now() - startedAt,
      });
      return this.state;
    } catch (error) {
      this.recordCoherence('runtime-container:strategy-failed', {
        conflictCount: this.coherenceLoad.conflictCount + 1,
        invalidMutationCount: this.coherenceLoad.invalidMutationCount + 1,
        latencyPressure: Date.now() - startedAt,
      });
      throw error;
    }
  }

  getState(): State {
    return this.state;
  }

  getCoherence(): RuntimeCoherenceReport {
    return {
      ...this.coherenceReport,
      load: { ...this.coherenceReport.load },
      capacity: { ...this.coherenceReport.capacity },
      reasons: [...this.coherenceReport.reasons],
    };
  }

  reportRuntimePressure(
    load: Partial<RuntimeLoad>,
    reason = 'runtime-container:external-pressure',
  ): RuntimeCoherenceReport {
    return this.recordCoherence(reason, load);
  }

  private recordCoherence(
    reason: string,
    load: Partial<RuntimeLoad>,
  ): RuntimeCoherenceReport {
    this.coherenceRevision += 1;
    this.coherenceLoad = mergeContainerLoad(this.coherenceLoad, load);
    this.coherenceReport = createCoherenceReport(
      this.coherenceLoad,
      this.coherenceCapacity,
      this.coherenceRevision,
      [reason],
    );
    return this.coherenceReport;
  }
}






