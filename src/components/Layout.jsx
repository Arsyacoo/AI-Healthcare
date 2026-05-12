import { useMemo, useState } from 'react';
import { AlertTriangle, HelpCircle, Search, UserCircle, X } from 'lucide-react';
import { navItems } from '../data/navigation.js';
import Sidebar from './Sidebar.jsx';
import MobileNav from './MobileNav.jsx';

const searchItems = [
  {
    id: 'home',
    title: 'Beranda',
    description: 'Mulai dari ringkasan fitur utama AI-Healthcare.',
    keywords: 'home beranda utama mulai fitur layanan',
  },
  {
    id: 'symptoms',
    title: 'Panduan Gejala',
    description: 'Isi form untuk mendapatkan panduan gejala berbasis edukasi.',
    keywords: 'gejala sakit nyeri demam batuk pusing panduan cek kesehatan',
  },
  {
    id: 'chat',
    title: 'Chat AI',
    description: 'Tanyakan edukasi kesehatan umum secara percakapan.',
    keywords: 'chat ai tanya konsultasi edukasi kesehatan gemini',
  },
  {
    id: 'medication',
    title: 'Info Obat',
    description: 'Cari informasi umum obat tanpa dosis atau resep.',
    keywords: 'obat paracetamol ibuprofen cetirizine efek samping apoteker',
  },
  {
    id: 'prevention',
    title: 'Tips Pencegahan',
    description: 'Baca artikel pencegahan dan checklist kebiasaan harian.',
    keywords: 'tips pencegahan tidur nutrisi olahraga mental checklist harian',
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    description: 'Baca batasan aplikasi dan peringatan kondisi darurat.',
    keywords: 'disclaimer darurat diagnosis dokter resep batasan medis',
  },
];

export default function Layout({ activePage, onNavigate, children }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [query, setQuery] = useState('');
  const currentPage = navItems.find((item) => item.id === activePage);

  const searchResults = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) return searchItems;

    return searchItems.filter((item) => {
      const haystack = `${item.title} ${item.description} ${item.keywords}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query]);

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
            <p className="text-xs font-bold uppercase tracking-wide text-secondary">AI-Healthcare</p>
            <p className="font-headline text-xl font-bold text-text">{currentPage?.label || 'Beranda'}</p>
          </div>

          <div className="flex items-center gap-2">
            <button className="icon-button" type="button" aria-label="Cari" onClick={() => setSearchOpen(true)}>
              <Search size={20} />
            </button>
            <button className="icon-button" type="button" aria-label="Bantuan" onClick={() => setHelpOpen(true)}>
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
          Hanya untuk tujuan informasi. Aplikasi ini tidak memberikan nasihat medis,
          diagnosis, pengobatan, resep, atau layanan darurat.
        </p>
      </footer>

      <MobileNav activePage={activePage} onNavigate={onNavigate} />

      {searchOpen && (
        <div className="fixed inset-0 z-[80] bg-text/30 px-4 py-20 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/10 bg-white p-4 shadow-2xl sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-secondary">Pencarian cepat</p>
                <h2 className="font-headline text-2xl font-bold text-text">Cari fitur AI-Healthcare</h2>
              </div>
              <button className="icon-button" type="button" aria-label="Tutup pencarian" onClick={() => setSearchOpen(false)}>
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
                placeholder="Cari gejala, obat, chat, tips, disclaimer..."
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
                    <p className="font-headline text-lg font-bold text-text">{item.title}</p>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </button>
                ))
              ) : (
                <div className="rounded-xl bg-warning-soft/50 p-4 text-sm text-muted">
                  Tidak ada hasil. Coba kata kunci seperti gejala, obat, chat, tips, atau darurat.
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
                <p className="text-xs font-bold uppercase tracking-wide text-secondary">Bantuan</p>
                <h2 className="font-headline text-2xl font-bold text-text">Cara memakai AI-Healthcare</h2>
              </div>
              <button className="icon-button" type="button" aria-label="Tutup bantuan" onClick={() => setHelpOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button className="rounded-xl border border-primary/10 bg-primary-soft/35 p-4 text-left" type="button" onClick={() => navigateAndClose('symptoms')}>
                <p className="font-bold text-primary">Panduan Gejala</p>
                <p className="mt-1 text-sm text-muted">Gunakan form jika ingin hasil edukasi yang terstruktur dan bukan percakapan.</p>
              </button>
              <button className="rounded-xl border border-secondary/20 bg-secondary-soft/25 p-4 text-left" type="button" onClick={() => navigateAndClose('chat')}>
                <p className="font-bold text-secondary">Chat AI</p>
                <p className="mt-1 text-sm text-muted">Gunakan chat untuk tanya jawab edukasi umum secara bertahap.</p>
              </button>
              <button className="rounded-xl border border-warning/20 bg-warning-soft/35 p-4 text-left" type="button" onClick={() => navigateAndClose('medication')}>
                <p className="font-bold text-warning">Info Obat</p>
                <p className="mt-1 text-sm text-muted">Cari kegunaan umum dan peringatan obat, tanpa dosis atau resep.</p>
              </button>
              <button className="rounded-xl border border-primary/10 bg-surface-low p-4 text-left" type="button" onClick={() => navigateAndClose('prevention')}>
                <p className="font-bold text-primary">Tips Pencegahan</p>
                <p className="mt-1 text-sm text-muted">Baca artikel singkat dan gunakan checklist kebiasaan harian.</p>
              </button>
            </div>

            <div className="mt-5 rounded-xl border border-danger/20 bg-danger-soft/60 p-4">
              <div className="flex gap-3 text-danger">
                <AlertTriangle className="mt-1 shrink-0" size={22} />
                <div>
                  <p className="font-bold">Kondisi darurat</p>
                  <p className="mt-1 text-sm text-muted">
                    Jika ada nyeri dada, sesak napas, pingsan, perdarahan berat, kebingungan, tidak sadar, atau kondisi mengancam nyawa, segera cari bantuan medis darurat.
                  </p>
                </div>
              </div>
            </div>

            <button className="btn-secondary mt-5 w-full" type="button" onClick={() => navigateAndClose('disclaimer')}>
              Baca disclaimer medis
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

