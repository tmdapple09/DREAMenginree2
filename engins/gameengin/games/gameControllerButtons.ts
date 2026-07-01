



export type ControllerButton =
  | 'x'
  | 'circle'
  | 'triangle'
  | 'square'
  | 'l1'
  | 'l2'
  | 'r1'
  | 'r2';

export type ButtonInteraction =
  | 'tap'
  | 'hold-start'
  | 'hold-end'
  | 'double-tap'
  | 'long-press'
  | 'tap-and-hold'
  | 'release';


export const BTN_TAP_MAX_MS = 250;


export const BTN_LONG_PRESS_MS = 600;


export const BTN_DOUBLE_TAP_MAX_MS = 400;


export const BTN_TAP_AND_HOLD_WINDOW_MS = 300;

export const CONTROLLER_BUTTONS: readonly ControllerButton[] = [
  'x',
  'circle',
  'triangle',
  'square',
  'l1',
  'l2',
  'r1',
  'r2',
] as const;

export interface ControllerButtonDef {
  id: ControllerButton;
  symbol: string;
  label: string;
}

export const CONTROLLER_BUTTON_DEFS: readonly ControllerButtonDef[] = [
  { id: 'triangle', symbol: '△', label: 'Triangle' },
  { id: 'square',   symbol: '□', label: 'Square'   },
  { id: 'circle',   symbol: '○', label: 'Circle'   },
  { id: 'x',        symbol: '×', label: 'Cross'    },
  { id: 'l1',       symbol: 'L1', label: 'L1'      },
  { id: 'l2',       symbol: 'L2', label: 'L2'      },
  { id: 'r1',       symbol: 'R1', label: 'R1'      },
  { id: 'r2',       symbol: 'R2', label: 'R2'      },
] as const;

export interface ButtonInteractionEvent {
  button: ControllerButton;
  interaction: ButtonInteraction;
}

function emitWindowEvent(button: ControllerButton, interaction: ButtonInteraction): ButtonInteraction | undefined {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent<ButtonInteractionEvent>('de-ctrl-button', {
      detail: { button, interaction },
    }),
  );
}

interface ButtonState {
  touchId: number | null;
  pressStart: number;
  lastTapAt: number;
  longPressTimer: ReturnType<typeof setTimeout> | null;
  longPressDidFire: boolean;
  isTapAndHoldCandidate: boolean;
}

function freshState(): ButtonState {
  return {
    touchId: null,
    pressStart: 0,
    lastTapAt: 0,
    longPressTimer: null,
    longPressDidFire: false,
    isTapAndHoldCandidate: false,
  };
}


export class ButtonInteractionManager {
  private readonly states = new Map<ControllerButton, ButtonState>();
  private readonly listeners = new Set<(e: ButtonInteractionEvent) => void>();

  constructor() {
    for (const btn of CONTROLLER_BUTTONS) {
      this.states.set(btn, freshState());
    }
  }

  
  subscribe(fn: (e: ButtonInteractionEvent) => void) {
    this.listeners.add(fn);
    return () => { this.listeners.delete(fn); };
  }

  private fire(button: ControllerButton, interaction: ButtonInteraction) {
    emitWindowEvent(button, interaction);
    this.listeners.forEach((fn) => fn({ button, interaction }));
  }

  
  pressStart(button: ControllerButton, touchId: number, now = Date.now()) {
    const s = this.states.get(button);
    if (!s || s.touchId !== null) return;
    s.touchId = touchId;
    s.pressStart = now;
    s.longPressDidFire = false;

    
    
    const sinceLastTap = now - s.lastTapAt;
    s.isTapAndHoldCandidate =
      s.lastTapAt > 0 && sinceLastTap <= BTN_TAP_AND_HOLD_WINDOW_MS;
    if (s.isTapAndHoldCandidate) {
      s.lastTapAt = 0;
    }

    this.fire(button, 'hold-start');

    
    s.longPressTimer = setTimeout(() => {
      if (s.touchId === touchId) {
        s.longPressDidFire = true;
        this.fire(button, 'long-press');
      }
    }, BTN_LONG_PRESS_MS);
  }

  
  pressEnd(button: ControllerButton, touchId: number, now = Date.now()) {
    const s = this.states.get(button);
    if (!s || s.touchId !== touchId) return;

    if (s.longPressTimer !== null) {
      clearTimeout(s.longPressTimer);
      s.longPressTimer = null;
    }

    const duration = now - s.pressStart;
    const prevTapAt = s.lastTapAt;
    s.touchId = null;

    
    this.fire(button, 'release');

    if (s.longPressDidFire) {
      s.lastTapAt = 0;
      this.fire(button, 'hold-end');
      return;
    }

    if (s.isTapAndHoldCandidate) {
      
      if (duration <= BTN_TAP_MAX_MS) {
        this.fire(button, 'double-tap');
      } else {
        this.fire(button, 'tap-and-hold');
      }
      return;
    }

    if (duration <= BTN_TAP_MAX_MS) {
      
      const sinceLastTap = now - prevTapAt;
      if (prevTapAt > 0 && sinceLastTap <= BTN_DOUBLE_TAP_MAX_MS) {
        s.lastTapAt = 0;
        this.fire(button, 'double-tap');
      } else {
        s.lastTapAt = now;
        this.fire(button, 'tap');
      }
    } else {
      
      s.lastTapAt = 0;
      this.fire(button, 'hold-end');
    }
  }

  
  destroy() {
    for (const s of this.states.values()) {
      if (s.longPressTimer !== null) {
        clearTimeout(s.longPressTimer);
        s.longPressTimer = null;
      }
      s.touchId = null;
    }
  }
}
