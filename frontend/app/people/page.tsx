import { teamMembers } from '@/lib/data';

export default function PeoplePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-200">People</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">The YD community</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <article key={member.name} className="rounded-3xl border border-slate-700 bg-slate-900/60 p-5">
            <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-brand-500 to-slate-500 p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-lg font-bold text-white">
                {member.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white">{member.name}</h2>
            <p className="mt-2 text-brand-200">{member.role}</p>
            <p className="mt-4 text-sm text-slate-300">{member.bio}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-600 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
