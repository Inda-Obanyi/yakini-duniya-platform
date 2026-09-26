export default function CareersPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Careers</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Join YAKINI & DUNIYA</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {[
          'Machine Learning Engineer',
          'AI Researcher',
          'Software Engineer',
          'Product Designer',
        ].map((role) => (
          <div key={role} className="rounded-3xl border border-slate-700 bg-slate-900/60 p-6">
            <h2 className="text-2xl font-bold text-white">{role}</h2>
            <p className="mt-4 text-slate-300">
              Help build robust AI systems, real-world products, and next-generation research platforms.
            </p>
            <button className="mt-6 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-100">
              Apply now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
