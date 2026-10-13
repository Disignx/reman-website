"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./site-icon";
import { FOOD_APPS } from "@/lib/page-content";
import { SITE_CONTACT } from "@/lib/site-config";

export function ApplicationForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [...data.entries()]
      .filter(([, value]) => String(value).trim() !== "")
      .map(([key, value]) => `${key}: ${String(value).trim()}`);

    const href = `mailto:${SITE_CONTACT.email}?subject=${encodeURIComponent("RE-MAN — Anwendungs-Erfassungsdatenblatt")}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form className="contact-form" id="anwendungsdaten" onSubmit={onSubmit}>
      <label>
        Vor- und Nachname
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Unternehmen
        <input name="company" type="text" autoComplete="organization" required />
      </label>
      <label>
        Geschäftliche E-Mail-Adresse
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Material
        <select name="material" required defaultValue="mrPP">
          <option value="mrPP">mrPP</option>
          <option value="mrHDPE">mrHDPE</option>
        </select>
      </label>
      <label>
        Vorgesehene Verpackung
        <select name="verpackung" required defaultValue={FOOD_APPS[0]}>
          {FOOD_APPS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        Füllgut / Lebensmittelanwendung
        <input name="fuellgut" type="text" required />
      </label>
      <label>
        Kontaktbedingungen
        <textarea name="kontaktbedingungen" rows={3} required />
      </label>
      <label>
        Lager- bzw. Haltbarkeitsdauer
        <input name="haltbarkeit" type="text" required />
      </label>
      <label>
        Weitere Angaben zur Anwendung gemäß VO (EU) 2022/1616
        <textarea name="angaben" rows={4} />
      </label>
      <button className="btn btn--primary btn--xl" type="submit">
        <span>{sent ? "E-Mail-Programm geöffnet" : "Anfrage senden"}</span>
        <Icon name="arrow-right" className="icon icon--inverse" />
      </button>
      <p className="contact-form__note">
        Grundlage für die anwendungsbezogene Bewertung und die Erstellung des Annex III A. Keine automatische
        PDF-Erstellung.
      </p>
    </form>
  );
}
