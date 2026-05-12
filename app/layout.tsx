import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollProgress from "@/components/ui/scroll-progress"
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
  title: "Pritam Chakroborty — AI & Full-Stack Developer Portfolio",
  description:
    "I build AI products and automation systems for founders and operators. LangGraph, RAG, Next.js, Python — production-grade, end to end.",
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("https://generative-ai-portfolio.vercel.app"),
  icons: [{ rel: "icon", url: "/icon.jpg" }],
  openGraph: {
    type: "website",
    url: "https://generative-ai-portfolio.vercel.app",
    siteName: "Pritam Chakroborty",
    locale: "en_US",
    title: "Pritam Chakroborty — AI & Full-Stack Developer Portfolio",
    description:
      "I build AI products and automation systems for founders and operators. LangGraph, RAG, Next.js, Python — production-grade, end to end.",
    images: [
      {
        url: "/images/Profile.jpeg",
        width: 864,
        height: 1184,
        alt: "Pritam Chakroborty — AI & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pritam Chakroborty — AI & Full-Stack Developer Portfolio",
    description:
      "I build AI products and automation systems for founders and operators. LangGraph, RAG, Next.js, Python — production-grade, end to end.",
    images: ["/images/Profile.jpeg"],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`font-sans ${inter.variable} ${mono.variable} bg-background overflow-x-hidden`}>
        {/* Global AETHER-style grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundSize: "44px 44px",
            backgroundImage:
              "linear-gradient(to right,rgba(255,255,255,0.018) 1px,transparent 1px)," +
              "linear-gradient(to bottom,rgba(255,255,255,0.018) 1px,transparent 1px)",
          }}
        />
        <ScrollProgress />
        <Suspense fallback={<div>Loading...</div>}>
          <main className="relative z-10 min-h-dvh">
            <PageTransition>{children}</PageTransition>
          </main>
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  )
}
