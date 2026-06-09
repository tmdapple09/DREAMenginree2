/**
 * lib/music/starmakerDaw.ts — Extended DAW data models for StarMakerEngin.
 *
 * Covers the industry-standard feature set inspired by:
 *  - Pro Tools : Comping / Playlist / Takes management
 *  - Ableton Live : Session View (clip launcher)
 *  - FL Studio / Logic Pro : Piano Roll MIDI editor
 *  - Cubase / Logic : Automation lanes
 *  - All DAWs : Audio warp markers / time-stretch
 *
 * Pure data types & helpers — no side effects, safe for SSR and workers.
 */

/** Standard MIDI note (0 = C-2, 60 = C4, 127 = G9). */
export interface MidiNote {
  id: string;
  /** MIDI pitch 0-127. */
  pitch: number;
  /** Start position in beats from the beginning of the pattern. */
  startBeat: number;
  /** Duration in beats. */
  durationBeats: number;
  /** Velocity 1-127. */
  velocity: number;
  /** MIDI channel 0-15. */
  channel: number;
}

export type PianoRollQuantize = "1/1" | "1/2" | "1/4" | "1/8" | "1/16" | "1/32";

export interface PianoRollState {
  notes: MidiNote[];
  totalBeats: number;
  quantize: PianoRollQuantize;
  /** Lowest visible MIDI pitch. */
  viewBottomPitch: number;
  /** Number of pitches visible vertically. */
  viewPitchRange: number;
}

export const PIANO_ROLL_DEFAULTS: PianoRollState = {
  notes: [],
  totalBeats: 16,
  quantize: "1/8",
  viewBottomPitch: 48, // C3
  viewPitchRange: 24,
};

/** Semitone name for display in the piano keyboard. */
const NOTE_NAMES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
] as const;

/** Return the note name + octave for a MIDI pitch number (C3 = 60). */
export function midiPitchToName(pitch: number): string {
  const name = NOTE_NAMES[pitch % 12];
  const octave = Math.floor(pitch / 12) - 2;
  return `${name}${octave}`;
}

/** Return true if the pitch is a black key. */
export function isBlackKey(pitch: number): boolean {
  return [1, 3, 6, 8, 10].includes(pitch % 12);
}

/** Create an empty piano roll MIDI note. */
export function createMidiNote(
  pitch: number,
  startBeat: number,
  durationBeats: number = 0.5,
  velocity: number = 100,
): MidiNote {
  return {
    id: `note-${Date.now()}-${Math.round(Math.random() * 9999)}`,
    pitch,
    startBeat,
    durationBeats,
    velocity,
    channel: 0,
  };
}

/** Snap a beat value to the nearest quantize grid position. */
export function snapToGrid(beat: number, quantize: PianoRollQuantize): number {
  const divisions: Record<PianoRollQuantize, number> = {
    "1/1": 1,
    "1/2": 0.5,
    "1/4": 0.25,
    "1/8": 0.125,
    "1/16": 0.0625,
    "1/32": 0.03125,
  };
  const div = divisions[quantize];
  return Math.round(beat / div) * div;
}

export type TakeRating = 0 | 1 | 2 | 3;

/** A single recorded audio take for a track or vocal line. */
export interface AudioTake {
  id: string;
  name: string;
  /** Unix timestamp (ms). */
  recordedAt: number;
  durationSec: number;
  /** Simplified waveform amplitude bars for visual display. */
  waveform: number[];
  /** Whether this take contributes to the current comp. */
  active: boolean;
  /** Star rating (0 = unrated, 1-3 = stars). */
  rating: TakeRating;
  color: string;
}

/** A comp region maps a time span to a specific take. */
export interface CompRegion {
  id: string;
  /** Start in seconds from the top of the record. */
  startSec: number;
  /** End in seconds from the top of the record. */
  endSec: number;
  /** Which take to use for this region. */
  takeId: string;
}

export interface CompingState {
  takes: AudioTake[];
  compRegions: CompRegion[];
  /** Length of the full comp (driven by longest take). */
  totalDurationSec: number;
}

export const TAKE_COLORS = [
  "#00d0f0",
  "#a855f7",
  "#22c55e",
  "#f97316",
  "#ec4899",
  "#38bdf8",
  "#facc15",
] as const;

/** Create a demo take with a synthetic waveform. */
export function createDemoTake(
  index: number,
  durationSec: number = 6,
): AudioTake {
  const seed = index * 7 + 13;
  const waveform = Array.from({ length: 48 }, (_, i: number) =>
    Math.min(
      1,
      Math.max(
        0.05,
        Math.abs(Math.sin((seed * 3 + i * 0.8) * 1.7)) * 0.85 + 0.1,
      ),
    ),
  );
  return {
    id: `take-${index}`,
    name: `Take ${index + 1}`,
    recordedAt: Date.now() - (3 - index) * 60_000,
    durationSec,
    waveform,
    active: index === 0,
    rating: 0,
    color: TAKE_COLORS[index % TAKE_COLORS.length],
  };
}

/** Build an initial comping state with demo takes. */
export function createInitialCompingState(takeCount: number = 3): CompingState {
  const takes = Array.from({ length: takeCount }, (_, i: number) =>
    createDemoTake(i),
  );
  const totalDurationSec = takes.reduce(
    (max, t) => Math.max(max, t.durationSec),
    0,
  );
  return { takes, compRegions: [], totalDurationSec };
}

export interface SessionClip {
  id: string;
  name: string;
  color: string;
  /** Number of bars in the clip (for loop display). */
  durationBars: number;
  looping: boolean;
  /** Whether this clip is currently playing in the Session View. */
  playing: boolean;
  /** An empty slot — can be recorded into. */
  isEmpty: boolean;
}

export interface SessionTrack {
  id: string;
  name: string;
  color: string;
  /** Arm for recording. */
  armed: boolean;
  muted: boolean;
  solo: boolean;
  volume: number;
  /** Ordered clip slots (one per scene row). */
  clips: SessionClip[];
}

export interface SessionScene {
  id: string;
  name: string;
  tempo?: number;
}

export interface SessionViewState {
  tracks: SessionTrack[];
  scenes: SessionScene[];
  /** Track id of the currently solo'd track, or null. */
  soloTrackId: string | null;
}

/** Create an empty session clip slot. */
export function createEmptyClip(
  trackId: string,
  sceneIndex: number,
): SessionClip {
  return {
    id: `clip-${trackId}-${sceneIndex}-${Date.now()}`,
    name: "",
    color: "#00d0f0",
    durationBars: 2,
    looping: true,
    playing: false,
    isEmpty: true,
  };
}

const SESSION_TRACK_DEFAULTS: Array<{
  id: string;
  name: string;
  color: string;
}> = [
  { id: "drums", name: "Drums", color: "#ef4444" },
  { id: "bass", name: "Bass", color: "#a855f7" },
  { id: "chords", name: "Chords", color: "#22c55e" },
  { id: "lead", name: "Lead", color: "#00d0f0" },
  { id: "fx", name: "FX", color: "#f97316" },
];

const SESSION_SCENE_DEFAULTS = [
  "Intro",
  "Verse",
  "Pre-Chorus",
  "Chorus",
  "Bridge",
  "Outro",
];

/** Demo clip content per track × scene. Empty = unfilled slot. */
const SESSION_DEMO_CLIPS: Record<
  string,
  Record<number, Partial<SessionClip>>
> = {
  drums: {
    0: { name: "Intro Kit", durationBars: 4, isEmpty: false },
    1: { name: "Verse Beat", durationBars: 4, isEmpty: false },
    3: { name: "Chorus Full", durationBars: 4, isEmpty: false },
  },
  bass: {
    1: { name: "Verse Line", durationBars: 4, isEmpty: false },
    3: { name: "Chorus Bass", durationBars: 4, isEmpty: false },
  },
  chords: {
    0: { name: "Pad Intro", durationBars: 8, isEmpty: false },
    3: { name: "Power Chords", durationBars: 4, isEmpty: false },
  },
  lead: {
    3: { name: "Lead Hook", durationBars: 4, isEmpty: false },
    4: { name: "Bridge Riff", durationBars: 4, isEmpty: false },
  },
  fx: {
    0: { name: "Riser", durationBars: 4, isEmpty: false },
    5: { name: "Outro Sweep", durationBars: 2, isEmpty: false },
  },
};

/** Build a default Session View with demo content. */
export function createInitialSessionView(): SessionViewState {
  const scenes: SessionScene[] = SESSION_SCENE_DEFAULTS.map(
    (name, i: number) => ({
      id: `scene-${i}`,
      name,
    }),
  );

  const tracks: SessionTrack[] = SESSION_TRACK_DEFAULTS.map((def) => ({
    ...def,
    armed: false,
    muted: false,
    solo: false,
    volume: 0.85,
    clips: scenes.map((_, sceneIndex) => {
      const demoPatch = SESSION_DEMO_CLIPS[def.id]?.[sceneIndex];
      const base = createEmptyClip(def.id, sceneIndex);
      base.color = def.color;
      if (demoPatch) {
        return { ...base, ...demoPatch };
      }
      return base;
    }),
  }));

  return { tracks, scenes, soloTrackId: null };
}

export interface AutomationPoint {
  /** Beat position. */
  beat: number;
  /** Normalized 0-1 value. */
  value: number;
}

export interface AutomationLane {
  id: string;
  paramId: string;
  paramLabel: string;
  color: string;
  points: AutomationPoint[];
}

export type AutomationMode = "read" | "write" | "latch" | "off";

export interface AutomationState {
  lanes: AutomationLane[];
  mode: AutomationMode;
}

export const AUTOMATABLE_PARAMS = [
  { id: "mixer.vocals", label: "Vocals Vol", color: "#ec4899" },
  { id: "mixer.instruments", label: "Instr Vol", color: "#2a8ab8" },
  { id: "mixer.bass", label: "Bass Vol", color: "#8b5cf6" },
  { id: "mixer.fx", label: "FX Vol", color: "#f59e0b" },
  { id: "pan.vocals", label: "Vocals Pan", color: "#ec4899" },
  { id: "send.reverb", label: "Reverb Send", color: "#22c55e" },
  { id: "send.delay", label: "Delay Send", color: "#00d0f0" },
] as const;

/** Create a default automation state with a volume lane. */
export function createInitialAutomationState(): AutomationState {
  const vocalsLane: AutomationLane = {
    id: "lane-vocals",
    paramId: "mixer.vocals",
    paramLabel: "Vocals Vol",
    color: "#ec4899",
    points: [
      { beat: 0, value: 0.8 },
      { beat: 4, value: 0.85 },
      { beat: 8, value: 0.9 },
      { beat: 12, value: 0.75 },
      { beat: 16, value: 0.8 },
    ],
  };
  return { lanes: [vocalsLane], mode: "read" };
}

export interface WarpMarker {
  id: string;
  /** Sample position in the original audio (0-1 normalized). */
  samplePos: number;
  /** Beat position in the project. */
  beatPos: number;
  /** Whether this marker is locked (cannot be moved). */
  locked: boolean;
}

export interface WarpState {
  enabled: boolean;
  markers: WarpMarker[];
  /** 'complex' (best quality), 'beats' (rhythmic content), 'tones' (melodic content), 'texture' (ambient). */
  warpMode: "complex" | "beats" | "tones" | "texture";
  /** Target BPM after warp (0 = use project BPM). */
  warpBpm: number;
  /** Pitch shift in semitones independent of tempo stretch. */
  pitchShift: number;
  /** Formant preservation (0-1) for vocal content. */
  formantPreservation: number;
}

export function createInitialWarpState(projectBpm: number = 120): WarpState {
  return {
    enabled: false,
    markers: [
      { id: "warp-0", samplePos: 0, beatPos: 0, locked: true },
      { id: "warp-1", samplePos: 1, beatPos: 4, locked: false },
    ],
    warpMode: "complex",
    warpBpm: projectBpm,
    pitchShift: 0,
    formantPreservation: 0.5,
  };
}

/** Compute the playback rate multiplier needed to stretch original audio to target BPM. */
export function computeWarpPlaybackRate(
  originalBpm: number,
  targetBpm: number,
): number {
  if (originalBpm <= 0) return 1;
  return targetBpm / originalBpm;
}

export type BitDepth = 16 | 24 | 32;
export type SampleRateHz = 44100 | 48000 | 88200 | 96000 | 176400 | 192000;

export interface AudioQualityConfig {
  bitDepth: BitDepth;
  sampleRate: SampleRateHz;
  /** Dithering algorithm for bit-depth reduction. */
  dither: "none" | "triangular" | "shaped";
  /** Whether to enable noise shaping on export. */
  noiseShaping: boolean;
}

export const AUDIO_QUALITY_PRESETS: Record<string, AudioQualityConfig> = {
  "CD Quality": {
    bitDepth: 16,
    sampleRate: 44100,
    dither: "triangular",
    noiseShaping: false,
  },
  "Hi-Res Streaming": {
    bitDepth: 24,
    sampleRate: 48000,
    dither: "none",
    noiseShaping: false,
  },
  "Studio 96k": {
    bitDepth: 24,
    sampleRate: 96000,
    dither: "none",
    noiseShaping: true,
  },
  "Studio 192k": {
    bitDepth: 32,
    sampleRate: 192000,
    dither: "none",
    noiseShaping: true,
  },
  "Mastering Grade": {
    bitDepth: 32,
    sampleRate: 192000,
    dither: "shaped",
    noiseShaping: true,
  },
};

/** Human-readable label for a quality config. */
export function audioQualityLabel(cfg: AudioQualityConfig): string {
  return `${cfg.bitDepth}-bit / ${cfg.sampleRate >= 1000 ? `${cfg.sampleRate / 1000}kHz` : `${cfg.sampleRate}Hz`}`;
}

export type StarMakerSequencerQuality = "idea" | "streaming" | "studio";

export interface StarMakerSequencerMixer {
  vocals: number;
  instruments: number;
  bass: number;
  fx: number;
}

export interface StarMakerSequencerSnapshot {
  bpm: number;
  beatGrid: boolean[][];
  mixer: StarMakerSequencerMixer;
  effects: string[];
  qualityMode: StarMakerSequencerQuality;
  sampleRate?: number;
  bars?: number;
}

export interface StarMakerAudioDiagnostics {
  engine: "audio-worklet" | "scheduled-web-audio" | "offline-renderer";
  sampleRate: number;
  baseLatencyMs: number;
  transportDriftMs: number;
  peak: number;
  rms: number;
  lufs: number;
}

export interface StarMakerStereoPcm {
  sampleRate: number;
  left: Float32Array;
  right: Float32Array;
  diagnostics: StarMakerAudioDiagnostics;
}

export interface RealtimeStarMakerAudioEngine {
  readonly diagnostics: StarMakerAudioDiagnostics;
  readonly playing: boolean;
  start(
    snapshot: StarMakerSequencerSnapshot,
    onStep?: (step: number) => void,
  ): Promise<void>;
  update(snapshot: StarMakerSequencerSnapshot): void;
  stop(): void;
  dispose(): Promise<void>;
}

const STARMAKER_DEFAULT_SAMPLE_RATE = 48_000;
const STARMAKER_STEPS_PER_BEAT = 2;
const STARMAKER_LOOP_STEPS = 8;
const STARMAKER_WORKLET_NAME = "starmaker-sequencer-dsp";

function clampAudio(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function normalizeMixerValue(value: number | undefined): number {
  return clampAudio((value ?? 75) / 100, 0, 1.25);
}

function getStepFrequency(channelIndex: number, stepIndex: number): number {
  if (channelIndex === 0) return 54.999;
  if (channelIndex === 1) return 184.997;
  if (channelIndex === 2) return 740 + (stepIndex % 2) * 90;
  return 220 * Math.pow(2, ((stepIndex % 8) + 3) / 12);
}

function getStepDuration(channelIndex: number, sampleRate: number): number {
  const seconds =
    channelIndex === 2
      ? 0.055
      : channelIndex === 0
        ? 0.18
        : channelIndex === 1
          ? 0.13
          : 0.26;
  return Math.max(16, Math.round(seconds * sampleRate));
}

function softLimit(sample: number): number {
  return Math.tanh(sample * 1.35) * 0.92;
}

function computePcmDiagnostics(
  left: Float32Array,
  right: Float32Array,
  sampleRate: number,
  engine: StarMakerAudioDiagnostics["engine"],
  transportDriftMs = 0,
  baseLatencyMs = 0,
): StarMakerAudioDiagnostics {
  let peak = 0;
  let sumSquares = 0;
  const length = Math.min(left.length, right.length);
  for (let i = 0; i < length; i++) {
    const l = left[i] || 0;
    const r = right[i] || 0;
    peak = Math.max(peak, Math.abs(l), Math.abs(r));
    sumSquares += (l * l + r * r) / 2;
  }
  const rms = Math.sqrt(sumSquares / Math.max(1, length));
  const lufs = -0.691 + 10 * Math.log10(Math.max(1e-12, rms * rms));
  return {
    engine,
    sampleRate,
    baseLatencyMs: Math.round(baseLatencyMs * 100) / 100,
    transportDriftMs: Math.round(transportDriftMs * 1000) / 1000,
    peak: Math.round(peak * 1000) / 1000,
    rms: Math.round(rms * 1000) / 1000,
    lufs: Math.round(lufs * 10) / 10,
  };
}

export function analyzeStereoPcm(
  pcm: Pick<StarMakerStereoPcm, "left" | "right" | "sampleRate">,
): StarMakerAudioDiagnostics {
  return computePcmDiagnostics(
    pcm.left,
    pcm.right,
    pcm.sampleRate,
    "offline-renderer",
  );
}

export function renderStarMakerPattern(
  snapshot: StarMakerSequencerSnapshot,
): StarMakerStereoPcm {
  const sampleRate = snapshot.sampleRate ?? STARMAKER_DEFAULT_SAMPLE_RATE;
  const stepSeconds =
    60 / clampAudio(snapshot.bpm, 20, 300) / STARMAKER_STEPS_PER_BEAT;
  const loopSteps = Math.max(
    STARMAKER_LOOP_STEPS,
    snapshot.beatGrid[0]?.length ?? STARMAKER_LOOP_STEPS,
  );
  const bars = snapshot.bars ?? 4;
  const totalSteps = loopSteps * bars;
  const length = Math.ceil(totalSteps * stepSeconds * sampleRate);
  const left = new Float32Array(length);
  const right = new Float32Array(length);
  const gains = [
    normalizeMixerValue(snapshot.mixer.vocals),
    normalizeMixerValue(snapshot.mixer.instruments),
    normalizeMixerValue(snapshot.mixer.bass),
    normalizeMixerValue(snapshot.mixer.fx),
  ];
  const studioGain =
    snapshot.qualityMode === "studio"
      ? 1.08
      : snapshot.qualityMode === "streaming"
        ? 0.95
        : 0.82;
  const saturation =
    snapshot.effects.includes("Saturation") ||
    snapshot.effects.includes("Distortion");
  const delay = snapshot.effects.includes("Delay");

  for (let step = 0; step < totalSteps; step++) {
    const stepInLoop = step % loopSteps;
    const start = Math.floor(step * stepSeconds * sampleRate);
    for (let channel = 0; channel < snapshot.beatGrid.length; channel++) {
      if (!snapshot.beatGrid[channel]?.[stepInLoop]) continue;
      const duration = getStepDuration(channel, sampleRate);
      const frequency = getStepFrequency(channel, stepInLoop);
      const gain = gains[channel] ?? 0.6;
      const pan = -0.48 + channel * 0.32;
      for (let i = 0; i < duration && start + i < length; i++) {
        const t = i / sampleRate;
        const env = Math.exp(
          -i / Math.max(1, duration * (channel === 3 ? 0.55 : 0.28)),
        );
        const tone =
          channel === 2
            ? (Math.random() * 2 - 1) * env
            : Math.sin(Math.PI * 2 * frequency * t) * env;
        const shaped = saturation ? softLimit(tone * 1.8) : tone;
        const sample = shaped * gain * 0.26 * studioGain;
        left[start + i] += sample * (1 - Math.max(0, pan));
        right[start + i] += sample * (1 + Math.min(0, pan));
        if (delay) {
          const delayIndex = start + i + Math.round(sampleRate * 0.18);
          if (delayIndex < length) {
            left[delayIndex] += sample * 0.22;
            right[delayIndex] += sample * 0.26;
          }
        }
      }
    }
  }

  for (let i = 0; i < length; i++) {
    left[i] = softLimit(left[i]);
    right[i] = softLimit(right[i]);
  }

  return {
    sampleRate,
    left,
    right,
    diagnostics: computePcmDiagnostics(
      left,
      right,
      sampleRate,
      "offline-renderer",
    ),
  };
}

export function encodeWav24Bit(
  pcm: Pick<StarMakerStereoPcm, "left" | "right" | "sampleRate">,
): Blob {
  const channels = 2;
  const bytesPerSample = 3;
  const frames = Math.min(pcm.left.length, pcm.right.length);
  const dataSize = frames * channels * bytesPerSample;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);
  const writeString = (offset: number, value: string) => {
    for (let i = 0; i < value.length; i++)
      view.setUint8(offset + i, value.charCodeAt(i));
  };
  writeString(0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, channels, true);
  view.setUint32(24, pcm.sampleRate, true);
  view.setUint32(28, pcm.sampleRate * channels * bytesPerSample, true);
  view.setUint16(32, channels * bytesPerSample, true);
  view.setUint16(34, bytesPerSample * 8, true);
  writeString(36, "data");
  view.setUint32(40, dataSize, true);
  let offset = 44;
  for (let i = 0; i < frames; i++) {
    for (const sample of [pcm.left[i] ?? 0, pcm.right[i] ?? 0]) {
      const int = Math.round(clampAudio(sample, -1, 1) * 8_388_607);
      view.setUint8(offset, int & 0xff);
      view.setUint8(offset + 1, (int >> 8) & 0xff);
      view.setUint8(offset + 2, (int >> 16) & 0xff);
      offset += 3;
    }
  }
  return new Blob([buffer], { type: "audio/wav" });
}

const STARMAKER_WORKLET_SOURCE = `
class StarMakerSequencerDsp extends AudioWorkletProcessor {
  constructor() {
    super();
    this.snapshot = { bpm: 120, beatGrid: [[], [], [], []], mixer: { vocals: 80, instruments: 75, bass: 70, fx: 50 }, effects: [], qualityMode: 'studio' };
    this.sampleCursor = 0;
    this.lastStep = -1;
    this.voices = [];
    this.port.onmessage = (event) => {
      if (event.data && event.data.type === 'snapshot') this.snapshot = event.data.snapshot;
      if (event.data && event.data.type === 'stop') this.voices = [];
    };
  }
  process(_inputs, outputs) {
    const out = outputs[0];
    const left = out[0];
    const right = out[1] || out[0];
    const bpm = Math.max(20, Math.min(300, this.snapshot.bpm || 120));
    const stepSamples = Math.max(32, Math.round(sampleRate * 60 / bpm / ${STARMAKER_STEPS_PER_BEAT}));
    const loopSteps = Math.max(${STARMAKER_LOOP_STEPS}, (this.snapshot.beatGrid[0] || []).length || ${STARMAKER_LOOP_STEPS});
    const gains = [this.snapshot.mixer.vocals, this.snapshot.mixer.instruments, this.snapshot.mixer.bass, this.snapshot.mixer.fx].map((v) => Math.max(0, Math.min(1.25, (v || 75) / 100)));
    for (let i = 0; i < left.length; i++) {
      const step = Math.floor(this.sampleCursor / stepSamples) % loopSteps;
      if (step !== this.lastStep) {
        this.lastStep = step;
        this.port.postMessage({ type: 'step', step, currentFrame });
        for (let channel = 0; channel < this.snapshot.beatGrid.length; channel++) {
          if (this.snapshot.beatGrid[channel] && this.snapshot.beatGrid[channel][step]) {
            const frequency = channel === 0 ? 54.999 : channel === 1 ? 184.997 : channel === 2 ? 740 + (step % 2) * 90 : 220 * Math.pow(2, ((step % 8) + 3) / 12);
            const duration = Math.max(16, Math.round((channel === 2 ? 0.055 : channel === 0 ? 0.18 : channel === 1 ? 0.13 : 0.26) * sampleRate));
            this.voices.push({ channel, frequency, age: 0, duration, gain: gains[channel] || 0.7, pan: -0.48 + channel * 0.32 });
          }
        }
      }
      let l = 0; let r = 0;
      for (let v = this.voices.length - 1; v >= 0; v--) {
        const voice = this.voices[v];
        const env = Math.exp(-voice.age / Math.max(1, voice.duration * (voice.channel === 3 ? 0.55 : 0.28)));
        const tone = voice.channel === 2 ? (Math.random() * 2 - 1) * env : Math.sin(2 * Math.PI * voice.frequency * voice.age / sampleRate) * env;
        const sample = Math.tanh(tone * voice.gain * 0.36 * 1.35) * 0.82;
        l += sample * (1 - Math.max(0, voice.pan));
        r += sample * (1 + Math.min(0, voice.pan));
        voice.age++;
        if (voice.age >= voice.duration) this.voices.splice(v, 1);
      }
      left[i] = Math.tanh(l);
      right[i] = Math.tanh(r);
      this.sampleCursor++;
    }
    return true;
  }
}
registerProcessor('${STARMAKER_WORKLET_NAME}', StarMakerSequencerDsp);
`;

export async function createRealtimeStarMakerAudioEngine(): Promise<RealtimeStarMakerAudioEngine> {
  const AudioContextCtor =
    globalThis.AudioContext ??
    (
      globalThis as typeof globalThis & {
        webkitAudioContext?: typeof AudioContext;
      }
    ).webkitAudioContext;
  if (!AudioContextCtor)
    throw new Error("Web Audio is not available in this browser.");
  const context = new AudioContextCtor({
    sampleRate: STARMAKER_DEFAULT_SAMPLE_RATE,
    latencyHint: "interactive",
  });
  const master = context.createGain();
  const compressor = context.createDynamicsCompressor();
  const analyser = context.createAnalyser();
  master.gain.value = 0.82;
  compressor.threshold.value = -10;
  compressor.ratio.value = 5;
  analyser.fftSize = 1024;
  master.connect(compressor);
  compressor.connect(analyser);
  analyser.connect(context.destination);

  let node: AudioWorkletNode | null = null;
  let workletUrl: string | null = null;
  let timer: ReturnType<typeof setInterval> | null = null;
  let snapshot: StarMakerSequencerSnapshot | null = null;
  let onStepCallback: ((step: number) => void) | undefined;
  let playing = false;
  let diagnostics = computePcmDiagnostics(
    new Float32Array(1),
    new Float32Array(1),
    context.sampleRate,
    "scheduled-web-audio",
    0,
    context.baseLatency || 0,
  );

  const fallbackSchedule = () => {
    if (!snapshot || !playing) return;
    let step = 0;
    let expected = performance.now();
    const intervalMs = 60_000 / snapshot.bpm / STARMAKER_STEPS_PER_BEAT;
    timer = setInterval(() => {
      if (!snapshot) return;
      const drift = performance.now() - expected;
      diagnostics = {
        ...diagnostics,
        transportDriftMs: Math.round(drift * 1000) / 1000,
      };
      onStepCallback?.(
        step %
          Math.max(
            STARMAKER_LOOP_STEPS,
            snapshot.beatGrid[0]?.length ?? STARMAKER_LOOP_STEPS,
          ),
      );
      step++;
      expected += intervalMs;
    }, intervalMs);
  };

  if (context.audioWorklet) {
    workletUrl = URL.createObjectURL(
      new Blob([STARMAKER_WORKLET_SOURCE], { type: "text/javascript" }),
    );
    await context.audioWorklet.addModule(workletUrl);
    node = new AudioWorkletNode(context, STARMAKER_WORKLET_NAME, {
      numberOfOutputs: 1,
      outputChannelCount: [2],
    });
    node.port.onmessage = (
      event: MessageEvent<{ type: string; step?: number }>,
    ) => {
      if (event.data.type === "step" && typeof event.data.step === "number")
        onStepCallback?.(event.data.step);
    };
    node.connect(master);
    diagnostics = { ...diagnostics, engine: "audio-worklet" };
  }

  const engine: RealtimeStarMakerAudioEngine = {
    get diagnostics() {
      return diagnostics;
    },
    get playing() {
      return playing;
    },
    async start(nextSnapshot, onStep) {
      snapshot = nextSnapshot;
      onStepCallback = onStep;
      await context.resume();
      playing = true;
      diagnostics = {
        ...diagnostics,
        baseLatencyMs: Math.round((context.baseLatency || 0) * 100000) / 100,
      };
      if (node) {
        node.port.postMessage({ type: "snapshot", snapshot: nextSnapshot });
      } else {
        fallbackSchedule();
      }
    },
    update(nextSnapshot) {
      snapshot = nextSnapshot;
      if (node)
        node.port.postMessage({ type: "snapshot", snapshot: nextSnapshot });
    },
    stop() {
      playing = false;
      if (timer) clearInterval(timer);
      timer = null;
      if (node) node.port.postMessage({ type: "stop" });
    },
    async dispose() {
      this.stop();
      node?.disconnect();
      master.disconnect();
      compressor.disconnect();
      analyser.disconnect();
      if (workletUrl) URL.revokeObjectURL(workletUrl);
      await context.close();
    },
  };

  return engine;
}
