import {
  Bot,
  BookOpen,
  ClipboardPlus,
  FileWarning,
  HeartPulse,
  Home,
  Pill,
  ShieldCheck,
} from 'lucide-react';

export const navItems = [
  { id: 'home', labelKey: 'nav.home', label: 'Beranda', shortLabel: 'Beranda', icon: Home },
  { id: 'symptoms', labelKey: 'nav.symptoms', label: 'Panduan Gejala', shortLabel: 'Gejala', icon: ClipboardPlus },
  { id: 'chat', labelKey: 'nav.chat', label: 'Chat AI', shortLabel: 'Chat', icon: Bot },
  { id: 'medication', labelKey: 'nav.medication', label: 'Medication Safety', shortLabel: 'Obat', icon: Pill },
  { id: 'library', labelKey: 'nav.library', label: 'Health Library', shortLabel: 'Library', icon: BookOpen },
  { id: 'prevention', labelKey: 'nav.prevention', label: 'Tips Pencegahan', shortLabel: 'Tips', icon: HeartPulse },
  { id: 'disclaimer', labelKey: 'nav.disclaimer', label: 'Disclaimer', shortLabel: 'Catatan', icon: FileWarning },
];

export const safetyBadges = [
  { label: 'Hanya edukasi', icon: ShieldCheck },
  { label: 'Bukan diagnosis', icon: FileWarning },
  { label: 'Tanpa resep', icon: Pill },
];
