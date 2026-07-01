

import { describe, it, expect } from 'vitest';
import { CRASH_REPORT_MAX_BYTES as SERVER_CAP } from '@/engins/gameengin/brain-reader';
import { CRASH_REPORT_MAX_BYTES as CLIENT_CAP } from '@/components/gameengin/dream.CrashReportModal';
import { CartridgeErrorBoundary } from '@/components/gameengin/dream.cartridge.CartridgeErrorBoundary';

describe('Crash modal — client/server payload cap parity', () => {
  it('client cap matches server cap (16 KB)', () => {
    expect(CLIENT_CAP).toBe(SERVER_CAP);
    expect(CLIENT_CAP).toBe(16 * 1024);
  });
});

describe('CartridgeErrorBoundary', () => {
  it('getDerivedStateFromError marks crashed=true', () => {
    expect(CartridgeErrorBoundary.getDerivedStateFromError()).toEqual({ crashed: true });
  });
});

describe('CartridgeLauncher integration', () => {
  it('imports CrashReportModal + CartridgeErrorBoundary at module load', async () => {
    
    
    const launcher = await import('@/components/gameengin/dream.cartridge.CartridgeLauncher');
    expect(typeof launcher.default).toBe('function');
  });
});
