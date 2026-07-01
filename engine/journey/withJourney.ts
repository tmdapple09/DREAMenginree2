import { logJourneyDot } from '@/engine/journey/journeyDots';
import type { JourneyDotKind } from '@/types/journey';



export interface JourneyMeta {
  kind: JourneyDotKind | string;
  label: string;
  significance?: number;
  surface?: string;
  domain_color?: string;
  metadata?: Record<string, unknown>;
}


export function withJourney<T extends (...args: unknown[]) => Promise<unknown>>(
  fn: T,
  meta: JourneyMeta,
): T {
  return (async (...args: unknown[]) => {
    const result = await fn(...args);

    
    try {
      logJourneyDot({
        kind:         meta.kind as JourneyDotKind,
        label:        meta.label,
        significance: meta.significance ?? 0.5,
        surface:      meta.surface ?? '',
        domain_color: meta.domain_color ?? '#c8981a',
        metadata:     {
          ...meta.metadata,
          argsSummary: JSON.stringify(args).slice(0, 200),
        },
      });
    } catch {
      
    }

    return result;
  }) as T;
}
