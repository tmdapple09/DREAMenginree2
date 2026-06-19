export default function RenderEnginLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 p-6 text-sky-950">
      <div className="mx-auto max-w-4xl rounded-3xl border border-sky-200 bg-white/90 p-8 shadow-sm">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-600">RenderEngin</p>
        <h1 className="mt-3 text-3xl font-black">Preparing WebGPU compatibility checks…</h1>
        <p className="mt-3 text-sm font-semibold text-slate-600">The scene runtime is loading behind the authenticated Engines shell.</p>
      </div>
    </main>
  );
}
