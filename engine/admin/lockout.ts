import { createServiceClient } from '@/supabase/server/serverClient';






let _cachedLocked: boolean | null = null;


export async function isAdminLocked(): Promise<boolean> {
  
  if (process.env.ADMIN_LOCKOUT === '1') return true;

  
  if (process.env.ADMIN_UNLOCK_KEY) return false;

  
  if (_cachedLocked === true) return true;

  
  try {
    const supabase = await createServiceClient();
    const { data } = await supabase
      .from('admin_lock')
      .select('locked')
      .single();
    if (data?.locked) {
      _cachedLocked = true;
      return true;
    }
  } catch {
    
    
    
  }

  return false;
}


export async function triggerAdminLockout(): Promise<void> {
  
  
  _cachedLocked = true;

  
  try {
    const supabase = await createServiceClient();
    await supabase.from('admin_lock').upsert({
      id: true,
      locked: true,
      locked_at: new Date().toISOString(),
      reason: 'Incorrect admin password attempt',
    });
  } catch {
    
    
    console.error('[admin-lockout] Failed to persist lockout to Supabase. ' +
      'Set ADMIN_LOCKOUT=1 as a fallback until the DB is reachable.');
  }
}

export const OWNER_EMAIL = process.env.OWNER_EMAIL || 'Appthemanger@gmail.com';


export function isOwner(email?: string | null): boolean {
  if (!email) return false;
  return email.toLowerCase() === OWNER_EMAIL.toLowerCase();
}





const BLOCKED_DOMAINS: string[] = [];


export function isDomainBlocked(req: Request): boolean {
  if (BLOCKED_DOMAINS.length === 0) return false;
  const headers = [
    req.headers.get('origin') ?? '',
    req.headers.get('referer') ?? '',
    req.headers.get('host') ?? '',
  ];
  return headers.some((h) =>
    BLOCKED_DOMAINS.some((d) => h.toLowerCase().includes(d))
  );
}
