import {
  Bot,
  ClipboardPlus,
  FileWarning,
  HeartPulse,
  Home,
  Pill,
  ShieldCheck,
} from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Beranda', shortLabel: 'Beranda', icon: Home },
  { id: 'symptoms', label: 'Panduan Gejala', shortLabel: 'Gejala', icon: ClipboardPlus },
  { id: 'chat', label: 'Chat AI', shortLabel: 'Chat', icon: Bot },
  { id: 'medication', label: 'Info Obat', shortLabel: 'Obat', icon: Pill },
  { id: 'prevention', label: 'Tips Pencegahan', shortLabel: 'Tips', icon: HeartPulse },
  { id: 'disclaimer', label: 'Disclaimer', shortLabel: 'Catatan', icon: FileWarning },
];

export const safetyBadges = [
  { label: 'Hanya edukasi', icon: ShieldCheck },
  { label: 'Bukan diagnosis', icon: FileWarning },
  { label: 'Tanpa resep', icon: Pill },
];
