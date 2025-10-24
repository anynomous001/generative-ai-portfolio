"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  color: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Skiper OSS 001",
    description: `Lorem ipsum dolor sit amet  architecto blanditiis dolorum voluptatem. Aliquam, error. Atque aspernatur laboriosam corporis? A, at obcaecati!Eveniet nesciunt voluptatibus officiis exercitationem pariatur optio dolorum modi, aut dolore vitae quia, quisquam repudiandae ullam blanditiis sed distinctio adipisci dolores, facere tempore similique. Beatae enim ipsum ad ea architecto.
   ate nam repelleaperiam ea. Ratione nostrum commodi similique veniam`,
    image: "/images/Prep-piper.jpg",
    color: "from-blue-600 to-cyan-400",
  },
  {
    id: 2,
    title: "NeonSync Pro",
    description: `Lorem ipsum dolor sit amet  architecto blanditiis dolorum voluptatem. Aliquam, error. Atque aspernatur laboriosam corporis? A, at obcaecati!Eveniet nesciunt voluptatibus officiis exercitationem pariatur optio dolorum modi, aut dolore vitae quia, quisquam repudiandae ullam blanditiis sed distinctio adipisci dolores, facere tempore similique. Beatae enim ipsum ad ea architecto.
   ate nam repelleaperiam ea. Ratione nostrum commodi similique veniam`,
    image: "/images/zapier.jpg",
    color: "from-purple-600 to-pink-400",
  },
  {
    id: 3,
    title: "PixelForge Studio",
    description: `Lorem ipsum dolor sit amet  architecto blanditiis dolorum voluptatem. Aliquam, error. Atque aspernatur laboriosam corporis? A, at obcaecati!Eveniet nesciunt voluptatibus officiis exercitationem pariatur optio dolorum modi, aut dolore vitae quia, quisquam repudiandae ullam blanditiis sed distinctio adipisci dolores, facere tempore similique. Beatae enim ipsum ad ea architecto.
   ate nam repelleaperiam ea. Ratione nostrum commodi similique veniam`,
    image: "/images/playtm.webp",
    color: "from-orange-600 to-red-400",
  },
  {
    id: 4,
    title: "TaskFlow Sonet",
    description: `Lorem ipsum dolor sit amet  architecto blanditiis dolorum voluptatem. Aliquam, error. Atque aspernatur laboriosam corporis? A, at obcaecati!Eveniet nesciunt voluptatibus officiis exercitationem pariatur optio dolorum modi, aut dolore vitae quia, quisquam repudiandae ullam blanditiis sed distinctio adipisci dolores, facere tempore similique. Beatae enim ipsum ad ea architecto.
   ate nam repelleaperiam ea. Ratione nostrum commodi similique veniam`,
    image: "/images/readium.webp",
    color: "from-green-600 to-emerald-400",
  },
  {
    id: 5,
    title: "CloudVibe Bruh",
    description: `Lorem ipsum dolor sit amet  architecto blanditiis dolorum voluptatem. Aliquam, error. Atque aspernatur laboriosam corporis? A, at obcaecati!Eveniet nesciunt voluptatibus officiis exercitationem pariatur optio dolorum modi, aut dolore vitae quia, quisquam repudiandae ullam blanditiis sed distinctio adipisci dolores, facere tempore similique. Beatae enim ipsum ad ea architecto.
   ate nam repelleaperiam ea. Ratione nostrum commodi similique veniam`,
    image: "/images/PictureWhisperAI.webp",
    color: "from-indigo-600 to-blue-400",
  },
]

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<number>(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const currentProject = projects[selectedProject]

  return (
    <div className="grid grid-cols-[30%_70%] h-screen  bg-background mt-4">


      {/* Left side - Project List */}
      <motion.div className="h-[80%] bg-background border-2 border-solid  border-amber-50 flex flex-col overflow-y-hidden" >
        <div className=" overflow-hidden flex flex-col">
          {/* Header */}
          <div className="px-8 pt-12 pb-8 border-b border-border">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">My Projects</p>
              <h2 className="text-3xl font-bold text-foreground">{currentProject.title}</h2>
            </motion.div>
          </div>

          {/* Project List */}
          <div className=" overflow-y-auto px-8 py-8">
            <div className="space-y-4">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(index)
                    setIsExpanded(false)
                  }}
                  className="w-full text-left group"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
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
                </motion.button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-border">
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

      {/* Right side - Project Image */}

      <motion.div className="col-span-[70%] flex" >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <div
              className={`w-full h-[50%] py-2 flex items-center justify-center relative border-black border-2 border-solid`}
            >
              <motion.img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-[90%] h-[90%] object-cover rounded-3xl shadow-2xl"
                drag
                dragElastic={0.2}
                whileHover={{ scale: 1.05 }}
                whileDrag={{ scale: 1.1 }}
              />
            </div>
            <div className="w-full px-12 pb-12  border-white border-2 border-solid">
              <h2 className="text-2xl font-bold text-foreground mb-2 border-b border-border pb-2">
                {currentProject.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {currentProject.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {["Clean UX", "Accessibility", "Motion Design", "Web Perf", "React/Next.js", "Tailwind CSS"].map((skill, i) => (
                  <motion.li
                    key={skill}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{
                      backdropFilter: "blur(6px)",
                    }}
                    className="rounded-full border border-white bg-white/5 px-4 py-1.5 text-xs text-muted-foreground hover:text-white cursor-default select-none"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
              <div className="flex gap-4 mt-4">
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Live Preview
                </button>
                <button className="bg-card text-foreground px-6 py-2 rounded-lg font-medium border border-border hover:bg-background hover:opacity-90 transition-opacity">
                  See Source Code
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
