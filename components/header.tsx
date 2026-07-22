"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Leistungen", "#leistungen"],
  ["Über uns", "#ueber-uns"],
  ["Qualität", "#qualitaet"],
  ["Kontakt", "#kontakt"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#top" aria-label="Facility Connect Markaj – Startseite">
          <Image src="/logo.jpg" alt="Facility Connect Markaj" width={214} height={96} priority />
        </a>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="button button-small desktop-cta" href="#kontakt">Offerte anfragen</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Menü schliessen" : "Menü öffnen"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile Navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="button" href="#kontakt" onClick={() => setOpen(false)}>Offerte anfragen</a>
        </nav>
      )}
    </header>
  );
}
