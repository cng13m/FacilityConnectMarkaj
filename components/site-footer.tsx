import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Image src="/facility-connect-markaj-logo.png" alt="Facility Connect Markaj" width={1536} height={1024} />
          <p>Reinigung. Unterhalt. Werterhalt.</p>
        </div>
        <div><span className="footer-label">Unser Unternehmen</span><Link href="/">Startseite</Link><Link href="/dienstleistungen/">Dienstleistungen</Link><Link href="/kontakt/">Kontakt</Link></div>
        <div><span className="footer-label">Kontakt</span><a href="mailto:info@facility-connect-markaj.ch">info@facility-connect-markaj.ch</a><p>Schweiz</p></div>
        <div><span className="footer-label">Unser Versprechen</span><p>Persönliche Betreuung</p><p>Faire Preise</p><p>Zuverlässige Ausführung</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Facility Connect Markaj</span><span>Impressum · Datenschutz</span></div>
    </footer>
  );
}
