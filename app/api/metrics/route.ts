import { getPrometheusMetrics } from '@/engine/observability/otel';
import { initOtelBridge } from '@/engine/observability/otelBridge';
import { NextRequest, NextResponse, connection } from 'next/server';



















initOtelBridge();

export async function GET(req: NextRequest): Promise<NextResponse> {
  
  const expectedToken = process.env.METRICS_BEARER_TOKEN;
  if (expectedToken) {
    const authHeader = req.headers.get('authorization') ?? '';
    const providedToken = authHeader.startsWith('Bearer ')
      ? authHeader.slice(7).trim()
      : '';
    if (providedToken !== expectedToken) {
      return new NextResponse('Unauthorized', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Bearer realm="DREAMengin metrics"',
          'Cache-Control': 'no-store',
        },
      });
    }
  }

  
  await connection();

  const body = await getPrometheusMetrics();

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; version=0.0.4; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
