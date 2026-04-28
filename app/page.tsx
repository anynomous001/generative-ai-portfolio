'use client'

import { motion } from "framer-motion"
import { Component as HeroSection } from "@/components/ui/hero-section"
import MainNav from "@/components/ui/main-nav"
import Projects from "@/components/projects/projects"
import Experience from "@/components/experience/experience"
import Stack from "@/components/tech-section/stack"
import About from "@/components/about-section/about"
import Contact from "@/components/contact-section/contact"
import Blog from "@/components/Blog-section/blog"
import WorkingWithClients from "@/components/services/working-with-clients"


export default function HomePage() {
  return (
    <>
      <MainNav />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <HeroSection />
      </motion.div>

      <div id="projects"><Projects /></div>
      <div id="stack"><Stack /></div>
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <WorkingWithClients />
      <div id="blog"><Blog /></div>
      <div id="contact"><Contact /></div>
    </>
  )
}
