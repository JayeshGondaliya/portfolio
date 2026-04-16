"use client"

import { motion, useReducedMotion } from "framer-motion"

interface WordRevealProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export default function WordRevealAnimation({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.06,
}: WordRevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const words = text.split(" ")

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            type: "spring",
            stiffness: 120,
            damping: 18,
            mass: 0.5,
          },
    },
  }

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className="inline-block mr-2"
          style={{
            willChange: "transform, opacity",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
