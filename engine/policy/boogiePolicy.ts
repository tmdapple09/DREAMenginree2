















export const PolicyCategory = {
  SPAM_SCAMS:     'SPAM/SCAMS',
  HARASSMENT:     'HARASSMENT',
  HATE:           'HATE',
  SEXUAL:         'SEXUAL',
  MINORS:         'MINORS',
  SELF_HARM:      'SELF-HARM',
  VIOLENCE:       'VIOLENCE',
  ILLEGAL:        'ILLEGAL',
  PRIVACY:        'PRIVACY',
  MALWARE_ABUSE:  'MALWARE/ABUSE',
  IMPERSONATION:  'IMPERSONATION',
  MISINFO:        'MISINFO',
  EVASION:        'EVASION',
  NONE:           'NONE',
} as const;

export type PolicyCategoryValue = typeof PolicyCategory[keyof typeof PolicyCategory];





export const PolicySeverity = {
  S0_NOTICE:       'S0_NOTICE',
  S1_SOFT_WARN:    'S1_SOFT_WARN',
  S2_HARD_WARN:    'S2_HARD_WARN',
  S3_FEATURE_LOCK: 'S3_FEATURE_LOCK',
  S4_TEMP_BAN:     'S4_TEMP_BAN',
  S5_PERM_BAN:     'S5_PERM_BAN',
} as const;

export type PolicySeverityLevel = typeof PolicySeverity[keyof typeof PolicySeverity];






export interface PolicyResult {
  
  allowed: boolean;
  
  category: PolicyCategoryValue;
  
  severity: PolicySeverityLevel;
  
  actions: string[];
  
  reason: string;
  
  policy_ref: string;
  
  expires_at: string | null;
}





const RULE_TO_CATEGORY: Record<string, PolicyCategoryValue> = {
  C21_HARASSMENT: PolicyCategory.HARASSMENT,
  C22_CSAM:       PolicyCategory.MINORS,
  C23_NCII:       PolicyCategory.SEXUAL,
  C24_VIOLENCE:   PolicyCategory.VIOLENCE,
  C25_SELF_HARM:  PolicyCategory.SELF_HARM,
  C26_ILLEGAL:    PolicyCategory.ILLEGAL,
  C27_FRAUD:      PolicyCategory.IMPERSONATION,
  C28_SPAM:       PolicyCategory.SPAM_SCAMS,
  C29_PRIVACY:    PolicyCategory.PRIVACY,
  C30_MALWARE:    PolicyCategory.MALWARE_ABUSE,
  C31_GROOMING:   PolicyCategory.MINORS,  
  CAT_HATE:       PolicyCategory.HATE,
  CAT_MISINFO:    PolicyCategory.MISINFO,
  CAT_EVASION:    PolicyCategory.EVASION,
};





const RULE_TO_SEVERITY: Record<string, PolicySeverityLevel> = {
  C22_CSAM:    PolicySeverity.S5_PERM_BAN,   
  C30_MALWARE: PolicySeverity.S5_PERM_BAN,   
  C31_GROOMING:PolicySeverity.S5_PERM_BAN,   
  C24_VIOLENCE:PolicySeverity.S4_TEMP_BAN,
  C25_SELF_HARM:PolicySeverity.S4_TEMP_BAN,
  C21_HARASSMENT:PolicySeverity.S3_FEATURE_LOCK,
  C29_PRIVACY: PolicySeverity.S3_FEATURE_LOCK,
  C26_ILLEGAL: PolicySeverity.S3_FEATURE_LOCK,
  C27_FRAUD:   PolicySeverity.S3_FEATURE_LOCK,
  C23_NCII:    PolicySeverity.S4_TEMP_BAN,
  C28_SPAM:    PolicySeverity.S1_SOFT_WARN,
};





const CATEGORY_REASON: Record<PolicyCategoryValue, string> = {
  [PolicyCategory.SPAM_SCAMS]:    'Your activity was flagged for spam or scam patterns.',
  [PolicyCategory.HARASSMENT]:    'Your content was flagged for harassment or targeted abuse.',
  [PolicyCategory.HATE]:          'Your content was flagged for hateful language or dehumanization.',
  [PolicyCategory.SEXUAL]:        'Your content was flagged for explicit sexual material.',
  [PolicyCategory.MINORS]:        'Content involving minors was detected. This requires immediate review.',
  [PolicyCategory.SELF_HARM]:     'Your content was flagged for self-harm context. Support resources are available.',
  [PolicyCategory.VIOLENCE]:      'Your content was flagged for violence or threats.',
  [PolicyCategory.ILLEGAL]:       'Your content was flagged for illegal instructions or activity.',
  [PolicyCategory.PRIVACY]:       'Your content was flagged for sharing private information without consent.',
  [PolicyCategory.MALWARE_ABUSE]: 'A potentially harmful link or file was detected.',
  [PolicyCategory.IMPERSONATION]: 'Your content was flagged for impersonation or misleading identity.',
  [PolicyCategory.MISINFO]:       'Your content was flagged for potentially harmful misinformation.',
  [PolicyCategory.EVASION]:       'Your activity was flagged for attempting to bypass platform rules.',
  [PolicyCategory.NONE]:          'No issues found.',
};






export interface BoogieEvaluateInput {
  
  policy_ref: string;
  
  severity?: number;
  
  confidence?: number;
  
  strike_count?: number;
  
  expires_at?: string | null;
  
  category?: PolicyCategoryValue;
}


export function boogieEvaluate(input: BoogieEvaluateInput): PolicyResult {
  const {
    policy_ref,
    severity = 0,
    confidence = 1,
    strike_count = 0,
    expires_at = null,
    category: categoryOverride,
  } = input;

  const category: PolicyCategoryValue =
    categoryOverride ?? RULE_TO_CATEGORY[policy_ref] ?? PolicyCategory.NONE;

  const allowed = category === PolicyCategory.NONE && severity < 0.1;

  
  const severityLevel: PolicySeverityLevel = selectPolicySeverity(
    policy_ref,
    severity,
    confidence,
    strike_count,
  );

  const actions = allowed ? [] : selectPolicyActions(severityLevel, allowed);
  const reason = CATEGORY_REASON[category] ?? 'Your activity was reviewed by TheBoogieMan.AI.';

  return {
    allowed,
    category,
    severity: severityLevel,
    actions,
    reason,
    policy_ref,
    expires_at,
  };
}





function selectPolicySeverity(
  ruleCode: string,
  severity: number,
  confidence: number,
  strikeCount: number,
): PolicySeverityLevel {
  
  if (ruleCode === 'C22_CSAM' || ruleCode === 'C30_MALWARE' || ruleCode === 'C31_GROOMING') {
    return PolicySeverity.S5_PERM_BAN;
  }

  
  if (severity < 0.1 && strikeCount === 0 && confidence >= 0.6) {
    return PolicySeverity.S0_NOTICE;
  }

  
  const mapped = RULE_TO_SEVERITY[ruleCode];
  if (mapped) {
    
    if (strikeCount > 1 && mapped < PolicySeverity.S4_TEMP_BAN) {
      return escalateSeverity(mapped);
    }
    return mapped;
  }

  
  if (severity >= 0.9) return PolicySeverity.S4_TEMP_BAN;
  if (severity >= 0.7) return PolicySeverity.S3_FEATURE_LOCK;
  if (severity >= 0.4) return PolicySeverity.S2_HARD_WARN;
  if (severity >= 0.1) return PolicySeverity.S1_SOFT_WARN;
  return PolicySeverity.S0_NOTICE;
}

function escalateSeverity(level: PolicySeverityLevel): PolicySeverityLevel {
  const order: PolicySeverityLevel[] = [
    PolicySeverity.S0_NOTICE,
    PolicySeverity.S1_SOFT_WARN,
    PolicySeverity.S2_HARD_WARN,
    PolicySeverity.S3_FEATURE_LOCK,
    PolicySeverity.S4_TEMP_BAN,
    PolicySeverity.S5_PERM_BAN,
  ];
  const idx = order.indexOf(level);
  return order[Math.min(idx + 1, order.length - 1)];
}

function selectPolicyActions(level: PolicySeverityLevel, _allowed: boolean): string[] {
  switch (level) {
    case PolicySeverity.S0_NOTICE:       return ['NUDGE'];
    case PolicySeverity.S1_SOFT_WARN:    return ['WARN'];
    case PolicySeverity.S2_HARD_WARN:    return ['WARN', 'QUARANTINE'];
    case PolicySeverity.S3_FEATURE_LOCK: return ['QUARANTINE', 'FEATURE_LOCK'];
    case PolicySeverity.S4_TEMP_BAN:     return ['FEATURE_LOCK', 'TEMP_BAN', 'ESCALATE'];
    case PolicySeverity.S5_PERM_BAN:     return ['TEMP_BAN', 'ESCALATE'];
    default:                             return ['NUDGE'];
  }
}






export function emitBoogieManEvent(result: PolicyResult): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent<PolicyResult>('dreamengin:boogieman', { detail: result }),
  );
}

export function onBoogieManEvent(
  handler: (result: PolicyResult) => void,
): () => void {
  if (typeof window === 'undefined') return () => {};
  const listener = (evt: Event) => {
    const ce = evt as CustomEvent<PolicyResult>;
    if (ce.detail) handler(ce.detail);
  };
  window.addEventListener('dreamengin:boogieman', listener);
  return () => window.removeEventListener('dreamengin:boogieman', listener);
}

export {
    BOOGIE_POLICY_VERSION, CATEGORY_SEVERITY, DEFAULT_DURATIONS_SECONDS, ENFORCEMENT_ACTIONS,
    ENFORCEMENT_SCOPES, RECOVER_STEPS, RULE_CODES, STRIKE_EXPIRY_DAYS, STRIKE_WEIGHTS, THRESHOLDS, USER_REASON_MESSAGES
} from '@/dr-eams/ai/boogie-policy';
export type {
    BoogiePolicyVersion, EnforcementAction,
    EnforcementScope, RuleCode, StrikeSeverityLevel
} from '@/dr-eams/ai/boogie-policy';
