"use client"

import { motion } from "framer-motion"
import { Download, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect, useCallback } from "react"
import ImagePreviewModal from "../image-preview-modal"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"

const certificates = [
  {
    title: "Machine Learning Using Python",
    issuer: "SimpliLearn",
    icon: "🐍",
    imageUrl: "/images/1.jpg",
    downloadLink: "/images/1.jpg",
  },
  {
    title: "Gemini API by Google",
    issuer: "Udacity",
    icon: "🤖",
    imageUrl: "/images/2.jpg",
    downloadLink: "/images/2.jpg",
  },
  {
    title: "Fundamentals of AI and ML",
    issuer: "Amazon Web Services",
    icon: "🤖",
    imageUrl: "/images/fundamental-20of-20machine-20learning-20and-20artificial-20intelligence.jpg",
    downloadLink: "/images/fundamental-20of-20machine-20learning-20and-20artificial-20intelligence.jpg",
  },
  {
    title: "Foundation of Prompt Engineering",
    issuer: "Amazon Web Services",
    icon: "🎯",
    imageUrl: "/images/foundations-20of-20prompt-20engineering.jpg",
    downloadLink: "/images/foundations-20of-20prompt-20engineering.jpg",
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud & SimpliLearn",
    icon: "🌐",
    imageUrl: "/images/introduction-20to-20generative-20ai-20studio.jpg",
    downloadLink: "/images/introduction-20to-20generative-20ai-20studio.jpg",
  },
  {
    title: "Observing LLM Agents",
    issuer: "ACM India Council",
    icon: "🧠",
    imageUrl: "/images/observing-20llm-20agents.jpg",
    downloadLink: "/images/observing-20llm-20agents.jpg",
  },
  {
    title: "Python for Beginners",
    issuer: "SimpliLearn",
    icon: "🐍",
    imageUrl: "/images/python-20for-20beginners.jpg",
    downloadLink: "/images/python-20for-20beginners.jpg",
  },
]

export default function Certificates() {
  const [previewImage, setPreviewImage] = useState<{
    url: string
    title: string
    downloadUrl?: string
  } | null>(null)

  const swiperRef = useRef<any>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection Observer (unchanged)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  // Autoplay pause / resume (unchanged)
  useEffect(() => {
    if (!swiperRef.current) return
    isHovering ? swiperRef.current.autoplay.pause() : swiperRef.current.autoplay.resume()
  }, [isHovering])

  const handlePrev = useCallback(() => swiperRef.current?.slidePrev(), [])
  const handleNext = useCallback(() => swiperRef.current?.slideNext(), [])

  const handleDownloadCertificate = useCallback((url: string, title: string) => {
    const link = document.createElement("a")
    link.href = url
    link.download = `${title.replace(/\s+/g, "_")}_Certificate.jpg`
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  // Only easing improved (same animation)
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1], // smoother premium easing
      },
    },
  }

  // return (
  //   <section
  //     ref={sectionRef}
  //     className="py-16 bg-black relative overflow-hidden"
  //     style={{
  //       transform: "translateZ(0)",
  //       backfaceVisibility: "hidden",
  //       WebkitFontSmoothing: "antialiased",
  //     }}
  //   >
  //     {/* Static background */}
  //     <div className="absolute inset-0 pointer-events-none">
  //       <div className="absolute top-0 right-0 w-64 h-64 bg-gray-700/10 rounded-full blur-2xl" />
  //       <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-800/10 rounded-full blur-2xl" />
  //     </div>

  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={isVisible ? { opacity: 1, y: 0 } : {}}
  //         transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  //       >
  //         <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
  //           Certifications & Achievements
  //         </h2>

  //         {/* Navigation */}
  //         <div className="flex justify-end gap-2 mb-6">
  //           <button
  //             onClick={handlePrev}
  //             className="p-2 rounded-full bg-gray-900/80 border border-gray-700 text-white hover:border-gray-500 transition-colors"
  //           >
  //             <ChevronLeft size={20} />
  //           </button>
  //           <button
  //             onClick={handleNext}
  //             className="p-2 rounded-full bg-gray-900/80 border border-gray-700 text-white hover:border-gray-500 transition-colors"
  //           >
  //             <ChevronRight size={20} />
  //           </button>
  //         </div>

  //         {/* Swiper */}
  //         <div
  //           onMouseEnter={() => setIsHovering(true)}
  //           onMouseLeave={() => setIsHovering(false)}
  //           className="pb-10"
  //         >
  //           <Swiper
  //             onSwiper={(swiper) => (swiperRef.current = swiper)}
  //             modules={[Navigation, Pagination, Autoplay]}
  //             spaceBetween={20}
  //             slidesPerView={1}
  //             speed={650} // smoother slide
  //             breakpoints={{
  //               640: { slidesPerView: 1 },
  //               768: { slidesPerView: 2 },
  //               1024: { slidesPerView: 3 },
  //             }}
  //             pagination={{
  //               clickable: true,
  //               dynamicBullets: true,
  //               renderBullet: (_, className) =>
  //                 `<span class="${className} bg-gray-600"></span>`,
  //             }}
  //             autoplay={{
  //               delay: 4000,
  //               disableOnInteraction: false,
  //               pauseOnMouseEnter: true,
  //             }}
  //             loop
  //             grabCursor
  //             style={{
  //               transform: "translate3d(0,0,0)",
  //               willChange: "transform",
  //             }}
  //           >
  //             {certificates.map((cert) => (
  //               <SwiperSlide key={cert.title}>
  //                 <motion.div
  //                   variants={cardVariants}
  //                   initial="hidden"
  //                   animate={isVisible ? "visible" : "hidden"}
  //                   whileHover={{
  //                     y: -6,
  //                     transition: {
  //                       duration: 0.25,
  //                       ease: [0.22, 1, 0.36, 1],
  //                     },
  //                   }}
  //                   className="group bg-gray-900/30 border border-gray-700/30 rounded-xl overflow-hidden hover:border-gray-500/30 transition-all h-full flex flex-col will-change-transform"
  //                 >
  //                   <div
  //                     className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900/20 to-black cursor-pointer"
  //                     onClick={() =>
  //                       setPreviewImage({
  //                         url: cert.imageUrl,
  //                         title: cert.title,
  //                         downloadUrl: cert.downloadLink,
  //                       })
  //                     }
  //                   >
  //                     <img
  //                       src={cert.imageUrl}
  //                       alt={cert.title}
  //                       loading="lazy"
  //                       className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
  //                     />
  //                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  //                   </div>

  //                   <div className="p-5 flex flex-col flex-grow">
  //                     <div className="text-4xl mb-3">{cert.icon}</div>

  //                     <h3 className="text-white font-bold mb-2 text-sm leading-snug line-clamp-2">
  //                       {cert.title}
  //                     </h3>

  //                     <p className="text-gray-400 text-xs font-medium mb-4">
  //                       {cert.issuer}
  //                     </p>

  //                     <button
  //                       onClick={(e) => {
  //                         e.stopPropagation()
  //                         handleDownloadCertificate(cert.downloadLink, cert.title)
  //                       }}
  //                       className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800/50 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-all text-sm font-medium rounded-lg mt-auto"
  //                     >
  //                       <Download size={14} />
  //                       Download
  //                     </button>
  //                   </div>
  //                 </motion.div>
  //               </SwiperSlide>
  //             ))}
  //           </Swiper>
  //         </div>
  //       </motion.div>
  //     </div>

  //     <ImagePreviewModal
  //       isOpen={!!previewImage}
  //       onClose={() => setPreviewImage(null)}
  //       imageUrl={previewImage?.url || ""}
  //       title={previewImage?.title || ""}
  //       downloadUrl={previewImage?.downloadUrl}
  //     />
  //   </section>
  // )
}
