import { ENGIN_REGISTRY, type EnginEntry, type ForgeActivityPulse } from '@/engins/forgeengin/forge/forgeRegistry';



export interface ResumeDest {
  
  href: string;
  
  label: string;
  
  emoji: string;
  
  accent: string;
}


function findEntry(subsystemId: string): EnginEntry | null {
  if (!subsystemId) return null;
  return (
    ENGIN_REGISTRY.find((e) => e.id === subsystemId) ??
    ENGIN_REGISTRY.find((e) => e.name === subsystemId) ??
    null
  );
}

function entryToResumeDest(entry: EnginEntry): ResumeDest {
  return {
    href:   entry.daydreamHref,
    label:  entry.name,
    emoji:  entry.emoji,
    accent: entry.accent,
  };
}


export function resolveResumeDest(
  continueFrom: string | null,
  activity: readonly ForgeActivityPulse[],
): ResumeDest | null {
  
  if (continueFrom) {
    const entry = findEntry(continueFrom);
    if (entry) return entryToResumeDest(entry);
  }

  
  if (activity.length > 0) {
    const hottest = [...activity].sort((a, b) => b.heat - a.heat)[0];
    if (hottest) {
      const entry = findEntry(hottest.enginId);
      if (entry) return entryToResumeDest(entry);
    }
  }

  return null;
}


export function formatArtifactKind(kind: string): string {
  const LABELS: Record<string, string> = {
    event:         'EVT',
    'code-run':    'CODE',
    'code-output': 'OUT',
    'lab-run':     'LAB',
    'lab-result':  'RES',
    build:         'BUILD',
    asset:         'ASSET',
    prompt:        'AI',
    draft:         'DRAFT',
  };
  return LABELS[kind] ?? kind.toUpperCase().slice(0, 5);
}


export function getArtifactAccent(kind: string): string {
  const ACCENTS: Record<string, string> = {
    event:         '#d4a843',   
    'code-run':    '#22d3ee',   
    'code-output': '#22d3ee',
    'lab-run':     '#10b981',   
    'lab-result':  '#10b981',
    build:         '#3b82f6',   
    asset:         '#a855f7',   
    prompt:        '#f472b6',   
    draft:         'rgba(255,255,255,0.55)',
  };
  return ACCENTS[kind] ?? 'rgba(255,255,255,0.40)';
}
