import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex rounded-full border border-primary/10 bg-surface-low p-1 text-xs font-bold">
      {['id', 'en'].map((item) => (
        <button
          key={item}
          type="button"
          className={`rounded-full px-3 py-1 transition ${language === item ? 'bg-primary text-white' : 'text-muted hover:text-primary'}`}
          onClick={() => setLanguage(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
