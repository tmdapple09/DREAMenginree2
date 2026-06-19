import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const source = readFileSync('engins/renderengin/RenderEnginViewport.tsx', 'utf8');

describe('RenderEnginViewport lifecycle source guards', () => {
  it('does not boot WebGPU from camera or selection dependencies', () => {
    expect(source).not.toContain('}, [cameraEye, runtime, selectedObjectId]);');
    expect(source).toContain('const cameraEyeRef = useRef<Vec3>');
    expect(source).toContain('useEffect(() => {\n    cameraEyeRef.current = orbitEye');
    expect(source).toContain('}, [applyCurrentScene]);');
  });

  it('rebuilds GPU mesh intentionally on OBJ import instead of relying on reboot', () => {
    expect(source).toContain('renderer.disposeScene();');
    expect(source).toContain('const gpuMesh = renderer.uploadMesh(parsed.mesh);');
    expect(source).toContain('sceneObjectRef.current = renderer.createSceneObject(gpuMesh');
    expect(source).toContain('applyCurrentScene();');
  });

  it('throttles frame telemetry instead of dispatching every rendered frame', () => {
    expect(source).toContain('lastFrameTelemetryAtRef');
    expect(source).toContain('now - lastFrameTelemetryAtRef.current >= 1000');
    expect(source).toContain("telemetry: 'throttled'");
  });
});
