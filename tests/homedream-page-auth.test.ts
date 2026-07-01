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
const homeSystemMock = vi.hoisted(() => vi.fn(() => null));

vi.mock('next/navigation', () => ({
  redirect: redirectMock,
}));

vi.mock('next/server', () => ({
  connection: connectionMock,
}));

vi.mock('@/supabase/server/serverClient', () => ({
  createServerClient: createServerClientMock,
}));

vi.mock('@/supabase/client/safeGetUser', () => ({
  safeGetUser: safeGetUserMock,
}));

vi.mock('@/engine/dev-bypass', () => ({
  isDevBypassActive: isDevBypassActiveMock,
}));

vi.mock('@/app/dreamdmbar/_components/DreamBarDataBridge', () => ({
  default: homeSystemMock,
}));

vi.mock('@/dr-eams/ai/triad', () => ({
  isOwnerEmail: vi.fn(() => false),
}));

vi.mock('@/engins/contentengin/media/postMedia', () => ({
  getPrimaryPostMediaUrl: vi.fn(() => null),
}));

describe('app/dreamdmbar/layout auth gating', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    createServerClientMock.mockResolvedValue({
      
      
      from: vi.fn(() => {
        throw new Error('should not fetch profile/feed data in this test');
      }),
    });
    safeGetUserMock.mockResolvedValue(null);
    isDevBypassActiveMock.mockReturnValue(false);
  });

  it('redirects to login when there is no user and dev bypass is off', async () => {
    const { default: DreamDMBarLayout } = await import('@/app/dreamdmbar/layout');

    await expect(DreamDMBarLayout({ children: null })).rejects.toThrow('redirect:/login');
    expect(redirectMock).toHaveBeenCalledWith('/login');
  }, 10_000);

  it('renders the home system in dev bypass mode without a Supabase user', async () => {
    isDevBypassActiveMock.mockReturnValue(true);

    const { default: DreamDMBarLayout } = await import('@/app/dreamdmbar/layout');
    const result = await DreamDMBarLayout({ children: null });
    const children = Array.isArray(result?.props?.children) ? result.props.children : [];
    const bridgeNode = children.find((child: { type?: unknown }) => child?.type === homeSystemMock);

    expect(redirectMock).not.toHaveBeenCalled();
    expect(bridgeNode).toMatchObject({
      type: homeSystemMock,
      props: {
        userId: 'dev-bypass-user',
        profile: null,
        initialPosts: [],
        isAdmin: false,
      },
    });
  });
});
