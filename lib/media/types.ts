/** Raster image served from `public/` — single source for src, alt, and layout dimensions. */
export type SiteImageAsset = {
  /** Path under `public/`, e.g. `/images/home/hero.jpg` */
  src: `/${string}`;
  alt: string;
  width: number;
  height: number;
  /** Responsive hint for `next/image` — required when using `fill` */
  sizes?: string;
  /** Above-the-fold / LCP — disables lazy loading */
  priority?: boolean;
  /** Skip the image optimizer. Needed when it emits a PNG the browser cannot decode. */
  unoptimized?: boolean;
};
