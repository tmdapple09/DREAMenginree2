import demoGameConfig from './config/demoGameConfig';
import type { GameConfig } from './GameEnginCore';
import { GameEnginConfigError, GameEnginCore } from './GameEnginCore';
import { toErrorMessage } from '@/utils/index';






export async function launch(
  canvas: HTMLCanvasElement,
  config: GameConfig = demoGameConfig,
): Promise<{ core: GameEnginCore; stop: () => void }> {
  console.debug('🚀 DREAMengin GameEngin starting…');

  const core = new GameEnginCore();

  try {
    await core.start(canvas, config);
    console.debug('✅ GameEngin runtime is active.');
  } catch (err: unknown) {
    if (err instanceof GameEnginConfigError) {
      console.error('❌ Configuration error:', toErrorMessage(err));
    } else {
      console.error('❌ Failed to start GameEngin:', err);
    }
    throw err;
  }

  const stop = (): void => {
    core.stop();
    console.debug('🛑 GameEngin runtime stopped.');
  };

  
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', stop, { once: true });
  }

  return { core, stop };
}


async function autoLaunch(): Promise<void> {
  if (typeof document === 'undefined') return; 

  const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement | null;
  if (!canvas) {
    console.warn(
      '[DREAMengin] autoLaunch: no #gameCanvas element found. ' +
      'Add <canvas id="gameCanvas"> to your HTML or call launch() manually.',
    );
    return;
  }

  await launch(canvas, demoGameConfig);
}


autoLaunch().catch(console.error);
