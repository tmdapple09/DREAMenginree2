export const CODEENGIN_COMMANDS: Record<string, { command: string; args: string[]; label: string }> = {
  lint: { command: 'pnpm', args: ['lint'], label: 'Lint' },
  typecheck: { command: 'pnpm', args: ['typecheck'], label: 'Typecheck' },
  test: { command: 'pnpm', args: ['test'], label: 'Unit tests' },
  build: { command: 'pnpm', args: ['build'], label: 'Build' },
  preflight: { command: 'pnpm', args: ['preflight'], label: 'Preflight' },
};

export function listRunnerCommands(): Array<{ id: string; label: string; command: string }> {
  return Object.entries(CODEENGIN_COMMANDS).map(([id, config]) => ({
    id,
    label: config.label,
    command: [config.command, ...config.args].join(' '),
  }));
}
