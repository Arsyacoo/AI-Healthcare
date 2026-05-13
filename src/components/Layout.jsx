import { useMemo, useState } from 'react';
import { AlertTriangle, BookOpen, HelpCircle, Search, UserCircle, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { navItems } from '../data/navigation.js';
import LanguageToggle from './LanguageToggle.jsx';
import Sidebar from './Sidebar.jsx';
import MobileNav from './MobileNav.jsx';

const searchItems = [
  { id: 'home', titleKey: 'nav.home', descriptionKey: 'search.home', keywordsKey: 'searchKeywords.home' },
  { id: 'symptoms', titleKey: 'nav.symptoms', descriptionKey: 'search.symptoms', keywordsKey: 'searchKeywords.symptoms' },
  { id: 'chat', titleKey: 'nav.chat', descriptionKey: 'search.chat', keywordsKey: 'searchKeywords.chat' },
  { id: 'medication', titleKey: 'nav.medication', descriptionKey: 'search.medication', keywordsKey: 'searchKeywords.medication' },
  { id: 'library', titleKey: 'nav.library', descriptionKey: 'search.library', keywordsKey: 'searchKeywords.library' },
  { id: 'prevention', titleKey: 'nav.prevention', descriptionKey: 'search.prevention', keywordsKey: 'searchKeywords.prevention' },
  { id: 'disclaimer', titleKey: 'nav.disclaimer', descriptionKey: 'search.disclaimer', keywordsKey: 'searchKeywords.disclaimer' },
];

export default function Layout({ activePage, onNavigate, children }) {
  const { t } = useLanguage();
  const [searchOpen, setSearchOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [query, setQuery] = useState('');
  const currentPage = navItems.find((item) => item.id === activePage);

  const searchResults = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) return searchItems;

    return searchItems.filter((item) => {
      const haystack = `${t(item.titleKey)} ${t(item.descriptionKey)} ${t(item.keywordsKey)}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query, t]);

  function navigateAndClose(pageId) {
    onNavigate(pageId);
    setSearchOpen(false);
    setHelpOpen(false);
    setQuery('');
  }

  return (
    <div className="min-h-screen bg-surface text-text">
      <Sidebar activePage={activePage} onNavigate={onNavigate} />

      <header className="fixed left-0 right-0 top-0 z-30 border-b border-surface-border/70 bg-surface/95 backdrop-blur md:left-72">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <button
            type="button"
            className="font-headline text-xl font-extrabold text-primary md:hidden"
            onClick={() => onNavigate('home')}
          >
            AI-Healthcare
          </button>

          <div className="hidden md:block">
            <p className="text-xs font-bold uppercase tracking-wide text-secondary">{t('common.appName')}</p>
            <p className="font-headline text-xl font-bold text-text">{currentPage ? t(currentPage.labelKey) : t('nav.home')}</p>
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <button className="icon-button" type="button" aria-label={t('common.search')} onClick={() => setSearchOpen(true)}>
              <Search size={20} />
            </button>
            <button className="icon-button" type="button" aria-label={t('common.help')} onClick={() => setHelpOpen(true)}>
              <HelpCircle size={20} />
            </button>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary">
              <UserCircle size={24} />
            </div>
          </div>
        </div>
      </header>

      <main className="min-h-screen px-4 pb-28 pt-24 sm:px-6 md:ml-72 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>

      <footer className="border-t border-surface-border/70 bg-surface-card px-4 py-8 text-center text-sm text-muted md:ml-72 md:px-10 md:pb-8">
        <p className="font-headline text-lg font-bold text-primary">AI-Healthcare</p>
        <p className="mx-auto mt-2 max-w-3xl">
          {t('common.disclaimer')}
        </p>
      </footer>

      <MobileNav activePage={activePage} onNavigate={onNavigate} />

      {searchOpen && (
        <div className="fixed inset-0 z-[80] bg-text/30 px-4 py-20 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/10 bg-white p-4 shadow-2xl sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-secondary">{t('layout.searchEyebrow')}</p>
                <h2 className="font-headline text-2xl font-bold text-text">{t('layout.searchTitle')}</h2>
              </div>
              <button className="icon-button" type="button" aria-label={t('common.close')} onClick={() => setSearchOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="relative mt-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={19} />
              <input
                autoFocus
                className="input pl-12"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t('layout.searchPlaceholder')}
              />
            </div>

            <div className="mt-4 max-h-[55vh] space-y-2 overflow-y-auto pr-1">
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigateAndClose(item.id)}
                    className="w-full rounded-xl border border-surface-border/70 bg-surface-low p-4 text-left transition hover:border-primary/30 hover:bg-primary-soft/40"
                  >
                    <p className="font-headline text-lg font-bold text-text">{t(item.titleKey)}</p>
                    <p className="mt-1 text-sm text-muted">{t(item.descriptionKey)}</p>
                  </button>
                ))
              ) : (
                <div className="rounded-xl bg-warning-soft/50 p-4 text-sm text-muted">
                  {t('layout.searchEmpty')}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {helpOpen && (
        <div className="fixed inset-0 z-[80] bg-text/30 px-4 py-20 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/10 bg-white p-5 shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-secondary">{t('common.help')}</p>
                <h2 className="font-headline text-2xl font-bold text-text">{t('layout.helpTitle')}</h2>
              </div>
              <button className="icon-button" type="button" aria-label={t('common.close')} onClick={() => setHelpOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button className="rounded-xl border border-primary/10 bg-primary-soft/35 p-4 text-left" type="button" onClick={() => navigateAndClose('symptoms')}>
                <p className="font-bold text-primary">{t('nav.symptoms')}</p>
                <p className="mt-1 text-sm text-muted">{t('layout.helpSymptoms')}</p>
              </button>
              <button className="rounded-xl border border-secondary/20 bg-secondary-soft/25 p-4 text-left" type="button" onClick={() => navigateAndClose('chat')}>
                <p className="font-bold text-secondary">{t('nav.chat')}</p>
                <p className="mt-1 text-sm text-muted">{t('layout.helpChat')}</p>
              </button>
              <button className="rounded-xl border border-warning/20 bg-warning-soft/35 p-4 text-left" type="button" onClick={() => navigateAndClose('medication')}>
                <p className="font-bold text-warning">{t('nav.medication')}</p>
                <p className="mt-1 text-sm text-muted">{t('layout.helpMedication')}</p>
              </button>
              <button className="rounded-xl border border-primary/10 bg-primary-soft/30 p-4 text-left" type="button" onClick={() => navigateAndClose('library')}>
                <div className="flex items-center gap-2 font-bold text-primary">
                  <BookOpen size={18} />
                  <span>{t('nav.library')}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{t('layout.helpLibrary')}</p>
              </button>
              <button className="rounded-xl border border-primary/10 bg-surface-low p-4 text-left" type="button" onClick={() => navigateAndClose('prevention')}>
                <p className="font-bold text-primary">{t('nav.prevention')}</p>
                <p className="mt-1 text-sm text-muted">{t('layout.helpPrevention')}</p>
              </button>
            </div>

            <div className="mt-5 rounded-xl border border-danger/20 bg-danger-soft/60 p-4">
              <div className="flex gap-3 text-danger">
                <AlertTriangle className="mt-1 shrink-0" size={22} />
                <div>
                  <p className="font-bold">{t('layout.emergencyTitle')}</p>
                  <p className="mt-1 text-sm text-muted">{t('layout.emergencyBody')}</p>
                </div>
              </div>
            </div>

            <button className="btn-secondary mt-5 w-full" type="button" onClick={() => navigateAndClose('disclaimer')}>
              {t('layout.disclaimerButton')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


