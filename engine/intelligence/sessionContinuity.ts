

export interface StoredSession {
  
  id: string;
  
  startedAt: number;
  
  endedAt: number;
  
  activations: string[];
  
  artifactKinds: string[];
  
  lastArtifactTitle: string | null;
  
  artifactCount: number;
}

export interface SessionSummary {
  sessionId: string;
  startedAt: number;
  endedAt: number;
  
  subsystemsVisited: string[];
  
  subsystemActivationCount: number;
  
  primarySubsystem: string | null;
  artifactCount: number;
  artifactKinds: string[];
  lastArtifactTitle: string | null;
}

export interface SessionDiff {
  
  newSubsystems: string[];
  
  droppedSubsystems: string[];
  
  continueFrom: string | null;
  
  recommendation: string;
}


export interface SessionStorageBackend {
  read(): Promise<StoredSession[]>;
  write(sessions: StoredSession[]): Promise<void>;
}

const MAX_STORED_SESSIONS = 5;

function summariseSession(s: StoredSession): SessionSummary {
  const unique = [...new Set(s.activations)];
  const freq = new Map<string, number>();
  for (const id of s.activations) freq.set(id, (freq.get(id) ?? 0) + 1);
  let primarySubsystem: string | null = null;
  let maxCount = 0;
  for (const [id, count] of freq) {
    if (count > maxCount) {
      maxCount = count;
      primarySubsystem = id;
    }
  }
  return {
    sessionId: s.id,
    startedAt: s.startedAt,
    endedAt: s.endedAt,
    subsystemsVisited: unique,
    subsystemActivationCount: Math.max(0, s.activations.length - 1),
    primarySubsystem,
    artifactCount: s.artifactCount,
    artifactKinds: s.artifactKinds,
    lastArtifactTitle: s.lastArtifactTitle,
  };
}

function buildDiff(last: StoredSession, current: StoredSession): SessionDiff {
  const lastSet = new Set(last.activations);
  const currentSet = new Set(current.activations);

  const newSubsystems = [...currentSet].filter((id) => !lastSet.has(id));
  const droppedSubsystems = [...lastSet].filter((id) => !currentSet.has(id));
  const continueFrom = last.activations[last.activations.length - 1] ?? null;

  let recommendation: string;

  if (currentSet.size === 0) {
    if (continueFrom) {
      recommendation = `You left off in ${continueFrom} last time. Ready to pick up where you stopped?`;
    } else {
      recommendation = 'Starting fresh. What are we building today?';
    }
  } else if (newSubsystems.length > 0 && droppedSubsystems.length === 0) {
    recommendation = `New territory today: ${newSubsystems.join(', ')}.`;
  } else if (droppedSubsystems.length > 0 && continueFrom && !currentSet.has(continueFrom)) {
    recommendation = `You haven't been back to ${continueFrom} yet — that's where you finished last time.`;
  } else if (droppedSubsystems.length > 0) {
    recommendation = `You covered ${droppedSubsystems.join(', ')} last session — not yet today.`;
  } else {
    recommendation = 'Staying in familiar territory — you know where everything is.';
  }

  return { newSubsystems, droppedSubsystems, continueFrom, recommendation };
}

const DB_NAME = 'dreamengin-continuity';
const STORE_NAME = 'sessions';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function createIDBBackend(): Promise<SessionStorageBackend> {
  const db = await openDB();
  return {
    async read(): Promise<StoredSession[]> {
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const req = tx.objectStore(STORE_NAME).getAll();
        req.onsuccess = () =>
          resolve((req.result as StoredSession[]).sort((a, b) => b.startedAt - a.startedAt));
        req.onerror = () => reject(req.error);
      });
    },
    async write(sessions: StoredSession[]): Promise<void> {
      const fresh = sessions.slice(0, MAX_STORED_SESSIONS);
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const clearReq = store.clear();
        clearReq.onsuccess = () => {
          for (const s of fresh) store.put(s);
        };
        clearReq.onerror = () => reject(clearReq.error);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    },
  };
}

const LS_KEY = 'dreamengin-continuity-sessions';

function createLSBackend(): SessionStorageBackend {
  return {
    async read(): Promise<StoredSession[]> {
      try {
        const raw = localStorage.getItem(LS_KEY);
        if (!raw) return [];
        return JSON.parse(raw) as StoredSession[];
      } catch {
        return [];
      }
    },
    async write(sessions: StoredSession[]): Promise<void> {
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(sessions.slice(0, MAX_STORED_SESSIONS)));
      } catch {
        
      }
    },
  };
}

function createMemoryBackend(): SessionStorageBackend {
  return {
    async read(): Promise<StoredSession[]> { return []; },
    async write(): Promise<void> {  },
  };
}


export class SessionContinuity {
  private backend: SessionStorageBackend | null;
  private readonly currentSession: StoredSession;
  private pastSessions: StoredSession[] = [];
  private ready = false;

  constructor(backend?: SessionStorageBackend) {
    this.backend = backend ?? null;
    const suffix = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID().replace(/-/g, '').slice(0, 8)
      : Array.from({ length: 8 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    this.currentSession = {
      id: `session:${Date.now()}:${suffix}`,
      startedAt: Date.now(),
      endedAt: Date.now(),
      activations: [],
      artifactKinds: [],
      lastArtifactTitle: null,
      artifactCount: 0,
    };
  }

  async init(): Promise<void> {
    if (!this.backend) {
      this.backend = await this.resolveBackend();
    }
    try {
      this.pastSessions = await this.backend.read();
    } catch {
      this.pastSessions = [];
    }
    this.ready = true;
  }

  private async resolveBackend(): Promise<SessionStorageBackend> {
    if (typeof window === 'undefined') return createMemoryBackend();
    if (typeof indexedDB !== 'undefined') {
      try {
        return await createIDBBackend();
      } catch {
        
      }
    }
    if (typeof localStorage !== 'undefined') {
      return createLSBackend();
    }
    return createMemoryBackend();
  }

  
  recordActivation(subsystemId: string): void {
    this.currentSession.activations.push(subsystemId);
  }

  
  updateArtifacts(count: number, kinds: string[], lastTitle: string | null): void {
    this.currentSession.artifactCount = count;
    this.currentSession.artifactKinds = [...new Set(kinds)];
    this.currentSession.lastArtifactTitle = lastTitle;
  }

  
  async persist(): Promise<void> {
    if (!this.backend) return;
    this.currentSession.endedAt = Date.now();
    try {
      const all = [{ ...this.currentSession }, ...this.pastSessions];
      await this.backend.write(all);
    } catch {
      
    }
  }

  
  getLastSession(): StoredSession | null {
    return this.pastSessions[0] ?? null;
  }

  
  getLastSessionSummary(): SessionSummary | null {
    const last = this.getLastSession();
    return last ? summariseSession(last) : null;
  }

  
  getCurrentSessionSummary(): SessionSummary {
    return summariseSession({ ...this.currentSession, endedAt: Date.now() });
  }

  
  getSessionDiff(): SessionDiff | null {
    const last = this.getLastSession();
    if (!last) return null;
    return buildDiff(last, this.currentSession);
  }

  
  isReady(): boolean {
    return this.ready;
  }

  
  getPastSessions(): readonly StoredSession[] {
    return this.pastSessions;
  }
}


export const sessionContinuity = typeof window !== 'undefined'
  ? new SessionContinuity()
  : null;
