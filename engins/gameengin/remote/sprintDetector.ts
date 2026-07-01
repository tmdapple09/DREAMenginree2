

export const DOUBLE_TAP_WINDOW_MS = 280;

export const SPRINT_MOVE_THRESHOLD = 0.18;

interface InternalState {
  lastReleaseAt: number | null;
  pressActive: boolean;
  pressedAt: number | null;
  
  armedForSprint: boolean;
  
  moving: boolean;
}

export class SprintDetector {
  private state: InternalState = {
    lastReleaseAt: null,
    pressActive: false,
    pressedAt: null,
    armedForSprint: false,
    moving: false,
  };

  constructor(private readonly doubleTapWindowMs: number = DOUBLE_TAP_WINDOW_MS) {}

  onTouchStart(nowMs: number): void {
    const sinceRelease = this.state.lastReleaseAt === null
      ? Number.POSITIVE_INFINITY
      : nowMs - this.state.lastReleaseAt;
    this.state.pressActive = true;
    this.state.pressedAt = nowMs;
    this.state.armedForSprint = sinceRelease <= this.doubleTapWindowMs;
    this.state.moving = false;
  }

  onMove(_nowMs: number, magnitude: number): void {
    if (!this.state.pressActive) return;
    this.state.moving = magnitude >= SPRINT_MOVE_THRESHOLD;
  }

  onTouchEnd(nowMs: number): void {
    this.state.pressActive = false;
    this.state.pressedAt = null;
    this.state.armedForSprint = false;
    this.state.moving = false;
    this.state.lastReleaseAt = nowMs;
  }

  
  isSprinting(): boolean {
    return this.state.pressActive && this.state.armedForSprint && this.state.moving;
  }

  
  inspect(): Readonly<InternalState> {
    return { ...this.state };
  }
}

