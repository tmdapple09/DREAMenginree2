

import { beforeEach, describe, expect, it, vi } from 'vitest';




const redirectMock = vi.hoisted(() =>
  vi.fn((path: string) => {
    throw new Error(`redirect:${path}`);
  }),
);
const connectionMock = vi.hoisted(() => vi.fn(async () => undefined));
const createServerClientMock = vi.hoisted(() => vi.fn());
const safeGetUserMock = vi.hoisted(() => vi.fn());
const isDevBypassActiveMock = vi.hoisted(() => vi.fn(() => false));
const daydreamShellMock = vi.hoisted(() => vi.fn(() => null));
const gamesHubMock = vi.hoisted(() => vi.fn(() => null));
const autoOpenGameEnginMock = vi.hoisted(() => vi.fn(() => null));
const openDaydreamSideBButtonMock = vi.hoisted(() => vi.fn(() => null));
const authenticatedPageHeaderMock = vi.hoisted(() => vi.fn(() => null));

vi.mock('next/navigation', () => ({ redirect: redirectMock }));
vi.mock('next/server', () => ({ connection: connectionMock }));
vi.mock('next/dynamic', () => ({ default: vi.fn(() => vi.fn(() => null)) }));
vi.mock('@/supabase/server/serverClient', () => ({ createServerClient: createServerClientMock }));
vi.mock('@/supabase/client/safeGetUser', () => ({ safeGetUser: safeGetUserMock }));
vi.mock('@/engine/dev-bypass', () => ({ isDevBypassActive: isDevBypassActiveMock }));
vi.mock('@/components/daydream/dream.shell.DaydreamShell', () => ({
  default: daydreamShellMock,
}));
vi.mock('@/components/games/dream.GamesHub', () => ({ default: gamesHubMock }));
vi.mock('@/engins/autoopen/dream.AutoOpenGameEngin', () => ({
  default: autoOpenGameEnginMock,
}));
vi.mock('@/components/daydream/dream.OpenDaydreamSideBButton', () => ({
  default: openDaydreamSideBButtonMock,
}));
vi.mock('@/components/ui/dream.AuthenticatedPageHeader', () => ({
  default: authenticatedPageHeaderMock,
}));
vi.mock('@/engins/gameengin/games/quality-plan', () => ({
  GAME_QUALITY_PILLARS: [],
}));
vi.mock('@/engins/gameengin/games/navigation', () => ({
  buildGameLaunchHref: vi.fn(
    (id: string) => `/daydream/games?game=${id}&openEngin=true`,
  ),
}));
vi.mock('next/link', () => ({ default: vi.fn(() => null) }));
vi.mock('lucide-react', () => ({
  Gamepad2: vi.fn(() => null),
  Play: vi.fn(() => null),
  Sparkles: vi.fn(() => null),
  Zap: vi.fn(() => null),
}));



describe('app/daydream/games/page auth gating', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();

    
    createServerClientMock.mockResolvedValue({});
    safeGetUserMock.mockResolvedValue(null);
    isDevBypassActiveMock.mockReturnValue(false);
  });

  it('redirects to login with the games route preserved when there is no user and dev bypass is off', async () => {
    const { default: GamesDaydreamPage } = await import('@/app/daydream/games/page');

    await expect(GamesDaydreamPage()).rejects.toThrow('redirect:/login');
    expect(redirectMock).toHaveBeenCalledWith('/login?next=%2Fdaydream%2Fgames');
  });

  it('does NOT crash and renders the shell in dev-bypass mode (simulates unconfigured Supabase)', async () => {
    
    
    isDevBypassActiveMock.mockReturnValue(true);
    safeGetUserMock.mockResolvedValue(null);

    const { default: GamesDaydreamPage } = await import('@/app/daydream/games/page');
    
    await expect(GamesDaydreamPage()).resolves.not.toThrow();
    expect(redirectMock).not.toHaveBeenCalled();
  });

  it('does NOT crash when safeGetUser returns null (disabled-client / unconfigured-Supabase scenario)', async () => {
    
    
    
    
    
    
    
    safeGetUserMock.mockResolvedValue(null);
    isDevBypassActiveMock.mockReturnValue(true);

    const { default: GamesDaydreamPage } = await import('@/app/daydream/games/page');
    await expect(GamesDaydreamPage()).resolves.not.toThrow();
    expect(redirectMock).not.toHaveBeenCalled();
  });

  it('renders the DaydreamShell when a valid user is returned', async () => {
    const user = { id: 'user-abc', email: 'player@example.com' };
    safeGetUserMock.mockResolvedValue(user);

    const { default: GamesDaydreamPage } = await import('@/app/daydream/games/page');
    const result = await GamesDaydreamPage();

    expect(redirectMock).not.toHaveBeenCalled();
    
    expect(result).toMatchObject({ type: daydreamShellMock });
  });

  it('calls safeGetUser with the supabase client returned by createServerClient', async () => {
    const fakeClient = { auth: {} };
    createServerClientMock.mockResolvedValue(fakeClient);
    safeGetUserMock.mockResolvedValue({ id: 'user-xyz' });

    const { default: GamesDaydreamPage } = await import('@/app/daydream/games/page');
    await GamesDaydreamPage();

    expect(safeGetUserMock).toHaveBeenCalledWith(fakeClient);
  });

  it('awaits connection() before any auth or render work', async () => {
    const order: string[] = [];
    connectionMock.mockImplementation(async () => {
      order.push('connection');
    });
    safeGetUserMock.mockImplementation(async () => {
      order.push('safeGetUser');
      return { id: 'u1' };
    });

    const { default: GamesDaydreamPage } = await import('@/app/daydream/games/page');
    await GamesDaydreamPage();

    expect(order).toEqual(['connection', 'safeGetUser']);
  });
});
