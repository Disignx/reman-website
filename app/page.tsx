import { CycleBadge } from "./components/cycle-badge";
import { FactItem } from "./components/fact-item";
import { GoalCard } from "./components/goal-card";
import { Icon } from "./components/site-icon";
import { MaterialCard } from "./components/material-card";
import { SiteImage } from "./components/site-image";
import { ThemeImage } from "./components/theme-image";
import { TraceabilityStep } from "./components/traceability-step";
import {
  GOALS,
  HERO,
  MATERIALS,
  ORIGIN,
  PPWR_FACTS,
  PREFOOTER,
  TECHNOLOGY,
  TRACEABILITY,
} from "@/lib/home-content";
import { images } from "@/lib/media";

function SectionLead({
  title,
  leitgedanke,
  inverse = false,
  titleClassName,
}: {
  title: string;
  leitgedanke: string;
  inverse?: boolean;
  titleClassName?: string;
}) {
  return (
    <div className="section-lead sr-fade-up">
      <h2 className={titleClassName}>{title}</h2>
      <div className={`section-lead__kicker${inverse ? " section-lead__kicker--inverse" : ""}`}>
        <span className="section-lead__accent" aria-hidden="true" />
        <p>{leitgedanke}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__panel" aria-hidden="true" />
        <div className="hero__media" aria-hidden="true">
          <ThemeImage kind="hero" fill priority className="hero__media-image" />
          <div className="hero__focus">
            <CycleBadge lines={HERO.badge} align="start" />
          </div>
        </div>
        <div className="hero__blend" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy">
              <h6 className="dx-enter-fade dx-enter-delay-1">{HERO.eyebrow}</h6>
              <h1 id="hero-title" className="dx-enter-up dx-enter-delay-2">
                {HERO.title[0]}
                <br />
                {HERO.title[1]}
              </h1>
              <h4 className="dx-enter-up dx-enter-delay-3">
                {HERO.subline[0]}
                <br />
                {HERO.subline[1]}
              </h4>
              <div className="hero__actions dx-enter-up dx-enter-delay-4">
                <a className="btn btn--primary btn--xl" href={HERO.primaryCta.href}>
                  <span>{HERO.primaryCta.label}</span>
                  <Icon name="arrow-right" className="icon icon--inverse" />
                </a>
                <a className="btn btn--ghost btn--xl" href={HERO.secondaryCta.href}>
                  <span>{HERO.secondaryCta.label}</span>
                  <Icon name="arrow-right" className="icon icon--inverse" />
                </a>
              </div>
              <p className="hero__note dx-enter-fade dx-enter-delay-5">
                <span className="hero__note-line" aria-hidden="true" />
                <span>{HERO.note}</span>
              </p>
          </div>
        </div>
      </section>

      <section className="section ppwr-facts" id={PPWR_FACTS.id} aria-labelledby="ppwr-title">
        <div className="container ppwr-facts__grid">
          <h3 id="ppwr-title" className="ppwr-facts__title sr-fade-up">
            {PPWR_FACTS.title[0]}
            <br />
            {PPWR_FACTS.title[1]}
          </h3>
          <div className="ppwr-facts__items sr-stagger">
            {PPWR_FACTS.items.map((item) => (
              <FactItem key={item.value} value={item.value} label={item.label} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="section tech" id={TECHNOLOGY.id} aria-labelledby="tech-title">
        <div className="tech__media" aria-hidden="true">
          <SiteImage asset={TECHNOLOGY.background} fill className="tech__media-image" />
        </div>
        <div className="tech__gradient" aria-hidden="true" />
        <div className="tech__shade" aria-hidden="true" />
        <div className="container tech__inner">
          <CycleBadge lines={TECHNOLOGY.badge} align="end" />
          <div className="tech__copy sr-fade-up">
            <h2 id="tech-title">{TECHNOLOGY.title}</h2>
          </div>
          <div className="tech__tiles sr-stagger">
            {TECHNOLOGY.materials.map((material) => (
              <div className="tech-tile tech-tile--material sr-fade-up" key={material.name}>
                <SiteImage asset={material.image} className="tech-tile__image" />
                <h5>{material.name}</h5>
              </div>
            ))}
            {TECHNOLOGY.features.map((feature) => (
              <div className="tech-tile sr-fade-up" key={feature.title}>
                <Icon name={feature.icon} className="icon icon--lg icon--primary" weight="thin" />
                <h5>{feature.title}</h5>
              </div>
            ))}
          </div>
          <div className="tech__footer">
            <p className="sr-fade">{TECHNOLOGY.subline}</p>
          </div>
        </div>
      </section>

      <section className="section origin" id={ORIGIN.id} aria-labelledby="origin-title">
        <div className="container origin__grid">
          <div className="origin__copy sr-fade-up">
            <h6>{ORIGIN.eyebrow}</h6>
            <h2 id="origin-title">{ORIGIN.title}</h2>
            <p className="origin__lead">{ORIGIN.lead}</p>
          </div>
          <div className="origin__stats sr-stagger">
            {ORIGIN.stats.map((stat) => (
              <div className="origin-stat sr-fade-up" key={stat.value}>
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section trace" id={TRACEABILITY.id} aria-labelledby="trace-title">
        <div className="container">
          <SectionLead
            title={TRACEABILITY.title}
            leitgedanke={TRACEABILITY.leitgedanke}
            titleClassName="trace__title"
          />
          <div className="trace__chain sr-stagger">
            {TRACEABILITY.steps.map((step, index) => (
              <TraceabilityStep
                key={step.label}
                label={step.label}
                icon={step.icon}
                showArrow={index < TRACEABILITY.steps.length - 1}
              />
            ))}
          </div>
          <p className="trace__proof sr-fade-up">{TRACEABILITY.proof}</p>
        </div>
      </section>

      <section className="section goals" id={GOALS.id} aria-labelledby="goals-title">
        <div className="container">
          <SectionLead title={GOALS.title} leitgedanke={GOALS.leitgedanke} />
          <div className="grid-4 sr-stagger" style={{ marginTop: "var(--space-2xl)" }}>
            {GOALS.cards.map((card) => (
              <GoalCard key={card.title} title={card.title} cta={card.cta} image={card.image} />
            ))}
          </div>
        </div>
      </section>

      <section className="section materials" id={MATERIALS.id} aria-labelledby="materials-title">
        <div className="container">
          <SectionLead
            title={MATERIALS.title}
            leitgedanke={MATERIALS.leitgedanke}
            inverse
            titleClassName="materials__title"
          />
          <div className="materials__cards sr-stagger" style={{ marginTop: "var(--space-2xl)" }}>
            {MATERIALS.cards.map((card) => (
              <MaterialCard
                key={card.name}
                name={card.name}
                description={card.description}
                href={card.href}
                image={card.image}
              />
            ))}
          </div>
          <div className="materials__stats sr-stagger">
            {MATERIALS.stats.map((stat) => (
              <div className="material-stat sr-fade-up" key={stat.primary}>
                <Icon name={stat.icon} className="icon icon--lg icon--secondary" weight="thin" />
                <div className="material-stat__text">
                  {"reverse" in stat && stat.reverse ? (
                    <>
                      <p>{stat.secondary}</p>
                      <p className="stat-value">{stat.primary}</p>
                    </>
                  ) : (
                    <>
                      <p className="stat-value">{stat.primary}</p>
                      <p>{stat.secondary}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section prefooter" id={PREFOOTER.id} aria-labelledby="prefooter-title">
        <div className="prefooter__media" aria-hidden="true">
          <SiteImage asset={PREFOOTER.image} fill className="prefooter__media-image" />
        </div>
        <div className="container prefooter__inner">
          <div className="prefooter__copy sr-fade-up">
            <h2 id="prefooter-title">{PREFOOTER.title}</h2>
            <p>{PREFOOTER.description}</p>
            <div className="prefooter__actions" style={{ marginTop: "var(--space-xl)" }}>
              <a className="btn btn--primary btn--xl" href={PREFOOTER.primaryCta.href}>
                <span>{PREFOOTER.primaryCta.label}</span>
                <Icon name="arrow-right" className="icon icon--inverse" />
              </a>
              <a className="btn btn--ghost btn--xl" href={PREFOOTER.secondaryCta.href}>
                <span>{PREFOOTER.secondaryCta.label}</span>
                <Icon name="arrow-right" className="icon icon--inverse" />
              </a>
            </div>
          </div>
          <div className="prefooter__partner sr-fade-up">
            <p className="prefooter__partner-note">{PREFOOTER.petmanNote}</p>
            <SiteImage asset={images.brand.petmanLogo} className="prefooter__partner-logo" />
          </div>
        </div>
      </section>
    </>
  );
}
