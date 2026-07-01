#!/usr/bin/env node


import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', '..');



const PAIRS = [
  { domain: 'music',  engin: 'StarMakerEngin', file: 'components/daydream/StarMakerEngin.tsx' },
  { domain: 'games',  engin: 'GameEngin',       file: 'components/daydream/GameEngin.tsx'       },
  { domain: 'lab',    engin: 'LabEngin',         file: 'components/daydream/LabEngin.tsx'         },
  { domain: 'code',   engin: 'CodeEngin',        file: 'components/daydream/CodeEngin.tsx'        },
  { domain: 'brand',  engin: 'BrandingEngin',    file: 'components/daydream/BrandingEngin.tsx'    },
  { domain: 'create', engin: 'ContentEngin',     file: 'components/daydream/ContentEngin.tsx'     },
];





const DETECT = {
  
  'waveform-viz':        'WaveformVisualizer',
  'chord-builder':       'ChordBuilder',
  'ai-melody':           'AiMelodySuggestions',
  'collab-studio':       'CollabStudio',
  'playlist-manager':    'PlaylistManager',
  
  'multiplayer-lobby':   'MultiplayerLobby',
  'tournament-mode':     'TournamentMode',
  'game-analytics':      'GameAnalytics',
  'replay-system':       'ReplaySystem',
  'social-challenges':   'SocialChallenge',
  
  'collab-lab':          'CollabLab',
  'ai-hypothesis':       'AiHypothesisGenerator',
  'molecule-viewer':     'MoleculeViewer',
  'dataset-browser':     'DatasetBrowser',
  'published-results':   'PublishedResults',
  
  'ai-code-assist':      'AiCodeAssist',
  'live-pair-programming':'PairProgramming',
  'deployment-console':  'DeploymentConsole',
  'api-inspector':       'ApiInspector',
  'snippet-library':     'SnippetLibrary',
  
  'content-calendar-link':'ContentCalendarLink',
  'audience-segments':   'AudienceSegment',
  'brand-voice-ai':      'BrandVoiceAi',
  'competitor-watch':    'CompetitorWatch',
  'asset-library':       'AssetLibrary',
  
  'media-vault-link':    'media-vault',
  'ai-caption':          'AiCaption',
  'collab-drafts':       'CollabDraft',
  'content-analytics':   'ContentAnalytics',
  'template-gallery':    'TemplateGallery',
  'short-video-editor':  'ShortVideoEditor',
  'hashtag-optimizer':   'HashtagOptimizer',
};



const PLANNED_BY_DOMAIN = {
  music:  ['waveform-viz','chord-builder','ai-melody','collab-studio','playlist-manager'],
  games:  ['multiplayer-lobby','tournament-mode','game-analytics','replay-system','social-challenges'],
  lab:    ['collab-lab','ai-hypothesis','molecule-viewer','dataset-browser','published-results'],
  code:   ['ai-code-assist','live-pair-programming','deployment-console','api-inspector','snippet-library'],
  brand:  ['content-calendar-link','audience-segments','brand-voice-ai','competitor-watch','asset-library'],
  create: ['media-vault-link','ai-caption','collab-drafts','content-analytics','template-gallery','short-video-editor','hashtag-optimizer'],
};



function readFile(rel) {
  const abs = resolve(ROOT, rel);
  if (!existsSync(abs)) throw new Error(`File not found: ${abs}`);
  return readFileSync(abs, 'utf8');
}

function writeFile(rel, content) {
  writeFileSync(resolve(ROOT, rel), content, 'utf8');
}

function isMissing(fileContent, featureId) {
  const pattern = DETECT[featureId];
  if (!pattern) return false;
  return !fileContent.includes(pattern);
}


function findWidgetListInsertionPoint(content) {
  
  const patterns = [
    '\n\n        </div>\n      </div>\n    </div>\n  );\n}',
    '\n        </div>\n\n      </div>\n    </div>\n  );\n}',
    '\n        </div>\n      </div>\n    </div>\n  );\n}',
    '\n      </div>\n    </div>\n  );\n}',
  ];
  for (const p of patterns) {
    const idx = content.lastIndexOf(p);
    if (idx !== -1) return { idx, closeSeq: p };
  }
  return null;
}




function injectFeature(content, widgetJsx, stateCode, componentCode) {
  let result = content;

  
  if (stateCode) {
    const renderMarker = '// ── Render ──';
    const renderIdx = result.indexOf(renderMarker);
    if (renderIdx !== -1) {
      result = result.slice(0, renderIdx) + stateCode + '\n\n  ' + result.slice(renderIdx);
    }
  }

  
  const point = findWidgetListInsertionPoint(result);
  if (point) {
    const { idx, closeSeq } = point;
    result = result.slice(0, idx) + '\n\n' + widgetJsx + closeSeq + result.slice(idx + closeSeq.length);
  } else {
    
    result = result.trimEnd() + '\n\n' + widgetJsx + '\n';
  }

  
  if (componentCode) {
    result = result.trimEnd() + '\n\n' + componentCode + '\n';
  }

  return result;
}





const FEATURE_IMPLS = {

  

  'waveform-viz': {
    stateCode: `  // ── Waveform Visualizer state ──
  const [waveformRecording, setWaveformRecording] = useState(false);
  const [waveformBars] = useState<number[]>(() =>
    Array.from({ length: 32 }, () => 0.2 + Math.random() * 0.8),
  );`,
    widgetJsx: `          {/* WaveformVisualizer */}
          <WaveformVisualizer
            bars={waveformBars}
            recording={waveformRecording}
            onToggle={() => {
              const next = !waveformRecording;
              setWaveformRecording(next);
              bridge.emit('music', 'music:waveform-record', { recording: next });
            }}
          />`,
    componentCode: `// ─────────────────────────────────────────────────────────────────────────────
// WaveformVisualizer
// ─────────────────────────────────────────────────────────────────────────────

function WaveformVisualizer({ bars, recording, onToggle }: ) {
  bars: number[];
  recording: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="de-widget">
      <div className="de-widget-header">
        <span className="de-widget-title" style={{ color: ACCENT }}>
          Waveform Visualizer
        </span>
        <span style={{ fontSize: 10, color: recording ? '#22c55e' : 'var(--de-text-dim)' }}>
          {recording ? '● REC' : '○ IDLE'}
        </span>
      </div>
      <div className="de-widget-body">
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 48 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: \`\${h * 100}%\`,
                background: recording
                  ? \`linear-gradient(180deg, \${ACCENT}, \${ACCENT}88)\`
                  : 'rgba(160,195,240,0.35)',
                borderRadius: 2,
                transition: recording ? 'height 0.12s ease' : 'none',
              }}
            />
          ))}
        </div>
      </div>
      <div className="de-widget-actions">
        <button
          type="button"
          onClick={onToggle}
          className={recording ? 'de-btn de-btn-ghost' : 'de-btn de-btn-primary'}
          aria-label={recording ? 'Stop recording' : 'Start recording waveform'}
        >
          {recording ? '■ Stop' : '● Record'}
        </button>
      </div>
    </div>
  );
}`,
  },

  'chord-builder': {
    stateCode: `  // ── Chord Builder state ──
  const [chordProgression, setChordProgression] = useState<string[]>(['Cmaj', 'Amin', 'Fmaj', 'Gmaj']);
  const [chordPlaying, setChordPlaying] = useState<number | null>(null);`,
    widgetJsx: `          {/* ChordBuilder */}
          <ChordBuilder
            progression={chordProgression}
            playing={chordPlaying}
            onChordChange={(i, v) => setChordProgression((p) => { const n = [...p]; n[i] = v; return n; })}
            onPlay={(i) => {
              setChordPlaying(i);
              bridge.emit('music', 'music:chord-play', { chord: chordProgression[i], index: i });
              setTimeout(() => setChordPlaying(null), 600);
            }}
          />`,
    componentCode: `// ─────────────────────────────────────────────────────────────────────────────
// ChordBuilder
// ─────────────────────────────────────────────────────────────────────────────

const COMMON_CHORDS = ['Cmaj','Cmin','Dmaj','Dmin','Emaj','Emin','Fmaj','Fmin','Gmaj','Gmin','Amaj','Amin','Bmaj','Bmin'];

function ChordBuilder({ progression, playing, onChordChange, onPlay }: ) {
  progression: string[];
  playing: number | null;
  onChordChange: (i: number, v: string) => void;
  onPlay: (i: number) => void;
}) {
  return (
    <div className="de-widget">
      <div className="de-widget-header">
        <span className="de-widget-title" style={{ color: ACCENT }}>Chord Builder</span>
      </div>
      <div className="de-widget-body">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {progression.map((chord, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: '1 1 calc(25% - 8px)', minWidth: 64 }}>
              <select
                value={chord}
                onChange={e => onChordChange(i, e.target.value)}
                aria-label={\`Chord slot \${i + 1}\`}
                style={{
                  padding: '6px 8px', borderRadius: 8, fontSize: 12, fontWeight: 700,
                  border: \`1px solid \${ACCENT}30\`, background: \`\${ACCENT}0a\`,
                  color: 'var(--de-heading)', cursor: 'pointer',
                }}
              >
                {COMMON_CHORDS.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <button
                type="button"
                onClick={() => onPlay(i)}
                className="de-btn de-btn-primary"
                aria-label={\`Play chord \${chord}\`}
                style={{ fontSize: 10, padding: '4px 0', opacity: playing === i ? 0.6 : 1 }}
              >
                {playing === i ? '♪' : '▶'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,
  },

  'ai-melody': {
    stateCode: `  // ── AI Melody state ──
  const [melodyLoading, setMelodyLoading] = useState(false);
  const [melodySuggestions, setMelodySuggestions] = useState<string[]>([]);`,
    widgetJsx: `          {/* AiMelodySuggestions */}
          <AiMelodySuggestions
            loading={melodyLoading}
            suggestions={melodySuggestions}
            onAsk={() => {
              setMelodyLoading(true);
              setMelodySuggestions([]);
              bridge.emit('music', 'music:melody-request', { key: musicalKey, mode: keyMode });
              setTimeout(() => {
                setMelodyLoading(false);
                setMelodySuggestions([
                  \`\${musicalKey} D E G A — Pentatonic ascent\`,
                  \`A G F E D — Natural minor descent\`,
                  \`C E G B D — Major 7th arpeggio\`,
                ]);
              }, 1200);
            }}
          />`,
    componentCode: `// ─────────────────────────────────────────────────────────────────────────────
// AiMelodySuggestions
// ─────────────────────────────────────────────────────────────────────────────

function AiMelodySuggestions({ loading, suggestions, onAsk }: ) {
  loading: boolean;
  suggestions: string[];
  onAsk: () => void;
}) {
  return (
    <div className="de-widget">
      <div className="de-widget-header">
        <span className="de-widget-title" style={{ color: ACCENT }}>
          <Wand2 className="w-3.5 h-3.5 inline mr-1" style={{ color: ACCENT }} />
          AI Melody Suggestions
        </span>
        <span style={{ fontSize: 9, color: 'var(--de-text-dim)', fontStyle: 'italic' }}>Dr. Eams</span>
      </div>
      <div className="de-widget-body">
        {suggestions.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {suggestions.map((s, i) => (
              <div key={i} style={{
                padding: '8px 12px', borderRadius: 8,
                background: \`\${ACCENT}0a\`, border: \`1px solid \${ACCENT}25\`,
                fontSize: 12, fontWeight: 600, color: 'var(--de-heading)',
                fontFamily: 'monospace',
              }}>
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="de-widget-actions">
        <button
          type="button"
          onClick={onAsk}
          disabled={loading}
          className="de-btn de-btn-primary"
          aria-label="Ask Dr. Eams for melody suggestions"
          style={{ opacity: loading ? 0.6 : 1 }}
        >
          {loading ? 'Asking Dr. Eams…' : '✦ Ask Dr. Eams'}
        </button>
      </div>
    </div>
  );
}`,
  },

  'collab-studio': {
    stateCode: `  // ── Collab Studio state ──
  const [collabActive, setCollabActive] = useState(false);
  const [collabCode, setCollabCode] = useState('');`,
    widgetJsx: `          {/* CollabStudio */}
          <CollabStudio
            active={collabActive}
            code={collabCode}
            onStart={() => {
              const code = Math.random().toString(36).slice(2, 8).toUpperCase();
              setCollabCode(code);
              setCollabActive(true);
              bridge.emit('music', 'music:collab-start', { code });
            }}
            onEnd={() => { setCollabActive(false); setCollabCode(''); }}
          />`,
    componentCode: `// ─────────────────────────────────────────────────────────────────────────────
// CollabStudio
// ─────────────────────────────────────────────────────────────────────────────

function CollabStudio({ active, code, onStart, onEnd }: ) {
  active: boolean;
  code: string;
  onStart: () => void;
  onEnd: () => void;
}) {
  const AVATARS = [{ initial: 'A', color: '#a855f7' }, { initial: 'B', color: '#ec4899' }];
  return (
    <div className="de-widget">
      <div className="de-widget-header">
        <span className="de-widget-title" style={{ color: ACCENT }}>Collaboration Studio</span>
        {active && (
          <span style={{ fontSize: 10, fontWeight: 700, color: '#22c55e' }}>● Live</span>
        )}
      </div>
      <div className="de-widget-body">
        {active ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 11, color: 'var(--de-text-dim)' }}>Room Code:</span>
              <code style={{
                fontSize: 15, fontWeight: 800, letterSpacing: '0.12em',
                color: ACCENT, padding: '4px 10px', borderRadius: 6,
                background: \`\${ACCENT}12\`, border: \`1px solid \${ACCENT}30\`,
              }}>{code}</code>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {AVATARS.map((a) => (
                <div key={a.initial} style={{
                  width: 30, height: 30, borderRadius: '50%',
                  background: a.color, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700,
                }}>{a.initial}</div>
              ))}
              <span style={{ fontSize: 11, color: 'var(--de-text-dim)', alignSelf: 'center' }}>
                2 collaborators online
              </span>
            </div>
          </div>
        ) : (
          <p style={{ fontSize: 12, color: 'var(--de-text-dim)' }}>
            Start a live session to collaborate with other producers in real time.
          </p>
        )}
      </div>
      <div className="de-widget-actions">
        {active ? (
          <button type="button" onClick={onEnd} className="de-btn de-btn-ghost" aria-label="End collaboration session">
            End Session
          </button>
        ) : (
          <button type="button" onClick={onStart} className="de-btn de-btn-primary" aria-label="Start collaboration session">
            Start Session
          </button>
        )}
      </div>
    </div>
  );
}`,
  },

  'playlist-manager': {
    stateCode: `  // ── Playlist Manager state ──
  const [playlist, setPlaylist] = useState([
    { id: 'pl1', title: 'Summer Vibes', duration: '3:42' },
    { id: 'pl2', title: 'Night Drive',  duration: '4:15' },
    { id: 'pl3', title: 'Morning Mist', duration: '2:58' },
  ]);`,
    widgetJsx: `          {/* PlaylistManager */}
          <PlaylistManager
            playlist={playlist}
            onMoveUp={i => setPlaylist((p) => { if (i === 0) return p; const n = [...p]; [n[i-1],n[i]] = [n[i],n[i-1]]; return n; })}
            onMoveDown={i => setPlaylist((p) => { if (i === p.length-1) return p; const n = [...p]; [n[i],n[i+1]] = [n[i+1],n[i]]; return n; })}
            onSave={() => bridge.emit('music', 'music:playlist-save', { order: playlist.map((p) => p.id) })}
          />`,
    componentCode: `// ─────────────────────────────────────────────────────────────────────────────
// PlaylistManager
// ─────────────────────────────────────────────────────────────────────────────

function PlaylistManager({ playlist, onMoveUp, onMoveDown, onSave }: ) {
  playlist: Array<{ id: string; title: string; duration: string }>;
  onMoveUp: (i: number) => void;
  onMoveDown: (i: number) => void;
  onSave: () => void;
}) {
  return (
    <div className="de-widget">
      <div className="de-widget-header">
        <span className="de-widget-title" style={{ color: ACCENT }}>Playlist Manager</span>
      </div>
      <div className="de-widget-body">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {playlist.map((track, i) => (
            <div key={track.id} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 10px', borderRadius: 8,
              background: 'rgba(255,255,255,0.45)', border: '1px solid rgba(160,195,240,0.18)',
            }}>
              <span style={{ fontSize: 11, color: 'var(--de-text-dim)', width: 16, textAlign: 'center' }}>{i+1}</span>
              <span style={{ flex: 1, fontSize: 12, fontWeight: 600, color: 'var(--de-heading)' }}>{track.title}</span>
              <span style={{ fontSize: 11, color: 'var(--de-text-dim)' }}>{track.duration}</span>
              <button type="button" onClick={() => onMoveUp(i)} disabled={i === 0}
                aria-label={\`Move \${track.title} up\`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: ACCENT, opacity: i === 0 ? 0.3 : 1, fontSize: 12 }}>▲</button>
              <button type="button" onClick={() => onMoveDown(i)} disabled={i === playlist.length - 1}
                aria-label={\`Move \${track.title} down\`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: ACCENT, opacity: i === playlist.length - 1 ? 0.3 : 1, fontSize: 12 }}>▼</button>
            </div>
          ))}
        </div>
      </div>
      <div className="de-widget-actions">
        <button type="button" onClick={onSave} className="de-btn de-btn-primary" aria-label="Save playlist order">
          Save Order
        </button>
      </div>
    </div>
  );
}`,
  },
};



const DOMAIN_FEATURES = {
  music: ['waveform-viz', 'chord-builder', 'ai-melody', 'collab-studio', 'playlist-manager'],
  
  
};



const targetDomain = process.argv[2] || 'all';

let totalInjected = 0;

for (const { domain, engin, file } of PAIRS) {
  if (targetDomain !== 'all' && targetDomain !== domain) continue;

  const abs = resolve(ROOT, file);
  if (!existsSync(abs)) {
    console.error(`[${domain}] ERROR: ${file} not found`);
    process.exit(1);
  }

  let content = readFileSync(abs, 'utf8');
  const planned = PLANNED_BY_DOMAIN[domain] || [];
  let injected = 0;

  for (const featureId of planned) {
    const pattern = DETECT[featureId];
    if (!pattern) continue;

    
    if (content.includes(pattern)) {
      console.log(`[${domain}] ✓ ${featureId} — already implemented`);
      continue;
    }

    
    const impl = FEATURE_IMPLS[featureId];
    if (!impl) {
      console.log(`[${domain}] ⚠ ${featureId} — no template in generator, skipping`);
      continue;
    }

    console.log(`[${domain}] ➕ Injecting ${featureId}…`);
    content = injectFeature(content, impl.widgetJsx, impl.stateCode, impl.componentCode);
    injected++;
    totalInjected++;
  }

  if (injected > 0) {
    writeFileSync(abs, content, 'utf8');
    console.log(`[${domain}] ✅ Wrote ${injected} new feature(s) to ${file}`);
  } else {
    console.log(`[${domain}] ✓ All features already implemented — no changes`);
  }
}

console.log(`\n✅ Done. ${totalInjected} feature(s) injected total.`);
process.exit(0);
