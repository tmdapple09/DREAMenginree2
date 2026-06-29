'use client'; import type { ContentAsset } from '@/engins/contentengin/assetTypes';
export default function AnimationPanel({asset}:{asset:ContentAsset|null}){return <section className="ce-card"><h2>Animation Clips</h2><ul>{asset?.animations.map(a=><li key={a.name}>{a.name} · {a.fps}fps</li>)??<li>No clips yet.</li>}</ul></section>}
