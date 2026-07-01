import { ResourcePool } from '../power-systems';






export class ObjectPoolingSystem {
  

  private pools = new Map<string, ResourcePool<Record<string, unknown>>>();

  
  createPool<T extends { reset?(): void }>(
    name: string,
    factory: () => T,
    capacity: number,
  ): ResourcePool<T> {
    const pool = new ResourcePool<T>(factory, capacity);
    this.pools.set(name, pool);
    return pool;
  }

  
  getPool<T extends { reset?(): void }>(name: string): ResourcePool<T> | undefined {
    return this.pools.get(name) as ResourcePool<T> | undefined;
  }

  
  releaseAll(name: string): void {
    this.pools.get(name)?.releaseAll();
  }

  
  releaseAllPools(): void {
    for (const pool of this.pools.values()) pool.releaseAll();
  }

  
  get stats(): Record<string, ReturnType<ResourcePool<object>['stats']['valueOf']>> {
    const out: Record<string, unknown> = {};
    for (const [name, pool] of this.pools) out[name] = pool.stats;

    return out as Record<string, object>;
  }
}

export { ResourcePool } from '../power-systems';
