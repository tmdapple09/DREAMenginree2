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

/**
 * RenderEngin geometry bounds kernel.
 *
 * Computes min/max/center/radius for an interleaved f32 position stream. This is
 * intentionally tiny and deterministic so ContentEngin/RenderEngin can move
 * heavy upload-time mesh analysis out of React and into the same WASM module as
 * physics/audio once `pnpm run asbuild:release` is run.
 *
 * Input layout:
 *   positionPtr + vertexIndex * strideFloats * 4 = x,y,z
 *
 * Output layout at outPtr, 10 f32 values:
 *   0 minX, 1 minY, 2 minZ,
 *   3 maxX, 4 maxY, 5 maxZ,
 *   6 centerX, 7 centerY, 8 centerZ,
 *   9 radius
 */
export function computeBounds3F32(
  positionPtr: i32,
  count: i32,
  strideFloats: i32,
  outPtr: i32,
): void {
  if (count <= 0 || strideFloats < 3) {
    for (let i: i32 = 0; i < 10; i++) f32.store(outPtr + i * 4, 0.0);
    return;
  }

  let minX: f32 = f32.load(positionPtr);
  let minY: f32 = f32.load(positionPtr + 4);
  let minZ: f32 = f32.load(positionPtr + 8);
  let maxX: f32 = minX;
  let maxY: f32 = minY;
  let maxZ: f32 = minZ;

  const strideBytes: i32 = strideFloats * 4;

  for (let i: i32 = 1; i < count; i++) {
    const base: i32 = positionPtr + i * strideBytes;
    const x: f32 = f32.load(base);
    const y: f32 = f32.load(base + 4);
    const z: f32 = f32.load(base + 8);

    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (z < minZ) minZ = z;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
    if (z > maxZ) maxZ = z;
  }

  const centerX: f32 = (minX + maxX) * 0.5;
  const centerY: f32 = (minY + maxY) * 0.5;
  const centerZ: f32 = (minZ + maxZ) * 0.5;

  let radiusSq: f32 = 0.0;
  for (let i: i32 = 0; i < count; i++) {
    const base: i32 = positionPtr + i * strideBytes;
    const dx: f32 = f32.load(base) - centerX;
    const dy: f32 = f32.load(base + 4) - centerY;
    const dz: f32 = f32.load(base + 8) - centerZ;
    const next: f32 = dx * dx + dy * dy + dz * dz;
    if (next > radiusSq) radiusSq = next;
  }

  f32.store(outPtr, minX);
  f32.store(outPtr + 4, minY);
  f32.store(outPtr + 8, minZ);
  f32.store(outPtr + 12, maxX);
  f32.store(outPtr + 16, maxY);
  f32.store(outPtr + 20, maxZ);
  f32.store(outPtr + 24, centerX);
  f32.store(outPtr + 28, centerY);
  f32.store(outPtr + 32, centerZ);
  f32.store(outPtr + 36, Mathf.sqrt(radiusSq));
}

/**
 * RenderEngin intent-pressure field kernel.
 *
 * The host stores paired intensity/velocity fields in WASM memory. This updates
 * tiny physical pressure fields for buttons, Dream objects, asset handles and
 * RenderEngin preview controls without doing per-cell loops inside React.
 */
export function shapeIntentPressureFieldSIMD(
  massPtr: i32,
  velocityPtr: i32,
  count: i32,
  deltaTime: f32,
  damping: f32,
  stiffness: f32,
): void {
  const dt = f32x4.splat(deltaTime);
  const damp = f32x4.splat(max<f32>(0.0, min<f32>(1.0, damping)));
  const spring = f32x4.splat(stiffness);
  const zero = f32x4.splat(0.0);
  const one = f32x4.splat(1.0);

  let i: i32 = 0;
  for (; i + 4 <= count; i += 4) {
    const offset: i32 = i * 4;
    const mass: v128 = v128.load(massPtr + offset);
    const velocity: v128 = v128.load(velocityPtr + offset);
    const nextVelocity: v128 = f32x4.mul(f32x4.sub(velocity, f32x4.mul(mass, spring)), damp);
    const nextMass: v128 = f32x4.min(one, f32x4.max(zero, f32x4.add(mass, f32x4.mul(nextVelocity, dt))));
    v128.store(velocityPtr + offset, nextVelocity);
    v128.store(massPtr + offset, nextMass);
  }

  for (; i < count; i++) {
    const offset: i32 = i * 4;
    const mass: f32 = f32.load(massPtr + offset);
    const velocity: f32 = f32.load(velocityPtr + offset);
    const nextVelocity: f32 = (velocity - mass * stiffness) * max<f32>(0.0, min<f32>(1.0, damping));
    const nextMass: f32 = min<f32>(1.0, max<f32>(0.0, mass + nextVelocity * deltaTime));
    f32.store(velocityPtr + offset, nextVelocity);
    f32.store(massPtr + offset, nextMass);
  }
}
