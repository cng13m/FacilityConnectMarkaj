"use client";

import { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const recipient = "facilityconnectmarkaj@gmail.com";

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Offertanfrage: ${data.get("service")}`;
    const body = [
      `Name: ${data.get("firstName")} ${data.get("name")}`,
      `Firma: ${data.get("company") || "–"}`,
      `E-Mail: ${data.get("email")}`,
      `Telefon: ${data.get("phone") || "–"}`,
      `Dienstleistung: ${data.get("service")}`,
      `Zimmer: ${data.get("rooms") || "–"}`,
      `Fläche: ${data.get("area") || "–"} m²`,
      `Serviceart: ${data.get("frequency")}`,
      `Adresse: ${data.get("address") || "–"}`,
      "",
      String(data.get("message")),
    ].join("\n");
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>Vorname<input name="firstName" autoComplete="given-name" placeholder="Vorname" required /></label>
        <label>Nachname<input name="name" autoComplete="family-name" placeholder="Nachname" required /></label>
      </div>
      <div className="field-row">
        <label>Firma <span>(optional)</span><input name="company" autoComplete="organization" placeholder="Firmenname" /></label>
        <label>E-Mail<input name="email" type="email" autoComplete="email" placeholder="name@firma.ch" required /></label>
      </div>
      <div className="field-row">
        <label>Telefon <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" placeholder="+41 ..." /></label>
        <label>Dienstleistung
          <select name="service" defaultValue="" required>
            <option value="" disabled>Bitte auswählen</option>
            <option>Hauswartung</option><option>Reinigung</option>
            <option>Gartenunterhalt</option><option>Winterdienst</option>
            <option>Reparaturen & Montagen</option><option>Umzug & Entsorgung</option>
            <option>Liegenschaftsservice</option>
            <option>Andere Anfrage</option>
          </select>
        </label>
      </div>
      <div className="field-row">
        <label>Anzahl Zimmer <span>(optional)</span><select name="rooms" defaultValue=""><option value="">Bitte auswählen</option><option>1 – 1.5</option><option>2 – 2.5</option><option>3 – 3.5</option><option>4 – 4.5</option><option>5 – 5.5</option><option>6 – 6.5</option><option>7+</option></select></label>
        <label>Fläche in m² <span>(optional)</span><input name="area" inputMode="numeric" placeholder="z. B. 120" /></label>
      </div>
      <div className="field-row">
        <label>Serviceart<select name="frequency" defaultValue="Einmalig"><option>Einmalig</option><option>Regelmässig</option></select></label>
        <label>Adresse <span>(optional)</span><input name="address" autoComplete="street-address" placeholder="Strasse, Ort" /></label>
      </div>
      <label>Wie können wir helfen?<textarea name="message" rows={5} placeholder="Erzählen Sie uns kurz von Ihrer Liegenschaft und dem gewünschten Einsatz." required /></label>
      <button className="button form-submit" type="submit">Anfrage vorbereiten <ArrowUpRight size={18} /></button>
      <p className="form-note">Ihre Angaben werden in Ihrem E-Mail-Programm für den Versand vorbereitet.</p>
    </form>
  );
}
