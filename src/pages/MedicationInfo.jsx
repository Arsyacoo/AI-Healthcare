import { useMemo, useState } from 'react';
import { AlertTriangle, Bot, Pill, Search, ShieldCheck, Stethoscope } from 'lucide-react';
import FormattedText from '../components/FormattedText.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { askGemini, buildMedicationPrompt, geminiReady, getGeminiErrorMessage } from '../services/gemini.js';

const medicines = {
  paracetamol: {
    name: 'Paracetamol',
    use: 'Umumnya digunakan untuk meredakan sementara nyeri ringan dan demam.',
    effects: ['Mual', 'Ruam', 'Reaksi alergi pada sebagian orang'],
    warnings: ['Hindari menggabungkan beberapa produk dengan bahan aktif yang sama.', 'Tanyakan kepada tenaga medis jika Anda memiliki penyakit hati atau konsumsi alkohol berat.'],
  },
  ibuprofen: {
    name: 'Ibuprofen',
    use: 'Obat antiinflamasi nonsteroid yang umum dibahas untuk nyeri, peradangan, dan demam.',
    effects: ['Gangguan lambung', 'Nyeri ulu hati', 'Pusing'],
    warnings: ['Mungkin tidak cocok untuk beberapa kondisi lambung, ginjal, jantung, atau perdarahan.', 'Tanyakan sebelum digunakan jika sedang hamil atau memakai pengencer darah.'],
  },
  cetirizine: {
    name: 'Cetirizine',
    use: 'Antihistamin yang umum digunakan untuk gejala alergi seperti bersin, mata gatal, atau hidung berair.',
    effects: ['Mengantuk', 'Mulut kering', 'Lelah'],
    warnings: ['Berhati-hati sebelum mengemudi jika obat membuat mengantuk.', 'Tanyakan kepada profesional jika memiliki penyakit ginjal atau memakai obat yang menyebabkan kantuk.'],
  },
};

export default function MedicationInfo() {
  const [query, setQuery] = useState('Ibuprofen');
  const [aiInfo, setAiInfo] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const medicine = useMemo(() => medicines[query.trim().toLowerCase()], [query]);

  async function handleAiSearch(event) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed || isAiLoading) return;

    setAiInfo('');
    setAiError('');

    if (!geminiReady) {
      setAiError('API key Gemini belum tersedia. Isi .env.local untuk mengaktifkan pencarian AI.');
      return;
    }

    setIsAiLoading(true);
    try {
      const response = await askGemini(buildMedicationPrompt(trimmed));
      setAiInfo(response);
    } catch (error) {
      setAiError(getGeminiErrorMessage(error));
      console.error(error);
    } finally {
      setIsAiLoading(false);
    }
  }

  return (
    <div>
      <PageHeader eyebrow="Info obat" title="Cari informasi obat umum">
        Pelajari kegunaan umum, efek samping umum, dan peringatan keselamatan dengan data lokal
        AI-Healthcare tidak memberikan dosis, resep, atau rekomendasi obat.
      </PageHeader>

      <form className="mb-6" onSubmit={handleAiSearch}>
        <div className="relative max-w-3xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
          <input className="input pl-12" onChange={(event) => setQuery(event.target.value)} placeholder="Cari Paracetamol, Ibuprofen, atau Cetirizine" value={query} />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {Object.values(medicines).map((item) => (
            <button className="chip" key={item.name} onClick={() => setQuery(item.name)} type="button">
              {item.name}
            </button>
          ))}
          <button className="chip border-primary/20 bg-primary-soft/40 text-primary" type="submit" disabled={isAiLoading}>
            {isAiLoading ? 'Mencari dengan AI...' : 'Cari dengan Gemini'}
          </button>
        </div>
      </form>

      {(aiInfo || aiError) && (
        <section className="card mb-6 border-primary/15 bg-primary-soft/30">
          <div className="mb-3 flex items-center gap-2 font-bold text-primary">
            <Bot size={20} />
            Hasil AI Gemini
          </div>
          {aiInfo && <FormattedText text={aiInfo} />}
          {aiError && <p className="text-warning">{aiError}</p>}
        </section>
      )}

      {!medicine ? (
        <div className="card border-warning/25 bg-warning-soft/40">
          <h2 className="font-headline text-2xl font-bold text-warning">Obat tidak ditemukan</h2>
          <p className="mt-3 text-muted">
            Demo lokal ini hanya mencakup Paracetamol, Ibuprofen, dan Cetirizine. Untuk detail obat,
            terutama keamanan, interaksi, alergi, atau pertanyaan terkait kehamilan, konsultasikan kepada dokter atau apoteker.
          </p>
        </div>
      ) : (
        <section className="grid gap-5 lg:grid-cols-12">
          <article className="card lg:col-span-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold uppercase text-primary">Kegunaan umum</span>
                <h2 className="mt-3 font-headline text-3xl font-bold">{medicine.name}</h2>
              </div>
              <Pill className="text-primary" size={38} />
            </div>
            <p className="mt-5 text-lg text-muted">{medicine.use}</p>
            <div className="mt-5 rounded-xl border-l-4 border-primary bg-surface-low p-4 text-sm text-muted">
              Tidak ada panduan dosis yang diberikan. Selalu ikuti label resmi dan nasihat profesional.
            </div>
          </article>

          <article className="card border-danger/15 bg-danger-soft/35 lg:col-span-5">
            <div className="flex items-center gap-2 text-danger">
              <AlertTriangle size={22} />
              <h3 className="font-headline text-xl font-bold">Peringatan keselamatan</h3>
            </div>
            <ul className="mt-4 space-y-3 text-muted">
              {medicine.warnings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card lg:col-span-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-secondary" size={22} />
              <h3 className="font-headline text-xl font-bold">Efek samping umum</h3>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {medicine.effects.map((effect) => (
                <div className="rounded-xl bg-surface-low p-3 text-center font-bold text-muted" key={effect}>
                  {effect}
                </div>
              ))}
            </div>
          </article>

          <article className="card bg-primary text-white lg:col-span-6">
            <div className="flex items-center gap-2">
              <Stethoscope size={24} />
              <h3 className="font-headline text-xl font-bold">Tanyakan kepada dokter atau apoteker</h3>
            </div>
            <p className="mt-4 text-white/90">
              Tanyakan kepada profesional sebelum memulai, menghentikan, menggabungkan, atau mengubah obat apa pun,
              terutama jika gejala berat atau Anda memiliki kondisi kesehatan tertentu.
            </p>
          </article>
        </section>
      )}
    </div>
  );
}

