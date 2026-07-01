


















































export type MessageContextType =
  | 'teacher_student'
  | 'coach_athlete'
  | 'family_member'
  | 'youth_group_leader'
  | 'tutor_student'
  | 'family_friend_approved'
  | 'professional_mentor'
  | 'unknown_safe'          
  | 'unknown_suspicious'    
  | 'inappropriate';        


export type MessageContextVerdict =
  | 'safe'        
  | 'monitor'     
  | 'flag'        
  | 'block';      

export interface MessageContextInput {
  
  minorAge: number;
  
  adultAge: number;
  
  recentMessages: Array<{
    senderIsMinor: boolean;
    text: string;
  }>;
  
  declaredRelationship?: string;
  
  adultPriorFlags?: number;
  
  adultSolicitedImages?: boolean;
}

export interface MessageContextResult {
  
  verdict: MessageContextVerdict;
  
  contextType: MessageContextType;
  
  reason: string;
  
  blockMessages: boolean;
  
  escalate: boolean;
  
  adultPermanentBanRecommended: boolean;
  
  minorWarning: boolean;
  
  minorAccountLock: boolean;
  
  _audit: {
    signals: string[];
    safe_context_signals: string[];
    suspicious_signal_count: number;
  };
}







const SAFE_CONTEXT_PATTERNS: { pattern: RegExp; weight: number; contextType: MessageContextType; label: string }[] = [
  
  { pattern: /\b(teacher|instructor|professor|class|homework|assignment|grades?|test|exam|lecture|lesson|school|curriculum|syllabus)\b/i, weight: 0.9, contextType: 'teacher_student', label: 'teacher_context' },
  { pattern: /\b(due\s+date|submit|essay|project|student|classroom|study\s+group|school\s+work)\b/i, weight: 0.8, contextType: 'teacher_student', label: 'teacher_context_2' },
  
  { pattern: /\b(coach|practice|training|game|match|team|drill|sport|athlete|workout|schedule|tournament|tryout)\b/i, weight: 0.8, contextType: 'coach_athlete', label: 'coach_context' },
  
  { pattern: /\b(mom|dad|uncle|aunt|grandma|grandpa|cousin|sibling|brother|sister|parent|guardian|family)\b/i, weight: 0.9, contextType: 'family_member', label: 'family_context' },
  
  { pattern: /\b(youth\s+group|scout|troop|club\s+meeting|volunteer|church\s+group|community\s+center|mentor\s+program)\b/i, weight: 0.85, contextType: 'youth_group_leader', label: 'youth_group_context' },
  
  { pattern: /\b(tutor|tutoring|study\s+session|practice\s+problems?|math\s+help|reading\s+help|writing\s+help)\b/i, weight: 0.85, contextType: 'tutor_student', label: 'tutor_context' },
  
  { pattern: /\b(mentor|internship|job\s+shadowing|career\s+advice|professional\s+development|work\s+experience)\b/i, weight: 0.7, contextType: 'professional_mentor', label: 'mentor_context' },
];









const SUSPICIOUS_PATTERNS: { pattern: RegExp; weight: number; label: string }[] = [
  
  { pattern: /\b(telegram|signal|kik|snap(chat)?|discord|whatsapp|another\s+app|text\s+me|call\s+me)\b/i, weight: 0.7, label: 'off_platform_request' },
  
  { pattern: /\b(don'?t\s+tell|keep\s+this\s+secret|just\s+between\s+us|our\s+little\s+secret|no\s+one\s+needs\s+to\s+know)\b/i, weight: 0.9, label: 'secrecy_coercion' },
  // Gift / bribe
  { pattern: /\b(i'?ll\s+(buy|send|give|pay|get)\s+you|gift\s+card|amazon|cash|venmo|cashapp)\b/i, weight: 0.7, label: 'bribe' },
  
  { pattern: /\b(meet\s+(up|me)|come\s+over|come\s+to\s+my|by\s+yourself|alone|just\s+(the\s+two\s+of\s+)?us)\b/i, weight: 0.75, label: 'meeting_alone' },
  
  { pattern: /\byou('?re|are)\s+so\s+mature\b/i, weight: 0.8, label: 'maturity_flattery' },
  { pattern: /\bfor\s+your\s+age\b/i, weight: 0.6, label: 'age_reference' },
  // Romantic / sexual overtures
  { pattern: /\b(i\s+love\s+you|you'?re\s+(so\s+)?beautiful|you'?re\s+(so\s+)?hot|you'?re\s+(so\s+)?cute)\b/i, weight: 0.65, label: 'romantic_language' },
  { pattern: /\b(relationship|dating|be\s+my\s+(girl|boy)(friend)?)\b/i, weight: 0.7, label: 'romantic_solicitation' },
  
  { pattern: /\b(send\s+(me\s+)?(a\s+)?(pic|photo|picture|selfie|nude|nudes)|show\s+me\s+(yourself|your\s+body))\b/i, weight: 0.95, label: 'image_solicitation' },
];





const DECLARED_SAFE_RELATIONSHIPS = [
  'teacher', 'instructor', 'coach', 'parent', 'guardian', 'aunt', 'uncle',
  'grandparent', 'relative', 'family', 'tutor', 'mentor', 'youth leader',
  'scout leader', 'club leader', 'counselor',
];





function scanMessages(
  messages: Array<{ senderIsMinor: boolean; text: string }>,
  patterns: { pattern: RegExp; weight: number; label: string }[],
): { totalWeight: number; matchedLabels: string[] } {
  
  const combined = messages
    .slice(0, 20)
    .map((m) => m.text)
    .join(' ')
    .normalize('NFKC');

  let totalWeight = 0;
  const matchedLabels: string[] = [];

  for (const { pattern, weight, label } of patterns) {
    if (pattern.test(combined)) {
      totalWeight += weight;
      matchedLabels.push(label);
    }
  }

  return { totalWeight, matchedLabels };
}

function scanMessagesForContext(
  messages: Array<{ senderIsMinor: boolean; text: string }>,
): { contextType: MessageContextType; safeSignals: string[]; totalSafeWeight: number } {
  const combined = messages
    .slice(0, 20)
    .map((m) => m.text)
    .join(' ')
    .normalize('NFKC');

  let topWeight = 0;
  let topContextType: MessageContextType = 'unknown_safe';
  const safeSignals: string[] = [];

  for (const { pattern, weight, contextType, label } of SAFE_CONTEXT_PATTERNS) {
    if (pattern.test(combined)) {
      safeSignals.push(label);
      if (weight > topWeight) {
        topWeight = weight;
        topContextType = contextType;
      }
    }
  }

  return { contextType: topContextType, safeSignals, totalSafeWeight: topWeight };
}

function isDeclaredSafeRelationship(declared?: string): boolean {
  if (!declared) return false;
  const lower = declared.toLowerCase();
  return DECLARED_SAFE_RELATIONSHIPS.some((kw) => lower.includes(kw));
}






export function evaluateMessageContext(input: MessageContextInput): MessageContextResult {
  const {
    minorAge,
    adultAge,
    recentMessages,
    declaredRelationship,
    adultPriorFlags = 0,
    adultSolicitedImages = false,
  } = input;

  
  const isActualMinor = minorAge >= 13 && minorAge < 18;
  const isActualAdult = adultAge >= 18;

  
  if (!isActualMinor || !isActualAdult) {
    return {
      verdict: 'safe',
      contextType: 'unknown_safe',
      reason: 'Not a minor-adult conversation.',
      blockMessages: false,
      escalate: false,
      adultPermanentBanRecommended: false,
      minorWarning: false,
      minorAccountLock: false,
      _audit: { signals: [], safe_context_signals: [], suspicious_signal_count: 0 },
    };
  }

  const auditSignals: string[] = [];

  if (adultSolicitedImages) {
    auditSignals.push('adult_solicited_images');
    return {
      verdict: 'block',
      contextType: 'inappropriate',
      reason: 'An adult soliciting images from a minor is a zero-tolerance violation.',
      blockMessages: true,
      escalate: true,
      adultPermanentBanRecommended: true,
      minorWarning: true,
      minorAccountLock: false,
      _audit: { signals: auditSignals, safe_context_signals: [], suspicious_signal_count: 1 },
    };
  }

  const suspiciousResult = scanMessages(recentMessages, SUSPICIOUS_PATTERNS);
  const { contextType, safeSignals, totalSafeWeight } = scanMessagesForContext(recentMessages);

  
  auditSignals.push(...suspiciousResult.matchedLabels);

  const hasSuspicious = suspiciousResult.matchedLabels.length > 0;
  const suspiciousWeight = suspiciousResult.totalWeight;
  const hasSafeContext = safeSignals.length > 0 || isDeclaredSafeRelationship(declaredRelationship);

  
  const priorFlagMultiplier = 1 + (adultPriorFlags * 0.5);
  const adjustedSuspiciousWeight = suspiciousWeight * priorFlagMultiplier;

  
  if (adjustedSuspiciousWeight >= 1.5 && !hasSafeContext) {
    return {
      verdict: 'block',
      contextType: 'inappropriate',
      reason: 'Multiple inappropriate signals detected in a minor-adult conversation with no recognizable safe context.',
      blockMessages: true,
      escalate: true,
      adultPermanentBanRecommended: adjustedSuspiciousWeight >= 2.5,
      minorWarning: true,
      minorAccountLock: adultPriorFlags >= 3,
      _audit: { signals: auditSignals, safe_context_signals: safeSignals, suspicious_signal_count: suspiciousResult.matchedLabels.length },
    };
  }

  
  if (adjustedSuspiciousWeight >= 0.7 && !hasSafeContext) {
    return {
      verdict: 'flag',
      contextType: hasSuspicious ? 'unknown_suspicious' : 'unknown_safe',
      reason: 'Suspicious signals detected in a minor-adult conversation. Queued for triad review.',
      blockMessages: true,
      escalate: true,
      adultPermanentBanRecommended: false,
      minorWarning: false,
      minorAccountLock: false,
      _audit: { signals: auditSignals, safe_context_signals: safeSignals, suspicious_signal_count: suspiciousResult.matchedLabels.length },
    };
  }

  
  if (hasSuspicious && hasSafeContext && totalSafeWeight >= 0.8) {
    return {
      verdict: 'monitor',
      contextType,
      reason: 'Minor suspicious signals noted, but conversation appears to be in a recognized safe context. Monitoring.',
      blockMessages: false,
      escalate: false,
      adultPermanentBanRecommended: false,
      minorWarning: false,
      minorAccountLock: false,
      _audit: { signals: auditSignals, safe_context_signals: safeSignals, suspicious_signal_count: suspiciousResult.matchedLabels.length },
    };
  }

  
  if (hasSafeContext && !hasSuspicious) {
    return {
      verdict: 'safe',
      contextType,
      reason: 'Conversation is in a recognized safe context (e.g., teacher-student, coach-athlete, family).',
      blockMessages: false,
      escalate: false,
      adultPermanentBanRecommended: false,
      minorWarning: false,
      minorAccountLock: false,
      _audit: { signals: [], safe_context_signals: safeSignals, suspicious_signal_count: 0 },
    };
  }

  
  return {
    verdict: 'monitor',
    contextType: 'unknown_safe',
    reason: 'Minor-adult conversation with no context signals detected. Passively monitoring.',
    blockMessages: false,
    escalate: false,
    adultPermanentBanRecommended: false,
    minorWarning: false,
    minorAccountLock: false,
    _audit: { signals: auditSignals, safe_context_signals: safeSignals, suspicious_signal_count: suspiciousResult.matchedLabels.length },
  };
}


export const CHILD_SAFETY_LAW_SUMMARY = `
CHILD SAFETY LAWS — All DREAMengin AI Triad Members Must Enforce These Rules

1. PROTECT Act (18 U.S.C. §2256): CSAM is zero-tolerance. Mandatory NCMEC reporting.
2. COPPA: Minimum age 13. No data collection from under-13s without parental consent.
3. CIPA: Block harmful material for minors. All images from minors to adults are blocked.
4. CDA §230 / STOP CSAM Act: Platform loses safe harbor for known CSAM. Act immediately.
5. Age-Appropriate Design Codes: Apply maximum privacy and safety defaults for all minor accounts.

MINOR-ADULT MESSAGING RULES:
- Minors (13–17) and adults (18+) may message each other, EXCEPT:
  * Any image from a minor to an adult is ALWAYS blocked (rule C32_MINOR_IMAGE). No exceptions.
  * Adults soliciting images from minors are permanently banned (rule C33_SOLICITING_IMAGES).
- TheBoogieMan.Ai continuously monitors conversations for grooming, harassment, and inappropriate content.
- If safe context is detected (teacher-student, coach, family, etc.), no action is taken.
- If inappropriate content is detected: messages are blocked, adult is flagged for permanent ban, minor receives a warning.
- Minor repeat violations: account is locked and requires parental consent to unlock.

IMAGE RULES (strict):
- Any image sent by a minor to an adult is ALWAYS blocked. No exceptions.
- The adult sees: "This image was sent from a minor and has been blocked."
- All images are scanned for CSAM. If the AI is uncertain, the image is blocked.
- Adults who solicit images from minors are permanently banned.
- Images of real people must have verified consent and age verification.

CONTEXT EVALUATION:
- All three AI members evaluate context of minor-adult conversations.
- Safe contexts (teacher, coach, family, youth leader) are recognized and allowed with monitoring.
- Suspicious or ambiguous contexts trigger triad review.
- Certain inappropriate interactions trigger immediate block and permanent ban recommendation.
` as const;
