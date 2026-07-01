

export const DIVIDER_H = 2;

export const SPLIT_SNAP_POINTS = [0.1, 0.5, 0.9, 1.0] as const;

export const DEFAULT_SPLIT_RATIO = 1.0;

export const SPLIT_RATIO_MIN = 0.05;
export const SPLIT_RATIO_MAX = 1.0;

export const SPLIT_FLING_VELOCITY_PX_PER_MS = 0.55;


export function snapToSplitPoint(ratio: number): number {
  let best: number = SPLIT_SNAP_POINTS[0];
  let bestDist = Math.abs(ratio - best);
  for (const pt of SPLIT_SNAP_POINTS) {
    const d = Math.abs(ratio - pt);
    if (d < bestDist) { bestDist = d; best = pt; }
  }
  return best;
}


export function snapSplitRatioOnRelease(ratio: number, velocityPxPerMs: number): number {
  const nearest = snapToSplitPoint(ratio);
  const idx = (SPLIT_SNAP_POINTS as readonly number[]).indexOf(nearest);
  if (velocityPxPerMs >= SPLIT_FLING_VELOCITY_PX_PER_MS && idx > 0) {
    
    return SPLIT_SNAP_POINTS[idx - 1];
  }
  if (velocityPxPerMs <= -SPLIT_FLING_VELOCITY_PX_PER_MS && idx < SPLIT_SNAP_POINTS.length - 1) {
    
    return SPLIT_SNAP_POINTS[idx + 1];
  }
  return nearest;
}


export const GOLD_SECOND_TAP_WINDOW_MS = 280;
export const GOLD_TAP_SLOP_PX = 14;
export const BAR_SNAP_TO_TOP_THRESHOLD_PX = 8;


export const BAR_SNAP_TO_TOP_HEIGHT_RATIO = 0.96;
export const BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS = -0.9;
export const BAR_FLING_TO_TOP_MIN_DRAG_PX = 44;
export const BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS = 0.9;

export const BAR_FLING_LINE_RATIO = 0.4;
export const MIN_POINTER_SAMPLE_DELTA_MS = 1;


export function resolveGoldTapAction(
  lastTapAt: number = 0,
  now: number = 0,
): { action: 'wait'; nextLastTapAt: number } | { action: 'menu'; nextLastTapAt: 0 } {
  if (lastTapAt > 0 && now - lastTapAt <= GOLD_SECOND_TAP_WINDOW_MS) {
    return { action: 'menu', nextLastTapAt: 0 };
  }
  return { action: 'wait', nextLastTapAt: now };
}


export function shouldTreatGoldReleaseAsTap(dy: number): boolean {
  return Math.abs(dy) <= GOLD_TAP_SLOP_PX;
}


export function calculatePointerVelocity(previousY: number, nextY: number, previousAt: number, nextAt: number): number {
  return (nextY - previousY) / Math.max(nextAt - previousAt, MIN_POINTER_SAMPLE_DELTA_MS);
}


export function shouldCollapseGoldSwipe({
  dy,
  isTop,
}: {
  dy: number;
  isTop: boolean;
}): boolean {
  return isTop && dy > GOLD_TAP_SLOP_PX;
}


export function shouldSnapBottomDragToTop({
  screenH,
  dragH,
  barH,
  velocityPxPerMs,
}: {
  screenH: number;
  dragH: number;
  barH: number;
  velocityPxPerMs: number;
}): boolean {
  const barTopFromScreenTop = screenH - dragH;
  return (
    barTopFromScreenTop <= BAR_SNAP_TO_TOP_THRESHOLD_PX ||
    dragH >= screenH * BAR_SNAP_TO_TOP_HEIGHT_RATIO ||
    (velocityPxPerMs <= BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS &&
      dragH - barH >= BAR_FLING_TO_TOP_MIN_DRAG_PX)
  );
}


export function shouldCollapseTopExpandedDrag({
  dy,
  slideDown,
  snapDownPx,
  velocityPxPerMs,
}: {
  dy: number;
  slideDown: number;
  snapDownPx: number;
  velocityPxPerMs: number;
}): boolean {
  return (
    dy > snapDownPx ||
    slideDown > snapDownPx ||
    velocityPxPerMs >= BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS
  );
}


export type BarReleaseAction = 'snap-top' | 'snap-bottom' | 'park';

export function decideBarRelease({
  screenH,
  dragH,
  barH: _barH,
  velocityPxPerMs,
}: {
  screenH: number;
  dragH: number;
  barH: number;
  velocityPxPerMs: number;
}): BarReleaseAction {
  
  const barTopFromScreenTop = screenH - dragH;
  if (
    barTopFromScreenTop <= BAR_SNAP_TO_TOP_THRESHOLD_PX ||
    dragH >= screenH * BAR_SNAP_TO_TOP_HEIGHT_RATIO
  ) {
    return 'snap-top';
  }

  const lineH = screenH * BAR_FLING_LINE_RATIO;

  
  if (
    velocityPxPerMs <= BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS &&
    dragH >= lineH
  ) {
    return 'snap-top';
  }

  
  if (
    velocityPxPerMs >= BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS &&
    dragH <= lineH
  ) {
    return 'snap-bottom';
  }

  
  return 'park';
}


export const ORB_SIZE = 48;

export const ORB_TAP_SLOP = 8;


export function clampOrbOffset(offset: number, viewportExtent: number): number {
  return Math.max(0, Math.min(viewportExtent - ORB_SIZE, offset));
}


export function computeOrbDragPosition(
  startRight: number,
  startBottom: number,
  dx: number,
  dy: number,
  screenW: number,
  screenH: number,
): { x: number; y: number } {
  return {
    x: clampOrbOffset(startRight - dx, screenW),
    y: clampOrbOffset(startBottom - dy, screenH),
  };
}


export type MoodPeriod = 'dawn' | 'morning' | 'afternoon' | 'dusk' | 'night';


export function getMoodPeriod(hour: number): MoodPeriod {
  const h = ((hour % 24) + 24) % 24;
  if (h >= 5 && h <= 7) return 'dawn';
  if (h >= 8 && h <= 11) return 'morning';
  if (h >= 12 && h <= 16) return 'afternoon';
  if (h >= 17 && h <= 19) return 'dusk';
  return 'night';
}


export const MOOD_AURA_GRADIENTS: Record<MoodPeriod, string> = {
  dawn:      'linear-gradient(135deg, rgba(255,183,77,0.12) 0%, rgba(255,138,101,0.08) 50%, rgba(255,209,128,0.10) 100%)',
  morning:   'linear-gradient(135deg, rgba(255,215,64,0.10) 0%, rgba(255,238,88,0.06) 50%, rgba(255,245,157,0.08) 100%)',
  afternoon: 'linear-gradient(135deg, rgba(79,195,247,0.10) 0%, rgba(129,212,250,0.06) 50%, rgba(179,229,252,0.08) 100%)',
  dusk:      'linear-gradient(135deg, rgba(206,147,216,0.12) 0%, rgba(255,138,101,0.08) 50%, rgba(186,104,200,0.10) 100%)',
  night:     'linear-gradient(135deg, rgba(63,81,181,0.12) 0%, rgba(48,63,159,0.08) 50%, rgba(92,107,192,0.10) 100%)',
};


export const MOOD_EDGE_COLORS: Record<MoodPeriod, string> = {
  dawn:      'rgba(255,183,77,0.55)',
  morning:   'rgba(255,215,64,0.55)',
  afternoon: 'rgba(79,195,247,0.55)',
  dusk:      'rgba(186,104,200,0.55)',
  night:     'rgba(92,107,192,0.55)',
};


export type SurfaceAccent = 'feed' | 'messages' | 'code' | 'dreams' | 'music' | 'create' | 'discover' | 'general';

export const SURFACE_ACCENT_COLORS: Record<SurfaceAccent, string> = {
  feed:     'rgba(255,193,7,0.07)',
  messages: 'rgba(42,138,184,0.07)',
  code:     'rgba(0,200,83,0.07)',
  dreams:   'rgba(200,152,26,0.08)',
  music:    'rgba(233,30,99,0.07)',
  create:   'rgba(156,39,176,0.06)',
  discover: 'rgba(3,169,244,0.07)',
  general:  'rgba(158,158,158,0.04)',
};

export interface SlashCommand {
  id: string;
  label: string;
  description: string;
  icon: string;  
  category: 'navigate' | 'create' | 'utility';
  href?: string;
  action?: string;  
}


export const SLASH_COMMANDS: SlashCommand[] = [
  { id: 'home',      label: 'Home',           description: 'Go to HomeDream feed',         icon: 'home',      category: 'navigate', href: '/dreamdmbar' },
  { id: 'games',     label: 'Games',          description: 'Open the Games Hub',           icon: 'gamepad-2', category: 'navigate', href: '/daydream/games' },
  { id: 'music',     label: 'Music Studio',   description: 'Open StarMaker music studio',  icon: 'music',     category: 'navigate', href: '/daydream/music' },
  { id: 'code',      label: 'Code Lab',       description: 'Open Code Engin IDE',          icon: 'code-2',    category: 'navigate', href: '/daydream/code' },
  { id: 'create',    label: 'Create',         description: 'Open content creator',         icon: 'sparkles',  category: 'create',   href: '/daydream/create' },
  { id: 'messages',  label: 'Messages',       description: 'Open DreamDM Messages',        icon: 'send',      category: 'navigate', href: '/messages' },
  { id: 'discover',  label: 'Discover',       description: 'Explore & discover content',   icon: 'compass',   category: 'navigate', href: '/discover' },
  { id: 'settings',  label: 'Settings',       description: 'Open platform settings',       icon: 'settings',  category: 'utility',  href: '/settings' },
  { id: 'profile',   label: 'My Profile',     description: 'View your DreamProfile',       icon: 'user',      category: 'navigate', href: '/edit-profiledream' },
  { id: 'search',    label: 'Search',         description: 'Search everything',            icon: 'search',    category: 'utility',  action: 'search-mode' },
  { id: 'dreams',    label: 'Ask Dr. Eams',   description: 'Talk to the AI assistant',     icon: 'bot',       category: 'utility',  action: 'dreams-mode' },
  { id: 'shop',      label: 'Shop',           description: 'Browse the DREAMengin shop',   icon: 'shopping-bag', category: 'navigate', href: '/shop' },
];


export function filterSlashCommands(query: string): SlashCommand[] {
  const q = query.toLowerCase().replace(/^\
  if (!q) return SLASH_COMMANDS;
  return SLASH_COMMANDS.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(q) ||
      cmd.description.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q),
  );
}


export function computeTypingRhythm(
  recentKeystrokeTimestamps: number[],
  now: number,
  windowMs: number = 2000,
): number {
  if (recentKeystrokeTimestamps.length < 2) return 0;
  
  const recent = recentKeystrokeTimestamps.filter((t) => now - t < windowMs);
  if (recent.length < 2) return 0;
  
  let totalInterval = 0;
  for (let i = 1; i < recent.length; i++) {
    totalInterval += recent[i] - recent[i - 1];
  }
  const avgInterval = totalInterval / (recent.length - 1);
  
  const intensity = Math.max(0, Math.min(1, 1 - (avgInterval - 50) / 450));
  return Math.round(intensity * 100) / 100;
}


export function rhythmToHandleScale(intensity: number): number {
  return 1 + intensity * 1.5;
}

export const STREAK_STORAGE_KEY = 'de-dream-streak';

export interface StreakData {
  count: number;
  lastActiveDate: string;  
}


export function todayDateString(now: Date = new Date()): string {
  return now.toISOString().slice(0, 10);
}


export function resolveStreak(stored: StreakData | null, now: Date = new Date()): StreakData {
  const today = todayDateString(now);
  if (!stored) {
    return { count: 1, lastActiveDate: today };
  }
  if (stored.lastActiveDate === today) {
    return stored;
  }
  
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = todayDateString(yesterday);
  if (stored.lastActiveDate === yesterdayStr) {
    return { count: stored.count + 1, lastActiveDate: today };
  }
  
  return { count: 1, lastActiveDate: today };
}


export type StreakTier = 'none' | 'ember' | 'fire' | 'inferno' | 'legend';

export function getStreakTier(count: number): StreakTier {
  if (count <= 0) return 'none';
  if (count <= 2) return 'ember';
  if (count <= 6) return 'fire';
  if (count <= 13) return 'inferno';
  return 'legend';
}


export interface QuickReaction {
  emoji: string;
  label: string;
  animClass: string;
}

export const QUICK_REACTIONS: QuickReaction[] = [
  { emoji: '❤️', label: 'Love',     animClass: 'sicc-react-pop' },
  { emoji: '🔥', label: 'Fire',     animClass: 'sicc-react-pop' },
  { emoji: '💯', label: 'Perfect',  animClass: 'sicc-react-pop' },
  { emoji: '😂', label: 'Haha',     animClass: 'sicc-react-pop' },
  { emoji: '🤯', label: 'Mind blown', animClass: 'sicc-react-pop' },
  { emoji: '✨', label: 'Sparkles', animClass: 'sicc-react-pop' },
];


export const GOLD_LONG_PRESS_MS = 800;


export const PARTICLE_COUNT = 24;


export interface Particle {
  id: number;
  x: number;   
  y: number;   
  vx: number;  
  vy: number;  
  size: number; 
  color: string;
  life: number; 
}

export function generateParticles(count: number): Particle[] {
  const colors = [
    '#f7e07a', '#e8c040', '#d4a843', '#a16207',  
    '#7dd3fc', '#38bdf8', '#2a8ab8',              
    '#fbbf24', '#f59e0b',                         
    '#fffde0',                                     
  ];
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const angle = (Math.random() * Math.PI * 0.8) + Math.PI * 0.1; 
    const speed = 2 + Math.random() * 4;
    particles.push({
      id: i,
      x: 0,
      y: 0,
      vx: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1),
      vy: -Math.sin(angle) * speed - 1, 
      size: 3 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1,
    });
  }
  return particles;
}


export const DRAG_TAP_THRESHOLD_PX = 5;


export const DOUBLE_TAP_WINDOW_MS = 300;


export type LightPosition = 'bottom' | 'middle' | 'top';


export const LIGHT_POSITION_CYCLE: LightPosition[] = ['bottom', 'middle', 'top'];


export function cycleLightPosition(
  current: LightPosition,
  direction: 'forward' | 'backward' = 'forward',
): LightPosition {
  
  
  
  
  const fwd: LightPosition[] = ['bottom', 'middle', 'top', 'middle'];
  if (direction === 'backward') {
    const bwd: LightPosition[] = ['middle', 'top', 'middle', 'bottom'];
    const idx = bwd.indexOf(current);
    return idx >= 0 ? bwd[(idx + 1) % bwd.length] : 'bottom';
  }
  const idx = fwd.indexOf(current);
  return idx >= 0 ? fwd[(idx + 1) % fwd.length] : 'middle';
}
