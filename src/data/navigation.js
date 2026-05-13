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
  { id: 'home', labelKey: 'nav.home', shortLabelKey: 'navShort.home', icon: Home },
  { id: 'symptoms', labelKey: 'nav.symptoms', shortLabelKey: 'navShort.symptoms', icon: ClipboardPlus },
  { id: 'chat', labelKey: 'nav.chat', shortLabelKey: 'navShort.chat', icon: Bot },
  { id: 'medication', labelKey: 'nav.medication', shortLabelKey: 'navShort.medication', icon: Pill },
  { id: 'library', labelKey: 'nav.library', shortLabelKey: 'navShort.library', icon: BookOpen },
  { id: 'prevention', labelKey: 'nav.prevention', shortLabelKey: 'navShort.prevention', icon: HeartPulse },
  { id: 'disclaimer', labelKey: 'nav.disclaimer', shortLabelKey: 'navShort.disclaimer', icon: FileWarning },
];

export const safetyBadges = [
  { labelKey: 'safety.education', icon: ShieldCheck },
  { labelKey: 'safety.noDiagnosis', icon: FileWarning },
  { labelKey: 'safety.noPrescription', icon: Pill },
];
