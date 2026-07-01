


export interface WidgetMsg {
  fromInstanceId: string;
  toWidgetId: string;
  type: number; 
  payload: unknown;
  timestamp: number;
}

export type WidgetMsgCallback = (msg: WidgetMsg) => void;


export class WidgetEventBus {
  private listeners: Map<string, WidgetMsgCallback[]>;
  private messageQueue: WidgetMsg[];
  private isProcessing: boolean;

  constructor() {
    this.listeners = new Map();
    this.messageQueue = [];
    this.isProcessing = false;
  }

  
  subscribe(widgetId: string, callback: WidgetMsgCallback): () => void {
    if (!this.listeners.has(widgetId)) {
      this.listeners.set(widgetId, []);
    }

    const callbacks = this.listeners.get(widgetId)!;
    callbacks.push(callback);

    
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) {
        callbacks.splice(index, 1);
      }
    };
  }

  
  emit(msg: WidgetMsg): void {
    this.messageQueue.push(msg);

    
    if (!this.isProcessing) {
      this.scheduleProcessing();
    }
  }

  
  send(
    fromInstanceId: string,
    toWidgetId: string,
    type: number,
    payload: unknown
  ): void {
    this.emit({
      fromInstanceId,
      toWidgetId,
      type,
      payload,
      timestamp: Date.now()
    });
  }

  
  private scheduleProcessing(): void {
    this.isProcessing = true;

    
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(() => this.processMessages());
    } else if (typeof queueMicrotask !== 'undefined') {
      
      queueMicrotask(() => this.processMessages());
    } else {
      
      setTimeout(() => this.processMessages(), 0);
    }
  }

  
  private processMessages(): void {
    
    while (this.messageQueue.length > 0) {
      const msg = this.messageQueue.shift()!;
      const callbacks = this.listeners.get(msg.toWidgetId);

      if (callbacks) {
        callbacks.forEach((callback) => {
          try {
            callback(msg);
          } catch (error: unknown) {
            console.error('Error processing widget message:', error);
          }
        });
      }
    }

    this.isProcessing = false;
  }

  
  clear(): void {
    this.listeners.clear();
    this.messageQueue = [];
    this.isProcessing = false;
  }

  
  getQueueSize(): number {
    return this.messageQueue.length;
  }
}


export const widgetEventBus = new WidgetEventBus();
