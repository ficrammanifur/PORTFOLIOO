"use client"

import { motion } from "framer-motion"
import { Target, Brain, Cpu, Smartphone, Globe, Zap } from "lucide-react"
import Navbar from "@/components/ui/navbar"
import RocketScrollButton from "@/components/ui/rocket-scroll-button"
import AnimatedBackground from "@/components/ui/animated-background"

export default function FocusPage() {
  const focusAreas = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Machine Learning, Computer Vision, dan Natural Language Processing untuk solusi cerdas",
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "Internet of Things",
      description: "Sistem IoT terintegrasi dengan sensor, actuator, dan cloud computing",
      technologies: ["Arduino", "ESP32", "Raspberry Pi", "MQTT"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Aplikasi mobile cross-platform dengan performa tinggi dan UX yang optimal",
      technologies: ["Flutter", "React Native", "Dart", "Firebase"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Aplikasi web modern dengan arsitektur scalable dan responsive design",
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Automation & Robotics",
      description: "Sistem otomasi dan robotika untuk meningkatkan efisiensi dan produktivitas",
      technologies: ["Python", "ROS", "Arduino", "Computer Vision"],
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const currentProjects = [
    {
      title: "Smart Agriculture System",
      description: "Sistem pertanian pintar dengan monitoring otomatis dan AI prediction",
      progress: 75,
      status: "In Progress",
    },
    {
      title: "Voice-Controlled Home Assistant",
      description: "Asisten rumah dengan kontrol suara dan integrasi IoT devices",
      progress: 60,
      status: "Development",
    },
    {
      title: "Real-time Object Detection",
      description: "Sistem deteksi objek real-time untuk aplikasi keamanan",
      progress: 90,
      status: "Testing",
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

      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12"
          >
            <div className="flex items-center justify-center mb-6">
              <Target className="w-12 h-12 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Current Focus
              </h1>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Area teknologi yang sedang saya dalami dan kembangkan untuk menciptakan solusi inovatif di masa depan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <area.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{area.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white/90 mb-3">Key Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
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
              <h2 className="text-3xl font-bold text-white mb-4">Current Projects</h2>
              <p className="text-white/70">Proyek yang sedang dalam pengembangan</p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/70">{project.description}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === "In Progress"
                        ? "bg-blue-600/30 text-blue-300"
                        : project.status === "Development"
                          ? "bg-orange-600/30 text-orange-300"
                          : "bg-green-600/30 text-green-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80 text-sm">Progress</span>
                    <span className="text-white font-semibold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Goals */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/20 rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Learning Goals 2024</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Advanced Machine Learning & Deep Learning</li>
                  <li>• Cloud Computing (AWS, GCP)</li>
                  <li>• Microservices Architecture</li>
                  <li>• Advanced IoT Protocols</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Soft Skills</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Project Management</li>
                  <li>• Technical Leadership</li>
                  <li>• Cross-functional Collaboration</li>
                  <li>• Public Speaking & Presentation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
