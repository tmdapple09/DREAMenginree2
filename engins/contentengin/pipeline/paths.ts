import path from 'path';

export function safeSegment(value: string, label = 'path segment'): string {
  if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]{0,96}$/.test(value)) throw new Error(`Invalid ${label}.`);
  if (value.includes('..') || value.includes('/') || value.includes('\\')) throw new Error(`Invalid ${label}.`);
  return value;
}

export function safeUnder(root: string, ...segments: string[]): string {
  const resolvedRoot = path.resolve(root);
  const resolved = path.resolve(resolvedRoot, ...segments.map((s) => safeSegment(s)));
  if (resolved !== resolvedRoot && !resolved.startsWith(resolvedRoot + path.sep)) throw new Error('Resolved path escaped ContentEngin root.');
  return resolved;
}
