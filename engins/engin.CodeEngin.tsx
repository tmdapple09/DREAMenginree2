'use client';

import CrossEnginStatusPanel from '@/components/dreamengin/dream.panel.CrossEnginStatusPanel';
import { useDaydreamPersistence } from '@/lib/daydream/useDaydreamPersistence';
import { useDaydreamState } from '@/lib/daydream/useDaydreamState';
import { ArtifactSlot } from '@/lib/enginpipe';
import { useCodeEnginRuntime } from '@/lib/engins/code/useCodeEnginRuntime';
import { useEnginWorkflow } from '@/lib/engins/useEnginWorkflow';
import { recordForgeTransfer } from '@/lib/forge/forgeIntelligence';
import { useForgeActivity } from '@/lib/forge/useForgeActivity';
import { bridge } from '@/lib/runtime/dualRuntimeBridge';
import { useCodeEnginBridge } from '@/lib/runtime/useEnginBridge';
import {
  ArrowLeft,
  Bot,
  Bug,
  CheckCircle,
  Clipboard,
  Code2,
  Copy,
  ListChecks,
  Loader2,
  Plus,
  Shield,
  Terminal,
  Trash2,
  X,
  XCircle,
  Zap,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { type CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgentPanel } from './CodeEngin/modules/ai-co-pilot';
import { parseCode, type ParseError, type ParsedSymbol } from './CodeEngin/core/parser';

interface Props {
  onBack: () => void;
  instanceId?: string;
}

type SourceLanguage =
  | 'typescript'
  | 'javascript'
  | 'python'
  | 'bash'
  | 'json'
  | 'css'
  | 'markdown'
  | 'text';

type BottomPanel = 'terminal' | 'problems' | 'outline' | 'diff' | 'assist';
type CommandKind = 'load' | 'save' | 'check' | 'server-check' | 'build' | 'typecheck' | 'test' | 'run' | 'format' | 'snapshot' | 'git' | 'game' | 'content' | 'component';

type DiagnosticSeverity = 'error' | 'warning' | 'info';

interface WorkspaceFile {
  path: string;
  language: SourceLanguage;
  content: string;
  dirty: boolean;
  readonly?: boolean;
  updatedAt: string;
}

interface EditorDiagnostic {
  id: string;
  path: string;
  line: number;
  col: number;
  severity: DiagnosticSeverity;
  message: string;
}

interface TerminalLine {
  id: string;
  kind: 'input' | 'info' | 'success' | 'warning' | 'error';
  text: string;
  timestamp: string;
}

interface Snapshot {
  id: string;
  label: string;
  createdAt: string;
  files: WorkspaceFile[];
}

interface CodeWorkspaceState {
  workspaceId?: string;
  workspaceName?: string;
  files: WorkspaceFile[];
  openTabs: string[];
  activePath: string;
  snapshots: Snapshot[];
}

interface CommandDefinition {
  id: CommandKind;
  label: string;
  hint: string;
}

const ACCENT = '#3b7dd8';
const STORAGE_KEY = 'dreamengin.codeengin.workspace.v3';
const SNAPSHOT_LIMIT = 8;
const FONT_MIN = 11;
const FONT_MAX = 18;

const SHELL: CSSProperties = {
  minHeight: '100vh',
  background: 'linear-gradient(180deg, rgba(232,239,249,0.96), rgba(206,219,239,0.92))',
  color: 'var(--de-text)',
};

const PANEL: CSSProperties = {
  background: 'rgba(246,249,253,0.86)',
  border: '1px solid rgba(82,113,157,0.22)',
  borderRadius: 18,
  boxShadow: '0 18px 42px rgba(29,43,68,0.10)',
};

const DARK_PANEL: CSSProperties = {
  background: '#111827',
  border: '1px solid rgba(148,163,184,0.22)',
  color: '#e5e7eb',
};

const COMMANDS: CommandDefinition[] = [
  { id: 'load', label: 'Load current user workspace', hint: 'Read files only from the workspace you created or uploaded.' },
  { id: 'save', label: 'Save active file to workspace', hint: 'Persist the active editor file only inside your owned workspace.' },
  { id: 'check', label: 'Run local workspace diagnostics', hint: 'Parse files in the current editor state and surface problems.' },
  { id: 'server-check', label: 'Run server workspace diagnostics', hint: 'Scan project files through the CodeEngin diagnostics API.' },
  { id: 'build', label: 'Run production build', hint: 'Run the allowlisted pnpm build command on the server.' },
  { id: 'typecheck', label: 'Run TypeScript typecheck', hint: 'Run the allowlisted pnpm typecheck command on the server.' },
  { id: 'test', label: 'Run test suite', hint: 'Run the allowlisted pnpm test command on the server.' },
  { id: 'run', label: 'Run active file', hint: 'Execute JavaScript/TypeScript locally or validate JSON.' },
  { id: 'format', label: 'Format active file', hint: 'Trim trailing whitespace and pretty-print JSON.' },
  { id: 'snapshot', label: 'Save workspace snapshot', hint: 'Capture current files for rollback and diff.' },
  { id: 'git', label: 'Show git status', hint: 'Read git branch and working-tree status.' },
  { id: 'game', label: 'Deploy active script to GameEngin', hint: 'Send the selected file through the runtime bridge.' },
  { id: 'content', label: 'Publish workspace to ContentEngin', hint: 'Send a project summary through Forge transfer.' },
  { id: 'component', label: 'Create React component', hint: 'Add a new editable component file.' },
];

const DEFAULT_FILES: WorkspaceFile[] = [
  {
    path: 'app/page.tsx',
    language: 'typescript',
    dirty: false,
    updatedAt: new Date(0).toISOString(),
    content: `import DreamButton from '@/components/DreamButton';\n\nexport default function HomePage() {\n  return (\n    <main className="min-h-screen p-6">\n      <h1>DREAMengin</h1>\n      <DreamButton label="Open runtime" />\n    </main>\n  );\n}\n`,
  },
  {
    path: 'components/DreamButton.tsx',
    language: 'typescript',
    dirty: false,
    updatedAt: new Date(0).toISOString(),
    content: `interface DreamButtonProps {\n  label: string;\n}\n\nexport default function DreamButton({ label }: DreamButtonProps) {\n  return <button type="button">{label}</button>;\n}\n`,
  },
  {
    path: 'lib/runtime/intent.ts',
    language: 'typescript',
    dirty: false,
    updatedAt: new Date(0).toISOString(),
    content: `export type RuntimeIntent = {\n  type: string;\n  payload?: Record<string, unknown>;\n};\n\nexport function createIntent(type: string, payload: Record<string, unknown> = {}): RuntimeIntent {\n  return { type, payload };\n}\n`,
  },
  {
    path: 'package.json',
    language: 'json',
    dirty: false,
    updatedAt: new Date(0).toISOString(),
    content: `{"scripts":{"check":"next lint && tsc --noEmit","build":"next build"},"dependencies":{}}\n`,
  },
];

function nowIso(): string {
  return new Date().toISOString();
}

function safeId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function languageFromPath(path: string): SourceLanguage {
  const lower = path.toLowerCase();
  if (lower.endsWith('.tsx') || lower.endsWith('.ts')) return 'typescript';
  if (lower.endsWith('.jsx') || lower.endsWith('.js') || lower.endsWith('.mjs') || lower.endsWith('.cjs')) return 'javascript';
  if (lower.endsWith('.py')) return 'python';
  if (lower.endsWith('.sh') || lower.endsWith('.bash')) return 'bash';
  if (lower.endsWith('.json')) return 'json';
  if (lower.endsWith('.css')) return 'css';
  if (lower.endsWith('.md') || lower.endsWith('.mdx')) return 'markdown';
  return 'text';
}

function basename(path: string): string {
  return path.split('/').pop() || path;
}

function folderName(path: string): string {
  const parts = path.split('/');
  return parts.length > 1 ? parts.slice(0, -1).join('/') : 'root';
}

function sortFiles(files: WorkspaceFile[]): WorkspaceFile[] {
  return [...files].sort((a, b) => a.path.localeCompare(b.path));
}

function makeFile(path: string, content = ''): WorkspaceFile {
  return {
    path,
    language: languageFromPath(path),
    content,
    dirty: true,
    updatedAt: nowIso(),
  };
}

function loadWorkspace(): CodeWorkspaceState {
  if (typeof window === 'undefined') {
    return { files: DEFAULT_FILES, openTabs: ['app/page.tsx'], activePath: 'app/page.tsx', snapshots: [] };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) throw new Error('No saved workspace');
    const parsed = JSON.parse(raw) as Partial<CodeWorkspaceState>;
    const files = Array.isArray(parsed.files) && parsed.files.length > 0
      ? parsed.files.map((file) => ({ ...file, language: languageFromPath(file.path), dirty: Boolean(file.dirty) }))
      : DEFAULT_FILES;
    const activePath = typeof parsed.activePath === 'string' && files.some((file) => file.path === parsed.activePath)
      ? parsed.activePath
      : files[0].path;
    const openTabs = Array.isArray(parsed.openTabs)
      ? parsed.openTabs.filter((path) => files.some((file) => file.path === path))
      : [activePath];
    return {
      files: sortFiles(files),
      openTabs: openTabs.length > 0 ? openTabs : [activePath],
      activePath,
      snapshots: Array.isArray(parsed.snapshots) ? parsed.snapshots.slice(0, SNAPSHOT_LIMIT) : [],
    };
  } catch {
    return { files: DEFAULT_FILES, openTabs: ['app/page.tsx'], activePath: 'app/page.tsx', snapshots: [] };
  }
}

function diagnosticsForFile(file: WorkspaceFile): EditorDiagnostic[] {
  const result = parseCode(file.content, file.language);
  const mapped = [...result.errors, ...result.warnings].map((issue: ParseError, index) => ({
    id: `${file.path}:${issue.line}:${issue.col}:${index}`,
    path: file.path,
    line: issue.line,
    col: issue.col,
    severity: issue.severity,
    message: issue.message,
  }));

  const heuristicDiagnostics: EditorDiagnostic[] = [];
  file.content.split('\n').forEach((line, index) => {
    if (/console\.log\(/.test(line)) {
      heuristicDiagnostics.push({
        id: `${file.path}:console:${index}`,
        path: file.path,
        line: index + 1,
        col: Math.max(1, line.indexOf('console.log') + 1),
        severity: 'info',
        message: 'Console logging is fine for a scratch run, but remove it before shipping.',
      });
    }
    if (/\bany\b/.test(line) && file.language === 'typescript') {
      heuristicDiagnostics.push({
        id: `${file.path}:any:${index}`,
        path: file.path,
        line: index + 1,
        col: Math.max(1, line.indexOf('any') + 1),
        severity: 'warning',
        message: 'Avoid any unless this boundary is intentionally untyped.',
      });
    }
  });

  return [...mapped, ...heuristicDiagnostics];
}

function symbolsForFile(file: WorkspaceFile): ParsedSymbol[] {
  return parseCode(file.content, file.language).symbols;
}

function collectDiagnostics(files: WorkspaceFile[]): EditorDiagnostic[] {
  return files.flatMap(diagnosticsForFile);
}

function terminalLine(kind: TerminalLine['kind'], text: string): TerminalLine {
  return { id: safeId('term'), kind, text, timestamp: new Date().toLocaleTimeString() };
}

function stripSimpleTypeScript(source: string): string {
  return source
    .replace(/^\s*import\s+[^;]+;?\s*$/gm, '')
    .replace(/^\s*export\s+/gm, '')
    .replace(/interface\s+[A-Za-z_$][\w$]*\s*\{[\s\S]*?\}\s*/g, '')
    .replace(/type\s+[A-Za-z_$][\w$]*\s*=\s*[^;]+;/g, '')
    .replace(/:\s*[A-Za-z_$][\w$<>,\s|&.[\]{}?:]*(?=[,)=;])/g, '')
    .replace(/as\s+[A-Za-z_$][\w$<>,\s|&.[\]{}?:]*/g, '');
}

function runJavaScriptSource(source: string, language: SourceLanguage): string {
  const code = language === 'typescript' ? stripSimpleTypeScript(source) : source;
  const logs: string[] = [];
  const originalLog = console.log;
  try {
    console.log = (...args: unknown[]) => {
      logs.push(args.map((value) => typeof value === 'string' ? value : JSON.stringify(value)).join(' '));
      originalLog(...args);
    };
    const result = new Function(code)();
    if (result !== undefined) logs.push(String(result));
    return logs.join('\n') || 'Executed successfully. No output was returned.';
  } finally {
    console.log = originalLog;
  }
}

async function callEamsAssist(prompt: string, codeContext?: string, language?: SourceLanguage): Promise<string> {
  const body: Record<string, unknown> = {
    message: prompt,
    ui: { route: '/daydream/code' },
  };

  if (codeContext && language) {
    body.code_context = { language, selected_code: codeContext.slice(0, 4000) };
  }

  try {
    const res = await fetch('/api/ai/eams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      if (res.status === 401) return 'Sign in to use AI code assist.';
      return `AI assistant error (${res.status}).`;
    }

    const data = await res.json() as { response_text?: string };
    return data.response_text || 'No response from AI.';
  } catch (err: unknown) {
    return `AI assistant error: ${err instanceof Error ? err.message : String(err)}`;
  }
}


type CodeEnginApiFileNode = {
  name: string;
  type: 'file' | 'directory';
  path: string;
  children?: CodeEnginApiFileNode[];
};

type CodeEnginApiDiagnostic = {
  id?: string;
  path: string;
  line: number;
  col: number;
  severity: DiagnosticSeverity;
  message: string;
  source?: string;
};

type CodeEnginApiRunResult = {
  command: string;
  args: string[];
  code: number;
  stdout: string;
  stderr: string;
  durationMs: number;
  timedOut: boolean;
};

async function postCodeEnginApi<T>(url: string, body: Record<string, unknown> = {}): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({})) as { ok?: boolean; error?: string } & T;
  if (!res.ok || data.ok === false) {
    throw new Error(data.error || `CodeEngin API failed (${res.status})`);
  }
  return data as T;
}

async function getCodeEnginApi<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const data = await res.json().catch(() => ({})) as { ok?: boolean; error?: string } & T;
  if (!res.ok || data.ok === false) {
    throw new Error(data.error || `CodeEngin API failed (${res.status})`);
  }
  return data as T;
}

function flattenCodeEnginTree(nodes: CodeEnginApiFileNode[]): string[] {
  const paths: string[] = [];
  const walk = (items: CodeEnginApiFileNode[]) => {
    items.forEach((item) => {
      if (item.type === 'file') paths.push(item.path);
      if (item.children?.length) walk(item.children);
    });
  };
  walk(nodes);
  return paths.sort((a, b) => a.localeCompare(b));
}

function filePlaceholdersFromTree(nodes: CodeEnginApiFileNode[]): WorkspaceFile[] {
  return flattenCodeEnginTree(nodes).map((path) => ({
    path,
    language: languageFromPath(path),
    content: '',
    dirty: false,
    readonly: true,
    updatedAt: nowIso(),
  }));
}

function mergeServerFile(prev: CodeWorkspaceState, file: WorkspaceFile): CodeWorkspaceState {
  const exists = prev.files.some((candidate) => candidate.path === file.path);
  const files = exists
    ? prev.files.map((candidate) => candidate.path === file.path ? file : candidate)
    : [...prev.files, file];
  return {
    ...prev,
    files: sortFiles(files),
    activePath: file.path,
    openTabs: prev.openTabs.includes(file.path) ? prev.openTabs : [...prev.openTabs, file.path],
  };
}

function groupFiles(files: WorkspaceFile[]): Array<[string, WorkspaceFile[]]> {
  const groups = new Map<string, WorkspaceFile[]>();
  sortFiles(files).forEach((file) => {
    const folder = folderName(file.path);
    groups.set(folder, [...(groups.get(folder) ?? []), file]);
  });
  return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
}

function severityRank(severity: DiagnosticSeverity): number {
  if (severity === 'error') return 0;
  if (severity === 'warning') return 1;
  return 2;
}

export default function CodeEngin({ onBack }: Props) {
  const { record: forgeRecord } = useForgeActivity({ enginId: 'code' });
  const codeBridge = useCodeEnginBridge();
  const { persistState: persistDaydreamState } = useDaydreamState({ daydreamType: 'code', side: 'B' });
  const { savedState, isRestoring, persistState } = useDaydreamPersistence<Partial<CodeWorkspaceState>>({ daydreamType: 'code' });
  const { state: enginState, ready: enginReady, hardwareAcceleration } = useCodeEnginRuntime({ useMemoryAdapter: true });
  const { loadWorkflow } = useEnginWorkflow();
  const restoredRef = useRef(false);
  const editorRef = useRef<HTMLTextAreaElement | null>(null);
  const uploadInputRef = useRef<HTMLInputElement | null>(null);

  const [workspace, setWorkspace] = useState<CodeWorkspaceState>(() => loadWorkspace());
  const [fontSize, setFontSize] = useState(13);
  const [search, setSearch] = useState('');
  const [newPath, setNewPath] = useState('components/NewModule.tsx');
  const [bottomPanel, setBottomPanel] = useState<BottomPanel>('terminal');
  const [terminal, setTerminal] = useState<TerminalLine[]>(() => [
    terminalLine('info', 'CodeEngin mounted in local scratch mode. Create or upload a workspace before server file access is enabled.'),
  ]);
  const [commandOpen, setCommandOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState('');
  const [assistPrompt, setAssistPrompt] = useState('');
  const [assistResponse, setAssistResponse] = useState('');
  const [assistLoading, setAssistLoading] = useState(false);
  const [datasetDismissed, setDatasetDismissed] = useState<string | null>(null);
  const [serverMode, setServerMode] = useState<'local' | 'connected' | 'blocked'>('local');
  const [serverDiagnostics, setServerDiagnostics] = useState<EditorDiagnostic[]>([]);

  useEffect(() => {
    loadWorkflow('code:sprint');
  }, [loadWorkflow]);

  useEffect(() => {
    if (isRestoring || restoredRef.current || !savedState?.files?.length) return;
    restoredRef.current = true;
    const files = sortFiles(savedState.files.map((file) => ({
      ...file,
      language: languageFromPath(file.path),
      dirty: Boolean(file.dirty),
      updatedAt: file.updatedAt ?? nowIso(),
    })));
    const activePath = savedState.activePath && files.some((file) => file.path === savedState.activePath)
      ? savedState.activePath
      : files[0].path;
    const openTabs = savedState.openTabs?.filter((path) => files.some((file) => file.path === path)) ?? [activePath];
    setWorkspace({
      workspaceId: typeof savedState.workspaceId === 'string' ? savedState.workspaceId : undefined,
      workspaceName: typeof savedState.workspaceName === 'string' ? savedState.workspaceName : undefined,
      files,
      activePath,
      openTabs: openTabs.length > 0 ? openTabs : [activePath],
      snapshots: savedState.snapshots?.slice(0, SNAPSHOT_LIMIT) ?? [],
    });
  }, [isRestoring, savedState]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(workspace));
    }
    persistState(workspace);
    persistDaydreamState({ side: 'B', workspaceFiles: workspace.files.length, activePath: workspace.activePath });
  }, [persistDaydreamState, persistState, workspace]);

  const activeFile = useMemo(
    () => workspace.files.find((file) => file.path === workspace.activePath) ?? workspace.files[0],
    [workspace.activePath, workspace.files],
  );

  const diagnostics = useMemo(() => [...collectDiagnostics(workspace.files), ...serverDiagnostics].sort((a, b) => {
    const bySeverity = severityRank(a.severity) - severityRank(b.severity);
    if (bySeverity !== 0) return bySeverity;
    const byPath = a.path.localeCompare(b.path);
    if (byPath !== 0) return byPath;
    return a.line - b.line;
  }), [serverDiagnostics, workspace.files]);

  const activeDiagnostics = useMemo(
    () => diagnostics.filter((diagnostic) => diagnostic.path === activeFile.path),
    [activeFile.path, diagnostics],
  );

  const activeSymbols = useMemo(() => symbolsForFile(activeFile), [activeFile]);
  const errorCount = diagnostics.filter((diagnostic) => diagnostic.severity === 'error').length;
  const warningCount = diagnostics.filter((diagnostic) => diagnostic.severity === 'warning').length;
  const dirtyCount = workspace.files.filter((file) => file.dirty).length;
  const datasetPrompt = codeBridge.lastLabDataset !== null && codeBridge.lastLabDataset !== datasetDismissed
    ? codeBridge.lastLabDataset
    : null;
  const activeWorkspaceId = workspace.workspaceId ?? '';
  const hasServerWorkspace = activeWorkspaceId.length > 0;

  const visibleFiles = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return workspace.files;
    return workspace.files.filter((file) => file.path.toLowerCase().includes(q) || file.content.toLowerCase().includes(q));
  }, [search, workspace.files]);

  const latestSnapshot = workspace.snapshots[0] ?? null;
  const snapshotFile = latestSnapshot?.files.find((file) => file.path === activeFile.path);
  const diffLines = useMemo(() => {
    if (!snapshotFile) return ['No snapshot exists for this file yet.'];
    const before = snapshotFile.content.split('\n');
    const after = activeFile.content.split('\n');
    const max = Math.max(before.length, after.length);
    const lines: string[] = [];
    for (let i = 0; i < max; i++) {
      if ((before[i] ?? '') === (after[i] ?? '')) continue;
      if (before[i] !== undefined) lines.push(`- ${i + 1}: ${before[i]}`);
      if (after[i] !== undefined) lines.push(`+ ${i + 1}: ${after[i]}`);
      if (lines.length >= 80) {
        lines.push('…diff truncated');
        break;
      }
    }
    return lines.length > 0 ? lines : ['No changes from latest snapshot.'];
  }, [activeFile.content, activeFile.path, snapshotFile]);

  const appendTerminal = useCallback((kind: TerminalLine['kind'], text: string) => {
    setTerminal((prev) => [...prev, terminalLine(kind, text)].slice(-80));
  }, []);

  const openFile = useCallback((path: string) => {
    setWorkspace((prev) => ({
      ...prev,
      activePath: path,
      openTabs: prev.openTabs.includes(path) ? prev.openTabs : [...prev.openTabs, path],
    }));
  }, []);

  const createServerWorkspace = useCallback(async () => {
    setBottomPanel('terminal');
    appendTerminal('input', 'codeengin workspace create');
    try {
      const data = await postCodeEnginApi<{ workspace: { id: string; name: string }; overview: { tree: CodeEnginApiFileNode[]; fileCount: number } }>('/api/codeengin/workspace', {
        action: 'create',
        name: 'CodeEngin Project',
      });
      const placeholders = filePlaceholdersFromTree(data.overview.tree);
      setWorkspace((prev) => ({
        ...prev,
        workspaceId: data.workspace.id,
        workspaceName: data.workspace.name,
        files: placeholders.length > 0 ? placeholders : prev.files,
        activePath: placeholders[0]?.path ?? prev.activePath,
        openTabs: placeholders[0]?.path ? [placeholders[0].path] : prev.openTabs,
      }));
      setServerMode('connected');
      appendTerminal('success', `Created user workspace ${data.workspace.name}. No DREAMengin source was opened.`);
    } catch (error: unknown) {
      setServerMode('blocked');
      appendTerminal('error', `Workspace create failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }, [appendTerminal]);

  const uploadWorkspaceZip = useCallback(async (file: File | null | undefined) => {
    if (!file) return;
    setBottomPanel('terminal');
    appendTerminal('input', `codeengin workspace upload ${file.name}`);
    try {
      const form = new FormData();
      form.append('repoZip', file);
      form.append('name', file.name.replace(/\.zip$/i, ''));
      const res = await fetch('/api/codeengin/upload', { method: 'POST', body: form });
      const data = await res.json().catch(() => ({})) as { ok?: boolean; error?: string; workspace?: { id: string; name: string }; overview?: { tree: CodeEnginApiFileNode[]; fileCount: number } };
      if (!res.ok || data.ok === false || !data.workspace || !data.overview) throw new Error(data.error || `Upload failed (${res.status})`);
      const placeholders = filePlaceholdersFromTree(data.overview.tree);
      setWorkspace((prev) => ({
        ...prev,
        workspaceId: data.workspace!.id,
        workspaceName: data.workspace!.name,
        files: placeholders.length > 0 ? placeholders : prev.files,
        activePath: placeholders[0]?.path ?? prev.activePath,
        openTabs: placeholders[0]?.path ? [placeholders[0].path] : prev.openTabs,
      }));
      setServerMode('connected');
      appendTerminal('success', `Uploaded ${file.name} into an isolated user workspace with ${data.overview.fileCount} editable file(s).`);
    } catch (error: unknown) {
      setServerMode('blocked');
      appendTerminal('error', `Workspace upload failed: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      if (uploadInputRef.current) uploadInputRef.current.value = '';
    }
  }, [appendTerminal]);

  const loadServerWorkspace = useCallback(async () => {
    setBottomPanel('terminal');
    appendTerminal('input', 'codeengin workspace load');
    if (!activeWorkspaceId) {
      appendTerminal('warning', 'No user workspace loaded. Create a project or upload a repo ZIP first.');
      return;
    }
    try {
      const data = await getCodeEnginApi<{ overview: { tree: CodeEnginApiFileNode[]; fileCount: number } }>(`/api/codeengin/workspace?workspaceId=${encodeURIComponent(activeWorkspaceId)}`);
      const placeholders = filePlaceholdersFromTree(data.overview.tree);
      if (placeholders.length === 0) {
        appendTerminal('warning', 'CodeEngin API returned an empty workspace tree. Keeping local workspace.');
        return;
      }
      setWorkspace((prev: CodeWorkspaceState) => {
        const existing = new Map<string, WorkspaceFile>(prev.files.map((file: WorkspaceFile) => [file.path, file]));
        const files: WorkspaceFile[] = placeholders.map((file: WorkspaceFile) => {
          const loaded = existing.get(file.path);
          return loaded?.content ? { ...loaded, readonly: false } : file;
        });
        const activePath = files.some((file: WorkspaceFile) => file.path === prev.activePath) ? prev.activePath : files[0].path;
        const openTabs = prev.openTabs
          .filter((path: string) => files.some((file: WorkspaceFile) => file.path === path))
          .slice(0, 12)
          .concat(activePath)
          .filter((path: string, index: number, arr: string[]) => arr.indexOf(path) === index);
        return {
          ...prev,
          files: sortFiles(files),
          activePath,
          openTabs,
        };
      });
      setServerMode('connected');
      appendTerminal('success', `Loaded real project tree: ${data.overview.fileCount} editable file(s). Open a file to read its content.`);
    } catch (error: unknown) {
      setServerMode('blocked');
      appendTerminal('error', `Workspace API unavailable: ${error instanceof Error ? error.message : String(error)}`);
    }
  }, [activeWorkspaceId, appendTerminal]);

  const openProjectFile = useCallback(async (path: string) => {
    openFile(path);
    const cached = workspace.files.find((file) => file.path === path);
    if (cached?.content && cached.readonly !== true) return;
    try {
      const data = await postCodeEnginApi<{ file: { path: string; content: string; updatedAt?: string } }>('/api/codeengin/file', { action: 'read', workspaceId: activeWorkspaceId, path });
      const file = makeFile(data.file.path, data.file.content);
      file.dirty = false;
      file.readonly = false;
      file.updatedAt = data.file.updatedAt ?? nowIso();
      setWorkspace((prev) => mergeServerFile(prev, file));
      setServerMode('connected');
      appendTerminal('info', `Opened ${data.file.path} from project filesystem.`);
    } catch (error: unknown) {
      appendTerminal('warning', `Opened ${path} from local workspace only: ${error instanceof Error ? error.message : String(error)}`);
    }
  }, [activeWorkspaceId, appendTerminal, openFile, workspace.files]);

  const closeTab = useCallback((path: string) => {
    setWorkspace((prev) => {
      const openTabs = prev.openTabs.filter((tab) => tab !== path);
      const activePath = prev.activePath === path
        ? openTabs[openTabs.length - 1] ?? prev.files[0]?.path ?? path
        : prev.activePath;
      return { ...prev, openTabs: openTabs.length > 0 ? openTabs : [activePath], activePath };
    });
  }, []);

  const updateActiveFile = useCallback((content: string) => {
    setWorkspace((prev) => ({
      ...prev,
      files: prev.files.map((file) => file.path === prev.activePath
        ? { ...file, content, dirty: true, updatedAt: nowIso() }
        : file),
    }));
  }, []);

  const createFile = useCallback((path: string, content = '') => {
    const cleanPath = path.trim().replace(/^\/+/, '');
    if (!cleanPath) return;
    setWorkspace((prev) => {
      if (prev.files.some((file) => file.path === cleanPath)) {
        return { ...prev, activePath: cleanPath, openTabs: prev.openTabs.includes(cleanPath) ? prev.openTabs : [...prev.openTabs, cleanPath] };
      }
      const file = makeFile(cleanPath, content);
      return {
        ...prev,
        files: sortFiles([...prev.files, file]),
        activePath: cleanPath,
        openTabs: [...prev.openTabs, cleanPath],
      };
    });
    appendTerminal('success', `Created ${cleanPath}`);
  }, [appendTerminal]);

  const deleteFile = useCallback((path: string) => {
    setWorkspace((prev) => {
      if (prev.files.length <= 1) return prev;
      const files = prev.files.filter((file) => file.path !== path);
      const openTabs = prev.openTabs.filter((tab) => tab !== path);
      const activePath = prev.activePath === path ? files[0].path : prev.activePath;
      return { ...prev, files, openTabs: openTabs.length > 0 ? openTabs : [activePath], activePath };
    });
    appendTerminal('warning', `Deleted ${path}`);
  }, [appendTerminal]);

  const saveSnapshot = useCallback((label = 'Manual snapshot') => {
    setWorkspace((prev) => {
      const snapshot: Snapshot = {
        id: safeId('snapshot'),
        label,
        createdAt: nowIso(),
        files: prev.files.map((file) => ({ ...file, dirty: false })),
      };
      return {
        ...prev,
        files: prev.files.map((file) => ({ ...file, dirty: false })),
        snapshots: [snapshot, ...prev.snapshots].slice(0, SNAPSHOT_LIMIT),
      };
    });
    appendTerminal('success', `Snapshot saved: ${label}`);
  }, [appendTerminal]);

  const restoreSnapshot = useCallback((snapshot: Snapshot) => {
    setWorkspace((prev) => ({
      ...prev,
      files: sortFiles(snapshot.files.map((file) => ({ ...file, dirty: false }))),
      activePath: snapshot.files.some((file) => file.path === prev.activePath) ? prev.activePath : snapshot.files[0]?.path ?? prev.activePath,
      openTabs: prev.openTabs.filter((path) => snapshot.files.some((file) => file.path === path)),
    }));
    appendTerminal('warning', `Restored snapshot: ${snapshot.label}`);
  }, [appendTerminal]);

  const runDiagnostics = useCallback(() => {
    const total = diagnostics.length;
    setBottomPanel('problems');
    if (total === 0) {
      appendTerminal('success', 'Diagnostics passed. No structural issues found.');
    } else {
      appendTerminal(errorCount > 0 ? 'error' : 'warning', `Diagnostics found ${errorCount} error(s), ${warningCount} warning(s), ${total - errorCount - warningCount} info item(s).`);
    }
  }, [appendTerminal, diagnostics.length, errorCount, warningCount]);

  const saveActiveFileToServer = useCallback(async () => {
    setBottomPanel('terminal');
    appendTerminal('input', `save ${activeFile.path}`);
    if (!activeWorkspaceId) {
      appendTerminal('warning', 'No user workspace loaded. This file is only saved in local scratch state.');
      return;
    }
    try {
      const data = await postCodeEnginApi<{ file: { path: string; content: string; updatedAt?: string } }>('/api/codeengin/file', {
        action: 'write',
        workspaceId: activeWorkspaceId,
        path: activeFile.path,
        content: activeFile.content,
      });
      const saved = makeFile(data.file.path, data.file.content);
      saved.dirty = false;
      saved.readonly = false;
      saved.updatedAt = data.file.updatedAt ?? nowIso();
      setWorkspace((prev) => mergeServerFile(prev, saved));
      setServerMode('connected');
      appendTerminal('success', `Saved ${data.file.path} to the project filesystem.`);
    } catch (error: unknown) {
      setServerMode('blocked');
      appendTerminal('error', `Save failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }, [activeFile.content, activeFile.path, activeWorkspaceId, appendTerminal]);

  const runServerDiagnostics = useCallback(async () => {
    setBottomPanel('problems');
    appendTerminal('input', 'codeengin diagnostics workspace');
    if (!activeWorkspaceId) {
      appendTerminal('warning', 'No user workspace loaded. Running local diagnostics only.');
      runDiagnostics();
      return;
    }
    try {
      const data = await postCodeEnginApi<{ diagnostics: CodeEnginApiDiagnostic[] }>('/api/codeengin/diagnostics', { scope: 'workspace', workspaceId: activeWorkspaceId });
      const mapped: EditorDiagnostic[] = data.diagnostics.map((diagnostic, index) => ({
        id: diagnostic.id ?? `server:${diagnostic.path}:${diagnostic.line}:${diagnostic.col}:${index}`,
        path: diagnostic.path,
        line: diagnostic.line,
        col: diagnostic.col,
        severity: diagnostic.severity,
        message: `${diagnostic.source ? `[${diagnostic.source}] ` : ''}${diagnostic.message}`,
      }));
      setServerDiagnostics(mapped);
      setServerMode('connected');
      const errors = mapped.filter((diagnostic) => diagnostic.severity === 'error').length;
      const warnings = mapped.filter((diagnostic) => diagnostic.severity === 'warning').length;
      appendTerminal(errors > 0 ? 'error' : warnings > 0 ? 'warning' : 'success', `Server diagnostics returned ${errors} error(s), ${warnings} warning(s), ${mapped.length - errors - warnings} info item(s).`);
    } catch (error: unknown) {
      setServerMode('blocked');
      appendTerminal('error', `Server diagnostics failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }, [activeWorkspaceId, appendTerminal, runDiagnostics]);

  const runServerCommand = useCallback(async (command: 'build' | 'typecheck' | 'test') => {
    setBottomPanel('terminal');
    appendTerminal('input', `pnpm ${command}`);
    if (!activeWorkspaceId) {
      appendTerminal('warning', 'No user workspace loaded. Server commands do not run against DREAMengin source.');
      return;
    }
    try {
      const data = await postCodeEnginApi<{ result: CodeEnginApiRunResult }>('/api/codeengin/run', { workspaceId: activeWorkspaceId, command });
      const output = [data.result.stdout, data.result.stderr].filter(Boolean).join('\n').trim();
      appendTerminal(data.result.code === 0 ? 'success' : 'error', `${data.result.command} ${data.result.args.join(' ')} exited ${data.result.code} in ${data.result.durationMs}ms${data.result.timedOut ? ' (timed out)' : ''}`);
      if (output) appendTerminal(data.result.code === 0 ? 'info' : 'error', output.slice(0, 5000));
      setServerMode('connected');
    } catch (error: unknown) {
      setServerMode('blocked');
      appendTerminal('error', `Runner failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }, [activeWorkspaceId, appendTerminal]);

  const showGitStatus = useCallback(async () => {
    setBottomPanel('terminal');
    appendTerminal('input', 'git status --short --branch');
    if (!activeWorkspaceId) {
      appendTerminal('warning', 'No user workspace loaded. Git status only runs inside uploaded/imported workspaces.');
      return;
    }
    try {
      const data = await postCodeEnginApi<{ result: { code: number; stdout: string; stderr: string } }>('/api/codeengin/git', { workspaceId: activeWorkspaceId, action: 'status' });
      appendTerminal(data.result.code === 0 ? 'info' : 'error', (data.result.stdout || data.result.stderr || 'No git output.').trim());
      setServerMode('connected');
    } catch (error: unknown) {
      setServerMode('blocked');
      appendTerminal('error', `Git status failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }, [activeWorkspaceId, appendTerminal]);

  const buildCheck = useCallback(() => {
    setBottomPanel('terminal');
    appendTerminal('input', 'codeengin build-check');
    if (errorCount > 0) {
      appendTerminal('error', `Build readiness failed: ${errorCount} blocking diagnostic(s).`);
      return;
    }
    appendTerminal('success', `Build readiness passed across ${workspace.files.length} file(s).`);
    appendTerminal('info', `Runtime ready: ${enginReady ? 'yes' : 'initializing'} · Hardware acceleration: ${hardwareAcceleration?.webgpu.ready ? 'available' : 'not reported'}`);
  }, [appendTerminal, enginReady, errorCount, hardwareAcceleration?.webgpu.ready, workspace.files.length]);

  const runActiveFile = useCallback(() => {
    setBottomPanel('terminal');
    appendTerminal('input', `run ${activeFile.path}`);
    const blocking = diagnosticsForFile(activeFile).filter((diagnostic) => diagnostic.severity === 'error');
    if (blocking.length > 0) {
      appendTerminal('error', `Execution blocked by ${blocking.length} structural error(s).`);
      return;
    }
    try {
      if (activeFile.language === 'javascript' || activeFile.language === 'typescript') {
        appendTerminal('success', runJavaScriptSource(activeFile.content, activeFile.language));
        bridge.emit('code', 'code:file-ran', { path: activeFile.path, language: activeFile.language });
        return;
      }
      if (activeFile.language === 'json') {
        JSON.parse(activeFile.content);
        appendTerminal('success', 'JSON parsed successfully.');
        return;
      }
      appendTerminal('warning', `${activeFile.language} execution needs a server or WASM sandbox. Diagnostics still run locally.`);
    } catch (err: unknown) {
      appendTerminal('error', err instanceof Error ? err.message : String(err));
    }
  }, [activeFile, appendTerminal]);

  const formatActiveFile = useCallback(() => {
    let next = activeFile.content
      .split('\n')
      .map((line) => line.trimEnd())
      .join('\n');
    if (activeFile.language === 'json') {
      try {
        next = `${JSON.stringify(JSON.parse(next), null, 2)}\n`;
      } catch {
        appendTerminal('error', 'Cannot format invalid JSON.');
        return;
      }
    }
    updateActiveFile(next.endsWith('\n') ? next : `${next}\n`);
    appendTerminal('success', `Formatted ${activeFile.path}`);
  }, [activeFile.content, activeFile.language, activeFile.path, appendTerminal, updateActiveFile]);

  const deployToGame = useCallback(() => {
    recordForgeTransfer('code', 'games', 'script', `CodeEngin ${activeFile.path} → GameEngin`);
    forgeRecord(`Deployed ${activeFile.path} to GameEngin`);
    bridge.emit('games', 'games:script-deploy-requested', {
      scriptId: safeId('script'),
      timestamp: nowIso(),
      path: activeFile.path,
      language: activeFile.language,
      code: activeFile.content,
    });
    appendTerminal('success', `Sent ${activeFile.path} to GameEngin.`);
  }, [activeFile.content, activeFile.language, activeFile.path, appendTerminal, forgeRecord]);

  const publishToContent = useCallback(() => {
    recordForgeTransfer('code', 'create', 'workspace', 'CodeEngin workspace → ContentEngin');
    forgeRecord('Published CodeEngin workspace to ContentEngin');
    bridge.emit('create', 'create:notebook-publish-requested', {
      workspaceId: safeId('workspace'),
      timestamp: nowIso(),
      files: workspace.files.map((file) => ({ path: file.path, language: file.language, lines: file.content.split('\n').length })),
    });
    appendTerminal('success', 'Workspace summary sent to ContentEngin.');
  }, [appendTerminal, forgeRecord, workspace.files]);

  const createComponent = useCallback(() => {
    const componentName = `DreamModule${workspace.files.length + 1}`;
    createFile(`components/${componentName}.tsx`, `interface ${componentName}Props {\n  title: string;\n}\n\nexport default function ${componentName}({ title }: ${componentName}Props) {\n  return <section>{title}</section>;\n}\n`);
  }, [createFile, workspace.files.length]);

  const runCommand = useCallback((kind: CommandKind) => {
    setCommandOpen(false);
    setCommandQuery('');
    if (kind === 'load') void loadServerWorkspace();
    if (kind === 'save') void saveActiveFileToServer();
    if (kind === 'check') runDiagnostics();
    if (kind === 'server-check') void runServerDiagnostics();
    if (kind === 'build') void runServerCommand('build');
    if (kind === 'typecheck') void runServerCommand('typecheck');
    if (kind === 'test') void runServerCommand('test');
    if (kind === 'run') runActiveFile();
    if (kind === 'format') formatActiveFile();
    if (kind === 'snapshot') saveSnapshot('Command snapshot');
    if (kind === 'git') void showGitStatus();
    if (kind === 'game') deployToGame();
    if (kind === 'content') publishToContent();
    if (kind === 'component') createComponent();
  }, [createComponent, deployToGame, formatActiveFile, loadServerWorkspace, publishToContent, runActiveFile, runDiagnostics, runServerCommand, runServerDiagnostics, saveActiveFileToServer, saveSnapshot, showGitStatus]);

  const handleAiAssist = useCallback(async () => {
    const prompt = assistPrompt.trim();
    if (!prompt) return;
    setAssistLoading(true);
    setAssistResponse('');
    setBottomPanel('assist');
    try {
      const response = await callEamsAssist(prompt, activeFile.content, activeFile.language);
      setAssistResponse(response);
      appendTerminal('info', 'AI assist returned a response.');
    } finally {
      setAssistLoading(false);
    }
  }, [activeFile.content, activeFile.language, appendTerminal, assistPrompt]);

  const insertDatasetCell = useCallback(() => {
    if (!datasetPrompt) return;
    createFile(`lab/dataset-${datasetPrompt}.ts`, `export const labDatasetId = '${datasetPrompt}';\n\nexport async function loadDataset() {\n  return { id: labDatasetId, source: 'LabEngin' };\n}\n`);
    setDatasetDismissed(datasetPrompt);
  }, [createFile, datasetPrompt]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const meta = event.metaKey || event.ctrlKey;
      if (meta && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen(true);
      }
      if (meta && event.key.toLowerCase() === 's') {
        event.preventDefault();
        void saveActiveFileToServer();
      }
      if (meta && event.key === 'Enter') {
        event.preventDefault();
        runActiveFile();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [runActiveFile, saveActiveFileToServer]);

  const filteredCommands = COMMANDS.filter((command) => {
    const query = commandQuery.trim().toLowerCase();
    if (!query) return true;
    return command.label.toLowerCase().includes(query) || command.hint.toLowerCase().includes(query);
  });

  const statusPillStyle = (bad: boolean): CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    borderRadius: 999,
    padding: '5px 9px',
    fontSize: 11,
    fontWeight: 800,
    background: bad ? 'rgba(239,68,68,0.10)' : 'rgba(34,197,94,0.11)',
    color: bad ? '#b91c1c' : '#15803d',
    border: bad ? '1px solid rgba(239,68,68,0.18)' : '1px solid rgba(34,197,94,0.20)',
  });

  return (
    <ArtifactSlot artifactId="engin:code">
      <div style={SHELL}>
        <header style={{ position: 'sticky', top: 0, zIndex: 40, borderBottom: '1px solid rgba(82,113,157,0.20)', background: 'rgba(232,239,249,0.92)', backdropFilter: 'blur(18px)' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <button type="button" onClick={onBack} aria-label="Back" style={{ border: '1px solid rgba(82,113,157,0.20)', background: 'rgba(255,255,255,0.55)', borderRadius: 12, width: 38, height: 38, display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
              <ArrowLeft size={17} />
            </button>
            <div style={{ width: 34, height: 34, borderRadius: 12, background: `linear-gradient(135deg, ${ACCENT}, rgba(17,24,39,0.82))`, display: 'grid', placeItems: 'center', color: '#fff' }}>
              <Code2 size={18} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: '-0.03em', color: '#172033' }}>CodeEngin</div>
              <div style={{ fontSize: 11, color: 'rgba(30,41,59,0.68)', fontWeight: 700 }}>User workspace IDE · Upload/create project · Cross-Engin handoff</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <span style={statusPillStyle(errorCount > 0)}>{errorCount > 0 ? <XCircle size={13} /> : <CheckCircle size={13} />}{errorCount} errors</span>
              <span style={statusPillStyle(warningCount > 0)}><Shield size={13} />{warningCount} warnings</span>
              <span style={{ borderRadius: 999, padding: '5px 9px', fontSize: 11, fontWeight: 800, background: serverMode === 'connected' ? 'rgba(34,197,94,0.11)' : serverMode === 'blocked' ? 'rgba(239,68,68,0.10)' : `${ACCENT}12`, color: serverMode === 'connected' ? '#15803d' : serverMode === 'blocked' ? '#b91c1c' : ACCENT, border: serverMode === 'connected' ? '1px solid rgba(34,197,94,0.20)' : serverMode === 'blocked' ? '1px solid rgba(239,68,68,0.18)' : `1px solid ${ACCENT}24` }}>{serverMode === 'connected' ? 'runtime connected' : serverMode === 'blocked' ? 'runtime blocked' : 'local mode'}</span>
              <span style={{ borderRadius: 999, padding: '5px 9px', fontSize: 11, fontWeight: 800, background: `${ACCENT}16`, color: ACCENT, border: `1px solid ${ACCENT}30` }}>{dirtyCount} dirty</span>
              <button type="button" onClick={() => void loadServerWorkspace()} style={{ border: `1px solid ${ACCENT}38`, background: 'rgba(255,255,255,0.62)', color: ACCENT, borderRadius: 999, padding: '8px 12px', fontWeight: 900, fontSize: 12, cursor: 'pointer' }}>Load repo</button>
              <button type="button" onClick={() => void saveActiveFileToServer()} style={{ border: `1px solid ${ACCENT}38`, background: `${ACCENT}14`, color: ACCENT, borderRadius: 999, padding: '8px 12px', fontWeight: 900, fontSize: 12, cursor: 'pointer' }}>Save file</button>
              <button type="button" onClick={() => setCommandOpen(true)} style={{ border: `1px solid ${ACCENT}38`, background: `${ACCENT}14`, color: ACCENT, borderRadius: 999, padding: '8px 12px', fontWeight: 900, fontSize: 12, cursor: 'pointer' }}>⌘K Command</button>
            </div>
          </div>
        </header>

        <main style={{ maxWidth: 1440, margin: '0 auto', padding: 16 }}>
          {datasetPrompt && (
            <section style={{ ...PANEL, padding: 14, marginBottom: 14, display: 'flex', gap: 12, alignItems: 'center', borderColor: 'rgba(16,185,129,0.28)' }}>
              <div style={{ width: 36, height: 36, borderRadius: 12, background: 'rgba(16,185,129,0.12)', display: 'grid', placeItems: 'center' }}>🔬</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 900, color: '#0f172a' }}>LabEngin exported a dataset</div>
                <div style={{ fontSize: 12, color: 'rgba(30,41,59,0.68)' }}>Dataset #{datasetPrompt} can be turned into a typed loader file.</div>
              </div>
              <button type="button" onClick={insertDatasetCell} style={{ border: 'none', borderRadius: 10, background: '#059669', color: '#fff', padding: '9px 12px', fontWeight: 900, cursor: 'pointer' }}>Create loader</button>
              <button type="button" onClick={() => setDatasetDismissed(datasetPrompt)} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}><X size={16} /></button>
            </section>
          )}

          <section style={{ display: 'grid', gridTemplateColumns: '280px minmax(0, 1fr) 320px', gap: 14, alignItems: 'stretch' }}>
            <aside style={{ ...PANEL, overflow: 'hidden', minHeight: 680 }}>
              <div style={{ padding: 14, borderBottom: '1px solid rgba(82,113,157,0.16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <Clipboard size={15} />
                  <strong style={{ fontSize: 13 }}>Explorer</strong>
                  <span style={{ marginLeft: 'auto', fontSize: 11, color: 'rgba(30,41,59,0.60)', fontWeight: 800 }}>{workspace.files.length}</span>
                </div>
                <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search files or code" style={{ width: '100%', border: '1px solid rgba(82,113,157,0.22)', borderRadius: 10, padding: '9px 10px', background: 'rgba(255,255,255,0.65)', outline: 'none', fontSize: 12 }} />
                <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                  <input value={newPath} onChange={(event) => setNewPath(event.target.value)} placeholder="path/to/file.ts" style={{ flex: 1, minWidth: 0, border: '1px solid rgba(82,113,157,0.18)', borderRadius: 9, padding: '7px 8px', fontSize: 11 }} />
                  <button type="button" onClick={() => createFile(newPath)} style={{ width: 34, border: 'none', borderRadius: 9, background: ACCENT, color: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer' }}><Plus size={14} /></button>
                </div>
              </div>
              <div style={{ maxHeight: 545, overflow: 'auto', padding: '8px 8px 14px' }}>
                {groupFiles(visibleFiles).map(([folder, files]) => (
                  <div key={folder} style={{ marginBottom: 10 }}>
                    <div style={{ padding: '6px 7px', fontSize: 10, fontWeight: 900, color: 'rgba(30,41,59,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{folder}</div>
                    {files.map((file) => {
                      const fileDiagnostics = diagnostics.filter((diagnostic) => diagnostic.path === file.path);
                      const hasError = fileDiagnostics.some((diagnostic) => diagnostic.severity === 'error');
                      return (
                        <button key={file.path} type="button" onClick={() => void openProjectFile(file.path)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, border: workspace.activePath === file.path ? `1px solid ${ACCENT}45` : '1px solid transparent', borderRadius: 10, padding: '8px 9px', marginBottom: 3, background: workspace.activePath === file.path ? `${ACCENT}12` : 'transparent', cursor: 'pointer', textAlign: 'left' }}>
                          <span style={{ fontSize: 13 }}>{file.language === 'json' ? '{}' : file.language === 'css' ? '#' : file.language === 'markdown' ? 'md' : '<>'}</span>
                          <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: 12, fontWeight: workspace.activePath === file.path ? 900 : 700, color: '#1e293b' }}>{basename(file.path)}</span>
                          {file.dirty && <span style={{ color: ACCENT, fontSize: 16, lineHeight: 0 }}>•</span>}
                          {hasError && <XCircle size={13} color="#dc2626" />}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </aside>

            <section style={{ ...PANEL, overflow: 'hidden', minHeight: 680, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, minHeight: 45, padding: '7px 10px', borderBottom: '1px solid rgba(82,113,157,0.16)', overflowX: 'auto' }}>
                {workspace.openTabs.map((path) => {
                  const file = workspace.files.find((candidate) => candidate.path === path);
                  if (!file) return null;
                  return (
                    <button key={path} type="button" onClick={() => void openProjectFile(path)} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, border: workspace.activePath === path ? `1px solid ${ACCENT}42` : '1px solid rgba(82,113,157,0.16)', borderRadius: 10, padding: '7px 8px', background: workspace.activePath === path ? '#fff' : 'rgba(255,255,255,0.45)', fontSize: 12, fontWeight: 800, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                      {basename(path)} {file.dirty && <span style={{ color: ACCENT }}>•</span>}
                      <span role="button" tabIndex={0} onClick={(event) => { event.stopPropagation(); closeTab(path); }} onKeyDown={(event) => { if (event.key === 'Enter') closeTab(path); }} style={{ display: 'grid', placeItems: 'center' }}><X size={12} /></span>
                    </button>
                  );
                })}
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <button type="button" onClick={() => setFontSize((size) => Math.max(FONT_MIN, size - 1))} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}><ZoomOut size={15} /></button>
                  <span style={{ fontSize: 11, fontWeight: 900 }}>{fontSize}px</span>
                  <button type="button" onClick={() => setFontSize((size) => Math.min(FONT_MAX, size + 1))} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}><ZoomIn size={15} /></button>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '48px minmax(0, 1fr)', flex: 1, minHeight: 0, ...DARK_PANEL }}>
                <pre aria-hidden="true" style={{ margin: 0, padding: '14px 8px', textAlign: 'right', color: '#64748b', borderRight: '1px solid rgba(148,163,184,0.14)', overflow: 'hidden', userSelect: 'none', fontSize, lineHeight: 1.55, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' }}>
                  {activeFile.content.split('\n').map((_, index) => index + 1).join('\n')}
                </pre>
                <textarea ref={editorRef} value={activeFile.content} onChange={(event) => updateActiveFile(event.target.value)} spellCheck={false} style={{ width: '100%', minHeight: 430, resize: 'none', border: 'none', outline: 'none', padding: 14, background: '#111827', color: '#e5e7eb', fontSize, lineHeight: 1.55, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', tabSize: 2 }} />
              </div>

              <div style={{ borderTop: '1px solid rgba(82,113,157,0.16)', background: 'rgba(255,255,255,0.58)' }}>
                <div style={{ display: 'flex', gap: 6, padding: 8, overflowX: 'auto', alignItems: 'center' }}>
                  {(['terminal', 'problems', 'outline', 'diff', 'assist'] as BottomPanel[]).map((panel) => (
                    <button key={panel} type="button" onClick={() => setBottomPanel(panel)} style={{ border: bottomPanel === panel ? `1px solid ${ACCENT}42` : '1px solid rgba(82,113,157,0.16)', background: bottomPanel === panel ? `${ACCENT}12` : 'rgba(255,255,255,0.55)', color: bottomPanel === panel ? ACCENT : '#334155', borderRadius: 999, padding: '6px 10px', fontWeight: 900, fontSize: 11, textTransform: 'capitalize', cursor: 'pointer' }}>{panel}</button>
                  ))}
                  <button type="button" onClick={runActiveFile} style={{ marginLeft: 'auto', border: 'none', background: ACCENT, color: '#fff', borderRadius: 10, padding: '8px 11px', fontWeight: 900, fontSize: 12, display: 'inline-flex', gap: 6, alignItems: 'center', cursor: 'pointer' }}><Zap size={14} />Run</button>
                </div>
                <div style={{ minHeight: 170, maxHeight: 220, overflow: 'auto', padding: 12, borderTop: '1px solid rgba(82,113,157,0.10)' }}>
                  {bottomPanel === 'terminal' && (
                    <div style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: 12 }}>
                      {terminal.map((line) => (
                        <div key={line.id} style={{ color: line.kind === 'error' ? '#dc2626' : line.kind === 'success' ? '#15803d' : line.kind === 'warning' ? '#b45309' : line.kind === 'input' ? ACCENT : '#334155', marginBottom: 5 }}>
                          <span style={{ opacity: 0.55 }}>[{line.timestamp}]</span> {line.kind === 'input' ? '$ ' : ''}{line.text}
                        </div>
                      ))}
                    </div>
                  )}
                  {bottomPanel === 'problems' && (
                    <div>
                      {(activeDiagnostics.length > 0 ? activeDiagnostics : diagnostics).length === 0 ? (
                        <div style={{ color: '#15803d', fontWeight: 900, fontSize: 13 }}>No problems found.</div>
                      ) : (activeDiagnostics.length > 0 ? activeDiagnostics : diagnostics).slice(0, 80).map((diagnostic) => (
                        <button key={diagnostic.id} type="button" onClick={() => void openProjectFile(diagnostic.path)} style={{ width: '100%', display: 'flex', gap: 8, alignItems: 'flex-start', border: 'none', borderBottom: '1px solid rgba(82,113,157,0.10)', background: 'transparent', padding: '8px 0', textAlign: 'left', cursor: 'pointer' }}>
                          {diagnostic.severity === 'error' ? <XCircle size={14} color="#dc2626" /> : diagnostic.severity === 'warning' ? <Bug size={14} color="#b45309" /> : <ListChecks size={14} color={ACCENT} />}
                          <span style={{ flex: 1, fontSize: 12 }}><strong>{diagnostic.path}:{diagnostic.line}</strong> — {diagnostic.message}</span>
                        </button>
                      ))}
                    </div>
                  )}
                  {bottomPanel === 'outline' && (
                    <div>
                      {activeSymbols.length === 0 ? <div style={{ color: 'rgba(30,41,59,0.62)', fontSize: 12 }}>No symbols detected in this file.</div> : activeSymbols.map((symbol, index) => (
                        <div key={`${symbol.name}-${symbol.line}-${index}`} style={{ display: 'flex', gap: 8, padding: '6px 0', fontSize: 12, borderBottom: '1px solid rgba(82,113,157,0.10)' }}>
                          <span style={{ width: 74, color: ACCENT, fontWeight: 900 }}>{symbol.kind}</span>
                          <strong>{symbol.name}</strong>
                          <span style={{ marginLeft: 'auto', color: 'rgba(30,41,59,0.55)' }}>L{symbol.line}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {bottomPanel === 'diff' && (
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontSize: 12, lineHeight: 1.55, color: '#334155' }}>{diffLines.join('\n')}</pre>
                  )}
                  {bottomPanel === 'assist' && (
                    <div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <input value={assistPrompt} onChange={(event) => setAssistPrompt(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') void handleAiAssist(); }} placeholder="Ask Dr. Eams to explain, refactor, or generate a patch" style={{ flex: 1, border: '1px solid rgba(82,113,157,0.20)', borderRadius: 10, padding: '9px 10px', fontSize: 12 }} />
                        <button type="button" onClick={() => void handleAiAssist()} disabled={assistLoading || !assistPrompt.trim()} style={{ border: 'none', borderRadius: 10, padding: '9px 12px', background: assistLoading || !assistPrompt.trim() ? 'rgba(82,113,157,0.16)' : ACCENT, color: assistLoading || !assistPrompt.trim() ? 'rgba(30,41,59,0.55)' : '#fff', fontWeight: 900, cursor: assistLoading || !assistPrompt.trim() ? 'not-allowed' : 'pointer' }}>{assistLoading ? <Loader2 size={14} className="animate-spin" /> : 'Ask'}</button>
                      </div>
                      {assistResponse && <pre style={{ margin: '10px 0 0', whiteSpace: 'pre-wrap', background: 'rgba(59,125,216,0.08)', border: `1px solid ${ACCENT}20`, borderRadius: 12, padding: 12, fontSize: 12, lineHeight: 1.55 }}>{assistResponse}</pre>}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <aside style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <section style={{ ...PANEL, padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><Terminal size={15} /><strong style={{ fontSize: 13 }}>Actions</strong></div>
                <div style={{ display: 'grid', gap: 8 }}>
                  <button type="button" onClick={runDiagnostics} style={actionButtonStyle()}><ListChecks size={14} />Run diagnostics</button>
                  <button type="button" onClick={buildCheck} style={actionButtonStyle()}><CheckCircle size={14} />Build readiness</button>
                  <button type="button" onClick={formatActiveFile} style={actionButtonStyle()}><Code2 size={14} />Format active file</button>
                  <button type="button" onClick={() => saveSnapshot('Manual save')} style={actionButtonStyle()}><Copy size={14} />Save snapshot</button>
                  <button type="button" onClick={deployToGame} style={actionButtonStyle()}><Zap size={14} />Send to GameEngin</button>
                  <button type="button" onClick={publishToContent} style={actionButtonStyle()}><Clipboard size={14} />Publish to ContentEngin</button>
                </div>
              </section>

              <section style={{ ...PANEL, padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><Code2 size={15} /><strong style={{ fontSize: 13 }}>Active File</strong></div>
                <div style={{ fontSize: 12, color: '#334155', display: 'grid', gap: 7 }}>
                  <div><strong>Path:</strong> {activeFile.path}</div>
                  <div><strong>Language:</strong> {activeFile.language}</div>
                  <div><strong>Lines:</strong> {activeFile.content.split('\n').length}</div>
                  <div><strong>Symbols:</strong> {activeSymbols.length}</div>
                  <div><strong>Status:</strong> {activeFile.dirty ? 'Unsaved changes' : 'Snapshot clean'}</div>
                  <div><strong>Workspace:</strong> {workspace.workspaceName ?? 'local scratch only'}</div>
                </div>
                <button type="button" onClick={() => deleteFile(activeFile.path)} disabled={workspace.files.length <= 1} style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 6, border: '1px solid rgba(239,68,68,0.20)', background: 'rgba(239,68,68,0.08)', color: '#b91c1c', borderRadius: 10, padding: '8px 10px', fontWeight: 900, fontSize: 12, cursor: workspace.files.length <= 1 ? 'not-allowed' : 'pointer' }}><Trash2 size={13} />Delete file</button>
              </section>

              <section style={{ ...PANEL, padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><Copy size={15} /><strong style={{ fontSize: 13 }}>Snapshots</strong></div>
                {workspace.snapshots.length === 0 ? (
                  <div style={{ fontSize: 12, color: 'rgba(30,41,59,0.62)' }}>No snapshots yet.</div>
                ) : workspace.snapshots.map((snapshot) => (
                  <button key={snapshot.id} type="button" onClick={() => restoreSnapshot(snapshot)} style={{ width: '100%', border: '1px solid rgba(82,113,157,0.14)', borderRadius: 10, padding: 9, marginBottom: 7, background: 'rgba(255,255,255,0.48)', textAlign: 'left', cursor: 'pointer' }}>
                    <div style={{ fontSize: 12, fontWeight: 900 }}>{snapshot.label}</div>
                    <div style={{ fontSize: 10, color: 'rgba(30,41,59,0.55)' }}>{new Date(snapshot.createdAt).toLocaleString()} · {snapshot.files.length} files</div>
                  </button>
                ))}
              </section>

              <section style={{ ...PANEL, padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><Bot size={15} /><strong style={{ fontSize: 13 }}>Agent</strong></div>
                <AgentPanel />
              </section>

              <section style={{ ...PANEL, padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><Shield size={15} /><strong style={{ fontSize: 13 }}>Runtime Channels</strong></div>
                <CrossEnginStatusPanel excludeChannel="code" />
                <div style={{ marginTop: 10, fontSize: 11, color: 'rgba(30,41,59,0.58)' }}>
                  Rule-set lifecycle: {enginState.lifecycle ?? 'unknown'} · Runtime: {enginReady ? 'ready' : 'starting'}
                </div>
              </section>
            </aside>
          </section>
        </main>

        {commandOpen && (
          <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(15,23,42,0.44)', display: 'grid', placeItems: 'start center', paddingTop: '10vh' }} onClick={() => setCommandOpen(false)}>
            <div style={{ width: 'min(720px, calc(100vw - 28px))', ...PANEL, overflow: 'hidden', background: '#f8fafc' }} onClick={(event) => event.stopPropagation()}>
              <div style={{ padding: 14, borderBottom: '1px solid rgba(82,113,157,0.14)' }}>
                <input autoFocus value={commandQuery} onChange={(event) => setCommandQuery(event.target.value)} placeholder="Run command or search action" style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', fontSize: 16, fontWeight: 800, color: '#0f172a' }} />
              </div>
              <div style={{ maxHeight: 420, overflow: 'auto', padding: 8 }}>
                {filteredCommands.map((command) => (
                  <button key={command.id} type="button" onClick={() => runCommand(command.id)} style={{ width: '100%', border: 'none', borderRadius: 12, background: 'transparent', padding: 12, textAlign: 'left', cursor: 'pointer' }}>
                    <div style={{ fontSize: 13, fontWeight: 900, color: '#172033' }}>{command.label}</div>
                    <div style={{ fontSize: 11, color: 'rgba(30,41,59,0.62)', marginTop: 3 }}>{command.hint}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </ArtifactSlot>
  );
}

function actionButtonStyle(): CSSProperties {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    border: '1px solid rgba(82,113,157,0.16)',
    background: 'rgba(255,255,255,0.62)',
    color: '#172033',
    borderRadius: 11,
    padding: '9px 10px',
    fontWeight: 900,
    fontSize: 12,
    cursor: 'pointer',
    textAlign: 'left',
  };
}
