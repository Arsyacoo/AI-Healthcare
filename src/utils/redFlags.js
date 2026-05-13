const redFlagKeywords = [
  'nyeri dada',
  'sesak napas',
  'pingsan',
  'perdarahan berat',
  'kebingungan',
  'tidak sadar',
  'kejang',
  'batuk darah',
  'muntah darah',
  'chest pain',
  'difficulty breathing',
  'fainting',
  'severe bleeding',
  'confusion',
  'seizure',
];

export function detectRedFlags(text = '') {
  const normalized = text.toLowerCase();
  return redFlagKeywords.filter((keyword) => normalized.includes(keyword));
}
