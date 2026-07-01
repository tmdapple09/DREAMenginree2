

export const HOME_BOTTOM_THRESHOLD = 0.66;
export const HOME_TOP_THRESHOLD    = 0.34;

export type HomeTarget = 'surface' | 'dreamspace' | 'both';


export function resolveHomeTarget(splitRatio: number): HomeTarget {
  if (splitRatio >= HOME_BOTTOM_THRESHOLD) return 'surface';
  if (splitRatio <= HOME_TOP_THRESHOLD)    return 'dreamspace';
  return 'both';
}

export interface RuntimeHomeCallbacks {
  
  returnHome?:       () => void;
  
  returnDreamSpace?: () => void;
}


export function runHomeAction(
  splitRatio: number,
  callbacks: RuntimeHomeCallbacks | null | undefined,
): boolean {
  if (!callbacks) return false;
  const target = resolveHomeTarget(splitRatio);

  let fired = false;
  if (target === 'surface' || target === 'both') {
    if (callbacks.returnHome) { callbacks.returnHome(); fired = true; }
  }
  if (target === 'dreamspace' || target === 'both') {
    if (callbacks.returnDreamSpace) { callbacks.returnDreamSpace(); fired = true; }
  }
  
  
  if (!fired) {
    if (callbacks.returnHome)       { callbacks.returnHome();       fired = true; }
    else if (callbacks.returnDreamSpace) { callbacks.returnDreamSpace(); fired = true; }
  }
  return fired;
}
