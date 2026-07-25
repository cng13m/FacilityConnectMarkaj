import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://facility-connect-markaj.ch"),
  title: {
    default: "Facility Connect Markaj | Reinigung, Unterhalt, Werterhalt",
    template: "%s | Facility Connect Markaj",
  },
  description:
    "Professionelle Facility Services für Privatkunden, Unternehmen und Liegenschaftsverwaltungen – zuverlässig, persönlich und nachhaltig.",
  openGraph: {
    title: "Facility Connect Markaj",
    description: "Reinigung. Unterhalt. Werterhalt.",
    type: "website",
    locale: "de_CH",
  },
};

export const viewport: Viewport = {
  themeColor: "#06233c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-CH">
      <body>{children}</body>
    </html>
  );
}
