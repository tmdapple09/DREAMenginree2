import { CARTRIDGE_MANIFEST } from '../../lib/gameengin/cartridges/manifest';

const webgpu = CARTRIDGE_MANIFEST.filter((entry) => entry.launch.rendererFamily === 'webgpu' || entry.launch.backendPreference[0] === 'webgpu');
if (webgpu.length === 0) throw new Error('No WebGPU-first GameEngin cartridges are registered.');
console.log(JSON.stringify({ ok: true, webgpuCartridges: webgpu.map((entry) => entry.id) }, null, 2));
