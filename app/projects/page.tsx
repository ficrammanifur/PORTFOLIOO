"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, X } from "lucide-react"
import Navbar from "@/components/ui/navbar"
import RocketScrollButton from "@/components/ui/rocket-scroll-button"
import AnimatedBackground from "@/components/ui/animated-background"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  github: string
  demo: string
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "PastryStock - Inventory Management",
    description:
      "Aplikasi manajemen stok untuk toko kue dengan fitur real-time tracking, notifikasi otomatis, dan analisis penjualan mendalam.",
    longDescription:
      "PastryStock adalah aplikasi mobile yang dirancang khusus untuk membantu pemilik toko kue dalam mengelola inventory mereka. Aplikasi ini dilengkapi dengan fitur real-time tracking yang memungkinkan pengguna untuk memantau stok produk secara langsung, sistem notifikasi otomatis ketika stok menipis, dan dashboard analisis penjualan yang memberikan insight mendalam tentang performa bisnis.",
    tech: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    github: "https://github.com/ficrammanifur/pastrystock",
    demo: "https://pastrystock-demo.vercel.app",
    category: "Mobile App",
  },
  {
    id: 2,
    title: "AI Robot Hand Controller",
    description:
      "Sistem kontrol robot tangan menggunakan computer vision dan machine learning untuk mendeteksi gesture tangan manusia.",
    longDescription:
      "Proyek robotika yang mengintegrasikan computer vision dan machine learning untuk menciptakan sistem kontrol robot tangan yang dapat mendeteksi dan meniru gesture tangan manusia. Sistem ini menggunakan kamera untuk menangkap gerakan tangan, memproses data menggunakan algoritma machine learning, dan mengirimkan perintah ke robot tangan untuk melakukan gerakan yang sesuai.",
    tech: ["Python", "OpenCV", "TensorFlow", "Arduino", "ESP32"],
    github: "https://github.com/ficrammanifur/Gesture-Clone-Robot",
    demo: "https://robot-hand-demo.vercel.app",
    category: "AI & Robotics",
  },
  {
    id: 3,
    title: "IoT Environmental Monitor",
    description:
      "Sistem monitoring lingkungan real-time dengan sensor IoT, dashboard web interaktif, dan alert system otomatis.",
    longDescription:
      "Sistem monitoring lingkungan berbasis IoT yang menggunakan berbagai sensor untuk memantau kondisi lingkungan seperti suhu, kelembaban, kualitas udara, dan tingkat kebisingan. Data yang dikumpulkan ditampilkan dalam dashboard web interaktif dengan visualisasi real-time dan sistem alert otomatis ketika parameter lingkungan melebihi batas normal.",
    tech: ["React", "Node.js", "MQTT", "InfluxDB", "Raspberry Pi"],
    github: "https://github.com/ficrammanifur/iot-monitor",
    demo: "https://ficrammanifur.github.io/Esp32-mqtt-project/",
    category: "IoT",
  },
  {
    id: 4,
    title: "Smart Home Automation",
    description:
      "Sistem otomasi rumah pintar dengan kontrol suara, scheduling otomatis, dan integrasi dengan berbagai perangkat IoT.",
    longDescription:
      "Platform otomasi rumah pintar yang memungkinkan pengguna untuk mengontrol berbagai perangkat elektronik di rumah melalui aplikasi mobile atau perintah suara. Sistem ini dilengkapi dengan fitur scheduling otomatis, monitoring konsumsi energi, dan kemampuan untuk berintegrasi dengan berbagai perangkat IoT seperti lampu pintar, AC, dan sistem keamanan.",
    tech: ["Vue.js", "Express.js", "Socket.io", "MongoDB", "Arduino"],
    github: "https://github.com/ficrammanifur/smart-home",
    demo: "https://smart-home-demo.vercel.app",
    category: "IoT",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description:
      "Platform e-commerce modern dengan fitur AI recommendation, real-time chat, dan payment gateway terintegrasi.",
    longDescription:
      "Platform e-commerce full-stack yang dilengkapi dengan fitur-fitur modern seperti sistem rekomendasi berbasis AI, real-time chat untuk customer service, payment gateway terintegrasi, dan dashboard admin yang komprehensif. Platform ini dibangun dengan arsitektur microservices untuk memastikan skalabilitas dan performa yang optimal.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/ficrammanifur/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    category: "Web App",
  },
  {
    id: 6,
    title: "Machine Learning Predictor",
    description:
      "Aplikasi prediksi menggunakan machine learning untuk analisis data bisnis dan forecasting dengan akurasi tinggi.",
    longDescription:
      "Aplikasi web yang menggunakan algoritma machine learning untuk melakukan prediksi dan analisis data bisnis. Aplikasi ini dapat melakukan forecasting penjualan, analisis trend pasar, dan prediksi customer behavior dengan tingkat akurasi yang tinggi. Dilengkapi dengan dashboard interaktif untuk visualisasi data dan hasil prediksi.",
    tech: ["Python", "Scikit-learn", "Pandas", "Flask", "Docker"],
    github: "https://github.com/ficrammanifur/ml-predictor",
    demo: "https://ml-predictor-demo.vercel.app",
    category: "AI & ML",
  },
]

const categories = ["All", "Mobile App", "Web App", "AI & Robotics", "AI & ML", "IoT"]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen text-white">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Rocket Scroll Button */}
      <RocketScrollButton />

      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Portfolio Projects
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Koleksi proyek-proyek terbaik yang telah saya kerjakan, mulai dari aplikasi mobile, web development,
              hingga AI dan IoT.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-white/10 border border-white/30 text-white hover:bg-white/20"
                } backdrop-blur-md`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl transition-all"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white relative overflow-hidden">
                    <Github className="w-12 h-12" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full">
                        {project.category}
                      </span>
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
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-white/70 text-sm mb-4 line-clamp-3">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full backdrop-blur-sm"
                        >
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
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Project Preview */}
              <div className="relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 h-64 flex items-center justify-center">
                <Github className="w-16 h-16 text-white" />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <p className="text-white/80 text-lg leading-relaxed">{selectedProject.longDescription}</p>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/30 text-white hover:bg-white/20 rounded-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
