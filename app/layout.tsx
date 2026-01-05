import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "INGRAD ENERGO - Termoenergetska Rešenja",
  description: "Vodeci stručnjaci u inženjeringu termoenergetskih objekata, termotehničkih i gasnih instalacija",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
