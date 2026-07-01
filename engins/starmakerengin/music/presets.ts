

export interface BeatPreset {
  id: string;
  name: string;
  genre: string;
  bpm: number;
  key: string;
  keyMode: 'major' | 'minor';
  
  grid: [boolean[], boolean[], boolean[], boolean[]];
  chordProgression: string[];
  effects: string[];
  description: string;
  
  inspiredBy: string;
}

export interface InstrumentPreset {
  id: string;
  name: string;
  category: 'Synth' | 'Drums' | 'Bass' | 'Pad' | 'Lead' | 'FX';
  mixer: { vocals: number; instruments: number; bass: number; fx: number };
  effects: string[];
  pitch: number;
  description: string;
}

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  bpm: number;
  key: string;
  keyMode: 'major' | 'minor';
  qualityMode: 'idea' | 'streaming' | 'studio';
  preset: BeatPreset;
  instrument: InstrumentPreset;
}

const T = true;
const F = false;

export const BEAT_PRESETS: BeatPreset[] = [
  
  {
    id: 'trap-808',
    name: 'Trap 808',
    genre: 'Trap',
    bpm: 140,
    key: 'C#',
    keyMode: 'minor',
    grid: [
      [T, F, F, F, T, F, F, F], 
      [F, F, F, F, T, F, F, F], 
      [T, T, T, T, T, T, T, T], 
      [T, F, F, T, F, F, T, F], 
    ],
    chordProgression: ['C#min', 'Amin', 'Fmaj', 'Gmaj'],
    effects: ['Reverb', 'Compressor', 'Limiter'],
    description: 'Atlanta-style 808 trap beat with boom bass hits and hi-hat rolls.',
    inspiredBy: 'Metro Boomin / FL Studio',
  },
  {
    id: 'drill-uk',
    name: 'UK Drill',
    genre: 'Drill',
    bpm: 142,
    key: 'D',
    keyMode: 'minor',
    grid: [
      [T, F, F, T, F, F, T, F], 
      [F, F, T, F, F, F, F, T], 
      [T, F, T, T, F, T, T, F], 
      [T, F, T, F, T, F, T, F], 
    ],
    chordProgression: ['Dmin', 'Cmaj', 'A#maj', 'Amin'],
    effects: ['Reverb', 'Delay', 'Compressor'],
    description: 'South London dark minor key syncopated pattern.',
    inspiredBy: 'Ableton Live / Sample Pack (Splice)',
  },
  
  {
    id: 'house-4x4',
    name: 'House 4×4',
    genre: 'House',
    bpm: 124,
    key: 'F',
    keyMode: 'minor',
    grid: [
      [T, F, F, F, T, F, F, F], 
      [F, F, T, F, F, F, T, F], 
      [F, T, F, T, F, T, F, T], 
      [T, F, T, F, T, F, T, F], 
    ],
    chordProgression: ['Fmin', 'D#maj', 'Cmaj', 'Gmin'],
    effects: ['Chorus', 'Compressor'],
    description: 'Classic Chicago / UK four-on-the-floor with hi-hat offbeats.',
    inspiredBy: 'Ableton Live / Logic Drummer',
  },
  {
    id: 'deep-house',
    name: 'Deep House',
    genre: 'Deep House',
    bpm: 118,
    key: 'A',
    keyMode: 'minor',
    grid: [
      [T, F, F, F, T, F, T, F], 
      [F, F, T, F, F, F, T, F], 
      [F, T, F, T, F, T, F, T], 
      [T, F, F, T, F, F, T, F], 
    ],
    chordProgression: ['Amin', 'Gmaj', 'Fmaj', 'Emaj'],
    effects: ['Reverb', 'Delay', 'Low-Pass'],
    description: 'Warm, rolling bassline-ready deep house groove.',
    inspiredBy: 'Logic Pro / Native Instruments Kontakt',
  },
  
  {
    id: 'lofi-chill',
    name: 'Lo-Fi Chill',
    genre: 'Lo-Fi',
    bpm: 84,
    key: 'F',
    keyMode: 'major',
    grid: [
      [T, F, F, T, F, F, T, F], 
      [F, F, T, F, F, T, F, F], 
      [T, F, T, F, T, F, T, F], 
      [T, F, F, F, T, F, F, T], 
    ],
    chordProgression: ['Fmaj', 'Dmin', 'A#maj', 'Cmaj'],
    effects: ['Reverb', 'Chorus', 'Low-Pass'],
    description: 'Crunchy sampled-vinyl lo-fi hip hop study beat.',
    inspiredBy: 'MPC / Splice Lo-Fi Pack',
  },
  
  {
    id: 'reggaeton-dem',
    name: 'Reggaeton Dembow',
    genre: 'Reggaeton',
    bpm: 96,
    key: 'D',
    keyMode: 'minor',
    grid: [
      [T, F, T, F, T, F, T, F], 
      [F, T, F, T, F, T, F, T], 
      [T, T, T, T, T, T, T, T], 
      [F, F, T, F, F, F, T, F], 
    ],
    chordProgression: ['Dmin', 'Cmaj', 'Gmaj', 'Amin'],
    effects: ['Reverb', 'Compressor'],
    description: 'Classic dembow rhythm pattern with driving percussion.',
    inspiredBy: 'Pro Tools / Cubase',
  },
  
  {
    id: 'afrobeats-naija',
    name: 'Afrobeats Naija',
    genre: 'Afrobeats',
    bpm: 102,
    key: 'G',
    keyMode: 'major',
    grid: [
      [T, F, F, T, T, F, F, T], 
      [F, T, F, F, F, T, F, F], 
      [T, F, T, F, T, T, T, F], 
      [T, F, T, F, F, T, F, T], 
    ],
    chordProgression: ['Gmaj', 'Emaj', 'Cmaj', 'Dmaj'],
    effects: ['Reverb', 'Chorus'],
    description: 'Nigerian Afrobeats groove with layered percussion accents.',
    inspiredBy: 'Ableton / IK Multimedia',
  },
  
  {
    id: 'pop-anthem',
    name: 'Pop Anthem',
    genre: 'Pop',
    bpm: 128,
    key: 'G',
    keyMode: 'major',
    grid: [
      [T, F, F, F, T, F, F, F], 
      [F, F, T, F, F, F, T, F], 
      [T, T, T, T, T, T, T, T], 
      [T, F, F, T, T, F, F, T], 
    ],
    chordProgression: ['Gmaj', 'Emaj', 'Cmaj', 'Dmaj'],
    effects: ['Chorus', 'Reverb', 'Compressor'],
    description: 'Radio-ready pop anthem drum machine with punchy lead synth.',
    inspiredBy: 'Logic Pro Smart Tempo / AIVA',
  },
  
  {
    id: 'rock-drive',
    name: 'Rock Drive',
    genre: 'Rock',
    bpm: 116,
    key: 'E',
    keyMode: 'minor',
    grid: [
      [T, F, F, F, T, F, F, F], 
      [F, F, T, F, F, F, T, F], 
      [T, F, T, F, T, F, T, F], 
      [T, F, T, T, F, T, F, T], 
    ],
    chordProgression: ['Emin', 'Cmaj', 'Gmaj', 'Dmaj'],
    effects: ['Distortion', 'Compressor', 'Reverb'],
    description: 'Driving rock drum feel with power chord rhythm accents.',
    inspiredBy: 'Pro Tools / Cubase Score',
  },
  
  {
    id: 'dnb-neurofunk',
    name: 'Neurofunk',
    genre: 'Drum & Bass',
    bpm: 174,
    key: 'A',
    keyMode: 'minor',
    grid: [
      [T, F, F, T, F, F, T, F], 
      [F, F, T, F, T, F, F, T], 
      [T, T, F, T, T, F, T, T], 
      [T, F, T, F, T, F, T, F], 
    ],
    chordProgression: ['Amin', 'Gmin', 'Fmaj', 'Emin'],
    effects: ['Distortion', 'High-Pass', 'Compressor', 'Limiter'],
    description: 'Neurofunk drum pattern with Amen-style breaks and reese bass.',
    inspiredBy: 'Ableton / iZotope Neutron',
  },
  
  {
    id: 'rnb-groove',
    name: 'R&B Groove',
    genre: 'R&B',
    bpm: 92,
    key: 'D#',
    keyMode: 'minor',
    grid: [
      [T, F, F, T, F, F, T, F], 
      [F, F, T, F, F, T, F, F], 
      [T, F, T, T, F, T, T, F], 
      [T, F, F, F, T, F, T, F], 
    ],
    chordProgression: ['D#min', 'Cmaj', 'G#maj', 'A#maj'],
    effects: ['Reverb', 'Chorus', 'Low-Pass', 'Compressor'],
    description: 'Neo-soul inspired R&B groove with pocket feel.',
    inspiredBy: 'Logic Pro / Splice RnB Pack',
  },
  
  {
    id: 'techno-berlin',
    name: 'Berlin Techno',
    genre: 'Techno',
    bpm: 136,
    key: 'A',
    keyMode: 'minor',
    grid: [
      [T, F, F, F, T, F, F, F], 
      [F, F, F, T, F, F, F, T], 
      [T, T, T, T, T, T, T, T], 
      [F, F, T, F, F, F, T, F], 
    ],
    chordProgression: ['Amin', 'Gmin', 'Fmaj', 'Emin'],
    effects: ['Distortion', 'Delay', 'High-Pass', 'Compressor'],
    description: 'Industrial Berlin-style techno with acid stab and relentless kick.',
    inspiredBy: 'Ableton Max4Live / iZotope RX',
  },
];

export const INSTRUMENT_PRESETS: InstrumentPreset[] = [
  {
    id: 'init-synth',
    name: 'Init Synth',
    category: 'Synth',
    mixer: { vocals: 60, instruments: 80, bass: 40, fx: 30 },
    effects: [],
    pitch: 0,
    description: 'Neutral starting point — blank canvas.',
  },
  {
    id: 'pad-lush',
    name: 'Lush Pad',
    category: 'Pad',
    mixer: { vocals: 55, instruments: 70, bass: 35, fx: 65 },
    effects: ['Reverb', 'Chorus', 'Delay'],
    pitch: 0,
    description: 'Wide, warm ambient pad — Logic Alchemy-style.',
  },
  {
    id: 'bass-808',
    name: '808 Sub Bass',
    category: 'Bass',
    mixer: { vocals: 50, instruments: 60, bass: 95, fx: 20 },
    effects: ['Compressor', 'Limiter'],
    pitch: -3,
    description: 'Hard-hitting sub-bass tuned for trap and hip hop.',
  },
  {
    id: 'lead-saw',
    name: 'Supersaw Lead',
    category: 'Lead',
    mixer: { vocals: 50, instruments: 88, bass: 55, fx: 50 },
    effects: ['Chorus', 'Reverb', 'Compressor'],
    pitch: 0,
    description: 'Detuned supersaw lead — EDM/pop classic.',
  },
  {
    id: 'keys-rhodes',
    name: 'Rhodes EP',
    category: 'Pad',
    mixer: { vocals: 65, instruments: 75, bass: 45, fx: 55 },
    effects: ['Chorus', 'Reverb'],
    pitch: 0,
    description: 'Warm electric piano feel — R&B and soul staple.',
  },
  {
    id: 'pluck-marimba',
    name: 'Pluck / Marimba',
    category: 'Lead',
    mixer: { vocals: 55, instruments: 80, bass: 40, fx: 40 },
    effects: ['Delay', 'Reverb'],
    pitch: 2,
    description: 'Short-attack pluck ideal for afrobeats and pop melodies.',
  },
  {
    id: 'fm-stab',
    name: 'FM Stab',
    category: 'Synth',
    mixer: { vocals: 50, instruments: 82, bass: 58, fx: 38 },
    effects: ['Distortion', 'Compressor'],
    pitch: 0,
    description: 'Punchy FM operator synth stab — DX7-inspired.',
  },
  {
    id: 'reese-bass',
    name: 'Reese Bass',
    category: 'Bass',
    mixer: { vocals: 45, instruments: 65, bass: 90, fx: 60 },
    effects: ['Distortion', 'High-Pass', 'Compressor'],
    pitch: -5,
    description: 'Dark, growling reese bass — d&b and techno essential.',
  },
  {
    id: 'drums-punchy',
    name: 'Punchy Kit',
    category: 'Drums',
    mixer: { vocals: 50, instruments: 75, bass: 70, fx: 30 },
    effects: ['Compressor', 'Limiter'],
    pitch: 0,
    description: 'Hard-compressed acoustic-electronic hybrid kit.',
  },
  {
    id: 'fx-riser',
    name: 'FX Riser / Sweep',
    category: 'FX',
    mixer: { vocals: 40, instruments: 50, bass: 30, fx: 95 },
    effects: ['Reverb', 'High-Pass', 'Chorus'],
    pitch: 12,
    description: 'Build tension with a sweeping FX riser into drops.',
  },
];

export const PROJECT_TEMPLATES: ProjectTemplate[] = [
  {
    id: 'blank',
    name: 'Blank Project',
    description: 'Empty canvas — start from scratch.',
    bpm: 120,
    key: 'C',
    keyMode: 'major',
    qualityMode: 'idea',
    preset: BEAT_PRESETS[0],
    instrument: INSTRUMENT_PRESETS[0],
  },
  {
    id: 'trap-session',
    name: 'Trap Session',
    description: 'Atlanta-style 808 session ready to record.',
    bpm: 140,
    key: 'C#',
    keyMode: 'minor',
    qualityMode: 'streaming',
    preset: BEAT_PRESETS.find((p) => p.id === 'trap-808')!,
    instrument: INSTRUMENT_PRESETS.find((p) => p.id === 'bass-808')!,
  },
  {
    id: 'house-club',
    name: 'Club Ready House',
    description: 'Four-on-the-floor house ready for master chain.',
    bpm: 124,
    key: 'F',
    keyMode: 'minor',
    qualityMode: 'studio',
    preset: BEAT_PRESETS.find((p) => p.id === 'house-4x4')!,
    instrument: INSTRUMENT_PRESETS.find((p) => p.id === 'lead-saw')!,
  },
  {
    id: 'lofi-session',
    name: 'Lo-Fi Session',
    description: 'Chill study-music lo-fi starter.',
    bpm: 84,
    key: 'F',
    keyMode: 'major',
    qualityMode: 'streaming',
    preset: BEAT_PRESETS.find((p) => p.id === 'lofi-chill')!,
    instrument: INSTRUMENT_PRESETS.find((p) => p.id === 'keys-rhodes')!,
  },
  {
    id: 'pop-radio',
    name: 'Pop Radio Ready',
    description: 'Anthemic pop with limiter-ready mastering chain.',
    bpm: 128,
    key: 'G',
    keyMode: 'major',
    qualityMode: 'studio',
    preset: BEAT_PRESETS.find((p) => p.id === 'pop-anthem')!,
    instrument: INSTRUMENT_PRESETS.find((p) => p.id === 'lead-saw')!,
  },
];

export const GENRE_LIST = [...new Set(BEAT_PRESETS.map((p) => p.genre))];

export function getPresetsByGenre(genre: string): BeatPreset[] {
  return BEAT_PRESETS.filter((p) => p.genre === genre);
}

export function findPreset(id: string): BeatPreset | undefined {
  return BEAT_PRESETS.find((p) => p.id === id);
}

export function findInstrumentPreset(id: string): InstrumentPreset | undefined {
  return INSTRUMENT_PRESETS.find((p) => p.id === id);
}

export function findProjectTemplate(id: string): ProjectTemplate | undefined {
  return PROJECT_TEMPLATES.find((p) => p.id === id);
}
