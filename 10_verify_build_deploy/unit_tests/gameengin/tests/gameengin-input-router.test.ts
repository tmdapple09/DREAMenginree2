import { describe, expect, it } from 'vitest';
import { GameRuntimeInputRouter } from '@/engins/gameengin/input';
import type { CartridgeInputEvent } from '@/engins/gameengin/cartridge';

class FakeWindow extends EventTarget {
  isSecureContext = true;
}

describe('GameRuntimeInputRouter', () => {
  it('normalizes keyboard input and key state', () => {
    const events: CartridgeInputEvent[] = [];
    const target = new FakeWindow() as unknown as Window;
    const router = new GameRuntimeInputRouter({ emit: (event) => events.push(event), cartridgeId: () => 'test-cart' });

    router.start(target);
    target.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
    expect(router.isKeyDown('ArrowUp')).toBe(true);
    target.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowUp' }));
    expect(router.isKeyDown('ArrowUp')).toBe(false);
    router.destroy();

    expect(events.map((event) => event.type)).toEqual(['keydown', 'keyup']);
    expect(events[0]?.cartridgeId).toBe('test-cart');
  });

  it('normalizes GameRemote custom events', () => {
    const events: CartridgeInputEvent[] = [];
    const target = new FakeWindow() as unknown as Window;
    const router = new GameRuntimeInputRouter({ emit: (event) => events.push(event) });

    router.start(target);
    target.dispatchEvent(new CustomEvent('de-game-input', { detail: { action: 'primary', active: true, source: 'mobile' } }));
    router.destroy();

    expect(events[0]).toMatchObject({ type: 'remote', action: 'primary', active: true, source: 'mobile' });
  });
});
