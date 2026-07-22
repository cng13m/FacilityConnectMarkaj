import Image from "next/image";
import Link from "next/link";
import { Building2, Check, Construction, Hammer, Home, Recycle, Sparkles, Sprout, Wrench } from "lucide-react";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dienstleistungen", description: "Reinigung, Hauswartung, Gebäudeunterhalt, Gartenpflege und weitere Facility Services." };

const services = [
  { icon: Sparkles, title: "Spezialreinigung", text: "Bei starken oder hartnäckigen Verschmutzungen braucht es Erfahrung, geeignete Mittel und eine präzise Arbeitsweise. Wir reinigen anspruchsvolle Flächen im Innen- und Aussenbereich fachgerecht.", points: ["Fassaden- und Glasreinigung", "Grund- und Tiefenreinigung", "Individuelle Reinigungslösungen"] },
  { icon: Wrench, title: "Hauswartung & Gebäudeunterhalt", text: "Wir behalten Ihre Liegenschaft im Blick und kümmern uns zuverlässig um den laufenden Unterhalt. So bleiben Funktion, Sicherheit und ein gepflegter Gesamteindruck langfristig erhalten.", points: ["Kontrollgänge und technischer Dienst", "Treppenhaus- und Allgemeinreinigung", "Kleinreparaturen und Unterhalt"] },
  { icon: Building2, title: "Büro- & Gebäudereinigung", text: "Saubere Arbeits- und Gemeinschaftsräume schaffen Wohlbefinden und hinterlassen einen professionellen Eindruck. Einsatzzeiten und Reinigungsintervalle stimmen wir auf Ihren Betrieb ab.", points: ["Böden und Oberflächen", "Sanitär- und Gemeinschaftsräume", "Türen, Rahmen und Glasflächen"] },
  { icon: Recycle, title: "Umzugsreinigung", text: "Wir übernehmen die gründliche Endreinigung Ihrer Wohnung oder Ihres Hauses, damit Sie sich auf den Umzug und eine entspannte Übergabe konzentrieren können.", points: ["Komplette Wohnungsendreinigung", "Küche, Bad, Fenster und Storen", "Flexible Terminplanung"] },
  { icon: Home, title: "Privatreinigung", text: "Auf Wunsch übernehmen wir die regelmässige Reinigung Ihres Zuhauses oder eine intensive Grundreinigung. Persönlich, diskret und auf Ihren Haushalt abgestimmt.", points: ["Regelmässige Wohnungsreinigung", "Einmalige Grundreinigung", "Individuell definierter Leistungsumfang"] },
  { icon: Construction, title: "Bau- & Fassadenreinigung", text: "Nach Neu- oder Umbauten entfernen wir Baustaub, Rückstände und Verschmutzungen professionell. Auch Fassaden und Aussenflächen bringen wir wieder in einen gepflegten Zustand.", points: ["Bauzwischen- und Bauendreinigung", "Fenster, Rahmen und Storen", "Fassaden- und Aussenflächen"] },
  { icon: Sprout, title: "Garten & saisonale Arbeiten", text: "Wir unterstützen Sie bei der Pflege von Aussenbereichen und saisonalen Aufgaben, damit Ihre Liegenschaft das ganze Jahr über einladend bleibt.", points: ["Garten- und Umgebungspflege", "Laub- und saisonale Arbeiten", "Individuelle Objektbetreuung"] },
  { icon: Hammer, title: "Montage, Räumung & Entsorgung", text: "Von kleineren Montagearbeiten bis zur koordinierten Räumung bieten wir praktische Unterstützung rund um Ihre Immobilie – effizient und unkompliziert.", points: ["Montage und Demontage", "Räumungen", "Fachgerechte Entsorgung"] },
] as const;

export default function DienstleistungenPage() {
  return <main>
    <Header />
    <section className="page-hero services-hero"><Image src="/hero-building.png" alt="Modern gepflegte Liegenschaft" fill priority sizes="100vw" /><div className="page-hero-overlay" /><div className="container"><p className="kicker light">Facility Connect Markaj</p><h1>Unsere Dienstleistungen</h1><p>Die Pflege Ihrer Objekte ist eine vertrauensvolle Aufgabe. Wir wissen Ihren Auftrag und Ihr Vertrauen zu schätzen.</p><Link className="button" href="/kontakt/">Jetzt anfragen</Link></div></section>
    <section className="service-details section"><div className="container">
      <div className="center-heading"><p className="kicker">Alles aus einer Hand</p><h2>Leistungen für jede Liegenschaft</h2><p>Professionelle Lösungen für Privatkunden, Unternehmen und Liegenschaftsverwaltungen.</p></div>
      <div className="detail-grid">{services.map(({ icon: Icon, title, text, points }) => <article key={title}><span className="detail-icon"><Icon /></span><div><h2>{title}</h2><p>{text}</p><ul>{points.map(point => <li key={point}><Check />{point}</li>)}</ul></div></article>)}</div>
    </div></section>
    <section className="process-section section"><div className="container"><div className="center-heading"><p className="kicker">Einfach und persönlich</p><h2>So funktioniert die Zusammenarbeit</h2></div><div className="process-grid"><div><span>01</span><h3>Offerte einholen</h3><p>Sie beschreiben uns Ihren Bedarf oder vereinbaren eine Besichtigung.</p></div><div><span>02</span><h3>Leistung abstimmen</h3><p>Wir definieren Umfang, Einsatzzeit und transparente Konditionen.</p></div><div><span>03</span><h3>Zuverlässig ausführen</h3><p>Unser Team erledigt den Auftrag sorgfältig und termingerecht.</p></div></div></div></section>
    <section className="home-cta"><div className="container"><p className="kicker light">Persönlich beraten</p><h2>Welche Leistung dürfen wir für Sie übernehmen?</h2><p>Wir stellen Ihnen eine passende Lösung für Ihre Liegenschaft zusammen.</p><Link className="button button-white" href="/kontakt/">Offerte anfragen</Link></div></section>
    <SiteFooter />
  </main>;
}
