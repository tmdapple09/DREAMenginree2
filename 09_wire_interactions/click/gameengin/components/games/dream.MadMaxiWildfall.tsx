'use client';

import { useGameAutoStart, useGamePhase, useSubmitScore } from '@/engins/gameengin/games/hooks';
import { useGameEngineAPI } from '@/engins/gameengin/cartridges/reactCartridge';
import {
  WILDFALL_HEROES,
  WILDFALL_ZONES,
  activateWildfallHeroAbility,
  castWildfallRay,
  createWildfallState,
  currentWildfallZone,
  resolveWildfallMirror,
  stepWildfall,
  switchWildfallHero,
  wildfallBillboards,
  type WildfallHeroId,
  type WildfallInputFrame,
  type WildfallState,
} from '@/engins/gameengin/games/madmaxi-wildfall-world';
import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

const VIEW_W = 720;
const VIEW_H = 405;
const FOV = Math.PI / 3;
const MAX_RAY = 9;
const GLYPHS = ['◆', '○', '△', '✕', '▽', '◐', '✦', '▫', '☉', '⌬'];

type Phase = 'menu' | 'expedition' | 'memorize' | 'recall' | 'victory' | 'defeat';
type HudState = { zone: string; hero: WildfallHeroId; hp: number; stamina: number; focus: number; score: number; mirror: number; hazard: number; weapon: string };

export default function MadMaxiWildfall() {
  const api = useGameEngineAPI();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, phaseRef, setPhase] = useGamePhase<Phase>('menu');
  const stateRef = useRef<WildfallState>(createWildfallState());
  const keysRef = useRef(new Set<string>());
  const abilityWasDownRef = useRef(false);
  const swapWasDownRef = useRef(false);
  const mirrorTimerRef = useRef(0);
  const submitScore = useSubmitScore('avenue-of-mirrors');
  const [guess, setGuess] = useState<string[][]>([]);
  const [countdown, setCountdown] = useState(0);
  const [hud, setHud] = useState<HudState>(() => toHud(stateRef.current));

  const syncHud = useCallback(() => setHud(toHud(stateRef.current)), []);

  const start = useCallback(() => {
    stateRef.current = createWildfallState(0x20260609);
    keysRef.current.clear();
    abilityWasDownRef.current = false;
    swapWasDownRef.current = false;
    mirrorTimerRef.current = 0;
    setGuess([]);
    setCountdown(0);
    setHud(toHud(stateRef.current));
    setPhase('expedition');
  }, [setPhase]);

  useGameAutoStart(phase === 'menu' ? start : null);

  useEffect(() => {
    if (phase === 'victory' || phase === 'defeat') submitScore(stateRef.current.score);
  }, [phase, submitScore]);

  useEffect(() => {
    if (!api) return;
    const press = (key: string) => keysRef.current.add(key);
    const release = (key: string) => keysRef.current.delete(key);
    const fromAction = (action?: string): string | null => {
      if (!action) return null;
      if (action === 'move-up' || action === 'forward') return 'w';
      if (action === 'move-down' || action === 'back') return 's';
      if (action === 'move-left' || action === 'strafe-left') return 'a';
      if (action === 'move-right' || action === 'strafe-right') return 'd';
      if (action === 'turn-left' || action === 'look-left' || action === 'rotate-left') return 'ArrowLeft';
      if (action === 'turn-right' || action === 'look-right' || action === 'rotate-right') return 'ArrowRight';
      if (action === 'look-up' || action === 'camera-up') return 'PageUp';
      if (action === 'look-down' || action === 'camera-down') return 'PageDown';
      if (action === 'ability' || action === 'primary' || action === 'confirm') return ' ';
      if (action === 'swap' || action === 'secondary') return 'Shift';
      if (action === 'strike' || action === 'shoot') return 'Enter';
      if (action === 'guard' || action === 'l2') return 'q';
      if (action === 'dash' || action === 'r1') return 'Control';
      return null;
    };

    const preventGameKey = (key: string) => key.startsWith('Arrow') || key === ' ' || key === 'Shift' || key === 'PageUp' || key === 'PageDown' || key === 'Control';
    const offDown = api.input.on('keydown', (event) => { press(event.key); if (preventGameKey(event.key)) event.preventDefault(); });
    const offUp = api.input.on('keyup', (event) => release(event.key));
    const offRemote = api.input.on('remote', (event) => {
      const key = fromAction(event.action);
      if (!key) return;
      if (event.active) press(key);
      else release(key);
    });

    return () => { offDown(); offUp(); offRemote(); };
  }, [api]);

  const render = useCallback((ctx: CanvasRenderingContext2D, state: WildfallState) => {
    const zone = currentWildfallZone(state);
    const pitchOffset = Math.round((state.player.pitch ?? 0) * VIEW_H * 0.22);
    const horizonY = VIEW_H / 2 + pitchOffset;
    drawSkyAndFloor(ctx, state, horizonY);

    for (let x = 0; x < VIEW_W; x += 2) {
      const rayAngle = state.player.angle - FOV / 2 + (x / VIEW_W) * FOV;
      const ray = castWildfallRay(zone, state.player, rayAngle, MAX_RAY);
      const corrected = Math.max(0.08, ray.distance * Math.cos(rayAngle - state.player.angle));
      const wallHeight = Math.min(VIEW_H * 1.4, VIEW_H / corrected);
      const fog = Math.max(0, 1 - ray.distance / MAX_RAY);
      const roughness = ((ray.tileX * 13 + ray.tileY * 7 + zone.id.length) % 11) / 11;
      const wall = shade(zone.wall, fog * (0.72 + roughness * 0.26));
      const top = horizonY - wallHeight / 2;
      const textureStripe = ((ray.tileX + ray.tileY + Math.floor(x / 8)) % 3) === 0 ? 16 : 0;
      ctx.fillStyle = `rgb(${Math.min(255, wall[0] + textureStripe)},${Math.min(255, wall[1] + textureStripe)},${Math.min(255, wall[2] + textureStripe)})`;
      ctx.fillRect(x, top, 2, wallHeight);

      const seam = shade(zone.fog, 0.08 + fog * 0.18);
      ctx.fillStyle = `rgba(${seam[0]},${seam[1]},${seam[2]},${0.06 + fog * 0.06})`;
      ctx.fillRect(x, horizonY, 2, VIEW_H - horizonY);
    }

    drawDistantShapes(ctx, state, horizonY);
    for (const billboard of wildfallBillboards(state)) drawBillboard(ctx, state, billboard, horizonY);
    drawAtmosphere(ctx, state);
    drawWeaponOverlay(ctx, state);
  }, []);

  useEffect(() => {
    if (!api) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.max(1, Math.min(2, globalThis.devicePixelRatio || 1));
    canvas.width = Math.floor(VIEW_W * dpr);
    canvas.height = Math.floor(VIEW_H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    return api.loop.onRender((dt) => {
      const safeDt = Math.min(0.05, dt);
      if (phaseRef.current === 'expedition') {
        const frame = inputFrame(keysRef.current);
        let next = stateRef.current;
        if (frame.swap && !swapWasDownRef.current) next = switchWildfallHero(next);
        if (frame.ability && !abilityWasDownRef.current) next = activateWildfallHeroAbility(next);
        abilityWasDownRef.current = frame.ability;
        swapWasDownRef.current = frame.swap;
        next = stepWildfall(next, frame, safeDt);
        if (next.phase === 'mirror') {
          const seconds = Math.max(3, Math.ceil(next.mirrorRevealSeconds));
          mirrorTimerRef.current = seconds;
          setCountdown(seconds);
          setGuess(next.mirrorGrid.map((row) => row.map(() => '')));
          stateRef.current = next;
          syncHud();
          setPhase('memorize');
        } else if (next.phase === 'fallen') {
          stateRef.current = next;
          syncHud();
          setPhase('defeat');
        } else {
          stateRef.current = next;
        }
      }

      render(ctx, stateRef.current);
      if (Math.floor(stateRef.current.elapsedSeconds * 4) % 2 === 0) syncHud();
    });
  }, [api, phaseRef, render, setPhase, syncHud]);

  useEffect(() => {
    if (phase !== 'memorize') return;
    const timer = setInterval(() => {
      mirrorTimerRef.current -= 1;
      setCountdown(Math.max(0, mirrorTimerRef.current));
      if (mirrorTimerRef.current <= 0) {
        clearInterval(timer);
        setPhase('recall');
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, setPhase]);

  const submitMirror = useCallback(() => {
    const grid = stateRef.current.mirrorGrid;
    let correct = 0;
    let total = 0;
    for (let r = 0; r < grid.length; r += 1) for (let c = 0; c < grid[r].length; c += 1) {
      total += 1;
      if (guess[r]?.[c] === grid[r][c]) correct += 1;
    }
    const next = resolveWildfallMirror(stateRef.current, total > 0 ? correct / total : 0);
    stateRef.current = next;
    syncHud();
    if (next.phase === 'complete') setPhase('victory');
    else setPhase('expedition');
  }, [guess, setPhase, syncHud]);

  const activeHero = WILDFALL_HEROES[hud.hero];

  return (
    <div style={rootStyle}>
      <style>{WILDFALL_RESPONSIVE_CSS}</style>
      <div className="madmaxi-wildfall-stage" style={stageStyle}>
        <canvas ref={canvasRef} width={VIEW_W} height={VIEW_H} style={canvasStyle} />
        {phase === 'menu' && <Overlay><h1 style={titleStyle}>MadMaxi: WILDFALL</h1><p style={copyStyle}>Avenue of Mirrors is now the first expedition: four armed heroes, five hostile zones, relics, hazards, Watchers, and Mirror gates.</p><button onClick={start} style={btn}>Enter WILDFALL</button></Overlay>}
        {phase === 'memorize' && <Overlay><div style={modeStyle}>MIRROR GATE · MEMORIZE</div><GlyphGrid grid={stateRef.current.mirrorGrid} /><div style={countStyle}>{countdown}s</div></Overlay>}
        {phase === 'recall' && <Overlay><div style={modeStyle}>RECALL THE MIRROR</div><div style={{ display: 'grid', gridTemplateColumns: `repeat(${guess.length || 4}, 42px)`, gap: 6 }}>{guess.flatMap((row, r) => row.map((value, c) => <select key={`${r}-${c}`} value={value} onChange={(event) => { const next = guess.map((g) => g.slice()); next[r][c] = event.target.value; setGuess(next); }} style={selectStyle}><option value="" />{GLYPHS.map((glyph) => <option key={glyph} value={glyph}>{glyph}</option>)}</select>))}</div><button onClick={submitMirror} style={btn}>Lock Pattern</button></Overlay>}
        {phase === 'victory' && <Overlay><h1 style={{ color: '#7fb6b1' }}>WILDFALL opens.</h1><p>Score: {stateRef.current.score}</p><button onClick={start} style={btn}>Run Again</button></Overlay>}
        {phase === 'defeat' && <Overlay><h1 style={{ color: '#ff5577' }}>The Watchers close the avenue.</h1><p>Score: {stateRef.current.score}</p><button onClick={start} style={btn}>Try Again</button></Overlay>}
      </div>
      <div style={partyStyle}>{(Object.keys(WILDFALL_HEROES) as WildfallHeroId[]).map((id) => <div key={id} style={{ ...heroCardStyle, borderColor: id === hud.hero ? '#7fb6b1' : 'rgba(127,182,177,0.18)' }}><strong>{WILDFALL_HEROES[id].sigil} {WILDFALL_HEROES[id].name}</strong><span>{WILDFALL_HEROES[id].weaponName}</span><span>{stateRef.current.hpByHero[id]} HP</span></div>)}</div>
      <div style={hudStyle}><strong>{hud.zone}</strong> · {activeHero.name}/{activeHero.role} · {hud.weapon} · HP {hud.hp} · STA {Math.round(hud.stamina)} · FOCUS {Math.round(hud.focus)} · Hazard {Math.round(hud.hazard)} · Mirror {hud.mirror}/{WILDFALL_ZONES.length} · Score {hud.score}</div>
      <div style={logStyle}>{stateRef.current.log.map((line) => <span key={line}>{line}</span>)}</div>
    </div>
  );
}

function inputFrame(keys: Set<string>): WildfallInputFrame {
  return {
    forward: keys.has('ArrowUp') || keys.has('w') || keys.has('W') ? 1 : keys.has('ArrowDown') || keys.has('s') || keys.has('S') ? -1 : 0,
    strafe: keys.has('a') || keys.has('A') ? -1 : keys.has('d') || keys.has('D') ? 1 : 0,
    turn: keys.has('ArrowLeft') ? -1 : keys.has('ArrowRight') ? 1 : 0,
    look: keys.has('PageUp') ? -1 : keys.has('PageDown') ? 1 : 0,
    ability: keys.has(' '),
    swap: keys.has('Shift'),
    strike: keys.has('Enter') || keys.has('e') || keys.has('E'),
    guard: keys.has('q') || keys.has('Q'),
    dash: keys.has('Control'),
  };
}

function toHud(state: WildfallState): HudState {
  const zone = currentWildfallZone(state);
  const hero = WILDFALL_HEROES[state.activeHero];
  return { zone: zone.name, hero: state.activeHero, hp: Math.max(0, Math.round(state.hpByHero[state.activeHero])), stamina: state.stamina, focus: state.focus, score: state.score, mirror: state.mirrorCount, hazard: state.hazardPressure, weapon: hero.weaponName };
}

function drawSkyAndFloor(ctx: CanvasRenderingContext2D, state: WildfallState, horizonY: number) {
  const zone = currentWildfallZone(state);
  const sky = ctx.createLinearGradient(0, 0, 0, horizonY);
  sky.addColorStop(0, color(zone.sky));
  sky.addColorStop(1, color(shade(zone.fog, 0.48)));
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, VIEW_W, horizonY);

  const floor = ctx.createLinearGradient(0, horizonY, 0, VIEW_H);
  floor.addColorStop(0, color(shade(zone.floor, 1.1)));
  floor.addColorStop(1, color(shade(zone.floor, 0.45)));
  ctx.fillStyle = floor;
  ctx.fillRect(0, horizonY, VIEW_W, VIEW_H - horizonY);

  ctx.strokeStyle = `rgba(${zone.wall[0]},${zone.wall[1]},${zone.wall[2]},0.16)`;
  ctx.lineWidth = 1;
  for (let y = horizonY + 14; y < VIEW_H; y += 18) {
    const widthFactor = (y - horizonY) / Math.max(1, VIEW_H - horizonY);
    ctx.beginPath();
    ctx.moveTo(VIEW_W * 0.5 - widthFactor * VIEW_W, y);
    ctx.lineTo(VIEW_W * 0.5 + widthFactor * VIEW_W, y);
    ctx.stroke();
  }
}

function drawDistantShapes(ctx: CanvasRenderingContext2D, state: WildfallState, horizonY: number) {
  const zone = currentWildfallZone(state);
  const c = shade(zone.fog, 0.55);
  ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},0.32)`;
  for (let i = 0; i < 9; i += 1) {
    const x = (i * 97 + Math.sin(state.elapsedSeconds * 0.2 + i) * 18) % VIEW_W;
    const h = 26 + ((i * 11) % 70);
    ctx.fillRect(x, horizonY - h, 36 + (i % 3) * 22, h);
  }
}

function drawBillboard(ctx: CanvasRenderingContext2D, state: WildfallState, object: ReturnType<typeof wildfallBillboards>[number], horizonY: number) {
  const p = state.player;
  const dx = object.x - p.x;
  const dy = object.y - p.y;
  const d = Math.max(0.001, Math.hypot(dx, dy));
  if (d > MAX_RAY) return;
  const a = Math.atan2(Math.sin(Math.atan2(dy, dx) - p.angle), Math.cos(Math.atan2(dy, dx) - p.angle));
  if (Math.abs(a) > FOV / 2) return;
  const sx = (a / FOV + 0.5) * VIEW_W;
  const size = Math.max(10, Math.min(110, VIEW_H / d));
  const y = horizonY + size * 0.06;
  if (object.kind === 'watcher') {
    ctx.fillStyle = `rgba(255,85,119,${0.78 * (1 - d / MAX_RAY)})`;
    ctx.fillRect(sx - size * 0.18, y - size * 0.42, size * 0.36, size * 0.78);
    ctx.fillStyle = `rgba(20,0,10,${0.3 * (1 - d / MAX_RAY)})`;
    ctx.fillRect(sx - size * 0.07, y - size * 0.64, size * 0.14, size * 0.22);
  }
  if (object.kind === 'relic') {
    ctx.fillStyle = `rgba(232,239,232,${0.86 * (1 - d / MAX_RAY)})`;
    ctx.beginPath();
    ctx.arc(sx, y, size * 0.16, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(127,182,177,0.55)';
    ctx.strokeRect(sx - size * 0.22, y - size * 0.22, size * 0.44, size * 0.44);
  }
  if (object.kind === 'gate') {
    ctx.strokeStyle = `rgba(127,182,177,${0.82 * (1 - d / MAX_RAY)})`;
    ctx.lineWidth = 3;
    ctx.strokeRect(sx - size * 0.3, y - size * 0.58, size * 0.6, size * 1.08);
  }
}

function drawWeaponOverlay(ctx: CanvasRenderingContext2D, state: WildfallState) {
  const hero = WILDFALL_HEROES[state.activeHero];
  const [r, g, b] = hero.palette;
  const sway = Math.sin(state.elapsedSeconds * 5.8) * 5;
  const bob = Math.sin(state.elapsedSeconds * 9.2) * 3;
  const baseY = VIEW_H - 34 + bob;
  const hand = `rgb(${Math.min(255, r + 32)},${Math.min(255, g + 28)},${Math.min(255, b + 22)})`;

  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.22)';
  ctx.fillRect(0, VIEW_H - 92, VIEW_W, 92);

  ctx.fillStyle = hand;
  ctx.beginPath();
  ctx.roundRect(VIEW_W * 0.30 + sway, baseY - 42, 98, 64, 18);
  ctx.fill();
  ctx.beginPath();
  ctx.roundRect(VIEW_W * 0.58 + sway * 0.4, baseY - 38, 92, 58, 18);
  ctx.fill();

  const metal = ctx.createLinearGradient(VIEW_W * 0.5, baseY - 170, VIEW_W * 0.5, baseY + 12);
  metal.addColorStop(0, 'rgba(238,245,255,0.96)');
  metal.addColorStop(0.52, `rgba(${r},${g},${b},0.72)`);
  metal.addColorStop(1, 'rgba(28,36,44,0.95)');

  if (hero.weaponKind === 'sword') {
    ctx.translate(VIEW_W * 0.53 + sway, baseY - 18);
    ctx.rotate(-0.08);
    ctx.fillStyle = metal;
    ctx.fillRect(-7, -178, 14, 166);
    ctx.fillStyle = '#231f20';
    ctx.fillRect(-46, -22, 92, 12);
    ctx.fillStyle = `rgba(${r},${g},${b},0.95)`;
    ctx.fillRect(-10, -10, 20, 44);
  } else if (hero.weaponKind === 'bow') {
    ctx.strokeStyle = metal;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(VIEW_W * 0.55 + sway, baseY - 92, 72, -1.12, 1.12);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(232,239,232,0.72)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(VIEW_W * 0.58 + sway, baseY - 152);
    ctx.lineTo(VIEW_W * 0.58 + sway, baseY - 28);
    ctx.stroke();
    ctx.fillStyle = 'rgba(232,239,232,0.92)';
    ctx.fillRect(VIEW_W * 0.50 + sway, baseY - 94, 98, 3);
  } else if (hero.weaponKind === 'staff') {
    ctx.strokeStyle = metal;
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(VIEW_W * 0.58 + sway, baseY + 18);
    ctx.lineTo(VIEW_W * 0.49 + sway, baseY - 180);
    ctx.stroke();
    ctx.fillStyle = `rgba(${r + 40},${g + 32},${b + 40},0.88)`;
    ctx.beginPath();
    ctx.arc(VIEW_W * 0.48 + sway, baseY - 190, 18, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.fillStyle = metal;
    ctx.save();
    ctx.translate(VIEW_W * 0.42 + sway, baseY - 40);
    ctx.rotate(-0.52);
    ctx.fillRect(-6, -90, 12, 110);
    ctx.restore();
    ctx.save();
    ctx.translate(VIEW_W * 0.62 + sway * 0.4, baseY - 42);
    ctx.rotate(0.48);
    ctx.fillRect(-6, -90, 12, 110);
    ctx.restore();
  }

  ctx.restore();
}

function drawAtmosphere(ctx: CanvasRenderingContext2D, state: WildfallState) {
  const zone = currentWildfallZone(state);
  const c = shade(zone.fog, 0.7);
  ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${0.14 + state.hazardPressure / 1000})`;
  ctx.fillRect(0, 0, VIEW_W, VIEW_H);
  ctx.fillStyle = 'rgba(0,0,0,0.24)';
  ctx.fillRect(0, 0, VIEW_W, 22);
}

function GlyphGrid({ grid }: { grid: string[][] }) { return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${grid.length || 4}, 38px)`, gap: 6 }}>{grid.flatMap((row, r) => row.map((glyph, c) => <div key={`${r}-${c}`} style={glyphCellStyle}>{glyph}</div>))}</div>; }
function Overlay({ children }: { children: ReactNode }) { return <div style={overlayStyle}>{children}</div>; }
function color(rgb: readonly [number, number, number]) { return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`; }
function shade(rgb: readonly [number, number, number], f: number): [number, number, number] { return [Math.max(0, Math.round(rgb[0] * f)), Math.max(0, Math.round(rgb[1] * f)), Math.max(0, Math.round(rgb[2] * f))]; }

const WILDFALL_RESPONSIVE_CSS = `
@media (orientation: portrait) {
  .madmaxi-wildfall-stage {
    aspect-ratio: 9 / 16;
  }
}
@media (orientation: landscape) {
  .madmaxi-wildfall-stage {
    aspect-ratio: 16 / 9;
  }
}
`;

const rootStyle: CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: 10, background: 'linear-gradient(180deg,#050808,#0e1518)', color: '#9fb3a4', minHeight: '100%', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', touchAction: 'none' };
const stageStyle: CSSProperties = { position: 'relative', width: '100%', maxWidth: VIEW_W };
const canvasStyle: CSSProperties = { width: '100%', height: 'auto', maxWidth: VIEW_W, display: 'block', border: '1px solid rgba(127,182,177,0.24)', borderRadius: 10, background: '#050808', touchAction: 'none' };
const overlayStyle: CSSProperties = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, padding: 16, textAlign: 'center', background: 'radial-gradient(ellipse at center, rgba(6,8,9,0.88), rgba(6,8,9,0.98))', borderRadius: 10 };
const titleStyle: CSSProperties = { margin: 0, color: '#7fb6b1', letterSpacing: 3, fontSize: 30 };
const copyStyle: CSSProperties = { maxWidth: 520, lineHeight: 1.5 };
const modeStyle: CSSProperties = { color: '#7fb6b1', letterSpacing: 4, fontSize: 13 };
const countStyle: CSSProperties = { color: '#e8efe8', fontSize: 24 };
const btn: CSSProperties = { background: 'linear-gradient(180deg,#16252a,#0a1416)', border: '1px solid #7fb6b1', color: '#7fb6b1', padding: '11px 26px', borderRadius: 8, fontSize: 14, letterSpacing: 2, cursor: 'pointer' };
const partyStyle: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(4, minmax(70px, 1fr))', gap: 6, width: '100%', maxWidth: VIEW_W };
const heroCardStyle: CSSProperties = { border: '1px solid rgba(127,182,177,0.18)', borderRadius: 8, padding: 6, background: 'rgba(12,18,20,0.8)', display: 'flex', flexDirection: 'column', gap: 2, fontSize: 10 };
const hudStyle: CSSProperties = { width: '100%', maxWidth: VIEW_W, fontSize: 12, color: '#8fa4a2', minHeight: 18 };
const logStyle: CSSProperties = { width: '100%', maxWidth: VIEW_W, display: 'flex', flexDirection: 'column', gap: 2, fontSize: 11, color: '#6f8084' };
const selectStyle: CSSProperties = { width: 42, height: 42, fontSize: 19, background: 'rgba(12,18,20,0.92)', color: '#e8efe8', border: '1px solid #7fb6b1' };
const glyphCellStyle: CSSProperties = { width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(12,18,20,0.92)', border: '1px solid #7fb6b1', color: '#e8efe8', fontSize: 21 };

