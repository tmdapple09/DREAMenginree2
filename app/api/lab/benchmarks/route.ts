import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';

function runServerBenchmarks( ){
  const start = performance.now();
  let acc = 0;
  for (let i = 0; i < 100_000; i += 1) acc += Math.sqrt(i);
  const mathMs = performance.now() - start;

  const jsonStart = performance.now();
  JSON.parse(JSON.stringify({ acc, values: Array.from({ length: 200 }, (_, i: number) => i) }));
  const jsonMs = performance.now() - jsonStart;

  return [
    { name: 'Math Throughput', score: mathMs.toFixed(1), unit: 'ms' },
    { name: 'JSON Roundtrip', score: jsonMs.toFixed(1), unit: 'ms' },
    { name: 'Server Loop', score: (1000 / Math.max(mathMs, 1)).toFixed(1), unit: 'ops/s' },
    { name: 'Stability Score', score: (100 - Math.min(99, Math.round(mathMs + jsonMs))).toString(), unit: '/100' },
  ];
}

export async function POST(_req: NextRequest ): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const results = runServerBenchmarks();
  const title = `Benchmark Run — ${new Date().toISOString()}`;

  return NextResponse.json({
    results,
    record: {
      id: `inline-benchmark-${Date.now()}`,
      title,
      status: 'completed',
      persisted: false,
      reason: 'physics_experiments table is not present in the current typed schema',
      user_id: user.id,
    },
  });
}
