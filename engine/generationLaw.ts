

export const DELTA_P = 0.1;
export const LAMBDA   = 2.1;


export const IOTA_MAX = DELTA_P * (10 * (1 + LAMBDA + LAMBDA ** 2 + LAMBDA ** 3 + LAMBDA ** 4));


export const THRESHOLD_FLOW      = IOTA_MAX * 0.15;  
export const THRESHOLD_SYNTHESIZE = IOTA_MAX * 0.30; 

export interface CreativePass {
  
  id: string;
  
  description: string;
  
  n: number;
  
  a: number;
  
  s: number;
  
  v: number;
  
  xi: number;
}

export type Protocol = 'FLOW' | 'SYNTHESIZE' | 'MANIFEST';

export interface InventionResult {
  iota: number;
  protocol: Protocol;
  rawSum: number;
}

export interface ResidualClass {
  class: 'Architecture' | 'Naming' | 'Token' | 'Behavior' | 'Privacy' | 'Performance' | 'Projection';
  note: string;
  passId: string;
  timestamp: string;
}

export interface PrePassChecklist {
  passId: string;
  iotaComputed: boolean;
  protocolDetermined: boolean;
  iota: number;
  protocol: Protocol;
  approved: boolean;
  reason: string;
}


export function calculateInventionForce(pass: CreativePass): InventionResult {
  const { n, a, s, v, xi } = pass;
  const rawSum =
    n  * 1           +
    a  * LAMBDA      +
    s  * LAMBDA ** 2 +
    v  * LAMBDA ** 3 +
    xi * LAMBDA ** 4;

  const iota = DELTA_P * rawSum;
  const protocol = getPassProtocol(iota);

  return { iota, protocol, rawSum };
}


export function getPassProtocol(iota: number): Protocol {
  if (iota >= THRESHOLD_SYNTHESIZE) return 'MANIFEST';
  if (iota >= THRESHOLD_FLOW)       return 'SYNTHESIZE';
  return 'FLOW';
}


export function runPrePassChecklist(pass: CreativePass): PrePassChecklist {
  const { iota, protocol } = calculateInventionForce(pass);

  const approved = true;
  let reason   = 'Pass approved.';

  if (protocol === 'FLOW') {
    reason = `Low ι (${iota.toFixed(3)}) — consider throttling or skipping.`;
    
  }

  if (protocol === 'SYNTHESIZE') {
    reason = `Mid ι (${iota.toFixed(3)}) — synthesize freely.`;
  }

  if (protocol === 'MANIFEST') {
    reason = `High ι (${iota.toFixed(3)}) — MANIFEST: build immediately. No isolation. No permission.`;
  }

  return {
    passId: pass.id,
    iotaComputed: true,
    protocolDetermined: true,
    iota,
    protocol,
    approved,
    reason,
  };
}


export const BUGS_LOG: ResidualClass[] = [];


export function logResidual(
  residual: Omit<ResidualClass, 'timestamp'>
): void {
  BUGS_LOG.push({
    ...residual,
    timestamp: new Date().toISOString(),
  });
}


export function auditPostPass(passId: string): ResidualClass[] {
  return BUGS_LOG.filter((r) => r.passId === passId);
}

export const DOC_RELATIONSHIPS: Record<string, string> = {
  'README.md':        'Naming and vision alignment.',
  'LAW.md':           'Naming reference.',
  'THEME.md':         'Token reference.',
  'SECURITY.md':      'Privacy reference.',
  'ARCHITECTURE.md':  'Layer map.',
  'ROADMAP.md':       'Vision scoring.',
  'BUGS.md':          'Residual memory (not a stop).',
  'FEATURE_STATUS.md':'Feature completeness.',
};
