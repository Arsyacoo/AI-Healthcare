import { BookOpen, Bot, ClipboardPlus, HeartPulse, Pill, ShieldAlert, Sparkles } from 'lucide-react';
import InfoCard from '../components/InfoCard.jsx';

const features = [
  {
    id: 'symptoms',
    title: 'Panduan Gejala',
    text: 'Isi form terstruktur dan dapatkan panduan edukatif dengan pemeriksaan tanda bahaya.',
    icon: ClipboardPlus,
    tone: 'primary',
  },
  {
    id: 'chat',
    title: 'Chat AI',
    text: 'Ajukan pertanyaan edukasi kesehatan umum melalui antarmuka asisten simulasi.',
    icon: Bot,
    tone: 'secondary',
  },
  {
    id: 'medication',
    title: 'Medication Safety',
    text: 'Cari ringkasan obat umum tanpa rekomendasi dosis atau resep.',
    icon: Pill,
    tone: 'warning',
  },
  {
    id: 'library',
    title: 'Health Library',
    text: 'Baca artikel edukasi kesehatan seperti demam, batuk, nutrisi, tidur, dan kesehatan mental ringan.',
    icon: BookOpen,
    tone: 'primary',
  },
  {
    id: 'prevention',
    title: 'Tips Pencegahan',
    text: 'Jelajahi kartu gaya hidup praktis untuk pencegahan dan kebiasaan sehat harian.',
    icon: HeartPulse,
    tone: 'secondary',
  },
];

export default function Home({ onNavigate }) {
  return (
    <div className="space-y-12">
      <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft/55 px-4 py-2 text-sm font-bold text-primary">
            <Sparkles size={16} />
            Edukasi kesehatan berbasis AI
          </div>
          <h1 className="font-headline text-4xl font-extrabold leading-tight text-text sm:text-5xl">
            AI-Healthcare membantu Anda memahami gejala, obat, dan pencegahan sehari-hari.
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Frontend lokal yang responsif untuk edukasi kesehatan umum. Aplikasi ini memberi
            panduan terstruktur, pengingat keselamatan, dan edukasi pasien sederhana tanpa
            menggantikan tenaga medis.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="btn-primary" type="button" onClick={() => onNavigate('symptoms')}>
              Mulai Cek Kesehatan
            </button>
            <button className="btn-secondary" type="button" onClick={() => onNavigate('prevention')}>
              Pelajari Tips Sehat
            </button>
          </div>
          <div className="flex max-w-2xl gap-3 rounded-xl border border-danger/20 bg-danger-soft/70 p-4 text-danger">
            <ShieldAlert className="mt-1 shrink-0" size={22} />
            <p className="text-sm">
              Aplikasi ini hanya memberikan informasi kesehatan umum dan tidak memberikan diagnosis,
              resep, dosis obat, atau layanan darurat.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-surface-card p-5 shadow-card">
          <div className="absolute right-5 top-5 rounded-full bg-secondary-soft px-3 py-1 text-xs font-bold text-secondary">
            AI Guide Active
          </div>
          <div className="grid min-h-[360px] place-items-center rounded-2xl bg-[radial-gradient(circle_at_50%_35%,#d4e3ff,transparent_35%),linear-gradient(135deg,#fdfcff,#eaf7f0)] p-8">
            <div className="w-full max-w-sm space-y-4">
              <div className="rounded-2xl bg-white/85 p-4 shadow-glow">
                <p className="text-sm font-bold text-primary">AI-Healthcare</p>
                <p className="mt-2 text-muted">Bagaimana saya dapat membantu Anda memahami gejala hari ini?</p>
              </div>
              <div className="ml-auto w-4/5 rounded-2xl bg-primary p-4 text-white shadow-card">
                Saya batuk selama tiga hari. Hal apa yang perlu saya perhatikan?
              </div>
              <div className="rounded-2xl bg-white/90 p-4 shadow-card">
                <p className="text-sm text-muted">
                  Saya dapat membagikan penyebab umum, langkah perawatan mandiri yang aman, dan tanda bahaya yang perlu pertolongan segera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-5 font-headline text-2xl font-bold text-text">Jelajahi layanan utama</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature) => (
            <button
              key={feature.id}
              type="button"
              onClick={() => onNavigate(feature.id)}
              className="text-left transition hover:-translate-y-1"
            >
              <InfoCard icon={feature.icon} title={feature.title} tone={feature.tone} className="h-full">
                <p>{feature.text}</p>
              </InfoCard>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}





