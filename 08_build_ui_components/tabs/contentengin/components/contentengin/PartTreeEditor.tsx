'use client'; import type { PartNode } from '@/engins/contentengin/assetTypes';
function Node({p}:{p:PartNode}){return <li><strong>{p.label}</strong> <span>{p.primitive.kind}</span><ul>{p.children.map(c=><Node key={c.id} p={c}/>)}</ul></li>}
export default function PartTreeEditor({parts}:{parts:PartNode[]}){return <section className="ce-card"><h2>Editable Part Tree</h2><ul className="ce-tree">{parts.map(p=><Node key={p.id} p={p}/>)}</ul></section>}
