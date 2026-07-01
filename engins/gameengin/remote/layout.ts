


export type RemoteOrientation = 'portrait' | 'landscape';


export interface RemoteAllocation {
  
  gameView: number;
  
  controlArea: number;
  
  leftBar?: number;
  
  rightBar?: number;
}

export const PORTRAIT_LAYOUT: RemoteAllocation = Object.freeze({
  gameView: 0.70,
  controlArea: 0.30,
});

export const LANDSCAPE_LAYOUT: RemoteAllocation = Object.freeze({
  gameView: 0.70,
  leftBar: 0.15,
  rightBar: 0.15,
  controlArea: 0.30, 
});


export const LEFT_JOYSTICK_RADIUS_MM = 13.5;


export const RIGHT_JOYSTICK_RADIUS_RATIO = 1.10;
export const RIGHT_JOYSTICK_RADIUS_MM = LEFT_JOYSTICK_RADIUS_MM * RIGHT_JOYSTICK_RADIUS_RATIO;


export function radiusMmToPx(mm: number, dpi = 160): number {
  return (mm / 25.4) * dpi;
}


export const HUD_ALLOWED_ELEMENTS = Object.freeze([
  'lives',
  'points',
  'timer',
  'streak',
  'branding',
] as const);

export type HudAllowedElement = (typeof HUD_ALLOWED_ELEMENTS)[number];

export function isHudElementAllowed(element: string): element is HudAllowedElement {
  return (HUD_ALLOWED_ELEMENTS as readonly string[]).includes(element);
}


export function layoutFor(orientation: RemoteOrientation): RemoteAllocation {
  return orientation === 'portrait' ? PORTRAIT_LAYOUT : LANDSCAPE_LAYOUT;
}
