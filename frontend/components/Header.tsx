import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'People', href: '/people' },
  { label: 'Research', href: '/research' },
  { label: 'Careers', href: '/careers' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-sky-400 font-black text-white">
            YD
          </div>
          <div>
            <div className="text-sm font-black uppercase tracking-[0.16em] text-white">Yakini & Duniya</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Technologies</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-100">
          Contact us
        </button>
      </div>
    </header>
  );
}
