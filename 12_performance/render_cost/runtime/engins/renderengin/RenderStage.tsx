'use client';

import { useEffect, useMemo } from 'react';
import { EnginRuntime } from '@/engine/engin-runtime/EnginRuntime';
import type { JsonObject } from '@/engine/engin-runtime/EnginBaseState';
import { RenderEnginRuleSet, type RenderIntent } from './core';
import type { RenderServiceIntentEnvelope, RenderWorkflowSurface } from './serviceRuntime';
import RenderEnginViewport from './RenderEnginViewport';

type RenderRuntimeEntry = {
  readonly runtime: EnginRuntime<RenderIntent>;
  users: number;
  bootPromise: Promise<void> | null;
};

const inlineRenderRuntimeRegistry = new Map<string, RenderRuntimeEntry>();

function stableRenderIntentPart(value: unknown): string {
  const source = JSON.stringify(value ?? 'render') ?? 'render';
  let hash = 2166136261;
  for (let index = 0; index < source.length; index += 1) {
    hash ^= source.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

function renderRuntimeKey(runtimeId: string, persistenceKey: string): string {
  return `${runtimeId}::${persistenceKey}`;
}

function acquireInlineRenderRuntime(runtimeId: string, persistenceKey: string): { key: string; entry: RenderRuntimeEntry } {
  const key = renderRuntimeKey(runtimeId, persistenceKey);
  let entry = inlineRenderRuntimeRegistry.get(key);
  if (!entry) {
    entry = {
      runtime: new EnginRuntime<RenderIntent>(RenderEnginRuleSet, { runtimeId, persistenceKey }),
      users: 0,
      bootPromise: null,
    };
    inlineRenderRuntimeRegistry.set(key, entry);
  }
  entry.users += 1;
  return { key, entry };
}

function bootInlineRenderRuntime(entry: RenderRuntimeEntry): Promise<void> {
  if (!entry.bootPromise) {
    entry.bootPromise = entry.runtime.restore().then(() => {
      entry.runtime.start();
    });
  }
  return entry.bootPromise;
}

function releaseInlineRenderRuntime(key: string): void {
  const entry = inlineRenderRuntimeRegistry.get(key);
  if (!entry) return;
  entry.users = Math.max(0, entry.users - 1);
  if (entry.users > 0) return;
  entry.runtime.stop();
  inlineRenderRuntimeRegistry.delete(key);
}


export interface RenderStageProps {
  intent: RenderServiceIntentEnvelope | null;
  runtimeId?: string;
  persistenceKey?: string;
}

export function createInlineRenderIntent(
  source: RenderWorkflowSurface,
  intentType: RenderIntent['type'],
  payload: JsonObject = {},
): RenderServiceIntentEnvelope {
  return {
    id: `render:inline:${source}:${intentType}:${stableRenderIntentPart({ source, intentType, payload })}`,
    type: 'intent.render',
    source,
    intentType,
    targetCapability: 'render',
    payload,
    createdAt: new Date().toISOString(),
    route: '/engines/create',
    status: 'accepted',
  };
}

export default function RenderStage({
  intent,
  runtimeId = 'render:inline-stage',
  persistenceKey = 'render-inline-stage-state',
}: RenderStageProps): React.JSX.Element {
  const runtimeHandle = useMemo(() => acquireInlineRenderRuntime(runtimeId, persistenceKey), [persistenceKey, runtimeId]);
  const runtime = runtimeHandle.entry.runtime;

  useEffect(() => {
    let cancelled = false;
    void bootInlineRenderRuntime(runtimeHandle.entry).catch(() => {
      if (!cancelled) runtime.stop();
    });
    return () => {
      cancelled = true;
      releaseInlineRenderRuntime(runtimeHandle.key);
    };
  }, [runtime, runtimeHandle]);

  return <RenderEnginViewport runtime={runtime} incomingIntent={intent} />;
}
