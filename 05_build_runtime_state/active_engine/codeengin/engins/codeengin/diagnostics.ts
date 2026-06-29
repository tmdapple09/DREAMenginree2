
import path from 'path';
import { parseCode } from '@/engins/codeengin-ui/core/parser';
import { listEditableFiles, readProjectFile } from './workspaceStore';
import type { CodeEnginDiagnostic } from './types';

const MAX_DIAGNOSTIC_FILES = Number(process.env.CODEENGIN_MAX_DIAGNOSTIC_FILES ?? 600);
const MAX_DIAGNOSTICS = Number(process.env.CODEENGIN_MAX_DIAGNOSTICS ?? 1200);

function languageFromPath(filePath: string): string {
  const ext = path.extname(filePath).slice(1).toLowerCase();
  if (ext === 'ts' || ext === 'tsx') return 'typescript';
  if (ext === 'js' || ext === 'jsx' || ext === 'mjs' || ext === 'cjs') return 'javascript';
  if (ext === 'json') return 'json';
  if (ext === 'py') return 'python';
  if (ext === 'sh') return 'bash';
  if (ext === 'md' || ext === 'mdx') return 'markdown';
  return ext || 'text';
}

function pushDiagnostic(diagnostics: CodeEnginDiagnostic[], diagnostic: CodeEnginDiagnostic): void {
  if (diagnostics.length < MAX_DIAGNOSTICS) diagnostics.push(diagnostic);
}

export async function diagnoseFile(workspaceId: string, ownerId: string, filePath: string): Promise<CodeEnginDiagnostic[]> {
  const file = await readProjectFile(workspaceId, ownerId, filePath);
  const language = languageFromPath(file.path);
  const parsed = parseCode(file.content, language);
  const diagnostics: CodeEnginDiagnostic[] = [];
  parsed.errors.forEach((error, index) => pushDiagnostic(diagnostics, { id: `${file.path}:parser-error:${error.line}:${error.col}:${index}`, path: file.path, line: error.line, col: error.col, severity: 'error', message: error.message, source: 'parser' }));
  parsed.warnings.forEach((warning, index) => pushDiagnostic(diagnostics, { id: `${file.path}:parser-warning:${warning.line}:${warning.col}:${index}`, path: file.path, line: warning.line, col: warning.col, severity: 'warning', message: warning.message, source: 'parser' }));
  file.content.split('\n').forEach((line, index) => {
    if (diagnostics.length >= MAX_DIAGNOSTICS) return;
    if (/\bany\b/.test(line) && language === 'typescript') pushDiagnostic(diagnostics, { id: `${file.path}:any:${index}`, path: file.path, line: index + 1, col: Math.max(1, line.indexOf('any') + 1), severity: 'warning', message: 'Explicit any found. Keep it only at deliberate untyped boundaries.', source: 'codeengin' });
    if (/console\.log\s*\(/.test(line)) pushDiagnostic(diagnostics, { id: `${file.path}:console:${index}`, path: file.path, line: index + 1, col: Math.max(1, line.indexOf('console.log') + 1), severity: 'info', message: 'Console logging is useful while building, but should not leak into polished user flows.', source: 'codeengin' });
    if (/\b(eval|Function)\s*\(/.test(line)) pushDiagnostic(diagnostics, { id: `${file.path}:dynamic-code:${index}`, path: file.path, line: index + 1, col: 1, severity: 'error', message: 'Dynamic code execution marker found. CodeEngin remains simulation-only.', source: 'codeengin' });
  });
  return diagnostics;
}

export async function diagnoseWorkspace(workspaceId: string, ownerId: string, startPath = ''): Promise<CodeEnginDiagnostic[]> {
  const files = (await listEditableFiles(workspaceId, ownerId, startPath)).slice(0, MAX_DIAGNOSTIC_FILES);
  const diagnostics: CodeEnginDiagnostic[] = [];
  for (const filePath of files) {
    if (diagnostics.length >= MAX_DIAGNOSTICS) break;
    try { diagnostics.push(...await diagnoseFile(workspaceId, ownerId, filePath)); }
    catch (error: unknown) { pushDiagnostic(diagnostics, { id: `${filePath}:diagnostic-read-error`, path: filePath, line: 1, col: 1, severity: 'warning', message: error instanceof Error ? error.message : String(error), source: 'codeengin' }); }
  }
  return diagnostics.sort((a, b) => {
    const rank = { error: 0, warning: 1, info: 2 } as const;
    const bySeverity = rank[a.severity] - rank[b.severity];
    if (bySeverity !== 0) return bySeverity;
    const byPath = a.path.localeCompare(b.path);
    if (byPath !== 0) return byPath;
    return a.line - b.line;
  });
}
