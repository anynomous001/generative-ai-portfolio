'use client'

import { motion } from "framer-motion"
import { Component as HeroSection } from "@/components/ui/hero-section"
import Projects from "@/components/projects/projects"
import Experience from "@/components/experience/experience"
import Stack from "@/components/tech-section/stack"
import About from "@/components/about-section/about"
import Contact from "@/components/contact-section/contact"
import Blog from "@/components/Blog-section/blog"


export default function HomePage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <HeroSection />
      </motion.div>
      <Projects />

      {/* Tech Stack Section */}
      <Stack />

      {/* about section */}
      <About />


      {/* Skill Pills with Animated Hover */}


      {/* Experience Section */}
      <Experience />



      {/* Blog Section */}
      <Blog />
      <Contact />
    </>
  )
}
