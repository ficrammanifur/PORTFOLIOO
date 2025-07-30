"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Play } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  video: string
  demoVideo: string
  tech: string[]
  github: string
  demo: string
  category: string
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        z: 50,
      }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="group cursor-pointer transform-gpu perspective-1000"
    >
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
        {/* Project Image/Video */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
          {isHovered && project.video ? (
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                // Fallback to placeholder if video fails
                e.currentTarget.style.display = "none"
              }}
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-white">
                <Github className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm opacity-75">Hover to preview</p>
              </div>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              {project.category}
            </Badge>
          </div>

          {/* Quick Actions */}
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
            >
              <Play className="w-8 h-8 ml-1" />
            </motion.div>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-white/70 text-sm mb-4 line-clamp-3">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full backdrop-blur-sm">
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full backdrop-blur-sm">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
