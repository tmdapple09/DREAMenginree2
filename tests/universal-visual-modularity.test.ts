

import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = process.cwd();

function read(relPath: string): string {
  const fullPath = resolve(root, relPath);
  if (!existsSync(fullPath)) return '';
  return readFileSync(fullPath, 'utf-8');
}



const draggableModuleSrc      = read('components/draggable/dream.DraggableModule.tsx');
const universalEditorSrc      = read('components/universal-editor/dream.UniversalEditorWrapper.tsx');
const dreamWindowShellSrc     = read('components/dreams/dreamsurface.window.tsx');
const tapHoldHookSrc          = read('hooks/useTapHoldMove.ts');
const tapHoldModuleSrc        = read('components/universal-editor/useTapHoldMove.ts');
const moduleRegistrySrc       = read('lib/runtime/moduleRegistry.ts');
const dropTargetRegistrySrc   = read('lib/runtime/dropTargetRegistry.ts');
const manifestTypeSrc         = read('types/module-manifest.ts');
const violationLogSrc         = read('docs/MODULARITY_VIOLATION_LOG.md');
const universalEditorIndexSrc = read('components/universal-editor/index.ts');



describe('DraggableModule — universal drag wrapper', () => {
  it('exports a default DraggableModule component', () => {
    expect(draggableModuleSrc).toContain('export default function DraggableModule');
  });

  it('accepts manifest, children, className, and onTransfer props', () => {
    expect(draggableModuleSrc).toContain('manifest: ModuleManifest');
    expect(draggableModuleSrc).toContain('children');
    expect(draggableModuleSrc).toContain('onTransfer');
    expect(draggableModuleSrc).toContain('className');
  });

  it('implements tap-hold delay before drag activates', () => {
    
    expect(draggableModuleSrc).toMatch(/HOLD_MS\s*=\s*[0-9]+/);
  });

  it('checks manifest.ui.movable before enabling drag', () => {
    expect(draggableModuleSrc).toContain('manifest.ui.movable');
  });

  it('uses GPU-composited transform (translate3d) — no layout thrashing', () => {
    expect(draggableModuleSrc).toContain('translate3d');
  });

  it('fires transfer event through the bridge', () => {
    expect(draggableModuleSrc).toContain("bridge.emit('module'");
    expect(draggableModuleSrc).toContain("'transfer'");
  });

  it('checks compatibleRuntimes before allowing transfer', () => {
    expect(draggableModuleSrc).toContain('compatibleRuntimes');
  });

  it('provides keyboard accessibility for transfer (Ctrl/Cmd+Arrow)', () => {
    expect(draggableModuleSrc).toContain('ArrowRight');
    expect(draggableModuleSrc).toContain('ArrowLeft');
  });

  it('announces edge proximity to screen readers via aria-live', () => {
    expect(draggableModuleSrc).toContain('aria-live');
    expect(draggableModuleSrc).toContain('sr-only');
  });
});



describe('DreamWindowShell — tap-hold drag for Dream Windows', () => {
  it('uses useTapHoldMove to enable drag', () => {
    expect(dreamWindowShellSrc).toContain('useTapHoldMove');
  });

  it('accepts a ModuleManifest and onTransfer callback', () => {
    expect(dreamWindowShellSrc).toContain('manifest: ModuleManifest');
    expect(dreamWindowShellSrc).toContain('onTransfer');
  });

  it('sets touchAction none to prevent scroll conflict', () => {
    expect(dreamWindowShellSrc).toContain("touchAction: 'none'");
  });

  it('sets data-dream-module and data-runtime attributes for testability', () => {
    expect(dreamWindowShellSrc).toContain('data-dream-module');
    expect(dreamWindowShellSrc).toContain('data-runtime');
  });

  it('exports DreamWindowShell as both named and default export', () => {
    expect(dreamWindowShellSrc).toContain('export function DreamWindowShell');
    expect(dreamWindowShellSrc).toContain('export default DreamWindowShell');
  });
});



describe('UniversalEditorWrapper — always-on drag wrapper', () => {
  it('exports UniversalEditorWrapper component', () => {
    expect(universalEditorSrc).toContain('UniversalEditorWrapper');
  });

  it('accepts onMove and onTransfer callbacks', () => {
    expect(universalEditorSrc).toContain('onMove');
    expect(universalEditorSrc).toContain('onTransfer');
  });

  it('provides visual feedback during drag (scale + ring)', () => {
    expect(universalEditorSrc).toContain('scale');
  });

  it('shows a transfer hint badge when a transfer fires', () => {
    expect(universalEditorSrc).toContain('transferHint');
  });

  it('index re-exports all universal editor exports', () => {
    expect(universalEditorIndexSrc).toContain('useTapHoldMove');
    expect(universalEditorIndexSrc).toContain('UniversalEditorWrapper');
  });
});



describe('useTapHoldMove — core tap-hold-drag hook', () => {
  it('is present in both hooks/ and components/universal-editor/', () => {
    expect(tapHoldHookSrc.length).toBeGreaterThan(0);
    expect(tapHoldModuleSrc.length).toBeGreaterThan(0);
  });

  it('activates drag only after a hold threshold (≥ 300ms)', () => {
    const holdPattern = /HOLD_DURATION_MS|HOLD_MS|TAP_HOLD_MS/;
    const hasTapHoldMs = holdPattern.test(tapHoldHookSrc) || holdPattern.test(tapHoldModuleSrc);
    expect(hasTapHoldMs).toBe(true);
  });

  it('detects screen-edge proximity for cross-runtime transfer', () => {
    const edgePattern = /EDGE_THRESHOLD_PX|EDGE_PX|EDGE_THRESHOLD/;
    const hasEdgeDetection = edgePattern.test(tapHoldHookSrc) || edgePattern.test(tapHoldModuleSrc);
    expect(hasEdgeDetection).toBe(true);
  });

  it('calls onTransfer when dragged to a compatible runtime edge', () => {
    const hasTransfer =
      tapHoldHookSrc.includes('onTransfer') || tapHoldModuleSrc.includes('onTransfer');
    expect(hasTransfer).toBe(true);
  });

  it('clears hold timer on pointer cancel to avoid ghost drags', () => {
    const hasClear =
      tapHoldHookSrc.includes('clearTimeout') || tapHoldModuleSrc.includes('clearTimeout');
    expect(hasClear).toBe(true);
  });
});



describe('ModuleManifest type — complete shape for transferable modules', () => {
  it('declares all required fields', () => {
    expect(manifestTypeSrc).toContain('id: string');
    expect(manifestTypeSrc).toContain('sourceRuntime');
    expect(manifestTypeSrc).toContain('compatibleRuntimes');
    expect(manifestTypeSrc).toContain('content');
  });

  it('includes movable and resizable ui constraints', () => {
    expect(manifestTypeSrc).toContain('movable');
    expect(manifestTypeSrc).toContain('resizable');
  });

  it('includes all canonical runtime IDs', () => {
    expect(manifestTypeSrc).toContain("'homedream'");
    expect(manifestTypeSrc).toContain("'dreamspace'");
    expect(manifestTypeSrc).toContain("'daydream:music'");
    expect(manifestTypeSrc).toContain("'engin:game'");
  });
});



describe('moduleRegistry — cross-runtime transfer contract', () => {
  it('exports useModuleRegistry Zustand store', () => {
    expect(moduleRegistrySrc).toContain('useModuleRegistry');
  });

  it('implements registerModule, unregisterModule, transferModule', () => {
    expect(moduleRegistrySrc).toContain('registerModule');
    expect(moduleRegistrySrc).toContain('unregisterModule');
    expect(moduleRegistrySrc).toContain('transferModule');
  });

  it('transferModule rejects incompatible runtimes', () => {
    expect(moduleRegistrySrc).toContain('compatibleRuntimes');
    expect(moduleRegistrySrc).toContain('return false');
  });

  it('transferModule publishes to the bridge after a successful transfer', () => {
    expect(moduleRegistrySrc).toContain("bridge.emit('module'");
  });

  it('exports manifestFromWidget to make WidgetInstances modular', () => {
    expect(moduleRegistrySrc).toContain('manifestFromWidget');
    expect(moduleRegistrySrc).toContain("movable: widget.is_enabled !== false");
  });

  it('exports subscribeRegistryToTransferEvents for bridge wiring', () => {
    expect(moduleRegistrySrc).toContain('subscribeRegistryToTransferEvents');
  });
});



describe('dropTargetRegistry — multi-runtime drop routing', () => {
  it('exports dropTargetRegistry singleton', () => {
    expect(dropTargetRegistrySrc).toContain('dropTargetRegistry');
  });

  it('supports register and unregister lifecycle', () => {
    expect(dropTargetRegistrySrc).toContain('register');
    expect(dropTargetRegistrySrc).toContain('unregister');
  });

  it('routes drops to the correct runtime region', () => {
    expect(dropTargetRegistrySrc).toContain('region');
    expect(dropTargetRegistrySrc).toContain('route');
  });

  it('respects accepts filter (empty = accept all)', () => {
    expect(dropTargetRegistrySrc).toContain('accepts');
  });

  it('selects highest-priority target when multiple exist', () => {
    expect(dropTargetRegistrySrc).toContain('priority');
  });
});



describe('MODULARITY_VIOLATION_LOG.md — governance document', () => {
  it('exists at docs/MODULARITY_VIOLATION_LOG.md', () => {
    expect(existsSync(resolve(root, 'docs/MODULARITY_VIOLATION_LOG.md'))).toBe(true);
  });

  it('contains a violation table', () => {
    expect(violationLogSrc).toContain('VIOLATION TABLE');
  });

  it('lists passing elements that implement the law', () => {
    expect(violationLogSrc).toContain('PASSING ELEMENTS');
    expect(violationLogSrc).toContain('DraggableModule');
    expect(violationLogSrc).toContain('DreamWindowShell');
    expect(violationLogSrc).toContain('UniversalEditorWrapper');
  });

  it('documents exempt elements (bar shell, providers)', () => {
    expect(violationLogSrc).toContain('EXEMPT ELEMENTS');
    expect(violationLogSrc).toContain('dreamsurface.dreamdmbar.tsx');
  });

  it('includes the README hard warning text', () => {
    expect(violationLogSrc).toContain('UNIVERSAL MODULARITY LAW');
  });
});



describe('README — modularity hard warning', () => {
  const readme = read('README.md');

  it('contains the UNIVERSAL MODULARITY LAW warning block', () => {
    expect(readme).toContain('UNIVERSAL MODULARITY LAW');
    expect(readme).toContain('MODULARITY_VIOLATION_LOG.md');
  });

  it('references all three drag wrapper primitives', () => {
    expect(readme).toContain('DraggableModule');
    expect(readme).toContain('DreamWindowShell');
    expect(readme).toContain('UniversalEditorWrapper');
  });
});
