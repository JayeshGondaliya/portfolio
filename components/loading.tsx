"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Loading() {
  const name = "JAYESH GONDALIYA"
  const letters = name.split("")
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const centerIndex = letters.length / 2
    const maxDistance = Math.max(centerIndex, letters.length - centerIndex)
    const totalDuration = 0.3 + maxDistance * 0.06 + 1.2 + 0.5

    const timeout = setTimeout(() => setFinished(true), totalDuration * 1000)
    return () => clearTimeout(timeout)
  }, [letters])

  const textClass =
    "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-white"

  const fontStyle = {
    fontFamily: `"Calibri", "Segoe UI", "Helvetica Neue", Arial, sans-serif`,
  }

  if (finished) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <span className={textClass} style={fontStyle}>
          {name}
        </span>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="flex">
        {letters.map((letter, index) => {
          const centerIndex = letters.length / 2
          const distance = Math.abs(index - centerIndex)

          return (
            <motion.span
              key={index}
              className={textClass}
              style={fontStyle}
              initial={{ opacity: 0, filter: "blur(16px)" }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.2 + distance * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          )
        })}
      </div>
    </div>
  )
}
