import Image from "next/image";
import { ArrowRight, Building2, Check, ClipboardCheck, Construction, Hammer, Home, Leaf, Recycle, ShieldCheck, Sparkles, Sprout, Wrench } from "lucide-react";
import { Header } from "@/components/header";
import { ContactForm } from "@/components/contact-form";

const services = [
  { icon: Building2, n: "01", title: "Unterhalts- & Büroreinigung", text: "Regelmässige Reinigung für gepflegte Arbeits- und Gemeinschaftsräume – flexibel auf Ihren Betrieb abgestimmt." },
  { icon: Sparkles, n: "02", title: "Fensterreinigung", text: "Streifenfreie Fenster, Glasflächen und Rahmen für einen rundum klaren und professionellen Eindruck." },
  { icon: Home, n: "03", title: "Umzugsreinigung", text: "Gründliche Endreinigung, damit Sie Ihre Übergabe entspannt und bestens vorbereitet angehen können." },
  { icon: Construction, n: "04", title: "Bau- & Spezialreinigung", text: "Fachgerechte Reinigung nach Neu- oder Umbauten sowie Lösungen für besonders anspruchsvolle Flächen." },
  { icon: ClipboardCheck, n: "05", title: "Hauswartung & Kontrollgänge", text: "Zuverlässige Betreuung, regelmässige Kontrollen und ein wachsames Auge auf Ihre Liegenschaft." },
  { icon: Sprout, n: "06", title: "Garten & saisonale Arbeiten", text: "Gepflegte Aussenräume und saisonale Unterstützung, damit Ihr Objekt das ganze Jahr überzeugt." },
  { icon: Recycle, n: "07", title: "Räumung & Entsorgung", text: "Saubere Räumungen und verantwortungsvolle Entsorgung – koordiniert, effizient und besenrein." },
  { icon: Hammer, n: "08", title: "Montage & Kleinreparaturen", text: "Praktische Unterstützung bei Montage, Demontage und kleineren Arbeiten rund um Ihre Immobilie." },
];
const audiences = ["Liegenschaftsverwaltungen", "Immobiliengesellschaften", "Unternehmen", "Arztpraxen", "Stockwerkeigentum", "Privatkundschaft"];

export default function HomePage() {
  return <main id="top">
    <Header />
    <section className="hero">
      <Image className="hero-image" src="/hero-building.png" alt="Moderne und gepflegte Geschäftsliegenschaft" fill priority sizes="100vw" />
      <div className="hero-overlay" />
      <div className="hero-content container">
        <p className="eyebrow"><span /> Reinigung. Unterhalt. Werterhalt.</p>
        <h1>Saubere Räume.<br /><em>Bessere Lebensqualität.</em></h1>
        <p className="hero-copy">Professionelle Reinigung und Facility Services, auf die Sie sich verlassen können.</p>
        <div className="hero-actions">
          <a className="button" href="#kontakt">Offerte anfragen</a>
          <a className="button button-outline" href="#leistungen">Unsere Leistungen</a>
        </div>
      </div>
    </section>

    <section className="services section" id="leistungen"><div className="container">
      <div className="section-heading"><div><p className="eyebrow"><span /> Unsere Leistungen</p><h2>Was wir für Sie tun</h2></div><p>Von der regelmässigen Reinigung bis zur umfassenden Objektbetreuung – zuverlässig aus einer Hand.</p></div>
      <div className="service-grid">{services.map(({ icon: Icon, n, title, text }) => <article className="service-card" key={title}><div className="service-top"><Icon size={30} strokeWidth={1.6} /><span>{n}</span></div><h3>{title}</h3><p>{text}</p><a href="#kontakt">Offerte anfragen <ArrowRight size={16} /></a></article>)}</div>
    </div></section>

    <section className="intro section container" id="ueber-uns">
      <div className="intro-label"><p className="eyebrow"><span /> Facility Connect Markaj</p><div className="seal"><ShieldCheck size={28} /><span>Schweizer<br />Qualitätsanspruch</span></div></div>
      <div className="intro-copy"><h2>Eine Ansprechperson.<br /><em>Alles aus einer Hand.</em></h2><p>Wir sind ein modernes Schweizer Dienstleistungsunternehmen für Reinigung, Unterhalt und Werterhalt von Immobilien. Mit persönlicher Betreuung, sorgfältiger Arbeit und flexiblen Lösungen halten wir Ihre Liegenschaft sauber, funktionstüchtig und wertbeständig.</p><a className="text-link" href="#qualitaet">Was uns auszeichnet <ArrowRight size={18} /></a></div>
    </section>

    <section className="value section" id="qualitaet"><div className="container value-grid">
      <div className="value-visual"><div className="monogram">FC</div><div className="value-caption"><Wrench size={20} /><span>Reinigung.<br />Unterhalt.<br />Werterhalt.</span></div></div>
      <div className="value-copy"><p className="eyebrow"><span /> Unser Qualitätsversprechen</p><h2>Ihr Objekt verdient<br /><em>echte Verlässlichkeit.</em></h2><p className="lead">Gute Facility Services sieht man am Ergebnis – und spürt man in der Zusammenarbeit.</p>
        <ul className="promise-list">{[
          ["Termingerechte Ausführung", "Wir halten Zusagen und planen vorausschauend."], ["Faire, transparente Preise", "Klare Leistungen ohne unangenehme Überraschungen."], ["Flexible Einsatzzeiten", "Unsere Arbeit richtet sich nach Ihrem Alltag und Betrieb."], ["Nachhaltiger Werterhalt", "Sorgfalt und umweltbewusste Methoden für langfristige Qualität."]
        ].map(([title, text]) => <li key={title}><span className="check"><Check size={16} /></span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ul>
      </div>
    </div></section>

    <section className="audiences section"><div className="container audience-grid">
      <div><p className="eyebrow"><span /> Für wen wir arbeiten</p><h2>Partnerschaft beginnt<br /><em>mit Verständnis.</em></h2></div>
      <div className="audience-list">{audiences.map((item, i) => <div key={item}><span>0{i + 1}</span>{item}</div>)}</div>
    </div></section>

    <section className="sustainability section"><div className="container sustainability-inner"><Leaf size={42} strokeWidth={1.4} /><p className="eyebrow light"><span /> Verantwortung</p><h2>Sauber für heute.<br /><em>Bewusst für morgen.</em></h2><p>Wo immer möglich setzen wir auf umweltbewusste Arbeitsmethoden, einen sorgfältigen Umgang mit Ressourcen und Lösungen, die nachhaltig wirken.</p></div></section>

    <section className="contact section" id="kontakt"><div className="container contact-grid">
      <div className="contact-copy"><p className="eyebrow"><span /> Kontakt</p><h2>Was dürfen wir<br /><em>für Sie erhalten?</em></h2><p>Beschreiben Sie uns kurz Ihren Bedarf. Wir melden uns persönlich und erstellen eine unverbindliche Offerte.</p><div className="contact-point"><ShieldCheck /><span><strong>Unverbindlich anfragen</strong>Persönlich und transparent beraten</span></div></div>
      <ContactForm />
    </div></section>

    <footer><div className="container footer-main">
      <div className="footer-brand"><Image src="/logo.jpg" alt="Facility Connect Markaj" width={260} height={117} /><p>Sauberkeit verbindet.<br />Qualität überzeugt.</p></div>
      <div><span className="footer-label">Navigation</span><a href="#leistungen">Leistungen</a><a href="#ueber-uns">Über uns</a><a href="#qualitaet">Qualität</a><a href="#kontakt">Kontakt</a></div>
      <div><span className="footer-label">Leistungsbereiche</span><a href="#leistungen">Reinigung</a><a href="#leistungen">Hauswartung</a><a href="#leistungen">Gartenpflege</a><a href="#leistungen">Kleinreparaturen</a></div>
      <div><span className="footer-label">Kontakt</span><a href="mailto:info@facility-connect-markaj.ch">info@facility-connect-markaj.ch</a><p>Schweiz</p></div>
    </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Facility Connect Markaj</span><span>Impressum · Datenschutz</span></div></footer>
  </main>;
}
