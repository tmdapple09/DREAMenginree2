
export const CODEENGIN_COMMANDS: Record<string, { command: string; args: string[]; label: string }> = {
  lint: { command: 'codeengin-sim', args: ['lint'], label: 'Lint simulation' },
  typecheck: { command: 'codeengin-sim', args: ['typecheck'], label: 'Typecheck simulation' },
  test: { command: 'codeengin-sim', args: ['test'], label: 'Test simulation' },
  build: { command: 'codeengin-sim', args: ['build'], label: 'Build simulation' },
  preflight: { command: 'codeengin-sim', args: ['preflight'], label: 'Preflight simulation' },
};

export function listRunnerCommands(): Array<{ id: string; label: string; command: string }> {
  return Object.entries(CODEENGIN_COMMANDS).map(([id, config]) => ({
    id,
    label: config.label,
    command: [config.command, ...config.args].join(' '),
  }));
}
