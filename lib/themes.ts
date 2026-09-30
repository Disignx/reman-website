import { images, type SiteImageAsset } from "./media";

export const THEME_STORAGE_KEY = "reman-theme";
export const THEME_IDS = ["green", "orange", "purple", "purple-dark"] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export const DEFAULT_THEME: ThemeId = "green";

export function isThemeId(value: string | null | undefined): value is ThemeId {
  return THEME_IDS.includes(value as ThemeId);
}

export type ThemeDefinition = {
  id: ThemeId;
  label: string;
  swatch: string;
  logo: SiteImageAsset;
  hero: SiteImageAsset;
};

export const THEMES: Record<ThemeId, ThemeDefinition> = {
  green: {
    id: "green",
    label: "Grünes Farbschema",
    swatch: "linear-gradient(135deg, #006b57 0%, #00a27a 100%)",
    logo: images.brand.logo,
    hero: images.home.hero,
  },
  orange: {
    id: "orange",
    label: "Oranges Farbschema",
    swatch: "linear-gradient(135deg, #c44a00 0%, #fe8800 100%)",
    logo: images.brand.logoOrange,
    hero: images.home.heroOrange,
  },
  purple: {
    id: "purple",
    label: "Violettes Farbschema",
    swatch: "linear-gradient(135deg, #6045f4 0%, #53e6d4 100%)",
    logo: images.brand.logoPurple,
    hero: images.home.heroPurple,
  },
  "purple-dark": {
    id: "purple-dark",
    label: "Dunkles violettes Farbschema",
    swatch: "linear-gradient(135deg, #0f1417 0%, #6045f4 100%)",
    logo: images.brand.logoPurpleOnDark,
    hero: images.home.heroPurple,
  },
};
