export type WildfallHeroId = 'arden' | 'lyra' | 'sorrel' | 'nyx';
export type WildfallZoneId = 'highlook-hamlet' | 'sunfall-trail' | 'mistwood-rim' | 'shattered-bridge' | 'cataract-ruins';
export type WildfallPhase = 'expedition' | 'mirror' | 'complete' | 'fallen';
export type WildfallAction = 'forward' | 'back' | 'turn-left' | 'turn-right' | 'look-up' | 'look-down' | 'strafe-left' | 'strafe-right' | 'ability' | 'swap' | 'strike' | 'guard' | 'dash';

export interface WildfallVec2 { x: number; y: number }
export interface WildfallHero {
  readonly id: WildfallHeroId;
  readonly name: string;
  readonly role: string;
  readonly sigil: string;
  readonly maxHp: number;
  readonly speed: number;
  readonly turnRate: number;
  readonly ability: string;
  readonly abilityCost: number;
  readonly weaponName: string;
  readonly weaponKind: 'sword' | 'bow' | 'staff' | 'daggers';
  readonly palette: readonly [number, number, number];
}
export interface WildfallZone {
  readonly id: WildfallZoneId;
  readonly name: string;
  readonly subtitle: string;
  readonly fog: readonly [number, number, number];
  readonly wall: readonly [number, number, number];
  readonly floor: readonly [number, number, number];
  readonly sky: readonly [number, number, number];
  readonly hazard: 'ash' | 'thorns' | 'mist' | 'wind' | 'waterfall';
  readonly map: readonly string[];
  readonly spawn: WildfallVec2;
  readonly gate: WildfallVec2;
}
export interface WildfallWatcher { id: string; x: number; y: number; speed: number; pressure: number; stunned: number }
export interface WildfallRelic { id: string; x: number; y: number; label: string; collected: boolean; focus: number }
export interface WildfallInputFrame {
  readonly forward: number;
  readonly strafe: number;
  readonly turn: number;
  readonly look: number;
  readonly ability: boolean;
  readonly swap: boolean;
  readonly strike?: boolean;
  readonly guard?: boolean;
  readonly dash?: boolean;
}
export interface WildfallState {
  phase: WildfallPhase;
  zoneIndex: number;
  player: { x: number; y: number; angle: number; pitch: number };
  activeHero: WildfallHeroId;
  hpByHero: Record<WildfallHeroId, number>;
  stamina: number;
  focus: number;
  score: number;
  mirrorCount: number;
  mirrorGrid: string[][];
  mirrorRevealSeconds: number;
  watchers: WildfallWatcher[];
  relics: WildfallRelic[];
  hazardPressure: number;
  elapsedSeconds: number;
  rngSeed: number;
  log: string[];
}

const GLYPHS = ['◆', '○', '△', '✕', '▽', '◐', '✦', '▫', '☉', '⌬'];
const MAX_LOG = 5;

export const WILDFALL_HEROES: Record<WildfallHeroId, WildfallHero> = {
  arden: { id: 'arden', name: 'Arden', role: 'Vanguard', sigil: '🛡', maxHp: 120, speed: 2.25, turnRate: 1.65, ability: 'Brace through one Watcher strike and knock it back.', abilityCost: 28, weaponName: 'Ridgebreaker guard-sword', weaponKind: 'sword', palette: [164, 129, 72] },
  lyra: { id: 'lyra', name: 'Lyra', role: 'Ranger', sigil: '🏹', maxHp: 86, speed: 2.85, turnRate: 2.15, ability: 'Mark the Mirror trail and slow Watchers.', abilityCost: 22, weaponName: 'Glass-string recurved bow', weaponKind: 'bow', palette: [86, 178, 162] },
  sorrel: { id: 'sorrel', name: 'Sorrel', role: 'Mystic', sigil: '✦', maxHp: 94, speed: 2.35, turnRate: 1.85, ability: 'Restore the party and clear hazard pressure.', abilityCost: 34, weaponName: 'Cataract memory staff', weaponKind: 'staff', palette: [144, 117, 196] },
  nyx: { id: 'nyx', name: 'Nyx', role: 'Blade Dancer', sigil: '◇', maxHp: 78, speed: 3.12, turnRate: 2.45, ability: 'Blink forward and disorient nearby Watchers.', abilityCost: 30, weaponName: 'Twin mirror knives', weaponKind: 'daggers', palette: [184, 91, 128] },
};

export const WILDFALL_ZONES: readonly WildfallZone[] = [
  { id: 'highlook-hamlet', name: 'Highlook Hamlet', subtitle: 'A cliff camp leaning over the first broken mirror road.', fog: [89, 110, 104], wall: [103, 120, 110], floor: [29, 41, 36], sky: [31, 44, 54], hazard: 'ash', spawn: { x: 1.5, y: 1.5 }, gate: { x: 14.4, y: 14.1 }, map: [
    '################', '#......#.......#', '#.####.#.#####.#', '#.#....#.....#.#', '#.#.########.#.#', '#.#........#.#.#', '#.######.#.#.#.#', '#......#.#.#...#', '######.#.#.###.#', '#......#.#.....#', '#.######.#####.#', '#.#..........#.#', '#.#.########.#.#', '#...#......#...#', '#.......#......#', '################'] },
  { id: 'sunfall-trail', name: 'Sunfall Trail', subtitle: 'Warm stone, leaning banners, and switchback paths under a dying orange sky.', fog: [130, 102, 72], wall: [147, 102, 62], floor: [54, 38, 26], sky: [77, 46, 33], hazard: 'wind', spawn: { x: 1.5, y: 13.5 }, gate: { x: 14.2, y: 1.6 }, map: [
    '################', '#..............#', '#.##########.#.#', '#.#........#.#.#', '#.#.######.#.#.#', '#.#.#....#.#.#.#', '#...#.##.#.#...#', '#####.##.#.###.#', '#.....#..#.....#', '#.#####.######.#', '#.#..........#.#', '#.#.########.#.#', '#.#........#...#', '#.######.#.###.#', '#........#.....#', '################'] },
  { id: 'mistwood-rim', name: 'Mistwood Rim', subtitle: 'Black trees and drifting memory fog hide the direct path.', fog: [62, 95, 100], wall: [67, 91, 88], floor: [20, 35, 34], sky: [18, 31, 38], hazard: 'mist', spawn: { x: 1.4, y: 1.4 }, gate: { x: 14.1, y: 14.2 }, map: [
    '################', '#....#.........#', '#.##.#.#######.#', '#.#..#.......#.#', '#.#.#######.#..#', '#.#.......#.#.##', '#.#######.#.#..#', '#.....#...#.#.##', '###.#.#.###.#..#', '#...#.#.....##.#', '#.###.########.#', '#.#..........#.#', '#.#.########.#.#', '#...#......#...#', '#..............#', '################'] },
  { id: 'shattered-bridge', name: 'Shattered Bridge', subtitle: 'Broken spans cross a storm river where space folds sideways.', fog: [83, 91, 117], wall: [88, 98, 128], floor: [24, 29, 43], sky: [24, 31, 57], hazard: 'thorns', spawn: { x: 1.5, y: 14.2 }, gate: { x: 14.3, y: 1.5 }, map: [
    '################', '#..............#', '#.##########.#.#', '#.#........#.#.#', '#.#.######.#.#.#', '#.#.#....#.#.#.#', '#.#.#.##.#.#.#.#', '#...#.##.#...#.#', '###.#.##.#####.#', '#...#....#.....#', '#.########.###.#', '#..........#...#', '#.##########.#.#', '#......#.....#.#', '#.####...#####.#', '################'] },
  { id: 'cataract-ruins', name: 'Cataract Ruins', subtitle: 'A temple under falling water where the Guardian seals WILDFALL shut.', fog: [75, 104, 130], wall: [70, 94, 116], floor: [18, 33, 49], sky: [18, 31, 48], hazard: 'waterfall', spawn: { x: 1.5, y: 1.5 }, gate: { x: 14.0, y: 14.0 }, map: [
    '################', '#..............#', '#.####.#######.#', '#.#....#.....#.#', '#.#.####.###.#.#', '#.#......#...#.#', '#.########.###.#', '#......#.......#', '######.#.#####.#', '#......#.....#.#', '#.##########.#.#', '#.#..........#.#', '#.#.##########.#', '#...#..........#', '#..............#', '################'] },
];

export function createWildfallRng(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

export function createWildfallState(seed = 0x2026_0609): WildfallState {
  const zone = WILDFALL_ZONES[0];
  return {
    phase: 'expedition',
    zoneIndex: 0,
    player: { x: zone.spawn.x, y: zone.spawn.y, angle: 0, pitch: 0 },
    activeHero: 'arden',
    hpByHero: { arden: 120, lyra: 86, sorrel: 94, nyx: 78 },
    stamina: 100,
    focus: 50,
    score: 0,
    mirrorCount: 0,
    mirrorGrid: makeWildfallGlyphGrid(4, createWildfallRng(seed ^ 0xabcddcba)),
    mirrorRevealSeconds: 5,
    watchers: spawnWatchers(0, createWildfallRng(seed ^ 0x33557799)),
    relics: spawnRelics(0, createWildfallRng(seed ^ 0x55331177)),
    hazardPressure: 0,
    elapsedSeconds: 0,
    rngSeed: seed >>> 0,
    log: ['MadMaxi enters WILDFALL through the first Mirror.'],
  };
}

export function currentWildfallZone(state: WildfallState): WildfallZone {
  return WILDFALL_ZONES[Math.max(0, Math.min(WILDFALL_ZONES.length - 1, state.zoneIndex))];
}

export function makeWildfallGlyphGrid(size: number, rng: () => number): string[][] {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => GLYPHS[Math.floor(rng() * GLYPHS.length)]));
}

export function switchWildfallHero(state: WildfallState): WildfallState {
  const ids: WildfallHeroId[] = ['arden', 'lyra', 'sorrel', 'nyx'];
  const current = ids.indexOf(state.activeHero);
  for (let i = 1; i <= ids.length; i += 1) {
    const next = ids[(current + i) % ids.length];
    if (state.hpByHero[next] > 0) return { ...state, activeHero: next, log: appendLog(state, `${WILDFALL_HEROES[next].name} takes point.`) };
  }
  return state;
}

export function activateWildfallHeroAbility(state: WildfallState): WildfallState {
  const hero = WILDFALL_HEROES[state.activeHero];
  if (state.focus < hero.abilityCost || state.phase !== 'expedition') return state;
  const focus = Math.max(0, state.focus - hero.abilityCost);
  if (hero.id === 'arden') {
    return { ...state, focus, watchers: state.watchers.map((w) => knockWatcher(state.player, w, 1.65)), log: appendLog(state, 'Arden braces and drives the Watchers back.') };
  }
  if (hero.id === 'lyra') {
    return { ...state, focus, mirrorRevealSeconds: Math.min(8, state.mirrorRevealSeconds + 1), watchers: state.watchers.map((w) => ({ ...w, stunned: Math.max(w.stunned, 2.0), speed: Math.max(0.35, w.speed * 0.78) })), log: appendLog(state, 'Lyra marks the Mirror path through the fog.') };
  }
  if (hero.id === 'sorrel') {
    const hpByHero = { ...state.hpByHero };
    for (const id of Object.keys(hpByHero) as WildfallHeroId[]) hpByHero[id] = Math.min(WILDFALL_HEROES[id].maxHp, hpByHero[id] + 18);
    return { ...state, focus, hpByHero, hazardPressure: Math.max(0, state.hazardPressure - 26), log: appendLog(state, 'Sorrel mends the party and quiets the hazard.') };
  }
  const blinkX = state.player.x + Math.cos(state.player.angle) * 1.15;
  const blinkY = state.player.y + Math.sin(state.player.angle) * 1.15;
  const zone = currentWildfallZone(state);
  const player = isWildfallPassable(zone, blinkX, blinkY) ? { ...state.player, x: blinkX, y: blinkY } : state.player;
  return { ...state, focus, player, watchers: state.watchers.map((w) => ({ ...w, stunned: Math.max(w.stunned, 1.4) })), log: appendLog(state, 'Nyx blinks between two mirror angles.') };
}

export function stepWildfall(state: WildfallState, input: WildfallInputFrame, dt: number): WildfallState {
  if (state.phase !== 'expedition') return state;
  const zone = currentWildfallZone(state);
  const hero = WILDFALL_HEROES[state.activeHero];
  let next = { ...state, player: { ...state.player }, hpByHero: { ...state.hpByHero }, watchers: state.watchers.map((w) => ({ ...w })), relics: state.relics.map((r) => ({ ...r })), elapsedSeconds: state.elapsedSeconds + dt };
  next.player.angle += input.turn * hero.turnRate * dt;
  next.player.pitch = clamp((next.player.pitch ?? 0) + input.look * 0.9 * dt, -0.42, 0.42);
  const moveScale = Math.max(0.48, next.stamina / 100);
  const dashBoost = input.dash && next.stamina > 18 ? 1.72 : 1;
  const speed = hero.speed * moveScale * dashBoost;
  if (input.dash && (Math.abs(input.forward) + Math.abs(input.strafe) > 0.05)) next.stamina = clamp(next.stamina - 22 * dt, 0, 100);
  if (input.guard && next.focus > 4) next.focus = clamp(next.focus - 8 * dt, 0, 100);
  const nx = next.player.x + Math.cos(next.player.angle) * input.forward * speed * dt + Math.cos(next.player.angle + Math.PI / 2) * input.strafe * speed * dt;
  const ny = next.player.y + Math.sin(next.player.angle) * input.forward * speed * dt + Math.sin(next.player.angle + Math.PI / 2) * input.strafe * speed * dt;
  if (isWildfallPassable(zone, nx, ny)) { next.player.x = nx; next.player.y = ny; }
  else if (isWildfallPassable(zone, nx, next.player.y)) next.player.x = nx;
  else if (isWildfallPassable(zone, next.player.x, ny)) next.player.y = ny;
  const moving = Math.abs(input.forward) + Math.abs(input.strafe) > 0.05;
  next.stamina = clamp(next.stamina + (moving ? -12 : 18) * dt, 0, 100);
  next.focus = clamp(next.focus + (moving ? 3 : 7) * dt, 0, 100);
  next.hazardPressure = clamp(next.hazardPressure + hazardRate(zone, next.player) * dt, 0, 100);
  if (input.strike && next.stamina > 8) {
    next.stamina = clamp(next.stamina - 18 * dt, 0, 100);
    let hit = false;
    next.watchers = next.watchers.map((watcher) => {
      const angleToWatcher = Math.atan2(watcher.y - next.player.y, watcher.x - next.player.x);
      const facing = Math.abs(Math.atan2(Math.sin(angleToWatcher - next.player.angle), Math.cos(angleToWatcher - next.player.angle)));
      if (!hit && facing < 0.52 && distance(next.player, watcher) < 1.55) {
        hit = true;
        return knockWatcher(next.player, { ...watcher, stunned: Math.max(watcher.stunned, 1.1) }, hero.weaponKind === 'bow' ? 2.2 : 1.35);
      }
      return watcher;
    });
    if (hit) {
      next.score += 20;
      next.log = appendLog(next, `${hero.name} lands a ${hero.weaponName} counter.`);
    }
  }
  if (next.hazardPressure >= 100) {
    next.hazardPressure = 55;
    next.hpByHero[next.activeHero] -= 12;
    next.log = appendLog(next, `${WILDFALL_HEROES[next.activeHero].name} is cut by ${zone.hazard}.`);
  }
  for (const watcher of next.watchers) {
    if (watcher.stunned > 0) { watcher.stunned = Math.max(0, watcher.stunned - dt); continue; }
    const dx = next.player.x - watcher.x;
    const dy = next.player.y - watcher.y;
    const d = Math.max(0.001, Math.hypot(dx, dy));
    const wx = watcher.x + (dx / d) * watcher.speed * dt;
    const wy = watcher.y + (dy / d) * watcher.speed * dt;
    if (isWildfallPassable(zone, wx, wy)) { watcher.x = wx; watcher.y = wy; }
    if (d < 0.58) {
      const damage = input.guard && next.focus > 4 ? 4 : state.activeHero === 'arden' && next.focus > 10 ? 5 : 15;
      next.hpByHero[next.activeHero] -= damage;
      watcher.stunned = 1.0;
      next.log = appendLog(next, `A Watcher catches ${WILDFALL_HEROES[next.activeHero].name}.`);
    }
  }
  for (const relic of next.relics) {
    if (!relic.collected && distance(next.player, relic) < 0.55) {
      relic.collected = true;
      next.focus = clamp(next.focus + relic.focus, 0, 100);
      next.score += 75;
      next.log = appendLog(next, `Recovered relic: ${relic.label}.`);
    }
  }
  if (distance(next.player, zone.gate) < 0.85) {
    const size = Math.min(6, 4 + next.zoneIndex);
    next.phase = 'mirror';
    next.mirrorGrid = makeWildfallGlyphGrid(size, createWildfallRng(next.rngSeed ^ (next.zoneIndex * 977 + next.score)));
    next.mirrorRevealSeconds = Math.max(4, 7 - next.zoneIndex);
    next.log = appendLog(next, `The ${zone.name} Mirror opens.`);
  }
  if (next.hpByHero[next.activeHero] <= 0) {
    const stillUp = (Object.keys(next.hpByHero) as WildfallHeroId[]).find((id) => next.hpByHero[id] > 0);
    if (stillUp) next = { ...switchWildfallHero(next), log: appendLog(next, `${hero.name} falls. The party shifts formation.`) };
    else next.phase = 'fallen';
  }
  return next;
}

export function resolveWildfallMirror(state: WildfallState, correctRatio: number): WildfallState {
  const bonus = Math.round(400 * clamp(correctRatio, 0, 1));
  const cleared = correctRatio >= 0.72;
  if (!cleared) {
    return { ...state, phase: 'expedition', score: state.score + Math.round(bonus * 0.35), watchers: [...state.watchers, { id: `watcher-${state.elapsedSeconds}`, x: 14.4, y: 14.4, speed: 0.88 + state.zoneIndex * 0.09, pressure: 1, stunned: 0 }], log: appendLog(state, 'The Mirror rejects the pattern. A Watcher steps through.') };
  }
  const nextZoneIndex = state.zoneIndex + 1;
  if (nextZoneIndex >= WILDFALL_ZONES.length) {
    return { ...state, phase: 'complete', score: state.score + bonus + 1000, mirrorCount: state.mirrorCount + 1, log: appendLog(state, 'WILDFALL remembers you. The final Mirror unlocks.') };
  }
  const zone = WILDFALL_ZONES[nextZoneIndex];
  const rng = createWildfallRng(state.rngSeed ^ (nextZoneIndex * 0x9e3779b9));
  return { ...state, phase: 'expedition', zoneIndex: nextZoneIndex, player: { x: zone.spawn.x, y: zone.spawn.y, angle: 0, pitch: 0 }, score: state.score + bonus + 250, mirrorCount: state.mirrorCount + 1, stamina: 100, focus: clamp(state.focus + 18, 0, 100), hazardPressure: 0, watchers: spawnWatchers(nextZoneIndex, rng), relics: spawnRelics(nextZoneIndex, rng), log: appendLog(state, `${zone.name} forms around the party.`) };
}

export function isWildfallPassable(zone: WildfallZone, x: number, y: number): boolean {
  const tile = zone.map[Math.floor(y)]?.[Math.floor(x)];
  return tile === '.';
}

export function castWildfallRay(zone: WildfallZone, player: { x: number; y: number; angle: number }, rayAngle: number, maxDistance = 9): { distance: number; hit: boolean; tileX: number; tileY: number } {
  let distanceOut = 0;
  let hit = false;
  let tileX = Math.floor(player.x);
  let tileY = Math.floor(player.y);
  const dx = Math.cos(rayAngle);
  const dy = Math.sin(rayAngle);
  while (distanceOut < maxDistance && !hit) {
    distanceOut += 0.035;
    tileX = Math.floor(player.x + dx * distanceOut);
    tileY = Math.floor(player.y + dy * distanceOut);
    hit = !isWildfallPassable(zone, tileX, tileY);
  }
  return { distance: distanceOut, hit, tileX, tileY };
}

export function wildfallBillboards(state: WildfallState): Array<{ id: string; x: number; y: number; kind: 'watcher' | 'relic' | 'gate'; label?: string }> {
  const zone = currentWildfallZone(state);
  return [
    ...state.watchers.map((w) => ({ id: w.id, x: w.x, y: w.y, kind: 'watcher' as const })),
    ...state.relics.filter((r) => !r.collected).map((r) => ({ id: r.id, x: r.x, y: r.y, kind: 'relic' as const, label: r.label })),
    { id: `${zone.id}:gate`, x: zone.gate.x, y: zone.gate.y, kind: 'gate' as const, label: 'Mirror Gate' },
  ];
}

function spawnWatchers(zoneIndex: number, rng: () => number): WildfallWatcher[] {
  const count = Math.min(4, 1 + Math.floor(zoneIndex / 2));
  return Array.from({ length: count }, (_, i) => ({ id: `watcher-${zoneIndex}-${i}`, x: 13.5 - rng() * 3, y: 13.5 - rng() * 3, speed: 0.78 + zoneIndex * 0.08 + rng() * 0.18, pressure: 1, stunned: i === 0 ? 0 : rng() }));
}

function spawnRelics(zoneIndex: number, rng: () => number): WildfallRelic[] {
  const labels = ['Glass compass', 'Weathered charm', 'Mirror nail', 'Blue-thread map', 'River bell'];
  return Array.from({ length: 3 }, (_, i) => ({ id: `relic-${zoneIndex}-${i}`, x: 2.5 + rng() * 10.5, y: 2.5 + rng() * 10.5, label: labels[(zoneIndex + i) % labels.length], collected: false, focus: 12 + i * 4 }));
}

function knockWatcher(player: { x: number; y: number }, watcher: WildfallWatcher, force: number): WildfallWatcher {
  const dx = watcher.x - player.x;
  const dy = watcher.y - player.y;
  const d = Math.max(0.001, Math.hypot(dx, dy));
  return { ...watcher, x: watcher.x + (dx / d) * force, y: watcher.y + (dy / d) * force, stunned: Math.max(watcher.stunned, 1.2) };
}

function hazardRate(zone: WildfallZone, player: WildfallVec2): number {
  const centerPressure = Math.max(0, 1 - Math.hypot(player.x - 8, player.y - 8) / 9);
  const base = zone.hazard === 'waterfall' ? 7 : zone.hazard === 'mist' ? 5 : zone.hazard === 'wind' ? 4 : 3;
  return base + centerPressure * 5;
}

function distance(a: WildfallVec2, b: WildfallVec2): number { return Math.hypot(a.x - b.x, a.y - b.y); }
function clamp(value: number, min: number, max: number): number { return Math.max(min, Math.min(max, value)); }
function appendLog(state: Pick<WildfallState, 'log'>, message: string): string[] { return [message, ...state.log].slice(0, MAX_LOG); }

export function wildfallHeroWeapon(heroId: WildfallHeroId): Pick<WildfallHero, 'weaponName' | 'weaponKind' | 'palette'> {
  const hero = WILDFALL_HEROES[heroId];
  return { weaponName: hero.weaponName, weaponKind: hero.weaponKind, palette: hero.palette };
}

