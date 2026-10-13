import Link from "next/link";
import { Icon } from "./components/site-icon";
import { CTA, ROUTES } from "@/lib/navigation";
import { PAGE_404 } from "@/lib/page-content";

export default function NotFound() {
  return (
    <section className="section" aria-labelledby="not-found-title">
      <div className="container page-split__copy">
        <h1 id="not-found-title">{PAGE_404.title}</h1>
        <p className="page-split__lead">{PAGE_404.text}</p>
        <ul className="page-bullets">
          <li>
            <Link href={ROUTES.materialien}>Materialien ansehen</Link>
          </li>
          <li>
            <Link href={ROUTES.home}>Zur Startseite</Link>
          </li>
        </ul>
        <p style={{ marginTop: "var(--space-xl)" }}>
          <a className="btn btn--primary btn--xl" href={CTA.consultation.href}>
            <span>{CTA.consultation.label}</span>
            <Icon name="arrow-right" className="icon icon--inverse" />
          </a>
        </p>
      </div>
    </section>
  );
}
