




export const MODE_HOME = 0;
export const MODE_PROFILE = 1;
export const MODE_SHRUNK = 2;


export const HOLD_IDLE = 0;
export const HOLD_HOLDING = 1;
export const HOLD_FIRED = 2;


export class AnchorStateBuffer {
  private buffer: Int32Array;

  constructor() {
    
    this.buffer = new Int32Array(4);
    this.reset();
  }

  reset(): void {
    this.buffer[0] = MODE_HOME;
    this.buffer[1] = 0; 
    this.buffer[2] = HOLD_IDLE;
    this.buffer[3] = MODE_HOME;
  }

  
  get mode(): number {
    return this.buffer[0];
  }

  get isOpen(): boolean {
    return this.buffer[1] === 1;
  }

  get holdLatch(): number {
    return this.buffer[2];
  }

  get prevMode(): number {
    return this.buffer[3];
  }

  
  set mode(value: number) {
    
    if (this.buffer[0] !== MODE_SHRUNK && value === MODE_SHRUNK) {
      this.buffer[3] = this.buffer[0];
    }
    this.buffer[0] = value;
  }

  set isOpen(value: boolean) {
    this.buffer[1] = value ? 1 : 0;
  }

  set holdLatch(value: number) {
    this.buffer[2] = value;
  }

  set prevMode(value: number) {
    this.buffer[3] = value;
  }

  
  open(): void {
    this.buffer[1] = 1;
  }

  close(): void {
    this.buffer[1] = 0;
  }

  toggleOpen(): void {
    this.buffer[1] = this.buffer[1] === 1 ? 0 : 1;
  }

  
  switchToHome(): void {
    this.buffer[3] = this.buffer[0]; 
    this.buffer[0] = MODE_HOME;
  }

  switchToProfile(): void {
    this.buffer[3] = this.buffer[0]; 
    this.buffer[0] = MODE_PROFILE;
  }

  switchToShrunk(): void {
    
    if (this.buffer[0] !== MODE_SHRUNK) {
      this.buffer[3] = this.buffer[0];
    }
    this.buffer[0] = MODE_SHRUNK;
  }

  restoreFromShrunk(): void {
    if (this.buffer[0] === MODE_SHRUNK) {
      this.buffer[0] = this.buffer[3]; 
    }
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
      (this.buffer[0] === MODE_HOME ||
       this.buffer[0] === MODE_PROFILE ||
       this.buffer[0] === MODE_SHRUNK) &&
      (this.buffer[1] === 0 || this.buffer[1] === 1) &&
      (this.buffer[2] === HOLD_IDLE ||
       this.buffer[2] === HOLD_HOLDING ||
       this.buffer[2] === HOLD_FIRED) &&
      (this.buffer[3] === MODE_HOME || this.buffer[3] === MODE_PROFILE)
    );
  }

  
  toString(): string {
    const modeNames = ['HOME', 'PROFILE', 'SHRUNK'];
    const holdNames = ['IDLE', 'HOLDING', 'FIRED'];
    return `AnchorState{mode=${modeNames[this.buffer[0]]}, isOpen=${this.buffer[1] === 1}, holdLatch=${holdNames[this.buffer[2]]}, prevMode=${modeNames[this.buffer[3]]}}`;
  }
}
