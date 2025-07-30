"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function RocketScrollButton() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isLaunching, setIsLaunching] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    setIsLaunching(true)
    window.scrollTo({ top: 0, behavior: "smooth" })

    setTimeout(() => {
      setIsLaunching(false)
    }, 2000)
  }

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={isLaunching ? { y: -20, scale: 1.2 } : { y: 0, scale: 1 }}
            className="relative group"
          >
            {/* Rocket SVG */}
            <motion.svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-300 ${
                isLaunching ? "text-orange-400 drop-shadow-lg" : "text-white/70 hover:text-white"
              }`}
              animate={isLaunching ? { rotate: [0, -5, 5, 0] } : {}}
              transition={{ repeat: isLaunching ? Number.POSITIVE_INFINITY : 0, duration: 0.2 }}
            >
              {/* Rocket Body */}
              <path d="M12 2L15 8H9L12 2Z" fill="currentColor" className="opacity-90" />
              <path d="M9 8H15V16H9V8Z" fill="currentColor" className="opacity-80" />

              {/* Rocket Fins */}
              <path d="M7 12L9 16V12H7Z" fill="currentColor" className="opacity-70" />
              <path d="M17 12L15 16V12H17Z" fill="currentColor" className="opacity-70" />

              {/* Rocket Window */}
              <circle cx="12" cy="11" r="1.5" fill="rgba(255,255,255,0.3)" />
            </motion.svg>

            {/* Fire Effect */}
            <AnimatePresence>
              {isLaunching && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2"
                >
                  {/* Fire particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        y: [0, 20, 40],
                        scale: [0, 1, 0],
                        x: [0, Math.random() * 10 - 5],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.1,
                        ease: "easeOut",
                      }}
                      className={`absolute w-2 h-2 rounded-full ${
                        i % 3 === 0 ? "bg-red-500" : i % 3 === 1 ? "bg-orange-500" : "bg-yellow-500"
                      }`}
                      style={{ left: `${i * 2}px` }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={
                isLaunching
                  ? {
                      boxShadow: [
                        "0 0 0 0 rgba(251, 146, 60, 0)",
                        "0 0 0 10px rgba(251, 146, 60, 0.1)",
                        "0 0 0 20px rgba(251, 146, 60, 0)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1, repeat: isLaunching ? Number.POSITIVE_INFINITY : 0 }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
