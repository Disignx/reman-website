import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationForm } from "../../components/application-form";
import { PageFacts } from "../../components/page-facts";
import { PageHero } from "../../components/page-hero";
import { PagePrefooter } from "../../components/page-prefooter";
import { PageSplit } from "../../components/page-split";
import { ProcessChain } from "../../components/process-chain";
import { SectionLead } from "../../components/section-lead";
import { StoryCard } from "../../components/story-card";
import { ROUTES } from "@/lib/navigation";
import { images } from "@/lib/media";
import { FOOD_APPS, PAGE_LEBENSMITTEL } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Lebensmittelverpackung — RE-MAN",
  description:
    "PPWR-Quote mit lebensmitteltauglichem mrPP und mrHDPE. Becher, Schalen, Flaschen, Verschlüsse, Tuben.",
};

export default function LebensmittelPage() {
  const page = PAGE_LEBENSMITTEL;

  return (
    <>
      <PageHero {...page.hero} />
      <PageFacts {...page.facts} />

      <section className="section goals" aria-labelledby="food-paths-title">
        <div className="container">
          <SectionLead title={page.paths.title} leitgedanke={page.paths.leitgedanke} />
          <div className="grid-2 sr-stagger" style={{ marginTop: "var(--space-2xl)" }}>
            <StoryCard
              title={page.paths.items[0].title}
              text={page.paths.items[0].text}
              image={images.pages.modulLebensmittel}
            />
            <StoryCard
              title={page.paths.items[1].title}
              text={page.paths.items[1].text}
              image={images.home.goalPpwr}
            />
          </div>
        </div>
      </section>

      <PageSplit
        id="anwendungen"
        eyebrow="Typische Anwendungen"
        title="Becher, Schalen, Flaschen, Verschlüsse, Tuben."
        lead="Lebensmitteltaugliches mrPP und mrHDPE von RE-MAN kann für unterschiedliche Verpackungen qualifiziert werden."
        body={[page.appsNote]}
        image={images.pages.heroLebensmittel}
      />

      <section className="section" aria-labelledby="food-apps-title">
        <div className="container">
          <ul className="page-apps--display sr-stagger">
            {FOOD_APPS.map((item) => (
              <li key={item}>
                <Link href={ROUTES.materialien}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section origin" aria-labelledby="food-quote-title">
        <div className="container origin__grid">
          <div className="origin__copy sr-fade-up">
            <h6>Art. 7 PPWR</h6>
            <h2 id="food-quote-title">Die PPWR-Anforderung für PP- und HDPE-Verpackungen</h2>
            <p className="origin__lead">{page.quoteNote}</p>
            <p>
              <Link className="text-link text-link--inverse" href={ROUTES.ppwr}>
                Alle PPWR-Quoten unter PPWR &amp; Food Contact
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

      <section className="section trace" id={page.chain.id} aria-labelledby="food-chain-title">
        <div className="container">
          <SectionLead title={page.chain.title} leitgedanke={page.chain.leitgedanke} />
          <p className="page-split__lead sr-fade-up">{page.chain.intro}</p>
          <h3 style={{ marginTop: "var(--space-2xl)" }}>{page.chain.musterTitle}</h3>
          <ProcessChain
            steps={[
              { title: page.chain.muster[0].title, text: page.chain.muster[0].text, icon: "file-text" },
              { title: page.chain.muster[1].title, text: page.chain.muster[1].text, icon: "clipboard-text" },
              { title: page.chain.muster[2].title, text: page.chain.muster[2].text, icon: "package" },
              { title: page.chain.muster[3].title, text: page.chain.muster[3].text, icon: "gear-six" },
              { title: page.chain.muster[4].title, text: page.chain.muster[4].text, icon: "shield-check" },
            ]}
          />
          <h3 style={{ marginTop: "var(--space-3xl)" }}>{page.chain.serieTitle}</h3>
          <ProcessChain
            steps={[
              { title: page.chain.serie[0].title, text: page.chain.serie[0].text, icon: "flask" },
              { title: page.chain.serie[1].title, text: page.chain.serie[1].text, icon: "file-magnifying-glass" },
              { title: page.chain.serie[2].title, text: page.chain.serie[2].text, icon: "check-circle" },
              { title: page.chain.serie[3].title, text: page.chain.serie[3].text, icon: "file-text" },
              { title: page.chain.serie[4].title, text: page.chain.serie[4].text, icon: "truck" },
            ]}
          />
          <p className="page-split__lead" style={{ marginTop: "var(--space-xl)" }}>
            {page.chain.note}
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="food-graphic-title">
        <div className="container">
          <SectionLead title={page.graphic.title} leitgedanke={page.graphic.lead} />
          <ProcessChain
            steps={[
              { title: page.graphic.steps[0].title, text: page.graphic.steps[0].text, icon: "factory" },
              { title: page.graphic.steps[1].title, text: page.graphic.steps[1].text, icon: "clipboard-text" },
              { title: page.graphic.steps[2].title, text: page.graphic.steps[2].text, icon: "gear-six" },
              { title: page.graphic.steps[3].title, text: page.graphic.steps[3].text, icon: "flask" },
              { title: page.graphic.steps[4].title, text: page.graphic.steps[4].text, icon: "file-magnifying-glass" },
              { title: page.graphic.steps[5].title, text: page.graphic.steps[5].text, icon: "shield-check" },
              { title: page.graphic.steps[6].title, text: page.graphic.steps[6].text, icon: "truck" },
            ]}
          />
        </div>
      </section>

      <section className="section page-faq" aria-labelledby="food-muster-title">
        <div className="container">
          <SectionLead title="Beispiel-Konformitätserklärung" leitgedanke="MUSTER – NICHT PRODUKTBEZOGEN" />
          <article className="sample-doc sr-fade-up">
            <p className="sample-doc__stamp">MUSTER – NICHT PRODUKTBEZOGEN</p>
            <h3>Konformitätserklärung nach Annex III Part A</h3>
            <p>
              Platzhalter ohne Kunden-, Chargen- oder Produktdaten. Dieses Muster ersetzt keine Konformitätserklärung
              für gelieferte Ware.
            </p>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="food-benefit-title">
        <div className="container">
          <SectionLead title={page.benefit.title} leitgedanke="Nutzen für den Hersteller." />
          <ul className="page-bullets sr-stagger">
            {page.benefit.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section contact-layout" aria-labelledby="food-form-title">
        <div className="container">
          <SectionLead
            title="Anwendungs-Erfassungsdatenblatt"
            leitgedanke="Datengrundlage für die anwendungsbezogene Bewertung und Annex III A."
          />
          <div className="contact-grid" style={{ marginTop: "var(--space-2xl)" }}>
            <ApplicationForm />
            <p className="page-split__lead">
              Auf dieser Seite können Sie das Anwendungs-Erfassungsdatenblatt online ausfüllen und direkt mit Ihrer
              Anfrage an RE-MAN übermitteln. Eine neue oder geänderte Anwendung wird neu bewertet. Die Verantwortung
              für die Freigabe der fertigen Verpackung liegt bei Ihnen.
            </p>
          </div>
        </div>
      </section>
      <PagePrefooter closing={page.closing} />
    </>
  );
}
