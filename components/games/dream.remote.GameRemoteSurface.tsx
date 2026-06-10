'use client';

import { broadcastGameInput } from '@/lib/games/useRemoteChannel';
import { ButtonInteractionManager, type ControllerButton } from '@/lib/games/gameControllerButtons';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * GameRemote — single shared controller surface for GameEngin cartridges.
 *
 * The remote stays independent of any one cartridge: it emits the existing
 * GameEngin input actions while preserving the eight physical controller
 * button identities through the controller-button interaction manager.
 */

export type GameInputAction =
  | 'move-up' | 'move-down' | 'move-left' | 'move-right'
  | 'strafe-left' | 'strafe-right' | 'move-stop'
  | 'look-up' | 'look-down' | 'turn-left' | 'turn-right' | 'look-stop'
  | 'ability' | 'swap' | 'strike' | 'guard' | 'dash'
  | 'jump' | 'duck' | 'spin' | 'shoot' | 'jump-spin' | 'jump-shoot'
  | 'l2' | 'r1' | 'l3' | 'r3'
  | 'sprint' | 'pause';

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
  scale: number;
  accent: string;
}

interface RingButtonSpec {
  sym: string;
  label: string;
  button: ControllerButton;
  action: GameInputAction;
  color: string;
  angle: number;
}

const DEAD_ZONE = 16;
const LEFT_PAD_RADIUS = 58;
const RIGHT_PAD_RADIUS = 66;
const KNOB_RADIUS = 19;
const LEFT_MAX = 46;
const RIGHT_MAX = 50;
const RIGHT_RING_BOX = 276;
const RIGHT_RING_RADIUS = 104;
const RING_BUTTON_SIZE = 42;

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

const RING_BUTTONS: readonly RingButtonSpec[] = [
  // Even 45° radial map around the right joystick:
  // top: X, upper-right: R1, right: Circle, lower-right: R2,
  // bottom: Triangle, lower-left: L2, left: Square, upper-left: L1.
  // `button` is the physical controller identity. `action` keeps the existing working GameEngin route.
  { sym: '×',  label: 'X',        button: 'x',        action: 'jump',       color: '#38bdf8', angle: -90 },
  { sym: 'R1', label: 'R1',       button: 'r1',       action: 'r1',         color: '#93c5fd', angle: -45 },
  { sym: '○',  label: 'Circle',   button: 'circle',   action: 'shoot',      color: '#f87171', angle: 0 },
  { sym: 'R2', label: 'R2',       button: 'r2',       action: 'jump-shoot', color: '#a78bfa', angle: 45 },
  { sym: '△',  label: 'Triangle', button: 'triangle', action: 'duck',       color: '#4ade80', angle: 90 },
  { sym: 'L2', label: 'L2',       button: 'l2',       action: 'l2',         color: '#93c5fd', angle: 135 },
  { sym: '□',  label: 'Square',   button: 'square',   action: 'spin',       color: '#f472b6', angle: 180 },
  { sym: 'L1', label: 'L1',       button: 'l1',       action: 'jump-spin',  color: '#a78bfa', angle: 225 },
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

function radialButtonPosition(angle: number, scale: number, size: number): { left: number; top: number } {
  const rad = (angle * Math.PI) / 180;
  const center = (RIGHT_RING_BOX * scale) / 2;
  const radius = RIGHT_RING_RADIUS * scale;
  return {
    left: center + Math.cos(rad) * radius - size / 2,
    top: center + Math.sin(rad) * radius - size / 2,
  };
}

function Stick({ side, scale, accent }: StickProps) {
  const padRadius = (side === 'left' ? LEFT_PAD_RADIUS : RIGHT_PAD_RADIUS) * scale;
  const maxDisp = (side === 'left' ? LEFT_MAX : RIGHT_MAX) * scale;
  const knobRadius = KNOB_RADIUS * scale;
  const activeActionRef = useRef<GameInputAction | null>(null);
  const prevDirRef = useRef<Dir8 | null>(null);
  const centerRef = useRef<{ x: number; y: number } | null>(null);
  const [knob, setKnob] = useState({ x: 0, y: 0 });

  const releaseActive = useCallback(() => {
    if (activeActionRef.current) fireAction(activeActionRef.current, false);
    if (side === 'left') {
      fireAction('move-stop', true);
      fireAction('move-stop', false);
    }
    if (side === 'right') {
      fireAction('look-stop', true);
      fireAction('look-stop', false);
      fireAction('sprint', false);
      fireAction('jump', true);
      fireAction('jump', false);
    }
    activeActionRef.current = null;
    prevDirRef.current = null;
    centerRef.current = null;
    setKnob({ x: 0, y: 0 });
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
        fireAction(map[dir].action, true);
      } else {
        activeActionRef.current = null;
      }
      prevDirRef.current = dir;
    }
    setKnob(nextKnob);
  }, [maxDisp, side]);

  return (
    <div className="de-game-remote-stickWrap" style={{ ['--stick-scale' as string]: scale }}>
      <div
        className="de-game-remote-stick"
        onPointerDown={(event) => {
          event.preventDefault();
          event.currentTarget.setPointerCapture(event.pointerId);
          const rect = event.currentTarget.getBoundingClientRect();
          centerRef.current = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
          if (side === 'right') fireAction('sprint', true);
          move(event.clientX, event.clientY);
        }}
        onPointerMove={(event) => { event.preventDefault(); move(event.clientX, event.clientY); }}
        onPointerUp={releaseActive}
        onPointerCancel={releaseActive}
        style={{
          width: padRadius * 2,
          height: padRadius * 2,
          borderColor: `${accent}66`,
          background: `radial-gradient(circle at center, ${accent}1f, rgba(6,12,23,0.82))`,
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

function RingButton({ sym, label, button, action, color, angle, scale, buttonManager }: RingButtonSpec & { scale: number; buttonManager: ButtonInteractionManager }) {
  const size = Math.max(38, RING_BUTTON_SIZE * scale);
  const position = radialButtonPosition(angle, scale, size);
  const fire = (active: boolean) => fireAction(action, active);

  const release = (pointerId: number) => {
    buttonManager.pressEnd(button, pointerId);
    fire(false);
  };

  return (
    <button
      type="button"
      aria-label={label}
      className="de-game-remote-ringButton"
      onPointerDown={(event) => {
        event.preventDefault();
        event.currentTarget.setPointerCapture(event.pointerId);
        buttonManager.pressStart(button, event.pointerId);
        fire(true);
      }}
      onPointerUp={(event) => { event.preventDefault(); release(event.pointerId); }}
      onPointerCancel={(event) => { event.preventDefault(); release(event.pointerId); }}
      onPointerLeave={(event) => { event.preventDefault(); release(event.pointerId); }}
      style={{
        top: position.top,
        left: position.left,
        width: size,
        height: size,
        color,
        borderColor: `${color}8f`,
        background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,.18), ${color}24 46%, rgba(2,6,23,.74) 100%)`,
        boxShadow: `0 0 0 1px rgba(255,255,255,.05), 0 0 16px ${color}22`,
      }}
    >
      {sym}
    </button>
  );
}

export default function GameRemote({ embedded = false, gameLabel, onBack, onExit, enabled = true, scale = 1 }: GameRemoteProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const buttonInteractionManagerRef = useRef<ButtonInteractionManager | null>(null);
  if (buttonInteractionManagerRef.current === null) buttonInteractionManagerRef.current = new ButtonInteractionManager();

  useEffect(() => {
    const manager = buttonInteractionManagerRef.current;
    return () => manager?.destroy();
  }, []);

  if (!enabled) return null;

  const embeddedScale = embedded ? scale * 0.94 : scale;
  const rightClusterScale = embedded ? scale * 0.94 : scale;

  const pulseAction = (action: GameInputAction) => {
    fireAction(action, true);
    if (typeof window !== 'undefined') window.setTimeout(() => fireAction(action, false), 0);
    else fireAction(action, false);
  };

  const openGameMenu = () => {
    setMenuOpen(true);
    pulseAction('pause');
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('de-game-menu', { detail: { open: true, source: 'remote' } }));
    }
  };

  const closeGameMenu = () => {
    setMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('de-game-menu', { detail: { open: false, source: 'remote' } }));
    }
  };

  const handleBack = () => {
    closeGameMenu();
    if (onExit) onExit();
    else if (onBack) onBack();
  };

  const handleRecordSave = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('de-game-record-save', { detail: { source: 'remote', gameLabel } }));
    }
  };

  return (
    <div
      className="de-game-remote"
      data-embedded={embedded ? 'true' : 'false'}
      data-touching={isTouching ? 'true' : 'false'}
      data-menu-open={menuOpen ? 'true' : 'false'}
      onPointerDownCapture={() => setIsTouching(true)}
      onPointerUpCapture={() => setIsTouching(false)}
      onPointerCancelCapture={() => setIsTouching(false)}
    >
      <style>{REMOTE_CSS}</style>
      <div className="de-game-remote-controls">
        <Stick side="left" accent="#2a8ab8" scale={embeddedScale} />
        <div className="de-game-remote-center">
          <button
            type="button"
            className="de-game-remote-pause"
            aria-label="Open game menu"
            onClick={(event) => {
              event.preventDefault();
              if (menuOpen) closeGameMenu();
              else openGameMenu();
            }}
          >
            ☰
          </button>
        </div>
        <div className="de-game-remote-rightCluster" style={{ width: RIGHT_RING_BOX * rightClusterScale, height: RIGHT_RING_BOX * rightClusterScale }}>
          <Stick side="right" accent="#c8981a" scale={rightClusterScale} />
          {RING_BUTTONS.map((button) => (
            <RingButton
              key={button.button}
              {...button}
              scale={rightClusterScale}
              buttonManager={buttonInteractionManagerRef.current!}
            />
          ))}
        </div>
      </div>
      {menuOpen && (
        <div className="de-game-remote-menu" role="dialog" aria-label="Game menu">
          <div className="de-game-remote-menuCard">
            <button type="button" className="de-game-remote-menuButton" onClick={handleBack}>Back</button>
            <button type="button" className="de-game-remote-menuButton" onClick={handleRecordSave}>Record / Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

const REMOTE_CSS = `
.de-game-remote {
  position: relative;
  width: 100%;
  min-height: 100%;
  color: #e5efff;
  overflow: hidden;
  touch-action: none;
  box-sizing: border-box;
  background: linear-gradient(160deg, rgba(2,6,23,.92) 0%, rgba(7,16,30,.92) 55%, rgba(2,6,23,.92) 100%);
  border: 1px solid rgba(160,195,240,0.14);
}
.de-game-remote[data-embedded="true"] {
  min-height: 100%;
  border: 0;
  background: transparent;
  pointer-events: none;
}
.de-game-remote-controls {
  position: relative;
  display: grid;
  grid-template-columns: minmax(118px, 1fr) minmax(48px, .32fr) minmax(210px, 1fr);
  align-items: center;
  justify-items: center;
  gap: clamp(8px, 2vw, 18px);
  padding: 10px 16px 16px;
}
.de-game-remote[data-embedded="true"] .de-game-remote-controls {
  opacity: .46;
  transition: opacity 130ms ease;
}
.de-game-remote[data-embedded="true"][data-touching="true"][data-menu-open="false"] .de-game-remote-controls {
  opacity: 0;
}
.de-game-remote[data-embedded="true"][data-menu-open="true"] .de-game-remote-controls {
  opacity: .86;
}
.de-game-remote-stickWrap {
  display: grid;
  justify-items: center;
  user-select: none;
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
  place-items: center;
}
.de-game-remote-pause {
  width: 46px;
  height: 46px;
  border-radius: 999px;
  border: 1px solid rgba(160,195,240,.30);
  background: radial-gradient(circle at 35% 30%, rgba(255,255,255,.16), rgba(15,23,42,.72) 52%, rgba(2,6,23,.84) 100%);
  color: rgba(235,245,255,.86);
  font-size: 23px;
  line-height: 1;
  font-weight: 900;
  display: grid;
  place-items: center;
  box-shadow: 0 0 0 1px rgba(255,255,255,.04), 0 0 18px rgba(96,165,250,.20);
  touch-action: none;
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
  font-size: 15px;
  font-weight: 950;
  display: grid;
  place-items: center;
  touch-action: none;
  letter-spacing: .01em;
}
.de-game-remote-menu {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: center;
  pointer-events: auto;
  background: rgba(2,6,23,.28);
}
.de-game-remote-menuCard {
  display: grid;
  gap: 10px;
  min-width: 172px;
  padding: 14px;
  border-radius: 20px;
  border: 1px solid rgba(160,195,240,.22);
  background: rgba(2,6,23,.86);
  box-shadow: 0 16px 48px rgba(0,0,0,.45);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}
.de-game-remote-menuButton {
  border: 1px solid rgba(160,195,240,.22);
  background: rgba(160,195,240,.10);
  color: #f8fbff;
  border-radius: 999px;
  padding: 10px 14px;
  font-size: 12px;
  font-weight: 900;
}
@media (orientation: landscape) {
  .de-game-remote[data-embedded="true"] .de-game-remote-controls {
    position: fixed;
    left: max(16px, 3vw);
    right: max(16px, 3vw);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 14px);
    height: min(42dvh, 290px);
    min-height: 214px;
    display: block;
    padding: 0;
    pointer-events: none;
    border-radius: 28px;
    border: 1px solid rgba(160,195,240,.16);
    background: linear-gradient(180deg, rgba(2,6,23,.34), rgba(2,6,23,.70));
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 -18px 44px rgba(0,0,0,.30);
  }
  .de-game-remote[data-embedded="true"] .de-game-remote-controls > .de-game-remote-stickWrap:first-child {
    position: absolute;
    left: max(14px, 3vw);
    bottom: 42px;
    pointer-events: auto;
  }
  .de-game-remote[data-embedded="true"] .de-game-remote-rightCluster {
    position: absolute;
    right: max(12px, 3vw);
    bottom: 16px;
    pointer-events: auto;
  }
  .de-game-remote[data-embedded="true"] .de-game-remote-center {
    position: absolute;
    left: 50%;
    bottom: 48px;
    transform: translateX(-50%);
    pointer-events: auto;
  }
}
@media (orientation: portrait) {
  .de-game-remote[data-embedded="true"] .de-game-remote-controls {
    position: fixed;
    left: max(8px, 2vw);
    right: max(8px, 2vw);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 16px);
    height: min(34dvh, 310px);
    min-height: 252px;
    display: block;
    padding: 0;
    pointer-events: none;
    border-radius: 28px;
    border: 1px solid rgba(160,195,240,.16);
    background: linear-gradient(180deg, rgba(2,6,23,.32), rgba(2,6,23,.74));
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 -18px 44px rgba(0,0,0,.30);
  }
  .de-game-remote[data-embedded="true"] .de-game-remote-controls > .de-game-remote-stickWrap:first-child {
    position: absolute;
    left: max(12px, 3vw);
    bottom: 52px;
    pointer-events: auto;
  }
  .de-game-remote[data-embedded="true"] .de-game-remote-rightCluster {
    position: absolute;
    right: max(-8px, -1vw);
    bottom: 24px;
    pointer-events: auto;
  }
  .de-game-remote[data-embedded="true"] .de-game-remote-center {
    position: absolute;
    left: 45%;
    bottom: 72px;
    transform: translateX(-50%);
    pointer-events: auto;
  }
}
`;
