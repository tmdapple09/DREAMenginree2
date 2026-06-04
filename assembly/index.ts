/**
 * assembly/index.ts — DREAMengin Wasm Physics Shader
 *
 * AssemblyScript source compiled to engin-shader.wasm via:
 *   pnpm run asbuild:debug   (development build with source-maps)
 *   pnpm run asbuild:release  (optimised production build)
 *
 * Responsible for:
 *  - tickPhysicsSIMD: SIMD-accelerated velocity→position integration for
 *    10,000 entities per tick using f32x4 SIMD, processing 4 entities per
 *    instruction cycle.
 *  - processAudioBufferSIMD: SIMD-accelerated audio DSP helper for the
 *    StarMaker daydream (applies a gain factor to 4 f32 samples at a time).
 *
 * Memory model:
 *  The host passes a pointer into the SharedArrayBuffer that is exposed as
 *  the Wasm linear memory (via WebAssembly.Memory { shared: true }).
 *  All reads and writes are zero-copy — there is no serialisation overhead
 *  between the Wasm module and the JavaScript workers.
 *
 * IDARi audit integration:
 *  Execution time is measured by the JS caller via performance.now() before and
 *  after the Wasm export call.  If a tick exceeds the IDARi budget the worker
 *  posts a 'wasm_budget_exceeded' message so IDARi can gate or kill the module.
 *
 * Architecture justification: docs/ARCHITECTURE.md §1 (Runtime regions)
 * Performance target: ≤ 1 ms/tick for 10,000 entities at 60 fps.
 */

// ─── tickPhysicsSIMD ─────────────────────────────────────────────────────────

/**
 * Optimised physics tick using f32x4 SIMD.
 *
 * Processes `count` entities starting at `posPtr` / `velPtr` inside the Wasm
 * linear memory (which is backed by the SharedArrayBuffer on the host side).
 * Each loop iteration advances 4 entity positions at once by integrating their
 * velocities multiplied by `deltaTime`.
 *
 * @param posPtr   - Byte offset of the first posX element in Wasm memory.
 * @param velPtr   - Byte offset of the first velX element in Wasm memory.
 * @param count    - Number of f32 elements (≤ 10,000 per channel).
 * @param deltaTime - Frame delta in seconds (typ. 0.016 at 60 fps).
 */
export function tickPhysicsSIMD(
  posPtr: i32,
  velPtr: i32,
  count: i32,
  deltaTime: f32,
): void {
  // Broadcast deltaTime to all four f32 lanes.
  const v_dt = f32x4.splat(deltaTime);

  let i: i32 = 0;

  // SIMD fast path: process 4 entities per iteration.
  for (; i + 4 <= count; i += 4) {
    const pos: v128 = v128.load(posPtr + i * 4);
    const vel: v128 = v128.load(velPtr + i * 4);

    // NewPos = Pos + Vel * dt  (4 entities in one instruction)
    const next: v128 = f32x4.add(pos, f32x4.mul(vel, v_dt));

    v128.store(posPtr + i * 4, next);
  }

  // Scalar tail for remaining entities (count not divisible by 4).
  for (; i < count; i++) {
    const byteOff: i32 = i * 4;
    const p = f32.load(posPtr + byteOff);
    const v = f32.load(velPtr + byteOff);
    f32.store(posPtr + byteOff, p + v * deltaTime);
  }
}

// ─── processAudioBufferSIMD ───────────────────────────────────────────────────

/**
 * SIMD-accelerated audio gain pass for the StarMaker daydream.
 *
 * Multiplies each f32 sample in the buffer by `gain`, processing 4 samples
 * per instruction using f32x4 SIMD.  Suitable for real-time DSP effects
 * (reverb dry/wet mix, distortion drive, per-track volume, etc.).
 *
 * @param bufPtr - Byte offset of the first sample in Wasm memory.
 * @param count  - Number of f32 samples to process.
 * @param gain   - Linear gain factor (0.0 = silence, 1.0 = unity, > 1.0 = amplify).
 */
export function processAudioBufferSIMD(
  bufPtr: i32,
  count: i32,
  gain: f32,
): void {
  const v_gain = f32x4.splat(gain);

  let i: i32 = 0;

  for (; i + 4 <= count; i += 4) {
    const samples: v128 = v128.load(bufPtr + i * 4);
    v128.store(bufPtr + i * 4, f32x4.mul(samples, v_gain));
  }

  for (; i < count; i++) {
    const byteOff: i32 = i * 4;
    f32.store(bufPtr + byteOff, f32.load(bufPtr + byteOff) * gain);
  }
}

// ─── hashBytesFNV1A ──────────────────────────────────────────────────────────

/**
 * Deterministic byte fingerprint for runtime snapshots and sync frames.
 *
 * TypeScript canonicalizes the snapshot into stable JSON, then this WASM export
 * performs the hot byte loop with unsigned 32-bit FNV-1a math. This keeps the
 * core runtime's sync fingerprint deterministic without pushing domain logic
 * into the engine or into individual Engins.
 *
 * @param ptr   - Byte offset of the first canonical JSON byte.
 * @param count - Number of bytes to hash.
 * @returns unsigned 32-bit FNV-1a hash.
 */
export function hashBytesFNV1A(ptr: i32, count: i32): u32 {
  let hash: u32 = 0x811c9dc5;
  for (let i: i32 = 0; i < count; i++) {
    hash ^= <u32>load<u8>(ptr + i);
    hash *= 0x01000193;
  }
  return hash;
}

// ─── shapeGlowFieldSIMD ──────────────────────────────────────────────────────

/**
 * Premium visual field shaper for glow/particle intensity buffers.
 *
 * The host passes f32 intensity and velocity buffers. WASM applies a small
 * deterministic decay-plus-energy step with f32x4 SIMD so premium OS and game
 * glow fields can stay alive without pushing visual math into React renders.
 */
export function shapeGlowFieldSIMD(
  intensityPtr: i32,
  velocityPtr: i32,
  count: i32,
  deltaTime: f32,
  resonance: f32,
): void {
  const decay = f32x4.splat(1.0 - min<f32>(0.92, deltaTime * 0.66));
  const gain = f32x4.splat(deltaTime * resonance);
  const ceiling = f32x4.splat(1.0);
  let i: i32 = 0;
  for (; i + 4 <= count; i += 4) {
    const offset: i32 = i * 4;
    const intensity: v128 = v128.load(intensityPtr + offset);
    const velocity: v128 = v128.load(velocityPtr + offset);
    const shaped: v128 = f32x4.min(ceiling, f32x4.add(f32x4.mul(intensity, decay), f32x4.mul(velocity, gain)));
    v128.store(intensityPtr + offset, shaped);
  }
  for (; i < count; i++) {
    const offset: i32 = i * 4;
    const next = min<f32>(1.0, f32.load(intensityPtr + offset) * (1.0 - min<f32>(0.92, deltaTime * 0.66)) + f32.load(velocityPtr + offset) * deltaTime * resonance);
    f32.store(intensityPtr + offset, next);
  }
}
