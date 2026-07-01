'use client';

import { useCallback, useEffect, useRef, useState } from 'react';




type GameAction =
  | 'move-left' | 'move-right' | 'move-up' | 'move-down'
  | 'move-stop'
  | 'jump' | 'duck' | 'spin' | 'shoot'
  | 'jump-spin' | 'jump-shoot' | 'l2' | 'r1' | 'l3' | 'r3'
  | 'pause';

export interface GamepadStatus {
  
  connected: boolean;
  
  gamepadName: string;
  
  isDualSense: boolean;
  
  rumble: (intensity: number, duration?: number) => void;
}


const DEAD = 0.25;


const BUTTON_MAP: (GameAction | null)[] = [
  'jump',       
  'shoot',      
  'spin',       
  'duck',       
  'jump-spin',  
  'r1',         
  'l2',         
  'jump-shoot', 
  null,         
  'pause',      
  'l3',         
  'r3',         
  'jump',       
  'duck',       
  'move-left',  
  'move-right', 
];

function fire(action: GameAction, active: boolean): boolean | undefined {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('de-game-input', { detail: { action, active, source: 'gamepad' } }));
}

function checkIsDualSense(gamepadId: string): boolean {
  const id = gamepadId.toLowerCase();
  return (
    id.includes('dualsense') ||
    id.includes('054c') || 
    id.includes('wireless controller') ||
    id.includes('ps5')
  );
}

export function useGamepad(): GamepadStatus {
  const [status, setStatus] = useState<GamepadStatus>({
    connected: false,
    gamepadName: '',
    isDualSense: false,
    rumble: () => {}, 
  });

  
  const buttonState = useRef<boolean[]>([]);

  
  const axisState = useRef({ left: false, right: false, up: false });

  
  const rafRef = useRef<number | null>(null);

  
  const polling = useRef(false);

  
  const gamepadIndexRef = useRef(-1);

  const rumble = useCallback((intensity: number, duration: number = 100) => {
    if (typeof navigator === 'undefined' || !navigator.getGamepads) return;

    const gamepads = navigator.getGamepads();
    const gamepad = gamepads[gamepadIndexRef.current];

    if (!gamepad) return;

    
    const haptics = gamepad as Gamepad & { hapticActuators?: GamepadHapticActuator[]; vibrationActuator?: GamepadHapticActuator };
    const actuator = haptics.hapticActuators?.[0] ?? haptics.vibrationActuator;
    const pulseActuator = actuator as (GamepadHapticActuator & { pulse?: (value: number, duration: number) => Promise<boolean> }) | undefined;
    if (pulseActuator?.pulse) {
      const clampedIntensity = Math.max(0, Math.min(1, intensity));
      pulseActuator.pulse(clampedIntensity, duration / 1000);
      return;
    }

    
    if ('vibrate' in navigator) {
      navigator.vibrate(duration);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function poll( ){
      if (typeof navigator === 'undefined') return;

      const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
      let gp: Gamepad | null = null;
      for (let i = 0; i < gamepads.length; i++) {
        if (gamepads[i]) { gp = gamepads[i]; break; }
      }

      if (!gp) {
        polling.current = false;
        return;
      }

      for (let i = 0; i < gp.buttons.length; i++) {
        const pressed = gp.buttons[i].pressed || gp.buttons[i].value > 0.5;
        const was     = buttonState.current[i] ?? false;
        if (pressed !== was) {
          buttonState.current[i] = pressed;
          const action = BUTTON_MAP[i] ?? null;
          if (action) fire(action, pressed);
        }
      }

      const ax = gp.axes[0] ?? 0; 
      const ay = gp.axes[1] ?? 0; 

      const nowLeft  = ax < -DEAD;
      const nowRight = ax >  DEAD;
      const nowUp    = ay < -DEAD;

      const prev = axisState.current;

      if (nowLeft !== prev.left) {
        fire('move-left', nowLeft);
        if (!nowLeft && !nowRight) fire('move-stop', false);
      }
      if (nowRight !== prev.right) {
        fire('move-right', nowRight);
        if (!nowLeft && !nowRight) fire('move-stop', false);
      }
      if (nowUp !== prev.up) {
        fire('jump', nowUp);
      }

      axisState.current = { left: nowLeft, right: nowRight, up: nowUp };

      rafRef.current = requestAnimationFrame(poll);
    }

    function startPolling( ){
      if (polling.current) return;
      polling.current = true;
      rafRef.current  = requestAnimationFrame(poll);
    }

    function stopPolling( ){
      polling.current = false;
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      
      buttonState.current.forEach((was, i: number) => {
        if (was) {
          buttonState.current[i] = false;
          const action = BUTTON_MAP[i] ?? null;
          if (action) fire(action, false);
        }
      });
      const prev = axisState.current;
      if (prev.left)  fire('move-left',  false);
      if (prev.right) fire('move-right', false);
      if (prev.up)    fire('jump',       false);
      fire('move-stop', false);
      axisState.current = { left: false, right: false, up: false };
      buttonState.current = [];
    }

    const onConnect = (e: GamepadEvent) => {
      gamepadIndexRef.current = e.gamepad.index;
      const isDualSense = checkIsDualSense(e.gamepad.id);
      setStatus({
        connected: true,
        gamepadName: e.gamepad.id,
        isDualSense,
        rumble,
      });
      startPolling();
    };

    const onDisconnect = () => {
      stopPolling();
      gamepadIndexRef.current = -1;
      
      if (typeof navigator !== 'undefined' && navigator.getGamepads) {
        const remaining = Array.from(navigator.getGamepads()).filter(Boolean);
        if (remaining.length > 0 && remaining[0]) {
          gamepadIndexRef.current = remaining[0].index;
          const isDualSense = checkIsDualSense(remaining[0].id);
          setStatus({
            connected: true,
            gamepadName: remaining[0].id,
            isDualSense,
            rumble,
          });
          startPolling();
          return;
        }
      }
      setStatus({
        connected: false,
        gamepadName: '',
        isDualSense: false,
        rumble: () => {}, 
      });
    };

    window.addEventListener('gamepadconnected',    onConnect    as EventListener);
    window.addEventListener('gamepaddisconnected', onDisconnect as EventListener);

    
    if (navigator.getGamepads) {
      const initial = Array.from(navigator.getGamepads()).filter(Boolean);
      if (initial.length > 0 && initial[0]) {
        gamepadIndexRef.current = initial[0].index;
        const isDualSense = checkIsDualSense(initial[0].id);
        setStatus({
          connected: true,
          gamepadName: initial[0].id,
          isDualSense,
          rumble,
        });
        startPolling();
      }
    }

    return () => {
      window.removeEventListener('gamepadconnected',    onConnect    as EventListener);
      window.removeEventListener('gamepaddisconnected', onDisconnect as EventListener);
      stopPolling();
    };
  }, []); 

  return status;
}
