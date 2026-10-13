import type { Metadata } from "next";
import { Icon } from "../components/site-icon";
import { PageFacts } from "../components/page-facts";
import { PageHero } from "../components/page-hero";
import { PagePrefooter } from "../components/page-prefooter";
import { PageSplit } from "../components/page-split";
import { ProcessChain } from "../components/process-chain";
import { SectionLead } from "../components/section-lead";
import { SiteImage } from "../components/site-image";
import { CTA } from "@/lib/navigation";
import { PAGE_MATERIALIEN } from "@/lib/page-content";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "Materialien — RE-MAN",
  description: "Lebensmitteltaugliches mrPP und mrHDPE. Bereits heute verfügbar gemäß VO (EU) 2022/1616.",
};

const TYPE_IMAGES = {
  mrpp: images.home.mrppDetail,
  mrhdpe: images.home.mrhdpeDetail,
} as const;

export default function MaterialienPage() {
  const page = PAGE_MATERIALIEN;

  return (
    <>
      <PageHero {...page.hero} />

      <section className="section materials" aria-labelledby="types-title">
        <div className="container">
          <SectionLead
            title="Zwei Materialien. Ein Ziel: Ihre PPWR-Quote."
            leitgedanke={page.intro}
            inverse
            titleClassName="materials__title"
          />
          <div className="spec-grid sr-stagger" style={{ marginTop: "var(--space-2xl)" }}>
            {page.types.map((type) => (
              <article className="spec-card sr-fade-up" id={type.id} key={type.id}>
                <div className="spec-card__media">
                  <SiteImage asset={TYPE_IMAGES[type.id]} className="spec-card__image" />
                </div>
                <h3>{type.name}</h3>
                <p>{type.lead}</p>
                <ul className="page-bullets page-bullets--inverse">
                  {type.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p>Spezifikation vorhanden. Datenblatt-Download folgt mit der Nomenklatur.</p>
                <a className="btn btn--primary btn--lg" href={CTA.sample.href}>
                  <span>{CTA.sample.label}</span>
                  <Icon name="arrow-right" className="icon icon--inverse" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageFacts {...page.facts} />

      <section className="section origin" aria-labelledby="material-quote-title">
        <div className="container origin__copy sr-fade-up">
          <h6>PPWR-Mindestquote</h6>
          <h2 id="material-quote-title">Die PPWR-Quote erfüllen. Ihre Verpackung bleibt Ihre Verpackung.</h2>
          <p className="origin__lead">{page.quoteLead}</p>
        </div>
      </section>

      <PageSplit
        id="geruch"
        eyebrow="Geruch"
        title={page.smell.title}
        lead={page.smell.lead}
        body={[]}
        image={images.pages.modulLabor}
      />

      <section className="section" aria-label="Muster anfragen">
        <div className="container">
          <a className="btn btn--primary btn--xl" href={CTA.sample.href}>
            <span>{CTA.sample.label}</span>
            <Icon name="arrow-right" className="icon icon--inverse" />
          </a>
        </div>
      </section>

      <section className="section trace" aria-labelledby="material-process-title">
        <div className="container">
          <SectionLead title={page.process.title} leitgedanke={page.process.leitgedanke} />
          <ProcessChain
            steps={[
              { title: page.process.steps[0].title, text: page.process.steps[0].text, icon: "file-text" },
              { title: page.process.steps[1].title, text: page.process.steps[1].text, icon: "package" },
              { title: page.process.steps[2].title, text: page.process.steps[2].text, icon: "gear-six" },
              { title: page.process.steps[3].title, text: page.process.steps[3].text, icon: "shield-check" },
              { title: page.process.steps[4].title, text: page.process.steps[4].text, icon: "truck" },
            ]}
          />
          <p className="page-split__lead" style={{ marginTop: "var(--space-xl)" }}>
            {page.process.note}
          </p>
        </div>
      </section>
      <PagePrefooter closing={page.closing} />
    </>
  );
}
