import {
    patchBaseState,
    type EnginBaseState,
    type JsonObject,
} from '@/lib/engin-runtime/EnginBaseState';
import type { EnginCapability } from '@/lib/engin-runtime/EnginCapabilities';
import { getEnginCapabilityProfile } from '@/lib/engin-runtime/EnginCapabilityTargets';
import type {
    ConstraintResult,
    EnginAction,
    EnginConstraint,
    EnginRuleSetContract,
    EnginRuleSetManifest,
    EnginRuleSetParams,
} from '@/lib/engin-runtime/EnginRuleSetContract';

/**
 * CodeEngin Rule-Set
 *
 * Domain behavior for the CodeEngin workspace lives here: editable source files,
 * open tabs, diagnostics, terminal records, notebook cells, CI/security state,
 * and cross-Engin handoff state. Infrastructure still stays outside this file.
 */

export type CellLanguage = 'python' | 'javascript' | 'typescript' | 'bash';
export type CellStatus = 'idle' | 'running' | 'done' | 'error';
export type SourceLanguage = CellLanguage | 'json' | 'css' | 'markdown' | 'text';
export type CiStatus = 'idle' | 'running' | 'passed' | 'failed';
export type DiagnosticSeverity = 'error' | 'warning' | 'info';
export type CodeRuntimeMode = 'local' | 'connected' | 'blocked';

export interface NotebookCell extends JsonObject {
  id: string;
  language: CellLanguage;
  code: string;
  output: string | null;
  status: CellStatus;
  error?: string;
}

export interface CodeWorkspaceFile extends JsonObject {
  path: string;
  language: SourceLanguage;
  content: string;
  dirty: boolean;
  readonly?: boolean;
  updatedAt: string;
}

export interface CodeDiagnostic extends JsonObject {
  id: string;
  path: string;
  line: number;
  col: number;
  severity: DiagnosticSeverity;
  message: string;
}

export interface CodeTerminalEntry extends JsonObject {
  id: string;
  kind: 'input' | 'info' | 'success' | 'warning' | 'error';
  text: string;
  timestamp: string;
}

export interface SecurityFinding extends JsonObject {
  severity: 'critical' | 'high' | 'medium' | 'low';
  message: string;
  file?: string;
}

export interface CodeEnginDerivedState extends JsonObject {
  lifecycle: EnginBaseState['lifecycle'];
  cells: NotebookCell[];
  activeCellId: string | null;
  workspaceFiles: CodeWorkspaceFile[];
  openTabs: string[];
  activePath: string | null;
  diagnostics: CodeDiagnostic[];
  terminal: CodeTerminalEntry[];
  activeProjectId: string | null;
  ciStatus: CiStatus;
  runtimeMode: CodeRuntimeMode;
  lastRunStatus: CiStatus;
  projectGraphStale: boolean;
  securityFindings: SecurityFinding[];
  moduleInjected: boolean;
  zoom: number;
}

export type CodeEnginAction =
  | EnginAction<'code:cell-add', { cell: NotebookCell }>
  | EnginAction<'code:cell-remove', { cellId: string }>
  | EnginAction<'code:cell-update', { cellId: string; code: string }>
  | EnginAction<'code:cell-output', { cellId: string; output: string; status: CellStatus; error?: string }>
  | EnginAction<'code:cell-activate', { cellId: string }>
  | EnginAction<'code:cells-load', { cells: NotebookCell[] }>
  | EnginAction<'code:workspace-load', { files: CodeWorkspaceFile[]; activePath?: string; openTabs?: string[] }>
  | EnginAction<'code:file-create', { file: CodeWorkspaceFile }>
  | EnginAction<'code:file-update', { path: string; content: string }>
  | EnginAction<'code:file-delete', { path: string }>
  | EnginAction<'code:file-open', { path: string }>
  | EnginAction<'code:file-close', { path: string }>
  | EnginAction<'code:diagnostics-set', { diagnostics: CodeDiagnostic[] }>
  | EnginAction<'code:terminal-write', { entry: CodeTerminalEntry }>
  | EnginAction<'code:project-select', { projectId: string }>
  | EnginAction<'code:ci-start', Record<string, never>>
  | EnginAction<'code:ci-result', { status: 'passed' | 'failed' }>
  | EnginAction<'code:runtime-status', { mode: CodeRuntimeMode }>
  | EnginAction<'code:run-result', { status: 'passed' | 'failed'; command: string; output?: string }>
  | EnginAction<'code:graph-refreshed', Record<string, never>>
  | EnginAction<'code:security-scan', { findings: SecurityFinding[] }>
  | EnginAction<'code:module-inject', Record<string, never>>
  | EnginAction<'code:zoom-set', { zoom: number }>;

const DEFAULT_CELLS: NotebookCell[] = [
  {
    id: 'demo-1',
    language: 'typescript',
    code: '// TypeScript\nconst greet = (name: string): string => `Hello ${name}`;\ngreet("DREAMengin")',
    output: null,
    status: 'idle',
  },
];

const DEFAULT_WORKSPACE_FILES: CodeWorkspaceFile[] = [
  {
    path: 'app/page.tsx',
    language: 'typescript',
    content: 'export default function HomePage() {\n  return <main>DREAMengin</main>;\n}\n',
    dirty: false,
    updatedAt: '1970-01-01T00:00:00.000Z',
  },
];

const DEFAULT_DOMAIN: Omit<CodeEnginDerivedState, 'lifecycle'> = {
  cells: DEFAULT_CELLS,
  activeCellId: null,
  workspaceFiles: DEFAULT_WORKSPACE_FILES,
  openTabs: ['app/page.tsx'],
  activePath: 'app/page.tsx',
  diagnostics: [],
  terminal: [],
  activeProjectId: null,
  ciStatus: 'idle',
  runtimeMode: 'local',
  lastRunStatus: 'idle',
  projectGraphStale: true,
  securityFindings: [],
  moduleInjected: false,
  zoom: 1.0,
};

function filesFrom(domain: Partial<typeof DEFAULT_DOMAIN>): CodeWorkspaceFile[] {
  return (domain.workspaceFiles ?? DEFAULT_DOMAIN.workspaceFiles) as CodeWorkspaceFile[];
}

function openTabsFrom(domain: Partial<typeof DEFAULT_DOMAIN>): string[] {
  return (domain.openTabs ?? DEFAULT_DOMAIN.openTabs) as string[];
}

function cellsFrom(domain: Partial<typeof DEFAULT_DOMAIN>): NotebookCell[] {
  return (domain.cells ?? DEFAULT_CELLS) as NotebookCell[];
}

const cellAddConstraint: EnginConstraint<CodeEnginAction> = (_state, action): ConstraintResult => {
  if (action.type !== 'code:cell-add') return { valid: true };
  const { cell } = (action as EnginAction<'code:cell-add', { cell: NotebookCell }>).payload ?? {};
  if (!cell || !cell.id || !cell.language || typeof cell.code !== 'string') {
    return { valid: false, reason: 'code:cell-add requires a valid NotebookCell.' };
  }
  return { valid: true };
};

const filePathConstraint: EnginConstraint<CodeEnginAction> = (_state, action): ConstraintResult => {
  if (!['code:file-create', 'code:file-update', 'code:file-delete', 'code:file-open', 'code:file-close'].includes(action.type)) {
    return { valid: true };
  }
  const payload = action.payload as { path?: string; file?: { path?: string } } | undefined;
  const path = payload?.path ?? payload?.file?.path;
  if (!path || path.startsWith('/') || path.includes('..')) {
    return { valid: false, reason: 'CodeEngin file paths must be relative workspace paths.' };
  }
  return { valid: true };
};

const zoomConstraint: EnginConstraint<CodeEnginAction> = (_state, action): ConstraintResult => {
  if (action.type !== 'code:zoom-set') return { valid: true };
  const { zoom } = (action as EnginAction<'code:zoom-set', { zoom: number }>).payload ?? {};
  if (typeof zoom !== 'number' || zoom < 0.6 || zoom > 2.0) {
    return { valid: false, reason: 'Zoom must be between 0.6 and 2.0.' };
  }
  return { valid: true };
};

function transform(state: EnginBaseState, action: CodeEnginAction): EnginBaseState {
  const domain = state.domain as Partial<typeof DEFAULT_DOMAIN>;
  const files = filesFrom(domain);
  const tabs = openTabsFrom(domain);

  switch (action.type) {
    case 'code:cell-add': {
      const { cell } = (action as EnginAction<'code:cell-add', { cell: NotebookCell }>).payload!;
      return patchBaseState(state, { domain: { ...domain, cells: [...cellsFrom(domain), cell] } });
    }
    case 'code:cell-remove': {
      const { cellId } = (action as EnginAction<'code:cell-remove', { cellId: string }>).payload!;
      return patchBaseState(state, { domain: { ...domain, cells: cellsFrom(domain).filter((c) => c.id !== cellId) } });
    }
    case 'code:cell-update': {
      const { cellId, code } = (action as EnginAction<'code:cell-update', { cellId: string; code: string }>).payload!;
      return patchBaseState(state, { domain: { ...domain, cells: cellsFrom(domain).map((c) => c.id === cellId ? { ...c, code } : c) } });
    }
    case 'code:cell-output': {
      const { cellId, output, status, error } = (action as EnginAction<'code:cell-output', { cellId: string; output: string; status: CellStatus; error?: string }>).payload!;
      return patchBaseState(state, { domain: { ...domain, cells: cellsFrom(domain).map((c) => c.id === cellId ? { ...c, output, status, error } : c) } });
    }
    case 'code:cell-activate': {
      const { cellId } = (action as EnginAction<'code:cell-activate', { cellId: string }>).payload!;
      return patchBaseState(state, { domain: { ...domain, activeCellId: cellId } });
    }
    case 'code:cells-load': {
      const { cells } = (action as EnginAction<'code:cells-load', { cells: NotebookCell[] }>).payload!;
      return patchBaseState(state, { domain: { ...domain, cells } });
    }
    case 'code:workspace-load': {
      const { files: loadedFiles, activePath, openTabs } = (action as EnginAction<'code:workspace-load', { files: CodeWorkspaceFile[]; activePath?: string; openTabs?: string[] }>).payload!;
      const resolvedActive = activePath && loadedFiles.some((file) => file.path === activePath) ? activePath : loadedFiles[0]?.path ?? null;
      return patchBaseState(state, { domain: { ...domain, workspaceFiles: loadedFiles, activePath: resolvedActive, openTabs: openTabs?.length ? openTabs : resolvedActive ? [resolvedActive] : [] } });
    }
    case 'code:file-create': {
      const { file } = (action as EnginAction<'code:file-create', { file: CodeWorkspaceFile }>).payload!;
      const nextFiles = files.some((existing) => existing.path === file.path) ? files : [...files, file];
      return patchBaseState(state, { domain: { ...domain, workspaceFiles: nextFiles, activePath: file.path, openTabs: tabs.includes(file.path) ? tabs : [...tabs, file.path] } });
    }
    case 'code:file-update': {
      const { path, content } = (action as EnginAction<'code:file-update', { path: string; content: string }>).payload!;
      return patchBaseState(state, { domain: { ...domain, workspaceFiles: files.map((file) => file.path === path ? { ...file, content, dirty: true, updatedAt: new Date().toISOString() } : file) } });
    }
    case 'code:file-delete': {
      const { path } = (action as EnginAction<'code:file-delete', { path: string }>).payload!;
      const nextFiles = files.filter((file) => file.path !== path);
      const nextTabs = tabs.filter((tab) => tab !== path);
      const activePath = domain.activePath === path ? nextTabs[0] ?? nextFiles[0]?.path ?? null : domain.activePath ?? null;
      return patchBaseState(state, { domain: { ...domain, workspaceFiles: nextFiles, openTabs: nextTabs, activePath } });
    }
    case 'code:file-open': {
      const { path } = (action as EnginAction<'code:file-open', { path: string }>).payload!;
      return patchBaseState(state, { domain: { ...domain, activePath: path, openTabs: tabs.includes(path) ? tabs : [...tabs, path] } });
    }
    case 'code:file-close': {
      const { path } = (action as EnginAction<'code:file-close', { path: string }>).payload!;
      const nextTabs = tabs.filter((tab) => tab !== path);
      const activePath = domain.activePath === path ? nextTabs[0] ?? files[0]?.path ?? null : domain.activePath ?? null;
      return patchBaseState(state, { domain: { ...domain, openTabs: nextTabs, activePath } });
    }
    case 'code:diagnostics-set': {
      const { diagnostics } = (action as EnginAction<'code:diagnostics-set', { diagnostics: CodeDiagnostic[] }>).payload!;
      return patchBaseState(state, { domain: { ...domain, diagnostics } });
    }
    case 'code:terminal-write': {
      const { entry } = (action as EnginAction<'code:terminal-write', { entry: CodeTerminalEntry }>).payload!;
      return patchBaseState(state, { domain: { ...domain, terminal: [...((domain.terminal ?? []) as CodeTerminalEntry[]), entry].slice(-80) } });
    }
    case 'code:project-select': {
      const { projectId } = (action as EnginAction<'code:project-select', { projectId: string }>).payload!;
      return patchBaseState(state, { domain: { ...domain, activeProjectId: projectId } });
    }
    case 'code:ci-start':
      return patchBaseState(state, { domain: { ...domain, ciStatus: 'running' } });
    case 'code:ci-result': {
      const { status } = (action as EnginAction<'code:ci-result', { status: 'passed' | 'failed' }>).payload!;
      return patchBaseState(state, { domain: { ...domain, ciStatus: status } });
    }
    case 'code:runtime-status': {
      const { mode } = (action as EnginAction<'code:runtime-status', { mode: CodeRuntimeMode }>).payload!;
      return patchBaseState(state, { domain: { ...domain, runtimeMode: mode } });
    }
    case 'code:run-result': {
      const { status, command, output } = (action as EnginAction<'code:run-result', { status: 'passed' | 'failed'; command: string; output?: string }>).payload!;
      const entry: CodeTerminalEntry = {
        id: `run-${Date.now().toString(36)}`,
        kind: status === 'passed' ? 'success' : 'error',
        text: output ? `${command}: ${output}` : `${command}: ${status}`,
        timestamp: new Date().toISOString(),
      };
      return patchBaseState(state, { domain: { ...domain, lastRunStatus: status, terminal: [...((domain.terminal ?? []) as CodeTerminalEntry[]), entry].slice(-80) } });
    }
    case 'code:graph-refreshed':
      return patchBaseState(state, { domain: { ...domain, projectGraphStale: false } });
    case 'code:security-scan': {
      const { findings } = (action as EnginAction<'code:security-scan', { findings: SecurityFinding[] }>).payload!;
      return patchBaseState(state, { domain: { ...domain, securityFindings: findings } });
    }
    case 'code:module-inject':
      return patchBaseState(state, { domain: { ...domain, moduleInjected: true } });
    case 'code:zoom-set': {
      const { zoom } = (action as EnginAction<'code:zoom-set', { zoom: number }>).payload!;
      return patchBaseState(state, { domain: { ...domain, zoom } });
    }
    default:
      return state;
  }
}

function deriveState(state: EnginBaseState): CodeEnginDerivedState {
  const d = state.domain as Partial<typeof DEFAULT_DOMAIN>;
  return {
    lifecycle: state.lifecycle,
    cells: (d.cells ?? DEFAULT_DOMAIN.cells) as NotebookCell[],
    activeCellId: (d.activeCellId ?? DEFAULT_DOMAIN.activeCellId) as string | null,
    workspaceFiles: (d.workspaceFiles ?? DEFAULT_DOMAIN.workspaceFiles) as CodeWorkspaceFile[],
    openTabs: (d.openTabs ?? DEFAULT_DOMAIN.openTabs) as string[],
    activePath: (d.activePath ?? DEFAULT_DOMAIN.activePath) as string | null,
    diagnostics: (d.diagnostics ?? DEFAULT_DOMAIN.diagnostics) as CodeDiagnostic[],
    terminal: (d.terminal ?? DEFAULT_DOMAIN.terminal) as CodeTerminalEntry[],
    activeProjectId: (d.activeProjectId ?? DEFAULT_DOMAIN.activeProjectId) as string | null,
    ciStatus: (d.ciStatus ?? DEFAULT_DOMAIN.ciStatus) as CiStatus,
    runtimeMode: (d.runtimeMode ?? DEFAULT_DOMAIN.runtimeMode) as CodeRuntimeMode,
    lastRunStatus: (d.lastRunStatus ?? DEFAULT_DOMAIN.lastRunStatus) as CiStatus,
    projectGraphStale: (d.projectGraphStale ?? DEFAULT_DOMAIN.projectGraphStale) as boolean,
    securityFindings: (d.securityFindings ?? DEFAULT_DOMAIN.securityFindings) as SecurityFinding[],
    moduleInjected: (d.moduleInjected ?? DEFAULT_DOMAIN.moduleInjected) as boolean,
    zoom: (d.zoom ?? DEFAULT_DOMAIN.zoom) as number,
  };
}

const PARAMS: EnginRuleSetParams = {
  enginId: 'code',
  name: 'CodeEngin',
  layoutMode: 'standard',
  accentColor: '#3b7dd8',
};

const ACTION_TYPES: CodeEnginAction['type'][] = [
  'code:cell-add',
  'code:cell-remove',
  'code:cell-update',
  'code:cell-output',
  'code:cell-activate',
  'code:cells-load',
  'code:workspace-load',
  'code:file-create',
  'code:file-update',
  'code:file-delete',
  'code:file-open',
  'code:file-close',
  'code:diagnostics-set',
  'code:terminal-write',
  'code:project-select',
  'code:ci-start',
  'code:ci-result',
  'code:runtime-status',
  'code:run-result',
  'code:graph-refreshed',
  'code:security-scan',
  'code:module-inject',
  'code:zoom-set',
];

const MANIFEST: EnginRuleSetManifest<CodeEnginAction> = {
  id: PARAMS.enginId,
  name: PARAMS.name,
  version: '1.2.0',
  schema: {
    actionTypes: ACTION_TYPES,
    domainVersion: 3,
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
  'scripts:edit',
  'scripts:run',
  'bridge:emit',
  'bridge:listen',
];

export const CODE_ENGIN_RULE_SET: EnginRuleSetContract<CodeEnginAction> = {
  manifest: MANIFEST,
  params: PARAMS,
  requiredCapabilities: REQUIRED_CAPABILITIES,
  capabilityTargets: getEnginCapabilityProfile('code'),
  constraints: [cellAddConstraint, filePathConstraint, zoomConstraint],
  transform,
  deriveState,
};
