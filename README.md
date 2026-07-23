# Facility Connect Markaj

Static Next.js website prepared for deployment to Cloudflare Pages.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The deployable static website is generated in `out/`.

## Before launch

- Confirm the final domain and replace `facility-connect-markaj.ch` in metadata and contact links if needed.
- Confirm `facilityconnectmarkaj@gmail.com` as the final recipient in `components/contact-form.tsx`.
- Add the final Impressum and Datenschutz content.
- For direct server-side form delivery, connect Formspree/Resend and replace the current `mailto:` handoff.

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `out`
- Node.js: 22 or newer
