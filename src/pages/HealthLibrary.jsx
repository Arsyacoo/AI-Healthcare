import { useMemo, useState } from 'react';
import { BookOpen, Search } from 'lucide-react';
import FeedbackButtons from '../components/FeedbackButtons.jsx';
import HealthLiteracySelector from '../components/HealthLiteracySelector.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PromptTransparencyPanel from '../components/PromptTransparencyPanel.jsx';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { healthLibraryData } from '../data/healthLibraryData.js';

function adaptText(text, mode) {
  if (mode === 'simple') return text;
  if (mode === 'parents') return `${text} Perhatikan perubahan perilaku, nafsu makan, aktivitas, dan tanda bahaya pada anak.`;
  if (mode === 'elderly') return `${text} Pada lansia, gejala bisa tampak lebih samar sehingga perubahan mendadak perlu lebih diperhatikan.`;
  return `${text} Catat durasi, pemicu, faktor yang memperberat, dan kondisi kesehatan yang sudah ada untuk membantu diskusi dengan tenaga medis.`;
}

export default function HealthLibrary() {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [activeId, setActiveId] = useState(healthLibraryData[0].id);
  const [literacyMode, setLiteracyMode] = useState('simple');
  const categories = ['all', ...new Set(healthLibraryData.map((item) => item.category))];
  const activeArticle = healthLibraryData.find((item) => item.id === activeId) || healthLibraryData[0];

  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return healthLibraryData.filter((item) => {
      const matchesCategory = category === 'all' || item.category === category;
      const matchesQuery = !normalized || `${item.title} ${item.summary} ${item.category}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <PageHeader eyebrow="Health Library" title={t('library.title')}>
        {t('library.subtitle')}
      </PageHeader>

      <div className="mb-6 grid gap-4 lg:grid-cols-[1fr_360px]">
        <div className="card">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
            <input className="input pl-12" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('library.searchPlaceholder')} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button key={item} type="button" onClick={() => setCategory(item)} className={`chip ${category === item ? 'bg-primary text-white' : ''}`}>
                {item === 'all' ? t('library.allCategories') : item}
              </button>
            ))}
          </div>
        </div>
        <HealthLiteracySelector value={literacyMode} onChange={setLiteracyMode} />
      </div>

      <section className="grid gap-6 xl:grid-cols-[1fr_430px]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <button key={article.id} type="button" onClick={() => setActiveId(article.id)} className={`rounded-xl border bg-surface-card p-5 text-left shadow-card transition hover:-translate-y-1 ${activeId === article.id ? 'border-primary/40 ring-4 ring-primary/10' : 'border-primary/10'}`}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary-soft text-primary">
                <BookOpen size={22} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wide text-secondary">{article.category}</p>
              <h3 className="mt-2 font-headline text-xl font-bold">{article.title}</h3>
              <p className="mt-2 text-sm text-muted">{article.summary}</p>
            </button>
          ))}
        </div>

        <article className="card sticky top-24 self-start">
          <p className="text-xs font-bold uppercase tracking-wide text-secondary">{activeArticle.category}</p>
          <h2 className="mt-2 font-headline text-3xl font-bold text-primary">{activeArticle.title}</h2>
          <p className="mt-3 text-muted">{adaptText(activeArticle.summary, literacyMode)}</p>
          <div className="mt-5">
            <p className="mb-3 font-bold text-text">Poin penting</p>
            <ul className="space-y-3 text-muted">
              {activeArticle.keyPoints.map((point) => (
                <li key={point} className="rounded-lg bg-surface-low p-3">{adaptText(point, literacyMode)}</li>
              ))}
            </ul>
          </div>
          <div className="mt-5 rounded-xl border border-danger/20 bg-danger-soft/50 p-4 text-sm text-muted">
            {t('common.disclaimer')}
          </div>
          <PromptTransparencyPanel source="local health library article + selected literacy mode" />
          <FeedbackButtons context={`health-library:${activeArticle.id}:${literacyMode}`} />
        </article>
      </section>
    </div>
  );
}
