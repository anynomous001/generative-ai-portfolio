import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"
import { Suspense } from "react"
import PageTransition from "@/components/page-transition"

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
  title: "Pritam Chakroborty - Fullstack Generative AI Developer",
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
        <Suspense fallback={<div>Loading...</div>}>
          <main className="min-h-dvh">
            <PageTransition>{children}</PageTransition>
          </main>
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  )
}
