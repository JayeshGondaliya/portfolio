"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  variant?: "slideIn" | "fadeIn" | "scaleIn"
}

export const ScrollReveal = ({
  children,
  delay = 0,
  variant = "slideIn",
}: ScrollRevealProps) => {
  const shouldReduceMotion = useReducedMotion()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })

  const variants = {
    slideIn: {
      hidden: {
        opacity: 0,
        y: 30,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scaleIn: {
      hidden: {
        opacity: 0,
        scale: 0.96,
      },
      visible: {
        opacity: 1,
        scale: 1,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              type: "spring",
              stiffness: 70,
              damping: 18,
              mass: 0.8,
              delay,
            }
      }
      style={{
        willChange: "transform, opacity",
        transform: "translateZ(0)",
      }}
    >
      {children}
    </motion.div>
  )
}
