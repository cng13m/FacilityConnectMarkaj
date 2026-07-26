import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Building2, Check, Hammer, Recycle, Sparkles, Sprout, Wrench } from "lucide-react";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";

const quickServices = [
  [Wrench, "Hauswartung", "hauswartung"],
  [Sparkles, "Reinigung", "reinigung"],
  [Sprout, "Garten & Winterdienst", "garten-winterdienst"],
  [Hammer, "Reparaturen & Montagen", "reparaturen-montagen"],
  [Recycle, "Umzug & Entsorgung", "umzug-entsorgung"],
  [Building2, "Liegenschaftsservice", "liegenschaftsservice"],
] as const;

export default function HomePage() {
  return <main>
    <Header />
    <section className="home-hero">
      <Image src="/hero-property-care.png" alt="Facility Manager vor einer modern gepflegten Liegenschaft" fill priority sizes="100vw" />
      <div className="home-hero-wash" />
      <div className="container home-hero-content">
        <h1>Ihr professioneller Partner<br />für Reinigung und Unterhalt</h1>
        <p>sauber & gepflegt.</p>
        <div className="hero-buttons">
          <Link className="hero-services-link" href="/dienstleistungen/">
            <span>Unsere Dienste</span>
            <span className="hero-services-icon" aria-hidden="true"><ArrowDown /></span>
          </Link>
        </div>
      </div>
    </section>

    <section className="quick-services" aria-label="Leistungsübersicht" data-reveal="pop">
      <div className="quick-row quick-primary container">
        {quickServices.map(([Icon, label, serviceId]) => (
          <Link href={`/dienstleistungen/#${serviceId}`} key={label}>
            <Icon />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </section>

    <section className="about-section section container">
      <div className="about-image" data-reveal="left"><Image src="/hero-building.png" alt="Gepflegte moderne Geschäftsliegenschaft" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
      <div className="about-copy" data-reveal="right"><p className="kicker">Ihr Partner für jeden Bereich</p><h2>Eine Ansprechperson.<br />Alles aus einer Hand.</h2><p>Facility Connect Markaj ist ein modernes Schweizer Dienstleistungsunternehmen mit Sitz in Wohlen AG. Wir betreuen Privatkunden, Unternehmen und Liegenschaftsverwaltungen rund um Reinigung, Unterhalt und Werterhalt persönlich, sorgfältig und flexibel.</p><ul><li><Check /> Qualifizierte und sorgfältige Ausführung</li><li><Check /> Flexible Lösungen für Ihren Bedarf</li><li><Check /> Zuverlässige und persönliche Betreuung</li><li><Check /> Umweltbewusste Arbeitsmethoden</li></ul><Link className="arrow-link" href="/dienstleistungen/">Alle Dienstleistungen <ArrowRight /></Link></div>
    </section>

    <section className="quality-band"><div className="container quality-grid"><div data-reveal="left"><p className="kicker">Unser Qualitätsversprechen</p><h2>Professionell, zuverlässig und mit Leidenschaft.</h2></div><div className="quality-points" data-reveal="right"><p><strong>Termingerecht</strong><span>Wir halten Zusagen und planen vorausschauend.</span></p><p><strong>Transparent</strong><span>Faire Preise und klar definierte Leistungen.</span></p><p><strong>Persönlich</strong><span>Direkte Betreuung und kurze Entscheidungswege.</span></p><p><strong>Nachhaltig</strong><span>Sorgfalt für den langfristigen Werterhalt.</span></p></div></div></section>

    <section className="home-cta"><div className="container" data-reveal="pop"><p className="kicker light">Jetzt Angebot sichern</p><h2>Ihre Liegenschaft verdient die beste Pflege.</h2><p>Erzählen Sie uns von Ihrem Bedarf. Wir beraten Sie persönlich und unverbindlich.</p><Link className="button button-white" href="/kontakt/">Offerte anfragen</Link></div></section>
    <SiteFooter />
  </main>;
}
