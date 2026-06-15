import { spawn } from 'child_process';
import { getWorkspaceMeta } from './workspaceStore';
import type { CodeEnginCommandResult } from './types';

const DEFAULT_TIMEOUT_MS = Number(process.env.CODEENGIN_RUN_TIMEOUT_MS ?? 120_000);
const MAX_OUTPUT_CHARS = Number(process.env.CODEENGIN_MAX_RUN_OUTPUT_CHARS ?? 30_000);

export const CODEENGIN_COMMANDS: Record<string, { command: string; args: string[]; label: string }> = {
  lint: { command: 'pnpm', args: ['lint'], label: 'Lint' },
  typecheck: { command: 'pnpm', args: ['typecheck'], label: 'Typecheck' },
  test: { command: 'pnpm', args: ['test'], label: 'Unit tests' },
  build: { command: 'pnpm', args: ['build'], label: 'Build' },
  preflight: { command: 'pnpm', args: ['preflight'], label: 'Preflight' },
};

function clampOutput(value: string): string {
  if (value.length <= MAX_OUTPUT_CHARS) return value;
  return `${value.slice(0, MAX_OUTPUT_CHARS)}\n… output truncated by CodeEngin (${value.length} chars)`;
}

export function listRunnerCommands(): Array<{ id: string; label: string; command: string }> {
  return Object.entries(CODEENGIN_COMMANDS).map(([id, config]) => ({ id, label: config.label, command: [config.command, ...config.args].join(' ') }));
}

export async function runCodeEnginCommand(workspaceId: string, ownerId: string, commandId: string): Promise<CodeEnginCommandResult> {
  const config = CODEENGIN_COMMANDS[commandId];
  if (!config) throw new Error(`Unsupported CodeEngin command: ${commandId}`);
  const workspace = await getWorkspaceMeta(workspaceId, ownerId);
  const started = Date.now();
  return new Promise((resolve) => {
    const child = spawn(config.command, config.args, { cwd: workspace.root, shell: false, env: { ...process.env, FORCE_COLOR: '0' } });
    let stdout = '';
    let stderr = '';
    let timedOut = false;
    const timeout = setTimeout(() => { timedOut = true; child.kill('SIGTERM'); }, DEFAULT_TIMEOUT_MS);
    child.stdout.on('data', (data: Buffer) => { stdout += data.toString(); });
    child.stderr.on('data', (data: Buffer) => { stderr += data.toString(); });
    child.on('error', (error: Error) => {
      clearTimeout(timeout);
      resolve({ command: config.command, args: config.args, code: 1, stdout: clampOutput(stdout), stderr: clampOutput(`${stderr}\n${error.message}`.trim()), durationMs: Date.now() - started, timedOut });
    });
    child.on('close', (code: number | null) => {
      clearTimeout(timeout);
      resolve({ command: config.command, args: config.args, code: code ?? (timedOut ? 124 : 0), stdout: clampOutput(stdout), stderr: clampOutput(stderr), durationMs: Date.now() - started, timedOut });
    });
  });
}

export function runCiCommand(commandId: string): Promise<CodeEnginCommandResult> {
  const config = CODEENGIN_COMMANDS[commandId];
  if (!config) throw new Error(`Unsupported CI command: ${commandId}`);
  const started = Date.now();
  return new Promise((resolve) => {
    const child = spawn(config.command, config.args, { cwd: process.cwd(), shell: false, env: { ...process.env, FORCE_COLOR: '0' } });
    let stdout = '';
    let stderr = '';
    let timedOut = false;
    const timeout = setTimeout(() => { timedOut = true; child.kill('SIGTERM'); }, DEFAULT_TIMEOUT_MS);
    child.stdout.on('data', (data: Buffer) => { stdout += data.toString(); });
    child.stderr.on('data', (data: Buffer) => { stderr += data.toString(); });
    child.on('error', (error: Error) => { clearTimeout(timeout); resolve({ command: config.command, args: config.args, code: 1, stdout: clampOutput(stdout), stderr: clampOutput(`${stderr}\n${error.message}`.trim()), durationMs: Date.now() - started, timedOut }); });
    child.on('close', (code: number | null) => { clearTimeout(timeout); resolve({ command: config.command, args: config.args, code: code ?? (timedOut ? 124 : 0), stdout: clampOutput(stdout), stderr: clampOutput(stderr), durationMs: Date.now() - started, timedOut }); });
  });
}
