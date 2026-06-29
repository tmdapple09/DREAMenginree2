
import { listEditableFiles, readProjectFile } from './workspaceStore';
import { CODEENGIN_COMMANDS } from './runnerCommands';
export { listRunnerCommands } from './runnerCommands';
import type { CodeEnginCommandResult } from './types';

const MAX_ANALYZED_FILES = Number(process.env.CODEENGIN_SIM_MAX_FILES ?? 600);
const MAX_OUTPUT_CHARS = Number(process.env.CODEENGIN_MAX_RUN_OUTPUT_CHARS ?? 30_000);

function clampOutput(value: string): string {
  if (value.length <= MAX_OUTPUT_CHARS) return value;
  return `${value.slice(0, MAX_OUTPUT_CHARS)}\n… output truncated by CodeEngin (${value.length} chars)`;
}

function commandResult(commandId: string, stdout: string, stderr = '', code = 0, started = Date.now()): CodeEnginCommandResult {
  const config = CODEENGIN_COMMANDS[commandId] ?? { command: 'codeengin-sim', args: [commandId], label: commandId };
  return { command: config.command, args: config.args, code, stdout: clampOutput(stdout), stderr: clampOutput(stderr), durationMs: Date.now() - started, timedOut: false };
}

function extensionOf(filePath: string): string {
  const match = /\.([A-Za-z0-9]+)$/.exec(filePath);
  return match ? match[1].toLowerCase() : '(none)';
}

async function analyzeWorkspace(workspaceId: string, ownerId: string): Promise<{ files: string[]; lines: string[]; warnings: string[]; errors: string[] }> {
  const files = await listEditableFiles(workspaceId, ownerId);
  const analyzed = files.slice(0, MAX_ANALYZED_FILES);
  const extCounts = new Map<string, number>();
  const warnings: string[] = [];
  const errors: string[] = [];
  let lineCount = 0;

  for (const filePath of analyzed) {
    extCounts.set(extensionOf(filePath), (extCounts.get(extensionOf(filePath)) ?? 0) + 1);
    const file = await readProjectFile(workspaceId, ownerId, filePath).catch(() => null);
    if (!file) continue;
    lineCount += file.content.split('\n').length;
    if (/\b(eval|Function)\s*\(/.test(file.content)) errors.push(`${filePath}: dynamic code execution marker found`);
    if (/dangerouslySetInnerHTML/.test(file.content)) warnings.push(`${filePath}: dangerouslySetInnerHTML marker found`);
    if (/\bany\b/.test(file.content) && /\.(ts|tsx)$/.test(filePath)) warnings.push(`${filePath}: explicit any marker found`);
    if (/console\.log\s*\(/.test(file.content)) warnings.push(`${filePath}: console.log marker found`);
    if (/TODO|FIXME/.test(file.content)) warnings.push(`${filePath}: TODO/FIXME marker found`);
  }

  const lines = [
    'CodeEngin simulation only. No user workspace scripts were executed.',
    `Files visible to CodeEngin: ${files.length}`,
    `Files analyzed this run: ${analyzed.length}`,
    `Approximate analyzed lines: ${lineCount}`,
    `Extension mix: ${Array.from(extCounts.entries()).sort((a, b) => a[0].localeCompare(b[0])).map(([ext, count]) => `${ext}:${count}`).join(', ') || 'none'}`,
  ];
  if (files.length > analyzed.length) lines.push(`Skipped ${files.length - analyzed.length} files after deterministic simulation cap.`);
  return { files, lines, warnings, errors };
}

export async function runCodeEnginCommand(workspaceId: string, ownerId: string, commandId: string): Promise<CodeEnginCommandResult> {
  if (!CODEENGIN_COMMANDS[commandId]) throw new Error(`Unsupported CodeEngin command: ${commandId}`);
  const started = Date.now();
  const report = await analyzeWorkspace(workspaceId, ownerId);
  const stdout = [
    `DREAMengin CodeEngin ${commandId} simulation`,
    ...report.lines,
    '',
    report.errors.length ? 'Errors:' : 'Errors: none from deterministic simulation scan',
    ...report.errors.slice(0, 80).map((item) => `- ${item}`),
    '',
    report.warnings.length ? 'Warnings:' : 'Warnings: none from deterministic simulation scan',
    ...report.warnings.slice(0, 160).map((item) => `- ${item}`),
    '',
    'This is not a package-manager build, test, lint, or typecheck. CodeEngin does not execute uploaded package scripts on the server.',
  ].join('\n');
  return commandResult(commandId, stdout, '', report.errors.length ? 1 : 0, started);
}

export function runCiCommand(commandId: string): Promise<CodeEnginCommandResult> {
  if (!CODEENGIN_COMMANDS[commandId]) throw new Error(`Unsupported CI command: ${commandId}`);
  return Promise.resolve(commandResult(commandId, [
    `DREAMengin CodeEngin ${commandId} simulation`,
    'No process was spawned from runCiCommand.',
    'Use the repository GitHub workflow for real CI verification; CodeEngin command execution remains simulation-only.',
  ].join('\n')));
}
