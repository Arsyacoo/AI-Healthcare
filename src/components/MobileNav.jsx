import { navItems } from '../data/navigation.js';

export default function MobileNav({ activePage, onNavigate }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-surface-border/70 bg-surface-card px-2 py-2 shadow-card md:hidden">
      <div className="grid grid-cols-6 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activePage === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`mobile-link ${active ? 'mobile-link-active' : ''}`}
              aria-label={item.label}
            >
              <Icon size={19} />
              <span>{item.shortLabel}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
