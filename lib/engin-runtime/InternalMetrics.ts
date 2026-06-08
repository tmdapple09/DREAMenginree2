// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: lib/engin-runtime/InternalMetrics.ts.

// ── Source Grammar: Rules ─────────────────────────────────────────────────

// Runtime law comments and invariants stay attached to the code they govern.

// ── Source Grammar: Memory ─────────────────────────────────────────────────

// Module-owned constants, caches, refs, and mutable runtime memory.

// ── Source Grammar: Dependencies ─────────────────────────────────────────────────

// Imports and external modules this runtime file depends on.

import type { EnginCapabilityScorecard } from './EnginCapabilityScorecard';

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

// Types, interfaces, and schemas accepted or provided by this file.

// ── Source Grammar: Actions ─────────────────────────────────────────────────

// Runtime functions, classes, handlers, and state transitions.

export class InternalOnlyMetricStore {
  private readonly scorecards = new Map<string, EnginCapabilityScorecard>();
  set(scorecard: EnginCapabilityScorecard): void { this.scorecards.set(scorecard.enginId, scorecard); }
  get(enginId: string): EnginCapabilityScorecard | undefined { return this.scorecards.get(enginId); }
  all(): EnginCapabilityScorecard[] { return [...this.scorecards.values()]; }
}

export class UserFacingMetricLeakTest {
  constructor(private readonly forbidden: ReadonlyArray<string>) {}
  scan(sourceText: string): string[] {
    return this.forbidden.filter((token) => sourceText.includes(token));
  }
}

export class DevOnlyBenchmarkRunner {
  constructor(private readonly store = new InternalOnlyMetricStore()) {}
  record(scorecard: EnginCapabilityScorecard): EnginCapabilityScorecard {
    this.store.set(scorecard);
    return scorecard;
  }
  results(): EnginCapabilityScorecard[] { return this.store.all(); }
}

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.
