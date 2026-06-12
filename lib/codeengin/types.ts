export type CodeEnginNodeType = 'file' | 'directory';

export interface CodeEnginFileNode {
  name: string;
  type: CodeEnginNodeType;
  path: string;
  sizeBytes?: number;
  updatedAt?: string;
  children?: CodeEnginFileNode[];
}

export interface CodeEnginFileRecord {
  path: string;
  content: string;
  sizeBytes: number;
  updatedAt: string;
  sha256?: string;
}

export interface CodeEnginDiagnostic {
  id: string;
  path: string;
  line: number;
  col: number;
  severity: 'error' | 'warning' | 'info';
  message: string;
  source: 'parser' | 'typescript' | 'eslint' | 'runtime' | 'codeengin';
}

export interface CodeEnginSymbol {
  kind: string;
  name: string;
  line: number;
  path: string;
}

export interface CodeEnginGraphNode {
  path: string;
  imports: string[];
  exports: string[];
  symbols: CodeEnginSymbol[];
}

export interface CodeEnginGraphEdge {
  from: string;
  to: string | null;
  specifier: string;
  resolved: boolean;
  type: 'internal' | 'package';
}

export interface CodeEnginProjectGraph {
  nodes: CodeEnginGraphNode[];
  edges: CodeEnginGraphEdge[];
  unresolved: CodeEnginGraphEdge[];
}

export interface CodeEnginCommandResult {
  command: string;
  args: string[];
  code: number;
  stdout: string;
  stderr: string;
  durationMs: number;
  timedOut: boolean;
}

export interface CodeEnginSearchHit {
  path: string;
  line: number;
  col: number;
  preview: string;
}

export interface CodeEnginWorkspaceOverview {
  root: string;
  tree: CodeEnginFileNode[];
  fileCount: number;
  generatedAt: string;
}
