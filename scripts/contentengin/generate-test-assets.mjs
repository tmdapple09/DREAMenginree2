#!/usr/bin/env node
import { execFile } from 'node:child_process';
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const repoRoot = process.cwd();
const sandboxRoot = path.join(repoRoot, 'tests/contentengin/test-assets/sandbox');
const recipesDir = path.join(sandboxRoot, 'recipes');
const exportsDir = path.join(sandboxRoot, 'exports');

async function runPnpmCe(args) {
  const { stdout, stderr } = await execFileAsync('pnpm', ['ce', ...args], {
    cwd: repoRoot,
    maxBuffer: 1024 * 1024 * 16,
  });
  if (stdout.trim()) process.stdout.write(`${stdout.trim()}\n`);
  if (stderr.trim()) process.stderr.write(`${stderr.trim()}\n`);
}

function assetIdFromRecipeFile(fileName) {
  return `test-${fileName.replace(/\.recipe\.json$/, '')}`;
}

async function main() {
  await rm(exportsDir, { recursive: true, force: true });
  await mkdir(exportsDir, { recursive: true });

  const recipeFiles = (await readdir(recipesDir))
    .filter((file) => file.endsWith('.recipe.json'))
    .sort();

  const generated = [];
  for (const recipeFile of recipeFiles) {
    const recipePath = path.join(recipesDir, recipeFile);
    const assetId = assetIdFromRecipeFile(recipeFile);
    const outputPath = path.join(exportsDir, assetId, 'model.glb');
    await runPnpmCe(['build', '--recipe', recipePath, '--out', outputPath]);
    await runPnpmCe(['validate', '--recipe', recipePath]);
    generated.push(path.relative(repoRoot, path.dirname(outputPath)).replaceAll(path.sep, '/'));
  }

  await writeFile(
    path.join(exportsDir, 'GENERATED_ASSETS.json'),
    `${JSON.stringify({ generatedAt: new Date().toISOString(), assets: generated }, null, 2)}\n`,
  );

  process.stdout.write(`Generated ${generated.length} ContentEngin test asset bundles:\n${generated.map((item) => `- ${item}`).join('\n')}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
