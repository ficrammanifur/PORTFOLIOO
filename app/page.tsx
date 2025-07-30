"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  User,
  Code,
  Wrench,
  MessageSquare,
  Send,
  Heart,
} from "lucide-react"
import Navbar from "@/components/ui/navbar"
import RocketScrollButton from "@/components/ui/rocket-scroll-button"
import AnimatedBackground from "@/components/ui/animated-background"
import AnimatedSkills from "@/components/ui/animated-skills"

interface Testimonial {
  fullName: string
  email: string
  position: string
  message: string // Diubah dari 'testimonialMessage' ke 'message'
  timestamp: string
}

export default function HomePage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "",
    message: "", // Diubah dari 'testimonialMessage' ke 'message'
  })

  // Load testimonials from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("testimonials")
    if (saved) {
      setTestimonials(JSON.parse(saved))
    }
  }, [])

  // Handle testimonial form submission
  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName || !formData.email || !formData.position || !formData.message) {
      alert("Harap isi semua kolom sebelum mengirim.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert("Harap masukkan alamat email yang valid.")
      return
    }

    const newTestimonial: Testimonial = {
      ...formData,
      timestamp: new Date().toISOString(),
    }

    const updatedTestimonials = [newTestimonial, ...testimonials]
    setTestimonials(updatedTestimonials)
    localStorage.setItem("testimonials", JSON.stringify(updatedTestimonials))

    setFormData({
      fullName: "",
      email: "",
      position: "",
      message: "", // Diubah dari 'testimonialMessage' ke 'message'
    })

    alert("Terima kasih atas pesan Anda!")
  }

  const skills = {
    programming: [
      { name: "Python", icon: "/icons/python.png" },
      { name: "JavaScript", icon: "/icons/javascript.png" },
      { name: "TypeScript", icon: "/icons/typescript.png" },
      { name: "Dart", icon: "/icons/dart.png" },
      { name: "HTML", icon: "/icons/html.png" },
      { name: "CSS", icon: "/icons/css.png" },
      { name: "C#", icon: "/icons/c-sharp.png" },
      { name: "C++", icon: "/icons/c++.png" },
      { name: "C", icon: "/icons/c.png" },
      { name: "MATLAB", icon: "/icons/matlab.png" },
    ],
    frameworks: [
      { name: "React", icon: "/icons/react.png" },
      { name: "Next.js", icon: "/icons/nextjs.png" },
      { name: "Flutter", icon: "/icons/flutter.png" },
      { name: "Flask", icon: "/icons/flask.png" },
      { name: "TensorFlow", icon: "/icons/tensorflow.png" },
      { name: "OpenCV", icon: "/icons/opencv.png" },
      { name: "PyTorch", icon: "/icons/pytorch.png" },
      { name: "Unity", icon: "/icons/unity.png" },
    ],
    tools: [
      { name: "Git", icon: "/icons/git.png" },
      { name: "Docker", icon: "/icons/docker.png" },
      { name: "Firebase", icon: "/icons/firebase.png" },
      { name: "Arduino", icon: "/icons/arduino.png" },
      { name: "ESP32", icon: "/icons/esp32.png" },
      { name: "MySQL", icon: "/icons/mysql.png" },
      { name: "Bash", icon: "/icons/linux-terminal.png" },
      { name: "UBUNTU", icon: "/icons/ubuntu.png" }, 
    ],
  };


  const projects = [
    {
      title: "PastryStock",
      description:
        "Aplikasi manajemen stok untuk toko kue dengan fitur tracking inventory, notifikasi stok menipis, dan laporan penjualan.",
      icon: <Github className="w-6 h-6" />,
      tech: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/ficrammanifur",
      demo: "#",
    },
    {
      title: "Robot Tangan",
      description:
        "Proyek robotika yang mengembangkan robot tangan dengan kontrol gesture menggunakan sensor dan machine learning.",
      icon: <Code className="w-6 h-6" />,
      tech: ["ESP32", "Python", "OpenCV"],
      github: "https://github.com/ficrammanifur/Gesture-Clone-Robot",
      demo: "#",
    },
    {
      title: "IoT Monitoring System",
      description:
        "Sistem monitoring lingkungan berbasis IoT dengan sensor suhu, kelembaban, dan kualitas udara dengan dashboard real-time.",
      icon: <Wrench className="w-6 h-6" />,
      tech: ["Raspberry Pi", "Flask", "JavaScript"],
      github: "https://github.com/ficrammanifur",
      demo: "https://ficrammanifur.github.io/Esp32-mqtt-project/",
    },
  ]

  return (
    <div className="min-h-screen text-white">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Rocket Scroll Button */}
      <RocketScrollButton />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center space-y-8"
          >
            {/* Glassmorphism Card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
              >
                Ficram Manifur Farissa
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
              >
                Fullstack Developer & AI Enthusiast
                <br />
                <span className="text-lg text-white/60">
                  Menciptakan solusi teknologi yang inovatif dan user-friendly
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Lihat Proyek
                </Link>

                <button className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/30 text-white hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </button>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex justify-center space-x-6"
            >
              {[
                { icon: Github, href: "https://github.com/ficrammanifur", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/ficram-manifur-farissa", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ficram@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: "15+", label: "Proyek Selesai", color: "from-blue-400 to-cyan-400" },
              { number: "3+", label: "Tahun Pengalaman", color: "from-purple-400 to-pink-400" },
              { number: "10+", label: "Teknologi Dikuasai", color: "from-green-400 to-emerald-400" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center"
              >
                <div
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-4">
              <User className="w-8 h-8 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tentang Saya
              </span>
            </h2>
            <p className="text-xl text-white/70">Mengenal lebih dekat tentang perjalanan dan passion saya</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/80 text-justify">
                Saya adalah mahasiswa Teknik Elektro yang memiliki ketertarikan mendalam pada teknologi modern,
                khususnya dalam bidang Artificial Intelligence dan Internet of Things. Perjalanan saya dimulai dari rasa
                ingin tahu yang besar tentang bagaimana teknologi dapat memecahkan masalah nyata dalam kehidupan
                sehari-hari.
              </p>
              <p className="text-lg text-white/80 text-justify">
                Dengan pengalaman dalam pengembangan aplikasi menggunakan Flutter dan backend Flask, saya selalu
                berusaha untuk menciptakan solusi yang tidak hanya fungsional, tetapi juga user-friendly dan efisien.
              </p>

              <div className="grid grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-400">15+</h3>
                  <p className="text-white/70">Proyek Selesai</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-400">3+</h3>
                  <p className="text-white/70">Tahun Belajar</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-400">10+</h3>
                  <p className="text-white/70">Teknologi Dikuasai</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0 rounded-xl">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <User className="w-16 h-16 mb-4" />
                  <p className="text-xl font-semibold">Teknik Elektro</p>
                  <p className="text-sm opacity-75 mt-2">Universitas Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
     <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16">
         <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-4">
           <Wrench className="w-8 h-8 text-blue-400" />
           <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
             Keahlian
           </span>
         </h2>
         <p className="text-xl text-white/70">Language dan tools yang saya kuasai</p>
      </div>

      <AnimatedSkills skills={skills} />
    </div>
  </section>

      {/* Projects Preview */}
      <section className="py-20 bg-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-4">
              <Code className="w-8 h-8 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-white/70">Beberapa proyek terbaik yang telah saya kerjakan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                  {project.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-white/70 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/20 text-white border-0 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 bg-white/10 border border-white/30 text-white hover:bg-white/20 rounded-lg text-sm transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 bg-white/10 border border-white/30 text-white hover:bg-white/20 rounded-lg text-sm transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Lihat Semua Proyek
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-4">
              <MessageSquare className="w-8 h-8 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                What People Say
              </span>
            </h2>
            <p className="text-xl text-white/70">
              Voices from clients, collaborators, and friends who have experienced my work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Testimonial Form */}
            <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-white">Send Me A Message</h3>
              <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 rounded-lg focus:outline-none focus:border-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 rounded-lg focus:outline-none focus:border-blue-400"
                />
                <input
                  type="text"
                  placeholder="Position/Title"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 rounded-lg focus:outline-none focus:border-blue-400"
                />
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message} // Diubah dari 'testimonialMessage' ke 'message'
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} // Diubah dari 'testimonialMessage' ke 'message'
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 rounded-lg focus:outline-none focus:border-blue-400 resize-none"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit
                </button>
              </form>
            </div>

            {/* Testimonials Display */}
            <div className="max-h-96 overflow-y-auto space-y-4">
              {testimonials.length === 0 ? (
                <div className="text-center py-12">
                  <MessageSquare className="w-8 h-8 mb-4 mx-auto text-white/50" />
                  <p className="text-white/50">Belum ada pesan. Jadilah yang pertama berbagi pengalaman!</p>
                </div>
              ) : (
                testimonials.map((testimonial, index) => {
                  const initials = testimonial.fullName
                    .split(" ")
                    .map((name) => name[0])
                    .join("")
                    .toUpperCase()

                  return (
                    <div
                      key={index}
                      className="bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all rounded-xl p-4"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {initials}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-white">{testimonial.fullName}</h4>
                            <span className="text-sm text-white/50">•</span>
                            <p className="text-sm text-white/50">{testimonial.position}</p>
                          </div>
                          <p className="text-white/70 italic">"{testimonial.message}"</p> {/* Diubah dari 'testimonialMessage' ke 'message' */}
                        </div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <p>© 2024 Ficram Manifur Farissa. Dibuat dengan</p>
              <Heart className="w-4 h-4 text-red-500" />
              <p>dan teknologi modern.</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ficrammanifur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ficram-manifur-farissa-418280376/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ficram@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}