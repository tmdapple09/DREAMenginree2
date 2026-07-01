

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';


const originalEnv = { ...process.env };

afterEach(() => {
  
  for (const key of Object.keys(process.env)) {
    if (!(key in originalEnv)) delete process.env[key];
  }
  Object.assign(process.env, originalEnv);
  vi.resetModules();
});

describe('isDevBypassActive', () => {
  it('returns false when env var is absent', async () => {
    delete process.env.DEV_BYPASS_AUTH;
    const { isDevBypassActive } = await import('@/engine/dev-bypass');
    expect(isDevBypassActive()).toBe(false);
  });

  it('returns false when env var is "false"', async () => {
    process.env.DEV_BYPASS_AUTH = 'false';
    const { isDevBypassActive } = await import('@/engine/dev-bypass');
    expect(isDevBypassActive()).toBe(false);
  });

  it('returns true only when env var is exactly "true"', async () => {
    process.env.DEV_BYPASS_AUTH = 'true';
    const { isDevBypassActive } = await import('@/engine/dev-bypass');
    expect(isDevBypassActive()).toBe(true);
  });

  it('returns false in production even when env var is "true" (hard production block)', async () => {
    process.env.DEV_BYPASS_AUTH = 'true';
    process.env.NODE_ENV = 'production';
    const { isDevBypassActive } = await import('@/engine/dev-bypass');
    expect(isDevBypassActive()).toBe(false);
  });
});

describe('isDevAdminBypassActive', () => {
  it('returns false when both env vars are absent', async () => {
    delete process.env.DEV_BYPASS_AUTH;
    delete process.env.DEV_ADMIN;
    const { isDevAdminBypassActive } = await import('@/engine/dev-bypass');
    expect(isDevAdminBypassActive()).toBe(false);
  });

  it('returns false when only DEV_ADMIN is set (req #32)', async () => {
    delete process.env.DEV_BYPASS_AUTH;
    process.env.DEV_ADMIN = 'true';
    const { isDevAdminBypassActive } = await import('@/engine/dev-bypass');
    expect(isDevAdminBypassActive()).toBe(false);
  });

  it('returns false when only DEV_BYPASS_AUTH is set', async () => {
    process.env.DEV_BYPASS_AUTH = 'true';
    delete process.env.DEV_ADMIN;
    const { isDevAdminBypassActive } = await import('@/engine/dev-bypass');
    expect(isDevAdminBypassActive()).toBe(false);
  });

  it('returns true only when BOTH env vars are "true" (req #32)', async () => {
    process.env.DEV_BYPASS_AUTH = 'true';
    process.env.DEV_ADMIN = 'true';
    const { isDevAdminBypassActive } = await import('@/engine/dev-bypass');
    expect(isDevAdminBypassActive()).toBe(true);
  });

  it('returns false in production even when both env vars are "true" (hard production block)', async () => {
    process.env.DEV_BYPASS_AUTH = 'true';
    process.env.DEV_ADMIN = 'true';
    process.env.NODE_ENV = 'production';
    const { isDevAdminBypassActive } = await import('@/engine/dev-bypass');
    expect(isDevAdminBypassActive()).toBe(false);
  });
});
