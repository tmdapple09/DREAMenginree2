import { v4 as uuidv4 } from 'uuid';



export type ForgeBuildState = 'idle' | 'running' | 'done' | 'error';


export type ForgeArtifactType =
  | 'code-cells'
  | 'game-level'
  | 'midi-pattern'
  | 'brand-palette'
  | 'lab-config'
  | 'content-draft';


export interface ForgeArtifact {
  
  type: ForgeArtifactType;
  
  enginId: string;
  
  filename: string;
  
  content: string;
  
  language: string;
}


export type ForgeLogEvent =
  | { type: 'agent'; agent: 'Dr. Eams' | 'IDARi' | 'TheBoogieMan.Ai'; message: string; ts: number }
  | { type: 'step'; step: string; ts: number }
  | { type: 'file'; path: string; action: 'created' | 'modified'; ts: number }
  | { type: 'result'; enginId: string; href: string; summary: string; ts: number }
  | { type: 'error'; message: string; ts: number }
  | { type: 'done'; ts: number }
  | { type: 'code'; language: string; filename: string; content: string; ts: number };


export interface ForgeBuildRecord {
  id: string;
  prompt: string;
  logs: ForgeLogEvent[];
  primaryHref: string;
  primaryEnginId: string;
  createdAt: string;
  summary: string;
  
  artifact?: ForgeArtifact;
}

const BUILDS_KEY = 'de:forge:builds';
const RATE_KEY = 'de:forge:build:last-date';
const MAX_BUILDS = 10;


export function isForgeLogEvent(value: unknown): value is ForgeLogEvent {
  if (!value || typeof value !== 'object') return false;
  const v = value as any;
  if (typeof v.type !== 'string') return false;
  if (typeof v.ts !== 'number') return false;
  switch (v.type) {
    case 'agent':
      return (
        (v.agent === 'Dr. Eams' || v.agent === 'IDARi' || v.agent === 'TheBoogieMan.Ai') &&
        typeof v.message === 'string'
      );
    case 'step':
      return typeof v.step === 'string';
    case 'file':
      return typeof v.path === 'string' && (v.action === 'created' || v.action === 'modified');
    case 'result':
      return (
        typeof v.enginId === 'string' &&
        typeof v.href === 'string' &&
        typeof v.summary === 'string'
      );
    case 'error':
      return typeof v.message === 'string';
    case 'done':
      return true;
    case 'code':
      return (
        typeof v.language === 'string' &&
        typeof v.filename === 'string' &&
        typeof v.content === 'string'
      );
    default:
      return false;
  }
}


export function saveForgeBuild(record: ForgeBuildRecord): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = readForgeBuilds();
    const updated = [record, ...existing].slice(0, MAX_BUILDS);
    localStorage.setItem(BUILDS_KEY, JSON.stringify(updated));
  } catch {
    
  }
}


export function readForgeBuilds(): ForgeBuildRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(BUILDS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as ForgeBuildRecord[];
  } catch {
    return [];
  }
}


export function clearForgeBuilds(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(BUILDS_KEY);
  } catch {
    
  }
}


export function canBuildToday(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const last = localStorage.getItem(RATE_KEY);
    if (!last) return true;
    return last !== new Date().toDateString();
  } catch {
    return true;
  }
}


export function recordBuildToday(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(RATE_KEY, new Date().toDateString());
  } catch {
    
  }
}


interface NotebookCell {
  id: string;
  language: string;
  source: string;
}


export function stageForgeArtifact(artifact: ForgeArtifact): void {
  if (typeof window === 'undefined') return;
  try {
    if (artifact.type === 'code-cells') {
      const raw = localStorage.getItem('de-codegen-cells');
      const existing: NotebookCell[] = raw ? (JSON.parse(raw) as NotebookCell[]) : [];
      const newCell: NotebookCell = {
        id: uuidv4(),
        language: artifact.language,
        source: artifact.content,
      };
      localStorage.setItem('de-codegen-cells', JSON.stringify([newCell, ...existing]));
    } else {
      const keyMap: Record<ForgeArtifactType, string> = {
        'code-cells': 'de-codegen-cells',
        'game-level': 'de:forge:staged-level',
        'midi-pattern': 'de:forge:staged-track',
        'brand-palette': 'de:forge:staged-palette',
        'lab-config': 'de:forge:staged-lab',
        'content-draft': 'de:forge:staged-draft',
      };
      const key = keyMap[artifact.type];
      if (key) {
        localStorage.setItem(key, JSON.stringify(artifact));
      }
    }
  } catch {
    
  }
}
