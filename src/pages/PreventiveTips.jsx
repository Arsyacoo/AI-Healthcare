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

const tips = [
  {
    id: 'lifestyle',
    title: 'Gaya hidup sehat',
    icon: ShieldPlus,
    tone: 'primary',
    text: 'Bangun rutinitas minum cukup, kebersihan tangan, pemeriksaan berkala, dan kebiasaan harian seimbang.',
    readTime: '4 menit baca',
    articleTitle: 'Fondasi harian untuk tubuh yang lebih siap menghadapi sakit',
    overview:
      'Pencegahan yang baik tidak harus rumit. Fokus pada kebiasaan dasar yang bisa dilakukan konsisten setiap hari.',
    steps: [
      'Minum air secara cukup dan pantau warna urine sebagai gambaran hidrasi sederhana.',
      'Cuci tangan sebelum makan, setelah dari toilet, dan setelah menyentuh area publik.',
      'Atur jadwal pemeriksaan berkala bila memiliki riwayat penyakit keluarga atau kondisi kronis.',
      'Catat perubahan tubuh yang tidak biasa agar lebih mudah dijelaskan saat konsultasi.',
    ],
    warning: 'Cari bantuan medis jika keluhan menetap, memburuk, atau mengganggu aktivitas harian.',
  },
  {
    id: 'flu',
    title: 'Pencegahan flu dan batuk',
    icon: ShieldPlus,
    tone: 'secondary',
    text: 'Cuci tangan, perbaiki ventilasi, tutup mulut saat batuk, istirahat saat sakit, dan ikuti panduan vaksinasi setempat.',
    readTime: '5 menit baca',
    articleTitle: 'Mengurangi risiko flu dan batuk di rumah maupun tempat kerja',
    overview:
      'Flu dan batuk sering menyebar lewat droplet, tangan, dan ruangan dengan sirkulasi udara buruk.',
    steps: [
      'Buka jendela atau gunakan ventilasi yang baik saat berada di ruangan bersama.',
      'Gunakan masker saat sedang batuk atau berada dekat orang yang sakit.',
      'Hindari berbagi alat makan, botol minum, atau handuk dengan orang yang sedang sakit.',
      'Istirahat di rumah saat gejala infeksi muncul untuk mengurangi penularan.',
    ],
    warning: 'Segera cari bantuan bila muncul sesak napas, nyeri dada, demam tinggi, atau gejala makin berat.',
  },
  {
    id: 'sleep',
    title: 'Kesehatan tidur',
    icon: Moon,
    tone: 'warning',
    text: 'Jaga jadwal konsisten, kurangi kafein larut, redupkan layar, dan buat ruang tidur yang sejuk serta tenang.',
    readTime: '3 menit baca',
    articleTitle: 'Tidur yang lebih teratur untuk energi dan pemulihan tubuh',
    overview:
      'Tidur membantu pemulihan, konsentrasi, suasana hati, dan daya tahan tubuh. Rutinitas kecil bisa memberi dampak besar.',
    steps: [
      'Tidur dan bangun di jam yang mirip, termasuk akhir pekan bila memungkinkan.',
      'Kurangi kafein sore atau malam hari jika tidur terasa sulit.',
      'Redupkan layar dan cahaya terang sekitar 30 sampai 60 menit sebelum tidur.',
      'Buat kamar lebih sejuk, tenang, dan nyaman untuk beristirahat.',
    ],
    warning: 'Konsultasikan bila sulit tidur menetap, disertai kantuk berat di siang hari, atau mengganggu fungsi harian.',
  },
  {
    id: 'nutrition',
    title: 'Nutrisi',
    icon: Apple,
    tone: 'secondary',
    text: 'Pilih makanan utuh yang bervariasi, kaya serat, cukup cairan, serta batasi gula dan garam tambahan.',
    readTime: '4 menit baca',
    articleTitle: 'Makan lebih seimbang tanpa membuat pola makan terasa berat',
    overview:
      'Nutrisi preventif berfokus pada variasi, porsi wajar, dan konsistensi, bukan larangan ekstrem.',
    steps: [
      'Isi piring dengan sumber protein, sayur atau buah, karbohidrat, dan lemak sehat secukupnya.',
      'Pilih makanan berserat seperti sayur, buah, kacang, atau biji-bijian utuh.',
      'Batasi minuman manis dan makanan tinggi garam bila dikonsumsi terlalu sering.',
      'Baca label makanan untuk memahami gula, garam, dan lemak tambahan.',
    ],
    warning: 'Minta panduan profesional jika memiliki diabetes, penyakit ginjal, gangguan makan, atau penurunan berat badan tanpa sebab jelas.',
  },
  {
    id: 'exercise',
    title: 'Olahraga',
    icon: Dumbbell,
    tone: 'primary',
    text: 'Usahakan bergerak teratur sesuai kondisi kesehatan, dan mulai perlahan setelah lama tidak aktif.',
    readTime: '4 menit baca',
    articleTitle: 'Aktivitas fisik aman yang bisa dimulai perlahan',
    overview:
      'Gerak teratur membantu kebugaran, mood, tidur, dan metabolisme. Kuncinya adalah mulai dari level yang realistis.',
    steps: [
      'Mulai dengan jalan ringan 10 sampai 15 menit bila sudah lama tidak aktif.',
      'Tambahkan peregangan lembut untuk mengurangi kaku setelah duduk lama.',
      'Naikkan durasi atau intensitas secara bertahap, bukan mendadak.',
      'Pilih aktivitas yang disukai agar lebih mudah konsisten.',
    ],
    warning: 'Hentikan aktivitas dan cari bantuan bila muncul nyeri dada, sesak berat, pusing berat, atau nyeri tajam mendadak.',
  },
  {
    id: 'mental',
    title: 'Kesehatan mental',
    icon: Brain,
    tone: 'warning',
    text: 'Sediakan waktu untuk koneksi sosial, istirahat, pengelolaan stres, dan bantuan profesional bila tekanan menetap.',
    readTime: '5 menit baca',
    articleTitle: 'Menjaga kesehatan mental sebagai bagian dari pencegahan',
    overview:
      'Kesehatan mental memengaruhi tidur, energi, kebiasaan makan, relasi, dan kemampuan mengambil keputusan sehat.',
    steps: [
      'Luangkan waktu singkat untuk bernapas pelan, journaling, atau refleksi harian.',
      'Jaga koneksi dengan orang tepercaya saat merasa terbebani.',
      'Batasi paparan kabar atau media sosial yang membuat stres berlebihan.',
      'Cari bantuan profesional bila rasa cemas, sedih, atau tertekan tidak membaik.',
    ],
    warning: 'Jika muncul keinginan menyakiti diri sendiri atau orang lain, segera hubungi layanan darurat atau orang tepercaya.',
  },
];

const dailyHabits = [
  {
    label: 'Minum air cukup hari ini',
    praise: 'Anda sudah membantu tubuh tetap terhidrasi.',
    suggestion: 'Letakkan botol minum di dekat meja atau tempat yang sering terlihat.',
  },
  {
    label: 'Bergerak minimal 10 menit',
    praise: 'Anda sudah memberi tubuh kesempatan untuk aktif.',
    suggestion: 'Coba jalan santai 10 menit atau lakukan peregangan ringan setelah duduk lama.',
  },
  {
    label: 'Makan sayur atau buah',
    praise: 'Anda sudah menambah asupan serat dan mikronutrien hari ini.',
    suggestion: 'Tambahkan satu porsi buah atau sayur pada makan berikutnya.',
  },
  {
    label: 'Tidur atau istirahat cukup',
    praise: 'Anda sudah memberi ruang untuk pemulihan tubuh.',
    suggestion: 'Atur waktu tidur lebih konsisten dan kurangi layar sebelum istirahat.',
  },
  {
    label: 'Luangkan waktu tenang 5 menit',
    praise: 'Anda sudah memberi jeda untuk menenangkan pikiran.',
    suggestion: 'Ambil 5 menit untuk bernapas pelan, journaling, atau duduk tanpa distraksi.',
  },
];

const toneClass = {
  primary: 'bg-primary-soft text-primary',
  secondary: 'bg-secondary-soft/40 text-secondary',
  warning: 'bg-warning-soft text-warning',
};

export default function PreventiveTips() {
  const [activeId, setActiveId] = useState(tips[0].id);
  const [checkedHabits, setCheckedHabits] = useState([]);
  const activeTip = tips.find((tip) => tip.id === activeId) || tips[0];
  const checkedHabitItems = dailyHabits.filter((habit) => checkedHabits.includes(habit.label));
  const uncheckedHabitItems = dailyHabits.filter((habit) => !checkedHabits.includes(habit.label));
  const progress = useMemo(() => Math.round((checkedHabits.length / dailyHabits.length) * 100), [checkedHabits.length]);

  function toggleHabit(habit) {
    setCheckedHabits((current) =>
      current.includes(habit) ? current.filter((item) => item !== habit) : [...current, habit],
    );
  }

  return (
    <div>
      <PageHeader eyebrow="Perawatan preventif" title="Kebiasaan kecil yang mendukung kesehatan jangka panjang">
        Tips pencegahan edukatif untuk kesehatan sehari-hari. Pilih kartu topik untuk membaca artikel singkat dan gunakan checklist harian sebagai pengingat kebiasaan sehat.
      </PageHeader>

      <section className="mb-8 rounded-3xl border border-primary/10 bg-gradient-to-br from-primary-soft via-white to-secondary-soft/45 p-6 shadow-card sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
              <Activity size={25} />
            </div>
            <h2 className="font-headline text-3xl font-bold">Pilih satu topik, baca ringkasannya, lalu mulai dari satu kebiasaan kecil hari ini.</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Halaman ini bukan rencana medis personal, tetapi bisa membantu Anda membuat rutinitas pencegahan yang lebih terarah.
            </p>
          </div>
          <div className="rounded-2xl bg-white/85 p-5 shadow-glow">
            <div className="flex items-center gap-2 text-secondary">
              <Sparkles size={18} />
              <p className="text-sm font-bold">Checklist harian</p>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-surface-border/50">
              <div className="h-full rounded-full bg-secondary transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-2 text-sm font-bold text-text">{progress}% selesai</p>
            <div className="mt-4 space-y-2">
              {dailyHabits.map((habit) => {
                const checked = checkedHabits.includes(habit.label);
                return (
                  <button
                    className={`flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition ${checked ? 'border-secondary/30 bg-secondary-soft/30 text-secondary' : 'border-surface-border/70 bg-white text-muted hover:border-primary/30'}`}
                    key={habit.label}
                    type="button"
                    onClick={() => toggleHabit(habit.label)}
                  >
                    <CheckCircle2 size={17} className={checked ? 'text-secondary' : 'text-surface-border'} />
                    {habit.label}
                  </button>
                );
              })}
            </div>
            {checkedHabits.length > 0 && (
              <div className="mt-4 rounded-xl border border-primary/10 bg-primary-soft/35 p-4">
                <p className="font-headline text-lg font-bold text-primary">Resume hari ini</p>
                <p className="mt-2 text-sm text-muted">
                  Anda sudah menyelesaikan {checkedHabits.length} dari {dailyHabits.length} kebiasaan. {progress === 100 ? 'Lengkap, ritme hari ini sangat baik.' : 'Masih ada beberapa kebiasaan kecil yang bisa dilengkapi.'}
                </p>

                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-sm font-bold text-secondary">Yang sudah bagus</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted">
                      {checkedHabitItems.map((habit) => (
                        <li key={habit.label}>- {habit.praise}</li>
                      ))}
                    </ul>
                  </div>

                  {uncheckedHabitItems.length > 0 && (
                    <div>
                      <p className="text-sm font-bold text-warning">Yang kurang hari ini</p>
                      <ul className="mt-2 space-y-1 text-sm text-muted">
                        {uncheckedHabitItems.map((habit) => (
                          <li key={habit.label}>- {habit.label}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {uncheckedHabitItems.length > 0 && (
                    <div>
                      <p className="text-sm font-bold text-primary">Saran berikutnya</p>
                      <ul className="mt-2 space-y-1 text-sm text-muted">
                        {uncheckedHabitItems.slice(0, 2).map((habit) => (
                          <li key={habit.label}>- {habit.suggestion}</li>
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
                  <h3 className="font-headline text-xl font-bold text-text">{tip.title}</h3>
                  <ArrowRight className={`mt-1 shrink-0 transition ${active ? 'text-primary' : 'text-muted'}`} size={18} />
                </div>
                <p className="mt-3 text-muted">{tip.text}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-primary">{tip.readTime}</p>
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
              <p className="text-xs font-bold uppercase tracking-wide text-secondary">Artikel pilihan</p>
              <h2 className="font-headline text-2xl font-bold text-text">{activeTip.title}</h2>
            </div>
          </div>
          <h3 className="font-headline text-xl font-bold text-primary">{activeTip.articleTitle}</h3>
          <p className="mt-3 text-muted">{activeTip.overview}</p>

          <div className="mt-5">
            <p className="mb-3 font-bold text-text">Langkah praktis</p>
            <ul className="space-y-3">
              {activeTip.steps.map((step) => (
                <li className="flex gap-3 text-muted" key={step}>
                  <CheckCircle2 className="mt-1 shrink-0 text-secondary" size={18} />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-xl border border-warning/20 bg-warning-soft/45 p-4">
            <p className="font-bold text-warning">Kapan perlu bantuan?</p>
            <p className="mt-2 text-sm text-muted">{activeTip.warning}</p>
          </div>
        </article>
      </section>
    </div>
  );
}
