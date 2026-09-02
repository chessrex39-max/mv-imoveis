import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MV Imóveis — Realizando sonhos, construindo histórias",
  description:
    "MV Imóveis: 19 anos conectando você aos melhores imóveis em Recife e região. Compra, venda, aluguel e assessoria completa. CRECI 15063.",
  keywords: [
    "MV Imóveis",
    "imobiliária Recife",
    "imóveis Piedade",
    "imóveis Muro Alto",
    "comprar imóvel",
    "vender imóvel",
    "alugar imóvel",
  ],
  openGraph: {
    title: "MV Imóveis — Realizando sonhos, construindo histórias",
    description:
      "19 anos conectando você aos melhores imóveis. Compra, venda, aluguel e assessoria completa. CRECI 15063.",
    url: siteUrl,
    siteName: "MV Imóveis",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
