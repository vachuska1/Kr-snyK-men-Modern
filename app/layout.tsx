import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ekostat - Krásný kámen | Ekostat - Krásný kámen | Kamenické práce a výrobky",
  description:
    "Z kamene dodáváme: dlažby, obklady, obrubníky, kostky, stoly, parapety, haklíky, schody, kašny a další atypické kamenické výrobky a prvky ruční kamenické výroby.",
  keywords:
    "dlažby, obklady, obrubníky, kostky, stoly, parapety, haklíky, schody, kašny, atypické kamenické výrobky, prvky ruční kamenické výroby, Ekostat, Krásný kámen",
  authors: [{ name: "Ing. Václav Vachuška Ph.D." }],
  creator: "Ekostat - Krásný kámen",
  publisher: "Ekostat - Krásný kámen",
  robots: "index, follow",
  openGraph: {
    title: "Ekostat - Krásný kámen | Kamenické práce a výrobky",
    description:
      "Z kamene dodáváme: dlažby, obklady, obrubníky, kostky, stoly, parapety, haklíky, schody, kašny a další atypické kamenické výrobky a prvky ruční kamenické výroby.",
    url: "https://www.ekostat.cz",
    siteName: "Ekostat - Krásný kámen",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekostat - Krásný kámen | Kamenické práce a výrobky",
    description:
      "Z kamene dodáváme: dlažby, obklady, obrubníky, kostky, stoly, parapety, haklíky, schody, kašny a další atypické kamenické výrobky a prvky ruční kamenické výroby.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#57534e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
}
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
