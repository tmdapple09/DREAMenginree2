import { getSetupStatus } from '@/engine/setup/checks';
import { NextResponse } from 'next/server';


export async function GET( ): Promise<NextResponse> {
  const { ok, checks } = getSetupStatus();

  return NextResponse.json({ ok, checks, timestamp: new Date().toISOString() });
}
