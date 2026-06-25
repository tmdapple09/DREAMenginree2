/**
 * lib/gameengin/remote/sprintDetector.ts
 *
 * First-touch sprint detector for the left joystick.
 *
 * Sprint starts when the joystick is held and moved past the threshold.
 * Release exits sprint. No repeated tap gate.
 */

export const DOUBLE_TAP_WINDOW_MS = 280; // legacy compatibility only
/** Minimum joystick magnitude (0..1) at which sprint is considered "moving". */
export const SPRINT_MOVE_THRESHOLD = 0.18;

interface InternalState {
  pressActive: boolean;
  /** True only while the joystick is also being moved. */
  moving: boolean;
}

export class SprintDetector {
  private state: InternalState = {
    pressActive: false,
    moving: false,
  };

  constructor(_doubleTapWindowMs: number = DOUBLE_TAP_WINDOW_MS) {}

  onTouchStart(_nowMs: number): void {
    this.state.pressActive = true;
    this.state.moving = false;
  }

  onMove(_nowMs: number, magnitude: number): void {
    if (!this.state.pressActive) return;
    this.state.moving = magnitude >= SPRINT_MOVE_THRESHOLD;
  }

  onTouchEnd(_nowMs: number): void {
    this.state.pressActive = false;
    this.state.moving = false;
  }

  /** Sprint is active iff the joystick is held and being moved. */
  isSprinting(): boolean {
    return this.state.pressActive && this.state.moving;
  }

  /** Test/inspection-only snapshot. */
  inspect(): Readonly<InternalState> {
    return { ...this.state };
  }
}

