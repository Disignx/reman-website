import { CTA } from "./navigation";
import { images } from "./media";

/** Icon keys must exist in `app/components/site-icon.tsx`. */
type HomeIcon =
  | "calendar-blank"
  | "chart-pie-slice"
  | "clock-countdown"
  | "gear-six"
  | "wind"
  | "file-text"
  | "clipboard-text"
  | "shield-check"
  | "file-magnifying-glass"
  | "path"
  | "factory"
  | "package"
  | "stack"
  | "truck";

export const HERO = {
  eyebrow: "Recycling. Ready for Food.",
  title: ["Erfüllen Sie mit RE-MAN", "die PPWR-Quote 2030."],
  subline: [
    "Bereits heute kommerziell verfügbar: lebensmitteltaugliches,",
    "mechanisch recyceltes PP und HDPE gemäß VO (EU) 2022/1616",
  ],
  note: "Materialqualifikation bis zur Verpackung: typischerweise 18–24 Monate",
  badge: ["Kreisläufe", "für starke", "Verpackungen."],
  primaryCta: CTA.consultation,
  secondaryCta: CTA.sample,
  image: images.home.hero,
} as const;

export const PPWR_FACTS = {
  id: "ppwr",
  title: ["Wer 2030 bereit sein will,", "muss heute beginnen."],
  items: [
    {
      value: "2030",
      label: "PPWR-Rezyklatquoten",
      icon: "calendar-blank" as HomeIcon,
    },
    {
      value: "10%",
      label: "Mindestanteil für kontaktsensitive\nNicht-PET-Verpackungen",
      icon: "chart-pie-slice" as HomeIcon,
    },
    {
      value: "18-24 Monate",
      label: "typische Qualifikationszeit",
      icon: "clock-countdown" as HomeIcon,
    },
  ],
} as const;

/** Figma typo retained: "Qaulifikationszeit" → corrected to Qualifikationszeit in UI (documented deviation). */

export const TECHNOLOGY = {
  id: "technologie",
  title: "Post-Consumer-Rezyklat.\nBereit für anspruchsvolle\nVerpackungen.",
  subline: "Zwei Novel-Technology-Notifikationen für PP und PE/HDPE.",
  badge: ["Gleiche", "Qualität", "Neue Kreisläufe"],
  materials: [
    { name: "mrPP", image: images.home.mrppTile },
    { name: "mrHDPE", image: images.home.mrhdpeTile },
  ],
  features: [
    { title: "Wirksame\nDekontamination", icon: "gear-six" as HomeIcon },
    { title: "Geruch wie\nKunststoff-Neuware", icon: "wind" as HomeIcon },
  ],
  background: images.home.viscozero,
} as const;

export const ORIGIN = {
  id: "herkunft",
  eyebrow: "Recycling mit Herkunft",
  title: "Kreislaufmaterial, das jedes Versprechen belegt.",
  lead: "Vom Wareneingang bis zum Lieferdokument: belastbare Qualität für verantwortungsvolle Produkte.",
  stats: [
    { value: "10 %", label: "PCR-Anteil, vollständig dokumentiert" },
    { value: "100 %", label: "Chargenweise rückverfolgbar" },
  ],
} as const;

export const TRACEABILITY = {
  id: "nachweis",
  title: "10 % PCR kann man nicht sehen.\nAber lückenlos belegen.",
  leitgedanke: "Transparenz schafft Sicherheit.",
  proof: "RE-MAN macht Vertrauen nachweisbar.",
  steps: [
    { label: "Dokumentierte Herkunft", icon: "file-text" as HomeIcon },
    { label: "Eingangskontrolle", icon: "clipboard-text" as HomeIcon },
    { label: "Chargenbezogene Qualität", icon: "shield-check" as HomeIcon },
    { label: "Lieferdokumente", icon: "file-magnifying-glass" as HomeIcon },
    { label: "Rückverfolgbarkeit", icon: "path" as HomeIcon },
  ],
} as const;

export const GOALS = {
  id: "ziele",
  title: "Was möchten Sie erreichen?",
  leitgedanke: "Ihre Anforderung. Unsere Lösung.",
  cards: [
    {
      title: "PPWR-Quote 2030 erfüllen",
      cta: CTA.discussApplication,
      image: images.home.goalPpwr,
    },
    {
      title: "mrPP oder mrHDPE\neinsetzen",
      cta: CTA.viewMaterials,
      image: images.home.goalMaterials,
    },
    {
      title: "Eigenes Material\naufbereiten",
      cta: CTA.tolling,
      image: images.home.goalTolling,
    },
    {
      title: "Material testen",
      cta: CTA.sample,
      image: images.home.goalSample,
    },
  ],
} as const;

export const MATERIALS = {
  id: "materialien",
  title: "Zwei Materialien.\nEin Ziel: Ihre PPWR-Quote.",
  leitgedanke: "Kreislaufgerechte Materialien. Zuverlässig\u00A0verfügbar.",
  cards: [
    {
      name: "mrPP",
      description: "Post-Consumer · transparent",
      href: "/#materialien",
      image: images.home.mrppDetail,
    },
    {
      name: "mrHDPE",
      description: "Post-Consumer · transparent",
      href: "/#materialien",
      image: images.home.mrhdpeDetail,
    },
  ],
  stats: [
    {
      icon: "factory" as HomeIcon,
      primary: "5.000 t",
      secondary: "gemeinsame Jahreskapazität",
    },
    {
      icon: "package" as HomeIcon,
      primary: "1 Woche",
      secondary: "Muster üblicherweise in",
      reverse: true,
    },
    {
      icon: "stack" as HomeIcon,
      primary: "2–3 Wochen",
      secondary: "Serienmaterial üblicherweise in",
      reverse: true,
    },
    {
      icon: "truck" as HomeIcon,
      primary: "ganz Europa",
      secondary: "Lieferung in",
      reverse: true,
    },
  ],
} as const;

export const PREFOOTER = {
  id: "beratung",
  title: "2030 wartet nicht.",
  description: "Beginnen Sie jetzt mit der Qualifikation Ihrer PPWR-konformen Verpackung.",
  petmanNote: "Gemeinsam mehr ermöglichen.",
  primaryCta: CTA.consultation,
  secondaryCta: CTA.sample,
  image: images.home.prefooter,
} as const;
