"use client";

import { THEME_IDS, THEMES, type ThemeId } from "@/lib/themes";
import type { SiteImageAsset } from "@/lib/media";
import { SiteImage } from "./site-image";

type ThemeImageProps = {
  kind: "logo" | "hero";
  className?: string;
  priority?: boolean;
  fill?: boolean;
};

function joinClass(base: string, extra?: string) {
  return extra ? `${base} ${extra}` : base;
}

function renderAsset(
  asset: SiteImageAsset,
  className: string | undefined,
  priority?: boolean,
  fill?: boolean,
  key?: string,
) {
  return <SiteImage key={key} asset={asset} className={className} priority={priority} fill={fill} />;
}

function groupAssetsBySrc(kind: "logo" | "hero") {
  const groups = new Map<string, { asset: SiteImageAsset; ids: ThemeId[] }>();

  for (const id of THEME_IDS) {
    const asset = THEMES[id][kind];
    const existing = groups.get(asset.src);

    if (existing) {
      existing.ids.push(id);
    } else {
      groups.set(asset.src, { asset, ids: [id] });
    }
  }

  return [...groups.values()];
}

/**
 * Logo or hero that follows `data-theme`. Same src renders once;
 * distinct per-theme files toggle via CSS so the first paint matches the stored schema.
 */
export function ThemeImage({ kind, className, priority, fill }: ThemeImageProps) {
  const groups = groupAssetsBySrc(kind);

  if (groups.length === 1) {
    return renderAsset(groups[0].asset, className, priority, fill);
  }

  return (
    <>
      {groups.map(({ asset, ids }) =>
        renderAsset(
          asset,
          joinClass(ids.map((id) => `theme-asset theme-asset--${id}`).join(" "), className),
          priority,
          fill,
          asset.src,
        ),
      )}
    </>
  );
}
