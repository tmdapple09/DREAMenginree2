// Framework directives stay physically first when required.

// Runtime file: lib/runtime/runtimeContainer.ts.

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export type RuntimeStrategy<State, Input> = (state: State, input: Input) => State;

// Runtime functions, classes, handlers, and state transitions.

/**
 * Strategy-based runtime container.
 * Infrastructure owns state progression; business logic is injected.
 */
export class RuntimeContainer<State, Input> {
  private state: State;
  private readonly strategy: RuntimeStrategy<State, Input>;

  constructor(initialState: State, initialStrategy: RuntimeStrategy<State, Input>) {
    this.state = initialState;
    this.strategy = initialStrategy;
  }

  run(input: Input): State {
    this.state = this.strategy(this.state, input);
    return this.state;
  }

  getState(): State {
    return this.state;
  }
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
