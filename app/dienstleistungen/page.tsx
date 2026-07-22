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
    title: "Spezialreinigung",
    image: "/service-1.jpg",
    imageAlt: "Professionelle Spezialreinigung eines Steinbodens",
    text: "Hartnäckige Verschmutzungen und empfindliche Oberflächen verlangen mehr als eine gewöhnliche Reinigung. Wir wählen das passende Verfahren, die richtigen Mittel und arbeiten sorgfältig im Innen- und Aussenbereich.",
    points: ["Grund- und Tiefenreinigung", "Fassaden- und Glasreinigung", "Reinigung nach Bau- oder Renovationsarbeiten"],
  },
  {
    title: "Hauswartung",
    image: "/service-2.jpg",
    imageAlt: "Hauswart bei einem Kontrollgang in einer gepflegten Liegenschaft",
    text: "Eine gut betreute Liegenschaft bleibt sicher, funktional und einladend. Wir übernehmen regelmässige Kontrollgänge und koordinieren die laufenden Arbeiten rund um Ihr Objekt – zuverlässig und mit einem festen Ansprechpartner.",
    points: ["Treppenhaus- und Allgemeinreinigung", "Technischer Dienst und Kontrollgänge", "Gartenpflege, Winterdienst und Umgebung"],
  },
  {
    title: "Gebäudereinigung",
    image: "/service-3.jpg",
    imageAlt: "Professionelle Reinigung einer modernen Glasfassade",
    text: "Wir pflegen Gebäude gründlich und werterhaltend. Von der regelmässigen Unterhaltsreinigung bis zu anspruchsvollen Glas- und Fassadenflächen erhalten Sie eine Lösung, die auf Nutzung, Material und Objektgrösse abgestimmt ist.",
    points: ["Fenster, Storen und Fensterläden", "Fassaden und Aussenflächen", "Bauendreinigung von Neu- und Umbauten"],
  },
  {
    title: "Büroreinigung",
    image: "/service-4.jpg",
    imageAlt: "Reinigung eines hellen modernen Büros",
    text: "Saubere Arbeitsplätze schaffen Wohlbefinden und einen professionellen Eindruck. Wir planen die Einsätze passend zu Ihrem Betrieb und bringen sämtliches Material für die fachgerechte Reinigung und Pflege mit.",
    points: ["Böden, Oberflächen und Mobiliar", "Sanitär- und Gemeinschaftsräume", "Türen, Rahmen und hygienische Kontaktflächen"],
  },
  {
    title: "Umzugsreinigung",
    image: "/service-5.jpg",
    imageAlt: "Gründliche Umzugsreinigung einer leeren Wohnung",
    text: "Beim Umzug zählt eine saubere und termingerechte Übergabe. Wir reinigen Ihre Wohnung oder Ihr Haus vollständig und kümmern uns um die Details, damit Sie Ihre Zeit für den eigentlichen Umzug nutzen können.",
    points: ["Komplette Wohnungsendreinigung", "Küche, Bad, Fenster und Storen", "Auf Wunsch mit Abnahmebegleitung"],
  },
  {
    title: "Privatreinigung",
    image: "/service-6.jpg",
    imageAlt: "Diskrete Reinigung in einem gepflegten Privathaushalt",
    text: "Mehr Freizeit und ein Zuhause, in dem Sie sich wohlfühlen: Wir übernehmen die regelmässige Wohnungsreinigung oder bringen Ihre Räume mit einer einmaligen Grundreinigung wieder in einen rundum gepflegten Zustand.",
    points: ["Regelmässige Wohnungsreinigung", "Einmalige Grundreinigung", "Persönlich definierter Leistungsumfang"],
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
