import { isBotSession, type BotSessionResult, type SwipeRecord } from '@/dreamr/botDetection';




export const HUMAN_MIN_DEVIATION_PX = 1.5;


export const BOT_MAX_DEVIATION_PX = 0.8;


export const HUMAN_MAX_CROSS_SIMILARITY = 0.85;


export const BOT_MIN_CROSS_SIMILARITY = 0.95;


export const HUMAN_MAX_COARSE_GRAIN_DIFF = 0.1;


export const BOT_MIN_COARSE_GRAIN_DIFF = 0.15;


export const HUMAN_MIN_ENTROPY = 0.7;


export const BOT_MAX_ENTROPY = 0.5;


export const HUMAN_MIN_SLOG_VEL_VAR = 0.5;


export const BOT_MAX_SLOG_VEL_VAR = 0.3;


export const VIEW_TALLY_THRESHOLD_MS = 4000;


export function createViewTimer(
  onTally: () => void,
  onCancel?: () => void,
): { cancel: () => void } {
  let handle: ReturnType<typeof setTimeout> | null = setTimeout(() => {
    handle = null;
    onTally();
  }, VIEW_TALLY_THRESHOLD_MS);

  return {
    cancel() {
      if (handle !== null) {
        clearTimeout(handle);
        handle = null;
        onCancel?.();
      }
    },
  };
}


export const PERFECT_LINE_THRESHOLD_PX = 1.5;


export const FREEZE_MIN_MS = 3000;
export const FREEZE_MAX_MS = 5000;


export class PerfectLineTrap {
  private streak = 0;
  private frozenUntil = 0;

  
  get frozen(): boolean {
    return Date.now() < this.frozenUntil;
  }

  
  get frozenRemainingMs(): number {
    return Math.max(0, this.frozenUntil - Date.now());
  }

  
  record(meanDeviation: number): 'ok' | 'freeze' | 'block' {
    if (this.frozen) return 'block';

    if (meanDeviation < PERFECT_LINE_THRESHOLD_PX) {
      this.streak++;
      if (this.streak >= 2) return 'block';
      
      const freezeDuration = FREEZE_MIN_MS + Math.random() * (FREEZE_MAX_MS - FREEZE_MIN_MS);
      this.frozenUntil = Date.now() + freezeDuration;
      return 'freeze';
    }

    
    this.streak = 0;
    return 'ok';
  }

  
  reset(): void {
    this.streak = 0;
    this.frozenUntil = 0;
  }
}


export class BotSessionTracker {
  private readonly history: SwipeRecord[] = [];
  private readonly trap = new PerfectLineTrap();

  
  record(record: SwipeRecord): void {
    this.trap.record(record.analysis.meanDeviation);
    this.history.push(record);
  }

  
  evaluate(): BotSessionResult {
    const base = isBotSession(this.history);
    
    if (this.trap.frozen) {
      return {
        isBot: true,
        confidence: 1,
        signals: [...base.signals, 'Perfect-line trap active'],
      };
    }
    return base;
  }

  
  reset(): void {
    this.history.length = 0;
    this.trap.reset();
  }

  
  get swipeCount(): number {
    return this.history.length;
  }
}

export {
    analyzeSwipe, isBotSession, tallyView, type BotSessionResult, type Point,
    type SwipeAnalysis, type SwipeRecord, type ViewTally
} from '@/dreamr/botDetection';
