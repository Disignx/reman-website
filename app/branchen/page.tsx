import type { Metadata } from "next";
import { GoalCard } from "../components/goal-card";
import { PageHero } from "../components/page-hero";
import { PagePrefooter } from "../components/page-prefooter";
import { SectionLead } from "../components/section-lead";
import { PAGE_BRANCHEN } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Branchen — RE-MAN",
  description: "Lebensmittelverpackung und Kosmetik. Automotive / ELV in Entwicklung, auf Anfrage.",
};

export default function BranchenPage() {
  return (
    <>
      <PageHero {...PAGE_BRANCHEN.hero} />
      <section className="section goals" aria-label="Branchenseiten">
        <div className="container">
          <SectionLead
            title="Zum Launch zwei volle Branchenseiten"
            leitgedanke="Regulierung, Anwendungen, Nutzen, Nachweis, CTA."
          />
          <div className="grid-2 sr-stagger" style={{ marginTop: "var(--space-2xl)" }}>
            {PAGE_BRANCHEN.cards.map((card) => (
              <GoalCard key={card.title} title={card.title} cta={card.cta} image={card.image} />
            ))}
          </div>
        </div>
      </section>
      <section className="section page-faq" id={PAGE_BRANCHEN.further.id} aria-labelledby="weitere-title">
        <div className="container">
          <SectionLead title={PAGE_BRANCHEN.further.title} leitgedanke={PAGE_BRANCHEN.further.leitgedanke} />
          <div className="page-faq__list sr-stagger">
            {PAGE_BRANCHEN.further.items.map((item) => (
              <article className="page-faq__item sr-fade-up" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.status}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PagePrefooter />
    </>
  );
}
