"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronDown } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  color: string
  glassColor: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Skiper OSS 001",
    description: `Lorem ipsum dolor sit amet architecto blanditiis dolorum voluptatem. Aliquam, error. Atque aspernatur laboriosam corporis? A, at obcaecati!Eveniet nesciunt voluptatibus officiis exercitationem pariatur optio dolorum modi, aut dolore vitae quia, quisquam repudiandae ullam blanditiis sed distinctio adipisci dolores, facere tempore similique. Beatae enim ipsum ad ea architecto.
   ate nam repelleaperiam ea. Ratione nostrum commodi similique veniam`,
    image: "/images/Prep-piper.jpg",
    color: "from-blue-600 to-cyan-400",
    glassColor: "rgba(59, 130, 246, 0.08)", // blue glass
  },
  {
    id: 2,
    title: "NeonSync Pro",
    description: `Lorem ipsum dolor sit amet architecto blanditiis dolorum voluptatem. Aliquam, error. Atque aspernatur laboriosam corporis? A, at obcaecati!Eveniet nesciunt voluptatibus officiis exercitationem pariatur optio dolorum modi, aut dolore vitae quia, quisquam repudiandae ullam blanditiis sed distinctio adipisci dolores, facere tempore similique. Beatae enim ipsum ad ea architecto.
   ate nam repelleaperiam ea. Ratione nostrum commodi similique veniam`,
    image: "/images/zapier.jpg",
    color: "from-purple-600 to-pink-400",
    glassColor: "rgba(168, 85, 247, 0.08)", // purple glass
  },
  {
    id: 3,
    title: "PixelForge Studio",
    description: `Lorem ipsum dolor sit amet architecto blanditiis dolorum voluptatem. Aliquam, error. Atque aspernatur laboriosam corporis? A, at obcaecati!Eveniet nesciunt voluptatibus officiis exercitationem pariatur optio dolorum modi, aut dolore vitae quia, quisquam repudiandae ullam blanditiis sed distinctio adipisci dolores, facere tempore similique. Beatae enim ipsum ad ea architecto.
   ate nam repelleaperiam ea. Ratione nostrum commodi similique veniam`,
    image: "/images/playtm.webp",
    color: "from-orange-600 to-red-400",
    glassColor: "rgba(249, 115, 22, 0.08)", // orange glass
  },
  {
    id: 4,
    title: "TaskFlow Sonet",
    description: `Lorem ipsum dolor sit amet architecto blanditiis dolorum voluptatem. Aliquam, error. Atque aspernatur laboriosam corporis? A, at obcaecati!Eveniet nesciunt voluptatibus officiis exercitationem pariatur optio dolorum modi, aut dolore vitae quia, quisquam repudiandae ullam blanditiis sed distinctio adipisci dolores, facere tempore similique. Beatae enim ipsum ad ea architecto.
   ate nam repelleaperiam ea. Ratione nostrum commodi similique veniam`,
    image: "/images/readium.webp",
    color: "from-green-600 to-emerald-400",
    glassColor: "rgba(34, 197, 94, 0.08)", // green glass
  },
  {
    id: 5,
    title: "CloudVibe Bruh",
    description: `Lorem ipsum dolor sit amet architecto blanditiis dolorum voluptatem. Aliquam, error. Atque aspernatur laboriosam corporis? A, at obcaecati!Eveniet nesciunt voluptatibus officiis exercitationem pariatur optio dolorum modi, aut dolore vitae quia, quisquam repudiandae ullam blanditiis sed distinctio adipisci dolores, facere tempore similique. Beatae enim ipsum ad ea architecto.
   ate nam repelleaperiam ea. Ratione nostrum commodi similique veniam`,
    image: "/images/PictureWhisperAI.webp",
    color: "from-indigo-600 to-blue-400",
    glassColor: "rgba(99, 102, 241, 0.08)", // indigo glass
  },
]

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<number>(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const currentProject = projects[selectedProject]

  return (
    <div className="grid grid-cols-1 md:grid-cols-[30%_70%] bg-background mt-4 min-h-[60vh] md:min-h-[80vh] gap-6">
      {/* Left side - Project List */}
      <motion.div className="bg-background flex flex-col md:overflow-y-auto md:h-full">
        <div className="overflow-hidden flex flex-col border-2 border-solid border-r-white/10 border-r">
          {/* Header */}
          <div className="px-4 sm:px-6 md:px-8 pt-8 md:pt-12 pb-6 md:pb-8 border-b border-border">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">My Projects</p>
              <h2 className="text-3xl font-bold text-foreground">{currentProject.title}</h2>
            </motion.div>
          </div>

          {/* Project List in desktop*/}
          <div className="hidden lg:flex flex-col flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6 md:py-8 space-y-4">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => {
                  setSelectedProject(index)
                  setIsExpanded(false)
                }}
                className="w-full text-left group relative overflow-hidden rounded-lg"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Glassy background for each project name */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    backgroundColor: project.glassColor,
                    backdropFilter: "blur(10px)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: selectedProject === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative px-4 py-3">
                  <motion.div
                    className={`text-lg font-medium transition-colors duration-300 ${selectedProject === index
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    animate={{
                      color: selectedProject === index ? "rgb(var(--foreground))" : "rgb(var(--muted-foreground))",
                    }}
                  >
                    {project.title}
                  </motion.div>
                  {selectedProject === index && (
                    <motion.div
                      layoutId="underline"
                      className="h-0.5 bg-foreground mt-2"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Project List on mobile*/}
          <div className="px-4 sm:px-6 py-4 sm:py-6 flex-1 flex flex-col lg:hidden">
            <div className="z-50">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-card border border-border rounded-lg font-medium text-foreground hover:bg-background transition-colors relative overflow-hidden"
                style={{
                  backgroundColor: currentProject.glassColor,
                  backdropFilter: "blur(10px)",
                }}
              >
                <span className="text-sm sm:text-base truncate relative z-10">{currentProject.title}</span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 bg-card border border-border rounded-lg shadow-lg z-50"
                  >
                    <div className="overflow-hidden">
                      {projects.map((project, index) => (
                        <motion.button
                          key={project.id}
                          onClick={() => {
                            setSelectedProject(index)
                            setIsDropdownOpen(false)
                            setIsExpanded(false)
                          }}
                          className="w-full text-left px-4 py-3 text-sm sm:text-base transition-colors relative overflow-hidden"
                          style={{
                            backgroundColor: selectedProject === index ? project.glassColor : "transparent",
                            backdropFilter: selectedProject === index ? "blur(10px)" : "none",
                          }}
                          whileHover={{ x: 8 }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                          <span className={selectedProject === index ? "text-foreground font-medium" : "text-foreground"}>
                            {project.title}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-6 md:px-8 py-6 border-t border-border">
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Details</span>
              <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronRight size={20} />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Expanded Details Panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-border bg-card"
            >
              <div className="px-8 py-6">
                <p className="text-sm text-muted-foreground leading-relaxed">{currentProject.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Right side - Project Card */}
      <motion.div className="flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            {/* Unified Card Container with Glassy Background */}
            <motion.div
              className="relative h-full rounded-3xl overflow-hidden border border-white/10"
              style={{
                backgroundColor: currentProject.glassColor,
                backdropFilter: "blur(20px)",
              }}
              initial={{ backgroundColor: currentProject.glassColor }}
              animate={{ backgroundColor: currentProject.glassColor }}
              transition={{ duration: 0.5 }}
            >
              {/* Gradient Overlay for extra depth */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `linear-gradient(135deg, ${currentProject.glassColor} 0%, transparent 100%)`,
                }}
              />

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full p-6 sm:p-8">
                {/* Project Image Section */}
                <div className="w-full flex items-center justify-center mb-6">
                  <motion.img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full max-w-[900px] h-48 sm:h-64 md:h-[40vh] object-cover rounded-2xl shadow-2xl ring-1 ring-white/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Project Details Section */}
                <div className="flex-1 flex flex-col">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 border-b border-white/20 pb-3">
                    {currentProject.title}
                  </h2>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    {currentProject.description}
                  </p>

                  {/* Skills Tags */}
                  <ul className="flex flex-wrap gap-3 mb-6">
                    {["Clean UX", "Accessibility", "Motion Design", "Web Perf", "React/Next.js", "Tailwind CSS"].map(
                      (skill) => (
                        <motion.li
                          key={skill}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs text-foreground hover:text-white cursor-default select-none"
                        >
                          {skill}
                        </motion.li>
                      )
                    )}
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto bg-primary text-sm md:text-base text-primary-foreground px-6 md:px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
                    >
                      Live Preview
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-sm md:text-base text-foreground px-6 md:px-8 py-3 rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-all shadow-lg"
                    >
                      See Source Code
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
