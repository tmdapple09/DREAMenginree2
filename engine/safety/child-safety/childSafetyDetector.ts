




















export type ChildSafetyRuleCode = 'C22_CSAM' | 'C31_GROOMING' | 'C32_MINOR_IMAGE' | 'C33_SOLICITING_IMAGES';

export interface ChildSafetySignal {
  
  _label: string;
  
  weight: number;
}

export interface ChildSafetyResult {
  
  flagged: boolean;
  
  rule_code: ChildSafetyRuleCode | null;
  
  severity: number;
  
  confidence: number;
  
  category: 'CSAM' | 'GROOMING' | 'MINOR_IMAGE' | 'SOLICITING_IMAGES' | 'CLEAN';
  
  signal_count: number;
  
  _audit: {
    signals: string[];
    hash_match: boolean;
  };
}

export interface ScanInput {
  
  text?: string;
  
  mediaHashes?: string[];
  
  knownBadHashes?: Set<string>;
  
  imageClassification?: import('./imageClassifier').ImageClassificationResult;
  
  senderAge?: number;
  
  recipientAge?: number;
  
  hasImageAttachment?: boolean;
}








const GROOMING_PATTERNS: { pattern: RegExp; weight: number; label: string }[] = [
  
  { pattern: /\bare\s+you\s+(under|below)\s+(1[0-7]|18)\b/i,         weight: 0.85, label: 'age_probe_under18' },
  { pattern: /\bhow\s+old\s+are\s+you\b/i,                           weight: 0.40, label: 'age_probe_generic' },
  { pattern: /\bare\s+you\s+a\s+(minor|teen|child|kid|juvenile)\b/i, weight: 0.80, label: 'minor_status_probe' },
  { pattern: /\byou\s+look\s+(young|so\s+young|very\s+young)\b/i,    weight: 0.65, label: 'age_comment_young' },
  
  { pattern: /\bdon'?t\s+tell\s+(your\s+)?(parents?|moms?|dads?|guardians?|anyone)\b/i, weight: 0.90, label: 'secrecy_coercion' },
  { pattern: /\b(keep|this\s+is)\s+(our\s+)?(little\s+)?secret\b/i, weight: 0.90, label: 'secrecy_coercion_2' },
  { pattern: /\bjust\s+between\s+(you\s+and\s+me|us)\b/i,            weight: 0.55, label: 'secrecy_just_us' },
  // Platform migration (moving off-platform to avoid detection)
  { pattern: /\b(add|follow|dm|message)\s+me\s+on\s+(snap(chat)?|kik|telegram|discord|whatsapp|signal)\b/i, weight: 0.70, label: 'platform_migration' },
  { pattern: /\blet'?s\s+(move|talk|chat)\s+(to|on)\s+(snap|kik|telegram|discord|another\s+app)\b/i,      weight: 0.75, label: 'platform_migration_2' },
  
  { pattern: /\bi'?ll\s+(buy|send|give|pay)\s+you\b/i,            weight: 0.60, label: 'bribe_grooming' },
  { pattern: /\b(gift\s+card|cash|money|amazon|venmo|cashapp)\b.{0,40}\b(minor|teen|young|kid)\b/i, weight: 0.80, label: 'bribe_minor' },
  // In-person meeting solicitation
  { pattern: /\b(meet|come\s+over|come\s+to\s+my|visit\s+me)\b.{0,60}\b(alone|by\s+yourself|without\s+your|don'?t\s+bring)\b/i, weight: 0.85, label: 'meeting_solicitation' },
  { pattern: /\bwant\s+to\s+meet\s+up\b.{0,60}\b(alone|just\s+us|private)\b/i, weight: 0.85, label: 'meeting_alone' },
  
  { pattern: /\byou['']?re\s+so\s+mature\s+for\s+your\s+age\b/i,    weight: 0.80, label: 'maturity_flattery' },
  { pattern: /\byou\s+(act|seem|look)\s+(older|mature|grown\s+up)\b/i, weight: 0.55, label: 'age_flattery' },
  
  { pattern: /\bsend\s+(me\s+)?(a\s+)?(pic|photo|picture|nude|nudes|naked)\b/i, weight: 0.85, label: 'nude_solicitation' },
  { pattern: /\bshow\s+me\s+(your\s+)?(body|yourself|it)\b/i,        weight: 0.75, label: 'body_solicitation' },
];


const CSAM_TEXT_PATTERNS: { pattern: RegExp; weight: number; label: string }[] = [
  
  { pattern: /\bcsam\b/i,                                             weight: 0.95, label: 'csam_explicit' },
  { pattern: /\bchild\s+(porn|pornography|sex|sexual|nude|nudes)\b/i, weight: 0.95, label: 'csam_explicit_2' },
  { pattern: /\bkiddie\s+porn\b/i,                                    weight: 0.98, label: 'csam_kp' },
  { pattern: /\b(cp\b).{0,20}\b(trade|sell|buy|share|looking for|have)\b/i, weight: 0.90, label: 'csam_cp_trade' },
  { pattern: /\bminor.{0,20}(sex|nude|naked|explicit|sexual)\b/i,    weight: 0.90, label: 'csam_minor_explicit' },
  { pattern: /\b(underage|u\/?18).{0,20}(sex|nude|explicit|content)\b/i, weight: 0.90, label: 'csam_underage' },
  
  { pattern: /\b(trade|sell|buy|swap)\b.{0,40}\b(minor|child|kid|teen|young)\b.{0,40}\b(pic|photo|video|clip|content)\b/i, weight: 0.95, label: 'csam_trade' },
];








function checkHashes(hashes: string[], knownBadHashes: Set<string>): boolean {
  for (const h of hashes) {
    if (knownBadHashes.has(h.toLowerCase())) return true;
  }
  return false;
}





function scanForPatterns(
  text: string,
  patterns: { pattern: RegExp; weight: number; label: string }[],
): { totalWeight: number; matchedLabels: string[] } {
  let totalWeight = 0;
  const matchedLabels: string[] = [];

  for (const { pattern, weight, label } of patterns) {
    if (pattern.test(text)) {
      totalWeight += weight;
      matchedLabels.push(label);
    }
  }

  return { totalWeight, matchedLabels };
}


function normaliseWeight(raw: number, maxExpected: number): number {
  return Math.min(1.0, raw / maxExpected);
}


function estimateConfidence(signalCount: number): number {
  if (signalCount === 0) return 0;
  if (signalCount === 1) return 0.70;
  if (signalCount === 2) return 0.85;
  return Math.min(0.98, 0.85 + (signalCount - 2) * 0.04);
}






export function scanContent(input: ScanInput): ChildSafetyResult {
  const text = (input.text ?? '').normalize('NFKC');
  const mediaHashes = input.mediaHashes ?? [];
  const knownBadHashes = input.knownBadHashes ?? new Set<string>();

  
  
  if (
    input.hasImageAttachment === true &&
    typeof input.senderAge === 'number' &&
    typeof input.recipientAge === 'number' &&
    input.senderAge >= 13 &&
    input.senderAge < 18 &&
    input.recipientAge >= 18
  ) {
    return {
      flagged: true,
      rule_code: 'C32_MINOR_IMAGE',
      severity: 1.0,
      confidence: 1.0,
      category: 'MINOR_IMAGE',
      signal_count: 1,
      _audit: { signals: ['minor_to_adult_image'], hash_match: false },
    };
  }

  const hashMatch = mediaHashes.length > 0 && checkHashes(mediaHashes, knownBadHashes);
  if (hashMatch) {
    return {
      flagged: true,
      rule_code: 'C22_CSAM',
      severity: 1.0,
      confidence: 1.0,
      category: 'CSAM',
      signal_count: 1,
      _audit: { signals: ['hash_registry_match'], hash_match: true },
    };
  }

  const csamResult = scanForPatterns(text, CSAM_TEXT_PATTERNS);
  if (csamResult.matchedLabels.length > 0) {
    const severity = normaliseWeight(csamResult.totalWeight, 2.0);
    const confidence = estimateConfidence(csamResult.matchedLabels.length);
    return {
      flagged: true,
      rule_code: 'C22_CSAM',
      severity,
      confidence,
      category: 'CSAM',
      signal_count: csamResult.matchedLabels.length,
      _audit: { signals: csamResult.matchedLabels, hash_match: false },
    };
  }

  const groomResult = scanForPatterns(text, GROOMING_PATTERNS);
  if (groomResult.matchedLabels.length > 0) {
    const severity = normaliseWeight(groomResult.totalWeight, 3.0);
    const confidence = estimateConfidence(groomResult.matchedLabels.length);
    return {
      flagged: true,
      rule_code: 'C31_GROOMING',
      severity,
      confidence,
      category: 'GROOMING',
      signal_count: groomResult.matchedLabels.length,
      _audit: { signals: groomResult.matchedLabels, hash_match: false },
    };
  }

  const imgResult = input.imageClassification;
  if (imgResult && !imgResult.skipped && imgResult.flagged) {
    return {
      flagged: true,
      rule_code: 'C22_CSAM',
      severity: imgResult.severity,
      confidence: imgResult.confidence,
      category: 'CSAM',
      signal_count: 1,
      _audit: { signals: [`llm_image:${imgResult.risk}`], hash_match: false },
    };
  }

  return {
    flagged: false,
    rule_code: null,
    severity: 0,
    confidence: 0,
    category: 'CLEAN',
    signal_count: 0,
    _audit: { signals: [], hash_match: false },
  };
}


export function isZeroTolerance(result: ChildSafetyResult): boolean {
  if (!result.flagged) return false;
  if (result.rule_code === 'C22_CSAM') return true;
  if (result.rule_code === 'C32_MINOR_IMAGE') return true;
  if (result.rule_code === 'C33_SOLICITING_IMAGES') return true;
  
  if (result.rule_code === 'C31_GROOMING' && (result.confidence >= 0.85 || result._audit.hash_match)) {
    return true;
  }
  return false;
}


export function isMinorToAdultImageBlock(result: ChildSafetyResult): boolean {
  return result.flagged && result.rule_code === 'C32_MINOR_IMAGE';
}
