import { useLanguage } from '../contexts/LanguageContext.jsx';

const modes = [
  { id: 'simple', key: 'simple' },
  { id: 'detailed', key: 'detailed' },
  { id: 'parents', key: 'parents' },
  { id: 'elderly', key: 'elderly' },
];

export default function HealthLiteracySelector({ value, onChange }) {
  const { t } = useLanguage();

  return (
    <div className="rounded-xl border border-primary/10 bg-surface-card p-4">
      <p className="mb-3 text-sm font-bold text-muted">{t('literacy.label')}</p>
      <div className="flex flex-wrap gap-2">
        {modes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            onClick={() => onChange(mode.id)}
            className={`rounded-full border px-3 py-2 text-sm font-bold transition ${value === mode.id ? 'border-primary bg-primary text-white' : 'border-surface-border bg-white text-muted hover:border-primary/40'}`}
          >
            {t(`literacy.${mode.key}`)}
          </button>
        ))}
      </div>
    </div>
  );
}
