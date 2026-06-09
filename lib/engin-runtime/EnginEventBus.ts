// Framework directives stay physically first when required.

// Runtime file: lib/engin-runtime/EnginEventBus.ts.

/**
 * lib/engin-runtime/EnginEventBus.ts
 *
 * Client-safe event bus abstraction for Engin-internal events.
 * Each EnginRuntime creates exactly one bus; buses are never shared between
 * engines and never carry domain behavior.
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export interface EnginLifecycleEvents extends Record<string, object> {
  'engin:started': { enginId: string };
  'engin:paused': { enginId: string };
  'engin:resumed': { enginId: string };
  'engin:stopped': { enginId: string };
  'engin:error': { enginId: string; message: string; cause?: string };
  'engin:state': { enginId: string; revision: number };
  'engin:persisted': { enginId: string; key: string };
  'engin:restored': { enginId: string; key: string };
}

export type EnginEventMap<
  DomainEvents extends Record<string, object> = Record<string, object>,
> = EnginLifecycleEvents & DomainEvents;

export type EnginEventHandler<TPayload extends object> = (payload: TPayload) => void;

export interface EnginEventBus<
  DomainEvents extends Record<string, object> = Record<string, object>,
> {
  on<K extends keyof EnginEventMap<DomainEvents>>(
    event: K,
    handler: EnginEventHandler<EnginEventMap<DomainEvents>[K]>,
  ): void;
  off<K extends keyof EnginEventMap<DomainEvents>>(
    event: K,
    handler: EnginEventHandler<EnginEventMap<DomainEvents>[K]>,
  ): void;
  emit<K extends keyof EnginEventMap<DomainEvents>>(
    event: K,
    payload: EnginEventMap<DomainEvents>[K],
  ): void;
  destroy(): void;
  readonly destroyed: boolean;
}

// Runtime functions, classes, handlers, and state transitions.

/**
 * createEnginEventBus<DomainEvents>()
 *
 * Returns a new, scoped event bus for a single engine instance.
 * MUST NOT be shared across multiple engines.
 */
export function createEnginEventBus<
  DomainEvents extends Record<string, object> = Record<string, object>,
>(): EnginEventBus<DomainEvents> {
  const handlers = new Map<keyof EnginEventMap<DomainEvents>, Set<(payload: object) => void>>();
  let destroyed = false;

  function assertAlive(): void {
    if (destroyed) throw new Error('EnginEventBus: cannot use a destroyed bus.');
  }

  return {
    get destroyed() {
      return destroyed;
    },

    on<K extends keyof EnginEventMap<DomainEvents>>(
      event: K,
      handler: EnginEventHandler<EnginEventMap<DomainEvents>[K]>,
    ): void {
      assertAlive();
      const existing = handlers.get(event) ?? new Set();
      existing.add(handler as (payload: object) => void);
      handlers.set(event, existing);
    },

    off<K extends keyof EnginEventMap<DomainEvents>>(
      event: K,
      handler: EnginEventHandler<EnginEventMap<DomainEvents>[K]>,
    ): void {
      handlers
        .get(event)
        ?.delete(handler as (payload: object) => void);
    },

    emit<K extends keyof EnginEventMap<DomainEvents>>(
      event: K,
      payload: EnginEventMap<DomainEvents>[K],
    ): void {
      assertAlive();
      handlers.get(event)?.forEach((handler) => handler(payload as object));
    },

    destroy(): void {
      handlers.clear();
      destroyed = true;
    },
  };
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
