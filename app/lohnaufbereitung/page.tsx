import type { Metadata } from "next";
import { PageFacts } from "../components/page-facts";
import { PageHero } from "../components/page-hero";
import { PagePrefooter } from "../components/page-prefooter";
import { PageSplit } from "../components/page-split";
import { ProcessChain } from "../components/process-chain";
import { SectionLead } from "../components/section-lead";
import { PAGE_LOHN } from "@/lib/page-content";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "Lohnaufbereitung — RE-MAN",
  description: "Ihr Material. Unser Verfahren. Kundeneigenes PP und HDPE mit viscoZERO, dokumentierte Freigabe.",
};

export default function LohnaufbereitungPage() {
  const page = PAGE_LOHN;

  return (
    <>
      <PageHero {...page.hero} />
      <PageFacts {...page.facts} />
      <PageSplit
        id="input"
        eyebrow="Input"
        title="Nur definierter Input wird zu definierter Qualität."
        lead={page.lead}
        body={[page.process.leitgedanke]}
        image={images.pages.modulHalle}
      />
      <section className="section trace" id={page.process.id} aria-labelledby="lohn-process-title">
        <div className="container">
          <SectionLead title={page.process.title} leitgedanke={page.process.leitgedanke} />
          <ProcessChain
            steps={[
              { title: page.process.steps[0].title, text: page.process.steps[0].text, icon: "file-text" },
              { title: page.process.steps[1].title, text: page.process.steps[1].text, icon: "clipboard-text" },
              { title: page.process.steps[2].title, text: page.process.steps[2].text, icon: "list-checks" },
              { title: page.process.steps[3].title, text: page.process.steps[3].text, icon: "truck" },
              { title: page.process.steps[4].title, text: page.process.steps[4].text, icon: "gear-six" },
            ]}
          />
        </div>
      </section>
      <section className="section origin" aria-labelledby="lohn-result-title">
        <div className="container origin__grid">
          <div className="origin__copy sr-fade-up">
            <h6>Ergebnis</h6>
            <h2 id="lohn-result-title">{page.result.title}</h2>
            <p className="origin__lead">{page.result.lead}</p>
            <p className="origin__lead">{page.result.note}</p>
          </div>
          <div className="origin__stats sr-stagger">
            {page.result.items.map((item) => (
              <div className="origin-stat sr-fade-up" key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section page-faq" aria-labelledby="lohn-know-title">
        <div className="container page-split__copy sr-fade-up">
          <h2 id="lohn-know-title">{page.know.title}</h2>
          <p className="page-split__lead">{page.know.lead}</p>
        </div>
      </section>
      <PagePrefooter closing={page.closing} />
    </>
  );
}
