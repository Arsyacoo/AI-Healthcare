# AI-Healthcare

AI-Healthcare adalah aplikasi frontend edukasi kesehatan berbasis React, Vite, Tailwind CSS, dan Gemini 2.5 Flash. Aplikasi ini membantu pengguna memahami gejala umum, keamanan obat, edukasi kesehatan, tips pencegahan, serta batasan penggunaan AI medis.

> AI-Healthcare hanya untuk edukasi umum. Aplikasi ini bukan alat diagnosis, bukan pengganti dokter, tidak memberi resep, tidak memberi dosis obat, dan tidak menangani kondisi darurat.

## Fitur Utama

- **Home**: ringkasan fitur utama dan CTA.
- **Symptom Guidance**: form gejala terstruktur, red-flag checker, mode literasi kesehatan, insight AI, feedback, dan panel transparansi.
- **AI Chat**: chat edukasi kesehatan dengan Gemini 2.5 Flash, red-flag checker, mode literasi kesehatan, feedback, dan fallback lokal.
- **Medication Safety**: informasi keamanan obat lokal dan AI untuk Paracetamol, Ibuprofen, Cetirizine, Amoxicillin, dan Omeprazole tanpa dosis.
- **Health Library**: halaman baru berisi artikel edukasi kesehatan dengan search, filter kategori, card grid, detail artikel, dan mode literasi.
- **Preventive Tips**: artikel pencegahan, checklist harian, progress, resume kebiasaan, pujian, dan saran lanjutan.
- **Disclaimer**: batasan medis dan pengingat kondisi darurat.
- **Multilingual Support**: toggle bahasa ID/EN untuk navigasi, label utama, alert, feedback, dan pesan keselamatan.
- **Prompt Transparency**: tombol “Mengapa jawaban ini muncul?” tanpa membuka system prompt penuh.
- **Feedback System**: feedback disimpan di localStorage dengan key `careguide_feedback`.

## Responsible AI Design

AI-Healthcare menerapkan beberapa prinsip keselamatan:

- Tidak memberikan diagnosis pasti.
- Tidak memberikan dosis obat.
- Tidak memberikan resep.
- Tidak menyarankan menghentikan atau mengganti obat.
- Tidak mengatakan “tidak perlu ke dokter”.
- Mengarahkan pengguna mencari bantuan medis segera jika ada red flag.
- Menampilkan disclaimer bahwa informasi hanya untuk edukasi umum.
- Menyediakan panel transparansi ringkas agar pengguna memahami dasar jawaban.

## Emergency Red Flags

Aplikasi mendeteksi kata seperti:

- nyeri dada
- sesak napas
- pingsan
- perdarahan berat
- kebingungan
- tidak sadar
- kejang
- batuk darah
- muntah darah
- chest pain
- difficulty breathing
- fainting
- severe bleeding
- confusion
- seizure

Jika terdeteksi, aplikasi menampilkan alert darurat berwarna merah.

## Cara Menjalankan Lokal

```bash
npm install
```

Salin environment:

```bash
cp .env.example .env.local
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Isi API key Gemini:

```env
VITE_GEMINI_API_KEY=api_key_gemini_anda
```

Jalankan aplikasi:

```bash
npm run dev
```

Buka:

```text
http://localhost:5173
```

## Build Production

```bash
npm run build
npm run preview
```

Untuk Lighthouse, gunakan production preview, bukan dev server.

## Struktur Folder

```text
.
|-- public
|   `-- favicon.svg
|-- src
|   |-- components
|   |   |-- EmergencyAlert.jsx
|   |   |-- FeedbackButtons.jsx
|   |   |-- HealthLiteracySelector.jsx
|   |   |-- LanguageToggle.jsx
|   |   `-- PromptTransparencyPanel.jsx
|   |-- contexts
|   |   |-- LanguageContext.jsx
|   |   `-- translations.js
|   |-- data
|   |   |-- healthLibraryData.js
|   |   |-- medicationData.js
|   |   `-- navigation.js
|   |-- pages
|   |   |-- AIChat.jsx
|   |   |-- HealthLibrary.jsx
|   |   |-- MedicationInfo.jsx
|   |   |-- PreventiveTips.jsx
|   |   `-- SymptomGuidance.jsx
|   |-- services
|   |   `-- gemini.js
|   |-- utils
|   |   `-- redFlags.js
|   |-- App.jsx
|   |-- main.jsx
|   `-- styles.css
`-- README.md
```

## Limitations

- Tidak menggunakan database.
- Tidak menggunakan backend tambahan.
- Data feedback hanya tersimpan di localStorage browser.
- API key Vite dapat terlihat di browser; untuk production sebaiknya gunakan backend/serverless proxy.
- Artikel Health Library adalah edukasi umum dan bukan pengganti konsultasi medis.
- Gemini dapat menghasilkan jawaban yang perlu diverifikasi oleh tenaga medis.

## Medical Disclaimer

AI-Healthcare menyediakan informasi kesehatan umum untuk tujuan edukasi. Informasi dapat tidak lengkap, tidak terbaru, atau tidak sesuai kondisi pribadi pengguna. Untuk gejala berat, memburuk, atau kondisi darurat seperti nyeri dada, sesak napas, pingsan, perdarahan berat, kebingungan, kejang, batuk darah, muntah darah, atau tidak sadar, segera cari bantuan medis profesional.
