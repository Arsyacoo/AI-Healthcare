import { useState } from 'react';
import { Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function PromptTransparencyPanel({ source = 'local content and safety rules' }) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="mt-4 rounded-xl border border-primary/10 bg-surface-low p-3 text-sm">
      <button type="button" className="flex items-center gap-2 font-bold text-primary" onClick={() => setOpen((value) => !value)}>
        <Info size={17} />
        {t('transparency.button')}
      </button>
      {open && (
        <div className="mt-3 text-muted">
          <p className="font-bold text-text">{t('transparency.title')}</p>
          <p className="mt-1">{t('transparency.body')}</p>
          <p className="mt-2 text-xs">Source: {source}</p>
        </div>
      )}
    </div>
  );
}
