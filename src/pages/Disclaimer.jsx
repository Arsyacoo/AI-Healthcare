import { AlertTriangle, Ban, FileWarning, Siren, Stethoscope } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import InfoCard from '../components/InfoCard.jsx';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const items = [
  {
    titleKey: 'disclaimerPage.items.diagnosisTitle',
    textKey: 'disclaimerPage.items.diagnosisText',
    icon: FileWarning,
  },
  {
    titleKey: 'disclaimerPage.items.doctorTitle',
    textKey: 'disclaimerPage.items.doctorText',
    icon: Stethoscope,
  },
  {
    titleKey: 'disclaimerPage.items.prescriptionTitle',
    textKey: 'disclaimerPage.items.prescriptionText',
    icon: Ban,
  },
  {
    titleKey: 'disclaimerPage.items.emergencyTitle',
    textKey: 'disclaimerPage.items.emergencyText',
    icon: Siren,
  },
];

export default function Disclaimer() {
  const { t } = useLanguage();

  return (
    <div>
      <PageHeader eyebrow={t('disclaimerPage.eyebrow')} title={t('disclaimerPage.title')}>
        {t('disclaimerPage.subtitle')}
      </PageHeader>

      <section className="mb-6 rounded-xl border border-danger/25 bg-danger-soft p-5 text-danger">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 shrink-0" size={24} />
          <p>{t('disclaimerPage.emergency')}</p>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2">
        {items.map((item) => (
          <InfoCard key={item.titleKey} icon={item.icon} title={t(item.titleKey)} tone="danger">
            <p>{t(item.textKey)}</p>
          </InfoCard>
        ))}
      </section>

      <section className="card mt-6">
        <h2 className="font-headline text-2xl font-bold">{t('disclaimerPage.scopeTitle')}</h2>
        <p className="mt-3 text-muted">{t('disclaimerPage.scopeText')}</p>
      </section>
    </div>
  );
}
