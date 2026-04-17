"use client"

import { motion } from "framer-motion"
import { ExternalLink, ChevronLeft, ChevronRight, Globe, Rocket, Sparkles } from "lucide-react"
import WordRevealAnimation from "../word-reveal-animation"
import { useRef, useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

// IMPORTANT: These CSS imports are REQUIRED for Swiper to work properly
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const projects = [
  {
    id: 1,
    title: "Foody - Food Ordering System",
    description:
      "Full-stack food ordering web application with responsive design, user authentication, and secure payment integration.",
    tech: ["Node.js", "Express", "React", "MongoDB", "Bootstrap"],
    liveLink: "https://food-frontend-kb1v.vercel.app/",
    image: "🍔",
    color: "from-green-800/20 to-green-900/20",
    status: "live",
  },
  {
    id: 2,
    title: "ZapChat - Chat Application",
    description:
      "Real-time chat application with private and group chat functionality, online/offline status, and typing indicators.",
    tech: ["Node.js", "React", "Socket.IO", "MongoDB", "TailwindCSS"],
    liveLink: null,
    image: "💬",
    color: "from-blue-800/20 to-blue-900/20",
    status: "coming-soon",
  },
  {
    id: 3,
    title: "Luxora - E-Commerce Platform",
    description:
      "Modern full-stack e-commerce web application with product management, shopping cart, and secure payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveLink: "https://luxora-frontend-psi.vercel.app/",
    image: "🛒",
    color: "from-purple-800/20 to-purple-900/20",
    status: "live",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function Projects() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (isHovering) {
        swiperRef.current.autoplay.stop()
      } else {
        swiperRef.current.autoplay.start()
      }
    }
  }, [isHovering])

  return (
    <section id="projects" className="py-20 bg-black border-t border-gray-800/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-gray-700/20 to-gray-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-gray-800/30 to-black rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-display">
            <WordRevealAnimation text="Featured Projects" className="block" />
          </h2>

          <motion.p 
            className="text-gray-400 text-lg mb-8" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.1, duration: 0.5 }} 
            viewport={{ once: true }}
          >
            <WordRevealAnimation
              text="Explore my latest full-stack projects including Food Ordering, Chat App, and E-Commerce platform"
              delay={0.2}
              staggerDelay={0.03}
            />
          </motion.p>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                onClick={() => swiperRef.current?.slidePrev()} 
                className="p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-white hover:border-gray-500 transition-all duration-200"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                onClick={() => swiperRef.current?.slideNext()} 
                className="p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-white hover:border-gray-500 transition-all duration-200"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
            <div className="text-gray-400 text-sm font-medium hidden md:block">Swipe or use arrows</div>
          </div>

          {/* Swiper Slider */}
          <div 
            onMouseEnter={() => setIsHovering(true)} 
            onMouseLeave={() => setIsHovering(false)}
          >
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay, Mousewheel]}
              spaceBetween={20}
              slidesPerView={1}
              speed={600}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 25 }
              }}
              pagination={{ 
                clickable: true, 
                dynamicBullets: true, 
                renderBullet: (index, className) => `<span class="${className} bg-gray-600 hover:bg-gray-400 transition-colors duration-200"></span>` 
              }}
              autoplay={{ 
                delay: 5000, 
                disableOnInteraction: false, 
                pauseOnMouseEnter: true 
              }}
              mousewheel={{ 
                forceToAxis: true, 
                sensitivity: 0.5 
              }}
              loop={true}
              grabCursor={true}
              className="projects-slider pb-12"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    // variants={cardVariants}
                    whileHover={{ y: -8 }} 
                    className="group bg-gradient-to-br from-gray-900/40 to-black border border-gray-700/30 rounded-xl overflow-hidden hover:border-gray-500/50 transition-all duration-300 flex flex-col h-full relative backdrop-blur-sm"
                  >
                    {/* Project Icon Section */}
                    <div className="bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50 h-32 flex items-center justify-center text-5xl border-b border-gray-700/30">
                      {project.image}
                    </div>

                    {/* Project Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2 py-1 bg-gray-900/50 border border-gray-700/50 text-gray-400 rounded text-xs font-medium transition-colors hover:border-gray-500"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-gray-900/50 border border-gray-700/50 text-gray-400 rounded text-xs font-medium">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Conditional Button - Live Demo or Launching Soon */}
                      {project.status === "live" && project.liveLink ? (
                        <motion.a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          whileHover={{ scale: 1.02 }} 
                          whileTap={{ scale: 0.98 }} 
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 text-green-400 hover:text-green-300 hover:border-green-500/60 transition-all duration-200 font-medium group/btn w-full"
                        >
                          <Globe size={16} className="group-hover/btn:rotate-12 transition-transform" />
                          <span>Live Demo</span>
                          <ExternalLink size={14} />
                        </motion.a>
                      ) : (
                        <motion.div
                          className="relative w-full"
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 2,
                            ease: "easeInOut"
                          }}
                        >
                          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 text-yellow-400 w-full cursor-default">
                            <Rocket size={16} />
                            <span>Launching Soon</span>
                            <Sparkles size={14} />
                          </div>
                          <div className="absolute -top-2 -right-2">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  )
}