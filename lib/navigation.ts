/**
 * Central navigation and CTA targets for RE-MAN.
 * Button labels only from the CTA catalog (Konzept Abschnitt 7).
 */

export type NavLink = {
  href: string;
  label: string;
};

export const ROUTES = {
  home: "/",
  branchen: "/branchen/",
  food: "/branchen/lebensmittel/",
  kosmetik: "/branchen/kosmetik/",
  weitere: "/branchen/#weitere",
  materialien: "/materialien/",
  mrpp: "/materialien/#mrpp",
  mrhdpe: "/materialien/#mrhdpe",
  lohn: "/lohnaufbereitung/",
  technologie: "/technologie/",
  ppwr: "/ppwr-food-contact/",
  about: "/ueber-uns/",
  petman: "/ueber-uns/#pet-man",
  contact: "/kontakt/",
  sample: "/kontakt/#muster",
  visit: "/kontakt/#besichtigung",
  application: "/branchen/lebensmittel/#anwendungsdaten",
  datenschutz: "/datenschutz/",
  impressum: "/impressum/",
  agb: "/agb/",
} as const;

export const BRANCH_NAV: NavLink[] = [
  { href: ROUTES.food, label: "Lebensmittel" },
  { href: ROUTES.kosmetik, label: "Kosmetik" },
];

export const PRIMARY_NAV: NavLink[] = [
  { href: ROUTES.branchen, label: "Branchen" },
  { href: ROUTES.materialien, label: "Materialien" },
  { href: ROUTES.lohn, label: "Lohnaufbereitung" },
  { href: ROUTES.technologie, label: "Technologie" },
  { href: ROUTES.ppwr, label: "PPWR & Food Contact" },
  { href: ROUTES.about, label: "Über RE-MAN" },
];

export const CTA = {
  consultation: { href: ROUTES.contact, label: "Beratung anfragen" },
  sample: { href: ROUTES.sample, label: "Muster anfragen" },
  discussApplication: { href: ROUTES.contact, label: "Anwendung besprechen" },
  viewMaterials: { href: ROUTES.materialien, label: "Materialien ansehen" },
  tolling: { href: ROUTES.contact, label: "Lohnaufbereitung anfragen" },
  viewTolling: { href: ROUTES.lohn, label: "Lohnaufbereitung anfragen" },
  visit: { href: ROUTES.visit, label: "Produktionsbesichtigung anfragen" },
} as const;

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Branchen",
    links: [
      { href: ROUTES.food, label: "Lebensmittel" },
      { href: ROUTES.kosmetik, label: "Kosmetik" },
      { href: ROUTES.weitere, label: "Automotive / ELV" },
    ],
  },
  {
    title: "Materialien",
    links: [
      { href: ROUTES.materialien, label: "Materialien" },
      { href: ROUTES.mrpp, label: "mrPP" },
      { href: ROUTES.mrhdpe, label: "mrHDPE" },
    ],
  },
  {
    title: "Lohnaufbereitung",
    links: [
      { href: ROUTES.lohn, label: "Lohnaufbereitung" },
      { href: `${ROUTES.lohn}#input`, label: "Ihr Material" },
      { href: `${ROUTES.lohn}#prozess`, label: "Verfahren" },
    ],
  },
  {
    title: "Technologie",
    links: [
      { href: ROUTES.technologie, label: "Technologie" },
      { href: `${ROUTES.technologie}#viscozero`, label: "viscoZERO" },
      { href: `${ROUTES.technologie}#nachweise`, label: "Qualität & Nachweise" },
    ],
  },
  {
    title: "PPWR & Food Contact",
    links: [
      { href: `${ROUTES.ppwr}#quoten`, label: "Rezyklatquote" },
      { href: `${ROUTES.ppwr}#ntn`, label: "Novel Technology" },
      { href: `${ROUTES.ppwr}#faq`, label: "FAQ" },
    ],
  },
  {
    title: "Über RE-MAN",
    links: [
      { href: ROUTES.about, label: "Über RE-MAN" },
      { href: ROUTES.contact, label: "Kontakt" },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { href: ROUTES.impressum, label: "Impressum" },
  { href: ROUTES.datenschutz, label: "Datenschutz" },
  { href: ROUTES.agb, label: "AGB" },
];

export const PENDING_DESTINATIONS = ["/karriere", "/en"] as const;
