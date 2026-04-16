"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface TextRevealProps {
  children: ReactNode
  delay?: number
  staggerChildren?: number
}

export default function TextReveal({
  children,
  delay = 0,
  staggerChildren = 0.04,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            type: "spring",
            stiffness: 90,
            damping: 20,
            mass: 0.6,
          },
    },
  }

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block" }}
    >
      {String(children)
        .split("")
        .map((char, index) => (
          <motion.span
            key={index}
            variants={textVariants}
            style={{
              display: "inline-block",
              whiteSpace: char === " " ? "pre" : "normal",
              willChange: "transform, opacity",
            }}
          >
            {char}
          </motion.span>
        ))}
    </motion.span>
  )
}
