export const SITE_NAME = "RE-MAN";
export const SITE_TAGLINE = "by PET-MAN";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3003";

export const SITE_DESCRIPTION =
  "Lebensmitteltaugliches, mechanisch recyceltes PP und HDPE gemäß VO (EU) 2022/1616 — bereit für die PPWR-Quote 2030.";

export const SITE_LEGAL = {
  brandRelation: "RE-MAN ist eine Marke der PET-MAN GmbH.",
} as const;

/** Public PET-MAN impressum (petman.at) — no invented RE-MAN mailbox. */
export const SITE_CONTACT = {
  company: "PET-MAN GmbH / RE-MAN",
  street: "Neukirchnerstraße 15",
  city: "4873 Frankenburg a. H.",
  country: "Österreich",
  phoneDisplay: "+43 7683 20775",
  phoneHref: "tel:+43768320775",
  email: "office@petman.at",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Neukirchnerstra%C3%9Fe+15+4873+Frankenburg+am+Hausruck",
  petmanHref: "https://www.petman.at/",
} as const;

export const SITE_PEOPLE = [
  { name: "Markus Neudorfer", role: "Geschäftsführer" },
  { name: "Bernhard Binder-Reisinger", role: "Betriebsleiter" },
] as const;
