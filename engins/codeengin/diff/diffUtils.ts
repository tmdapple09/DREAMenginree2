

export type DiffLineType = 'added' | 'removed' | 'context' | 'hunk-header';

export interface DiffLine {
  type: DiffLineType;
  
  content: string;
  
  oldLineNo?: number;
  
  newLineNo?: number;
}

export interface DiffHunk {
  
  index: number;
  
  header: string;
  
  oldStart: number;
  oldCount: number;
  
  newStart: number;
  newCount: number;
  lines: DiffLine[];
}

export interface DiffFile {
  
  path: string;
  oldPath: string;
  newPath: string;
  hunks: DiffHunk[];
  
  addedCount: number;
  
  removedCount: number;
}

const HUNK_HEADER_RE = /^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@(.*)/;


export function parseUnifiedDiff(diffText: string): DiffFile[] {
  const files: DiffFile[] = [];
  let current: DiffFile | null = null;
  let currentHunk: DiffHunk | null = null;
  let oldLine = 0;
  let newLine = 0;

  for (const raw of diffText.split('\n')) {
    
    if (raw.startsWith('--- ')) {
      const oldPath = raw.slice(4).replace(/^\/?a\
      
      if (current) files.push(finalise(current));
      current = {
        path: oldPath,
        oldPath,
        newPath: oldPath,
        hunks: [],
        addedCount: 0,
        removedCount: 0,
      };
      currentHunk = null;
      continue;
    }

    if (raw.startsWith('+++ ') && current) {
      const newPath = raw.slice(4).replace(/^\/?b\
      current.newPath = newPath;
      current.path = newPath !== '/dev/null' ? newPath : current.oldPath;
      continue;
    }

    
    const hunkMatch = raw.match(HUNK_HEADER_RE);
    if (hunkMatch) {
      if (!current) continue;
      if (currentHunk) current.hunks.push(currentHunk);
      oldLine = parseInt(hunkMatch[1], 10);
      newLine = parseInt(hunkMatch[3], 10);
      currentHunk = {
        index: current.hunks.length,
        header: raw,
        oldStart: oldLine,
        oldCount: parseInt(hunkMatch[2] ?? '1', 10),
        newStart: newLine,
        newCount: parseInt(hunkMatch[4] ?? '1', 10),
        lines: [],
      };
      continue;
    }

    if (!currentHunk) continue;

    if (raw.startsWith('+')) {
      currentHunk.lines.push({ type: 'added',   content: raw.slice(1), newLineNo: newLine++ });
      if (current) current.addedCount++;
    } else if (raw.startsWith('-')) {
      currentHunk.lines.push({ type: 'removed', content: raw.slice(1), oldLineNo: oldLine++ });
      if (current) current.removedCount++;
    } else if (raw.startsWith(' ') || raw === '') {
      currentHunk.lines.push({
        type: 'context',
        content: raw.startsWith(' ') ? raw.slice(1) : '',
        oldLineNo: oldLine++,
        newLineNo: newLine++,
      });
    }
  }

  if (currentHunk && current) current.hunks.push(currentHunk);
  if (current) files.push(finalise(current));
  return files;
}

function finalise(file: DiffFile): DiffFile {
  
  file.hunks = file.hunks.map((h, i: number) => ({ ...h, index: i }));
  return file;
}

export interface FullFileLine extends DiffLine {
  
  collapsed: boolean;
  
  isHunkStart: boolean;
  
  hunkIndex: number;
}


export function buildFullFileLines(
  file: DiffFile,
  collapsed: boolean,
  contextLines = 3,
): FullFileLine[] {
  const result: FullFileLine[] = [];

  if (file.hunks.length === 0) return result;

  for (let hi = 0; hi < file.hunks.length; hi++) {
    const hunk = file.hunks[hi];
    const isFirst = hi === 0;

    if (isFirst && hunk.newStart > 1) {
      const gapSize = hunk.newStart - 1;
      if (collapsed) {
        result.push(makePlaceholder(hunk.newStart - gapSize, gapSize));
      }
      
    } else if (!isFirst) {
      const prevHunk = file.hunks[hi - 1];
      const prevEnd  = prevHunk.newStart + prevHunk.newCount;
      const gapStart = prevEnd;
      const gapEnd   = hunk.newStart;
      const gapSize  = gapEnd - gapStart;
      if (gapSize > 0) {
        if (collapsed) {
          result.push(makePlaceholder(gapStart, gapSize));
        }
      }
    }

    for (let li = 0; li < hunk.lines.length; li++) {
      const line = hunk.lines[li];
      result.push({
        ...line,
        collapsed: false,
        isHunkStart: li === 0,
        hunkIndex: hunk.index,
      });
    }
  }

  return result;
}

function makePlaceholder(startLine: number, count: number): FullFileLine {
  return {
    type: 'context',
    content: `… ${count} unchanged line${count === 1 ? '' : 's'}`,
    newLineNo: startLine,
    collapsed: true,
    isHunkStart: false,
    hunkIndex: -1,
  };
}


export function firstHunkIndex(file: DiffFile): number {
  return file.hunks.length > 0 ? 0 : -1;
}


export function prevHunkIndex(file: DiffFile, current: number): number {
  if (file.hunks.length === 0) return -1;
  return (current - 1 + file.hunks.length) % file.hunks.length;
}


export function nextHunkIndex(file: DiffFile, current: number): number {
  if (file.hunks.length === 0) return -1;
  return (current + 1) % file.hunks.length;
}

export interface HunkScrollMarker {
  
  hunkIndex: number;
  
  position: number;
  
  size: number;
}


export function buildScrollMarkers(
  file: DiffFile,
  totalLines: number,
): HunkScrollMarker[] {
  if (totalLines === 0 || file.hunks.length === 0) return [];

  return file.hunks.map((hunk) => {
    const start    = hunk.newStart - 1;  
    const size     = hunk.newCount;
    return {
      hunkIndex: hunk.index,
      position:  Math.min(1, start / totalLines),
      size:      Math.min(1, size  / totalLines),
    };
  });
}


export const DEMO_DIFF = `--- a/lib/diff/diffUtils.ts
+++ b/lib/diff/diffUtils.ts
@@ -1,7 +1,10 @@
 /**
- * Utilities for parsing unified diff format.
+ * Utilities for parsing and navigating unified diff format.
+ *
+ * Supports full-file view, hunk navigation, and scroll-margin metadata.
  */

-export type DiffLineType = 'added' | 'removed' | 'context';
+export type DiffLineType = 'added' | 'removed' | 'context' | 'hunk-header';

 export interface DiffLine {
   type: DiffLineType;
@@ -42,6 +45,15 @@ export interface DiffFile {
   removedCount: number;
 }

+// ─── Full-file helpers ────────────────────────────────────────────────────────
+
+export interface FullFileLine extends DiffLine {
+  collapsed: boolean;
+  isHunkStart: boolean;
+  hunkIndex: number;
+}
+
 // ─── Parser ───────────────────────────────────────────────────────────────────

 const HUNK_HEADER_RE = /^@@ -(\d+)(?:,(\d+))? \\+(\d+)(?:,(\d+))? @@(.*)/;
@@ -89,3 +101,18 @@ function finalise(file: DiffFile): DiffFile {
   file.hunks = file.hunks.map((h, i: number) => ({ ...h, index: i }));
   return file;
 }
+
+export function buildScrollMarkers(
+  file: DiffFile,
+  totalLines: number,
+): HunkScrollMarker[] {
+  if (totalLines === 0 || file.hunks.length === 0) return [];
+  return file.hunks.map((hunk) => ({
+    hunkIndex: hunk.index,
+    position:  Math.min(1, (hunk.newStart - 1) / totalLines),
+    size:      Math.min(1, hunk.newCount / totalLines),
+  }));
+}
`;
