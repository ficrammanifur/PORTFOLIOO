"use client"

import { motion } from "framer-motion"
import { User, Target, Code, Lightbulb, Heart, Coffee } from "lucide-react"
import Navbar from "@/components/ui/navbar"
import RocketScrollButton from "@/components/ui/rocket-scroll-button"
import AnimatedBackground from "@/components/ui/animated-background"

export default function AboutPage() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "Flask", "Express.js", "PostgreSQL"] },
    { category: "Mobile", items: ["Flutter", "React Native", "Dart", "Firebase"] },
    { category: "AI/ML", items: ["TensorFlow", "OpenCV", "Scikit-learn", "Pandas"] },
    { category: "IoT", items: ["Arduino", "ESP32", "Raspberry Pi", "MQTT"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
  ]

  const experiences = [
    {
      year: "2024",
      title: "Freelance Fullstack Developer",
      description: "Mengembangkan berbagai aplikasi web dan mobile untuk klien lokal dan internasional.",
    },
    {
      year: "2023",
      title: "IoT Developer Intern",
      description: "Membangun sistem monitoring lingkungan menggunakan sensor IoT dan dashboard real-time.",
    },
    {
      year: "2022",
      title: "AI Research Assistant",
      description: "Penelitian computer vision untuk sistem deteksi gesture pada robot manipulator.",
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
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Tentang Saya
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Saya adalah seorang Fullstack Developer dan AI Enthusiast yang passionate dalam menciptakan solusi
                teknologi inovatif. Dengan latar belakang Teknik Elektro, saya menggabungkan pengetahuan hardware dan
                software untuk membangun aplikasi yang meaningful.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8"
            >
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-blue-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">My Journey</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Perjalanan saya dimulai dari rasa ingin tahu yang besar tentang bagaimana teknologi dapat memecahkan
                  masalah nyata. Sebagai mahasiswa Teknik Elektro, saya belajar memahami sistem dari level hardware
                  hingga software.
                </p>
                <p>
                  Passion saya terhadap AI dan IoT membawa saya untuk mengeksplorasi berbagai proyek, mulai dari robot
                  gesture control hingga sistem monitoring lingkungan. Setiap proyek mengajarkan saya sesuatu yang baru
                  dan memperkuat keyakinan bahwa teknologi harus bermanfaat bagi manusia.
                </p>
                <p>
                  Motto hidup saya: <em>"It's not hard, it's just new."</em> Kalimat ini selalu mengingatkan saya bahwa
                  setiap tantangan adalah kesempatan untuk belajar dan berkembang.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: Target, title: "Vision", desc: "Menciptakan teknologi yang berdampak positif" },
                { icon: Lightbulb, title: "Innovation", desc: "Selalu mencari solusi kreatif dan efisien" },
                { icon: Heart, title: "Passion", desc: "Cinta terhadap teknologi dan pembelajaran" },
                { icon: Coffee, title: "Dedication", desc: "Komitmen tinggi dalam setiap proyek" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6"
                >
                  <div className="flex items-center mb-3">
                    <item.icon className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/70">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 inline-block">
              <div className="flex items-center justify-center mb-4">
                <Code className="w-8 h-8 text-purple-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
              </div>
              <p className="text-white/70">Teknologi dan tools yang saya kuasai</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white/10 rounded-lg px-3 py-2 text-white/80 text-center hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 inline-block">
              <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
              <p className="text-white/70">Perjalanan profesional saya</p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 max-w-md ${index % 2 === 0 ? "mr-8" : "ml-8"}`}
                >
                  <div className="flex items-center mb-3">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {exp.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-white/70">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
