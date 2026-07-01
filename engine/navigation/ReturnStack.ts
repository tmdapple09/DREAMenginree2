


const STACK_SIZE = 32;


export class ReturnStack {
  private buffer: Int32Array;
  private head: number;
  private count: number;

  constructor() {
    
    this.buffer = new Int32Array(STACK_SIZE * 4);
    this.head = 0;
    this.count = 0;
  }

  
  push(snapshot: Int32Array): void {
    if (this.count < STACK_SIZE) {
      this.count++;
    }

    const offset = this.head * 4;
    this.buffer[offset] = snapshot[0];     
    this.buffer[offset + 1] = snapshot[1]; 
    this.buffer[offset + 2] = snapshot[2]; 
    this.buffer[offset + 3] = snapshot[3]; 

    this.head = (this.head + 1) % STACK_SIZE;
  }

  
  pop(): Int32Array | null {
    if (this.count === 0) {
      return null;
    }

    this.head = (this.head - 1 + STACK_SIZE) % STACK_SIZE;
    this.count--;

    const offset = this.head * 4;
    const snapshot = new Int32Array(4);
    snapshot[0] = this.buffer[offset];
    snapshot[1] = this.buffer[offset + 1];
    snapshot[2] = this.buffer[offset + 2];
    snapshot[3] = this.buffer[offset + 3];

    return snapshot;
  }

  
  peek(): Int32Array | null {
    if (this.count === 0) {
      return null;
    }

    const peekIndex = (this.head - 1 + STACK_SIZE) % STACK_SIZE;
    const offset = peekIndex * 4;
    const snapshot = new Int32Array(4);
    snapshot[0] = this.buffer[offset];
    snapshot[1] = this.buffer[offset + 1];
    snapshot[2] = this.buffer[offset + 2];
    snapshot[3] = this.buffer[offset + 3];

    return snapshot;
  }

  
  isEmpty(): boolean {
    return this.count === 0;
  }

  
  size(): number {
    return this.count;
  }

  
  clear(): void {
    this.head = 0;
    this.count = 0;
  }

  
  popUntilLayer(targetLayer: number): Int32Array | null {
    let lastSnapshot: Int32Array | null = null;

    while (this.count > 0) {
      const snapshot = this.peek();
      if (snapshot && snapshot[0] === targetLayer) {
        return this.pop();
      }
      lastSnapshot = this.pop();
    }

    return lastSnapshot;
  }
}
