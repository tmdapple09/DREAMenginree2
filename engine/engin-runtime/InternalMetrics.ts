import type { EnginCapabilityScorecard } from './EnginCapabilityScorecard';

















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






