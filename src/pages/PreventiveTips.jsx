import { useMemo, useState } from 'react';
import {
  Activity,
  Apple,
  ArrowRight,
  Brain,
  CheckCircle2,
  Dumbbell,
  Moon,
  ShieldPlus,
  Sparkles,
} from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const tips = [
  {
    id: 'lifestyle',
    icon: ShieldPlus,
    tone: 'primary',
    title: { id: 'Gaya hidup sehat', en: 'Healthy lifestyle' },
    text: {
      id: 'Bangun rutinitas minum cukup, kebersihan tangan, pemeriksaan berkala, dan kebiasaan harian seimbang.',
      en: 'Build routines around hydration, hand hygiene, regular checkups, and balanced daily habits.',
    },
    readTime: { id: '4 menit baca', en: '4 min read' },
    articleTitle: {
      id: 'Fondasi harian untuk tubuh yang lebih siap menghadapi sakit',
      en: 'Daily foundations for a body better prepared for illness',
    },
    overview: {
      id: 'Pencegahan yang baik tidak harus rumit. Fokus pada kebiasaan dasar yang bisa dilakukan konsisten setiap hari.',
      en: 'Good prevention does not have to be complicated. Focus on basic habits you can do consistently each day.',
    },
    steps: {
      id: [
        'Minum air secara cukup dan pantau warna urine sebagai gambaran hidrasi sederhana.',
        'Cuci tangan sebelum makan, setelah dari toilet, dan setelah menyentuh area publik.',
        'Atur jadwal pemeriksaan berkala bila memiliki riwayat penyakit keluarga atau kondisi kronis.',
        'Catat perubahan tubuh yang tidak biasa agar lebih mudah dijelaskan saat konsultasi.',
      ],
      en: [
        'Drink enough water and monitor urine color as a simple hydration cue.',
        'Wash hands before eating, after using the toilet, and after touching public surfaces.',
        'Plan regular checkups if you have family disease history or chronic conditions.',
        'Note unusual body changes so they are easier to explain during a consultation.',
      ],
    },
    warning: {
      id: 'Cari bantuan medis jika keluhan menetap, memburuk, atau mengganggu aktivitas harian.',
      en: 'Seek medical help if complaints persist, worsen, or interfere with daily activities.',
    },
  },
  {
    id: 'flu',
    icon: ShieldPlus,
    tone: 'secondary',
    title: { id: 'Pencegahan flu dan batuk', en: 'Flu and cough prevention' },
    text: {
      id: 'Cuci tangan, perbaiki ventilasi, tutup mulut saat batuk, istirahat saat sakit, dan ikuti panduan vaksinasi setempat.',
      en: 'Wash hands, improve ventilation, cover coughs, rest when sick, and follow local vaccination guidance.',
    },
    readTime: { id: '5 menit baca', en: '5 min read' },
    articleTitle: {
      id: 'Mengurangi risiko flu dan batuk di rumah maupun tempat kerja',
      en: 'Reducing flu and cough risk at home and work',
    },
    overview: {
      id: 'Flu dan batuk sering menyebar lewat droplet, tangan, dan ruangan dengan sirkulasi udara buruk.',
      en: 'Flu and cough often spread through droplets, hands, and rooms with poor air circulation.',
    },
    steps: {
      id: [
        'Buka jendela atau gunakan ventilasi yang baik saat berada di ruangan bersama.',
        'Gunakan masker saat sedang batuk atau berada dekat orang yang sakit.',
        'Hindari berbagi alat makan, botol minum, atau handuk dengan orang yang sedang sakit.',
        'Istirahat di rumah saat gejala infeksi muncul untuk mengurangi penularan.',
      ],
      en: [
        'Open windows or use good ventilation when sharing indoor spaces.',
        'Use a mask when coughing or when close to someone who is sick.',
        'Avoid sharing utensils, drink bottles, or towels with someone who is sick.',
        'Rest at home when infection symptoms appear to reduce transmission.',
      ],
    },
    warning: {
      id: 'Segera cari bantuan bila muncul sesak napas, nyeri dada, demam tinggi, atau gejala makin berat.',
      en: 'Seek help urgently if shortness of breath, chest pain, high fever, or worsening symptoms appear.',
    },
  },
  {
    id: 'sleep',
    icon: Moon,
    tone: 'warning',
    title: { id: 'Kesehatan tidur', en: 'Sleep health' },
    text: {
      id: 'Jaga jadwal konsisten, kurangi kafein larut, redupkan layar, dan buat ruang tidur yang sejuk serta tenang.',
      en: 'Keep a consistent schedule, reduce late caffeine, dim screens, and make the bedroom cool and quiet.',
    },
    readTime: { id: '3 menit baca', en: '3 min read' },
    articleTitle: { id: 'Tidur yang lebih teratur untuk energi dan pemulihan tubuh', en: 'More regular sleep for energy and recovery' },
    overview: {
      id: 'Tidur membantu pemulihan, konsentrasi, suasana hati, dan daya tahan tubuh. Rutinitas kecil bisa memberi dampak besar.',
      en: 'Sleep supports recovery, focus, mood, and immune function. Small routines can make a big difference.',
    },
    steps: {
      id: [
        'Tidur dan bangun di jam yang mirip, termasuk akhir pekan bila memungkinkan.',
        'Kurangi kafein sore atau malam hari jika tidur terasa sulit.',
        'Redupkan layar dan cahaya terang sekitar 30 sampai 60 menit sebelum tidur.',
        'Buat kamar lebih sejuk, tenang, dan nyaman untuk beristirahat.',
      ],
      en: [
        'Sleep and wake at similar times, including weekends when possible.',
        'Reduce afternoon or evening caffeine if sleep feels difficult.',
        'Dim screens and bright lights about 30 to 60 minutes before bed.',
        'Make the room cooler, quieter, and comfortable for rest.',
      ],
    },
    warning: {
      id: 'Konsultasikan bila sulit tidur menetap, disertai kantuk berat di siang hari, atau mengganggu fungsi harian.',
      en: 'Consult a professional if sleep difficulty persists, comes with severe daytime sleepiness, or disrupts daily function.',
    },
  },
  {
    id: 'nutrition',
    icon: Apple,
    tone: 'secondary',
    title: { id: 'Nutrisi', en: 'Nutrition' },
    text: {
      id: 'Pilih makanan utuh yang bervariasi, kaya serat, cukup cairan, serta batasi gula dan garam tambahan.',
      en: 'Choose varied whole foods, fiber-rich options, enough fluids, and limit added sugar and salt.',
    },
    readTime: { id: '4 menit baca', en: '4 min read' },
    articleTitle: { id: 'Makan lebih seimbang tanpa membuat pola makan terasa berat', en: 'Eating more balanced without making food feel restrictive' },
    overview: {
      id: 'Nutrisi preventif berfokus pada variasi, porsi wajar, dan konsistensi, bukan larangan ekstrem.',
      en: 'Preventive nutrition focuses on variety, reasonable portions, and consistency, not extreme restrictions.',
    },
    steps: {
      id: [
        'Isi piring dengan sumber protein, sayur atau buah, karbohidrat, dan lemak sehat secukupnya.',
        'Pilih makanan berserat seperti sayur, buah, kacang, atau biji-bijian utuh.',
        'Batasi minuman manis dan makanan tinggi garam bila dikonsumsi terlalu sering.',
        'Baca label makanan untuk memahami gula, garam, dan lemak tambahan.',
      ],
      en: [
        'Fill the plate with protein, vegetables or fruit, carbohydrates, and healthy fats in reasonable portions.',
        'Choose fiber-rich foods such as vegetables, fruit, nuts, or whole grains.',
        'Limit sweet drinks and high-salt foods when consumed too often.',
        'Read food labels to understand added sugar, salt, and fat.',
      ],
    },
    warning: {
      id: 'Minta panduan profesional jika memiliki diabetes, penyakit ginjal, gangguan makan, atau penurunan berat badan tanpa sebab jelas.',
      en: 'Ask for professional guidance if you have diabetes, kidney disease, an eating disorder, or unexplained weight loss.',
    },
  },
  {
    id: 'exercise',
    icon: Dumbbell,
    tone: 'primary',
    title: { id: 'Olahraga', en: 'Exercise' },
    text: {
      id: 'Usahakan bergerak teratur sesuai kondisi kesehatan, dan mulai perlahan setelah lama tidak aktif.',
      en: 'Aim for regular movement that fits your health condition, and start slowly after being inactive.',
    },
    readTime: { id: '4 menit baca', en: '4 min read' },
    articleTitle: { id: 'Aktivitas fisik aman yang bisa dimulai perlahan', en: 'Safe physical activity you can start gradually' },
    overview: {
      id: 'Gerak teratur membantu kebugaran, mood, tidur, dan metabolisme. Kuncinya adalah mulai dari level yang realistis.',
      en: 'Regular movement supports fitness, mood, sleep, and metabolism. The key is starting at a realistic level.',
    },
    steps: {
      id: [
        'Mulai dengan jalan ringan 10 sampai 15 menit bila sudah lama tidak aktif.',
        'Tambahkan peregangan lembut untuk mengurangi kaku setelah duduk lama.',
        'Naikkan durasi atau intensitas secara bertahap, bukan mendadak.',
        'Pilih aktivitas yang disukai agar lebih mudah konsisten.',
      ],
      en: [
        'Start with 10 to 15 minutes of light walking if you have been inactive.',
        'Add gentle stretching to reduce stiffness after sitting for a long time.',
        'Increase duration or intensity gradually, not suddenly.',
        'Choose activities you enjoy so consistency is easier.',
      ],
    },
    warning: {
      id: 'Hentikan aktivitas dan cari bantuan bila muncul nyeri dada, sesak berat, pusing berat, atau nyeri tajam mendadak.',
      en: 'Stop activity and seek help if chest pain, severe shortness of breath, severe dizziness, or sudden sharp pain appears.',
    },
  },
  {
    id: 'mental',
    icon: Brain,
    tone: 'warning',
    title: { id: 'Kesehatan mental', en: 'Mental health' },
    text: {
      id: 'Sediakan waktu untuk koneksi sosial, istirahat, pengelolaan stres, dan bantuan profesional bila tekanan menetap.',
      en: 'Make time for social connection, rest, stress management, and professional help if distress persists.',
    },
    readTime: { id: '5 menit baca', en: '5 min read' },
    articleTitle: { id: 'Menjaga kesehatan mental sebagai bagian dari pencegahan', en: 'Maintaining mental health as part of prevention' },
    overview: {
      id: 'Kesehatan mental memengaruhi tidur, energi, kebiasaan makan, relasi, dan kemampuan mengambil keputusan sehat.',
      en: 'Mental health affects sleep, energy, eating habits, relationships, and the ability to make healthy decisions.',
    },
    steps: {
      id: [
        'Luangkan waktu singkat untuk bernapas pelan, journaling, atau refleksi harian.',
        'Jaga koneksi dengan orang tepercaya saat merasa terbebani.',
        'Batasi paparan kabar atau media sosial yang membuat stres berlebihan.',
        'Cari bantuan profesional bila rasa cemas, sedih, atau tertekan tidak membaik.',
      ],
      en: [
        'Take a short time for slow breathing, journaling, or daily reflection.',
        'Stay connected with trusted people when feeling overwhelmed.',
        'Limit news or social media exposure that creates excessive stress.',
        'Seek professional help if anxiety, sadness, or distress does not improve.',
      ],
    },
    warning: {
      id: 'Jika muncul keinginan menyakiti diri sendiri atau orang lain, segera hubungi layanan darurat atau orang tepercaya.',
      en: 'If thoughts of harming yourself or others appear, contact emergency services or a trusted person immediately.',
    },
  },
];

const dailyHabits = [
  {
    label: { id: 'Minum air cukup hari ini', en: 'Drink enough water today' },
    praise: { id: 'Anda sudah membantu tubuh tetap terhidrasi.', en: 'You helped your body stay hydrated.' },
    suggestion: { id: 'Letakkan botol minum di dekat meja atau tempat yang sering terlihat.', en: 'Place a water bottle near your desk or somewhere easy to see.' },
  },
  {
    label: { id: 'Bergerak minimal 10 menit', en: 'Move for at least 10 minutes' },
    praise: { id: 'Anda sudah memberi tubuh kesempatan untuk aktif.', en: 'You gave your body a chance to be active.' },
    suggestion: { id: 'Coba jalan santai 10 menit atau lakukan peregangan ringan setelah duduk lama.', en: 'Try a 10-minute walk or gentle stretching after sitting for a long time.' },
  },
  {
    label: { id: 'Makan sayur atau buah', en: 'Eat vegetables or fruit' },
    praise: { id: 'Anda sudah menambah asupan serat dan mikronutrien hari ini.', en: 'You added fiber and micronutrients today.' },
    suggestion: { id: 'Tambahkan satu porsi buah atau sayur pada makan berikutnya.', en: 'Add one portion of fruit or vegetables to your next meal.' },
  },
  {
    label: { id: 'Tidur atau istirahat cukup', en: 'Sleep or rest enough' },
    praise: { id: 'Anda sudah memberi ruang untuk pemulihan tubuh.', en: 'You made room for body recovery.' },
    suggestion: { id: 'Atur waktu tidur lebih konsisten dan kurangi layar sebelum istirahat.', en: 'Set a more consistent bedtime and reduce screens before resting.' },
  },
  {
    label: { id: 'Luangkan waktu tenang 5 menit', en: 'Take 5 quiet minutes' },
    praise: { id: 'Anda sudah memberi jeda untuk menenangkan pikiran.', en: 'You gave your mind a pause to settle.' },
    suggestion: { id: 'Ambil 5 menit untuk bernapas pelan, journaling, atau duduk tanpa distraksi.', en: 'Take 5 minutes for slow breathing, journaling, or sitting without distraction.' },
  },
];

const toneClass = {
  primary: 'bg-primary-soft text-primary',
  secondary: 'bg-secondary-soft/40 text-secondary',
  warning: 'bg-warning-soft text-warning',
};

function pick(value, language) {
  return value?.[language] || value?.id || value;
}

export default function PreventiveTips() {
  const { language, t } = useLanguage();
  const [activeId, setActiveId] = useState(tips[0].id);
  const [checkedHabits, setCheckedHabits] = useState([]);
  const activeTip = tips.find((tip) => tip.id === activeId) || tips[0];
  const checkedHabitItems = dailyHabits.filter((habit) => checkedHabits.includes(pick(habit.label, language)));
  const uncheckedHabitItems = dailyHabits.filter((habit) => !checkedHabits.includes(pick(habit.label, language)));
  const progress = useMemo(() => Math.round((checkedHabits.length / dailyHabits.length) * 100), [checkedHabits.length]);

  function toggleHabit(habit) {
    setCheckedHabits((current) =>
      current.includes(habit) ? current.filter((item) => item !== habit) : [...current, habit],
    );
  }

  return (
    <div>
      <PageHeader eyebrow={t('prevention.eyebrow')} title={t('prevention.title')}>
        {t('prevention.subtitle')}
      </PageHeader>

      <section className="mb-8 rounded-3xl border border-primary/10 bg-gradient-to-br from-primary-soft via-white to-secondary-soft/45 p-6 shadow-card sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
              <Activity size={25} />
            </div>
            <h2 className="font-headline text-3xl font-bold">{t('prevention.heroTitle')}</h2>
            <p className="mt-3 max-w-2xl text-muted">{t('prevention.heroText')}</p>
          </div>
          <div className="rounded-2xl bg-white/85 p-5 shadow-glow">
            <div className="flex items-center gap-2 text-secondary">
              <Sparkles size={18} />
              <p className="text-sm font-bold">{t('prevention.checklist')}</p>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-surface-border/50">
              <div className="h-full rounded-full bg-secondary transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-2 text-sm font-bold text-text">{t('prevention.progress', { progress })}</p>
            <div className="mt-4 space-y-2">
              {dailyHabits.map((habit) => {
                const label = pick(habit.label, language);
                const checked = checkedHabits.includes(label);
                return (
                  <button
                    className={`flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition ${checked ? 'border-secondary/30 bg-secondary-soft/30 text-secondary' : 'border-surface-border/70 bg-white text-muted hover:border-primary/30'}`}
                    key={label}
                    type="button"
                    onClick={() => toggleHabit(label)}
                  >
                    <CheckCircle2 size={17} className={checked ? 'text-secondary' : 'text-surface-border'} />
                    {label}
                  </button>
                );
              })}
            </div>
            {checkedHabits.length > 0 && (
              <div className="mt-4 rounded-xl border border-primary/10 bg-primary-soft/35 p-4">
                <p className="font-headline text-lg font-bold text-primary">{t('prevention.summaryTitle')}</p>
                <p className="mt-2 text-sm text-muted">
                  {t('prevention.summaryText', {
                    checked: checkedHabits.length,
                    total: dailyHabits.length,
                    message: progress === 100 ? t('prevention.completeMessage') : t('prevention.incompleteMessage'),
                  })}
                </p>

                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-sm font-bold text-secondary">{t('prevention.goodTitle')}</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted">
                      {checkedHabitItems.map((habit) => (
                        <li key={pick(habit.label, language)}>- {pick(habit.praise, language)}</li>
                      ))}
                    </ul>
                  </div>

                  {uncheckedHabitItems.length > 0 && (
                    <div>
                      <p className="text-sm font-bold text-warning">{t('prevention.missingTitle')}</p>
                      <ul className="mt-2 space-y-1 text-sm text-muted">
                        {uncheckedHabitItems.map((habit) => (
                          <li key={pick(habit.label, language)}>- {pick(habit.label, language)}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {uncheckedHabitItems.length > 0 && (
                    <div>
                      <p className="text-sm font-bold text-primary">{t('prevention.nextTitle')}</p>
                      <ul className="mt-2 space-y-1 text-sm text-muted">
                        {uncheckedHabitItems.slice(0, 2).map((habit) => (
                          <li key={pick(habit.label, language)}>- {pick(habit.suggestion, language)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_420px]">
        <div className="grid gap-5 sm:grid-cols-2">
          {tips.map((tip) => {
            const Icon = tip.icon;
            const active = tip.id === activeId;
            return (
              <button
                key={tip.id}
                type="button"
                onClick={() => setActiveId(tip.id)}
                className={`rounded-xl border bg-surface-card p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-primary/30 ${active ? 'border-primary/40 ring-4 ring-primary/10' : 'border-primary/10'}`}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${toneClass[tip.tone]}`}>
                  <Icon size={24} />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-headline text-xl font-bold text-text">{pick(tip.title, language)}</h3>
                  <ArrowRight className={`mt-1 shrink-0 transition ${active ? 'text-primary' : 'text-muted'}`} size={18} />
                </div>
                <p className="mt-3 text-muted">{pick(tip.text, language)}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-primary">{pick(tip.readTime, language)}</p>
              </button>
            );
          })}
        </div>

        <article className="card sticky top-24 self-start">
          <div className="mb-4 flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${toneClass[activeTip.tone]}`}>
              <activeTip.icon size={24} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-secondary">{t('prevention.selectedArticle')}</p>
              <h2 className="font-headline text-2xl font-bold text-text">{pick(activeTip.title, language)}</h2>
            </div>
          </div>
          <h3 className="font-headline text-xl font-bold text-primary">{pick(activeTip.articleTitle, language)}</h3>
          <p className="mt-3 text-muted">{pick(activeTip.overview, language)}</p>

          <div className="mt-5">
            <p className="mb-3 font-bold text-text">{t('prevention.steps')}</p>
            <ul className="space-y-3">
              {pick(activeTip.steps, language).map((step) => (
                <li className="flex gap-3 text-muted" key={step}>
                  <CheckCircle2 className="mt-1 shrink-0 text-secondary" size={18} />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-xl border border-warning/20 bg-warning-soft/45 p-4">
            <p className="font-bold text-warning">{t('prevention.helpTitle')}</p>
            <p className="mt-2 text-sm text-muted">{pick(activeTip.warning, language)}</p>
          </div>
        </article>
      </section>
    </div>
  );
}
