import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../../components/site-icon";
import { PageFacts } from "../../components/page-facts";
import { PageHero } from "../../components/page-hero";
import { PagePrefooter } from "../../components/page-prefooter";
import { PageSplit } from "../../components/page-split";
import { PageTable } from "../../components/page-table";
import { ProcessChain } from "../../components/process-chain";
import { SectionLead } from "../../components/section-lead";
import { StoryCard } from "../../components/story-card";
import { CTA, ROUTES } from "@/lib/navigation";
import { images } from "@/lib/media";
import { COSMETIC_APPS, PAGE_KOSMETIK } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Kosmetikverpackung — RE-MAN",
  description: "PPWR-Quote 10 % ab 2030 und 25 % ab 2040 für Kosmetikverpackungen aus PP und HDPE.",
};

export default function KosmetikPage() {
  const page = PAGE_KOSMETIK;

  return (
    <>
      <PageHero {...page.hero} />
      <PageFacts {...page.facts} />

      <section className="section origin" aria-labelledby="kosmetik-quote-title">
        <div className="container origin__grid">
          <div className="origin__copy sr-fade-up">
            <h6>Artikel 7</h6>
            <h2 id="kosmetik-quote-title">Die PPWR-Quote gilt auch für Kosmetikverpackungen</h2>
            <p className="origin__lead">
              Die PPWR verpflichtet auch Verpackungen für kosmetische Mittel zu einem Mindestanteil an
              Post-Consumer-Rezyklat.
            </p>
            <p>
              <Link className="text-link text-link--inverse" href={ROUTES.ppwr}>
                Mehr erfahren unter PPWR &amp; Food Contact
              </Link>
            </p>
          </div>
          <div className="origin__stats sr-stagger">
            <div className="origin-stat sr-fade-up">
              <h2>10 %</h2>
              <p>ab 2030</p>
            </div>
            <div className="origin-stat sr-fade-up">
              <h2>25 %</h2>
              <p>ab 2040</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Quotentabelle">
        <div className="container">
          <PageTable
            headers={page.quoteTable.headers}
            rows={page.quoteTable.rows}
            footnote={page.quoteTable.footnote}
          />
        </div>
      </section>

      <section className="section trace" aria-labelledby="kosmetik-proof-title">
        <div className="container">
          <SectionLead title={page.proof.title} leitgedanke={page.proof.lead} />
          <ProcessChain
            steps={[
              { title: "Dokumentierte Herkunft", text: "nachvollziehbare Herkunft des Post-Consumer-Materials", icon: "file-text" },
              { title: "Eingangskontrolle", text: "definierte Inputspezifikation, CoA und Flake Scan", icon: "clipboard-text" },
              { title: "Chargenbezogene Qualität", text: "NIAS-Analyse jedes Produktionsloses", icon: "flask" },
              { title: "Lieferdokumente", text: "CoA, Konformitätserklärung und Rückverfolgbarkeit auf Anfrage", icon: "file-magnifying-glass" },
            ]}
          />
          <p className="page-split__lead" style={{ marginTop: "var(--space-xl)" }}>
            {page.proof.note}
          </p>
          <p className="trace__proof sr-fade-up">{page.proof.proof}</p>
        </div>
      </section>

      <PageSplit
        id="anwendungen"
        eyebrow="Anwendungen"
        title="Für vielfältige Kosmetikverpackungen"
        lead="RE-MAN mrPP und mrHDPE sind für die projektbezogene Qualifikation unter anderem für folgende Anwendungen vorgesehen."
        body={["Die Eignung wird für die konkrete Verpackung und Kosmetikanwendung geprüft."]}
        image={images.pages.modulKosmetik}
      />

      <section className="section" aria-labelledby="kosmetik-apps-title">
        <div className="container">
          <ul className="page-apps--display sr-stagger">
            {COSMETIC_APPS.map((item) => (
              <li key={item}>
                <Link href={ROUTES.materialien}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageSplit {...page.split} inverse />

      <section className="section" aria-labelledby="kosmetik-quality-title">
        <div className="container page-split__copy sr-fade-up">
          <h2 id="kosmetik-quality-title">{page.quality.title}</h2>
          <p className="page-split__lead">{page.quality.lead}</p>
        </div>
      </section>

      <section className="section page-faq" aria-labelledby="kosmetik-freedom-title">
        <div className="container page-split__copy sr-fade-up">
          <h2 id="kosmetik-freedom-title">{page.freedom.title}</h2>
          <p className="page-split__lead">{page.freedom.lead}</p>
        </div>
      </section>

      <section className="section origin" aria-labelledby="kosmetik-smell-title">
        <div className="container origin__copy sr-fade-up">
          <h6>Geruch</h6>
          <h2 id="kosmetik-smell-title">{page.smell.title}</h2>
          <p className="trace__proof">{page.smell.quote}</p>
          <p className="origin__lead">{page.smell.lead}</p>
          <p>
            <a className="btn btn--primary btn--lg" href={CTA.sample.href}>
              <span>{CTA.sample.label}</span>
              <Icon name="arrow-right" className="icon icon--inverse" />
            </a>
          </p>
        </div>
      </section>

      <section className="section goals" aria-labelledby="kosmetik-paths-title">
        <div className="container">
          <SectionLead title={page.paths.title} leitgedanke="Marke oder Verpacker. Material und Dokumentation von RE-MAN." />
          <div className="grid-2 sr-stagger" style={{ marginTop: "var(--space-2xl)" }}>
            <StoryCard
              title={page.paths.items[0].title}
              text={page.paths.items[0].text}
              image={images.pages.heroKosmetik}
            />
            <StoryCard
              title={page.paths.items[1].title}
              text={page.paths.items[1].text}
              image={images.pages.modulKosmetik}
            />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="kosmetik-docs-title">
        <div className="container page-split__copy sr-fade-up">
          <h2 id="kosmetik-docs-title">{page.docs.title}</h2>
          <p className="page-split__lead">{page.docs.lead}</p>
        </div>
      </section>
      <PagePrefooter closing={page.closing} />
    </>
  );
}
