

export type IdariEventType =
  | 'idari:log'
  | 'idari:status'
  | 'idari:result'
  | 'gameengin:maestro'
  | 'gameengin:prophet'
  | 'gameengin:artisan'
  | 'gameengin:mechanic'
  | 'gameengin:writer'
  | 'gameengin:tech-director';

export type IdariEventDetail = {
  type: IdariEventType;
  timestamp: string;
  status?: 'success' | 'error' | 'pending';
  message: string;
  details?: string;
};

const EVENT_NAME = 'dreamengin:idari';

export function emitIdariEvent(detail: IdariEventDetail ){
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<IdariEventDetail>(EVENT_NAME, { detail }));
}

export function onIdariEvent(handler: (detail: IdariEventDetail) => void) {
  if (typeof window === 'undefined') return () => {};
  const listener = (evt: Event) => {
    const ce = evt as CustomEvent<IdariEventDetail>;
    if (!ce.detail) return;
    handler(ce.detail);
  };
  window.addEventListener(EVENT_NAME, listener);
  return () => window.removeEventListener(EVENT_NAME, listener);
}

export type GameEnginAgentRole =
  | 'maestro'
  | 'prophet'
  | 'artisan'
  | 'mechanic'
  | 'writer'
  | 'tech-director';

export function emitGameEnginAgentEvent(input: {
  role: GameEnginAgentRole;
  status?: IdariEventDetail['status'];
  message: string;
  details?: string;
}) {
  emitIdariEvent({
    type: `gameengin:${input.role}` as IdariEventType,
    timestamp: new Date().toISOString(),
    status: input.status ?? 'pending',
    message: input.message,
    details: input.details,
  });
}


export type InnerDreamsEventType = IdariEventType;

export type InnerDreamsEventDetail = IdariEventDetail;

export const emitInnerDreamsEvent = emitIdariEvent;

export const onInnerDreamsEvent = onIdariEvent;








export interface TriadConsensusResult {
  
  unanimous: boolean;
  eams: { response_text: string; intents: import('@/dr-eams/ai/schemas').Intent[] };
  idari: { intents: import('@/dr-eams/ai/schemas').Intent[]; notes: string[] };
  boogie: { hard_block: boolean; reason?: string };
}


export async function runTriadConsensus(input: {
  message: string;
  actorEmail?: string | null;
  actorRole: 'user' | 'admin' | 'owner';
  uiRoute?: string;
}): Promise<TriadConsensusResult> {
  
  const { planWithEams, validateWithIdari, boogiePolicyCheck } = await import('@/dr-eams/ai/triad');

  const [eamsPlan, boogieResult] = await Promise.all([
    planWithEams(input),
    boogiePolicyCheck({ actorRole: input.actorRole, actorEmail: input.actorEmail, message: input.message }),
  ]);

  const idariResult = validateWithIdari(
    eamsPlan.intents,
    input.actorRole === 'admin' || input.actorRole === 'owner' ? 'admin' : 'user',
  );

  const idariApproved =
    eamsPlan.intents.length === 0 || idariResult.intents.length > 0;
  const unanimous =
    !boogieResult.hard_block &&
    (eamsPlan.response_text.trim().length > 0 || eamsPlan.intents.length > 0) &&
    idariApproved;

  return {
    unanimous,
    eams:   { response_text: eamsPlan.response_text, intents: eamsPlan.intents },
    idari:  idariResult,
    boogie: boogieResult,
  };
}

export type { Intent } from '@/dr-eams/ai/schemas';
