import { useState } from 'react';
import { AlertTriangle, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

function saveFeedback(payload) {
  const key = 'careguide_feedback';
  const current = JSON.parse(localStorage.getItem(key) || '[]');
  current.push({ ...payload, createdAt: new Date().toISOString() });
  localStorage.setItem(key, JSON.stringify(current));
}

export default function FeedbackButtons({ context }) {
  const [saved, setSaved] = useState(false);
  const { t } = useLanguage();

  function handleFeedback(type) {
    saveFeedback({ type, context });
    setSaved(true);
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
      <button className="chip" type="button" onClick={() => handleFeedback('helpful')}>
        <ThumbsUp size={15} /> {t('feedback.helpful')}
      </button>
      <button className="chip" type="button" onClick={() => handleFeedback('not_helpful')}>
        <ThumbsDown size={15} /> {t('feedback.notHelpful')}
      </button>
      <button className="chip border-danger/20 bg-danger-soft/50 text-danger" type="button" onClick={() => handleFeedback('unsafe')}>
        <AlertTriangle size={15} /> {t('feedback.unsafe')}
      </button>
      {saved && <span className="text-xs font-bold text-secondary">{t('feedback.saved')}</span>}
    </div>
  );
}
