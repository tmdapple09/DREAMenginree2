import type { Counter, Histogram, UpDownCounter } from '@opentelemetry/api';
import { SpanStatusCode, type Span } from '@opentelemetry/api';
import { getMeter, getTracer } from './otel';












let _bridgeReady = false;

let _logCounter: Counter | null = null;
let _metricGauge: Histogram | null = null;
let _traceHistogram: Histogram | null = null;
let _activeRequests: UpDownCounter | null = null;
let _errorCounter: Counter | null = null;

function ensureInstruments(): void {
  if (_logCounter) return;
  const meter = getMeter();

  _logCounter = meter.createCounter('dreamengin_logs_total', {
    description: 'Total log entries by level',
    unit: '1',
  });

  _errorCounter = meter.createCounter('dreamengin_errors_total', {
    description: 'Total error-level log entries',
    unit: '1',
  });

  _metricGauge = meter.createHistogram('dreamengin_custom_metric', {
    description: 'Custom metric values forwarded from the collector',
    unit: '1',
  });

  _traceHistogram = meter.createHistogram('dreamengin_span_duration_ms', {
    description: 'Span durations in milliseconds from the collector',
    unit: 'ms',
  });

  _activeRequests = meter.createUpDownCounter('dreamengin_active_requests', {
    description: 'Currently in-flight requests',
    unit: '1',
  });

  
  const processUptime = meter.createObservableGauge('dreamengin_process_uptime_seconds', {
    description: 'Process uptime in seconds',
    unit: 's',
  });
  processUptime.addCallback((result) => {
    result.observe(process.uptime());
  });

  const heapUsed = meter.createObservableGauge('dreamengin_heap_used_bytes', {
    description: 'Node.js heap used in bytes',
    unit: 'By',
  });
  heapUsed.addCallback((result) => {
    result.observe(process.memoryUsage().heapUsed);
  });

  const heapTotal = meter.createObservableGauge('dreamengin_heap_total_bytes', {
    description: 'Node.js heap total in bytes',
    unit: 'By',
  });
  heapTotal.addCallback((result) => {
    result.observe(process.memoryUsage().heapTotal);
  });

  const rss = meter.createObservableGauge('dreamengin_rss_bytes', {
    description: 'Resident set size in bytes',
    unit: 'By',
  });
  rss.addCallback((result) => {
    result.observe(process.memoryUsage().rss);
  });

  const eventLoopLag = meter.createObservableGauge('dreamengin_eventloop_lag_ms', {
    description: 'Approximate event loop lag in ms',
    unit: 'ms',
  });
  let _lastCheck = Date.now();
  const _lagInterval = setInterval(() => {
    const now = Date.now();
    const lag = now - _lastCheck - 1000;
    _lastCheck = now;
    
    (globalThis as any).__dreamengin_otel_event_loop_lag = Math.max(0, lag);
  }, 1000);
  if (_lagInterval.unref) _lagInterval.unref();
  eventLoopLag.addCallback((result) => {
    const lag = ((globalThis as any).__dreamengin_otel_event_loop_lag as number) ?? 0;
    result.observe(lag);
  });
}


export function otelRecordLog(level: string, source?: string): void {
  if (!_bridgeReady) return;
  ensureInstruments();
  const attrs: Record<string, string> = { level };
  if (source) attrs.source = source;
  _logCounter!.add(1, attrs);
  if (level === 'error') _errorCounter!.add(1, attrs);
}


export function otelRecordMetric(
  name: string,
  value: number,
  labels?: Record<string, string>,
): void {
  if (!_bridgeReady) return;
  ensureInstruments();
  _metricGauge!.record(value, { metric_name: name, ...labels });
}


export function otelRecordTrace(
  name: string,
  durationMs: number,
  status: 'ok' | 'error' | 'timeout',
  tags?: Record<string, string>,
): void {
  if (!_bridgeReady) return;
  ensureInstruments();

  
  _traceHistogram!.record(durationMs, { span_name: name, status, ...tags });

  
  const tracer = getTracer();
  const span: Span = tracer.startSpan(name, {
    startTime: new Date(Date.now() - durationMs),
    attributes: tags,
  });
  if (status === 'error') {
    span.setStatus({ code: SpanStatusCode.ERROR, message: 'error' });
  } else if (status === 'timeout') {
    span.setStatus({ code: SpanStatusCode.ERROR, message: 'timeout' });
  } else {
    span.setStatus({ code: SpanStatusCode.OK });
  }
  span.end();
}


export function otelRequestStart(): void {
  if (!_bridgeReady) return;
  ensureInstruments();
  _activeRequests!.add(1);
}


export function otelRequestEnd(): void {
  if (!_bridgeReady) return;
  ensureInstruments();
  _activeRequests!.add(-1);
}


export function initOtelBridge(): void {
  if (_bridgeReady) return;
  ensureInstruments();
  _bridgeReady = true;
}
