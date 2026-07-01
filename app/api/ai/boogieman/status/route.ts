import { BOOGIE_POLICY_VERSION } from '@/dr-eams/ai/boogie-policy';
import { NextResponse } from 'next/server';






export async function GET( ): Promise<NextResponse> {
  const simulationMode = process.env.BOOGIE_SIMULATION_MODE === 'true';

  
  const forceDegraded = process.env.BOOGIE_DEGRADED === 'true';
  const forceOffline = process.env.BOOGIE_OFFLINE === 'true';

  const status = forceOffline ? 'offline' : forceDegraded ? 'degraded' : 'ok';

  return NextResponse.json(
    {
      status,
      policy_version: BOOGIE_POLICY_VERSION,
      simulation_mode: simulationMode,
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: { 'Cache-Control': 'no-store' },
    },
  );
}
