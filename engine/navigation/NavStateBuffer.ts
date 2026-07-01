




export const LAYER_HOME = 0;
export const LAYER_CUBE = 1;
export const LAYER_PROFILE = 2;
export const LAYER_WIDGET = 3;
export const LAYER_DREAM = 4;


export const PROFILE_DEPTH = 1;
export const FULLSCREEN_DEPTH = 2;


export class NavStateBuffer {
  private buffer: Int32Array;

  constructor() {
    
    this.buffer = new Int32Array(4);
    this.reset();
  }

  reset(): void {
    this.buffer[0] = LAYER_HOME;
    this.buffer[1] = 0;
    this.buffer[2] = -1;
    this.buffer[3] = 0;
  }

  
  get layer(): number {
    return this.buffer[0];
  }

  get face(): number {
    return this.buffer[1];
  }

  get slot(): number {
    return this.buffer[2];
  }

  get depth(): number {
    return this.buffer[3];
  }

  
  set layer(value: number) {
    this.buffer[0] = value;
  }

  set face(value: number) {
    this.buffer[1] = value;
  }

  set slot(value: number) {
    this.buffer[2] = value;
  }

  set depth(value: number) {
    this.buffer[3] = value;
  }

  
  incrementDepth(): void {
    this.buffer[3] += 1;
  }

  decrementDepth(): boolean {
    if (this.buffer[3] > 0) {
      this.buffer[3] -= 1;
      return true;
    }
    return false;
  }

  rotateFace(delta: number): void {
    this.buffer[1] = (this.buffer[1] + delta + 6) % 6;
  }

  
  snapshot(): Int32Array {
    return new Int32Array(this.buffer);
  }

  
  restore(snapshot: Int32Array): void {
    this.buffer[0] = snapshot[0];
    this.buffer[1] = snapshot[1];
    this.buffer[2] = snapshot[2];
    this.buffer[3] = snapshot[3];
  }

  
  isValid(): boolean {
    return (
      this.depth >= 0 &&
      this.face >= 0 && this.face <= 5 &&
      (this.slot === -1 || (this.slot >= 0 && this.slot <= 7))
    );
  }

  
  isProfileActive(): boolean {
    return this.layer === LAYER_PROFILE && this.depth === PROFILE_DEPTH;
  }

  
  isFullscreen(): boolean {
    return this.depth >= FULLSCREEN_DEPTH;
  }

  
  toString(): string {
    const layerNames = ['HOME', 'CUBE', 'PROFILE', 'WIDGET', 'DREAM'];
    return `NavState{layer=${layerNames[this.layer] || this.layer}, face=${this.face}, slot=${this.slot}, depth=${this.depth}}`;
  }
}
