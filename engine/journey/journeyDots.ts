import type { LogJourneyDotInput } from '@/types/journey';





















export function logJourneyDot(dot: LogJourneyDotInput): void {
  try {
    fetch('/api/journey', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dot),
    }).catch(() => {
      
    });
  } catch {
    
  }
}


export async function hasJourneyDot(kind: string, surface?: string): Promise<boolean> {
  try {
    let url = `/api/journey?kind=${encodeURIComponent(kind)}&check=1`;
    if (surface) url += `&surface=${encodeURIComponent(surface)}`;
    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) return false;
    const data = await res.json() as { exists?: boolean };
    return Boolean(data.exists);
  } catch {
    return false;
  }
}
