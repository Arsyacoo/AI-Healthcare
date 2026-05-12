import { AlertTriangle, Ban, FileWarning, Siren, Stethoscope } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import InfoCard from '../components/InfoCard.jsx';

const items = [
  {
    title: 'Bukan alat diagnosis',
    icon: FileWarning,
    text: 'AI-Healtcare menyediakan edukasi kesehatan umum dan tidak dapat memastikan kondisi medis Anda.',
  },
  {
    title: 'Bukan pengganti dokter',
    icon: Stethoscope,
    text: 'Tenaga kesehatan berlisensi harus mengevaluasi gejala, risiko, dan kebutuhan perawatan pribadi.',
  },
  {
    title: 'Tidak memberikan resep',
    icon: Ban,
    text: 'Aplikasi ini tidak meresepkan obat, merekomendasikan dosis obat, atau mengubah rencana perawatan.',
  },
  {
    title: 'Tidak menangani kondisi darurat',
    icon: Siren,
    text: 'Untuk gejala darurat, hubungi layanan darurat setempat atau kunjungi instalasi gawat darurat terdekat.',
  },
];

export default function Disclaimer() {
  return (
    <div>
      <PageHeader eyebrow="Disclaimer medis" title="AI-Healtcare hanya untuk edukasi kesehatan umum">
        Mohon baca ini sebelum menggunakan halaman panduan gejala, chat, informasi obat, atau tips pencegahan.
      </PageHeader>

      <section className="mb-6 rounded-xl border border-danger/25 bg-danger-soft p-5 text-danger">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 shrink-0" size={24} />
          <p>
            Jika Anda mengalami nyeri dada, sulit bernapas, pingsan, perdarahan berat, kebingungan,
            kehilangan kesadaran, atau kondisi yang mengancam nyawa, segera cari bantuan medis darurat.
          </p>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2">
        {items.map((item) => (
          <InfoCard key={item.title} icon={item.icon} title={item.title} tone="danger">
            <p>{item.text}</p>
          </InfoCard>
        ))}
      </section>

      <section className="card mt-6">
        <h2 className="font-headline text-2xl font-bold">Ruang lingkup informasi</h2>
        <p className="mt-3 text-muted">
          Semua respons dibuat secara lokal untuk tujuan demonstrasi dan edukasi. Informasi dapat
          tidak lengkap, sudah tidak terbaru, atau tidak sesuai dengan kondisi Anda. Selalu konsultasikan
          kepada dokter, apoteker, perawat, atau profesional berkualifikasi lain untuk nasihat medis pribadi.
        </p>
      </section>
    </div>
  );
}
