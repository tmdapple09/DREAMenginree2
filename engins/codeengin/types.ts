export interface CodeEnginFileNode {
  name: string;
  type: 'file' | 'directory';
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
  sha256: string;
}

export interface CodeEnginDiagnostic {
  id: string;
  path: string;
  line: number;
  col: number;
  severity: 'error' | 'warning' | 'info';
  message: string;
  source: string;
}

export interface CodeEnginSymbol {
  name: string;
  kind: string;
  line: number;
  col: number;
  path?: string;
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

export interface CodeEnginWorkspaceMeta {
  id: string;
  ownerId: string;
  name: string;
  root: string;
  createdAt: string;
  updatedAt: string;
}

export interface CodeEnginWorkspaceOverview {
  workspace: Pick<CodeEnginWorkspaceMeta, 'id' | 'name' | 'createdAt' | 'updatedAt'>;
  tree: CodeEnginFileNode[];
  fileCount: number;
  generatedAt: string;
}
