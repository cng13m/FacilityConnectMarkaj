"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Startseite", "/"],
  ["Dienstleistungen", "/dienstleistungen/"],
  ["Kontakt", "/kontakt/"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Facility Connect Markaj – Startseite">
          <Image src="/horizontal-logo.png" alt="Facility Connect Markaj" width={1536} height={1024} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {links.map(([label, href]) => <Link className={pathname === href || (href !== "/" && pathname.startsWith(href.slice(0, -1))) ? "active" : ""} key={href} href={href}>{label}</Link>)}
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Menü schliessen" : "Menü öffnen"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile Navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
      )}
    </header>
  );
}
