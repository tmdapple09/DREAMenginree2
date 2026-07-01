'use client';

import {
    buildFullFileLines,
    buildScrollMarkers,
    DEMO_DIFF,
    firstHunkIndex,
    nextHunkIndex,
    parseUnifiedDiff,
    prevHunkIndex,
    type DiffFile,
    type FullFileLine,
} from '@/engins/codeengin/diff/diffUtils';
import { ChevronDown, ChevronsUpDown, ChevronUp, Minimize2 } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';



const ACCENT = '#3b7dd8';
const ADD_BG  = 'rgba(34,197,94,0.13)';
const DEL_BG  = 'rgba(248,113,113,0.13)';
const ADD_FG  = '#16a34a';
const DEL_FG  = '#dc2626';
const CTX_FG  = 'var(--de-text-dim)';
const COLLAPSED_BG = 'rgba(100,116,139,0.08)';
const MINIMAP_W = 10;         
const LINE_H    = 20;         

interface DiffViewerProps {
  
  diffText?: string;
  
  defaultFullFile?: boolean;
}

function lineBg(line: FullFileLine): string {
  if (line.collapsed)         return COLLAPSED_BG;
  if (line.type === 'added')  return ADD_BG;
  if (line.type === 'removed') return DEL_BG;
  return 'transparent';
}

function linePrefix(line: FullFileLine): string {
  if (line.collapsed)          return '  ';
  if (line.type === 'added')   return '+ ';
  if (line.type === 'removed') return '- ';
  return '  ';
}

function lineFg(line: FullFileLine): string {
  if (line.type === 'added')   return ADD_FG;
  if (line.type === 'removed') return DEL_FG;
  if (line.collapsed)          return CTX_FG;
  return 'var(--de-text)';
}

export default function DiffViewer({
  diffText = DEMO_DIFF,
  defaultFullFile = true,
}: DiffViewerProps) {
  
  const files: DiffFile[] = useMemo(() => parseUnifiedDiff(diffText), [diffText]);
  const file = files[0] ?? null;

  
  const [fullFile, setFullFile] = useState(defaultFullFile);

  const [activeHunk, setActiveHunk] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  const lines: FullFileLine[] = useMemo(
    () => (file ? buildFullFileLines(file, !fullFile) : []),
    [file, fullFile],
  );

  const markers = useMemo(
    () => (file ? buildScrollMarkers(file, lines.length) : []),
    [file, lines.length],
  );

  const hunkLineIndex: number[] = useMemo(() => {
    const idx: number[] = [];
    lines.forEach((l, i: number) => {
      if (l.isHunkStart) idx.push(i);
    });
    return idx;
  }, [lines]);

  const scrollToHunk = useCallback((hunkIdx: number) => {
    const lineIdx = hunkLineIndex[hunkIdx] ?? 0;
    const container = scrollRef.current;
    if (!container) return;
    const top = lineIdx * LINE_H - 60;   
    container.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }, [hunkLineIndex]);

  useEffect(() => {
    if (fullFile && file && file.hunks.length > 0) {
      scrollToHunk(firstHunkIndex(file));
    }
  

  }, [fullFile]);

  const handlePrev = useCallback(() => {
    if (!file) return;
    const next = prevHunkIndex(file, activeHunk);
    setActiveHunk(next);
    scrollToHunk(next);
  }, [file, activeHunk, scrollToHunk]);

  const handleNext = useCallback(() => {
    if (!file) return;
    const next = nextHunkIndex(file, activeHunk);
    setActiveHunk(next);
    scrollToHunk(next);
  }, [file, activeHunk, scrollToHunk]);

  const toggleFullFile = useCallback(() => {
    setFullFile((prev: boolean) => !prev);
  }, []);

  const handleMinimapClick = useCallback((hunkIdx: number) => {
    setActiveHunk(hunkIdx);
    scrollToHunk(hunkIdx);
  }, [scrollToHunk]);

  if (!file) {
    return (
      <div style={{ padding: 16, color: CTX_FG, fontSize: 12 }}>
        No diff to display.
      </div>
    );
  }

  const hunkCount = file.hunks.length;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 12,
        border: '1px solid rgba(160,195,240,0.20)',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.50)',
        fontSize: 12,
        fontFamily: '"JetBrains Mono","Fira Code",Consolas,monospace',
      }}
    >
      
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 12px',
          borderBottom: '1px solid rgba(160,195,240,0.20)',
          background: 'rgba(255,255,255,0.80)',
          flexWrap: 'wrap',
        }}
      >
        
        <span
          style={{
            flex: 1, fontWeight: 600, color: 'var(--de-heading)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            fontSize: 11,
          }}
        >
          {file.path}
        </span>

        
        <span style={{ color: ADD_FG, fontWeight: 700, fontSize: 11 }}>
          +{file.addedCount}
        </span>
        <span style={{ color: DEL_FG, fontWeight: 700, fontSize: 11 }}>
          −{file.removedCount}
        </span>

        
        <button
          type="button"
          onClick={handlePrev}
          disabled={hunkCount === 0}
          aria-label="Previous diff hunk"
          title="Previous change (↑)"
          style={navBtnStyle(hunkCount === 0)}
        >
          <ChevronUp size={13} />
        </button>
        <span style={{ fontSize: 10, color: CTX_FG, minWidth: 40, textAlign: 'center' }}>
          {hunkCount > 0 ? `${activeHunk + 1} / ${hunkCount}` : '–'}
        </span>
        <button
          type="button"
          onClick={handleNext}
          disabled={hunkCount === 0}
          aria-label="Next diff hunk"
          title="Next change (↓)"
          style={navBtnStyle(hunkCount === 0)}
        >
          <ChevronDown size={13} />
        </button>

        
        <button
          type="button"
          onClick={toggleFullFile}
          aria-label={fullFile ? 'Collapse unchanged regions' : 'Expand all lines'}
          title={fullFile ? 'Collapse unchanged regions' : 'Expand all lines'}
          style={{
            ...navBtnStyle(false),
            background: fullFile ? `${ACCENT}18` : 'rgba(0,0,0,0.04)',
            borderColor: fullFile ? ACCENT : 'rgba(160,195,240,0.35)',
            color: fullFile ? ACCENT : 'var(--de-text)',
          }}
        >
          {fullFile ? <Minimize2 size={13} /> : <ChevronsUpDown size={13} />}
          <span style={{ marginLeft: 4, fontSize: 10, fontWeight: 600 }}>
            {fullFile ? 'Collapse' : 'Expand all'}
          </span>
        </button>
      </div>

      
      <div style={{ display: 'flex', position: 'relative', minHeight: 0 }}>
        
        <div
          ref={scrollRef}
          style={{
            flex: 1,
            overflowY: 'auto',
            overflowX: 'auto',
            maxHeight: '55dvh',
            scrollbarWidth: 'thin',
          }}
        >
          {lines.map((line, idx: number) => {
            const isActiveHunk = line.hunkIndex === activeHunk && !line.collapsed;
            return (
              <div
                key={idx}
                data-hunk={line.hunkIndex}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  background: lineBg(line),
                  borderLeft: isActiveHunk && line.type !== 'context'
                    ? `3px solid ${line.type === 'added' ? ADD_FG : DEL_FG}`
                    : '3px solid transparent',
                  lineHeight: `${LINE_H}px`,
                  minHeight: LINE_H,
                  padding: '0 8px',
                  whiteSpace: 'pre',
                  wordBreak: 'keep-all',
                }}
              >
                
                <span
                  style={{
                    width: 32, flexShrink: 0, textAlign: 'right',
                    color: 'rgba(100,116,139,0.50)', fontSize: 10,
                    userSelect: 'none', marginRight: 8,
                  }}
                >
                  {line.collapsed ? '' : (line.newLineNo ?? line.oldLineNo ?? '')}
                </span>

                
                <span
                  style={{
                    width: 14, flexShrink: 0,
                    color: lineFg(line), fontWeight: 700,
                    userSelect: 'none',
                  }}
                >
                  {linePrefix(line)}
                </span>

                
                <span style={{ color: lineFg(line), flex: 1 }}>
                  {line.content}
                </span>
              </div>
            );
          })}
        </div>

        
        <div
          aria-hidden="true"
          style={{
            width: MINIMAP_W,
            flexShrink: 0,
            background: 'rgba(160,195,240,0.10)',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          {markers.map((m: import('@/engins/codeengin/diff/diffUtils').HunkScrollMarker) => (
            <div
              key={m.hunkIndex}
              onClick={() => handleMinimapClick(m.hunkIndex)}
              title={`Jump to hunk ${m.hunkIndex + 1}`}
              style={{
                position: 'absolute',
                top:    `${m.position * 100}%`,
                height: `max(${m.size * 100}%, 4px)`,
                width:  '100%',
                background: m.hunkIndex === activeHunk
                  ? ACCENT
                  : 'rgba(59,125,216,0.45)',
                borderRadius: 2,
                transition: 'background 0.15s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function navBtnStyle(disabled: boolean): CSSProperties {
  return {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 8px',
    borderRadius: 7,
    border: '1px solid rgba(160,195,240,0.35)',
    background: 'rgba(0,0,0,0.03)',
    color: disabled ? 'rgba(100,116,139,0.35)' : 'var(--de-text)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: 12,
    lineHeight: 1,
    transition: 'background 0.12s',
  };
}
