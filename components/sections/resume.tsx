"use client"

import { motion } from "framer-motion"
import { Download, Eye } from "lucide-react"
import { useState } from "react"

const experience = [
  {
    role: "MERN & Python Developer Intern",
    company: "Sahil Infotech",
    period: "February 2025 - July 2025",
    description:
      "Full Stack Developer Intern at Sahil Infotech, gaining hands-on experience in frontend development, backend development, and Python fundamentals.",
  },
]

const education = [
  {
    degree: "Master of Computer Applications (MCA) - Pursuing",
    institution: "Sarvajanik College of Engineering & Technology | Surat",
    period: "July 2025 - Present",
    detail: "",
  },
  {
    degree: "Bachelor of Computer Applications (BCA) - Completed",
    institution: "Veer Narmad South Gujarat University | Surat",
    period: "July 2022 - February 2025",
    detail: "CGPA: 8.52 / 10",
  },
]

const skills = {
  "Languages": "JavaScript, Java, Python, C, C++",
  "Frameworks & Libraries": "React.js, Node.js, Express.js, Bootstrap, Socket.IO, JWT Authentication",
  "Tools": "Git, GitHub, Postman, MongoDB Compass",
  "Databases": "MongoDB, MySQL",
}

// PDF path - public/data folder ma thi
const PDF_PATH = "/data/Jayesh%20Gondaliya%20MCA%202027.pdf"

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false)

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = PDF_PATH
    link.download = "Jayesh_Gondaliya_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-24 bg-[#030014] border-t border-violet-500/10 relative overflow-hidden">
      {/* Background Glow Effects */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* ===== RESUME HEADER SECTION ===== */}
          <div className="flex flex-col lg:flex-row gap-16 mb-28 items-center">
            {/* Left - Resume Image Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/3 flex-shrink-0"
            >
              <div className="relative w-80 h-[500px] group cursor-pointer" onClick={() => setShowPreview(true)}>
                {/* Glow Ring */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-2xl border border-violet-500/20"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.img
                  whileHover={{ scale: 1.05, rotateZ: 1.5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  src="/images/resume.png"
                  alt="Jayesh Gondaliya Resume"
                  className="relative w-full h-full object-cover rounded-2xl border-2 border-violet-500/20 shadow-2xl shadow-violet-500/5 group-hover:border-violet-500/50 transition-all"
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                  whileHover={{ backdropFilter: "blur(4px)" }}
                >
                  <Eye className="w-12 h-12 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Resume Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                Professional{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
                  Resume
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed font-semibold">
                MERN Stack Developer with experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in REST APIs, authentication, and database management, with a passion for building scalable and user-friendly applications.
              </p>
              <div className="flex flex-wrap gap-5">
                <motion.button
                  onClick={() => setShowPreview(true)}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 40px rgba(139, 92, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-lg rounded-xl transition-all duration-300 cursor-pointer border border-violet-500/20 shadow-lg"
                >
                  <Eye size={22} />
                  Preview Resume
                </motion.button>
                <motion.button
                  onClick={handleDownloadResume}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 40px rgba(6, 182, 212, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 border border-cyan-500/30 text-cyan-300 font-bold text-lg rounded-xl bg-cyan-950/10 hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer hover:border-cyan-500/60"
                >
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Download size={22} />
                  </motion.span>
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* ===== EXPERIENCE & EDUCATION SECTION ===== */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-white text-center">
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
              Education
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 mb-8 border-b border-violet-500/10 pb-3">
                Work Experience
              </h3>
              <div className="space-y-6">
                {experience.map((job, idx) => (
                  <motion.div
                    key={job.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.03,
                      x: 8,
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-br from-[#0c0a24]/30 via-black to-[#050917]/20 border border-violet-500/15 rounded-xl p-6 hover:border-violet-500/40 transition-all cursor-pointer shadow-lg backdrop-blur-md"
                  >
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-violet-400">{job.role}</h4>
                    <p className="text-violet-400 text-sm font-semibold mb-2">{job.company}</p>
                    <p className="text-gray-500 text-sm mb-4 font-semibold">{job.period}</p>
                    <p className="text-gray-300 text-sm leading-relaxed font-semibold">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-8 border-b border-cyan-500/10 pb-3">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.03,
                      x: -8,
                      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-br from-[#0c0a24]/30 via-black to-[#050917]/20 border border-violet-500/15 rounded-xl p-6 hover:border-violet-500/40 transition-all cursor-pointer shadow-lg backdrop-blur-md"
                  >
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400">{edu.degree}</h4>
                    <p className="text-cyan-400 text-sm font-semibold mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-4 font-semibold">{edu.period}</p>
                    {edu.detail && (
                      <p className="text-gray-300 text-sm font-bold bg-cyan-950/20 border border-cyan-500/10 py-1.5 px-3 rounded-lg inline-block">
                        {edu.detail}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== SKILLS SECTION ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-8 border-b border-violet-500/10 pb-3">
              Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-gradient-to-br from-[#0c0a24]/30 via-black to-[#050917]/20 border border-violet-500/15 rounded-xl p-5 hover:border-violet-500/40 transition-all hover:shadow-lg hover:shadow-violet-500/5"
                >
                  <h4 className="text-violet-400 font-bold mb-2 text-sm uppercase tracking-wider">
                    {category}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{items}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ===== BOTTOM SPACER ===== */}
          <div className="h-8" />

        </motion.div>
      </div>

      {/* ===== PDF PREVIEW MODAL ===== */}
      {showPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setShowPreview(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-5xl w-full max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-violet-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 px-4 py-2 bg-violet-950/80 border border-violet-500/30 hover:bg-violet-900 text-white font-bold rounded-lg transition-colors z-10 shadow-lg cursor-pointer"
            >
              Close ✕
            </button>
            <iframe
              src={`${PDF_PATH}#toolbar=0`}
              className="w-full h-[85vh]"
              title="Resume Preview"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}