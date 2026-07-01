


export function tickPhysicsSIMD(
  posPtr: i32,
  velPtr: i32,
  count: i32,
  deltaTime: f32,
): void {
  
  const v_dt = f32x4.splat(deltaTime);

  let i: i32 = 0;

  
  for (; i + 4 <= count; i += 4) {
    const pos: v128 = v128.load(posPtr + i * 4);
    const vel: v128 = v128.load(velPtr + i * 4);

    
    const next: v128 = f32x4.add(pos, f32x4.mul(vel, v_dt));

    v128.store(posPtr + i * 4, next);
  }

  
  for (; i < count; i++) {
    const byteOff: i32 = i * 4;
    const p = f32.load(posPtr + byteOff);
    const v = f32.load(velPtr + byteOff);
    f32.store(posPtr + byteOff, p + v * deltaTime);
  }
}


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


export function hashBytesFNV1A(ptr: i32, count: i32): u32 {
  let hash: u32 = 0x811c9dc5;
  for (let i: i32 = 0; i < count; i++) {
    hash ^= <u32>load<u8>(ptr + i);
    hash *= 0x01000193;
  }
  return hash;
}


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
