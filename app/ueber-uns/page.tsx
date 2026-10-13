import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { PagePrefooter } from "../components/page-prefooter";
import { PageSplit } from "../components/page-split";
import { ProcessChain } from "../components/process-chain";
import { SectionLead } from "../components/section-lead";
import { PAGE_ABOUT } from "@/lib/page-content";
import { SITE_CONTACT } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Über RE-MAN — RE-MAN",
  description: "REcycling. MANufacturing. RE-MAN — eigenständige Marke der PET-MAN GmbH in Frankenburg am Hausruck.",
};

export default function UeberUnsPage() {
  const page = PAGE_ABOUT;

  return (
    <>
      <PageHero {...page.hero} />
      <section className="section" aria-labelledby="about-name-title">
        <div className="container page-split__copy sr-fade-up">
          <h2 id="about-name-title">{page.name.title}</h2>
          <p className="page-split__lead">{page.name.lead}</p>
          <p>{page.name.body}</p>
        </div>
      </section>
      <section className="section origin" aria-labelledby="about-gap-title">
        <div className="container origin__copy sr-fade-up">
          <h6>PPWR 2030</h6>
          <h2 id="about-gap-title">{page.gap.title}</h2>
          <p className="origin__lead">{page.gap.lead}</p>
          <p className="origin__lead">{page.gap.body}</p>
        </div>
      </section>
      <PageSplit {...page.split} />
      <section className="section origin" aria-labelledby="about-supply-title">
        <div className="container origin__grid">
          <div className="origin__copy sr-fade-up">
            <h6>Lieferfähigkeit</h6>
            <h2 id="about-supply-title">{page.supply.title}</h2>
            <p className="origin__lead">{page.supply.lead}</p>
            <p>
              <a className="text-link text-link--inverse" href={SITE_CONTACT.petmanHref}>
                Mehr über PET-MAN erfahren
              </a>
            </p>
          </div>
          <div className="origin__stats sr-stagger">
            {page.supply.rows.map((stat) => (
              <div className="origin-stat sr-fade-up" key={stat.label}>
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section trace" aria-labelledby="about-quality-title">
        <div className="container">
          <SectionLead title={page.quality.title} leitgedanke={page.quality.lead} />
          <ProcessChain
            steps={[
              { title: "Input-Charge", icon: "recycle" },
              { title: "Flake Scan und Eingangs-CoA", icon: "clipboard-text" },
              { title: "Produktionslos", icon: "factory" },
              { title: "NIAS-Analyse und Freigabe", icon: "flask" },
              { title: "Liefercharge", icon: "package" },
              { title: "Kunden-CoA und Konformitätserklärung", icon: "file-text" },
            ]}
          />
          <p className="trace__proof sr-fade-up">{page.quality.note}</p>
        </div>
      </section>
      <section className="section" aria-labelledby="about-path-title">
        <div className="container">
          <SectionLead title={page.path.title} leitgedanke={page.path.lead} />
          <ProcessChain
            steps={[
              { title: "Materialmuster", icon: "package" },
              { title: "Verarbeitungstest", icon: "gear-six" },
              { title: "Qualifikation", icon: "list-checks" },
              { title: "Serienlieferung", icon: "truck" },
            ]}
          />
        </div>
      </section>
      <PagePrefooter closing={page.closing} />
    </>
  );
}
