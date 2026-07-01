import type { JourneyDot } from '@/types/journey';




export const MS_PER_DAY = 86_400_000;


export const RETURN_GAP_DAYS = 3;


export interface DotInsight {
  
  isFirst?: boolean;
  
  weeklyFrequency?: number;
  
  returnAfterDays?: number;
}


export type AnnotatedDot = JourneyDot & { insight: DotInsight };


function calendarDay(isoString: string): number {
  const d = new Date(isoString);
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
}


export function findFirstOccurrenceIds(dots: JourneyDot[]): Set<string> {
  const seen = new Set<string>();
  const firstIds = new Set<string>();

  
  for (const dot of [...dots].reverse()) {
    if (!seen.has(dot.kind)) {
      seen.add(dot.kind);
      firstIds.add(dot.id);
    }
  }
  return firstIds;
}


export function computeCurrentStreak(dots: JourneyDot[]): number {
  if (dots.length === 0) return 0;

  const activeDays = new Set(dots.map((d) => calendarDay(d.created_at)));
  const todayDay   = calendarDay(new Date().toISOString());

  let streak = 0;
  let cursor = todayDay;

  while (activeDays.has(cursor)) {
    streak++;
    cursor -= MS_PER_DAY; 
  }

  return streak;
}


export function computeWeeklyFrequency(dots: JourneyDot[]): Map<string, number> {
  const result = new Map<string, number>();
  const now           = Date.now();
  const SEVEN_DAYS_MS = 7 * MS_PER_DAY;
  const windowStart   = now - SEVEN_DAYS_MS;

  
  const recentDots = dots.filter((d) => new Date(d.created_at).getTime() >= windowStart);

  
  const kindCount = new Map<string, number>();
  for (const d of recentDots) {
    kindCount.set(d.kind, (kindCount.get(d.kind) ?? 0) + 1);
  }

  
  for (const d of recentDots) {
    const count = kindCount.get(d.kind) ?? 1;
    if (count >= 2) {
      result.set(d.id, count);
    }
  }

  return result;
}


export function detectReturnGaps(dots: JourneyDot[]): Map<string, number> {
  const result = new Map<string, number>();
  
  const lastSeen = new Map<string, number>();
  const GAP_MS = RETURN_GAP_DAYS * MS_PER_DAY;

  
  for (const dot of [...dots].reverse()) {
    const key = `${dot.kind}::${dot.surface}`;
    const ts  = new Date(dot.created_at).getTime();

    if (lastSeen.has(key)) {
      const prevTs  = lastSeen.get(key)!;
      const gapMs   = ts - prevTs;
      if (gapMs >= GAP_MS) {
        const gapDays = Math.round(gapMs / MS_PER_DAY);
        result.set(dot.id, gapDays);
      }
    }

    lastSeen.set(key, ts);
  }

  return result;
}


export function annotateDotsWithInsights(dots: JourneyDot[]): AnnotatedDot[] {
  if (dots.length === 0) return [];

  const firstIds       = findFirstOccurrenceIds(dots);
  const weeklyFreqs    = computeWeeklyFrequency(dots);
  const returnGaps     = detectReturnGaps(dots);

  return dots.map((dot) => {
    const insight: DotInsight = {};

    if (firstIds.has(dot.id))          insight.isFirst          = true;
    if (weeklyFreqs.has(dot.id))       insight.weeklyFrequency  = weeklyFreqs.get(dot.id);
    if (returnGaps.has(dot.id))        insight.returnAfterDays  = returnGaps.get(dot.id);

    return { ...dot, insight };
  });
}
