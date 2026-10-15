```tsx
"use client"

import { motion } from "framer-motion"
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Globe,
  Rocket,
  Sparkles,
} from "lucide-react"
import WordRevealAnimation from "../word-reveal-animation"
import { useRef, useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

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
  {
    id: 4,
    title: "GraphQL Bookstore API",
    description:
      "Backend-only GraphQL API built with Node.js, Apollo Server, MongoDB, and Mongoose to fetch, add, and delete books.",
    tech: ["Node.js", "GraphQL", "Apollo Server", "MongoDB", "Mongoose"],
    liveLink:
      "https://github.com/JayeshGondaliya/graphQL_API_Example",
    image: "📚",
    color: "from-pink-800/20 to-purple-900/20",
    status: "github",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
}

export default function Projects() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (swiperRef.current?.autoplay) {
      if (isHovering) {
        swiperRef.current.autoplay.stop()
      } else {
        swiperRef.current.autoplay.start()
      }
    }
  }, [isHovering])

  return (
    <section
      id="projects"
      className="py-20 bg-black border-t border-gray-800/20 relative overflow-hidden"
    >
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
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-display">
            <WordRevealAnimation
              text="Featured Projects"
              className="block"
            />
          </h2>

          <motion.p
            className="text-gray-400 text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <WordRevealAnimation
              text="Explore my latest full-stack projects including Food Ordering, Chat App, E-Commerce, and GraphQL API"
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

            <div className="text-gray-400 text-sm font-medium hidden md:block">
              Swipe or use arrows
            </div>
          </div>

          {/* Projects Slider */}
          <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              modules={[Navigation, Pagination, Autoplay, Mousewheel]}
              spaceBetween={20}
              slidesPerView={1}
              speed={600}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 25 },
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                renderBullet: (index, className) =>
                  `<span class="${className} bg-gray-600 hover:bg-gray-400 transition-colors duration-200"></span>`,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              mousewheel={{
                forceToAxis: true,
                sensitivity: 0.5,
              }}
              loop={true}
              grabCursor={true}
              className="projects-slider pb-12"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id} className="h-auto">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    whileHover={{ y: -8 }}
                    className="group bg-gradient-to-br from-gray-900/40 to-black border border-gray-700/30 rounded-xl overflow-hidden hover:border-gray-500/50 transition-all duration-300 flex flex-col h-full relative backdrop-blur-sm"
                  >
                    {/* Project Icon */}
                    <div className="bg-gradient-to-br from-gray-900/50 via-black to-gray
