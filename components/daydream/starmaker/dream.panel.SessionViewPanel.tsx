'use client';

import {
    type SessionTrack,
    type SessionViewState,
} from '@/engins/starmakerengin/music/starmakerDaw';
import { Mic2, Radio, Square, StopCircle, Volume2 } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';



const T = {
  bg:          '#0d0f17',
  surface:     '#141720',
  surfaceHi:   '#1c2030',
  border:      'rgba(255,255,255,0.07)',
  borderBright:'rgba(255,255,255,0.14)',
  text:        '#e2e5ee',
  dim:         '#6e7585',
  accent:      '#00d0f0',
  green:       '#22c55e',
  purple:      '#a855f7',
  red:         '#ef4444',
  orange:      '#f97316',
} as const;

const CELL_W = 104;
const CELL_H = 40;
const HEADER_H = 68;

interface SessionViewPanelProps {
  state: SessionViewState;
  bpm: number;
  onStateChange: (next: SessionViewState) => void;
}

export default function SessionViewPanel({ state, bpm, onStateChange }: SessionViewPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [flash, setFlash] = useState(false);
  const flashTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { tracks, scenes, soloTrackId } = state;
  const anyPlaying = tracks.some((tr) => tr.clips.some((cl) => cl.playing));

  
  useEffect(() => {
    if (anyPlaying) {
      const beatMs = (60 / bpm) * 1000;
      flashTimerRef.current = setInterval(() => setFlash((f) => !f), beatMs / 2);
    } else {
      if (flashTimerRef.current) clearInterval(flashTimerRef.current);
      setFlash(false);
    }
    return () => { if (flashTimerRef.current) clearInterval(flashTimerRef.current); };
  }, [anyPlaying, bpm]);

  const updateTrack = useCallback((trackId: string, patch: Partial<SessionTrack>) => {
    onStateChange({
      ...state,
      tracks: tracks.map((tr) => tr.id === trackId ? { ...tr, ...patch } : tr),
    });
  }, [state, tracks, onStateChange]);

  function handleClipClick(trackId: string, clipIndex: number): number | undefined {
    const track = tracks.find((t) => t.id === trackId);
    if (!track) return;
    const clip = track.clips[clipIndex];
    if (!clip || clip.isEmpty) return;

    const isPlaying = clip.playing;
    
    onStateChange({
      ...state,
      tracks: tracks.map((tr) =>
        tr.id !== trackId ? tr : {
          ...tr,
          clips: tr.clips.map((cl, i: number) => ({
            ...cl,
            playing: i === clipIndex ? !isPlaying : false,
          })),
        },
      ),
    });
  }

  function handleSceneLaunch(sceneIndex: number ){
    
    onStateChange({
      ...state,
      tracks: tracks.map((tr) => ({
        ...tr,
        clips: tr.clips.map((cl, i: number) => ({
          ...cl,
          playing: i === sceneIndex && !cl.isEmpty,
        })),
      })),
    });
  }

  function handleStopAll( ){
    onStateChange({
      ...state,
      tracks: tracks.map((tr) => ({
        ...tr,
        clips: tr.clips.map((cl) => ({ ...cl, playing: false })),
      })),
    });
  }

  function handleMuteToggle(trackId: string ){
    const track = tracks.find((t) => t.id === trackId);
    if (!track) return;
    updateTrack(trackId, { muted: !track.muted });
  }

  function handleSoloToggle(trackId: string ){
    const newSolo = soloTrackId === trackId ? null : trackId;
    onStateChange({ ...state, soloTrackId: newSolo });
  }

  function handleArmToggle(trackId: string ){
    const track = tracks.find((t) => t.id === trackId);
    if (!track) return;
    updateTrack(trackId, { armed: !track.armed });
  }

  function handleVolumeChange(trackId: string, volume: number): void {
    updateTrack(trackId, { volume });
  }

  const isSoloActive = soloTrackId !== null;

  return (
    <div style={{ background: T.surface, borderBottom: `1px solid ${T.border}` }}>
      
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '8px 12px',
        background: '#111420',
        borderBottom: `1px solid ${T.border}`,
      }}>
        <Radio className="w-3 h-3" style={{ color: T.accent }} />
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.dim }}>
          Session View — Clip Launcher
        </span>
        {anyPlaying && (
          <span style={{
            fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 999,
            background: flash ? `${T.green}30` : `${T.green}18`,
            color: T.green, border: `1px solid ${T.green}30`,
            transition: 'background 0.1s',
          }}>
            ● LIVE
          </span>
        )}
        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          style={{
            marginLeft: 'auto',
            padding: '3px 10px', borderRadius: 6, cursor: 'pointer',
            background: isOpen ? `${T.accent}18` : `rgba(255,255,255,0.04)`,
            border: `1px solid ${isOpen ? `${T.accent}40` : T.border}`,
            color: isOpen ? T.accent : T.dim, fontSize: 11, fontWeight: 700,
          }}>
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>

      {isOpen && (
        <div style={{ padding: '12px', overflowX: 'auto' }}>
          
          <div style={{ minWidth: (CELL_W * tracks.length) + 100, userSelect: 'none' }}>

            
            <div style={{ display: 'flex', marginLeft: 80 }}>
              {tracks.map((track) => {
                const isEffective = isSoloActive ? soloTrackId === track.id : !track.muted;
                return (
                  <div
                    key={track.id}
                    style={{
                      width: CELL_W, flexShrink: 0,
                      height: HEADER_H,
                      padding: '6px 8px',
                      borderRight: `1px solid ${T.border}`,
                      borderBottom: `1px solid ${T.borderBright}`,
                      background: track.armed ? `${track.color}10` : '#0f1118',
                      display: 'flex', flexDirection: 'column', gap: 4,
                      opacity: isEffective ? 1 : 0.45,
                    }}>
                    
                    <div style={{ fontSize: 11, fontWeight: 800, color: track.color, letterSpacing: '0.05em' }}>
                      {track.name}
                    </div>

                    
                    <div style={{ display: 'flex', gap: 4 }}>
                      
                      <button
                        type="button"
                        onClick={() => handleMuteToggle(track.id)}
                        title="Mute"
                        style={{
                          padding: '3px 5px', borderRadius: 4, cursor: 'pointer',
                          background: track.muted ? `${T.orange}25` : `rgba(255,255,255,0.05)`,
                          border: `1px solid ${track.muted ? `${T.orange}50` : T.border}`,
                          color: track.muted ? T.orange : T.dim, fontSize: 9, fontWeight: 800,
                        }}>
                        M
                      </button>

                      
                      <button
                        type="button"
                        onClick={() => handleSoloToggle(track.id)}
                        title="Solo"
                        style={{
                          padding: '3px 5px', borderRadius: 4, cursor: 'pointer',
                          background: soloTrackId === track.id ? `#facc1525` : `rgba(255,255,255,0.05)`,
                          border: `1px solid ${soloTrackId === track.id ? `#facc1550` : T.border}`,
                          color: soloTrackId === track.id ? '#facc15' : T.dim, fontSize: 9, fontWeight: 800,
                        }}>
                        S
                      </button>

                      
                      <button
                        type="button"
                        onClick={() => handleArmToggle(track.id)}
                        title="Arm for recording"
                        style={{
                          padding: '3px 5px', borderRadius: 4, cursor: 'pointer',
                          background: track.armed ? `${T.red}25` : `rgba(255,255,255,0.05)`,
                          border: `1px solid ${track.armed ? `${T.red}50` : T.border}`,
                          color: track.armed ? T.red : T.dim, fontSize: 9, fontWeight: 800,
                        }}>
                        ●
                      </button>
                    </div>

                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Volume2 className="w-2.5 h-2.5" style={{ color: T.dim, flexShrink: 0 }} />
                      <input
                        type="range"
                        min={0} max={1} step={0.01}
                        value={track.volume}
                        onChange={e => handleVolumeChange(track.id, parseFloat(e.target.value))}
                        onClick={e => e.stopPropagation()}
                        style={{ flex: 1, height: 4, accentColor: track.color, cursor: 'pointer' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            
            {scenes.map((scene, sceneIndex) => (
              <div key={scene.id} style={{ display: 'flex' }}>
                
                <div style={{
                  width: 80, flexShrink: 0,
                  height: CELL_H,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRight: `1px solid ${T.borderBright}`,
                  borderBottom: `1px solid ${T.border}`,
                  padding: '0 6px',
                }}>
                  <button
                    type="button"
                    onClick={() => handleSceneLaunch(sceneIndex)}
                    title={`Launch scene: ${scene.name}`}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 4,
                      padding: '4px 8px', borderRadius: 6, cursor: 'pointer',
                      background: 'rgba(0,208,240,0.08)',
                      border: `1px solid rgba(0,208,240,0.25)`,
                      color: T.accent, fontSize: 10, fontWeight: 700,
                      width: '100%', justifyContent: 'center',
                    }}>
                    <Radio className="w-3 h-3" />
                    <span style={{ fontSize: 9, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {scene.name}
                    </span>
                  </button>
                </div>

                
                {tracks.map((track, trackIndex) => {
                  const clip = track.clips[sceneIndex];
                  if (!clip) return <div key={trackIndex} style={{ width: CELL_W, flexShrink: 0 }} />;

                  const isPlaying = clip.playing;
                  const isEmpty = clip.isEmpty;
                  const isEffective = isSoloActive ? soloTrackId === track.id : !track.muted;

                  return (
                    <div
                      key={track.id}
                      onClick={() => handleClipClick(track.id, sceneIndex)}
                      title={isEmpty ? 'Empty slot — arm track and record' : `${clip.name} (${clip.durationBars} bars)`}
                      style={{
                        width: CELL_W, flexShrink: 0,
                        height: CELL_H,
                        borderRight: `1px solid ${T.border}`,
                        borderBottom: `1px solid ${T.border}`,
                        cursor: isEmpty ? 'default' : 'pointer',
                        padding: '3px 5px',
                        background: isEmpty
                          ? 'transparent'
                          : isPlaying
                            ? `${clip.color}20`
                            : `${clip.color}0c`,
                        opacity: isEffective ? 1 : 0.4,
                        display: 'flex', alignItems: 'center', gap: 6,
                        transition: 'background 0.1s',
                        position: 'relative',
                        overflow: 'hidden',
                      }}>

                      {!isEmpty && (
                        <>
                          
                          <div style={{
                            width: 18, height: 18, flexShrink: 0, borderRadius: 4,
                            border: `1px solid ${clip.color}60`,
                            background: isPlaying
                              ? clip.color
                              : `${clip.color}25`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: isPlaying ? `0 0 6px ${clip.color}80` : 'none',
                            transition: 'all 0.1s',
                          }}>
                            {isPlaying
                              ? <Square className="w-2 h-2" style={{ color: '#fff' }} />
                              : <div style={{ width: 0, height: 0, borderLeft: `6px solid ${clip.color}`, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', marginLeft: 1 }} />
                            }
                          </div>

                          
                          <div style={{ minWidth: 0 }}>
                            <div style={{
                              fontSize: 10, fontWeight: 700,
                              color: isPlaying ? T.text : T.dim,
                              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                              lineHeight: 1.2,
                            }}>
                              {clip.name}
                            </div>
                            <div style={{ fontSize: 8, color: clip.color, fontWeight: 700 }}>
                              {clip.durationBars}b{clip.looping ? ' 🔁' : ''}
                            </div>
                          </div>

                          
                          {isPlaying && flash && (
                            <div style={{
                              position: 'absolute', inset: 0,
                              background: `${clip.color}08`,
                              pointerEvents: 'none',
                            }} />
                          )}
                        </>
                      )}

                      {isEmpty && track.armed && (
                        <div style={{
                          width: '100%', height: '100%', display: 'flex',
                          alignItems: 'center', justifyContent: 'center',
                          border: `1px dashed ${T.red}50`, borderRadius: 4, margin: '2px',
                        }}>
                          <Mic2 className="w-3 h-3" style={{ color: `${T.red}60` }} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}

            
            <div style={{ display: 'flex', marginTop: 4 }}>
              
              <div style={{ width: 80, flexShrink: 0, padding: '0 6px' }}>
                <button
                  type="button"
                  onClick={handleStopAll}
                  title="Stop all clips"
                  style={{
                    width: '100%', padding: '5px 0', borderRadius: 6, cursor: 'pointer',
                    background: `${T.red}15`, border: `1px solid ${T.red}35`,
                    color: T.red, fontSize: 9, fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
                  }}>
                  <StopCircle className="w-3 h-3" />
                  Stop All
                </button>
              </div>

              
              {tracks.map((track) => (
                <div key={track.id} style={{ width: CELL_W, flexShrink: 0, padding: '0 5px' }}>
                  <button
                    type="button"
                    onClick={() => {
                      onStateChange({
                        ...state,
                        tracks: tracks.map((tr) =>
                          tr.id !== track.id ? tr : {
                            ...tr,
                            clips: tr.clips.map((cl) => ({ ...cl, playing: false })),
                          },
                        ),
                      });
                    }}
                    title={`Stop ${track.name}`}
                    style={{
                      width: '100%', padding: '5px 0', borderRadius: 6, cursor: 'pointer',
                      background: `rgba(255,255,255,0.04)`,
                      border: `1px solid ${T.border}`,
                      color: T.dim, fontSize: 8, fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3,
                    }}>
                    <Square className="w-2.5 h-2.5" />
                    Stop
                  </button>
                </div>
              ))}
            </div>
          </div>

          
          <div style={{ marginTop: 10, fontSize: 9, color: T.dim, lineHeight: 1.6 }}>
            Click clip ▶ to launch · Scene ▶ to launch full row · M=Mute · S=Solo · ●=Arm for recording ·
            Inspired by <span style={{ color: T.accent }}>Ableton Live Session View</span>
          </div>
        </div>
      )}
    </div>
  );
}
