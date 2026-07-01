

export type ConsentDomain =
  | 'network:coop'        
  | 'network:realtime'    
  | 'network:webrtc'      
  | 'content:incoming'    
  | 'content:recording'   
  | 'analytics'           
  | (string & {});

export type ConsentDecision = 'granted' | 'denied' | 'prompt';

export interface ConsentEntry {
  domain: ConsentDomain;
  decision: ConsentDecision;
  
  decidedAt: string;
  
  sessionId?: string;
}

export interface AuditEntry {
  id: string;
  eventType: 'consent_change' | 'coop_action' | 'transfer' | 'setting_change';
  domain?: ConsentDomain;
  previousValue?: string;
  newValue?: string;
  sessionId?: string;
  timestamp: string;
}


export function resolveAcceptPolicy(
  inSession: boolean,
  userOverride?: ConsentDecision,
): ConsentDecision {
  if (userOverride === 'denied') return 'denied';
  if (userOverride === 'granted') return 'granted';
  return inSession ? 'granted' : 'prompt';
}

const LS_KEY = 'dream:consent';
const SETTINGS_LS_KEY = 'dream:settings';

type ConsentRow = {
  domain: ConsentDomain;
  decision: ConsentDecision;
  decided_at: string;
  session_id: string | null;
};

type ConsentDbResponse<T> = Promise<{
  data: T | null;
  error: { message?: string } | null;
}>;

type ConsentSupabaseClient = {
  auth: {
    getUser: () => Promise<{
      data: { user: { id: string } | null };
      error: { message?: string } | null;
    }>;
  };
  from: (table: 'dream_consent' | 'dream_settings' | 'dream_audit_log') => {
    select: (columns?: string) => {
      eq: (column: string, value: unknown) => ConsentDbResponse<ConsentRow[]>;
    };
    upsert: (
      values: Array<Record<string, unknown>>,
      options: { onConflict: string },
    ) => ConsentDbResponse<unknown>;
    insert: (values: Array<Record<string, unknown>>) => ConsentDbResponse<unknown>;
  };
};

export class ConsentManager {
  private readonly _cache = new Map<ConsentDomain, ConsentEntry>();
  private readonly _auditLog: AuditEntry[] = [];
  private readonly _settings = new Map<string, string>();
  private _sessionId: string | null = null;

  constructor() {
    this._loadFromLocalStorage();
  }

  
  setSessionId(id: string): void {
    this._sessionId = id;
  }

  clearSession(): void {
    this._sessionId = null;
  }

  
  get(domain: ConsentDomain): ConsentDecision {
    return this._cache.get(domain)?.decision ?? 'prompt';
  }

  
  set(domain: ConsentDomain, decision: ConsentDecision): void {
    const previous = this._cache.get(domain)?.decision;
    const entry: ConsentEntry = {
      domain,
      decision,
      decidedAt: new Date().toISOString(),
      sessionId: this._sessionId ?? undefined,
    };
    this._cache.set(domain, entry);
    this._persistToLocalStorage();
    this._appendAudit({
      id: this._uid(),
      eventType: 'consent_change',
      domain,
      previousValue: previous,
      newValue: decision,
      sessionId: this._sessionId ?? undefined,
      timestamp: entry.decidedAt,
    });
  }

  
  grantAll(domains: ConsentDomain[]): void {
    for (const d of domains) this.set(d, 'granted');
  }

  
  isGranted(domain: ConsentDomain): boolean {
    return this.get(domain) === 'granted';
  }

  
  getAllEntries(): ConsentEntry[] {
    return Array.from(this._cache.values());
  }

  getSetting(key: string, fallback?: string): string | undefined {
    return this._settings.get(key) ?? fallback;
  }

  setSetting(key: string, value: string): void {
    const previous = this._settings.get(key);
    this._settings.set(key, value);
    this._persistSettings();
    this._appendAudit({
      id: this._uid(),
      eventType: 'setting_change',
      previousValue: previous,
      newValue: value,
      sessionId: this._sessionId ?? undefined,
      timestamp: new Date().toISOString(),
    });
  }

  getAllSettings(): Record<string, string> {
    const obj: Record<string, string> = {};
    this._settings.forEach((v: string, k: string) => { obj[k] = v; });
    return obj;
  }

  
  audit(entry: Omit<AuditEntry, 'id' | 'timestamp'>): void {
    this._appendAudit({
      ...entry,
      id: this._uid(),
      timestamp: new Date().toISOString(),
    });
  }

  
  getAuditLog(): readonly AuditEntry[] {
    return [...this._auditLog];
  }

  
  clearAuditLog(): void {
    this._auditLog.length = 0;
  }

  
  async hydrateFromSupabase(userId: string): Promise<void> {
    try {
      const { createClient } = await import('@/supabase/client/client');
      const supabase = createClient();
      const db = supabase as any as ConsentSupabaseClient;
      const { data: authData, error: authError } = await db.auth.getUser();
      if (authError) return;
      if (authData.user?.id !== userId) {
        console.warn('[ConsentManager] hydrate user mismatch blocked');
        return;
      }
      const { data } = await db
        .from('dream_consent')
        .select('domain, decision, decided_at, session_id')
        .eq('user_id', userId);
      for (const row of data ?? []) {
        this._cache.set(row.domain, {
          domain: row.domain,
          decision: row.decision,
          decidedAt: row.decided_at,
          sessionId: row.session_id ?? undefined,
        });
      }
      this._persistToLocalStorage();
    } catch {
      
    }
  }

  
  async flushToSupabase(userId: string): Promise<void> {
    try {
      const { createClient } = await import('@/supabase/client/client');
      const supabase = createClient();
      const db = supabase as any as ConsentSupabaseClient;
      const { data: authData, error: authError } = await db.auth.getUser();
      if (authError) return;
      if (authData.user?.id !== userId) {
        console.warn('[ConsentManager] flush user mismatch blocked');
        return;
      }
      const entries = this.getAllEntries().map((entry) => ({
        user_id: userId,
        domain: entry.domain,
        decision: entry.decision,
        decided_at: entry.decidedAt,
        session_id: entry.sessionId ?? null,
      }));
      if (entries.length > 0) {
        await db
          .from('dream_consent')
          .upsert(entries, { onConflict: 'user_id,domain' });
      }

      const settings = Object.entries(this.getAllSettings()).map(([key, value]) => ({
        user_id: userId,
        key,
        value,
        updated_at: new Date().toISOString(),
      }));
      if (settings.length > 0) {
        await db
          .from('dream_settings')
          .upsert(settings, { onConflict: 'user_id,key' });
      }

      const auditRows = this._auditLog.map((entry) => ({
        user_id: userId,
        event_type: entry.eventType,
        domain: entry.domain ?? null,
        previous_value: entry.previousValue ?? null,
        new_value: entry.newValue ?? null,
        session_id: entry.sessionId ?? null,
        created_at: entry.timestamp,
      }));
      if (auditRows.length > 0) {
        await db.from('dream_audit_log').insert(auditRows);
      }
    } catch {
      this._persistToLocalStorage();
      this._persistSettings();
    }
  }

  private _appendAudit(entry: AuditEntry): void {
    this._auditLog.push(entry);
    
    if (this._auditLog.length > 500) {
      this._auditLog.splice(0, this._auditLog.length - 500);
    }
  }

  private _loadFromLocalStorage(): void {
    try {
      if (typeof localStorage === 'undefined') return;
      const consentRaw = localStorage.getItem(LS_KEY);
      if (consentRaw) {
        const entries = JSON.parse(consentRaw) as ConsentEntry[];
        for (const entry of entries) {
          this._cache.set(entry.domain, entry);
        }
      }
      const settingsRaw = localStorage.getItem(SETTINGS_LS_KEY);
      if (settingsRaw) {
        const obj = JSON.parse(settingsRaw) as Record<string, string>;
        for (const [k, v] of Object.entries(obj)) this._settings.set(k, v);
      }
    } catch {  }
  }

  private _persistToLocalStorage(): void {
    try {
      if (typeof localStorage === 'undefined') return;
      localStorage.setItem(LS_KEY, JSON.stringify(this.getAllEntries()));
    } catch {  }
  }

  private _persistSettings(): void {
    try {
      if (typeof localStorage === 'undefined') return;
      localStorage.setItem(SETTINGS_LS_KEY, JSON.stringify(this.getAllSettings()));
    } catch {  }
  }

  private _uid(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }
}


export const consentManager = new ConsentManager();
