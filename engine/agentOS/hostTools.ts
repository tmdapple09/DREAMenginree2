
export const codeEnginHostTools = {
  getFileContent: async (): Promise<string> => 'CodeEngin AgentOS file access requires an explicit user workspaceId. The platform source tree is not exposed.',
  writeFile: async (): Promise<string> => 'CodeEngin AgentOS writes are disabled until an owned user workspace is bound.',
  runCommand: async (): Promise<{ stdout: string; stderr: string }> => ({ stdout: '', stderr: 'CodeEngin AgentOS command execution requires an owned user workspace. The platform source tree is not exposed.' }),
  getProjectTree: async (): Promise<{ name: string; type: 'file' | 'directory'; path: string }[]> => [],
} as const;

export type CodeEnginHostTools = typeof codeEnginHostTools;
