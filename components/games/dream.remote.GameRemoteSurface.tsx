'use client';

import { useGamepad } from '@/lib/games/useGamepad';
import { broadcastGameInput } from '@/lib/games/useRemoteChannel';
import { useCallback, useRef, useState } from 'react';

/**
 * GameRemote — single shared controller surface for GameEngin cartridges.
 *
 * Left stick: forward / backward / strafe left / strafe right.
 * Right stick: look up / look down / rotate left / rotate right.
 * Ring buttons: ability, swap, strike, guard, dash, pause.
 */

export type GameInputAction =
  | 'move-up' | 'move-down' | 'move-left' | 'move-right'
  | 'strafe-left' | 'strafe-right' | 'move-stop'
  | 'look-up' | 'look-down' | 'turn-left' | 'turn-right' | 'look-stop'
  | 'ability' | 'swap' | 'strike' | 'guard' | 'dash'
  | 'jump' | 'duck' | 'spin' | 'shoot' | 'jump-spin' | 'jump-shoot'
  | 'l2' | 'r1' | 'l3' | 'r3' | 'sprint' | 'pause';

type Dir8 = 'right' | 'down-right' | 'down' | 'down-left' | 'left' | 'up-left' | 'up' | 'up-right';

interface GameRemoteProps {
  onBack?: () => void;
  embedded?: boolean;
  playHref?: string;
  gameLabel?: string;
  onPlay?: () => void;
  onExit?: () => void;
  exitHref?: string;
  enabled?: boolean;
  scale?: number;
}

interface StickProps {
  side: 'left' | 'right';
  label: string;
  scale: number;
  accent: string;
}

const DEAD_ZONE = 16;
const LEFT_PAD_RADIUS = 58;
const RIGHT_PAD_RADIUS = 66;
const KNOB_RADIUS = 19;
const LEFT_MAX = 46;
const RIGHT_MAX = 50;

const LEFT_MAP: Record<Dir8, { action: GameInputAction; label: string }> = {
  up: { action: 'move-up', label: 'FORWARD' },
  down: { action: 'move-down', label: 'BACK' },
  left: { action: 'strafe-left', label: 'STRAFE LEFT' },
  right: { action: 'strafe-right', label: 'STRAFE RIGHT' },
  'up-left': { action: 'move-up', label: 'FORWARD' },
  'up-right': { action: 'move-up', label: 'FORWARD' },
  'down-left': { action: 'move-down', label: 'BACK' },
  'down-right': { action: 'move-down', label: 'BACK' },
};

const RIGHT_MAP: Record<Dir8, { action: GameInputAction; label: string }> = {
  up: { action: 'look-up', label: 'LOOK UP' },
  down: { action: 'look-down', label: 'LOOK DOWN' },
  left: { action: 'turn-left', label: 'ROTATE LEFT' },
  right: { action: 'turn-right', label: 'ROTATE RIGHT' },
  'up-left': { action: 'turn-left', label: 'ROTATE LEFT' },
  'up-right': { action: 'turn-right', label: 'ROTATE RIGHT' },
  'down-left': { action: 'turn-left', label: 'ROTATE LEFT' },
  'down-right': { action: 'turn-right', label: 'ROTATE RIGHT' },
};

const RING_BUTTONS: readonly Array<{ sym: string; label: string; action: GameInputAction; color: string; top: number; left: number }> = [
  { sym: 'A', label: 'Ability', action: 'ability', color: '#38bdf8', top: 0, left: 103 },
  { sym: 'SW', label: 'Swap', action: 'swap', color: '#a78bfa', top: 48, left: 18 },
  { sym: 'ST', label: 'Strike', action: 'strike', color: '#f87171', top: 48, left: 188 },
  { sym: 'G', label: 'Guard', action: 'guard', color: '#4ade80', top: 156, left: 18 },
  { sym: 'D', label: 'Dash', action: 'dash', color: '#fbbf24', top: 156, left: 188 },
  { sym: '⏸', label: 'Pause', action: 'pause', color: '#94a3b8', top: 206, left: 103 },
];

function fireAction(action: GameInputAction, active: boolean): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('de-game-input', { detail: { action, active, source: 'remote' } }));
  }
  broadcastGameInput(action, active);
}

function angleToDir(dx: number, dy: number): Dir8 | null {
  const dist = Math.hypot(dx, dy);
  if (dist < DEAD_ZONE) return null;
  const a = Math.atan2(dy, dx) * (180 / Math.PI);
  if (a > -22.5 && a <= 22.5) return 'right';
  if (a > 22.5 && a <= 67.5) return 'down-right';
  if (a > 67.5 && a <= 112.5) return 'down';
  if (a > 112.5 && a <= 157.5) return 'down-left';
  if (a > 157.5 || a <= -157.5) return 'left';
  if (a > -157.5 && a <= -112.5) return 'up-left';
  if (a > -112.5 && a <= -67.5) return 'up';
  return 'up-right';
}

function clampToCircle(x: number, y: number, radius: number): { x: number; y: number } {
  const d = Math.hypot(x, y);
  if (d <= radius || d === 0) return { x, y };
  return { x: (x / d) * radius, y: (y / d) * radius };
}

function Stick({ side, label, scale, accent }: StickProps) {
  const padRadius = (side === 'left' ? LEFT_PAD_RADIUS : RIGHT_PAD_RADIUS) * scale;
  const maxDisp = (side === 'left' ? LEFT_MAX : RIGHT_MAX) * scale;
  const knobRadius = KNOB_RADIUS * scale;
  const activeActionRef = useRef<GameInputAction | null>(null);
  const prevDirRef = useRef<Dir8 | null>(null);
  const centerRef = useRef<{ x: number; y: number } | null>(null);
  const [knob, setKnob] = useState({ x: 0, y: 0 });
  const [readout, setReadout] = useState('');

  const releaseActive = useCallback(() => {
    if (activeActionRef.current) fireAction(activeActionRef.current, false);
    if (side === 'left') fireAction('move-stop', true), fireAction('move-stop', false);
    if (side === 'right') fireAction('look-stop', true), fireAction('look-stop', false);
    activeActionRef.current = null;
    prevDirRef.current = null;
    centerRef.current = null;
    setKnob({ x: 0, y: 0 });
    setReadout('');
  }, [side]);

  const move = useCallback((clientX: number, clientY: number) => {
    if (!centerRef.current) return;
    const rawX = clientX - centerRef.current.x;
    const rawY = clientY - centerRef.current.y;
    const nextKnob = clampToCircle(rawX, rawY, maxDisp);
    const dir = angleToDir(rawX, rawY);
    const map = side === 'left' ? LEFT_MAP : RIGHT_MAP;
    if (dir !== prevDirRef.current) {
      if (activeActionRef.current) fireAction(activeActionRef.current, false);
      if (dir) {
        activeActionRef.current = map[dir].action;
        setReadout(map[dir].label);
        fireAction(map[dir].action, true);
      } else {
        activeActionRef.current = null;
        setReadout('');
      }
      prevDirRef.current = dir;
    }
    setKnob(nextKnob);
  }, [maxDisp, side]);

  return (
    <div className="de-game-remote-stickWrap" style={{ ['--stick-scale' as string]: scale }}>
      <div className="de-game-remote-stickLabel">{label}</div>
      <div className="de-game-remote-readout">{readout || '·'}</div>
      <div
        className="de-game-remote-stick"
        onPointerDown={(event) => {
          event.preventDefault();
          event.currentTarget.setPointerCapture(event.pointerId);
          const rect = event.currentTarget.getBoundingClientRect();
          centerRef.current = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
          move(event.clientX, event.clientY);
        }}
        onPointerMove={(event) => { event.preventDefault(); move(event.clientX, event.clientY); }}
        onPointerUp={releaseActive}
        onPointerCancel={releaseActive}
        style={{
          width: padRadius * 2,
          height: padRadius * 2,
          borderColor: `${accent}66`,
          background: `radial-gradient(circle at center, ${accent}1f, rgba(6,12,23,0.86))`,
        }}
      >
        <div
          className="de-game-remote-knob"
          style={{
            left: padRadius + knob.x - knobRadius,
            top: padRadius + knob.y - knobRadius,
            width: knobRadius * 2,
            height: knobRadius * 2,
            background: `linear-gradient(145deg, ${accent}, rgba(226,232,240,0.88))`,
          }}
        />
      </div>
    </div>
  );
}

function RingButton({ sym, label, action, color, top, left, scale }: (typeof RING_BUTTONS)[number] & { scale: number }) {
  const size = Math.max(34, 30 * scale);
  const fire = (active: boolean) => fireAction(action, active);
  return (
    <button
      type="button"
      aria-label={label}
      className="de-game-remote-ringButton"
      onPointerDown={(event) => { event.preventDefault(); fire(true); }}
      onPointerUp={(event) => { event.preventDefault(); fire(false); }}
      onPointerCancel={(event) => { event.preventDefault(); fire(false); }}
      onPointerLeave={(event) => { event.preventDefault(); fire(false); }}
      style={{
        top: top * scale,
        left: left * scale,
        width: size,
        height: size,
        color,
        borderColor: `${color}88`,
        background: `${color}20`,
      }}
    >
      {sym}
    </button>
  );
}

export default function GameRemote({ embedded = false, gameLabel, onExit, enabled = true, scale = 1 }: GameRemoteProps) {
  const { connected: gpConnected, gamepadName } = useGamepad();
  if (!enabled) return null;

  const embeddedScale = embedded ? scale * 0.9 : scale;
  const rightClusterScale = embedded ? scale * 0.92 : scale;
  const gpNameLower = gamepadName.toLowerCase();
  const isDualSense = gpNameLower.includes('dualsense') || gpNameLower.includes('playstation') || gpNameLower.includes('ps5') || gpNameLower.includes('ps4');

  return (
    <div className="de-game-remote" data-embedded={embedded ? 'true' : 'false'}>
      <style>{REMOTE_CSS}</style>
      <div className="de-game-remote-topline">
        <div>
          <div className="de-game-remote-eyebrow">Shared Game Remote</div>
          <div className="de-game-remote-title">{gameLabel ? `${gameLabel} controls` : 'Game controls'}</div>
        </div>
        <div className="de-game-remote-device">{gpConnected ? (isDualSense ? 'DualSense linked' : 'Pad linked') : 'Touch ready'}</div>
        {embedded && onExit && (
          <button type="button" className="de-game-remote-exit" onClick={onExit} aria-label="Exit game">
            Exit
          </button>
        )}
      </div>
      <div className="de-game-remote-controls">
        <Stick side="left" label="Move / Strafe" accent="#2a8ab8" scale={embeddedScale} />
        <div className="de-game-remote-center">
          <button
            type="button"
            className="de-game-remote-pause"
            onPointerDown={() => fireAction('pause', true)}
            onPointerUp={() => fireAction('pause', false)}
            onPointerCancel={() => fireAction('pause', false)}
          >
            ⏸
          </button>
          <div className="de-game-remote-map">L: move + strafe<br />R: camera + rotate</div>
        </div>
        <div className="de-game-remote-rightCluster" style={{ width: 240 * rightClusterScale, height: 240 * rightClusterScale }}>
          <Stick side="right" label="Camera / Rotate" accent="#c8981a" scale={rightClusterScale} />
          {RING_BUTTONS.map((button) => <RingButton key={button.action} {...button} scale={rightClusterScale} />)}
        </div>
      </div>
    </div>
  );
}

const REMOTE_CSS = `
.de-game-remote {
  --remote-bg: rgba(2, 6, 23, 0.92);
  position: relative;
  width: 100%;
  min-height: 100%;
  background: linear-gradient(160deg, #020617 0%, #07101e 55%, #020617 100%);
  border: 1px solid rgba(160,195,240,0.14);
  color: #e5efff;
  overflow: hidden;
  touch-action: none;
  box-sizing: border-box;
}
.de-game-remote[data-embedded="true"] {
  min-height: 100%;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
}
.de-game-remote-topline {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px 4px;
}
.de-game-remote-eyebrow {
  font-size: 9px;
  font-weight: 900;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: rgba(160,195,240,.52);
}
.de-game-remote-title {
  margin-top: 2px;
  font-size: 13px;
  font-weight: 900;
  color: #f8fbff;
}
.de-game-remote-device {
  margin-left: auto;
  font-size: 10px;
  font-weight: 800;
  color: rgba(220,235,255,.62);
  border: 1px solid rgba(160,195,240,.16);
  border-radius: 999px;
  padding: 5px 9px;
  white-space: nowrap;
}
.de-game-remote-exit {
  border: 1px solid rgba(248,113,113,.42);
  background: rgba(127,29,29,.22);
  color: #fecaca;
  border-radius: 999px;
  padding: 7px 11px;
  font-weight: 900;
  font-size: 10px;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.de-game-remote-controls {
  display: grid;
  grid-template-columns: minmax(118px, 1fr) minmax(56px, .36fr) minmax(180px, 1fr);
  align-items: center;
  justify-items: center;
  gap: clamp(8px, 2vw, 18px);
  padding: 4px 16px 14px;
}
.de-game-remote-stickWrap {
  display: grid;
  justify-items: center;
  gap: 4px;
  user-select: none;
}
.de-game-remote-stickLabel {
  font-size: 9px;
  font-weight: 900;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: rgba(160,195,240,.52);
}
.de-game-remote-readout {
  min-height: 16px;
  font-size: 10px;
  font-weight: 900;
  color: rgba(248,251,255,.82);
  white-space: nowrap;
}
.de-game-remote-stick {
  position: relative;
  border-radius: 999px;
  border: 2px solid;
  box-shadow: inset 0 0 18px rgba(255,255,255,.04), 0 12px 28px rgba(0,0,0,.34);
  touch-action: none;
}
.de-game-remote-knob {
  position: absolute;
  border-radius: 999px;
  box-shadow: 0 5px 16px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.5);
  pointer-events: none;
}
.de-game-remote-center {
  display: grid;
  justify-items: center;
  gap: 8px;
}
.de-game-remote-pause {
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(160,195,240,.22);
  background: rgba(160,195,240,.08);
  color: rgba(235,245,255,.78);
  font-weight: 900;
}
.de-game-remote-map {
  font-size: 9px;
  line-height: 1.35;
  text-align: center;
  color: rgba(160,195,240,.48);
  white-space: nowrap;
}
.de-game-remote-rightCluster {
  position: relative;
  display: grid;
  place-items: center;
}
.de-game-remote-rightCluster > .de-game-remote-stickWrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.de-game-remote-ringButton {
  position: absolute;
  border-radius: 999px;
  border: 1.5px solid;
  font-size: 10px;
  font-weight: 950;
  display: grid;
  place-items: center;
  touch-action: none;
}
@media (orientation: landscape) {
  .de-game-remote[data-embedded="true"] {
    border: 0;
    background: transparent;
    pointer-events: none;
  }
  .de-game-remote[data-embedded="true"] .de-game-remote-topline {
    position: absolute;
    left: 15vw;
    right: 15vw;
    bottom: env(safe-area-inset-bottom, 0px);
    padding: 8px 14px;
    pointer-events: auto;
    background: rgba(2,6,23,.72);
    border-top: 1px solid rgba(160,195,240,.12);
  }
  .de-game-remote[data-embedded="true"] .de-game-remote-controls {
    position: fixed;
    inset: 0;
    display: grid;
    grid-template-columns: 15vw 70vw 15vw;
    padding: 0;
    pointer-events: none;
  }
  .de-game-remote[data-embedded="true"] .de-game-remote-stickWrap,
  .de-game-remote[data-embedded="true"] .de-game-remote-rightCluster,
  .de-game-remote[data-embedded="true"] .de-game-remote-center {
    pointer-events: auto;
  }
  .de-game-remote[data-embedded="true"] .de-game-remote-center {
    align-self: end;
    margin-bottom: calc(env(safe-area-inset-bottom, 0px) + 48px);
  }
  .de-game-remote[data-embedded="true"] .de-game-remote-stick {
    transform: scale(1.12);
  }
}
@media (orientation: portrait) {
  .de-game-remote[data-embedded="true"] .de-game-remote-topline {
    padding-top: 8px;
  }
  .de-game-remote[data-embedded="true"] .de-game-remote-controls {
    grid-template-columns: 1fr .26fr 1fr;
    padding: 0 10px 10px;
    gap: 8px;
  }
  .de-game-remote[data-embedded="true"] .de-game-remote-device {
    display: none;
  }
}
`;
