'use client';

import type { GameInputAction } from '@/components/games/dream.remote.GameRemote';
import { useEffect } from 'react';

type KeyboardInput = {
  key: string;
  code: string;
};

export const GAME_INPUT_KEYBOARD_MAP: Partial<Record<GameInputAction, KeyboardInput[]>> = {
  'move-left': [{ key: 'a', code: 'KeyA' }],
  'move-right': [{ key: 'd', code: 'KeyD' }],
  'move-up-left': [
    { key: 'w', code: 'KeyW' },
    { key: 'a', code: 'KeyA' },
  ],
  'move-up-right': [
    { key: 'w', code: 'KeyW' },
    { key: 'd', code: 'KeyD' },
  ],
  'move-down-left': [
    { key: 's', code: 'KeyS' },
    { key: 'a', code: 'KeyA' },
  ],
  'move-down-right': [
    { key: 's', code: 'KeyS' },
    { key: 'd', code: 'KeyD' },
  ],
  'strafe-left': [{ key: 'a', code: 'KeyA' }],
  'strafe-right': [{ key: 'd', code: 'KeyD' }],
  'move-up': [{ key: 'w', code: 'KeyW' }],
  'move-down': [{ key: 's', code: 'KeyS' }],
  'look-up': [{ key: 'PageUp', code: 'PageUp' }],
  'look-down': [{ key: 'PageDown', code: 'PageDown' }],
  'turn-left': [{ key: 'ArrowLeft', code: 'ArrowLeft' }],
  'turn-right': [{ key: 'ArrowRight', code: 'ArrowRight' }],
  ability: [{ key: ' ', code: 'Space' }],
  swap: [{ key: 'Shift', code: 'ShiftLeft' }],
  strike: [{ key: 'Enter', code: 'Enter' }],
  guard: [{ key: 'q', code: 'KeyQ' }],
  dash: [{ key: 'Control', code: 'ControlLeft' }],
  jump: [{ key: ' ', code: 'Space' }],
  duck: [{ key: 's', code: 'KeyS' }],
  spin: [{ key: 'q', code: 'KeyQ' }],
  shoot: [{ key: 'Enter', code: 'Enter' }],
  'jump-spin': [
    { key: ' ', code: 'Space' },
    { key: 'q', code: 'KeyQ' },
  ],
  'jump-shoot': [
    { key: ' ', code: 'Space' },
    { key: 'Enter', code: 'Enter' },
  ],
  l2: [{ key: 'q', code: 'KeyQ' }],
  r1: [{ key: 'Control', code: 'ControlLeft' }],
  pause: [{ key: 'Escape', code: 'Escape' }],
};

const DIRECTIONAL_ACTIONS: GameInputAction[] = [
  'move-left',
  'move-right',
  'move-up-left',
  'move-up-right',
  'move-down-left',
  'move-down-right',
  'strafe-left',
  'strafe-right',
  'move-up',
  'move-down',
  'look-up',
  'look-down',
  'turn-left',
  'turn-right',
];

function emitKeyboardEvent(type: 'keydown' | 'keyup', input: KeyboardInput): void {
  window.dispatchEvent(new KeyboardEvent(type, {
    key: input.key,
    code: input.code,
    bubbles: true,
    cancelable: true,
  }));
}

export function useGameInputKeyboardBridge( ){
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const activeInputsByAction = new Map<GameInputAction, KeyboardInput[]>();
    const pressedCounts = new Map<string, number>();

    const getInputKey = (input: KeyboardInput) => `${input.code}:${input.key}`;

    const pressInputs = (inputs: KeyboardInput[]) => {
      inputs.forEach((input) => {
        const inputKey = getInputKey(input);
        const nextCount = (pressedCounts.get(inputKey) ?? 0) + 1;
        pressedCounts.set(inputKey, nextCount);
        if (nextCount === 1) emitKeyboardEvent('keydown', input);
      });
    };

    const releaseInputs = (inputs: KeyboardInput[]) => {
      inputs.forEach((input) => {
        const inputKey = getInputKey(input);
        const prevCount = pressedCounts.get(inputKey) ?? 0;
        if (prevCount <= 1) {
          pressedCounts.delete(inputKey);
          emitKeyboardEvent('keyup', input);
          return;
        }
        pressedCounts.set(inputKey, prevCount - 1);
      });
    };

    const releaseAction = (action: GameInputAction) => {
      const activeInputs = activeInputsByAction.get(action);
      if (!activeInputs) return;
      releaseInputs(activeInputs);
      activeInputsByAction.delete(action);
    };

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ action?: string; active?: boolean }>).detail;
      const action = detail?.action;
      const active = detail?.active;

      if (typeof action !== 'string' || typeof active !== 'boolean') return;

      if (action === 'move-stop') {
        DIRECTIONAL_ACTIONS.forEach(releaseAction);
        return;
      }

      const mappedInputs = GAME_INPUT_KEYBOARD_MAP[action as GameInputAction];
      if (!mappedInputs?.length) return;

      if (active) {
        if (activeInputsByAction.has(action as GameInputAction)) return;
        activeInputsByAction.set(action as GameInputAction, mappedInputs);
        pressInputs(mappedInputs);
        return;
      }

      releaseAction(action as GameInputAction);
    };

    window.addEventListener('de-game-input', handler as EventListener);
    return () => {
      window.removeEventListener('de-game-input', handler as EventListener);
      activeInputsByAction.forEach((inputs) => releaseInputs(inputs));
      activeInputsByAction.clear();
      pressedCounts.clear();
    };
  }, []);
}
