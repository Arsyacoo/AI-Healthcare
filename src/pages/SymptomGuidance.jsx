import { useMemo, useState } from 'react';
import { Bot, CheckCircle2, ClipboardList, HeartPulse } from 'lucide-react';
import EmergencyAlert from '../components/EmergencyAlert.jsx';
import FeedbackButtons from '../components/FeedbackButtons.jsx';
import FormattedText from '../components/FormattedText.jsx';
import HealthLiteracySelector from '../components/HealthLiteracySelector.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PromptTransparencyPanel from '../components/PromptTransparencyPanel.jsx';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { askGemini, buildSymptomPrompt, geminiReady, getGeminiErrorMessage } from '../services/gemini.js';
import { detectRedFlags } from '../utils/redFlags.js';

const initialForm = {
  age: '',
  gender: '',
  symptom: '',
  duration: '',
  severity: 'mild',
  additional: '',
  condition: '',
};

function cleanOptionalValue(value) {
  const normalized = String(value || '').trim();
  const emptyMarkers = ['-', 'n/a', 'na', 'tidak ada', 'tidak', 'none', 'kosong'];

  return emptyMarkers.includes(normalized.toLowerCase()) ? '' : normalized;
}

function buildGuidance(form, t) {
  const symptom = form.symptom || t('symptoms.defaultSymptom');
  const additional = cleanOptionalValue(form.additional);
  const condition = cleanOptionalValue(form.condition);
  const text = `${form.symptom} ${additional}`;
  const redFlagMatches = detectRedFlags(text);
  const hasRedFlag = redFlagMatches.length > 0;

  return {
    hasRedFlag,
    redFlagMatches,
    summary: t('symptoms.summary', {
      age: form.age ? t('symptoms.agePart', { age: form.age }) : '',
      gender: form.gender ? `${form.gender}, ` : '',
      symptom,
      duration: form.duration || t('symptoms.durationMissing'),
      severity: t(`symptoms.${form.severity}`).toLowerCase(),
    }),
    causes: t('symptoms.localCauses'),
    selfCare: t('symptoms.localSelfCare'),
    doctor: t('symptoms.localDoctor'),
    emergency: t('symptoms.localEmergency'),
    cleanedForm: {
      ...form,
      additional,
      condition,
    },
  };
}

export default function SymptomGuidance() {
  const { language, t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);
  const [aiInsight, setAiInsight] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const [literacyMode, setLiteracyMode] = useState('simple');
  const canSubmit = useMemo(() => form.age && form.symptom && form.duration, [form]);

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const guidance = buildGuidance(form, t);
    setResult(guidance);
    setAiInsight('');
    setAiError('');

    if (!geminiReady) {
      setAiError(t('symptoms.apiMissing'));
      return;
    }

    setIsAiLoading(true);
    try {
      const insight = await askGemini(buildSymptomPrompt(guidance.cleanedForm, guidance.summary, guidance.hasRedFlag, literacyMode, language));
      setAiInsight(insight);
    } catch (error) {
      setAiError(getGeminiErrorMessage(error, t));
      console.error(error);
    } finally {
      setIsAiLoading(false);
    }
  }

  return (
    <div>
      <PageHeader eyebrow={t('symptoms.eyebrow')} title={t('symptoms.title')}>
        {t('symptoms.subtitle')}
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <form className="card space-y-4" onSubmit={handleSubmit}>
          <HealthLiteracySelector value={literacyMode} onChange={setLiteracyMode} />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              {t('symptoms.age')}
              <input className="input" min="0" name="age" onChange={updateField} placeholder={t('symptoms.agePlaceholder')} type="number" value={form.age} />
            </label>
            <label className="field-label">
              {t('symptoms.gender')}
              <select className="input" name="gender" onChange={updateField} value={form.gender}>
                <option value="">{t('symptoms.preferNot')}</option>
                <option>{t('symptoms.female')}</option>
                <option>{t('symptoms.male')}</option>
                <option>{t('symptoms.other')}</option>
              </select>
            </label>
          </div>
          <label className="field-label">
            {t('symptoms.symptom')}
            <input className="input" name="symptom" onChange={updateField} placeholder={t('symptoms.symptomPlaceholder')} value={form.symptom} />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              {t('symptoms.duration')}
              <input className="input" name="duration" onChange={updateField} placeholder={t('symptoms.durationPlaceholder')} value={form.duration} />
            </label>
            <label className="field-label">
              {t('symptoms.severity')}
              <select className="input" name="severity" onChange={updateField} value={form.severity}>
                <option value="mild">{t('symptoms.mild')}</option>
                <option value="moderate">{t('symptoms.moderate')}</option>
                <option value="severe">{t('symptoms.severe')}</option>
              </select>
            </label>
          </div>
          <label className="field-label">
            {t('symptoms.additional')}
            <textarea className="input min-h-28" name="additional" onChange={updateField} placeholder={t('symptoms.additionalPlaceholder')} value={form.additional} />
          </label>
          <label className="field-label">
            {t('symptoms.condition')}
            <input className="input" name="condition" onChange={updateField} placeholder={t('symptoms.conditionPlaceholder')} value={form.condition} />
          </label>
          <button className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50" disabled={!canSubmit} type="submit">
            {t('symptoms.submit')}
          </button>
        </form>

        <section className="space-y-4">
          {result?.hasRedFlag && <EmergencyAlert matches={result.redFlagMatches} />}

          <div className="card min-h-[500px]">
            {!result ? (
              <div className="grid h-full place-items-center text-center">
                <div>
                  <ClipboardList className="mx-auto text-primary" size={48} />
                  <h2 className="mt-4 font-headline text-2xl font-bold">{t('symptoms.emptyTitle')}</h2>
                  <p className="mt-2 max-w-md text-muted">{t('symptoms.emptyText')}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="rounded-xl bg-primary-soft/60 p-4">
                  <div className="flex items-center gap-2 font-bold text-primary">
                    <HeartPulse size={20} />
                    {t('symptoms.summaryTitle')}
                  </div>
                  <p className="mt-2 text-muted">{result.summary}</p>
                  {result.cleanedForm.condition && <p className="mt-1 text-sm text-muted">{t('symptoms.conditionRecorded', { condition: result.cleanedForm.condition })}</p>}
                </div>
                <ResultList title={t('symptoms.causesTitle')} items={result.causes} />
                <ResultList title={t('symptoms.selfCareTitle')} items={result.selfCare} />
                <ResultList title={t('symptoms.doctorTitle')} items={result.doctor} />
                <ResultList title={t('symptoms.emergencyTitle')} items={result.emergency} danger />
                <PromptTransparencyPanel source="local symptom rules + red flag keyword checker" />
                <FeedbackButtons context="symptom-guidance-local" />
                {(isAiLoading || aiInsight || aiError) && (
                  <div className="rounded-xl border border-primary/15 bg-primary-soft/35 p-4">
                    <div className="mb-2 flex items-center gap-2 font-bold text-primary">
                      <Bot size={20} />
                      {t('symptoms.aiTitle')}
                    </div>
                    {isAiLoading && <p className="text-muted">{t('symptoms.aiLoading')}</p>}
                    {aiInsight && <FormattedText text={aiInsight} />}
                    {aiInsight && <PromptTransparencyPanel source="symptom form + red flag checker + selected literacy mode + Gemini" />}
                    {aiInsight && <FeedbackButtons context={`symptom-guidance:${literacyMode}`} />}
                    {aiError && <p className="text-sm text-warning">{aiError}</p>}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

function ResultList({ title, items, danger = false }) {
  return (
    <div>
      <h3 className={`font-headline text-lg font-bold ${danger ? 'text-danger' : 'text-text'}`}>{title}</h3>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li className="flex gap-2 text-muted" key={item}>
            <CheckCircle2 className={danger ? 'text-danger' : 'text-secondary'} size={18} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

