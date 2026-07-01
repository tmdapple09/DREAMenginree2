import type { CodeEnginHostTools } from '@/engine/agentOS/hostTools';





interface SessionOptions {
  hostTools?: Partial<CodeEnginHostTools>;
}

interface SessionMessage {
  role: 'user' | 'assistant';
  content: string;
}

class AgentSession {
  readonly sessionId: string;
  private readonly hostTools: Partial<CodeEnginHostTools>;
  private history: SessionMessage[] = [];

  constructor(sessionId: string, hostTools: Partial<CodeEnginHostTools> = {}) {
    this.sessionId = sessionId;
    this.hostTools = hostTools;
  }

  async prompt(message: string): Promise<string> {
    this.history.push({ role: 'user', content: message });

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      const reply =
        '[AI Co‑pilot] ANTHROPIC_API_KEY is not set. ' +
        'Add it to .env.local to enable real AI responses.';
      this.history.push({ role: 'assistant', content: reply });
      return reply;
    }

    const systemPrompt =
      'You are an expert software engineer acting as an AI Co‑pilot inside ' +
      'CodeEngin, a real-time IDE. Help the developer write, debug, refactor, ' +
      'and explain code. Be concise and precise.';

    const body = {
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 1024,
      system: systemPrompt,
      messages: this.history.map((m) => ({ role: m.role, content: m.content })),
    };

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.text();
      const reply = `[AI Co‑pilot] API error ${res.status}: ${err}`;
      this.history.push({ role: 'assistant', content: reply });
      return reply;
    }

    const data = await res.json() as {
      content: Array<{ type: string; text: string }>;
    };
    const text =
      data.content.find((c) => c.type === 'text')?.text ??
      '[AI Co‑pilot] No response text returned.';
    this.history.push({ role: 'assistant', content: text });
    return text;
  }
}



class AgentOsManager {
  private sessions = new Map<string, AgentSession>();

  async createSession(
    _type: string,
    options: SessionOptions = {},
  ): Promise<{ sessionId: string }> {
    const sessionId = `ses_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
    this.sessions.set(
      sessionId,
      new AgentSession(sessionId, options.hostTools),
    );
    return { sessionId };
  }

  getSession(sessionId: string): AgentSession | undefined {
    return this.sessions.get(sessionId);
  }

  async closeSession(sessionId: string): Promise<void> {
    this.sessions.delete(sessionId);
  }
}



let vm: AgentOsManager | null = null;


export async function getAgentOS(): Promise<AgentOsManager> {
  if (!vm) {
    vm = new AgentOsManager();
  }
  return vm;
}
