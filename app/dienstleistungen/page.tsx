import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description: "Professionelle Reinigung, Hauswartung und Gebäudeunterhalt für private und gewerbliche Liegenschaften.",
};

const services = [
  {
    title: "Hauswartung",
    image: "/service-2.jpg",
    imageAlt: "Hauswart bei einem Kontrollgang in einer gepflegten Liegenschaft",
    text: "Wir kümmern uns zuverlässig um den laufenden Betrieb Ihrer Liegenschaft und sind auch dann für Sie da, wenn schnelle Unterstützung gefragt ist.",
    points: [
      "Technische Hauswartung",
      "Kontrolle von Heizungs-, Sanitär- und Elektroanlagen",
      "Lampenwechsel und Kleinreparaturen",
      "24/7 Pikettdienst",
      "Koordination von Handwerkern",
    ],
  },
  {
    title: "Reinigung",
    image: "/service-4.jpg",
    imageAlt: "Professionelle Reinigung eines modernen Büros",
    text: "Von der regelmässigen Pflege bis zur anspruchsvollen Spezialreinigung sorgen wir für saubere, gepflegte und einladende Räume und Gebäude.",
    points: [
      "Unterhalts-, Büro- und Treppenhausreinigung",
      "Fenster- und Storenreinigung",
      "Umzugsreinigung mit Abnahmegarantie",
      "Bau- und Fassadenreinigung",
      "Tiefgaragenreinigung",
    ],
  },
  {
    title: "Gartenunterhalt & Winterdienst",
    image: "/hero-building.png",
    imageAlt: "Gepflegte Aussenanlage einer modernen Liegenschaft",
    text: "Wir pflegen Ihre Aussenbereiche durch alle Jahreszeiten und sorgen im Winter für sichere Gehwege, Zufahrten und Parkplätze.",
    points: [
      "Rasen mähen und Heckenschnitt",
      "Sträucher und Bäume schneiden",
      "Unkraut entfernen, Rabattenpflege und Bepflanzungen",
      "Laubentsorgung",
      "Schneeräumung, Salz streuen und Eisbekämpfung",
      "Gehwege und Parkplätze sichern",
    ],
  },
  {
    title: "Reparaturen & Montagen",
    image: "/service-2.jpg",
    imageAlt: "Mitarbeiter bei Arbeiten in einer gepflegten Liegenschaft",
    text: "Praktische Arbeiten rund um Ihre Immobilie erledigen wir sauber, flexibel und unkompliziert.",
    points: [
      "Möbel- und Lampenmontage",
      "Silikonfugen erneuern",
      "Schrankdemontagen",
      "Entsorgungen",
      "Renovationsarbeiten",
    ],
  },
  {
    title: "Umzug & Entsorgung",
    image: "/service-5.jpg",
    imageAlt: "Leere Wohnung nach einer professionellen Räumung",
    text: "Ob einzelne Gegenstände oder eine komplette Wohnung: Wir organisieren Räumung, Entsorgung und Transport zuverlässig aus einer Hand.",
    points: [
      "Wohnungsräumungen",
      "Sperrgutentsorgung",
      "Keller- und Estrichräumungen",
      "Transportservice",
    ],
  },
  {
    title: "Liegenschaftsservice",
    image: "/hero-building.png",
    imageAlt: "Modern gepflegte Liegenschaft",
    text: "Wir behalten Ihre Liegenschaft im Blick und übernehmen wichtige organisatorische Aufgaben für einen reibungslosen, sicheren Betrieb.",
    points: [
      "Kontrolle der Liegenschaften und Objektkontrollen",
      "Schlüsselverwaltung",
      "Abfallmanagement",
      "Betreuung von Stockwerkeigentum",
    ],
  },
] as const;

export default function DienstleistungenPage() {
  return (
    <main>
      <Header />

      <section className="page-hero services-hero">
        <Image src="/hero-building.png" alt="Modern gepflegte Liegenschaft" fill priority sizes="100vw" />
        <div className="page-hero-overlay" />
        <div className="container">
          <p className="kicker light">Facility Connect Markaj</p>
          <h1>Unsere Dienstleistungen</h1>
          <p>Die Pflege Ihrer Objekte ist eine vertrauensvolle Aufgabe. Wir bieten die passende Betreuung für private und gewerbliche Liegenschaften.</p>
          <Link className="button" href="/kontakt/">Jetzt anfragen</Link>
        </div>
      </section>

      <section className="service-showcase section">
        <div className="container">
          <div className="service-intro">
            <p className="kicker">Reinigung und Werterhalt</p>
            <h2>Saubere Lösungen für jeden Bereich</h2>
            <p>Persönlich geplant, sorgfältig ausgeführt und genau auf Ihre Liegenschaft abgestimmt.</p>
          </div>

          <div className="service-feature-list">
            {services.map(({ title, image, imageAlt, text, points }, index) => (
              <article className={`service-feature${index % 2 ? " service-feature-reverse" : ""}`} key={title}>
                <div className="service-feature-image">
                  <Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 90vw, 540px" />
                </div>
                <div className="service-feature-copy">
                  <p className="service-number">{String(index + 1).padStart(2, "0")}</p>
                  <h2>{title}</h2>
                  <p>{text}</p>
                  <ul>
                    {points.map((point) => <li key={point}><Check />{point}</li>)}
                  </ul>
                  <Link className="arrow-link" href="/kontakt/">Offerte anfragen <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section">
        <div className="container">
          <div className="center-heading"><p className="kicker">Einfach und persönlich</p><h2>So funktioniert die Zusammenarbeit</h2></div>
          <div className="process-grid">
            <div><span>01</span><h3>Offerte einholen</h3><p>Sie beschreiben uns Ihren Bedarf oder vereinbaren eine Besichtigung.</p></div>
            <div><span>02</span><h3>Leistung abstimmen</h3><p>Wir definieren Umfang, Einsatzzeit und transparente Konditionen.</p></div>
            <div><span>03</span><h3>Zuverlässig ausführen</h3><p>Unser Team erledigt den Auftrag sorgfältig und termingerecht.</p></div>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container"><p className="kicker light">Persönlich beraten</p><h2>Welche Leistung dürfen wir für Sie übernehmen?</h2><p>Wir stellen Ihnen eine passende Lösung für Ihre Liegenschaft zusammen.</p><Link className="button button-white" href="/kontakt/">Offerte anfragen</Link></div>
      </section>
      <SiteFooter />
    </main>
  );
}
