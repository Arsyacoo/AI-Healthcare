import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function EmergencyAlert({ matches = [] }) {
  const { t } = useLanguage();

  return (
    <div className="rounded-xl border border-danger bg-danger-soft p-5 text-danger">
      <div className="flex items-start gap-3">
        <AlertTriangle size={24} className="mt-1 shrink-0" />
        <div>
          <h2 className="font-headline text-xl font-bold">{t('emergency.title')}</h2>
          <p className="mt-2 text-sm">{t('emergency.message')}</p>
          {matches.length > 0 && <p className="mt-2 text-xs font-bold">{t('common.keyword')}: {matches.join(', ')}</p>}
        </div>
      </div>
    </div>
  );
}
