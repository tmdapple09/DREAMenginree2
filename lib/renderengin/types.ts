import type {
  DomainObject,
  JsonObject,
} from "@/lib/engin-runtime/EnginBaseState";

export type RenderEnginBackend = "canvas2d" | "webgpu" | "babylon" | "dom";
export type RenderEnginLayer = "root" | "daydream" | "engin" | "overlay";

export type RenderEnginManifest = DomainObject<
  "renderengin.manifest",
  {
    schemaVersion: "1.0.0";
    supportedBackends: readonly RenderEnginBackend[];
    requiredHooks: readonly [
      "mount",
      "resize",
      "render",
      "snapshot",
      "dispose",
    ];
    compatibility: {
      minDevicePixelRatio: number;
      maxDevicePixelRatio: number;
      reducedMotion: "honor-system";
    };
  } & JsonObject
>;

export type RenderEnginSurfaceSnapshot = DomainObject<
  "renderengin.surface",
  {
    surfaceId: string;
    label: string;
    layer: RenderEnginLayer;
    accentColor: string;
    backend: RenderEnginBackend;
    mounted: boolean;
    frame: number;
    width: number;
    height: number;
  } & JsonObject
>;

export type RenderEnginRegistration = {
  surfaceId: string;
  label: string;
  layer: RenderEnginLayer;
  accentColor: string;
  preferredBackend?: RenderEnginBackend;
};

export type RenderEnginRuntimeHooks = {
  mount(surface: RenderEnginRegistration): void;
  resize(surfaceId: string, width: number, height: number): void;
  render(surfaceId: string): void;
  snapshot(surfaceId: string): RenderEnginSurfaceSnapshot | null;
  dispose(surfaceId: string): void;
};
