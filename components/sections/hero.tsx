"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import WordRevealAnimation from "../word-reveal-animation"

const easeSmooth = [0.4, 0, 0.2, 1]

export default function Hero({
  setActiveSection,
}: {
  setActiveSection: (section: string) => void
}) {
  const handleGetInTouch = () => {
    setActiveSection("connect")
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-24 right-10 w-[480px] h-[480px] bg-gradient-to-br from-gray-700/20 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-24 left-10 w-[480px] h-[480px] bg-gradient-to-br from-gray-800/20 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: easeSmooth }}
        >
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: easeSmooth }}
          >
            <div className="px-5 py-2 rounded-full border border-gray-700 bg-gray-900/40 backdrop-blur-sm">
              <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gray-400" />
                Full Stack & Python Web Developer
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: easeSmooth }}
          >
            <WordRevealAnimation
              text="Jayesh Gondaliya"
              delay={0.6}
              staggerDelay={0.12}
            />
          </motion.h1>

          {/* Role */}
          <motion.p
            className="text-lg sm:text-xl text-gray-400 font-medium mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: easeSmooth }}
          >
            <WordRevealAnimation
              text="Full Stack Developer • Python Web Developer • Backend Specialist"
              delay={1.2}
              staggerDelay={0.06}
            />
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.9, ease: easeSmooth }}
          >
            <WordRevealAnimation
              text="I build scalable, secure, and high-performance web applications using modern full-stack technologies and Python frameworks. Experienced in REST APIs, authentication, databases, and deploying real-world production systems."
              delay={1.8}
              staggerDelay={0.035}
            />
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8, ease: easeSmooth }}
          >
            <motion.button
              onClick={handleGetInTouch}
              className="px-9 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-500"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(120,120,120,0.4)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              Get In Touch
            </motion.button>

            <motion.button
              onClick={() => {
                setActiveSection("projects")
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-9 py-4 rounded-xl font-semibold text-white border border-gray-600 hover:bg-gray-900/30"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
