import type { SiteImageAsset } from "./types";

/**
 * Image registry — sole path source for SiteImage.
 * Dimensions are filled after download via assets:info / assets:check.
 * Temporary placeholders are marked in comments if a final asset is missing.
 */
export const images = {
  brand: {
    logo: {
      src: "/images/brand/logo.png",
      alt: "RE-MAN by PET-MAN",
      width: 320,
      height: 107,
      sizes: "(max-width: 48rem) 140px, 210px",
      priority: true,
    } satisfies SiteImageAsset,
    logoOrange: {
      src: "/images/brand/logo-orange.png",
      alt: "RE-MAN by PET-MAN",
      width: 999,
      height: 333,
      sizes: "(max-width: 48rem) 140px, 210px",
      priority: true,
    } satisfies SiteImageAsset,
    logoOrangeOnDark: {
      src: "/images/brand/logo-orange-on-dark.png",
      alt: "RE-MAN by PET-MAN",
      width: 999,
      height: 333,
      sizes: "(max-width: 48rem) 140px, 210px",
      priority: true,
    } satisfies SiteImageAsset,
    logoPurple: {
      src: "/images/brand/logo-purple.png",
      alt: "RE-MAN by PET-MAN",
      width: 999,
      height: 333,
      sizes: "(max-width: 48rem) 140px, 210px",
      priority: true,
    } satisfies SiteImageAsset,
    logoPurpleOnDark: {
      src: "/images/brand/logo-purple-on-dark.png",
      alt: "RE-MAN by PET-MAN",
      width: 999,
      height: 333,
      sizes: "(max-width: 48rem) 140px, 210px",
      priority: true,
    } satisfies SiteImageAsset,
    cycleMark: {
      src: "/images/brand/cycle-mark.svg",
      alt: "",
      width: 117,
      height: 103,
    } satisfies SiteImageAsset,
    petmanLogo: {
      src: "/images/brand/petman-logo-white.png",
      alt: "PET-MAN",
      width: 591,
      height: 155,
      unoptimized: true,
    } satisfies SiteImageAsset,
  },
  home: {
    hero: {
      src: "/images/home/hero.jpg",
      alt: "",
      width: 1448,
      height: 1086,
      sizes: "(max-width: 63.99rem) 100vw, 50vw",
      priority: true,
    } satisfies SiteImageAsset,
    heroOrange: {
      src: "/images/home/hero-orange.jpg",
      alt: "",
      width: 1024,
      height: 768,
      sizes: "(max-width: 63.99rem) 100vw, 50vw",
      priority: true,
    } satisfies SiteImageAsset,
    heroPurple: {
      src: "/images/home/hero-purple.jpg",
      alt: "",
      width: 1024,
      height: 768,
      sizes: "(max-width: 63.99rem) 100vw, 50vw",
      priority: true,
    } satisfies SiteImageAsset,
    viscozero: {
      src: "/images/home/viscozero.jpg",
      alt: "Starlinger viscoZERO Recyclinganlage",
      width: 2081,
      height: 756,
      sizes: "(max-width: 63.99rem) 100vw, 70vw",
    } satisfies SiteImageAsset,
    mrppTile: {
      src: "/images/home/mrpp-tile.png",
      alt: "mrPP Granulat",
      width: 1254,
      height: 1254,
      sizes: "(max-width: 48rem) 40vw, 160px",
    } satisfies SiteImageAsset,
    mrhdpeTile: {
      src: "/images/home/mrhdpe-tile.png",
      alt: "mrHDPE Granulat",
      width: 1254,
      height: 1254,
      sizes: "(max-width: 48rem) 40vw, 160px",
    } satisfies SiteImageAsset,
    goalPpwr: {
      src: "/images/home/goal-ppwr.jpg",
      alt: "Transparente Verpackungsbehälter aus recyceltem Kunststoff",
      width: 1536,
      height: 1024,
      sizes: "(max-width: 48rem) 100vw, (max-width: 74.99rem) 50vw, 25vw",
    } satisfies SiteImageAsset,
    goalMaterials: {
      src: "/images/home/goal-materials.jpg",
      alt: "Transparente Kunststoffgranulate",
      width: 1536,
      height: 1024,
      sizes: "(max-width: 48rem) 100vw, (max-width: 74.99rem) 50vw, 25vw",
    } satisfies SiteImageAsset,
    goalTolling: {
      src: "/images/home/goal-tolling.jpg",
      alt: "Industrieanlage zur Kunststoffaufbereitung",
      width: 1536,
      height: 1024,
      sizes: "(max-width: 48rem) 100vw, (max-width: 74.99rem) 50vw, 25vw",
    } satisfies SiteImageAsset,
    goalSample: {
      src: "/images/home/goal-sample.jpg",
      alt: "Laboranalyse von Kunststoffproben",
      width: 1536,
      height: 1024,
      sizes: "(max-width: 48rem) 100vw, (max-width: 74.99rem) 50vw, 25vw",
    } satisfies SiteImageAsset,
    mrppDetail: {
      src: "/images/home/mrpp-detail.png",
      alt: "mrPP Post-Consumer-Rezyklat, transparent",
      width: 1448,
      height: 1086,
      sizes: "(max-width: 63.99rem) 80vw, 420px",
    } satisfies SiteImageAsset,
    mrhdpeDetail: {
      src: "/images/home/mrhdpe-detail.png",
      alt: "mrHDPE Post-Consumer-Rezyklat, transparent",
      width: 1448,
      height: 1086,
      sizes: "(max-width: 63.99rem) 80vw, 420px",
    } satisfies SiteImageAsset,
    prefooter: {
      src: "/images/home/prefooter.jpg",
      alt: "",
      width: 2170,
      height: 725,
      sizes: "(max-width: 63.99rem) 100vw, 50vw",
    } satisfies SiteImageAsset,
  },
} as const;

export type { SiteImageAsset } from "./types";
