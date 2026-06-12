import { runCodeEnginCommand } from '@/lib/codeengin/runner';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const apiKey = request.headers.get('x-api-key');
  if (apiKey !== process.env.CI_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const stages = [
    { name: 'Lint', command: 'lint' },
    { name: 'Typecheck', command: 'typecheck' },
    { name: 'Unit Tests', command: 'test' },
    { name: 'Build', command: 'build' },
  ];

  const results = [];
  let overallStatus = 'passing';

  for (const stage of stages) {
    const result = await runCodeEnginCommand(stage.command);
    const passed = result.code === 0;
    if (!passed) overallStatus = 'failed';
    results.push({
      name: stage.name,
      passed,
      command: [result.command, ...result.args].join(' '),
      durationMs: result.durationMs,
      timedOut: result.timedOut,
      output: `${result.stdout}${result.stderr ? `\n${result.stderr}` : ''}`.slice(0, 5000),
    });
  }

  return NextResponse.json({ status: overallStatus, stages: results });
}
