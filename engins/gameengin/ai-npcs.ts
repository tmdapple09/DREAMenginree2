

export interface NPCMemory {
  
  recent: string[];
  
  pinned: string[];
}

export interface NPCPersonality {
  id: string;
  name: string;
  archetype: string;
  traits: Record<string, number>;   
  memory: NPCMemory;
}

export type LLMInvoker = (prompt: string, opts: { maxTokens: number; temperature: number }) => Promise<string>;

export interface BrainConfig {
  tokenBudgetPerTick?: number;
  temperature?: number;
  
  timeoutMs?: number;
}


export class LLMNPCBrain {
  private readonly tokenBudget: number;
  private readonly temperature: number;
  private readonly timeoutMs: number;
  private invoker: LLMInvoker | null = null;
  private callsThisTick = 0;

  constructor(config: BrainConfig = {}) {
    this.tokenBudget = Math.max(16, config.tokenBudgetPerTick ?? 64);
    this.temperature = Math.min(1.5, Math.max(0, config.temperature ?? 0.6));
    this.timeoutMs = Math.max(50, config.timeoutMs ?? 350);
  }

  attach(invoker: LLMInvoker): void { this.invoker = invoker; }

  
  async decide(personality: NPCPersonality, observation: string): Promise<string> {
    this.callsThisTick += 1;
    if (!this.invoker) return this.fallback(personality, observation);
    const prompt = this.buildPrompt(personality, observation);
    try {
      const result = await this.withTimeout(
        this.invoker(prompt, { maxTokens: this.tokenBudget, temperature: this.temperature }),
        this.timeoutMs,
      );
      return result.trim() || this.fallback(personality, observation);
    } catch {
      return this.fallback(personality, observation);
    }
  }

  resetTick(): void { this.callsThisTick = 0; }
  get callsInCurrentTick(): number { return this.callsThisTick; }

  private buildPrompt(personality: NPCPersonality, observation: string): string {
    const traitList = Object.entries(personality.traits)
      .map(([k, v]) => `${k}=${v.toFixed(2)}`)
      .join(', ');
    return [
      `You are ${personality.name}, a ${personality.archetype}.`,
      `Traits: ${traitList}.`,
      `Recent memory: ${personality.memory.recent.slice(-4).join('; ')}.`,
      `Observation: ${observation}.`,
      `Choose ONE short action (verb + object).`,
    ].join('\n');
  }

  private fallback(personality: NPCPersonality, observation: string): string {
    const aggression = personality.traits.aggression ?? 0;
    if (/threat|enemy|attack/i.test(observation)) {
      return aggression > 0.5 ? 'engage threat' : 'retreat to safety';
    }
    if (/player/i.test(observation)) return 'greet player';
    return 'patrol area';
  }

  private withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('llm_timeout')), ms);
      promise.then(
        (v) => { clearTimeout(timer); resolve(v); },
        (e) => { clearTimeout(timer); reject(e instanceof Error ? e : new Error(String(e))); },
      );
    });
  }
}

export interface DialogueLine {
  speaker: string;
  text: string;
  blocked?: boolean;
  reason?: string;
}

export interface SafetyFilter {
  
  check(text: string): string | null;
}

const DEFAULT_FILTER: SafetyFilter = {
  check(text) {
    const lower = text.toLowerCase();
    const banned = ['kill yourself', 'self harm', 'cp ', 'csam', 'doxx', 'how to make a bomb'];
    for (const term of banned) if (lower.includes(term)) return `blocked:${term.trim()}`;
    return null;
  },
};


export class EmergentDialogue {
  private readonly filter: SafetyFilter;
  private readonly fallbackTree: Map<string, string[]>;

  constructor(opts: { filter?: SafetyFilter; fallbackTree?: Map<string, string[]> } = {}) {
    this.filter = opts.filter ?? DEFAULT_FILTER;
    this.fallbackTree = opts.fallbackTree ?? new Map([
      ['greet',   ['Hello, traveller.', 'Well met.']],
      ['threat',  ['Stand down.', 'Leave, now.']],
      ['quest',   ['I have a task for you.', 'Help me, would you?']],
      ['default', ['...', 'Mm.']],
    ]);
  }

  
  sanitize(speaker: string, text: string): DialogueLine {
    const reason = this.filter.check(text);
    if (reason) return { speaker, text: this.fallback('default'), blocked: true, reason };
    return { speaker, text };
  }

  
  fallback(intent: string): string {
    const lines = this.fallbackTree.get(intent) ?? this.fallbackTree.get('default');
    if (!lines || lines.length === 0) return '...';
    const pick = Math.floor(Math.random() * lines.length);
    return lines[pick];
  }
}

export interface PersonalityStoreBackend {
  load(id: string): Promise<NPCPersonality | null>;
  save(p: NPCPersonality): Promise<void>;
}


export class NPCPersonalityStore {
  private cache = new Map<string, NPCPersonality>();
  private backend: PersonalityStoreBackend | null = null;

  attachBackend(backend: PersonalityStoreBackend): void { this.backend = backend; }

  async get(id: string): Promise<NPCPersonality | null> {
    const cached = this.cache.get(id);
    if (cached) return cached;
    if (this.backend) {
      const loaded = await this.backend.load(id);
      if (loaded) this.cache.set(id, loaded);
      return loaded;
    }
    return null;
  }

  async upsert(personality: NPCPersonality): Promise<void> {
    this.cache.set(personality.id, personality);
    if (this.backend) await this.backend.save(personality);
  }

  remember(id: string, observation: string, max = 16): void {
    const p = this.cache.get(id);
    if (!p) return;
    p.memory.recent.push(observation);
    if (p.memory.recent.length > max) p.memory.recent.splice(0, p.memory.recent.length - max);
  }

  pin(id: string, fact: string): void {
    const p = this.cache.get(id);
    if (!p) return;
    if (!p.memory.pinned.includes(fact)) p.memory.pinned.push(fact);
  }

  get cachedCount(): number { return this.cache.size; }
}
