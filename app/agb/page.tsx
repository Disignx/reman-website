import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AGB — RE-MAN",
  description: "Allgemeine Geschäftsbedingungen der Marke RE-MAN — Inhalt folgt.",
};

export default function AgbPage() {
  return (
    <section className="legal-stub">
      <div className="container">
        <h1>AGB</h1>
        <p>Die Allgemeinen Geschäftsbedingungen werden in einer späteren Phase ergänzt.</p>
        <p style={{ marginTop: "1.5rem" }}>
          <Link href="/">Zur Startseite</Link>
        </p>
      </div>
    </section>
  );
}
