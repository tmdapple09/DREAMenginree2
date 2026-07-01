

export interface ViewTallyTimer {
  
  cancel(): void;
  
  readonly active: boolean;
}

export const VIEW_TALLY_DURATION_MS = 4000;


export function createViewTallyTimer(
  onTally:  () => void,
  onCancel?: () => void,
): ViewTallyTimer {
  let handle: ReturnType<typeof setTimeout> | null = setTimeout(() => {
    handle = null;
    onTally();
  }, VIEW_TALLY_DURATION_MS);

  return {
    get active(): boolean {
      return handle !== null;
    },
    cancel(): void {
      if (handle !== null) {
        clearTimeout(handle);
        handle = null;
        onCancel?.();
      }
    },
  };
}


export class ViewTallyTracker {
  private _timer: ViewTallyTimer | null = null;
  private readonly _onTally: () => void;

  constructor(onTally: () => void) {
    this._onTally = onTally;
  }

  
  onVisible(): void {
    if (this._timer?.active) return; 
    this._timer = createViewTallyTimer(this._onTally);
  }

  
  onHidden(): void {
    this._timer?.cancel();
    this._timer = null;
  }

  
  destroy(): void {
    this.onHidden();
  }

  get isActive(): boolean {
    return this._timer?.active ?? false;
  }
}
