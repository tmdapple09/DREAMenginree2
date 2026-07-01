

declare module '@rivet-dev/agent-os' {
  export interface AgentOsOptions {
    software?: unknown[];
    env?: Record<string, string | undefined>;
  }

  export interface HostTools {

    [key: string]: (...args: unknown[]) => Promise<unknown>;
  }

  export interface CreateSessionOptions {
    hostTools?: HostTools;
  }

  export interface AgentSession {
    sessionId: string;
    prompt(message: string): Promise<string>;
  }

  export class AgentOs {
    static create(options: AgentOsOptions): Promise<AgentOs>;
    createSession(
      type: string,
      options?: CreateSessionOptions,
    ): Promise<{ sessionId: string }>;
    getSession(sessionId: string): AgentSession | undefined;
    closeSession(sessionId: string): Promise<void>;
  }
}

declare module '@rivet-dev/agent-os-common' {
  const common: unknown;
  export default common;
}

declare module '@rivet-dev/agent-os-pi' {
  const pi: unknown;
  export default pi;
}
