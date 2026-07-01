


export const CODEENGIN_PRODUCTION_MODE = true as const;


export type EditScope =
  | 'word'           
  | 'line'           
  | 'block'          
  | 'function'       
  | 'file'           
  | 'word-in-file'   
  | 'word-in-codebase'; 

export const SCOPE_ORDER: EditScope[] = [
  'word',
  'line',
  'block',
  'function',
  'file',
  'word-in-file',
  'word-in-codebase',
];

export const SCOPE_LABEL: Record<EditScope, string> = {
  'word':             'Word',
  'line':             'Line',
  'block':            '{ } Block',
  'function':         'Function',
  'file':             'Whole File',
  'word-in-file':     'Same word in file',
  'word-in-codebase': 'Same word in all cells',
};

export const SCOPE_DESCRIPTION: Record<EditScope, string> = {
  'word':             'Change only the selected/cursor word — nothing else',
  'line':             'Change the entire line the cursor is on',
  'block':            'Change everything inside the nearest { … } block (brace-matched)',
  'function':         'Change the full function/def the cursor is inside',
  'file':             'Replace the entire content of this code cell',
  'word-in-file':     'Change every occurrence of this word in the active cell',
  'word-in-codebase': 'Change every occurrence in all open notebook cells (in memory only — not the filesystem)',
};

export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';

export const SCOPE_RISK: Record<EditScope, RiskLevel> = {
  'word':             'low',
  'line':             'low',
  'block':            'medium',
  'function':         'medium',
  'file':             'high',
  'word-in-file':     'medium',
  'word-in-codebase': 'critical',
};


export const CONFIRMATION_REQUIRED: Set<RiskLevel> = new Set(['high', 'critical']);


export interface AiSuggestion {
  
  instruction: string;
  
  target: string;
  
  replacement: string;
  
  suggestedScope: EditScope;
  
  scopeRationale: string;
  
  confidence: 'high' | 'medium' | 'low';
}


export interface ScopeMatch {
  
  cellId: string;
  
  start: number;
  
  end: number;
  
  matched: string;
  
  lineNo: number;
}

export type EditDiffLineType = 'context' | 'removed' | 'added';

export interface EditDiffLine {
  type: EditDiffLineType;
  content: string;
  lineNo: number;
}


export interface EditPreview {
  scope: EditScope;
  scopeLabel: string;
  risk: RiskLevel;
  requiresConfirmation: boolean;

  target: string;
  replacement: string;

  
  matches: ScopeMatch[];
  matchCount: number;
  
  affectedCellCount: number;

  
  diffLines: EditDiffLine[];

  
  noMatches: boolean;
}

export interface UndoSnapshot {
  
  cells: Array<{ id: string; code: string }>;
  
  description: string;
}


export interface EditableCell {
  id: string;
  code: string;
}


export function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


function lineNumberAt(text: string, offset: number): number {
  return text.slice(0, offset).split('\n').length;
}


export function wordBoundsAt(text: string, cursor: number): { start: number; end: number } {
  let start = cursor;
  let end   = cursor;
  while (start > 0 && /\w/.test(text[start - 1])) start--;
  while (end < text.length && /\w/.test(text[end])) end++;
  return { start, end };
}


export function lineBoundsAt(text: string, offset: number): { start: number; end: number } {
  let start = offset;
  let end   = offset;
  while (start > 0 && text[start - 1] !== '\n') start--;
  while (end < text.length && text[end] !== '\n') end++;
  return { start, end };
}


function buildStringCommentMask(text: string): Set<number> {
  const mask = new Set<number>();
  let i = 0;
  while (i < text.length) {
    
    if (text[i] === '/' && text[i + 1] === '/') {
      while (i < text.length && text[i] !== '\n') { mask.add(i); i++; }
      continue;
    }
    
    if (text[i] === '"') {
      mask.add(i); i++;
      while (i < text.length && text[i] !== '"') {
        if (text[i] === '\\') { mask.add(i); i++; } 
        if (i < text.length) { mask.add(i); i++; }
      }
      if (i < text.length) { mask.add(i); i++; } 
      continue;
    }
    
    if (text[i] === "'") {
      mask.add(i); i++;
      while (i < text.length && text[i] !== "'") {
        if (text[i] === '\\') { mask.add(i); i++; }
        if (i < text.length) { mask.add(i); i++; }
      }
      if (i < text.length) { mask.add(i); i++; }
      continue;
    }
    
    if (text[i] === '`') {
      mask.add(i); i++;
      while (i < text.length && text[i] !== '`') {
        if (text[i] === '\\') { mask.add(i); i++; }
        if (i < text.length) { mask.add(i); i++; }
      }
      if (i < text.length) { mask.add(i); i++; }
      continue;
    }
    i++;
  }
  return mask;
}


function findEnclosingPair(
  text: string,
  cursor: number,
  masked: Set<number>,
  open: string,
  close: string,
): { start: number; end: number } | null {
  let depth = 0;
  let blockStart = -1;
  for (let i = cursor; i >= 0; i--) {
    if (masked.has(i)) continue;
    if (text[i] === close) depth++;
    else if (text[i] === open) {
      if (depth === 0) { blockStart = i; break; }
      depth--;
    }
  }
  if (blockStart === -1) return null;

  depth = 0;
  let blockEnd = -1;
  for (let i = cursor; i < text.length; i++) {
    if (masked.has(i)) continue;
    if (text[i] === open) depth++;
    else if (text[i] === close) {
      if (depth === 0) { blockEnd = i + 1; break; }
      depth--;
    }
  }
  if (blockEnd === -1) return null;
  return { start: blockStart, end: blockEnd };
}


export function blockBoundsAt(text: string, cursor: number): { start: number; end: number } | null {
  const masked = buildStringCommentMask(text);
  return (
    findEnclosingPair(text, cursor, masked, '{', '}') ??
    findEnclosingPair(text, cursor, masked, '[', ']') ??
    findEnclosingPair(text, cursor, masked, '(', ')') ??
    null
  );
}


export function functionBoundsAt(text: string, cursor: number): { start: number; end: number } | null {
  
  const block = blockBoundsAt(text, cursor);
  if (!block) return null;

  
  const before = text.slice(0, block.start);
  const fnMatch = before.match(/(?:function\s+\w+|const\s+\w+\s*=\s*(?:async\s*)?\(|def\s+\w+)\s*[^{]*$/);
  if (!fnMatch) return block; 
  const fnStart = before.lastIndexOf(fnMatch[0]);
  return { start: fnStart, end: block.end };
}


const CONTEXT_SIZE = 3;
const MAX_DIFF_LINES = 60;

export function generateDiffLines(before: string, after: string): EditDiffLine[] {
  const beforeLines = before.split('\n');
  const afterLines  = after.split('\n');

  
  const result: EditDiffLine[] = [];
  const maxLen = Math.max(beforeLines.length, afterLines.length);

  
  
  let bi = 0;
  let ai = 0;
  let lineNo = 1;

  while (bi < beforeLines.length || ai < afterLines.length) {
    const bLine = beforeLines[bi];
    const aLine = afterLines[ai];

    if (bi < beforeLines.length && ai < afterLines.length && bLine === aLine) {
      result.push({ type: 'context', content: bLine, lineNo });
      bi++; ai++; lineNo++;
    } else {
      
      let syncB = -1, syncA = -1;
      outer: for (let lookB = bi; lookB < Math.min(bi + 10, beforeLines.length); lookB++) {
        for (let lookA = ai; lookA < Math.min(ai + 10, afterLines.length); lookA++) {
          if (beforeLines[lookB] === afterLines[lookA]) {
            syncB = lookB; syncA = lookA; break outer;
          }
        }
      }
      if (syncB === -1) {
        
        while (bi < beforeLines.length) {
          result.push({ type: 'removed', content: beforeLines[bi++], lineNo });
        }
        while (ai < afterLines.length) {
          result.push({ type: 'added', content: afterLines[ai++], lineNo: lineNo++ });
        }
        break;
      }
      while (bi < syncB) result.push({ type: 'removed', content: beforeLines[bi++], lineNo });
      while (ai < syncA) result.push({ type: 'added',   content: afterLines[ai++],  lineNo: lineNo++ });
    }

    if (result.length >= MAX_DIFF_LINES) break;
    if (bi >= maxLen && ai >= maxLen) break;
  }

  
  return trimContextLines(result, CONTEXT_SIZE);
}

function trimContextLines(lines: EditDiffLine[], keep: number): EditDiffLine[] {
  if (lines.length === 0) return lines;
  
  const changed = lines
    .map((l, i: number) => l.type !== 'context' ? i : -1)
    .filter((i) => i >= 0);
  if (changed.length === 0) return lines.slice(0, Math.min(keep * 2 + 1, lines.length));

  const first = Math.max(0, changed[0] - keep);
  const last  = Math.min(lines.length - 1, changed[changed.length - 1] + keep);
  return lines.slice(first, last + 1);
}


export function parseAiInstruction(instruction: string): AiSuggestion {
  const lower = instruction.toLowerCase().trim();
  const isAllCells = /everywhere|all\s+cells|all\s+occurrences|codebase/.test(lower);

  
  const Q = "[`'\"]?";  

  const renameRx = new RegExp(`rename\\s+${Q}(\\w+)${Q}\\s+to\\s+${Q}(\\w+)${Q}`, 'i');
  const renameMatch = instruction.match(renameRx);
  if (renameMatch) {
    const [, target, replacement] = renameMatch;
    return {
      instruction,
      target,
      replacement,
      suggestedScope: isAllCells ? 'word-in-codebase' : 'word-in-file',
      scopeRationale: isAllCells
        ? 'Renaming in all cells to keep every reference consistent'
        : 'Renaming all occurrences in the active cell',
      confidence: 'high',
    };
  }

  const replaceRx = new RegExp(`replace\\s+${Q}(\\w+)${Q}\\s+with\\s+${Q}(\\w+)${Q}`, 'i');
  const replaceMatch = instruction.match(replaceRx);
  if (replaceMatch) {
    const [, target, replacement] = replaceMatch;
    return {
      instruction,
      target,
      replacement,
      suggestedScope: isAllCells ? 'word-in-codebase' : 'word-in-file',
      scopeRationale: 'Replacing matching occurrences with the new name',
      confidence: 'high',
    };
  }

  const swapRx = new RegExp(`swap\\s+${Q}(\\w+)${Q}\\s+(?:with|for)\\s+${Q}(\\w+)${Q}`, 'i');
  const swapMatch = instruction.match(swapRx);
  if (swapMatch) {
    const [, target, replacement] = swapMatch;
    return {
      instruction,
      target,
      replacement,
      suggestedScope: isAllCells ? 'word-in-codebase' : 'word-in-file',
      scopeRationale: 'Swapping all occurrences of the old name for the new one',
      confidence: 'high',
    };
  }

  
  const changeRx = new RegExp(`(?:change|update)\\s+${Q}(\\w+)${Q}\\s+to\\s+${Q}(\\w+)${Q}`, 'i');
  const changeMatch = instruction.match(changeRx);
  if (changeMatch) {
    const [, target, replacement] = changeMatch;
    return {
      instruction,
      target,
      replacement,
      suggestedScope: isAllCells ? 'word-in-codebase' : 'word-in-file',
      scopeRationale: 'Updating occurrences — verify target and scope before applying',
      confidence: 'medium',
    };
  }

  if (/delete\s+(?:this\s+)?function|remove\s+(?:this\s+)?function/.test(lower)) {
    return {
      instruction,
      target: '',
      replacement: '',
      suggestedScope: 'function',
      scopeRationale: 'Removing the whole function is safer than ad-hoc selection',
      confidence: 'high',
    };
  }

  if (/delete\s+(?:this\s+)?block|remove\s+(?:this\s+)?block/.test(lower)) {
    return {
      instruction,
      target: '',
      replacement: '',
      suggestedScope: 'block',
      scopeRationale: 'Removing the enclosing block keeps surrounding code intact',
      confidence: 'high',
    };
  }

  if (/delete\s+(?:this\s+)?line|remove\s+(?:this\s+)?line/.test(lower)) {
    return {
      instruction,
      target: '',
      replacement: '',
      suggestedScope: 'line',
      scopeRationale: 'Removing only the targeted line',
      confidence: 'high',
    };
  }

  
  
  return {
    instruction,
    target: '',
    replacement: '',
    suggestedScope: 'word',
    scopeRationale: 'Start with the smallest scope — you can expand it if needed',
    confidence: 'low',
  };
}

export interface BuildPreviewOptions {
  cells: EditableCell[];
  
  activeCellId: string;
  
  cursorOffset: number;
  scope: EditScope;
  target: string;
  replacement: string;
}


export function buildEditPreview(opts: BuildPreviewOptions): EditPreview {
  const { cells, activeCellId, cursorOffset, scope, target, replacement } = opts;
  const activeCell = cells.find((c) => c.id === activeCellId) ?? cells[0];

  const matches: ScopeMatch[] = [];

  switch (scope) {
    case 'word': {
      if (!activeCell) break;
      const bounds = target
        ? findFirstOccurrence(activeCell.code, target)
        : wordBoundsAt(activeCell.code, cursorOffset);
      if (bounds && bounds.start !== bounds.end) {
        matches.push({
          cellId: activeCell.id,
          start: bounds.start, end: bounds.end,
          matched: activeCell.code.slice(bounds.start, bounds.end),
          lineNo: lineNumberAt(activeCell.code, bounds.start),
        });
      }
      break;
    }

    case 'line': {
      if (!activeCell) break;
      const bounds = lineBoundsAt(activeCell.code, cursorOffset);
      matches.push({
        cellId: activeCell.id,
        start: bounds.start, end: bounds.end,
        matched: activeCell.code.slice(bounds.start, bounds.end),
        lineNo: lineNumberAt(activeCell.code, bounds.start),
      });
      break;
    }

    case 'block': {
      if (!activeCell) break;
      const bounds = blockBoundsAt(activeCell.code, cursorOffset);
      if (bounds) {
        matches.push({
          cellId: activeCell.id,
          start: bounds.start, end: bounds.end,
          matched: activeCell.code.slice(bounds.start, bounds.end),
          lineNo: lineNumberAt(activeCell.code, bounds.start),
        });
      }
      break;
    }

    case 'function': {
      if (!activeCell) break;
      const bounds = functionBoundsAt(activeCell.code, cursorOffset);
      if (bounds) {
        matches.push({
          cellId: activeCell.id,
          start: bounds.start, end: bounds.end,
          matched: activeCell.code.slice(bounds.start, bounds.end),
          lineNo: lineNumberAt(activeCell.code, bounds.start),
        });
      }
      break;
    }

    case 'file': {
      if (!activeCell) break;
      matches.push({
        cellId: activeCell.id,
        start: 0, end: activeCell.code.length,
        matched: activeCell.code,
        lineNo: 1,
      });
      break;
    }

    case 'word-in-file': {
      if (!activeCell || !target) break;
      const rx = new RegExp(`\\b${escapeRegex(target)}\\b`, 'g');
      for (const m of activeCell.code.matchAll(rx)) {
        matches.push({
          cellId: activeCell.id,
          start: m.index!, end: m.index! + m[0].length,
          matched: m[0],
          lineNo: lineNumberAt(activeCell.code, m.index!),
        });
      }
      break;
    }

    case 'word-in-codebase': {
      if (!target) break;
      const rx = new RegExp(`\\b${escapeRegex(target)}\\b`, 'g');
      for (const cell of cells) {
        for (const m of cell.code.matchAll(rx)) {
          matches.push({
            cellId: cell.id,
            start: m.index!, end: m.index! + m[0].length,
            matched: m[0],
            lineNo: lineNumberAt(cell.code, m.index!),
          });
        }
      }
      break;
    }
  }

  
  const firstMatch = matches[0];
  let diffLines: EditDiffLine[] = [];

  if (firstMatch) {
    const cell = cells.find((c) => c.id === firstMatch.cellId);
    if (cell) {
      const before = cell.code;
      const after  = applyMatchesForCell(cell.code, matches.filter((m) => m.cellId === cell.id), replacement);
      diffLines = generateDiffLines(before, after);
    }
  }

  const affectedCellIds = new Set(matches.map((m) => m.cellId));
  const risk = SCOPE_RISK[scope];

  return {
    scope,
    scopeLabel: SCOPE_LABEL[scope],
    risk,
    requiresConfirmation: CONFIRMATION_REQUIRED.has(risk),
    target,
    replacement,
    matches,
    matchCount: matches.length,
    affectedCellCount: affectedCellIds.size,
    diffLines,
    noMatches: matches.length === 0,
  };
}


function findFirstOccurrence(text: string, target: string): { start: number; end: number } | null {
  const rx = new RegExp(`\\b${escapeRegex(target)}\\b`);
  const m  = text.match(rx);
  if (!m || m.index === undefined) return null;
  return { start: m.index, end: m.index + m[0].length };
}


export function applyMatchesForCell(
  code: string,
  matches: ScopeMatch[],
  replacement: string,
): string {
  if (matches.length === 0) return code;
  const sorted = [...matches].sort((a, b) => b.start - a.start); 
  let result = code;
  for (const m of sorted) {
    result = result.slice(0, m.start) + replacement + result.slice(m.end);
  }
  return result;
}


export function applyEdit(
  cells: EditableCell[],
  preview: EditPreview,
): { cells: EditableCell[]; undo: UndoSnapshot } {
  const undo: UndoSnapshot = {
    cells: cells.map((c) => ({ id: c.id, code: c.code })),
    description: `Undo: ${preview.scopeLabel} — ${preview.target || 'edit'}`,
  };

  
  const matchesByCell = new Map<string, ScopeMatch[]>();
  for (const m of preview.matches) {
    if (!matchesByCell.has(m.cellId)) matchesByCell.set(m.cellId, []);
    matchesByCell.get(m.cellId)!.push(m);
  }

  const updated = cells.map((cell) => {
    const cellMatches = matchesByCell.get(cell.id);
    if (!cellMatches) return cell;
    return {
      ...cell,
      code: applyMatchesForCell(cell.code, cellMatches, preview.replacement),
    };
  });

  return { cells: updated, undo };
}


export function undoEdit(
  currentCells: EditableCell[],
  snapshot: UndoSnapshot,
): EditableCell[] {
  const snapshotMap = new Map(snapshot.cells.map((c) => [c.id, c.code]));
  return currentCells.map((cell) => ({
    ...cell,
    code: snapshotMap.has(cell.id) ? snapshotMap.get(cell.id)! : cell.code,
  }));
}
