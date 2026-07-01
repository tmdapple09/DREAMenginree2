

export type EnginId =
  | 'music'
  | 'games'
  | 'lab'
  | 'code'
  | 'brand'
  | 'create';

export type WorkflowStage = 'draft' | 'active' | 'review' | 'export';

const STAGE_ORDER: readonly WorkflowStage[] = ['draft', 'active', 'review', 'export'];

export const STAGE_LABELS: Record<WorkflowStage, string> = {
  draft:  'Draft',
  active: 'Active',
  review: 'Review',
  export: 'Export',
};


export function isValidTransition(from: WorkflowStage, to: WorkflowStage): boolean {
  const fi = STAGE_ORDER.indexOf(from);
  const ti = STAGE_ORDER.indexOf(to);
  return ti === fi + 1;
}

export type HandoffKind =
  | 'music:stem-ready'
  | 'music:brand-audio-brief'
  | 'games:script-export'
  | 'games:gameplay-clip'
  | 'games:physics-export'
  | 'lab:dataset-export'
  | 'lab:research-export'
  | 'code:module-inject'
  | 'create:brand-check'
  | 'brand:campaign-draft'
  | 'brand:audio-brief';

export interface HandoffPath {
  readonly kind: HandoffKind;
  readonly from: EnginId;
  readonly to: EnginId;
  
  readonly label: string;
}


export const HANDOFF_PATHS: readonly HandoffPath[] = [
  { kind: 'music:stem-ready',         from: 'music',  to: 'create', label: 'Send stems to ContentEngin' },
  { kind: 'music:brand-audio-brief',  from: 'music',  to: 'brand',  label: 'Send audio brief to BrandingEngin' },
  { kind: 'games:script-export',      from: 'games',  to: 'code',   label: 'Export world script to CodeEngin' },
  { kind: 'games:gameplay-clip',      from: 'games',  to: 'create', label: 'Send gameplay clip to ContentEngin' },
  { kind: 'games:physics-export',     from: 'games',  to: 'lab',    label: 'Send physics config to LabEngin' },
  { kind: 'lab:dataset-export',       from: 'lab',    to: 'code',   label: 'Send dataset to CodeEngin' },
  { kind: 'lab:research-export',      from: 'lab',    to: 'create', label: 'Send research to ContentEngin' },
  { kind: 'code:module-inject',       from: 'code',   to: 'games',  label: 'Inject module into GameEngin' },
  { kind: 'create:brand-check',       from: 'create', to: 'brand',  label: 'Send draft to BrandingEngin' },
  { kind: 'brand:campaign-draft',     from: 'brand',  to: 'create', label: 'Send campaign draft to ContentEngin' },
  { kind: 'brand:audio-brief',        from: 'brand',  to: 'music',  label: 'Send audio brief to StarMakerEngin' },
] as const;


export function handoffsFrom(enginId: EnginId): readonly HandoffPath[] {
  return HANDOFF_PATHS.filter((p) => p.from === enginId);
}

export interface WorkflowDef {
  
  readonly id: string;
  readonly enginId: EnginId;
  readonly name: string;
  readonly handoffKinds: readonly HandoffKind[];
}


export const WORKFLOW_CATALOG: readonly WorkflowDef[] = [
  
  { id: 'music:beat-composition', enginId: 'music',  name: 'Beat Composition', handoffKinds: ['music:stem-ready', 'music:brand-audio-brief'] },
  { id: 'music:release',          enginId: 'music',  name: 'Track Release',    handoffKinds: ['music:stem-ready'] },
  
  { id: 'games:world-build',      enginId: 'games',  name: 'World Build',      handoffKinds: ['games:script-export', 'games:physics-export'] },
  { id: 'games:score-session',    enginId: 'games',  name: 'Score Session',    handoffKinds: ['games:gameplay-clip'] },
  
  { id: 'lab:experiment',         enginId: 'lab',    name: 'Lab Experiment',   handoffKinds: ['lab:dataset-export', 'lab:research-export'] },
  { id: 'lab:simulation',         enginId: 'lab',    name: 'Simulation Run',   handoffKinds: ['games:physics-export', 'lab:dataset-export'] },
  
  { id: 'code:sprint',            enginId: 'code',   name: 'Code Sprint',      handoffKinds: ['code:module-inject'] },
  { id: 'code:review',            enginId: 'code',   name: 'Code Review',      handoffKinds: [] },
  
  { id: 'brand:campaign',         enginId: 'brand',  name: 'Campaign',         handoffKinds: ['brand:campaign-draft', 'brand:audio-brief'] },
  { id: 'brand:ab-test',          enginId: 'brand',  name: 'A/B Test',         handoffKinds: ['brand:campaign-draft'] },
  
  { id: 'create:draft',           enginId: 'create', name: 'Content Draft',    handoffKinds: ['create:brand-check'] },
  { id: 'create:publish-queue',   enginId: 'create', name: 'Publish Queue',    handoffKinds: ['create:brand-check'] },
] as const;


export function workflowsForEngin(enginId: EnginId): readonly WorkflowDef[] {
  return WORKFLOW_CATALOG.filter((w) => w.enginId === enginId);
}


export function findWorkflowDef(workflowId: string): WorkflowDef | undefined {
  return WORKFLOW_CATALOG.find((w) => w.id === workflowId);
}

export interface EnginWorkflow {
  
  readonly id: string;
  readonly enginId: EnginId;
  readonly name: string;
  
  stage: WorkflowStage;
  
  reActivated: boolean;
  
  abandoned: boolean;
  
  readonly createdAt: string;
  
  updatedAt: string;
}


export function createWorkflow(workflowId: string, now?: string): EnginWorkflow {
  const def = findWorkflowDef(workflowId);
  if (!def) {
    throw new Error(`Unknown workflow ID: "${workflowId}". Check WORKFLOW_CATALOG.`);
  }
  const ts = now ?? new Date().toISOString();
  return {
    id: def.id,
    enginId: def.enginId,
    name: def.name,
    stage: 'draft',
    reActivated: false,
    abandoned: false,
    createdAt: ts,
    updatedAt: ts,
  };
}

export type StageTransitionResult =
  | { ok: true; workflow: EnginWorkflow }
  | { ok: false; reason: string };


export function advanceStage(
  workflow: EnginWorkflow,
  to: WorkflowStage,
  now?: string,
): StageTransitionResult {
  if (workflow.abandoned) {
    return { ok: false, reason: 'Cannot advance an abandoned workflow.' };
  }
  if (workflow.stage === to) {
    return { ok: false, reason: `Workflow is already in stage "${to}".` };
  }

  
  const isReActivation = workflow.stage === 'review' && to === 'active';
  if (isReActivation) {
    if (workflow.reActivated) {
      return { ok: false, reason: 'Workflow may only be re-activated from review once.' };
    }
    const ts = now ?? new Date().toISOString();
    return {
      ok: true,
      workflow: { ...workflow, stage: 'active', reActivated: true, updatedAt: ts },
    };
  }

  
  if (!isValidTransition(workflow.stage, to)) {
    return {
      ok: false,
      reason: `Invalid transition: "${workflow.stage}" → "${to}". Stages advance forward only.`,
    };
  }
  const ts = now ?? new Date().toISOString();
  return {
    ok: true,
    workflow: { ...workflow, stage: to, updatedAt: ts },
  };
}


export function abandonWorkflow(workflow: EnginWorkflow, now?: string): EnginWorkflow {
  const ts = now ?? new Date().toISOString();
  return { ...workflow, abandoned: true, updatedAt: ts };
}

export interface HandoffEligibility {
  readonly eligible: boolean;
  
  readonly availablePaths: readonly HandoffPath[];
  
  readonly reason?: string;
}


export function checkHandoffEligibility(workflow: EnginWorkflow): HandoffEligibility {
  if (workflow.abandoned) {
    return { eligible: false, availablePaths: [], reason: 'Workflow is abandoned.' };
  }
  if (workflow.stage !== 'export') {
    return {
      eligible: false,
      availablePaths: [],
      reason: `Handoff requires export stage. Current stage: "${workflow.stage}".`,
    };
  }
  const def = findWorkflowDef(workflow.id);
  if (!def || def.handoffKinds.length === 0) {
    return { eligible: false, availablePaths: [], reason: 'No handoff paths defined for this workflow.' };
  }
  const availablePaths = HANDOFF_PATHS.filter((p) =>
    (def.handoffKinds as readonly string[]).includes(p.kind),
  );
  if (availablePaths.length === 0) {
    return { eligible: false, availablePaths: [], reason: 'No matching handoff paths found.' };
  }
  return { eligible: true, availablePaths };
}


export function describeWorkflow(workflow: EnginWorkflow): string {
  const stageLabel = STAGE_LABELS[workflow.stage];
  const suffix = workflow.abandoned ? ' (abandoned)' : '';
  return `${workflow.name} [${stageLabel}]${suffix}`;
}
