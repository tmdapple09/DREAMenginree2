'use client';

import { registerCartridges } from '@/lib/gameengin/registerCartridges';
import { dreamOSBus } from '@/lib/runtime/dreamOSBus';
import { useEffect } from 'react';

export default function CartridgeRegistryBootstrap( ){
  useEffect(() => {
    try {
      const registered = registerCartridges();
      dreamOSBus.emit('game:cartridges-ready' as Parameters<typeof dreamOSBus.emit>[0], {
        registered,
      } as unknown as Parameters<typeof dreamOSBus.emit>[1]);
    } catch (error) {
      dreamOSBus.emit('game:cartridges-failed' as Parameters<typeof dreamOSBus.emit>[0], {
        message: error instanceof Error ? error.message : 'Cartridge registry bootstrap failed.',
      } as unknown as Parameters<typeof dreamOSBus.emit>[1]);
      console.warn('[GameEngin] Cartridge registry bootstrap failed.', error);
    }
  }, []);

  return null;
}
