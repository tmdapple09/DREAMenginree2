import {
    CREATIVE_ENGINES,
    ENGIN_REGISTRY,
    FORGE_HISTORY_KEY,
    FORGE_WORKFLOWS,
    type EnginEntry,
    type ForgeWorkflow,
} from './forgeRegistry';



export interface ForgeHistoryEntry {
  
  enginId: string;
  
  label: string;
  
  timestamp: string;
}

const HISTORY_STORAGE_KEY = FORGE_HISTORY_KEY;
const MAX_HISTORY_ENTRIES = 100;


export function appendForgeHistory(enginId: string, label: string): void {
  if (typeof window === 'undefined') return;
  try {
    const history = readForgeHistory();
    history.push({ enginId, label, timestamp: new Date().toISOString() });
    
    const trimmed = history.slice(-MAX_HISTORY_ENTRIES);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(trimmed));
  } catch {
    
  }
}


export function readForgeHistory(): ForgeHistoryEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as ForgeHistoryEntry[];
  } catch {
    return [];
  }
}


export function clearForgeHistory(): void {
  if (typeof window === 'undefined') return;
  try { localStorage.removeItem(HISTORY_STORAGE_KEY); } catch {  }
}


function buildTransitionMap(history: ForgeHistoryEntry[]): Map<string, number> {
  const map = new Map<string, number>();
  for (let i = 1; i < history.length; i++) {
    const from = history[i - 1].enginId;
    const to = history[i].enginId;
    if (from === to) continue; 
    const key = `${from}→${to}`;
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return map;
}


export function predictNextEngines(
  currentEnginId: string,
  history: ForgeHistoryEntry[],
  limit = 3,
): Array<{ engine: EnginEntry; confidence: number }> {
  const transitions = buildTransitionMap(history);
  const candidates: Array<{ engine: EnginEntry; count: number }> = [];

  for (const engine of CREATIVE_ENGINES) {
    if (engine.id === currentEnginId) continue;
    const key = `${currentEnginId}→${engine.id}`;
    const count = transitions.get(key) ?? 0;
    if (count > 0) {
      candidates.push({ engine, count });
    }
  }

  
  candidates.sort((a, b) => b.count - a.count);

  const totalOutgoing = candidates.reduce((s, c) => s + c.count, 0);
  return candidates.slice(0, limit).map((c) => ({
    engine: c.engine,
    confidence: totalOutgoing > 0 ? c.count / totalOutgoing : 0,
  }));
}

export interface ForgeSuggestion {
  
  type: 'workflow' | 'next-engine' | 'transfer';
  
  title: string;
  
  reason: string;
  
  accent: string;
  
  emoji: string;
  
  href?: string;
  
  workflowId?: string;
}


export function generateSuggestions(
  lastAction: { enginId: string; label: string } | null,
): ForgeSuggestion[] {
  if (!lastAction) return [];
  const { enginId, label } = lastAction;
  const suggestions: ForgeSuggestion[] = [];

  
  const matchingWorkflows = FORGE_WORKFLOWS.filter(
    wf => wf.engines[0] === enginId || wf.engines.includes(enginId),
  );
  for (const wf of matchingWorkflows.slice(0, 2)) {
    const nextIdx = wf.engines.indexOf(enginId);
    const nextEngine = nextIdx >= 0 && nextIdx < wf.engines.length - 1
      ? ENGIN_REGISTRY.find((e) => e.id === wf.engines[nextIdx + 1])
      : null;

    suggestions.push({
      type: 'workflow',
      title: wf.title,
      reason: nextEngine
        ? `Continue to ${nextEngine.name} — ${wf.steps[nextIdx + 1] ?? 'next step'}`
        : `Start this workflow from ${ENGIN_REGISTRY.find((e) => e.id === enginId)?.name ?? enginId}`,
      accent: wf.accent,
      emoji: wf.emoji,
      href: nextEngine?.daydreamHref,
      workflowId: wf.id,
    });
  }

  
  const history = readForgeHistory();
  const predicted = predictNextEngines(enginId, history, 2);
  for (const { engine, confidence } of predicted) {
    suggestions.push({
      type: 'next-engine',
      title: `Open ${engine.name}`,
      reason: `You often go to ${engine.name} after ${ENGIN_REGISTRY.find((e) => e.id === enginId)?.name ?? enginId} (${Math.round(confidence * 100)}% of the time)`,
      accent: engine.accent,
      emoji: engine.emoji,
      href: engine.daydreamHref,
    });
  }

  
  const actionLower = label.toLowerCase();
  if (actionLower.includes('publish') || actionLower.includes('release')) {
    suggestions.push({
      type: 'transfer',
      title: 'Create a post about it',
      reason: 'You just released something — generate launch assets and an export bundle in ContentEngin',
      accent: '#fb923c',
      emoji: '✨',
      href: '/daydream/create',
    });
  }
  if (actionLower.includes('export') || actionLower.includes('save')) {
    suggestions.push({
      type: 'transfer',
      title: 'Use in another engine',
      reason: 'Your exported asset can be used in other engines via the Forge transfer system',
      accent: '#c8981a',
      emoji: '🔗',
    });
  }
  if (actionLower.includes('beat') || actionLower.includes('track') || actionLower.includes('stem')) {
    suggestions.push({
      type: 'transfer',
      title: 'Wire into GameEngin',
      reason: 'Your audio work can power in-game soundtracks and SFX',
      accent: '#c8981a',
      emoji: '🎮',
      href: '/daydream/games',
    });
  }

  return suggestions;
}


const ENGINE_KEYWORDS: Record<string, string[]> = {
  games: ['game', 'play', 'world', 'level', 'character', 'quest', 'adventure', 'rpg', 'platformer', 'build a game', 'multiplayer'],
  music: ['music', 'beat', 'track', 'song', 'mix', 'record', 'audio', 'sound', 'synthesizer', 'melody', 'rhythm', 'album', 'stem'],
  code:  ['code', 'script', 'program', 'develop', 'build', 'deploy', 'notebook', 'debug', 'api', 'algorithm', 'function'],
  lab:   ['experiment', 'simulation', 'data', 'analyse', 'analyze', 'quantum', 'physics', 'visualize', 'chart', 'research', 'hypothesis'],
  brand: ['brand', 'logo', 'identity', 'campaign', 'analytics', 'audience', 'marketing', 'palette', 'promote', 'advertise'],
  create:['content', 'post', 'publish', 'video', 'article', 'blog', 'draft', 'schedule', 'calendar', 'story', 'share'],
};


export function parseGoalToWorkflow(goal: string): ForgeWorkflow | null {
  if (!goal.trim()) return null;

  const goalLower = goal.toLowerCase();
  const matched: Array<{ id: string; score: number }> = [];

  for (const [engineId, keywords] of Object.entries(ENGINE_KEYWORDS)) {
    let score = 0;
    for (const kw of keywords) {
      if (goalLower.includes(kw)) score++;
    }
    if (score > 0) matched.push({ id: engineId, score });
  }

  if (matched.length === 0) return null;

  
  matched.sort((a, b) => b.score - a.score);
  const engineIds = matched.map((m) => m.id);

  
  const steps = engineIds.map((eid) => {
    const engine = ENGIN_REGISTRY.find((e) => e.id === eid);
    if (!engine) return '';
    return `Open ${engine.name} → ${generateStepDescription(eid, goalLower)}`;
  }).filter(Boolean);

  
  if (goalLower.includes('publish') || goalLower.includes('share')) {
    if (!engineIds.includes('create')) {
      engineIds.push('create');
      steps.push('Open ContentEngin → create launch assets and export a shareable bundle');
    }
  }

  const primaryEngine = ENGIN_REGISTRY.find((e) => e.id === engineIds[0]);

  return {
    id: `goal-${Date.now()}`,
    title: goal.length > 50 ? goal.slice(0, 47) + '…' : goal,
    emoji: primaryEngine?.emoji ?? '🔥',
    accent: primaryEngine?.accent ?? '#ef4444',
    desc: `Auto-generated workflow from your goal`,
    engines: engineIds,
    steps,
  };
}

function generateStepDescription(engineId: string, goal: string): string {
  switch (engineId) {
    case 'games':
      if (goal.includes('level')) return 'design levels in the world builder';
      if (goal.includes('character')) return 'create characters and game assets';
      return 'build and playtest your game world';
    case 'music':
      if (goal.includes('beat')) return 'produce beats in the beat maker';
      if (goal.includes('stem')) return 'isolate and export stems';
      return 'compose and mix your audio';
    case 'code':
      if (goal.includes('api')) return 'build your API endpoints';
      if (goal.includes('script')) return 'write and test scripts';
      return 'write and run your code';
    case 'lab':
      if (goal.includes('data')) return 'analyse your data sets';
      if (goal.includes('simulation')) return 'run and configure simulations';
      return 'run experiments and analyse results';
    case 'brand':
      if (goal.includes('campaign')) return 'set up your marketing campaign';
      if (goal.includes('logo')) return 'design your brand identity';
      return 'configure brand identity and analytics';
    case 'create':
      if (goal.includes('video')) return 'generate video-ready visual assets';
      if (goal.includes('blog') || goal.includes('article')) return 'create article media and export-ready visuals';
      return 'generate assets and prepare export bundles';
    default:
      return 'complete this step';
  }
}

export interface ForgeTransferEntry {
  
  id: string;
  
  fromEnginId: string;
  
  toEnginId: string;
  
  assetType: string;
  
  label: string;
  
  timestamp: string;
  
  status: 'pending' | 'complete' | 'failed';
  
  metadata?: Record<string, unknown>;
}

const TRANSFER_STORAGE_KEY = 'de:forge:transfers';
const MAX_TRANSFERS = 50;


export function recordForgeTransfer(
  fromEnginId: string,
  toEnginId: string,
  assetType: string,
  label: string,
  metadata?: Record<string, unknown>,
): ForgeTransferEntry {
  const entry: ForgeTransferEntry = {
    id: `xfer-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    fromEnginId,
    toEnginId,
    assetType,
    label,
    timestamp: new Date().toISOString(),
    status: 'complete',
    metadata,
  };

  if (typeof window === 'undefined') return entry;
  try {
    const transfers = readForgeTransfers();
    transfers.push(entry);
    const trimmed = transfers.slice(-MAX_TRANSFERS);
    localStorage.setItem(TRANSFER_STORAGE_KEY, JSON.stringify(trimmed));
  } catch {
    
  }
  return entry;
}


export function readForgeTransfers(): ForgeTransferEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(TRANSFER_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as ForgeTransferEntry[];
  } catch {
    return [];
  }
}


export function clearForgeTransfers(): void {
  if (typeof window === 'undefined') return;
  try { localStorage.removeItem(TRANSFER_STORAGE_KEY); } catch {  }
}

const CUSTOM_WORKFLOWS_KEY = 'de:forge:custom-workflows';


export function saveCustomWorkflow(workflow: ForgeWorkflow): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = readCustomWorkflows();
    
    const updated = existing.filter((w) => w.id !== workflow.id);
    updated.push(workflow);
    localStorage.setItem(CUSTOM_WORKFLOWS_KEY, JSON.stringify(updated));
  } catch {
    
  }
}


export function readCustomWorkflows(): ForgeWorkflow[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CUSTOM_WORKFLOWS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as ForgeWorkflow[];
  } catch {
    return [];
  }
}


export function deleteCustomWorkflow(workflowId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = readCustomWorkflows();
    const filtered = existing.filter((w) => w.id !== workflowId);
    localStorage.setItem(CUSTOM_WORKFLOWS_KEY, JSON.stringify(filtered));
  } catch {
    
  }
}


export function clearCustomWorkflows(): void {
  if (typeof window === 'undefined') return;
  try { localStorage.removeItem(CUSTOM_WORKFLOWS_KEY); } catch {  }
}

export interface WorkflowStepStatus {
  workflowId: string;
  stepIndex: number;
  status: 'pending' | 'active' | 'complete' | 'failed';
  failureReason?: string;
  startedAt?: string;
  completedAt?: string;
}

export interface WorkflowRunState {
  workflowId: string;
  steps: WorkflowStepStatus[];
  startedAt: string;
  status: 'running' | 'complete' | 'failed';
}

const WORKFLOW_RUNS_KEY = 'de:forge:workflow-runs';


export function startWorkflowRun(workflowId: string, stepCount: number): WorkflowRunState {
  const run: WorkflowRunState = {
    workflowId,
    startedAt: new Date().toISOString(),
    status: 'running',
    steps: Array.from({ length: stepCount }, (_, i: number ) => ({
      workflowId,
      stepIndex: i,
      status: i === 0 ? 'active' : 'pending',
      startedAt: i === 0 ? new Date().toISOString() : undefined,
    })),
  };

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(WORKFLOW_RUNS_KEY, JSON.stringify(run));
    } catch {  }
  }
  return run;
}


export function updateWorkflowStep(
  stepIndex: number,
  status: 'complete' | 'failed',
  failureReason?: string,
): WorkflowRunState | null {
  const run = getActiveWorkflowRun();
  if (!run) return null;

  const step = run.steps[stepIndex];
  if (!step) return null;

  step.status = status;
  step.completedAt = new Date().toISOString();
  if (failureReason) step.failureReason = failureReason;

  
  if (status === 'complete' && stepIndex + 1 < run.steps.length) {
    run.steps[stepIndex + 1].status = 'active';
    run.steps[stepIndex + 1].startedAt = new Date().toISOString();
  }

  
  const allDone = run.steps.every((s) => s.status === 'complete' || s.status === 'failed');
  if (allDone) {
    run.status = run.steps.some((s) => s.status === 'failed') ? 'failed' : 'complete';
  }

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(WORKFLOW_RUNS_KEY, JSON.stringify(run));
    } catch {  }
  }
  return run;
}


export function getActiveWorkflowRun(): WorkflowRunState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(WORKFLOW_RUNS_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as WorkflowRunState;
  } catch {
    return null;
  }
}


export function clearWorkflowRun(): void {
  if (typeof window === 'undefined') return;
  try { localStorage.removeItem(WORKFLOW_RUNS_KEY); } catch {  }
}


export function getFailureRecovery(
  failedStep: WorkflowStepStatus,
  workflow: ForgeWorkflow,
): ForgeSuggestion[] {
  const suggestions: ForgeSuggestion[] = [];
  const engineId = workflow.engines[failedStep.stepIndex];
  const engine = ENGIN_REGISTRY.find((e) => e.id === engineId);

  if (!engine) return suggestions;

  
  suggestions.push({
    type: 'workflow',
    title: `Retry: ${engine.name}`,
    reason: `Re-open ${engine.name} and try again${failedStep.failureReason ? ` (failed: ${failedStep.failureReason})` : ''}`,
    accent: engine.accent,
    emoji: '🔄',
    href: engine.daydreamHref,
  });

  
  if (failedStep.stepIndex < workflow.steps.length - 1) {
    const nextEngine = ENGIN_REGISTRY.find((e) => e.id === workflow.engines[failedStep.stepIndex + 1]);
    if (nextEngine) {
      suggestions.push({
        type: 'workflow',
        title: `Skip to ${nextEngine.name}`,
        reason: 'Skip this step and continue with the next engine in the workflow',
        accent: nextEngine.accent,
        emoji: '⏭️',
        href: nextEngine.daydreamHref,
      });
    }
  }

  
  const alternatives = CREATIVE_ENGINES.filter(
    e => e.id !== engineId && e.capabilities.some(
      cap => engine.capabilities.includes(cap),
    ),
  );
  for (const alt of alternatives.slice(0, 1)) {
    suggestions.push({
      type: 'next-engine',
      title: `Try ${alt.name} instead`,
      reason: `${alt.name} shares similar capabilities and may work as an alternative`,
      accent: alt.accent,
      emoji: alt.emoji,
      href: alt.daydreamHref,
    });
  }

  return suggestions;
}
