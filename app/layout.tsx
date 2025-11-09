import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Providers from "@/components/providers"
import ScrollToTop from "@/components/scroll-to-top"
import { Suspense } from "react"
import PageTransition from "@/components/page-transition"
import PageBackground from "@/components/backgrounds/page-bg"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PRITAM CHAKROBORTY - FULLSTACK GENERATIVE AI DEVELOPER",
  description:
    "A modern, animated portfolio with smooth page transitions, glassmorphism, and gradient chroma typography.",
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("https://example.com"),
  icons: [{ rel: "icon", url: "/icon.jpg" }],
  openGraph: {
    title: "Animated Portfolio",
    description: "A modern, animated portfolio with smooth transitions and rich micro-interactions.",
    images: ["/og.jpg"],
  },
  generator: 'v0.app'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`font-sans ${inter.variable} ${mono.variable} bg-background`}>
        <PageBackground />
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <main className="min-h-[calc(100dvh-64px)] pt-16">
            <PageTransition>{children}</PageTransition>
          </main>
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  )
}
