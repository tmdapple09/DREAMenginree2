import type { gsap as GsapType } from 'gsap';



let _gsap: typeof GsapType | null = null;


export async function getGsap(): Promise<typeof GsapType> {
  if (typeof window === 'undefined') {
    
    throw new Error('getGsap() must only be called in the browser');
  }
  if (!_gsap) {
    const mod = await import('gsap');
    _gsap = mod.gsap ?? (mod as any as { default: typeof GsapType }).default;
  }
  return _gsap!;
}
