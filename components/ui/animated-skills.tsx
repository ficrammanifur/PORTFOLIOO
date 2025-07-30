"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Skill {
  name: string
  icon: string
}

interface AnimatedSkillsProps {
  skills: {
    programming: Skill[]
    frameworks: Skill[]
    tools: Skill[]
  }
}

export default function AnimatedSkills({ skills }: AnimatedSkillsProps) {
  const [isPaused, setIsPaused] = useState(false)
  const firstRowRef = useRef<HTMLDivElement>(null)
  const secondRowRef = useRef<HTMLDivElement>(null)

  // Combine all skills and split into two rows
  const allSkills = [...skills.programming, ...skills.frameworks, ...skills.tools]
  const firstRow = allSkills.slice(0, Math.ceil(allSkills.length / 2))
  const secondRow = allSkills.slice(Math.ceil(allSkills.length / 2))

  // Adjust animation speed based on screen size and number of skills
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const baseSpeed = width < 768 ? 40 : 60 // Slower on mobile
      const skillCount = allSkills.length
      const adjustedSpeed = baseSpeed * (skillCount / 30) // Scale speed with number of skills
      document.documentElement.style.setProperty("--animation-speed", `${adjustedSpeed}s`)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [allSkills.length])

  return (
    <div className="space-y-8 overflow-hidden">
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left var(--animation-speed) linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right var(--animation-speed) linear infinite;
        }

        .animate-scroll-left.paused,
        .animate-scroll-right.paused {
          animation-play-state: paused;
        }

        .skills-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .skills-row {
          display: flex;
          flex-wrap: nowrap;
          width: max-content; /* Ensure the row is wide enough for all skills */
        }
      `}</style>

      {/* First row - moving left */}
      <motion.div
        className="skills-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={firstRowRef}
          className={`skills-row animate-scroll-left space-x-6 ${isPaused ? "paused" : ""}`}
        >
          {[...firstRow, ...firstRow].map((skill, index) => (
            <motion.div
              key={`first-${index}`}
              className="flex-shrink-0 w-48 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl"
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center space-x-3 p-4">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
                <span className="font-medium whitespace-nowrap text-white">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Second row - moving right */}
      <motion.div
        className="skills-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={secondRowRef}
          className={`skills-row animate-scroll-right space-x-6 ${isPaused ? "paused" : ""}`}
        >
          {[...secondRow, ...secondRow].map((skill, index) => (
            <motion.div
              key={`second-${index}`}
              className="flex-shrink-0 w-48 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl"
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center space-x-3 p-4">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
                <span className="font-medium whitespace-nowrap text-white">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}