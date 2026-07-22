"use client";

import { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const recipient = "info@facility-connect-markaj.ch";

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Offertanfrage: ${data.get("service")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `E-Mail: ${data.get("email")}`,
      `Telefon: ${data.get("phone") || "–"}`,
      `Dienstleistung: ${data.get("service")}`,
      "",
      String(data.get("message")),
    ].join("\n");
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>Name<input name="name" autoComplete="name" placeholder="Vor- und Nachname" required /></label>
        <label>E-Mail<input name="email" type="email" autoComplete="email" placeholder="name@firma.ch" required /></label>
      </div>
      <div className="field-row">
        <label>Telefon <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" placeholder="+41 ..." /></label>
        <label>Dienstleistung
          <select name="service" defaultValue="" required>
            <option value="" disabled>Bitte auswählen</option>
            <option>Unterhalts- & Büroreinigung</option><option>Fensterreinigung</option>
            <option>Umzugsreinigung</option><option>Bau- & Spezialreinigung</option>
            <option>Hauswartung & Kontrollgänge</option><option>Garten & saisonale Arbeiten</option>
            <option>Räumung & Entsorgung</option><option>Montage & Kleinreparaturen</option>
            <option>Andere Anfrage</option>
          </select>
        </label>
      </div>
      <label>Wie können wir helfen?<textarea name="message" rows={5} placeholder="Erzählen Sie uns kurz von Ihrer Liegenschaft und dem gewünschten Einsatz." required /></label>
      <button className="button form-submit" type="submit">Anfrage vorbereiten <ArrowUpRight size={18} /></button>
      <p className="form-note">Ihre Angaben werden in Ihrem E-Mail-Programm für den Versand vorbereitet.</p>
    </form>
  );
}
