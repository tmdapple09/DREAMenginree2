// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: lib/runtime/runtimeContainer.ts.

// ── Source Grammar: Rules ─────────────────────────────────────────────────

// Runtime law comments and invariants stay attached to the code they govern.

// ── Source Grammar: Memory ─────────────────────────────────────────────────

// Module-owned constants, caches, refs, and mutable runtime memory.

// ── Source Grammar: Dependencies ─────────────────────────────────────────────────

// Imports and external modules this runtime file depends on.

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

// Types, interfaces, and schemas accepted or provided by this file.

export type RuntimeStrategy<State, Input> = (state: State, input: Input) => State;

// ── Source Grammar: Actions ─────────────────────────────────────────────────

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

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.
