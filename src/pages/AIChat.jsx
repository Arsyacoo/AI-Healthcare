import { useState } from 'react';
import { Bot, Send, UserRound } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import FormattedText from '../components/FormattedText.jsx';
import { askGemini, buildChatPrompt, geminiReady, getGeminiErrorMessage } from '../services/gemini.js';

const disclaimer = 'Informasi ini hanya untuk edukasi umum dan bukan pengganti nasihat medis profesional.';

const starterMessages = [
  {
    role: 'assistant',
    text: `Halo, saya AI-Healthcare. Ajukan pertanyaan edukasi kesehatan umum dan saya akan menjawab dengan pengingat keselamatan. ${disclaimer}`,
  },
];

function mockResponse(message) {
  const lower = message.toLowerCase();
  let answer =
    `Ringkasan:
- Saya dapat membantu memberi edukasi umum, tetapi perlu beberapa informasi tambahan agar panduannya lebih tepat.

Pertanyaan klarifikasi:
- Apakah ada gejala lain yang menyertai?
- Seberapa berat keluhannya dalam skala 1-10?
- Apakah ada alergi obat?
- Sebelum keluhan muncul, apakah mengonsumsi makanan, minuman, obat, atau suplemen tertentu?
- Apakah ada penyakit bawaan atau riwayat kesehatan penting?

Yang bisa dilakukan:
- Catat kapan gejala mulai muncul dan apakah membaik atau memburuk.
- Hindari menebak diagnosis dan konsultasikan ke tenaga medis jika gejala menetap atau memburuk.`;

  if (lower.includes('fever') || lower.includes('demam')) {
    answer =
      `Ringkasan:
- Demam dapat terjadi karena banyak penyebab, sehingga perlu dilihat bersama gejala lain dan kondisi tubuh.

Pertanyaan klarifikasi:
- Suhu tubuh terakhir berapa dan sudah berapa lama demam?
- Apakah ada batuk, nyeri tenggorokan, ruam, muntah, diare, nyeri saat buang air kecil, atau sesak?
- Skala rasa tidak nyaman 1-10 berapa?
- Apakah ada alergi obat atau penyakit bawaan?
- Sebelum demam, apakah mengonsumsi makanan, minuman, obat, atau bepergian ke tempat tertentu?

Yang bisa dilakukan:
- Istirahat, cukup minum, dan pantau suhu secara berkala.
- Cari bantuan medis jika demam tinggi, menetap, atau disertai gejala berat.`;
  } else if (lower.includes('cough') || lower.includes('batuk')) {
    answer =
      `Ringkasan:
- Batuk dapat berkaitan dengan infeksi ringan, alergi, iritasi, refluks, atau kondisi napas tertentu.

Pertanyaan klarifikasi:
- Batuknya kering atau berdahak?
- Sudah berapa lama batuk berlangsung?
- Apakah ada demam, sesak napas, nyeri dada, mengi, atau batuk darah?
- Skala gangguan 1-10 berapa?
- Apakah ada alergi obat, asma, atau penyakit bawaan?

Yang bisa dilakukan:
- Cukup minum, hindari asap/iritan, dan pantau apakah batuk memburuk.
- Segera cari bantuan medis jika ada sesak napas, nyeri dada, batuk darah, atau kondisi memburuk.`;
  } else if (lower.includes('medicine') || lower.includes('obat')) {
    answer =
      `Ringkasan:
- Untuk pertanyaan obat, keamanan sangat bergantung pada kondisi pribadi dan obat lain yang sedang digunakan.

Pertanyaan klarifikasi:
- Nama obat atau bahan aktifnya apa?
- Apakah ada alergi obat?
- Apakah sedang mengonsumsi obat, suplemen, atau jamu lain?
- Apakah ada penyakit bawaan seperti gangguan ginjal, hati, lambung, jantung, asma, atau kehamilan?
- Keluhan apa yang ingin dibantu oleh obat tersebut?

Yang bisa dilakukan:
- Periksa label resmi dan tanyakan kepada dokter atau apoteker sebelum memakai atau menggabungkan obat.`;
  }

  return `${answer} ${disclaimer}`;
}

export default function AIChat() {
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const nextMessages = [...messages, { role: 'user', text: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);
    setError('');

    try {
      const response = await askGemini(buildChatPrompt(trimmed, messages));
      setMessages((current) => [...current, { role: 'assistant', text: response }]);
    } catch (apiError) {
      setError(getGeminiErrorMessage(apiError));
      setMessages((current) => [...current, { role: 'assistant', text: mockResponse(trimmed) }]);
      console.error(apiError);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-11rem)] flex-col">
      <PageHeader eyebrow="Chat AI" title="Ajukan pertanyaan edukasi kesehatan umum">
      </PageHeader>

      <section className="card flex flex-1 flex-col overflow-hidden p-0">
        <div className="border-b border-surface-border/70 bg-primary-soft/45 p-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white">
              <Bot size={23} />
            </div>
            <div>
              <h2 className="font-headline text-xl font-bold text-text">Asisten AI-Healthcare</h2>
              <p className="text-sm text-muted">
                {geminiReady ? 'Gemini 2.5 Flash aktif' : 'Mode lokal, API key belum tersedia'}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
          {messages.map((message, index) => (
            <div className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`} key={`${message.role}-${index}`}>
              {message.role === 'assistant' && <Avatar type="assistant" />}
              <div className={`max-w-[82%] rounded-2xl p-4 text-sm leading-7 sm:text-base ${message.role === 'user' ? 'bg-primary text-white' : 'bg-surface-low text-muted'}`}>
                {message.role === 'assistant' ? <FormattedText text={message.text} /> : message.text}
              </div>
              {message.role === 'user' && <Avatar type="user" />}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <Avatar type="assistant" />
              <div className="rounded-2xl bg-surface-low p-4 text-sm text-muted">AI-Healthcare sedang menyusun jawaban...</div>
            </div>
          )}
          {error && <p className="rounded-xl bg-warning-soft/50 p-3 text-sm text-warning">{error}</p>}
        </div>

        <form className="border-t border-surface-border/70 bg-surface-card p-3 sm:p-4" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              className="input"
              onChange={(event) => setInput(event.target.value)}
              placeholder="Tanyakan edukasi kesehatan umum..."
              value={input}
            />
            <button className="btn-primary shrink-0 px-4" type="submit" aria-label="Kirim pesan">
              <Send size={20} />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

function Avatar({ type }) {
  const Icon = type === 'assistant' ? Bot : UserRound;
  return (
    <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${type === 'assistant' ? 'bg-secondary-soft text-secondary' : 'bg-primary-soft text-primary'}`}>
      <Icon size={18} />
    </div>
  );
}

