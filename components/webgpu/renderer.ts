import { requestWebGpuDevice } from '@/engins/renderengin/webgpu';
import {
    BLUR_FRAG_WGSL,
    BRIGHT_FRAG_WGSL,
    COMPOSITE_FRAG_WGSL,
    COMPUTE_WGSL,
    FS_VERT_WGSL,
    LEMN_FRAG_WGSL,
    LEMN_VERT_WGSL,
    N_LEMN_VERTS,
    N_PARTICLE_VERTS,
    N_PARTICLES,
    PARTICLE_FRAG_WGSL,
    PARTICLE_VERT_WGSL,
} from './shaders';



const HDR_FMT: GPUTextureFormat = 'rgba16float';
const PARTICLE_STRIDE = 32; 

type NavWithGPU = Navigator & { readonly gpu: GPU };

export class WebGPURenderer {
  
  private dev!: GPUDevice;
  private ctx!: GPUCanvasContext;
  private fmt!: GPUTextureFormat;

  
  private uBuf!: GPUBuffer;       
  private pBuf!: GPUBuffer;       
  private blurHBuf!: GPUBuffer;   
  private blurVBuf!: GPUBuffer;   

  
  private pipelineCache = new Map<string, GPUComputePipeline | GPURenderPipeline>();
  private cpPipe!: GPUComputePipeline;
  private lemnPipe!: GPURenderPipeline;
  private partPipe!: GPURenderPipeline;
  private brightPipe!: GPURenderPipeline;
  private blurPipe!: GPURenderPipeline;
  private compPipe!: GPURenderPipeline;

  
  private hdrTex!: GPUTexture;
  private bloomTex0!: GPUTexture;
  private bloomTex1!: GPUTexture;
  private sampler!: GPUSampler;

  
  private cpBG!: GPUBindGroup;
  private lemnBG!: GPUBindGroup;
  private partBG!: GPUBindGroup;
  private brightBG!: GPUBindGroup;
  private blurHBG!: GPUBindGroup;
  private blurVBG!: GPUBindGroup;
  private compBG!: GPUBindGroup;

  private w = 1;
  private h = 1;
  public time = 0;

  private constructor() {}

  static async create(canvas: HTMLCanvasElement): Promise<WebGPURenderer> {
    const r = new WebGPURenderer();
    await r._init(canvas);
    return r;
  }

  private async _init(canvas: HTMLCanvasElement) {
    const gpu = (navigator as NavWithGPU).gpu;
    const { device } = await requestWebGpuDevice();

    this.dev = device as unknown as GPUDevice;

    this.ctx = canvas.getContext('webgpu') as GPUCanvasContext;
    this.fmt = gpu.getPreferredCanvasFormat() as GPUTextureFormat;
    this.ctx.configure({ device: this.dev, format: this.fmt, alphaMode: 'opaque' });

    this.dev.lost.then((info) => {
      console.warn('WebGPU device lost', info.reason, info.message);
    });

    this._mkBuffers();
    await this._mkPipelines();
    this._seedParticles();
  }

  private _mkBuffers() {
    const d = this.dev;

    this.uBuf = d.createBuffer({
      size: 16,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    this.pBuf = d.createBuffer({
      size: N_PARTICLES * PARTICLE_STRIDE,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });

    
    const mkDirBuf = (x: number, y: number) => {
      const buf = d.createBuffer({
        size: 16,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      });
      d.queue.writeBuffer(buf, 0, new Float32Array([x, y, 0, 0]));
      return buf;
    };
    this.blurHBuf = mkDirBuf(1, 0);
    this.blurVBuf = mkDirBuf(0, 1);

    this.sampler = d.createSampler({
      magFilter: 'linear',
      minFilter: 'linear',
      addressModeU: 'clamp-to-edge',
      addressModeV: 'clamp-to-edge',
    });
  }

  private async _mkPipelines() {
    const d = this.dev;

    d.pushErrorScope('validation');
    d.pushErrorScope('internal');

    const shaderModule = (label: string, code: string) => d.createShaderModule({ label, code });
    const additive: GPUBlendState = {
      color: { srcFactor: 'src-alpha', dstFactor: 'one', operation: 'add' },
      alpha: { srcFactor: 'one',       dstFactor: 'one', operation: 'add' },
    };
    const additiveOpaque: GPUBlendState = {
      color: { srcFactor: 'one',       dstFactor: 'one', operation: 'add' },
      alpha: { srcFactor: 'one',       dstFactor: 'one', operation: 'add' },
    };

    const fsVert = shaderModule('dreamengin.fs.vert', FS_VERT_WGSL);
    const render = async (key: string, descriptor: GPURenderPipelineDescriptor) => {
      const cached = this.pipelineCache.get(key) as GPURenderPipeline | undefined;
      if (cached) return cached;
      const pipeline = await d.createRenderPipelineAsync({ label: key, ...descriptor });
      this.pipelineCache.set(key, pipeline);
      return pipeline;
    };
    const compute = async (key: string, descriptor: GPUComputePipelineDescriptor) => {
      const cached = this.pipelineCache.get(key) as GPUComputePipeline | undefined;
      if (cached) return cached;
      const pipeline = await d.createComputePipelineAsync({ label: key, ...descriptor });
      this.pipelineCache.set(key, pipeline);
      return pipeline;
    };

    [
      this.cpPipe,
      this.lemnPipe,
      this.partPipe,
      this.brightPipe,
      this.blurPipe,
      this.compPipe,
    ] = await Promise.all([
      compute('dreamengin.compute.particles', {
        layout: 'auto',
        compute: { module: shaderModule('dreamengin.compute.particles.wgsl', COMPUTE_WGSL), entryPoint: 'main' },
      }),
      render('dreamengin.render.lemniscate', {
        layout: 'auto',
        vertex:   { module: shaderModule('dreamengin.lemn.vert.wgsl', LEMN_VERT_WGSL), entryPoint: 'vs_main' },
        fragment: { module: shaderModule('dreamengin.lemn.frag.wgsl', LEMN_FRAG_WGSL), entryPoint: 'fs_main', targets: [{ format: HDR_FMT, blend: additiveOpaque }] },
        primitive: { topology: 'triangle-strip' },
      }),
      render('dreamengin.render.particles', {
        layout: 'auto',
        vertex:   { module: shaderModule('dreamengin.particle.vert.wgsl', PARTICLE_VERT_WGSL), entryPoint: 'vs_main' },
        fragment: { module: shaderModule('dreamengin.particle.frag.wgsl', PARTICLE_FRAG_WGSL), entryPoint: 'fs_main', targets: [{ format: HDR_FMT, blend: additive }] },
        primitive: { topology: 'triangle-list' },
      }),
      render('dreamengin.render.bright', {
        layout: 'auto',
        vertex:   { module: fsVert, entryPoint: 'vs_main' },
        fragment: { module: shaderModule('dreamengin.bright.frag.wgsl', BRIGHT_FRAG_WGSL), entryPoint: 'fs_main', targets: [{ format: HDR_FMT }] },
        primitive: { topology: 'triangle-list' },
      }),
      render('dreamengin.render.blur', {
        layout: 'auto',
        vertex:   { module: fsVert, entryPoint: 'vs_main' },
        fragment: { module: shaderModule('dreamengin.blur.frag.wgsl', BLUR_FRAG_WGSL), entryPoint: 'fs_main', targets: [{ format: HDR_FMT }] },
        primitive: { topology: 'triangle-list' },
      }),
      render('dreamengin.render.composite', {
        layout: 'auto',
        vertex:   { module: fsVert, entryPoint: 'vs_main' },
        fragment: { module: shaderModule('dreamengin.composite.frag.wgsl', COMPOSITE_FRAG_WGSL), entryPoint: 'fs_main', targets: [{ format: this.fmt }] },
        primitive: { topology: 'triangle-list' },
      }),
    ]);

    const internal = await d.popErrorScope();
    const validation = await d.popErrorScope();
    if (internal || validation) {
      throw new Error(`WebGPU pipeline warmup failed: ${(internal ?? validation)?.message ?? 'unknown pipeline error'}`);
    }
  }

  private _seedParticles() {
    const data = new Float32Array(N_PARTICLES * 8);
    for (let i = 0; i < N_PARTICLES; i++) {
      const b = i * 8;
      const t = (i / N_PARTICLES) * Math.PI * 2;
      const d = 1 + Math.sin(t) ** 2;
      data[b]     = 0.65 * Math.cos(t) / d;
      data[b + 1] = 0.65 * Math.sin(t) * Math.cos(t) / d;
      data[b + 2] = 0;
      data[b + 3] = 0;
      const seed = ((i * 1664525 + 1013904223) >>> 0) / 0xffffffff;
      const seed2 = (((i + 17) * 22695477 + 1) >>> 0) / 0xffffffff;
      data[b + 4] = seed * 2.0;
      data[b + 5] = data[b + 4];
      data[b + 6] = seed2;
      data[b + 7] = 0;
    }
    this.dev.queue.writeBuffer(this.pBuf, 0, data);
  }

  resize(w: number, h: number) {
    if (w === this.w && h === this.h) return;
    this.w = w;
    this.h = h;

    this.hdrTex?.destroy();
    this.bloomTex0?.destroy();
    this.bloomTex1?.destroy();

    const mkTex = (label: string) => this.dev.createTexture({
      label,
      size: [w, h],
      format: HDR_FMT,
      usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
    });

    this.hdrTex    = mkTex('hdr');
    this.bloomTex0 = mkTex('bloom0');
    this.bloomTex1 = mkTex('bloom1');

    this._rebuildBGs();
  }

  private _rebuildBGs() {
    const d = this.dev;
    const bg = (pipe: GPUComputePipeline | GPURenderPipeline, entries: GPUBindGroupEntry[]) =>
      d.createBindGroup({ layout: (pipe as GPURenderPipeline).getBindGroupLayout(0) as unknown as GPUBindGroupLayout, entries });

    this.cpBG = bg(this.cpPipe, [
      { binding: 0, resource: { buffer: this.pBuf } },
      { binding: 1, resource: { buffer: this.uBuf } },
    ]);

    this.lemnBG = bg(this.lemnPipe, [
      { binding: 0, resource: { buffer: this.uBuf } },
    ]);

    this.partBG = bg(this.partPipe, [
      { binding: 0, resource: { buffer: this.pBuf } },
      { binding: 1, resource: { buffer: this.uBuf } },
    ]);

    this.brightBG = bg(this.brightPipe, [
      { binding: 0, resource: this.hdrTex.createView() },
      { binding: 1, resource: this.sampler },
    ]);

    
    this.blurHBG = bg(this.blurPipe, [
      { binding: 0, resource: this.bloomTex0.createView() },
      { binding: 1, resource: this.sampler },
      { binding: 2, resource: { buffer: this.blurHBuf } },
    ]);

    
    this.blurVBG = bg(this.blurPipe, [
      { binding: 0, resource: this.bloomTex1.createView() },
      { binding: 1, resource: this.sampler },
      { binding: 2, resource: { buffer: this.blurVBuf } },
    ]);

    
    this.compBG = bg(this.compPipe, [
      { binding: 0, resource: this.hdrTex.createView() },
      { binding: 1, resource: this.bloomTex0.createView() },
      { binding: 2, resource: this.sampler },
    ]);
  }

  frame(dt: number) {
    this.time += dt;
    const d = this.dev;

    
    d.queue.writeBuffer(this.uBuf, 0, new Float32Array([this.time, dt, this.w, this.h]));

    const enc = d.createCommandEncoder({ label: 'frame' });

    {
      const cp = enc.beginComputePass();
      cp.setPipeline(this.cpPipe);
      cp.setBindGroup(0, this.cpBG);
      cp.dispatchWorkgroups(Math.ceil(N_PARTICLES / 64));
      cp.end();
    }

    {
      const rp = enc.beginRenderPass({
        colorAttachments: [{
          view:       this.hdrTex.createView(),
          clearValue: { r: 0.014, g: 0.028, b: 0.055, a: 1.0 },
          loadOp:  'clear',
          storeOp: 'store',
        }],
      });
      rp.setPipeline(this.lemnPipe);
      rp.setBindGroup(0, this.lemnBG);
      rp.draw(N_LEMN_VERTS);

      rp.setPipeline(this.partPipe);
      rp.setBindGroup(0, this.partBG);
      rp.draw(N_PARTICLE_VERTS);
      rp.end();
    }

    {
      const rp = enc.beginRenderPass({
        colorAttachments: [{
          view: this.bloomTex0.createView(), loadOp: 'clear',
          clearValue: { r: 0, g: 0, b: 0, a: 1 }, storeOp: 'store',
        }],
      });
      rp.setPipeline(this.brightPipe);
      rp.setBindGroup(0, this.brightBG);
      rp.draw(3);
      rp.end();
    }

    {
      const rp = enc.beginRenderPass({
        colorAttachments: [{
          view: this.bloomTex1.createView(), loadOp: 'clear',
          clearValue: { r: 0, g: 0, b: 0, a: 1 }, storeOp: 'store',
        }],
      });
      rp.setPipeline(this.blurPipe);
      rp.setBindGroup(0, this.blurHBG);
      rp.draw(3);
      rp.end();
    }

    {
      const rp = enc.beginRenderPass({
        colorAttachments: [{
          view: this.bloomTex0.createView(), loadOp: 'clear',
          clearValue: { r: 0, g: 0, b: 0, a: 1 }, storeOp: 'store',
        }],
      });
      rp.setPipeline(this.blurPipe);
      rp.setBindGroup(0, this.blurVBG);
      rp.draw(3);
      rp.end();
    }

    {
      const rp = enc.beginRenderPass({
        colorAttachments: [{
          view: this.ctx.getCurrentTexture().createView(),
          loadOp: 'clear', clearValue: { r: 0, g: 0, b: 0, a: 1 }, storeOp: 'store',
        }],
      });
      rp.setPipeline(this.compPipe);
      rp.setBindGroup(0, this.compBG);
      rp.draw(3);
      rp.end();
    }

    d.queue.submit([enc.finish()]);
  }

  destroy() {
    this.hdrTex?.destroy();
    this.bloomTex0?.destroy();
    this.bloomTex1?.destroy();
    this.uBuf?.destroy();
    this.pBuf?.destroy();
    this.blurHBuf?.destroy();
    this.blurVBuf?.destroy();
    this.dev?.destroy();
  }
}
