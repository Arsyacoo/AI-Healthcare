const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL = 'gemini-2.5-flash';
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const medicalSafetyInstruction = `
Anda adalah AI-Healthcare, asisten edukasi kesehatan umum dalam bahasa Indonesia.
Aturan wajib:
- Jangan memberikan diagnosis pasti.
- Jangan memberikan resep obat.
- Jangan memberikan dosis obat.
- Jangan menggantikan dokter, apoteker, atau tenaga medis.
- Boleh menyebut opsi obat bebas atau bahan aktif umum sebagai edukasi, tetapi jangan menyuruh pengguna meminumnya, jangan memilihkan satu obat personal, dan jangan memberi dosis.
- Saat menyebut opsi obat bebas, wajib sertakan peringatan untuk membaca label resmi dan bertanya ke dokter/apoteker, terutama bila hamil, menyusui, anak, lansia, alergi obat, memakai obat lain, atau punya penyakit bawaan.
- Gunakan gaya profesional seperti skrining awal tenaga kesehatan: empatik, tenang, jelas, dan terstruktur.
- Untuk Chat AI percakapan, ajukan pertanyaan klarifikasi yang relevan sebelum memberi saran umum.
- Pertanyaan klarifikasi utama untuk Chat AI: apakah ada gejala lain, skala nyeri/keluhan 1-10, ada alergi obat, sebelum sakit mengonsumsi makanan/minuman/obat apa, ada penyakit bawaan, sejak kapan mulai, apakah memburuk, dan apakah sudah minum obat apa pun.
- Jika ada tanda bahaya seperti nyeri dada, sesak napas, pingsan, perdarahan berat, kebingungan, atau tidak sadar, arahkan pengguna mencari bantuan medis darurat.
- Jika prompt adalah hasil form Panduan Gejala satu arah, jangan buat bagian pertanyaan klarifikasi.
- Selalu sertakan kalimat: "Informasi ini hanya untuk edukasi umum dan bukan pengganti nasihat medis profesional."
`;

export const geminiReady = Boolean(API_KEY);

function cleanPromptValue(value) {
  const normalized = String(value || '').trim();
  const emptyMarkers = ['-', 'n/a', 'na', 'tidak ada', 'tidak', 'none', 'kosong'];

  return emptyMarkers.includes(normalized.toLowerCase()) ? '' : normalized;
}

export async function askGemini(prompt) {
  if (!API_KEY) {
    throw new Error('API key Gemini belum tersedia. Isi VITE_GEMINI_API_KEY di .env.local.');
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': API_KEY,
    },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: medicalSafetyInstruction }],
      },
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0.35,
        topP: 0.9,
        maxOutputTokens: 1400,
        responseMimeType: 'text/plain',
        thinkingConfig: {
          thinkingBudget: 512,
        },
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Gemini API gagal (${response.status}): ${errorBody}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.map((part) => part.text).join('\n').trim();

  if (!text) {
    throw new Error('Gemini tidak mengembalikan teks.');
  }

  return text;
}

export function getGeminiErrorMessage(error, t = null) {
  const message = error instanceof Error ? error.message : String(error);
  const translate = (key) => (t ? t(key) : null);

  if (message.includes('403')) {
    return translate('gemini.forbidden') || 'Gemini menolak request. Periksa apakah API key aktif, Gemini API sudah enabled, billing/quota tersedia, dan restriction key mengizinkan localhost.';
  }

  if (message.includes('429')) {
    return translate('gemini.rateLimit') || 'Kuota atau rate limit Gemini sedang habis/terlalu sering dipakai. Coba lagi beberapa saat.';
  }

  if (message.includes('400')) {
    return translate('gemini.badRequest') || 'Format request ke Gemini tidak diterima. Periksa konfigurasi model dan payload.';
  }

  if (message.includes('Failed to fetch') || message.includes('NetworkError')) {
    return translate('gemini.network') || 'Browser gagal menghubungi Gemini. Ini bisa terjadi karena koneksi, CORS, extension browser, atau restriction API key.';
  }

  if (message.includes('API key Gemini belum tersedia')) {
    return translate('gemini.apiMissing') || message;
  }

  return translate('gemini.fallback') || 'Gemini belum bisa dihubungi. Menampilkan respons lokal sementara.';
}

function literacyInstruction(mode, language = 'id') {
  if (language === 'en') {
    const map = {
      simple: 'Use simple language, short sentences, and avoid technical terms.',
      detailed: 'Give a more detailed explanation while staying safe and avoiding diagnosis.',
      parents: 'Use a parent or caregiver perspective and mention child/family observations when relevant.',
      elderly: 'Use a calm, clear, older-adult-friendly style. Emphasize caution with sudden changes.',
    };
    return map[mode] || map.simple;
  }

  const map = {
    simple: 'Gunakan bahasa sederhana, kalimat pendek, dan hindari istilah teknis.',
    detailed: 'Berikan penjelasan lebih rinci namun tetap aman dan tidak mendiagnosis.',
    parents: 'Gunakan sudut pandang orang tua atau caregiver, sebutkan observasi anak/keluarga bila relevan.',
    elderly: 'Gunakan bahasa tenang, jelas, dan ramah lansia. Tekankan kehati-hatian pada perubahan mendadak.',
  };
  return map[mode] || map.simple;
}

export function buildChatPrompt(message, history = [], literacyMode = 'simple', language = 'id') {
  const recentHistory = history
    .slice(-8)
    .map((item) => `${item.role === 'user' ? (language === 'en' ? 'User' : 'Pengguna') : 'AI-Healthcare'}: ${item.text}`)
    .join('\n');

  if (language === 'en') {
    return `
Conversation history:
${recentHistory || 'No history yet.'}

User question:
${message}

Answer concisely, empathetically, and practically in English.
Health literacy mode: ${literacyMode}. ${literacyInstruction(literacyMode, language)}
Use this structure, but only include the "Clarifying questions" section when important information is still missing:
Summary:
- 1 to 2 main sentences.

Clarifying questions:
- Only ask 1 to 3 unanswered questions that are truly needed.
- Do not repeat questions already answered in the conversation history.
- If the user already gave enough context, omit this section entirely.

What you can do:
- Short and safe bullet.
- Short and safe bullet.

OTC options to ask about:
- Mention general over-the-counter categories or active ingredients that are commonly discussed for the symptom, when relevant.
- Do not tell the user to take a specific medicine. Do not provide dosage or personalized instructions.
- Remind the user to read the official label and ask a doctor or pharmacist, especially with pregnancy, breastfeeding, children, older age, allergies, existing conditions, or other medicines.

When to see a doctor:
- Short bullet.

Warning signs:
- Short bullet for emergency conditions if relevant.

Do not write long paragraphs. Do not use tables. Do not give a definite diagnosis.
If the user has already provided some information, do not repeat every question; choose only the unanswered questions that are most relevant, or omit the clarifying section entirely when enough context exists.
`;
  }

  return `
Riwayat percakapan:
${recentHistory || 'Belum ada riwayat.'}

Pertanyaan pengguna:
${message}

Jawab ringkas, empatik, dan praktis dalam bahasa Indonesia.
Mode literasi kesehatan: ${literacyMode}. ${literacyInstruction(literacyMode, language)}
Gunakan struktur ini, tetapi tampilkan bagian "Pertanyaan klarifikasi" hanya jika masih ada informasi penting yang belum dijawab:
Ringkasan:
- 1 sampai 2 kalimat utama.

Pertanyaan klarifikasi:
- Tanyakan hanya 1 sampai 3 hal yang benar-benar masih belum jelas.
- Jangan ulangi pertanyaan yang sudah dijawab dalam riwayat percakapan.
- Jika konteks sudah cukup, hilangkan bagian ini sepenuhnya.

Yang bisa dilakukan:
- Poin singkat dan aman.
- Poin singkat dan aman.

Opsi obat bebas untuk ditanyakan:
- Sebutkan kategori obat bebas atau bahan aktif umum yang sering dibahas untuk gejala tersebut, jika relevan.
- Jangan menyuruh pengguna minum obat tertentu. Jangan berikan dosis atau instruksi penggunaan personal.
- Ingatkan pengguna membaca label resmi dan bertanya ke dokter/apoteker, terutama bila hamil, menyusui, anak, lansia, alergi obat, memiliki penyakit bawaan, atau memakai obat lain.

Kapan perlu ke dokter:
- Poin singkat.

Tanda bahaya:
- Poin singkat untuk kondisi darurat bila relevan.

Jangan membuat paragraf panjang. Jangan gunakan tabel. Jangan gunakan diagnosis pasti.
Jika pengguna sudah memberikan sebagian informasi, jangan ulangi semua pertanyaan; pilih hanya pertanyaan yang masih belum terjawab dan paling relevan, atau hilangkan bagian pertanyaan klarifikasi jika konteks sudah cukup.
`;
}

export function buildSymptomPrompt(form, ruleSummary, hasRedFlag, literacyMode = 'simple', language = 'id') {
  const additional = cleanPromptValue(form.additional);
  const condition = cleanPromptValue(form.condition);

  if (language === 'en') {
    return `
Create patient-friendly educational symptom insight based on the following data. Health literacy mode: ${literacyMode}. ${literacyInstruction(literacyMode, language)}
- Age: ${form.age || 'not provided'}
- Gender: ${form.gender || 'not provided'}
- Main symptom: ${form.symptom || 'not provided'}
- Duration: ${form.duration || 'not provided'}
- Severity: ${form.severity || 'not provided'}
- Additional symptoms: ${additional || 'not provided'}
- Existing health conditions: ${condition || 'not provided'}
- Rule-based summary: ${ruleSummary}
- Red flags detected: ${hasRedFlag ? 'yes' : 'no'}

Use exactly this format. Do not write an opening sentence like "Sure" or "Here is". Do not include "Clarifying questions". Do not use numbering. Do not write long paragraphs.

Summary:
- 1 short sentence about the main complaint and important factors.

Possible common causes:
- Up to 4 common possibilities.
- Each bullet must be short and must not sound like a definite diagnosis.

Safe self-care:
- Up to 5 bullets.
- Focus on safe steps, observation, rest, and when to stop self-care.

When to see a doctor:
- Up to 4 bullets.
- If there is diabetes history or severe complaint, calmly suggest earlier medical evaluation.

Warning signs:
- Up to 5 warning signs that need urgent help.

Each bullet must be at most 1 sentence. Do not provide medication dosage. Do not give a definite diagnosis. Do not add clarifying questions. End with the required disclaimer.
`;
  }

  return `
Buat insight edukasi gejala yang nyaman dibaca pasien berdasarkan data berikut. Mode literasi kesehatan: ${literacyMode}. ${literacyInstruction(literacyMode, language)}
- Usia: ${form.age || 'tidak disebutkan'}
- Jenis kelamin: ${form.gender || 'tidak disebutkan'}
- Gejala utama: ${form.symptom || 'tidak disebutkan'}
- Durasi: ${form.duration || 'tidak disebutkan'}
- Tingkat keparahan: ${form.severity || 'tidak disebutkan'}
- Gejala tambahan: ${additional || 'tidak disebutkan'}
- Kondisi kesehatan yang sudah ada: ${condition || 'tidak disebutkan'}
- Ringkasan rule-based: ${ruleSummary}
- Tanda bahaya terdeteksi: ${hasRedFlag ? 'ya' : 'tidak'}

Gunakan persis format berikut. Jangan tulis kalimat pembuka seperti "Tentu" atau "Berikut". Jangan gunakan bagian "Pertanyaan klarifikasi". Jangan gunakan numbering 1, 2, 3. Jangan membuat paragraf panjang.

Ringkasan:
- 1 kalimat singkat tentang keluhan utama dan faktor penting.


Kemungkinan penyebab umum:
- Maksimal 4 kemungkinan umum.
- Setiap poin harus singkat dan tidak terdengar seperti diagnosis pasti.

Perawatan mandiri yang aman:
- Maksimal 5 poin.
- Fokus pada langkah aman, observasi, istirahat, dan kapan harus berhenti mencoba perawatan mandiri.

Kapan perlu ke dokter:
- Maksimal 4 poin.
- Karena ada riwayat diabetes atau keluhan berat, sarankan evaluasi dokter lebih cepat dengan bahasa tenang.

Tanda bahaya:
- Maksimal 5 poin tanda bahaya yang perlu pertolongan segera.

Setiap bullet maksimal 1 kalimat. Jangan memberikan dosis obat. Jangan diagnosis pasti. Jangan menambahkan bagian pertanyaan klarifikasi. Akhiri dengan disclaimer wajib.
`;
}

export function buildMedicationPrompt(query, language = 'id') {
  if (language === 'en') {
    return `
Provide general educational information about this medication or active ingredient: "${query}".

Answer format:
General use:
Common side effects:
Safety warnings:
When to ask a doctor or pharmacist:

Do not provide dosage, prescriptions, or personalized usage instructions.
If the medication name is unclear, explain that the user needs to confirm the medication name with a doctor or pharmacist.
`;
  }

  return `
Berikan informasi edukatif umum tentang obat atau bahan aktif berikut: "${query}".

Format jawaban:
Kegunaan umum:
Efek samping umum:
Peringatan keselamatan:
Kapan perlu bertanya ke dokter atau apoteker:

Jangan memberikan dosis, resep, atau instruksi penggunaan personal.
Jika nama obat tidak jelas, jelaskan bahwa pengguna perlu memastikan nama obat ke dokter atau apoteker.
`;
}

export function buildHealthLibraryPrompt(topic, literacyMode = 'simple', language = 'id') {
  if (language === 'en') {
    return `
Create a general health education article about: "${topic}".
Health literacy mode: ${literacyMode}. ${literacyInstruction(literacyMode, language)}

Use exactly this format:
Summary:
- 1 short sentence explaining the topic.

Key points:
- 3 short educational points.

Rules:
- Do not write any opening sentence before "Summary:".
- Do not use bold markdown, numbering, tables, or decorative symbols.
- Every content line after a heading must start with "- ".
- Each bullet must be one short sentence.
- Use only the "Summary" and "Key points" sections.
- Do not provide a definite diagnosis.
- Do not provide medication dosage, prescriptions, or personalized treatment.
- If the topic is unclear, explain that the user should use a clearer health topic.
- Keep bullets short and patient-friendly.
- End with the required disclaimer.
`;
  }

  return `
Buat artikel edukasi kesehatan umum tentang: "${topic}".
Mode literasi kesehatan: ${literacyMode}. ${literacyInstruction(literacyMode, language)}

Gunakan persis format berikut:
Ringkasan:
- 1 kalimat singkat yang menjelaskan topik.

Poin penting:
- 3 poin edukasi singkat.

Aturan:
- Jangan tulis kalimat pembuka sebelum "Ringkasan:".
- Jangan gunakan markdown tebal, numbering, tabel, atau simbol dekoratif.
- Setiap baris isi setelah heading harus diawali "- ".
- Setiap bullet maksimal 1 kalimat pendek.
- Gunakan hanya bagian "Ringkasan" dan "Poin penting".
- Jangan memberikan diagnosis pasti.
- Jangan memberikan dosis obat, resep, atau terapi personal.
- Jika topik tidak jelas, jelaskan bahwa pengguna perlu memakai topik kesehatan yang lebih spesifik.
- Buat bullet singkat dan nyaman dibaca pasien.
- Akhiri dengan disclaimer wajib.
`;
}





