"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 10, transition: { type: "spring", stiffness: 300 } },
    tap: { scale: 0.9, rotate: 0 },
  }

  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright text */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm select-none">
              © {currentYear} Jayesh Gondaliya. All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/JayeshGondaliya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 border-2 border-gray-700/50 rounded-lg text-white shadow-md flex items-center justify-center"
              whileHover="hover"
              whileTap="tap"
              variants={socialIconVariants}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jayesh-gondaliya-"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 border-2 border-gray-700/50 rounded-lg text-white shadow-md flex items-center justify-center"
              whileHover="hover"
              whileTap="tap"
              variants={socialIconVariants}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:jayeshgondaliya9929@gmail.com"
              className="p-3 bg-gray-900/50 border-2 border-gray-700/50 rounded-lg text-white shadow-md flex items-center justify-center"
              whileHover="hover"
              whileTap="tap"
              variants={socialIconVariants}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
