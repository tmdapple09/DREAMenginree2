import type { EnginRuleSetContract, EnginAction } from './EnginRuleSetContract';
import type { JsonObject } from './EnginBaseState';

export interface RuntimeEnginRegistration<A extends EnginAction = EnginAction> {
  readonly id: string;
  readonly name: string;
  readonly route: string;
  readonly daydreamHref: string;
  readonly ruleSet: EnginRuleSetContract<A>;
  readonly capabilityId: string;
  readonly workflowSurfaces: readonly string[];
  readonly intentTypes: readonly A['type'][];
  readonly handoffs: readonly string[];
  readonly metadata: JsonObject;
}

const registrations = new Map<string, RuntimeEnginRegistration>();

export function registerRuntimeEngin<A extends EnginAction>(registration: RuntimeEnginRegistration<A>): RuntimeEnginRegistration<A> {
  registrations.set(registration.id, registration as unknown as RuntimeEnginRegistration);
  return registration;
}

export function getRuntimeEnginRegistration(id: string): RuntimeEnginRegistration | null {
  return registrations.get(id) ?? null;
}

export function listRuntimeEnginRegistrations(): RuntimeEnginRegistration[] {
  return [...registrations.values()];
}

export function resolveRuntimeCapability(intentType: string): RuntimeEnginRegistration | null {
  return listRuntimeEnginRegistrations().find((entry) => entry.intentTypes.includes(intentType)) ?? null;
}
