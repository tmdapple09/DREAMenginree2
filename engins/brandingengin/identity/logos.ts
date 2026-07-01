

export const LOGO_PATHS = [
  '/images/logo1.PNG',
  '/images/logo2.PNG',
  '/images/logo3.PNG',
] as const;

export type LogoPath = (typeof LOGO_PATHS)[number];


let _cached: LogoPath | null = null;


export function getRandomLogo(): LogoPath {
  if (_cached) return _cached;

  
  const arr: LogoPath[] = [...LOGO_PATHS];

  
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  _cached = arr[0] ?? LOGO_PATHS[0];
  return _cached;
}


export function resetLogoCache(): void {
  _cached = null;
}
