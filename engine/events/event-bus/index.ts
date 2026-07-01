

export type EventHandler<T = unknown> = (payload: T) => void;

export interface EventBus<Events extends Record<string, unknown> = Record<string, unknown>> {
  
  emit<K extends keyof Events>(event: K, payload: Events[K]): void;
  
  on<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>): void;
  
  off<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>): void;
  
  once<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>): void;
  
  clear(event?: keyof Events): void;
  
  events(): Array<keyof Events>;
}


export function createEventBus<
  Events extends Record<string, unknown> = Record<string, unknown>,
>(): EventBus<Events> {
  const listeners = new Map<keyof Events, Set<EventHandler<unknown>>>();

  function getSet(event: keyof Events): Set<EventHandler<unknown>> {
    let s = listeners.get(event);
    if (!s) {
      s = new Set();
      listeners.set(event, s);
    }
    return s;
  }

  return {
    emit<K extends keyof Events>(event: K, payload: Events[K]) {
      const s = listeners.get(event);
      if (s) {
        for (const handler of s) {
          handler(payload);
        }
      }
    },

    on<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>) {
      getSet(event).add(handler as EventHandler<unknown>);
    },

    off<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>) {
      listeners.get(event)?.delete(handler as EventHandler<unknown>);
    },

    once<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>) {
      const wrapper: EventHandler<unknown> = (payload) => {
        handler(payload as Events[K]);
        listeners.get(event)?.delete(wrapper);
      };
      getSet(event).add(wrapper);
    },

    clear(event?: keyof Events) {
      if (event !== undefined) {
        listeners.delete(event);
      } else {
        listeners.clear();
      }
    },

    events(): Array<keyof Events> {
      return Array.from(listeners.keys());
    },
  };
}


export function bridgeBuses(
  busA: EventBus,
  busB: EventBus,
  
  aToB: string[],
  
  bToA: string[],
): () => void {
  const forwardersAtoB = new Map<string, EventHandler<unknown>>();
  const forwardersBtoA = new Map<string, EventHandler<unknown>>();

  for (const event of aToB) {
    const fwd: EventHandler<unknown> = (payload) => busB.emit(event, payload);
    busA.on(event, fwd);
    forwardersAtoB.set(event, fwd);
  }

  for (const event of bToA) {
    const fwd: EventHandler<unknown> = (payload) => busA.emit(event, payload);
    busB.on(event, fwd);
    forwardersBtoA.set(event, fwd);
  }

  return () => {
    for (const [event, fwd] of forwardersAtoB) busA.off(event, fwd);
    for (const [event, fwd] of forwardersBtoA) busB.off(event, fwd);
  };
}

