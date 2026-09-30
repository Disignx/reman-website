import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz — RE-MAN",
  description: "Datenschutzerklärung der Marke RE-MAN — Inhalt folgt.",
};

export default function DatenschutzPage() {
  return (
    <section className="legal-stub">
      <div className="container">
        <h1>Datenschutz</h1>
        <p>
          Die Datenschutzerklärung wird in einer späteren Phase ergänzt. Diese Marketing-Website speichert
          derzeit keine Analytics- oder Cookie-Consent-Daten.
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          <Link href="/">Zur Startseite</Link>
        </p>
      </div>
    </section>
  );
}
