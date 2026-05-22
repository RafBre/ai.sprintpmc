import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SprintPMC - AI Automation Expert | Rafał Breński",
  description:
    "Projektuję inteligentne automatyzacje AI, które uwalniają czas, eliminują błędy i skalują Twój biznes. Ekspert n8n, Make.com, OpenAI, Claude. | I design intelligent AI automations that free time, eliminate errors and scale your business.",
  keywords: ["AI automation", "automatyzacja AI", "n8n", "Make.com", "chatbot AI", "integracje systemów", "SprintPMC"],
  authors: [{ name: "Rafał Breński" }],
  openGraph: {
    title: "SprintPMC - AI Automation Expert",
    description: "Inteligentne automatyzacje AI dla Twojego biznesu.",
    url: "https://sprintpmc.com",
    siteName: "SprintPMC",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SprintPMC - AI Automation Expert",
    description: "Inteligentne automatyzacje AI dla Twojego biznesu.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
