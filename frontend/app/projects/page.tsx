import Link from 'next/link';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Systems</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Our technology portfolio</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="rounded-3xl border border-slate-700 bg-slate-900/60 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-brand-500/40 bg-brand-500/10 px-2.5 py-1 text-xs text-brand-200">
                {project.category}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{project.status}</span>
            </div>
            <h2 className="text-3xl font-bold text-white">{project.name}</h2>
            <p className="mt-4 text-slate-300">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-600 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/projects" className="mt-6 inline-flex text-sm font-semibold text-brand-200 hover:text-brand-100">
              View system details →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
