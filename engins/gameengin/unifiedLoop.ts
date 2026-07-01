


export type LoopPriority = 'CRITICAL' | 'HIGH' | 'NORMAL' | 'LOW';


const FRAME_BUDGET_MS = 1000 / 60; 


const MAX_DT_MS = 50;


const PRIORITY_ORDER: Record<LoopPriority, number> = {
  CRITICAL: 0,
  HIGH:     1,
  NORMAL:   2,
  LOW:      3,
};

interface GameEntry {
  readonly id: string;
  readonly tickFn: (dt: number) => void;
  readonly priority: LoopPriority;
}


let _entries: GameEntry[] = [];

let _rafHandle = 0;

let _lastTime = 0;

let _running = false;

function _sortEntries(): void {
  _entries.sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]);
}

function _tick(now: number): void {
  
  _rafHandle = requestAnimationFrame(_tick);

  const rawDt = _lastTime > 0 ? now - _lastTime : FRAME_BUDGET_MS;
  _lastTime = now;

  
  const dt = Math.min(rawDt, MAX_DT_MS);

  const frameStart = performance.now();

  for (const entry of _entries) {
    const elapsed = performance.now() - frameStart;

    
    if (entry.priority === 'LOW'    && elapsed > FRAME_BUDGET_MS * 0.8) continue;
    if (entry.priority === 'NORMAL' && elapsed > FRAME_BUDGET_MS)       continue;
    

    try {
      entry.tickFn(dt);
    } catch (err: unknown) {
      
      if (typeof console !== 'undefined') {

        console.error(`[UnifiedLoop] uncaught error in game '${entry.id}':`, err);
      }
    }
  }
}

function _startLoop(): void {
  if (_running || typeof requestAnimationFrame === 'undefined') return;
  _running = true;
  _lastTime = 0;
  _rafHandle = requestAnimationFrame(_tick);
}

function _stopLoop(): void {
  if (!_running) return;
  _running = false;
  if (_rafHandle) cancelAnimationFrame(_rafHandle);
  _rafHandle = 0;
  _lastTime  = 0;
}


export function registerGame(
  id: string,
  tickFn: (dt: number) => void,
  priority: LoopPriority = 'NORMAL',
): void {
  
  _entries = _entries.filter((e) => e.id !== id);
  _entries.push({ id, tickFn, priority });
  _sortEntries();
  _startLoop();
}


export function unregisterGame(id: string): void {
  _entries = _entries.filter((e) => e.id !== id);
  if (_entries.length === 0) _stopLoop();
}


export function activeGameCount(): number {
  return _entries.length;
}


export function isLoopRunning(): boolean {
  return _running;
}


export function _resetLoop(): void {
  _stopLoop();
  _entries = [];
}
