import {
    CONNECTION_VERBS,
    isRejectedConnectionVerb,
    isValidConnectionVerb,
    REJECTED_CONNECTION_VERBS,
    type ConnectionVerb,
} from '@/engine/identity/canonical-names';






export interface ConnectionAction {
  
  verb: ConnectionVerb;
  
  sourceId: string;
  
  targetId: string;
  
  context?: string;
}


export interface ConnectionResult {
  
  ok: boolean;
  
  message: string;
  
  action: ConnectionAction;
}




export function dispatch(action: ConnectionAction): ConnectionResult {
  if (!isValidConnectionVerb(action.verb)) {
    const isRejected = isRejectedConnectionVerb(action.verb);
    const rejectionHint = isRejected
      ? ` '${action.verb}' is explicitly rejected — use canonical verbs instead.`
      : ` '${action.verb}' is not recognised.`;

    throw new Error(
      `dispatch: invalid connection verb '${action.verb}'.${rejectionHint} ` +
        `Valid canonical verbs are: ${CONNECTION_VERBS.join(', ')}.`,
    );
  }

  const contextNote = action.context ? ` [context: ${action.context}]` : '';

  return {
    ok: true,
    message:
      `Connection action '${action.verb}' dispatched: ` +
      `'${action.sourceId}' → '${action.targetId}'${contextNote}.`,
    action,
  };
}



function buildAction(
  verb: ConnectionVerb,
  sourceId: string,
  targetId: string,
  context?: string,
): ConnectionAction {
  return { verb, sourceId, targetId, ...(context !== undefined ? { context } : {}) };
}




export function createBindAction(
  sourceId: string,
  targetId: string,
  context?: string,
): ConnectionAction {
  return buildAction('bind', sourceId, targetId, context);
}


export function createMountAction(
  sourceId: string,
  targetId: string,
  context?: string,
): ConnectionAction {
  return buildAction('mount', sourceId, targetId, context);
}


export function createActivateAction(
  sourceId: string,
  targetId: string,
  context?: string,
): ConnectionAction {
  return buildAction('activate', sourceId, targetId, context);
}


export function createAttachAction(
  sourceId: string,
  targetId: string,
  context?: string,
): ConnectionAction {
  return buildAction('attach', sourceId, targetId, context);
}


export function createRouteIntoAction(
  sourceId: string,
  targetId: string,
  context?: string,
): ConnectionAction {
  return buildAction('route into', sourceId, targetId, context);
}


export function createOpenIntoAction(
  sourceId: string,
  targetId: string,
  context?: string,
): ConnectionAction {
  return buildAction('open into', sourceId, targetId, context);
}


export function createConnectAcrossAction(
  sourceId: string,
  targetId: string,
  context?: string,
): ConnectionAction {
  return buildAction('connect across', sourceId, targetId, context);
}



export { CONNECTION_VERBS, isValidConnectionVerb, REJECTED_CONNECTION_VERBS };
export type { ConnectionVerb };
