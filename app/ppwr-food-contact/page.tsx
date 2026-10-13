import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { PagePrefooter } from "../components/page-prefooter";
import { PageSplit } from "../components/page-split";
import { PageTable } from "../components/page-table";
import { ProcessChain } from "../components/process-chain";
import { SectionLead } from "../components/section-lead";
import { PAGE_PPWR } from "@/lib/page-content";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "PPWR-Rezyklatquote und Food-Contact-Recycling",
  description:
    "PPWR Art. 7: 10 % / 25 % für kontaktsensitive Nicht-PET-Verpackungen, 35 % / 65 % für andere Kunststoffverpackungen.",
};

export default function PpwrPage() {
  const page = PAGE_PPWR;

  return (
    <>
      <PageHero {...page.hero} />
      <section className="section" id={page.table.id} aria-labelledby="ppwr-table-title">
        <div className="container">
          <SectionLead title="Die PPWR-Rezyklatquote" leitgedanke={page.intro} />
          <PageTable
            caption={page.table.caption}
            headers={page.table.headers}
            rows={page.table.rows}
            footnote={page.table.footnote}
          />
          <p className="page-split__lead" style={{ marginTop: "var(--space-lg)" }}>
            Offizielle Quelle:{" "}
            <a href="https://eur-lex.europa.eu/eli/reg/2025/40/oj/deu">Artikel 7 der PPWR im Original</a>.
          </p>
        </div>
      </section>

      <section className="section origin" aria-labelledby="ppwr-why-title">
        <div className="container origin__grid">
          <div className="origin__copy sr-fade-up">
            <h6>Zeitfenster</h6>
            <h2 id="ppwr-why-title">{page.why.title}</h2>
            <p className="origin__lead">{page.why.lead}</p>
          </div>
          <div className="origin__stats sr-stagger">
            <div className="origin-stat sr-fade-up">
              <h2>18–24</h2>
              <p>Monate typische Qualifikation</p>
            </div>
            <div className="origin-stat sr-fade-up">
              <h2>2030</h2>
              <p>PPWR-Rezyklatquoten</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ppwr-pir-title">
        <div className="container">
          <SectionLead title={page.pir.title} leitgedanke={page.pir.lead} />
          <PageTable headers={page.pir.headers} rows={page.pir.rows} />
        </div>
      </section>

      <section className="section" aria-labelledby="ppwr-roles-title">
        <div className="container">
          <SectionLead title={page.roles.title} leitgedanke="RE-MAN liefert Material und Dokumentation." />
          <PageTable headers={page.roles.headers} rows={page.roles.rows} />
        </div>
      </section>

      <PageSplit
        id="food-contact"
        eyebrow="VO (EU) 2022/1616"
        title={page.foodContact.title}
        lead={page.foodContact.lead}
        body={[page.foodContact.note]}
        image={images.pages.modulLabor}
        inverse
      />

      <section className="section trace" aria-labelledby="ppwr-1616-title">
        <div className="container">
          <SectionLead
            title="Drei wesentliche Stufen"
            leitgedanke="Offizielle Quelle: VO (EU) 2022/1616."
          />
          <p className="page-split__lead sr-fade-up">
            <a href="https://eur-lex.europa.eu/eli/reg/2022/1616/oj/deu">VO (EU) 2022/1616 im Original</a>.
          </p>
          <ProcessChain
            steps={[
              { title: "Materialinput", text: page.foodContact.stages[0], icon: "factory" },
              { title: "Dekontamination", text: page.foodContact.stages[1], icon: "gear-six" },
              { title: "Nachbearbeitung", text: page.foodContact.stages[2], icon: "package" },
            ]}
          />
        </div>
      </section>

      <section className="section origin" id={page.ntn.id} aria-labelledby="ppwr-ntn-title">
        <div className="container origin__grid">
          <div className="origin__copy sr-fade-up">
            <h6>Kein Zertifikat. Keine Zulassung.</h6>
            <h2 id="ppwr-ntn-title">{page.ntn.title}</h2>
            <p className="origin__lead">{page.ntn.lead}</p>
            <p className="origin__lead">{page.ntn.note}</p>
          </div>
          <div className="origin__stats sr-stagger">
            {page.ntn.items.map((item) => (
              <div className="origin-stat sr-fade-up" key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section trace" aria-labelledby="ppwr-chain-title">
        <div className="container">
          <SectionLead title={page.chain.title} leitgedanke={page.chain.chain} />
          <p className="page-split__lead sr-fade-up">{page.chain.lead}</p>
          <ProcessChain
            steps={[
              { title: "NIAS-Analyse", text: "je Produktionslos durch ein akkreditiertes Labor", icon: "flask" },
              { title: "Evaluation Report", text: "intern, anwendungsbezogen neu bewertet", icon: "file-magnifying-glass" },
              { title: "Annex III Part A", text: "kundenspezifische Konformitätserklärung", icon: "file-text" },
              { title: "CoA", text: "mit jeder Serienlieferung", icon: "clipboard-text" },
            ]}
          />
          <p className="page-split__lead" style={{ marginTop: "var(--space-xl)" }}>
            {page.chain.note}
          </p>
        </div>
      </section>

      <section className="section page-faq" id={page.faq.id} aria-labelledby="ppwr-faq-title">
        <div className="container">
          <SectionLead title={page.faq.title} leitgedanke={page.faq.leitgedanke} />
          <div className="page-faq__list sr-stagger">
            {page.faq.items.map((item) => (
              <article className="page-faq__item sr-fade-up" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PagePrefooter closing={page.closing} />
    </>
  );
}
