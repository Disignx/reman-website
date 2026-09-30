/**
 * Central navigation and CTA targets for RE-MAN.
 * Missing destination pages are mapped to existing homepage sections
 * until dedicated routes exist (documented in PROJECT_STATE).
 */

export type NavLink = {
  href: string;
  label: string;
};

export const PRIMARY_NAV: NavLink[] = [
  { href: "/#ziele", label: "Branchen" },
  { href: "/#materialien", label: "Materialien" },
  { href: "/#ziele", label: "Lohnaufbereitung" },
  { href: "/#technologie", label: "Technologie" },
  { href: "/#ppwr", label: "PPWR & Food Contact" },
  { href: "/#herkunft", label: "Über RE-MAN" },
];

export const CTA = {
  consultation: { href: "/#beratung", label: "Beratung anfragen" },
  sample: { href: "/#beratung", label: "Muster anfragen" },
  discussApplication: { href: "/#beratung", label: "Anwendung besprechen" },
  viewMaterials: { href: "/#materialien", label: "Materialien ansehen" },
  tolling: { href: "/#beratung", label: "Lohnaufbereitung anfragen" },
} as const;

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: "Branchen",
    links: [
      { href: "/#ziele", label: "Food" },
      { href: "/#ziele", label: "Kosmetik" },
      { href: "/#ziele", label: "Pharma & Medical" },
      { href: "/#ziele", label: "Technische Verpackungen" },
    ],
  },
  {
    title: "Materialien",
    links: [
      { href: "/#materialien", label: "mrPP" },
      { href: "/#materialien", label: "mrHDPE" },
    ],
  },
  {
    title: "Lohnaufbereitung",
    links: [
      { href: "/#ziele", label: "Ihr Material" },
      { href: "/#nachweis", label: "Unser Prozess" },
      { href: "/#technologie", label: "Ihre Vorteile" },
    ],
  },
  {
    title: "Technologie",
    links: [
      { href: "/#technologie", label: "Dekontamination" },
      { href: "/#technologie", label: "Extrusion" },
      { href: "/#herkunft", label: "Qualität" },
    ],
  },
  {
    title: "PPWR & Food Contact",
    links: [
      { href: "/#ppwr", label: "Regulatorik" },
      { href: "/#technologie", label: "Unser Ansatz" },
      { href: "/#ppwr", label: "FAQ" },
    ],
  },
  {
    title: "Über RE-MAN",
    links: [
      { href: "/#herkunft", label: "Unsere Marke" },
      { href: "/#beratung", label: "Die PET-MAN GmbH" },
      { href: "/#beratung", label: "Karriere" },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/impressum", label: "Impressum" },
  { href: "/agb", label: "AGB" },
];

/** Routes not yet built as dedicated pages (footer/legal stubs planned). */
export const PENDING_DESTINATIONS = [
  "/branchen/*",
  "/materialien/mrpp",
  "/materialien/mrhdpe",
  "/lohnaufbereitung/*",
  "/technologie/*",
  "/ppwr/*",
  "/ueber-uns/*",
  "/karriere",
  "/datenschutz",
  "/impressum",
  "/agb",
  "/en",
] as const;
