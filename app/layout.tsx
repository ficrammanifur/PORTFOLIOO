import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ficram Manifur Farissa - Modern Portfolio",
  description: "Fullstack Developer & AI Enthusiast - Portfolio website dengan teknologi modern",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>{children}</body>
    </html>
  )
}
