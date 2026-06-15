import { execFile } from 'child_process';
import { mkdir } from 'fs/promises';
import path from 'path';
import { promisify } from 'util';
import { createSkeleton } from './fitArmature';
import type { RiggingRequest } from './rigTypes';
export type { RigStandard, RiggingRequest } from './rigTypes';
export { createSkeleton };
const execFileAsync = promisify(execFile);
export async function runRiggingPipeline(request: RiggingRequest): Promise<string> {
  await mkdir(request.outputDir, { recursive: true });
  const outputPath = path.join(request.outputDir, 'rigged.glb');
  await execFileAsync('blender', ['--background', '--python', 'scripts/contentengin/blender-auto-rig.py', '--', '--input', request.inputGlb, '--output', outputPath, '--standard', request.standard, '--max-weights', String(request.maxWeightsPerVertex)], { timeout: 1000 * 60 * 20, maxBuffer: 1024 * 1024 * 20 });
  return outputPath;
}
