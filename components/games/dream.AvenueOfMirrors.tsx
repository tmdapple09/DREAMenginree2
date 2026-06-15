'use client';

/**
 * AVENUE OF MIRRORS — fusion of lucid-avenue + maze + memory-grid.
 *
 * First-person dream-walk. The maze rebuilds itself the moment you stop
 * looking. You only navigate by glyph-grids you must memorize at each Mirror,
 * then recall at the next gate. Watchers cannot be killed; lose them by
 * deliberately disorienting yourself.
 */

import { useGameAutoStart, useGamePhase, useSubmitScore } from '@/engins/gameengin/games/hooks';
import { useGameEngineAPI } from '@/engins/gameengin/cartridges/reactCartridge';
import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

const MAP_N = 16;
const VIEW_W = 640;
const VIEW_H = 360;
const FOV = Math.PI / 3;
const FOG_DIST = 8;
const GLYPHS = ['◆', '○', '△', '✕', '▽', '◐', '✦', '▫', '☉', '⌬'];

type Phase = 'menu' | 'walking' | 'memorize' | 'recall' | 'victory' | 'defeat';
type Player = { x: number; y: number; angle: number };
type Watcher = { x: number; y: number };
type Hud = { mirrors: number; watchers: number; score: number };

const COL = {
  ceil: '#1c1f24',
  floor: '#0d1416',
  wall: '#5b6770',
  fog: '#0a0d10',
  glyph: '#e8efe8',
  watcher: '#ff5577',
  ui: '#9fb3a4',
  accent: '#7fb6b1',
  panel: 'rgba(12,18,20,0.9)',
} as const;

function createSeededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

function newMaze(rng: () => number = createSeededRandom(0xa0f2026)): number[][] {
  const m: number[][] = Array.from({ length: MAP_N }, () => Array<number>(MAP_N).fill(1));
  const stack: Array<[number, number]> = [[1, 1]];
  m[1][1] = 0;
  while (stack.length) {
    const [x, y] = stack[stack.length - 1];
    const opts: Array<[number, number]> = [];
    for (const [dx, dy] of [[2, 0], [-2, 0], [0, 2], [0, -2]]) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx > 0 && nx < MAP_N - 1 && ny > 0 && ny < MAP_N - 1 && m[ny][nx] === 1) opts.push([nx, ny]);
    }
    if (opts.length === 0) {
      stack.pop();
      continue;
    }
    const [nx, ny] = opts[Math.floor(rng() * opts.length)];
    m[(y + ny) / 2][(x + nx) / 2] = 0;
    m[ny][nx] = 0;
    stack.push([nx, ny]);
  }
  m[MAP_N - 2][MAP_N - 2] = 0;
  return m;
}

function makeGlyphGrid(size: number, rng: () => number): string[][] {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => GLYPHS[Math.floor(rng() * GLYPHS.length)]));
}

function moveBlocked(maze: number[][], x: number, y: number): boolean {
  return maze[Math.floor(y)]?.[Math.floor(x)] !== 0;
}

function actionKey(action: string | undefined): string | null {
  if (action === 'up' || action === 'move-up') return 'ArrowUp';
  if (action === 'down' || action === 'move-down') return 'ArrowDown';
  if (action === 'left' || action === 'turn-left') return 'ArrowLeft';
  if (action === 'right' || action === 'turn-right') return 'ArrowRight';
  if (action === 'primary' || action === 'confirm') return ' ';
  return null;
}

export default function AvenueOfMirrors() {
  const api = useGameEngineAPI();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, phaseRef, setPhase] = useGamePhase<Phase>('menu');
  const rngRef = useRef(createSeededRandom(0xa0f2026));
  const elapsedMsRef = useRef(0);
  const mazeRef = useRef<number[][]>(newMaze(rngRef.current));
  const playerRef = useRef<Player>({ x: 1.5, y: 1.5, angle: 0 });
  const keysRef = useRef<Set<string>>(new Set());
  const watchersRef = useRef<Watcher[]>([]);
  const lastReshapeRef = useRef(0);
  const lastHudRef = useRef(0);
  const memoryRef = useRef<{ grid: string[][]; reveal: number; gridSize: number }>({ grid: [], reveal: 0, gridSize: 4 });
  const [recallGuess, setRecallGuess] = useState<string[][]>([]);
  const [memoryProgress, setMemoryProgress] = useState(0);
  const mirrorsClearedRef = useRef(0);
  const scoreRef = useRef(0);
  const [hud, setHud] = useState<Hud>({ mirrors: 0, watchers: 0, score: 0 });
  const submit = useSubmitScore('avenue-of-mirrors');

  const syncHud = useCallback(() => {
    setHud({ mirrors: mirrorsClearedRef.current, watchers: watchersRef.current.length, score: scoreRef.current });
  }, []);

  const start = useCallback(() => {
    rngRef.current = createSeededRandom(0xa0f2026);
    elapsedMsRef.current = 0;
    lastReshapeRef.current = 0;
    lastHudRef.current = 0;
    mazeRef.current = newMaze(rngRef.current);
    playerRef.current = { x: 1.5, y: 1.5, angle: 0 };
    keysRef.current.clear();
    watchersRef.current = [];
    mirrorsClearedRef.current = 0;
    scoreRef.current = 0;
    syncHud();
    setPhase('walking');
  }, [setPhase, syncHud]);

  useGameAutoStart(phase === 'menu' ? start : null);
  useEffect(() => { if (phase === 'victory' || phase === 'defeat') submit(scoreRef.current); }, [phase, submit]);

  useEffect(() => {
    if (!api) return;
    const press = (key: string) => keysRef.current.add(key);
    const release = (key: string) => keysRef.current.delete(key);
    const offDown = api.input.on('keydown', (event) => {
      press(event.key);
      if (event.key.startsWith('Arrow') || event.key === ' ') event.preventDefault();
    });
    const offUp = api.input.on('keyup', (event) => release(event.key));
    const offRemote = api.input.on('remote', (event) => {
      const key = actionKey(event.action);
      if (!key) return;
      if (event.active) press(key);
      else release(key);
    });
    return () => { offDown(); offUp(); offRemote(); };
  }, [api]);

  const checkMirror = useCallback(() => {
    const p = playerRef.current;
    const exitX = MAP_N - 2;
    const exitY = MAP_N - 2;
    if (Math.hypot(p.x - exitX, p.y - exitY) < 1.0) {
      const size = Math.min(6, 4 + mirrorsClearedRef.current);
      memoryRef.current = { grid: makeGlyphGrid(size, rngRef.current), reveal: 5, gridSize: size };
      setRecallGuess(Array.from({ length: size }, () => Array<string>(size).fill('')));
      setMemoryProgress(0);
      setPhase('memorize');
    }
  }, [setPhase]);

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = COL.ceil;
    ctx.fillRect(0, 0, VIEW_W, VIEW_H / 2);
    ctx.fillStyle = COL.floor;
    ctx.fillRect(0, VIEW_H / 2, VIEW_W, VIEW_H / 2);

    const p = playerRef.current;
    for (let s = 0; s < VIEW_W; s += 2) {
      const rayAngle = p.angle - FOV / 2 + (s / VIEW_W) * FOV;
      const dx = Math.cos(rayAngle);
      const dy = Math.sin(rayAngle);
      let dist = 0;
      let hit = false;
      while (dist < FOG_DIST + 2 && !hit) {
        dist += 0.04;
        const cx = Math.floor(p.x + dx * dist);
        const cy = Math.floor(p.y + dy * dist);
        hit = cx < 0 || cx >= MAP_N || cy < 0 || cy >= MAP_N || mazeRef.current[cy][cx] === 1;
      }
      const corrected = Math.max(0.1, dist * Math.cos(rayAngle - p.angle));
      const colHeight = Math.min(VIEW_H, VIEW_H / corrected);
      const fogF = Math.max(0, 1 - dist / FOG_DIST);
      const wallShade = Math.floor(80 * fogF + 30);
      ctx.fillStyle = `rgb(${wallShade + 20},${wallShade + 30},${wallShade + 35})`;
      ctx.fillRect(s, (VIEW_H - colHeight) / 2, 2, colHeight);
      ctx.fillStyle = `rgba(44,142,142,${0.04 * fogF})`;
      ctx.fillRect(s, VIEW_H / 2, 2, VIEW_H / 2);
    }

    const grad = ctx.createRadialGradient(VIEW_W / 2, VIEW_H / 2, VIEW_H * 0.2, VIEW_W / 2, VIEW_H / 2, VIEW_H);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, COL.fog);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, VIEW_W, VIEW_H);

    for (const watcher of watchersRef.current) {
      const dx = watcher.x - p.x;
      const dy = watcher.y - p.y;
      const d = Math.max(0.001, Math.hypot(dx, dy));
      const aNorm = Math.atan2(Math.sin(Math.atan2(dy, dx) - p.angle), Math.cos(Math.atan2(dy, dx) - p.angle));
      if (Math.abs(aNorm) < FOV / 2 && d < FOG_DIST) {
        const sx = (aNorm / FOV + 0.5) * VIEW_W;
        const size = Math.min(VIEW_H, VIEW_H / d);
        ctx.fillStyle = `rgba(255,85,119,${0.6 * (1 - d / FOG_DIST)})`;
        ctx.beginPath();
        ctx.arc(sx, VIEW_H / 2, size * 0.25, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, []);

  useEffect(() => {
    if (!api) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(2, Math.max(1, globalThis.devicePixelRatio || 1));
    canvas.width = Math.floor(VIEW_W * dpr);
    canvas.height = Math.floor(VIEW_H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    return api.loop.onRender((frameDt) => {
      const dt = Math.min(0.05, frameDt);
      elapsedMsRef.current += dt * 1000;

      if (phaseRef.current === 'walking') {
        const p = playerRef.current;
        const k = keysRef.current;
        const fwd = k.has('w') || k.has('W') || k.has('ArrowUp') ? 1 : k.has('s') || k.has('S') || k.has('ArrowDown') ? -1 : 0;
        const strafe = k.has('a') || k.has('A') ? -1 : k.has('d') || k.has('D') ? 1 : 0;
        if (k.has('ArrowLeft')) p.angle -= 1.8 * dt;
        if (k.has('ArrowRight')) p.angle += 1.8 * dt;
        const nx = p.x + Math.cos(p.angle) * fwd * 2.5 * dt + Math.cos(p.angle + Math.PI / 2) * strafe * 2.5 * dt;
        const ny = p.y + Math.sin(p.angle) * fwd * 2.5 * dt + Math.sin(p.angle + Math.PI / 2) * strafe * 2.5 * dt;
        if (!moveBlocked(mazeRef.current, nx, ny)) { p.x = nx; p.y = ny; }
        else if (!moveBlocked(mazeRef.current, nx, p.y)) p.x = nx;
        else if (!moveBlocked(mazeRef.current, p.x, ny)) p.y = ny;

        if (elapsedMsRef.current - lastReshapeRef.current > 4000) {
          lastReshapeRef.current = elapsedMsRef.current;
          for (let i = 0; i < 6; i += 1) {
            const rx = 1 + Math.floor(rngRef.current() * (MAP_N - 2));
            const ry = 1 + Math.floor(rngRef.current() * (MAP_N - 2));
            if (Math.hypot(rx - p.x, ry - p.y) > 4 && (rx !== MAP_N - 2 || ry !== MAP_N - 2)) {
              mazeRef.current[ry][rx] = mazeRef.current[ry][rx] === 1 ? 0 : 1;
            }
          }
        }

        for (const watcher of watchersRef.current) {
          const dx = p.x - watcher.x;
          const dy = p.y - watcher.y;
          const d = Math.max(0.001, Math.hypot(dx, dy));
          if (d < 0.6) { setPhase('defeat'); return; }
          watcher.x += (dx / d) * dt;
          watcher.y += (dy / d) * dt;
        }
        checkMirror();
      }

      draw(ctx);
      if (elapsedMsRef.current - lastHudRef.current > 250) {
        lastHudRef.current = elapsedMsRef.current;
        syncHud();
      }
    });
  }, [api, phaseRef, checkMirror, draw, setPhase, syncHud]);

  useEffect(() => {
    if (phase !== 'memorize') return;
    let left = memoryRef.current.reveal;
    setMemoryProgress(left);
    const timer = setInterval(() => {
      left -= 1;
      setMemoryProgress(left);
      if (left <= 0) {
        clearInterval(timer);
        setPhase('recall');
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, setPhase]);

  const submitRecall = useCallback(() => {
    let correct = 0;
    let total = 0;
    const grid = memoryRef.current.grid;
    for (let r = 0; r < grid.length; r += 1) for (let c = 0; c < grid[r].length; c += 1) {
      total += 1;
      if (recallGuess[r]?.[c] === grid[r][c]) correct += 1;
    }
    const ratio = total > 0 ? correct / total : 0;
    if (ratio === 1) {
      mirrorsClearedRef.current += 1;
      scoreRef.current += 200 + mirrorsClearedRef.current * 50;
      if (mirrorsClearedRef.current >= 3) { syncHud(); setPhase('victory'); return; }
    } else if (ratio > 0.5) {
      scoreRef.current += Math.floor(80 * ratio);
    } else {
      watchersRef.current.push({ x: MAP_N - 2.5, y: MAP_N - 2.5 });
    }
    mazeRef.current = newMaze(rngRef.current);
    playerRef.current = { x: 1.5, y: 1.5, angle: 0 };
    syncHud();
    setPhase('walking');
  }, [recallGuess, setPhase, syncHud]);

  const hold = useCallback((key: string, active: boolean) => {
    if (active) keysRef.current.add(key);
    else keysRef.current.delete(key);
  }, []);

  return (
    <div style={rootStyle}>
      <div style={stageStyle}>
        <canvas ref={canvasRef} width={VIEW_W} height={VIEW_H} style={canvasStyle} />
        {phase === 'menu' && <Overlay><h1 style={titleStyle}>🪞 AVENUE OF MIRRORS</h1><p style={copyStyle}>Walk the dream-seam. Memorize each Mirror. The maze rewrites the path behind you.</p><button onClick={start} style={btn}>Open Your Eyes</button></Overlay>}
        {phase === 'memorize' && <Overlay><div style={modeStyle}>MIRROR · MEMORIZE</div><GlyphGrid grid={memoryRef.current.grid} readonlyMode /><div style={{ color: COL.accent }}>{memoryProgress}s</div></Overlay>}
        {phase === 'recall' && <Overlay><div style={modeStyle}>RECALL</div><div style={{ display: 'grid', gridTemplateColumns: `repeat(${memoryRef.current.gridSize}, 40px)`, gap: 6 }}>{recallGuess.flatMap((row, r) => row.map((g, c) => <select key={`${r}-${c}`} value={g} onChange={(event) => { const next = recallGuess.map((rr) => rr.slice()); next[r][c] = event.target.value; setRecallGuess(next); }} style={selectStyle}><option value="" />{GLYPHS.map((x) => <option key={x} value={x}>{x}</option>)}</select>))}</div><button onClick={submitRecall} style={btn}>Lock In</button></Overlay>}
        {phase === 'victory' && <Overlay><h1 style={{ color: COL.accent }}>You remember your face.</h1><p>Score: {scoreRef.current}</p><button onClick={start} style={btn}>Wake Again</button></Overlay>}
        {phase === 'defeat' && <Overlay><h1 style={{ color: COL.watcher }}>The Watcher found you.</h1><p>Score: {scoreRef.current}</p><button onClick={start} style={btn}>Sleep In</button></Overlay>}
      </div>
      <div style={mobileControlsStyle} aria-label="Avenue of Mirrors touch controls">
        <Pad label="↺" onHold={(active) => hold('ArrowLeft', active)} />
        <Pad label="↑" onHold={(active) => hold('ArrowUp', active)} />
        <Pad label="↻" onHold={(active) => hold('ArrowRight', active)} />
        <Pad label="↓" onHold={(active) => hold('ArrowDown', active)} />
      </div>
      <div style={hudStyle}>Mirrors: {hud.mirrors}/3 · Watchers: {hud.watchers} · Score: {hud.score}</div>
    </div>
  );
}

function GlyphGrid({ grid, readonlyMode }: { grid: string[][]; readonlyMode?: boolean }) {
  const size = grid.length || 4;
  return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${size}, 36px)`, gap: 6 }}>{grid.flatMap((row, r) => row.map((g, c) => <div key={`${r}-${c}`} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', background: COL.panel, border: `1px solid ${COL.accent}`, color: COL.glyph, fontSize: 22 }} aria-hidden={readonlyMode}>{g}</div>))}</div>;
}

function Pad({ label, onHold }: { label: string; onHold: (active: boolean) => void }) {
  return <button type="button" style={padStyle} onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); onHold(true); }} onPointerUp={() => onHold(false)} onPointerCancel={() => onHold(false)} onPointerLeave={() => onHold(false)}>{label}</button>;
}

const Overlay = ({ children }: { children: ReactNode }) => <div style={overlayStyle}>{children}</div>;

const rootStyle: CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: 12, background: 'linear-gradient(180deg, #060809 0%, #0e1418 100%)', color: COL.ui, minHeight: '100%', fontFamily: '"Courier New", monospace', touchAction: 'none' };
const stageStyle: CSSProperties = { position: 'relative', width: '100%', maxWidth: VIEW_W };
const canvasStyle: CSSProperties = { width: '100%', height: 'auto', maxWidth: VIEW_W, borderRadius: 8, border: '1px solid rgba(127,182,177,0.22)', background: '#060809', display: 'block', touchAction: 'none' };
const mobileControlsStyle: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(4, minmax(54px, 72px))', gap: 8, justifyContent: 'center', width: '100%', maxWidth: VIEW_W };
const padStyle: CSSProperties = { minWidth: 54, minHeight: 54, borderRadius: 12, border: `1px solid ${COL.accent}`, background: '#10191c', color: COL.accent, fontSize: 22, touchAction: 'none', userSelect: 'none' };
const hudStyle: CSSProperties = { fontSize: 12, color: '#6f8084', minHeight: 18 };
const overlayStyle: CSSProperties = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, background: 'radial-gradient(ellipse at center, rgba(6,8,9,0.88), rgba(6,8,9,0.98))', borderRadius: 8, padding: 16, textAlign: 'center' };
const titleStyle: CSSProperties = { color: COL.accent, margin: 0, fontSize: 28, letterSpacing: 3 };
const copyStyle: CSSProperties = { maxWidth: 460, textAlign: 'center', lineHeight: 1.5 };
const modeStyle: CSSProperties = { color: COL.accent, fontSize: 13, letterSpacing: 4 };
const selectStyle: CSSProperties = { width: 40, height: 40, fontSize: 18, background: COL.panel, color: COL.glyph, border: `1px solid ${COL.accent}` };
const btn: CSSProperties = { background: 'linear-gradient(180deg, #16252a 0%, #0a1416 100%)', border: `1px solid ${COL.accent}`, color: COL.accent, padding: '10px 26px', borderRadius: 6, fontSize: 14, letterSpacing: 3, cursor: 'pointer', fontFamily: 'inherit' };
