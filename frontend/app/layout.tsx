import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const glockGrotesque = localFont({
  src: [
    {
      path: "../public/fonts/GlockGrotesque-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-glock",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
})

const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/NeueMontreal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neue",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  title: "AURA - Informação vira força",
  description: "Aqui, a informação vira força para garantir direitos",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${neueMontreal.variable} ${glockGrotesque.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
