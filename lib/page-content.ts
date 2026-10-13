import type { IconName } from "@/app/components/site-icon";
import { CTA, ROUTES } from "./navigation";
import { images } from "./media";

const badgeKreislaufe = ["Kreisläufe", "für starke", "Verpackungen."] as const;

export const FOOD_APPS = ["Becher", "Schalen", "Flaschen", "Verschlüsse", "Tuben"] as const;
export const COSMETIC_APPS = [
  "Tiegel",
  "Dosen",
  "Flaschen",
  "Tuben",
  "Verschlüsse und Deckel",
  "Spendergehäuse",
] as const;

export const PAGE_BRANCHEN = {
  hero: {
    eyebrow: "Branchen",
    title: ["Lebensmittel und Kosmetik.", "Weitere Anwendungen auf Anfrage."] as const,
    subline: [
      "Jede Branchenseite folgt demselben Raster:",
      "Regulierung, Anwendungen, Nutzen, Nachweis, CTA.",
    ] as const,
    note: "Automotive / ELV: in Entwicklung / auf Anfrage.",
    badge: badgeKreislaufe,
    image: images.pages.modulHalle,
    primaryCta: CTA.discussApplication,
    secondaryCta: CTA.sample,
    crumbs: [{ href: ROUTES.branchen, label: "Branchen" }],
  },
  cards: [
    {
      title: "Lebensmittelverpackung",
      cta: { href: ROUTES.food, label: "Anwendung besprechen" },
      image: images.pages.heroLebensmittel,
    },
    {
      title: "Kosmetik",
      cta: { href: ROUTES.kosmetik, label: "Anwendung besprechen" },
      image: images.pages.heroKosmetik,
    },
  ],
  further: {
    id: "weitere",
    title: "Weitere Anwendungen",
    leitgedanke: "Modular erweiterbar. Nur namentlich, was bereits sprechbar ist.",
    items: [
      {
        name: "Automotive / ELV",
        status: "in Entwicklung / auf Anfrage",
      },
    ],
  },
} as const;

export const PAGE_LEBENSMITTEL = {
  hero: {
    eyebrow: "Lebensmittelverpackungen für 2030",
    title: ["Bringen Sie Post-Consumer-Rezyklat", "in Ihre Verpackung."] as const,
    subline: [
      "RE-MAN unterstützt Lebensmittelhersteller dabei, die PPWR-Quote",
      "mit lebensmitteltauglichem, mechanisch recyceltem PP und HDPE umzusetzen.",
    ] as const,
    note: "Die Serienfreigabe der fertigen Verpackung erteilen Sie.",
    badge: badgeKreislaufe,
    image: images.pages.heroLebensmittel,
    primaryCta: CTA.discussApplication,
    secondaryCta: CTA.sample,
    crumbs: [
      { href: ROUTES.branchen, label: "Branchen" },
      { href: ROUTES.food, label: "Lebensmittel" },
    ],
  },
  facts: {
    id: "regulierung",
    titleId: "food-reg-title",
    title: ["10 % ab 2030.", "25 % ab 2040."] as const,
    items: [
      {
        value: "10 %",
        label: "Mindestanteil PCR für kontaktsensitive\nNicht-PET-Verpackungen ab 2030",
        icon: "chart-pie-slice" as IconName,
      },
      {
        value: "25 %",
        label: "dieselbe Kategorie ab 2040\n(Art. 7 Abs. 2 lit. b)",
        icon: "calendar-blank" as IconName,
      },
      {
        value: "18–24 Monate",
        label: "typisch von der ersten Qualifikation\nbis zur Verpackung im Regal",
        icon: "clock-countdown" as IconName,
      },
    ],
  },
  paths: {
    title: "Zwei Wege. Ein Ziel.",
    leitgedanke: "RE-MAN vermittelt keine Verpackungspartner.",
    items: [
      {
        title: "Sie stellen Ihre Verpackung selbst her.",
        text: "Sie wählen das Material aus, fordern ein Muster an und prüfen es in Ihrer Anwendung. Die Freigabe der fertigen Verpackung erfolgt durch Ihr Unternehmen.",
      },
      {
        title: "Sie arbeiten mit einem Verpackungslieferanten.",
        text: "Binden Sie Ihren bestehenden Verpackungspartner ein — gemeinsam führen wir das Material bis zur Freigabe für Ihre Verpackung.",
      },
    ],
  },
  appsNote:
    "Welche Type für eine konkrete Verpackung geeignet ist, wird im Rahmen der anwendungsbezogenen Qualifikation geprüft. Die Serienfreigabe erfolgt durch den Kunden.",
  quoteNote:
    "Gemäß Art. 7 Abs. 1 lit. b der Verordnung (EU) 2025/40 müssen kontaktsensitive Kunststoffverpackungen aus anderen Materialien als PET ab 2030 einen Mindestanteil von 10 % Rezyklat aus Post-Consumer-Kunststoffabfällen enthalten. Ab 2040 steigt die Quote gemäß Art. 7 Abs. 2 lit. b auf 25 %. Die Mindestanteile werden als Jahresdurchschnitt je Produktionsstätte berechnet. Die konkrete Berechnungs- und Nachweismethodik richtet sich nach den einschlägigen Durchführungsvorschriften.",
  chain: {
    id: "dokumentenkette",
    title: "Die Dokumentenkette beim Materialverkauf",
    leitgedanke: "Annex III Part A. Danach Annex III A.",
    intro:
      "Bei einer neuen oder geänderten Anwendung geben Sie RE-MAN die erforderlichen Anwendungsdaten gemäß VO (EU) 2022/1616 vollständig bekannt. Jede Serienlieferung wird mit dem CoA des Materials und der kundenspezifischen Konformitätserklärung nach Annex III Part A bereitgestellt.",
    musterTitle: "Musterphase",
    muster: [
      {
        title: "Anwendung übermitteln",
        text: "Sie übermitteln Anwendung und Anforderungsprofil.",
      },
      {
        title: "Prüfung durch RE-MAN",
        text: "RE-MAN prüft, ob Material und regulatorischer Rahmen die Anwendung abdecken.",
      },
      {
        title: "Muster",
        text: "Sie erhalten Materialmuster, Produktspezifikation und Datenblatt. Liegen die erforderlichen Angaben zur vorgesehenen Anwendung gemäß VO (EU) 2022/1616 und ihren Anhängen vollständig vor und ist die Anwendung abgedeckt, kann RE-MAN bereits für das Muster eine anwendungsbezogene Konformitätserklärung nach Annex III Part A mitliefern.",
      },
      {
        title: "Verarbeitungstest",
        text: "Sie führen Verarbeitungstest und Verpackungsqualifikation durch.",
      },
      {
        title: "Serienfreigabe",
        text: "Die Serienfreigabe erfolgt durch Sie.",
      },
    ],
    serieTitle: "Serienlieferung",
    serie: [
      {
        title: "NIAS-Analyse",
        text: "Jedes Produktionslos wird durch ein akkreditiertes Labor auf NIAS untersucht.",
      },
      {
        title: "Evaluation Report",
        text: "Für jede konkrete Anwendung werden Ergebnis und Anwendungsbedingungen in einem internen Evaluation Report neu bewertet und berechnet. Dabei wird unter anderem der maximal zulässige Rezyklatanteil bestimmt.",
      },
      {
        title: "Freigabe",
        text: "Die Lieferung wird nach Vorliegen der erforderlichen Bewertung freigegeben.",
      },
      {
        title: "Konformitätserklärung",
        text: "RE-MAN erstellt die kundenspezifische Konformitätserklärung nach Annex III A für Ihre Lieferung und Ihre konkrete Anwendung.",
      },
      {
        title: "Lieferdokumente",
        text: "CoA und Annex III A werden mit der Serienlieferung übermittelt. Ein Rückverfolgbarkeitsnachweis ist auf Anfrage erhältlich.",
      },
    ],
    note: "Die zugrunde liegenden NIAS-Analyseberichte und Evaluation Reports sind interne Qualitätsdokumente. Als Liefernachweise erhalten Sie CoA und Konformitätserklärung.",
  },
  graphic: {
    title: "Prozess der Serienlieferung",
    lead: "Die grafische Darstellung folgt. Bis dahin die verbindlichen sieben Schritte einer Serienlieferung — ohne Musterphase.",
    steps: [
      {
        title: "Qualifizierter Materialinput",
        text: "Supplier Evaluation und definierte Inputspezifikation.",
      },
      {
        title: "Prüfung jeder Anlieferung",
        text: "Eingangs-CoA und Flake Scan.",
      },
      {
        title: "Aufbereitung mit viscoZERO",
        text: "Schmelzphasen-Dekontamination und Homogenisierung.",
      },
      {
        title: "Chargenbezogene NIAS-Analyse",
        text: "Untersuchung jedes Produktionsloses durch ein akkreditiertes Labor; Analytikergebnis intern.",
      },
      {
        title: "Anwendungsbezogene Bewertung",
        text: "Analysedaten und Anwendungsangaben werden im internen Evaluation Report bewertet.",
      },
      {
        title: "Materialfreigabe und Dokumentation",
        text: "Freigabe des Produktionsloses und Erstellung der kundenspezifischen Konformitätserklärung nach Annex III Part A.",
      },
      {
        title: "Serienlieferung an den Kunden",
        text: "CoA und Annex III A; Rückverfolgbarkeitsnachweis auf Anfrage.",
      },
    ],
  },
  benefit: {
    title: "Was RE-MAN für Ihre Verpackung ermöglicht",
    items: [
      "PPWR-Quote gemäß Art. 7 mit Post-Consumer-Material erfüllen",
      "vorhandene Verpackungskonzepte gezielt weiterentwickeln",
      "Material und Verpackung rechtzeitig vor 2030 qualifizieren",
      "eigene Produktion oder bestehenden Verpackungspartner einbinden",
      "CoA, Konformitätserklärung und Rückverfolgbarkeit in Ihre Nachweiskette integrieren",
      "Muster und Serienmengen aus laufender industrieller Produktion beziehen",
    ],
  },
  closing: {
    title: "Erfüllen Sie mit RE-MAN die PPWR-Quote 2030.",
    description: "Sprechen Sie mit uns über Ihre Verpackung oder fordern Sie ein Muster an.",
    primaryCta: CTA.discussApplication,
    secondaryCta: CTA.sample,
  },
} as const;

export const PAGE_KOSMETIK = {
  hero: {
    eyebrow: "Kosmetikverpackung",
    title: ["2030 beginnt heute.", "Auch für Kosmetikverpackungen."] as const,
    subline: [
      "Erfüllen Sie mit RE-MAN die PPWR-Quote 2030 —",
      "mit lebensmitteltauglichem, mechanisch recyceltem PP und HDPE.",
    ] as const,
    note: "Die konkrete Eignung wird projektbezogen geprüft.",
    badge: badgeKreislaufe,
    image: images.pages.heroKosmetik,
    primaryCta: CTA.discussApplication,
    secondaryCta: CTA.sample,
    crumbs: [
      { href: ROUTES.branchen, label: "Branchen" },
      { href: ROUTES.kosmetik, label: "Kosmetik" },
    ],
  },
  facts: {
    id: "regulierung",
    titleId: "kosmetik-reg-title",
    title: ["Die PPWR-Quote gilt", "auch für Kosmetikverpackungen."] as const,
    items: [
      { value: "10 %", label: "Mindestanteil Post-Consumer-Rezyklat ab 2030", icon: "chart-pie-slice" as IconName },
      { value: "25 %", label: "Mindestanteil ab 2040", icon: "calendar-blank" as IconName },
      { value: "18–24 Monate", label: "typische Qualifikationszeit", icon: "clock-countdown" as IconName },
    ],
  },
  quoteTable: {
    headers: ["Zeitpunkt", "Mindestanteil Post-Consumer-Rezyklat"] as const,
    rows: [
      ["ab 2030", "10 %"],
      ["ab 2040", "25 %"],
    ] as const,
    footnote:
      "Die Verpflichtung gilt ab dem in Artikel 7 festgelegten Zeitpunkt beziehungsweise — sofern später — drei Jahre nach Inkrafttreten des dort vorgesehenen Durchführungsrechtsakts. Berechnung und Anwendbarkeit sind für die konkrete Verpackung zu prüfen.",
  },
  proof: {
    title: "10 % PCR kann man nicht sehen. Aber lückenlos belegen.",
    lead: "Ob eine Verpackung den vorgesehenen Rezyklatanteil enthält, lässt sich am fertigen Produkt nicht einfach ablesen. Entscheidend ist eine belastbare Nachweiskette — vom dokumentierten Post-Consumer-Material über die kontrollierte Aufbereitung bis zur dokumentierten Lieferung.",
    items: [
      "Dokumentierte Herkunft: nachvollziehbare Herkunft des Post-Consumer-Materials",
      "Eingangskontrolle: definierte Inputspezifikation, CoA und Flake Scan",
      "Chargenbezogene Qualität: NIAS-Analyse jedes Produktionsloses",
      "Verlässliche Lieferdokumente: CoA, Konformitätserklärung und Rückverfolgbarkeit auf Anfrage",
    ],
    note: "RE-MAN belegt Herkunft und Qualität des gelieferten Rezyklats. Der Verpackungshersteller dokumentiert dessen tatsächlichen Einsatz und die PPWR-Berechnung in seiner Produktion.",
    proof: "RE-MAN macht Vertrauen nachweisbar.",
  },
  split: {
    id: "haut",
    eyebrow: "Leitgedanke",
    title: "Was auf die Haut kommt, bestimmt auch die Verpackung.",
    lead: "Was in der Verpackung steckt, kann über das kosmetische Produkt später auf die Haut gelangen. Was nicht in der Verpackung steckt, kann auch nicht in das Produkt übergehen.",
    body: [
      "Deshalb ist entscheidend, dass aus der Verpackung keine unerwünschten Stoffe in das kosmetische Produkt übergehen. Wirksame Dekontamination und chargenbezogene NIAS-Analytik schaffen die Grundlage, mögliche Stoffübergänge für Ihre konkrete Anwendung zu bewerten.",
    ] as const,
    image: images.pages.modulKosmetik,
  },
  quality: {
    title: "Lebensmitteltaugliche Materialqualität für anspruchsvolle Kosmetikverpackungen",
    lead: "RE-MAN verbindet Post-Consumer-Rezyklat für die PPWR-Quote mit wirksamer Dekontamination, einem Geruch wie Kunststoff-Neuware und chargenbezogener NIAS-Analytik. Die konkrete Kosmetikanwendung wird projektbezogen geprüft.",
  },
  freedom: {
    title: "Die PPWR-Quote erfüllen. Volle Gestaltungsfreiheit.",
    lead: "Für Kosmetikverpackungen gilt ab 2030 eine PPWR-Mindestquote von 10 %. Diese Quote ist keine technische Obergrenze: Je nach Anwendung sind auch höhere Einsatzanteile möglich. Das transparente RE-MAN-Material lässt sich in das gewünschte Farb- und Verpackungsdesign integrieren. Die konkrete Farbwirkung und der passende Einsatzanteil werden im Verarbeitungstest bestätigt.",
  },
  smell: {
    title: "Rezyklat, das nicht nach Rezyklat riecht",
    quote: "Wer Neuware von unserem Rezyklat unterscheiden kann, kann bei uns anfangen.",
    lead: "RE-MAN-Material riecht wie Kunststoff-Neuware — frei von typischen Fremdgerüchen. Überzeugen Sie sich selbst mit einem Muster.",
  },
  paths: {
    title: "Zwei Wege zur Kosmetikverpackung",
    items: [
      {
        title: "Für Kosmetikhersteller und Markeninhaber",
        text: "Sie starten das Material- und Verpackungsprojekt gemeinsam mit Ihrem bestehenden Verpackungslieferanten. RE-MAN liefert Material und Dokumentation.",
      },
      {
        title: "Für Hersteller von Kosmetikverpackungen",
        text: "Sie qualifizieren mrPP oder mrHDPE für Ihre konkrete Verpackung und erteilen die Serienfreigabe.",
      },
    ],
  },
  docs: {
    title: "Dokumentierte Qualität für Ihre Anwendung",
    lead: "Bei Serienlieferungen erhalten Sie das CoA des gelieferten Materials, das technische Datenblatt und eine Konformitätserklärung. Ein Rückverfolgbarkeitsnachweis ist auf Anfrage verfügbar.",
  },
  closing: {
    title: "Beginnen Sie heute mit Ihrer Verpackung für 2030.",
    description: "Sprechen Sie mit uns über Ihre Kosmetikanwendung oder fordern Sie ein Muster von RE-MAN mrPP oder mrHDPE an.",
    primaryCta: CTA.discussApplication,
    secondaryCta: CTA.sample,
  },
} as const;

export const PAGE_MATERIALIEN = {
  hero: {
    eyebrow: "Materialien",
    title: ["Lebensmitteltaugliches mrPP und mrHDPE.", "Bereits heute verfügbar."] as const,
    subline: [
      "Mechanisch recyceltes PP und HDPE aus Post-Consumer-Material",
      "gemäß VO (EU) 2022/1616 — für Ihre PPWR-Quote.",
    ] as const,
    note: "Spezifikationen sind vorhanden. Produktnamen und Datenblattlinks folgen mit der Nomenklatur.",
    badge: ["Zwei Typen.", "Ein Ziel:", "Ihre PPWR-Quote."],
    image: images.pages.heroMaterialien,
    primaryCta: CTA.sample,
    secondaryCta: CTA.consultation,
    crumbs: [{ href: ROUTES.materialien, label: "Materialien" }],
  },
  intro:
    "RE-MAN konzentriert sich auf zwei lebensmitteltaugliche Materialien aus mechanischem Recycling — kurz „mr“. Beide sind vollständig spezifiziert, in industrieller Produktion und als Muster wie als Serienmenge kurzfristig verfügbar.",
  facts: {
    id: "quote",
    titleId: "material-quote-title",
    title: ["Die PPWR-Quote erfüllen.", "Ihre Verpackung bleibt Ihre Verpackung."] as const,
    items: [
      {
        value: "10 %",
        label: "PPWR-Mindestquote für bestimmte kontaktsensitive\nNicht-PET-Verpackungen — keine technische Empfehlung",
        icon: "chart-pie-slice" as IconName,
      },
      {
        value: "höher",
        label: "Einsatzanteile anwendungsabhängig möglich;\nfür andere Kunststoffverpackungen gelten höhere PPWR-Quoten",
        icon: "stack" as IconName,
      },
      {
        value: "transparent",
        label: "daraus unterschiedliche Verpackungen\nund Farbkonzepte herstellen",
        icon: "package" as IconName,
      },
    ],
  },
  quoteLead:
    "Für bestimmte kontaktsensitive Kunststoffverpackungen aus anderen Materialien als PET schreibt die PPWR ab 2030 einen Mindestanteil von 10 % Post-Consumer-Rezyklat vor. Diese 10 % sind eine regulatorische Mindestquote, keine technische Einsatzempfehlung. Je nach Anwendung sind auch höhere Anteile möglich. Das transparente Material lässt sich in unterschiedliche Verpackungen und Farbkonzepte integrieren. Die konkrete Eignung und der passende Einsatzanteil werden im Verarbeitungstest bestätigt.",
  smell: {
    title: "Riecht wie Kunststoff-Neuware.",
    lead: "RE-MAN-Material riecht wie Kunststoff-Neuware — frei von typischen Fremdgerüchen. Wer Neuware von unserem Rezyklat unterscheiden kann, kann bei uns anfangen. Überzeugen Sie sich selbst mit einem Muster.",
  },
  process: {
    title: "Vom Muster zur Serie",
    leitgedanke: "Die Serienfreigabe erteilen ausschließlich Sie.",
    steps: [
      {
        title: "Anwendung besprechen",
        text: "Sie nennen uns die vorgesehene Verpackung. RE-MAN prüft, ob Material und regulatorischer Rahmen die Anwendung abdecken.",
      },
      {
        title: "Muster",
        text: "Sie erhalten Materialmuster, Produktspezifikation und Datenblatt. Wenn Sie uns die erforderlichen Angaben zu Ihrer vorgesehenen Anwendung gemäß VO (EU) 2022/1616 und ihren Anhängen vollständig bekannt geben und die Anwendung abgedeckt ist, kann auch für das Muster eine anwendungsbezogene Konformitätserklärung nach Annex III Part A mitgeliefert werden.",
      },
      {
        title: "Verarbeitungstest",
        text: "Sie prüfen das Material in Ihrer Anwendung.",
      },
      {
        title: "Serienfreigabe",
        text: "Die Freigabe des fertigen Verpackungsprodukts erteilen Sie.",
      },
      {
        title: "Serienlieferung",
        text: "Jede Serienlieferung kommt mit CoA und kundenspezifischer Konformitätserklärung nach Annex III Part A. Ein Rückverfolgbarkeitsnachweis ist auf Anfrage erhältlich.",
      },
    ],
    note: "Muster sind üblicherweise innerhalb einer Woche verfügbar. Serienmaterial ist üblicherweise innerhalb von zwei bis drei Wochen verfügbar.",
  },
  types: [
    {
      id: "mrpp",
      name: "mrPP",
      lead: "Lebensmitteltaugliches mrPP aus Post-Consumer-Material",
      points: [
        "transparent",
        "mechanisch recycelt und mit viscoZERO aufbereitet",
        "Geruch wie Kunststoff-Neuware",
        "typische Anwendungen: Becher, Schalen, Flaschen, Verschlüsse, Tuben",
        "Lieferform: Muster im Kübel, Serienmaterial in Big Bags mit ca. 1.000 kg",
      ],
    },
    {
      id: "mrhdpe",
      name: "mrHDPE",
      lead: "Lebensmitteltaugliches mrHDPE aus Post-Consumer-Material",
      points: [
        "transparent",
        "mechanisch recycelt und mit viscoZERO aufbereitet",
        "Geruch wie Kunststoff-Neuware",
        "typische Anwendungen: Flaschen, Verschlüsse, Tuben, Becher, Schalen",
        "Lieferform: Muster im Kübel, Serienmaterial in Big Bags mit ca. 1.000 kg",
      ],
    },
  ],
  closing: {
    title: "Testen Sie RE-MAN in Ihrer Anwendung.",
    description: "Fordern Sie ein Muster an oder besprechen Sie mit uns, welche Type zu Ihrer Verpackung passt.",
    primaryCta: CTA.sample,
    secondaryCta: CTA.consultation,
  },
} as const;

export const PAGE_LOHN = {
  hero: {
    eyebrow: "Lohnaufbereitung",
    title: ["Ihr Material.", "Unser Verfahren."] as const,
    subline: [
      "RE-MAN bereitet kundeneigenes PP und HDPE nach definierten",
      "Eingangskriterien mit viscoZERO auf und dokumentiert die Freigabe.",
    ] as const,
    note: "Ausschließlich PP und HDPE. Keine anderen PE-Arten.",
    badge: ["Nur definierter", "Input wird zu", "definierter Qualität."],
    image: images.pages.heroLohn,
    primaryCta: CTA.tolling,
    secondaryCta: CTA.consultation,
    crumbs: [{ href: ROUTES.lohn, label: "Lohnaufbereitung" }],
  },
  facts: {
    id: "input",
    titleId: "lohn-input-title",
    title: ["Nur definierter Input", "wird zu definierter Qualität."] as const,
    items: [
      { value: "PP / HDPE", label: "ausschließlich diese Materialströme", icon: "package" as IconName },
      { value: "4–6 Wochen", label: "übliche Dauer ab Materialeingang, keine Garantie", icon: "clock-countdown" as IconName },
      { value: "CoA", label: "bei jeder Anlieferung, plus Flake Scan", icon: "clipboard-text" as IconName },
    ],
  },
  lead: "Sie verfügen über einen eigenen PP- oder HDPE-Materialstrom und möchten daraus lebensmitteltaugliches Material machen? RE-MAN bereitet Ihr Material mit der viscoZERO-Technologie auf — unter denselben Bedingungen, die für unsere eigenen Materialien gelten: definierte Inputspezifikation, Eingangskontrolle jeder Anlieferung und dokumentierte Freigabe.",
  process: {
    id: "prozess",
    title: "So läuft die Lohnaufbereitung ab",
    leitgedanke: "Aufbereitet wird ausschließlich Material, das die definierte Inputspezifikation von RE-MAN erfüllt.",
    steps: [
      {
        title: "Anfrage und Anwendung besprechen",
        text: "Sie beschreiben Materialstrom, vorgesehene Anwendung und Anforderungen.",
      },
      {
        title: "Supplier Evaluation",
        text: "RE-MAN bewertet Sie als Materiallieferanten und Ihren Materialstrom.",
      },
      {
        title: "Abgleich mit der Inputspezifikation",
        text: "Aufbereitet wird ausschließlich Material, das die definierte Inputspezifikation von RE-MAN erfüllt.",
      },
      {
        title: "Anlieferung mit CoA und Eingangskontrolle",
        text: "Jede Anlieferung erfolgt mit CoA und wird bei RE-MAN geprüft — einschließlich Flake Scan.",
      },
      {
        title: "Aufbereitung, Prüfung und dokumentierte Freigabe",
        text: "Das Material wird mit viscoZERO aufbereitet, jedes Produktionslos durch ein akkreditiertes Labor auf NIAS untersucht und nach positiver Bewertung freigegeben.",
      },
    ],
  },
  result: {
    title: "Was Sie zurückbekommen",
    lead: "Nach erfolgreicher Aufbereitung erfüllt Ihr Material die relevanten Anforderungen der VO (EU) 2022/1616. Die freigegebenen Anwendungen und Verwendungsbedingungen sind in der Konformitätserklärung festgelegt.",
    items: [
      "das aufbereitete Material",
      "das CoA des Endmaterials",
      "eine Konformitätserklärung",
      "auf Anfrage einen Rückverfolgbarkeitsnachweis",
    ],
    note: "Die zugrunde liegenden NIAS-Analyseberichte und Evaluation Reports sind interne Qualitätsdokumente. Als Liefernachweise erhalten Sie CoA und Konformitätserklärung.",
  },
  know: {
    title: "Gut zu wissen",
    lead: "Produktionsabfälle und Post-Industrial-Material zählen nach heutigem Stand nicht zur PPWR-Rezyklatquote. Die Lohnaufbereitung lohnt sich in diesem Fall wegen der Geruchsreduktion und der Aufwertung Ihres Materials — nicht zur Quotenerfüllung.",
  },
  closing: {
    title: "Sprechen wir über Ihren Materialstrom.",
    description: "Beschreiben Sie uns Material, Herkunft und Anwendung. Wir prüfen, ob eine Aufbereitung bei RE-MAN in Frage kommt.",
    primaryCta: CTA.tolling,
    secondaryCta: CTA.consultation,
  },
} as const;

export const PAGE_TECHNOLOGIE = {
  hero: {
    eyebrow: "Technologie",
    title: ["Technologie für", "lebensmitteltaugliches Recycling."] as const,
    subline: [
      "Mit der viscoZERO-Technologie von Starlinger viscotec bereitet RE-MAN",
      "mechanisch recyceltes PP und HDPE für anspruchsvolle Anwendungen auf.",
    ] as const,
    note: "Für den Lebensmittel- und Kosmetikbereich.",
    badge: ["Gleiche", "Qualität", "Neue Kreisläufe"],
    image: images.pages.heroTechnologie,
    primaryCta: CTA.consultation,
    secondaryCta: CTA.sample,
    crumbs: [{ href: ROUTES.technologie, label: "Technologie" }],
  },
  intro: {
    title: "Aus Recyclingmaterial wird ein qualifizierter Werkstoff",
    lead: "Bei RE-MAN trifft kontrollierter Materialinput auf eine speziell für die Schmelzphasen-Dekontamination entwickelte Technologie. Das Material wird in der Schmelze wirksam dekontaminiert und homogenisiert.",
    result:
      "Das Ergebnis ist lebensmitteltaugliches mrPP oder mrHDPE mit dokumentierter Qualität — bereit für den Einsatz in neuen Verpackungslösungen.",
  },
  split: {
    id: "viscozero",
    eyebrow: "viscoZERO",
    title: "Wirksame Dekontamination in der Schmelze",
    lead: "Im viscoZERO-Reaktor wird das bereits aufgeschmolzene Material unter Vakuum behandelt. Die Konstruktion legt fortlaufend neue Materialoberfläche frei und setzt sie dem Reinigungsprozess aus.",
    body: [
      "So werden unerwünschte Rückstände aus Post-Consumer-Material wirksam reduziert und das Material zugleich gleichmäßig homogenisiert.",
      "Die Kunststoffschmelze wird gleichmäßig und kontrolliert durch den Reaktor geführt.",
    ] as const,
    image: images.home.viscozero,
  },
  benefits: {
    title: "Was die Technologie für unsere Kunden leistet",
    items: [
      "wirksame Dekontamination von mechanisch recyceltem PP und HDPE",
      "Reduktion materialfremder Gerüche",
      "gleichmäßige Homogenisierung der Schmelze",
      "Aufbereitung für den Lebensmittelkontakt und weitere anspruchsvolle Anwendungen",
      "Produktion im Rahmen von zwei Novel-Technology-Notifications und nach FDA-Anforderungen",
      "dokumentierte Qualität für die anwendungsbezogene Freigabe",
    ],
  },
  process: {
    title: "Vom geprüften Input zum freigegebenen Material",
    steps: [
      { title: "Input", text: "Der Materialinput wird definiert und geprüft." },
      { title: "Schmelze", text: "Das Material wird aufgeschmolzen und homogenisiert." },
      {
        title: "Dekontamination",
        text: "Im viscoZERO-Reaktor erfolgt die wirksame Schmelzphasen-Dekontamination unter Vakuum.",
      },
      { title: "Granulat", text: "Das aufbereitete Material wird granuliert und chargenbezogen geprüft." },
      {
        title: "Freigabe",
        text: "Nur Material, das die erforderliche Bewertung erfüllt, wird als Food Grade freigegeben und dokumentiert.",
      },
    ],
  },
  smell: {
    title: "Geruchsqualität, die Sie selbst beurteilen können",
    lead: "RE-MAN-Material riecht wie Kunststoff-Neuware — frei von typischen Fremdgerüchen. Wer Neuware von unserem Rezyklat unterscheiden kann, kann bei uns anfangen. Überzeugen Sie sich selbst mit einem Muster — oder bei einer Produktionsbesichtigung vor Ort.",
  },
  industrial: {
    title: "Technologie von viscotec. Industriell umgesetzt bei RE-MAN.",
    lead: "viscoZERO wurde von Starlinger viscotec für die Aufbereitung von Kunststoffen zu lebensmitteltauglichem Rezyklat entwickelt. RE-MAN setzt diese Technologie in einer industriellen Produktionslinie ein und verbindet sie mit definierten Inputkontrollen, chargenbezogener NIAS-Analytik und einer anwendungsbezogenen Dokumentenkette.",
  },
  proof: {
    id: "nachweise",
    title: "Qualität und Nachweise",
    lead: "Jedes Produktionslos wird durch ein akkreditiertes Labor auf NIAS untersucht.",
    body: "Damit wird die Materialqualität nicht nur grundsätzlich beschrieben, sondern für jedes einzelne Produktionslos analytisch überprüft und in die anwendungsbezogene Bewertung einbezogen.",
    chain:
      "NIAS-Analyse je Produktionslos → interner anwendungsbezogener Evaluation Report → kundenspezifische Konformitätserklärung nach Annex III Part A je Serienlieferung",
    note: "Die zugrunde liegenden NIAS-Analyseberichte und Evaluation Reports sind interne Qualitätsdokumente. Als Liefernachweise erhalten Sie CoA und Konformitätserklärung.",
    items: [
      "zwei relevante Novel-Technology-Notifications für PP und PE/HDPE — Nummern und Registerlinks folgen",
      "NIAS-Analyse je Produktionslos durch ein akkreditiertes Labor",
      "CoA und Konformitätserklärung nach Annex III A bei Serienlieferungen",
      "Rückverfolgbarkeitsnachweis auf Anfrage",
      "nachgewiesene Dekontaminationsleistung",
      "chargenbezogene Qualitätskontrolle",
      "transparente Veröffentlichung der Monitoring-Ergebnisse durch den Technologieentwickler",
    ],
    legal: "VO (EU) 2022/1616 ist der Rechtsrahmen, kein Zertifikat.",
  },
  closing: {
    title: "Technologie wird dann wertvoll, wenn sie in Ihrer Anwendung funktioniert.",
    description: "Sprechen wir über Ihr PP- oder HDPE-Projekt, die vorgesehene Anwendung und den Weg bis zur Freigabe.",
    primaryCta: CTA.consultation,
    secondaryCta: CTA.sample,
  },
} as const;

export const PAGE_PPWR = {
  hero: {
    eyebrow: "PPWR & Food Contact",
    title: ["2030 beginnt heute."] as const,
    subline: [
      "Die PPWR verlangt ab 2030 Post-Consumer-Rezyklat in Kunststoffverpackungen.",
      "RE-MAN liefert lebensmitteltaugliches, mechanisch recyceltes PP und HDPE.",
    ] as const,
    note: "Erfüllen Sie mit RE-MAN die PPWR-Quote 2030.",
    badge: badgeKreislaufe,
    image: images.pages.heroPpwr,
    primaryCta: CTA.consultation,
    secondaryCta: CTA.sample,
    crumbs: [{ href: ROUTES.ppwr, label: "PPWR & Food Contact" }],
  },
  intro:
    "Die Verordnung (EU) 2025/40 über Verpackungen und Verpackungsabfälle — kurz PPWR — legt in Artikel 7 verbindliche Mindestanteile an Post-Consumer-Rezyklat für Kunststoffverpackungen fest. Die Anforderung betrifft nicht nur kontaktsensitive Verpackungen — auch andere Kunststoffverpackungen benötigen einen Rezyklatanteil.",
  table: {
    id: "quoten",
    caption: "Stand: Oktober 2026 — Art. 7 VO (EU) 2025/40",
    headers: ["Verpackungskategorie", "ab 2030", "ab 2040", "Rechtsgrundlage"] as const,
    rows: [
      [
        "Kontaktsensitive Kunststoffverpackungen aus anderen Materialien als PET",
        "10 %",
        "25 %",
        "Art. 7 Abs. 1 lit. b / Abs. 2 lit. b",
      ],
      ["Andere Kunststoffverpackungen", "35 %", "65 %", "Art. 7 Abs. 1 lit. d / Abs. 2 lit. d"],
    ] as const,
    footnote:
      "Die Vorgabe gilt ab 1. Januar 2030 oder drei Jahre nach Inkrafttreten des in Artikel 7 Absatz 8 vorgesehenen Durchführungsrechtsakts — je nachdem, welcher Zeitpunkt später liegt. Die Mindestanteile werden als Jahresdurchschnitt je Produktionsstätte berechnet. Die konkrete Berechnungs- und Nachweismethodik richtet sich nach den einschlägigen Durchführungsvorschriften.",
  },
  why: {
    title: "Warum Sie jetzt beginnen sollten",
    lead: "Bis ein neues Material geprüft, eine Verpackung qualifiziert, freigegeben und tatsächlich im Handel eingesetzt wird, vergehen typischerweise 18 bis 24 Monate. Wer 2030 bereit sein will, muss deshalb heute mit der Material- und Verpackungsqualifikation beginnen.",
  },
  pir: {
    title: "Was zählt als Post-Consumer?",
    lead: "Post-Consumer-Abfälle sind Kunststoffabfälle, die bereits von Endverbrauchern oder gewerblichen Endnutzern verwendet und anschließend dem Abfallstrom zugeführt wurden. Maßgeblich ist recycelter Kunststoff aus Post-Consumer-Abfällen.",
    headers: ["Materialherkunft", "Zählt für die PPWR-Quote? (nach heutigem Stand)"] as const,
    rows: [
      ["Post-Consumer-Rezyklat", "Ja"],
      ["Post-Industrial-Rezyklat (PIR) / Produktionsabfall", "Nein"],
    ] as const,
  },
  foodContact: {
    title: "Lebensmittelkontakt braucht einen definierten regulatorischen Weg",
    lead: "Die PPWR bestimmt, wie viel Post-Consumer-Rezyklat künftig eingesetzt werden muss. Die Verordnung (EU) 2022/1616 regelt, unter welchen Bedingungen recycelte Kunststoffe für den Lebensmittelkontakt hergestellt und eingesetzt werden können.",
    stages: [
      "definierter und kontrollierter Materialinput",
      "Dekontamination des Kunststoffs",
      "Nachbearbeitung und Herstellung des fertigen Lebensmittelkontaktmaterials",
    ],
    note: "RE-MAN verbindet diese regulatorische Logik mit industrieller Produktion, chargenbezogener Analytik und einer anwendungsbezogenen Dokumentenkette.",
  },
  ntn: {
    id: "ntn",
    title: "Zwei Novel-Technology-Notifications für PP und HDPE",
    lead: "Eine Novel Technology ist ein in der VO (EU) 2022/1616 vorgesehener regulatorischer Weg für innovative Recyclingtechnologien. Der Technologieentwickler notifiziert die Technologie bei der Europäischen Kommission. Sie wird im Unionsregister geführt und durch regelmäßig veröffentlichte Monitoring-Berichte begleitet. Die NTN ist die Kennnummer dieser Notifizierung — kein Zertifikat und keine Zulassung.",
    items: [
      "PP: NTN — Nummer und offizieller Registerlink folgen",
      "PE/HDPE: NTN — Nummer und offizieller Registerlink folgen",
    ],
    note: "Die vollständigen Monitoring-Berichte werden durch den Technologieentwickler veröffentlicht.",
  },
  chain: {
    title: "Die Dokumentenkette für Ihre Anwendung",
    lead: "Jedes Produktionslos wird durch ein akkreditiertes Labor auf NIAS untersucht. Für jede konkrete Anwendung werden die Ergebnisse und Anwendungsbedingungen in einem internen Evaluation Report neu bewertet und berechnet. Dabei wird unter anderem der maximal zulässige Rezyklatanteil bestimmt. Auf dieser Grundlage erstellt RE-MAN die kundenspezifische Konformitätserklärung nach Annex III A mit den maßgeblichen Verwendungsbedingungen.",
    chain:
      "NIAS-Analyse je Produktionslos → interner anwendungsbezogener Evaluation Report → kundenspezifische Konformitätserklärung nach Annex III Part A je Serienlieferung",
    items: [
      "CoA des gelieferten Materials",
      "kundenspezifische Konformitätserklärung nach Annex III A",
    ],
    note: "Ein Rückverfolgbarkeitsnachweis wird auf Anfrage bereitgestellt. NIAS-Analysenergebnisse und Evaluation Report bleiben interne Dokumente.",
  },
  roles: {
    title: "Drei Rollen. Ein gemeinsames Verpackungsprojekt.",
    headers: ["Beteiligter", "Praktische Rolle"] as const,
    rows: [
      ["Lebensmittelhersteller", "Definiert die Anforderungen an die künftige Verpackung und stößt das Projekt an."],
      ["Verpackungshersteller", "Qualifiziert Material und Verpackung für die konkrete Anwendung und erteilt die Serienfreigabe."],
      ["RE-MAN", "Liefert lebensmitteltaugliches mrPP oder mrHDPE und stellt die zugehörige Dokumentation bereit."],
    ] as const,
  },
  faq: {
    id: "faq",
    title: "Häufige Fragen",
    leitgedanke: "Was der Gesetzgeber verlangt. Was RE-MAN liefert.",
    items: [
      {
        q: "Zählt Post-Industrial-Rezyklat für die PPWR-Quote?",
        a: "Nach heutigem Stand (Oktober 2026) nein. Für die Mindestrezyklatanteile nach Artikel 7 ist Kunststoffrezyklat aus Post-Consumer-Abfällen maßgeblich.",
      },
      {
        q: "Zählt mein eigener Produktionsabfall für die Quote?",
        a: "Nach heutigem Stand nein. Produktionsabfälle und eigener Produktionsverschnitt gelten nicht als Post-Consumer-Abfall und erfüllen die Quote derzeit nicht.",
      },
      {
        q: "Kann Post-Industrial-Material trotzdem bei RE-MAN aufbereitet werden?",
        a: "Eine Aufbereitung von PP oder HDPE kann nach erfolgreicher Supplier Evaluation und bei Einhaltung der definierten Inputspezifikation geprüft werden. Der Nutzen liegt dann in der Geruchsreduktion und Materialaufwertung — nicht in der Erfüllung der PPWR-Quote.",
      },
      {
        q: "Gilt die PPWR-Quote nur für Lebensmittelverpackungen?",
        a: "Nein. Kontaktsensitive Verpackungen aus anderen Kunststoffen als PET benötigen ab 2030 10 % Post-Consumer-Rezyklat, andere Kunststoffverpackungen 35 %. Ab 2040 steigen die Anteile auf 25 % beziehungsweise 65 %.",
      },
      {
        q: "Was bedeutet „Novel Technology“?",
        a: "Eine Novel Technology ist ein in der VO (EU) 2022/1616 vorgesehener regulatorischer Weg für innovative Recyclingtechnologien. Die Technologie wird bei der Europäischen Kommission notifiziert, im Unionsregister geführt und durch regelmäßig veröffentlichte Monitoring-Berichte begleitet. Die NTN ist die Kennnummer dieser Notifizierung.",
      },
      {
        q: "Was bedeutet eine NTN-Nummer?",
        a: "Die Novel Technology Number identifiziert die notifizierte Recyclingtechnologie im Unionsregister der Europäischen Kommission. RE-MAN veröffentlicht die für PP und PE/HDPE relevanten NTN-Nummern, sobald sie bestätigt sind.",
      },
      {
        q: "Welche Informationen benötigt RE-MAN vom Kunden?",
        a: "Bei einer neuen oder geänderten Anwendung benötigt RE-MAN die vollständigen Anwendungsdaten für die anwendungsbezogene Bewertung und die Erstellung der Konformitätserklärung nach Annex III Part A.",
      },
      {
        q: "Welche Dokumente erhält der Kunde?",
        a: "Bei Serienlieferungen werden CoA und kundenspezifische Konformitätserklärung nach Annex III A mitgeliefert. Ein Rückverfolgbarkeitsnachweis ist auf Anfrage verfügbar. Auch für ein Muster kann eine anwendungsbezogene Konformitätserklärung nach Annex III A mitgeliefert werden, sofern die erforderlichen Angaben zur vorgesehenen Anwendung gemäß VO (EU) 2022/1616 und ihren Anhängen vollständig vorliegen und die Anwendung abgedeckt ist.",
      },
      {
        q: "Eignet sich RE-MAN auch für Kosmetikverpackungen?",
        a: "Kosmetikverpackungen unterliegen ebenfalls der PPWR-Quote. Die wirksame Dekontamination und Geruchsreduktion machen mechanisch recyceltes PP und HDPE auch für Kosmetikverpackungen interessant. Die konkrete Eignung wird projektbezogen geprüft.",
      },
      {
        q: "Wie kommt RE-MAN in die Verpackung eines Lebensmittelherstellers?",
        a: "Lebensmittelhersteller mit eigener Verpackungsproduktion können das Material direkt qualifizieren. Arbeitet der Lebensmittelhersteller mit einem Verpackungspartner, bindet er diesen in das Projekt ein. RE-MAN liefert dafür Material und Dokumentation.",
      },
    ],
  },
  closing: {
    title: "Erfüllen Sie mit RE-MAN die PPWR-Quote 2030.",
    description:
      "Starten Sie heute mit der Qualifikation von lebensmitteltauglichem, mechanisch recyceltem PP und HDPE für Ihre Verpackungen ab 2030.",
    primaryCta: CTA.consultation,
    secondaryCta: CTA.sample,
  },
} as const;

export const PAGE_ABOUT = {
  hero: {
    eyebrow: "Über RE-MAN",
    title: ["Wir recyceln Kunststoff nicht nur.", "Wir werten ihn auf."] as const,
    subline: ["REcycling. MANufacturing. RE-MAN."] as const,
    note: "Aus einem gebrauchten Materialstrom entsteht wieder ein hochwertiger Rohstoff für anspruchsvolle Anwendungen.",
    badge: badgeKreislaufe,
    image: images.pages.heroUeberUns,
    primaryCta: CTA.consultation,
    secondaryCta: CTA.visit,
    crumbs: [{ href: ROUTES.about, label: "Über RE-MAN" }],
  },
  name: {
    title: "REcycling. MANufacturing. RE-MAN.",
    lead: "RE-MAN steht für Recycling Manufacturing — für die Verbindung von Recycling mit industrieller Herstellung. Denn hochwertiges Rezyklat entsteht nicht allein dadurch, dass Kunststoff wiederverwertet wird. Es braucht kontrollierte Materialströme, wirksame Aufbereitung, dokumentierte Qualität und eine Produktion, die aus Post-Consumer-Material wieder einen verlässlichen Werkstoff macht.",
    body: "Regulatorisch handelt es sich um mechanisches Recycling. Die Aufwertung zeigt sich in der Materialqualität: ein Geruch wie Kunststoff-Neuware, hohe Reinheit, chargenbezogene Kontrolle und Eignung für anspruchsvolle Anwendungen bis hin zum Lebensmittelkontakt.",
  },
  gap: {
    title: "2030 braucht heute verfügbares Material",
    lead: "Die PPWR schafft einen konkreten Bedarf an Post-Consumer-Rezyklat für Kunststoffverpackungen. Gleichzeitig benötigen neue Verpackungen typischerweise 18 bis 24 Monate von der Materialqualifikation bis zum Produkt im Regal.",
    body: "RE-MAN wurde geschaffen, um diese Lücke zu schließen: mit bereits heute kommerziell verfügbarem, lebensmitteltauglichem mrPP und mrHDPE gemäß VO (EU) 2022/1616, das jetzt getestet und für die Serie qualifiziert werden kann.",
  },
  split: {
    id: "pet-man",
    eyebrow: "RE-MAN by PET-MAN",
    title: "Eigene Marke. Industrielle Basis.",
    lead: "RE-MAN ist eine eigenständige Marke der PET-MAN GmbH. Produktion, Qualitätsmanagement und Vertragsabwicklung erfolgen durch PET-MAN. Unter der Marke RE-MAN konzentrieren wir uns auf mechanisch recyceltes PP und HDPE für anspruchsvolle Anwendungen.",
    body: [
      "Produziert wird in Frankenburg am Hausruck, Österreich. Von dort liefert RE-MAN Kunden in ganz Europa.",
    ] as const,
    image: images.pages.modulHalle,
  },
  supply: {
    title: "Industriell verfügbar. Bereit für Ihr Projekt.",
    lead: "Mit einer gemeinsamen Jahreskapazität von 5.000 Tonnen für mrPP und mrHDPE sind Muster und Serienmengen kurzfristig verfügbar. Weitere Kapazitäten befinden sich bereits im Aufbau.",
    rows: [
      { value: "5.000 t", label: "mrPP und mrHDPE insgesamt" },
      { value: "1 Woche", label: "Muster üblicherweise" },
      { value: "2–3 Wochen", label: "Serienmaterial üblicherweise" },
      { value: "4–6 Wochen", label: "Lohnaufbereitung ab Materialeingang" },
      { value: "Kübel / Big Bag", label: "Muster im Kübel, Serie in Big Bags à ca. 1.000 kg" },
      { value: "Europa", label: "Liefergebiet — Transport durch RE-MAN organisiert" },
    ],
  },
  quality: {
    title: "Qualität ist bei RE-MAN kein Versprechen. Sie ist ein System.",
    lead: "Die RE-MAN-Produktion ist vollständig in das etablierte Qualitätsmanagement von PET-MAN eingebunden. Wareneingang, Inputkontrolle, Produktionslos, Qualitätsprüfung, Freigabe, Lieferdokumentation und Rückverfolgbarkeit greifen ineinander.",
    chain:
      "Input-Charge → Flake Scan und Eingangs-CoA → Produktionslos → NIAS-Analyse und Freigabe → Liefercharge → Kunden-CoA und Konformitätserklärung",
    note: "So wird aus Vertrauen ein überprüfbarer Prozess.",
  },
  path: {
    title: "Vom ersten Muster bis zur Serie",
    lead: "Der Weg zur Serie führt vom ersten Materialmuster über den Verarbeitungstest und die anwendungsspezifische Qualifikation bis zur Serienlieferung.",
  },
  closing: {
    title: "Beginnen wir mit Ihrem Materialprojekt",
    description:
      "Ob PPWR-Quote, neue Verpackungsanwendung oder die Aufbereitung eines eigenen Materialstroms: Sprechen Sie mit uns über Ihre Anforderungen und den passenden Weg zur Qualifikation. Oder sehen Sie sich die Produktion in Frankenburg am Hausruck selbst an.",
    primaryCta: CTA.consultation,
    secondaryCta: CTA.visit,
  },
} as const;

export const PAGE_KONTAKT = {
  hero: {
    eyebrow: "Kontakt",
    title: ["Der Weg zur Serie", "beginnt mit einem Gespräch."] as const,
    subline: [
      "Ob PPWR-Quote, Materialmuster, neue Verpackung oder Lohnaufbereitung:",
      "Sagen Sie uns, was Sie vorhaben. Wir melden uns mit dem passenden nächsten Schritt.",
    ] as const,
    note: "Wir melden uns in den nächsten Tagen persönlich bei Ihnen.",
    badge: badgeKreislaufe,
    image: images.pages.heroKontakt,
    primaryCta: CTA.consultation,
    crumbs: [{ href: ROUTES.contact, label: "Kontakt" }],
  },
  peopleLead:
    "Für Materialauswahl, Muster, Verarbeitungstests, Qualifikation, Serienlieferungen, PPWR-Fragen und Lohnaufbereitung können Sie sich an beide Ansprechpartner wenden.",
  visit: {
    id: "besichtigung",
    title: "Sehen Sie, wie aus Recycling wieder ein Werkstoff wird.",
    text: "Besuchen Sie RE-MAN am Produktionsstandort in Frankenburg am Hausruck. Bei einer persönlichen Besichtigung erleben Sie unsere Produktionslinie und die Materialaufbereitung aus nächster Nähe — und können sich selbst vom Geruch unserer Rezyklate überzeugen.",
    note: "Besichtigungen erfolgen nach vorheriger Terminvereinbarung.",
  },
} as const;

export const PAGE_404 = {
  title: "Diese Seite ist aus dem Kreislauf geraten.",
  text: "Die gesuchte Seite gibt es nicht oder nicht mehr. Vielleicht hilft Ihnen einer dieser Wege weiter:",
} as const;
