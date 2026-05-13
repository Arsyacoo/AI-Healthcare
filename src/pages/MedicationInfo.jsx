import { useMemo, useState } from 'react';
import { AlertTriangle, Pill, Search, ShieldCheck, Stethoscope, Users } from 'lucide-react';
import FeedbackButtons from '../components/FeedbackButtons.jsx';
import FormattedText from '../components/FormattedText.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PromptTransparencyPanel from '../components/PromptTransparencyPanel.jsx';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { medicationData } from '../data/medicationData.js';
import { askGemini, buildMedicationPrompt, geminiReady, getGeminiErrorMessage } from '../services/gemini.js';

const doseKeywords = ['dosis', 'dose', 'dosage', 'takaran', 'berapa mg', 'berapa tablet', 'aturan pakai', 'sehari berapa'];

export default function MedicationInfo() {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('Ibuprofen');
  const [aiInfo, setAiInfo] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const asksDose = doseKeywords.some((keyword) => normalizedQuery.includes(keyword));
  const medicine = useMemo(() => medicationData[normalizedQuery], [normalizedQuery]);

  async function handleAiSearch(event) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed || isAiLoading) return;

    setAiInfo('');
    setAiError('');

    if (doseKeywords.some((keyword) => trimmed.toLowerCase().includes(keyword))) {
      setAiError(t('medication.doseRefusal'));
      return;
    }

    if (!geminiReady) {
      setAiError(t('medication.apiMissing'));
      return;
    }

    setIsAiLoading(true);
    try {
      const response = await askGemini(buildMedicationPrompt(trimmed, language));
      setAiInfo(response);
    } catch (error) {
      setAiError(getGeminiErrorMessage(error, t));
      console.error(error);
    } finally {
      setIsAiLoading(false);
    }
  }

  return (
    <div>
      <PageHeader eyebrow="Medication Safety" title={t('medication.title')}>
        {t('medication.subtitle')}
      </PageHeader>

      <form className="mb-7 rounded-xl border border-primary/10 bg-surface-card p-4 shadow-card sm:p-5" onSubmit={handleAiSearch}>
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
          <input
            className="input h-14 rounded-lg border-surface-border/90 pl-12 shadow-sm"
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t('medication.placeholder')}
            value={query}
          />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {Object.values(medicationData).map((item) => (
            <button className="chip border-secondary/25 bg-secondary-soft/25 text-secondary hover:bg-secondary-soft/45" key={item.name} onClick={() => setQuery(item.name)} type="button">
              {item.name}
            </button>
          ))}
          <button className="chip border-primary/25 bg-primary-soft/55 text-primary disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isAiLoading}>
            {isAiLoading ? t('medication.searchingAi') : t('medication.searchAi')}
          </button>
        </div>
      </form>

      {(asksDose || aiInfo || aiError) && (
        <section className={`card mb-6 ${asksDose ? 'border-danger/25 bg-danger-soft/40' : 'border-primary/15 bg-primary-soft/30'}`}>
          <div className="mb-3 flex items-center gap-2 font-bold text-primary">
            <Pill size={20} />
            {t('medication.resultTitle')}
          </div>
          {asksDose && <p className="text-danger">{t('medication.doseRefusal')}</p>}
          {aiInfo && <FormattedText text={aiInfo} />}
          {aiError && <p className="text-warning">{aiError}</p>}
          <PromptTransparencyPanel source="Gemini medication safety request + medication safety rules" />
          <FeedbackButtons context={`medication-ai:${query}`} />
        </section>
      )}

      {!medicine ? (
        <div className="card border-warning/25 bg-warning-soft/40">
          <h2 className="font-headline text-2xl font-bold text-warning">{t('medication.notFoundTitle')}</h2>
          <p className="mt-3 text-muted">{t('medication.notFoundText')}</p>
        </div>
      ) : (
        <section className="grid gap-5 lg:grid-cols-12">
          <article className="card rounded-xl border-surface-border/70 p-5 shadow-card sm:p-6 lg:col-span-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold uppercase text-primary">{t('medication.generalUse')}</span>
                <h2 className="mt-3 font-headline text-3xl font-extrabold text-text">{medicine.name}</h2>
              </div>
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                <Pill size={28} />
              </div>
            </div>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{medicine.generalUse[language]}</p>
            <div className="mt-6 rounded-lg border-l-4 border-primary bg-surface-low px-4 py-3 text-sm leading-6 text-muted">
              {t('medication.doseRefusal')}
            </div>
          </article>

          <article className="card rounded-xl border-danger/20 bg-danger-soft/45 p-5 shadow-card sm:p-6 lg:col-span-5">
            <div className="flex items-center gap-2 text-danger">
              <AlertTriangle size={22} />
              <h3 className="font-headline text-xl font-extrabold">{t('medication.safetyWarnings')}</h3>
            </div>
            <ul className="mt-5 space-y-3 text-muted">
              {medicine.safetyWarnings[language].map((item) => (
                <li className="flex gap-3 leading-7" key={item}>
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card rounded-xl border-surface-border/70 p-5 shadow-card sm:p-6 lg:col-span-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-secondary" size={22} />
              <h3 className="font-headline text-xl font-extrabold">{t('medication.commonSideEffects')}</h3>
            </div>
            <div className="mt-4 grid gap-3">
              {medicine.commonSideEffects[language].map((effect) => (
                <div className="rounded-lg bg-surface-low px-4 py-3 font-bold text-muted" key={effect}>{effect}</div>
              ))}
            </div>
          </article>

          <article className="card rounded-xl border-surface-border/70 p-5 shadow-card sm:p-6 lg:col-span-4">
            <div className="flex items-center gap-2">
              <Users className="text-warning" size={22} />
              <h3 className="font-headline text-xl font-extrabold">{t('medication.carefulGroups')}</h3>
            </div>
            <ul className="mt-5 space-y-3 text-muted">
              {medicine.carefulGroups[language].map((item) => (
                <li className="flex gap-3 leading-6" key={item}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl bg-primary p-5 text-white shadow-card sm:p-6 lg:col-span-4">
            <div className="flex items-center gap-2">
              <Stethoscope size={24} />
              <h3 className="font-headline text-xl font-extrabold">{t('medication.askProfessional')}</h3>
            </div>
            <p className="mt-5 leading-7 text-white/90">{t('medication.askReminder')}</p>
          </article>

          <article className="lg:col-span-12">
            <PromptTransparencyPanel source="local medicationData.js + medication safety rules" />
            <FeedbackButtons context={`medication-local:${medicine.name}`} />
          </article>
        </section>
      )}
    </div>
  );
}
