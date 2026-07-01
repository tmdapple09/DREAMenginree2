import { bridge } from '@/engine/runtime/dualRuntimeBridge';











export const ENGIN_KEYS = [
  'starmaker',
  'game',
  'code',
  'lab',
  'brand',
  'content',
  'forge',
] as const;

const WORKFLOWS: readonly WorkflowDefinition[] = [

  defineWorkflow({
    id: 'starmaker-to-lab:stem-analyze',
    from: 'starmaker',
    to: 'lab',
    label: 'Analyze stem in LabEngin',
    description:
      'Sends a stem (voice, guitar, drums, bass) to LabEngin for 3D ' +
      'frequency/wavelength visualization. LabEngin decomposes the stem into ' +
      'frequency bands in 3D space. Tap+hold any band to sample that isolated sound.',
    artifactTypes: ['stem'],
    bridgeChannel: 'lab',
    bridgeEvent: 'lab:stem-visualization-requested',
  }),

  defineWorkflow({
    id: 'starmaker-to-content:attach-track',
    from: 'starmaker',
    to: 'content',
    label: 'Add track to content',
    description:
      'Attaches the current track or stem as audio background/soundtrack to a ' +
      'ContentEngin post or video.',
    artifactTypes: ['track', 'stem'],
    bridgeChannel: 'create',
    bridgeEvent: 'create:music-attached',
  }),

  defineWorkflow({
    id: 'starmaker-to-game:adaptive-soundtrack',
    from: 'starmaker',
    to: 'game',
    label: 'Set game soundtrack',
    description:
      'Sends the current track to GameEngin as the adaptive game soundtrack. ' +
      'GameEngin syncs BPM to game tempo and uses the track as background audio.',
    artifactTypes: ['track'],
    bridgeChannel: 'games',
    bridgeEvent: 'games:soundtrack-requested',
  }),

  defineWorkflow({
    id: 'starmaker-to-brand:track-release',
    from: 'starmaker',
    to: 'brand',
    label: 'Release track via BrandingEngin',
    description:
      'Pushes a finished track to BrandingEngin to generate a campaign, ' +
      'playlist promo, or release post.',
    artifactTypes: ['track'],
    bridgeChannel: 'brand',
    bridgeEvent: 'brand:music-release-requested',
  }),

  defineWorkflow({
    id: 'code-to-game:deploy-script',
    from: 'code',
    to: 'game',
    label: 'Deploy code to game',
    description:
      'Takes the active CodeEngin script/cell and deploys it as game logic — ' +
      'NPC behavior, physics rules, or game event handler.',
    artifactTypes: ['script'],
    bridgeChannel: 'games',
    bridgeEvent: 'games:script-deploy-requested',
  }),

  defineWorkflow({
    id: 'code-to-lab:run-experiment',
    from: 'code',
    to: 'lab',
    label: 'Run code as lab experiment',
    description:
      'Sends a CodeEngin notebook cell to LabEngin to execute as a scientific ' +
      'experiment with structured output, charts, and data export.',
    artifactTypes: ['script', 'notebook'],
    bridgeChannel: 'lab',
    bridgeEvent: 'lab:code-experiment-requested',
  }),

  defineWorkflow({
    id: 'code-to-content:export-notebook',
    from: 'code',
    to: 'content',
    label: 'Publish notebook as content',
    description:
      'Exports a CodeEngin notebook as a tutorial, dev blog post, or ' +
      'interactive article in ContentEngin.',
    artifactTypes: ['notebook'],
    bridgeChannel: 'create',
    bridgeEvent: 'create:notebook-publish-requested',
  }),

  defineWorkflow({
    id: 'forge-to-game:import-3d-asset',
    from: 'forge',
    to: 'game',
    label: 'Import 3D asset into game',
    description:
      'Sends a ForgeEngin 3D model (GLB/GLTF) directly into the GameEngin ' +
      'scene as a spawnable asset, environment prop, or character.',
    artifactTypes: ['3d-asset'],
    bridgeChannel: 'games',
    bridgeEvent: 'games:asset-import-requested',
  }),

  defineWorkflow({
    id: 'forge-to-content:embed-3d',
    from: 'forge',
    to: 'content',
    label: 'Embed 3D asset in content',
    description:
      'Places a ForgeEngin 3D model as an interactive embed in a ContentEngin ' +
      'post — readers can rotate/zoom the model.',
    artifactTypes: ['3d-asset'],
    bridgeChannel: 'create',
    bridgeEvent: 'create:asset-embedded',
  }),

  defineWorkflow({
    id: 'forge-to-starmaker:visualizer-scene',
    from: 'forge',
    to: 'starmaker',
    label: 'Use 3D scene as music visualizer',
    description:
      'Sends a ForgeEngin 3D scene to StarMakerEngin to use as a reactive ' +
      'music visualizer — objects pulse and move with the beat.',
    artifactTypes: ['3d-asset'],
    bridgeChannel: 'music',
    bridgeEvent: 'music:visualizer-scene-requested',
  }),

  defineWorkflow({
    id: 'forge-to-lab:simulate-asset',
    from: 'forge',
    to: 'lab',
    label: 'Simulate 3D asset in LabEngin',
    description:
      'Sends a 3D asset to LabEngin for physics simulation, stress testing, ' +
      'or material analysis.',
    artifactTypes: ['3d-asset'],
    bridgeChannel: 'lab',
    bridgeEvent: 'lab:asset-simulation-requested',
  }),

  defineWorkflow({
    id: 'game-to-content:export-clip',
    from: 'game',
    to: 'content',
    label: 'Share game clip as content',
    description:
      'Exports the current game session state, score, or highlight clip to ' +
      'ContentEngin as a shareable post or video.',
    artifactTypes: ['clip'],
    bridgeChannel: 'create',
    bridgeEvent: 'create:game-clip-embedded',
  }),

  defineWorkflow({
    id: 'game-to-brand:achievement-campaign',
    from: 'game',
    to: 'brand',
    label: 'Turn achievement into campaign',
    description:
      'Sends a game achievement or leaderboard milestone to BrandingEngin to ' +
      'auto-generate a hype post or marketing moment.',
    artifactTypes: ['clip', 'any'],
    bridgeChannel: 'brand',
    bridgeEvent: 'brand:achievement-campaign-requested',
  }),

  defineWorkflow({
    id: 'game-to-code:export-script',
    from: 'game',
    to: 'code',
    label: 'Export game script to CodeEngin',
    description:
      "Brings a game's current script or AI behavior rules into CodeEngin for " +
      'editing and improvement.',
    artifactTypes: ['script'],
    bridgeChannel: 'code',
    bridgeEvent: 'code:game-script-imported',
  }),

  defineWorkflow({
    id: 'lab-to-code:export-dataset',
    from: 'lab',
    to: 'code',
    label: 'Send lab data to CodeEngin',
    description:
      "Exports a lab experiment's result dataset to CodeEngin as a pre-loaded " +
      'variable, ready to analyze or visualize in code.',
    artifactTypes: ['dataset'],
    bridgeChannel: 'code',
    bridgeEvent: 'code:lab-dataset-received',
  }),

  defineWorkflow({
    id: 'lab-to-starmaker:sonify',
    from: 'lab',
    to: 'starmaker',
    label: 'Sonify lab data as music',
    description:
      "Maps a lab dataset's values to musical parameters (pitch, rhythm, timbre) " +
      'and sends them to StarMakerEngin to generate a sonification track.',
    artifactTypes: ['dataset'],
    bridgeChannel: 'music',
    bridgeEvent: 'music:sonification-requested',
  }),

  defineWorkflow({
    id: 'lab-to-forge:generate-3d',
    from: 'lab',
    to: 'forge',
    label: 'Generate 3D from lab data',
    description:
      'Converts simulation or dataset output into a 3D model in ForgeEngin — ' +
      'e.g. protein folding, terrain from elevation data, or molecular structure.',
    artifactTypes: ['dataset'],
    bridgeChannel: 'code',
    bridgeEvent: 'code:lab-to-forge-requested',
  }),

  defineWorkflow({
    id: 'content-to-brand:campaign-asset',
    from: 'content',
    to: 'brand',
    label: 'Turn post into brand campaign',
    description:
      'Sends a published or drafted ContentEngin post to BrandingEngin to wrap ' +
      'it in a brand campaign with targeting, scheduling, and CTA.',
    artifactTypes: ['post'],
    bridgeChannel: 'brand',
    bridgeEvent: 'brand:content-campaign-requested',
  }),

  defineWorkflow({
    id: 'content-to-game:world-lore',
    from: 'content',
    to: 'game',
    label: 'Use content as game lore',
    description:
      'Sends a ContentEngin story post or article into GameEngin as in-game ' +
      'lore, NPC dialogue, or quest description text.',
    artifactTypes: ['post'],
    bridgeChannel: 'games',
    bridgeEvent: 'games:lore-content-received',
  }),

  defineWorkflow({
    id: 'brand-to-content:apply-kit',
    from: 'brand',
    to: 'content',
    label: 'Apply brand kit to content',
    description:
      'Pushes the active brand kit (colors, fonts, logo, tone) to ContentEngin ' +
      'so new posts auto-apply the brand style.',
    artifactTypes: ['brand-kit'],
    bridgeChannel: 'create',
    bridgeEvent: 'create:brand-kit-applied',
  }),

  defineWorkflow({
    id: 'brand-to-game:sponsor-skin',
    from: 'brand',
    to: 'game',
    label: 'Apply brand skin to game',
    description:
      'Applies a BrandingEngin campaign or sponsor skin to a game — custom UI ' +
      'colors, logos, and achievement badges.',
    artifactTypes: ['brand-kit', 'any'],
    bridgeChannel: 'games',
    bridgeEvent: 'games:brand-skin-requested',
  }),

  defineWorkflow({
    id: 'code-to-starmaker:generative-audio',
    from: 'code',
    to: 'starmaker',
    label: 'Generate audio from code',
    description:
      'Sends CodeEngin algorithm or ML model to StarMakerEngin to generate ' +
      'procedural music or sound design via algorithmic composition.',
    artifactTypes: ['script', 'notebook'],
    bridgeChannel: 'music',
    bridgeEvent: 'music:generative-audio-requested',
  }),

  defineWorkflow({
    id: 'lab-to-game:physics-simulation',
    from: 'lab',
    to: 'game',
    label: 'Import physics simulation',
    description:
      'Transfers LabEngin physics simulation results to GameEngin for real-time ' +
      'gameplay physics, particle effects, or environmental dynamics.',
    artifactTypes: ['dataset'],
    bridgeChannel: 'games',
    bridgeEvent: 'games:physics-sim-imported',
  }),

  defineWorkflow({
    id: 'content-to-starmaker:podcast-audio',
    from: 'content',
    to: 'starmaker',
    label: 'Create podcast audio track',
    description:
      'Sends a ContentEngin podcast script or article to StarMakerEngin for ' +
      'text-to-speech, audio mastering, and podcast production.',
    artifactTypes: ['post'],
    bridgeChannel: 'music',
    bridgeEvent: 'music:podcast-production-requested',
  }),

  defineWorkflow({
    id: 'forge-to-lab:material-analysis',
    from: 'forge',
    to: 'lab',
    label: 'Analyze 3D material properties',
    description:
      'Sends a ForgeEngin 3D asset to LabEngin for material analysis, ' +
      'stress testing, or quantum-inspired material simulation.',
    artifactTypes: ['3d-asset'],
    bridgeChannel: 'lab',
    bridgeEvent: 'lab:material-analysis-requested',
  }),

  defineWorkflow({
    id: 'game-to-forge:export-level',
    from: 'game',
    to: 'forge',
    label: 'Export game level to 3D',
    description:
      'Exports the current game level or world from GameEngin to ForgeEngin ' +
      'as an editable 3D model for remixing and enhancement.',
    artifactTypes: ['3d-asset'],
    bridgeChannel: 'code',
    bridgeEvent: 'code:game-level-exported',
  }),

  defineWorkflow({
    id: 'starmaker-to-lab:audio-analysis',
    from: 'starmaker',
    to: 'lab',
    label: 'Audio spectral analysis',
    description:
      'Sends a StarMakerEngin track to LabEngin for deep spectral analysis, ' +
      'frequency visualization, and harmonic structure mapping.',
    artifactTypes: ['track', 'stem'],
    bridgeChannel: 'lab',
    bridgeEvent: 'lab:audio-analysis-requested',
  }),

  defineWorkflow({
    id: 'lab-to-content:research-paper',
    from: 'lab',
    to: 'content',
    label: 'Generate research paper',
    description:
      'Exports a LabEngin experiment with results to ContentEngin as a ' +
      'formatted research paper or scientific article with embedded visualizations.',
    artifactTypes: ['dataset'],
    bridgeChannel: 'create',
    bridgeEvent: 'create:research-paper-requested',
  }),

  defineWorkflow({
    id: 'brand-to-starmaker:sonic-branding',
    from: 'brand',
    to: 'starmaker',
    label: 'Create sonic brand identity',
    description:
      'Sends BrandingEngin brand kit to StarMakerEngin to generate sonic ' +
      'branding: jingles, audio logos, and brand-consistent music themes.',
    artifactTypes: ['brand-kit'],
    bridgeChannel: 'music',
    bridgeEvent: 'music:sonic-branding-requested',
  }),

  defineWorkflow({
    id: 'code-to-brand:analytics-dashboard',
    from: 'code',
    to: 'brand',
    label: 'Build analytics dashboard',
    description:
      'Exports a CodeEngin data analysis notebook to BrandingEngin as a live ' +
      'analytics dashboard for brand performance tracking.',
    artifactTypes: ['notebook'],
    bridgeChannel: 'brand',
    bridgeEvent: 'brand:analytics-dashboard-requested',
  }),

  defineWorkflow({
    id: 'content-to-lab:ab-testing',
    from: 'content',
    to: 'lab',
    label: 'Run A/B content test',
    description:
      'Sends multiple ContentEngin post variants to LabEngin for A/B testing ' +
      'simulation and performance prediction analysis.',
    artifactTypes: ['post'],
    bridgeChannel: 'lab',
    bridgeEvent: 'lab:ab-test-requested',
  }),
];







export type EnginKey = (typeof ENGIN_KEYS)[number];

export type WorkflowArtifactType =
  | 'stem'
  | 'track'
  | 'script'
  | 'notebook'
  | '3d-asset'
  | 'clip'
  | 'dataset'
  | 'post'
  | 'brand-kit'
  | 'any';

export interface WorkflowDefinition {
  
  id: string;
  
  from: EnginKey;
  
  to: EnginKey;
  
  label: string;
  
  description: string;
  
  artifactTypes: readonly WorkflowArtifactType[];
  
  bridgeChannel: string;
  
  bridgeEvent: string;
  
  execute(payload: Record<string, unknown>): void;
}

export interface WorkflowStats {
  total: number;
  bySource: Record<string, number>;
  byTarget: Record<string, number>;
  byArtifactType: Record<string, number>;
}



function defineWorkflow(
  spec: Omit<WorkflowDefinition, 'execute'>,
): WorkflowDefinition {
  return {
    ...spec,
    execute(payload): void {
      bridge.emitDurable(spec.bridgeChannel, spec.bridgeEvent, payload);
    },
  };
}


export function findWorkflows(from: EnginKey, to: EnginKey): WorkflowDefinition[] {
  return WORKFLOWS.filter((w) => w.from === from && w.to === to);
}


export function findWorkflowById(id: string): WorkflowDefinition | undefined {
  return WORKFLOWS.find((w) => w.id === id);
}


export function executeWorkflow(id: string, payload: Record<string, unknown>): boolean {
  const workflow = findWorkflowById(id);
  if (!workflow) return false;
  try {
    workflow.execute(payload);
  } catch (err: unknown) {
    console.error(`[enginWorkflowRegistry] executeWorkflow(${id}) threw`, err);
    return false;
  }
  return true;
}


export function allWorkflows(): readonly WorkflowDefinition[] {
  return WORKFLOWS;
}


export function getWorkflowsByArtifactType(type: WorkflowArtifactType): WorkflowDefinition[] {
  return WORKFLOWS.filter(
    (w) => w.artifactTypes.includes(type) || w.artifactTypes.includes('any'),
  );
}


export function getWorkflowStats(): WorkflowStats {
  const bySource: Record<string, number> = {};
  const byTarget: Record<string, number> = {};
  const byArtifactType: Record<string, number> = {};

  for (const w of WORKFLOWS) {
    bySource[w.from] = (bySource[w.from] ?? 0) + 1;
    byTarget[w.to] = (byTarget[w.to] ?? 0) + 1;
    for (const type of w.artifactTypes) {
      byArtifactType[type] = (byArtifactType[type] ?? 0) + 1;
    }
  }

  return { total: WORKFLOWS.length, bySource, byTarget, byArtifactType };
}


export function workflowExists(id: string): boolean {
  return WORKFLOWS.some((w) => w.id === id);
}






