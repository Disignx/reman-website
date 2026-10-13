"use client";

import { FormEvent, useEffect, useState } from "react";
import { Icon } from "./site-icon";
import { SITE_CONTACT } from "@/lib/site-config";

const TOPICS = [
  "Beratung anfragen",
  "Anwendung besprechen",
  "Muster anfragen",
  "Lohnaufbereitung anfragen",
  "Produktionsbesichtigung anfragen",
  "anderes Anliegen",
] as const;

type Topic = (typeof TOPICS)[number];

function topicFromHash(): Topic {
  if (typeof window === "undefined") {
    return TOPICS[0];
  }
  const hash = window.location.hash;
  if (hash === "#muster") {
    return "Muster anfragen";
  }
  if (hash === "#besichtigung") {
    return "Produktionsbesichtigung anfragen";
  }
  return TOPICS[0];
}

export function ContactForm() {
  const [topic, setTopic] = useState<Topic>(TOPICS[0]);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setTopic(topicFromHash());
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [...data.entries()]
      .filter(([, value]) => String(value).trim() !== "")
      .map(([key, value]) => `${key}: ${String(value).trim()}`);

    const href = `mailto:${SITE_CONTACT.email}?subject=${encodeURIComponent(`RE-MAN — ${topic}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form className="contact-form" id="muster" onSubmit={onSubmit}>
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
        Telefonnummer (optional)
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        Land
        <input name="country" type="text" autoComplete="country-name" required />
      </label>
      <label>
        Ihr Anliegen
        <select name="anliegen" value={topic} onChange={(event) => setTopic(event.target.value as Topic)}>
          {TOPICS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      {topic === "Anwendung besprechen" ? (
        <>
          <label>
            Geplante Verpackung oder Anwendung
            <input name="anwendung" type="text" />
          </label>
          <label>
            Material
            <select name="material" defaultValue="">
              <option value="">noch offen</option>
              <option value="mrPP">mrPP</option>
              <option value="mrHDPE">mrHDPE</option>
            </select>
          </label>
        </>
      ) : null}

      {topic === "Muster anfragen" ? (
        <>
          <label>
            Material
            <select name="material" defaultValue="">
              <option value="">noch offen</option>
              <option value="mrPP">mrPP</option>
              <option value="mrHDPE">mrHDPE</option>
            </select>
          </label>
          <label>
            Geplante Anwendung
            <input name="anwendung" type="text" />
          </label>
          <label>
            Gewünschte Mustermenge, falls bekannt
            <input name="menge" type="text" />
          </label>
        </>
      ) : null}

      {topic === "Lohnaufbereitung anfragen" ? (
        <>
          <label>
            Material
            <select name="material" defaultValue="PP">
              <option value="PP">PP</option>
              <option value="HDPE">HDPE</option>
            </select>
          </label>
          <label>
            Herkunft beziehungsweise Materialstrom
            <input name="herkunft" type="text" />
          </label>
          <label>
            Ungefähr verfügbare Menge
            <input name="menge" type="text" />
          </label>
        </>
      ) : null}

      <label>
        Nachricht
        <textarea name="nachricht" rows={5} required />
      </label>
      <label className="contact-form__check">
        <input name="datenschutz" type="checkbox" required />
        <span>
          Ich habe die{" "}
          <a href="/datenschutz/">Datenschutzerklärung</a>
          {" "}zur Kenntnis genommen.
        </span>
      </label>
      <button className="btn btn--primary btn--xl" type="submit">
        <span>{sent ? "E-Mail-Programm geöffnet" : "Anfrage senden"}</span>
        <Icon name="arrow-right" className="icon icon--inverse" />
      </button>
      <p className="contact-form__note">Wir melden uns in den nächsten Tagen persönlich bei Ihnen.</p>
    </form>
  );
}
