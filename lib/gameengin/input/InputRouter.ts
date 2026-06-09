import type { CartridgeInputEvent } from '../cartridge';

export interface GameRuntimeInputRouterOptions {
  readonly cartridgeId?: () => string | undefined;
  readonly emit: (event: CartridgeInputEvent) => void;
  readonly onError?: (error: unknown, phase: string) => void;
}

interface RemoteInputDetail {
  readonly action?: string;
  readonly active?: boolean;
  readonly source?: string;
}

function remoteSource(source: string | undefined): CartridgeInputEvent['source'] {
  if (source === 'mobile') return 'mobile';
  if (source === 'gamepad') return 'gamepad';
  return 'remote';
}

function isRemoteInputDetail(value: unknown): value is RemoteInputDetail {
  if (!value || typeof value !== 'object') return false;
  const detail = value as RemoteInputDetail;
  return typeof detail.action === 'string' && typeof detail.active === 'boolean';
}

export class GameRuntimeInputRouter {
  private readonly keysDown = new Set<string>();
  private readonly teardowns: Array<() => void> = [];
  private active = false;

  constructor(private readonly options: GameRuntimeInputRouterOptions) {}

  start(target: Window = window): void {
    if (this.active) return;
    this.active = true;
    this.attachKeyboard(target);
    this.attachRemote(target);
  }

  destroy(): void {
    for (const teardown of this.teardowns.splice(0)) teardown();
    this.keysDown.clear();
    this.active = false;
  }

  isKeyDown(key: string): boolean {
    return this.keysDown.has(key);
  }

  private attachKeyboard(target: Window): void {
    const dispatch = (type: 'keydown' | 'keyup', event: KeyboardEvent) => {
      if (type === 'keydown') this.keysDown.add(event.key);
      else this.keysDown.delete(event.key);

      this.emit({
        key: event.key,
        type,
        source: 'keyboard',
        cartridgeId: this.options.cartridgeId?.(),
        preventDefault: () => event.preventDefault(),
      });
    };

    const onKeyDown = (event: KeyboardEvent) => dispatch('keydown', event);
    const onKeyUp = (event: KeyboardEvent) => dispatch('keyup', event);

    target.addEventListener('keydown', onKeyDown);
    target.addEventListener('keyup', onKeyUp);

    this.teardowns.push(() => {
      target.removeEventListener('keydown', onKeyDown);
      target.removeEventListener('keyup', onKeyUp);
    });
  }

  private attachRemote(target: Window): void {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<unknown>).detail;
      if (!isRemoteInputDetail(detail)) return;

      this.emit({
        key: detail.action,
        type: 'remote',
        action: detail.action,
        active: detail.active,
        source: remoteSource(detail.source),
        cartridgeId: this.options.cartridgeId?.(),
        preventDefault: () => {},
      });
    };

    target.addEventListener('de-game-input', handler as EventListener);
    this.teardowns.push(() => target.removeEventListener('de-game-input', handler as EventListener));
  }

  private emit(event: CartridgeInputEvent): void {
    try {
      this.options.emit(event);
    } catch (error) {
      this.options.onError?.(error, 'input');
    }
  }
}
