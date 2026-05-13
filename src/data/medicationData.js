export const medicationData = {
  paracetamol: {
    name: 'Paracetamol',
    generalUse: {
      id: 'Umumnya digunakan untuk edukasi seputar nyeri ringan dan demam.',
      en: 'Commonly discussed for general education around mild pain and fever.',
    },
    commonSideEffects: {
      id: ['Mual', 'Ruam', 'Reaksi alergi pada sebagian orang'],
      en: ['Nausea', 'Rash', 'Allergic reactions in some people'],
    },
    safetyWarnings: {
      id: ['Hindari memakai beberapa produk dengan bahan aktif yang sama.', 'Perlu hati-hati pada gangguan hati atau konsumsi alkohol berat.'],
      en: ['Avoid using multiple products with the same active ingredient.', 'Use caution with liver problems or heavy alcohol use.'],
    },
    carefulGroups: {
      id: ['Penyakit hati', 'Konsumsi alkohol berat', 'Alergi obat sebelumnya'],
      en: ['Liver disease', 'Heavy alcohol use', 'Previous medication allergy'],
    },
  },
  ibuprofen: {
    name: 'Ibuprofen',
    generalUse: {
      id: 'NSAID yang umum dibahas untuk nyeri, peradangan, dan demam.',
      en: 'An NSAID commonly discussed for pain, inflammation, and fever.',
    },
    commonSideEffects: {
      id: ['Gangguan lambung', 'Nyeri ulu hati', 'Pusing'],
      en: ['Stomach upset', 'Heartburn', 'Dizziness'],
    },
    safetyWarnings: {
      id: ['Dapat tidak cocok untuk kondisi lambung, ginjal, jantung, atau perdarahan.', 'Tanyakan ke profesional bila hamil atau memakai pengencer darah.'],
      en: ['May not be suitable with stomach, kidney, heart, or bleeding conditions.', 'Ask a professional if pregnant or taking blood thinners.'],
    },
    carefulGroups: {
      id: ['Riwayat maag berat', 'Gangguan ginjal', 'Penyakit jantung', 'Pengencer darah'],
      en: ['History of severe stomach ulcers', 'Kidney problems', 'Heart disease', 'Blood thinners'],
    },
  },
  cetirizine: {
    name: 'Cetirizine',
    generalUse: {
      id: 'Antihistamin yang umum digunakan untuk edukasi gejala alergi.',
      en: 'An antihistamine commonly discussed for allergy symptoms.',
    },
    commonSideEffects: {
      id: ['Mengantuk', 'Mulut kering', 'Lelah'],
      en: ['Drowsiness', 'Dry mouth', 'Fatigue'],
    },
    safetyWarnings: {
      id: ['Berhati-hati sebelum mengemudi bila mengantuk.', 'Tanyakan ke profesional bila memiliki penyakit ginjal atau memakai obat sedatif.'],
      en: ['Use caution before driving if drowsy.', 'Ask a professional if you have kidney disease or use sedating medication.'],
    },
    carefulGroups: {
      id: ['Gangguan ginjal', 'Pekerjaan yang butuh kewaspadaan tinggi', 'Penggunaan obat sedatif'],
      en: ['Kidney problems', 'Work requiring high alertness', 'Use of sedating medication'],
    },
  },
  amoxicillin: {
    name: 'Amoxicillin',
    generalUse: {
      id: 'Antibiotik yang digunakan untuk infeksi bakteri tertentu berdasarkan penilaian tenaga medis.',
      en: 'An antibiotic used for certain bacterial infections based on medical assessment.',
    },
    commonSideEffects: {
      id: ['Mual', 'Diare', 'Ruam'],
      en: ['Nausea', 'Diarrhea', 'Rash'],
    },
    safetyWarnings: {
      id: ['Tidak digunakan untuk infeksi virus seperti flu biasa.', 'Penggunaan antibiotik harus mengikuti arahan tenaga medis.'],
      en: ['Not used for viral infections such as the common cold.', 'Antibiotic use should follow medical professional guidance.'],
    },
    carefulGroups: {
      id: ['Alergi penisilin', 'Riwayat reaksi antibiotik berat', 'Gangguan ginjal'],
      en: ['Penicillin allergy', 'History of severe antibiotic reaction', 'Kidney problems'],
    },
  },
  omeprazole: {
    name: 'Omeprazole',
    generalUse: {
      id: 'Obat penurun asam lambung yang umum dibahas untuk keluhan asam lambung tertentu.',
      en: 'An acid-reducing medication commonly discussed for certain acid reflux complaints.',
    },
    commonSideEffects: {
      id: ['Sakit kepala', 'Mual', 'Perut kembung'],
      en: ['Headache', 'Nausea', 'Bloating'],
    },
    safetyWarnings: {
      id: ['Keluhan lambung menetap perlu evaluasi profesional.', 'Jangan gunakan untuk menunda pemeriksaan gejala berat.'],
      en: ['Persistent stomach complaints need professional evaluation.', 'Do not use it to delay evaluation of severe symptoms.'],
    },
    carefulGroups: {
      id: ['Nyeri dada', 'Muntah darah', 'Penurunan berat badan tanpa sebab', 'Sulit menelan'],
      en: ['Chest pain', 'Vomiting blood', 'Unexplained weight loss', 'Difficulty swallowing'],
    },
  },
};
