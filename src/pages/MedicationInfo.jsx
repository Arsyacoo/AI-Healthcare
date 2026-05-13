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
  const { t } = useLanguage();
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
      setAiError('API key Gemini belum tersedia. Isi .env.local untuk mengaktifkan pencarian AI.');
      return;
    }

    setIsAiLoading(true);
    try {
      const response = await askGemini(buildMedicationPrompt(trimmed));
      setAiInfo(response);
    } catch (error) {
      setAiError(getGeminiErrorMessage(error));
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

      <form className="mb-6" onSubmit={handleAiSearch}>
        <div className="relative max-w-3xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
          <input className="input pl-12" onChange={(event) => setQuery(event.target.value)} placeholder="Cari Paracetamol, Ibuprofen, Cetirizine, Amoxicillin, Omeprazole" value={query} />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {Object.values(medicationData).map((item) => (
            <button className="chip" key={item.name} onClick={() => setQuery(item.name)} type="button">
              {item.name}
            </button>
          ))}
          <button className="chip border-primary/20 bg-primary-soft/40 text-primary" type="submit" disabled={isAiLoading}>
            {isAiLoading ? 'Mencari dengan AI...' : 'Cari dengan Gemini'}
          </button>
        </div>
      </form>

      {(asksDose || aiInfo || aiError) && (
        <section className={`card mb-6 ${asksDose ? 'border-danger/25 bg-danger-soft/40' : 'border-primary/15 bg-primary-soft/30'}`}>
          <div className="mb-3 flex items-center gap-2 font-bold text-primary">
            <Pill size={20} />
            Hasil keamanan obat
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
          <h2 className="font-headline text-2xl font-bold text-warning">Obat tidak ditemukan</h2>
          <p className="mt-3 text-muted">
            Data lokal mencakup Paracetamol, Ibuprofen, Cetirizine, Amoxicillin, dan Omeprazole. Untuk detail obat lain, konsultasikan kepada dokter atau apoteker.
          </p>
        </div>
      ) : (
        <section className="grid gap-5 lg:grid-cols-12">
          <article className="card lg:col-span-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold uppercase text-primary">General use</span>
                <h2 className="mt-3 font-headline text-3xl font-bold">{medicine.name}</h2>
              </div>
              <Pill className="text-primary" size={38} />
            </div>
            <p className="mt-5 text-lg text-muted">{medicine.generalUse}</p>
            <div className="mt-5 rounded-xl border-l-4 border-primary bg-surface-low p-4 text-sm text-muted">
              {t('medication.doseRefusal')}
            </div>
          </article>

          <article className="card border-danger/15 bg-danger-soft/35 lg:col-span-5">
            <div className="flex items-center gap-2 text-danger">
              <AlertTriangle size={22} />
              <h3 className="font-headline text-xl font-bold">Safety warnings</h3>
            </div>
            <ul className="mt-4 space-y-3 text-muted">
              {medicine.safetyWarnings.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <article className="card lg:col-span-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-secondary" size={22} />
              <h3 className="font-headline text-xl font-bold">Common side effects</h3>
            </div>
            <div className="mt-4 grid gap-3">
              {medicine.commonSideEffects.map((effect) => <div className="rounded-xl bg-surface-low p-3 font-bold text-muted" key={effect}>{effect}</div>)}
            </div>
          </article>

          <article className="card lg:col-span-4">
            <div className="flex items-center gap-2">
              <Users className="text-warning" size={22} />
              <h3 className="font-headline text-xl font-bold">Who should be careful</h3>
            </div>
            <ul className="mt-4 space-y-2 text-muted">
              {medicine.carefulGroups.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <article className="card bg-primary text-white lg:col-span-4">
            <div className="flex items-center gap-2">
              <Stethoscope size={24} />
              <h3 className="font-headline text-xl font-bold">Ask a professional</h3>
            </div>
            <p className="mt-4 text-white/90">{t('medication.askReminder')}</p>
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
