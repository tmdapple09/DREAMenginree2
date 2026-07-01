









const SWAP_KEYS = {
  code: 'de-code-swap',
  lab:  'de-lab-swap',
} as const;

const ALL_DOMAINS = Object.keys(SWAP_KEYS) as SwapDomain[];







export type SwapDomain = keyof typeof SWAP_KEYS;




export function getSwap(domain: SwapDomain): boolean {
  if (typeof localStorage === 'undefined') return false;
  try {
    return localStorage.getItem(SWAP_KEYS[domain]) === 'true';
  } catch {
    return false;
  }
}


export function setSwap(domain: SwapDomain, value: boolean): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(SWAP_KEYS[domain], String(value));
  } catch (err: unknown) {
    
    console.warn('[swapManager] Failed to persist swap state', { domain, err });
  }
}


export function toggleSwap(domain: SwapDomain): boolean {
  const next = !getSwap(domain);
  setSwap(domain, next);
  return next;
}


export function clearSwap(domain: SwapDomain): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.removeItem(SWAP_KEYS[domain]);
  } catch (err: unknown) {
    console.warn('[swapManager] Failed to clear swap state', { domain, err });
  }
}


export function getAllSwapStates(): Record<SwapDomain, boolean> {
  return Object.fromEntries(
    ALL_DOMAINS.map((domain) => [domain, getSwap(domain)]),
  ) as Record<SwapDomain, boolean>;
}


export function resetAllSwaps(): void {
  for (const domain of ALL_DOMAINS) {
    clearSwap(domain);
  }
}






