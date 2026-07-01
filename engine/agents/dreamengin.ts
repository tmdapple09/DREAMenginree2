













export const IDENTITY = {
  name: 'DREAMengin',
  kind: 'dual-runtime spatial operating environment',
  palette: ['gold', 'light-blue', 'white'] as const,
  font: 'Space Grotesk',
  radiusFamily: [6, 10, 14, 18, 24, 32, 9999] as const,
} as const;



export const AXIOMS = [
  'Nothing is public by default.',
  'All creation starts private.',
  'Every visible action must do something real.',
  'No fake buttons.',
  'No accidental sharing.',
  'No hidden posting.',
  'No platform system may bypass privacy rules.',
] as const;



export const VOCABULARY: ReadonlyArray<{ canonical: string; forbidden: string[] }> = [
  { canonical: 'surface',            forbidden: ['page'] },
  { canonical: 'Dream Window',       forbidden: ['widget', 'card'] },
  { canonical: 'DreamSpace',         forbidden: ['widget layer'] },
  { canonical: 'Surface Space',      forbidden: ['top area', 'main area'] },
  { canonical: 'runtime',            forbidden: ['app'] },
  { canonical: 'runtime environment', forbidden: ['platform'] },
  { canonical: 'surface switching',  forbidden: ['tab navigation'] },
  { canonical: 'bind',              forbidden: ['link widget'] },
  { canonical: 'mount',             forbidden: ['open page'] },
  { canonical: 'activate',          forbidden: ['launch card'] },
  { canonical: 'connection path',   forbidden: ['pair'] },
];



export const CORE_SURFACES = {
  HomeDream:        { route: '/dreamdmbar',          privacy: 'private' },
  EditProfileDream: { route: '/edit-profiledream',  privacy: 'private' },
  ViewProfile:      { route: '/view-profile',       privacy: 'public-output' },
  DreamDM:          { route: '/messages',            privacy: 'private' },
  DreamShop:        { route: '/shop',                privacy: 'mixed' },
  DreamMarketplace: { route: '/marketplace',         privacy: 'mixed' },
  DreamAds:         { route: '/ads',                 privacy: 'mixed' },
} as const;



export const DAYDREAM_SURFACES = [
  { name: 'Music Daydream',  route: '/daydream/music',  engin: 'StarMakerEngin' },
  { name: 'Games Daydream',  route: '/daydream/games',  engin: 'GameEngin' },
  { name: 'Lab Daydream',    route: '/daydream/lab',    engin: 'LabEngin' },
  { name: 'Code Daydream',   route: '/daydream/code',   engin: 'CodeEngin' },
  { name: 'Brand Daydream',  route: '/daydream/brand',  engin: 'BrandingEngin' },
  { name: 'Create Daydream', route: '/daydream/create', engin: 'ContentEngin' },
] as const;


export const CONNECTION_PATH_COUNT = 11;



export const DESIGN_TOKENS = {
  gold:      { meaning: 'save, confirm, action, premium emphasis',  hex: '#c8a84e' },
  lightBlue: { meaning: 'live state, connected state, signal state', hex: '#a0c3f0' },
  white:     { meaning: 'base surface, clarity, space',              hex: '#ffffff' },
} as const;



export type PrivacyDefault = 'private' | 'public-output' | 'mixed';

export interface PrivacyRule {
  surface: string;
  defaultVisibility: PrivacyDefault;
  rule: string;
}

export const PRIVACY_RULES: ReadonlyArray<PrivacyRule> = [
  { surface: 'HomeDream',        defaultVisibility: 'private',       rule: 'Private by default. Personal operating surface.' },
  { surface: 'EditProfileDream', defaultVisibility: 'private',       rule: 'Private builder. Never directly visible to others.' },
  { surface: 'ViewProfile',      defaultVisibility: 'public-output', rule: 'Shows only explicitly shared/saved projections.' },
  { surface: 'DreamDM',          defaultVisibility: 'private',       rule: 'Private messaging. End-to-end when possible.' },
  { surface: 'DreamShop',        defaultVisibility: 'mixed',         rule: 'Public storefront, private purchase history.' },
  { surface: 'DreamMarketplace', defaultVisibility: 'mixed',         rule: 'Public listings, private transaction details.' },
  { surface: 'DreamAds',         defaultVisibility: 'mixed',         rule: 'Transparent, user-controlled ad spaces.' },
];



export const NAVIGATION_RULES = [
  'Navigation must feel like depth, not page switching.',
  'Going back must restore context, not reload a new world.',
  'Users must never feel they have left the DREAMengin environment.',
  'Side A leads naturally into Side B (Engin). Side B is the powered control layer.',
  'The Gold Button is the primary travel control.',
  'Single tap: open dual menus.',
] as const;



export const DREAM_WINDOW_STATES = ['Unbound', 'Bound', 'Mounted', 'Collapsed'] as const;
export type DreamWindowState = (typeof DREAM_WINDOW_STATES)[number];



export const AI_TRIAD = {
  DrEams:       { role: 'User assistant / routing / discovery', audience: 'All authenticated users', route: '/api/ai/eams' },
  IDARi:        { role: 'Admin bug-fixer + optimizer',          audience: 'Admins only',              route: '/api/ai/idari' },
  TheBoogieMan: { role: 'Policy enforcer + system overwatch',   audience: 'System / Admins only',     route: '/api/ai/boogieman' },
} as const;



export const DREAMDM_BAR = {
  purpose: 'Persistent interaction rail and draggable spatial divider between Surface Space and Dream Space.',
  snapPoints: ['surface-focus', 'balanced', 'dream-focus', 'pinned'] as const,
  functions: [
    'quick message composition',
    'notification aggregation',
    'draft persistence',
    'quick replies',
    'search shortcuts',
    'content routing',
    'quick post creation',
    'command-surface access',
    'physical resizing of the two active spaces',
  ],
} as const;



export type ViolationSeverity = 'info' | 'warning' | 'violation';

export interface Violation {
  rule: string;
  severity: ViolationSeverity;
  file?: string;
  detail: string;
}


export function validateVocabulary(text: string): Violation[] {
  const violations: Violation[] = [];
  for (const entry of VOCABULARY) {
    for (const bad of entry.forbidden) {
      const regex = new RegExp(`\\b${bad}\\b`, 'gi');
      if (regex.test(text)) {
        violations.push({
          rule: 'vocabulary',
          severity: 'warning',
          detail: `Use "${entry.canonical}" instead of "${bad}".`,
        });
      }
    }
  }
  return violations;
}


export function validatePalette(hexColors: string[]): Violation[] {
  const trafficLightPatterns = [
    { pattern: /^#(22c55e|16a34a|15803d|4ade80|86efac)/i, name: 'green (traffic-light)' },
    { pattern: /^#(f59e0b|d97706|fbbf24|fcd34d)/i,        name: 'amber/yellow (traffic-light)' },
    { pattern: /^#(dc4444|ef4444|b91c1c|f87171)/i,         name: 'red (traffic-light)' },
  ];
  const violations: Violation[] = [];
  for (const hex of hexColors) {
    for (const { pattern, name } of trafficLightPatterns) {
      if (pattern.test(hex)) {
        violations.push({
          rule: 'palette',
          severity: 'violation',
          detail: `Color ${hex} is ${name}. Use gold (#c8a84e), light-blue (#a0c3f0), or white (#ffffff) per DREAMengin design system.`,
        });
      }
    }
  }
  return violations;
}


export function validatePrivacy(
  surfaceName: string,
  intendedVisibility: 'private' | 'public' | 'shared',
): Violation[] {
  const rule = PRIVACY_RULES.find((r) => r.surface === surfaceName);
  if (!rule) return [];
  if (rule.defaultVisibility === 'private' && intendedVisibility === 'public') {
    return [{
      rule: 'privacy',
      severity: 'violation',
      detail: `${surfaceName} is private by default. Public exposure requires explicit user intent.`,
    }];
  }
  return [];
}


export function validateNavigation(transition: {
  from: string;
  to: string;
  preservesContext: boolean;
}): Violation[] {
  if (!transition.preservesContext) {
    return [{
      rule: 'navigation',
      severity: 'warning',
      detail: `Transition from ${transition.from} to ${transition.to} does not preserve context. Navigation must feel like depth, not page switching.`,
    }];
  }
  return [];
}


export function validateAction(action: {
  label: string;
  hasHandler: boolean;
  isDisabledWithReason: boolean;
}): Violation[] {
  if (!action.hasHandler && !action.isDisabledWithReason) {
    return [{
      rule: 'real-action',
      severity: 'violation',
      detail: `"${action.label}" has no handler and no disabled explanation. Every visible action must do something real.`,
    }];
  }
  return [];
}


export function validateCredentialSafety(field: {
  label: string;
  type: string;
  exposesToken: boolean;
}): Violation[] {
  const violations: Violation[] = [];
  if (field.exposesToken) {
    violations.push({
      rule: 'credential-safety',
      severity: 'violation',
      detail: `"${field.label}" exposes a credential/token in the UI. Use OAuth redirect or type="password" — never expose tokens.`,
    });
  }
  if (field.type !== 'password' && /token|secret|key|credential/i.test(field.label)) {
    violations.push({
      rule: 'credential-safety',
      severity: 'warning',
      detail: `"${field.label}" looks like a credential but uses type="${field.type}". Should be type="password".`,
    });
  }
  return violations;
}



export const DREAMENGIN_EVENT = 'dreamengin:agent';

export type DreamEnginEventType = 'validation' | 'guidance' | 'enforcement';

export interface DreamEnginEventDetail {
  type: DreamEnginEventType;
  timestamp: string;
  violations: Violation[];
  message: string;
}

export function emitDreamEnginEvent(detail: DreamEnginEventDetail): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent<DreamEnginEventDetail>(DREAMENGIN_EVENT, { detail }),
  );
}

export function onDreamEnginEvent(
  handler: (detail: DreamEnginEventDetail) => void,
): () => void {
  if (typeof window === 'undefined') return () => {};
  const listener = (evt: Event) => {
    const ce = evt as CustomEvent<DreamEnginEventDetail>;
    if (!ce.detail) return;
    handler(ce.detail);
  };
  window.addEventListener(DREAMENGIN_EVENT, listener);
  return () => window.removeEventListener(DREAMENGIN_EVENT, listener);
}
