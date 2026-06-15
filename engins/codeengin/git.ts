import { spawn } from 'child_process';
import { getWorkspaceMeta } from './workspaceStore';

interface GitResult { command: string; code: number; stdout: string; stderr: string; }

async function runGit(workspaceId: string, ownerId: string, args: string[]): Promise<GitResult> {
  const workspace = await getWorkspaceMeta(workspaceId, ownerId);
  return new Promise((resolve) => {
    const child = spawn('git', args, { cwd: workspace.root, shell: false });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (data: Buffer) => { stdout += data.toString(); });
    child.stderr.on('data', (data: Buffer) => { stderr += data.toString(); });
    child.on('error', (error: Error) => resolve({ command: `git ${args.join(' ')}`, code: 1, stdout, stderr: `${stderr}\n${error.message}`.trim() }));
    child.on('close', (code: number | null) => resolve({ command: `git ${args.join(' ')}`, code: code ?? 0, stdout, stderr }));
  });
}

export async function getGitStatus(workspaceId: string, ownerId: string): Promise<GitResult> { return runGit(workspaceId, ownerId, ['status', '--short', '--branch']); }
export async function getGitDiff(workspaceId: string, ownerId: string, filePath?: string): Promise<GitResult> { return filePath ? runGit(workspaceId, ownerId, ['diff', '--', filePath]) : runGit(workspaceId, ownerId, ['diff']); }
export async function getGitLog(workspaceId: string, ownerId: string): Promise<GitResult> { return runGit(workspaceId, ownerId, ['log', '--oneline', '-n', '25']); }
