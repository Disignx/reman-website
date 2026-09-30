import Image from "next/image";
import type { SiteImageAsset } from "@/lib/media";

type SiteImageProps = {
  asset: SiteImageAsset;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

function isSvgAsset(asset: SiteImageAsset): boolean {
  return asset.src.endsWith(".svg");
}

/**
 * Raster delivery via `next/image`. Static export serves originals (`unoptimized`).
 * SVG brand assets are always unoptimized.
 */
export function SiteImage({ asset, fill = false, priority, sizes, className }: SiteImageProps) {
  const isPriority = priority ?? asset.priority ?? false;
  const resolvedSizes = sizes ?? asset.sizes;

  if (isSvgAsset(asset) || asset.unoptimized) {
    return (
      <Image
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        unoptimized
        priority={isPriority}
        className={className}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        priority={isPriority}
        quality={isPriority ? 85 : 75}
        sizes={resolvedSizes ?? "100vw"}
        className={className}
      />
    );
  }

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority={isPriority}
      sizes={resolvedSizes}
      className={className}
    />
  );
}
