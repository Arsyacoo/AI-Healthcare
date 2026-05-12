import { navItems, safetyBadges } from '../data/navigation.js';

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-72 flex-col border-r border-surface-border/70 bg-surface-card px-5 py-8 md:flex">
      <button className="mb-10 text-left font-headline text-2xl font-extrabold text-primary" onClick={() => onNavigate('home')} type="button">
        AI-Healthcare
      </button>

      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activePage === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`sidebar-link ${active ? 'sidebar-link-active' : ''}`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="rounded-xl border border-primary/10 bg-primary-soft/45 p-4">
        <p className="font-headline text-base font-bold text-primary">Utamakan keselamatan</p>
        <div className="mt-3 space-y-2">
          {safetyBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div className="flex items-center gap-2 text-sm text-muted" key={badge.label}>
                <Icon size={16} className="text-secondary" />
                {badge.label}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

