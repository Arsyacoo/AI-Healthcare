# AI-Healthcare

AI-Healthcare adalah aplikasi frontend untuk edukasi kesehatan umum berbasis React, Vite, Tailwind CSS, dan Gemini 2.5 Flash. Aplikasi ini membantu pengguna memahami gejala umum, bertanya lewat chat AI, mencari informasi obat, membaca tips pencegahan, dan memahami batasan penggunaan melalui disclaimer medis.

> Catatan medis: AI-Healthcare hanya untuk edukasi umum. Aplikasi ini bukan alat diagnosis, bukan pengganti dokter, tidak memberikan resep, tidak memberikan dosis obat, dan tidak menangani kondisi darurat.

## Fitur Utama

- Beranda modern dengan ringkasan layanan dan CTA.
- Panduan Gejala dengan form terstruktur, red-flag checker, dan insight AI.
- Chat AI menggunakan Gemini 2.5 Flash dengan fallback lokal.
- Info Obat untuk informasi umum Paracetamol, Ibuprofen, Cetirizine, dan pencarian AI.
- Tips Pencegahan interaktif dengan artikel, checklist harian, progress, dan resume kebiasaan.
- Disclaimer medis lengkap.
- Sidebar desktop dan bottom navigation mobile.
- Pencarian cepat dan panel bantuan di top bar.
- State halaman tetap tersimpan saat berpindah menu.
- Tanpa database dan tanpa backend.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Gemini 2.5 Flash API
- Lucide React Icons

## Cara Menjalankan Lokal

1. Install dependency:

```bash
npm install
```

2. Salin file environment:

```bash
cp .env.example .env.local
```

Di Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

3. Isi API key Gemini di `.env.local`:

```env
VITE_GEMINI_API_KEY=api_key_gemini_anda
```

4. Jalankan development server:

```bash
npm run dev
```

Buka URL yang ditampilkan Vite, biasanya:

```text
http://localhost:5173
```

## Build Production

```bash
npm run build
npm run preview
```

Untuk audit Lighthouse, gunakan mode production preview, bukan `npm run dev`.

## Struktur Folder

```text
.
|-- public
|   `-- favicon.svg
|-- src
|   |-- components
|   |-- data
|   |-- pages
|   |-- services
|   |   `-- gemini.js
|   |-- App.jsx
|   |-- main.jsx
|   `-- styles.css
|-- index.html
|-- package.json
|-- tailwind.config.js
|-- vite.config.js
`-- README.md
```

## Keamanan API Key

Aplikasi ini saat ini berjalan frontend-only. API key Vite yang digunakan di browser dapat terlihat oleh pengguna. Untuk deployment production, sebaiknya pindahkan pemanggilan Gemini ke backend atau serverless function agar API key tidak terekspos.

## Disclaimer Medis

AI-Healthcare menyediakan informasi kesehatan umum untuk tujuan edukasi. Informasi dari aplikasi ini dapat tidak lengkap, tidak terbaru, atau tidak sesuai dengan kondisi pribadi pengguna. Untuk keluhan berat, gejala yang memburuk, atau kondisi darurat seperti nyeri dada, sesak napas, pingsan, perdarahan berat, kebingungan, atau tidak sadar, segera cari bantuan medis profesional.

