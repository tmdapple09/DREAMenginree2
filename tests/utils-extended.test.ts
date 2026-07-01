

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  debounce,
  throttle,
  clamp,
  truncate,
  retry,
  sleep,
  deepClone,
  groupBy,
  unique,
  assert,
} from '../lib/utils';


describe('debounce', () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  it('fires after delay', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 200);
    debounced('a');
    debounced('b');
    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(200);
    expect(fn).toHaveBeenCalledOnce();
    expect(fn).toHaveBeenCalledWith('b');
  });

  it('cancel prevents firing', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 200);
    debounced();
    debounced.cancel();
    vi.advanceTimersByTime(300);
    expect(fn).not.toHaveBeenCalled();
  });

  it('flush fires immediately', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 500);
    debounced('x');
    debounced.flush('z');
    expect(fn).toHaveBeenCalledWith('z');
    vi.advanceTimersByTime(600);
    expect(fn).toHaveBeenCalledOnce();
  });
});


describe('throttle', () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  it('calls immediately on first call', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 200);
    throttled();
    expect(fn).toHaveBeenCalledOnce();
  });

  it('rate-limits subsequent calls', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 200);
    throttled();
    throttled();
    throttled();
    vi.advanceTimersByTime(300);
    expect(fn).toHaveBeenCalledTimes(2); 
  });
});


describe('clamp', () => {
  it('constrains below min', () => { expect(clamp(-5, 0, 10)).toBe(0); });
  it('constrains above max', () => { expect(clamp(20, 0, 10)).toBe(10); });
  it('passes through in-range values', () => { expect(clamp(5, 0, 10)).toBe(5); });
});


describe('truncate', () => {
  it('returns short strings unchanged', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });
  it('clips long strings with ellipsis', () => {
    expect(truncate('hello world', 8)).toBe('hello w…');
  });
  it('uses custom suffix', () => {
    expect(truncate('hello world', 8, '...')).toBe('hello...');
  });
});


describe('retry', () => {
  it('resolves on first success', async () => {
    const result = await retry(() => Promise.resolve(42));
    expect(result).toBe(42);
  });

  it('retries until success', async () => {
    let attempts = 0;
    const result = await retry(async () => {
      attempts++;
      if (attempts < 3) throw new Error('fail');
      return 'ok';
    }, 3, 0);
    expect(result).toBe('ok');
    expect(attempts).toBe(3);
  });

  it('throws after all attempts exhausted', async () => {
    await expect(
      retry(() => Promise.reject(new Error('always fails')), 2, 0),
    ).rejects.toThrow('always fails');
  });
});


describe('sleep', () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  it('resolves after delay', async () => {
    let resolved = false;
    sleep(100).then(() => { resolved = true; });
    expect(resolved).toBe(false);
    vi.advanceTimersByTime(100);
    await Promise.resolve();
    expect(resolved).toBe(true);
  });
});


describe('deepClone', () => {
  it('clones nested objects', () => {
    const original = { a: { b: { c: 42 } }, arr: [1, 2, 3] };
    const clone = deepClone(original);
    expect(clone).toEqual(original);
    clone.a.b.c = 99;
    expect(original.a.b.c).toBe(42); 
  });
});


describe('groupBy', () => {
  it('groups by key function', () => {
    const arr = [{ type: 'a' }, { type: 'b' }, { type: 'a' }];
    const grouped = groupBy(arr, (x) => x.type);
    expect(grouped.get('a')).toHaveLength(2);
    expect(grouped.get('b')).toHaveLength(1);
  });
});


describe('unique', () => {
  it('removes duplicates', () => {
    expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });
  it('preserves order of first occurrence', () => {
    expect(unique(['b', 'a', 'b'])).toEqual(['b', 'a']);
  });
});


describe('assert', () => {
  it('passes for truthy values', () => {
    expect(() => assert(true, 'should not throw')).not.toThrow();
    expect(() => assert(1, 'should not throw')).not.toThrow();
  });
  it('throws for falsy values', () => {
    expect(() => assert(false, 'msg')).toThrow('Assertion failed: msg');
    expect(() => assert(0, 'zero')).toThrow('Assertion failed: zero');
    expect(() => assert(null, 'null')).toThrow('Assertion failed: null');
  });
});
