import { Icon } from "./site-icon";
import { SiteImage } from "./site-image";
import { PREFOOTER } from "@/lib/home-content";
import { images } from "@/lib/media";
import type { NavLink } from "@/lib/navigation";

export type ClosingCta = {
  title: string;
  description?: string;
  primaryCta: NavLink;
  secondaryCta?: NavLink;
};

export function PagePrefooter({ closing }: { closing?: ClosingCta }) {
  const title = closing?.title ?? PREFOOTER.title;
  const description = closing?.description ?? PREFOOTER.description;
  const primaryCta = closing?.primaryCta ?? PREFOOTER.primaryCta;
  const secondaryCta = closing?.secondaryCta ?? PREFOOTER.secondaryCta;

  return (
    <section className="section prefooter" id={PREFOOTER.id} aria-labelledby="prefooter-title">
      <div className="prefooter__media" aria-hidden="true">
        <SiteImage asset={PREFOOTER.image} fill className="prefooter__media-image" />
      </div>
      <div className="container prefooter__inner">
        <div className="prefooter__copy sr-fade-up">
          <h2 id="prefooter-title">{title}</h2>
          {description ? <p>{description}</p> : null}
          <div className="prefooter__actions" style={{ marginTop: "var(--space-xl)" }}>
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
        </div>
        <div className="prefooter__partner sr-fade-up">
          <p className="prefooter__partner-note">{PREFOOTER.petmanNote}</p>
          <SiteImage asset={images.brand.petmanLogo} className="prefooter__partner-logo" />
        </div>
      </div>
    </section>
  );
}
