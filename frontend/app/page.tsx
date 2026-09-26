import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects, metrics, capabilities } from '@/lib/data';

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-400/40 bg-brand-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand-200">
              Intelligence engineered for the real world
            </div>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
              YAKINI & DUNIYA TECHNOLOGIES
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              We build adaptive AI systems, autonomous tools, and intelligent infrastructure for agriculture,
              financial security, disaster resilience, and human-centered innovation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
              >
                Explore systems
              </Link>
              <Link
                href="/people"
                className="rounded-full border border-slate-600 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400"
              >
                Meet the team
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6 shadow-glow"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.2em] text-slate-400">Platform</span>
              <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
                Active
              </span>
            </div>
            <div className="space-y-4">
              {capabilities.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span className="text-sm text-brand-200">{item.tag}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 text-center">
              <div className="text-3xl font-black text-white">{metric.value}</div>
              <div className="mt-2 text-sm text-slate-300">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Our systems</p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Built for real-world impact</h2>
          </div>
          <Link href="/projects" className="text-sm font-medium text-brand-200 hover:text-brand-100">
            View all projects →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {projects.slice(0, 4).map((project) => (
            <div key={project.slug} className="rounded-3xl border border-slate-700 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-brand-400/60">
              <div className="mb-4 inline-flex rounded-full border border-brand-500/50 bg-brand-500/10 px-2.5 py-1 text-xs text-brand-200">
                {project.category}
              </div>
              <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-600 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
