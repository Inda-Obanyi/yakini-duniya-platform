import { researchItems } from '@/lib/data';

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Research</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Innovation and technical insight</h1>
      </div>

      <div className="space-y-6">
        {researchItems.map((item) => (
          <article key={item.title} className="rounded-3xl border border-slate-700 bg-slate-900/60 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.category}</p>
                <h2 className="mt-2 text-2xl font-bold text-white">{item.title}</h2>
              </div>
              <div className="text-sm text-brand-200">{item.date}</div>
            </div>
            <p className="mt-4 max-w-3xl text-slate-300">{item.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
