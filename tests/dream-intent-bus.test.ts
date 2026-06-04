import { beforeEach, describe, expect, it, vi } from 'vitest';
import { dreamOSBus } from '@/lib/runtime/dreamOSBus';
import { dispatchDreamIntent, registerDreamIntentHandler } from '@/lib/dreams/dreamIntentBus';

const context = {
  actorId: 'user-1',
  runtimeId: 'homedream',
  surfaceRuntimeIds: ['homedream', 'dreamspace'],
};

describe('Dream intent runtime path', () => {
  beforeEach(() => {
    dreamOSBus.clearAll();
  });

  it('routes typed Dream intents through the existing dreamOSBus handler path', async () => {
    const handler = vi.fn();
    registerDreamIntentHandler('dream:move', handler);

    const result = await dispatchDreamIntent({
      type: 'dream:move',
      payload: {
        dreamId: 'dream-1',
        placement: {
          surface: 'dreamspace',
          x: 12,
          y: 34,
          width: 320,
          height: 240,
          zIndex: 4,
        },
      },
    }, context, 'dreamspace');

    expect(result).toEqual({ handled: true, replayed: false });
    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({ dreamId: 'dream-1' }),
      expect.objectContaining({
        type: 'dream:move',
        runtimeId: 'homedream',
        data: expect.objectContaining({
          sourceRuntimeId: 'homedream',
          targetRuntimeId: 'dreamspace',
          capability: 'write',
          domains: ['visual', 'physics'],
        }),
      }),
    );
  });

  it('replays identical Dream intents by deterministic envelope id', async () => {
    const handler = vi.fn();
    registerDreamIntentHandler('dream:open', handler);
    const intent = {
      type: 'dream:open' as const,
      payload: { dreamId: 'dream-2', surface: 'homedream' as const },
    };

    expect(await dispatchDreamIntent(intent, context)).toEqual({ handled: true, replayed: false });
    expect(await dispatchDreamIntent(intent, context)).toEqual({ handled: true, replayed: true });
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('rejects fake domains by using dreamOSBus.registerIntent validation', () => {
    expect(() =>
      registerDreamIntentHandler('dream:share', vi.fn(), ['fake' as never]),
    ).toThrow('known semantic domains');
  });
});
