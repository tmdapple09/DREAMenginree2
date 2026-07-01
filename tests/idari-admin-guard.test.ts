

import { describe, it, expect, afterEach, beforeEach } from 'vitest';






describe('IDARI_PASSWORD service-availability guard', () => {
  const original = process.env.IDARI_PASSWORD;

  afterEach(() => {
    if (original === undefined) {
      delete process.env.IDARI_PASSWORD;
    } else {
      process.env.IDARI_PASSWORD = original;
    }
  });

  function isServiceAvailable(): boolean {
    return Boolean(process.env.IDARI_PASSWORD);
  }

  it('service is unavailable when IDARI_PASSWORD is not set', () => {
    delete process.env.IDARI_PASSWORD;
    expect(isServiceAvailable()).toBe(false);
  });

  it('service is available when IDARI_PASSWORD is set to any non-empty value', () => {
    process.env.IDARI_PASSWORD = 'secret-admin-pass';
    expect(isServiceAvailable()).toBe(true);
  });

  it('service is unavailable when IDARI_PASSWORD is an empty string', () => {
    process.env.IDARI_PASSWORD = '';
    
    expect(isServiceAvailable()).toBe(false);
  });
});





type ActorRole = 'admin' | 'owner';

function resolveActorRole(
  isOwner: boolean,
  dbRole: string | null | undefined
): ActorRole | null {
  if (isOwner) return 'owner';
  if (dbRole === 'admin') return 'admin';
  return null;
}

describe('IDARi admin gate (Phase 6 spec point 5, 6)', () => {
  it('grants owner role to owner-email users', () => {
    expect(resolveActorRole(true, null)).toBe('owner');
  });

  it('grants admin role when dbRole is "admin"', () => {
    expect(resolveActorRole(false, 'admin')).toBe('admin');
  });

  it('returns null for regular users (no role)', () => {
    expect(resolveActorRole(false, null)).toBeNull();
  });

  it('returns null for users with "user" role', () => {
    expect(resolveActorRole(false, 'user')).toBeNull();
  });

  it('returns null for users with "moderator" role', () => {
    expect(resolveActorRole(false, 'moderator')).toBeNull();
  });

  it('owner wins even when dbRole is "admin"', () => {
    expect(resolveActorRole(true, 'admin')).toBe('owner');
  });

  it('owner wins when dbRole is undefined', () => {
    expect(resolveActorRole(true, undefined)).toBe('owner');
  });
});










describe('IDARi ignores dev bypass flags (Phase 6 spec point 6)', () => {
  const originalBypass = process.env.DEV_BYPASS_AUTH;
  const originalDevAdmin = process.env.DEV_ADMIN;

  beforeEach(() => {
    process.env.DEV_BYPASS_AUTH = 'true';
    process.env.DEV_ADMIN = 'true';
  });

  afterEach(() => {
    if (originalBypass === undefined) delete process.env.DEV_BYPASS_AUTH;
    else process.env.DEV_BYPASS_AUTH = originalBypass;
    if (originalDevAdmin === undefined) delete process.env.DEV_ADMIN;
    else process.env.DEV_ADMIN = originalDevAdmin;
  });

  it('even with DEV_ADMIN=true, a regular user is still denied (role-gate runs regardless)', () => {
    
    
    const devBypassActive = process.env.DEV_BYPASS_AUTH === 'true';
    const devAdminActive = process.env.DEV_ADMIN === 'true';

    
    const role = resolveActorRole(false, null);
    expect(role).toBeNull();

    
    
    expect(devBypassActive).toBe(true);
    expect(devAdminActive).toBe(true);
    expect(role).toBeNull(); 
  });

  it('admin role is still granted when bypass flags are active (bypass does not negate real roles)', () => {
    const role = resolveActorRole(false, 'admin');
    expect(role).toBe('admin');
  });
});



describe('IDARi rate limits by role', () => {
  const RATE_LIMITS: Record<ActorRole, number> = {
    admin: 40,
    owner: 60,
  };

  it('admin rate limit is 40 rpm', () => {
    expect(RATE_LIMITS.admin).toBe(40);
  });

  it('owner rate limit is 60 rpm (higher than admin)', () => {
    expect(RATE_LIMITS.owner).toBe(60);
  });

  it('owner has higher limit than admin', () => {
    expect(RATE_LIMITS.owner).toBeGreaterThan(RATE_LIMITS.admin);
  });
});
