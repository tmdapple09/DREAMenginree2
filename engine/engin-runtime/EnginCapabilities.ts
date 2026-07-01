import {
  isDomainObject,
  type DomainObject,
  type JsonValue,
} from './EnginBaseState';












export const DENY_ALL: EnginCapabilityMap = new Proxy(
  {} as EnginCapabilityMap,
  {
    get: () => false,
  },
);


export const DEFAULT_USER_CAPABILITIES: EnginCapabilityMap = Object.freeze({
  'state:read': true,
  'state:write': true,
  'persistence:local': true,
  'persistence:remote': false,
  'session:start': true,
  'session:end': true,
  'session:pause': true,
  'session:resume': true,
  'scores:read': true,
  'scores:publish': true,
  'world:edit': true,
  'world:save': true,
  'assets:load': true,
  'assets:upload': false,
  'bridge:emit': true,
  'bridge:listen': true,
  'scripts:edit': false,
  'scripts:run': false,
  'co-op:enable': false,
} as Record<EnginCapability, boolean> as EnginCapabilityMap);







export type EnginCapability =
  
  | 'state:read'
  | 'state:write'
  | 'persistence:local'
  | 'persistence:remote'
  
  | 'session:start'
  | 'session:end'
  | 'session:pause'
  | 'session:resume'
  
  | 'scores:read'
  | 'scores:publish'
  
  | 'world:edit'
  | 'world:save'
  
  | 'assets:load'
  | 'assets:upload'
  
  | 'bridge:emit'
  | 'bridge:listen'
  
  | 'scripts:edit'
  | 'scripts:run'
  | 'co-op:enable'
  
  | `custom:${string}`;

export type EnginCapabilityMap = Readonly<Record<EnginCapability, boolean>>;

export interface CapabilityGateResult {
  granted: boolean;
  
  reason?: string;
}

export type DomainCapability =
  | 'read'
  | 'write'
  | 'share'
  | 'move'
  | 'duplicate'
  | 'publish'
  | 'destroy'
  | 'admin';

export interface DomainAuthorizationContext {
  actorId: string;
  runtimeId: string;
  surfaceRuntimeIds: ReadonlyArray<string>;
  collaboration: {
    active: boolean;
    participantIds: ReadonlyArray<string>;
    editorIds: ReadonlyArray<string>;
  };
  admin?: boolean;
}




export function gateCapability(
  map: EnginCapabilityMap,
  capability: EnginCapability,
): CapabilityGateResult {
  const granted = (map as Record<string, boolean>)[capability] === true;
  return granted
    ? { granted: true }
    : { granted: false, reason: `Capability '${capability}' is not granted.` };
}


export function mergeCapabilities(
  base: EnginCapabilityMap,
  overrides: Partial<Record<EnginCapability, boolean>>,
): EnginCapabilityMap {
  return Object.freeze({
    ...(base as Record<string, boolean>),
    ...overrides,
  }) as EnginCapabilityMap;
}


export function authorizeDomainCapability(
  action: DomainCapability,
  object: DomainObject<string, JsonValue>,
  context: DomainAuthorizationContext,
): CapabilityGateResult {
  if (!context || typeof context !== 'object')
    return { granted: false, reason: 'Authorization context is required.' };
  if (typeof context.actorId !== 'string' || !context.actorId.trim())
    return { granted: false, reason: 'Actor identity is required.' };
  if (typeof context.runtimeId !== 'string' || !context.runtimeId.trim())
    return { granted: false, reason: 'Runtime context is required.' };
  if (!isDomainObject(object))
    return { granted: false, reason: 'Domain object envelope is invalid.' };
  if (!Array.isArray(context.surfaceRuntimeIds))
    return { granted: false, reason: 'Surface scope is invalid.' };
  if (
    !context.collaboration ||
    typeof context.collaboration.active !== 'boolean' ||
    !Array.isArray(context.collaboration.participantIds) ||
    !Array.isArray(context.collaboration.editorIds)
  ) {
    return { granted: false, reason: 'Collaboration state is invalid.' };
  }
  if (!context.surfaceRuntimeIds.includes(context.runtimeId)) {
    return {
      granted: false,
      reason: 'Runtime context is outside the active surface scope.',
    };
  }
  if (!context.surfaceRuntimeIds.includes(object.runtimeId)) {
    return {
      granted: false,
      reason: 'Object is outside the active surface scope.',
    };
  }
  if (object.visibility === 'local' && object.runtimeId !== context.runtimeId) {
    return {
      granted: false,
      reason: 'Local objects cannot cross runtime contexts.',
    };
  }
  if (action === 'admin') {
    return context.admin
      ? { granted: true }
      : { granted: false, reason: 'Admin capability is required.' };
  }
  if (context.admin || object.ownerId === context.actorId)
    return { granted: true };

  const participant =
    context.collaboration.active &&
    context.collaboration.participantIds.includes(context.actorId);
  const editor =
    participant && context.collaboration.editorIds.includes(context.actorId);
  if (
    action === 'read' &&
    (object.visibility === 'global' ||
      (object.visibility === 'shared' && participant))
  ) {
    return { granted: true };
  }
  if (
    (action === 'write' || action === 'duplicate') &&
    object.visibility === 'shared' &&
    object.runtimeId === context.runtimeId &&
    editor
  ) {
    return { granted: true };
  }
  return {
    granted: false,
    reason: `Capability '${action}' is not granted for this domain object.`,
  };
}






