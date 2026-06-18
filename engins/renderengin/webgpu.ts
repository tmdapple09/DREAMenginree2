import {
  mat4Identity,
  type Mat4,
  type MeshBuffers,
  type Vec3,
  type Vertex,
} from './core';

export interface PackedVertexBuffer {
  readonly data: Float32Array;
  readonly strideFloats: 12;
  readonly strideBytes: 48;
  readonly vertexCount: number;
}

export interface RenderEnginGpuMesh {
  readonly vertexBuffer: GPUBuffer;
  readonly indexBuffer: GPUBuffer;
  readonly indexCount: number;
  readonly indexFormat: GPUIndexFormat;
}

export interface RenderEnginFrameStats {
  readonly frameIndex: number;
  readonly cpuFrameMs: number;
  readonly indexCount: number;
  readonly drawCalls: number;
  readonly measuredAt: string;
}

export interface RenderEnginSceneObject {
  readonly mesh: RenderEnginGpuMesh;
  readonly uniformBuffer: GPUBuffer;
  readonly bindGroup: GPUBindGroup;
  modelMatrix?: Mat4;
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

const SHADER = /* wgsl */ `
struct Uniforms {
  model : mat4x4<f32>,
  view : mat4x4<f32>,
  projection : mat4x4<f32>,
  camera : vec4<f32>,
  light : vec4<f32>,
};

@group(0) @binding(0) var<uniform> uniforms : Uniforms;

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
  let base = vec3<f32>(0.58 + input.uv.x * 0.22, 0.72, 0.95 - input.uv.y * 0.22);
  let ambient = base * 0.08;
  return vec4<f32>(ambient + base * ndl, 1.0);
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
  private readonly bindGroupLayout: GPUBindGroupLayout;
  private depthTexture: GPUTexture;
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

    this.bindGroupLayout = this.device.createBindGroupLayout({
      entries: [{ binding: 0, visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT, buffer: {} }],
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

  uploadMesh(mesh: MeshBuffers): RenderEnginGpuMesh {
    const packed = packAosVertexBuffer(mesh);
    const indices = mesh.indexFormat === 'uint16'
      ? new Uint16Array(mesh.indices)
      : new Uint32Array(mesh.indices);
    return {
      vertexBuffer: createBuffer(this.device, packed.data, GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST),
      indexBuffer: createBuffer(this.device, indices, GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST),
      indexCount: mesh.indices.length,
      indexFormat: mesh.indexFormat,
    };
  }

  createSceneObject(mesh: RenderEnginGpuMesh, modelMatrix: Mat4 = mat4Identity()): RenderEnginSceneObject {
    const uniformBuffer = this.device.createBuffer({
      size: 16 * 3 * 4 + 4 * 2 * 4,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });
    return {
      mesh,
      modelMatrix,
      uniformBuffer,
      bindGroup: this.device.createBindGroup({
        layout: this.bindGroupLayout,
        entries: [{ binding: 0, resource: { buffer: uniformBuffer } }],
      }),
    };
  }

  setScene(scene: RenderEnginScene): void {
    this.scene = scene;
  }

  renderFrame(): RenderEnginFrameStats {
    const started = performance.now();
    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: this.context.getCurrentTexture().createView(),
        clearValue: { r: 0.015, g: 0.018, b: 0.026, a: 1 },
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
      const uniforms = new Float32Array(56);
      writeMat4(uniforms, 0, toGpuMat4(object.modelMatrix ?? mat4Identity()));
      writeMat4(uniforms, 16, toGpuMat4(this.scene.viewMatrix));
      writeMat4(uniforms, 32, toGpuMat4(this.scene.projectionMatrix));
      uniforms.set([...this.scene.cameraPosition, 1], 48);
      uniforms.set([...this.scene.lightDirection, 0], 52);
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
}
