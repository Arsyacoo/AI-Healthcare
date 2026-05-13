import { useState } from 'react';
import { MoreHorizontal, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { navItems } from '../data/navigation.js';

const primaryMobileIds = ['home', 'symptoms', 'chat', 'medication', 'prevention'];
const moreMobileIds = ['library', 'disclaimer'];

export default function MobileNav({ activePage, onNavigate }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const { t } = useLanguage();
  const primaryItems = navItems.filter((item) => primaryMobileIds.includes(item.id));
  const moreItems = navItems.filter((item) => moreMobileIds.includes(item.id));

  function navigate(pageId) {
    onNavigate(pageId);
    setMoreOpen(false);
  }

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-surface-border/70 bg-surface-card px-2 py-2 shadow-card md:hidden">
        <div className="grid grid-cols-6 gap-1">
          {primaryItems.map((item) => {
            const Icon = item.icon;
            const active = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
                className={`mobile-link ${active ? 'mobile-link-active' : ''}`}
                aria-label={t(item.labelKey)}
              >
                <Icon size={19} />
                <span>{t(item.shortLabelKey)}</span>
              </button>
            );
          })}
          <button type="button" className="mobile-link" onClick={() => setMoreOpen(true)} aria-label={t('nav.more')}>
            <MoreHorizontal size={19} />
            <span>{t('nav.more')}</span>
          </button>
        </div>
      </nav>

      {moreOpen && (
        <div className="fixed inset-0 z-[70] bg-text/30 px-4 py-20 backdrop-blur-sm md:hidden">
          <div className="mx-auto max-w-sm rounded-2xl bg-white p-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="font-headline text-xl font-bold">{t('nav.more')}</p>
              <button className="icon-button" type="button" onClick={() => setMoreOpen(false)} aria-label={t('common.close')}>
                <X size={18} />
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {moreItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button key={item.id} type="button" className="sidebar-link w-full" onClick={() => navigate(item.id)}>
                    <Icon size={19} />
                    <span>{t(item.labelKey)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
