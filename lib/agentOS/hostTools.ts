import { readFile, writeFile, mkdir, readdir } from 'fs/promises';
import path from 'path';
import { assertSafeProjectPath, getCodeEnginProjectRoot, safeErrorMessage } from '@/lib/codeengin/pathSafety';
import { runCodeEnginCommand } from '@/lib/codeengin/runner';

/**
 * Host tools exposed to the AgentOS VM for CodeEngin.
 *
 * These are intentionally constrained:
 * - file paths are resolved through CodeEngin path containment
 * - writes auto-create parent folders but cannot escape the project root
 * - commands are allowlisted by lib/codeengin/runner.ts, not arbitrary shell text
 */
export const codeEnginHostTools = {
  getFileContent: async (filePath: string): Promise<string> => {
    try {
      const safe = assertSafeProjectPath(filePath);
      return await readFile(safe.absPath, 'utf-8');
    } catch (error: unknown) {
      return `Error reading file: ${safeErrorMessage(error)}`;
    }
  },

  writeFile: async (filePath: string, content: string): Promise<string> => {
    try {
      const safe = assertSafeProjectPath(filePath);
      await mkdir(path.dirname(safe.absPath), { recursive: true });
      await writeFile(safe.absPath, content, 'utf-8');
      return `File ${safe.relPath} written successfully.`;
    } catch (error: unknown) {
      return `Error writing file: ${safeErrorMessage(error)}`;
    }
  },

  runCommand: async (cmd: string): Promise<{ stdout: string; stderr: string }> => {
    try {
      const result = await runCodeEnginCommand(cmd);
      return {
        stdout: result.stdout,
        stderr: result.stderr || (result.code === 0 ? '' : `Command exited with code ${result.code}`),
      };
    } catch (error: unknown) {
      return { stdout: '', stderr: safeErrorMessage(error) };
    }
  },

  getProjectTree: async (
    relativePath = '',
  ): Promise<{ name: string; type: 'file' | 'directory'; path: string }[]> => {
    try {
      const safe = assertSafeProjectPath(relativePath, { allowDirectory: true, allowMissingExtension: true });
      const entries = await readdir(safe.absPath || getCodeEnginProjectRoot(), { withFileTypes: true });
      return entries
        .filter((entry: { name: string }) => !entry.name.startsWith('.'))
        .map((entry: { name: string; isDirectory: () => boolean }) => ({
          name: entry.name,
          type: entry.isDirectory() ? 'directory' : 'file',
          path: path.posix.join(safe.relPath, entry.name),
        }));
    } catch {
      return [];
    }
  },
} as const;

export type CodeEnginHostTools = typeof codeEnginHostTools;
