"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react"
import Navbar from "@/components/ui/navbar"
import RocketScrollButton from "@/components/ui/rocket-scroll-button"
import AnimatedBackground from "@/components/ui/animated-background"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Pesan berhasil dikirim! Terima kasih.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ficram@gmail.com",
      href: "mailto:ficram@example.com",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+62 823-1136-3925",
      href: "https://wa.me/6282311363925",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Indonesia",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/ficrammanifur",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/ficram-manifur-farissa",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com/ficrammanifur",
      color: "hover:text-pink-400",
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
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Mari berkolaborasi! Saya selalu terbuka untuk diskusi proyek baru, peluang kerja sama, atau sekadar
              berbagi ide tentang teknologi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:border-blue-400 rounded-lg focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:border-blue-400 rounded-lg focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:border-blue-400 rounded-lg focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:border-blue-400 rounded-lg focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Info</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{info.title}</h3>
                        <p className="text-white/70">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="backdrop-blur-md bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/20 rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-3">Quick Response</h3>
                <p className="text-white/80 mb-4">
                  Saya biasanya merespons email dalam 24 jam. Untuk diskusi yang lebih cepat, silakan hubungi melalui
                  WhatsApp.
                </p>
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Usually responds within hours</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
