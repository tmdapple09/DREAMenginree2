import { CREATIVE_ENGINES, FORGE_HISTORY_KEY } from './forgeRegistry';



export interface MomentumDimension {
  
  name: string;
  
  score: number;
  
  desc: string;
  
  accent: string;
  
  emoji: string;
}

export interface MomentumSnapshot {
  
  composite: number;
  
  dimensions: MomentumDimension[];
  
  streakDays: number;
  
  enginesUsedToday: string[];
  
  actionsToday: number;
  
  actionsWeek: number;
  
  level: MomentumLevel;
  
  computedAt: string;
}

export type MomentumLevel =
  | 'DORMANT'
  | 'WARMING'
  | 'FLOWING'
  | 'BLAZING'
  | 'TRANSCENDENT';

interface HistoryEntry {
  enginId: string;
  label: string;
  timestamp: string;
}

const MS_PER_DAY = 86_400_000;
const MS_PER_HOUR = 3_600_000;


const DEPTH_MARKERS = [
  'launched', 'created', 'composed', 'built', 'exported',
  'published', 'recorded', 'mixed', 'designed', 'coded',
  'saved', 'arranged', 'rendered', 'completed', 'deployed',
  'generated', 'analysed', 'analyzed', 'tested', 'debugged',
];


const SHALLOW_MARKERS = ['entered', 'activated', 'opened'];


export function readHistory(): HistoryEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(FORGE_HISTORY_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as HistoryEntry[];
  } catch {
    return [];
  }
}


export function computeVelocity(history: HistoryEntry[]): number {
  const now = Date.now();
  const last24h = history.filter(
    e => now - new Date(e.timestamp).getTime() < MS_PER_DAY,
  );
  if (last24h.length === 0) return 0;

  
  const timestamps = last24h.map((e) => new Date(e.timestamp).getTime());
  const span = Math.max(now - Math.min(...timestamps), MS_PER_HOUR);
  const hoursActive = span / MS_PER_HOUR;
  const actionsPerHour = last24h.length / hoursActive;

  return Math.min(100, Math.round(actionsPerHour * 10));
}


export function computeDiversity(history: HistoryEntry[]): number {
  const now = Date.now();
  const last7d = history.filter(
    e => now - new Date(e.timestamp).getTime() < 7 * MS_PER_DAY,
  );
  const uniqueEngines = new Set(last7d.map((e) => e.enginId));
  
  const creativeIds = new Set(CREATIVE_ENGINES.map((e) => e.id));
  const validEngines = [...uniqueEngines].filter((id) => creativeIds.has(id));
  return Math.round((validEngines.length / CREATIVE_ENGINES.length) * 100);
}


export function computeStreak(history: HistoryEntry[]): number {
  if (history.length === 0) return 0;

  
  const daySet = new Set<string>();
  for (const entry of history) {
    const d = new Date(entry.timestamp);
    daySet.add(`${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`);
  }

  
  let streak = 0;
  const now = new Date();
  for (let offset = 0; offset < 365; offset++) {
    const d = new Date(now.getTime() - offset * MS_PER_DAY);
    const key = `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`;
    if (daySet.has(key)) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}


export function computeDepth(history: HistoryEntry[]): number {
  const now = Date.now();
  const last7d = history.filter(
    e => now - new Date(e.timestamp).getTime() < 7 * MS_PER_DAY,
  );
  if (last7d.length === 0) return 0;

  let meaningful = 0;
  for (const entry of last7d) {
    const lower = entry.label.toLowerCase();
    const isShallow = SHALLOW_MARKERS.some((m) => lower.includes(m));
    const isDeep = DEPTH_MARKERS.some((m) => lower.includes(m));
    if (isDeep && !isShallow) meaningful++;
  }

  return Math.round((meaningful / last7d.length) * 100);
}


export function getLevel(composite: number): MomentumLevel {
  if (composite >= 85) return 'TRANSCENDENT';
  if (composite >= 65) return 'BLAZING';
  if (composite >= 40) return 'FLOWING';
  if (composite >= 15) return 'WARMING';
  return 'DORMANT';
}


export function getLevelColor(level: MomentumLevel): string {
  switch (level) {
    case 'TRANSCENDENT': return '#a855f7';
    case 'BLAZING':      return '#ef4444';
    case 'FLOWING':      return '#22c55e';
    case 'WARMING':      return '#fb923c';
    case 'DORMANT':      return '#64748b';
  }
}


export function getLevelEmoji(level: MomentumLevel): string {
  switch (level) {
    case 'TRANSCENDENT': return '🌟';
    case 'BLAZING':      return '🔥';
    case 'FLOWING':      return '🌊';
    case 'WARMING':      return '☀️';
    case 'DORMANT':      return '💤';
  }
}


export function computeMomentum(historyOverride?: HistoryEntry[]): MomentumSnapshot {
  const history = historyOverride ?? readHistory();
  const now = Date.now();

  const velocity = computeVelocity(history);
  const diversity = computeDiversity(history);
  const streak = computeStreak(history);
  const depth = computeDepth(history);

  
  const streakScore = Math.min(100, Math.round((streak / 7) * 100));

  
  const composite = Math.round(
    velocity * 0.30 +
    diversity * 0.25 +
    streakScore * 0.25 +
    depth * 0.20,
  );

  const level = getLevel(composite);

  
  const todayEntries = history.filter(
    e => now - new Date(e.timestamp).getTime() < MS_PER_DAY,
  );
  const enginesUsedToday = [...new Set(todayEntries.map((e) => e.enginId))];

  
  const weekEntries = history.filter(
    e => now - new Date(e.timestamp).getTime() < 7 * MS_PER_DAY,
  );

  const dimensions: MomentumDimension[] = [
    {
      name: 'Velocity',
      score: velocity,
      desc: 'Actions per hour (last 24h)',
      accent: '#38bdf8',
      emoji: '⚡',
    },
    {
      name: 'Diversity',
      score: diversity,
      desc: 'Unique engines used (last 7d)',
      accent: '#a855f7',
      emoji: '🎭',
    },
    {
      name: 'Streak',
      score: streakScore,
      desc: `${streak} consecutive day${streak !== 1 ? 's' : ''}`,
      accent: '#fb923c',
      emoji: '🔥',
    },
    {
      name: 'Depth',
      score: depth,
      desc: 'Meaningful vs. shallow actions (7d)',
      accent: '#22c55e',
      emoji: '🎯',
    },
  ];

  return {
    composite,
    dimensions,
    streakDays: streak,
    enginesUsedToday,
    actionsToday: todayEntries.length,
    actionsWeek: weekEntries.length,
    level,
    computedAt: new Date().toISOString(),
  };
}
