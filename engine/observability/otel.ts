import { metrics, trace, type Meter, type Tracer } from '@opentelemetry/api';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { MeterProvider } from '@opentelemetry/sdk-metrics';
import { BatchSpanProcessor, NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from '@opentelemetry/semantic-conventions';
import type { IncomingMessage, ServerResponse } from 'node:http';


















let _initialised = false;
let _promExporter: PrometheusExporter | null = null;
let _meter: Meter | null = null;
let _tracer: Tracer | null = null;

const SERVICE_NAME = process.env.OTEL_SERVICE_NAME ?? 'dreamengin';
const SERVICE_VERSION = process.env.npm_package_version ?? '2.0.0';

function ensureInit(): void {
  if (_initialised) return;
  _initialised = true;

  const resource = resourceFromAttributes({
    [ATTR_SERVICE_NAME]: SERVICE_NAME,
    [ATTR_SERVICE_VERSION]: SERVICE_VERSION,
  });

  const metricsExporterEnv = process.env.OTEL_METRICS_EXPORTER ?? 'prometheus';

  if (metricsExporterEnv !== 'none') {
    _promExporter = new PrometheusExporter({
      preventServerStart: true, 
    });
    const meterProvider = new MeterProvider({
      resource,
      readers: [_promExporter],
    });
    metrics.setGlobalMeterProvider(meterProvider);
  }

  const otlpEndpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
  const spanProcessors = otlpEndpoint
    ? [new BatchSpanProcessor(new OTLPTraceExporter({ url: `${otlpEndpoint}/v1/traces` }))]
    : [];

  const tracerProvider = new NodeTracerProvider({
    resource,
    spanProcessors,
  });
  tracerProvider.register();

  _meter = metrics.getMeter(SERVICE_NAME, SERVICE_VERSION);
  _tracer = trace.getTracer(SERVICE_NAME, SERVICE_VERSION);
}


export function getMeter(): Meter {
  ensureInit();
  return _meter!;
}


export function getTracer(): Tracer {
  ensureInit();
  return _tracer!;
}


export async function getPrometheusMetrics(): Promise<string> {
  ensureInit();
  if (!_promExporter) return '';

  return new Promise<string>((resolve) => {
    const fakeReq = {} as IncomingMessage;
    const fakeRes = {
      setHeader: () => fakeRes,
      writeHead: () => fakeRes,
      end: (data?: string) => resolve(data ?? ''),
    } as unknown as ServerResponse;

    _promExporter!.getMetricsRequestHandler(fakeReq, fakeRes);
  });
}
