import type { Metadata } from "next";
import { ContactForm } from "../components/contact-form";
import { Icon } from "../components/site-icon";
import { PageHero } from "../components/page-hero";
import { PagePrefooter } from "../components/page-prefooter";
import { SectionLead } from "../components/section-lead";
import { CTA } from "@/lib/navigation";
import { PAGE_KONTAKT } from "@/lib/page-content";
import { SITE_CONTACT, SITE_PEOPLE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt — RE-MAN",
  description: "Der Weg zur Serie beginnt mit einem Gespräch. PET-MAN GmbH / RE-MAN, Frankenburg am Hausruck.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero {...PAGE_KONTAKT.hero} />
      <section className="section contact-layout" aria-labelledby="contact-form-title">
        <div className="container contact-grid">
          <div className="sr-fade-up">
            <h6>Anfrage</h6>
            <h2 id="contact-form-title">Worum geht es bei Ihnen?</h2>
            <p className="page-split__lead" style={{ marginBlockEnd: "var(--space-xl)" }}>
              Ob PPWR-Quote, Materialmuster, neue Verpackungsanwendung oder Lohnaufbereitung: Sagen Sie uns, was Sie
              vorhaben. Das Anwendungs-Erfassungsdatenblatt steht nur auf der Seite Lebensmittelverpackung.
            </p>
            <ContactForm />
          </div>
          <aside className="contact-aside sr-stagger">
            <div className="contact-card sr-fade-up">
              <Icon name="map-pin" className="icon icon--lg icon--primary" weight="thin" />
              <h3>{SITE_CONTACT.company}</h3>
              <p>
                {SITE_CONTACT.street}
                <br />
                {SITE_CONTACT.city}
                <br />
                {SITE_CONTACT.country}
              </p>
              <p>
                <a href={SITE_CONTACT.mapsHref}>Route planen</a>
              </p>
            </div>
            <p className="page-split__lead sr-fade-up">{PAGE_KONTAKT.peopleLead}</p>
            {SITE_PEOPLE.map((person) => (
              <div className="contact-card sr-fade-up" key={person.name}>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
                <p>Direkte E-Mail-Adresse folgt.</p>
              </div>
            ))}
            <div className="contact-card sr-fade-up">
              <Icon name="envelope" className="icon icon--lg icon--primary" weight="thin" />
              <h3>Zentrale</h3>
              <p>
                <a href={`mailto:${SITE_CONTACT.email}`}>{SITE_CONTACT.email}</a>
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section className="section page-faq" id={PAGE_KONTAKT.visit.id} aria-labelledby="visit-title">
        <div className="container">
          <SectionLead title={PAGE_KONTAKT.visit.title} leitgedanke={PAGE_KONTAKT.visit.note} />
          <p className="page-split__lead sr-fade-up">{PAGE_KONTAKT.visit.text}</p>
          <p style={{ marginTop: "var(--space-xl)" }}>
            <a className="btn btn--primary btn--xl" href={CTA.visit.href}>
              <span>{CTA.visit.label}</span>
              <Icon name="arrow-right" className="icon icon--inverse" />
            </a>
          </p>
        </div>
      </section>
      <PagePrefooter />
    </>
  );
}
