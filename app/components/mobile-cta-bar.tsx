import { CTA } from "@/lib/navigation";

export function MobileCtaBar() {
  return (
    <div className="mobile-cta-bar" aria-label="Schnelle Anfrage">
      <a className="btn btn--primary btn--lg" href={CTA.consultation.href}>
        <span>{CTA.consultation.label}</span>
      </a>
      <a className="btn btn--ghost-dark btn--lg" href={CTA.sample.href}>
        <span>{CTA.sample.label}</span>
      </a>
    </div>
  );
}
