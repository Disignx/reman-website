import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — RE-MAN",
  description: "Impressum der Marke RE-MAN (PET-MAN GmbH) — Inhalt folgt.",
};

export default function ImpressumPage() {
  return (
    <section className="legal-stub">
      <div className="container">
        <h1>Impressum</h1>
        <p>
          Der rechtliche Impressumstext wird in einer späteren Phase ergänzt. RE-MAN ist eine Marke der
          PET-MAN GmbH.
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          <Link href="/">Zur Startseite</Link>
        </p>
      </div>
    </section>
  );
}
