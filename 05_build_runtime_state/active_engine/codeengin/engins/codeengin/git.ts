
import { listEditableFiles } from './workspaceStore';

interface GitResult { command: string; code: number; stdout: string; stderr: string; }

function result(command: string, stdout: string): GitResult {
  return { command, code: 0, stdout, stderr: '' };
}

export async function getGitStatus(workspaceId: string, ownerId: string): Promise<GitResult> {
  const files = await listEditableFiles(workspaceId, ownerId);
  return result('codeengin-git status', [
    'CodeEngin git simulation only. No git process was executed against the uploaded workspace.',
    `Editable files visible: ${files.length}`,
    ...files.slice(0, 120).map((file) => `?? ${file}`),
    files.length > 120 ? `… ${files.length - 120} more files omitted` : '',
  ].filter(Boolean).join('\n'));
}

export async function getGitDiff(workspaceId: string, ownerId: string, filePath?: string): Promise<GitResult> {
  await listEditableFiles(workspaceId, ownerId, filePath ? filePath.replace(/\/[^/]*$/, '') : '');
  return result('codeengin-git diff', 'CodeEngin git diff is simulation-only. No git process or external diff driver was executed against the uploaded workspace.');
}

export async function getGitLog(workspaceId: string, ownerId: string): Promise<GitResult> {
  await listEditableFiles(workspaceId, ownerId);
  return result('codeengin-git log', 'CodeEngin git log is simulation-only for uploaded workspaces. No .git history is trusted or executed on the server.');
}
