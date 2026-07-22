import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Check, Construction, Hammer, Home, Recycle, Sparkles, Sprout, Wrench } from "lucide-react";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";

const quickServices = [
  [Home, "Privatreinigung"], [Building2, "Büro- & Gebäudereinigung"],
  [Recycle, "Umzugsreinigung"], [Sparkles, "Fensterreinigung"],
  [Wrench, "Spezialreinigung"], [Construction, "Baureinigung"],
] as const;

const moreServices = [
  [Sparkles, "Fenster- & Glasreinigung", "Streifenfreie Fenster, Glasflächen und Rahmen – innen wie aussen."],
  [Building2, "Unterhaltsreinigung", "Regelmässige Pflege für saubere und einladende Geschäfts- und Gemeinschaftsräume."],
  [Wrench, "Hauswartung", "Kontrollgänge, Kleinreparaturen und zuverlässige Betreuung Ihrer Liegenschaft."],
  [Sprout, "Garten & Saisonarbeiten", "Gepflegte Aussenbereiche und saisonale Unterstützung rund um Ihr Objekt."],
  [Recycle, "Räumung & Entsorgung", "Effiziente Räumungen und fachgerechte Entsorgung – sauber koordiniert."],
  [Hammer, "Montagearbeiten", "Praktische Unterstützung bei Montage, Demontage und kleineren Arbeiten."],
] as const;

export default function HomePage() {
  return <main>
    <Header />
    <section className="home-hero">
      <Image src="/hero-facade-cleaning.png" alt="Professionelle Fassadenreinigung an einem modernen Gebäude" fill priority sizes="100vw" />
      <div className="home-hero-wash" />
      <div className="container home-hero-content">
        <h1>Ihr professioneller Partner<br />für Reinigung und Unterhalt</h1>
        <p>sauber & gepflegt.</p>
        <div className="hero-buttons"><Link className="button" href="/kontakt/">Jetzt anfragen</Link><Link className="button button-soft" href="/dienstleistungen/">Unsere Dienste</Link></div>
      </div>
    </section>

    <section className="quick-services" aria-label="Leistungsübersicht">
      <div className="quick-row quick-primary container">{quickServices.slice(0, 3).map(([Icon, label]) => <Link href="/dienstleistungen/" key={label}><Icon /><span>{label}</span></Link>)}</div>
      <div className="quick-row quick-secondary container">{quickServices.slice(3).map(([Icon, label]) => <Link href="/dienstleistungen/" key={label}><Icon /><span>{label}</span></Link>)}</div>
    </section>

    <section className="about-section section container">
      <div className="about-image"><Image src="/hero-building.png" alt="Gepflegte moderne Geschäftsliegenschaft" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
      <div className="about-copy"><p className="kicker">Ihr Partner für jeden Bereich</p><h2>Eine Ansprechperson.<br />Alles aus einer Hand.</h2><p>Facility Connect Markaj ist ein modernes Schweizer Dienstleistungsunternehmen für Reinigung, Unterhalt und Werterhalt von Immobilien. Wir betreuen Privatkunden, Unternehmen und Liegenschaftsverwaltungen persönlich, sorgfältig und flexibel.</p><ul><li><Check /> Qualifizierte und sorgfältige Ausführung</li><li><Check /> Flexible Lösungen für Ihren Bedarf</li><li><Check /> Zuverlässige und persönliche Betreuung</li><li><Check /> Umweltbewusste Arbeitsmethoden</li></ul><Link className="arrow-link" href="/dienstleistungen/">Alle Dienstleistungen <ArrowRight /></Link></div>
    </section>

    <section className="more-services section"><div className="container">
      <div className="center-heading"><p className="kicker">Weitere Dienste</p><h2>Rundum gut betreut</h2><p>Alles, was Ihre Immobilie sauber, funktionstüchtig und wertbeständig hält.</p></div>
      <div className="more-grid">{moreServices.map(([Icon, title, text]) => <article key={title}><span className="service-icon"><Icon /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </div></section>

    <section className="quality-band"><div className="container quality-grid"><div><p className="kicker">Unser Qualitätsversprechen</p><h2>Professionell, zuverlässig und mit Leidenschaft.</h2></div><div className="quality-points"><p><strong>Termingerecht</strong><span>Wir halten Zusagen und planen vorausschauend.</span></p><p><strong>Transparent</strong><span>Faire Preise und klar definierte Leistungen.</span></p><p><strong>Persönlich</strong><span>Direkte Betreuung und kurze Entscheidungswege.</span></p><p><strong>Nachhaltig</strong><span>Sorgfalt für den langfristigen Werterhalt.</span></p></div></div></section>

    <section className="home-cta"><div className="container"><p className="kicker light">Jetzt Angebot sichern</p><h2>Ihre Liegenschaft verdient die beste Pflege.</h2><p>Erzählen Sie uns von Ihrem Bedarf. Wir beraten Sie persönlich und unverbindlich.</p><Link className="button button-white" href="/kontakt/">Offerte anfragen</Link></div></section>
    <SiteFooter />
  </main>;
}
