import type { JsonObject } from './EnginBaseState';
import {
  acceptanceValueForTarget,
  evaluateCapabilityTarget,
  type CapabilityTargetDimension,
  type CapabilityTargetEvaluation,
  type EnginCapabilityProfile,
} from './EnginCapabilityTargets';

// Framework directives stay physically first when required.

// Runtime file: lib/engin-runtime/EnginCapabilityScorecard.ts.

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export type MetricStatus = 'pass' | 'fail' | 'unsupported' | 'hardware-dependent' | 'blocked';

export interface MetricMeasurement extends JsonObject {
  dimension: CapabilityTargetDimension;
  value: number | null;
  status?: Exclude<MetricStatus, 'pass' | 'fail'>;
  source?: 'measured' | 'reported' | 'hardware-dependent';
  evidence?: JsonObject;
  reason?: string;
}

export interface EnginCapabilityScorecardEntry extends JsonObject {
  dimension: CapabilityTargetDimension;
  status: MetricStatus;
  measuredValue: number | null;
  targetValue: number;
  acceptanceValue: number;
  direction: CapabilityTargetEvaluation['direction'];
  unit: CapabilityTargetEvaluation['unit'];
  source?: 'measured' | 'reported' | 'hardware-dependent';
  evidence?: JsonObject;
  reason?: string;
}

export interface EnginCapabilityScorecard extends JsonObject {
  enginId: string;
  generatedAt: string;
  entries: EnginCapabilityScorecardEntry[];
  passed: number;
  failed: number;
  unsupported: number;
  hardwareDependent: number;
  blocked: number;
}

// Runtime functions, classes, handlers, and state transitions.

function measuredPasses(target: CapabilityTargetEvaluation, measured: number): boolean {
  return target.direction === 'at-least'
    ? measured >= acceptanceValueForTarget(target)
    : measured <= acceptanceValueForTarget(target);
}

export function createEnginCapabilityScorecard(
  profile: EnginCapabilityProfile,
  measurements: ReadonlyArray<MetricMeasurement>,
  now = new Date().toISOString(),
): EnginCapabilityScorecard {
  const byDimension = new Map(measurements.map((measurement) => [measurement.dimension, measurement]));
  const entries = profile.targets.map((rawTarget): EnginCapabilityScorecardEntry => {
    const target = evaluateCapabilityTarget(rawTarget);
    const measurement = byDimension.get(target.dimension);
    if (!measurement || measurement.value === null || measurement.status) {
      const status = measurement?.status ?? 'blocked';
      return {
        dimension: target.dimension,
        status,
        measuredValue: measurement?.value ?? null,
        targetValue: target.target,
        acceptanceValue: target.acceptanceValue,
        direction: target.direction,
        unit: target.unit,
        source: measurement?.source,
        evidence: measurement?.evidence,
        reason: measurement?.reason ?? (measurement?.value === null ? 'Metric has no measured value.' : 'Metric is reported but not gate-measured.'),
      };
    }
    const status: MetricStatus = measuredPasses(target, measurement.value) ? 'pass' : 'fail';
    return {
      dimension: target.dimension,
      status,
      measuredValue: measurement.value,
      targetValue: target.target,
      acceptanceValue: target.acceptanceValue,
      direction: target.direction,
      unit: target.unit,
      source: measurement.source,
      evidence: measurement.evidence,
      reason: measurement.reason,
    };
  });
  return {
    enginId: profile.enginId,
    generatedAt: now,
    entries,
    passed: entries.filter((entry) => entry.status === 'pass').length,
    failed: entries.filter((entry) => entry.status === 'fail').length,
    unsupported: entries.filter((entry) => entry.status === 'unsupported').length,
    hardwareDependent: entries.filter((entry) => entry.status === 'hardware-dependent').length,
    blocked: entries.filter((entry) => entry.status === 'blocked').length,
  };
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
