'use client';

import { useEffect, useMemo } from 'react';
import { EnginRuntime } from '@/engine/engin-runtime/EnginRuntime';
import type { JsonObject } from '@/engine/engin-runtime/EnginBaseState';
import { RenderEnginRuleSet, type RenderIntent } from './core';
import type { RenderServiceIntentEnvelope, RenderWorkflowSurface } from './serviceRuntime';
import RenderEnginViewport from './RenderEnginViewport';

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
    id: `render:inline:${source}:${intentType}:${Math.random().toString(36).slice(2, 8)}`,
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
  const runtime = useMemo(() => new EnginRuntime<RenderIntent>(RenderEnginRuleSet, {
    runtimeId,
    persistenceKey,
  }), [persistenceKey, runtimeId]);

  useEffect(() => {
    let cancelled = false;
    void runtime.restore().finally(() => {
      if (!cancelled) runtime.start();
    });
    return () => {
      cancelled = true;
      runtime.stop();
    };
  }, [runtime]);

  return <RenderEnginViewport runtime={runtime} incomingIntent={intent} />;
}
