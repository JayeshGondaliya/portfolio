"use client"

import { useState, useEffect, useCallback, useRef, useMemo } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"

const Navbar = ({
  activeSection,
  setActiveSection,
}: { activeSection: string; setActiveSection: (section: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const lastScrollY = useRef(0)
  const navRef = useRef<HTMLElement>(null)

  // Optimized scroll handler with throttling
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (Math.abs(currentY - lastScrollY.current) > 5) {
        setScrolled(currentY > 50)
        lastScrollY.current = currentY
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on window resize (when switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Memoized nav items
  const navItems = useMemo(
    () => ["Home", "About", "Skills", "Projects", "Resume", "Certificate", "Connect"],
    []
  )

  const handleNavClick = useCallback((item: string) => {
    setActiveSection(item.toLowerCase())
    setIsOpen(false)
    const element = document.getElementById(item.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [setActiveSection])

  const navVariants = useMemo(() => ({
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: shouldReduceMotion ? 300 : 100,
        damping: shouldReduceMotion ? 30 : 15,
        mass: shouldReduceMotion ? 2 : 1
      }
    }
  }), [shouldReduceMotion])

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: shouldReduceMotion ? 300 : 100, damping: shouldReduceMotion ? 30 : 15 }
    })
  }), [shouldReduceMotion])

  const mobileMenuVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }), [])

  return (
    <>
      <motion.nav
        ref={navRef}
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(100,100,100,0.3)] border-b border-gray-700/30"
            : "bg-black/60 backdrop-blur-md border-b border-gray-700/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative group rounded-lg flex items-center h-full"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setActiveSection('home')
                setIsOpen(false)
              }}
            >
              <motion.div
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#606060] via-[#808080] to-[#606060] bg-clip-text text-transparent"
              >
                  Jayesh Gondaliya
                <motion.span
                  className="inline-block ml-1 text-[#808080]"
                  animate={shouldReduceMotion ? {} : { rotate: [0, 360] }}
                  transition={shouldReduceMotion ? {} : { duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  
                </motion.span>
              </motion.div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex gap-1">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item}
                  custom={idx}
                  variants={itemVariants}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group overflow-hidden focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-black ${
                    activeSection === item.toLowerCase()
                      ? "text-white bg-gradient-to-r from-[#606060] to-[#808080] shadow-[0_0_20px_rgba(100,100,100,0.5)]"
                      : "text-white hover:text-[#909090]"
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                  {activeSection === item.toLowerCase() && !shouldReduceMotion && (
                    <motion.div 
                      layoutId="nav-underline" 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#606060] to-[#909090]" 
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.85 }}
              className="md:hidden text-[#808080] hover:text-white transition-all duration-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu - Separate from navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden fixed top-14 left-0 right-0 z-40 bg-black/98 backdrop-blur-xl border-b border-gray-700/30 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item}
                  custom={idx}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { backgroundColor: 'rgba(255,255,255,0.05)' }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.toLowerCase()
                      ? "text-white bg-gradient-to-r from-[#606060] to-[#808080]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
