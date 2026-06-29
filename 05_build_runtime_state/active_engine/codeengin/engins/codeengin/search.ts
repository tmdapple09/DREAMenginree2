
import { listEditableFiles, readProjectFile } from './workspaceStore';
import type { CodeEnginSearchHit } from './types';

const MAX_HITS = Number(process.env.CODEENGIN_MAX_SEARCH_HITS ?? 250);
const MAX_SEARCH_FILES = Number(process.env.CODEENGIN_MAX_SEARCH_FILES ?? 800);
const MAX_QUERY_CHARS = Number(process.env.CODEENGIN_MAX_SEARCH_QUERY_CHARS ?? 160);

export async function searchWorkspace(workspaceId: string, ownerId: string, query: string, startPath = ''): Promise<CodeEnginSearchHit[]> {
  const q = query.trim();
  if (!q) return [];
  if (q.length > MAX_QUERY_CHARS) throw new Error(`Search query is too long (${q.length} chars).`);
  const lower = q.toLowerCase();
  const files = (await listEditableFiles(workspaceId, ownerId, startPath)).slice(0, MAX_SEARCH_FILES);
  const hits: CodeEnginSearchHit[] = [];
  for (const filePath of files) {
    if (hits.length >= MAX_HITS) break;
    if (filePath.toLowerCase().includes(lower)) hits.push({ path: filePath, line: 1, col: 1, preview: filePath });
    const file = await readProjectFile(workspaceId, ownerId, filePath).catch(() => null);
    if (!file) continue;
    const lines = file.content.split('\n');
    for (let index = 0; index < lines.length; index += 1) {
      if (hits.length >= MAX_HITS) break;
      const col = lines[index].toLowerCase().indexOf(lower);
      if (col >= 0) hits.push({ path: filePath, line: index + 1, col: col + 1, preview: lines[index].trim().slice(0, 220) });
    }
  }
  return hits;
}
