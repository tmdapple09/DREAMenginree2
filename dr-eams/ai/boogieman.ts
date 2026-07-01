import { v4 as uuidv4 } from 'uuid';
import {
    BOOGIE_POLICY_VERSION,
    DEFAULT_DURATIONS_SECONDS,
    RECOVER_STEPS,
    RULE_CODES,
    STRIKE_EXPIRY_DAYS,
    STRIKE_WEIGHTS,
    THRESHOLDS,
    USER_REASON_MESSAGES,
    type EnforcementScope as PolicyScope,
    type StrikeSeverityLevel,
} from './boogie-policy';
import type {
    BoogieEnforceOutput, BoogieOutput, BoogieResult, EnforcementAction,
    EnforcementScope, Intent
} from './schemas';


















function isSimulationMode(): boolean {
  return process.env.BOOGIE_SIMULATION_MODE === 'true';
}








export const BLAST_RADIUS_ESCALATION_THRESHOLD = 10;

export const CONTAINMENT_ACTIONS: EnforcementAction[] = [
  'QUARANTINE', 'FEATURE_LOCK', 'TEMP_SUSPEND', 'TEMP_BAN', 'ESCALATE',
];







export function computeRiskScore(
  severity: number,
  confidence: number,
  historyMultiplier = 1.0,
): number {
  return Math.min(1.0, severity * confidence * historyMultiplier);
}






export function selectAction(params: {
  riskScore: number;
  severityLevel: StrikeSeverityLevel;
  confidence: number;
  isFirstOffense: boolean;
  isRepeatOffense: boolean;
}): EnforcementAction {
  const { riskScore, severityLevel, confidence, isFirstOffense } = params;

  
  if (severityLevel === 'CRITICAL') {
    return confidence >= THRESHOLDS.MIN_CONFIDENCE_FOR_BAN ? 'TEMP_SUSPEND' : 'ESCALATE';
  }

  
  if (confidence < THRESHOLDS.MIN_CONFIDENCE_FOR_BAN) {
    return riskScore > 0.4 ? 'FEATURE_LOCK' : 'WARN';
  }

  
  if (isFirstOffense && severityLevel === 'LOW') {
    return 'NUDGE';
  }

  
  if (riskScore >= 0.85) return 'TEMP_BAN';
  if (riskScore >= 0.70) return 'TEMP_SUSPEND';
  if (riskScore >= 0.55) return 'QUARANTINE';
  if (riskScore >= 0.40) return 'FEATURE_LOCK';
  if (riskScore >= 0.25) return 'THROTTLE';
  if (riskScore >= 0.10) return 'WARN';
  return 'NUDGE';
}





function computeExpiryISO(action: EnforcementAction, strikeCount = 1): string | null {
  const now = Date.now();
  let durationSeconds: number | null = null;

  switch (action) {
    case 'THROTTLE':
      durationSeconds = DEFAULT_DURATIONS_SECONDS.THROTTLE_MIN;
      break;
    case 'FEATURE_LOCK':
      if (strikeCount >= 3) durationSeconds = DEFAULT_DURATIONS_SECONDS.FEATURE_LOCK_3RD;
      else if (strikeCount === 2) durationSeconds = DEFAULT_DURATIONS_SECONDS.FEATURE_LOCK_2ND;
      else durationSeconds = DEFAULT_DURATIONS_SECONDS.FEATURE_LOCK_1ST;
      break;
    case 'TEMP_SUSPEND':
      durationSeconds = DEFAULT_DURATIONS_SECONDS.TEMP_SUSPEND;
      break;
    case 'TEMP_BAN':
      if (strikeCount >= 3) durationSeconds = DEFAULT_DURATIONS_SECONDS.TEMP_BAN_3;
      else if (strikeCount === 2) durationSeconds = DEFAULT_DURATIONS_SECONDS.TEMP_BAN_2;
      else durationSeconds = DEFAULT_DURATIONS_SECONDS.TEMP_BAN_1;
      break;
    default:
      return null;
  }

  if (durationSeconds === null) return null;
  return new Date(now + durationSeconds * 1000).toISOString();
}





function selectScopes(ruleCode: string, action: EnforcementAction): PolicyScope[] {
  
  if (action === 'TEMP_BAN' || action === 'TEMP_SUSPEND') {
    return ['POSTING', 'MESSAGING', 'LINKING', 'MARKETPLACE', 'TEMPLATE_SHARE'];
  }
  
  const map: Partial<Record<string, PolicyScope[]>> = {
    C28_SPAM:       ['POSTING', 'MESSAGING'],
    C21_HARASSMENT: ['MESSAGING', 'POSTING'],
    C29_PRIVACY:    ['POSTING'],
    C27_FRAUD:      ['MARKETPLACE'],
    C30_MALWARE:    ['LINKING', 'TEMPLATE_SHARE'],
    C26_ILLEGAL:    ['POSTING', 'LINKING'],
  };
  return map[ruleCode] ?? ['POSTING'];
}






function buildUserExplanation(params: {
  action: EnforcementAction;
  ruleCode: string;
  scopes: PolicyScope[];
  expiry: string | null;
  isSimulation: boolean;
}): BoogieEnforceOutput['user_explanation'] {
  const { action, ruleCode, scopes, expiry } = params;
  const reason = USER_REASON_MESSAGES[ruleCode] ?? 'Your content or activity was flagged by TheBoogieMan.Ai.';

  const actionLabel: Record<EnforcementAction, string> = {
    NUDGE:        'You have received a guidance note.',
    WARN:         'You have received a formal warning.',
    THROTTLE:     'Your activity has been rate-limited temporarily.',
    FEATURE_LOCK: `Access to ${scopes.map((s) => RECOVER_STEPS[s as EnforcementScope].split('.')[0]).join(', ')} has been temporarily restricted.`,
    QUARANTINE:   'The flagged content has been hidden pending your review.',
    TEMP_SUSPEND: 'Your account has been set to read-only mode temporarily.',
    TEMP_BAN:     'Your account access has been temporarily suspended.',
    ESCALATE:     'This case has been escalated to the review team.',
  };

  const nextStep = scopes.length > 0
    ? RECOVER_STEPS[scopes[0] as EnforcementScope]
    : 'Review the platform policy at /policy and submit an appeal if you believe this is an error.';

  return {
    what_happened: actionLabel[action],
    why: reason,
    what_changes: scopes.length > 0
      ? `The following areas are affected: ${scopes.join(', ')}.`
      : 'No access changes.',
    what_to_do_next: nextStep,
    policy_version: BOOGIE_POLICY_VERSION,
    rule_code: ruleCode,
    appeal_available: !['NUDGE', 'WARN'].includes(action),
    expiry: expiry,
    scopes_affected: scopes as EnforcementScope[],
    policy_page_url: '/policy',
  };
}






function buildAuditEvent(params: {
  userId: string;
  action: EnforcementAction;
  severity: number;
  confidence: number;
  riskScore: number;
  ruleCode: string;
  scopes: PolicyScope[];
  expiry: string | null;
  evidenceRefs: string[];
  priorEventId?: string;
  isSimulation: boolean;
}): BoogieEnforceOutput['audit_event'] {
  return {
    event_id: uuidv4(),
    user_id: params.userId,
    action: params.action,
    severity: params.severity,
    confidence: params.confidence,
    risk_score: params.riskScore,
    rule_code: params.ruleCode,
    policy_version: BOOGIE_POLICY_VERSION,
    scopes_restricted: params.scopes as EnforcementScope[],
    timestamp: new Date().toISOString(),
    expiry: params.expiry,
    evidence_refs: params.evidenceRefs,
    prior_event_id: params.priorEventId ?? null,
    simulation: params.isSimulation,
  };
}






export interface BoogieEnforceInput {
  userId: string;
  ruleCode: string;           
  severity: number;           
  confidence: number;         
  evidenceRefs?: string[];    
  strikeCount?: number;       
  historyMultiplier?: number; 
  priorEventId?: string;
  scopes?: PolicyScope[];     
  blastRadius?: number;       
}

export function boogieEnforce(input: BoogieEnforceInput): BoogieEnforceOutput {
  const {
    userId,
    ruleCode,
    severity,
    confidence,
    evidenceRefs = [],
    strikeCount = 0,
    historyMultiplier = 1.0,
    priorEventId,
    scopes: scopeOverride,
    blastRadius = 0,
  } = input;

  const simulation = isSimulationMode();

  
  
  const knownCodes = new Set(Object.values(RULE_CODES));
  const resolvedCode = knownCodes.has(ruleCode) ? ruleCode : RULE_CODES.A3_CONSERVATIVE;
  const escalateForUnknown = !knownCodes.has(ruleCode);

  const severityLevel = mapToStrikeSeverity(severity);
  const riskScore = computeRiskScore(severity, confidence, historyMultiplier);
  const isFirstOffense = strikeCount === 0;
  const isRepeatOffense = strikeCount > 1;

  let action = selectAction({ riskScore, severityLevel, confidence, isFirstOffense, isRepeatOffense });

  
  if (blastRadius >= BLAST_RADIUS_ESCALATION_THRESHOLD && !CONTAINMENT_ACTIONS.includes(action)) {
    action = 'QUARANTINE';
  }

  
  
  const shouldEscalate =
    escalateForUnknown ||
    severityLevel === 'CRITICAL' ||          
    confidence < THRESHOLDS.MIN_CONFIDENCE_FOR_BAN || 
    action === 'TEMP_BAN' ||                 
    blastRadius >= BLAST_RADIUS_ESCALATION_THRESHOLD; 

  if (shouldEscalate && !['NUDGE', 'WARN'].includes(action)) {
    
    action = action === 'TEMP_BAN' ? 'TEMP_BAN' : action;
  }

  const scopes = scopeOverride ?? selectScopes(resolvedCode, action);
  const expiry = computeExpiryISO(action, strikeCount + 1);

  const userExplanation = buildUserExplanation({
    action,
    ruleCode: resolvedCode,
    scopes: scopes as PolicyScope[],
    expiry,
    isSimulation: simulation,
  });

  const auditEvent = buildAuditEvent({
    userId,
    action,
    severity,
    confidence,
    riskScore,
    ruleCode: resolvedCode,
    scopes: scopes as PolicyScope[],
    expiry,
    evidenceRefs,
    priorEventId,
    isSimulation: simulation,
  });

  
  const idariTelemetry = {
    rule_code: resolvedCode,
    action,
    confidence,
    severity,
    blast_radius: blastRadius,
    simulation,
    timestamp: auditEvent.timestamp,
  };

  return {
    user_explanation: userExplanation,
    audit_event: auditEvent,
    action,
    should_escalate: shouldEscalate,
    simulation,
    blast_radius: blastRadius,
    idari_telemetry: idariTelemetry,
  };
}





function mapToStrikeSeverity(severity: number): StrikeSeverityLevel {
  if (severity >= THRESHOLDS.CRITICAL_SEVERITY) return 'CRITICAL';
  if (severity >= 0.70) return 'HIGH';
  if (severity >= 0.40) return 'MEDIUM';
  return 'LOW';
}

export function getStrikeWeight(level: StrikeSeverityLevel): number {
  return STRIKE_WEIGHTS[level];
}

export function getStrikeExpiryDays(level: StrikeSeverityLevel): number {
  return STRIKE_EXPIRY_DAYS[level];
}







interface BoogieEvaluateInput {
  actorRole: 'user' | 'admin';
  rateRpm: number;
  intents: Intent[];
}

const ADMIN_ONLY_INTENTS = ['DIAG_SCHEMA_SNAPSHOT', 'DIAG_RLS_SNAPSHOT'];
const HIGH_RISK_INTENTS = ['DREAM_CONFIG_PATCH', 'DREAM_REORDER'];
const WRITE_INTENTS = ['POST_CREATE', 'DREAM_CONFIG_PATCH', 'DREAM_REORDER'];

export function boogieEvaluate(input: BoogieEvaluateInput): BoogieOutput {
  const { actorRole, rateRpm, intents } = input;

  const perIntentResults: BoogieResult[] = [];
  let globalHardBlock = false;
  let cooldownSeconds = 0;

  
  if (rateRpm > THRESHOLDS.HARD_BLOCK_RPM) {
    globalHardBlock = true;
    cooldownSeconds = 60;
  }

  for (const intent of intents) {
    let decision: BoogieResult['decision'] = 'ALLOW';
    let riskScore = 0.1;
    let reasonCode = RULE_CODES.OK;

    
    if (!intent.type || intent.type.length === 0) {
      decision = 'DENY';
      riskScore = 1.0;
      reasonCode = RULE_CODES.UNKNOWN_INTENT_TYPE;
    }
    
    else if (ADMIN_ONLY_INTENTS.includes(intent.type) && actorRole !== 'admin') {
      decision = 'DENY';
      riskScore = 1.0;
      reasonCode = RULE_CODES.ADMIN_REQUIRED;
    }
    
    else if (HIGH_RISK_INTENTS.includes(intent.type)) {
      decision = 'CONFIRM';
      riskScore = 0.7;
      reasonCode = RULE_CODES.HIGH_RISK;
    }
    
    else if (WRITE_INTENTS.includes(intent.type) && rateRpm > THRESHOLDS.HIGH_RPM_WRITE) {
      decision = 'CONFIRM';
      riskScore = 0.6;
      reasonCode = RULE_CODES.HIGH_RPM_WRITE;
    }
    
    else if (intent.requires_confirmation) {
      decision = 'CONFIRM';
      riskScore = 0.5;
      reasonCode = RULE_CODES.USER_CONFIRM;
    }
    
    else if (intent.confidence < 0.5) {
      decision = 'DENY';
      riskScore = 0.8;
      reasonCode = RULE_CODES.LOW_CONFIDENCE;
    }

    perIntentResults.push({
      intent_id: intent.intent_id,
      decision,
      risk_score: riskScore,
      reason_code: reasonCode,
      policy_version: BOOGIE_POLICY_VERSION,
    });
  }

  return {
    global: {
      hard_block: globalHardBlock,
      cooldown_seconds: globalHardBlock ? cooldownSeconds : undefined,
    },
    per_intent: perIntentResults,
    policy_version: BOOGIE_POLICY_VERSION,
  };
}

export { BOOGIE_POLICY_VERSION };
