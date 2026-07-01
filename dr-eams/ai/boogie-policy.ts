








export const BOOGIE_POLICY_VERSION = 'BOOGIE_POLICY_V1' as const;
export type BoogiePolicyVersion = typeof BOOGIE_POLICY_VERSION;





export const ENFORCEMENT_ACTIONS = [
  'NUDGE',         
  'WARN',          
  'THROTTLE',      
  'FEATURE_LOCK',  
  'QUARANTINE',    
  'TEMP_SUSPEND',  
  'TEMP_BAN',      
  'ESCALATE',      
] as const;

export type EnforcementAction = typeof ENFORCEMENT_ACTIONS[number];





export const ENFORCEMENT_SCOPES = [
  'POSTING',        
  'MESSAGING',      
  'LINKING',        
  'MARKETPLACE',    
  'TEMPLATE_SHARE', 
] as const;

export type EnforcementScope = typeof ENFORCEMENT_SCOPES[number];





export type StrikeSeverityLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export const STRIKE_WEIGHTS: Record<StrikeSeverityLevel, number> = {
  LOW: 1,
  MEDIUM: 2,
  HIGH: 4,
  CRITICAL: 10,
};


export const STRIKE_EXPIRY_DAYS: Record<StrikeSeverityLevel, number> = {
  LOW: 14,      
  MEDIUM: 30,   
  HIGH: 90,     
  CRITICAL: 180,
};





export const DEFAULT_DURATIONS_SECONDS: Record<string, number> = {
  THROTTLE_MIN:     5 * 60,       
  THROTTLE_MAX:     30 * 60,      
  FEATURE_LOCK_1ST: 1 * 3600,     
  FEATURE_LOCK_2ND: 24 * 3600,    
  FEATURE_LOCK_3RD: 7 * 24 * 3600,
  TEMP_SUSPEND:     24 * 3600,    
  TEMP_BAN_1:       24 * 3600,    
  TEMP_BAN_2:       3 * 24 * 3600,
  TEMP_BAN_3:       7 * 24 * 3600,
  TEMP_BAN_MAX:     14 * 24 * 3600,
};





export const THRESHOLDS = {
  
  MIN_CONFIDENCE_FOR_BAN: 0.60,

  
  CRITICAL_SEVERITY: 0.95,

  
  HARD_BLOCK_RPM: 60,

  
  HIGH_RPM_WRITE: 30,

  
  MAX_ACTIONS_PER_HOUR: 6,

  
  DEDUP_WINDOW_SECONDS: 300,

  
  STRIKE_ESCALATION_WINDOW_DAYS: 7,
} as const;






export const RULE_CODES = {
  
  A1_SCOPE:            'A1_SCOPE',
  A2_PREDICTABLE:      'A2_PREDICTABLE',
  A3_CONSERVATIVE:     'A3_CONSERVATIVE',
  A4_EXPLAIN:          'A4_EXPLAIN',
  A5_NO_SHADOW_BAN:    'A5_NO_SHADOW_BAN',
  A6_WARN_FIRST:       'A6_WARN_FIRST',
  A7_PREFER_FRICTION:  'A7_PREFER_FRICTION',
  A8_CONSISTENT:       'A8_CONSISTENT',
  A9_PROTECT_MINORS:   'A9_PROTECT_MINORS',
  A10_AUDIT_MINIMAL:   'A10_AUDIT_MINIMAL_DATA',

  
  C21_HARASSMENT:      'C21_HARASSMENT',
  C22_CSAM:            'C22_CSAM',
  C23_NCII:            'C23_NCII',
  C24_VIOLENCE:        'C24_VIOLENCE',
  C25_SELF_HARM:       'C25_SELF_HARM',
  C26_ILLEGAL:         'C26_ILLEGAL',
  C27_FRAUD:           'C27_FRAUD',
  C28_SPAM:            'C28_SPAM',
  C29_PRIVACY:         'C29_PRIVACY',
  C30_MALWARE:         'C30_MALWARE',
  C31_GROOMING:        'C31_GROOMING',  
  C32_MINOR_IMAGE:     'C32_MINOR_IMAGE',        
  C33_SOLICITING_IMAGES: 'C33_SOLICITING_IMAGES', 

  
  E36_LADDER:          'E36_LADDER',
  E37_SKIP_STEPS:      'E37_SKIP_STEPS',
  E38_FRICTION:        'E38_FRICTION',
  E39_TEMP_MUTE:       'E39_TEMP_MUTE',
  E40_TEMP_LOCK:       'E40_TEMP_LOCK',
  E41_TEMP_BAN:        'E41_TEMP_BAN',
  E42_PERM_BAN_HUMAN:  'E42_PERM_BAN_HUMAN',
  E43_COOLDOWN_SCALE:  'E43_COOLDOWN_SCALE',
  E44_EXPIRY:          'E44_EXPIRY',
  E45_FIRST_TIME:      'E45_FIRST_TIME',

  
  F46_STRIKE_LEVELS:   'F46_STRIKE_LEVELS',
  F50_CRITICAL_ESC:    'F50_CRITICAL_ESCALATE',
  F51_STRIKE_STORE:    'F51_STRIKE_STORE',
  F53_APPEALABLE:      'F53_APPEALABLE',
  F55_RECALCULATE:     'F55_RECALCULATE',

  
  G56_SCORES:          'G56_SCORES',
  G57_LOW_CONFIDENCE:  'G57_LOW_CONFIDENCE',
  G58_HIGH_SEVERITY:   'G58_HIGH_SEVERITY',
  G60_AMBIGUOUS:       'G60_AMBIGUOUS',

  
  H61_PLAIN_REASON:    'H61_PLAIN_REASON',
  H62_NEXT_STEP:       'H62_NEXT_STEP',
  H63_NO_INTERNALS:    'H63_NO_INTERNALS',
  H66_POLICY_LINK:     'H66_POLICY_LINK',
  H70_CRISIS:          'H70_CRISIS_RESOURCES',

  
  I71_IMMEDIATE:       'I71_IMMEDIATE',
  I72_SATIRE:          'I72_SATIRE_PARODY',
  I75_NEW_EVIDENCE:    'I75_NEW_EVIDENCE',
  I78_SPAM_WAVE:       'I78_SPAM_WAVE',
  I79_POLICY_CHANGE:   'I79_POLICY_CHANGE',
  I80_PERM_BAN:        'I80_PERM_BAN',

  
  J81_TRIAD_ROLES:     'J81_TRIAD_ROLES',
  J86_TRIAD_APPROVAL:  'J86_TRIAD_APPROVAL',
  J88_NO_SCOPE_CREEP:  'J88_NO_SCOPE_CREEP',
  J90_API:             'J90_API',

  
  K91_MIN_EVIDENCE:    'K91_MIN_EVIDENCE',
  K92_NO_PRIVATE_MSG:  'K92_NO_PRIVATE_MESSAGES',
  K95_DELETE_DATA:     'K95_DELETE_DATA',
  K99_PUBLIC_POLICY:   'K99_PUBLIC_POLICY',
  K100_CHANGELOG:      'K100_CHANGELOG',

  
  ADMIN_REQUIRED:      'ADMIN_REQUIRED',
  HIGH_RISK:           'HIGH_RISK',
  HIGH_RPM_WRITE:      'HIGH_RPM_WRITE',
  LOW_CONFIDENCE:      'LOW_CONFIDENCE',
  UNKNOWN_INTENT_TYPE: 'UNKNOWN_INTENT_TYPE',
  USER_CONFIRM:        'USER_CONFIRMATION_REQUIRED',
  RATE_LIMIT:          'RATE_LIMIT',
  OK:                  'OK',
  SIMULATION:          'SIMULATION',
};

export type RuleCode = typeof RULE_CODES[keyof typeof RULE_CODES];





export const CATEGORY_SEVERITY: Record<string, StrikeSeverityLevel> = {
  C21_HARASSMENT: 'HIGH',
  C22_CSAM:       'CRITICAL',
  C23_NCII:       'CRITICAL',
  C24_VIOLENCE:   'CRITICAL',
  C25_SELF_HARM:  'CRITICAL',
  C26_ILLEGAL:    'HIGH',
  C27_FRAUD:      'HIGH',
  C28_SPAM:       'LOW',
  C29_PRIVACY:    'MEDIUM',
  C30_MALWARE:    'CRITICAL',
  C31_GROOMING:        'CRITICAL',  
  C32_MINOR_IMAGE:     'CRITICAL',  
  C33_SOLICITING_IMAGES: 'CRITICAL', 
};






export const USER_REASON_MESSAGES: Partial<Record<string, string>> = {
  C21_HARASSMENT: 'Your content was flagged for harassment or targeted abuse.',
  C22_CSAM:       'Content involving minors was detected. This requires immediate review.',
  C23_NCII:       'Content flagged for non-consensual intimate image concerns.',
  C24_VIOLENCE:   'Content flagged for violence incitement.',
  C25_SELF_HARM:  'Content flagged for self-harm context.',
  C26_ILLEGAL:    'Content flagged for illegal instructions.',
  C27_FRAUD:      'Activity flagged for potential fraud or scam patterns.',
  C28_SPAM:       'Your activity rate exceeded the allowed threshold.',
  C29_PRIVACY:    'Content flagged for sharing private information without consent.',
  C30_MALWARE:    'A potentially harmful link or file was detected.',
  C31_GROOMING:   'Your activity has been flagged for child safety concerns. This requires immediate review.',
  C32_MINOR_IMAGE: 'An image sent from a minor was blocked. Images may never be sent from a minor to an adult.',
  C33_SOLICITING_IMAGES: 'Your account has been flagged for soliciting images from a minor. This is a permanent-ban-level violation requiring immediate review.',
  ADMIN_REQUIRED: 'This action requires admin access.',
  HIGH_RISK:      'This action requires your confirmation before proceeding.',
  LOW_CONFIDENCE: 'This request could not be processed with sufficient confidence.',
  RATE_LIMIT:     'You have exceeded the request rate limit. Please slow down.',
  OK:             'No issues found.',
};





export const RECOVER_STEPS: Record<EnforcementScope, string> = {
  POSTING:        'Edit or remove the content, then re-submit. If you believe this is an error, submit an appeal.',
  MESSAGING:      'Slow down your messaging rate. After the restriction expires, messaging will restore automatically.',
  LINKING:        'Remove the flagged link from your content, or replace it with a verified source.',
  MARKETPLACE:    'Review your listings for policy compliance. Contact support if you believe this is an error.',
  TEMPLATE_SHARE: 'Remove any suspicious links or unrecognized widget fields from your template before sharing.',
};

