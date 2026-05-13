import { useMemo, useState } from 'react';
import { Bot, CheckCircle2, ClipboardList, HeartPulse } from 'lucide-react';
import EmergencyAlert from '../components/EmergencyAlert.jsx';
import FeedbackButtons from '../components/FeedbackButtons.jsx';
import FormattedText from '../components/FormattedText.jsx';
import HealthLiteracySelector from '../components/HealthLiteracySelector.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PromptTransparencyPanel from '../components/PromptTransparencyPanel.jsx';
import { askGemini, buildSymptomPrompt, geminiReady, getGeminiErrorMessage } from '../services/gemini.js';
import { detectRedFlags } from '../utils/redFlags.js';

const initialForm = {
  age: '',
  gender: '',
  symptom: '',
  duration: '',
  severity: 'Ringan',
  additional: '',
  condition: '',
};

function cleanOptionalValue(value) {
  const normalized = String(value || '').trim();
  const emptyMarkers = ['-', 'n/a', 'na', 'tidak ada', 'tidak', 'none', 'kosong'];

  return emptyMarkers.includes(normalized.toLowerCase()) ? '' : normalized;
}

function buildGuidance(form) {
  const symptom = form.symptom || 'gejala utama Anda';
  const additional = cleanOptionalValue(form.additional);
  const condition = cleanOptionalValue(form.condition);
  const text = `${form.symptom} ${additional}`;
  const redFlagMatches = detectRedFlags(text);
  const hasRedFlag = redFlagMatches.length > 0;

  return {
    hasRedFlag,
    redFlagMatches,
    summary: `${form.age ? `Usia ${form.age}, ` : ''}${form.gender ? `${form.gender}, ` : ''}${symptom} selama ${form.duration || 'durasi belum disebutkan'} dengan tingkat keparahan ${form.severity.toLowerCase()}.`,
    causes: [
      'Infeksi ringan sementara, iritasi, cedera kecil, dehidrasi, stres, atau faktor gaya hidup dapat berkontribusi pada banyak gejala umum.',
      'Kondisi kesehatan yang sudah ada, aktivitas terbaru, alergi, atau perubahan obat juga dapat memengaruhi gejala.',
    ],
    selfCare: [
      'Istirahat, cukup minum, dan pantau apakah gejala membaik, memburuk, atau berubah.',
      'Hindari aktivitas berat jika gejala terasa sedang atau berat.',
      'Gunakan informasi kesehatan tepercaya dan hubungi tenaga medis sebelum memakai obat baru.',
    ],
    doctor: [
      'Temui dokter jika gejala menetap, memburuk, berulang, atau mengganggu aktivitas harian.',
      'Cari saran profesional lebih cepat jika Anda sedang hamil, lanjut usia, memiliki daya tahan tubuh lemah, atau memiliki kondisi kesehatan penting.',
    ],
    emergency: [
      'Hubungi layanan darurat setempat untuk nyeri dada, sulit bernapas, pingsan, perdarahan berat, kebingungan, atau kehilangan kesadaran.',
      'Jangan gunakan aplikasi ini untuk menangani gejala darurat atau yang mengancam nyawa.',
    ],
    cleanedForm: {
      ...form,
      additional,
      condition,
    },
  };
}

export default function SymptomGuidance() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);
  const [aiInsight, setAiInsight] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const [literacyMode, setLiteracyMode] = useState('simple');
  const canSubmit = useMemo(() => form.age && form.symptom && form.duration, [form]);

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const guidance = buildGuidance(form);
    setResult(guidance);
    setAiInsight('');
    setAiError('');

    if (!geminiReady) {
      setAiError('API key Gemini belum tersedia. Panduan rule-based tetap ditampilkan.');
      return;
    }

    setIsAiLoading(true);
    try {
      const insight = await askGemini(buildSymptomPrompt(guidance.cleanedForm, guidance.summary, guidance.hasRedFlag, literacyMode));
      setAiInsight(insight);
    } catch (error) {
      setAiError(getGeminiErrorMessage(error));
      console.error(error);
    } finally {
      setIsAiLoading(false);
    }
  }

  return (
    <div>
      <PageHeader eyebrow="Panduan gejala" title="Cek gejala dengan edukasi terstruktur">
        Masukkan konteks dasar untuk menerima panduan rule-based.
        Hasil ini bukan diagnosis dan sebaiknya dibahas dengan tenaga medis bila diperlukan.
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <form className="card space-y-4" onSubmit={handleSubmit}>
          <HealthLiteracySelector value={literacyMode} onChange={setLiteracyMode} />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              Usia
              <input className="input" min="0" name="age" onChange={updateField} placeholder="mis. 32" type="number" value={form.age} />
            </label>
            <label className="field-label">
              Jenis kelamin opsional
              <select className="input" name="gender" onChange={updateField} value={form.gender}>
                <option value="">Tidak ingin menyebutkan</option>
                <option>Perempuan</option>
                <option>Laki-laki</option>
                <option>Lainnya</option>
              </select>
            </label>
          </div>
          <label className="field-label">
            Gejala utama
            <input className="input" name="symptom" onChange={updateField} placeholder="mis. batuk, demam, sakit kepala" value={form.symptom} />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              Durasi gejala
              <input className="input" name="duration" onChange={updateField} placeholder="mis. 3 hari" value={form.duration} />
            </label>
            <label className="field-label">
              Tingkat keparahan
              <select className="input" name="severity" onChange={updateField} value={form.severity}>
                <option>Ringan</option>
                <option>Sedang</option>
                <option>Berat</option>
              </select>
            </label>
          </div>
          <label className="field-label">
            Gejala tambahan
            <textarea className="input min-h-28" name="additional" onChange={updateField} placeholder="Tuliskan gejala lain atau tanda bahaya bila ada" value={form.additional} />
          </label>
          <label className="field-label">
            Kondisi kesehatan yang sudah ada opsional
            <input className="input" name="condition" onChange={updateField} placeholder="mis. asma, diabetes" value={form.condition} />
          </label>
          <button className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50" disabled={!canSubmit} type="submit">
            Dapatkan Panduan
          </button>
        </form>

        <section className="space-y-4">
          {result?.hasRedFlag && <EmergencyAlert matches={result.redFlagMatches} />}

          <div className="card min-h-[500px]">
            {!result ? (
              <div className="grid h-full place-items-center text-center">
                <div>
                  <ClipboardList className="mx-auto text-primary" size={48} />
                  <h2 className="mt-4 font-headline text-2xl font-bold">Panduan Anda akan muncul di sini</h2>
                  <p className="mt-2 max-w-md text-muted">
                    Lengkapi form untuk melihat ringkasan edukatif lokal, ide perawatan mandiri yang aman, dan tanda bahaya.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="rounded-xl bg-primary-soft/60 p-4">
                  <div className="flex items-center gap-2 font-bold text-primary">
                    <HeartPulse size={20} />
                    Ringkasan gejala
                  </div>
                  <p className="mt-2 text-muted">{result.summary}</p>
                  {result.cleanedForm.condition && <p className="mt-1 text-sm text-muted">Kondisi kesehatan dicatat: {result.cleanedForm.condition}</p>}
                </div>
                <ResultList title="Kemungkinan penyebab umum" items={result.causes} />
                <ResultList title="Saran perawatan mandiri yang aman" items={result.selfCare} />
                <ResultList title="Kapan perlu ke dokter" items={result.doctor} />
                <ResultList title="Tanda bahaya darurat" items={result.emergency} danger />
                <PromptTransparencyPanel source="local symptom rules + red flag keyword checker" />
                <FeedbackButtons context="symptom-guidance-local" />
                {(isAiLoading || aiInsight || aiError) && (
                  <div className="rounded-xl border border-primary/15 bg-primary-soft/35 p-4">
                    <div className="mb-2 flex items-center gap-2 font-bold text-primary">
                      <Bot size={20} />
                      Insight AI Gemini
                    </div>
                    {isAiLoading && <p className="text-muted">Gemini sedang menyusun insight edukatif...</p>}
                    {aiInsight && <FormattedText text={aiInsight} />}
                    {aiInsight && <PromptTransparencyPanel source="symptom form + red flag checker + selected literacy mode + Gemini" />}
                    {aiInsight && <FeedbackButtons context={`symptom-guidance:${literacyMode}`} />}
                    {aiError && <p className="text-sm text-warning">{aiError}</p>}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

function ResultList({ title, items, danger = false }) {
  return (
    <div>
      <h3 className={`font-headline text-lg font-bold ${danger ? 'text-danger' : 'text-text'}`}>{title}</h3>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li className="flex gap-2 text-muted" key={item}>
            <CheckCircle2 className={danger ? 'text-danger' : 'text-secondary'} size={18} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

