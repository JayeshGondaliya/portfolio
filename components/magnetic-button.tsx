"use client"

import type React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { type ReactNode, useRef, useState } from "react"

interface MagneticButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  hoverScale?: number
  hoverShadow?: string
}

export const MagneticButton = ({
  children,
  onClick,
  className = "",
  hoverScale = 1.05,
  hoverShadow = "0 10px 30px rgba(0,0,0,0.2)",
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [isHover, setIsHover] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const distanceX = (clientX - centerX) * 0.2
    const distanceY = (clientY - centerY) * 0.2

    setX(distanceX)
    setY(distanceY)
  }

  const handleMouseLeave = () => {
    setX(0)
    setY(0)
    setIsHover(false)
  }

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      animate={{
        x,
        y,
        scale: shouldReduceMotion ? 1 : isHover ? hoverScale : 1,
        boxShadow: shouldReduceMotion ? "none" : isHover ? hoverShadow : "none",
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 1,
      }}
      className={className}
      style={{
        cursor: "pointer",
        willChange: "transform, box-shadow",
      }}
    >
      {children}
    </motion.div>
  )
}
