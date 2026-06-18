'use client';
import type { ContentAsset } from '@/engins/contentengin/assetTypes';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    const mesh = child as THREE.Mesh;
    mesh.geometry?.dispose();
    const material = mesh.material;
    if (Array.isArray(material)) material.forEach((item) => item.dispose());
    else material?.dispose?.();
  });
}

export default function AssetPreview3D({ asset, modelUrl }: { asset: ContentAsset | null; modelUrl?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current || !modelUrl) return;
    const mount = mountRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111827);
    const camera = new THREE.PerspectiveCamera(45, Math.max(1, mount.clientWidth) / 260, 0.01, 100);
    camera.position.set(2.8, -4, 2.2);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(Math.max(1, mount.clientWidth), 260);
    mount.replaceChildren(renderer.domElement);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x333333, 2));
    const key = new THREE.DirectionalLight(0xffffff, 2); key.position.set(3, -4, 5); scene.add(key);
    let model: THREE.Object3D | null = null;
    let disposed = false;
    let visible = true;
    const resizeObserver = new ResizeObserver(([entry]) => {
      const width = Math.max(1, Math.floor(entry.contentRect.width));
      camera.aspect = width / 260;
      camera.updateProjectionMatrix();
      renderer.setSize(width, 260, false);
    });
    resizeObserver.observe(mount);
    const intersectionObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.05 });
    intersectionObserver.observe(mount);
    new GLTFLoader().load(modelUrl, (gltf) => {
      if (disposed) return;
      model = gltf.scene;
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3()).length() || 1;
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center);
      model.scale.multiplyScalar(2.2 / size);
      scene.add(model);
    });
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      if (!visible) return;
      if (model && !reducedMotion) model.rotation.z += 0.006;
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (model) disposeObject(model);
      renderer.dispose();
      mount.replaceChildren();
    };
  }, [modelUrl]);
  return <section className="ce-card ce-preview"><h2>Real GLB Preview</h2><div ref={mountRef} className="ce-stage">{!modelUrl && <p>Build an asset to load the exported GLB mesh here.</p>}</div><p>{asset ? `${asset.id} · ${asset.validation.metrics.vertices} vertices · ${asset.validation.metrics.triangles} triangles · ${asset.validation.metrics.drawCalls} draw calls` : 'No asset built yet.'}</p></section>;
}
