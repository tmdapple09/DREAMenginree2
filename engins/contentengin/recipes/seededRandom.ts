export function seededRandom(seed: number): () => number { let state = seed >>> 0; return () => { state = Math.imul(1664525, state) + 1013904223; return ((state >>> 0) / 0xffffffff); }; }
export function pick<T>(rng:()=>number, values:readonly T[]):T { return values[Math.min(values.length-1, Math.floor(rng()*values.length))]!; }
