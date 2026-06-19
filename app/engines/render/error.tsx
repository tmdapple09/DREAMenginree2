'use client';

export default function RenderEnginError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 p-6 text-sky-950">
      <div className="mx-auto max-w-4xl rounded-3xl border border-red-200 bg-white/90 p-8 shadow-sm">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-red-600">RenderEngin error boundary</p>
        <h1 className="mt-3 text-3xl font-black">RenderEngin could not start safely.</h1>
        <p className="mt-3 text-sm font-semibold text-slate-600">{error.message}</p>
        <button type="button" onClick={reset} className="mt-5 rounded-full bg-sky-500 px-5 py-3 text-sm font-black text-white shadow-sm">Try again</button>
      </div>
    </main>
  );
}
