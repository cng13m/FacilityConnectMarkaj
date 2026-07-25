"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json() as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Die Anfrage konnte nicht gesendet werden.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Die Anfrage konnte nicht gesendet werden.");
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" data-reveal="right" onSubmit={submit}>
      <label className="contact-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
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
      <button className="button form-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Wird gesendet …" : "Anfrage senden"} <ArrowUpRight size={18} />
      </button>
      <div className="form-status" aria-live="polite">
        {status === "success" && <p className="form-success">Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet.</p>}
        {status === "error" && <p className="form-error">{errorMessage}</p>}
      </div>
      <p className="form-note">Ihre Angaben werden sicher übermittelt und ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.</p>
    </form>
  );
}
