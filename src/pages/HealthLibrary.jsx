import { useMemo, useState } from 'react';
import { Bot, BookOpen, Search, X } from 'lucide-react';
import FeedbackButtons from '../components/FeedbackButtons.jsx';
import HealthLiteracySelector from '../components/HealthLiteracySelector.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PromptTransparencyPanel from '../components/PromptTransparencyPanel.jsx';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { healthLibraryData } from '../data/healthLibraryData.js';
import { askGemini, buildHealthLibraryPrompt, geminiReady, getGeminiErrorMessage } from '../services/gemini.js';

function pick(value, language) {
  return value?.[language] || value?.id || value;
}

function adaptText(text, mode, language) {
  if (mode === 'simple') return text;
  if (language === 'en') {
    if (mode === 'parents') return `${text} Watch for changes in behavior, appetite, activity, and warning signs in children.`;
    if (mode === 'elderly') return `${text} In older adults, symptoms can appear more subtle, so sudden changes need closer attention.`;
    return `${text} Note duration, triggers, worsening factors, and existing health conditions to support discussion with a medical professional.`;
  }
  if (mode === 'parents') return `${text} Perhatikan perubahan perilaku, nafsu makan, aktivitas, dan tanda bahaya pada anak.`;
  if (mode === 'elderly') return `${text} Pada lansia, gejala bisa tampak lebih samar sehingga perubahan mendadak perlu lebih diperhatikan.`;
  return `${text} Catat durasi, pemicu, faktor yang memperberat, dan kondisi kesehatan yang sudah ada untuk membantu diskusi dengan tenaga medis.`;
}

function parseAiArticle(text) {
  const normalized = String(text || '')
    .replace(/\r\n/g, '\n')
    .replace(/\*\*/g, '')
    .replace(/^\s*[-*]?\s*Berikut adalah informasi edukasi umum.*$/gim, '')
    .replace(/^\s*[-*]?\s*Here is general educational information.*$/gim, '')
    .trim();
  const headingPattern = /^\*?\s*(Ringkasan|Summary|Poin penting|Key points)\s*:?\s*\*?$/i;
  const sections = [];
  let current = null;

  normalized.split('\n').forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) return;

    if (headingPattern.test(line)) {
      current = { title: line.replace(/:$/, ''), items: [] };
      sections.push(current);
      return;
    }

    if (!current) {
      current = { title: '', items: [] };
      sections.push(current);
    }

    if (!line.startsWith('-') && !line.startsWith('*')) return;
    current.items.push(line.replace(/^[-*]\s*/, '').trim());
  });

  return sections.filter((section) => section.items.length > 0);
}

export default function HealthLibrary() {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [activeId, setActiveId] = useState(healthLibraryData[0].id);
  const [literacyMode, setLiteracyMode] = useState('simple');
  const [aiArticle, setAiArticle] = useState('');
  const [aiTopic, setAiTopic] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const showAiPanel = isAiLoading || aiArticle || aiError;
  const aiSections = useMemo(() => parseAiArticle(aiArticle), [aiArticle]);
  const categories = [
    { id: 'all', label: t('library.allCategories') },
    ...Array.from(
      new Map(
        healthLibraryData.map((item) => [item.category.id, { id: item.category.id, label: pick(item.category, language) }]),
      ).values(),
    ),
  ];
  const activeArticle = healthLibraryData.find((item) => item.id === activeId) || healthLibraryData[0];

  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return healthLibraryData.filter((item) => {
      const title = pick(item.title, language);
      const summary = pick(item.summary, language);
      const itemCategory = pick(item.category, language);
      const matchesCategory = category === 'all' || item.category.id === category;
      const matchesQuery = !normalized || `${title} ${summary} ${itemCategory}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, language, query]);

  async function handleAiSearch(event) {
    event.preventDefault();
    const topic = query.trim();
    if (!topic || isAiLoading) return;

    setAiArticle('');
    setAiError('');
    setAiTopic(topic);

    if (!geminiReady) {
      setAiError(t('library.aiMissing'));
      return;
    }

    setIsAiLoading(true);
    try {
      const response = await askGemini(buildHealthLibraryPrompt(topic, literacyMode, language));
      setAiArticle(response);
    } catch (error) {
      setAiError(getGeminiErrorMessage(error, t));
      console.error(error);
    } finally {
      setIsAiLoading(false);
    }
  }

  function clearAiArticle() {
    setAiArticle('');
    setAiError('');
    setAiTopic('');
  }

  return (
    <div>
      <PageHeader eyebrow="Health Library" title={t('library.title')}>
        {t('library.subtitle')}
      </PageHeader>

      <div className="mb-6 grid gap-4 lg:grid-cols-[1fr_360px]">
        <form className="card" onSubmit={handleAiSearch}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
            <input className="input pl-12" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('library.searchPlaceholder')} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button key={item.id} type="button" onClick={() => setCategory(item.id)} className={`chip ${category === item.id ? 'bg-primary text-white' : ''}`}>
                {item.label}
              </button>
            ))}
            <button className="chip border-primary/25 bg-primary-soft/55 text-primary disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isAiLoading || !query.trim()}>
              <Bot size={15} />
              {isAiLoading ? t('library.searchingAi') : t('library.searchAi')}
            </button>
            {showAiPanel && (
              <button className="chip border-surface-border bg-white text-muted hover:border-primary/30 hover:text-primary" type="button" onClick={clearAiArticle}>
                <X size={15} />
                {t('library.backToLocal')}
              </button>
            )}
          </div>
          {filteredArticles.length === 0 && query.trim() && !aiArticle && !aiError && (
            <p className="mt-4 rounded-lg bg-warning-soft/45 p-3 text-sm text-muted">{t('library.aiEmpty')}</p>
          )}
        </form>
        <HealthLiteracySelector value={literacyMode} onChange={setLiteracyMode} />
      </div>

      {(isAiLoading || aiArticle || aiError) && (
        <section className="card mb-6 max-w-3xl border-surface-border/70 shadow-card">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-secondary">{t('library.aiTitle')}</p>
              {aiTopic && <h2 className="mt-2 font-headline text-3xl font-bold text-primary">{aiTopic}</h2>}
            </div>
            <button className="icon-button shrink-0" type="button" onClick={clearAiArticle} aria-label={t('library.backToLocal')}>
              <X size={18} />
            </button>
          </div>
          {isAiLoading && <p className="text-muted">{t('library.searchingAi')}</p>}
          {aiSections.length > 0 && (
            <div className="mt-5 space-y-5">
              {aiSections.map((section, sectionIndex) => {
                const isSummary = /^(Ringkasan|Summary)$/i.test(section.title);
                return (
                  <div key={`${section.title}-${sectionIndex}`}>
                    {section.title && <p className="mb-3 font-bold text-text">{section.title}</p>}
                    {isSummary ? (
                      <p className="text-muted">{section.items.join(' ')}</p>
                    ) : (
                      <ul className="space-y-2 text-muted">
                        {section.items.map((item) => (
                          <li key={item} className="leading-7">- {item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          {aiError && <p className="text-warning">{aiError}</p>}
          {aiArticle && (
            <div className="mt-5 rounded-xl border border-danger/20 bg-danger-soft/50 p-4 text-sm text-muted">
              {t('common.disclaimer')}
            </div>
          )}
          {aiArticle && (
            <>
              <PromptTransparencyPanel source="Gemini health library topic request + selected literacy mode + medical safety rules" />
              <FeedbackButtons context={`health-library-ai:${aiTopic}:${literacyMode}`} />
            </>
          )}
        </section>
      )}

      <section className={`grid gap-6 ${showAiPanel ? '' : 'xl:grid-cols-[1fr_430px]'}`}>
        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${showAiPanel ? 'xl:grid-cols-4' : ''}`}>
          {filteredArticles.map((article) => (
            <button key={article.id} type="button" onClick={() => setActiveId(article.id)} className={`rounded-xl border bg-surface-card p-5 text-left shadow-card transition hover:-translate-y-1 ${activeId === article.id ? 'border-primary/40 ring-4 ring-primary/10' : 'border-primary/10'}`}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary-soft text-primary">
                <BookOpen size={22} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wide text-secondary">{pick(article.category, language)}</p>
              <h3 className="mt-2 font-headline text-xl font-bold">{pick(article.title, language)}</h3>
              <p className="mt-2 text-sm text-muted">{pick(article.summary, language)}</p>
            </button>
          ))}
        </div>

        {!showAiPanel && (
          <article className="card sticky top-24 self-start">
            <p className="text-xs font-bold uppercase tracking-wide text-secondary">{pick(activeArticle.category, language)}</p>
            <h2 className="mt-2 font-headline text-3xl font-bold text-primary">{pick(activeArticle.title, language)}</h2>
            <p className="mt-3 text-muted">{adaptText(pick(activeArticle.summary, language), literacyMode, language)}</p>
            <div className="mt-5">
              <p className="mb-3 font-bold text-text">{t('library.keyPoints')}</p>
              <ul className="space-y-3 text-muted">
                {pick(activeArticle.keyPoints, language).map((point) => (
                  <li key={point} className="rounded-lg bg-surface-low p-3">{adaptText(point, literacyMode, language)}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5 rounded-xl border border-danger/20 bg-danger-soft/50 p-4 text-sm text-muted">
              {t('common.disclaimer')}
            </div>
            <PromptTransparencyPanel source="local health library article + selected literacy mode" />
            <FeedbackButtons context={`health-library:${activeArticle.id}:${literacyMode}`} />
          </article>
        )}
      </section>
    </div>
  );
}
