"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: string
  left: number
  size: number
  delay: number
  duration: number
  opacity: number
}

export default function ParticleEffect() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const particleCount = 30 // more particles for richness
    const newParticles: Particle[] = Array.from({ length: particleCount }).map((_, i) => ({
      id: `particle-${i}`,
      left: Math.random() * 100, // random horizontal start
      size: 1 + Math.random() * 2, // random size for depth
      delay: Math.random() * 3, // random delay
      duration: 5 + Math.random() * 5, // random float duration
      opacity: 0.3 + Math.random() * 0.5, // random transparency
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            bottom: "-10px",
            opacity: particle.opacity,
            animation: `particleFloat ${particle.duration}s ease-out forwards`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes particleFloat {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-110vh) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
