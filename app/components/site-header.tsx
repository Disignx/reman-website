"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./site-icon";
import { ThemeImage } from "./theme-image";
import { CTA, PRIMARY_NAV } from "@/lib/navigation";

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const trigger = document.getElementById("header-trigger");

    if (!header || !trigger || !("IntersectionObserver" in window)) {
      return;
    }

    const setScrollState = (isIntersecting: boolean) => {
      header.classList.toggle("hasscroll", !isIntersecting);
    };

    setScrollState(trigger.getBoundingClientRect().bottom <= 0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrollState(entry.isIntersecting);
      },
      { root: null, threshold: 0, rootMargin: "0px" },
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("show-mobile-navigation", menuOpen);
    return () => document.body.classList.remove("show-mobile-navigation");
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => {
    setMenuOpen((open) => !open);
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__bar">
        <div className="container site-header__inner">
          <Link className="site-header__brand" href="/" aria-label="RE-MAN Startseite">
            <ThemeImage kind="logo" priority className="site-header__logo" />
          </Link>

          <nav className="site-header__nav" aria-label="Hauptnavigation">
            <ul className="site-header__nav-list">
              {PRIMARY_NAV.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <div className="site-header__lang" aria-label="Sprache">
              <a href="/" className="is-active" lang="de" hrefLang="de" aria-current="true">
                DE
              </a>
              <span aria-hidden="true">|</span>
              <a href="/" lang="en" hrefLang="en" aria-disabled="true" title="English folgt">
                EN
              </a>
            </div>

            <a className="btn btn--primary btn--lg site-header__cta" href={CTA.consultation.href}>
              <span>{CTA.consultation.label}</span>
              <Icon name="arrow-right" className="icon icon--inverse" />
            </a>

            <button
              type="button"
              className={`site-header__burger${menuOpen ? " is-active" : ""}`}
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={menuOpen}
              aria-controls="site-header-mobile-nav"
              onClick={toggleMenu}
            >
              <span className="site-header__burger-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <nav
        id="site-header-mobile-nav"
        className="site-header__mobile"
        aria-label="Mobile Navigation"
        aria-hidden={!menuOpen}
      >
        <ul className="site-header__mobile-list">
          {PRIMARY_NAV.map((link) => (
            <li key={link.label}>
              <Link href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="site-header__mobile-lang" aria-label="Sprache">
          <a href="/" className="is-active" lang="de" hrefLang="de" aria-current="true" onClick={closeMenu}>
            DE
          </a>
          <span aria-hidden="true">|</span>
          <span lang="en">EN</span>
        </div>

        <a
          className="btn btn--primary btn--lg btn--block site-header__mobile-cta"
          href={CTA.consultation.href}
          onClick={closeMenu}
        >
          <span>{CTA.consultation.label}</span>
          <Icon name="arrow-right" className="icon icon--inverse" />
        </a>
      </nav>
    </header>
  );
}
