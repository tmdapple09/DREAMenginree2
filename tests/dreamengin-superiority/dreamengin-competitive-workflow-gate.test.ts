import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();

function full(file: string) {
  return path.join(repoRoot, file);
}

function exists(file: string) {
  return fs.existsSync(full(file));
}

function read(file: string) {
  return fs.readFileSync(full(file), 'utf8');
}

function readIfExists(file: string) {
  return exists(file) ? read(file) : '';
}

function walk(dir: string, out: string[] = []) {
  const root = full(dir);
  if (!fs.existsSync(root)) return out;

  for (const item of fs.readdirSync(root)) {
    if (
      item === 'node_modules' ||
      item === '.next' ||
      item === 'dist' ||
      item === 'build' ||
      item === 'coverage' ||
      item === '.git'
    ) continue;

    const rel = path.join(dir, item);
    const abs = full(rel);
    const stat = fs.statSync(abs);

    if (stat.isDirectory()) walk(rel, out);
    else if (/\.(ts|tsx|json|md|mjs|css)$/.test(item)) out.push(rel);
  }

  return out;
}

function sourceUnder(...dirs: string[]) {
  return dirs.flatMap((dir) => walk(dir)).map(readIfExists).join('\n');
}

function expectNoFileContains(files: string[], pattern: RegExp, label: string) {
  const matched = files.some((file) => pattern.test(readIfExists(file)));
  expect(matched, label).toBe(false);
}

const DREAMENGIN_COMPETITOR_STANDARDS = [
  {
    competitor: 'Canva',
    strength: 'fast mobile-first visual creation with very little friction',
    dreamenginMustBeatBy: 'asset or post creation must stay focused, thumb-first, and avoid visible internal architecture clutter',
  },
  {
    competitor: 'Adobe Creative Cloud',
    strength: 'professional multi-tool creative suite',
    dreamenginMustBeatBy: 'multiple creative domains must share one runtime/state model instead of separate app silos',
  },
  {
    competitor: 'Figma',
    strength: 'collaborative live interface state',
    dreamenginMustBeatBy: 'HomeDream, DreamSpace, and runtime regions must share state through runtime/context boundaries',
  },
  {
    competitor: 'Runway',
    strength: 'AI/media generation pipeline',
    dreamenginMustBeatBy: 'media/reference input must become a structured asset/output contract, not loose generated content',
  },
  {
    competitor: 'Blender',
    strength: '3D modeling and export',
    dreamenginMustBeatBy: 'ContentEngin must produce editable, validated, game-ready asset bundles',
  },
  {
    competitor: 'Meshy / Tripo / Luma',
    strength: 'fast 3D generation',
    dreamenginMustBeatBy: 'generation must include recipe, validation, runtime profile, performance plan, and export manifest',
  },
  {
    competitor: 'Unity / Unreal / UEFN',
    strength: 'game runtime and asset ingestion',
    dreamenginMustBeatBy: 'ContentEngin assets must hand off to GameEngin cartridge/runtime format',
  },
  {
    competitor: 'Roblox Studio',
    strength: 'creator games plus social distribution',
    dreamenginMustBeatBy: 'GameEngin must keep playable cartridges separate from decorative filler and support creator handoff',
  },
  {
    competitor: 'Cursor / Replit / Windsurf',
    strength: 'AI coding workflow',
    dreamenginMustBeatBy: 'CodeEngin must operate only inside user-owned workspaces and never expose deployed source by default',
  },
  {
    competitor: 'Suno / Udio / BandLab',
    strength: 'music creation and shareable sessions',
    dreamenginMustBeatBy: 'StarMakerEngin must have real project/session/export concepts, not just a tile',
  },
  {
    competitor: 'TikTok / Instagram / YouTube',
    strength: 'discovery and creator distribution',
    dreamenginMustBeatBy: 'DreamR/HomeDream feed items must connect into creation actions instead of passive scrolling',
  },
] as const;

describe('DREAMengin competitive standard map', () => {
  it('turns competitor strengths into required DREAMengin superiority gates', () => {
    expect(DREAMENGIN_COMPETITOR_STANDARDS.length).toBeGreaterThanOrEqual(10);

    for (const standard of DREAMENGIN_COMPETITOR_STANDARDS) {
      expect(standard.competitor.length).toBeGreaterThan(0);
      expect(standard.strength.length).toBeGreaterThan(0);
      expect(standard.dreamenginMustBeatBy.length).toBeGreaterThan(0);
    }
  });
});

describe('beats Canva: mobile-first creation must stay focused and uncluttered', () => {
  it('ContentEngin creation surface does not show internal upgrade/audit/brag panels', () => {
    const workspace = readIfExists('engins/contentengin/ImplicitAssetWorkspace.tsx');

    expect(workspace).toContain('AssetViewport');
    expect(workspace).not.toMatch(/upgrade-deck/i);
    expect(workspace).not.toMatch(/2026 mobile-first upgrades/i);
    expect(workspace).not.toMatch(/upgrade status/i);
    expect(workspace).not.toMatch(/architecture status/i);
    expect(workspace).not.toMatch(/superiority panel/i);
  });

  it('mobile zoom is gesture-owned, not visible plus/minus workspace controls', () => {
    const workspace = readIfExists('engins/contentengin/ImplicitAssetWorkspace.tsx');

    expect(workspace).not.toContain('Zoom In');
    expect(workspace).not.toContain('Zoom Out');
    expect(workspace).not.toContain('WORKSPACE View');
    expect(workspace).not.toMatch(/zoom\s*\+/i);
    expect(workspace).not.toMatch(/zoom\s*-/i);
  });

  it('primary ContentEngin controls stay limited to actual creation actions', () => {
    const workspace = readIfExists('engins/contentengin/ImplicitAssetWorkspace.tsx');

    for (const required of ['Upload Image', 'Upload GLB', 'Process', 'Edit', 'Download']) {
      expect(workspace).toContain(required);
    }

    expect(workspace).not.toMatch(/leaderboard|achievement|trending|promo|upgrade card|marketing panel/i);
  });
});

describe('beats Adobe: one creative OS instead of separate creative apps', () => {
  it('major Engins exist as production domains under one repo/runtime', () => {
    const source = sourceUnder('engins', 'engine', 'components/runtime', 'dreamdmbar');

    for (const engin of [
      /ContentEngin|contentengin/,
      /GameEngin|gameengin/,
      /CodeEngin|codeengin/,
      /StarMakerEngin|starmaker/,
      /BrandingEngin|branding|brandengin/,
      /LabEngin|labengin/,
    ]) {
      expect(source).toMatch(engin);
    }
  });

  it('cross-domain behavior is routed through runtime/intents/capabilities, not isolated app pages', () => {
    const source = sourceUnder('engine', 'engins', 'components/runtime', 'dreamdmbar');

    expect(source).toMatch(/Intent|intent/);
    expect(source).toMatch(/Runtime|runtime/);
    expect(source).toMatch(/Capability|capability/);
    expect(source).toMatch(/RuleSet|ruleset|rule-set/);
    expect(source).toMatch(/Snapshot|snapshot|state/);
  });
});

describe('beats Figma: shared live surface/runtime state', () => {
  it('root layout keeps shared runtime providers mounted above surfaces', () => {
    const layout = readIfExists('app/layout.tsx');

    expect(layout).toContain('DreamSystemProvider');
    expect(layout).toContain('DualRuntimeContainer');
    expect(layout).toMatch(/OSProvider|CustomizeModeProvider/);
  });

  it('DreamDMBar participates in runtime surface coordination', () => {
    const source = sourceUnder('dreamdmbar', 'components/runtime', 'engine/runtime');

    expect(source).toMatch(/DreamSystemContext|DreamSystemProvider/);
    expect(source).toMatch(/HomeDream|DreamSpace|dominantRegion|split/i);
    expect(source).toMatch(/runtime|surface|state/i);
  });
});

describe('beats Runway: generated media must become structured outputs', () => {
  it('ContentEngin image/media input becomes source analysis or procedural asset data', () => {
    const source = sourceUnder('engins/contentengin', 'app/api/contentengin', 'tests/contentengin');

    expect(source).toMatch(/analyzeImageBytes|sourceImage|SourceImageAnalysis|photoAnalysis/i);
    expect(source).toMatch(/recipe|ContentRecipe/i);
    expect(source).toMatch(/asset-built|buildAsset|ContentAsset/i);
  });

  it('outputs have manifests and validation instead of loose generated files', () => {
    const manifest = readIfExists('engins/contentengin/pipeline/writeManifest.ts');
    const validate = readIfExists('engins/contentengin/pipeline/validate.ts');

    expect(manifest).toContain('contentengin.asset.manifest');
    expect(manifest).toContain('validation.json');
    expect(validate).toMatch(/gameReady|errors|warnings|metrics/);
  });
});

describe('beats Blender/Meshy/Tripo/Luma: 3D generation must be game-ready and editable', () => {
  it('ContentEngin asset type includes recipe, parts, materials, collision, LODs, validation, runtime profile, and performance plan', () => {
    const assetTypes = readIfExists('engins/contentengin/assetTypes.ts');

    for (const required of [
      'ContentRecipe',
      'PartNode',
      'MaterialDef',
      'CollisionBlock',
      'LodDef',
      'ValidationReport',
      'runtimeProfile',
      'performancePlan',
    ]) {
      expect(assetTypes).toContain(required);
    }
  });

  it('validation measures mesh quality plus runtime pressure', () => {
    const assetTypes = readIfExists('engins/contentengin/assetTypes.ts');
    const validate = readIfExists('engins/contentengin/pipeline/validate.ts');

    for (const metric of [
      'triangles',
      'vertices',
      'materials',
      'textures',
      'textureMaxResolution',
      'bones',
      'maxWeightsPerVertex',
      'glbSizeBytes',
      'drawCalls',
      'estimatedRuntimeMemoryBytes',
      'mobileDesktopParityScore',
    ]) {
      expect(`${assetTypes}\n${validate}`).toContain(metric);
    }
  });

  it('GLB export is real and inspectable', () => {
    const exportGlb = readIfExists('engins/contentengin/pipeline/exportGlb.ts');
    const exportTest = readIfExists('tests/contentengin/contentengin-export.test.ts');

    expect(`${exportGlb}\n${exportTest}`).toMatch(/createGlbBuffer|inspectGlb/);
    expect(`${exportGlb}\n${exportTest}`).toMatch(/vertexCount|indexCount|meshPrimitiveCount/);
  });

  it('generated sandbox assets are recipe-driven and CI-generated, not committed binary junk', () => {
    const gitignore = readIfExists('.gitignore');
    const workflow = readIfExists('.github/workflows/contentengin-test-assets.yml');
    const generator = readIfExists('scripts/contentengin/generate-test-assets.mjs');

    expect(gitignore).toContain('tests/contentengin/test-assets/sandbox/exports/');
    expect(workflow).toContain('ContentEngin Test Assets');
    expect(workflow).toContain('Upload generated test assets');
    expect(generator).toMatch(/recipesDir|exportsDir|GENERATED_ASSETS/);
    expect(generator).toMatch(/pnpm.*ce|ce/);
  });
});

describe('beats Unity/Unreal/UEFN: assets must hand off into game runtime shape', () => {
  it('ContentEngin manifest exposes the fields GameEngin needs to ingest assets', () => {
    const manifest = readIfExists('engins/contentengin/pipeline/writeManifest.ts');

    for (const field of [
      'id',
      'type',
      'profile',
      'category',
      'subcategory',
      'gameReady',
      'files',
      'model.glb',
      'recipe.json',
      'validation.json',
      'thumbnail.webp',
    ]) {
      expect(manifest).toContain(field);
    }
  });

  it('GameEngin has a cartridge manifest/catalog boundary', () => {
    expect(exists('engins/gameengin/cartridges/manifest.ts')).toBe(true);

    const catalog = readIfExists('engins/gameengin/cartridges/manifest.ts');
    expect(catalog).toMatch(/cartridge|catalog|manifest|registry/i);
  });

  it('ContentEngin to GameEngin export path exists as a handoff concept', () => {
    const source = sourceUnder('app/api/contentengin', 'engins/contentengin', 'engins/gameengin');

    expect(source).toMatch(/gameengin/i);
    expect(source).toMatch(/export|manifest|cartridge|asset/i);
  });
});

describe('beats Roblox Studio: playable catalog must not collapse into decorative filler', () => {
  it('GameEngin source contains real cartridge identity and launch/runtime concepts', () => {
    const source = sourceUnder('engins/gameengin', 'engins');

    expect(source).toMatch(/cartridge/i);
    expect(source).toMatch(/play|launch|runtime|session|remote/i);
  });

  it('GameEngin avoids obvious placeholder/filler game content in production source', () => {
    const gameFiles = walk('engins/gameengin').concat(['engins/engin.GameEngin.tsx']);

    expectNoFileContains(gameFiles, /lorem ipsum|fake game|dummy game|space filler|coming soon card/i, 'GameEngin must not ship obvious placeholder filler as playable catalog');
  });
});

describe('beats Cursor/Replit/Windsurf: AI code must be safe and user-owned', () => {
  it('CodeEngin requires workspace boundaries for file access', () => {
    const source = sourceUnder('app/api/codeengin', 'engins/codeengin');

    expect(source).toMatch(/workspaceId|workspace/i);
    expect(source).toMatch(/safe|path|blocked|traversal|absolute|\.\./i);
  });

  it('CodeEngin does not expose deployed DREAMengin source as public editable workspace', () => {
    const source = sourceUnder('app/api/codeengin', 'engins/codeengin');

    expect(source).not.toMatch(/public.*deployed.*source/i);
    expect(source).not.toMatch(/edit.*DREAMengin.*source.*by default/i);
    expect(source).not.toMatch(/open.*process\.cwd\(\).*for.*user/i);
  });

  it('AI coding improvements must happen through workspace/project capability, not raw repo access', () => {
    const source = sourceUnder('app/api/codeengin', 'engins/codeengin', 'engine');

    expect(source).toMatch(/workspace|project|capability|intent/i);
  });
});

describe('beats Suno/Udio/BandLab: music must be a real Engin lane', () => {
  it('StarMakerEngin has music/session/export/project concepts', () => {
    const source = sourceUnder('engins', 'app');

    expect(source).toMatch(/StarMakerEngin|starmaker/i);
    expect(source).toMatch(/song|track|audio|midi|stem|mix|export|session/i);
  });
});

describe('beats TikTok/Instagram/YouTube: discovery must connect into creation', () => {
  it('DreamR and HomeDream exist as discovery/social surfaces', () => {
    const source = sourceUnder('app', 'dreamr', 'dreamdmbar');

    expect(source).toMatch(/DreamR|dreamr/);
    expect(source).toMatch(/HomeDream|homedream/);
    expect(source).toMatch(/feed|post|creator|channel|dream/i);
  });

  it('feed content is not allowed to be passive-only decorative scrolling', () => {
    const source = sourceUnder('app/homedream', 'app/dreamr', 'dreamr');

    expect(source).toMatch(/feed|posts|initialPosts|creator|content/i);
    expect(source).toMatch(/action|intent|open|create|draft|preference|save|share|remix|import/i);
    expect(source).not.toMatch(/placeholder feed|fake post|lorem ipsum/i);
  });
});

describe('final AI superiority gate', () => {
  it('any AI patch must preserve the reason DREAMengin beats the stack: fewer silos, more handoff, less clutter', () => {
    const source = sourceUnder('engine', 'engins', 'components/runtime', 'dreamdmbar', 'app');

    expect(source).toMatch(/intent/i);
    expect(source).toMatch(/runtime/i);
    expect(source).toMatch(/capability/i);
    expect(source).toMatch(/asset|cartridge|workspace|feed|music|brand|lab/i);

    expect(source).not.toMatch(/primary card-grid dashboard/i);
    expect(source).not.toMatch(/decorative tiles only/i);
    expect(source).not.toMatch(/architecture brag panel/i);
  });
});
