



export const PLATFORM_NAME = 'DREAMengin' as const;


export const PRODUCT_VERSION = '2.0.0' as const;


export const REJECTED_PLATFORM_VARIANTS = [
  'DreamEngin',
  'Dreamengin',
  'dreamengin',
  'DREAMENGIN',
  'Dream Engin',
  'DreamEngine',
] as const;



export const CORE_SURFACES = {
  HOME_DREAM: 'HomeDream',
  EDIT_PROFILE_DREAM_UI: 'Edit ProfileDream',
  EDIT_PROFILE_DREAM_CODE: 'EditProfileDream',
  VIEW_PROFILE_UI: 'View Profile',
  VIEW_PROFILE_CODE: 'ViewProfile',
} as const;

export const CORE_SURFACE_ROUTES = {
  HOME_DREAM: '/homedream',
  EDIT_PROFILE_DREAM: '/edit-profiledream',
  VIEW_PROFILE: '/view-profile',
} as const;


export const LEGACY_ROUTES = {
  
  HOME: '/home',
  
  EDIT_PROFILE: '/edit-profile',
  
  PROFILE_HANDLE: '/profile/[handle]',
  
  U_HANDLE: '/u/[handle]',
} as const;

export const REJECTED_CORE_SURFACE_NAMES = [
  'home',
  'dashboard',
  'feed',
  'edit-profile',
  'profile-editor',
  'builder',
  'public-profile',
  'profile-page',
] as const;



export const DAYDREAM_DOMAINS = {
  MUSIC: 'Music',
  GAMES: 'Games',
  LAB: 'Lab',
  CODE: 'Code',
  BRAND: 'Brand',
  CREATE: 'Create',
} as const;

export type DaydreamDomain = (typeof DAYDREAM_DOMAINS)[keyof typeof DAYDREAM_DOMAINS];

export const DAYDREAM_ROUTES: Record<DaydreamDomain, string> = {
  Music: '/daydream/music',
  Games: '/daydream/games',
  Lab: '/daydream/lab',
  Code: '/daydream/code',
  Brand: '/daydream/brand',
  Create: '/daydream/create',
};



export const ENGIN_SURFACES = {
  MUSIC: 'StarMakerEngin',
  GAMES: 'GameEngin',
  LAB: 'LabEngin',
  CODE: 'CodeEngin',
  BRAND: 'BrandingEngin',
  CREATE: 'ContentEngin',
} as const;

export type EnginSurface = (typeof ENGIN_SURFACES)[keyof typeof ENGIN_SURFACES];


export const DAYDREAM_TO_ENGIN: Record<DaydreamDomain, EnginSurface> = {
  Music: 'StarMakerEngin',
  Games: 'GameEngin',
  Lab: 'LabEngin',
  Code: 'CodeEngin',
  Brand: 'BrandingEngin',
  Create: 'ContentEngin',
};

export const ALL_ENGIN_NAMES: readonly EnginSurface[] = Object.values(ENGIN_SURFACES);

export const REJECTED_ENGIN_NAMES = [
  'StarMakerEngine',
  'GameEngine',
  'LabEngine',
  'CodeEngine',
  'BrandingEngine',
  'ContentEngine',
  'Dreamengin',
  'Daydreamengin',
  'DayDreamengin',
  'MusicEngin',
  'GamesEngin',
  'CreateEngin',
] as const;



export const PLATFORM_MODULES = {
  DREAM_DM: 'DreamDM',
  DREAM_DM_BAR: 'DreamDM Bar',
  DREAM_MENU: 'DreamMenu',
  DREAM_MARKETPLACE: 'DreamMarketplace',
  DREAM_SHOP: 'DreamShop',
  DREAM_ADS: 'DreamAds',
} as const;

export type PlatformModule = (typeof PLATFORM_MODULES)[keyof typeof PLATFORM_MODULES];

export const MODULE_ROUTES: Partial<Record<PlatformModule, string>> = {
  DreamDM: '/messages',
  DreamMarketplace: '/marketplace',
  DreamShop: '/shop',
  DreamAds: '/ads',
};

export const REJECTED_MODULE_NAMES = [
  'messages',
  'chat',
  'inbox',
  'nav',
  'sidebar',
  'hamburger',
  'marketplace',
  'shop',
  'store',
  'promotions',
  'ads',
] as const;



export const AI_AGENTS = {
  DR_EAMS: 'Dr. Eams',
  IDARI: 'IDARi',
  THE_BOOGIEMAN: 'TheBoogieMan.Ai',
} as const;

export type AIAgent = (typeof AI_AGENTS)[keyof typeof AI_AGENTS];

export const AI_ROUTES: Record<AIAgent, string> = {
  'Dr. Eams': '/api/ai/eams',
  IDARi: '/api/ai/idari',
  'TheBoogieMan.Ai': '/api/ai/boogieman',
};




export const PRODUCT_DESCRIPTION =
  'dual-runtime, spatial operating environment' as const;

export const PRODUCT_DESCRIPTION_FULL =
  'customizable, privacy-first, dual-runtime spatial operating environment for creating, sharing, organizing, and connecting modular runtime containers across personal, creative, and social spaces' as const;



export const RUNTIME_REGIONS = {
  SURFACE_SPACE: 'Surface Space',
  DREAM_SPACE: 'DreamSpace',
} as const;

export type RuntimeRegion = (typeof RUNTIME_REGIONS)[keyof typeof RUNTIME_REGIONS];


export const RUNTIME_SEAM_NAMES = [
  'DreamDM Bar',
  'Persistent Interaction Rail',
  'Persistent Spatial Divider',
  'Runtime Seam',
] as const;

export type RuntimeSeamName = (typeof RUNTIME_SEAM_NAMES)[number];



export const SURFACE_NAMES = {
  HOME_DREAM_SURFACE: 'HomeDream Surface',
  EDIT_PROFILE_DREAM_SURFACE: 'Edit ProfileDream Surface',
  VIEW_PROFILE_SURFACE: 'View Profile Surface',
  DREAM_DM_SURFACE: 'DreamDM Surface',
  DREAM_SHOP_SURFACE: 'DreamShop Surface',
  DREAM_MARKETPLACE_SURFACE: 'DreamMarketplace Surface',
  DREAM_ADS_SURFACE: 'DreamAds Surface',
  MUSIC_DAYDREAM_SURFACE: 'Music Daydream Surface',
  GAMES_DAYDREAM_SURFACE: 'Games Daydream Surface',
  LAB_DAYDREAM_SURFACE: 'Lab Daydream Surface',
  CODE_DAYDREAM_SURFACE: 'Code Daydream Surface',
  BRAND_DAYDREAM_SURFACE: 'Brand Daydream Surface',
  CREATE_DAYDREAM_SURFACE: 'Create Daydream Surface',
} as const;

export type SurfaceName = (typeof SURFACE_NAMES)[keyof typeof SURFACE_NAMES];


export const ROUTE_LAW_NAMING_PREFERENCES = [
  SURFACE_NAMES.HOME_DREAM_SURFACE,
  SURFACE_NAMES.EDIT_PROFILE_DREAM_SURFACE,
  SURFACE_NAMES.VIEW_PROFILE_SURFACE,
  SURFACE_NAMES.DREAM_SHOP_SURFACE,
  SURFACE_NAMES.DREAM_MARKETPLACE_SURFACE,
  PLATFORM_MODULES.DREAM_MENU,
  SURFACE_NAMES.DREAM_DM_SURFACE,
  SURFACE_NAMES.DREAM_ADS_SURFACE,
] as const;

export type RouteLawPreferredName = (typeof ROUTE_LAW_NAMING_PREFERENCES)[number];




export const DREAM_WINDOW = 'Dream Window' as const;

export const DREAM_WINDOW_STATES = {
  UNBOUND: 'Unbound Dream Window',
  BOUND: 'Bound Dream Window',
  MOUNTED: 'Mounted Dream Window',
  COLLAPSED: 'Collapsed Dream Window',
} as const;

export type DreamWindowState =
  (typeof DREAM_WINDOW_STATES)[keyof typeof DREAM_WINDOW_STATES];


export const DREAM_WINDOW_REQUIRED_FIELDS = [
  'id',
  'type',
  'owner',
  'config',
  'size',
  'position',
  'visibility',
  'sourceBindings',
  'destinationRules',
  'activeState',
] as const;



export const CONNECTION_VERBS = [
  'bind',
  'mount',
  'activate',
  'attach',
  'route into',
  'open into',
  'connect across',
] as const;

export type ConnectionVerb = (typeof CONNECTION_VERBS)[number];

export const REJECTED_CONNECTION_VERBS = [
  'link widget',
  'open page',
  'go to tab',
  'launch card',
] as const;



export const NETWORK_COUNTS = {
  DAYDREAM_SURFACES: 6,
  ENGIN_RUNTIMES: 6,
  CONNECTION_PATHS: 11,
} as const;


export const NETWORK_WORK_TYPES = [
  'creation',
  'experimentation',
  'execution',
  'deployment',
  'publishing',
] as const;

export type NetworkWorkType = (typeof NETWORK_WORK_TYPES)[number];




export const REJECTED_OS_TERMS = [
  'app',           
  'platform',      
  'page',          
  'widget',        
  'widget layer',  
  'tool',          
  'engine',        
  'pair',          
  'dashboard',     
  'tab navigation', 
  'card',          
  'link widget',   
  'open page',     
  'go to tab',     
  'launch card',   
] as const;




export function isCanonicalPlatformName(name: string): boolean {
  return name === PLATFORM_NAME;
}


export function isRejectedPlatformVariant(name: string): boolean {
  return (REJECTED_PLATFORM_VARIANTS as readonly string[]).includes(name);
}


export function isValidEnginName(name: string): name is EnginSurface {
  return (ALL_ENGIN_NAMES as readonly string[]).includes(name);
}


export function isRejectedEnginName(name: string): boolean {
  return (REJECTED_ENGIN_NAMES as readonly string[]).includes(name);
}


export function hasEnginSuffix(name: string): boolean {
  return name.endsWith('Engin');
}


export function hasEngineSuffix(name: string): boolean {
  return name.endsWith('Engine');
}


export function isValidDaydreamDomain(name: string): name is DaydreamDomain {
  return (Object.values(DAYDREAM_DOMAINS) as string[]).includes(name);
}


export function isValidModuleName(name: string): name is PlatformModule {
  return (Object.values(PLATFORM_MODULES) as string[]).includes(name);
}


export function isRejectedModuleName(name: string): boolean {
  return (REJECTED_MODULE_NAMES as readonly string[]).includes(name);
}


export function isRejectedOsTerm(name: string): boolean {
  return (REJECTED_OS_TERMS as readonly string[]).includes(name);
}


export function isValidDreamWindowState(name: string): name is DreamWindowState {
  return (Object.values(DREAM_WINDOW_STATES) as string[]).includes(name);
}


export function isValidConnectionVerb(verb: string): verb is ConnectionVerb {
  return (CONNECTION_VERBS as readonly string[]).includes(verb);
}


export function isRejectedConnectionVerb(verb: string): boolean {
  return (REJECTED_CONNECTION_VERBS as readonly string[]).includes(verb);
}


export function isValidRuntimeRegion(name: string): name is RuntimeRegion {
  return (Object.values(RUNTIME_REGIONS) as string[]).includes(name);
}


export function isValidSurfaceName(name: string): name is SurfaceName {
  return (Object.values(SURFACE_NAMES) as string[]).includes(name);
}


export function isRouteLawPreferredName(name: string): name is RouteLawPreferredName {
  return (ROUTE_LAW_NAMING_PREFERENCES as readonly string[]).includes(name);
}


export function getEnginForDomain(domain: string): EnginSurface | undefined {
  if (!isValidDaydreamDomain(domain)) return undefined;
  return DAYDREAM_TO_ENGIN[domain];
}


export function validateName(name: string): string[] {
  const violations: string[] = [];

  if (isRejectedPlatformVariant(name)) {
    violations.push(
      `"${name}" is a rejected platform name variant. Use "${PLATFORM_NAME}" instead.`
    );
  }

  if (isRejectedEnginName(name)) {
    violations.push(
      `"${name}" is a rejected Engin surface name. Use one of: ${ALL_ENGIN_NAMES.join(', ')}`
    );
  }

  if (hasEngineSuffix(name) && !hasEnginSuffix(name)) {
    violations.push(`"${name}" uses the rejected "Engine" suffix. DREAMengin surfaces use "Engin".`);
  }

  if ((REJECTED_CORE_SURFACE_NAMES as readonly string[]).includes(name)) {
    violations.push(
      `"${name}" is a rejected core surface name. Use canonical names: HomeDream, EditProfileDream, ViewProfile.`
    );
  }

  if (isRejectedModuleName(name)) {
    violations.push(
      `"${name}" is a rejected module name. Use canonical module names: ${Object.values(PLATFORM_MODULES).join(', ')}`
    );
  }

  if (isRejectedOsTerm(name)) {
    violations.push(
      `"${name}" is a rejected OS-layer term. Use the canonical DREAMengin spatial-OS vocabulary instead.`
    );
  }

  return violations;
}



export const ALL_CANONICAL_NAMES = {
  platform: PLATFORM_NAME,
  productDescription: PRODUCT_DESCRIPTION,
  coreSurfaces: Object.values(CORE_SURFACES),
  surfaceNames: Object.values(SURFACE_NAMES),
  routeLawNamingPreferences: [...ROUTE_LAW_NAMING_PREFERENCES],
  daydreamDomains: Object.values(DAYDREAM_DOMAINS),
  enginSurfaces: Object.values(ENGIN_SURFACES),
  networkWorkTypes: NETWORK_WORK_TYPES,
  platformModules: Object.values(PLATFORM_MODULES),
  aiAgents: Object.values(AI_AGENTS),
  runtimeRegions: Object.values(RUNTIME_REGIONS),
  dreamWindowStates: Object.values(DREAM_WINDOW_STATES),
  connectionVerbs: [...CONNECTION_VERBS],
} as const;
