import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: {
    default: "Therapiepraxis Mag. Hanno Prettner - Psychotherapie in Klagenfurt", // Aktualisiert
    template: "%s | Therapiepraxis Mag. Hanno Prettner",
  },
  description:
    "Professionelle psychotherapeutische Betreuung in Klagenfurt. Existenzanalyse, Logotherapie, Biofeedback und mehr. Termine nach Vereinbarung.", // Aktualisiert
  keywords: ["Therapie", "Psychotherapie", "Klagenfurt", "Existenzanalyse", "Biofeedback"], // Aktualisiert
  authors: [{ name: "Mag. Hanno Prettner" }],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.pt-prettner.at", // Beispiel-URL für Klagenfurt, bitte anpassen
    siteName: "Therapiepraxis Mag. Hanno Prettner",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="font-roobert">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
