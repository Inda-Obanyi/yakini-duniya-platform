export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-200">About</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">We build intelligence for the real world</h1>
      </div>

      <div className="space-y-8 rounded-3xl border border-slate-700 bg-slate-900/60 p-8 text-slate-300">
        <p>
          YAKINI & DUNIYA TECHNOLOGIES is a technology company focused on applied intelligence for meaningful societal and operational challenges.
        </p>
        <p>
          Our work spans agriculture, financial security, disaster intelligence, and autonomous systems. We combine machine learning, software engineering, and product design to create tools that support better decisions and stronger systems.
        </p>
        <p>
          The mission is simple: build technology that is practical, insightful, and genuinely useful to the people and institutions it touches.
        </p>
      </div>
    </div>
  );
}
