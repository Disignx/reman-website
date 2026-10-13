import { Breadcrumbs, type Crumb } from "./breadcrumbs";
import { CycleBadge } from "./cycle-badge";
import { Icon } from "./site-icon";
import { SiteImage } from "./site-image";
import type { SiteImageAsset } from "@/lib/media";
import type { NavLink } from "@/lib/navigation";

export type PageHeroProps = {
  eyebrow: string;
  title: readonly string[];
  subline: readonly string[];
  note: string;
  badge: readonly string[];
  image: SiteImageAsset;
  primaryCta: NavLink;
  secondaryCta?: NavLink;
  crumbs?: readonly Crumb[];
};

function LineBreaks({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={line}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  subline,
  note,
  badge,
  image,
  primaryCta,
  secondaryCta,
  crumbs,
}: PageHeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__panel" aria-hidden="true" />
      <div className="hero__media" aria-hidden="true">
        <SiteImage asset={image} fill priority className="hero__media-image" />
        <div
          className="hero__focus"
          style={{ ["--hero-image-ratio" as string]: `${image.width} / ${image.height}` }}
        >
          <CycleBadge lines={badge} align="start" />
        </div>
      </div>
      <div className="hero__blend" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          {crumbs ? <Breadcrumbs items={crumbs} inverse /> : null}
          <h6 className="dx-enter-fade dx-enter-delay-1">{eyebrow}</h6>
          <h1 id="hero-title" className="dx-enter-up dx-enter-delay-2">
            <LineBreaks lines={title} />
          </h1>
          <h4 className="dx-enter-up dx-enter-delay-3">
            <LineBreaks lines={subline} />
          </h4>
          <div className="hero__actions dx-enter-up dx-enter-delay-4">
            <a className="btn btn--primary btn--xl" href={primaryCta.href}>
              <span>{primaryCta.label}</span>
              <Icon name="arrow-right" className="icon icon--inverse" />
            </a>
            {secondaryCta ? (
              <a className="btn btn--ghost btn--xl" href={secondaryCta.href}>
                <span>{secondaryCta.label}</span>
                <Icon name="arrow-right" className="icon icon--inverse" />
              </a>
            ) : null}
          </div>
          <p className="hero__note dx-enter-fade dx-enter-delay-5">
            <span className="hero__note-line" aria-hidden="true" />
            <span>{note}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
