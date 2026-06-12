import path from 'path';
import { parseCode } from '@/engins/CodeEngin/core/parser';
import { readProjectFile, listEditableFiles } from './workspaceStore';
import type { CodeEnginGraphEdge, CodeEnginGraphNode, CodeEnginProjectGraph, CodeEnginSymbol } from './types';

const IMPORT_FROM_RE = /(?:import\s+(?:type\s+)?[\s\S]*?\s+from\s+|export\s+(?:type\s+)?[\s\S]*?\s+from\s+)["']([^"']+)["']/g;
const SIDE_EFFECT_RE = /import\s+["']([^"']+)["']/g;
const DYNAMIC_RE = /import\s*\(\s*["']([^"']+)["']\s*\)/g;
const REQUIRE_RE = /require\s*\(\s*["']([^"']+)["']\s*\)/g;
const EXPORT_RE = /export\s+(?:default\s+)?(?:async\s+)?(?:function|class|const|let|var|type|interface|enum)\s+([A-Za-z_$][A-Za-z0-9_$]*)/g;

function languageFromPath(filePath: string): string {
  const ext = path.extname(filePath).slice(1).toLowerCase();
  if (ext === 'tsx' || ext === 'ts') return 'typescript';
  if (ext === 'jsx' || ext === 'js' || ext === 'mjs' || ext === 'cjs') return 'javascript';
  if (ext === 'json') return 'json';
  if (ext === 'css') return 'css';
  if (ext === 'py') return 'python';
  if (ext === 'sh') return 'bash';
  return ext || 'text';
}

export function extractImports(source: string): string[] {
  const specs = new Set<string>();
  for (const regex of [IMPORT_FROM_RE, SIDE_EFFECT_RE, DYNAMIC_RE, REQUIRE_RE]) {
    regex.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(source))) specs.add(match[1]);
  }
  return [...specs].sort();
}

function extractExports(source: string): string[] {
  const exports = new Set<string>();
  EXPORT_RE.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = EXPORT_RE.exec(source))) exports.add(match[1]);
  if (/export\s+default\b/.test(source)) exports.add('default');
  return [...exports].sort();
}

function resolveInternal(fromPath: string, specifier: string, fileSet: Set<string>): string | null {
  if (!specifier.startsWith('.') && !specifier.startsWith('@/')) return null;
  const base = specifier.startsWith('@/') ? specifier.slice(2) : path.posix.normalize(path.posix.join(path.posix.dirname(fromPath), specifier));
  const candidates = [base, `${base}.ts`, `${base}.tsx`, `${base}.js`, `${base}.jsx`, `${base}.mjs`, `${base}.cjs`, `${base}.json`, `${base}/index.ts`, `${base}/index.tsx`, `${base}/index.js`, `${base}/index.jsx`];
  return candidates.find((candidate) => fileSet.has(candidate)) ?? null;
}

export async function buildProjectGraph(workspaceId: string, ownerId: string, startPath = ''): Promise<CodeEnginProjectGraph> {
  const files = await listEditableFiles(workspaceId, ownerId, startPath);
  const fileSet = new Set(files);
  const nodes: CodeEnginGraphNode[] = [];
  const edges: CodeEnginGraphEdge[] = [];
  for (const filePath of files) {
    const file = await readProjectFile(workspaceId, ownerId, filePath).catch(() => null);
    if (!file) continue;
    const imports = extractImports(file.content);
    const parsed = parseCode(file.content, languageFromPath(filePath));
    const symbols: CodeEnginSymbol[] = parsed.symbols.map((symbol) => ({ ...symbol, path: filePath }));
    nodes.push({ path: filePath, imports, exports: extractExports(file.content), symbols });
    for (const specifier of imports) {
      const isInternal = specifier.startsWith('.') || specifier.startsWith('@/');
      const resolved = isInternal ? resolveInternal(filePath, specifier, fileSet) : null;
      edges.push({ from: filePath, to: resolved, specifier, resolved: !isInternal || Boolean(resolved), type: isInternal ? 'internal' : 'package' });
    }
  }
  return { nodes, edges, unresolved: edges.filter((edge) => edge.type === 'internal' && !edge.resolved) };
}
