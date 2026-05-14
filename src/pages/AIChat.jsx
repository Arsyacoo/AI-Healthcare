import { useState } from 'react';
import { Bot, Send, UserRound } from 'lucide-react';
import EmergencyAlert from '../components/EmergencyAlert.jsx';
import FeedbackButtons from '../components/FeedbackButtons.jsx';
import HealthLiteracySelector from '../components/HealthLiteracySelector.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PromptTransparencyPanel from '../components/PromptTransparencyPanel.jsx';
import FormattedText from '../components/FormattedText.jsx';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { askGemini, buildChatPrompt, geminiReady, getGeminiErrorMessage } from '../services/gemini.js';
import { detectRedFlags } from '../utils/redFlags.js';

function mockResponse(message, language) {
  const lower = message.toLowerCase();
  if (language === 'en') {
    let answer =
      `Summary:
- I can help with general education, but a few more details would make the guidance more useful.

Clarifying questions:
- Are there any other symptoms?
- How severe is the complaint on a 1-10 scale?
- Do you have any medication allergies?
- Before this started, did you take any food, drinks, medication, or supplements?
- Do you have any existing medical conditions or important health history?

What you can do:
- Note when symptoms started and whether they are improving or worsening.
- Avoid guessing a diagnosis and consult a medical professional if symptoms persist or worsen.

OTC options to ask about:
- Depending on the symptom, a pharmacist may discuss general over-the-counter options such as pain/fever relievers, allergy medicines, cough products, or oral rehydration products.
- Read the official label and ask a doctor or pharmacist first if pregnant, breastfeeding, giving medicine to a child, older, allergic, taking other medicines, or living with chronic conditions.`;

    if (lower.includes('fever') || lower.includes('demam')) {
      answer =
        `Summary:
- Fever can have many causes, so it should be viewed together with other symptoms and overall condition.

Clarifying questions:
- What was the last measured temperature and how long has the fever lasted?
- Is there cough, sore throat, rash, vomiting, diarrhea, pain when urinating, or shortness of breath?
- How uncomfortable does it feel on a 1-10 scale?
- Are there medication allergies or existing health conditions?
- Before the fever, did you eat, drink, take medication, or travel somewhere specific?

What you can do:
- Rest, drink enough fluids, and monitor temperature regularly.
- Seek medical help if fever is high, persistent, or comes with severe symptoms.

OTC options to ask about:
- A pharmacist may discuss fever or pain relievers such as paracetamol/acetaminophen or ibuprofen, depending on personal safety factors.
- Read the label and ask a professional first if there are liver, kidney, stomach, bleeding, heart conditions, pregnancy, allergies, or other medicines.`;
    } else if (lower.includes('cough') || lower.includes('batuk')) {
      answer =
        `Summary:
- Cough can be related to mild infection, allergy, irritation, reflux, or certain breathing conditions.

Clarifying questions:
- Is the cough dry or with phlegm?
- How long has it been going on?
- Is there fever, shortness of breath, chest pain, wheezing, or coughing blood?
- How disruptive is it on a 1-10 scale?
- Do you have medication allergies, asthma, or existing health conditions?

What you can do:
- Drink enough fluids, avoid smoke or irritants, and monitor whether the cough worsens.
- Seek urgent help if there is shortness of breath, chest pain, coughing blood, or worsening condition.

OTC options to ask about:
- Depending on the cough type, a pharmacist may discuss options such as expectorants, cough suppressants, lozenges, saline spray, or allergy medicines.
- Ask a professional first if the cough is in a child, lasts long, comes with fever or breathing trouble, or if there are chronic lung/heart conditions.`;
    } else if (lower.includes('medicine') || lower.includes('medication') || lower.includes('obat')) {
      answer =
        `Summary:
- Medication safety depends strongly on personal conditions and other medicines being used.

Clarifying questions:
- What is the medication name or active ingredient?
- Do you have medication allergies?
- Are you taking other medicines, supplements, or herbal products?
- Do you have kidney, liver, stomach, heart, asthma-related conditions, or pregnancy?
- What complaint are you hoping the medication will help?

What you can do:
- Check the official label and ask a doctor or pharmacist before using or combining medication.

OTC options to ask about:
- If the complaint is mild, ask a pharmacist which over-the-counter category or active ingredient fits the symptom and your safety profile.
- Avoid combining products with the same active ingredient, and do not use medicine longer than the official label recommends.`;
    }

    return `${answer} This information is for general education only and is not a substitute for professional medical advice.`;
  }

  const disclaimer = 'Informasi ini hanya untuk edukasi umum dan bukan pengganti nasihat medis profesional.';
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
- Hindari menebak diagnosis dan konsultasikan ke tenaga medis jika gejala menetap atau memburuk.

Opsi obat bebas untuk ditanyakan:
- Tergantung gejalanya, apoteker dapat menjelaskan opsi umum seperti obat nyeri/demam, obat alergi, produk batuk, atau cairan rehidrasi oral.
- Baca label resmi dan tanya dokter atau apoteker lebih dulu bila hamil, menyusui, untuk anak, lansia, alergi, memakai obat lain, atau punya penyakit kronis.`;

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
- Cari bantuan medis jika demam tinggi, menetap, atau disertai gejala berat.

Opsi obat bebas untuk ditanyakan:
- Apoteker dapat membahas pereda demam atau nyeri seperti paracetamol atau ibuprofen, tergantung faktor keamanan pribadi.
- Baca label dan tanya profesional dulu bila ada gangguan hati, ginjal, lambung, perdarahan, jantung, kehamilan, alergi, atau obat lain.`;
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
- Segera cari bantuan medis jika ada sesak napas, nyeri dada, batuk darah, atau kondisi memburuk.

Opsi obat bebas untuk ditanyakan:
- Tergantung jenis batuk, apoteker dapat membahas ekspektoran, penekan batuk, pelega tenggorokan, semprot saline, atau obat alergi.
- Tanya profesional dulu bila batuk terjadi pada anak, berlangsung lama, disertai demam/sesak, atau ada penyakit paru/jantung kronis.`;
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
- Periksa label resmi dan tanyakan kepada dokter atau apoteker sebelum memakai atau menggabungkan obat.

Opsi obat bebas untuk ditanyakan:
- Jika keluhannya ringan, tanyakan kepada apoteker kategori obat bebas atau bahan aktif yang cocok dengan gejala dan profil keamanan Anda.
- Hindari menggabungkan produk dengan bahan aktif sama, dan jangan memakai obat lebih lama dari anjuran label resmi.`;
  }

  return `${answer} ${disclaimer}`;
}

export default function AIChat() {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState(() => [
    {
      role: 'assistant',
      text: t('chat.starter', { disclaimer: t('common.disclaimer') }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [literacyMode, setLiteracyMode] = useState('simple');

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
      const response = await askGemini(buildChatPrompt(trimmed, messages, literacyMode, language));
      setMessages((current) => [...current, { role: 'assistant', text: response }]);
    } catch (apiError) {
      setError(getGeminiErrorMessage(apiError, t));
      setMessages((current) => [...current, { role: 'assistant', text: mockResponse(trimmed, language) }]);
      console.error(apiError);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-11rem)] flex-col">
      <PageHeader eyebrow={t('nav.chat')} title={t('chat.title')}>
      </PageHeader>

      <div className="mb-4"><HealthLiteracySelector value={literacyMode} onChange={setLiteracyMode} /></div>

      <section className="card flex flex-1 flex-col overflow-hidden p-0">
        <div className="border-b border-surface-border/70 bg-primary-soft/45 p-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white">
              <Bot size={23} />
            </div>
            <div>
              <h2 className="font-headline text-xl font-bold text-text">{t('chat.assistantName')}</h2>
              <p className="text-sm text-muted">
                {geminiReady ? t('chat.ready') : t('chat.local')}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
          {messages.map((message, index) => {
            if (message.role === 'user') {
              return (
                <div className="flex justify-end gap-3" key={`${message.role}-${index}`}>
                  <div className="max-w-[82%] rounded-2xl bg-primary p-4 text-sm leading-7 text-white sm:text-base">
                    {message.text}
                  </div>
                  <Avatar type="user" />
                </div>
              );
            }

            return (
              <div className="flex items-start gap-3" key={`${message.role}-${index}`}>
                <Avatar type="assistant" />
                <div className="flex w-full max-w-[82%] flex-col">
                  <div className="rounded-2xl bg-surface-low p-4 text-sm leading-7 text-muted sm:text-base">
                    <FormattedText text={message.text} />
                  </div>
                  {index > 0 && (
                    <div className="mt-3">
                      <PromptTransparencyPanel source="chat history + selected literacy mode + Gemini/local fallback + safety rules" />
                      <FeedbackButtons context={`ai-chat:${index}:${literacyMode}`} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {messages.map((message, index) => {
            const matches = message.role === 'user' ? detectRedFlags(message.text) : [];
            return matches.length > 0 ? <EmergencyAlert key={`alert-${index}`} matches={matches} /> : null;
          })}
          {isLoading && (
            <div className="flex gap-3">
              <Avatar type="assistant" />
              <div className="rounded-2xl bg-surface-low p-4 text-sm text-muted">{t('chat.loading')}</div>
            </div>
          )}
          {error && <p className="rounded-xl bg-warning-soft/50 p-3 text-sm text-warning">{error}</p>}
        </div>

        <form className="border-t border-surface-border/70 bg-surface-card p-3 sm:p-4" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              className="input"
              onChange={(event) => setInput(event.target.value)}
              placeholder={t('chat.placeholder')}
              value={input}
            />
            <button className="btn-primary shrink-0 px-4" type="submit" aria-label={t('chat.send')}>
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

