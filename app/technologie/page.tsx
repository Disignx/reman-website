import type { Metadata } from "next";
import { CycleBadge } from "../components/cycle-badge";
import { Icon } from "../components/site-icon";
import { PageHero } from "../components/page-hero";
import { PagePrefooter } from "../components/page-prefooter";
import { ProcessChain } from "../components/process-chain";
import { SectionLead } from "../components/section-lead";
import { SiteImage } from "../components/site-image";
import { CTA } from "@/lib/navigation";
import { PAGE_TECHNOLOGIE } from "@/lib/page-content";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "Technologie — RE-MAN",
  description: "viscoZERO: wirksame Dekontamination in der Schmelze für lebensmitteltaugliches mrPP und mrHDPE.",
};

export default function TechnologiePage() {
  const page = PAGE_TECHNOLOGIE;

  return (
    <>
      <PageHero {...page.hero} />

      <section className="section" aria-labelledby="tech-intro-title">
        <div className="container page-split__copy sr-fade-up">
          <h2 id="tech-intro-title">{page.intro.title}</h2>
          <p className="page-split__lead">{page.intro.lead}</p>
          <p>{page.intro.result}</p>
        </div>
      </section>

      <section className="section tech" id={page.split.id} aria-labelledby="viscozero-title">
        <div className="tech__media" aria-hidden="true">
          <SiteImage asset={page.split.image} fill className="tech__media-image" />
        </div>
        <div className="tech__gradient" aria-hidden="true" />
        <div className="tech__shade" aria-hidden="true" />
        <div className="container tech__inner">
          <CycleBadge lines={["Gleiche", "Qualität", "Neue Kreisläufe"]} align="end" />
          <div className="tech__copy sr-fade-up">
            <h6>{page.split.eyebrow}</h6>
            <h2 id="viscozero-title">{page.split.title}</h2>
          </div>
          <div className="tech__tiles sr-stagger">
            <div className="tech-tile tech-tile--material sr-fade-up">
              <SiteImage asset={images.home.mrppTile} className="tech-tile__image" />
              <h5>mrPP</h5>
            </div>
            <div className="tech-tile tech-tile--material sr-fade-up">
              <SiteImage asset={images.home.mrhdpeTile} className="tech-tile__image" />
              <h5>mrHDPE</h5>
            </div>
            <div className="tech-tile sr-fade-up">
              <Icon name="gear-six" className="icon icon--lg icon--primary" weight="thin" />
              <h5>Wirksame{"\n"}Dekontamination</h5>
            </div>
            <div className="tech-tile sr-fade-up">
              <Icon name="wind" className="icon icon--lg icon--primary" weight="thin" />
              <h5>Geruch wie{"\n"}Kunststoff-Neuware</h5>
            </div>
          </div>
          <div className="tech__footer">
            <p className="sr-fade">{page.split.lead}</p>
            <p className="sr-fade">{page.split.body[0]}</p>
          </div>
        </div>
      </section>

      <section className="section page-faq" aria-labelledby="tech-benefits-title">
        <div className="container">
          <SectionLead title={page.benefits.title} leitgedanke="Was die Technologie für unsere Kunden leistet." />
          <ul className="page-bullets sr-stagger">
            {page.benefits.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section trace" aria-labelledby="tech-process-title">
        <div className="container">
          <SectionLead title={page.process.title} leitgedanke="Allgemein verständliche Prozessschritte. Nur viscoZERO." />
          <ProcessChain
            steps={[
              { title: page.process.steps[0].title, text: page.process.steps[0].text, icon: "clipboard-text" },
              { title: page.process.steps[1].title, text: page.process.steps[1].text, icon: "drop" },
              { title: page.process.steps[2].title, text: page.process.steps[2].text, icon: "gear-six" },
              { title: page.process.steps[3].title, text: page.process.steps[3].text, icon: "cube" },
              { title: page.process.steps[4].title, text: page.process.steps[4].text, icon: "shield-check" },
            ]}
          />
        </div>
      </section>

      <section className="section origin" aria-labelledby="tech-smell-title">
        <div className="container origin__copy sr-fade-up">
          <h6>Geruch</h6>
          <h2 id="tech-smell-title">{page.smell.title}</h2>
          <p className="origin__lead">{page.smell.lead}</p>
          <p>
            <a className="btn btn--primary btn--lg" href={CTA.sample.href}>
              <span>{CTA.sample.label}</span>
              <Icon name="arrow-right" className="icon icon--inverse" />
            </a>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="tech-industrial-title">
        <div className="container page-split__copy sr-fade-up">
          <h6>Starlinger viscotec</h6>
          <h2 id="tech-industrial-title">{page.industrial.title}</h2>
          <p className="page-split__lead">{page.industrial.lead}</p>
        </div>
      </section>

      <section className="section trace" id={page.proof.id} aria-labelledby="tech-proof-title">
        <div className="container">
          <SectionLead title={page.proof.title} leitgedanke={page.proof.lead} />
          <p className="page-split__lead sr-fade-up">{page.proof.body}</p>
          <ProcessChain
            steps={[
              { title: "NIAS-Analyse", text: "je Produktionslos durch ein akkreditiertes Labor", icon: "flask" },
              { title: "Evaluation Report", text: "intern, anwendungsbezogen", icon: "file-magnifying-glass" },
              { title: "Annex III Part A", text: "kundenspezifische Konformitätserklärung je Serienlieferung", icon: "file-text" },
            ]}
          />
          <p className="page-split__lead" style={{ marginTop: "var(--space-xl)" }}>
            {page.proof.note}
          </p>
          <ul className="page-bullets sr-stagger" style={{ marginTop: "var(--space-xl)" }}>
            {page.proof.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="page-split__lead" style={{ marginTop: "var(--space-xl)" }}>
            {page.proof.legal}
          </p>
        </div>
      </section>
      <PagePrefooter closing={page.closing} />
    </>
  );
}
