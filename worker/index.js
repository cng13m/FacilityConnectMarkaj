const RESEND_ENDPOINT = "https://api.resend.com/emails";

const allowedServices = new Set([
  "Hauswartung",
  "Reinigung",
  "Gartenunterhalt",
  "Winterdienst",
  "Reparaturen & Montagen",
  "Umzug & Entsorgung",
  "Liegenschaftsservice",
  "Andere Anfrage",
]);

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

async function handleContact(request, env) {
  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) {
    return json({ error: "Ungültige Anfrage." }, 403);
  }

  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (contentLength > 20_000) {
    return json({ error: "Die Anfrage ist zu gross." }, 413);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Die Formulardaten sind ungültig." }, 400);
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return json({ error: "Die Formulardaten sind ungültig." }, 400);
  }

  // Hidden honeypot field: bots receive a success response without sending mail.
  if (clean(payload.website, 100)) {
    return json({ ok: true });
  }

  const firstName = clean(payload.firstName, 80);
  const lastName = clean(payload.name, 80);
  const company = clean(payload.company, 120);
  const email = clean(payload.email, 180);
  const phone = clean(payload.phone, 60);
  const service = clean(payload.service, 100);
  const rooms = clean(payload.rooms, 30);
  const area = clean(payload.area, 30);
  const frequency = clean(payload.frequency, 40);
  const address = clean(payload.address, 240);
  const message = clean(payload.message, 4_000);

  if (!firstName || !lastName || !email || !service || !message) {
    return json({ error: "Bitte füllen Sie alle Pflichtfelder aus." }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }, 400);
  }

  if (!allowedServices.has(service)) {
    return json({ error: "Bitte wählen Sie eine gültige Dienstleistung." }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    return json({ error: "Der E-Mail-Service ist noch nicht konfiguriert." }, 503);
  }

  const emailText = [
    "Neue Offertanfrage über die Website",
    "",
    `Name: ${firstName} ${lastName}`,
    `Firma: ${company || "–"}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone || "–"}`,
    `Dienstleistung: ${service}`,
    `Zimmer: ${rooms || "–"}`,
    `Fläche: ${area ? `${area} m²` : "–"}`,
    `Serviceart: ${frequency || "–"}`,
    `Adresse: ${address || "–"}`,
    "",
    "Nachricht:",
    message,
  ].join("\n");

  let resendResponse;
  try {
    resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
        "User-Agent": "facility-connect-markaj/1.0",
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL,
        to: [env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Offertanfrage: ${service}`,
        text: emailText,
      }),
    });
  } catch (error) {
    console.error("Resend request failed", error);
    return json({ error: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut." }, 502);
  }

  if (!resendResponse.ok) {
    console.error("Resend delivery failed", resendResponse.status, await resendResponse.text());
    return json({ error: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut." }, 502);
  }

  return json({ ok: true });
}

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", {
          status: 405,
          headers: { Allow: "POST" },
        });
      }

      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
