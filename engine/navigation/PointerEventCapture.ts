


export interface PointerState {
  
  p0x: number;
  p0y: number;
  p0t: number;
  p1x: number;
  p1y: number;
  p1t: number;
  activeCount: number;
}

export type PointerEventCallback = (state: PointerState) => void;


export class PointerEventCapture {
  private state: PointerState;
  private activePointers: Map<number, number>; 
  private element: HTMLElement | Document;
  private onMove: PointerEventCallback | null;
  private onEnd: PointerEventCallback | null;

  constructor(element: HTMLElement | Document = document) {
    this.element = element;
    this.state = {
      p0x: 0,
      p0y: 0,
      p0t: 0,
      p1x: 0,
      p1y: 0,
      p1t: 0,
      activeCount: 0,
    };
    this.activePointers = new Map();
    this.onMove = null;
    this.onEnd = null;

    this.handlePointerDown = this.handlePointerDown.bind(this);
    this.handlePointerMove = this.handlePointerMove.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);
    this.handlePointerCancel = this.handlePointerCancel.bind(this);
  }

  
  start(onMove: PointerEventCallback, onEnd: PointerEventCallback): void {
    this.onMove = onMove;
    this.onEnd = onEnd;

    this.element.addEventListener('pointerdown', this.handlePointerDown as EventListener);
    this.element.addEventListener('pointermove', this.handlePointerMove as EventListener);
    this.element.addEventListener('pointerup', this.handlePointerUp as EventListener);
    this.element.addEventListener('pointercancel', this.handlePointerCancel as EventListener);
  }

  
  stop(): void {
    this.element.removeEventListener('pointerdown', this.handlePointerDown as EventListener);
    this.element.removeEventListener('pointermove', this.handlePointerMove as EventListener);
    this.element.removeEventListener('pointerup', this.handlePointerUp as EventListener);
    this.element.removeEventListener('pointercancel', this.handlePointerCancel as EventListener);

    this.onMove = null;
    this.onEnd = null;
  }

  private handlePointerDown(e: PointerEvent): void {
    e.preventDefault();

    
    if (this.activePointers.size >= 2) {
      return;
    }

    
    if ('setPointerCapture' in e.target!) {
      (e.target as Element).setPointerCapture(e.pointerId);
    }

    const now = performance.now();
    const index = this.activePointers.size;
    this.activePointers.set(e.pointerId, index);

    if (index === 0) {
      this.state.p0x = e.clientX;
      this.state.p0y = e.clientY;
      this.state.p0t = now;
    } else {
      this.state.p1x = e.clientX;
      this.state.p1y = e.clientY;
      this.state.p1t = now;
    }

    this.state.activeCount = this.activePointers.size;
  }

  private handlePointerMove(e: PointerEvent): void {
    e.preventDefault();

    const index = this.activePointers.get(e.pointerId);
    if (index === undefined) {
      return;
    }

    const now = performance.now();

    if (index === 0) {
      this.state.p0x = e.clientX;
      this.state.p0y = e.clientY;
      this.state.p0t = now;
    } else {
      this.state.p1x = e.clientX;
      this.state.p1y = e.clientY;
      this.state.p1t = now;
    }

    if (this.onMove) {
      this.onMove(this.state);
    }
  }

  private handlePointerUp(e: PointerEvent): void {
    e.preventDefault();
    this.removePointer(e.pointerId);

    if (this.onEnd) {
      this.onEnd(this.state);
    }
  }

  private handlePointerCancel(e: PointerEvent): void {
    e.preventDefault();
    this.removePointer(e.pointerId);

    if (this.onEnd) {
      this.onEnd(this.state);
    }
  }

  private removePointer(pointerId: number): void {
    const index = this.activePointers.get(pointerId);
    if (index === undefined) {
      return;
    }

    this.activePointers.delete(pointerId);

    
    if (index === 0 && this.activePointers.size === 1) {
      
      for (const [id, idx] of this.activePointers.entries()) {
        if (idx === 1) {
          this.activePointers.set(id, 0);
          this.state.p0x = this.state.p1x;
          this.state.p0y = this.state.p1y;
          this.state.p0t = this.state.p1t;
          break;
        }
      }
    }

    this.state.activeCount = this.activePointers.size;
  }

  
  getState(): PointerState {
    return { ...this.state };
  }
}
