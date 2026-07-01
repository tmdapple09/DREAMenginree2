import {
    DAYDREAM_DOMAINS,
    ENGIN_SURFACES,
    NETWORK_COUNTS,
    type ConnectionVerb,
    type DaydreamDomain,
    type EnginSurface,
} from '@/engine/identity/canonical-names';






export interface EnginConnectionPath {
  
  id: string;
  
  daydreamSurface: DaydreamDomain;
  
  enginRuntime: EnginSurface;
  
  verb: ConnectionVerb;
  
  label: string;
}



function pathId(domain: DaydreamDomain, engin: EnginSurface, verb: ConnectionVerb): string {
  const d = domain.toLowerCase().replace(/\s+/g, '-');
  const e = engin.toLowerCase().replace(/\s+/g, '-');
  const v = verb.replace(/\s+/g, '-');
  return `${d}→${e}[${v}]`;
}

function buildLabel(domain: DaydreamDomain, engin: EnginSurface, verb: ConnectionVerb): string {
  return `${domain} Daydream Surface → ${engin} (${verb})`;
}



export const ALL_CONNECTION_PATHS: readonly EnginConnectionPath[] = [
  
  {
    id: pathId(DAYDREAM_DOMAINS.MUSIC, ENGIN_SURFACES.MUSIC, 'bind'),
    daydreamSurface: DAYDREAM_DOMAINS.MUSIC,
    enginRuntime:    ENGIN_SURFACES.MUSIC,
    verb:            'bind',
    label:           buildLabel(DAYDREAM_DOMAINS.MUSIC, ENGIN_SURFACES.MUSIC, 'bind'),
  },
  {
    id: pathId(DAYDREAM_DOMAINS.MUSIC, ENGIN_SURFACES.LAB, 'route into'),
    daydreamSurface: DAYDREAM_DOMAINS.MUSIC,
    enginRuntime:    ENGIN_SURFACES.LAB,
    verb:            'route into',
    label:           buildLabel(DAYDREAM_DOMAINS.MUSIC, ENGIN_SURFACES.LAB, 'route into'),
  },
  {
    id: pathId(DAYDREAM_DOMAINS.MUSIC, ENGIN_SURFACES.CODE, 'connect across'),
    daydreamSurface: DAYDREAM_DOMAINS.MUSIC,
    enginRuntime:    ENGIN_SURFACES.CODE,
    verb:            'connect across',
    label:           buildLabel(DAYDREAM_DOMAINS.MUSIC, ENGIN_SURFACES.CODE, 'connect across'),
  },

  {
    id: pathId(DAYDREAM_DOMAINS.GAMES, ENGIN_SURFACES.GAMES, 'bind'),
    daydreamSurface: DAYDREAM_DOMAINS.GAMES,
    enginRuntime:    ENGIN_SURFACES.GAMES,
    verb:            'bind',
    label:           buildLabel(DAYDREAM_DOMAINS.GAMES, ENGIN_SURFACES.GAMES, 'bind'),
  },
  {
    id: pathId(DAYDREAM_DOMAINS.GAMES, ENGIN_SURFACES.LAB, 'route into'),
    daydreamSurface: DAYDREAM_DOMAINS.GAMES,
    enginRuntime:    ENGIN_SURFACES.LAB,
    verb:            'route into',
    label:           buildLabel(DAYDREAM_DOMAINS.GAMES, ENGIN_SURFACES.LAB, 'route into'),
  },
  {
    id: pathId(DAYDREAM_DOMAINS.GAMES, ENGIN_SURFACES.CODE, 'connect across'),
    daydreamSurface: DAYDREAM_DOMAINS.GAMES,
    enginRuntime:    ENGIN_SURFACES.CODE,
    verb:            'connect across',
    label:           buildLabel(DAYDREAM_DOMAINS.GAMES, ENGIN_SURFACES.CODE, 'connect across'),
  },

  {
    id: pathId(DAYDREAM_DOMAINS.BRAND, ENGIN_SURFACES.BRAND, 'bind'),
    daydreamSurface: DAYDREAM_DOMAINS.BRAND,
    enginRuntime:    ENGIN_SURFACES.BRAND,
    verb:            'bind',
    label:           buildLabel(DAYDREAM_DOMAINS.BRAND, ENGIN_SURFACES.BRAND, 'bind'),
  },
  {
    id: pathId(DAYDREAM_DOMAINS.BRAND, ENGIN_SURFACES.CREATE, 'route into'),
    daydreamSurface: DAYDREAM_DOMAINS.BRAND,
    enginRuntime:    ENGIN_SURFACES.CREATE,
    verb:            'route into',
    label:           buildLabel(DAYDREAM_DOMAINS.BRAND, ENGIN_SURFACES.CREATE, 'route into'),
  },
  {
    id: pathId(DAYDREAM_DOMAINS.BRAND, ENGIN_SURFACES.LAB, 'connect across'),
    daydreamSurface: DAYDREAM_DOMAINS.BRAND,
    enginRuntime:    ENGIN_SURFACES.LAB,
    verb:            'connect across',
    label:           buildLabel(DAYDREAM_DOMAINS.BRAND, ENGIN_SURFACES.LAB, 'connect across'),
  },

  {
    id: pathId(DAYDREAM_DOMAINS.CREATE, ENGIN_SURFACES.CREATE, 'bind'),
    daydreamSurface: DAYDREAM_DOMAINS.CREATE,
    enginRuntime:    ENGIN_SURFACES.CREATE,
    verb:            'bind',
    label:           buildLabel(DAYDREAM_DOMAINS.CREATE, ENGIN_SURFACES.CREATE, 'bind'),
  },

  {
    id: pathId(DAYDREAM_DOMAINS.LAB, ENGIN_SURFACES.LAB, 'bind'),
    daydreamSurface: DAYDREAM_DOMAINS.LAB,
    enginRuntime:    ENGIN_SURFACES.LAB,
    verb:            'bind',
    label:           buildLabel(DAYDREAM_DOMAINS.LAB, ENGIN_SURFACES.LAB, 'bind'),
  },
] as const;



if (ALL_CONNECTION_PATHS.length !== NETWORK_COUNTS.CONNECTION_PATHS) {
  throw new Error(
    `enginConnectionNetwork: ALL_CONNECTION_PATHS has ${ALL_CONNECTION_PATHS.length} entries ` +
      `but NETWORK_COUNTS.CONNECTION_PATHS requires exactly ${NETWORK_COUNTS.CONNECTION_PATHS}. ` +
      `Update ALL_CONNECTION_PATHS to match the canonical network count.`,
  );
}




export function getPathsForDomain(domain: DaydreamDomain): readonly EnginConnectionPath[] {
  return ALL_CONNECTION_PATHS.filter((p) => p.daydreamSurface === domain);
}


export function getPathsForEngin(engin: EnginSurface): readonly EnginConnectionPath[] {
  return ALL_CONNECTION_PATHS.filter((p) => p.enginRuntime === engin);
}


export function hasConnectionPath(domain: DaydreamDomain, engin: EnginSurface): boolean {
  return ALL_CONNECTION_PATHS.some(
    (p) => p.daydreamSurface === domain && p.enginRuntime === engin,
  );
}
