import Link from "next/link";
import { ThemeImage } from "./theme-image";
import { FOOTER_COLUMNS, LEGAL_LINKS } from "@/lib/navigation";
import { SITE_LEGAL } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top sr-stagger">
          <div className="sr-fade-up">
            <Link href="/" aria-label="RE-MAN Startseite">
              <ThemeImage kind="logo" className="site-footer__logo" />
            </Link>
          </div>

          <nav className="site-footer__nav" aria-label="Fußnavigation">
            {FOOTER_COLUMNS.map((column) => (
              <div className="site-footer__col sr-fade-up" key={column.title}>
                <h3>{column.title}</h3>
                <ul className="site-footer__links">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="site-footer__lang sr-fade-up" aria-label="Sprache">
            <a href="/" className="is-active" lang="de" hrefLang="de" aria-current="true">
              DE
            </a>
            <span aria-hidden="true">|</span>
            <a href="/" lang="en" hrefLang="en" title="English folgt">
              EN
            </a>
          </div>
        </div>

        <div className="site-footer__bottom sr-fade">
          <p>{SITE_LEGAL.brandRelation}</p>
          <ul className="site-footer__legal">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
