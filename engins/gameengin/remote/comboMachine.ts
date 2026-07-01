import {
    ALL_COMBOS,
    maxComboLength,
    MULTITOUCH_COMBOS,
    type Combo,
    type FaceButton,
    type MultiTouchCombo,
} from './moves';



export const COMBO_WINDOW_MS = 350;
export const MULTITOUCH_WINDOW_MS = 60;

interface PressRecord {
  button: FaceButton;
  at: number;
}

export interface ComboMatch {
  kind: 'sequence';
  combo: Combo;
}

export interface MultiTouchMatch {
  kind: 'multitouch';
  combo: MultiTouchCombo;
}

export type RemoteMatch = ComboMatch | MultiTouchMatch;

export interface ComboMachineOptions {
  comboWindowMs?: number;
  multiTouchWindowMs?: number;
  combos?: readonly Combo[];
  multiTouchCombos?: readonly MultiTouchCombo[];
  
  isSprinting?: () => boolean;
}

export class ComboMachine {
  private buffer: PressRecord[] = [];
  private readonly comboWindowMs: number;
  private readonly multiTouchWindowMs: number;
  private readonly combos: readonly Combo[];
  private readonly multiTouchCombos: readonly MultiTouchCombo[];
  private readonly maxLen: number;
  private readonly isSprinting: () => boolean;

  constructor(opts: ComboMachineOptions = {}) {
    this.comboWindowMs = opts.comboWindowMs ?? COMBO_WINDOW_MS;
    this.multiTouchWindowMs = opts.multiTouchWindowMs ?? MULTITOUCH_WINDOW_MS;
    this.combos = opts.combos ?? ALL_COMBOS;
    this.multiTouchCombos = opts.multiTouchCombos ?? MULTITOUCH_COMBOS;
    this.maxLen = maxComboLength(this.combos);
    this.isSprinting = opts.isSprinting ?? (() => false);
  }

  
  press(button: FaceButton, nowMs: number): RemoteMatch | null {
    
    this.buffer = this.buffer.filter((r) => nowMs - r.at <= this.comboWindowMs);
    this.buffer.push({ button, at: nowMs });

    
    const recent = this.buffer.filter((r) => nowMs - r.at <= this.multiTouchWindowMs);
    if (recent.length >= 2) {
      const distinct = Array.from(new Set(recent.map((r) => r.button)));
      if (distinct.length >= 2) {
        const mt = this.matchMultiTouch(distinct);
        if (mt) {
          this.buffer = [];
          return { kind: 'multitouch', combo: mt };
        }
      }
    }

    
    const sequence = this.buffer.map((r) => r.button);
    const sprint = this.isSprinting();
    for (let len = Math.min(sequence.length, this.maxLen); len >= 2; len--) {
      const suffix = sequence.slice(sequence.length - len);
      const combo = this.matchSequence(suffix, sprint);
      if (combo) {
        this.buffer = [];
        return { kind: 'sequence', combo };
      }
    }

    
    if (this.buffer.length > this.maxLen) this.buffer = this.buffer.slice(-this.maxLen);
    return null;
  }

  
  reset(): void {
    this.buffer = [];
  }

  inspect(): readonly PressRecord[] {
    return [...this.buffer];
  }

  private matchSequence(suffix: FaceButton[], sprint: boolean): Combo | null {
    
    if (sprint) {
      const sprintMatch = this.combos.find(
        (c) => c.sprint && sequenceEquals(c.sequence, suffix),
      );
      if (sprintMatch) return sprintMatch;
    }
    return this.combos.find((c) => !c.sprint && sequenceEquals(c.sequence, suffix)) ?? null;
  }

  private matchMultiTouch(buttons: FaceButton[]): MultiTouchCombo | null {
    const sorted = [...buttons].sort();
    return this.multiTouchCombos.find((c) => {
      if (c.buttons.length !== sorted.length) return false;
      const csorted = [...c.buttons].sort();
      return csorted.every((b, i: number) => b === sorted[i]);
    }) ?? null;
  }
}

function sequenceEquals(a: readonly FaceButton[], b: readonly FaceButton[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}
