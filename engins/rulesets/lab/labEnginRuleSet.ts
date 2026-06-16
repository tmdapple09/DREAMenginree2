import {
    patchBaseState,
    type EnginBaseState,
    type JsonObject,
} from '@/engine/engin-runtime/EnginBaseState';
import type { EnginCapability } from '@/engine/engin-runtime/EnginCapabilities';
import { getEnginCapabilityProfile } from '@/engine/engin-runtime/EnginCapabilityTargets';
import type {
    ConstraintResult,
    EnginAction,
    EnginConstraint,
    EnginRuleSetContract,
    EnginRuleSetManifest,
    EnginRuleSetParams,
} from '@/engine/engin-runtime/EnginRuleSetContract';

/**
 * lib/engins/lab/labEnginRuleSet.ts
 *
 * LabEngin Rule-Set — the ONLY place LabEngin domain logic lives.
 *
 * Domain: physics experiments, simulation runner, quantum circuits,
 * data visualization, and cross-Engin dataset/research exports.
 * Handoff kinds: lab:dataset-export → CodeEngin, lab:research-export → ContentEngin.
 *
 * ZERO infrastructure here: no fetch, no Supabase, no localStorage.
 * The EnginRuntime handles all of that.
 *
 * Architecture: docs/AGENT_PLAYBOOK.md §1 — Foundation.Ruleset.
 */

export type SimulationKind = 'particle' | 'fluid' | 'quantum' | 'neural';
export type SimState = 'idle' | 'running' | 'complete';

export type ChartType = 'line' | 'bar' | 'scatter';

export interface Experiment extends JsonObject {
  id: string;
  title: string;
  status: 'draft' | 'running' | 'complete' | 'failed';
}

export interface SimulationResult extends JsonObject {
  kind: SimulationKind;
  result: string;
  completedAt: string;
}

export interface LabEnginDerivedState extends JsonObject {
  lifecycle: EnginBaseState['lifecycle'];
  experiments: Experiment[];
  activeSimulation: SimulationKind | null;
  simState: SimState;
  simResult: SimulationResult | null;
  chartType: ChartType;
  datasetExportReady: boolean;
  researchExportReady: boolean;
  physicsPayload: JsonObject | null;
}

export type LabEnginAction =
  | EnginAction<'lab:experiments-loaded',   { experiments: Experiment[] }>
  | EnginAction<'lab:experiment-update',    { id: string; status: Experiment['status'] }>
  | EnginAction<'lab:sim-start',            { kind: SimulationKind }>
  | EnginAction<'lab:sim-complete',         { result: SimulationResult }>
  | EnginAction<'lab:sim-reset',            Record<string, never>>
  | EnginAction<'lab:chart-type',           { type: ChartType }>
  | EnginAction<'lab:dataset-export-ready', Record<string, never>>
  | EnginAction<'lab:research-export-ready', Record<string, never>>
  | EnginAction<'lab:physics-received',     { payload: JsonObject }>;

const DEFAULT_DOMAIN: Omit<LabEnginDerivedState, 'lifecycle'> = {
  experiments: [],
  activeSimulation: null,
  simState: 'idle',
  simResult: null,
  chartType: 'line',
  datasetExportReady: false,
  researchExportReady: false,
  physicsPayload: null,
};

const simStartConstraint: EnginConstraint<LabEnginAction> = (
  state,
  action,
): ConstraintResult => {
  if (action.type !== 'lab:sim-start') return { valid: true };
  const domain = state.domain as Partial<typeof DEFAULT_DOMAIN>;
  if ((domain.simState ?? 'idle') === 'running') {
    return { valid: false, reason: 'Cannot start a simulation while one is already running.' };
  }
  const { kind } = (action as EnginAction<'lab:sim-start', { kind: SimulationKind }>).payload ?? {};
  const valid_kinds: SimulationKind[] = ['particle', 'fluid', 'quantum', 'neural'];
  if (!kind || !valid_kinds.includes(kind)) {
    return { valid: false, reason: `Unknown simulation kind: "${String(kind)}".` };
  }
  return { valid: true };
};

function transform(state: EnginBaseState, action: LabEnginAction): EnginBaseState {
  const domain = (state.domain as Partial<typeof DEFAULT_DOMAIN>);

  switch (action.type) {
    case 'lab:experiments-loaded': {
      const { experiments } = (action as EnginAction<'lab:experiments-loaded', { experiments: Experiment[] }>).payload!;
      return patchBaseState(state, { domain: { ...domain, experiments } });
    }

    case 'lab:experiment-update': {
      const { id, status } = (action as EnginAction<'lab:experiment-update', { id: string; status: Experiment['status'] }>).payload!;
      const experiments = ((domain.experiments ?? []) as Experiment[]).map(
        (e) => e.id === id ? { ...e, status } : e,
      );
      return patchBaseState(state, { domain: { ...domain, experiments } });
    }

    case 'lab:sim-start': {
      const { kind } = (action as EnginAction<'lab:sim-start', { kind: SimulationKind }>).payload!;
      return patchBaseState(state, {
        lifecycle: 'running',
        domain: { ...domain, activeSimulation: kind, simState: 'running', simResult: null },
      });
    }

    case 'lab:sim-complete': {
      const { result } = (action as EnginAction<'lab:sim-complete', { result: SimulationResult }>).payload!;
      return patchBaseState(state, {
        lifecycle: 'idle',
        domain: { ...domain, simState: 'complete', simResult: result },
      });
    }

    case 'lab:sim-reset': {
      return patchBaseState(state, {
        domain: {
          ...domain,
          activeSimulation: null,
          simState: 'idle',
          simResult: null,
        },
      });
    }

    case 'lab:chart-type': {
      const { type } = (action as EnginAction<'lab:chart-type', { type: ChartType }>).payload!;
      return patchBaseState(state, { domain: { ...domain, chartType: type } });
    }

    case 'lab:dataset-export-ready': {
      return patchBaseState(state, { domain: { ...domain, datasetExportReady: true } });
    }

    case 'lab:research-export-ready': {
      return patchBaseState(state, { domain: { ...domain, researchExportReady: true } });
    }

    case 'lab:physics-received': {
      const { payload } = (action as EnginAction<'lab:physics-received', { payload: JsonObject }>).payload!;
      return patchBaseState(state, { domain: { ...domain, physicsPayload: payload } });
    }

    default:
      return state;
  }
}

function deriveState(state: EnginBaseState): LabEnginDerivedState {
  const d = state.domain as Partial<typeof DEFAULT_DOMAIN>;
  return {
    lifecycle:           state.lifecycle,
    experiments:         (d.experiments         ?? DEFAULT_DOMAIN.experiments)         as Experiment[],
    activeSimulation:    (d.activeSimulation    ?? DEFAULT_DOMAIN.activeSimulation)    as SimulationKind | null,
    simState:            (d.simState            ?? DEFAULT_DOMAIN.simState)            as SimState,
    simResult:           (d.simResult           ?? DEFAULT_DOMAIN.simResult)           as SimulationResult | null,
    chartType:           (d.chartType           ?? DEFAULT_DOMAIN.chartType)           as ChartType,
    datasetExportReady:  (d.datasetExportReady  ?? DEFAULT_DOMAIN.datasetExportReady)  as boolean,
    researchExportReady: (d.researchExportReady ?? DEFAULT_DOMAIN.researchExportReady) as boolean,
    physicsPayload:      (d.physicsPayload      ?? DEFAULT_DOMAIN.physicsPayload)      as JsonObject | null,
  };
}

const PARAMS: EnginRuleSetParams = {
  enginId: 'lab',
  name: 'LabEngin',
  layoutMode: 'standard',
  accentColor: '#22c55e',
  simulationBudgetMs: 16,
};

const MANIFEST: EnginRuleSetManifest<LabEnginAction> = {
  id: PARAMS.enginId,
  name: PARAMS.name,
  version: '1.0.0',
  schema: {
    actionTypes: ['lab:experiments-loaded', 'lab:experiment-update', 'lab:sim-start', 'lab:sim-complete', 'lab:sim-reset', 'lab:chart-type', 'lab:dataset-export-ready', 'lab:research-export-ready', 'lab:physics-received'],
    domainVersion: 1,
  },
  compatibility: {
    minRuntimeVersion: '1.0.0',
    requiredFeatures: ['lifecycle-hooks', 'manifest-schema', 'strict-intent-routing', 'sync-transport', 'state-snapshotting', 'compatibility-negotiation'],
  },
};

const REQUIRED_CAPABILITIES: ReadonlyArray<EnginCapability> = [
  'state:read',
  'state:write',
  'session:start',
  'session:end',
  'scripts:run',
  'bridge:emit',
  'bridge:listen',
];

export const LAB_ENGIN_RULE_SET: EnginRuleSetContract<LabEnginAction> = {
  manifest: MANIFEST,
  params: PARAMS,
  requiredCapabilities: REQUIRED_CAPABILITIES,
  capabilityTargets: getEnginCapabilityProfile('lab'),
  constraints: [simStartConstraint],
  transform,
  deriveState,
};

export const LAB_IMPLICIT_SURFACE_POLICY = {
  engine: 'robust-sparse-dual-contouring',
  mobileFirstResolution: 18,
  intents: ['lab:sim-start', 'lab:sim-complete', 'lab:physics-received'],
  presets: ['fluid','particle','neural','quantum','metaball','terrain-cave'],
  diagnostics: ['vertices','triangles','boundaryEdges','nonManifoldEdges','degenerateTriangles','resolution','sampleDomain','estimatedMemoryBytes','mobileSafetyTier'],
  sharedKernel: 'engins/isosurfaceDualContouring.ts',
  output: 'level-set simulations may publish mesh diagnostics and compact indexed mesh snapshots through the intent bus',
} as const;
