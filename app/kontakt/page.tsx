import Image from "next/image";
import { Mail, MapPin, ShieldCheck } from "lucide-react";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Kontakt", description: "Kontaktieren Sie Facility Connect Markaj und holen Sie Ihre unverbindliche Offerte ein." };

export default function KontaktPage() {
  return <main>
    <Header />
    <section className="page-hero contact-hero"><Image src="/hero-facility-connect.png" alt="Professioneller Facility-Service-Mitarbeiter" fill priority sizes="100vw" /><div className="page-hero-overlay" /><div className="container"><p className="kicker light">Kontaktieren Sie uns</p><h1>Holen Sie Ihre Offerte ein</h1><p>Erzählen Sie uns von Ihrer Liegenschaft. Wir melden uns persönlich und unverbindlich.</p></div></section>
    <section className="contact-page section"><div className="container contact-page-grid">
      <div className="contact-intro"><p className="kicker">Wir sind für Sie da</p><h2>Wie können wir helfen?</h2><p>Ob regelmässige Reinigung, einmaliger Auftrag oder umfassende Objektbetreuung: Senden Sie uns Ihre Anfrage mit den wichtigsten Angaben. So können wir Sie schnell und passend beraten.</p><div className="contact-info"><a href="mailto:info@facility-connect-markaj.ch"><Mail /><span><strong>E-Mail</strong>info@facility-connect-markaj.ch</span></a><p><MapPin /><span><strong>Einsatzgebiet</strong>Schweiz</span></p><p><ShieldCheck /><span><strong>Beratung</strong>Persönlich und unverbindlich</span></p></div></div>
      <ContactForm />
    </div></section>
    <SiteFooter />
  </main>;
}
