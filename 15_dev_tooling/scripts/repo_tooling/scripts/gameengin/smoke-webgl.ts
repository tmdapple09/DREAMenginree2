import { CARTRIDGE_MANIFEST } from '../../engins/gameengin/cartridges/manifest';

const missingFallback = CARTRIDGE_MANIFEST.filter((entry) => entry.launch.fallbackBackend === undefined);
if (missingFallback.length > 0) throw new Error(`Missing fallback backend: ${missingFallback.map((entry) => entry.id).join(', ')}`);
console.log(JSON.stringify({ ok: true, cartridges: CARTRIDGE_MANIFEST.length }, null, 2));
