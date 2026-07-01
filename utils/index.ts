import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[] ){
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date ){
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export function formatRelativeTime(date: string | Date, options?: { compact?: boolean }): string {
  const now = new Date()
  const target = new Date(date)
  const diffMs = now.getTime() - target.getTime()
  const diffSecs = Math.floor(diffMs / 1000)
  const diffMins = Math.floor(diffSecs / 60)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (options?.compact) {
    if (diffMs < 60_000) return 'just now'
    if (diffMs < 3_600_000) return `${Math.floor(diffMs / 60_000)}m`
    if (diffMs < 86_400_000) return `${Math.floor(diffMs / 3_600_000)}h`
    return `${Math.floor(diffMs / 86_400_000)}d`
  }

  if (diffSecs < 60) return 'just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return formatDate(date)
}

export function generateDedupeHash(userId: string, source: string, externalId: string): string {
  return `${userId}-${source}-${externalId}`
}

type AnyFn = (...args: unknown[]) => void;


export function debounce<T extends AnyFn>(
  fn: T,
  delayMs: number,
): T & { cancel: () => void; flush: (...args: Parameters<T>) => void } {
  let timer: ReturnType<typeof setTimeout> | null = null

  let pendingArgs: unknown[] | null = null

  function debounced(...args: Parameters<T> ){
    pendingArgs = args
    if (timer !== null) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      if (pendingArgs) fn(...pendingArgs)
      pendingArgs = null
    }, delayMs)
  }

  debounced.cancel = () => {
    if (timer !== null) { clearTimeout(timer); timer = null }
    pendingArgs = null
  }

  debounced.flush = (...args: Parameters<T>) => {
    if (timer !== null) { clearTimeout(timer); timer = null }
    fn(...args)
    pendingArgs = null
  }

  return debounced as T & { cancel: () => void; flush: (...args: Parameters<T>) => void }
}


export function throttle<T extends AnyFn>(
  fn: T,
  intervalMs: number,
): T & { cancel: () => void } {
  let lastCallAt = 0
  let timer: ReturnType<typeof setTimeout> | null = null

  function throttled(...args: Parameters<T> ){
    const now = Date.now()
    const remaining = intervalMs - (now - lastCallAt)
    if (timer !== null) clearTimeout(timer)
    if (remaining <= 0) {
      lastCallAt = now
      fn(...args)
    } else {
      timer = setTimeout(() => {
        lastCallAt = Date.now()
        timer = null
        fn(...args)
      }, remaining)
    }
  }

  throttled.cancel = () => {
    if (timer !== null) { clearTimeout(timer); timer = null }
  }

  return throttled as T & { cancel: () => void }
}


export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}


export function truncate(str: string, maxLen: number, suffix = '…'): string {
  if (str.length <= maxLen) return str
  return str.slice(0, Math.max(0, maxLen - suffix.length)) + suffix
}


export async function retry<T>(
  fn: () => Promise<T>,
  maxAttempts = 3,
  baseDelayMs = 200,
): Promise<T> {
  let lastError: unknown
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (err: unknown) {
      lastError = err
      if (attempt < maxAttempts) {
        await sleep(baseDelayMs * Math.pow(2, attempt - 1))
      }
    }
  }
  throw lastError
}


export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}


export function deepClone<T>(value: T): T {
  if (typeof structuredClone === 'function') return structuredClone(value)
  return JSON.parse(JSON.stringify(value)) as T
}


export function groupBy<T, K>(arr: readonly T[], keyFn: (item: T) => K): Map<K, T[]> {
  const map = new Map<K, T[]>()
  for (const item of arr) {
    const key = keyFn(item)
    const bucket = map.get(key)
    if (bucket) bucket.push(item)
    else map.set(key, [item])
  }
  return map
}


export function unique<T>(arr: readonly T[]): T[] {
  return [...new Set(arr)]
}


export function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(`Assertion failed: ${message}`)
}


export function toErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === 'object' && err !== null && 'message' in err) {
    const msg = (err as Record<string, unknown>).message;
    return typeof msg === 'string' ? msg : String(msg);
  }
  return String(err);
}


export function isError(value: unknown): value is Error {
  return value instanceof Error;
}
