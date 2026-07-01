

export type EventHandler<T = unknown> = (payload: T) => void;

export interface EventBus<Events extends Record<string, unknown> = Record<string, unknown>> {
  on<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>): void;
  off<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>): void;
  emit<K extends keyof Events>(event: K, payload: Events[K]): void;
  
  destroy(): void;
  
  readonly destroyed: boolean;
}


export function createEventBus<
  Events extends Record<string, unknown> = Record<string, unknown>
>(): EventBus<Events> {
  const handlers = new Map<keyof Events, Set<EventHandler<unknown>>>();
  let _destroyed = false;

  function assertAlive( ){
    if (_destroyed) throw new Error('EventBus: cannot use a destroyed bus.');
  }

  return {
    get destroyed() {
      return _destroyed;
    },

    on<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>) {
      assertAlive();
      if (!handlers.has(event)) handlers.set(event, new Set());
      handlers.get(event)!.add(handler as EventHandler<unknown>);
    },

    off<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>) {
      handlers.get(event)?.delete(handler as EventHandler<unknown>);
    },

    emit<K extends keyof Events>(event: K, payload: Events[K]) {
      assertAlive();
      handlers.get(event)?.forEach((h) => h(payload));
    },

    destroy() {
      handlers.clear();
      _destroyed = true;
    },
  };
}


export function createDualRuntimeHub(
  busA: EventBus<Record<string, unknown>>,
  busB: EventBus<Record<string, unknown>>
): { stop(): void } {
  
  
  

  const bridgedKey = '__bridged';

  const relayAtoB: EventHandler<unknown> = (payload) => {
    if (
      payload !== null &&
      typeof payload === 'object' &&
      bridgedKey in (payload as object)
    )
      return;
    busB.emit('__bridge' as keyof Record<string, unknown>, {
      ...(payload as object),
      [bridgedKey]: true,
    });
  };

  const relayBtoA: EventHandler<unknown> = (payload) => {
    if (
      payload !== null &&
      typeof payload === 'object' &&
      bridgedKey in (payload as object)
    )
      return;
    busA.emit('__bridge' as keyof Record<string, unknown>, {
      ...(payload as object),
      [bridgedKey]: true,
    });
  };

  busA.on('__bridge' as keyof Record<string, unknown>, relayAtoB);
  busB.on('__bridge' as keyof Record<string, unknown>, relayBtoA);

  return {
    stop() {
      busA.off('__bridge' as keyof Record<string, unknown>, relayAtoB);
      busB.off('__bridge' as keyof Record<string, unknown>, relayBtoA);
    },
  };
}
