import { spawn } from 'child_process';
import { getCodeEnginProjectRoot } from './pathSafety';

interface GitResult {
  command: string;
  code: number;
  stdout: string;
  stderr: string;
}

function runGit(args: string[]): Promise<GitResult> {
  return new Promise((resolve) => {
    const child = spawn('git', args, { cwd: getCodeEnginProjectRoot(), shell: false });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (data: Buffer) => { stdout += data.toString(); });
    child.stderr.on('data', (data: Buffer) => { stderr += data.toString(); });
    child.on('error', (error: Error) => resolve({ command: `git ${args.join(' ')}`, code: 1, stdout, stderr: `${stderr}\n${error.message}`.trim() }));
    child.on('close', (code: number | null) => resolve({ command: `git ${args.join(' ')}`, code: code ?? 0, stdout, stderr }));
  });
}

export async function getGitStatus(): Promise<GitResult> {
  return runGit(['status', '--short', '--branch']);
}

export async function getGitDiff(filePath?: string): Promise<GitResult> {
  return filePath ? runGit(['diff', '--', filePath]) : runGit(['diff']);
}

export async function getGitLog(): Promise<GitResult> {
  return runGit(['log', '--oneline', '-n', '25']);
}
