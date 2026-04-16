"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  delay: number
  duration: number
  size: number
  startX: number
  endX: number
}

export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 2,
      duration: 5 + Math.random() * 5,
      size: Math.random() * 3 + 1, // random size 1-4px
      startX: Math.random() * 100,
      endX: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0,
            y: 100,
            x: particle.startX,
          }}
          animate={{
            opacity: [0, 0.3, 0.3, 0],
            y: -100,
            x: [particle.startX, particle.endX, particle.startX],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full blur-sm"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            bottom: "-10px",
          }}
        />
      ))}
    </div>
  )
}
