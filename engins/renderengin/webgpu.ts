import {
  mat4Identity,
  type Mat4,
  type MeshBuffers,
  type Vec3,
  type Vec4,
  type Vertex,
} from './core';

export interface PackedVertexBuffer {
  readonly data: Float32Array;
  readonly strideFloats: 12;
  readonly strideBytes: 48;
  readonly vertexCount: number;
}

export interface RenderEnginGpuTexture {
  readonly texture: GPUTexture;
  readonly view: GPUTextureView;
  readonly sampler: GPUSampler;
  readonly width: number;
  readonly height: number;
  readonly format: GPUTextureFormat;
  dispose(): void;
}

export interface RenderEnginGpuMesh {
  readonly vertexBuffer: GPUBuffer;
  readonly indexBuffer: GPUBuffer;
  readonly indexCount: number;
  readonly indexFormat: GPUIndexFormat;
  dispose(): void;
}

export interface RenderEnginFrameStats {
  readonly frameIndex: number;
  readonly cpuFrameMs: number;
  readonly indexCount: number;
  readonly drawCalls: number;
  readonly estimatedFps: number;
  readonly droppedFrame: boolean;
  readonly measuredAt: string;
}

export interface RenderGpuMaterial {
  readonly albedo: Vec4;
  readonly orm: Vec4;
  readonly emissive: Vec4;
}

export interface RenderEnginSceneObject {
  readonly mesh: RenderEnginGpuMesh;
  readonly uniformBuffer: GPUBuffer;
  readonly bindGroup: GPUBindGroup;
  readonly albedoTexture: RenderEnginGpuTexture;
  modelMatrix?: Mat4;
  material?: RenderGpuMaterial;
}

export interface RenderEnginScene {
  readonly viewMatrix: Mat4;
  readonly projectionMatrix: Mat4;
  readonly cameraPosition: Vec3;
  readonly lightDirection: Vec3;
  readonly objects: ReadonlyArray<RenderEnginSceneObject>;
}

export interface RenderEnginLifecycleHooks {
  onReady?(renderer: WebGpuRenderEngin): void;
  onFrame?(stats: RenderEnginFrameStats): void;
  onError?(error: Error): void;
  onStop?(): void;
}

export const SHADER = /* wgsl */ `
struct Uniforms {
  model : mat4x4<f32>,
  view : mat4x4<f32>,
  projection : mat4x4<f32>,
  camera : vec4<f32>,
  light : vec4<f32>,
  albedo : vec4<f32>,
  orm : vec4<f32>,
  emissive : vec4<f32>,
};

@group(0) @binding(0) var<uniform> uniforms : Uniforms;
@group(0) @binding(1) var albedoTexture : texture_2d<f32>;
@group(0) @binding(2) var albedoSampler : sampler;

struct VertexInput {
  @location(0) position : vec3<f32>,
  @location(1) normal : vec3<f32>,
  @location(2) tangent : vec4<f32>,
  @location(3) uv : vec2<f32>,
};

struct VertexOutput {
  @builtin(position) clip : vec4<f32>,
  @location(0) worldNormal : vec3<f32>,
  @location(1) uv : vec2<f32>,
};

@vertex
fn vsMain(input : VertexInput) -> VertexOutput {
  var out : VertexOutput;
  let world = uniforms.model * vec4<f32>(input.position, 1.0);
  out.clip = uniforms.projection * uniforms.view * world;
  out.worldNormal = normalize((uniforms.model * vec4<f32>(input.normal, 0.0)).xyz);
  out.uv = input.uv;
  return out;
}

@fragment
fn fsMain(input : VertexOutput) -> @location(0) vec4<f32> {
  let n = normalize(input.worldNormal);
  let l = normalize(-uniforms.light.xyz);
  let ndl = max(dot(n, l), 0.0);
  let textureAlbedo = textureSample(albedoTexture, albedoSampler, input.uv).rgb;
  let base = uniforms.albedo.rgb * textureAlbedo;
  let roughness = clamp(uniforms.orm.g, 0.04, 1.0);
  let metallic = clamp(uniforms.orm.b, 0.0, 1.0);
  let ao = clamp(uniforms.orm.r, 0.0, 1.0);
  let viewDir = normalize(uniforms.camera.xyz);
  let halfDir = normalize(l + viewDir);
  let specPower = mix(64.0, 8.0, roughness);
  let specular = pow(max(dot(n, halfDir), 0.0), specPower) * mix(0.04, 0.8, metallic);
  let ambient = base * 0.12 * ao;
  let color = ambient + base * ndl * (1.0 - metallic * 0.35) + vec3<f32>(specular) + uniforms.emissive.rgb;
  return vec4<f32>(color, uniforms.albedo.a);
}
`;

export function toGpuMat4(matrix: Mat4): Mat4 {
  return [
    matrix[0], matrix[4], matrix[8], matrix[12],
    matrix[1], matrix[5], matrix[9], matrix[13],
    matrix[2], matrix[6], matrix[10], matrix[14],
    matrix[3], matrix[7], matrix[11], matrix[15],
  ];
}

function writeMat4(target: Float32Array, offset: number, matrix: Mat4): void {
  target.set(matrix, offset);
}

export function packAosVertexBuffer(mesh: MeshBuffers): PackedVertexBuffer {
  const data = new Float32Array(mesh.vertices.length * 12);
  mesh.vertices.forEach((vertex: Vertex, index) => {
    const offset = index * 12;
    data.set(vertex.position, offset);
    data.set(vertex.normal, offset + 3);
    data.set(vertex.tangent, offset + 6);
    data.set(vertex.uv, offset + 10);
  });
  return {
    data,
    strideFloats: 12,
    strideBytes: 48,
    vertexCount: mesh.vertices.length,
  };
}

function createBuffer(
  device: GPUDevice,
  data: ArrayBufferView,
  usage: GPUBufferUsageFlags,
): GPUBuffer {
  const buffer = device.createBuffer({
    size: Math.max(4, Math.ceil(data.byteLength / 4) * 4),
    usage,
    mappedAtCreation: true,
  });
  new Uint8Array(buffer.getMappedRange()).set(
    new Uint8Array(data.buffer as ArrayBuffer, data.byteOffset, data.byteLength),
  );
  buffer.unmap();
  return buffer;
}

export async function requestWebGpuDevice(): Promise<{ adapter: GPUAdapter; device: GPUDevice }> {
  if (!globalThis.navigator?.gpu) {
    throw new Error('WebGPU is not available in this runtime.');
  }
  const adapter = await globalThis.navigator.gpu.requestAdapter();
  if (!adapter) {
    throw new Error('WebGPU adapter request failed.');
  }
  const device = await adapter.requestDevice();
  return { adapter, device };
}

export class WebGpuRenderEngin {
  readonly device: GPUDevice;
  readonly context: GPUCanvasContext;
  readonly format: GPUTextureFormat;

  private readonly pipeline: GPURenderPipeline;
  private readonly shadowPipeline: GPURenderPipeline;
  private readonly bindGroupLayout: GPUBindGroupLayout;
  private readonly defaultAlbedoTexture: RenderEnginGpuTexture;
  private depthTexture: GPUTexture;
  private shadowDepthTexture: GPUTexture;
  private width: number;
  private height: number;
  private frameIndex = 0;
  private animationFrame: number | null = null;
  private stopped = true;
  private scene: RenderEnginScene = {
    viewMatrix: mat4Identity(),
    projectionMatrix: mat4Identity(),
    cameraPosition: [0, 0, 5],
    lightDirection: [0.35, -0.75, -0.55],
    objects: [],
  };

  constructor(options: {
    device: GPUDevice;
    canvas: HTMLCanvasElement;
    alphaMode?: GPUCanvasAlphaMode;
  }) {
    this.device = options.device;
    const context = options.canvas.getContext('webgpu');
    if (!context) {
      throw new Error('Canvas did not provide a WebGPU context.');
    }
    this.context = context;
    this.format = globalThis.navigator.gpu.getPreferredCanvasFormat();
    this.width = Math.max(1, options.canvas.width);
    this.height = Math.max(1, options.canvas.height);
    this.context.configure({
      device: this.device,
      format: this.format,
      alphaMode: options.alphaMode ?? 'premultiplied',
    });
    this.depthTexture = this.createDepthTexture(this.width, this.height);
    this.shadowDepthTexture = this.createDepthTexture(2048, 2048);
    this.defaultAlbedoTexture = this.uploadTexture({ width: 1, height: 1, data: new Uint8Array([255, 255, 255, 255]) });

    this.bindGroupLayout = this.device.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT, buffer: {} },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, texture: {} },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, sampler: {} },
      ],
    });
    this.pipeline = this.device.createRenderPipeline({
      layout: this.device.createPipelineLayout({ bindGroupLayouts: [this.bindGroupLayout] }),
      vertex: {
        module: this.device.createShaderModule({ code: SHADER }),
        entryPoint: 'vsMain',
        buffers: [{
          arrayStride: 48,
          attributes: [
            { shaderLocation: 0, offset: 0, format: 'float32x3' },
            { shaderLocation: 1, offset: 12, format: 'float32x3' },
            { shaderLocation: 2, offset: 24, format: 'float32x4' },
            { shaderLocation: 3, offset: 40, format: 'float32x2' },
          ],
        }],
      },
      fragment: {
        module: this.device.createShaderModule({ code: SHADER }),
        entryPoint: 'fsMain',
        targets: [{ format: this.format }],
      },
      primitive: { topology: 'triangle-list', cullMode: 'back' },
      depthStencil: {
        format: 'depth24plus',
        depthWriteEnabled: true,
        depthCompare: 'less',
      },
    });
    this.shadowPipeline = this.device.createRenderPipeline({
      layout: this.device.createPipelineLayout({ bindGroupLayouts: [this.bindGroupLayout] }),
      vertex: {
        module: this.device.createShaderModule({ code: SHADER }),
        entryPoint: 'vsMain',
        buffers: [{
          arrayStride: 48,
          attributes: [
            { shaderLocation: 0, offset: 0, format: 'float32x3' },
            { shaderLocation: 1, offset: 12, format: 'float32x3' },
            { shaderLocation: 2, offset: 24, format: 'float32x4' },
            { shaderLocation: 3, offset: 40, format: 'float32x2' },
          ],
        }],
      },
      primitive: { topology: 'triangle-list', cullMode: 'back' },
      depthStencil: {
        format: 'depth24plus',
        depthWriteEnabled: true,
        depthCompare: 'less',
      },
    });
  }

  private createDepthTexture(width: number, height: number): GPUTexture {
    return this.device.createTexture({
      size: { width, height },
      format: 'depth24plus',
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });
  }

  resize(width: number, height: number): void {
    const nextWidth = Math.max(1, Math.floor(width));
    const nextHeight = Math.max(1, Math.floor(height));
    if (nextWidth === this.width && nextHeight === this.height) return;
    this.width = nextWidth;
    this.height = nextHeight;
    this.depthTexture.destroy();
    this.depthTexture = this.createDepthTexture(nextWidth, nextHeight);
  }

  uploadTexture(options: { width: number; height: number; data?: Uint8Array; format?: GPUTextureFormat; usage?: GPUTextureUsageFlags; mipLevelCount?: number }): RenderEnginGpuTexture {
    const width = Math.max(1, Math.floor(options.width));
    const height = Math.max(1, Math.floor(options.height));
    const format = options.format ?? 'rgba8unorm';
    const texture = this.device.createTexture({
      size: { width, height },
      format,
      mipLevelCount: Math.max(1, Math.floor(options.mipLevelCount ?? 1)),
      usage: options.usage ?? (GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT),
    });
    if (options.data) {
      const rowBytes = width * 4;
      const paddedRowBytes = Math.ceil(rowBytes / 256) * 256;
      const expectedBytes = rowBytes * height;
      if (options.data.byteLength < expectedBytes) {
        throw new Error('Texture upload data is smaller than the declared RGBA texture dimensions.');
      }
      const upload = paddedRowBytes === rowBytes
        ? options.data.subarray(0, expectedBytes)
        : new Uint8Array(paddedRowBytes * height);
      if (upload !== options.data) {
        for (let row = 0; row < height; row += 1) {
          upload.set(options.data.subarray(row * rowBytes, row * rowBytes + rowBytes), row * paddedRowBytes);
        }
      }
      this.device.queue.writeTexture({ texture }, upload, { bytesPerRow: paddedRowBytes, rowsPerImage: height }, { width, height });
    }
    const sampler = this.device.createSampler({ magFilter: 'linear', minFilter: 'linear', mipmapFilter: 'linear', maxAnisotropy: 1 });
    return { texture, view: texture.createView(), sampler, width, height, format, dispose: () => texture.destroy() };
  }

  uploadMesh(mesh: MeshBuffers): RenderEnginGpuMesh {
    const packed = packAosVertexBuffer(mesh);
    const indices = mesh.indexFormat === 'uint16'
      ? new Uint16Array(mesh.indices)
      : new Uint32Array(mesh.indices);
    const vertexBuffer = createBuffer(this.device, packed.data, GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);
    const indexBuffer = createBuffer(this.device, indices, GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST);
    return {
      vertexBuffer,
      indexBuffer,
      indexCount: mesh.indices.length,
      indexFormat: mesh.indexFormat,
      dispose: () => { vertexBuffer.destroy(); indexBuffer.destroy(); },
    };
  }

  createSceneObject(mesh: RenderEnginGpuMesh, modelMatrix: Mat4 = mat4Identity(), material: RenderGpuMaterial = { albedo: [0.58, 0.72, 0.95, 1], orm: [1, 0.55, 0, 0], emissive: [0, 0, 0, 0] }, albedoTexture: RenderEnginGpuTexture = this.defaultAlbedoTexture): RenderEnginSceneObject {
    const uniformBuffer = this.device.createBuffer({
      size: 16 * 3 * 4 + 4 * 5 * 4,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });
    return {
      mesh,
      modelMatrix,
      material,
      albedoTexture,
      uniformBuffer,
      bindGroup: this.device.createBindGroup({
        layout: this.bindGroupLayout,
        entries: [
          { binding: 0, resource: { buffer: uniformBuffer } },
          { binding: 1, resource: albedoTexture.view },
          { binding: 2, resource: albedoTexture.sampler },
        ],
      }),
    };
  }

  setScene(scene: RenderEnginScene): void {
    this.scene = scene;
  }


  private renderShadowPass(encoder: GPUCommandEncoder): void {
    const pass = encoder.beginRenderPass({
      colorAttachments: [],
      depthStencilAttachment: {
        view: this.shadowDepthTexture.createView(),
        depthClearValue: 1,
        depthLoadOp: 'clear',
        depthStoreOp: 'store',
      },
    });
    pass.setPipeline(this.shadowPipeline);
    for (const object of this.scene.objects) {
      pass.setBindGroup(0, object.bindGroup);
      pass.setVertexBuffer(0, object.mesh.vertexBuffer);
      pass.setIndexBuffer(object.mesh.indexBuffer, object.mesh.indexFormat);
      pass.drawIndexed(object.mesh.indexCount);
    }
    pass.end();
  }

  renderFrame(): RenderEnginFrameStats {
    const started = performance.now();
    const encoder = this.device.createCommandEncoder();
    this.renderShadowPass(encoder);
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: this.context.getCurrentTexture().createView(),
        clearValue: { r: 0.94, g: 0.98, b: 1, a: 1 },
        loadOp: 'clear',
        storeOp: 'store',
      }],
      depthStencilAttachment: {
        view: this.depthTexture.createView(),
        depthClearValue: 1,
        depthLoadOp: 'clear',
        depthStoreOp: 'store',
      },
    });
    pass.setPipeline(this.pipeline);

    let indexCount = 0;
    let drawCalls = 0;
    for (const object of this.scene.objects) {
      const uniforms = new Float32Array(68);
      writeMat4(uniforms, 0, toGpuMat4(object.modelMatrix ?? mat4Identity()));
      writeMat4(uniforms, 16, toGpuMat4(this.scene.viewMatrix));
      writeMat4(uniforms, 32, toGpuMat4(this.scene.projectionMatrix));
      uniforms.set([...this.scene.cameraPosition, 1], 48);
      uniforms.set([...this.scene.lightDirection, 0], 52);
      uniforms.set(object.material?.albedo ?? [0.58, 0.72, 0.95, 1], 56);
      uniforms.set(object.material?.orm ?? [1, 0.55, 0, 0], 60);
      uniforms.set(object.material?.emissive ?? [0, 0, 0, 0], 64);
      this.device.queue.writeBuffer(object.uniformBuffer, 0, uniforms);
      pass.setBindGroup(0, object.bindGroup);
      pass.setVertexBuffer(0, object.mesh.vertexBuffer);
      pass.setIndexBuffer(object.mesh.indexBuffer, object.mesh.indexFormat);
      pass.drawIndexed(object.mesh.indexCount);
      indexCount += object.mesh.indexCount;
      drawCalls += 1;
    }

    pass.end();
    this.device.queue.submit([encoder.finish()]);
    this.frameIndex += 1;
    return {
      frameIndex: this.frameIndex,
      cpuFrameMs: performance.now() - started,
      indexCount,
      drawCalls,
      estimatedFps: performance.now() > started ? 1000 / Math.max(0.001, performance.now() - started) : 0,
      droppedFrame: performance.now() - started > 16.7,
      measuredAt: new Date().toISOString(),
    };
  }

  start(hooks: RenderEnginLifecycleHooks = {}): void {
    this.stopped = false;
    hooks.onReady?.(this);
    const tick = () => {
      if (this.stopped) return;
      try {
        hooks.onFrame?.(this.renderFrame());
        this.animationFrame = requestAnimationFrame(tick);
      } catch (error) {
        this.stop();
        hooks.onError?.(error instanceof Error ? error : new Error(String(error)));
      }
    };
    this.animationFrame = requestAnimationFrame(tick);
  }

  stop(hooks: RenderEnginLifecycleHooks = {}): void {
    this.stopped = true;
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    hooks.onStop?.();
  }

  dispose(): void {
    this.stop();
    for (const object of this.scene.objects) {
      object.uniformBuffer.destroy();
      object.mesh.dispose();
      if (object.albedoTexture !== this.defaultAlbedoTexture) object.albedoTexture.dispose();
    }
    this.scene = { ...this.scene, objects: [] };
    this.depthTexture.destroy();
    this.shadowDepthTexture.destroy();
    this.defaultAlbedoTexture.dispose();
  }
}
