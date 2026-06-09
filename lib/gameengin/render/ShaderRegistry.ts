import type { RendererBackendId } from '../cartridge';

export type GameEnginShaderStage = 'vertex' | 'fragment' | 'compute';

export interface GameEnginShaderSource {
  readonly id: string;
  readonly label: string;
  readonly backend: RendererBackendId;
  readonly stage: GameEnginShaderStage;
  readonly code: string;
  readonly entryPoint?: string;
  readonly variants?: readonly string[];
}

export interface GameEnginShaderCompileKey {
  readonly id: string;
  readonly backend: RendererBackendId;
  readonly variant?: string;
}

export class GameEnginShaderRegistry {
  private readonly sources = new Map<string, GameEnginShaderSource>();

  register(source: GameEnginShaderSource): void {
    if (!source.id || !source.label || !source.code) throw new Error('Invalid GameEngin shader source.');
    this.sources.set(source.id, Object.freeze({ ...source, variants: [...(source.variants ?? [])] }));
  }

  get(id: string): GameEnginShaderSource | undefined {
    return this.sources.get(id);
  }

  compileKey(key: GameEnginShaderCompileKey): string {
    const source = this.sources.get(key.id);
    if (!source) throw new Error(`Unknown GameEngin shader ${key.id}.`);
    return `${source.backend}:${source.id}:${key.variant ?? 'default'}`;
  }

  listForBackend(backend: RendererBackendId): GameEnginShaderSource[] {
    return [...this.sources.values()].filter((source) => source.backend === backend);
  }

  get size(): number {
    return this.sources.size;
  }
}

